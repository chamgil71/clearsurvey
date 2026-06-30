"""패턴 설정 로드 및 병합 — config/patterns.yaml 기반."""
from __future__ import annotations

from pathlib import Path
from typing import Any

import yaml
from pydantic import BaseModel, Field


# ---------------------------------------------------------------------------
# Pydantic models for each pattern section
# ---------------------------------------------------------------------------

class CompanyPatterns(BaseModel):
    corp_forms: list[str] = Field(default_factory=lambda: [
        "주식회사", "유한회사", "유한책임회사", "합자회사",
        "합명회사", "재단법인", "사단법인",
    ])
    symbol_forms: list[str] = Field(default_factory=lambda: ["㈜", "㈔"])
    bracket_forms: list[str] = Field(default_factory=lambda: [
        r"\(주\)", r"\(유\)", r"\(재\)", r"\(사\)", r"\(합\)",
    ])
    abbrevs: dict[str, str] = Field(default_factory=lambda: {
        "주식회사": "(주)", "유한회사": "(유)", "합자회사": "(합)",
        "합명회사": "(합명)", "유한책임회사": "(유한)",
        "재단법인": "(재)", "사단법인": "(사)",
    })


class PhonePatterns(BaseModel):
    intl_prefix: str = "82"
    area_codes: dict[str, int] = Field(default_factory=lambda: {
        "02": 2,
        "031": 3, "032": 3, "033": 3,
        "041": 3, "042": 3, "043": 3, "044": 3,
        "051": 3, "052": 3, "053": 3, "054": 3, "055": 3,
        "061": 3, "062": 3, "063": 3, "064": 3,
        "010": 3, "011": 3, "016": 3, "017": 3, "018": 3, "019": 3,
        "070": 3, "080": 3,
    })


class BrnPatterns(BaseModel):
    weights: list[int] = Field(default_factory=lambda: [1, 3, 7, 1, 3, 7, 1, 3, 5])
    separator: str = "-"
    parts: list[int] = Field(default_factory=lambda: [3, 2, 5])


class PatternConfig(BaseModel):
    """최종 병합된 패턴 설정. transform_kwargs로 주입됩니다."""
    address_parsing: dict[str, Any] | None = None  # AddressParsingConfig 호환 raw dict
    company: CompanyPatterns = Field(default_factory=CompanyPatterns)
    phone: PhonePatterns = Field(default_factory=PhonePatterns)
    brn: BrnPatterns = Field(default_factory=BrnPatterns)
    # [표준이름, [동의어들...]] 리스트. 순서 = 우선순위(0=최고위).
    position_patterns: list[list] = Field(default_factory=list)
    # [본부명, [팀이름들...]] 리스트. 순서 = 본부 우선순위.
    division_patterns: list[list] = Field(default_factory=list)


def _build_lookup_and_rank(
    patterns: list[list],
) -> tuple[dict[str, str], dict[str, int]]:
    """[[표준명, [동의어...]], ...] → (lookup, rank) 두 dict 반환.

    lookup: {동의어: 표준명}  — transform 함수에 주입
    rank:   {표준명: 순위}    — 향후 소팅에 활용 (0 = 최고위)
    """
    lookup: dict[str, str] = {}
    rank: dict[str, int] = {}
    for i, entry in enumerate(patterns):
        if not entry:
            continue
        canonical = str(entry[0])
        rank[canonical] = i
        aliases: list = entry[1] if len(entry) > 1 and isinstance(entry[1], list) else [canonical]
        for alias in aliases:
            lookup[str(alias)] = canonical
    return lookup, rank


# ---------------------------------------------------------------------------
# Loader
# ---------------------------------------------------------------------------

def load_patterns(
    patterns_file: str | None,
    project_dir: Path | None = None,
) -> PatternConfig:
    """patterns_file을 로드하고 PatternConfig로 반환.

    patterns_file이 None이거나 파일이 없으면 코드 내 기본값 사용.
    상대 경로는 project_dir 기준으로 해석.
    """
    if not patterns_file:
        return PatternConfig()

    path = Path(patterns_file)
    if not path.is_absolute() and project_dir:
        path = project_dir / path

    if not path.exists():
        print(f"[경고] patterns_file 없음: {path} (기본값 사용)")
        return PatternConfig()

    with open(path, encoding="utf-8") as f:
        raw = yaml.safe_load(f) or {}

    return PatternConfig.model_validate(raw)


def inject_into_kwargs(extra_kw: dict, patterns: PatternConfig) -> None:
    """CleanedSheetWriter의 extra_kw에 패턴을 주입.

    transforms (normalize_company, normalize_phone, validate_brn,
    norm_position, map_division)가 **kw 를 통해 패턴을 수신합니다.

    position_map / division_map : {동의어: 표준명} 평탄화 dict
    position_rank / division_rank: {표준명: 순위(0=최고위)} — 향후 소팅용
    """
    extra_kw["company_patterns"] = patterns.company.model_dump()
    extra_kw["phone_patterns"]   = patterns.phone.model_dump()
    extra_kw["brn_patterns"]     = patterns.brn.model_dump()
    if patterns.position_patterns:
        pos_map, pos_rank = _build_lookup_and_rank(patterns.position_patterns)
        extra_kw["position_map"]  = pos_map
        extra_kw["position_rank"] = pos_rank
    if patterns.division_patterns:
        div_map, div_rank = _build_lookup_and_rank(patterns.division_patterns)
        extra_kw["division_map"]  = div_map
        extra_kw["division_rank"] = div_rank
