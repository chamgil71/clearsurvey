from __future__ import annotations

from pathlib import Path
from typing import Any, Literal

from pydantic import BaseModel, Field, model_validator


# ---------------------------------------------------------------------------
# Preprocess
# ---------------------------------------------------------------------------

class RowFilterRule(BaseModel):
    col: int                                   # 1-based column index
    values: list[Any] | None = None            # include/exclude if cell in values
    equals: Any | None = None                  # include/exclude if cell == equals
    is_empty: bool | None = None               # include/exclude if cell is empty


class RowFilterConfig(BaseModel):
    include: list[RowFilterRule] = Field(default_factory=list)
    exclude: list[RowFilterRule] = Field(default_factory=list)


class FillDownRule(BaseModel):
    source_col: int                            # 1-based column to read from
    output_label: str                          # label assigned to filled-down series
    mode: Literal["always", "on_trigger"] = "always"
    trigger_col: int | None = None             # required when mode=on_trigger
    trigger_value: Any | None = None           # capture when trigger_col == this value

    @model_validator(mode="after")
    def _check_trigger(self) -> "FillDownRule":
        if self.mode == "on_trigger" and self.trigger_col is None:
            raise ValueError("trigger_col is required when mode='on_trigger'")
        return self


class PreprocessConfig(BaseModel):
    fill_down: list[FillDownRule] = Field(default_factory=list)
    row_filter: RowFilterConfig = Field(default_factory=RowFilterConfig)


# ---------------------------------------------------------------------------
# Column definition
# ---------------------------------------------------------------------------

class ColumnDef(BaseModel):
    output_col: str                            # output header name (editable)
    source_col_name: str | None = None         # original source header (read-only reference)
    source_col: int | None = None             # 1-based original Excel column
    source_cols: list[int] | None = None      # 복수 컬럼 (group_sum 등 multi-col transform)
    source_label: str | None = None           # fill_down output_label reference
    transform: str | None = None              # registered transform key
    backup_col: int | None = None             # fallback column when primary is empty
    year_col: int | None = None               # [date_year] year source column (1-based)
    flag_keyword: str | None = None           # [o_binary] keyword to test for
    summary_role: str | None = None           # "key" | "value" | "group" | None
    width: float | None = None
    number_format: str | None = None
    align: str | None = None                  # "left" | "center" | "right"
    include_in_slicer: bool = False

    @model_validator(mode="after")
    def _check_source(self) -> "ColumnDef":
        if self.transform == "exclude":
            return self
        has_source = (
            self.source_col is not None
            or self.source_cols is not None
            or self.source_label is not None
        )
        if not has_source:
            raise ValueError(
                f"ColumnDef '{self.output_col}' must set source_col, source_cols, or source_label"
            )
        return self


# ---------------------------------------------------------------------------
# Source sheet
# ---------------------------------------------------------------------------

class SourceConfig(BaseModel):
    file: str | None = None                   # relative or absolute path; None = use merger output
    sheet: str | None = None                  # sheet name; None = first sheet
    header_row: int = 1                       # 1-based row containing headers
    data_start_row: int | None = None         # 1-based; defaults to header_row + 1


# ---------------------------------------------------------------------------
# Summary sheet
# ---------------------------------------------------------------------------

class SummaryTotalItem(BaseModel):
    label: str
    type: Literal["count_all", "countif_exact"]
    col_ref: str
    value: str | None = None


class SummaryColumnItem(BaseModel):
    col_ref: str
    label: str | None = None


class SummaryKeyword(BaseModel):
    keyword: str
    label: str


class SummaryLayout(BaseModel):
    """Auto-placement grid for summary sections (no hardcoded row/col needed)."""
    cols: int = 2          # number of side-by-side layout columns
    start_row: int = 1     # first row where all sections begin
    col_span: int = 4      # Excel columns each layout-column occupies
    gap_cols: int = 1      # blank Excel columns between layout columns
    gap_rows: int = 2      # blank Excel rows between sections in the same column


class SummarySection(BaseModel):
    id: str | None = None
    title: str
    type: Literal[
        "unique_count",      # group-by + count (col_ref required)
        "totals",            # fixed items: count_all / countif_exact
        "binary_sum",        # sum of 0/1 columns
        "gpu_demand",        # sum + count + mean per column
        "countif_contains",  # wildcard COUNTIF
    ] = "unique_count"
    # layout-based placement (used when SummaryConfig.layout is set)
    layout_col: int = 1            # which layout column (1=left, 2=right, …)
    # explicit placement (overrides layout; both must be set to take effect)
    start_row: int | None = None
    start_col: int | None = None
    # unique_count / countif_contains
    col_ref: str | None = None
    sort: bool = True
    # totals
    items: list[SummaryTotalItem] = Field(default_factory=list)
    # binary_sum / gpu_demand
    columns: list[SummaryColumnItem] = Field(default_factory=list)
    # countif_contains
    keywords: list[SummaryKeyword] = Field(default_factory=list)


class SummaryConfig(BaseModel):
    sheet_name: str = "Summary"
    title: str | None = None
    total_cell: str | None = None  # auto-computed from totals section when layout is used
    layout: SummaryLayout | None = None
    sections: list[SummarySection] = Field(default_factory=list)


# ---------------------------------------------------------------------------
# Slicers
# ---------------------------------------------------------------------------

class SlicerDef(BaseModel):
    col: str                                  # output_col name (must be include_in_slicer=True)
    caption: str | None = None               # display caption; defaults to col


# ---------------------------------------------------------------------------
# Merge (multi-source consolidation)
# ---------------------------------------------------------------------------

class MergeSource(BaseModel):
    path: str                                 # file or folder path
    sheet: str | None = None
    header_row: int = 1
    column_mapping: dict[str, str] = Field(default_factory=dict)  # src_header -> canonical


class DedupConfig(BaseModel):
    strategy: Literal["first", "last", "none"] = "none"
    key_cols: list[str] = Field(default_factory=list)


class MergeOutputConfig(BaseModel):
    add_source_col: bool = True
    source_col_name: str = "_출처파일"


class MergeConfig(BaseModel):
    sources: list[MergeSource] = Field(default_factory=list)
    dedup: DedupConfig = Field(default_factory=DedupConfig)
    output: MergeOutputConfig = Field(default_factory=MergeOutputConfig)


# ---------------------------------------------------------------------------
# Output paths
# ---------------------------------------------------------------------------

class PathsConfig(BaseModel):
    output_dir: str = "output"
    output_file: str = "result.xlsx"


class OutputSheetsConfig(BaseModel):
    cleaned: str = "Cleaned"
    summary: str = "Summary"


# ---------------------------------------------------------------------------
# Top-level survey config
# ---------------------------------------------------------------------------

class JangExtractionConfig(BaseModel):
    primary_col: int | None = None
    backup_col: int | None = None
    range_strategy: Literal["max", "min"] = "max"
    dae_multiplier: int = 0
    prefer_jang_over_dae: bool = True


class AddressParsingConfig(BaseModel):
    col: int | None = None
    sido_patterns: list[Any] = Field(default_factory=list)
    seoul_gu: list[str] = Field(default_factory=list)


class SurveyConfig(BaseModel):
    project: str = "survey"
    style_file: str | None = None

    # 공통 패턴 파일 (주소·회사·전화·BRN 등) — config/patterns.yaml 참조
    # 상대 경로는 config.yaml 위치 기준으로 해석됨
    patterns_file: str | None = None

    source: SourceConfig = Field(default_factory=SourceConfig)
    preprocess: PreprocessConfig = Field(default_factory=PreprocessConfig)
    columns: list[ColumnDef] = Field(default_factory=list)
    summary: SummaryConfig = Field(default_factory=SummaryConfig)
    slicers: list[SlicerDef] = Field(default_factory=list)
    paths: PathsConfig = Field(default_factory=PathsConfig)
    sheets: OutputSheetsConfig = Field(default_factory=OutputSheetsConfig)
    merge: MergeConfig | None = None

    # optional domain-specific helpers
    # address_parsing: patterns_file보다 우선 (프로젝트 특화 패턴)
    jang_extraction: JangExtractionConfig | None = None
    address_parsing: AddressParsingConfig | None = None

    # free-form extra kwargs forwarded to transforms
    transform_kwargs: dict[str, Any] = Field(default_factory=dict)
