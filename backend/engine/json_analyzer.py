"""JSON 소스 분석기.

지원 범위: **평면 배열-of-객체**(`[{...}, {...}, ...]`)만 지원한다. 객체 하나만 있거나 중첩
객체/배열이 섞인 구조는 컬럼을 어떻게 펼칠지(flatten 규칙)가 제품 결정 사항이라 이번 범위에
넣지 않는다 — `docs/plan/pending/new_beginnings_comparison_plan.md` §1-C 참고.

컬럼 순서: 객체마다 키가 다를 수 있으므로, **첫 등장 순서 기준 키 합집합**을 헤더로 삼는다
(엑셀 헤더 행에 대응). 이후 각 객체를 이 고정 순서에 맞춰 값을 채우고, 없는 키는 빈 값으로
둔다 — CSV처럼 위치(1-based source_col) 기반인 나머지 파이프라인과 계약을 맞추기 위함이다.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from engine.base_analyzer import BaseAnalyzer


_VIRTUAL_SHEET = "JSON"


class JsonFormatError(ValueError):
    """지원하지 않는 JSON 구조(배열-of-객체가 아님)."""


def load_json_records(path: str | Path) -> list[dict[str, Any]]:
    """배열-of-객체 JSON을 읽어 그대로 반환한다. 형식이 다르면 명확한 에러를 낸다."""
    with open(path, "r", encoding="utf-8-sig") as f:
        data = json.load(f)
    if not isinstance(data, list):
        raise JsonFormatError(
            "JSON 최상위는 배열([...])이어야 합니다 — 객체({...}) 하나만 있는 파일은 지원하지 않습니다."
        )
    if data and not all(isinstance(item, dict) for item in data):
        raise JsonFormatError("배열의 각 항목은 객체({...})여야 합니다.")
    return data


def json_records_to_columns(records: list[dict[str, Any]]) -> tuple[list[str], list[list[Any]]]:
    """레코드 목록 → (헤더 목록, 행렬). 키는 첫 등장 순서로 합집합을 취한다."""
    headers: list[str] = []
    seen: set[str] = set()
    for rec in records:
        for k in rec.keys():
            if k not in seen:
                seen.add(k)
                headers.append(k)

    rows = [[rec.get(h) for h in headers] for rec in records]
    return headers, rows


class JsonAnalyzer(BaseAnalyzer):
    """Inspect a json file(array-of-objects) and propose source configuration."""

    def __init__(self, path: str | Path):
        super().__init__(path)
        self._records: list[dict[str, Any]] | None = None

    def _load(self) -> list[dict[str, Any]]:
        if self._records is None:
            self._records = load_json_records(self._path)
        return self._records

    def sheet_names(self) -> list[str]:
        return [_VIRTUAL_SHEET]

    def detect_header_row(self, sheet_name: str | None = None) -> dict:
        headers, _ = json_records_to_columns(self._load())
        return {
            "sheet": _VIRTUAL_SHEET,
            "header_row": 1,
            "header_score": 1.0,
            "data_start_row": 2,
            "column_count": len(headers),
            "sample_headers": headers[:10],
        }

    def all_headers(self, sheet_name: str | None = None) -> list[str | None]:
        headers, _ = json_records_to_columns(self._load())
        return headers
