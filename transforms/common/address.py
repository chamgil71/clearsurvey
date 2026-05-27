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


def addr_split(val, *, address_parsing: dict | None = None, **kw) -> dict | None:
    """주소를 시도/시군구/상세주소 3단계 파생열 dict로 반환.

    addr_split 선택 시 writer.py가 자동으로 4열 생성:
      output_col      → 원본 주소 그대로
      output_col_시도  → 시/도
      output_col_시군구 → 시/군/구
      output_col_상세  → 시군구 이하 상세주소

    address_parsing: config/patterns.yaml > address_parsing 섹션.
    미설정 시 None 반환.
    """
    if not val or not address_parsing:
        return None
    parser = AddressParser(address_parsing)
    sido, sigungu, detail = parser.parse(str(val))
    return {
        "":     str(val),
        "_시도": sido or None,
        "_시군구": sigungu or None,
        "_상세":  detail or None,
    }


_TRANSFORMS: dict = {
    "addr_split": addr_split,
}
