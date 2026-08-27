"""
Tests for engine/public_data_audit.py::compute_public_data_audit — 정적 배포 폴더(frontend/public/data/) 감사.

배경: `projects.json` 매니페스트에 없는 '고아 파일'은 published 필터를 아예 거치지 않고
URL을 알면 그대로 열람된다(useDashboardData.ts의 published 체크는 매니페스트 항목이
있을 때만 작동). 이 함수가 그 고아 파일을 실제로 찾아내는지가 핵심이라, 정상 케이스보다
"찾아내야 하는데 못 찾는" 실패 케이스를 우선 검증한다.

실행: pytest tests/test_audit_public.py -v
"""
from __future__ import annotations

import json
from pathlib import Path

from engine.public_data_audit import compute_public_data_audit


def _write_manifest(data_dir: Path, entries: list[dict]) -> None:
    (data_dir / "projects.json").write_text(
        json.dumps(entries, ensure_ascii=False), encoding="utf-8"
    )


def test_orphan_file_not_in_manifest_is_flagged(tmp_path: Path):
    """매니페스트에 없는 파일이 디스크에 있으면 orphans 에 반드시 잡혀야 한다."""
    data_dir = tmp_path
    (data_dir / "leaked_data.json").write_text("{}", encoding="utf-8")
    _write_manifest(data_dir, [
        {"id": "a", "file": "a_data.json", "published": True},
    ])
    (data_dir / "a_data.json").write_text("{}", encoding="utf-8")

    result = compute_public_data_audit(data_dir)

    assert result["orphans"] == ["leaked_data.json"]
    assert result["broken"] == []


def test_manifest_entry_without_file_is_broken_reference(tmp_path: Path):
    data_dir = tmp_path
    _write_manifest(data_dir, [
        {"id": "gone", "file": "gone_data.json", "published": True},
    ])
    # gone_data.json 파일 자체는 만들지 않는다.

    result = compute_public_data_audit(data_dir)

    assert result["broken"] == ["gone_data.json"]
    assert result["orphans"] == []


def test_unpublished_but_still_deployed_is_reported_separately(tmp_path: Path):
    data_dir = tmp_path
    _write_manifest(data_dir, [
        {"id": "hidden", "file": "hidden_data.json", "published": False},
    ])
    (data_dir / "hidden_data.json").write_text("{}", encoding="utf-8")

    result = compute_public_data_audit(data_dir)

    assert result["orphans"] == []
    assert result["broken"] == []
    assert result["unpublished_but_deployed"] == ["hidden_data.json"]


def test_clean_state_has_no_findings(tmp_path: Path):
    data_dir = tmp_path
    _write_manifest(data_dir, [
        {"id": "ok", "file": "ok_data.json", "published": True},
    ])
    (data_dir / "ok_data.json").write_text("{}", encoding="utf-8")

    result = compute_public_data_audit(data_dir)

    assert result["orphans"] == []
    assert result["broken"] == []
    assert result["unpublished_but_deployed"] == []
    assert result["disk_count"] == 1
    assert result["manifest_count"] == 1


def test_missing_manifest_treats_every_file_as_orphan(tmp_path: Path):
    """projects.json 자체가 없으면(로드 실패 포함) 디스크의 모든 파일이 고아로 잡혀야 한다."""
    data_dir = tmp_path
    (data_dir / "untracked_data.json").write_text("{}", encoding="utf-8")

    result = compute_public_data_audit(data_dir)

    assert result["orphans"] == ["untracked_data.json"]
    assert result["manifest_count"] == 0
