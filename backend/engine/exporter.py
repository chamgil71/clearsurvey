"""Export cleaned.xlsx → survey_data.json for web dashboard."""
from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path
from typing import Any

import openpyxl

from engine.config import SurveyConfig


# ---------------------------------------------------------------------------
# Type detection
# ---------------------------------------------------------------------------

def _detect_type(values: list[Any]) -> str:
    if not values:
        return "text"
    non_null = [v for v in values if v is not None]
    if not non_null:
        return "text"

    numeric_count = sum(1 for v in non_null if isinstance(v, (int, float)))
    if numeric_count / len(non_null) >= 0.8:
        return "numeric"

    unique_strs = {str(v).strip() for v in non_null if str(v).strip()}
    ratio = len(unique_strs) / len(non_null)
    if ratio <= 0.5 and len(unique_strs) <= 40:
        return "category"

    return "text"


# ---------------------------------------------------------------------------
# Main export function
# ---------------------------------------------------------------------------

def _build_default_dashboard(columns: list[dict]) -> dict:
    """컬럼 메타에서 React DashboardConfig 호환 기본 설정을 생성합니다.

    React 타입 (web/src/types/dashboard.ts) 과 동일한 구조를 반환합니다:
      version: number
      kpi:    [{label, type: "total_rows"|"sum"|"count_value", col?, value?}]
      charts: [{col, type: "donut"|"bar"|"hbar"|"multibar", title?}]
      list:   {visible_cols: [...], filter_cols: [...]}
    """
    cat_cols = [c for c in columns if c["type"] == "category"]
    num_cols = [c for c in columns if c["type"] == "numeric"]

    # ── KPI ────────────────────────────────────────────────────────────────
    kpi: list[dict] = [{"label": "총 응답수", "type": "total_rows"}]
    for col in num_cols[:1]:
        kpi.append({"label": col["label"] + " 합계", "type": "sum", "col": col["key"]})

    # ── 차트 ───────────────────────────────────────────────────────────────
    charts: list[dict] = []
    for i, col in enumerate(cat_cols[:5]):
        uc = col.get("unique_count", 0)
        chart_type = "donut" if uc <= 5 else ("bar" if uc <= 15 else "hbar")
        charts.append({"col": col["key"], "type": chart_type, "title": col["label"]})

    # O_ 접두사 이진 컬럼 → multibar 하나로 묶기
    binary_cols = [c for c in num_cols if c["key"].startswith("O_")]
    if len(binary_cols) >= 2:
        charts.append({
            "type": "multibar",
            "title": "항목별 현황",
            "cols": [
                {"col": c["key"], "label": c["label"].replace("O_", "")}
                for c in binary_cols
            ],
        })

    # category 차트가 부족하면 일반 numeric 컬럼으로 bar 차트 보충 (TS buildDefaultConfig 동기화)
    plain_nums = [c for c in num_cols if not c["key"].startswith("O_")]
    if len(charts) < 4:
        for col in plain_nums[: 4 - len(charts)]:
            charts.append({"col": col["key"], "type": "bar", "title": col["label"]})

    return {
        "version": 1,
        "kpi": kpi[:4],
        "charts": charts[:6],
        "list": {
            "visible_cols": [c["key"] for c in columns[:8]],
            "filter_cols":  [c["key"] for c in cat_cols[:3]],
        },
    }


def export_to_json(
    cleaned_xlsx: Path,
    cfg: SurveyConfig,
    output_path: Path | None = None,
    project_dir: Path | None = None,
) -> dict:
    """Read Cleaned sheet from xlsx → return JSON-serializable dict.

    project_dir: 프로젝트 폴더 경로. dashboard.json이 있으면 result["dashboard"]에 포함.
    Also writes to output_path if provided.
    """
    # read_only=True is more tolerant of slicer-patched XMLs; fall back if needed
    try:
        wb = openpyxl.load_workbook(cleaned_xlsx, data_only=True, read_only=True)
    except Exception:
        wb = openpyxl.load_workbook(cleaned_xlsx, data_only=True)
    ws_name = cfg.sheets.cleaned
    if ws_name not in wb.sheetnames:
        raise ValueError(f"'{ws_name}' 시트를 찾을 수 없습니다: {cleaned_xlsx.name}")
    ws = wb[ws_name]

    # ── headers from row 2 (output header row) ───────────────────────────────
    # read_only worksheets use .rows iterator; cell() is not available
    all_rows_iter = list(ws.rows)
    hdr_row_cells = all_rows_iter[1] if len(all_rows_iter) > 1 else []
    headers: list[str] = [
        str(c.value).strip() if c.value is not None else ""
        for c in hdr_row_cells
    ]
    max_col = len(headers)

    # ── rows from row 3+ ──────────────────────────────────────────────────────
    rows: list[dict] = []
    for row_cells in all_rows_iter[2:]:
        row: dict = {}
        for ci, (h, cell) in enumerate(zip(headers, row_cells), 1):
            if not h:
                continue
            row[h] = cell.value
        if any(v is not None and str(v).strip() != "" for v in row.values()):
            rows.append(row)

    # ── column metadata ───────────────────────────────────────────────────────
    columns: list[dict] = []
    for h in headers:
        if not h:
            continue
        vals = [r[h] for r in rows if r.get(h) is not None]
        col_type = _detect_type(vals)
        unique_strs = sorted({str(v).strip() for v in vals if str(v).strip()}) if col_type == "category" else []
        entry: dict = {
            "key":          h,
            "label":        h,
            "type":         col_type,
        }
        if col_type == "category":
            entry["unique_count"] = len(unique_strs)
            entry["unique_values"] = unique_strs[:60]   # cap for JSON size
        elif col_type == "numeric":
            nums = [float(v) for v in vals if isinstance(v, (int, float))]
            if nums:
                entry["min"] = min(nums)
                entry["max"] = max(nums)
                entry["sum"] = sum(nums)
        columns.append(entry)

    # ── aggregates (category counts) ──────────────────────────────────────────
    aggregates: dict[str, dict[str, int]] = {}
    for col in columns:
        vals = [r[col["key"]] for r in rows if r.get(col["key"]) is not None]
        unique_vals = {str(v).strip() for v in vals if str(v).strip()}
        
        # Check if the column is configured to be in slicer in config.yaml
        cfg_col = next((c for c in cfg.columns if c.output_col == col["key"]), None)
        in_slicer = getattr(cfg_col, "include_in_slicer", False) if cfg_col else False
        
        if col["type"] == "category" or in_slicer:
            counts: dict[str, int] = {}
            for row in rows:
                v = str(row.get(col["key"]) or "").strip()
                if v:
                    # 쉼표 분리 후 개별 항목 카운팅 (다중 응답 필터 지원)
                    parts = [p.strip() for p in v.split(",") if p.strip()]
                    for p in parts:
                        counts[p] = counts.get(p, 0) + 1
            aggregates[col["key"]] = dict(sorted(counts.items(), key=lambda x: -x[1]))

    # ── serialize rows (convert non-JSON types) ───────────────────────────────
    def _clean(v: Any) -> Any:
        import math
        import numpy as np
        if v is None:
            return None
        # NaN 값 검사 및 방어
        if isinstance(v, float) and math.isnan(v):
            return None
        if isinstance(v, (np.integer, np.floating)) and np.isnan(v):
            return None
            
        if isinstance(v, (int, float, bool, np.integer, np.floating)):
            return float(v) if isinstance(v, (float, np.floating)) else int(v)
        val_str = str(v).strip()
        if val_str == "NaN" or val_str == "nan":
            return None
        if val_str.isdigit():
            return int(val_str)
        try:
            val_float = float(val_str)
            if math.isnan(val_float):
                return None
            return val_float
        except ValueError:
            pass
        return val_str

    clean_rows = [{h: _clean(row.get(h)) for h in headers if h} for row in rows]

    result = {
        "meta": {
            "project":      cfg.project,
            "generated_at": datetime.now().isoformat(timespec="seconds"),
            "total_rows":   len(rows),
            "source_file":  cleaned_xlsx.name,
            "columns":      columns,
        },
        "rows":       clean_rows,
        "aggregates": aggregates,
    }

    # ── embed dashboard config ────────────────────────────────────────────────
    # 우선순위: project/dashboard.json > config/dashboard_defaults.yaml > 자동 생성
    # 자동 생성 결과는 React DashboardConfig 타입과 호환됩니다.
    dash_cfg: dict | None = None

    # 1. 조직 공통 기본값 (config/dashboard_defaults.yaml)
    if project_dir is not None:
        defaults_path = project_dir.parent.parent / "config" / "dashboard_defaults.yaml"
        if defaults_path.exists():
            import yaml as _yaml
            with open(defaults_path, encoding="utf-8") as f:
                raw_defaults = _yaml.safe_load(f) or {}
            # 주석만 있는 파일은 실제 키가 없을 수 있음
            if raw_defaults and any(v is not None for v in raw_defaults.values()):
                dash_cfg = raw_defaults

    # 2. 프로젝트별 설정 (project/dashboard.json) — 공통값 위에 덮어씀
    if project_dir is not None:
        dash_path = project_dir / "dashboard.json"
        if dash_path.exists():
            with open(dash_path, encoding="utf-8") as f:
                dash_cfg = json.load(f)
            print(f"대시보드 설정 포함: {dash_path}")

    # 3. 설정 없으면 컬럼 메타에서 DashboardConfig 호환 기본값 자동 생성
    if not dash_cfg:
        dash_cfg = _build_default_dashboard(columns)

    result["dashboard"] = dash_cfg

    if output_path:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print(f"내보내기 완료: {output_path} ({len(rows)}행, {len(columns)}컬럼)")
        _update_manifest(output_path, cfg)

    return result


def _update_manifest(data_json: Path, cfg: SurveyConfig) -> None:
    """Update frontend/public/data/projects.json manifest."""
    manifest_path = data_json.parent / "projects.json"
    existing: list[dict] = []
    if manifest_path.exists():
        try:
            with open(manifest_path, encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            existing = []

    entry = {
        "id":      cfg.project,
        "name":    cfg.project,
        "file":    data_json.name,
        "updated": datetime.now().strftime("%Y-%m-%d %H:%M"),
    }
    existing = [e for e in existing if e.get("id") != cfg.project]
    existing.append(entry)

    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)
    print(f"프로젝트 목록 갱신: {manifest_path}")
