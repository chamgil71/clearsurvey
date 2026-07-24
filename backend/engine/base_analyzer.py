"""소스 포맷(xlsx/csv)과 무관한 분석기 공통 로직.

`ExcelAnalyzer`(analyzer.py)·`CsvAnalyzer`(csv_analyzer.py) 둘 다 이 클래스를 상속한다.
`generate_config_yaml`/`generate_draft_xlsx`는 `sheet_names()`·`detect_header_row()`·
`all_headers()` 세 메서드만으로 동작하므로, 포맷별 서브클래스는 그 세 메서드만 구현하면 된다.
"""
from __future__ import annotations

from pathlib import Path
from typing import Any


_DEFAULT_COL_WIDTH = 16

# ---------------------------------------------------------------------------
# Transform auto-suggestion — keyword → transform mapping (first match wins)
# ---------------------------------------------------------------------------

_TRANSFORM_HINTS: list[tuple[list[str], str]] = [
    (["이메일", "email", "e-mail", "메일"],                          "validate_email"),
    (["url", "홈페이지", "웹사이트", "링크"],                         "validate_url"),
    (["일시", "날짜", "date", "time", "등록일", "신청일", "접수일", "완료일", "시작일", "종료일"],
                                                                    "normalize_date"),
    (["연락처", "전화", "phone", "tel", "휴대폰", "핸드폰", "mobile"], "normalize_phone"),
    (["기관명", "회사명", "법인명", "업체명"],                         "normalize_company"),
    (["성명", "담당자명"],                                            "name_blind"),
    (["직급", "직책", "직함", "position"],                            "normalize_title"),
]


def _suggest_transform(label: str) -> str:
    """Return the most appropriate transform for a column label, or 'copy'."""
    lower = label.lower()
    for keywords, transform in _TRANSFORM_HINTS:
        if any(kw.lower() in lower for kw in keywords):
            return transform
    return "copy"


def _unique_label(label: str, seen: dict[str, int]) -> str:
    """Return a label unique within seen, appending _2, _3 ... as needed."""
    if label in seen:
        seen[label] += 1
        return f"{label}_{seen[label]}"
    seen[label] = 1
    return label


class BaseAnalyzer:
    """소스 파일을 검사해 초안 설정을 제안하는 분석기의 공통 기반.

    서브클래스는 `sheet_names()`·`detect_header_row()`·`all_headers()` 세 메서드만
    구현하면 `generate_config_yaml()`·`generate_draft_xlsx()`를 그대로 물려받는다.
    """

    def __init__(self, path: str | Path):
        self._path = Path(path)

    def sheet_names(self) -> list[str]:
        raise NotImplementedError

    def detect_header_row(self, sheet_name: str | None = None) -> dict:
        raise NotImplementedError

    def all_headers(self, sheet_name: str | None = None) -> list[str | None]:
        raise NotImplementedError

    def analyze(self, sheet_name: str | None = None) -> dict:
        """Full analysis: sheets, header detection, column count."""
        sheets = self.sheet_names()
        target = sheet_name or sheets[0]
        detection = self.detect_header_row(target)
        return {
            "file": self._path.name,
            "sheets": sheets,
            **detection,
        }

    def generate_config_yaml(
        self,
        output_path: str | Path,
        sheet_name: str | None = None,
        project_name: str | None = None,
        source_override: str | None = None,
    ) -> Path:
        """Generate a starter config.yaml with detected header/data rows and all columns.

        source_override: use this path string for source.file instead of self._path.
        """
        import yaml

        sheets = self.sheet_names()
        target = sheet_name or sheets[0]
        detection = self.detect_header_row(target)
        hrow   = detection.get("header_row", 1)
        dstart = detection.get("data_start_row", hrow + 1)
        raw_cells = self.all_headers(target)

        proj = project_name or self._path.stem

        # prefer relative path from config file's directory
        out = Path(output_path)
        if source_override:
            src_path = source_override
        else:
            import os
            src_path = os.path.relpath(
                self._path.resolve(),
                out.parent.resolve()
            ).replace("\\", "/")

        columns = []
        seen: dict[str, int] = {}
        for i, cell in enumerate(raw_cells, 1):
            label = str(cell).strip() if cell is not None else ""
            if not label:
                label = f"열{i}"
            # deduplicate to avoid Excel Table/JSON key conflicts
            label = _unique_label(label, seen)
            columns.append({
                "output_col": label,
                "source_col": i,
                "transform": _suggest_transform(label),
                "width": _DEFAULT_COL_WIDTH,
            })

        cfg: dict = {
            "project": proj,
            "style_file": None,
            "patterns_file": "../../../backend/config/patterns.yaml",
            "source": {
                "file": src_path,
                "sheet": target if target != sheets[0] else None,
                "header_row": hrow,
                "data_start_row": dstart,
            },
            "paths": {
                "output_dir": "output",
                "output_file": f"{proj}_cleaned.xlsx",
            },
            "sheets": {"cleaned": "Cleaned", "summary": "Summary"},
            "columns": columns,
            "transform_kwargs": {},
            "slicers": [],
            "summary": {"sheet_name": "Summary", "sections": []},
        }

        out.parent.mkdir(parents=True, exist_ok=True)
        with open(out, "w", encoding="utf-8") as f:
            yaml.dump(cfg, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
        return out

    def generate_draft_xlsx(
        self,
        output_path: str | Path,
        sheet_name: str | None = None,
        project_name: str | None = None,
    ) -> Path:
        """Create a draft Config xlsx from the analyzed file.

        원본 포맷(xlsx/csv)과 무관하게 산출물은 항상 xlsx다 — 사람이 Excel로 열어 Config
        시트를 손으로 고치는 검수 워크플로우이기 때문이다.

        Opens in Excel → user edits the Config sheet → re-runs with:
            python main.py run <draft.xlsx> --input <original file>
        """
        from openpyxl import Workbook
        from engine.config import (
            ColumnDef, PathsConfig, PreprocessConfig, RowFilterConfig,
            SourceConfig, SummaryConfig, OutputSheetsConfig, SurveyConfig,
        )
        from engine.config_excel import write_config_sheet, write_guide_sheet

        sheets = self.sheet_names()
        target = sheet_name or sheets[0]
        detection = self.detect_header_row(target)
        hrow       = detection.get("header_row", 1)
        dstart     = detection.get("data_start_row", hrow + 1)
        raw_cells  = self.all_headers(target)

        proj = project_name or Path(self._path).stem

        # Build ColumnDef list — one per non-empty header cell (deduplicated)
        col_defs: list[ColumnDef] = []
        seen: dict[str, int] = {}
        for i, cell in enumerate(raw_cells, 1):
            label = str(cell).strip() if cell is not None else ""
            if not label:
                label = f"열{i}"
            label = _unique_label(label, seen)
            col_defs.append(ColumnDef(
                output_col      = label,
                source_col_name = label,   # original header — read-only reference
                source_col      = i,
                transform       = "copy",
                width           = _DEFAULT_COL_WIDTH,
            ))

        cfg = SurveyConfig(
            project  = proj,
            source   = SourceConfig(
                sheet          = target if target != sheets[0] else None,
                file           = str(self._path),
                header_row     = hrow,
                data_start_row = dstart,
            ),
            paths    = PathsConfig(
                output_dir  = "output",
                output_file = f"{proj}_cleaned.xlsx",
            ),
            sheets   = OutputSheetsConfig(cleaned="cleaned", summary="summary"),
            columns  = col_defs,
            preprocess = PreprocessConfig(row_filter=RowFilterConfig()),
            summary  = SummaryConfig(sections=[]),
        )

        wb = Workbook()
        wb.remove(wb.active)
        write_config_sheet(wb, cfg)
        write_guide_sheet(wb)

        out = Path(output_path)
        out.parent.mkdir(parents=True, exist_ok=True)
        wb.save(out)
        return out
