from __future__ import annotations

from pathlib import Path
from typing import Any

import openpyxl


_MAX_HEADER_SEARCH = 5   # look up to this many rows for the header
_DATA_SCAN_ROWS    = 5   # rows to scan after header for actual data start
_DATA_MIN_DENSITY  = 0.1 # minimum fill ratio to consider a row as real data

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


def _row_cells(ws, row: int) -> list[Any]:
    return [ws.cell(row, c).value for c in range(1, ws.max_column + 1)]


def _score_row(cells: list[Any]) -> float:
    """Score a row as a candidate header (0.0–1.0)."""
    if not cells:
        return 0.0
    total = len(cells)
    non_empty = sum(1 for c in cells if c is not None and str(c).strip() != "")
    strings   = sum(1 for c in cells if isinstance(c, str) and c.strip() != "")
    numerics  = sum(1 for c in cells if isinstance(c, (int, float)))

    ne_ratio  = non_empty / total
    str_ratio = strings / total if non_empty else 0.0
    no_num    = 0.2 if numerics == 0 else 0.0

    return round(ne_ratio * 0.4 + str_ratio * 0.4 + no_num, 4)


def _detect_data_start(ws, header_row: int) -> int:
    """Find first row after header that looks like real data.

    Strategy:
    1. Collect fill densities for the next _DATA_SCAN_ROWS rows.
    2. Use max_density * 0.5 as adaptive threshold (handles both dense
       and sparse surveys without a fixed magic number).
    3. Fallback: header_row + 1 when all scanned rows are empty.
    """
    total = ws.max_column or 1
    densities: list[tuple[int, float]] = []
    for r in range(header_row + 1, header_row + _DATA_SCAN_ROWS + 1):
        cells = _row_cells(ws, r)
        non_empty = sum(1 for c in cells if c is not None and str(c).strip() != "")
        densities.append((r, non_empty / total))

    if not densities:
        return header_row + 1

    max_density = max(d for _, d in densities)
    if max_density < _DATA_MIN_DENSITY:
        return header_row + 1  # all rows are nearly empty — give up

    threshold = max_density * 0.5
    for r, density in densities:
        if density >= threshold:
            return r
    return header_row + 1


class ExcelAnalyzer:
    """Inspect an xlsx file and propose source configuration."""

    def __init__(self, path: str | Path):
        self._path = Path(path)

    def sheet_names(self) -> list[str]:
        wb = openpyxl.load_workbook(self._path, read_only=True, data_only=True)
        names = wb.sheetnames
        wb.close()
        return names

    def detect_header_row(self, sheet_name: str | None = None) -> dict:
        """Return detection result dict with header_row, scores, sample."""
        wb = openpyxl.load_workbook(self._path, read_only=True, data_only=True)
        ws = wb[sheet_name] if sheet_name else wb.active
        if ws is None:
            wb.close()
            return {}

        scores: list[tuple[int, float, list]] = []
        for r in range(1, _MAX_HEADER_SEARCH + 1):
            cells = _row_cells(ws, r)
            scores.append((r, _score_row(cells), cells))

        best_row, best_score, best_cells = max(scores, key=lambda x: x[1])
        data_start = _detect_data_start(ws, best_row)

        wb.close()
        return {
            "sheet": ws.title,
            "header_row": best_row,
            "header_score": best_score,
            "data_start_row": data_start,
            "column_count": len([c for c in best_cells if c is not None]),
            "sample_headers": [str(c) for c in best_cells if c is not None][:10],
            "all_scores": [(r, sc) for r, sc, _ in scores],
        }

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

    def all_headers(self, sheet_name: str | None = None) -> list[str | None]:
        """Return every cell value from the detected header row (None for empty)."""
        wb = openpyxl.load_workbook(self._path, read_only=True, data_only=True)
        ws = wb[sheet_name] if sheet_name else wb.active
        if ws is None:
            wb.close()
            return []
        detection = self.detect_header_row(sheet_name)
        hrow = detection.get("header_row", 1)
        cells = _row_cells(ws, hrow)
        wb.close()
        return cells

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
            "patterns_file": None,
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

        Opens in Excel → user edits the Config sheet → re-runs with:
            python main.py run <draft.xlsx> --input <original.xlsx>
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
