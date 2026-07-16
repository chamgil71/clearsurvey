# 🚀 ClearSurvey 잔여 기능 개선 및 아키텍처 기획서

본 문서는 ClearSurvey 시스템의 지속 가능한 발전과 엔터프라이즈급 안정성을 확보하기 위해 프론트엔드 및 백엔드 영역에 남겨진 **잔여 개선 사항**의 구체적인 아키텍처 설계와 구현 로드맵을 정의한 기획서입니다.

---

## 목차
1. [다중 엑셀 파일 병합(Merge)의 웹 UI 연동 기획](#1-다중-엑셀-파일-병합merge의-웹-ui-연동-기획)
2. [프론트엔드 번들 크기 최적화 (Chunk Size Warning) 기획](#2-프론트엔드-번들-크기-최적화-chunk-size-warning-기획)
3. [대시보드 반응형 레이아웃 세밀화 (차트 최대 배열 갯수 제어) 기획](#3-대시보드-반응형-레이아웃-세밀화-차트-최대-배열-갯수-제어-기획)
4. [결과물의 "정제 규칙 최신 반영 여부" 확인 불가 문제 기획](#4-결과물의-정제-규칙-최신-반영-여부-확인-불가-문제-기획)
5. [정제 규칙(Transform) 자동 테스트 커버리지 공백](#5-정제-규칙transform-자동-테스트-커버리지-공백)

> **이관 안내**: 과거 2번(클라우드 스토리지 연동)과 4번(Supabase 세션 토큰 개선) 항목은
> [plan/pending/cloud_storage_plan.md](pending/cloud_storage_plan.md)로 분리 이관되었습니다.
> 세션 토큰 항목은 이미 구현 완료 상태이며, 클라우드 스토리지 연동은 보류(미착수) 상태입니다.
> 아래 번호는 이관 이후 순서로 재부여되었습니다.

순차 진행 순서(2026-07-15 결정): **1 → 2 → 3 → 4 → 5**.

---

## 1. 다중 엑셀 파일 병합(Merge)의 웹 UI 연동 기획 — ✅ 완료 (2026-07-15)

### ① 현상 및 한계점 (조사 당시 — 이미 대부분 구현되어 있었음)
* **재조사 결과**: 실제로 확인해보니 백엔드 엔드포인트(`POST /api/projects/create-merge`),
  `Step1_ProjectUpload`의 병합 업로드 UI(모드 스위치, 드래그앤드롭, 중복제거/출처파일 설정 패널),
  `useManagerApi.createMergeProject` 훅까지 전부 이미 구현되어 있었음. 실제 공백은 `admin.tsx`가
  `Step1_ProjectUpload`에 `onCreateMergeProject` prop을 전달하지 않아 화면에서 "병합" 버튼을 눌러도
  동작하지 않던 **연결 누락 한 줄**이었음.
* **부수적으로 발견한 실제 버그**: `backend/app/main.py::create_merge_project`에서 `copy_from_project`
  분기 안에서만 `import yaml`을 호출하고 있어, 그 분기를 타지 않는 (가장 흔한) 일반 병합 경로에서
  `UnboundLocalError`로 500 에러가 나는 버그가 있었음. 함께 수정.
* **완료 내역**: `admin.tsx`에 `handleCreateMergeProject` 핸들러 추가 및 prop 연결, `yaml` 버그 수정,
  `backend/tests/test_api.py::TestCreateMergeProject` 5케이스 추가(239개 전체 통과), 프론트 `tsc`/vitest
  통과 확인. 상세는 [CHANGELOG.md](../CHANGELOG.md) 2026-07-15 항목 참조.

### 원래 조사 내용 (참고용)
* **당시 추정 현황**: 백엔드 엔진([merger.py](file:///c:/ai/clearsurvey/backend/engine/merger.py)) 및 CLI 명령어(`uv run main.py merge`)를 통해서는 여러 파일 병합 설정(yaml)을 처리할 수 있으나, 웹 UI(Step 1 ~ Step 3)의 프로젝트 생성 화면은 오직 단일 파일 업로드만 지원하여 다중 소스 취합 작업을 웹 브라우저에서 수행할 수 없는 한계가 있다고 기술되어 있었음(부정확 — 위 재조사 결과 참조).

### ② 아키텍처 및 구현 설계

#### 1) UI/UX 와이어프레임 기획
* `Step1_ProjectUpload` 컴포넌트 상단에 **[단일 파일 업로드 / 다중 파일 병합]** 선택 스위치 배치.
* 다중 파일 병합 선택 시:
  * **파일 드래그앤드롭 영역**: 복수 개의 `.xlsx` 파일을 동시에 업로드하여 파일 리스트 수집.
  * **병합 설정 패널**:
    * **중복 제거 기준 컬럼 (Key Column)**: 행 중복 제거의 기준이 될 원본 열 이름 선택.
    * **중복 제거 전략 (Dedup Strategy)**: `first` (첫 행 보존), `last` (마지막 행 보존), `none` (중복 허용) 선택 드롭다운.
    * **출처 파일 기록 여부**: 결과물 시트에 `_출처파일` 컬럼을 자동 추가할지 여부 토글 스위치.

#### 2) API 명세 및 백엔드 파이프라인 연계
* **신규 API 엔드포인트 개설**: `POST /api/projects/create-merge`
* **요청 바디**: 복수 파일 (`file[]`) 및 병합 설정 정보 (JSON string).
```json
{
  "project_name": "연도별_수의계약_통합",
  "dedup_strategy": "first",
  "key_cols": ["답변ID"],
  "add_source_col": true
}
```
* **백엔드 처리 플로우**:
  1. 백엔드는 수신된 복수 엑셀 파일들을 `storage/raw/{projectName}/` 임시 폴더에 격리 저장합니다.
  2. 수신된 JSON 설정을 기반으로 `engine/merger.py` 모듈을 가동하여 하나의 `merged.xlsx` 파일을 빌드합니다.
  3. 빌드 완료된 `merged.xlsx`에 대해 기존 `ExcelAnalyzer.analyze()` 분석기를 가동하여 초안 `draft.xlsx` 및 `config.yaml`을 동일하게 생성하고 성공 응답을 반환합니다.

---

## 2. 프론트엔드 번들 크기 최적화 (Chunk Size Warning) 기획 — ✅ 점검 완료 (2026-07-15)

### ① 현상 및 한계점 (조사 당시)
* **당시 현황 추정**: React 컴파일 및 빌드 시 `html2pdf.js` (약 975kB) 및 `supabase-js` (약 208kB) 등 고용량 외부 라이브러리들로 인해 번들러(Vite/Rollup)가 "Some chunks are larger than 500 kB" 경고를 발생시킨다고 기술되어 있었음.
* **영향(추정)**: 초기 웹 서비스 접속 시 무거운 벤더 스크립트 파일을 한 번에 내려받아야 하므로 페이지 로딩 성능 저하를 초래한다고 서술.

### ② 재조사 결과 및 실제 조치 (2026-07-15)

#### 1) `html2pdf.js` 동적 import — 이미 구현되어 있었음
* `frontend/src/components/dashboard/DetailPanel.tsx:32`에 이미
  `const { default: html2pdf } = await import("html2pdf.js");` 형태로 PDF 저장 버튼 클릭 시점에만
  로드하도록 구현되어 있었음. **초기 로딩에는 975kB 청크가 전혀 포함되지 않음** — "무거운 벤더 스크립트를
  한 번에 내려받는다"는 당시 서술은 사실과 다름(이미 해결됨).

#### 2) Rollup `manualChunks` 명시 적용 — 시도했으나 역효과 확인, 롤백
* 계획서 예시대로 `html2pdf.js`/`@supabase`/`recharts`를 각각 벤더 청크로, 나머지 `node_modules`를
  하나의 `vendor-core`로 묶는 `manualChunks`를 실제로 적용해 빌드해본 결과 오히려 **악화**됨을 확인:
  기존 최대 청크 `index-*.js` 431kB → 적용 후 811kB로 증가. 원인: Vite/Rollup의 기본 자동 코드 스플리팅이
  이미 라우트(admin/index/login) 및 동적 import 경계를 기준으로 합리적으로 청크를 나누고 있었는데,
  `node_modules` 전체를 하나의 `vendor-core` 버킷으로 강제 통합하면서 라우트별 캐싱 경계가 무너지고
  청크 간 중복 인라인이 발생함. → **`manualChunks` 설정은 적용하지 않고 원복**.
* **결론**: 이 프로젝트 규모/구조에서는 기본 자동 청크 분할이 이미 수동 설정보다 우수함. 향후 재검토 시
  반드시 빌드 후 청크 크기를 실측 비교하고 나서 적용할 것 (수동 청크가 항상 개선이라는 보장이 없음).

#### 3) 부수 발견 — 죽은 라우트 파일 제거로 실제 번들 감소
* 조사 중 `frontend/src/routes/admin.backup.tsx`(`/admin/backup` 경로로 실제 라이브 노출되던 `admin.tsx`의
  구버전 미참조 백업 사본, 16.59kB)를 발견. 어디서도 링크되지 않았고 최신 기능(병합 업로드 등)이 반영되지
  않은 구버전 코드가 인증 없는 것으로 추정되는 경로로 노출되어 있어 **삭제**. 부수 효과로 `admin.tsx`와
  중복되던 `Step3_RunDeploy` 공유 청크가 사라지고 admin 번들이 13.35kB+16.59kB(2개 파일) → 131.07kB(1개
  파일)로 통합되어 총 산출 파일 수와 중복 코드가 줄어듦.
* `chunkSizeWarningLimit`을 임시방편으로 올려뒀던 `2500` → 실측 기준 합리적인 `1000`으로 조정(초기 로딩과
  무관한 지연 로드 청크(html2pdf 975kB)는 여전히 조용히 통과하되, 향후 실수로 1MB 넘는 동기 청크가 생기면
  다시 경고가 뜨도록 신호를 복원).

**완료 내역**: `vite.config.ts` `chunkSizeWarningLimit` 조정, `admin.backup.tsx` 삭제(+`routeTree.gen.ts`
자동 재생성), `tsc`/vitest(129개) 재확인. 상세는 [CHANGELOG.md](../CHANGELOG.md) 참조.

---

## 3. 대시보드 반응형 레이아웃 세밀화 (차트 최대 배열 갯수 제어) 기획 — ✅ 구현 완료 · 시각 검증 완료 (2026-07-16)

### ✅ 시각 검증 완료 (2026-07-16)
Playwright headless(샌드박스 내부는 localhost 접근 가능)로 `mumhwa` 대시보드를 로드해 확인 완료:
- **1920px 폭**: 그리드가 무한히 열을 늘리지 않고 중앙 정렬된 채 `maxColumns`(기본 4) 기준 ≈1316px로
  제한됨(좌우 여백으로 확인, 유령 열 없음).
- **390px 모바일**: 2열 배치가 1열로 접히고, `2x1` 넓은 차트도 단일 열로 정상 축소(`max-sm:col-span-1`).

> (이전 세션은 dev 서버(샌드박스)와 브라우저 확장 Chrome이 다른 네트워크 네임스페이스라 확인하지 못했음.
>  이번엔 샌드박스 내부에서 Playwright headless로 직접 캡처해 우회함.)

### ① 현상 및 한계점 (조사 당시)
* **현황**: 대시보드의 차트 그리드(`.chart-grid`)가 CSS Grid의 `auto-fill` 속성과 최소 가로 길이(`minmax(320px, 1fr)`)에 의존하여 모니터 크기가 커질수록 끝없이 우측으로 새로운 열(Column)을 생성하는 구조로 되어 있습니다.
* **영향**:
  * 데이터가 적은 경우 화면 우측에 커다란 빈 공간(유령 열)이 발생하는 현상이 관찰됩니다.
  * 울트라 와이드 모니터(21:9 등) 환경에서는 차트가 한 줄에 6~8개씩 과도하게 늘어서서 시각적인 밀도가 떨어지고 가독성이 저하될 수 있습니다.

### ② 실제 구현 내용 (2026-07-15)

#### 1) `frontend/src/routes/index.tsx` — CSS 레이아웃 교정 (`auto-fill` → `auto-fit`) 및 무한 팽창 방어
* 그리드 트랙을 `repeat(auto-fill, minmax(280px, 1fr))` → `repeat(auto-fit, minmax(320px, 1fr))`로 변경
  (최소 카드 폭도 280→320px로 소폭 확대).
* 컨테이너(그리드 자체)에 `mx-auto` + 인라인 `maxWidth` 스타일을 부여해 "가로 배열 최대 개수"
  (기본 4개, `cfg.layout?.maxColumns`)를 넘는 열이 생성되지 않도록 제한:
  `maxWidth = maxColumns * 320 + (maxColumns - 1) * 12`(gap-3=12px) px.
* **1400px 고정값 대신 `maxColumns` 기반 동적 계산을 채택** — 계획서의 "옵션화"(§2)를 별도 구현하는 대신
  처음부터 설정 가능한 값으로 구현하여 "고정 → 옵션화" 2단계를 1단계로 합침.

#### 2) `frontend/src/components/dashboard/ChartCard.tsx` — 카드 높이/폭 확대 및 개별 최대 폭
* `chartHeight` 200→220px, `2x2` 레이아웃 540→560px로 소폭 확대(파이 반지름도 비례 확대).
* `1x1`/`0.5x1`(단일 폭) 카드에 한해 `max-w-[560px]` 적용 — 열이 1~2개뿐이라 auto-fit이 카드를
  거대하게 늘리려 할 때의 방어선. `2x1`/`2x2`/`full`은 의도적으로 여러 열에 걸쳐야 하므로 제한하지 않음.

#### 3) 설정에서 조절 가능하도록 UI 추가 (기존에는 실제로 조절 UI 자체가 없었음)
* **재조사 발견**: `theme`/`layout` 편집을 위해 이미 작성돼 있던 `DashboardThemeCard.tsx`와
  `Step2_ConfigEditor.tsx`의 `updateTheme`/`updateLayout` 함수가 **어디에서도 실제로 연결되어 있지
  않은 죽은 코드**였음. 즉 지금까지 대시보드 테마/레이아웃을 어드민 화면에서 조절할 방법 자체가 없었음.
* `types/dashboard.ts`의 `DashboardLayout`에 `maxColumns?: number` 필드 추가.
* `ChartConfigCard.tsx`(Step2의 실제 "차트 구성" 카드, 라이브 컴포넌트)에 "가로 배열 최대 개수"
  드롭다운(2~6개, 기본 4개) 추가, `onUpdateLayout` prop으로 `Step2_ConfigEditor`의 기존
  `updateLayout` 함수와 연결.
* 따라서 사용자는 Admin Step2 "대시보드" 탭 → "차트 구성" 카드 우측 상단에서 즉시 조절 가능.

**완료 내역**: `types/dashboard.ts`, `ChartCard.tsx`, `ChartConfigCard.tsx`, `Step2_ConfigEditor.tsx`,
`routes/index.tsx` 수정. `tsc`/vitest(129개) 통과 확인. **단, 브라우저 시각 검증은 미완료**(위 안내 참조).

---

## 4. 결과물의 "정제 규칙 최신 반영 여부" 확인 불가 문제 기획

### ① 현상 및 한계점

* **조사 배경**: `mumhwa` 프로젝트에서 "주소지를 시도/시군구로 분리하는 정제 규칙(`addr_split`)이 작동하지 않는다"는 제보가 있어 확인함.
* **조사 결과**: 현재 코드(`engine/pipeline.py` + `transforms/common/address.py`)를 기준으로 `mumhwa` 프로젝트를 다시 실행해 검증한 결과, `addr_split` 변환은 **정상 동작**합니다 (1,300건 중 1,300건 도로명주소 인식, 시도 1,297건/시군구 1,293건/상세 1,296건 매칭 — 나머지는 원본 주소 표기 자체가 비정형적인 수준의 정상 오차). 즉 정제 규칙 코드 자체에는 결함이 없었습니다.
* **진짜 원인**: 사용자가 화면에서 보고 있던 `mumhwa_data.json` / `mumhwa_cleaned.xlsx`는 **예전에 한 번 실행해둔 결과물이 그대로 남아있던 것**이었고, 이후 `address_parsing` 자동 로드 로직 등 파이프라인 코드가 변경/개선된 뒤로 **한 번도 재실행되지 않은 상태**였습니다. 즉 "규칙이 고장남"이 아니라 "결과물이 최신 규칙을 반영하지 못한 채로 방치되어 있었음"이 실체입니다.
* **구조적 문제**: 현재 관리자 화면(Step2/Step3, 프로젝트 목록)에는 다음 정보가 전혀 노출되지 않습니다.
  * `config.yaml`/`dashboard.json`이 **마지막 정제 실행 이후에 수정되었는지** 여부
  * `output/*_cleaned.xlsx`가 **몇 시에 마지막으로 생성**되었는지
  * 그래서 사용자는 지금 보고 있는 결과가 "최신 설정으로 만든 결과"인지 "예전에 만들어두고 잊고 있던 결과"인지 화면만 봐서는 구분할 방법이 없습니다.

### ② 실제 구현 내용 — ✅ 완료 (2026-07-15)

#### 1) 백엔드 — `GET /api/projects/{name}/freshness` 신규 엔드포인트
* `/status`(기존 인메모리 잡 상태)를 변경하지 않고 **별도 엔드포인트**로 추가(레이어 분리 원칙 준수,
  기존 프론트 코드의 `/status` 의존을 건드리지 않기 위함).
* 응답 필드: `config_updated_at`/`dashboard_updated_at`/`output_generated_at`(모두 파일 mtime 기반 ISO
  문자열, 파일 없으면 `null`) · `has_output`(bool) · `is_stale`(bool).
* `is_stale` 판정은 문자열 비교가 아니라 **원본 `mtime` 부동소수점 타임스탬프끼리 비교**한 뒤 ISO
  문자열로 변환(isoformat은 마이크로초 유무에 따라 문자열 길이가 달라져 문자열 비교가 부정확할 수 있음).
* `output_generated_at`은 `config.yaml`의 `paths.output_dir`/`paths.output_file`을 읽어 실제 출력
  파일 경로를 계산 — 서버 재시작으로 `_pipeline_jobs` 인메모리 상태가 초기화되어도 항상 정확.
* `backend/tests/test_api.py::TestGetProjectFreshness` 6케이스 추가(245개 전체 통과).

#### 2) 프론트엔드 — 시각적 경고 배지
* **`useManagerApi.ts`**: `getProjectFreshness(name)` 함수 및 `ProjectFreshness` 타입 추가.
* **프로젝트 목록 화면(`ProjectListView`, `admin.tsx`)**: 프로젝트 목록 로드 시 전체 프로젝트의
  freshness를 병렬 조회해 `is_stale`인 행의 프로젝트명 옆에 "⚠ 설정 변경 후 미실행" 배지 노출.
* **Step3(`Step3_RunDeploy.tsx`)**: 카드 헤더에 "마지막 실행: YYYY-MM-DD HH:mm:ss" 타임스탬프를
  상시 표기(파이프라인 실행 성공 시점에 재조회하여 갱신), `is_stale`이면 실행 버튼 위에 "설정이
  변경되었습니다. 다시 실행해주세요" 경고 배너 표시.
* **공개 대시보드**: `frontend/src/routes/index.tsx:132`에 `data.meta.generated_at`이 **이미
  헤더 바에 표기되어 있음을 확인** — 별도 작업 불필요(계획서가 예상한 "이미 표기 중인 경우 재사용"
  케이스에 해당).

#### 3) 기대 효과
* "정제 규칙이 안 되는 것 같다"는 오탐 문의를 줄이고, 실제 결함과 단순 미실행(stale) 상태를 사용자 스스로 구분할 수 있게 합니다.

**완료 내역**: `backend/app/main.py`(`_mtime_info`, `get_project_freshness`), `test_api.py`(6케이스),
`useManagerApi.ts`, `admin.tsx`(`ProjectListView`), `Step3_RunDeploy.tsx` 수정. 백엔드 245개 전체 통과,
프론트 `tsc`/vitest(129개) 통과.

**✅ 시각 검증 완료 (2026-07-16)**: 백엔드를 로컬 기동(SUPABASE_URL 미설정 → 인증 자동 우회)하고,
`storage/projects/bus/`에 임시 stale 프로젝트(config.yaml이 output보다 최신)를 만들어 freshness가
`is_stale=true`를 반환하도록 구성한 뒤, Playwright headless로 로컬 세션(`sb-local-session`) 주입 →
`/admin` 로드. **프로젝트 목록의 `bus` 행에 "⚠ 설정 변경 후 미실행" 앰버 배지가 정상 표시됨을 확인**
(freshness 폴더가 없는 다른 프로젝트는 배지 없이 정상 렌더 — 404를 프론트가 안전하게 무시). 검증용
임시 프로젝트는 확인 후 제거함.

---

## 5. 정제 규칙(Transform) 자동 테스트 커버리지 공백 — ✅ 완료 (2026-07-15)

### ① 현상 및 한계점

* **조사 배경**: 4번 항목 조사 도중 "실제로 다른 정제 규칙들도 검증됐는가"를 확인하기 위해, 현재 `storage/projects/` 하위 **모든 프로젝트**(`bus`, `cli_gpu_test`, `gpu_3`, `gpu_test`, `mumhwa`, `survey`, `수의계약정보`)의 `config.yaml`에 실제로 지정된 `transform` 값을 전수 수집함.
* **실사용 중인 정제 규칙 목록**: `copy`, `exclude`, `norm_num`(normalize_number), `normalize_date`, `name_blind`(mask_name), `norm_company`/`normalize_company`, `norm_phone`/`normalize_phone`, `val_email`(validate_email), `norm_position`/`normalize_title`, `group_sum`, `date_year`, `addr_split`, `norm_date_parts`.
* **테스트 커버리지 점검**: `backend/tests/test_transforms.py`(102개, 전체 통과)를 기준으로 각 함수의 실제 테스트 여부를 확인한 결과, 아래 **5개 규칙 + 1개 통합 지점이 자동 테스트 없이(또는 부분적으로만) 운영 중**임을 확인함.
  * `normalize_date` — cli_gpu_test/survey/mumhwa 등에서 사용, 테스트 0건
  * `name_blind`(마스킹, mask_name) — cli_gpu_test/gpu_3/gpu_test/survey에서 사용. **개인정보 마스킹 기능이라 회귀 시 파급력이 가장 큼** → ✅ 완료: `TestCase19_NameBlind`(`backend/tests/test_transforms.py`) 7케이스 추가.
  * `normalize_company` — cli_gpu_test/gpu_3/gpu_test/mumhwa에서 사용, 테스트 0건 (함수는 import만 되어 있고 검증 코드 없음)
  * `normalize_phone` — cli_gpu_test/mumhwa에서 사용, 테스트 0건 (동일)
  * `norm_date_parts` — mumhwa/수의계약정보에서 사용, 테스트 0건
  * `addr_split` — mumhwa에서 사용. ~~테스트 0건~~ **(정정)** 실제로는 주소 파싱 엔진(`AddressParser.parse()`)은 `TestCase04_AddressSplit`에서 이미 테스트되고 있음. 다만 파이프라인이 만드는 딕셔너리 wrapper(파생열 `_시도`/`_시군구`/`_상세` 확장 지점)는 별도 테스트가 없어 그 부분만 공백.
  * ~~`norm_position`(normalize_title)~~ **(정정)** 최초 조사 시 테스트 파일이 `norm_position as normalize_title` 별칭으로 import하는 걸 놓쳐서 "테스트 없음"으로 잘못 보고했음. 실제로는 `TestCase05_NormalizeTitle`에 5개 케이스로 이미 검증되어 있어 **공백 목록에서 제외**.
* **수동 검증 결과**: 위 항목 전부 실제 프로젝트 원본 데이터(mumhwa, gpu_3, survey)로 직접 함수를 호출해 결과값을 대조함. 예를 들어 `name_blind('성윤미') → '성*미'`, `normalize_company('(재)서산문화재단') → '서산문화재단'`, `validate_url('www.imsilfestival.com') → 'https://www.imsilfestival.com'` 등 전부 정상 동작 확인. **현재 시점 기준으로는 코드 결함이 발견되지 않았으나, 자동 테스트가 없어 향후 회귀(regression) 발생 시 pytest로는 잡히지 않고 실사용 중에야 발견될 위험**이 있음.

### ② 실제 구현 내용 (2026-07-15)

구체적인 테스트 케이스 설계와 실제 구현 결과는 별도 계획서 [transform_test_plan.md](transform_test_plan.md)에
정리함. 요약:
* `_addr_split` 통합 지점은 **A안(리팩터링)을 채택** — `transforms/common/address.py`에
  `build_addr_parts_dict(val, sido, sigungu, detail)` 순수 함수를 신설해 `engine/pipeline.py`의
  클로저와 `address.py`의 폴백 함수 양쪽이 공유하도록 리팩터링, 캐시 동작은 그대로 보존.
- `TestCase20_NormalizeCompany`(10) · `TestCase21_NormalizePhone`(9) · `TestCase22_NormalizeDate`(11) ·
  `TestCase23_NormDateParts`(3) · `TestCase24_AddrSplitPartsDict`(4) — 총 37케이스 추가.
* 테스트 작성 중 계획서 표와 실제 코드가 다른 부분(`normalize_company(keep_corp_type=True)`의 공백
  포함 출력 등)을 발견해 실동작 기준으로 정정함. 상세는 `transform_test_plan.md` §3 참조.

**완료 내역**: `transforms/common/address.py`(`build_addr_parts_dict` 추가, `addr_split` 리팩터링),
`engine/pipeline.py`(`_addr_split` 클로저 리팩터링), `tests/test_transforms.py`(37케이스 추가).
**백엔드 전체 테스트 스위트 282개 전부 통과** (`uv run pytest`).
