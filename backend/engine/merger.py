from __future__ import annotations

from pathlib import Path

import pandas as pd

from engine.config import MergeConfig, MergeSource


def _read_source(src: MergeSource) -> pd.DataFrame:
    p = Path(src.path)
    frames: list[pd.DataFrame] = []

    files: list[Path] = []
    if p.is_dir():
        files = sorted(p.glob("*.xlsx")) + sorted(p.glob("*.xls"))
    elif p.is_file():
        files = [p]

    for f in files:
        try:
            df = pd.read_excel(
                f,
                sheet_name=src.sheet or 0,
                header=src.header_row - 1,   # pandas 0-based
                dtype=str,
            )
        except Exception as exc:
            print(f"  [경고] {f.name} 읽기 실패: {exc}")
            continue

        if src.column_mapping:
            df = df.rename(columns=src.column_mapping)

        df["_출처파일"] = f.name
        frames.append(df)

    return pd.concat(frames, ignore_index=True) if frames else pd.DataFrame()


class DataMerger:
    def __init__(self, cfg: MergeConfig):
        self._cfg = cfg

    def run(self) -> pd.DataFrame:
        frames: list[pd.DataFrame] = []
        for src in self._cfg.sources:
            df = _read_source(src)
            if not df.empty:
                frames.append(df)

        if not frames:
            return pd.DataFrame()

        merged = pd.concat(frames, ignore_index=True)

        if not self._cfg.output.add_source_col and "_출처파일" in merged.columns:
            merged = merged.drop(columns=["_출처파일"])
        elif self._cfg.output.add_source_col:
            src_col = self._cfg.output.source_col_name
            if "_출처파일" in merged.columns and src_col != "_출처파일":
                merged = merged.rename(columns={"_출처파일": src_col})

        dedup = self._cfg.dedup
        if dedup.strategy != "none" and dedup.key_cols:
            keep = "first" if dedup.strategy == "first" else "last"
            merged = merged.drop_duplicates(subset=dedup.key_cols, keep=keep)

        return merged.reset_index(drop=True)
