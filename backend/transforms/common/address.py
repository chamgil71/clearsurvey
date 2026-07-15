"""주소 파싱 및 addr_split transform."""
from __future__ import annotations

import re


class AddressParser:
    def __init__(self, cfg: dict):
        patterns = cfg.get("sido_patterns", [])
        self._flat = sorted(
            [(alias, code) for code, aliases in patterns for alias in aliases],
            key=lambda x: -len(x[0]),
        )
        self._seoul_gu = set(cfg.get("seoul_gu", []))

    def parse(self, addr) -> tuple[str, str, str]:
        """주소를 (시도, 시군구, 상세주소) 3단계로 파싱.

        우편번호 제거 → 시도 추출 → 시군구 추출 → 나머지를 상세주소로 반환.
        """
        if not addr:
            return "", "", ""
        s = re.sub(r"^\(?\d{5,6}\)?\s*", "", str(addr).strip())

        sido, rest = "", s
        for alias, code in self._flat:
            if s.startswith(alias):
                sido = code
                rest = s[len(alias):].strip()
                break

        if not sido:
            first = s.split()[0].rstrip(",") if s.split() else ""
            if first in self._seoul_gu:
                sido, rest = "서울", s

        sigungu = ""
        for tok in rest.split():
            t = tok.rstrip(",")
            if re.search(r"(구|시|군)$", t):
                sigungu = t
                break

        # 상세주소: rest에서 시군구 이후 부분
        detail = ""
        if sigungu and sigungu in rest:
            idx = rest.find(sigungu)
            detail = rest[idx + len(sigungu):].strip()
        elif not sigungu:
            detail = rest.strip()

        return sido or "", sigungu or "", detail or ""


def build_addr_parts_dict(val: object, sido: str, sigungu: str, detail: str) -> dict | None:
    """이미 파싱된 (시도, 시군구, 상세) 3-tuple을 addr_split 파생열 dict로 조립합니다.

    writer.py가 이 dict를 보고 4열을 자동 생성합니다:
      output_col      → 원본 주소 그대로
      output_col_시도  → 시/도
      output_col_시군구 → 시/군/구
      output_col_상세  → 시군구 이하 상세주소

    파이프라인(`engine/pipeline.py`)의 `addr_split` 클로저와 아래 `addr_split()` 폴백 함수가
    (매 값마다 새 파서를 만들지, 프로젝트 단위로 캐시된 파서를 재사용할지와 무관하게) 공통으로
    사용하는 순수 함수 — 단위 테스트가 `AddressParser`/`SurveyConfig` 없이도 직접 검증 가능합니다.
    """
    if not val:
        return None
    return {
        "":     str(val),
        "_시도": sido or None,
        "_시군구": sigungu or None,
        "_상세":  detail or None,
    }


def addr_split(val, *, address_parsing: dict | None = None, **kw) -> dict | None:
    """주소를 시도/시군구/상세주소 3단계 파생열 dict로 반환.

    address_parsing: config/patterns.yaml > address_parsing 섹션.
    미설정 시 None 반환.
    """
    if not val or not address_parsing:
        return None
    parser = AddressParser(address_parsing)
    sido, sigungu, detail = parser.parse(str(val))
    return build_addr_parts_dict(val, sido, sigungu, detail)


_TRANSFORMS: dict = {
    "addr_split": addr_split,
}
