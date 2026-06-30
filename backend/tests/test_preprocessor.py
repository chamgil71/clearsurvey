from __future__ import annotations

import pandas as pd

from engine.config import FillDownRule, PreprocessConfig, RowFilterConfig, RowFilterRule
from engine.preprocessor import Preprocessor


def test_fill_down_always_fills_blank_cells_from_previous_value():
    df = pd.DataFrame([
        ["A", "row1"],
        [None, "row2"],
        ["B", "row3"],
        ["", "row4"],
    ])
    cfg = PreprocessConfig(
        fill_down=[FillDownRule(source_col=1, output_label="filled", mode="always")]
    )

    result = Preprocessor(cfg).run(df)

    assert result["filled"].tolist() == ["A", "A", "B", "B"]


def test_fill_down_on_trigger_captures_only_trigger_rows():
    df = pd.DataFrame([
        ["P1", "header", 3],
        ["x", "item", 7],
        ["P2", "header", 3],
        ["y", "item", 7],
    ])
    cfg = PreprocessConfig(
        fill_down=[
            FillDownRule(
                source_col=1,
                output_label="project_code",
                mode="on_trigger",
                trigger_col=3,
                trigger_value=3,
            )
        ]
    )

    result = Preprocessor(cfg).run(df)

    assert result["project_code"].tolist() == ["P1", "P1", "P2", "P2"]


def test_row_filter_include_then_exclude():
    df = pd.DataFrame([
        ["A", 7, "keep"],
        ["B", 7, "합계"],
        ["C", 5, "skip"],
        ["D", 7, "keep"],
    ])
    cfg = PreprocessConfig(
        row_filter=RowFilterConfig(
            include=[RowFilterRule(col=2, values=[7])],
            exclude=[RowFilterRule(col=3, equals="합계")],
        )
    )

    result = Preprocessor(cfg).run(df)

    assert result.iloc[:, 0].tolist() == ["A", "D"]
