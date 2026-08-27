"""frontend/public/data/ 의 실제 JSON 파일과 projects.json 매니페스트를 대조하는 순수 함수.

배경: 공개 대시보드는 `published: false` 인 프로젝트를 목록·`?data=` 딥링크에서
가려주지만, 그 판정은 `projects.json` 매니페스트에 항목이 있을 때만 작동한다
(frontend/src/hooks/useDashboardData.ts). 매니페스트에 아예 등록되지 않은 '고아 파일'은
그 차단 로직 자체가 성립하지 않아, URL을 아는 사람에게 그대로 열람된다.

CLI(`backend/main.py audit-public`)와 어드민 API(`backend/app/main.py`) 양쪽에서
이 함수 하나를 공유한다.
"""
from __future__ import annotations

import json
from pathlib import Path


def compute_public_data_audit(data_dir: Path) -> dict:
    """data_dir(정적 배포 폴더)의 실제 JSON 파일과 projects.json 매니페스트를 대조한다.

    반환: orphans/broken/unpublished_but_deployed(파일명 리스트) + disk_count/manifest_count(개수).
    - orphans: 디스크엔 있지만 매니페스트에 없는 파일 (published 필터를 아예 거치지 않음 — 가장 위험)
    - broken: 매니페스트엔 있지만 디스크에 없는 파일
    - unpublished_but_deployed: published=false 지만 여전히 정적으로 배포된 파일
    """
    manifest_path = data_dir / "projects.json"
    manifest: list[dict] = []
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    manifest_files = {entry.get("file") for entry in manifest if entry.get("file")}
    disk_files = {p.name for p in data_dir.glob("*.json") if p.name != "projects.json"}

    return {
        "orphans": sorted(disk_files - manifest_files),
        "broken": sorted(manifest_files - disk_files),
        "unpublished_but_deployed": sorted(
            entry["file"] for entry in manifest
            if entry.get("published") is False and entry.get("file") in disk_files
        ),
        "disk_count": len(disk_files),
        "manifest_count": len(manifest),
    }
