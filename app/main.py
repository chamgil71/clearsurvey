from __future__ import annotations

import re
import sys
import json
import shutil
from pathlib import Path
from typing import Any, Optional
from datetime import datetime

from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import yaml

# Add project root to path for imports
PROJECT_ROOT = Path(__file__).parent.parent
sys.path.append(str(PROJECT_ROOT))

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
    proj_dir = PROJECT_ROOT / "projects" / name
    return proj_dir

# ── API Endpoints ──────────────────────────────────────────────────────────

@app.get("/api/projects")
def list_projects():
    """웹 대시보드 프로젝트 목록 및 현황을 리턴합니다."""
    manifest_path = PROJECT_ROOT / "web" / "data" / "projects.json"
    if manifest_path.exists():
        try:
            with open(manifest_path, encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
            
    # Fallback: projects 폴더 스캔
    proj_root = PROJECT_ROOT / "projects"
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
    file: UploadFile = File(...)
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

    storage_dir = PROJECT_ROOT / "storage"
    storage_dir.mkdir(exist_ok=True)

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
        try:
            rel_src = str(raw_file_path.resolve().relative_to(config_path.parent.resolve()))
        except ValueError:
            rel_src = str(raw_file_path.resolve())
            
        analyzer.generate_config_yaml(
            config_path,
            project_name=name,
            source_override=rel_src
        )
        
        # Copy style.yaml template if available
        gpu_style = PROJECT_ROOT / "projects" / "gpu_2026" / "style.yaml"
        if gpu_style.exists():
            shutil.copy2(gpu_style, proj_dir / "style.yaml")
        else:
            (proj_dir / "style.yaml").write_text("# style.yaml — 스타일 설정\n", encoding="utf-8")
            
        return {
            "status": "success",
            "project": name,
            "header_row": detection["header_row"],
            "data_start_row": detection["data_start_row"],
            "column_count": detection["column_count"],
            "draft_path": str(draft_path.relative_to(PROJECT_ROOT))
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"설문 분석 및 프로젝트 생성 실패: {exc}")


@app.get("/api/projects/{name}/config")
def get_project_config(name: str):
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

    # Load dashboard.json if exists
    dashboard_json = proj_dir / "dashboard.json"
    dashboard_data = {}
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
async def save_project_config(name: str, payload: dict):
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


@app.post("/api/projects/{name}/run")
def run_project_pipeline(name: str):
    """파이프라인을 원격 실행하여 정제된 데이터를 생성합니다."""
    _validate_project_name(name)
    proj_dir = _get_project_dir(name)
    if not proj_dir.exists():
        raise HTTPException(status_code=404, detail="프로젝트를 찾을 수 없습니다.")
        
    config_yaml = proj_dir / "config.yaml"
    if not config_yaml.exists():
        raise HTTPException(status_code=404, detail="config.yaml 설정 파일이 없습니다.")
        
    try:
        # Load config
        with open(config_yaml, encoding="utf-8") as f:
            raw = yaml.safe_load(f)
        cfg = SurveyConfig.model_validate(raw)
        
        # Execute pipeline
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        # Resolved output path
        save_path = pipeline.run()
        
        # Read n_rows from config json generated by pipeline
        config_json_path = proj_dir / f"{name}_config.json"
        n_rows = 0
        if config_json_path.exists():
            # Simply read and return some status if needed
            pass
            
        return {
            "status": "success",
            "cleaned_file": save_path.name,
            "output_dir": str(save_path.parent.relative_to(PROJECT_ROOT))
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"파이프라인 실행 실패: {exc}")


@app.post("/api/projects/{name}/export")
def export_project_json(name: str):
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
            
        # Export
        json_path = PROJECT_ROOT / "web" / "data" / f"{cfg.project}_data.json"
        export_to_json(xlsx_path, cfg, output_path=json_path, project_dir=proj_dir)
        
        return {
            "status": "success",
            "json_file": json_path.name
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"대시보드 내보내기 실패: {exc}")


@app.get("/api/projects/{name}/download")
def download_cleaned_xlsx(name: str):
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

