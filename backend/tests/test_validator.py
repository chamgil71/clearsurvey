from __future__ import annotations

from engine.config import ColumnDef, SurveyConfig
from engine.validator import validate_config


def test_validator_accepts_minimal_valid_config():
    cfg = SurveyConfig(
        columns=[
            ColumnDef(output_col="ID", source_col=1, transform="copy"),
            ColumnDef(output_col="이메일", source_col=2, transform="validate_email"),
        ]
    )

    report = validate_config(cfg)

    assert report.ok


def test_validator_reports_unknown_transform():
    cfg = SurveyConfig(
        columns=[
            ColumnDef(output_col="ID", source_col=1, transform="does_not_exist"),
        ]
    )

    report = validate_config(cfg)

    assert not report.ok
    assert any("등록되어 있지 않습니다" in msg for msg in report.errors)


def test_validator_reports_missing_source_label():
    cfg = SurveyConfig(
        columns=[
            ColumnDef(output_col="사업코드", source_label="missing_fill", transform="copy"),
        ]
    )

    report = validate_config(cfg)

    assert not report.ok
    assert any("source_label" in msg for msg in report.errors)


def test_validator_reports_summary_unknown_col_ref():
    raw = {
        "columns": [{"output_col": "기관명", "source_col": 1, "transform": "copy"}],
        "summary": {
            "layout": {"cols": 1},
            "sections": [
                {
                    "id": "bad",
                    "title": "잘못된 참조",
                    "type": "unique_count",
                    "layout_col": 1,
                    "col_ref": "없는컬럼",
                }
            ],
        },
    }
    cfg = SurveyConfig.model_validate(raw)

    report = validate_config(cfg)

    assert not report.ok
    assert any("없는컬럼" in msg for msg in report.errors)


def test_validator_reports_duplicate_output_col():
    cfg = SurveyConfig(
        columns=[
            ColumnDef(output_col="중복", source_col=1, transform="copy"),
            ColumnDef(output_col="중복", source_col=2, transform="copy"),
        ]
    )

    report = validate_config(cfg)

    assert not report.ok
    assert any("output_col 중복" in msg for msg in report.errors)


def test_validator_allows_exclude_transform():
    cfg = SurveyConfig(
        columns=[
            ColumnDef(output_col="ID", source_col=1, transform="copy"),
            ColumnDef(output_col="제외", source_col=2, transform="exclude"),
        ]
    )

    report = validate_config(cfg)

    assert report.ok
    assert any("출력에서 제외" in msg for msg in report.infos)
