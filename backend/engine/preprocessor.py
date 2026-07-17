from __future__ import annotations

from typing import Any

import pandas as pd

from engine.config import FillDownRule, PreprocessConfig, RowFilterConfig, RowFilterRule


def _matches_rule(val: Any, rule: RowFilterRule) -> bool:
    if rule.is_empty is not None:
        empty = val is None or (isinstance(val, float) and pd.isna(val)) or str(val).strip() == ""
        return empty == rule.is_empty
    if rule.values is not None:
        try:
            return val in rule.values or str(val) in [str(v) for v in rule.values]
        except Exception:
            return False
    if rule.equals is not None:
        return val == rule.equals or str(val) == str(rule.equals)
    return False


def _apply_fill_down(df: pd.DataFrame, rules: list[FillDownRule]) -> pd.DataFrame:
    df = df.copy()
    for rule in rules:
        src_idx = rule.source_col - 1         # 0-based
        if src_idx >= len(df.columns):
            continue
        src = df.iloc[:, src_idx]

        if rule.mode == "always":
            filled = src.copy()
            last = None
            for i, v in enumerate(filled):
                is_empty = v is None or (isinstance(v, float) and pd.isna(v)) or str(v).strip() == ""
                if not is_empty:
                    last = v
                elif last is not None:
                    filled.iloc[i] = last
            df[rule.output_label] = filled

        elif rule.mode == "on_trigger":
            trig_idx = (rule.trigger_col or 1) - 1
            trig_col = df.iloc[:, trig_idx] if trig_idx < len(df.columns) else pd.Series(index=df.index)
            captured: list[Any] = []
            current = None
            for i, (cell, trig) in enumerate(zip(src, trig_col)):
                trig_match = (
                    trig == rule.trigger_value
                    or str(trig) == str(rule.trigger_value)
                )
                if trig_match:
                    current = cell
                captured.append(current)
            df[rule.output_label] = captured

    return df


def _apply_row_filter(df: pd.DataFrame, cfg: RowFilterConfig) -> pd.DataFrame:
    mask = pd.Series([True] * len(df), index=df.index)

    if cfg.include:
        inc_mask = pd.Series([False] * len(df), index=df.index)
        for rule in cfg.include:
            col_idx = rule.col - 1
            if col_idx >= len(df.columns):
                continue
            col = df.iloc[:, col_idx]
            row_mask = col.apply(lambda v, r=rule: _matches_rule(v, r))
            inc_mask = inc_mask | row_mask  # OR semantics: any include rule passes
        # if no include rules matched anything, keep all (empty include = no filter)
        mask = mask & inc_mask

    if cfg.exclude:
        for rule in cfg.exclude:
            col_idx = rule.col - 1
            if col_idx >= len(df.columns):
                continue
            col = df.iloc[:, col_idx]
            row_mask = col.apply(lambda v, r=rule: _matches_rule(v, r))
            mask = mask & ~row_mask  # OR semantics: any exclude match removes row

    # index 를 리셋하지 않는다 — index 가 원본 엑셀 행번호(`__row_id`)를 나르기 때문이다.
    # reset_index(drop=True) 를 하면 행 필터를 켠 프로젝트에서 행 식별자가 조용히 사라져
    # 대시보드 편집이 엉뚱한 행에 붙는다. (engine/config.py 의 ROW_ID_COL 주석 참고)
    # 하위 코드는 모두 위치 기반(iloc / enumerate(iterrows()))이라 index 가 비연속이어도 안전하다.
    return df[mask]


class Preprocessor:
    def __init__(self, cfg: PreprocessConfig):
        self._cfg = cfg

    def run(self, df: pd.DataFrame) -> pd.DataFrame:
        df = _apply_fill_down(df, self._cfg.fill_down)
        df = _apply_row_filter(df, self._cfg.row_filter)
        return df
