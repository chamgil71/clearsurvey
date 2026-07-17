"""대시보드 손 편집 오버레이 (`storage/projects/<name>/overrides.json`).

**왜 오버레이인가**: `output/<name>_cleaned.xlsx` 는 원본이 아니라 `storage/raw` + `config.yaml`
에서 파이프라인이 매번 새로 만드는 파생물이다. 대시보드에서 고친 값을 거기 직접 쓰면
**다음 `/run` 이 원본에서 전부 다시 만들면서 편집을 조용히 지운다.**

그래서 편집은 이 파일에 따로 쌓고, 파이프라인이 **transform 을 끝낸 직후·시트에 쓰기 직전**에
덮어씌운다. 정제 규칙과 손 편집이 부딪히면 **손 편집이 이긴다.**

    raw.xlsx ──transform──> cell_val ──[OverrideApplier.take()]──> 시트
                                              ▲
                                        overrides.json

**이 파일이 편집의 진실**이다. `cleaned.xlsx` 와 `data.json` 은 둘 다 여기서 파생된다.
그래서 `/run` 을 몇 번을 돌려도 편집이 살아남는다.

상세: docs/plan/pending/dashboard_edit_plan.md §3 · §4.1
"""
from __future__ import annotations

import json
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Any

from engine.config import ROW_ID_COL
from engine.exporter import clean_value

OVERRIDES_FILE = "overrides.json"
SCHEMA_VERSION = 1

# Edit.origin — 이 편집이 어디서 왔나
ORIGIN_DRAWER = "drawer"        # 대시보드 상세 드로어에서 직접 수정
ORIGIN_XLSX = "xlsx-import"     # 수정된 xlsx 를 되돌려 올려 흡수

# Conflict.reason
REASON_ROW_MISSING = "row_missing"      # 그 __row_id 가 더 이상 없다 (원본 교체·행 삭제)
REASON_COL_MISSING = "col_missing"      # 그 출력 컬럼이 더 이상 없다 (config 변경)
REASON_PREV_MISMATCH = "prev_mismatch"  # 파이프라인 산출값이 편집 당시와 달라졌다


@dataclass
class Edit:
    """(row_id, col) 한 칸에 대한 손 편집."""

    row_id: str
    col: str
    value: Any
    # 편집 당시의 파이프라인 산출값. "이 편집이 무엇을 덮었는가"의 기록이자
    # 되돌리기·충돌 감지의 근거. None 은 '원래 빈 값이었다' 와 구분되지 않으므로
    # has_prev 로 "기록이 있는지" 를 따로 표현한다.
    prev: Any = None
    has_prev: bool = False
    at: str = ""
    by: str = ""
    origin: str = ORIGIN_DRAWER

    @property
    def key(self) -> tuple[str, str]:
        return (self.row_id, self.col)

    def to_dict(self) -> dict:
        d: dict = {"row_id": self.row_id, "col": self.col, "value": self.value}
        if self.has_prev:
            d["prev"] = self.prev
        if self.at:
            d["at"] = self.at
        if self.by:
            d["by"] = self.by
        d["origin"] = self.origin
        return d

    @classmethod
    def from_dict(cls, d: dict) -> Edit:
        return cls(
            row_id=str(d["row_id"]),
            col=str(d["col"]),
            value=d.get("value"),
            prev=d.get("prev"),
            has_prev="prev" in d,
            at=d.get("at", ""),
            by=d.get("by", ""),
            origin=d.get("origin", ORIGIN_DRAWER),
        )


@dataclass
class Conflict:
    """적용하지 못했거나 전제가 어긋난 편집.

    **버리지 않고 남겨 사용자에게 보여준다** — 편집이 조용히 사라지는 것이 최악이다.
    """

    row_id: str
    col: str
    reason: str
    value: Any = None
    expected_prev: Any = None
    actual_prev: Any = None

    def to_dict(self) -> dict:
        return {
            "row_id": self.row_id,
            "col": self.col,
            "reason": self.reason,
            "value": self.value,
            "expected_prev": self.expected_prev,
            "actual_prev": self.actual_prev,
        }


@dataclass
class Overrides:
    """overrides.json 전체. 같은 (row_id, col) 은 이력이 쌓이지 않고 덮어쓴다."""

    version: int = SCHEMA_VERSION
    updated_at: str = ""
    edits: list[Edit] = field(default_factory=list)

    # ── 조회/변경 ────────────────────────────────────────────────────────────
    def get(self, row_id: str, col: str) -> Edit | None:
        for e in self.edits:
            if e.row_id == row_id and e.col == col:
                return e
        return None

    def upsert(self, edit: Edit) -> None:
        """같은 칸의 기존 편집은 교체한다 (§3 — 이력 누적 아님)."""
        for i, e in enumerate(self.edits):
            if e.key == edit.key:
                self.edits[i] = edit
                return
        self.edits.append(edit)

    def remove(self, row_id: str, col: str) -> bool:
        before = len(self.edits)
        self.edits = [e for e in self.edits if not (e.row_id == row_id and e.col == col)]
        return len(self.edits) != before

    def remove_row(self, row_id: str) -> int:
        before = len(self.edits)
        self.edits = [e for e in self.edits if e.row_id != row_id]
        return before - len(self.edits)

    def clear(self) -> None:
        self.edits = []

    def __len__(self) -> int:
        return len(self.edits)

    # ── 직렬화 ───────────────────────────────────────────────────────────────
    def to_dict(self) -> dict:
        return {
            "version": self.version,
            "updated_at": self.updated_at,
            "edits": [e.to_dict() for e in self.edits],
        }

    @classmethod
    def from_dict(cls, d: dict) -> Overrides:
        return cls(
            version=int(d.get("version", SCHEMA_VERSION)),
            updated_at=d.get("updated_at", ""),
            edits=[Edit.from_dict(e) for e in d.get("edits", [])],
        )


# ---------------------------------------------------------------------------
# 파일 IO
# ---------------------------------------------------------------------------

def overrides_path(proj_dir: Path) -> Path:
    return proj_dir / OVERRIDES_FILE


def load_overrides(proj_dir: Path) -> Overrides:
    """없거나 깨져 있으면 **빈 Overrides** 를 돌려준다.

    편집이 없는 프로젝트가 정상 상태이므로 파일 부재는 오류가 아니다. 깨진 파일에
    예외를 던지면 파이프라인 전체가 멈추는데, 그건 손 편집 몇 건보다 큰 손해다.
    """
    p = overrides_path(proj_dir)
    if not p.exists():
        return Overrides()
    try:
        with open(p, encoding="utf-8") as f:
            return Overrides.from_dict(json.load(f))
    except Exception as exc:  # noqa: BLE001 — 어떤 파손이든 빈 상태로 진행
        print(f"[경고] {p.name} 을 읽을 수 없어 편집 없이 진행합니다: {exc}")
        return Overrides()


def save_overrides(proj_dir: Path, overrides: Overrides) -> Path:
    overrides.updated_at = datetime.now().isoformat(timespec="seconds")
    p = overrides_path(proj_dir)
    p.parent.mkdir(parents=True, exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        json.dump(overrides.to_dict(), f, ensure_ascii=False, indent=2)
    return p


# ---------------------------------------------------------------------------
# 적용
# ---------------------------------------------------------------------------

def values_equal(a: Any, b: Any) -> bool:
    """편집의 `prev` 와 파이프라인 산출값이 "같은가".

    `prev` 는 data.json 에서 온 값(= clean_value 를 거친 뒤)이고, 비교 대상은 transform
    직후의 원시 값이다. **도메인이 달라 == 로는 못 비교한다** — 양쪽을 clean_value 로
    같은 형태에 놓고 본다. (예: transform 이 낸 "90" 과 data.json 의 90 은 같은 값이다)
    """
    return clean_value(a) == clean_value(b)


class UploadRejected(Exception):
    """업로드된 xlsx 가 ClearSurvey 가 내려준 원본이 아니다 (§5.4 ③)."""


def diff_against(
    uploaded_rows: list[dict],
    current_rows: list[dict],
    *,
    editable_cols: set[str] | None = None,
) -> list[Edit]:
    """수정된 xlsx ↔ 현재 cleaned 데이터를 비교해 **바뀐 셀만** 뽑는다 (§5.4).

    `__row_id` 로 행을 맞춘다 — 사용자가 엑셀에서 정렬하거나 행을 지워도 순서에 의존하지 않는다.
    그래서 식별자가 성하지 않으면 비교 자체가 성립하지 않는다. **막지 않고 받을 때 검증한다**:
    시트 보호로 열을 잠그면 Cleaned 시트 전체가 편집 불가가 되어 역방향 업로드의 목적과
    충돌한다(§12-4).

    Raises UploadRejected — 식별자 열이 없거나, 비었거나, 중복이거나, 모르는 id 일 때.
    """
    if not uploaded_rows:
        raise UploadRejected("업로드한 파일에 데이터 행이 없습니다.")

    if not any(ROW_ID_COL in r for r in uploaded_rows):
        raise UploadRejected(
            f"'{ROW_ID_COL}' 열이 없습니다. ClearSurvey 에서 내려받은 엑셀이 아니거나 "
            f"숨은 열을 지운 것 같습니다. 「원본 XLSX」로 다시 받아 수정해 주세요."
        )

    current_by_id = {str(r[ROW_ID_COL]): r for r in current_rows if r.get(ROW_ID_COL)}

    seen: set[str] = set()
    edits: list[Edit] = []
    now = datetime.now().isoformat(timespec="seconds")

    for i, up in enumerate(uploaded_rows, 1):
        rid = up.get(ROW_ID_COL)
        if rid is None or str(rid).strip() == "":
            raise UploadRejected(f"{i}번째 데이터 행에 행 식별자가 비어 있습니다.")
        rid = str(rid)
        if rid in seen:
            raise UploadRejected(
                f"행 식별자 '{rid}' 가 중복됩니다. 행을 복사해 붙여넣으면 이렇게 됩니다 — "
                f"행 추가는 아직 지원하지 않습니다."
            )
        seen.add(rid)

        cur = current_by_id.get(rid)
        if cur is None:
            raise UploadRejected(
                f"행 식별자 '{rid}' 는 현재 데이터에 없습니다. 원본이 바뀌었거나 다른 프로젝트의 "
                f"파일입니다."
            )

        for col, new_val in up.items():
            if col == ROW_ID_COL:
                continue
            if editable_cols is not None and col not in editable_cols:
                continue  # 결과 엑셀에는 있지만 편집 대상이 아닌 열(참고 시트 등)
            if values_equal(cur.get(col), new_val):
                continue
            edits.append(
                Edit(
                    row_id=rid, col=col, value=clean_value(new_val),
                    prev=clean_value(cur.get(col)), has_prev=True,
                    at=now, origin=ORIGIN_XLSX,
                )
            )

    return edits


class OverrideApplier:
    """transform 결과를 시트에 쓰기 직전에 통과시키는 필터.

    **왜 `apply_overrides(df, ...)` 가 아닌가**: transform 은 별도 단계가 아니라
    `CleanedSheetWriter.write()` 안에서 셀 단위로 일어난다(`writer.py` 의 `_apply_transform`).
    출력 컬럼명으로 색인된 DataFrame 은 파이프라인 어디에도 존재하지 않는다 — `df` 는
    끝까지 원본의 위치 기반 컬럼(0,1,2…)을 들고 있다. 그래서 "덮어쓸 지점"은 셀뿐이다.

    셀마다 불리므로(15k행 × 39열 ≈ 60만 회) 편집이 없는 흔한 경우가 **dict 조회 1번**으로
    끝나야 한다.
    """

    def __init__(self, overrides: Overrides):
        self._by_key: dict[tuple[str, str], Edit] = {e.key: e for e in overrides.edits}
        self._applied: set[tuple[str, str]] = set()
        self._mismatches: list[Conflict] = []

    @property
    def has_edits(self) -> bool:
        return bool(self._by_key)

    def take(self, row_id: str, col: str, value: Any) -> Any:
        """이 칸의 최종 값을 돌려준다. 편집이 없으면 받은 값 그대로."""
        edit = self._by_key.get((row_id, col))
        if edit is None:
            return value

        self._applied.add((row_id, col))
        if edit.has_prev and not values_equal(edit.prev, value):
            # 편집 당시의 산출값과 지금의 산출값이 다르다 = 그 사이 원본이나 정제 규칙이
            # 바뀌었다. 편집은 그대로 적용하되(사용자 의도가 우선) 사실을 보고한다.
            self._mismatches.append(
                Conflict(
                    row_id=row_id,
                    col=col,
                    reason=REASON_PREV_MISMATCH,
                    value=edit.value,
                    expected_prev=edit.prev,
                    actual_prev=clean_value(value),
                )
            )
        return edit.value

    @property
    def applied_count(self) -> int:
        return len(self._applied)

    def conflicts(self, *, known_row_ids: set[str], known_cols: set[str]) -> list[Conflict]:
        """적용된 뒤 호출한다 — 못 붙은 편집과 전제가 어긋난 편집을 함께 돌려준다.

        known_row_ids / known_cols 는 이번 실행에서 실제로 존재한 행·컬럼이다. 여기에
        없는 편집은 붙을 자리가 사라진 것이고, **버리지 않고 충돌로 보고한다.**
        """
        out: list[Conflict] = list(self._mismatches)
        for key, edit in self._by_key.items():
            if key in self._applied:
                continue
            if edit.row_id not in known_row_ids:
                reason = REASON_ROW_MISSING
            elif edit.col not in known_cols:
                reason = REASON_COL_MISSING
            else:
                # 행도 컬럼도 있는데 안 붙었다면 로직 오류다. 조용히 넘기지 않는다.
                raise AssertionError(
                    f"편집 ({edit.row_id}, {edit.col}) 이 적용되지 않았습니다 — "
                    f"행과 컬럼이 모두 존재하는데 take() 를 거치지 않았습니다."
                )
            out.append(
                Conflict(row_id=edit.row_id, col=edit.col, reason=reason, value=edit.value)
            )
        return out
