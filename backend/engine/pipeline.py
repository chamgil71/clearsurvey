from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path
from typing import Any

import pandas as pd
import openpyxl
from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

from engine.config import SurveyConfig
from engine.preprocessor import Preprocessor
from engine.writer import CleanedSheetWriter
from engine.summarizer import SummarySheetWriter
from engine.slicer import inject_slicers
from engine.patterns import load_patterns, inject_into_kwargs
from transforms.registry import TransformRegistry


def _sheet_to_dataframe(wb: openpyxl.Workbook, cfg: SurveyConfig) -> pd.DataFrame:
    """Read source sheet into a positionally-indexed DataFrame."""
    sheet_name  = cfg.source.sheet
    ws          = wb[sheet_name] if sheet_name and sheet_name in wb.sheetnames else wb.active
    if ws is None:
        raise ValueError("Source sheet not found")

    data_start = cfg.source.data_start_row or (cfg.source.header_row + 1)
    rows: list[list[Any]] = []
    for r in range(data_start, ws.max_row + 1):
        row_vals = [ws.cell(r, c).value for c in range(1, ws.max_column + 1)]
        # skip entirely blank rows
        if any(v is not None and str(v).strip() != "" for v in row_vals):
            rows.append(row_vals)

    if not rows:
        return pd.DataFrame()

    n_cols = max(len(r) for r in rows)
    padded = [r + [None] * (n_cols - len(r)) for r in rows]
    return pd.DataFrame(padded)   # columns: 0, 1, 2, ... (0-based integers)


def _write_raw_sheet(out_wb: Workbook, src_wb: openpyxl.Workbook | None,
                     cfg: SurveyConfig, raw_df: pd.DataFrame) -> None:
    """Write raw (pre-transform) source data to '원본' sheet."""
    sheet_name = "원본"
    if sheet_name in out_wb.sheetnames:
        del out_wb[sheet_name]
    ws = out_wb.create_sheet(sheet_name)

    n_cols = raw_df.shape[1]

    # original header labels from source workbook
    if src_wb is not None:
        src_ws = (
            src_wb[cfg.source.sheet]
            if cfg.source.sheet and cfg.source.sheet in src_wb.sheetnames
            else src_wb.active
        )
        hrow = cfg.source.header_row
        headers = [src_ws.cell(hrow, c).value for c in range(1, n_cols + 1)]
    else:
        headers = [f"열{i}" for i in range(1, n_cols + 1)]

    hdr_fill = PatternFill("solid", start_color="1F4E79")
    hdr_font = Font(bold=True, name="Arial", size=9, color="FFFFFF")
    hdr_align = Alignment(horizontal="center", vertical="center")
    dat_font  = Font(name="Arial", size=9)

    for ci, h in enumerate(headers, 1):
        c = ws.cell(1, ci, h)
        c.font, c.fill, c.alignment = hdr_font, hdr_fill, hdr_align
    ws.row_dimensions[1].height = 20

    for ri, (_, row) in enumerate(raw_df.iterrows(), 2):
        for ci, val in enumerate(row, 1):
            ws.cell(ri, ci, val).font = dat_font

    for ci in range(1, n_cols + 1):
        ws.column_dimensions[get_column_letter(ci)].width = 14
    ws.freeze_panes = "A2"


def _build_registry(cfg: SurveyConfig) -> TransformRegistry:
    """파이프라인 실행마다 독립된 TransformRegistry 인스턴스를 생성합니다.

    모듈 수준 싱글톤을 공유하지 않으므로 FastAPI 멀티스레드 환경에서도
    요청 간 transform 등록이 서로 간섭하지 않습니다.
    """
    reg = TransformRegistry()  # ← 글로벌 singleton 대신 요청별 인스턴스 생성

    # ── 내장 pass-through ─────────────────────────────────────────────────────
    reg.register("copy", lambda val, **kw: val)

    # ── 주소 변환 (project address_parsing 설정 기반 클로저) ──────────────────
    # 클로저가 해당 프로젝트의 address_parsing 설정을 캡처하므로
    # 싱글톤에 등록하면 동시 요청 간 설정이 덮어써집니다.
    if cfg.address_parsing:
        from transforms.common.address import AddressParser
        ap     = AddressParser(cfg.address_parsing.model_dump())
        _cache: dict[str, tuple] = {}

        def _parse_cached(val: object) -> tuple:
            k = str(val) if val is not None else ""
            if k not in _cache:
                _cache[k] = ap.parse(val)
            return _cache[k]

        def _sido(val: object, **kw: object) -> str | None:
            return _parse_cached(val)[0] or None

        def _sigungu(val: object, **kw: object) -> str | None:
            return _parse_cached(val)[1] or None

        def _addr_split(val: object, **kw: object) -> dict | None:
            if not val:
                return None
            sido, sigungu, detail = _parse_cached(val)
            return {
                "":      str(val),
                "_시도":  sido or None,
                "_시군구": sigungu or None,
                "_상세":  detail or None,
            }

        reg.register("address_sido",    _sido)
        reg.register("address_sigungu", _sigungu)
        reg.register("addr_split",      _addr_split)

    # ── domain 모듈 자동 로드 (cleansing.py, gpu_survey.py 등) ───────────────
    try:
        reg.auto_load_domain("transforms.domain")
    except Exception as exc:
        print(f"[경고] domain 모듈 자동 로드 실패: {exc}")

    # ── 공통 주소 모듈 폴백 (address_parsing 미설정 시) ───────────────────────
    try:
        from transforms.common.address import _TRANSFORMS as _addr_transforms
        reg.register_dict(_addr_transforms)
    except Exception:
        pass

    return reg


class SurveyPipeline:
    def __init__(self, cfg: SurveyConfig, config_path: str | Path | None = None):
        self._cfg         = cfg
        self._config_path = Path(config_path) if config_path else None

    def run(self, input_path: str | Path | None = None, dry_run: bool = False) -> Path | None:
        cfg = self._cfg
        proj_dir = self._config_path.parent if self._config_path else None

        # ── resolve style_file path relative to config ───────────────────────
        if cfg.style_file and proj_dir:
            sf = Path(cfg.style_file)
            if not sf.is_absolute():
                cfg.style_file = str(proj_dir / sf)

        # ── load shared patterns (patterns_file) ──────────────────────────────
        patterns = load_patterns(cfg.patterns_file, proj_dir)

        # address_parsing: 프로젝트 config.yaml 우선, 없으면 patterns_file 사용
        if cfg.address_parsing is None and patterns.address_parsing:
            from engine.config import AddressParsingConfig
            cfg.address_parsing = AddressParsingConfig.model_validate(
                patterns.address_parsing
            )
            if cfg.address_parsing.sido_patterns:
                print(f"주소 패턴 로드: {cfg.patterns_file} ({len(cfg.address_parsing.sido_patterns)}개 시도)")

        # company/phone/brn 패턴을 transform_kwargs에 주입
        inject_into_kwargs(cfg.transform_kwargs, patterns)

        # ── input: merger or direct file ──────────────────────────────────────
        src_wb: openpyxl.Workbook | None = None
        if cfg.merge:
            from engine.merger import DataMerger
            df = DataMerger(cfg.merge).run()
            wb = Workbook()
        else:
            src_path = (
                Path(input_path) if input_path
                else (proj_dir / cfg.source.file if cfg.source.file and proj_dir else None)
            )
            if not src_path or not src_path.exists():
                raise FileNotFoundError(f"입력 파일을 찾을 수 없습니다: {src_path}")
            print(f"읽는 중: {src_path.name}")
            wb = openpyxl.load_workbook(src_path, data_only=True)
            src_wb = wb
            df = _sheet_to_dataframe(wb, cfg)

        print(f"원본 행수: {len(df)}")

        raw_df = df  # keep reference before preprocessing

        # ── preprocess ───────────────────────────────────────────────────────
        if cfg.preprocess.fill_down or cfg.preprocess.row_filter.include or cfg.preprocess.row_filter.exclude:
            df = Preprocessor(cfg.preprocess).run(df)
            print(f"전처리 후 행수: {len(df)}")

        # ── transform registry ────────────────────────────────────────────────
        registry = _build_registry(cfg)

        # ── write sheets ──────────────────────────────────────────────────────
        out_wb = Workbook()
        out_wb.remove(out_wb.active)  # remove default sheet

        writer  = CleanedSheetWriter(cfg, registry)
        n_rows, col_index_map, cleaned_col_vals = writer.write(out_wb, df)
        print(f"Cleaned 시트 기록: {n_rows}행")

        if cfg.summary.sections:
            SummarySheetWriter(cfg).write(out_wb, df, col_index_map, cleaned_col_vals)

        # ── 원본 시트 ─────────────────────────────────────────────────────────
        _write_raw_sheet(out_wb, src_wb, cfg, raw_df)

        # ── Config / Guide sheets ─────────────────────────────────────────────
        from engine.config_excel import write_config_sheet, write_guide_sheet
        write_config_sheet(out_wb, cfg)
        write_guide_sheet(out_wb)

        # ── output path ───────────────────────────────────────────────────────
        out_dir  = Path(cfg.paths.output_dir)
        if not out_dir.is_absolute():
            if self._config_path:
                out_dir = self._config_path.parent / out_dir
            else:
                # config_path가 없는 경우 (CLI Excel 다이렉트 호출 등)
                # 서브프로젝트 폴더가 존재하면 그 하위 output으로 똑똑하게 스마트 폴백
                proj_folder = Path("projects") / cfg.project
                if proj_folder.exists():
                    out_dir = proj_folder / out_dir
                else:
                    out_dir = Path(cfg.paths.output_dir)
        
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / cfg.paths.output_file

        if dry_run:
            print("\n[dry-run] 파일 저장을 건너뛰었습니다. (정상 작동 확인)")
            print(f"완료: {n_rows}건 (dry-run)")
            return None

        try:
            out_wb.save(out_path)
            save_path = out_path
        except PermissionError:
            ts = datetime.now().strftime("%H%M%S")
            save_path = out_path.with_stem(out_path.stem + f"_{ts}")
            out_wb.save(save_path)
            print(f"[주의] 파일이 열려 있어 임시 저장: {save_path.name}")

        print(f"저장: {save_path}")

        # ── slicers ───────────────────────────────────────────────────────────
        if cfg.slicers:
            inject_slicers(save_path, cfg, col_index_map)

        # ── config.json 저장 (프로젝트 폴더) ─────────────────────────────────
        if self._config_path:
            config_json = self._config_path.parent / f"{cfg.project}_config.json"
            try:
                config_json.parent.mkdir(parents=True, exist_ok=True)
                with open(config_json, "w", encoding="utf-8") as f:
                    json.dump(
                        cfg.model_dump(exclude_none=True),
                        f, ensure_ascii=False, indent=2, default=str,
                    )
                print(f"설정 JSON: {config_json}")
            except Exception as exc:
                print(f"[주의] config.json 저장 실패: {exc}")

        print(f"\n완료: {n_rows}건 → {save_path.name}")
        return save_path
