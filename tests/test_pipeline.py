"""
Tests for engine/pipeline.py

Coverage targets:
  - _build_registry()     — 요청별 독립 인스턴스, 기본 transforms 등록 확인
  - SurveyPipeline.run()  — 전체 파이프라인 실행, 출력 파일 생성, 시트 검증

실행: pytest tests/test_pipeline.py -v
"""
from __future__ import annotations

import json
from pathlib import Path

import openpyxl
import pytest
from openpyxl import Workbook

from engine.config import SurveyConfig, ColumnDef
from engine.pipeline import _build_registry, SurveyPipeline


# ─────────────────────────────────────────────────────────────────────────────
# 헬퍼: 최소 SurveyConfig 생성
# ─────────────────────────────────────────────────────────────────────────────

def _make_simple_cfg(
    tmp_path: Path,
    *,
    project: str = "test_proj",
    extra_cols: list[dict] | None = None,
) -> tuple[SurveyConfig, Path, Path]:
    """단순 2컬럼 엑셀 + 최소 SurveyConfig 를 반환합니다.

    Returns
    -------
    (cfg, data_path, config_yaml_path)
    """
    data_path = tmp_path / "data.xlsx"
    wb = Workbook()
    ws = wb.active
    ws.title = "Sheet1"
    # Row 1: headers
    ws.cell(1, 1, "이름")
    ws.cell(1, 2, "부서")
    ws.cell(1, 3, "점수")
    # Rows 2-4: data
    for ri, (name, dept, score) in enumerate([
        ("홍길동", "개발팀", 90),
        ("김철수", "영업팀", 85),
        ("이영희", "개발팀", 92),
    ], 2):
        ws.cell(ri, 1, name)
        ws.cell(ri, 2, dept)
        ws.cell(ri, 3, score)
    wb.save(data_path)

    cols: list[dict] = [
        {"output_col": "이름",  "source_col": 1, "transform": "mask_name"},
        {"output_col": "부서",  "source_col": 2, "transform": "copy"},
        {"output_col": "점수",  "source_col": 3, "transform": "norm_num"},
    ]
    if extra_cols:
        cols.extend(extra_cols)

    cfg = SurveyConfig(
        project=project,
        source={"sheet": None, "header_row": 1, "data_start_row": 2, "file": str(data_path)},
        paths={"output_dir": str(tmp_path / "output"), "output_file": "result.xlsx"},
        sheets={"cleaned": "Cleaned", "summary": "Summary"},
        columns=cols,
    )
    config_yaml_path = tmp_path / "config.yaml"
    return cfg, data_path, config_yaml_path


# ─────────────────────────────────────────────────────────────────────────────
# _build_registry — 요청별 독립 인스턴스 & 기본 transforms 등록
# ─────────────────────────────────────────────────────────────────────────────

class TestBuildRegistry:
    def _minimal_cfg(self) -> SurveyConfig:
        return SurveyConfig(
            project="reg_test",
            source={"header_row": 1, "data_start_row": 2},
            paths={"output_dir": "output", "output_file": "result.xlsx"},
            sheets={"cleaned": "Cleaned", "summary": "Summary"},
            columns=[],
        )

    def test_returns_fresh_instance_each_call(self):
        cfg = self._minimal_cfg()
        reg1 = _build_registry(cfg)
        reg2 = _build_registry(cfg)
        assert reg1 is not reg2, "각 호출마다 독립된 인스턴스를 반환해야 한다"

    def test_copy_registered(self):
        cfg = self._minimal_cfg()
        reg = _build_registry(cfg)
        assert "copy" in reg

    def test_copy_returns_same_value(self):
        cfg = self._minimal_cfg()
        reg = _build_registry(cfg)
        assert reg.apply("copy", "hello") == "hello"
        assert reg.apply("copy", 42) == 42
        assert reg.apply("copy", None) is None

    def test_norm_text_registered_via_domain(self):
        cfg = self._minimal_cfg()
        reg = _build_registry(cfg)
        assert "norm_text" in reg

    def test_to_binary_registered_via_domain(self):
        cfg = self._minimal_cfg()
        reg = _build_registry(cfg)
        assert "to_binary" in reg

    def test_mask_name_registered_via_domain(self):
        cfg = self._minimal_cfg()
        reg = _build_registry(cfg)
        assert "mask_name" in reg

    def test_no_addr_split_without_address_parsing(self):
        """address_parsing 미설정 시 addr_split 등록 불필요 (등록돼도 common.address 폴백으로만)."""
        cfg = self._minimal_cfg()
        cfg.address_parsing = None
        reg = _build_registry(cfg)
        # addr_split은 address_parsing이 없으면 등록 안 됨
        # (common.address 폴백에서 등록될 수도 있으므로 존재 여부는 단언하지 않음;
        #  address_sido/sigungu는 절대 등록 안 됨)
        assert "address_sido" not in reg
        assert "address_sigungu" not in reg

    def test_address_transforms_registered_with_parsing(self, tmp_path):
        """address_parsing 설정 시 address_sido/sigungu/addr_split 등록."""
        from engine.config import AddressParsingConfig
        cfg = self._minimal_cfg()
        cfg.address_parsing = AddressParsingConfig(
            col=1,
            sido_patterns=[["서울", ["서울", "서울특별시"]]],
            seoul_gu=[],
        )
        reg = _build_registry(cfg)
        assert "address_sido" in reg
        assert "address_sigungu" in reg
        assert "addr_split" in reg

    def test_two_instances_are_independent(self):
        """두 인스턴스에 각각 다른 transform 을 등록해도 서로 독립적."""
        cfg = self._minimal_cfg()
        reg1 = _build_registry(cfg)
        reg2 = _build_registry(cfg)
        reg1.register("_test_only_r1", lambda v, **kw: "r1")
        assert "_test_only_r1" not in reg2


# ─────────────────────────────────────────────────────────────────────────────
# SurveyPipeline.run() — 전체 실행 검증
# ─────────────────────────────────────────────────────────────────────────────

class TestSurveyPipelineRun:
    def test_returns_path_to_output_file(self, tmp_path):
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path)
        assert out is not None
        assert out.exists()
        assert out.suffix == ".xlsx"

    def test_output_in_configured_dir(self, tmp_path):
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path)
        assert out is not None
        assert out.parent == tmp_path / "output"

    def test_cleaned_sheet_exists(self, tmp_path):
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path)
        wb = openpyxl.load_workbook(out)
        assert "Cleaned" in wb.sheetnames

    def test_cleaned_sheet_row_count(self, tmp_path):
        """원본 3행 → Cleaned 시트 데이터 3행 (헤더 행 제외 2행 이상 혹은 고정)."""
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path)
        wb = openpyxl.load_workbook(out)
        ws = wb["Cleaned"]
        # Row 1: section header, Row 2: output header, Row 3+: data
        data_rows = [
            r for r in ws.iter_rows(min_row=3, values_only=True)
            if any(c is not None for c in r)
        ]
        assert len(data_rows) == 3

    def test_cleaned_sheet_has_expected_headers(self, tmp_path):
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path)
        wb = openpyxl.load_workbook(out)
        ws = wb["Cleaned"]
        # Row 2 is output header row
        headers = [ws.cell(2, ci).value for ci in range(1, 4)]
        assert "이름" in headers
        assert "부서" in headers
        assert "점수" in headers

    def test_exclude_transform_skips_column(self, tmp_path):
        """transform='exclude' 인 컬럼은 Cleaned 시트에 포함되지 않는다."""
        cfg, data_path, config_yaml = _make_simple_cfg(
            tmp_path,
            extra_cols=[{"output_col": "비밀", "transform": "exclude"}],
        )
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path)
        wb = openpyxl.load_workbook(out)
        ws = wb["Cleaned"]
        all_header_vals = [ws.cell(2, ci).value for ci in range(1, ws.max_column + 1)]
        assert "비밀" not in all_header_vals

    def test_config_json_written_next_to_config_yaml(self, tmp_path):
        """config_path 제공 시 {project}_config.json 파일이 생성된다."""
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        pipeline.run(input_path=data_path)
        config_json = tmp_path / "test_proj_config.json"
        assert config_json.exists()
        data = json.loads(config_json.read_text(encoding="utf-8"))
        assert data["project"] == "test_proj"

    def test_raw_sheet_exists(self, tmp_path):
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path)
        wb = openpyxl.load_workbook(out)
        assert "원본" in wb.sheetnames

    def test_dry_run_returns_none_no_file(self, tmp_path):
        cfg, data_path, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        out = pipeline.run(input_path=data_path, dry_run=True)
        assert out is None
        assert not (tmp_path / "output" / "result.xlsx").exists()

    def test_missing_input_raises_file_not_found(self, tmp_path):
        cfg, _, config_yaml = _make_simple_cfg(tmp_path)
        pipeline = SurveyPipeline(cfg, config_path=config_yaml)
        with pytest.raises(FileNotFoundError):
            pipeline.run(input_path=tmp_path / "nonexistent.xlsx")
