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

from engine.config import ROW_ID_COL, SurveyConfig, PathsConfig
from engine.pipeline import SurveyPipeline
from engine.analyzer import ExcelAnalyzer
from engine.config_excel import read_config_from_excel
from engine.exporter import (
    _read_cleaned_sheet,
    build_data_json,
    clean_value,
    column_types_of,
    export_to_json,
    write_data_json,
)
from app.git_sync import DeployBlocked, deploy
from engine.overrides import (
    ORIGIN_DRAWER,
    OVERRIDES_FILE,
    Edit,
    UploadRejected,
    diff_against,
    load_overrides,
    save_overrides,
)

app = FastAPI(title="Survey Engine v2 API Server", version="2.0.0")

from fastapi.staticfiles import StaticFiles

# Enable CORS for local Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve generated JSON files directly to bypass Vite's HMR static caching issues
data_dir = FRONTEND_ROOT / "public" / "data"
data_dir.mkdir(parents=True, exist_ok=True)
app.mount("/data", StaticFiles(directory=str(data_dir)), name="data")

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
            
    # 기존 published 값을 먼저 조회해둔다 (제거보다 먼저 해야 값을 잃지 않는다)
    existing = next((p for p in projects if p.get("id") == project_name), {})

    # 기존 항목이 있으면 제거 (업데이트 대상)
    projects = [p for p in projects if p.get("id") != project_name]

    # 새 항목 추가 (기존 published 값 유지)
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
            "output_dir": os.path.relpath(save_path.parent, BACKEND_ROOT.parent),
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


def _load_project_cfg(name: str) -> tuple["SurveyConfig", Path]:
    """이름 검증 + 프로젝트 폴더 확인 + config.yaml 로드를 한 번에.

    (편집 계열 엔드포인트가 전부 같은 3단계를 반복하던 것을 모았다.)
    """
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")
    config_yaml = proj_dir / "config.yaml"
    if not config_yaml.exists():
        raise HTTPException(status_code=404, detail="config.yaml 설정 파일이 없습니다.")
    with open(config_yaml, encoding="utf-8") as f:
        raw = yaml.safe_load(f)
    return SurveyConfig.model_validate(raw), proj_dir


def _data_json_paths(cfg: "SurveyConfig", proj_dir: Path) -> tuple[Path, Path]:
    """(프로젝트 폴더 사본, 프런트가 실제로 fetch 하는 발행본)."""
    return (
        proj_dir / f"{cfg.project}_data.json",
        FRONTEND_ROOT / "public" / "data" / f"{cfg.project}_data.json",
    )


def _cleaned_xlsx_path(cfg: "SurveyConfig", proj_dir: Path) -> Path:
    out_dir = Path(cfg.paths.output_dir)
    if not out_dir.is_absolute():
        out_dir = proj_dir / out_dir
    return out_dir / cfg.paths.output_file


def _publish_data_json(result: dict, cfg: "SurveyConfig", proj_dir: Path) -> None:
    """data.json 을 프로젝트 폴더에 쓰고 프런트 발행 폴더로 복사한다 (/export 와 동일 절차)."""
    local_json, published_json = _data_json_paths(cfg, proj_dir)
    write_data_json(result, local_json, cfg)
    published_json.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(local_json, published_json)
    _update_projects_manifest(cfg.project, published_json.name)


def _rebuild_project(name: str) -> tuple[dict, list[dict]]:
    """지연됐던 xlsx 를 지금 만든다 — 파이프라인 1회 + export (계획 §5.2).

    편집 저장(PATCH /rows)은 data.json 만 갱신하고 xlsx 는 건드리지 않는다. 그래서 다운로드·
    발행처럼 **xlsx 가 실제로 필요해지는 순간**에만 여기서 따라잡는다.
    파이프라인이 overrides.json 을 다시 얹으므로 편집은 그대로 살아 있고, data.json 도
    원본에서 전량 재생성되어 그간의 누적 오차가 교정된다.

    Returns (export 결과, 충돌 목록)
    """
    cfg, proj_dir = _load_project_cfg(name)
    pipeline = SurveyPipeline(cfg, config_path=proj_dir / "config.yaml")
    save_path = pipeline.run()
    conflicts = [c.to_dict() for c in getattr(pipeline, "override_conflicts", [])]

    local_json, published_json = _data_json_paths(cfg, proj_dir)
    result = export_to_json(save_path, cfg, output_path=local_json, project_dir=proj_dir)
    published_json.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(local_json, published_json)
    _update_projects_manifest(cfg.project, published_json.name)
    return result, conflicts

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
    copy_from_project: str | None = Form(None),
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
    # xlsx 확장자만 허용
    if not safe_fname.lower().endswith(".xlsx"):
        raise HTTPException(status_code=400, detail="xlsx 파일만 업로드할 수 있습니다.")

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
            
        copied_config = False
        if copy_from_project:
            copy_dir = _get_project_dir(copy_from_project)
            if copy_dir.exists() and (copy_dir / "config.yaml").exists():
                shutil.copy2(copy_dir / "config.yaml", config_path)
                # Update source file
                import yaml
                with open(config_path, "r", encoding="utf-8") as f:
                    cfg_yaml = yaml.safe_load(f)
                if "source" not in cfg_yaml:
                    cfg_yaml["source"] = {}
                cfg_yaml["source"]["file"] = rel_src
                with open(config_path, "w", encoding="utf-8") as f:
                    yaml.dump(cfg_yaml, f, allow_unicode=True, sort_keys=False)
                
                # Copy dashboard.json if exists
                if (copy_dir / "dashboard.json").exists():
                    shutil.copy2(copy_dir / "dashboard.json", proj_dir / "dashboard.json")
                
                # Copy style.yaml if exists
                dest_style = proj_dir / "style.yaml"
                if (copy_dir / "style.yaml").exists():
                    shutil.copy2(copy_dir / "style.yaml", dest_style)
                
                copied_config = True

        if not copied_config:
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
            "draft_path": os.path.relpath(draft_path, BACKEND_ROOT.parent)
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"설문 분석 및 프로젝트 생성 실패: {exc}")


@app.post("/api/projects/create-merge")
async def create_merge_project(
    name: str = Form(...),
    copy_from_project: str | None = Form(None),
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
        if not safe_fname.lower().endswith(".xlsx"):
            raise HTTPException(status_code=400, detail="xlsx 파일만 업로드할 수 있습니다.")
        
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
        
        copied_config = False
        if copy_from_project:
            copy_dir = _get_project_dir(copy_from_project)
            if copy_dir.exists() and (copy_dir / "config.yaml").exists():
                shutil.copy2(copy_dir / "config.yaml", config_path)
                with open(config_path, "r", encoding="utf-8") as f:
                    cfg_yaml = yaml.safe_load(f)
                if "source" not in cfg_yaml:
                    cfg_yaml["source"] = {}
                cfg_yaml["source"]["file"] = rel_src
                cfg_yaml["merge"] = rel_merge_cfg.model_dump(exclude_none=True)
                with open(config_path, "w", encoding="utf-8") as f:
                    yaml.dump(cfg_yaml, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
                
                if (copy_dir / "dashboard.json").exists():
                    shutil.copy2(copy_dir / "dashboard.json", proj_dir / "dashboard.json")
                
                dest_style = proj_dir / "style.yaml"
                if (copy_dir / "style.yaml").exists():
                    shutil.copy2(copy_dir / "style.yaml", dest_style)
                
                copied_config = True

        if not copied_config:
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
            "draft_path": os.path.relpath(draft_path, BACKEND_ROOT.parent),
            "merged_path": os.path.relpath(merged_file_path, BACKEND_ROOT.parent)
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"병합 후 분석 및 프로젝트 생성 실패: {exc}")

def _sanitize_nans(obj: Any) -> Any:
    import math
    if isinstance(obj, float) and math.isnan(obj): return None
    if isinstance(obj, dict): return {k: _sanitize_nans(v) for k, v in obj.items()}
    if isinstance(obj, list): return [_sanitize_nans(x) for x in obj]
    return obj

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
        from engine.pipeline import _build_registry, enrich_config_with_patterns
        from engine.writer import _apply_transform, _resolve_val, _suffixes_for

        # 실제 파이프라인(run)과 동일하게 patterns_file 기반 address_parsing 등을
        # cfg에 보강한다. 이걸 건너뛰면 addr_split 등 파생열 transform이
        # address_parsing 없이 실행되어 항상 빈 값을 반환한다.
        enrich_config_with_patterns(cfg, proj_dir)

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

        registry = _build_registry(cfg)
        extra_kw = dict(cfg.transform_kwargs)
        if cfg.jang_extraction:
            extra_kw["jang_cfg"] = cfg.jang_extraction.model_dump()
        preview_rows = []

        for _, row in df_raw.iterrows():
            raw_vals = {}
            cleaned_vals = {}
            for col_def in cfg.columns:
                out_col = col_def.output_col

                if col_def.transform == "exclude":
                    raw_vals[out_col] = ""
                    cleaned_vals[out_col] = "(출력 제외됨)"
                    continue

                source_val = _resolve_val(row, col_def)
                raw_display = (
                    ", ".join(str(v) for v in source_val)
                    if isinstance(source_val, list)
                    else str(source_val) if source_val is not None else ""
                )

                # write.py의 실제 정제 로직과 동일한 경로를 태워
                # addr_split/norm_date_parts/split_binary 같은 다중 출력
                # transform도 run()과 똑같이 동작하도록 한다.
                cleaned_val = _apply_transform(col_def, row, registry, extra_kw)

                for sfx in _suffixes_for(col_def):
                    col_key = out_col + sfx
                    if isinstance(cleaned_val, dict):
                        cell_val = cleaned_val.get(sfx)
                    elif sfx == "":
                        cell_val = cleaned_val
                    else:
                        cell_val = None
                    raw_vals[col_key] = raw_display
                    cleaned_vals[col_key] = str(cell_val) if cell_val is not None else ""

            preview_rows.append({
                "raw": raw_vals,
                "cleaned": cleaned_vals
            })
            
        return _sanitize_nans({
            "status": "success",
            "preview": preview_rows
        })
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


def _mtime_info(path: Path) -> tuple[Optional[float], Optional[str]]:
    """파일의 mtime을 (비교용 타임스탬프, ISO 문자열) 형태로 반환합니다. 없으면 (None, None)."""
    if not path.exists():
        return None, None
    ts = path.stat().st_mtime
    return ts, datetime.fromtimestamp(ts).isoformat()


@app.get("/api/projects/{name}/freshness")
def get_project_freshness(name: str, user: dict = Depends(verify_supabase_token)):
    """정제 결과물이 최신 설정·편집을 반영하고 있는지 판정합니다.

    config.yaml/dashboard.json/overrides.json이 마지막 정제 실행(output 파일 생성) 이후에
    수정되었다면 is_stale=True를 반환합니다. 서버 재시작으로 인메모리 잡 상태(_pipeline_jobs)가
    초기화되어도 파일 mtime 기반이라 항상 정확합니다.

    overrides.json(손 편집)도 같은 규칙에 얹혀 있습니다 — "설정이 산출물보다 앞서 있다"는
    이미 있던 개념이고, "편집이 산출물보다 앞서 있다"는 그 한 사례일 뿐이라 새 개념을 만들지
    않았습니다. 편집 저장은 data.json 만 갱신하고 xlsx 는 미루므로(계획 §5.2), 여기서
    is_stale=True 가 곧 "xlsx 가 뒤처졌다 = 다운로드/발행 전에 rebuild 가 필요하다" 입니다.
    """
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")

    config_path = proj_dir / "config.yaml"
    dashboard_path = proj_dir / "dashboard.json"
    overrides_p = proj_dir / OVERRIDES_FILE

    config_ts, config_updated_at = _mtime_info(config_path)
    dashboard_ts, dashboard_updated_at = _mtime_info(dashboard_path)
    overrides_ts, overrides_updated_at = _mtime_info(overrides_p)

    output_ts, output_generated_at = None, None
    if config_path.exists():
        try:
            with open(config_path, "r", encoding="utf-8") as f:
                cfg_dict = yaml.safe_load(f) or {}
            paths = cfg_dict.get("paths") or {}
            _paths_defaults = PathsConfig()
            out_dir = paths.get("output_dir", _paths_defaults.output_dir)
            out_file = paths.get("output_file", _paths_defaults.output_file)
            output_ts, output_generated_at = _mtime_info(proj_dir / out_dir / out_file)
        except Exception:
            pass

    is_stale = False
    if output_ts is not None:
        newest_config_ts = max(
            (t for t in (config_ts, dashboard_ts, overrides_ts) if t is not None),
            default=None,
        )
        if newest_config_ts is not None and newest_config_ts > output_ts:
            is_stale = True

    return {
        "config_updated_at": config_updated_at,
        "dashboard_updated_at": dashboard_updated_at,
        "overrides_updated_at": overrides_updated_at,
        "output_generated_at": output_generated_at,
        "has_output": output_ts is not None,
        "is_stale": is_stale,
        # 손 편집 총 건수 — 헤더의 「편집 N건」 배지용.
        # (계획 §4.3 은 pending_edits 라 적었으나, "아직 xlsx 에 안 들어간 수" 는 추적하지
        #  않으면 알 수 없다. 배지가 실제로 필요한 건 총 건수이고, "뒤처졌는가" 는 is_stale
        #  이 이미 답한다 — 셀 수 없는 값을 지어내지 않는다.)
        "edit_count": len(load_overrides(proj_dir)),
    }


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
        
        return _sanitize_nans({
            "status": "success",
            "json_file": json_path.name
        })
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"대시보드 내보내기 실패: {exc}")


@app.get("/api/projects/{name}/download")
def download_cleaned_xlsx(name: str, user: dict = Depends(verify_supabase_token)):
    """정제 완료된 결과 엑셀 파일을 다운로드합니다.

    편집 저장은 xlsx 를 미루므로(계획 §5.1), 뒤처져 있으면 **여기서 먼저 따라잡는다.**
    이게 없으면 사용자가 "내 편집이 빠진 엑셀"을 받게 되고, 그걸 고쳐 되올리면(§5.4)
    편집이 통째로 되돌려진다.
    """
    cfg, proj_dir = _load_project_cfg(name)
    try:
        xlsx_path = _cleaned_xlsx_path(cfg, proj_dir)

        if not xlsx_path.exists():
            raise HTTPException(status_code=404, detail="결과 엑셀 파일이 존재하지 않습니다. 먼저 정제를 실행하세요.")

        # 설정·편집이 xlsx 보다 새로우면 지연됐던 파이프라인을 지금 돌린다.
        if get_project_freshness(name, user=user)["is_stale"]:
            print(f"[다운로드] {name}: 결과물이 뒤처져 재생성합니다.")
            _rebuild_project(name)

        return FileResponse(
            path=xlsx_path,
            filename=xlsx_path.name,
            media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"다운로드 실패: {exc}")


# ── 대시보드 손 편집 (dashboard_edit_plan §4.4 · §5.1) ──────────────────────

@app.get("/api/projects/{name}/overrides")
def get_overrides(name: str, user: dict = Depends(verify_supabase_token)):
    """현재 편집 목록. 편집 검토 패널이 읽는다."""
    _, proj_dir = _load_project_cfg(name)
    ov = load_overrides(proj_dir)
    return _sanitize_nans({"edits": [e.to_dict() for e in ov.edits], "count": len(ov)})


@app.patch("/api/projects/{name}/rows/{row_id}")
async def patch_row(
    name: str,
    row_id: str,
    payload: dict,
    user: dict = Depends(verify_supabase_token),
):
    """행 1건 저장 — 계획 §5.1 의 ④~⑧.

    body: 변경된 컬럼만. 예) {"지역": "서울특별시", "연령": 34}

    **xlsx 를 건드리지 않는다.** overrides.json 과 data.json 만 갱신하고 끝낸다.
    셀 하나에 전체 파이프라인(원본 읽기 → transform → 시트 4장 쓰기 → 슬라이서 zip 재작성
    → xlsx 재읽기)을 돌리면 수십 초가 걸리는데, 사용자가 보고 있는 건 차트뿐이다.
    xlsx 는 다운로드·발행 때 `_rebuild_project()` 가 따라잡는다(§5.2).
    """
    cfg, proj_dir = _load_project_cfg(name)
    if not payload:
        raise HTTPException(status_code=400, detail="변경된 컬럼이 없습니다.")

    local_json, _ = _data_json_paths(cfg, proj_dir)
    if not local_json.exists():
        raise HTTPException(
            status_code=400,
            detail="대시보드 데이터가 없습니다. 먼저 정제(run)와 내보내기(export)를 수행하세요.",
        )

    with open(local_json, encoding="utf-8") as f:
        data = json.load(f)

    rows = data.get("rows", [])
    target = next((r for r in rows if r.get(ROW_ID_COL) == row_id), None)
    if target is None:
        raise HTTPException(status_code=404, detail=f"행 '{row_id}' 를 찾을 수 없습니다.")

    if ROW_ID_COL in payload:
        raise HTTPException(status_code=400, detail=f"'{ROW_ID_COL}' 은 편집할 수 없습니다.")
    known_cols = {c["key"] for c in data.get("meta", {}).get("columns", [])}
    unknown = [c for c in payload if c not in known_cols]
    if unknown:
        raise HTTPException(status_code=400, detail=f"알 수 없는 컬럼: {unknown}")

    # 들어온 값을 data.json 과 같은 형태로 맞춘다. 아래 build_data_json 은 rows_are_clean=True
    # 로 전 셀 재정제를 건너뛰므로, **새로 넣는 값은 여기서 직접 정제해야 한다.**
    payload = {col: clean_value(v) for col, v in payload.items()}

    # ④ overrides.json 갱신
    ov = load_overrides(proj_dir)
    now = datetime.now().isoformat(timespec="seconds")
    by = str(user.get("user") or user.get("id") or "unknown")
    for col, value in payload.items():
        # prev 는 **파이프라인 산출값**이어야 한다(되돌리기의 목적지). 같은 칸을 두 번째로
        # 고치는 경우 target[col] 은 이미 '직전 편집값'이므로, 기존 편집의 prev 를 물려받는다.
        existing = ov.get(row_id, col)
        prev = existing.prev if (existing is not None and existing.has_prev) else target.get(col)
        ov.upsert(Edit(
            row_id=row_id, col=col, value=value,
            prev=prev, has_prev=True,
            at=now, by=by, origin=ORIGIN_DRAWER,
        ))
    save_overrides(proj_dir, ov)

    # ⑤ rows 패치 → ⑥ 재계산 → ⑦ 저장·복사
    for col, value in payload.items():
        target[col] = value
    result = build_data_json(
        rows,
        cfg,
        # 타입은 물려받는다 — 편집은 값을 바꾸는 것이지 컬럼의 타입을 바꾸는 게 아니다(§5.1 ⑥).
        column_types=column_types_of(data),
        # data.json 의 rows 는 이미 정제된 값이다 — 60만 셀 재정제(sangga 기준 493ms)를 건너뛴다.
        # 위에서 payload 를 직접 clean_value 로 통과시킨 것이 이 생략의 전제다.
        rows_are_clean=True,
        project_dir=proj_dir,
        source_file=data.get("meta", {}).get("source_file", ""),
    )
    _publish_data_json(result, cfg, proj_dir)

    # ⑧ 갱신된 데이터를 그대로 돌려준다 — 프런트가 이걸로 교체하면 차트·KPI 가 따라 갱신된다.
    return _sanitize_nans({
        "status": "success",
        "data": result,
        "edit_count": len(ov),
        "xlsx_stale": True,      # 저장은 xlsx 를 미룬다 — 다운로드·발행 시 rebuild
    })


@app.delete("/api/projects/{name}/overrides")
async def delete_overrides(
    name: str,
    body: dict | None = None,
    user: dict = Depends(verify_supabase_token),
):
    """편집 되돌리기. body 로 {"row_id":..., "col":...} 을 주면 그 칸만, 없으면 전체.

    되돌린 뒤 data.json 을 **xlsx 에서** 다시 만든다 — 파이프라인 산출값이 진실이므로
    되돌리기의 목적지도 거기다. (xlsx 자체는 편집을 반영한 상태일 수 있어 rebuild 가 필요)
    """
    cfg, proj_dir = _load_project_cfg(name)
    ov = load_overrides(proj_dir)
    if not len(ov):
        return {"status": "success", "removed": 0, "edit_count": 0}

    if body and body.get("row_id"):
        rid = str(body["row_id"])
        if body.get("col"):
            removed = 1 if ov.remove(rid, str(body["col"])) else 0
        else:
            removed = ov.remove_row(rid)
    else:
        removed = len(ov)
        ov.clear()
    save_overrides(proj_dir, ov)

    _, conflicts = _rebuild_project(name)
    return _sanitize_nans({
        "status": "success",
        "removed": removed,
        "edit_count": len(ov),
        "conflicts": conflicts,
    })


@app.post("/api/projects/{name}/import-xlsx")
async def import_edited_xlsx(
    name: str,
    file: UploadFile = File(...),
    apply: bool = Query(False, description="true 면 실제로 반영. 기본은 미리보기만."),
    user: dict = Depends(verify_supabase_token),
):
    """수정된 xlsx 를 되돌려 받는다 — 계획 §5.4.

    **기본은 미리보기다(apply=false).** 엑셀 편집은 의도치 않은 변경(서식·자동 날짜 변환·
    앞자리 0 소실 등)을 쉽게 만든다. 확인 없이 흡수하면 엑셀이 데이터를 조용히 망가뜨린다.
    사용자가 목록을 보고 확인하면 apply=true 로 다시 불러 §5.1 ④~⑦ 과 같은 경로로 합류한다.
    """
    cfg, proj_dir = _load_project_cfg(name)
    local_json, _ = _data_json_paths(cfg, proj_dir)
    if not local_json.exists():
        raise HTTPException(status_code=400, detail="대시보드 데이터가 없습니다. 먼저 정제를 수행하세요.")

    tmp = proj_dir / f".upload_{_safe_filename(file.filename or 'upload.xlsx')}"
    try:
        tmp.write_bytes(await file.read())
        try:
            _, uploaded_rows = _read_cleaned_sheet(tmp, cfg)
        except Exception as exc:
            raise HTTPException(
                status_code=400,
                detail=f"엑셀을 읽을 수 없습니다: {exc}",
            )
    finally:
        tmp.unlink(missing_ok=True)

    with open(local_json, encoding="utf-8") as f:
        data = json.load(f)

    editable = {c["key"] for c in data.get("meta", {}).get("columns", [])}
    try:
        edits = diff_against(uploaded_rows, data.get("rows", []), editable_cols=editable)
    except UploadRejected as exc:
        # 식별자가 성하지 않으면 어느 행인지 알 수 없다 — 추측해서 반영하면 안 된다.
        raise HTTPException(status_code=400, detail=str(exc))

    preview = [e.to_dict() for e in edits]
    if not apply:
        return _sanitize_nans({"status": "preview", "changes": preview, "count": len(preview)})

    if not edits:
        return _sanitize_nans({"status": "success", "changes": [], "count": 0})

    # ── 확인됨 → §5.1 ④~⑦ 과 같은 경로 ────────────────────────────────────
    ov = load_overrides(proj_dir)
    by = str(user.get("user") or user.get("id") or "unknown")
    rows = data["rows"]
    by_id = {str(r.get(ROW_ID_COL)): r for r in rows}
    for e in edits:
        existing = ov.get(e.row_id, e.col)
        # prev 는 파이프라인 산출값이어야 한다 — 이미 손댄 칸이면 그 기록을 물려받는다.
        if existing is not None and existing.has_prev:
            e.prev = existing.prev
        e.by = by
        ov.upsert(e)
        target = by_id.get(e.row_id)
        if target is not None:
            target[e.col] = e.value
    save_overrides(proj_dir, ov)

    result = build_data_json(
        rows,
        cfg,
        column_types=column_types_of(data),
        rows_are_clean=True,
        project_dir=proj_dir,
        source_file=data.get("meta", {}).get("source_file", ""),
    )
    _publish_data_json(result, cfg, proj_dir)
    return _sanitize_nans({
        "status": "success",
        "changes": preview,
        "count": len(preview),
        "data": result,
        "edit_count": len(ov),
    })


@app.post("/api/projects/{name}/rebuild")
def rebuild_project(name: str, user: dict = Depends(verify_supabase_token)):
    """지연됐던 xlsx 재생성 — 계획 §5.2.

    편집 저장이 미뤄둔 파이프라인을 여기서 1회 돌린다. 다운로드·발행 직전에 호출된다.
    """
    started = time.time()
    result, conflicts = _rebuild_project(name)
    return _sanitize_nans({
        "status": "success",
        "conflicts": conflicts,
        "elapsed_sec": round(time.time() - started, 2),
        "total_rows": result.get("meta", {}).get("total_rows"),
    })


@app.post("/api/projects/{name}/deploy")
def deploy_project(name: str, user: dict = Depends(verify_supabase_token)):
    """발행 — 편집을 xlsx 에 반영하고(rebuild) 대시보드를 git 으로 밀어 Vercel 에 배포한다.

    **「발행」 버튼 1회 = 커밋 1개 · 푸시 1회.** 저장마다 자동으로 밀지 않는 이유는 §6.1 참고:
    Vercel 배포와 원격 충돌 기회가 편집 횟수만큼 생긴다.

    가드 3종(§6.3)은 app/git_sync.py 가 갖고 있고, 여기서는 그것을 통과시키기만 한다.
    """
    cfg, proj_dir = _load_project_cfg(name)

    # ③ 먼저 xlsx·data.json 을 최신으로 (지연됐던 파이프라인)
    _, conflicts = _rebuild_project(name)

    _, published_json = _data_json_paths(cfg, proj_dir)
    manifest = FRONTEND_ROOT / "public" / "data" / "projects.json"

    raw_file: Path | None = None
    if cfg.source and cfg.source.file:
        candidate = proj_dir / cfg.source.file
        if not candidate.exists():
            candidate = STORAGE_ROOT / "raw" / Path(cfg.source.file).name
        raw_file = candidate

    try:
        result = deploy(
            repo=BACKEND_ROOT.parent,
            proj_dir=proj_dir,
            raw_file=raw_file,
            files=[published_json, manifest],   # 가드 2 — 딱 이 둘만
            project=cfg.project,
            edit_count=len(load_overrides(proj_dir)),
        )
    except DeployBlocked as exc:
        # 가드에 걸린 것은 오류가 아니라 **의도된 정지**다. 이유를 그대로 보여준다.
        raise HTTPException(status_code=409, detail=str(exc))

    return _sanitize_nans({
        "status": "success" if result.pushed else "partial",
        "pushed": result.pushed,
        "committed": result.committed,
        "detail": result.detail,
        "files": result.files,
        "conflicts": conflicts,
    })


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


@app.delete("/api/projects/{name}")
async def delete_project(name: str, user: dict = Depends(verify_supabase_token)):
    """프로젝트 설정 폴더, 배포 데이터, 그리고 projects.json 매니페스트 파일 목록에서 프로젝트를 영구 제거합니다."""
    _validate_project_name(name)
    
    # 1. projects.json 매니페스트 파일에서 제거
    manifest_path = FRONTEND_ROOT / "public" / "data" / "projects.json"
    if manifest_path.exists():
        try:
            with open(manifest_path, encoding="utf-8") as f:
                projects = json.load(f)
            
            # 기존 항목 제외 필터링
            updated_projects = [p for p in projects if p.get("id") != name]
            
            with open(manifest_path, "w", encoding="utf-8") as f:
                json.dump(updated_projects, f, ensure_ascii=False, indent=2)
        except Exception as exc:
            print(f"[경고] projects.json에서 프로젝트 제거 실패: {exc}")

    # 2. 프론트엔드 배포 정적 JSON 파일 삭제
    frontend_json = FRONTEND_ROOT / "public" / "data" / f"{name}_data.json"
    if frontend_json.exists():
        try:
            frontend_json.unlink()
        except Exception as exc:
            print(f"[경고] 프론트엔드 데이터 파일 삭제 실패: {exc}")

    # 3. 백엔드 프로젝트 저장소 폴더(config.yaml, output/ 등) 삭제
    proj_dir = _get_project_dir(name)
    if proj_dir.exists():
        try:
            shutil.rmtree(proj_dir)
        except Exception as exc:
            raise HTTPException(status_code=500, detail=f"프로젝트 폴더 삭제 실패: {exc}")

    return {"status": "success", "message": f"프로젝트 '{name}'이 성공적으로 삭제되었습니다."}


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





_REPORT_ASSETS_DIR = Path(__file__).parent / "report_assets"
_REPORT_TEMPLATE_PATH = Path(__file__).parent / "templates" / "report_template.html"


def _build_single_html_template(project_name: str, data: dict) -> str:
    """오프라인 단독 실행형 HTML 리포트를 생성합니다.

    Tailwind CSS·Chart.js·xlsx.js를 CDN이 아니라 report_assets/의 로컬 번들
    (버전 고정)에서 읽어 그대로 인라인 삽입하므로, 생성된 리포트는 인터넷
    연결 없이도 완전히 동작합니다 — 프로젝트를 타인에게 비공개로 공유하기
    위한 필수 요구사항입니다.
    """
    import html as html_lib
    import json

    data_json = json.dumps(data, ensure_ascii=False)
    # <script> 컨텍스트 탈출(XSS) 방지: 정제 데이터 값에 "</script>" 등이 섞여 있어도
    # 스크립트 태그를 조기 종료시켜 임의 HTML/JS를 주입할 수 없도록 이스케이프한다.
    # (Django의 json_script 필터와 동일한 접근)
    data_json = (
        data_json
        .replace("&", "\\u0026")
        .replace("<", "\\u003c")
        .replace(">", "\\u003e")
    )

    template = _REPORT_TEMPLATE_PATH.read_text(encoding="utf-8")
    tailwind_css = (_REPORT_ASSETS_DIR / "tailwind.min.css").read_text(encoding="utf-8")
    chartjs_js = (_REPORT_ASSETS_DIR / "chart.umd.min.js").read_text(encoding="utf-8")
    xlsx_js = (_REPORT_ASSETS_DIR / "xlsx.full.min.js").read_text(encoding="utf-8")

    # __PROJECT_NAME__(사용자 입력, 영문/숫자/한글/_/- 허용)은 반드시 마지막에
    # 치환한다. 먼저 치환하면 project_name에 우연히 다른 토큰과 같은 문자열
    # (예: "__DATA_JSON__")이 포함된 경우 뒤이은 치환에서 그 부분까지 다시
    # 치환 대상으로 잡혀 페이지가 깨질 수 있다.
    html_doc = template
    html_doc = html_doc.replace("__TAILWIND_CSS__", tailwind_css)
    html_doc = html_doc.replace("__CHARTJS_JS__", chartjs_js)
    html_doc = html_doc.replace("__XLSX_JS__", xlsx_js)
    html_doc = html_doc.replace("__DATA_JSON__", data_json)
    html_doc = html_doc.replace("__GENERATED_AT__", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    html_doc = html_doc.replace("__PROJECT_NAME__", html_lib.escape(project_name))
    return html_doc
