"""
Tests for engine/exporter.py 의 build_data_json() 분리 (dashboard_edit_plan §4.2 · 1단계)

`build_data_json()` 은 rows 만으로 대시보드 JSON 을 만든다 — **xlsx 를 열지 않는다.**
대시보드 셀 편집이 저장될 때 xlsx 전체를 다시 쓰지 않고 data.json 만 갱신하기 위한 전제다.

핵심 검증 2가지:
  1. 분리가 순수 리팩터링인가 — export_to_json 이 xlsx 를 거치든 build_data_json 을
     직접 부르든 **동일한 산출물**이어야 한다.
  2. 왕복(round-trip) 성질 — data.json 의 rows 를 다시 build_data_json 에 넣으면
     같은 rows/aggregates 가 나와야 한다. 편집 경로(§5.1 ⑤⑥)가 이것에 의존한다.

실행: pytest tests/test_build_data_json.py -v
"""
from __future__ import annotations

import datetime
import json
from pathlib import Path

import openpyxl
import pytest

from engine.config import SurveyConfig
from engine.exporter import (
    column_types_of,
    _headers_from_rows,
    _read_cleaned_sheet,
    build_data_json,
    export_to_json,
    write_data_json,
)


@pytest.fixture
def minimal_cfg() -> SurveyConfig:
    return SurveyConfig(
        project="test_proj",
        sheets={"cleaned": "Cleaned", "summary": "Summary"},
        columns=[],
        paths={"output_dir": "output", "output_file": "result.xlsx"},
    )


@pytest.fixture
def tricky_xlsx(tmp_path: Path) -> Path:
    """까다로운 값을 일부러 섞은 Cleaned 시트.

    숫자문자열("3000000")·앞자리0("0012")·NaN·음수·실수·날짜·유니코드·빈 행 —
    clean_value 와 _detect_type 이 갈리는 지점들이다.

    `부서` 는 8행 중 고유값 3개(ratio 0.375 ≤ 0.5)라 category 로 감지된다 — 실제 설문
    데이터처럼 값이 반복돼야 category 가 되고, 그래야 aggregates 에 들어간다.
    """
    path = tmp_path / "result.xlsx"
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Cleaned"
    ws.append(["섹션헤더"])                                    # row 1: 스킵됨
    ws.append(["이름", "부서", "점수", "코드", "비율", "연도", "메모", "날짜", "O_A"])  # row 2: 헤더
    data = [
        ["홍길동", "개발팀", 90, "3000000", 0.5, 2024, "자유 텍스트 A", datetime.datetime(2026, 7, 17), 1],
        ["김철수", "영업팀", 85, "6520000", 1.25, 2025, "자유 텍스트 B", datetime.datetime(2026, 7, 18), 0],
        ["이영희", "개발팀", 92, "3000000", float("nan"), 2024, "자유 텍스트 C", datetime.datetime(2026, 7, 19), 1],
        ["박민준", "영업팀", -78, "0012", 2.0, 2026, "자유 텍스트 D", datetime.datetime(2026, 7, 20), 0],
        ["최지훈", "기획팀", 0, "6520000", -1.5, 2025, "자유 텍스트 E", datetime.datetime(2026, 7, 21), 1],
        ["정수빈", "개발팀", 71, "3000000", 0.25, 2024, "자유 텍스트 F", datetime.datetime(2026, 7, 22), 0],
        ["강民지", "영업팀", 63, "6520000", 3.5, 2026, "자유 텍스트 G", datetime.datetime(2026, 7, 23), 1],
        ["윤서준", "개발팀", 88, "0012", -0.75, 2025, "자유 텍스트 H", datetime.datetime(2026, 7, 24), 0],
        ["", "", None, None, None, None, "", None, None],      # 빈 행 → 스킵돼야 함
    ]
    for row in data:
        ws.append(row)
    wb.save(path)
    return path


def _strip_ts(d: dict) -> dict:
    """타임스탬프만 제외하고 비교 가능한 형태로."""
    d = json.loads(json.dumps(d, ensure_ascii=False, default=str))
    d["meta"]["generated_at"] = "<ts>"
    return d


# ─────────────────────────────────────────────────────────────────────────────
# _headers_from_rows — rows 에서 컬럼 순서 복원
# ─────────────────────────────────────────────────────────────────────────────

class TestHeadersFromRows:
    def test_empty_rows(self):
        assert _headers_from_rows([]) == []

    def test_preserves_insertion_order(self):
        rows = [{"b": 1, "a": 2, "c": 3}]
        assert _headers_from_rows(rows) == ["b", "a", "c"]

    def test_unions_keys_across_rows_keeping_first_seen_order(self):
        rows = [{"a": 1}, {"b": 2}, {"a": 3, "c": 4}]
        assert _headers_from_rows(rows) == ["a", "b", "c"]


# ─────────────────────────────────────────────────────────────────────────────
# 1. 분리가 순수 리팩터링인가
# ─────────────────────────────────────────────────────────────────────────────

class TestSplitIsPureRefactor:
    def test_export_to_json_equals_read_plus_build(self, tricky_xlsx, minimal_cfg):
        """export_to_json 은 _read_cleaned_sheet + build_data_json 의 합과 같아야 한다."""
        via_export = _strip_ts(export_to_json(tricky_xlsx, minimal_cfg))

        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        via_build = _strip_ts(
            build_data_json(rows, minimal_cfg, headers=headers, source_file=tricky_xlsx.name)
        )
        assert via_export == via_build

    def test_blank_row_skipped(self, tricky_xlsx, minimal_cfg):
        _, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        assert len(rows) == 8          # 빈 행 1개 제외

    def test_headers_optional_matches_explicit(self, tricky_xlsx, minimal_cfg):
        """headers 를 안 넘겨도(편집 경로) 넘긴 것과 동일해야 한다."""
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        with_h = _strip_ts(build_data_json(rows, minimal_cfg, headers=headers))
        without_h = _strip_ts(build_data_json(rows, minimal_cfg))
        assert with_h == without_h

    def test_build_data_json_does_not_touch_xlsx(self, minimal_cfg):
        """xlsx 없이도 동작해야 한다 — 지연 생성(§5.1 ⑤⑥)의 핵심."""
        rows = [
            {"부서": "개발팀", "점수": 90},
            {"부서": "영업팀", "점수": 85},
            {"부서": "개발팀", "점수": 70},
            {"부서": "영업팀", "점수": 60},
        ]
        result = build_data_json(rows, minimal_cfg)
        assert result["meta"]["total_rows"] == 4
        assert result["meta"]["source_file"] == ""     # xlsx 이름 없음이 정상
        assert result["aggregates"]["부서"] == {"개발팀": 2, "영업팀": 2}


# ─────────────────────────────────────────────────────────────────────────────
# 2. 왕복 성질 — 편집 경로가 의존하는 것
# ─────────────────────────────────────────────────────────────────────────────

class TestRoundTrip:
    def test_rows_stable_across_round_trip(self, tricky_xlsx, minimal_cfg):
        """data.json 의 rows 를 다시 넣어도 rows 값 자체는 그대로여야 한다.

        편집 저장(§5.1)은 data.json 을 읽어 rows 를 패치한 뒤 build_data_json 을 다시 부른다.
        이 성질이 깨지면 편집할 때마다 값이 조용히 변형된다. (clean_value 는 멱등이다)
        """
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)

        # 1회차 산출물의 rows 를 그대로 다시 투입 (편집 경로가 하는 일)
        second = build_data_json(first["rows"], minimal_cfg)

        assert second["rows"] == first["rows"]
        assert second["meta"]["total_rows"] == first["meta"]["total_rows"]

    def test_true_category_aggregates_stable_across_round_trip(self, tricky_xlsx, minimal_cfg):
        """값이 문자열인 진짜 category(`부서`)는 타입을 안 물려줘도 안정적이다.

        타입 뒤집힘의 범위가 '숫자로 읽히는 문자열 컬럼'에 한정됨을 고정한다.
        """
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)
        second = build_data_json(first["rows"], minimal_cfg)
        assert second["aggregates"]["부서"] == first["aggregates"]["부서"]

    def test_without_types_numeric_string_col_flips(self, tricky_xlsx, minimal_cfg):
        """타입을 안 물려주면 숫자로 읽히는 문자열 컬럼이 뒤집힌다 — **의도된 동작**.

        타입은 xlsx 원시값으로 감지되는데(텍스트 서식 코드 "3000000" → category),
        rows 에는 clean_value 를 거친 값이 실린다(→ 3000000). 그래서 rows 로 재감지하면
        numeric 이 된다. xlsx 경로는 늘 원시값을 주므로 이게 맞고, **편집 경로만**
        column_types 로 타입을 물려받아야 한다(아래 테스트).
        """
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)
        assert first["meta"]["columns"][3]["key"] == "코드"
        assert first["meta"]["columns"][3]["type"] == "category"
        assert "코드" in first["aggregates"]

        second = build_data_json(first["rows"], minimal_cfg)      # 타입 안 물려줌
        assert second["meta"]["columns"][3]["type"] == "numeric"  # 뒤집힘
        assert "코드" not in second["aggregates"]                 # 필터 드롭다운 소멸

    def test_with_types_round_trip_keeps_types_and_filters(self, tricky_xlsx, minimal_cfg):
        """★ 편집 경로의 보장 — 타입이 고정되고 필터(aggregates)가 살아남는다."""
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)

        second = build_data_json(
            first["rows"], minimal_cfg, column_types=column_types_of(first)
        )
        assert column_types_of(second) == column_types_of(first)   # 타입 고정
        assert set(second["aggregates"]) == set(first["aggregates"])  # 필터 컬럼 유지
        assert second["rows"] == first["rows"]                     # 값 무변형

    def test_leading_zero_normalizes_on_first_round_trip(self, tricky_xlsx, minimal_cfg):
        """앞자리 0 은 첫 왕복에서 "0012" → 12 로 **정규화**된다.

        이건 왕복이 만든 손상이 아니라 **원본 data.json 이 이미 자기모순**이었던 것이다:
        rows 에는 clean_value 를 거친 12 가 들어 있는데 aggregates 키는 원시값 "0012" 라,
        그 필터 항목을 골라도 매칭되는 행이 하나도 없다(matchesPattern 은 rows 값과 비교).
        왕복은 양쪽을 rows 기준으로 맞춰 그 모순을 없앤다.

        실데이터(mumhwa·gpu_4·bus·sangga·수의계약정보)에는 앞자리 0 컬럼이 없어
        실제로는 관측되지 않는다 — 이 fixture 가 일부러 만든 경계 사례다.
        """
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)

        # 원본의 자기모순: 집계 키는 "0012" 인데 rows 값은 12
        assert "0012" in first["aggregates"]["코드"]
        assert 12 in [r["코드"] for r in first["rows"]]

        second = build_data_json(first["rows"], minimal_cfg, column_types=column_types_of(first))
        assert "0012" not in second["aggregates"]["코드"]
        assert "12" in second["aggregates"]["코드"]      # rows 와 일치 = 필터가 실제로 동작

    def test_types_survive_repeated_edit_saves(self, tricky_xlsx, minimal_cfg):
        """저장을 반복해도 타입이 흘러내리지 않아야 한다 (편집은 여러 번 일어난다)."""
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        cur = build_data_json(rows, minimal_cfg, headers=headers)
        for _ in range(5):
            cur = build_data_json(cur["rows"], minimal_cfg, column_types=column_types_of(cur))
        assert cur["meta"]["columns"][3]["type"] == "category"
        assert "코드" in cur["aggregates"]

    def test_unique_values_refresh_even_with_pinned_types(self, tricky_xlsx, minimal_cfg):
        """타입은 고정하되 unique_values 는 현재 값으로 갱신돼야 한다.

        굳어 있으면 편집으로 생긴 새 값이 드로어의 Select 드롭다운에 안 나온다.
        """
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)
        types = column_types_of(first)

        edited = [dict(r) for r in first["rows"]]
        edited[0]["부서"] = "신설팀"                       # 없던 값
        second = build_data_json(edited, minimal_cfg, column_types=types)

        dept = next(c for c in second["meta"]["columns"] if c["key"] == "부서")
        assert dept["type"] == "category"                 # 타입은 그대로
        assert "신설팀" in dept["unique_values"]           # 새 값은 반영
        assert second["aggregates"]["부서"]["신설팀"] == 1

    def test_rows_are_clean_matches_full_cleaning(self, tricky_xlsx, minimal_cfg):
        """★ rows_are_clean=True 는 재정제와 결과가 같아야 한다 (생략의 안전 근거).

        clean_value 는 멱등이므로 이미 정제된 rows 를 다시 정제해도 값이 그대로다.
        그 한 번이 sangga 기준 60만 회·493ms 라 편집 경로에서는 건너뛴다.
        """
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)
        types = column_types_of(first)

        with_clean = _strip_ts(build_data_json(first["rows"], minimal_cfg, column_types=types))
        skipped = _strip_ts(
            build_data_json(first["rows"], minimal_cfg, column_types=types, rows_are_clean=True)
        )
        assert skipped == with_clean

    def test_rows_are_clean_does_not_affect_xlsx_path(self, tricky_xlsx, minimal_cfg):
        """xlsx 경로는 원시값을 주므로 기본값(False)이어야 한다 — 켜면 값이 안 정제된다."""
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        normal = build_data_json(rows, minimal_cfg, headers=headers)
        wrong = build_data_json(rows, minimal_cfg, headers=headers, rows_are_clean=True)
        # 원시값에는 datetime 이 섞여 있어 정제 여부가 드러난다
        assert isinstance(normal["rows"][0]["날짜"], str)
        assert not isinstance(wrong["rows"][0]["날짜"], str)

    def test_unknown_column_still_detected(self, minimal_cfg):
        """물려받은 타입에 없는 컬럼은 평소대로 감지한다."""
        rows = [{"기존": "A", "신규": 1}, {"기존": "A", "신규": 2},
                {"기존": "B", "신규": 3}, {"기존": "B", "신규": 4}]
        res = build_data_json(rows, minimal_cfg, column_types={"기존": "category"})
        by = {c["key"]: c["type"] for c in res["meta"]["columns"]}
        assert by["기존"] == "category"
        assert by["신규"] == "numeric"

    def test_edit_changes_aggregates(self, tricky_xlsx, minimal_cfg):
        """셀을 바꾸면 집계가 따라 변해야 한다 — 차트 자동 갱신의 근거."""
        headers, rows = _read_cleaned_sheet(tricky_xlsx, minimal_cfg)
        first = build_data_json(rows, minimal_cfg, headers=headers)
        assert first["aggregates"]["부서"] == {"개발팀": 4, "영업팀": 3, "기획팀": 1}

        edited = [dict(r) for r in first["rows"]]
        edited[0]["부서"] = "영업팀"                      # 개발팀 → 영업팀
        second = build_data_json(edited, minimal_cfg)

        assert second["aggregates"]["부서"] == {"영업팀": 4, "개발팀": 3, "기획팀": 1}


# ─────────────────────────────────────────────────────────────────────────────
# write_data_json — 쓰기 분리
# ─────────────────────────────────────────────────────────────────────────────

class TestWriteDataJson:
    def test_writes_and_updates_manifest(self, tmp_path, minimal_cfg):
        rows = [{"부서": "개발팀"}]
        result = build_data_json(rows, minimal_cfg)
        out = tmp_path / "data" / "test_proj_data.json"
        write_data_json(result, out, minimal_cfg)

        assert out.exists()
        loaded = json.loads(out.read_text(encoding="utf-8"))
        assert loaded["meta"]["project"] == "test_proj"

        manifest = json.loads((tmp_path / "data" / "projects.json").read_text(encoding="utf-8"))
        assert "test_proj" in {p["id"] for p in manifest}

    def test_export_to_json_write_path_unchanged(self, tricky_xlsx, minimal_cfg, tmp_path):
        """기존 호출부 호환 — export_to_json(output_path=...) 가 그대로 동작."""
        out = tmp_path / "data" / "test_proj_data.json"
        export_to_json(tricky_xlsx, minimal_cfg, output_path=out)
        assert out.exists()
        loaded = json.loads(out.read_text(encoding="utf-8"))
        assert loaded["meta"]["total_rows"] == 8
