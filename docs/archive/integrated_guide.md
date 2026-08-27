# ClearSurvey — 통합 가이드: 전체 프로젝트 연계 및 데이터 플로우 (Integrated Guide)

> ⚠️ **아카이브됨 (2026-08-27)**: §1~3(Step 1~3 데이터 흐름)은 `GUIDE.md`(루트) §1과
> [`docs/guides/system_flow_diagram.md`](../guides/system_flow_diagram.md)의 다이어그램과 내용이
> 중복되어 그쪽이 최신 기준입니다. §4(대시보드 값 직접 수정·발행)의 운영 절차는
> [`docs/guides/dashboard_edit_operations.md`](../guides/dashboard_edit_operations.md)로 그대로
> 옮겨졌습니다. 이 파일은 과거 참고용으로만 보존합니다.

본 문서는 **ClearSurvey**의 3대 독립 영역(Python 데이터 정제 엔진, FastAPI 백엔드, React 웹 프론트엔드)이 로컬 및 분리 배포 환경에서 어떻게 유기적으로 맞물려 전체 설문 프로젝트 수명 주기를 제어하는지 연계 데이터 흐름(Data Lifecycle)을 다루는 통합 가이드입니다.

---

## 1. ClearSurvey 전체 라이프사이클 (Project Lifecycle)

설문지를 업로드하고 대시보드를 배포하기까지의 일관된 3단계 프로세스 데이터 연계도입니다:

```
[React 프론트엔드]                        [FastAPI 백엔드]                     [Python 코어 엔진]
        │                                       │                                     │
        ├─────── 1. Excel 업로드 & 분석 ───────▶│                                     │
        │        (Step 1: File Upload)          ├─────── 2. Excel 구조 자동 분석 ────▶│
        │                                       │        (draft_*.xlsx 및 config)     │
        │◀────── 3. 분석 결과 & Draft 응답 ─────┤                                     │
        │                                       │                                     │
        ├─────── 4. 설정 & 빌더 저장 ──────────▶│                                     │
        │        (Step 2: 10열 드롭다운 편집)   ├─────── 5. Pydantic 정합성 검증 ─────┤
        │                                       │        (config.yaml & json 저장)    │
        │                                       │                                     │
        ├─────── 6. 파이프라인 정제 실행 ──────▶│                                     │
        │        (Step 3: 1-Click Trigger)      ├─────── 7. 정제 프로세스 구동 ──────▶│
        │                                       │        (Excel Cleansing, Slicer)    │
        │◀────── 8. 실시간 런타임 로그 스트림 ──┤                                     │
        │                                       │                                     │
        ├─────── 9. 대시보드 데이터 내보내기 ──▶│                                     │
        │        (Export Trigger)               ├─────── 10. Dashboard JSON 추출 ────▶│
        │                                       │        (frontend/public/data/project_data.json) │
        │                                       │                                     │
        ▼                                       ▼                                     ▼
[100% 최신 정제 대시보드 렌더링 완료]    [최종 결과물.xlsx & 데이터 공급]      [백엔드-정적 하이브리드 대시보드 배포]
```

---

## 2. 세부 단계별 데이터 연계 흐름

### ① [Step 1] 프로젝트 생성 및 설문지 업로드
1. **프론트엔드**: 사용자가 웹 화면에서 새 프로젝트 이름을 입력하고 raw excel 파일을 drag-and-drop 하면, `FormData` 객체에 실어 백엔드의 `POST /api/projects/create`로 보냅니다.
2. **백엔드 & 파이썬 엔진**:
   - 업로드된 엑셀 파일을 Git 제외 폴더인 `storage/`에 격리 저장합니다.
   - `ExcelAnalyzer` 코어를 가동하여 첫 번째 데이터 행, 헤더 행, 총 문항(컬럼) 개수 등을 자동 검출합니다.
   - 프로젝트 고유 디렉토리인 `projects/<project_name>/`을 생성하고, 정밀 정제 정의 시트가 탑재된 설정용 엑셀인 `draft_*.xlsx`와 기본 설정 파일인 `config.yaml`을 원격 자동 주조하여 저장합니다.

### ② [Step 2] 10열 드롭다운 컬럼 정의 및 대시보드 레이아웃 저장
1. **프론트엔드**: 백엔드로부터 draft 명세를 로드해 Step 2의 10열 매핑 화면과 요약/차트 비주얼 빌더 화면을 렌더링합니다. 
   - 문항별 정제 규칙(Transforms)과 원본 열 번호를 타이핑 없이 드롭다운으로 정교하게 클릭하여 제어합니다.
2. **백엔드 & 파이썬 엔진**:
   - `POST /api/projects/<project_name>/config`로 수신한 설정을 `SurveyConfig` Pydantic 모델을 통해 문법 검증을 거칩니다.
   - 검증이 완료되면 `config.yaml` 및 `dashboard.json`을 프로젝트 폴더에 덮어씌워 영구 기록합니다.

### ③ [Step 3] 정제 엔진 1-Click 실행 및 대시보드 내보내기
1. **프론트엔드**: [정제 엔진 1-Click 실행] 버튼을 클릭해 `POST /api/projects/<project_name>/run`을 날립니다.
2. **백엔드 & 파이썬 엔진**:
   - 파이썬 엔진의 `SurveyPipeline`을 생성해 구동합니다.
   - 전처리(Preprocess) 필터를 타며, 20여 종의 Transform 레지스트리 규칙을 통해 결측치 치환, 마스킹, 주소 분할을 단번에 클렌징하고 `projects/<project_name>/output/` 폴더 하위에 고품질 엑셀 결과를 생성합니다.
   - 완료 후 백엔드의 `export` API를 자동으로 연계 가동하여 `frontend/public/data/<project_name>_data.json` 파일을 최종 빌드 배포합니다.
3. **프론트엔드**: 갱신된 JSON 경로를 파라미터로 안고 메인 대시보드로 원클릭 랜딩하며 100% 최신의 정밀 정제 대시보드 화면을 화면에 렌더링합니다.

### ④ [대시보드] 값 직접 수정 · 엑셀 왕복 · 발행

Step 3 까지가 "원본 → 정제 결과"라면, 여기는 **정제 결과를 손으로 고치는** 경로입니다.

1. **저장** — 목록 탭에서 행 클릭 → 우측 드로어 → 값 수정 → [저장]
   `PATCH /api/projects/<name>/rows/<row_id>` (변경된 컬럼만 body 에)
   - 백엔드가 `overrides.json` 을 갱신하고 **`data.json` 만** 다시 만들어 응답에 실어 보냅니다.
     프런트가 그것으로 교체하면 차트·KPI·필터가 따라 갱신됩니다.
   - **결과 엑셀은 이때 건드리지 않습니다.** 셀 하나에 전체 파이프라인(원본 읽기 → transform →
     시트 4장 → 슬라이서 zip 재작성)을 돌리면 수십 초가 걸리는데, 사용자가 보고 있는 건 차트뿐입니다.

2. **엑셀 따라잡기(rebuild)** — 「원본 XLSX」 다운로드나 발행 시 **자동으로** 실행됩니다.
   `POST /api/projects/<name>/rebuild` (수동 호출도 가능)
   - 파이프라인이 `raw + config.yaml + overrides.json` 으로 결과 엑셀을 다시 만듭니다.
   - **손 편집은 transform 이 끝난 직후·시트에 쓰기 직전에 얹힙니다.** 그래서 정제 규칙과
     부딪히면 손 편집이 이기고, `/run` 을 몇 번을 돌려도 편집이 살아남습니다.

3. **역방향 (엑셀 → 대시보드)** — 검토 패널에서 수정한 xlsx 업로드
   `POST /api/projects/<name>/import-xlsx?apply=false` → **미리보기** → `apply=true` → 반영
   - 숨은 `__row_id` 열로 행을 맞춥니다. 그 열을 지웠거나 행을 복사해 붙여넣었으면 **거부**합니다.
   - 확인 단계를 반드시 거칩니다 — 엑셀은 서식·자동 날짜 변환·앞자리 0 소실로 값을 조용히 바꿉니다.

4. **발행** — `POST /api/projects/<name>/deploy` = rebuild + **커밋 1개 + 푸시 1회**
   - 가드 3종(원본 존재 · 경로 2개 제한 · 원격 선행 시 거부)을 통과해야 합니다 →
     [multi_pc_data_sync.md §3.1](multi_pc_data_sync.md)
   - 가드에 걸리면 **409 + 이유**가 뜹니다. 오류가 아니라 의도된 정지입니다.

> **뒤처짐 판정**은 새 개념이 아니라 기존 `GET /freshness` 의 `is_stale` 을 그대로 씁니다 —
> "설정이 산출물보다 앞서 있다"에 "편집이 앞서 있다"를 얹었을 뿐입니다.

> ⚠️ **편집·설정·XLSX 버튼은 로컬 API + 로그인일 때만 보입니다.** 그리고 `storage/` 는 git 을
> 따라가지 않으므로 **편집은 그 PC 에만 있습니다** — 원본이 있는 PC 1대에서만 편집·발행하십시오.

> ⚠️ **이 기능 이전에 내보낸 프로젝트는 `__row_id` 가 없어 저장이 거부됩니다.**
> 프로젝트마다 `/run` 을 한 번씩 다시 돌리면 열립니다.

상세 설계: [../plan/pending/dashboard_edit_plan.md](../plan/pending/dashboard_edit_plan.md)
