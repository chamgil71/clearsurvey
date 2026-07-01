from __future__ import annotations

import os
import re
import io
import sys
import json
import shutil
import contextlib
import threading
from pathlib import Path
from typing import Any, Optional
from datetime import datetime

from fastapi import BackgroundTasks, FastAPI, HTTPException, UploadFile, File, Form, Depends, Security, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import httpx
import yaml

import time

security = HTTPBearer(auto_error=False)

# 토큰 검증 캐시: { token_str: (expire_time, user_data) }
_token_cache: dict[str, tuple[float, dict]] = {}
TOKEN_CACHE_TTL = 300.0  # 5분 캐시

async def verify_supabase_token(
    credentials: Optional[HTTPAuthorizationCredentials] = Security(security),
    token: Optional[str] = Query(None, description="SSE logs stream token fallback")
) -> dict:
    """Supabase JWT 토큰을 실시간 검증합니다.
    
    로컬 환경(placeholder.supabase.co 등) 및 로컬 우회 토큰은 검증을 바이패스합니다.
    최근 검증된 토큰은 5분간 인메모리 캐시를 적용해 원격 API 호출을 최소화합니다.
    """
    supabase_url = os.environ.get("SUPABASE_URL", "https://placeholder.supabase.co")
    
    auth_token = None
    if credentials:
        auth_token = credentials.credentials
    elif token:
        auth_token = token

    # 로컬 개발 모드 및 우회 토큰 바이패스
    if not supabase_url or "placeholder" in supabase_url or auth_token == "local-dev-bypass-token":
        return {"user": "local_dev_user"}
        
    if not auth_token:
        raise HTTPException(
            status_code=401,
            detail="인증 자격 증명(Bearer Token)이 누락되었습니다."
        )

    # 1. 인메모리 캐시 조회
    now = time.time()
    if auth_token in _token_cache:
        expire_time, user_data = _token_cache[auth_token]
        if now < expire_time:
            return user_data
        else:
            _token_cache.pop(auth_token, None)
        
    headers = {
        "Authorization": f"Bearer {auth_token}",
        "apikey": os.environ.get("SUPABASE_ANON_KEY", "placeholder-anon-key")
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"{supabase_url}/auth/v1/user", headers=headers)
            if response.status_code != 200:
                raise HTTPException(
                    status_code=401,
                    detail="유효하지 않거나 만료된 Supabase 토큰입니다."
                )
            user_data = response.json()
            # 2. 캐시 등록 (5분간 유효)
            _token_cache[auth_token] = (now + TOKEN_CACHE_TTL, user_data)
            return user_data
        except httpx.RequestError as exc:
            raise HTTPException(
                status_code=503,
                detail=f"인증 서버와의 통신에 실패했습니다: {exc}"
            )


# Add project root to path for imports
BACKEND_ROOT = Path(__file__).parent.parent
sys.path.append(str(BACKEND_ROOT))

# 스토리지(데이터) 루트 및 프론트엔드 자산 루트 정의
STORAGE_ROOT = BACKEND_ROOT.parent / "storage"
FRONTEND_ROOT = BACKEND_ROOT.parent / "frontend"

from engine.config import SurveyConfig
from engine.pipeline import SurveyPipeline
from engine.analyzer import ExcelAnalyzer
from engine.config_excel import read_config_from_excel
from engine.exporter import export_to_json

app = FastAPI(title="Survey Engine v2 API Server", version="2.0.0")

# Enable CORS for local Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

_SAFE_NAME_RE = re.compile(r"^[a-zA-Z0-9_\-가-힣]{1,64}$")

# ── 파이프라인 잡 상태 저장소 ────────────────────────────────────────────────
# 프로젝트명을 키로 단순 in-memory 상태를 관리합니다.
# 재시작 시 초기화되며, 단일 서버 환경용입니다.
_pipeline_jobs: dict[str, dict] = {}
_pipeline_jobs_lock = threading.Lock()

_project_logs: dict[str, list[str]] = {}
_project_logs_lock = threading.Lock()


class LogStream(io.TextIOBase):
    def __init__(self, name: str):
        self.name = name

    def write(self, s: str) -> int:
        if s.strip():
            with _project_logs_lock:
                if self.name not in _project_logs:
                    _project_logs[self.name] = []
                for line in s.splitlines():
                    if line.strip():
                        _project_logs[self.name].append(line.strip())
        return len(s)


def _update_projects_manifest(project_name: str, file_name: str) -> None:
    """web/public/data/projects.json 매니페스트 파일을 동기화 및 자동 갱신합니다."""
    manifest_path = FRONTEND_ROOT / "public" / "data" / "projects.json"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    
    projects = []
    if manifest_path.exists():
        try:
            with open(manifest_path, encoding="utf-8") as f:
                projects = json.load(f)
        except Exception:
            projects = []
            
    # 기존 항목이 있으면 제거 (업데이트 대상)
    projects = [p for p in projects if p.get("id") != project_name]
    
    # 새 항목 추가 (기존 published 값 유지)
    existing = next((p for p in projects if p.get("id") == project_name), {})
    projects.append({
        "id": project_name,
        "name": project_name,
        "file": file_name,
        "updated": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "published": existing.get("published", False),
    })
    
    try:
        with open(manifest_path, "w", encoding="utf-8") as f:
            json.dump(projects, f, ensure_ascii=False, indent=2)
    except Exception as exc:
        print(f"[경고] projects.json 업데이트 실패: {exc}")


def _job_set(name: str, data: dict) -> None:
    with _pipeline_jobs_lock:
        _pipeline_jobs[name] = data


def _job_get(name: str) -> dict:
    with _pipeline_jobs_lock:
        return dict(_pipeline_jobs.get(name, {"status": "idle"}))


def _run_pipeline_background(name: str, cfg: "SurveyConfig", config_yaml: Path) -> None:
    """BackgroundTask: 파이프라인을 실행하고 상태를 갱신합니다."""
    with _project_logs_lock:
        _project_logs[name] = []
        _project_logs[name].append(f"[SYSTEM] 파이프라인 정제 가동 시작 (프로젝트: {name})")

    _job_set(name, {
        "status": "running",
        "started_at": datetime.now().isoformat(),
    })
    
    log_stream = LogStream(name)
    try:
        with contextlib.redirect_stdout(log_stream):
            pipeline = SurveyPipeline(cfg, config_path=config_yaml)
            save_path = pipeline.run()
            
        _job_set(name, {
            "status": "done",
            "cleaned_file": save_path.name,
            "output_dir": str(save_path.parent.relative_to(BACKEND_ROOT.parent)),
            "finished_at": datetime.now().isoformat(),
        })
        # 자동 퍼블리시 및 매니페스트 갱신 연동
        _update_projects_manifest(name, f"{name}_data.json")
        try:
            manifest_path = FRONTEND_ROOT / "public" / "data" / "projects.json"
            if manifest_path.exists():
                with open(manifest_path, encoding="utf-8") as f:
                    projects = json.load(f)
                for p in projects:
                    if p.get("id") == name:
                        p["published"] = True
                        break
                with open(manifest_path, "w", encoding="utf-8") as f:
                    json.dump(projects, f, ensure_ascii=False, indent=2)
        except Exception:
            pass

        with _project_logs_lock:
            _project_logs[name].append("[SUCCESS] 정제 프로세스 완료!")
    except Exception as exc:
        _job_set(name, {
            "status": "error",
            "detail": str(exc),
            "finished_at": datetime.now().isoformat(),
        })
        with _project_logs_lock:
            _project_logs[name].append(f"[ERROR] 파이프라인 실패: {exc}")


def _validate_project_name(name: str) -> None:
    """프로젝트 이름의 경로 순회·특수문자 삽입 공격을 방지합니다."""
    if not _SAFE_NAME_RE.match(name):
        raise HTTPException(
            status_code=400,
            detail="프로젝트 이름은 영문·숫자·한글·_·- 만 허용하며 최대 64자입니다.",
        )


def _safe_filename(filename: str) -> str:
    """업로드 파일명의 경로 순회(path traversal) 공격을 방지합니다."""
    # 경로 구분자 제거 후 위험 문자를 _ 로 치환
    name = Path(filename).name          # 디렉터리 부분 제거
    name = re.sub(r"[^\w\-.]", "_", name)   # 안전한 문자만 허용
    if not name or name.startswith("."):
        name = "upload_" + name.lstrip(".")
    return name


def _get_project_dir(name: str) -> Path:
    proj_dir = STORAGE_ROOT / "projects" / name
    return proj_dir

# ── API Endpoints ──────────────────────────────────────────────────────────

@app.get("/api/projects")
def list_projects(user: dict = Depends(verify_supabase_token)):
    """웹 대시보드 프로젝트 목록 및 현황을 리턴합니다."""
    manifest_path = FRONTEND_ROOT / "public" / "data" / "projects.json"
    if manifest_path.exists():
        try:
            with open(manifest_path, encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
            
    # Fallback: projects 폴더 스캔
    proj_root = STORAGE_ROOT / "projects"
    if not proj_root.exists():
        return []
    
    projects = []
    for p in sorted(proj_root.iterdir()):
        if p.is_dir():
            config_json = p / f"{p.name}_config.json"
            updated = ""
            if config_json.exists():
                updated = datetime.fromtimestamp(config_json.stat().st_mtime).strftime("%Y-%m-%d %H:%M")
            projects.append({
                "id": p.name,
                "name": p.name,
                "file": f"{p.name}_data.json",
                "updated": updated
            })
    return projects


@app.post("/api/projects/create")
async def create_project(
    name: str = Form(...),
    file: UploadFile = File(...),
    user: dict = Depends(verify_supabase_token)
):
    """신규 설문 엑셀 파일을 업로드하고 설문 분석 및 draft 프로젝트를 생성합니다."""
    name = name.strip()
    if not name:
        raise HTTPException(status_code=400, detail="프로젝트 이름이 필요합니다.")

    # ── 보안 검증 ──────────────────────────────────────────────────────────
    _validate_project_name(name)

    safe_fname = _safe_filename(file.filename or "upload.xlsx")
    # xlsx / xls 확장자만 허용
    if not safe_fname.lower().endswith((".xlsx", ".xls")):
        raise HTTPException(status_code=400, detail="xlsx 또는 xls 파일만 업로드할 수 있습니다.")

    storage_dir = STORAGE_ROOT / "raw"
    storage_dir.mkdir(parents=True, exist_ok=True)

    # Save uploaded raw file (sanitized filename)
    raw_file_path = storage_dir / safe_fname
    with open(raw_file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    # Prepare project directory
    proj_dir = _get_project_dir(name)
    if proj_dir.exists():
        # Overwrite/re-use directory
        pass
    else:
        proj_dir.mkdir(parents=True, exist_ok=True)
    (proj_dir / "output").mkdir(exist_ok=True)
    
    # Run analyzer
    try:
        analyzer = ExcelAnalyzer(raw_file_path)
        detection = analyzer.analyze()
        
        # Save draft excel config
        draft_path = proj_dir / f"draft_{raw_file_path.stem}.xlsx"
        analyzer.generate_draft_xlsx(draft_path, project_name=name)
        
        # Save config.yaml
        config_path = proj_dir / "config.yaml"
        # Relative path from config.yaml to raw source file
        import os
        rel_src = os.path.relpath(
            raw_file_path.resolve(),
            config_path.parent.resolve()
        ).replace("\\", "/")
            
        analyzer.generate_config_yaml(
            config_path,
            project_name=name,
            source_override=rel_src
        )
        
        # style.yaml 복사 — 우선순위:
        #   1) config/default_style.yaml  (공통 기본값)
        #   2) 빈 파일 생성
        default_style = BACKEND_ROOT / "config" / "default_style.yaml"
        dest_style = proj_dir / "style.yaml"
        if default_style.exists():
            shutil.copy2(default_style, dest_style)
        else:
            dest_style.write_text("# style.yaml — 스타일 설정\n", encoding="utf-8")
            
        _update_projects_manifest(name, f"{name}_data.json")
            
        return {
            "status": "success",
            "project": name,
            "header_row": detection["header_row"],
            "data_start_row": detection["data_start_row"],
            "column_count": detection["column_count"],
            "draft_path": str(draft_path.relative_to(BACKEND_ROOT.parent))
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"설문 분석 및 프로젝트 생성 실패: {exc}")


@app.post("/api/projects/create-merge")
async def create_merge_project(
    name: str = Form(...),
    files: list[UploadFile] = File(...),
    options: str = Form(...),  # JSON string
    user: dict = Depends(verify_supabase_token)
):
    """복수의 설문 엑셀 파일을 업로드 및 병합하고, draft 프로젝트를 생성합니다."""
    name = name.strip()
    if not name:
        raise HTTPException(status_code=400, detail="프로젝트 이름이 필요합니다.")

    # 1. 보안 검증
    _validate_project_name(name)

    if not files or len(files) < 2:
        raise HTTPException(status_code=400, detail="병합을 위해 최소 2개 이상의 파일이 필요합니다.")

    # options JSON 파싱
    try:
        opts = json.loads(options)
    except Exception:
        raise HTTPException(status_code=400, detail="올바르지 않은 병합 설정(options) 포맷입니다.")

    # 파일 저장용 디렉토리 생성
    storage_dir = STORAGE_ROOT / "raw"
    storage_dir.mkdir(parents=True, exist_ok=True)

    saved_paths: list[Path] = []
    for f in files:
        safe_fname = _safe_filename(f.filename or "upload.xlsx")
        if not safe_fname.lower().endswith((".xlsx", ".xls")):
            raise HTTPException(status_code=400, detail="xlsx 또는 xls 파일만 업로드할 수 있습니다.")
        
        # 파일 중복 덮어쓰기 방지를 위한 파일별 격리 저장
        proj_raw_dir = storage_dir / name
        proj_raw_dir.mkdir(parents=True, exist_ok=True)
        raw_file_path = proj_raw_dir / safe_fname
        
        with open(raw_file_path, "wb") as buffer:
            shutil.copyfileobj(f.file, buffer)
        saved_paths.append(raw_file_path)

    # 2. Merger 동작
    try:
        from engine.merger import DataMerger
        from engine.config import MergeConfig, MergeSource, DedupConfig, MergeOutputConfig

        # MergeConfig 빌드
        sources = [
            MergeSource(
                path=str(p.resolve()),
                sheet=None,
                header_row=1,
                column_mapping={}
            )
            for p in saved_paths
        ]
        
        dedup_strategy = opts.get("dedup_strategy", "none")
        key_cols = opts.get("key_cols", [])
        add_source_col = opts.get("add_source_col", True)
        source_col_name = opts.get("source_col_name", "_출처파일")
        
        merge_cfg = MergeConfig(
            sources=sources,
            dedup=DedupConfig(strategy=dedup_strategy, key_cols=key_cols),
            output=MergeOutputConfig(add_source_col=add_source_col, source_col_name=source_col_name)
        )
        
        merger = DataMerger(merge_cfg)
        merged_df = merger.run()
        
        if merged_df.empty:
            raise ValueError("병합된 데이터가 비어 있습니다. 파일 구성을 확인하십시오.")

        # 병합 결과 엑셀 저장
        merged_file_path = storage_dir / f"{name}_merged.xlsx"
        merged_df.to_excel(merged_file_path, index=False)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"데이터 파일 병합 실패: {exc}")

    # 3. 분석 및 프로젝트 드래프트 생성
    try:
        # Prepare project directory
        proj_dir = _get_project_dir(name)
        proj_dir.mkdir(parents=True, exist_ok=True)
        (proj_dir / "output").mkdir(exist_ok=True)

        analyzer = ExcelAnalyzer(merged_file_path)
        detection = analyzer.analyze()
        
        # Save draft excel config
        draft_path = proj_dir / f"draft_{name}_merged.xlsx"
        analyzer.generate_draft_xlsx(draft_path, project_name=name)
        
        # Save config.yaml
        config_path = proj_dir / "config.yaml"
        # Relative path from config.yaml to merged source file
        import os
        rel_src = os.path.relpath(
            merged_file_path.resolve(),
            config_path.parent.resolve()
        ).replace("\\", "/")
        
        # MergeConfig를 설정 파일에 함께 주입하여 저장
        # sources 경로를 config.yaml 기준 상대경로로 변환하여 저장
        rel_sources = []
        for p in saved_paths:
            rel_p = os.path.relpath(p.resolve(), config_path.parent.resolve()).replace("\\", "/")
            rel_sources.append(MergeSource(
                path=rel_p,
                sheet=None,
                header_row=1,
                column_mapping={}
            ))
            
        rel_merge_cfg = MergeConfig(
            sources=rel_sources,
            dedup=DedupConfig(strategy=dedup_strategy, key_cols=key_cols),
            output=MergeOutputConfig(add_source_col=add_source_col, source_col_name=source_col_name)
        )
        
        analyzer.generate_config_yaml(
            config_path,
            project_name=name,
            source_override=rel_src
        )

        # config.yaml에 merge 속성 수동 추가 주입 (analyzer.py 수정 방어)
        if config_path.exists():
            with open(config_path, "r", encoding="utf-8") as f:
                cfg_dict = yaml.safe_load(f) or {}
            cfg_dict["merge"] = rel_merge_cfg.model_dump(exclude_none=True)
            with open(config_path, "w", encoding="utf-8") as f:
                yaml.dump(cfg_dict, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
        
        # style.yaml 복사
        default_style = BACKEND_ROOT / "config" / "default_style.yaml"
        dest_style = proj_dir / "style.yaml"
        if default_style.exists():
            shutil.copy2(default_style, dest_style)
        else:
            dest_style.write_text("# style.yaml — 스타일 설정\n", encoding="utf-8")
            
        _update_projects_manifest(name, f"{name}_data.json")
            
        return {
            "status": "success",
            "project": name,
            "header_row": detection["header_row"],
            "data_start_row": detection["data_start_row"],
            "column_count": detection["column_count"],
            "draft_path": str(draft_path.relative_to(BACKEND_ROOT.parent)),
            "merged_path": str(merged_file_path.relative_to(BACKEND_ROOT.parent))
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"병합 후 분석 및 프로젝트 생성 실패: {exc}")


@app.get("/api/projects/{name}/config")
def get_project_config(name: str, user: dict = Depends(verify_supabase_token)):
    """프로젝트의 SurveyConfig 및 dashboard.json 설정을 로드합니다."""
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")
        
    config_yaml = proj_dir / "config.yaml"
    config_data = {}
    
    if config_yaml.exists():
        try:
            with open(config_yaml, encoding="utf-8") as f:
                config_data = yaml.safe_load(f)
        except Exception as exc:
            raise HTTPException(status_code=500, detail=f"config.yaml 로드 실패: {exc}")
    else:
        # Fallback: draft xlsx 가 있으면 excel config 읽기
        drafts = list(proj_dir.glob("draft_*.xlsx"))
        if drafts:
            try:
                cfg = read_config_from_excel(drafts[0])
                config_data = cfg.model_dump(exclude_none=True)
            except Exception as exc:
                raise HTTPException(status_code=500, detail=f"Excel Config 로드 실패: {exc}")
        else:
            raise HTTPException(status_code=404, detail="프로젝트 설정 파일(config.yaml)이 존재하지 않습니다.")

    # Load dashboard.json if exists (None if missing)
    dashboard_json = proj_dir / "dashboard.json"
    dashboard_data: dict | None = None
    if dashboard_json.exists():
        try:
            with open(dashboard_json, encoding="utf-8") as f:
                dashboard_data = json.load(f)
        except Exception:
            pass

    return {
        "config": config_data,
        "dashboard": dashboard_data
    }


@app.post("/api/projects/{name}/config")
async def save_project_config(name: str, payload: dict, user: dict = Depends(verify_supabase_token)):
    """프로젝트의 SurveyConfig 및 dashboard.json 설정을 웹에서 편집 후 저장합니다."""
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")
        
    config_data = payload.get("config")
    dashboard_data = payload.get("dashboard")
    
    if not config_data:
        raise HTTPException(status_code=400, detail="설정(config) 데이터가 비어 있습니다.")
        
    # Save config.yaml
    config_yaml = proj_dir / "config.yaml"
    try:
        # Validate Pydantic model to ensure correctness
        SurveyConfig.model_validate(config_data)
        
        with open(config_yaml, "w", encoding="utf-8") as f:
            yaml.dump(config_data, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"config.yaml 검증 및 저장 실패: {exc}")
        
    # Save dashboard.json
    if dashboard_data is not None:
        dashboard_json = proj_dir / "dashboard.json"
        try:
            with open(dashboard_json, "w", encoding="utf-8") as f:
                json.dump(dashboard_data, f, ensure_ascii=False, indent=2)
        except Exception as exc:
            raise HTTPException(status_code=500, detail=f"dashboard.json 저장 실패: {exc}")
            
    return {"status": "success"}


@app.post("/api/projects/{name}/preview")
async def preview_project_config(name: str, user: dict = Depends(verify_supabase_token)):
    """설정한 규칙을 원본 상위 5개 행에 테스트 적용하여 변환 결과를 미리보기합니다."""
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")
        
    config_path = proj_dir / "config.yaml"
    if not config_path.exists():
        raise HTTPException(status_code=404, detail="정제 설정 파일(config.yaml)이 존재하지 않습니다.")
        
    try:
        with open(config_path, encoding="utf-8") as f:
            raw_data = yaml.safe_load(f)
        cfg = SurveyConfig.model_validate(raw_data)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"설정 파일 파싱 실패: {exc}")
        
    src_file_val = cfg.source.file or ""
    fname = Path(src_file_val).name
    
    input_file = STORAGE_ROOT / "raw" / fname
    if not input_file.exists() and proj_dir:
        input_file = proj_dir / src_file_val
    if not input_file.exists() and proj_dir:
        input_file = proj_dir.parent.parent / "raw" / fname
        
    if not input_file.exists():
        raise HTTPException(status_code=400, detail=f"원본 엑셀 파일을 찾을 수 없습니다: {src_file_val}")
        
    try:
        import pandas as pd
        from engine.pipeline import SurveyPipeline, _build_registry
        
        # header_row (1-based to 0-based)
        header_row = cfg.source.header_row - 1
        if header_row < 0:
            header_row = 0
            
        sheet_to_read = cfg.source.sheet if cfg.source.sheet is not None else 0
        df_raw = pd.read_excel(
            input_file, 
            sheet_name=sheet_to_read,
            header=header_row
        ).head(5)
        df_raw = df_raw.fillna("")
        
        pipeline = SurveyPipeline(cfg, config_path=config_path)
        registry = _build_registry(cfg)
        preview_rows = []
        
        for _, row in df_raw.iterrows():
            raw_vals = {}
            cleaned_vals = {}
            for col_def in cfg.columns:
                out_col = col_def.output_col
                
                source_val = ""
                if col_def.source_col is not None:
                    s_idx = col_def.source_col - 1
                    if 0 <= s_idx < len(row):
                        source_val = row.iloc[s_idx]
                
                raw_vals[out_col] = str(source_val)
                
                if col_def.transform == "exclude":
                    cleaned_vals[out_col] = "(출력 제외됨)"
                    continue
                    
                cleaned_val = source_val
                if col_def.transform:
                    tf_fn = registry.get(col_def.transform)
                    if tf_fn:
                        kwargs = {}
                        if col_def.flag_keyword:
                            kwargs["flag_keyword"] = col_def.flag_keyword
                        if col_def.backup_col is not None:
                            b_idx = col_def.backup_col - 1
                            if 0 <= b_idx < len(row):
                                kwargs["backup_val"] = row.iloc[b_idx]
                        cleaned_val = tf_fn(source_val, **kwargs)
                
                cleaned_vals[out_col] = str(cleaned_val) if cleaned_val is not None else ""
                
            preview_rows.append({
                "raw": raw_vals,
                "cleaned": cleaned_vals
            })
            
        return {"status": "success", "preview": preview_rows}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"미리보기 가공 실패: {exc}")


@app.post("/api/projects/{name}/run")
async def run_project_pipeline(name: str, background_tasks: BackgroundTasks, user: dict = Depends(verify_supabase_token)):
    """파이프라인을 백그라운드로 실행하고 즉시 반환합니다.

    대용량 파일도 HTTP 타임아웃 없이 처리합니다.
    진행 상태는 GET /api/projects/{name}/status 로 폴링하세요.
    """
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")

    # 이미 실행 중이면 409 Conflict
    current = _job_get(name)
    if current.get("status") == "running":
        raise HTTPException(
            status_code=409,
            detail="이미 파이프라인이 실행 중입니다. 완료 후 재시도하세요.",
        )

    config_yaml = proj_dir / "config.yaml"
    if not config_yaml.exists():
        raise HTTPException(status_code=404, detail="config.yaml 설정 파일이 없습니다.")

    try:
        with open(config_yaml, encoding="utf-8") as f:
            raw = yaml.safe_load(f)
        cfg = SurveyConfig.model_validate(raw)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"설정 로드 실패: {exc}")

    background_tasks.add_task(_run_pipeline_background, name, cfg, config_yaml)
    return {"status": "started"}


@app.get("/api/projects/{name}/status")
def get_pipeline_status(name: str, user: dict = Depends(verify_supabase_token)):
    """파이프라인 실행 상태를 반환합니다.

    status 값:
      "idle"    — 실행 이력 없음 (또는 서버 재시작 후)
      "running" — 실행 중
      "done"    — 완료 (cleaned_file, output_dir 포함)
      "error"   — 실패 (detail 포함)
    """
    _validate_project_name(name)
    return _job_get(name)


@app.post("/api/projects/{name}/export")
def export_project_json(name: str, user: dict = Depends(verify_supabase_token)):
    """정제된 엑셀을 웹 대시보드용 JSON 데이터로 내보냅니다."""
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")
        
    config_yaml = proj_dir / "config.yaml"
    if not config_yaml.exists():
        raise HTTPException(status_code=404, detail="config.yaml 설정 파일이 없습니다.")
        
    try:
        with open(config_yaml, encoding="utf-8") as f:
            raw = yaml.safe_load(f)
        cfg = SurveyConfig.model_validate(raw)
        
        # Find cleaned xlsx path
        out_dir = Path(cfg.paths.output_dir)
        if not out_dir.is_absolute():
            out_dir = proj_dir / out_dir
        xlsx_path = out_dir / cfg.paths.output_file
        
        if not xlsx_path.exists():
            raise HTTPException(status_code=400, detail=f"정제 엑셀 파일이 없습니다. 먼저 '실행(run)'을 수행하세요.")
            
        # Export: 1. 프로젝트 폴더 내부에 원본 JSON 저장
        proj_json_path = proj_dir / f"{cfg.project}_data.json"
        export_to_json(xlsx_path, cfg, output_path=proj_json_path, project_dir=proj_dir)
        
        # Export: 2. 프론트엔드 서빙 배포 폴더로 복사
        dest_dir = FRONTEND_ROOT / "public" / "data"
        dest_dir.mkdir(parents=True, exist_ok=True)
        json_path = dest_dir / f"{cfg.project}_data.json"
        shutil.copy2(proj_json_path, json_path)
        
        _update_projects_manifest(cfg.project, json_path.name)
        
        return {
            "status": "success",
            "json_file": json_path.name
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"대시보드 내보내기 실패: {exc}")


@app.get("/api/projects/{name}/download")
def download_cleaned_xlsx(name: str, user: dict = Depends(verify_supabase_token)):
    """정제 완료된 결과 엑셀 파일을 다운로드합니다."""
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")
        
    config_yaml = proj_dir / "config.yaml"
    if not config_yaml.exists():
        raise HTTPException(status_code=404, detail="config.yaml 설정 파일이 없습니다.")
        
    try:
        with open(config_yaml, encoding="utf-8") as f:
            raw = yaml.safe_load(f)
        cfg = SurveyConfig.model_validate(raw)
        
        out_dir = Path(cfg.paths.output_dir)
        if not out_dir.is_absolute():
            out_dir = proj_dir / out_dir
        xlsx_path = out_dir / cfg.paths.output_file
        
        if not xlsx_path.exists():
            raise HTTPException(status_code=404, detail="결과 엑셀 파일이 존재하지 않습니다. 먼저 정제를 실행하세요.")
            
        return FileResponse(
            path=xlsx_path,
            filename=xlsx_path.name,
            media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"다운로드 실패: {exc}")


@app.get("/api/health")
def health_check():
    """백엔드 생존 상태를 확인합니다."""
    return {"status": "ok", "time": datetime.now().isoformat()}


@app.get("/api/projects/{name}/logs/stream")
async def stream_project_logs(name: str, user: dict = Depends(verify_supabase_token)):
    """실시간으로 파이프라인 실행 로그를 EventSource(SSE) 형태로 스트리밍합니다."""
    _validate_project_name(name)
    from fastapi.responses import StreamingResponse
    import asyncio
    
    async def log_generator():
        last_idx = 0
        while True:
            job = _job_get(name)
            
            with _project_logs_lock:
                logs = _project_logs.get(name, [])
                
            if last_idx < len(logs):
                for i in range(last_idx, len(logs)):
                    yield f"data: {logs[i]}\n\n"
                last_idx = len(logs)
                
            if job.get("status") in ("done", "error") and last_idx >= len(logs):
                yield "data: [SYSTEM] 프로세스가 종료되었습니다.\n\n"
                break
                
            await asyncio.sleep(0.5)
            
    return StreamingResponse(log_generator(), media_type="text/event-stream")


@app.patch("/api/projects/{name}/publish")
async def set_publish_status(name: str, body: dict, user: dict = Depends(verify_supabase_token)):
    """프로젝트 웹 게시 상태를 업데이트합니다."""
    _validate_project_name(name)
    published = bool(body.get("published", False))

    manifest_path = FRONTEND_ROOT / "public" / "data" / "projects.json"
    if not manifest_path.exists():
        raise HTTPException(status_code=404, detail="projects.json 파일이 없습니다.")

    with open(manifest_path, encoding="utf-8") as f:
        projects = json.load(f)

    updated = False
    for p in projects:
        if p.get("id") == name:
            p["published"] = published
            updated = True
            break

    if not updated:
        raise HTTPException(status_code=404, detail=f"프로젝트 '{name}'을 찾을 수 없습니다.")

    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(projects, f, ensure_ascii=False, indent=2)

    return {"status": "ok", "project": name, "published": published}


@app.get("/api/projects/{name}/export-html")
def export_project_html(name: str, token: str | None = None, user: dict = Depends(verify_supabase_token)):
    """프로젝트 데이터를 담은 오프라인 단독 실행형(Self-contained) HTML 보고서를 컴파일하여 다운로드합니다."""
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")

    # 1. 엑셀 정제 JSON 데이터 긁어오기 (exporter.py 호출)
    try:
        from engine.exporter import export_to_json
        from engine.config import SurveyConfig
        import yaml
        
        config_path = proj_dir / "config.yaml"
        if not config_path.exists():
            raise FileNotFoundError("프로젝트 설정 파일(config.yaml)이 존재하지 않습니다.")
            
        with open(config_path, encoding="utf-8") as f:
            cfg_dict = yaml.safe_load(f)
        cfg = SurveyConfig.model_validate(cfg_dict)
        
        cleaned_file_path = proj_dir / "output" / cfg.paths.output_file
        if not cleaned_file_path.exists():
            raise FileNotFoundError("정제된 결과 엑셀 파일이 존재하지 않습니다. 파이프라인을 먼저 기동하십시오.")
            
        data = export_to_json(
            cleaned_xlsx=cleaned_file_path,
            cfg=cfg,
            project_dir=proj_dir
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"데이터 익스포트 실패: {e}")

    # 2. 단독 HTML 템플릿 생성
    html_content = _build_single_html_template(name, data)

    # 3. HTML 파일 다운로드 반환
    from fastapi.responses import StreamingResponse
    import io
    
    bio = io.BytesIO(html_content.encode("utf-8"))
    return StreamingResponse(
        bio,
        media_type="text/html",
        headers={
            "Content-Disposition": f"attachment; filename={name}_report.html",
            "Content-Type": "text/html; charset=utf-8"
        }
    )


def _build_single_html_template(project_name: str, data: dict) -> str:
    import json
    data_json = json.dumps(data, ensure_ascii=False)
    
    html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{project_name} - 설문 데이터 정제 보고서</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- SheetJS (XLSX) -->
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@300;400;600;700&display=swap');
    body {{
      font-family: 'Inter', 'Outfit', -apple-system, sans-serif;
      background-color: #f8fafc;
    }}
  </style>
</head>
<body class="p-6 md:p-8">
  <div class="max-w-7xl mx-auto space-y-6">
    <!-- 헤더 -->
    <header class="flex flex-col md:flex-row md:items-center justify-between bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm gap-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold bg-primary/10 text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">독립 보고서</span>
          <span class="text-xs text-slate-400">오프라인 구동 가능</span>
        </div>
        <h1 class="text-2xl font-extrabold text-slate-800 mt-1">{project_name} 대시보드 리포트</h1>
        <p class="text-xs text-slate-500 mt-0.5">정제 일시: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</p>
      </div>
      <div>
        <button onclick="exportToCSV()" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-1.5">
          💾 현재 필터링 목록 다운로드 (CSV)
        </button>
      </div>
    </header>

    <!-- KPI 스탯 영역 -->
    <div id="kpi-container" class="grid grid-cols-2 md:grid-cols-4 gap-4"></div>

    <!-- 필터 및 검색바 -->
    <div class="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
      <div class="flex flex-col md:flex-row md:items-center gap-4">
        <!-- 키워드 전체 검색 -->
        <div class="flex-1">
          <label class="block text-xs font-bold text-slate-500 mb-1.5">🔍 키워드 검색 (기관명, GPU종류, 지역 등)</label>
          <input type="text" id="search-input" oninput="handleFilterChange()" placeholder="검색어를 입력하세요..." class="w-full h-10 px-3 border border-slate-200 rounded-xl text-xs bg-slate-50/50 focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all">
        </div>
        <!-- 동적 필터바 영역 -->
        <div id="filters-container" class="flex flex-wrap items-center gap-3"></div>
      </div>
    </div>

    <!-- 차트 그리드 영역 -->
    <div id="charts-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>

    <!-- 데이터 목록 뷰 -->
    <div class="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between border-b pb-4">
        <h2 class="text-sm font-bold text-slate-800 flex items-center gap-1.5">
          📋 데이터 목록 표 <span id="table-count" class="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-medium">0건</span>
        </h2>
      </div>
      <div class="overflow-x-auto border border-slate-100 rounded-xl">
        <table class="w-full text-xs text-left">
          <thead class="bg-slate-50 text-slate-500 uppercase font-semibold border-b border-slate-100" id="table-head"></thead>
          <tbody class="divide-y divide-slate-100 text-slate-700" id="table-body"></tbody>
        </table>
      </div>
      <!-- 페이지네이션 -->
      <div class="flex items-center justify-between text-xs pt-2">
        <span id="pagination-info" class="text-slate-400"></span>
        <div class="flex items-center gap-2">
          <button onclick="prevPage()" id="prev-btn" class="px-3 py-1.5 border rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent">이전</button>
          <button onclick="nextPage()" id="next-btn" class="px-3 py-1.5 border rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent">다음</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 데이터 및 자바스크립트 로직 주입 -->
  <script>
    const data = {data_json};
    let currentFilters = {{}};
    let searchTerm = "";
    let filteredRows = [...data.rows];
    let currentPage = 1;
    const pageSize = 15;
    let chartInstances = [];

    // 초기화 함수
    window.onload = function() {{
      initFilters();
      updateDashboard();
    }};

    // 1. 필터바 생성
    function initFilters() {{
      const container = document.getElementById("filters-container");
      container.innerHTML = "";
      
      const filterCols = data.dashboard?.list?.filter_cols || [];
      filterCols.forEach(col => {{
        const uniqueVals = data.aggregates?.[col] ? Object.keys(data.aggregates[col]) : [];
        if (uniqueVals.length === 0) return;
        
        const div = document.createElement("div");
        div.className = "flex flex-col min-w-[140px]";
        
        const label = document.createElement("label");
        label.className = "text-[10px] font-bold text-slate-400 mb-1";
        label.innerText = col;
        
        const select = document.createElement("select");
        select.className = "h-10 px-3 border border-slate-200 rounded-xl text-xs bg-white outline-none cursor-pointer focus:ring-1 focus:ring-blue-500 shadow-sm";
        select.onchange = (e) => {{
          if (e.target.value) {{
            currentFilters[col] = e.target.value;
          }} else {{
            delete currentFilters[col];
          }}
          handleFilterChange();
        }};
        
        const defOpt = document.createElement("option");
        defOpt.value = "";
        defOpt.innerText = `— 전체 —`;
        select.appendChild(defOpt);
        
        uniqueVals.forEach(val => {{
          const opt = document.createElement("option");
          opt.value = val;
          opt.innerText = val;
          select.appendChild(opt);
        }});
        
        div.appendChild(label);
        div.appendChild(select);
        container.appendChild(div);
      }});
    }}

    // 2. 필터/검색 변경 이벤트 핸들러
    function handleFilterChange() {{
      searchTerm = document.getElementById("search-input").value.trim().toLowerCase();
      
      filteredRows = data.rows.filter(row => {{
        // 전체 텍스트 검색 검증
        if (searchTerm) {{
          const matchesSearch = Object.values(row).some(v => 
            v !== null && String(v).toLowerCase().includes(searchTerm)
          );
          if (!matchesSearch) return false;
        }}
        
        // 드롭다운 필터 검증
        for (const [col, filterVal] of Object.entries(currentFilters)) {{
          const rowVal = String(row[col] ?? "").trim();
          if (rowVal !== filterVal) return false;
        }}
        
        return true;
      }});
      
      currentPage = 1;
      updateDashboard();
    }}

    // 3. 대시보드 통합 리렌더링
    function updateDashboard() {{
      renderKPIs();
      renderCharts();
      renderTable();
    }}

    // 4. KPI 요약 카드 렌더링
    function renderKPIs() {{
      const container = document.getElementById("kpi-container");
      container.innerHTML = "";
      
      const kpis = data.dashboard?.kpi || [];
      kpis.forEach(k => {{
        let value = 0;
        let unit = "건";
        
        if (k.type === "total_rows") {{
          value = filteredRows.length;
        }} else if (k.type === "count_value") {{
          const valPattern = String(k.value ?? "").trim();
          value = filteredRows.filter(r => {{
            const cellStr = String(r[k.col] ?? "").trim();
            if (valPattern.startsWith("<>") || valPattern.startsWith("!=")) {{
              const clean = valPattern.replace("<>", "").replace("!=", "").trim();
              return cellStr !== clean;
            }}
            if (valPattern.startsWith("*") && valPattern.endsWith("*")) {{
              return cellStr.includes(valPattern.slice(1, -1));
            }}
            return cellStr === valPattern;
          }}).length;
        }} else if (k.type === "sum") {{
          value = filteredRows.reduce((acc, r) => acc + (Number(r[k.col]) || 0), 0);
          unit = "";
        }}
        
        const card = document.createElement("div");
        card.className = "bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm";
        card.innerHTML = `
          <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${{k.label}}</div>
          <div class="text-xl font-extrabold text-slate-800 mt-2">${{value.toLocaleString()}} <span class="text-xs font-semibold text-slate-500">${{unit}}</span></div>
        `;
        container.appendChild(card);
      }});
    }}

    // 5. Chart.js 시각화 렌더링
    function renderCharts() {{
      const grid = document.getElementById("charts-grid");
      
      // 차트가 최초 생성되는 시점에만 Canvas 세팅
      if (grid.innerHTML === "") {{
        const charts = data.dashboard?.charts || [];
        charts.forEach((c, idx) => {{
          const card = document.createElement("div");
          card.className = "bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-3";
          card.innerHTML = `
            <h3 class="text-xs font-bold text-slate-500">${{c.title || c.col}}</h3>
            <div class="h-60 flex items-center justify-center">
              <canvas id="chart-canvas-${{idx}}"></canvas>
            </div>
          `;
          grid.appendChild(card);
          
          // Chart.js 인스턴스 생성
          const ctx = document.getElementById(`chart-canvas-${{idx}}`).getContext("2d");
          const chartInst = new Chart(ctx, {{
            type: c.type === "donut" ? "doughnut" : "bar",
            data: {{ labels: [], datasets: [{{ data: [], backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"] }}] }},
            options: {{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {{ legend: {{ display: c.type === "donut" }} }},
              indexAxis: c.type === "hbar" ? "y" : "x"
            }}
          }});
          chartInstances.push({{ inst: chartInst, cfg: c }});
        }});
      }}
      
      // 데이터 업데이트
      chartInstances.forEach(item => {{
        const c = item.cfg;
        const inst = item.inst;
        const sortBy = c.sort_by || "value_desc";
        
        let chartData = [];
        
        if (c.type === "multibar") {{
          const cols = c.cols || [];
          cols.forEach(colObj => {{
            const colName = colObj.col;
            const label = colObj.label || colName;
            const sumVal = filteredRows.reduce((acc, r) => acc + (Number(r[colName]) || 0), 0);
            chartData.push([label, sumVal]);
          }});
        }} else {{
          let counts = {{}};
          const valCol = c.value_col;
          filteredRows.forEach(r => {{
            const grp = String(r[c.col] ?? "").trim() || "미입력";
            const val = valCol ? (Number(r[valCol]) || 0) : 1;
            counts[grp] = (counts[grp] || 0) + val;
          }});
          chartData = Object.entries(counts);
        }}
        
        // 정렬 규칙 적용
        if (sortBy === "value_desc") {{
          chartData.sort((a, b) => b[1] - a[1]);
        }} else if (sortBy === "value_asc") {{
          chartData.sort((a, b) => a[1] - b[1]);
        }} else if (sortBy === "name_asc") {{
          chartData.sort((a, b) => a[0].localeCompare(b[0], "ko"));
        }}
        
        const limit = c.max_items !== undefined ? c.max_items : 20;
        const sliced = limit > 0 ? chartData.slice(0, limit) : chartData;
        
        inst.data.labels = sliced.map(x => x[0]);
        inst.data.datasets[0].data = sliced.map(x => x[1]);
        inst.data.datasets[0].label = (c.type === "multibar" || c.value_col) ? "합계" : "건수";
        inst.update();
      }});
    }}

    // 6. 데이터 테이블 렌더링
    function renderTable() {{
      const visibleCols = data.dashboard?.list?.visible_cols || [];
      const thead = document.getElementById("table-head");
      const tbody = document.getElementById("table-body");
      const countEl = document.getElementById("table-count");
      
      countEl.innerText = `${{filteredRows.length}}건`;
      
      // 테이블 헤더
      thead.innerHTML = "";
      const trHead = document.createElement("tr");
      visibleCols.forEach(col => {{
        const th = document.createElement("th");
        th.className = "px-4 py-3 text-slate-500";
        th.innerText = col;
        trHead.appendChild(th);
      }});
      thead.appendChild(trHead);
      
      // 테이블 바디 (페이징 적용)
      tbody.innerHTML = "";
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      const paged = filteredRows.slice(start, end);
      
      if (paged.length === 0) {{
        tbody.innerHTML = `<tr><td colspan="${{visibleCols.length}}" class="px-4 py-8 text-center text-slate-400">표시할 데이터가 없습니다.</td></tr>`;
      }} else {{
        paged.forEach(row => {{
          const tr = document.createElement("tr");
          tr.className = "hover:bg-slate-50/50 transition-colors";
          visibleCols.forEach(col => {{
            const td = document.createElement("td");
            td.className = "px-4 py-3 text-slate-700 truncate max-w-[200px]";
            td.innerText = row[col] ?? "—";
            tr.appendChild(td);
          }});
          tbody.appendChild(tr);
        }});
      }}
      
      // 페이지네이션 제어
      const totalPages = Math.ceil(filteredRows.length / pageSize) || 1;
      document.getElementById("pagination-info").innerText = `${{currentPage}} / ${{totalPages}} 페이지 (총 ${{filteredRows.length}}건)`;
      document.getElementById("prev-btn").disabled = currentPage === 1;
      document.getElementById("next-btn").disabled = currentPage === totalPages;
    }}

    function prevPage() {{
      if (currentPage > 1) {{
        currentPage--;
        renderTable();
      }}
    }}
    
    function nextPage() {{
      const totalPages = Math.ceil(filteredRows.length / pageSize) || 1;
      if (currentPage < totalPages) {{
        currentPage++;
        renderTable();
      }}
    }}

    // 7. CSV 다운로드 기능
    function exportToCSV() {{
      const visibleCols = data.dashboard?.list?.visible_cols || [];
      if (visibleCols.length === 0) return alert("출력할 컬럼이 없습니다.");
      
      // CSV 문자열 조립
      let csvContent = "\\uFEFF"; // UTF-8 BOM
      csvContent += visibleCols.join(",") + "\\n";
      
      filteredRows.forEach(row => {{
        const rowData = visibleCols.map(col => {{
          let val = String(row[col] ?? "").replace(/"/g, '""');
          if (val.includes(",") || val.includes("\\n") || val.includes('"')) {{
            val = `"${{val}}"`;
          }}
          return val;
        }});
        csvContent += rowData.join(",") + "\\n";
      }});
      
      const blob = new Blob([csvContent], {{ type: "text/csv;charset=utf-8;" }});
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", `${{data.project}}_filtered_list.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  </script>
</body>
</html>
"""
    return html

