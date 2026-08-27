# 대시보드 값 직접 수정 · 엑셀 왕복 · 발행 (운영 가이드)

> 이 문서는 "원본 → 정제 결과"(파이프라인 실행)가 끝난 **뒤**, 정제 결과를 대시보드에서 손으로
> 고치고 발행하는 실제 조작 절차를 다룹니다. 파이프라인 자체의 API 흐름은
> [system_flow_diagram.md](system_flow_diagram.md)를, 내부 파일 구조는
> [../reference/project_files_lifecycle.md §4.9](../reference/project_files_lifecycle.md)를 참고하세요.
> 설계 배경 전체: [../plan/pending/dashboard_edit_plan.md](../plan/pending/dashboard_edit_plan.md)

---

## 1. 저장 — 목록 탭에서 값 고치기

목록 탭에서 행 클릭 → 우측 드로어 → 값 수정 → **[저장]**

`PATCH /api/projects/<name>/rows/<row_id>` (변경된 컬럼만 body에 실림)

- 백엔드가 `overrides.json`을 갱신하고 **`data.json`만** 다시 만들어 응답에 실어 보냅니다.
  프런트가 그것으로 교체하면 차트·KPI·필터가 따라 갱신됩니다.
- **결과 엑셀은 이때 건드리지 않습니다.** 셀 하나 고치자고 전체 파이프라인(원본 읽기 →
  transform → 시트 4장 → 슬라이서 zip 재작성)을 돌리면 수십 초가 걸리는데, 사용자가 보고 있는
  건 차트뿐이기 때문입니다.

## 2. 엑셀 따라잡기(rebuild) — 「원본 XLSX」 다운로드·발행 시 자동 실행

`POST /api/projects/<name>/rebuild` (수동 호출도 가능)

- 파이프라인이 `raw + config.yaml + overrides.json`으로 결과 엑셀을 다시 만듭니다.
- **손 편집은 transform이 끝난 직후·시트에 쓰기 직전에 얹힙니다.** 그래서 정제 규칙과
  부딪히면 손 편집이 이기고, `/run`을 몇 번을 돌려도 편집이 살아남습니다.

## 3. 역방향 (엑셀 → 대시보드) — 수정한 xlsx 되돌려 올리기

`POST /api/projects/<name>/import-xlsx?apply=false` → **미리보기** → `apply=true` → 반영

- 숨은 `__row_id` 열로 행을 맞춥니다. 그 열을 지웠거나 행을 복사해 붙여넣었으면 **거부**합니다.
- 확인 단계를 반드시 거칩니다 — 엑셀은 서식·자동 날짜 변환·앞자리 0 소실로 값을 조용히 바꿉니다.

## 4. 발행 — `POST /api/projects/<name>/deploy`

= rebuild + **커밋 1개 + 푸시 1회**

가드 3종(원본 존재 · 경로 2개 제한 · 원격 선행 시 거부)을 통과해야 합니다 →
[multi_pc_data_sync.md §3.1](multi_pc_data_sync.md). 가드에 걸리면 **409 + 이유**가 뜹니다.
오류가 아니라 의도된 정지입니다.

> **뒤처짐 판정**은 새 개념이 아니라 기존 `GET /freshness`의 `is_stale`을 그대로 씁니다 —
> "설정이 산출물보다 앞서 있다"에 "편집이 앞서 있다"를 얹었을 뿐입니다.

---

## 주의 사항

- ⚠️ **편집·설정·XLSX 버튼은 로컬 API + 로그인일 때만 보입니다.** 그리고 `storage/`는 git을
  따라가지 않으므로 **편집은 그 PC에만 있습니다** — 원본이 있는 PC 1대에서만 편집·발행하십시오.
- ⚠️ **이 기능 이전에 내보낸 프로젝트는 `__row_id`가 없어 저장이 거부됩니다.**
  프로젝트마다 `/run`을 한 번씩 다시 돌리면 열립니다.
