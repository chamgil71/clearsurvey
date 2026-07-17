"""
Tests for engine/overrides.py (dashboard_edit_plan §3 · §4.1 · 3단계)

오버레이는 **편집의 진실**이다. cleaned.xlsx 와 data.json 이 둘 다 여기서 파생되므로,
여기가 틀리면 `/run` 재실행 때 편집이 사라지거나 엉뚱한 값이 박힌다.

못박는 것:
  - 스키마 왕복 (저장 → 로드 → 동일)
  - 같은 칸은 덮어쓴다 (이력 누적 아님)
  - 파일이 없거나 깨져도 파이프라인을 멈추지 않는다
  - transform 결과를 덮어쓴다 (손 편집이 이긴다)
  - 붙을 자리가 사라진 편집을 **버리지 않고 충돌로 보고**한다
  - prev 비교가 도메인 차이(clean_value 전/후)를 넘어 동작한다

실행: pytest tests/test_overrides.py -v
"""
from __future__ import annotations

import json
from pathlib import Path

import pytest

from engine.config import ROW_ID_COL
from engine.overrides import (
    ORIGIN_DRAWER,
    ORIGIN_XLSX,
    UploadRejected,
    diff_against,
    REASON_COL_MISSING,
    REASON_PREV_MISMATCH,
    REASON_ROW_MISSING,
    Edit,
    OverrideApplier,
    Overrides,
    load_overrides,
    overrides_path,
    save_overrides,
    values_equal,
)


def _edit(row_id="r5", col="지역", value="서울특별시", **kw) -> Edit:
    return Edit(row_id=row_id, col=col, value=value, **kw)


# ─────────────────────────────────────────────────────────────────────────────
# 스키마 · 직렬화
# ─────────────────────────────────────────────────────────────────────────────

class TestSchema:
    def test_round_trip_preserves_edit(self):
        e = Edit(
            row_id="r5", col="지역", value="서울특별시",
            prev="서울", has_prev=True,
            at="2026-07-17T14:02:11", by="local_dev_user", origin=ORIGIN_DRAWER,
        )
        back = Edit.from_dict(e.to_dict())
        assert back == e

    def test_prev_omitted_when_absent(self):
        """prev 기록이 없는 편집은 JSON 에 prev 키가 없어야 한다.

        prev=None 을 쓰면 '원래 빈 값이었다' 와 구분되지 않는다.
        """
        d = _edit().to_dict()
        assert "prev" not in d
        assert Edit.from_dict(d).has_prev is False

    def test_prev_none_is_preserved_as_recorded(self):
        e = Edit(row_id="r5", col="지역", value="서울", prev=None, has_prev=True)
        d = e.to_dict()
        assert "prev" in d and d["prev"] is None
        assert Edit.from_dict(d).has_prev is True

    def test_overrides_round_trip(self):
        ov = Overrides(edits=[_edit(), _edit(row_id="r9", col="점수", value=80)])
        back = Overrides.from_dict(ov.to_dict())
        assert back.edits == ov.edits
        assert back.version == 1


# ─────────────────────────────────────────────────────────────────────────────
# upsert / remove
# ─────────────────────────────────────────────────────────────────────────────

class TestMutation:
    def test_upsert_replaces_same_cell(self):
        ov = Overrides()
        ov.upsert(_edit(value="서울"))
        ov.upsert(_edit(value="서울특별시"))
        assert len(ov) == 1                       # 이력이 쌓이지 않는다
        assert ov.get("r5", "지역").value == "서울특별시"

    def test_upsert_keeps_different_cells(self):
        ov = Overrides()
        ov.upsert(_edit(col="지역"))
        ov.upsert(_edit(col="점수", value=80))
        assert len(ov) == 2

    def test_same_row_multiple_cols_is_row_level_save(self):
        """행 1건 저장 = 컬럼별 편집 N건 (§3 — 되돌리기를 컬럼별로 하기 위해)."""
        ov = Overrides()
        for col, val in [("지역", "서울"), ("연령", 34), ("메모", "확인함")]:
            ov.upsert(_edit(col=col, value=val))
        assert len(ov) == 3
        assert {e.col for e in ov.edits} == {"지역", "연령", "메모"}

    def test_remove(self):
        ov = Overrides(edits=[_edit()])
        assert ov.remove("r5", "지역") is True
        assert len(ov) == 0
        assert ov.remove("r5", "지역") is False   # 이미 없으면 False

    def test_remove_row_removes_all_cols(self):
        ov = Overrides(edits=[_edit(col="지역"), _edit(col="점수"), _edit(row_id="r9")])
        assert ov.remove_row("r5") == 2
        assert [e.row_id for e in ov.edits] == ["r9"]

    def test_clear(self):
        ov = Overrides(edits=[_edit(), _edit(row_id="r9")])
        ov.clear()
        assert len(ov) == 0


# ─────────────────────────────────────────────────────────────────────────────
# 파일 IO
# ─────────────────────────────────────────────────────────────────────────────

class TestFileIO:
    def test_missing_file_returns_empty(self, tmp_path):
        assert len(load_overrides(tmp_path)) == 0

    def test_save_then_load(self, tmp_path):
        ov = Overrides(edits=[_edit(prev="서울", has_prev=True)])
        save_overrides(tmp_path, ov)
        back = load_overrides(tmp_path)
        assert back.edits == ov.edits

    def test_save_stamps_updated_at(self, tmp_path):
        ov = Overrides(edits=[_edit()])
        save_overrides(tmp_path, ov)
        assert load_overrides(tmp_path).updated_at != ""

    def test_saved_file_is_human_readable(self, tmp_path):
        """overrides.json 은 사람이 열어볼 감사 기록이다 — indent 유지."""
        save_overrides(tmp_path, Overrides(edits=[_edit()]))
        text = overrides_path(tmp_path).read_text(encoding="utf-8")
        assert "\n  " in text
        assert "서울특별시" in text          # 한글이 이스케이프되지 않아야 한다

    def test_corrupt_file_does_not_raise(self, tmp_path, capsys):
        """깨진 편집 파일 때문에 파이프라인 전체가 멈추면 안 된다."""
        overrides_path(tmp_path).write_text("{ 이건 JSON 이 아니다", encoding="utf-8")
        assert len(load_overrides(tmp_path)) == 0
        assert "경고" in capsys.readouterr().out

    def test_creates_parent_dir(self, tmp_path):
        deep = tmp_path / "a" / "b"
        save_overrides(deep, Overrides(edits=[_edit()]))
        assert overrides_path(deep).exists()


# ─────────────────────────────────────────────────────────────────────────────
# values_equal — clean_value 전/후 도메인 차이
# ─────────────────────────────────────────────────────────────────────────────

class TestValuesEqual:
    @pytest.mark.parametrize(
        "a,b",
        [
            ("90", 90),          # transform 이 낸 문자열 vs data.json 의 정수
            (90, 90.0),          # int vs float
            (" 서울 ", "서울"),   # 공백
            (None, None),
        ],
    )
    def test_equal(self, a, b):
        assert values_equal(a, b) is True

    @pytest.mark.parametrize("a,b", [("서울", "부산"), (90, 91), (None, "서울"), ("", "서울")])
    def test_not_equal(self, a, b):
        assert values_equal(a, b) is False


# ─────────────────────────────────────────────────────────────────────────────
# OverrideApplier — 손 편집이 이긴다
# ─────────────────────────────────────────────────────────────────────────────

class TestApplier:
    def test_passes_through_when_no_edit(self):
        ap = OverrideApplier(Overrides())
        assert ap.take("r5", "지역", "서울") == "서울"
        assert ap.has_edits is False

    def test_hand_edit_wins_over_transform(self):
        ap = OverrideApplier(Overrides(edits=[_edit()]))
        assert ap.take("r5", "지역", "서울") == "서울특별시"
        assert ap.applied_count == 1

    def test_only_targeted_cell_changes(self):
        ap = OverrideApplier(Overrides(edits=[_edit()]))
        assert ap.take("r5", "점수", 90) == 90      # 다른 컬럼
        assert ap.take("r9", "지역", "부산") == "부산"  # 다른 행
        assert ap.applied_count == 0

    def test_edit_to_empty_value(self):
        """값을 비우는 편집도 되어야 한다."""
        ap = OverrideApplier(Overrides(edits=[_edit(value=None)]))
        assert ap.take("r5", "지역", "서울") is None

    def test_no_conflicts_when_all_applied(self):
        ap = OverrideApplier(Overrides(edits=[_edit(prev="서울", has_prev=True)]))
        ap.take("r5", "지역", "서울")
        assert ap.conflicts(known_row_ids={"r5"}, known_cols={"지역"}) == []

    def test_prev_mismatch_reported_but_edit_still_applied(self):
        """편집 당시와 산출값이 달라져도 사용자 의도를 우선하되 사실은 보고한다."""
        ap = OverrideApplier(Overrides(edits=[_edit(prev="서울", has_prev=True)]))
        assert ap.take("r5", "지역", "인천") == "서울특별시"   # 적용은 된다

        (c,) = ap.conflicts(known_row_ids={"r5"}, known_cols={"지역"})
        assert c.reason == REASON_PREV_MISMATCH
        assert c.expected_prev == "서울"
        assert c.actual_prev == "인천"

    def test_prev_mismatch_tolerates_type_domain(self):
        """prev(=data.json 의 90) 와 transform 이 낸 "90" 은 충돌이 아니다."""
        ap = OverrideApplier(Overrides(edits=[_edit(col="점수", value=95, prev=90, has_prev=True)]))
        ap.take("r5", "점수", "90")
        assert ap.conflicts(known_row_ids={"r5"}, known_cols={"점수"}) == []

    def test_row_gone_is_reported_not_dropped(self):
        """원본이 교체돼 행이 사라져도 편집을 조용히 버리지 않는다."""
        ap = OverrideApplier(Overrides(edits=[_edit()]))
        (c,) = ap.conflicts(known_row_ids={"r1", "r2"}, known_cols={"지역"})
        assert c.reason == REASON_ROW_MISSING
        assert c.row_id == "r5"
        assert c.value == "서울특별시"          # 무엇을 넣으려 했는지 남는다

    def test_col_gone_is_reported(self):
        """config 가 바뀌어 컬럼이 사라진 경우."""
        ap = OverrideApplier(Overrides(edits=[_edit()]))
        (c,) = ap.conflicts(known_row_ids={"r5"}, known_cols={"점수"})
        assert c.reason == REASON_COL_MISSING

    def test_unapplied_but_present_raises(self):
        """행·컬럼이 다 있는데 안 붙었다면 로직 오류 — 조용히 넘기지 않는다."""
        ap = OverrideApplier(Overrides(edits=[_edit()]))
        with pytest.raises(AssertionError, match="적용되지 않았"):
            ap.conflicts(known_row_ids={"r5"}, known_cols={"지역"})

    def test_mixed_origins_all_apply(self):
        ap = OverrideApplier(Overrides(edits=[
            _edit(col="지역", value="서울특별시", origin=ORIGIN_DRAWER),
            _edit(col="점수", value=100, origin=ORIGIN_XLSX),
        ]))
        assert ap.take("r5", "지역", "서울") == "서울특별시"
        assert ap.take("r5", "점수", 90) == 100


# ─────────────────────────────────────────────────────────────────────────────
# diff_against — 역방향 xlsx 업로드 (§5.4)
# ─────────────────────────────────────────────────────────────────────────────

def _cur() -> list[dict]:
    return [
        {"이름": "홍길동", "지역": "서울", "점수": 90, ROW_ID_COL: "r2"},
        {"이름": "김철수", "지역": "부산", "점수": 85, ROW_ID_COL: "r3"},
    ]


class TestDiffAgainst:
    def test_no_change_no_edits(self):
        assert diff_against(_cur(), _cur()) == []

    def test_detects_changed_cell_only(self):
        up = _cur()
        up[1]["지역"] = "부산광역시"
        (e,) = diff_against(up, _cur())
        assert (e.row_id, e.col, e.value, e.prev) == ("r3", "지역", "부산광역시", "부산")
        assert e.origin == ORIGIN_XLSX

    def test_matches_by_row_id_not_order(self):
        """엑셀에서 정렬해 순서가 바뀌어도 제 행에 붙어야 한다."""
        up = list(reversed(_cur()))
        up[0]["지역"] = "부산광역시"          # 이제 첫 행이 r3 다
        (e,) = diff_against(up, _cur())
        assert e.row_id == "r3"

    def test_ignores_non_editable_columns(self):
        up = _cur()
        up[0]["참고열"] = "무언가"
        assert diff_against(up, _cur(), editable_cols={"이름", "지역", "점수"}) == []

    def test_numeric_string_is_not_a_change(self):
        """엑셀이 90 을 '90' 으로 돌려줘도 바뀐 게 아니다 (clean_value 로 도메인 정렬)."""
        up = _cur()
        up[0]["점수"] = "90"
        assert diff_against(up, _cur()) == []

    # ── 식별자 검증 = 유일한 방어 지점 (§5.4 ③) ─────────────────────────
    def test_missing_row_id_column_rejected(self):
        up = [{"이름": "홍길동", "지역": "서울"}]
        with pytest.raises(UploadRejected, match=ROW_ID_COL):
            diff_against(up, _cur())

    def test_blank_row_id_rejected(self):
        up = _cur()
        up[0][ROW_ID_COL] = ""
        with pytest.raises(UploadRejected, match="비어"):
            diff_against(up, _cur())

    def test_duplicate_row_id_rejected(self):
        """행을 복사해 붙여넣은 경우 — 행 추가는 아직 지원하지 않는다."""
        up = _cur()
        up[1][ROW_ID_COL] = "r2"
        with pytest.raises(UploadRejected, match="중복"):
            diff_against(up, _cur())

    def test_unknown_row_id_rejected(self):
        up = _cur()
        up[0][ROW_ID_COL] = "r999"
        with pytest.raises(UploadRejected, match="r999"):
            diff_against(up, _cur())

    def test_empty_upload_rejected(self):
        with pytest.raises(UploadRejected, match="데이터 행이 없습니다"):
            diff_against([], _cur())

    def test_deleted_rows_are_tolerated(self):
        """업로드본에서 행이 빠진 건 '삭제'가 아니다 — 남은 행만 비교한다."""
        assert diff_against([_cur()[0]], _cur()) == []
