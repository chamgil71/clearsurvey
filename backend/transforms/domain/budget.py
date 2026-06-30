"""예실대비표(예산) 도메인 전용 transforms.

사용 예:
  transform: budget_level      # A컬럼 코드에서 레벨(3~7) 추출
  transform: map_category      # 코드 → 카테고리(인건비/물건비/이전지출)
  transform: map_division      # 수행부서 → 본부명
  transform: pct_format        # "92.77%" → 92.77 (float)
"""
from __future__ import annotations

import re


# ---------------------------------------------------------------------------
# budget_level  —  예산 코드에서 계층 레벨 추출
# ---------------------------------------------------------------------------

# 레벨 패턴 (길이·형태 기반, 명세서 포맷 기준)
_LEVEL_PATTERNS: list[tuple[str, int]] = [
    (r"^\d{2}-\d{2}-[A-Z]-\d{2}$",  3),   # 26-01-Q-11  → 사업코드
    (r"^\d00-00$",                    4),   # 100-00, 200-00 → 대분류
    (r"^\d{3}-00$",                   5),   # 110-00, 210-00 → 중분류
    (r"^\d{3}-\d{2}$",               6),   # 110-03, 210-01 → 소분류
    (r"^\d{3}$",                      7),   # 001, 007, 012  → 세부항목
]


def budget_level(val, **kw) -> int | None:
    """예산코드(A열) 문자열에서 계층 레벨(3~7)을 추출.

    반환값 None = 합계행 등 패턴 불일치.
    """
    if val is None:
        return None
    s = str(val).strip()
    for pattern, level in _LEVEL_PATTERNS:
        if re.match(pattern, s):
            return level
    return None


# ---------------------------------------------------------------------------
# map_category  —  코드 → 예산 카테고리
# ---------------------------------------------------------------------------

_DEFAULT_CATEGORY_MAP: dict[str, str] = {
    "100-00": "인건비",
    "111-00": "인건비",
    "200-00": "물건비",
    "211-00": "운영비",
    "300-00": "이전지출",
    "400-00": "자산취득",
    "414-00": "유형자산",
    "430-00": "유형자산",
}


def map_category(
    val,
    *,
    category_map: dict | None = None,
    **kw,
) -> str | None:
    """예산코드(A열)를 카테고리 문자열로 변환.

    category_map: transform_kwargs.category_map 또는 기본 맵 사용.
    매핑 없으면 None 반환.
    """
    if val is None:
        return None
    s = str(val).strip()
    mapping = category_map if category_map is not None else _DEFAULT_CATEGORY_MAP
    return mapping.get(s)


# ---------------------------------------------------------------------------
# map_division  —  수행부서 → 본부명
# ---------------------------------------------------------------------------

_DEFAULT_DIVISION_MAP: dict[str, str] = {
    "AI전략팀": "AI본부",
    "AI인프라팀": "AI본부",
    "AI인프라확충팀": "AI본부",
    "반도체AI팀": "AI본부",
    "디지털인프라팀": "AI본부",
    "AX원스톱지원센터 TF팀": "디지털혁신본부",
    "클라우드팀": "클라우드본부",
    "클라우드사업팀": "클라우드본부",
    "공공혁신팀": "공공혁신본부",
    "지역협력팀": "지역협력본부",
    "그린IT팀": "그린IT본부",
    "산학협력센터": "산학협력본부",
}


def map_division(
    val,
    *,
    division_map: dict | None = None,
    **kw,
) -> str | None:
    """수행부서(F열)를 본부명으로 변환.

    division_map: transform_kwargs.division_map 또는 기본 맵 사용.
    매핑 없으면 원본 반환 (알 수 없는 부서를 없애지 않도록).
    """
    if val is None:
        return None
    s = str(val).strip()
    mapping = division_map if division_map is not None else _DEFAULT_DIVISION_MAP
    return mapping.get(s, s)


# ---------------------------------------------------------------------------
# pct_format  —  "92.77%" → 92.77 (float)
# ---------------------------------------------------------------------------

def pct_format(val, **kw) -> float | None:
    """퍼센트 문자열을 float으로 변환.

    '92.77%' → 92.77
    '0%'     → 0.0
    파싱 불가 → None
    """
    if val is None:
        return None
    s = str(val).strip().rstrip("%")
    try:
        return float(s)
    except ValueError:
        return None


# ---------------------------------------------------------------------------
# 레지스트리 등록
# ---------------------------------------------------------------------------

_TRANSFORMS: dict = {
    "budget_level":  budget_level,
    "map_category":  map_category,
    "map_division":  map_division,
    "pct_format":    pct_format,
}
