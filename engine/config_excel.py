"""Read/write SurveyConfig to/from an Excel 'Config' sheet.

Layout of the Config sheet (column A = key/marker, column B+ = value/data):

  [기본 설정]          ← section marker (bold, colored)
  항목 | 값            ← header
  project | gpu_2026
  ...

  [jang 추출 설정]
  항목 | 값
  range_strategy | max
  ...

  [컬럼 정의]
  # | output_col | source_col_name | source_col | transform | width | align | number_format | include_in_slicer | source_cols | source_label | flag_keyword | backup_col | year_col
  1 | 답변ID | 답변ID | 2 | copy | 16 | | | FALSE | | | | |
  ...

  [슬라이서]
  col | caption
  ...

  [요약 섹션]
  id | title | type | start_row | start_col | col_ref | sort
  ...

  [주소 파싱 YAML]
  <raw YAML text in B cell>
"""
from __future__ import annotations

import textwrap
from pathlib import Path
from typing import Any

import yaml
import openpyxl
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter, quote_sheetname
from openpyxl.worksheet.datavalidation import DataValidation

from engine.config import (
    AddressParsingConfig, ColumnDef, JangExtractionConfig, MergeConfig,
    PathsConfig, PreprocessConfig, SlicerDef, SourceConfig, SummaryConfig,
    SummaryLayout, SummarySection, SummaryColumnItem, SummaryKeyword,
    SummaryTotalItem, OutputSheetsConfig, SurveyConfig,
)

# ---------------------------------------------------------------------------
# Section markers (must match exactly for round-trip)
# ---------------------------------------------------------------------------
_SEC_GENERAL = "[기본 설정]"
_SEC_JANG    = "[jang 추출 설정]"
_SEC_COLUMNS = "[컬럼 정의]"
_SEC_SLICERS = "[슬라이서]"
_SEC_SUMMARY = "[요약 섹션]"
_SEC_ADDRESS = "[주소 파싱 YAML]"

_ALL_MARKERS = {_SEC_GENERAL, _SEC_JANG, _SEC_COLUMNS, _SEC_SLICERS, _SEC_SUMMARY, _SEC_ADDRESS}

# ---------------------------------------------------------------------------
# Styles
# ---------------------------------------------------------------------------
_CLR_MARKER   = "1F4E79"   # dark blue
_CLR_HEADER   = "BDD7EE"   # light blue
_CLR_READONLY = "F2F2F2"   # light grey (read-only hint)
_CLR_EDITABLE = "FFFFFF"


def _font(bold: bool = False, color: str = "000000", size: int = 9) -> Font:
    return Font(name="Arial", bold=bold, color=color, size=size)


def _fill(color: str) -> PatternFill:
    return PatternFill("solid", start_color=color)


def _thin_border() -> Border:
    t = Side(style="thin", color="CCCCCC")
    return Border(left=t, right=t, top=t, bottom=t)


_CTR = Alignment(horizontal="center", vertical="center")
_LFT = Alignment(horizontal="left",   vertical="center")
_LFT_WRAP = Alignment(horizontal="left", vertical="top", wrap_text=True)

# transform names available for dropdown
_LIST_SHEET = "_ConfigLists"

_TRANSFORM_OPTIONS = [
    # ── 기본 ──────────────────────────────────────
    "copy",
    # ── 클렌징 (norm_) ────────────────────────────
    "norm_date",
    "norm_date_parts",
    "norm_phone",
    "norm_company",
    "norm_text",
    "norm_num",
    "norm_position",
    # ── 검증 (val_) ───────────────────────────────
    "val_email",
    "val_url",
    "val_brn",
    # ── 마스킹 (mask_) ────────────────────────────
    "mask_name",
    "mask_rrn",
    # ── 이진/수치 변환 ─────────────────────────────
    "to_binary",
    "to_pct",
    # ── 주소 ──────────────────────────────────────
    "addr_split",
    # ── 집계 ──────────────────────────────────────
    "group_sum",
    # ── 도메인 (예산) ──────────────────────────────
    "budget_level",
    "map_category",
    "map_division",
]

_SUMMARY_TYPE_OPTIONS = [
    "unique_count",
    "totals",
    "binary_sum",
    "countif_contains",
    "gpu_demand",
]


def _max_source_col(cfg: SurveyConfig) -> int:
    vals: list[int] = []
    for cd in cfg.columns:
        if cd.source_col:
            vals.append(cd.source_col)
        if cd.backup_col:
            vals.append(cd.backup_col)
        if cd.year_col:
            vals.append(cd.year_col)
        if cd.source_cols:
            vals.extend(cd.source_cols)
    return max(vals or [50])


def _ensure_list_sheet(wb: Workbook, cfg: SurveyConfig):
    if _LIST_SHEET in wb.sheetnames:
        del wb[_LIST_SHEET]
    ws = wb.create_sheet(_LIST_SHEET)
    ws.sheet_state = "hidden"

    ws.cell(1, 1, "transforms")
    for i, value in enumerate(_TRANSFORM_OPTIONS, 2):
        ws.cell(i, 1, value)

    ws.cell(1, 2, "source_cols")
    for i in range(1, max(_max_source_col(cfg), 50) + 1):
        ws.cell(i + 1, 2, i)

    ws.cell(1, 3, "summary_types")
    for i, value in enumerate(_SUMMARY_TYPE_OPTIONS, 2):
        ws.cell(i, 3, value)

    return ws


def _add_include_exclude_dropdown(ws, row_start: int, row_end: int, col_i: int) -> None:
    """Add include/exclude dropdown to 구분 column."""
    col_letter = get_column_letter(col_i)
    dv = DataValidation(
        type="list",
        formula1='"include,exclude"',
        allow_blank=True,
        showDropDown=False,
        showErrorMessage=False,
    )
    dv.sqref = f"{col_letter}{row_start}:{col_letter}{row_end}"
    ws.add_data_validation(dv)


def _add_list_dropdown(ws, row_start: int, row_end: int, target_col: int, formula: str) -> None:
    """Add a dropdown to target_col using a formula range.

    sqref는 실제 데이터 행만 포함 — section 마커 merge 셀과의 충돌 방지.
    formula1에는 = 접두사 없이 범위만 지정 (OOXML 스펙).
    """
    col_letter = get_column_letter(target_col)
    dv = DataValidation(
        type="list",
        formula1=formula,
        allow_blank=True,
        showDropDown=False,
        showErrorMessage=False,
    )
    dv.sqref = f"{col_letter}{row_start}:{col_letter}{row_end}"
    ws.add_data_validation(dv)


def _add_bool_dropdown(ws, row_start: int, row_end: int, col_i: int) -> None:
    """Add TRUE/FALSE dropdown to include_in_slicer column."""
    col_letter = get_column_letter(col_i)
    dv = DataValidation(
        type="list",
        formula1='"TRUE,FALSE"',
        allow_blank=True,
        showDropDown=False,
        showErrorMessage=False,
    )
    dv.sqref = f"{col_letter}{row_start}:{col_letter}{row_end}"
    ws.add_data_validation(dv)


# ---------------------------------------------------------------------------
# Write helpers
# ---------------------------------------------------------------------------

def _marker_row(ws, row: int, text: str, n_cols: int = 6) -> None:
    ws.row_dimensions[row].height = 18
    c = ws.cell(row, 1, text)
    c.font      = _font(bold=True, color="FFFFFF", size=10)
    c.fill      = _fill(_CLR_MARKER)
    c.alignment = _LFT
    if n_cols > 1:
        ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=n_cols)


def _hdr_row(ws, row: int, labels: list[str]) -> None:
    ws.row_dimensions[row].height = 16
    bdr = _thin_border()
    for ci, lbl in enumerate(labels, 1):
        c = ws.cell(row, ci, lbl)
        c.font, c.fill, c.alignment, c.border = (
            _font(bold=True, size=9), _fill(_CLR_HEADER), _CTR, bdr,
        )


def _kv_row(ws, row: int, key: str, val: Any, readonly: bool = False) -> None:
    bdr = _thin_border()
    c = ws.cell(row, 1, key)
    c.font, c.fill, c.alignment, c.border = (
        _font(bold=True, size=9), _fill(_CLR_READONLY), _LFT, bdr,
    )
    c = ws.cell(row, 2, val)
    c.font = _font(size=9)
    c.fill = _fill(_CLR_READONLY if readonly else _CLR_EDITABLE)
    c.alignment, c.border = _LFT, bdr


def _data_row(ws, row: int, vals: list[Any]) -> None:
    bdr = _thin_border()
    for ci, v in enumerate(vals, 1):
        c = ws.cell(row, ci, v)
        c.font, c.alignment, c.border = _font(size=9), _LFT, bdr


# ---------------------------------------------------------------------------
# write_config_sheet
# ---------------------------------------------------------------------------

def write_config_sheet(wb: Workbook, cfg: SurveyConfig) -> None:
    list_ws = _ensure_list_sheet(wb, cfg)
    sheet_name = "Config"
    if sheet_name in wb.sheetnames:
        del wb[sheet_name]
    ws = wb.create_sheet(sheet_name)

    # title
    ws.row_dimensions[1].height = 22
    c = ws.cell(1, 1, f"Survey Engine 설정 — {cfg.project}")
    c.font = _font(bold=True, color="FFFFFF", size=12)
    c.fill = _fill("2E75B6")
    c.alignment = _LFT
    ws.merge_cells("A1:J1")
    ws.cell(1, 11, "※ Config 시트 수정 후 재실행 가능")
    ws.cell(1, 11).font = _font(size=8, color="888888")

    cur = 3

    # ── [기본 설정] ─────────────────────────────────────────────────────────
    _marker_row(ws, cur, _SEC_GENERAL, n_cols=2)
    cur += 1
    _hdr_row(ws, cur, ["항목", "값"])
    cur += 1
    ly = cfg.summary.layout
    kv_pairs: list[tuple[str, Any]] = [
        ("project",              cfg.project),
        ("source_sheet",         cfg.source.sheet or ""),
        ("header_row",           cfg.source.header_row),
        ("data_start_row",       cfg.source.data_start_row or cfg.source.header_row + 1),
        ("source_file",          cfg.source.file or ""),
        ("output_dir",           cfg.paths.output_dir),
        ("output_file",          cfg.paths.output_file),
        ("style_file",           cfg.style_file or ""),
        ("cleaned_sheet",        cfg.sheets.cleaned),
        ("summary_sheet",        cfg.sheets.summary),
        # ── 요약 레이아웃 (layout이 None이면 기본값 표시) ─────────────────────
        ("summary_layout_cols",      ly.cols      if ly else 1),
        ("summary_layout_start_row", ly.start_row if ly else 1),
        ("summary_layout_col_span",  ly.col_span  if ly else 4),
        ("summary_layout_gap_cols",  ly.gap_cols  if ly else 0),
        ("summary_layout_gap_rows",  ly.gap_rows  if ly else 2),
    ]
    for k, v in kv_pairs:
        _kv_row(ws, cur, k, v)
        cur += 1

    cur += 1  # blank

    # ── [jang 추출 설정] — GPU 전용, jang_extraction 설정 시에만 표시 ─────────
    if cfg.jang_extraction is not None:
        _marker_row(ws, cur, _SEC_JANG, n_cols=2)
        ws.cell(cur, 3, "※ GPU 설문 전용 — 일반 설문에서는 불필요").font = _font(size=8, color="888888")
        cur += 1
        _hdr_row(ws, cur, ["항목", "값"])
        cur += 1
        je = cfg.jang_extraction
        _kv_row(ws, cur, "range_strategy",       je.range_strategy);       cur += 1
        _kv_row(ws, cur, "dae_multiplier",        je.dae_multiplier);       cur += 1
        _kv_row(ws, cur, "prefer_jang_over_dae",  je.prefer_jang_over_dae); cur += 1
        cur += 1

    # ── [컬럼 정의] (10열 구조) ─────────────────────────────────────────────
    col_headers = [
        "#",
        "구분\n(include/exclude)",
        "output_col\n(출력컬럼명)",
        "source_col_name\n(원본컬럼명·참조용)",
        "source_col\n(원본열번호)",
        "transform\n(변환규칙)",
        "include_in_slicer\n(슬라이서필터)",
        "source_cols\n※ group_sum 전용\n예: 3,5,7",
        "flag_keyword\n※ to_binary 전용",
        "backup_col\n※ 대체열번호",
    ]
    _marker_row(ws, cur, _SEC_COLUMNS, n_cols=len(col_headers))
    cur += 1
    _hdr_row(ws, cur, col_headers)
    for ci in range(1, len(col_headers) + 1):
        ws.cell(cur, ci).alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws.row_dimensions[cur].height = 36
    cur += 1

    data_start_row = cur
    for i, cd in enumerate(cfg.columns, 1):
        is_excluded = (cd.transform == "exclude")
        kubun = "exclude" if is_excluded else "include"
        _data_row(ws, cur, [
            i,
            kubun,
            cd.output_col,
            cd.source_col_name or "",
            cd.source_col or "",
            "" if is_excluded else (cd.transform or "copy"),
            "TRUE" if cd.include_in_slicer else "",
            ",".join(str(c) for c in cd.source_cols) if cd.source_cols else "",
            cd.flag_keyword or "",
            cd.backup_col or "",
        ])
        ws.cell(cur, 4).fill = _fill(_CLR_READONLY)   # source_col_name: 회색(참조용)
        if is_excluded:
            for ci in range(1, len(col_headers) + 1):
                ws.cell(cur, ci).font = _font(size=9, color="AAAAAA")
        cur += 1

    # ── 데이터 유효성 검사 (드롭다운) ───────────────────────────────────────
    list_name = quote_sheetname(list_ws.title)
    _src_end = max(_max_source_col(cfg), 50) + 1
    # col 2: 구분 (include/exclude)
    _add_include_exclude_dropdown(ws, data_start_row, cur - 1, col_i=2)
    # col 5: source_col
    _add_list_dropdown(ws, data_start_row, cur - 1, 5,  f"{list_name}!$B$2:$B${_src_end}")
    # col 6: transform
    _add_list_dropdown(ws, data_start_row, cur - 1, 6,  f"{list_name}!$A$2:$A${len(_TRANSFORM_OPTIONS) + 1}")
    # col 7: include_in_slicer
    _add_bool_dropdown(ws, data_start_row, cur - 1, col_i=7)
    # col 10: backup_col
    _add_list_dropdown(ws, data_start_row, cur - 1, 10, f"{list_name}!$B$2:$B${_src_end}")

    cur += 1

    # ── [슬라이서] ──────────────────────────────────────────────────────────
    slicer_map: dict[str, str | None] = {sd.col: sd.caption for sd in cfg.slicers}
    for cd in cfg.columns:
        if cd.include_in_slicer and cd.output_col not in slicer_map:
            slicer_map[cd.output_col] = None
    effective_slicers = list(slicer_map.items())

    slicer_headers = ["col\n(output_col명)", "caption\n(표시명·기본=col명)"]
    _marker_row(ws, cur, _SEC_SLICERS, n_cols=2)
    ws.cell(cur, 3, "※ [컬럼 정의]에서 include_in_slicer=TRUE 하면 자동 추가 / col명은 output_col과 정확히 일치해야 함").font = _font(size=8, color="888888")
    cur += 1
    _hdr_row(ws, cur, slicer_headers)
    ws.cell(cur, 1).alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws.cell(cur, 2).alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws.row_dimensions[cur].height = 28
    cur += 1
    slicer_data_start = cur
    if effective_slicers:
        for col_name, caption in effective_slicers:
            _data_row(ws, cur, [col_name, caption or ""])
            cur += 1
    else:
        # 기본 3줄 placeholder
        for ph in ["← output_col명 입력 후 삭제 (1)", "← output_col명 입력 후 삭제 (2)", "← output_col명 입력 후 삭제 (3)"]:
            c = ws.cell(cur, 1, "")
            c.font = _font(size=9, color="CCCCCC")
            ws.cell(cur, 2, "").font = _font(size=9, color="CCCCCC")
            ws.cell(cur, 1).comment = None
            # 힌트 텍스트를 2열에 표시
            ws.cell(cur, 2, ph).font = _font(size=8, color="BBBBBB")
            cur += 1

    cur += 1

    # ── [요약 섹션] ─────────────────────────────────────────────────────────
    summary_headers = ["id", "title", "type", "layout_col", "col_ref", "sort",
                       "start_row(override)", "start_col(override)"]
    _marker_row(ws, cur, _SEC_SUMMARY, n_cols=len(summary_headers))
    ws.cell(cur, len(summary_headers) + 1,
            "※ unique_count → col_ref만 입력  |  totals·binary_sum·countif_contains → config.yaml에서 items/columns/keywords 추가 필요"
            ).font = _font(size=8, color="888888")
    cur += 1
    _hdr_row(ws, cur, summary_headers)
    cur += 1
    summary_data_start = cur
    if cfg.summary.sections:
        for sec in cfg.summary.sections:
            _data_row(ws, cur, [
                sec.id or "",
                sec.title,
                sec.type,
                sec.layout_col,
                sec.col_ref or "",
                "TRUE" if sec.sort else "",
                sec.start_row if sec.start_row is not None else "",
                sec.start_col if sec.start_col is not None else "",
            ])
            cur += 1
    else:
        # 기본 3줄 placeholder
        for ph_title in ["요약1 (title 입력)", "요약2 (title 입력)", "요약3 (title 입력)"]:
            _data_row(ws, cur, ["", ph_title, "unique_count", 1, "", "", "", ""])
            for ci in range(1, len(summary_headers) + 1):
                ws.cell(cur, ci).font = _font(size=9, color="CCCCCC")
            cur += 1

    # type 드롭다운
    if summary_data_start < cur:
        _add_list_dropdown(
            ws, summary_data_start, cur - 1, 3,
            f"{quote_sheetname(list_ws.title)}!$C$2:$C${len(_SUMMARY_TYPE_OPTIONS) + 1}"
        )

    cur += 1

    # ── [주소 파싱 YAML] (read-only reference) — address_parsing 설정 시에만 표시 ──
    if cfg.address_parsing and cfg.address_parsing.col:
        _marker_row(ws, cur, _SEC_ADDRESS, n_cols=2)
        ws.cell(cur, 3, "※ 읽기 전용 — config.yaml의 address_parsing에서 수정").font = _font(size=8, color="888888")
        cur += 1
        _kv_row(ws, cur, "address_col", cfg.address_parsing.col, readonly=True)
        ws.cell(cur, 3, "주소가 있는 원본 열 번호 (A열=1)").font = _font(size=8, color="888888")
        cur += 1
        addr_yaml = yaml.dump(
            cfg.address_parsing.model_dump(),
            allow_unicode=True, default_flow_style=False,
        )
        c = ws.cell(cur, 1, addr_yaml)
        c.font, c.fill, c.alignment = (
            Font(name="Courier New", size=8),
            _fill(_CLR_READONLY),
            _LFT_WRAP,
        )
        ws.merge_cells(start_row=cur, start_column=1, end_row=cur + 15, end_column=4)
        ws.row_dimensions[cur].height = 150

    # ── column widths (10 cols) ───────────────────────────────────────────────
    # #, 구분, output_col, source_col_name, source_col, transform,
    # include_in_slicer, source_cols, flag_keyword, backup_col
    col_w = [4, 10, 22, 20, 8, 18, 14, 20, 20, 10]
    for i, w in enumerate(col_w, 1):
        ws.column_dimensions[get_column_letter(i)].width = w

    ws.freeze_panes = "A3"


# ---------------------------------------------------------------------------
# write_guide_sheet
# ---------------------------------------------------------------------------

_TRANSFORM_GUIDE = [
    # ── 기본 ─────────────────────────────────────────────────────────────────
    ("copy",           "원본 값 그대로 복사 (기본값)"),
    # ── 클렌징 (norm_*) ───────────────────────────────────────────────────────
    ("norm_date",      "날짜 → YYYY-MM-DD 표준화  예) 2026.5.15 / 26-05-15 / 2026년5월15일  | alias: normalize_date"),
    ("norm_date_parts","날짜 정규화 + 연/월/일 파생열 자동 생성 → output_col, output_col_년, output_col_월, output_col_일 4열 출력"),
    ("norm_phone",     "전화번호 → 표준 형식  예) 010 1234 5678 → 010-1234-5678  | alias: normalize_phone"),
    ("norm_company",   "회사명 법인형태 정규화  예) 주식회사 카카오 → 카카오  | alias: normalize_company"),
    ("norm_text",      "텍스트 공백 정리, 연속 공백·줄바꿈 제거  | alias: normalize_text"),
    ("norm_num",       "숫자 텍스트 파싱  예) 1,234 / 3.5만 / 1억2천 → 숫자  | alias: normalize_number, to_numeric"),
    ("norm_position",  "직책·직급 표준화  예) 수석 → 수석연구원  ※ config/patterns.yaml > position_patterns  | alias: normalize_title"),
    # ── 검증 (val_*) ──────────────────────────────────────────────────────────
    ("val_email",      "이메일 형식 검증 → 유효하면 소문자, 아니면 빈값  | alias: validate_email"),
    ("val_url",        "URL 형식 검증 → 유효하면 원본, 아니면 빈값  | alias: validate_url"),
    ("val_brn",        "사업자등록번호 체크섬 검증 + XXX-XX-XXXXX 포맷  | alias: validate_brn"),
    # ── 마스킹 (mask_*) ───────────────────────────────────────────────────────
    ("mask_name",      "이름 마스킹  예) 홍길동 → 홍*동  | alias: name_blind"),
    ("mask_rrn",       "주민번호 뒷자리 마스킹  예) 123456-1234567 → 123456-*******"),
    # ── 변환 ──────────────────────────────────────────────────────────────────
    ("to_binary",      "flag_keyword 포함 여부 → 1 / 0  ※ flag_keyword 필드에 키워드 입력  | alias: o_binary"),
    ("to_pct",         "퍼센트 문자열 → float  예) 92.77% → 92.77  (copy로 두면 % 문자열 그대로)"),
    # ── 주소 ──────────────────────────────────────────────────────────────────
    ("addr_split",     "주소 → 시도/시군구/상세 파생열 자동 생성 → output_col, _시도, _시군구, _상세 4열  ※ patterns.yaml > address_parsing 필요"),
    # ── 집계 ──────────────────────────────────────────────────────────────────
    ("group_sum",      "여러 컬럼 합산 → source_cols 에 열 번호 목록 지정  예) 3,5,7 또는 3-7"),
    # ── 도메인별 (예산) ────────────────────────────────────────────────────────
    ("budget_level",   "[예산] 예산코드 → 계층 레벨(3~7) 감지"),
    ("map_category",   "[예산] 예산코드 → 카테고리(인건비/물건비 등)"),
    ("map_division",   "[예산] 수행부서명 → 본부명 매핑  ※ patterns.yaml > division_patterns  | 설정파일: config/patterns.yaml"),
]

_SUMMARY_TYPE_GUIDE = [
    ("unique_count",
     "★ Config 시트에서 바로 추가 가능. col_ref 컬럼의 고유값별 응답수 자동 집계."
     " → [요약 섹션] 표에 행 추가: title / type=unique_count / col_ref=컬럼명"),
    ("totals",
     "Config 시트에서 행 추가 후, 세부 항목(items)은 config.yaml에서 추가 필요."
     " count_all(전체건수) / countif_exact(특정값 카운트) 항목 목록 정의"),
    ("binary_sum",
     "Config 시트에서 행 추가 후, 집계할 0/1 컬럼 목록(columns)은 config.yaml에서 추가 필요."),
    ("countif_contains",
     "Config 시트에서 행 추가 후, 검색 키워드 목록(keywords)은 config.yaml에서 추가 필요."
     " COUNTIF 와일드카드(*keyword*) 복수응답 집계"),
    ("gpu_demand",
     "GPU 설문 전용. Config 시트에서 행 추가 후, GPU 컬럼 목록(columns)은 config.yaml에서 추가 필요."
     " 합계·건수·건당평균 자동 계산"),
]

_FIELD_GUIDE = [
    # ── 기본 필드 (모든 컬럼에 필요) ────────────────────────────────────────
    ("구분",              "include(기본) / exclude 선택. exclude 선택 시 해당 컬럼은 출력에서 제외되며 Config 시트에 회색으로 유지됨"),
    ("output_col",        "【필수】 출력 컬럼 이름 — cleaned 시트에 표시될 헤더명 (자유롭게 수정 가능)"),
    ("source_col_name",   "원본 파일의 컬럼 헤더명 (자동 기입, 참조용 — 수정 불필요, 회색 배경)"),
    ("source_col",        "【필수*】 원본 파일의 열 번호 (A열=1, B열=2, C열=3 …). source_cols 중 하나는 반드시 필요"),
    ("transform",         "변환 규칙 이름 — 위 Transform 목록 참조. 드롭다운 선택. 비워두면 copy(원본 그대로)"),
    ("include_in_slicer", "TRUE → 이 컬럼을 슬라이서 필터로 자동 등록. [슬라이서] 섹션에 자동 반영됨"),
    # ── 특수 필드 (특정 transform에서만 사용) ────────────────────────────────
    ("source_cols",
     "【group_sum 전용】 여러 열의 값을 합산. "
     "예: 3,5,7 → 3·5·7열 합산 / 3-7 → 3~7열 합산. "
     "source_col 대신 사용하며 source_col과 병용 불가."),
    ("flag_keyword",      "【to_binary 전용】 셀 안에 이 키워드가 포함되면 1, 없으면 0 출력"),
    ("backup_col",        "기본 열(source_col)이 비어 있을 때 대신 읽을 열 번호"),
    # ── YAML 전용 필드 (config.yaml에서만 편집 가능) ─────────────────────────
    ("source_label",
     "【YAML 전용·fill_down 전용】 preprocess.fill_down에서 생성한 파생 컬럼 참조. output_label 값 입력"),
    ("year_col",          "【YAML 전용·norm_date_parts 보조】 연도를 다른 열에서 가져올 때 그 열 번호"),
    ("width",             "【YAML 전용】 출력 Excel 열 너비 (기본 14)"),
    ("number_format",     "【YAML 전용】 Excel 셀 표시 형식. 예: #,##0 / yyyy-mm-dd"),
    ("align",             "【YAML 전용】 셀 정렬. left / center / right"),
    # ── 기본 설정 필드 ────────────────────────────────────────────────────────
    ("header_row",        "원본 파일에서 컬럼 헤더가 있는 행 번호 (1부터 시작)"),
    ("data_start_row",    "실제 데이터가 시작하는 행 번호 (header_row 보다 커야 함)"),
]


def write_guide_sheet(wb: Workbook) -> None:
    sheet_name = "Guide"
    if sheet_name in wb.sheetnames:
        del wb[sheet_name]
    ws = wb.create_sheet(sheet_name)

    bdr = _thin_border()

    def title(row: int, text: str) -> int:
        ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=3)
        c = ws.cell(row, 1, text)
        c.font = _font(bold=True, color="FFFFFF", size=11)
        c.fill = _fill("2E75B6")
        c.alignment = _LFT
        ws.row_dimensions[row].height = 20
        return row + 1

    def hdr(row: int, labels: list[str]) -> int:
        for ci, lbl in enumerate(labels, 1):
            c = ws.cell(row, ci, lbl)
            c.font, c.fill, c.alignment, c.border = (
                _font(bold=True, size=9), _fill(_CLR_HEADER), _CTR, bdr,
            )
        return row + 1

    def row2(r: int, a: str, b: str) -> int:
        for ci, v in enumerate([a, b], 1):
            c = ws.cell(r, ci, v)
            c.font, c.alignment, c.border = _font(size=9), _LFT, bdr
        return r + 1

    cur = 1

    # overview
    ws.merge_cells("A1:C1")
    c = ws.cell(1, 1, "Survey Engine v2 — 사용 가이드")
    c.font = _font(bold=True, color="FFFFFF", size=13)
    c.fill = _fill("1F4E79")
    c.alignment = _CTR
    ws.row_dimensions[1].height = 28
    cur = 2

    ws.cell(cur, 1, "Config 시트의 값을 수정한 뒤 아래 CLI 명령으로 재실행할 수 있습니다.")
    ws.cell(cur, 1).font = _font(size=9, color="444444")
    ws.merge_cells(f"A{cur}:C{cur}")
    cur += 2

    # CLI usage
    cur = title(cur, "▶ 사용 방법 (CLI)")
    ws.merge_cells(f"A{cur}:C{cur+7}")
    usage = textwrap.dedent("""\
        # Excel 분석 후 draft Config 자동 생성 (같은 폴더에 draft_{파일명}.xlsx)
        python main.py analyze storage/data.xlsx

        # 분석만 (화면 출력, 파일 생성 없음)
        python main.py analyze storage/data.xlsx --dry-run

        # Config 시트 수정 후 실행
        python main.py run storage/draft_data.xlsx --input storage/data.xlsx

        # 출력 Excel의 Config 시트 수정 후 재실행
        python main.py run output/data_cleaned.xlsx

        # 설정 유효성 검사
        python main.py validate projects/my_project/config.yaml --input data.xlsx

        # 웹 대시보드용 JSON 내보내기 (KPI/검색/차트 자동 구성 포함)
        python main.py export projects/my_project/config.yaml

        # 독립 웹 패키지 배포
        python main.py deploy projects/my_project/config.yaml --dest dist/
    """)
    c = ws.cell(cur, 1, usage)
    c.font = Font(name="Courier New", size=8)
    c.fill = _fill("F8F8F8")
    c.alignment = _LFT_WRAP
    c.border = bdr
    ws.row_dimensions[cur].height = 150
    cur += 9

    # transform guide
    cur = title(cur, "▶ Transform 종류")
    cur = hdr(cur, ["transform 이름", "설명"])
    for t, d in _TRANSFORM_GUIDE:
        cur = row2(cur, t, d)
    cur += 1

    # summary type guide
    cur = title(cur, "▶ Summary 섹션 타입")
    cur = hdr(cur, ["type", "설명"])
    for t, d in _SUMMARY_TYPE_GUIDE:
        cur = row2(cur, t, d)
    cur += 1

    # field guide
    cur = title(cur, "▶ 컬럼 정의 필드 설명")
    cur = hdr(cur, ["필드", "설명"])
    for f, d in _FIELD_GUIDE:
        cur = row2(cur, f, d)
    cur += 1

    # notes
    cur = title(cur, "▶ 재실행 시 주의사항")
    notes = [
        "Config 시트의 [컬럼 정의] 표에서 output_col, source_col, source_cols, transform 등 수정 가능",
        "원본 컬럼을 제외하려면 transform 드롭다운에서 exclude 선택",
        "슬라이서 필터 추가: [컬럼 정의]에서 include_in_slicer=TRUE → [슬라이서] 섹션에 자동 등록됨",
        "요약 섹션 추가 (simple): [요약 섹션]에 새 행 → title / type=unique_count / col_ref=컬럼명 입력 후 재실행",
        "요약 섹션 추가 (complex): [요약 섹션]에 행 추가 후 totals·binary_sum·countif_contains의 세부항목은 config.yaml에서 설정",
        "[요약 섹션] 표의 layout_col 값(1=왼쪽, 2=오른쪽 …)으로 배치 단(column) 지정 — 행위치 자동 계산",
        "[기본 설정]의 summary_layout_* 값으로 단 수, 시작 행, 간격 조정 (summary_layout_cols=1이면 단일 단)",
        "start_row(override)/start_col(override) 열에 값을 입력하면 layout 자동 계산을 무시하고 강제 배치",
        "주소 파싱(address_sido/sigungu): config/patterns.yaml의 address_parsing 섹션에서 패턴 설정",
        "직책 정규화(norm_position): config/patterns.yaml > position_map 에서 매핑 추가. normalize_title은 동일 기능 alias",
        "부서→본부 매핑(map_division): config/patterns.yaml > division_map 에서 편집. 코드 내 기본값보다 patterns.yaml 우선",
        "Config 시트의 내용이 config.yaml보다 우선 적용됩니다 (xlsx를 인수로 넘긴 경우)",
    ]
    for note in notes:
        ws.cell(cur, 1, f"• {note}").font = _font(size=9)
        ws.merge_cells(f"A{cur}:C{cur}")
        cur += 1

    ws.column_dimensions["A"].width = 24
    ws.column_dimensions["B"].width = 80
    ws.column_dimensions["C"].width = 10
    ws.freeze_panes = "A2"


# ---------------------------------------------------------------------------
# read_config_from_excel  (round-trip)
# ---------------------------------------------------------------------------

def _cell_val(ws, row: int, col: int) -> Any:
    v = ws.cell(row, col).value
    return v


def _bool_val(v: Any) -> bool:
    if isinstance(v, bool):
        return v
    return str(v).strip().upper() in ("TRUE", "1", "YES", "Y")


def _int_or_none(v: Any) -> int | None:
    if v is None or str(v).strip() == "":
        return None
    try:
        return int(float(str(v)))
    except (ValueError, TypeError):
        return None


def _str_or_none(v: Any) -> str | None:
    s = str(v).strip() if v is not None else ""
    return s if s else None


def _header_key(v: Any) -> str | None:
    if v is None:
        return None
    s = str(v).strip()
    if not s:
        return None
    s = s.splitlines()[0].strip()
    s = s.split("(")[0].strip()
    return s or None


def _source_cols_or_none(v: Any) -> list[int] | None:
    s = str(v).strip() if v is not None else ""
    if not s:
        return None
    result: list[int] = []
    for part in s.replace(";", ",").split(","):
        token = part.strip()
        if not token:
            continue
        if "-" in token:
            start_s, end_s = token.split("-", 1)
            start = _int_or_none(start_s)
            end = _int_or_none(end_s)
            if start is None or end is None:
                continue
            lo, hi = sorted((start, end))
            result.extend(range(lo, hi + 1))
        else:
            value = _int_or_none(token)
            if value is not None:
                result.append(value)
    deduped = list(dict.fromkeys(result))
    return deduped or None


def read_config_from_excel(path: Path) -> SurveyConfig:
    wb = openpyxl.load_workbook(path, data_only=True)
    if "Config" not in wb.sheetnames:
        raise ValueError(f"'{path.name}'에 'Config' 시트가 없습니다. config.yaml을 사용하세요.")
    ws = wb["Config"]

    # ── locate section markers ────────────────────────────────────────────────
    sections: dict[str, int] = {}  # marker → start_row
    for r in range(1, ws.max_row + 1):
        v = ws.cell(r, 1).value
        if v in _ALL_MARKERS:
            sections[v] = r

    def _parse_kv(marker: str) -> dict[str, Any]:
        if marker not in sections:
            return {}
        r = sections[marker] + 2   # skip marker row + header row
        result: dict[str, Any] = {}
        while r <= ws.max_row:
            k = ws.cell(r, 1).value
            if k is None or str(k).strip() == "" or k in _ALL_MARKERS:
                break
            v = ws.cell(r, 2).value
            result[str(k).strip()] = v
            r += 1
        return result

    def _parse_table(marker: str) -> list[dict[str, Any]]:
        if marker not in sections:
            return []
        hdr_row = sections[marker] + 1
        headers = [_header_key(ws.cell(hdr_row, c).value) for c in range(1, ws.max_column + 1)]
        # trim trailing Nones
        while headers and headers[-1] is None:
            headers.pop()
        rows: list[dict] = []
        r = hdr_row + 1
        while r <= ws.max_row:
            first = ws.cell(r, 1).value
            if first is None or str(first).strip() == "" or first in _ALL_MARKERS:
                break
            row_dict = {
                h: ws.cell(r, ci + 1).value
                for ci, h in enumerate(headers) if h
            }
            rows.append(row_dict)
            r += 1
        return rows

    # ── general settings ──────────────────────────────────────────────────────
    gen  = _parse_kv(_SEC_GENERAL)
    jang = _parse_kv(_SEC_JANG)

    # ── columns ───────────────────────────────────────────────────────────────
    col_rows   = _parse_table(_SEC_COLUMNS)
    columns: list[ColumnDef] = []
    for row in col_rows:
        oc = _str_or_none(row.get("output_col"))
        if not oc:
            continue
        # 구분 column: "exclude" marks the column as excluded (new 10-col structure).
        # Backward compat: transform="exclude" (old structure) is also honoured.
        kubun     = _str_or_none(row.get("구분")) or ""
        transform = _str_or_none(row.get("transform"))
        is_excluded = (kubun == "exclude") or (transform == "exclude")
        if is_excluded:
            columns.append(ColumnDef(
                output_col      = oc,
                source_col_name = _str_or_none(row.get("source_col_name")),
                transform       = "exclude",
            ))
            continue
        sc  = _int_or_none(row.get("source_col"))
        scs = _source_cols_or_none(row.get("source_cols"))
        sl  = _str_or_none(row.get("source_label"))
        if sc is None and scs is None and sl is None:
            continue
        columns.append(ColumnDef(
            output_col      = oc,
            source_col_name = _str_or_none(row.get("source_col_name")),
            source_col      = sc,
            source_cols     = scs,
            source_label    = sl,
            transform       = transform,
            flag_keyword    = _str_or_none(row.get("flag_keyword")),
            backup_col      = _int_or_none(row.get("backup_col")),
            year_col        = _int_or_none(row.get("year_col")),
            width           = float(row.get("width") or 14),
            number_format   = _str_or_none(row.get("number_format")),
            align           = _str_or_none(row.get("align")),
            include_in_slicer = _bool_val(row.get("include_in_slicer")),
        ))

    # ── slicers ───────────────────────────────────────────────────────────────
    slicer_rows = _parse_table(_SEC_SLICERS)
    slicers: list[SlicerDef] = []
    for row in slicer_rows:
        col_name = _str_or_none(row.get("col"))
        if col_name:
            slicers.append(SlicerDef(col=col_name, caption=_str_or_none(row.get("caption"))))
    # [슬라이서] 섹션이 비어 있으면 include_in_slicer=TRUE 컬럼에서 자동 생성
    if not slicers:
        slicers = [SlicerDef(col=cd.output_col) for cd in columns if cd.include_in_slicer]

    # ── summary layout + sections ─────────────────────────────────────────────
    ly_cols      = _int_or_none(gen.get("summary_layout_cols"))
    ly_start_row = _int_or_none(gen.get("summary_layout_start_row"))
    ly_col_span  = _int_or_none(gen.get("summary_layout_col_span"))
    ly_gap_cols  = _int_or_none(gen.get("summary_layout_gap_cols"))
    ly_gap_rows  = _int_or_none(gen.get("summary_layout_gap_rows"))

    summary_layout: SummaryLayout | None = None
    if ly_cols is not None:
        # cols=1 이어도 레이아웃 객체 생성 — 섹션 위치를 자동 계산하기 위해 필요
        summary_layout = SummaryLayout(
            cols      = ly_cols,
            start_row = ly_start_row or 1,
            col_span  = ly_col_span  or 4,
            gap_cols  = ly_gap_cols  or 0,
            gap_rows  = ly_gap_rows  or 2,
        )

    sec_rows = _parse_table(_SEC_SUMMARY)
    sections_out: list[SummarySection] = []
    for row in sec_rows:
        title = _str_or_none(row.get("title"))
        if not title:
            continue
        # support both old (start_row/start_col) and new (layout_col) columns
        sr = _int_or_none(row.get("start_row") or row.get("start_row(override)"))
        sc = _int_or_none(row.get("start_col") or row.get("start_col(override)"))
        lc = _int_or_none(row.get("layout_col")) or 1
        sections_out.append(SummarySection(
            id         = _str_or_none(row.get("id")),
            title      = title,
            type       = str(row.get("type") or "unique_count"),
            layout_col = lc,
            start_row  = sr,
            start_col  = sc,
            col_ref    = _str_or_none(row.get("col_ref")),
            sort       = _bool_val(row.get("sort") or True),
        ))

    # ── address parsing YAML ──────────────────────────────────────────────────
    addr_cfg: AddressParsingConfig | None = None
    if _SEC_ADDRESS in sections:
        addr_row = sections[_SEC_ADDRESS] + 1
        addr_text = ws.cell(addr_row, 1).value
        if addr_text and str(addr_text).strip():
            try:
                addr_data = yaml.safe_load(str(addr_text))
                if addr_data:
                    addr_cfg = AddressParsingConfig.model_validate(addr_data)
            except Exception:
                pass

    wb.close()

    # ── jang extraction ───────────────────────────────────────────────────────
    jang_cfg: JangExtractionConfig | None = None
    if jang:
        jang_cfg = JangExtractionConfig(
            range_strategy       = str(jang.get("range_strategy", "max")),
            dae_multiplier       = int(jang.get("dae_multiplier", 0)),
            prefer_jang_over_dae = _bool_val(jang.get("prefer_jang_over_dae", True)),
        )

    return SurveyConfig(
        project  = str(gen.get("project", "survey")),
        style_file = _str_or_none(gen.get("style_file")),
        source   = SourceConfig(
            sheet          = _str_or_none(gen.get("source_sheet")),
            file           = _str_or_none(gen.get("source_file")),
            header_row     = int(gen.get("header_row", 1)),
            data_start_row = _int_or_none(gen.get("data_start_row")),
        ),
        paths    = PathsConfig(
            output_dir  = str(gen.get("output_dir", "output")),
            output_file = str(gen.get("output_file", "result.xlsx")),
        ),
        sheets   = OutputSheetsConfig(
            cleaned = str(gen.get("cleaned_sheet", "cleaned")),
            summary = str(gen.get("summary_sheet", "summary")),
        ),
        columns          = columns,
        slicers          = slicers,
        summary          = SummaryConfig(layout=summary_layout, sections=sections_out),
        jang_extraction  = jang_cfg,
        address_parsing  = addr_cfg,
    )
