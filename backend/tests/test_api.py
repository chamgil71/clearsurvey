"""
Tests for app/main.py — FastAPI endpoints

Coverage targets:
  - GET  /api/health                   — 생존 확인
  - GET  /api/projects/{name}/status   — idle 기본값, 유효성 검증
  - GET  /api/projects/{name}/config   — 404 (미존재), config 로드
  - POST /api/projects/{name}/config   — 저장 성공, 400 검증 실패, 404 미존재
  - POST /api/projects/{name}/run      — 404 프로젝트 없음, 404 config 없음, 409 중복실행, started
  - Security: path traversal → 400

실행: pytest tests/test_api.py -v
"""
from __future__ import annotations

import json
from pathlib import Path

import openpyxl
import pytest
import yaml
from fastapi.testclient import TestClient
from openpyxl import Workbook

# app/main.py를 import하기 전에 sys.path에 프로젝트 루트 추가
import sys
_PROJECT_ROOT = Path(__file__).parent.parent
if str(_PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(_PROJECT_ROOT))
    sys.path.insert(0, str(_PROJECT_ROOT / "app"))

from app.main import app, _job_set, _pipeline_jobs


# ─────────────────────────────────────────────────────────────────────────────
# 픽스처
# ─────────────────────────────────────────────────────────────────────────────

@pytest.fixture
def client(tmp_path, monkeypatch):
    """TestClient with roots monkeypatched to tmp_path."""
    import app.main as main_module
    monkeypatch.setattr(main_module, "STORAGE_ROOT", tmp_path / "storage")
    monkeypatch.setattr(main_module, "FRONTEND_ROOT", tmp_path / "frontend")
    monkeypatch.setattr(main_module, "BACKEND_ROOT", tmp_path / "backend")
    # 잡 상태 초기화
    _pipeline_jobs.clear()
    with TestClient(app) as c:
        yield c


@pytest.fixture
def project_dir(tmp_path):
    """tmp_path 기반 프로젝트 디렉터리를 반환합니다."""
    d = tmp_path / "storage" / "projects" / "demo"
    d.mkdir(parents=True, exist_ok=True)
    (d / "output").mkdir(exist_ok=True)
    return d


def _write_valid_config(proj_dir: Path, data_xlsx: Path | None = None) -> Path:
    """proj_dir/config.yaml 을 작성하고 경로를 반환합니다."""
    cfg: dict = {
        "project": proj_dir.name,
        "source": {
            "file": str(data_xlsx) if data_xlsx else None,
            "sheet": None,
            "header_row": 1,
            "data_start_row": 2,
        },
        "paths": {"output_dir": "output", "output_file": "result.xlsx"},
        "sheets": {"cleaned": "Cleaned", "summary": "Summary"},
        "columns": [
            {"output_col": "이름", "source_col": 1, "transform": "copy"},
        ],
    }
    config_yaml = proj_dir / "config.yaml"
    config_yaml.write_text(yaml.dump(cfg, allow_unicode=True), encoding="utf-8")
    return config_yaml


def _make_xlsx(path: Path) -> None:
    """단순 2행 xlsx 파일을 생성합니다."""
    wb = Workbook()
    ws = wb.active
    ws.cell(1, 1, "이름")
    ws.cell(2, 1, "홍길동")
    wb.save(path)


# ─────────────────────────────────────────────────────────────────────────────
# GET /api/health
# ─────────────────────────────────────────────────────────────────────────────

class TestHealthCheck:
    def test_returns_200(self, client):
        resp = client.get("/api/health")
        assert resp.status_code == 200

    def test_status_is_ok(self, client):
        resp = client.get("/api/health")
        assert resp.json()["status"] == "ok"

    def test_has_time_field(self, client):
        resp = client.get("/api/health")
        assert "time" in resp.json()


# ─────────────────────────────────────────────────────────────────────────────
# GET /api/projects/{name}/status
# ─────────────────────────────────────────────────────────────────────────────

class TestGetPipelineStatus:
    def test_unknown_project_returns_idle(self, client):
        resp = client.get("/api/projects/unknown_proj/status")
        assert resp.status_code == 200
        assert resp.json()["status"] == "idle"

    def test_invalid_name_returns_400(self, client):
        resp = client.get("/api/projects/../etc/status")
        assert resp.status_code in (400, 404)

    def test_special_chars_returns_400(self, client):
        resp = client.get("/api/projects/bad%00name/status")
        assert resp.status_code in (400, 422)

    def test_reflects_set_status(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        _job_set("my_proj", {"status": "running", "started_at": "2026-01-01T00:00:00"})
        resp = client.get("/api/projects/my_proj/status")
        assert resp.json()["status"] == "running"
        _pipeline_jobs.clear()


# ─────────────────────────────────────────────────────────────────────────────
# GET /api/projects/{name}/config
# ─────────────────────────────────────────────────────────────────────────────

class TestGetProjectConfig:
    def test_nonexistent_project_returns_404(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        (tmp_path / "storage" / "projects").mkdir(parents=True, exist_ok=True)
        resp = client.get("/api/projects/no_such_proj/config")
        assert resp.status_code == 404

    def test_invalid_name_returns_400(self, client):
        resp = client.get("/api/projects/../config")
        assert resp.status_code in (400, 404)

    def test_valid_project_returns_config(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        _write_valid_config(proj_dir)
        resp = client.get("/api/projects/demo/config")
        assert resp.status_code == 200
        body = resp.json()
        assert "config" in body
        assert "dashboard" in body

    def test_config_contains_project_name(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        _write_valid_config(proj_dir)
        resp = client.get("/api/projects/demo/config")
        assert resp.json()["config"]["project"] == "demo"

    def test_dashboard_json_included_when_present(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        _write_valid_config(proj_dir)
        custom_dash = {"version": 99, "kpi": [], "charts": [], "list": {"visible_cols": [], "filter_cols": []}}
        (proj_dir / "dashboard.json").write_text(json.dumps(custom_dash), encoding="utf-8")
        resp = client.get("/api/projects/demo/config")
        assert resp.json()["dashboard"]["version"] == 99


# ─────────────────────────────────────────────────────────────────────────────
# POST /api/projects/{name}/config — 설정 저장
# ─────────────────────────────────────────────────────────────────────────────

class TestSaveProjectConfig:
    def _valid_payload(self) -> dict:
        return {
            "config": {
                "project": "demo",
                "source": {"header_row": 1, "data_start_row": 2},
                "paths": {"output_dir": "output", "output_file": "result.xlsx"},
                "sheets": {"cleaned": "Cleaned", "summary": "Summary"},
                "columns": [{"output_col": "이름", "source_col": 1, "transform": "copy"}],
            },
            "dashboard": None,
        }

    def test_nonexistent_project_returns_404(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        (tmp_path / "storage" / "projects").mkdir(parents=True, exist_ok=True)
        resp = client.post("/api/projects/no_such/config", json=self._valid_payload())
        assert resp.status_code == 404

    def test_invalid_project_name_returns_400(self, client):
        resp = client.post("/api/projects/../../etc/config", json=self._valid_payload())
        assert resp.status_code in (400, 404)

    def test_valid_save_returns_success(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        resp = client.post("/api/projects/demo/config", json=self._valid_payload())
        assert resp.status_code == 200
        assert resp.json()["status"] == "success"

    def test_config_yaml_written_on_success(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        client.post("/api/projects/demo/config", json=self._valid_payload())
        assert (proj_dir / "config.yaml").exists()

    def test_empty_config_returns_400(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        resp = client.post("/api/projects/demo/config", json={"config": None, "dashboard": None})
        assert resp.status_code == 400

    def test_dashboard_json_written_when_provided(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        payload = self._valid_payload()
        payload["dashboard"] = {
            "version": 42, "kpi": [], "charts": [],
            "list": {"visible_cols": [], "filter_cols": []}
        }
        client.post("/api/projects/demo/config", json=payload)
        assert (proj_dir / "dashboard.json").exists()
        data = json.loads((proj_dir / "dashboard.json").read_text(encoding="utf-8"))
        assert data["version"] == 42


# ─────────────────────────────────────────────────────────────────────────────
# POST /api/projects/{name}/run — 파이프라인 실행
# ─────────────────────────────────────────────────────────────────────────────

class TestRunProjectPipeline:
    def test_nonexistent_project_returns_404(self, client, tmp_path, monkeypatch):
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        (tmp_path / "storage" / "projects").mkdir(parents=True, exist_ok=True)
        resp = client.post("/api/projects/ghost/run")
        assert resp.status_code == 404

    def test_invalid_name_returns_400(self, client):
        resp = client.post("/api/projects/../run")
        assert resp.status_code in (400, 404)

    def test_missing_config_yaml_returns_404(self, client, tmp_path, monkeypatch):
        """프로젝트 폴더는 있지만 config.yaml 없으면 404."""
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "nocfg"
        proj_dir.mkdir(parents=True)
        resp = client.post("/api/projects/nocfg/run")
        assert resp.status_code == 404

    def test_returns_started_status(self, client, tmp_path, monkeypatch):
        """config.yaml 이 있으면 {status: 'started'} 를 즉시 반환한다."""
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        data_xlsx = tmp_path / "data.xlsx"
        _make_xlsx(data_xlsx)
        _write_valid_config(proj_dir, data_xlsx=data_xlsx)
        resp = client.post("/api/projects/demo/run")
        assert resp.status_code == 200
        assert resp.json()["status"] == "started"

    def test_conflict_409_when_already_running(self, client, tmp_path, monkeypatch):
        """이미 실행 중이면 409 Conflict 반환."""
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "demo"
        proj_dir.mkdir(parents=True)
        data_xlsx = tmp_path / "data.xlsx"
        _make_xlsx(data_xlsx)
        _write_valid_config(proj_dir, data_xlsx=data_xlsx)
        # 잡을 직접 'running' 상태로 설정
        _job_set("demo", {"status": "running", "started_at": "2026-01-01T00:00:00"})
        resp = client.post("/api/projects/demo/run")
        assert resp.status_code == 409
        _pipeline_jobs.clear()

    def test_broken_config_returns_400(self, client, tmp_path, monkeypatch):
        """Pydantic 검증 실패 config.yaml 이면 400을 반환한다.

        source_col/source_cols/source_label 없는 컬럼은 ColumnDef._check_source
        validator가 ValidationError 를 발생시키므로 반드시 400을 반환해야 한다.
        """
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        proj_dir = tmp_path / "storage" / "projects" / "broken"
        proj_dir.mkdir(parents=True)
        # source 정보 없는 컬럼 → ColumnDef._check_source → ValidationError → 400
        broken_yaml = (
            "project: broken\n"
            "columns:\n"
            "  - output_col: bad_col\n"
            "    # source_col / source_cols / source_label 모두 없음 → Pydantic 오류\n"
        )
        (proj_dir / "config.yaml").write_text(broken_yaml, encoding="utf-8")
        resp = client.post("/api/projects/broken/run")
        assert resp.status_code == 400


# ─────────────────────────────────────────────────────────────────────────────
# Security: 프로젝트 이름 경로 순회 방지
# ─────────────────────────────────────────────────────────────────────────────

class TestProjectNameSecurity:
    PATH_TRAVERSAL_NAMES = [
        "../etc",
        "../../windows/system32",
        "a" * 65,           # 64자 초과
        "hello world",      # 공백 포함
        "proj;drop",        # 세미콜론
    ]

    @pytest.mark.parametrize("bad_name", PATH_TRAVERSAL_NAMES)
    def test_status_rejects_unsafe_names(self, client, bad_name):
        encoded = bad_name.replace("/", "%2F").replace(" ", "%20")
        resp = client.get(f"/api/projects/{encoded}/status")
        assert resp.status_code in (400, 404, 422)

    @pytest.mark.parametrize("bad_name", PATH_TRAVERSAL_NAMES)
    def test_run_rejects_unsafe_names(self, client, bad_name):
        encoded = bad_name.replace("/", "%2F").replace(" ", "%20")
        resp = client.post(f"/api/projects/{encoded}/run")
        assert resp.status_code in (400, 404, 422)

    def test_valid_korean_name_passes_validation(self, client, tmp_path, monkeypatch):
        """한글 프로젝트명은 허용된다."""
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        (tmp_path / "storage" / "projects").mkdir(parents=True, exist_ok=True)
        resp = client.get("/api/projects/테스트프로젝트/status")
        # 200 idle 또는 404 (프로젝트 없음)가 모두 허용됨; 400이면 안 됨
        assert resp.status_code != 400


# ─────────────────────────────────────────────────────────────────────────────
# SSE 로그 스트림 엔드포인트
# ─────────────────────────────────────────────────────────────────────────────

class TestStreamProjectLogs:
    """GET /api/projects/{name}/logs/stream — SSE 실시간 로그 스트리밍."""

    def test_invalid_name_returns_400(self, client):
        # Names with illegal characters must be rejected before streaming
        resp = client.get("/api/projects/hello%20world/logs/stream")
        assert resp.status_code == 400

    def test_returns_event_stream_content_type(self, client, tmp_path, monkeypatch):
        """SSE 엔드포인트는 text/event-stream 미디어 타입을 반환한다."""
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        _pipeline_jobs.clear()
        _job_set("demo", {"status": "done"})

        with client.stream("GET", "/api/projects/demo/logs/stream") as resp:
            assert resp.status_code == 200
            assert "text/event-stream" in resp.headers.get("content-type", "")

    def test_done_job_terminates_stream(self, client, tmp_path, monkeypatch):
        """완료된 잡은 스트림에 종료 메시지를 보내고 종료된다."""
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        _pipeline_jobs.clear()
        _job_set("demo", {"status": "done"})

        with client.stream("GET", "/api/projects/demo/logs/stream") as resp:
            lines = []
            for line in resp.iter_lines():
                lines.append(line)
                if "[SYSTEM]" in line:
                    break
        assert any("[SYSTEM]" in line for line in lines)

    def test_buffered_logs_are_streamed(self, client, tmp_path, monkeypatch):
        """파이프라인 실행 중 쌓인 로그가 스트림에 포함된다."""
        import app.main as main_module
        # Deprecated PROJECT_ROOT patch removed
        _pipeline_jobs.clear()
        _job_set("demo", {"status": "done"})
        main_module._project_logs["demo"] = ["line1", "line2"]

        with client.stream("GET", "/api/projects/demo/logs/stream") as resp:
            content = b"".join(resp.iter_bytes()).decode()

        assert "line1" in content
        assert "line2" in content
        main_module._project_logs.pop("demo", None)


# ─────────────────────────────────────────────────────────────────────────────
# DELETE /api/projects/{name} — 프로젝트 삭제
# ─────────────────────────────────────────────────────────────────────────────

class TestDeleteProject:
    def test_invalid_name_returns_400(self, client):
        resp = client.delete("/api/projects/../delete")
        assert resp.status_code in (400, 404)

    def test_delete_nonexistent_project_succeeds_gracefully(self, client):
        resp = client.delete("/api/projects/nonexistent_test")
        assert resp.status_code == 200
        assert resp.json()["status"] == "success"

    def test_complete_deletion_removes_files_and_manifest_entry(self, client, tmp_path):
        import app.main as main_module
        
        # 임시 환경 모킹 설정
        proj_name = "test_del"
        proj_dir = tmp_path / "storage" / "projects" / proj_name
        proj_dir.mkdir(parents=True)
        (proj_dir / "config.yaml").write_text("project: test_del", encoding="utf-8")
        
        # 2. 배포용 JSON 생성
        data_dir = tmp_path / "frontend" / "public" / "data"
        data_dir.mkdir(parents=True)
        frontend_json = data_dir / f"{proj_name}_data.json"
        frontend_json.write_text("{}", encoding="utf-8")
        
        # 3. 매니페스트 생성 및 엔트리 삽입
        manifest_path = data_dir / "projects.json"
        manifest_data = [
            {"id": "other_proj", "name": "다른프로젝트"},
            {"id": proj_name, "name": "삭제대상프로젝트"}
        ]
        manifest_path.write_text(json.dumps(manifest_data), encoding="utf-8")
        
        # API 호출
        resp = client.delete(f"/api/projects/{proj_name}")
        assert resp.status_code == 200
        assert resp.json()["status"] == "success"
        
        # 검증: 폴더 삭제되었는가?
        assert not proj_dir.exists()
        
        # 검증: 배포 JSON 삭제되었는가?
        assert not frontend_json.exists()
        
        # 검증: 매니페스트에서 제거되었는가?
        with open(manifest_path, encoding="utf-8") as f:
            updated_manifest = json.load(f)
        assert len(updated_manifest) == 1
        assert updated_manifest[0]["id"] == "other_proj"
