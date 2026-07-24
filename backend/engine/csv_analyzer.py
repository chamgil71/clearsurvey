"""CSV 소스 분석기.

`ExcelAnalyzer`(analyzer.py)와 달리 헤더 행 탐지에 점수 매기기가 필요 없다 — CSV는 병합 셀·
다중 타이틀 행처럼 "머리말이 몇 번째 줄인지 애매한" 구조가 애초에 없고, 사실상 항상 1행이
헤더다. 그래서 `detect_header_row()`는 고정값을 반환한다.

인코딩은 국내 설문 툴(네이버폼 등)이 EUC-KR/CP949로 내보내는 경우가 흔해 후보 목록을
순서대로 시도한다 — 외부 라이브러리(chardet 등) 의존 없이 표준 라이브러리만으로 처리한다.
"""
from __future__ import annotations

import csv
from pathlib import Path

from engine.base_analyzer import BaseAnalyzer


# BOM 있는 UTF-8을 UTF-8보다 먼저 시도해야 utf-8-sig가 BOM을 벗겨낸다.
_ENCODING_CANDIDATES = ["utf-8-sig", "utf-8", "cp949", "euc-kr"]

_VIRTUAL_SHEET = "CSV"


def detect_csv_encoding(path: str | Path) -> str:
    """후보 인코딩을 순서대로 디코딩 시도해 최초로 성공하는 것을 반환한다."""
    raw = Path(path).read_bytes()
    for enc in _ENCODING_CANDIDATES:
        try:
            raw.decode(enc)
            return enc
        except UnicodeDecodeError:
            continue
    # 전부 실패하면 깨진 문자를 치환해서라도 진행한다 — 업로드 자체를 막지 않는다.
    return "utf-8"


def read_csv_rows(path: str | Path, encoding: str | None = None) -> list[list[str]]:
    """CSV 전체를 문자열 2차원 리스트로 읽는다. 빈 셀은 빈 문자열로 유지한다."""
    enc = encoding or detect_csv_encoding(path)
    with open(path, "r", encoding=enc, newline="", errors="replace") as f:
        return list(csv.reader(f))


class CsvAnalyzer(BaseAnalyzer):
    """Inspect a csv file and propose source configuration.

    `sheet_names()`는 CSV에 시트 개념이 없으므로 가상 이름 하나만 돌려준다 — `ExcelAnalyzer`와
    같은 인터페이스를 맞추기 위함이다(호출부가 xlsx/csv를 구분하지 않고 쓸 수 있게).
    """

    def __init__(self, path: str | Path):
        super().__init__(path)
        self._encoding: str | None = None

    def _rows(self) -> list[list[str]]:
        if self._encoding is None:
            self._encoding = detect_csv_encoding(self._path)
        return read_csv_rows(self._path, self._encoding)

    def sheet_names(self) -> list[str]:
        return [_VIRTUAL_SHEET]

    def detect_header_row(self, sheet_name: str | None = None) -> dict:
        rows = self._rows()
        header_cells = rows[0] if rows else []
        column_count = len([c for c in header_cells if c is not None and c.strip() != ""])
        return {
            "sheet": _VIRTUAL_SHEET,
            "header_row": 1,
            "header_score": 1.0,
            "data_start_row": 2,
            "column_count": column_count,
            "sample_headers": [c for c in header_cells if c and c.strip()][:10],
            "encoding": self._encoding,
        }

    def all_headers(self, sheet_name: str | None = None) -> list[str | None]:
        rows = self._rows()
        return rows[0] if rows else []
