"""
Tests for app/main.py — GET/POST /api/public-data/{audit,cleanup}

핵심 안전장치를 검증한다: cleanup은 클라이언트가 보낸 파일명을 그대로 믿지 않고,
삭제 직전 다시 감사를 돌려 실제 고아 파일만 지운다. 매니페스트에 등록된 파일은
요청에 섞여 있어도 절대 지우지 않아야 한다 — 이게 이 엔드포인트의 존재 이유다.

실행: pytest tests/test_public_data_audit_api.py -v
"""
from __future__ import annotations

import json
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from app.main import app, _pipeline_jobs


@pytest.fixture
def client(tmp_path, monkeypatch):
    import app.main as main_module
    monkeypatch.setattr(main_module, "STORAGE_ROOT", tmp_path / "storage")
    monkeypatch.setattr(main_module, "FRONTEND_ROOT", tmp_path / "frontend")
    monkeypatch.setattr(main_module, "BACKEND_ROOT", tmp_path / "backend")
    _pipeline_jobs.clear()
    with TestClient(app) as c:
        yield c


@pytest.fixture
def data_dir(tmp_path) -> Path:
    d = tmp_path / "frontend" / "public" / "data"
    d.mkdir(parents=True, exist_ok=True)
    return d


def _write_manifest(data_dir: Path, entries: list[dict]) -> None:
    (data_dir / "projects.json").write_text(
        json.dumps(entries, ensure_ascii=False), encoding="utf-8"
    )


def test_audit_reports_orphan_file(client, data_dir):
    (data_dir / "a_data.json").write_text("{}", encoding="utf-8")
    _write_manifest(data_dir, [])
    (data_dir / "leaked_data.json").write_text("{}", encoding="utf-8")

    resp = client.get("/api/public-data/audit")

    assert resp.status_code == 200
    body = resp.json()
    assert "a_data.json" in body["orphans"]
    assert "leaked_data.json" in body["orphans"]


def test_cleanup_deletes_only_confirmed_orphans(client, data_dir):
    _write_manifest(data_dir, [{"id": "keep", "file": "keep_data.json", "published": True}])
    (data_dir / "keep_data.json").write_text("{}", encoding="utf-8")
    (data_dir / "orphan_data.json").write_text("{}", encoding="utf-8")

    resp = client.post("/api/public-data/cleanup", json={"files": ["orphan_data.json"]})

    assert resp.status_code == 200
    body = resp.json()
    assert body["deleted"] == ["orphan_data.json"]
    assert not (data_dir / "orphan_data.json").exists()
    assert (data_dir / "keep_data.json").exists()


def test_cleanup_refuses_to_delete_manifest_registered_file(client, data_dir):
    """요청에 등록된(고아 아닌) 파일명이 섞여 있어도 절대 지우면 안 된다."""
    _write_manifest(data_dir, [{"id": "keep", "file": "keep_data.json", "published": False}])
    (data_dir / "keep_data.json").write_text("{}", encoding="utf-8")

    resp = client.post("/api/public-data/cleanup", json={"files": ["keep_data.json"]})

    assert resp.status_code == 200
    body = resp.json()
    assert body["deleted"] == []
    assert body["skipped"] == ["keep_data.json"]
    assert (data_dir / "keep_data.json").exists()


def test_cleanup_rejects_empty_files_list(client, data_dir):
    resp = client.post("/api/public-data/cleanup", json={"files": []})
    assert resp.status_code == 400
