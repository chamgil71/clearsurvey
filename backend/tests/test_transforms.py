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
    normalize_date,
    norm_date_parts,
    name_blind,
)
from transforms.domain.gpu_survey import (
    parse_gpu_usage,
    extract_n_jang,
    clean_ac,
)
from transforms.common.address import AddressParser, build_addr_parts_dict

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


# ─────────────────────────────────────────────────────────────────────────────
# Set 4 — Case 18: date_year & split_binary
# ─────────────────────────────────────────────────────────────────────────────

class TestCase18_NewTransforms:
    """date_year 및 split_binary 신규 정제 규칙 검증."""

    def test_date_year_extracted(self):
        from transforms.domain.cleansing import date_year
        assert date_year("2026-05-15") == 2026
        assert date_year("2026년 06월") == 2026
        assert date_year(None) is None

    def test_split_binary_extracted(self):
        from transforms.domain.cleansing import split_binary
        res = split_binary("AI모델, 데이터", flag_keyword="AI모델, 데이터, 추론")
        assert res == {
            "": "AI모델, 데이터",
            "_AI모델": 1,
            "_데이터": 1,
            "_추론": 0
        }


# ─────────────────────────────────────────────────────────────────────────────
# Set 5 — Case 19: name_blind (mask_name) — 개인정보 마스킹
# ─────────────────────────────────────────────────────────────────────────────

class TestCase19_NameBlind:
    """이름 중간 글자 마스킹(name_blind / mask_name 별칭).

    docs/plan/transform_test_plan.md 우선순위 1위 — 회귀 시 개인정보가
    그대로 노출될 수 있어 다른 정제 규칙보다 파급력이 큰 함수.
    """

    def test_three_chars(self):
        assert name_blind("홍길동") == "홍*동"

    def test_four_chars_masks_all_middle(self):
        assert name_blind("신도홍석") == "신**석"

    def test_two_chars(self):
        assert name_blind("홍길") == "홍*"

    def test_single_char_unmaskable(self):
        assert name_blind("홍") == "홍"

    def test_none_input(self):
        assert name_blind(None) is None

    def test_empty_string(self):
        assert name_blind("") is None

    def test_strips_surrounding_whitespace(self):
        assert name_blind("  홍길동  ") == "홍*동"


# ─────────────────────────────────────────────────────────────────────────────
# Set 5 — Case 20: normalize_company — 회사명 정규화
# ─────────────────────────────────────────────────────────────────────────────

class TestCase20_NormalizeCompany:
    """회사명 정규화 — 기본 폴백 패턴(company_patterns 미지정) 경로."""

    def test_prefix_form_removed(self):
        assert normalize_company("주식회사 카카오") == "카카오"

    def test_suffix_form_removed(self):
        assert normalize_company("카카오 주식회사") == "카카오"

    def test_bracket_form_removed(self):
        assert normalize_company("(주)카카오") == "카카오"

    def test_symbol_form_removed(self):
        assert normalize_company("㈜카카오") == "카카오"

    def test_bracket_form_jae(self):
        # mumhwa 실데이터로 이미 수동 확인됨
        assert normalize_company("(재)서산문화재단") == "서산문화재단"

    def test_prefix_sadan_beopin(self):
        # mumhwa 실데이터
        assert normalize_company("사단법인 장수한우랑사과랑축제추진위원회") == "장수한우랑사과랑축제추진위원회"

    def test_none_input(self):
        assert normalize_company(None) is None

    def test_empty_string(self):
        assert normalize_company("") is None

    def test_no_corp_form_unchanged(self):
        assert normalize_company("카카오") == "카카오"

    def test_keep_corp_type_prepends_abbrev(self):
        # _DEFAULT_ABBREVS["주식회사"] == "(주)" — f"{abbr} {item}" 형태로 공백 포함 조합됨
        assert normalize_company("주식회사 카카오", keep_corp_type=True) == "(주) 카카오"


# ─────────────────────────────────────────────────────────────────────────────
# Set 5 — Case 21: normalize_phone — 전화번호 정규화
# ─────────────────────────────────────────────────────────────────────────────

class TestCase21_NormalizePhone:
    """전화번호 정규화 — 지역번호 자리수(2/3자리) 분기 및 국제번호 프리픽스 제거."""

    def test_seoul_with_hyphens(self):
        assert normalize_phone("02-1234-5678") == "02-1234-5678"

    def test_seoul_without_hyphens_7digit_local(self):
        assert normalize_phone("021234567") == "02-123-4567"

    def test_mobile_3digit_prefix(self):
        assert normalize_phone("010-1234-5678") == "010-1234-5678"

    def test_regional_3digit_prefix(self):
        # mumhwa 실데이터
        assert normalize_phone("063-430-2392") == "063-430-2392"

    def test_intl_prefix_stripped(self):
        assert normalize_phone("+82-10-1234-5678") == "010-1234-5678"

    def test_none_input(self):
        assert normalize_phone(None) is None

    def test_empty_string(self):
        assert normalize_phone("") is None

    def test_no_digits(self):
        assert normalize_phone("abc") is None

    def test_unmatched_digit_length(self):
        assert normalize_phone("1234") is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 5 — Case 22: normalize_date — 날짜 정규화
# ─────────────────────────────────────────────────────────────────────────────

class TestCase22_NormalizeDate:
    """날짜 정규화 — _DATE_PATTERNS 5종 각각 최소 1케이스."""

    def test_iso_format(self):
        assert normalize_date("2026-05-15") == "2026-05-15"

    def test_dot_separator_single_digit(self):
        assert normalize_date("2026.5.15") == "2026-05-15"

    def test_slash_separator(self):
        assert normalize_date("2026/05/15") == "2026-05-15"

    def test_korean_full(self):
        assert normalize_date("2026년 5월 15일") == "2026-05-15"

    def test_korean_year_month_only_defaults_to_first_day(self):
        assert normalize_date("2026년 5월") == "2026-05-01"

    def test_two_digit_year_expands_to_2000s(self):
        assert normalize_date("26.5.15") == "2026-05-15"

    def test_eight_digit_numeric(self):
        assert normalize_date("20260515") == "2026-05-15"

    def test_datetime_object(self):
        from datetime import datetime as _dt
        assert normalize_date(_dt(2026, 5, 15)) == "2026-05-15"

    def test_none_input(self):
        assert normalize_date(None) is None

    def test_unparseable_string(self):
        assert normalize_date("의미없는 문자열") is None

    def test_invalid_calendar_date(self):
        assert normalize_date("2026-13-45") is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 5 — Case 23: norm_date_parts — 날짜 + 연/월/일 파생열
# ─────────────────────────────────────────────────────────────────────────────

class TestCase23_NormDateParts:
    """norm_date_parts — normalize_date를 감싸는 딕셔너리 wrapper의 shape 검증."""

    def test_builds_year_month_day_dict(self):
        assert norm_date_parts("2026-05-15") == {
            "": "2026-05-15",
            "_년": 2026,
            "_월": 5,
            "_일": 15,
        }

    def test_none_input(self):
        assert norm_date_parts(None) is None

    def test_unparseable_string_returns_none(self):
        assert norm_date_parts("파싱불가") is None


# ─────────────────────────────────────────────────────────────────────────────
# Set 5 — Case 24: build_addr_parts_dict — addr_split 파생열 조립 (통합 지점)
# ─────────────────────────────────────────────────────────────────────────────

class TestCase24_AddrSplitPartsDict:
    """`engine/pipeline.py`의 addr_split 클로저와 `transforms/common/address.py`의
    폴백 addr_split() 함수가 공통으로 사용하는 dict 조립 순수 함수.

    docs/plan/transform_test_plan.md 2.6절 — 클로저 안에 갇혀 직접 테스트가 어려웠던
    지점을 순수 함수로 분리(A안)한 뒤의 단위 테스트.
    """

    def test_builds_dict_from_parsed_parts(self):
        result = build_addr_parts_dict(
            "경상북도 구미시 원평동 124-23", "경북", "구미시", "원평동 124-23"
        )
        assert result == {
            "": "경상북도 구미시 원평동 124-23",
            "_시도": "경북",
            "_시군구": "구미시",
            "_상세": "원평동 124-23",
        }

    def test_empty_parts_become_none(self):
        result = build_addr_parts_dict("주소불명", "", "", "")
        assert result == {"": "주소불명", "_시도": None, "_시군구": None, "_상세": None}

    def test_none_val_returns_none(self):
        assert build_addr_parts_dict(None, "", "", "") is None

    def test_integration_with_address_parser(self):
        """실제 AddressParser.parse() 출력과 조합했을 때도 정상 동작하는지 확인
        (파이프라인 클로저가 실제로 수행하는 것과 동일한 조합)."""
        parser = AddressParser({
            "sido_patterns": [
                ["서울", ["서울", "서울특별시"]],
                ["경북", ["경북", "경상북도"]],
            ],
            "seoul_gu": ["강동구"],
        })
        sido, sigungu, detail = parser.parse("서울특별시 강동구 올림픽로 875 (암사동)")
        result = build_addr_parts_dict("서울특별시 강동구 올림픽로 875 (암사동)", sido, sigungu, detail)
        assert result["_시도"] == "서울"
        assert result["_시군구"] == "강동구"
