"""범용 데이터 클렌징 transforms.

각 transform은 config.yaml의 transform: 필드에 이름으로 지정.
새 이름(norm_*/val_*/mask_*/to_*)과 기존 이름(normalize_*/validate_*/name_blind) 모두 동작.

  transform: norm_text        / normalize_text
  transform: norm_num         / normalize_number / to_numeric
  transform: norm_date        / normalize_date
  transform: norm_date_parts  # 날짜 + 연/월/일 파생열 자동 생성
  transform: norm_phone       / normalize_phone
  transform: norm_company     / normalize_company
  transform: norm_position    / normalize_title
  transform: val_email        / validate_email
  transform: val_url          / validate_url
  transform: val_brn          / validate_brn
  transform: mask_name        / name_blind
  transform: mask_rrn
  transform: to_binary        / o_binary  (flag_keyword 필드 필요)
  transform: to_pct
  transform: group_sum        (source_cols 필드 필요)
  transform: addr_split       (address_parsing 설정 필요)
"""
from __future__ import annotations

import re
from datetime import date as _date
from typing import Any


# ---------------------------------------------------------------------------
# normalize_text  —  텍스트 정규화
# ---------------------------------------------------------------------------

def normalize_text(val, *, strip_chars: str = "", **kw) -> str | None:
    """공백 정리, 중복 공백 제거, 빈 값 None 처리.

    strip_chars: 추가로 제거할 문자 목록 (예: "[]()").
    """
    if val is None:
        return None
    s = str(val).strip()
    if strip_chars:
        s = s.strip(strip_chars)
    s = re.sub(r"[ \t]+", " ", s)   # 내부 연속 공백 → 단일 공백
    s = re.sub(r"\n+", " ", s)      # 줄바꿈 → 공백
    return s or None


# ---------------------------------------------------------------------------
# normalize_number  —  숫자 정규화
# ---------------------------------------------------------------------------

_BIG_UNITS = [("조", 10**12), ("억", 10**8), ("만", 10**4)]
_SUB_UNITS = [("천", 1_000), ("백", 100), ("십", 10)]


def _parse_kor_number(s: str) -> float | None:
    """한국어 단위(조/억/만/천/백 등)가 섞인 숫자를 파싱.

    지원: 1억2천만, 5백만, 3.5만, 2천5백 등.
    """
    s = s.replace(" ", "")
    total = 0.0
    found = False

    for big_unit, big_mult in _BIG_UNITS:
        # sub+big 먼저 시도 (e.g. 5백만, 2천억)
        for sub_unit, sub_mult in _SUB_UNITS:
            m = re.search(rf"(\d+(?:\.\d+)?){sub_unit}{big_unit}", s)
            if m:
                total += float(m.group(1)) * sub_mult * big_mult
                s = s[:m.start()] + s[m.end():]
                found = True
                break
        # 단순 숫자+big (e.g. 1억, 3.5만)
        m = re.search(rf"(\d+(?:\.\d+)?){big_unit}", s)
        if m:
            total += float(m.group(1)) * big_mult
            s = s[:m.start()] + s[m.end():]
            found = True

    # 남은 sub 단위 (e.g. 2천, 5백)
    for sub_unit, sub_mult in _SUB_UNITS:
        m = re.search(rf"(\d+(?:\.\d+)?){sub_unit}", s)
        if m:
            total += float(m.group(1)) * sub_mult
            s = s[:m.start()] + s[m.end():]
            found = True

    # 순수 숫자 나머지
    clean = re.sub(r"[^\d.]", "", s)
    if clean:
        try:
            total += float(clean)
            found = True
        except ValueError:
            pass

    return total if found else None


def normalize_number(val, *, as_int: bool = False, **kw) -> int | float | None:
    """다양한 숫자 표현을 파싱하여 숫자형으로 반환.

    지원 형식:
      - 콤마 구분: "1,234,567"
      - 한국어 단위: "1억 2천만", "3.5만", "5백만"
      - % 표기: "12.5%" → 12.5
      - 범위: "100~200" → 최댓값 200
      - 빈 문자열 / None → None
    """
    if val is None:
        return None
    s = str(val).strip().replace(",", "")
    # 괄호와 대괄호 내의 부가 설명 텍스트 제거 (예: "(대당8)" -> "")
    s = re.sub(r"\([^)]*\)|\[[^\]]*\]", "", s).strip()
    if not s:
        return None

    # 범위: 최댓값 사용
    range_m = re.match(r"^(-?\d[\d.]*)\s*[-~]\s*(-?\d[\d.]*)(.*)$", s)
    if range_m:
        s = range_m.group(2) + range_m.group(3)

    # 한국어 단위가 포함된 경우
    if re.search(r"[조억만천백십]", s):
        v = _parse_kor_number(s)
        if v is None:
            return None
    else:
        # 일반 숫자 (%, 소수점 허용)
        clean = re.sub(r"[^\d.\-]", "", s)
        if not clean:
            return None
        try:
            v = float(clean)
        except ValueError:
            return None

    if as_int or v == int(v):
        return int(v)
    return v


# ---------------------------------------------------------------------------
# normalize_date  —  날짜 정규화 → YYYY-MM-DD
# ---------------------------------------------------------------------------

_DATE_PATTERNS: list[tuple[str, str]] = [
    (r"(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})", "{0}-{1:02d}-{2:02d}"),
    (r"(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일?",  "{0}-{1:02d}-{2:02d}"),
    (r"(\d{4})년\s*(\d{1,2})월",                  "{0}-{1:02d}-01"),
    (r"(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})",   "20{0}-{1:02d}-{2:02d}"),
    (r"(\d{8})",                                    None),   # 20260115
]


def normalize_date(val, **kw) -> str | None:
    """다양한 날짜 표현을 'YYYY-MM-DD'로 정규화.

    파싱 불가 → None.
    """
    if val is None:
        return None
    # Python datetime 객체는 바로 변환
    if hasattr(val, "year"):
        try:
            return val.strftime("%Y-%m-%d")
        except Exception:
            pass
    s = str(val).strip()
    if not s:
        return None

    for pattern, fmt in _DATE_PATTERNS:
        m = re.search(pattern, s)
        if not m:
            continue
        if fmt is None:
            # 순수 8자리 숫자
            raw = m.group(1)
            try:
                _date(int(raw[:4]), int(raw[4:6]), int(raw[6:]))
                return f"{raw[:4]}-{raw[4:6]}-{raw[6:]}"
            except ValueError:
                continue
        try:
            groups = [int(g) for g in m.groups()]
            result = fmt.format(*groups)
            y, mo, d = result.split("-")
            _date(int(y), int(mo), int(d))   # validate
            return result
        except (ValueError, IndexError):
            continue
    return None


# ---------------------------------------------------------------------------
# normalize_phone  —  전화번호 정규화
# ---------------------------------------------------------------------------

_DEFAULT_PHONE_AREA: dict[str, int] = {
    "02": 2,
    "031": 3, "032": 3, "033": 3, "041": 3, "042": 3, "043": 3,
    "044": 3, "051": 3, "052": 3, "053": 3, "054": 3, "055": 3,
    "061": 3, "062": 3, "063": 3, "064": 3,
    "010": 3, "011": 3, "016": 3, "017": 3, "018": 3, "019": 3,
    "070": 3, "080": 3,
}


def normalize_phone(
    val,
    *,
    phone_patterns: dict | None = None,
    **kw,
) -> str | None:
    """한국 전화번호를 표준 형식으로 정규화.

    phone_patterns: patterns.yaml의 phone 섹션 (pipeline이 자동 주입).
    파싱 불가 → None.
    """
    if val is None:
        return None
    digits = re.sub(r"[^\d]", "", str(val).strip())
    if not digits:
        return None

    if phone_patterns:
        intl  = phone_patterns.get("intl_prefix", "82")
        areas = phone_patterns.get("area_codes", _DEFAULT_PHONE_AREA)
        # area_codes 값이 문자열로 올 수 있으므로 int 변환
        areas = {k: int(v) for k, v in areas.items()}
    else:
        intl  = "82"
        areas = _DEFAULT_PHONE_AREA

    # 국제번호 제거
    if digits.startswith(intl) and len(digits) >= 10:
        digits = "0" + digits[len(intl):]

    # 지역번호 기반 분리 (긴 prefix 먼저)
    for prefix_len in (4, 3, 2):
        prefix = digits[:prefix_len]
        if prefix not in areas:
            continue
        rest  = digits[prefix_len:]
        parts = areas[prefix]
        if parts == 0:  # 특번 (1588 등) — 그대로 반환
            return digits
        if parts == 2:
            if len(rest) == 7:
                return f"{prefix}-{rest[:3]}-{rest[3:]}"
            if len(rest) == 8:
                return f"{prefix}-{rest[:4]}-{rest[4:]}"
        else:
            if len(rest) == 7:
                return f"{prefix}-{rest[:3]}-{rest[3:]}"
            if len(rest) == 8:
                return f"{prefix}-{rest[:4]}-{rest[4:]}"
    return None


# ---------------------------------------------------------------------------
# normalize_company  —  회사명 정규화
# ---------------------------------------------------------------------------

# 기본 패턴 (patterns.yaml 미사용 시 폴백)
_DEFAULT_CORP_FORMS   = ["주식회사", "유한회사", "유한책임회사", "합자회사", "합명회사", "재단법인", "사단법인"]
_DEFAULT_SYMBOL_FORMS = ["㈜", "㈔"]
_DEFAULT_BRACKET_FORMS = [r"\(주\)", r"\(유\)", r"\(재\)", r"\(사\)", r"\(합\)"]
_DEFAULT_ABBREVS = {"주식회사": "(주)", "유한회사": "(유)", "합자회사": "(합)", "합명회사": "(합명)", "유한책임회사": "(유한)"}

# 기본 컴파일 정규식 (폴백 전용)
_CORP_PREFIX   = re.compile(r"^(?:주식회사|유한회사|유한책임회사|합자회사|합명회사|재단법인|사단법인)\s*")
_CORP_SUFFIX   = re.compile(r"\s*(?:주식회사|유한회사|유한책임회사|합자회사|합명회사|재단법인|사단법인)$")
_CORP_BRACKET  = re.compile(r"[\s　]*[\(（]?[㈜㈔]\s*|[\(（]\s*(?:주|유|재|사|합)\s*[\)）]")


def _build_company_regexes(cp: dict) -> tuple:
    """company_patterns dict에서 정규식 3개를 동적으로 빌드."""
    forms    = cp.get("corp_forms", _DEFAULT_CORP_FORMS)
    symbols  = cp.get("symbol_forms", _DEFAULT_SYMBOL_FORMS)
    brackets = cp.get("bracket_forms", _DEFAULT_BRACKET_FORMS)

    forms_pat   = "|".join(re.escape(f) for f in forms)
    symbols_pat = "|".join(re.escape(s) for s in symbols)
    brackets_pat = "|".join(brackets)  # bracket_forms는 이미 정규식 문자열

    prefix_re  = re.compile(rf"^(?:{forms_pat})\s*")
    suffix_re  = re.compile(rf"\s*(?:{forms_pat})$")
    bracket_re = re.compile(rf"[\s　]*(?:{brackets_pat}|{symbols_pat})\s*")
    return prefix_re, suffix_re, bracket_re


def normalize_company(
    val,
    *,
    keep_corp_type: bool = False,
    company_patterns: dict | None = None,
    **kw,
) -> str | None:
    """회사명에서 법인형태 표기를 정규화. 다중 항목(쉼표 등)도 각각 정규화 후 재조합.

    company_patterns: patterns.yaml의 company 섹션 (pipeline이 자동 주입).
    keep_corp_type=True: 법인형태를 약어로 앞에 붙임 → "(주)카카오".
    """
    if val is None:
        return None
    s = str(val).strip()
    if not s:
        return None

    if company_patterns:
        prefix_re, suffix_re, bracket_re = _build_company_regexes(company_patterns)
        abbrevs = company_patterns.get("abbrevs", _DEFAULT_ABBREVS)
    else:
        prefix_re, suffix_re, bracket_re = _CORP_PREFIX, _CORP_SUFFIX, _CORP_BRACKET
        abbrevs = _DEFAULT_ABBREVS

    # 다중 회사명(쉼표, 슬래시 분리) 대응
    items = [x.strip() for x in re.split(r"[,/]+", s) if x.strip()]
    if not items:
        return None

    normalized_items = []
    for item in items:
        corp_type = ""
        m_pref = prefix_re.match(item)
        if m_pref:
            corp_type = m_pref.group().strip()
            item = item[m_pref.end():].strip()
        m_suf = suffix_re.search(item)
        if m_suf:
            corp_type = corp_type or m_suf.group().strip()
            item = item[:m_suf.start()].strip()
        item = bracket_re.sub("", item).strip()
        item = re.sub(r"[ \t]+", " ", item)
        
        if not item:
            continue
            
        if keep_corp_type and corp_type:
            abbr = abbrevs.get(corp_type, f"({corp_type})")
            normalized_items.append(f"{abbr} {item}")
        else:
            normalized_items.append(item)

    if not normalized_items:
        return None
        
    return ", ".join(normalized_items)


# ---------------------------------------------------------------------------
# 이름 블라인드 (name_blind)
# ---------------------------------------------------------------------------

def name_blind(val, **kw) -> str | None:
    """이름 중간 글자를 *로 마스킹.

    '홍길동' → '홍*동'  (3자)
    '신도홍석' → '신**석'  (4자)
    '홍길' → '홍*'  (2자)
    '홍' → '홍'  (1자, 마스킹 불가)
    """
    if not val:
        return None
    s = str(val).strip()
    n = len(s)
    if n <= 1:
        return s
    if n == 2:
        return s[0] + "*"
    return s[0] + "*" * (n - 2) + s[-1]


# ---------------------------------------------------------------------------
# 사업자등록번호 검증 (validate_brn)
# ---------------------------------------------------------------------------

_DEFAULT_WEIGHTS = [1, 3, 7, 1, 3, 7, 1, 3, 5]
_DEFAULT_BRN_SEP = "-"
_DEFAULT_BRN_PARTS = [3, 2, 5]


def _brn_checksum(digits: str, weights: list[int]) -> bool:
    d = [int(c) for c in digits]
    s = sum(d[i] * weights[i] for i in range(9))
    s += (d[8] * 5) // 10
    return (10 - s % 10) % 10 == d[9]


def validate_brn(
    val,
    *,
    brn_patterns: dict | None = None,
    **kw,
) -> str | None:
    """사업자등록번호를 검증하고 정규화된 형식(XXX-XX-XXXXX)으로 반환.

    brn_patterns: patterns.yaml의 brn 섹션 (pipeline이 자동 주입).
    검증 실패 또는 형식 오류 시 None 반환.
    """
    if not val:
        return None
    digits = re.sub(r"[-\s]", "", str(val).strip())
    if len(digits) != 10 or not digits.isdigit():
        return None

    if brn_patterns:
        weights = brn_patterns.get("weights", _DEFAULT_WEIGHTS)
        sep     = brn_patterns.get("separator", _DEFAULT_BRN_SEP)
        parts   = brn_patterns.get("parts", _DEFAULT_BRN_PARTS)
    else:
        weights, sep, parts = _DEFAULT_WEIGHTS, _DEFAULT_BRN_SEP, _DEFAULT_BRN_PARTS

    if not _brn_checksum(digits, weights):
        return None

    # 자릿수 그룹으로 포맷
    pos, segments = 0, []
    for p in parts:
        segments.append(digits[pos:pos + p])
        pos += p
    return sep.join(segments)


# ---------------------------------------------------------------------------
# validate_email  —  이메일 형식 검증
# ---------------------------------------------------------------------------

_EMAIL_RE = re.compile(
    r"^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
)


def validate_email(val, **kw) -> str | None:
    """이메일 형식 검증. 유효하면 소문자로 정규화, 아니면 None."""
    if val is None:
        return None
    s = str(val).strip()
    return s.lower() if _EMAIL_RE.match(s) else None


# ---------------------------------------------------------------------------
# validate_url  —  URL 형식 검증
# ---------------------------------------------------------------------------

_URL_RE = re.compile(
    r"^(https?://)[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)+"
    r"(:\d+)?(/[^\s]*)?"
)


def validate_url(val, **kw) -> str | None:
    """URL 형식 검증. 유효하면 원본 반환, 아니면 None.

    공백 포함·호스트 없는 문자열은 None 처리.
    """
    if val is None:
        return None
    s = str(val).strip()
    if " " in s:
        return None
    if not s.startswith(("http://", "https://")):
        s = "https://" + s
    return s if _URL_RE.match(s) else None


# ---------------------------------------------------------------------------
# split_url_domain / split_url_path  —  URL 분리
# ---------------------------------------------------------------------------

def split_url_domain(val, **kw) -> str | None:
    """URL에서 도메인(스킴+호스트) 부분만 추출.

    'https://aa.bb.com/data/index' → 'https://aa.bb.com'
    """
    if val is None:
        return None
    s = str(val).strip()
    m = re.match(r"^(https?://[^/\s]+)", s)
    return m.group(1) if m else None


def split_url_path(val, **kw) -> str | None:
    """URL에서 경로 부분만 추출 (도메인 이후).

    'https://aa.bb.com/data/index?a=1' → '/data/index?a=1'
    """
    if val is None:
        return None
    s = str(val).strip()
    m = re.match(r"https?://[^/\s]+(/.*)$", s)
    return m.group(1).rstrip("/") if m else None


# ---------------------------------------------------------------------------
# norm_position  —  직책/직급 정규화
# ---------------------------------------------------------------------------

_DEFAULT_POSITION_MAP: dict[str, str] = {
    # 정확한 직급명 (길수록 먼저 매핑됨)
    "대표이사": "대표이사",
    "수석연구원": "수석연구원",
    "책임연구원": "책임연구원",
    "선임연구원": "선임연구원",
    "최고기술책임자": "최고기술책임자",
    # 약어·축약형
    "대표": "대표이사",
    "CEO": "대표이사",
    "CTO": "최고기술책임자",
    "연구원": "연구원",
    "수석": "수석연구원",
    "책임": "책임연구원",
    "선임": "선임연구원",
    "사원": "사원",
    "팀원": "사원",
    "인턴": "인턴",
}


def norm_position(
    val,
    *,
    position_map: dict | None = None,
    **kw,
) -> str | None:
    """직책/직급을 표준 명칭으로 정규화.

    position_map: patterns.yaml > position_map 섹션 또는 transform_kwargs에 주입.
    매핑 없으면 원본 반환.
    """
    if val is None:
        return None
    s = str(val).strip()
    if not s:
        return None
    mapping = position_map if position_map is not None else _DEFAULT_POSITION_MAP
    if s in mapping:
        return mapping[s]
    # 부분 일치 — 긴 키를 먼저 확인해 더 구체적인 매핑 우선
    for key, norm in sorted(mapping.items(), key=lambda x: -len(x[0])):
        if key in s:
            return norm
    return s


# ---------------------------------------------------------------------------
# date_year / date_month / date_day  —  날짜 분리
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
# norm_date_parts  —  날짜 정규화 + 연/월/일 파생열 자동 생성
# ---------------------------------------------------------------------------

def norm_date_parts(val, **kw) -> dict | None:
    """날짜를 정규화하고 연·월·일 파생열 dict를 반환.

    writer.py에서 dict를 인식하여 자동으로 4개 열 생성:
      output_col        → YYYY-MM-DD
      output_col_년     → 연도(int)
      output_col_월     → 월(int)
      output_col_일     → 일(int)
    파싱 불가 → None
    """
    normalized = normalize_date(val)
    if not normalized:
        return None
    y, m, d = normalized.split("-")
    return {"": normalized, "_년": int(y), "_월": int(m), "_일": int(d)}


# ---------------------------------------------------------------------------
# date_year / date_month / date_day  —  날짜 분리
# ---------------------------------------------------------------------------

def date_year(val, *, year_val: Any = None, **kw) -> int | None:
    """날짜에서 연도(int)를 추출.

    year_val이 지정된 경우(year_col 설정 시) 해당 값을 우선 사용.
    예: '2026-05-15' → 2026
    """
    if year_val is not None:
        try:
            return int(str(year_val).strip())
        except (ValueError, TypeError):
            pass
    normalized = normalize_date(val)
    if normalized:
        return int(normalized[:4])
    return None


def date_month(val, **kw) -> int | None:
    """날짜에서 월(int, 1~12)을 추출.

    예: '2026-05-15' → 5
    """
    normalized = normalize_date(val)
    if normalized:
        return int(normalized[5:7])
    return None


def date_day(val, **kw) -> int | None:
    """날짜에서 일(int, 1~31)을 추출.

    예: '2026-05-15' → 15
    """
    normalized = normalize_date(val)
    if normalized:
        return int(normalized[8:10])
    return None


# ---------------------------------------------------------------------------
# group_sum  —  복수 컬럼 합산 (source_cols 지정 시)
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
# mask_rrn  —  주민등록번호 뒷자리 마스킹
# ---------------------------------------------------------------------------

def mask_rrn(val, **kw) -> str | None:
    """주민등록번호 뒷자리 마스킹.

    '123456-1234567' → '123456-*******'
    '1234561234567'  → '123456-*******'
    """
    if not val:
        return None
    s = re.sub(r"[-\s]", "", str(val).strip())
    if len(s) == 13 and s.isdigit():
        return f"{s[:6]}-*******"
    m = re.match(r"(\d{6})[-\s]?(\d{7})", str(val).strip())
    if m:
        return f"{m.group(1)}-*******"
    return str(val)


# ---------------------------------------------------------------------------
# to_binary  —  키워드 포함 여부 → 1/0
# ---------------------------------------------------------------------------

def to_binary(val, *, flag_keyword: str | None = None, **kw) -> int:
    """flag_keyword가 val에 포함되면 1, 아니면 0. (대소문자/공백 무시하고 유연하게 검색)

    flag_keyword: Config 시트의 flag_keyword 필드에 입력한 키워드.
    """
    if not flag_keyword or val is None:
        return 0
    # 쉼표나 공백으로 키워드 분리하여 스캔
    keywords = [k.strip() for k in flag_keyword.replace(",", " ").split() if k.strip()]
    if not keywords:
        return 0
    val_clean = str(val).lower().replace(" ", "")
    for kw_item in keywords:
        kw_clean = kw_item.lower().replace(" ", "")
        if kw_clean in val_clean:
            return 1
    return 0


# ---------------------------------------------------------------------------
# split_binary — 복수 선택형 항목 다중 이진 플래그 열 분리
# ---------------------------------------------------------------------------

def split_binary(val, *, flag_keyword: str | None = None, **kw) -> dict[str, Any]:
    """복수 선택형 텍스트를 각 키워드별 이진 플래그 및 원본 텍스트 딕셔너리로 분리.
    
    예: val="AI모델, 데이터", flag_keyword="AI모델, 데이터, 추론"
    -> { "": "AI모델, 데이터", "_AI모델": 1, "_데이터": 1, "_추론": 0 }
    """
    s = str(val).strip() if val is not None else ""
    res: dict[str, Any] = {"": s if s else None}
    
    if not flag_keyword:
        return res
        
    kws = [k.strip() for k in flag_keyword.split(",") if k.strip()]
    for kw_item in kws:
        res[f"_{kw_item}"] = 1 if kw_item in s else 0
        
    return res


# ---------------------------------------------------------------------------
# to_pct  —  퍼센트 문자열 → float
# ---------------------------------------------------------------------------

def to_pct(val, **kw) -> float | None:
    """퍼센트 문자열을 float으로 변환.

    '92.77%' → 92.77  /  copy로 두면 '%' 문자열 그대로 출력.
    """
    if val is None:
        return None
    s = str(val).strip().rstrip("%")
    try:
        return float(s)
    except ValueError:
        return None


# ---------------------------------------------------------------------------
# group_sum  —  복수 컬럼 합산
# ---------------------------------------------------------------------------

def group_sum(val, **kw) -> int | float | None:
    """source_cols로 지정된 여러 컬럼 값을 합산.

    val: source_cols에 대응하는 값 목록(list) 또는 단일 값.
    숫자가 아닌 값은 0으로 처리.
    """
    values = val if isinstance(val, list) else [val]
    total: float = 0.0
    for v in values:
        if isinstance(v, (int, float)):
            total += v
        elif v is not None:
            s = str(v).strip().replace(",", "")
            try:
                total += float(s)
            except ValueError:
                pass
    return int(total) if total == int(total) else total


def validate_range(val, *, min_val=None, max_val=None, **kw):
    """수치 데이터의 범위를 검증. 범위를 벗어날 경우 None 반환"""
    if val is None or val == "":
        return None
    num = normalize_number(val)
    if num is None:
        return None
    if min_val is not None and num < min_val:
        return None
    if max_val is not None and num > max_val:
        return None
    return val


def validate_in(val, *, allowed_values=None, **kw):
    """허용된 항목 목록에 존재하는지 검증"""
    if val is None or val == "":
        return None
    if not allowed_values:
        return val
    s = str(val).strip()
    if isinstance(allowed_values, str):
        allowed = [x.strip() for x in allowed_values.split(",")]
    else:
        allowed = [str(x).strip() for x in allowed_values]
    return val if s in allowed else None


def validate_regex(val, *, pattern=None, **kw):
    """정규표현식 패턴 매칭 검증"""
    if val is None or val == "":
        return None
    if not pattern:
        return val
    s = str(val).strip()
    import re
    return val if re.search(pattern, s) else None


# ---------------------------------------------------------------------------
# 레지스트리 등록
# ---------------------------------------------------------------------------

_TRANSFORMS: dict = {
    # ── 클렌징 (새 이름 norm_*) ──────────────────────────────────────────────
    "norm_text":         normalize_text,
    "norm_num":          normalize_number,
    "norm_date":         normalize_date,
    "norm_phone":        normalize_phone,
    "norm_company":      normalize_company,
    "norm_position":     norm_position,
    # ── 날짜 통합 (파생열 포함) ───────────────────────────────────────────────
    "norm_date_parts":   norm_date_parts,
    # ── 날짜 분리 (개별) ──────────────────────────────────────────────────────
    "date_year":         date_year,
    "date_month":        date_month,
    "date_day":          date_day,
    # ── 검증 (새 이름 val_*) ─────────────────────────────────────────────────
    "val_email":         validate_email,
    "val_url":           validate_url,
    "val_brn":           validate_brn,
    "val_range":         validate_range,
    "val_in":            validate_in,
    "val_regex":         validate_regex,
    # ── 마스킹 (새 이름 mask_*) ──────────────────────────────────────────────
    "mask_name":         name_blind,
    "mask_rrn":          mask_rrn,
    # ── 이진/수치 변환 ────────────────────────────────────────────────────────
    "to_binary":         to_binary,
    "split_binary":      split_binary,
    "to_pct":            to_pct,
    # ── 집계 ─────────────────────────────────────────────────────────────────
    "group_sum":         group_sum,
    # ── URL 분리 (드롭다운 제외, 코드 유지) ──────────────────────────────────
    "split_url_domain":  split_url_domain,
    "split_url_path":    split_url_path,
    # ── 하위 호환 alias (기존 이름 → 새 함수) ────────────────────────────────
    "normalize_text":    normalize_text,
    "normalize_number":  normalize_number,
    "to_numeric":        normalize_number,
    "normalize_date":    normalize_date,
    "normalize_phone":   normalize_phone,
    "normalize_company": normalize_company,
    "normalize_title":   norm_position,
    "validate_email":    validate_email,
    "validate_url":      validate_url,
    "validate_brn":      validate_brn,
    "name_blind":        name_blind,
    "o_binary":          to_binary,
}
