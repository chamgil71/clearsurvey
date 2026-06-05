"""
Transform 단위 테스트

Set 1 — GPU 설문 (10 cases)
Set 2 — 예실대비표 Budget (4 cases)

실행: pytest tests/test_transforms.py -v
"""
from __future__ import annotations

import pytest

# ── Set 1: GPU 설문 transforms ──────────────────────────────────────────────

from transforms.domain.cleansing import (
    validate_email,
    validate_url,
    validate_range,
    validate_in,
    validate_regex,
    split_url_domain,
    split_url_path,
    norm_position as normalize_title,  # alias: normalize_title → norm_position
    normalize_number,
    group_sum,
    normalize_text,
    normalize_phone,
    normalize_company,
)
from transforms.domain.gpu_survey import (
    parse_gpu_usage,
    extract_n_jang,
    clean_ac,
)
from transforms.common.address import AddressParser

# ── Set 2: 예산 transforms ───────────────────────────────────────────────────

from transforms.domain.budget import (
    budget_level,
    map_category,
    map_division,
    pct_format,
)


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 01: validate_email
# ─────────────────────────────────────────────────────────────────────────────

class TestCase01_ValidateEmail:
    """이메일 형식 검증."""

    def test_valid_email_returned(self):
        assert validate_email("User@Example.COM") == "user@example.com"

    def test_valid_with_subdomain(self):
        assert validate_email("a.b+tag@sub.domain.co.kr") == "a.b+tag@sub.domain.co.kr"

    def test_invalid_no_at(self):
        assert validate_email("noemail.com") is None

    def test_invalid_no_domain(self):
        assert validate_email("user@") is None

    def test_none_returns_none(self):
        assert validate_email(None) is None

    def test_empty_string(self):
        assert validate_email("") is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 02: validate_url
# ─────────────────────────────────────────────────────────────────────────────

class TestCase02_ValidateUrl:
    """URL 형식 검증."""

    def test_https_url(self):
        assert validate_url("https://www.example.com/path") == "https://www.example.com/path"

    def test_http_url(self):
        assert validate_url("http://example.ai/") == "http://example.ai/"

    def test_no_scheme_gets_https_prefix(self):
        result = validate_url("www.example.com")
        assert result is not None and result.startswith("https://")

    def test_invalid_returns_none(self):
        assert validate_url("not a url at all!") is None

    def test_none(self):
        assert validate_url(None) is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 03: split_url_domain / split_url_path
# ─────────────────────────────────────────────────────────────────────────────

class TestCase03_SplitUrl:
    """URL 도메인/경로 분리."""

    def test_domain_extraction(self):
        assert split_url_domain("https://aa.bb.com/data/index") == "https://aa.bb.com"

    def test_path_extraction(self):
        assert split_url_path("https://aa.bb.com/data/index") == "/data/index"

    def test_no_path(self):
        assert split_url_path("https://example.com") is None

    def test_query_in_path(self):
        path = split_url_path("https://example.com/search?q=1")
        assert path is not None and "search" in path

    def test_none_input(self):
        assert split_url_domain(None) is None
        assert split_url_path(None) is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 04: 주소 시도/시군구 분리 (AddressParser)
# ─────────────────────────────────────────────────────────────────────────────

class TestCase04_AddressSplit:
    """주소 시도·시군구 분리."""

    @pytest.fixture
    def parser(self):
        # minimal config — real patterns loaded from config/patterns.yaml in production
        return AddressParser({
            "sido_patterns": [
                ["서울", ["서울", "서울특별시"]],
                ["경기", ["경기", "경기도"]],
                ["대전", ["대전", "대전광역시"]],
            ],
            "seoul_gu": ["강남구", "서초구", "송파구", "마포구"],
        })

    def test_seoul_full(self, parser):
        sido, sigungu, detail = parser.parse("서울특별시 강남구 테헤란로 123")
        assert sido == "서울"
        assert sigungu == "강남구"

    def test_gyeonggi(self, parser):
        sido, sigungu, detail = parser.parse("경기도 수원시 팔달구 어딘가")
        assert sido == "경기"

    def test_empty(self, parser):
        sido, sigungu, detail = parser.parse(None)
        assert sido is None or sido == ""


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 05: normalize_title  —  직급 정규화
# ─────────────────────────────────────────────────────────────────────────────

class TestCase05_NormalizeTitle:
    """직급 정규화 — 표준화 또는 원본 유지."""

    def test_exact_match(self):
        assert normalize_title("대표") == "대표이사"

    def test_substring_match(self):
        result = normalize_title("선임연구원(AI)")
        assert result == "선임연구원"

    def test_custom_map(self):
        result = normalize_title("팀장", position_map={"팀장": "부장급 팀장"})
        assert result == "부장급 팀장"

    def test_unknown_title_passthrough(self):
        assert normalize_title("특수직책") == "특수직책"

    def test_none(self):
        assert normalize_title(None) is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 06: group_sum  —  복수 컬럼 합산
# ─────────────────────────────────────────────────────────────────────────────

class TestCase06_GroupSum:
    """H100+H200+B100+B200 합산 (source_cols → list 전달)."""

    def test_sum_integers(self):
        assert group_sum([4, 4, 2, 2]) == 12

    def test_sum_with_none(self):
        assert group_sum([4, None, 0, 2]) == 6

    def test_sum_with_string_numbers(self):
        assert group_sum(["8", "4"]) == 12

    def test_single_value(self):
        assert group_sum(8) == 8

    def test_all_zero(self):
        assert group_sum([0, 0, 0, 0]) == 0


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 07: normalize_number  —  숫자/백분율/범위 정규화
# ─────────────────────────────────────────────────────────────────────────────

class TestCase07_NormalizeNumber:
    """숫자 정규화 — 한국어 단위, 범위, %."""

    def test_korean_units(self):
        assert normalize_number("1억2천만") == 120_000_000

    def test_range_max(self):
        # 범위는 최댓값 반환
        assert normalize_number("100~200") == 200

    def test_pct(self):
        assert normalize_number("80%") == 80

    def test_comma(self):
        assert normalize_number("1,234,567") == 1_234_567

    def test_none(self):
        assert normalize_number(None) is None

    def test_five_hundred_ten_thousand(self):
        assert normalize_number("5백만") == 5_000_000


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 08: clean_ac  —  이용량증가율 정규화
# ─────────────────────────────────────────────────────────────────────────────

class TestCase08_CleanAc:
    """이용량증가율 문자열 → 퍼센트 표기."""

    def test_single(self):
        assert clean_ac("80% 이내") == "80%"

    def test_no_change(self):
        assert clean_ac("변동 없음") == "0%"

    def test_extra_text(self):
        assert clean_ac("기타: 200%이상") == "200%"

    def test_none(self):
        assert clean_ac(None) == ""

    def test_multi_value(self):
        result = clean_ac("40%이내, 60%이내")
        assert "40%" in result and "60%" in result


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 09: GPU 사용구분 / 임차구분
# ─────────────────────────────────────────────────────────────────────────────

class TestCase09_GpuUsage:
    """GPU 사용구분 및 임차구분 파싱."""

    def test_unused(self):
        usage, detail = parse_gpu_usage("미사용(현재 GPU를 사용하지 않음)")
        assert usage == "미사용"
        assert detail == ""

    def test_both(self):
        usage, detail = parse_gpu_usage("사용 중 - 자체서버 + 외부 임차 병행")
        assert usage == "사용중"
        assert detail == "자체서버+외부임차"

    def test_cloud_only(self):
        usage, detail = parse_gpu_usage("사용중 - 외부 임차(클라우드, 센터 등)")
        assert usage == "사용중"
        assert detail == "외부임차"

    def test_own_server(self):
        usage, detail = parse_gpu_usage("사용중 - 자체 서버 보유")
        assert usage == "사용중"
        assert detail == "자체서버"


# ─────────────────────────────────────────────────────────────────────────────
# Set 1 — Case 10: extract_n_jang  —  H100 환산 장수
# ─────────────────────────────────────────────────────────────────────────────

class TestCase10_ExtractNJang:
    """H100 환산 장수 추출 — 다양한 텍스트 포맷."""

    def test_digit_jang(self):
        assert extract_n_jang("4장 규모") == 4

    def test_float(self):
        assert extract_n_jang("0.5") == 0.5

    def test_plain_int(self):
        assert extract_n_jang("16") == 16

    def test_zero_text(self):
        assert extract_n_jang("0장 규모") == 0

    def test_none(self):
        assert extract_n_jang(None) == 0

    def test_no_gpu(self):
        # "없음" 계열은 0 반환
        assert extract_n_jang("없음") == 0


# ─────────────────────────────────────────────────────────────────────────────
# Set 2 — Case 11: budget_level  —  코드에서 레벨 감지
# ─────────────────────────────────────────────────────────────────────────────

class TestCase11_BudgetLevel:
    """A컬럼 코드 형식으로 레벨(3~7) 감지."""

    def test_level3(self):
        assert budget_level("26-01-Q-11") == 3

    def test_level4(self):
        assert budget_level("200-00") == 4

    def test_level5(self):
        assert budget_level("210-00") == 5

    def test_level6(self):
        assert budget_level("210-01") == 6

    def test_level7(self):
        assert budget_level("001") == 7

    def test_none(self):
        assert budget_level(None) is None

    def test_empty(self):
        assert budget_level("") is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 2 — Case 12: map_category  —  코드 → 예산 카테고리
# ─────────────────────────────────────────────────────────────────────────────

class TestCase12_MapCategory:
    """예산코드(레벨4) → 카테고리 문자열."""

    def test_human_cost(self):
        assert map_category("100-00") == "인건비"

    def test_goods(self):
        assert map_category("200-00") == "물건비"

    def test_transfer(self):
        assert map_category("300-00") == "이전지출"

    def test_custom_map(self):
        result = map_category("999-00", category_map={"999-00": "특수항목"})
        assert result == "특수항목"

    def test_unknown_returns_none(self):
        assert map_category("999-00") is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 2 — Case 13: map_division  —  수행부서 → 본부명
# ─────────────────────────────────────────────────────────────────────────────

class TestCase13_MapDivision:
    """수행부서 → 본부명 매핑."""

    def test_known_dept(self):
        assert map_division("AI전략팀") == "AI본부"

    def test_unknown_returns_original(self):
        assert map_division("알 수 없는 팀") == "알 수 없는 팀"

    def test_custom_map(self):
        result = map_division("신규팀", division_map={"신규팀": "미래본부"})
        assert result == "미래본부"

    def test_none(self):
        assert map_division(None) is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 2 — Case 14: pct_format  —  집행율 % → float
# ─────────────────────────────────────────────────────────────────────────────

class TestCase14_PctFormat:
    """집행율 문자열(예: '92.77%') → float."""

    def test_normal(self):
        assert pct_format("92.77%") == pytest.approx(92.77)

    def test_zero(self):
        assert pct_format("0%") == 0.0

    def test_no_symbol(self):
        assert pct_format("45.5") == pytest.approx(45.5)

    def test_none(self):
        assert pct_format(None) is None

    def test_invalid(self):
        assert pct_format("N/A") is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 3 — Case 15: validate_range  —  수치 범위 검증
# ─────────────────────────────────────────────────────────────────────────────

class TestCase15_ValidateRange:
    """수치 데이터 범위 검증 — min/max 초과 시 None."""

    def test_within_range(self):
        assert validate_range(50, min_val=0, max_val=100) == 50

    def test_below_min_returns_none(self):
        assert validate_range(-1, min_val=0) is None

    def test_above_max_returns_none(self):
        assert validate_range(101, max_val=100) is None

    def test_exact_min_boundary(self):
        assert validate_range(0, min_val=0, max_val=100) == 0

    def test_exact_max_boundary(self):
        assert validate_range(100, min_val=0, max_val=100) == 100

    def test_no_bounds_passes_through(self):
        assert validate_range(9999) == 9999

    def test_none_returns_none(self):
        assert validate_range(None) is None

    def test_empty_string_returns_none(self):
        assert validate_range("") is None

    def test_string_number_within_range(self):
        assert validate_range("50", min_val=0, max_val=100) == "50"

    def test_non_numeric_returns_none(self):
        assert validate_range("abc", min_val=0, max_val=100) is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 3 — Case 16: validate_in  —  허용 목록 검증
# ─────────────────────────────────────────────────────────────────────────────

class TestCase16_ValidateIn:
    """허용 항목 목록 검증 — 없으면 None."""

    def test_value_in_list(self):
        assert validate_in("A", allowed_values=["A", "B", "C"]) == "A"

    def test_value_not_in_list_returns_none(self):
        assert validate_in("D", allowed_values=["A", "B", "C"]) is None

    def test_comma_string_allowed_values(self):
        assert validate_in("B", allowed_values="A, B, C") == "B"

    def test_comma_string_not_in_returns_none(self):
        assert validate_in("D", allowed_values="A, B, C") is None

    def test_no_allowed_values_passes_through(self):
        assert validate_in("anything") == "anything"

    def test_none_returns_none(self):
        assert validate_in(None, allowed_values=["A", "B"]) is None

    def test_empty_string_returns_none(self):
        assert validate_in("", allowed_values=["A", "B"]) is None

    def test_strips_whitespace_from_value(self):
        # validate_in strips the value before comparison, so " A " matches "A"
        assert validate_in(" A ", allowed_values=["A", "B"]) == " A "

    def test_korean_values(self):
        assert validate_in("남성", allowed_values=["남성", "여성"]) == "남성"

    def test_korean_value_not_in_list(self):
        assert validate_in("기타", allowed_values=["남성", "여성"]) is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 3 — Case 17: validate_regex  —  정규식 패턴 검증
# ─────────────────────────────────────────────────────────────────────────────

class TestCase17_ValidateRegex:
    """정규표현식 패턴 매칭 검증 — 불일치 시 None."""

    def test_matching_pattern(self):
        assert validate_regex("010-1234-5678", pattern=r"^\d{3}-\d{4}-\d{4}$") == "010-1234-5678"

    def test_non_matching_returns_none(self):
        assert validate_regex("01012345678", pattern=r"^\d{3}-\d{4}-\d{4}$") is None

    def test_no_pattern_passes_through(self):
        assert validate_regex("anything") == "anything"

    def test_none_returns_none(self):
        assert validate_regex(None, pattern=r"\d+") is None

    def test_empty_string_returns_none(self):
        assert validate_regex("", pattern=r"\d+") is None

    def test_partial_match_succeeds(self):
        assert validate_regex("abc123def", pattern=r"\d+") == "abc123def"

    def test_korean_pattern(self):
        assert validate_regex("홍길동", pattern=r"^[가-힣]+$") == "홍길동"

    def test_korean_pattern_fail(self):
        assert validate_regex("Hong", pattern=r"^[가-힣]+$") is None

    def test_email_pattern(self):
        assert validate_regex("user@example.com", pattern=r"^[\w.+-]+@[\w-]+\.[a-z]{2,}$") == "user@example.com"
