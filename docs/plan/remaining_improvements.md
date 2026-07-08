# 🚀 ClearSurvey 잔여 기능 개선 및 아키텍처 기획서

본 문서는 ClearSurvey 시스템의 지속 가능한 발전과 엔터프라이즈급 안정성을 확보하기 위해 프론트엔드 및 백엔드 영역에 남겨진 **잔여 개선 사항**의 구체적인 아키텍처 설계와 구현 로드맵을 정의한 기획서입니다.

---

## 목차
1. [다중 엑셀 파일 병합(Merge)의 웹 UI 연동 기획](#1-다중-엑셀-파일-병합merge의-웹-ui-연동-기획)
2. [클라우드 스토리지 연동 (Railway Ephemeral Filesystem 대응) 기획](#2-클라우드-스토리지-연동-railway-ephemeral-filesystem-대응-기획)
3. [프론트엔드 번들 크기 최적화 (Chunk Size Warning) 기획](#3-프론트엔드-번들-크기-최적화-chunk-size-warning-기획)
4. [프론트엔드 Supabase 세션 토큰 획득 방식 개선 기획](#4-프론트엔드-supabase-세션-토큰-획득-방식-개선-기획)
5. [대시보드 반응형 레이아웃 세밀화 (차트 최대 배열 갯수 제어) 기획](#5-대시보드-반응형-레이아웃-세밀화-차트-최대-배열-갯수-제어-기획)
6. [결과물의 "정제 규칙 최신 반영 여부" 확인 불가 문제 기획](#6-결과물의-정제-규칙-최신-반영-여부-확인-불가-문제-기획)
7. [정제 규칙(Transform) 자동 테스트 커버리지 공백](#7-정제-규칙transform-자동-테스트-커버리지-공백)

---

## 1. 다중 엑셀 파일 병합(Merge)의 웹 UI 연동 기획

### ① 현상 및 한계점
* **현황**: 백엔드 엔진([merger.py](file:///c:/ai/clearsurvey/backend/engine/merger.py)) 및 CLI 명령어(`uv run main.py merge`)를 통해서는 여러 파일 병합 설정(yaml)을 처리할 수 있으나, 웹 UI(Step 1 ~ Step 3)의 프로젝트 생성 화면은 오직 단일 파일 업로드만 지원하여 다중 소스 취합 작업을 웹 브라우저에서 수행할 수 없는 한계가 있습니다.

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

## 2. 클라우드 스토리지 연동 (Railway Ephemeral Filesystem 대응) 기획

### ① 현상 및 한계점
* **현황**: GCP Cloud Run, AWS Fargate, Railway 등 무상태(Stateless) 컨테이너 클라우드 환경에서는 컨테이너 롤링 배포 및 인스턴스 재구동 시 로컬 디스크 `/storage` 하위에 적재된 업로드 파일 및 요약 보고서 파일이 전량 소실되는 Ephemeral Filesystem 한계를 가지고 있습니다.
* **영향**: 사용자 데이터 유실 및 다운로드 에러가 동반됩니다.

### ② 아키텍처 및 구현 설계

```
┌────────────────────────────────────────────────────────┐
│                   StorageEngine (I/F)                  │
│  + upload_file(path, data)                             │
│  + download_file(path) -> bytes                        │
└───────────────────────────┬────────────────────────────┘
                            │ (구현체 분기)
            ┌───────────────┴───────────────┐
            ▼                               ▼
  LocalStorageEngine              SupabaseStorageEngine
  (로컬 디스크 보존)              (Supabase Bucket 원격 저장)
```

#### 1) 스토리지 추상화 인터페이스 (Storage Engine Interface) 도입
* 백엔드 내에 파일 IO를 로컬 디스크에 하드코딩하지 않고 추상화된 스토리지 인터페이스인 `StorageEngine`을 수립합니다.
* 환경 변수 `STORAGE_PROVIDER` (값: `local` 또는 `supabase`)에 따라 구동 시점에 의존성 주입(Dependency Injection)을 처리합니다.

#### 2) Supabase Storage 연동 프로세스
* **파일 업로드**: 사용자가 엑셀 파일을 업로드하면, 백엔드는 해당 바이너리를 로컬 디스크가 아닌 Supabase Storage 버킷 `clearsurvey-raw`에 저장합니다.
* **정제 실행 (Pipeline Run)**: 
  * 파이프라인 구동 시점에 Supabase Storage로부터 Raw 엑셀 바이너리를 스트림으로 로드하여 `openpyxl` 및 `pandas` 메모리에 이식합니다.
  * 정제가 끝난 `cleaned.xlsx` 결과물 역시 `clearsurvey-projects/{projectName}/cleaned_result.xlsx` 위치로 직접 업로드(Upload)합니다.
* **결과 다운로드**: 프론트엔드가 다운로드 요청 시, 백엔드를 경유하지 않고 Supabase Storage의 **보안 다운로드 서명 URL (Presigned URL)**을 직접 발급받아 프론트엔드 브라우저에서 다운로드가 실행되게 설계하여 백엔드 대역폭 부하를 최소화합니다.

---

## 3. 프론트엔드 번들 크기 최적화 (Chunk Size Warning) 기획

### ① 현상 및 한계점
* **현황**: React 컴파일 및 빌드 시 `html2pdf.js` (약 975kB) 및 `supabase-js` (약 208kB) 등 고용량 외부 라이브러리들로 인해 번들러(Vite/Rollup)가 "Some chunks are larger than 500 kB" 경고를 발생시킵니다.
* **영향**: 초기 웹 서비스 접속 시 무거운 벤더 스크립트 파일을 한 번에 내려받아야 하므로 페이지 로딩 성능 저하를 초래합니다.

### ② 아키텍처 및 구현 설계

#### 1) Rollup Manual Chunks 최적화
* `frontend/vite.config.ts` 파일의 `rollupOptions` 설정을 정교화하여 덩치가 큰 외부 패키지들을 메인 번들 스크립트 `index.js`에서 독립된 별도의 벤더 청크 파일로 물리적 분리 처리를 수행합니다.
```typescript
// vite.config.ts 예시
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('html2pdf.js')) return 'vendor-pdf';
            if (id.includes('@supabase')) return 'vendor-supabase';
            return 'vendor-core';
          }
        }
      }
    }
  }
});
```

#### 2) 동적 import (Lazy Loading) 기법 이식
* **대시보드 PDF 인쇄 모듈**: `html2pdf.js` 라이브러리는 사용자가 상세 드로어 화면을 열어 **[PDF로 저장]** 단추를 누르는 특정 이벤트 시점에만 활용됩니다.
* **최적화**: 컴파일 시 최상단에서 정적 `import`를 수행하지 않고, 버튼 클릭 시 실행되는 함수 내에서 `const html2pdf = (await import('html2pdf.js')).default` 형태의 비동기 동적 임포트를 탑재합니다.
* **효과**: 초기 로딩 청크에서 1MB에 달하는 PDF 변환 스크립트가 완전히 제외되므로 대시보드 로딩 응답 성능이 수백% 가량 향상됩니다.

---

## 4. 프론트엔드 Supabase 세션 토큰 획득 방식 개선 기획

### ① 현상 및 한계점
* **현황**: `useManagerApi.ts`에서 API 인증 헤더에 기입할 Bearer JWT 토큰을 획득하기 위해 브라우저 `localStorage` 전체를 루프 돌며 `"sb-*-auth-token"` 문자열 키를 직접 발굴 및 디코딩하여 파싱하는 우회 방식을 취하고 있습니다.
* **영향**: Supabase JS SDK 라이브러리의 버전 업그레이드 시 내부 로컬 스토리지 보존 키 포맷이 변경되면, 토큰 획득 메커니즘 전체가 예고 없이 마비될 수 있는 구조적 취약성을 내포합니다.

### ② 아키텍처 및 구현 설계

#### 1) 정합적인 세션 구독(Subscription) 체계로의 대전환
* Supabase SDK가 정형적으로 지원하는 `supabase.auth` 세션 수명 제어 인터페이스를 전면 차용합니다.

#### 2) 구현 메커니즘
* **세션 상태 및 구독 수립**:
  * 프론트엔드 진입 최상위 계층(`admin.tsx` 또는 전역 `AuthContext`)에서 Supabase Auth 세션 상태를 리액트 state로 저장 관리합니다.
  * 마운트 시점에 `supabase.auth.getSession()`을 1회 조회해 세션을 수집하고, `supabase.auth.onAuthStateChange` 이벤트를 구독하여 로그인/로그아웃/토큰 만료 재발급 등의 변화를 유기적으로 리액트 상태에 반영합니다.
* **인증 래퍼 연동**:
  * `useManagerApi.ts` 내 `getLocalAccessToken` 함수는 이제 더 이상 `localStorage` 루프를 돌지 않고, 메모리상에 유지되는 Supabase Client 세션 객체(`session.access_token`)를 직접 조회해 헤더에 탑재합니다.
  * 토큰이 만료(Expired)되어 만료 시간이 지난 경우 Supabase SDK 내부가 제공하는 토큰 자동 갱신(Refresh Token) 기법이 유기적으로 백그라운드 작동하므로, 401 인증 유실 없이 지속적인 API 어드민 연동이 보장됩니다.

---

## 5. 대시보드 반응형 레이아웃 세밀화 (차트 최대 배열 갯수 제어) 기획

### ① 현상 및 한계점
* **현황**: 대시보드의 차트 그리드(`.chart-grid`)가 CSS Grid의 `auto-fill` 속성과 최소 가로 길이(`minmax(320px, 1fr)`)에 의존하여 모니터 크기가 커질수록 끝없이 우측으로 새로운 열(Column)을 생성하는 구조로 되어 있습니다.
* **영향**:
  * 데이터가 적은 경우 화면 우측에 커다란 빈 공간(유령 열)이 발생하는 현상이 관찰됩니다.
  * 울트라 와이드 모니터(21:9 등) 환경에서는 차트가 한 줄에 6~8개씩 과도하게 늘어서서 시각적인 밀도가 떨어지고 가독성이 저하될 수 있습니다.

### ② 아키텍처 및 구현 설계

#### 1) CSS 레이아웃 교정 (`auto-fill` -> `auto-fit`) 및 무한 팽창 방어
* **문제 정의**: 우측 빈 공간 문제 해결을 위해 단순히 `.chart-grid`의 속성을 `repeat(auto-fit, minmax(320px, 1fr))`로 수정할 경우, 등록된 차트가 1~2개뿐일 때 화면 전체 폭(예: 1920px)으로 1개의 차트가 거대하게 늘어나는(Gigantic Chart) 치명적인 부작용이 발생합니다.
* **하이브리드 해결책**: 
  1. `auto-fit`을 사용하여 우측의 불필요한 유령 여백을 제거하고 남는 공간을 꽉 채우도록 유도합니다.
  2. 동시에 개별 차트 카드(`.chart-card`)에 `max-width: 500px;` 와 같은 최대 팽창 한계치를 부여합니다.
  3. 이를 통해 차트가 부드럽게 팽창하여 빈 공간을 메우다가도 한계치(500px)에 도달하면 성장을 멈추고 중앙 정렬 및 여백을 자연스럽게 형성하도록 세밀하게 제어합니다.

#### 2) 가로 배열 최대치 강제 (전체 컨테이너 제한 및 옵션화)
* **컨테이너 제한법**: 화면이 무한정 넓어져도 차트 그리드가 들어가는 메인 탭 패널 컨테이너(`.tab-panel` 또는 `.chart-grid`) 자체에 `max-width: 1400px; margin: 0 auto;`를 부여하여 한 줄에 최대 3~4개의 차트만 고정 배열되도록 제어합니다.
* **옵션 제공**: 차후 `dashboard.json` 설정 파일에 `max_columns: 3` 등의 속성을 추가 주입받아, 리액트 컴포넌트(`DashboardViewer.tsx`)에서 인라인 스타일로 `gridTemplateColumns: repeat(3, 1fr)` 등을 동적 적용하는 방안을 고려합니다.

---

## 6. 결과물의 "정제 규칙 최신 반영 여부" 확인 불가 문제 기획

### ① 현상 및 한계점

* **조사 배경**: `mumhwa` 프로젝트에서 "주소지를 시도/시군구로 분리하는 정제 규칙(`addr_split`)이 작동하지 않는다"는 제보가 있어 확인함.
* **조사 결과**: 현재 코드(`engine/pipeline.py` + `transforms/common/address.py`)를 기준으로 `mumhwa` 프로젝트를 다시 실행해 검증한 결과, `addr_split` 변환은 **정상 동작**합니다 (1,300건 중 1,300건 도로명주소 인식, 시도 1,297건/시군구 1,293건/상세 1,296건 매칭 — 나머지는 원본 주소 표기 자체가 비정형적인 수준의 정상 오차). 즉 정제 규칙 코드 자체에는 결함이 없었습니다.
* **진짜 원인**: 사용자가 화면에서 보고 있던 `mumhwa_data.json` / `mumhwa_cleaned.xlsx`는 **예전에 한 번 실행해둔 결과물이 그대로 남아있던 것**이었고, 이후 `address_parsing` 자동 로드 로직 등 파이프라인 코드가 변경/개선된 뒤로 **한 번도 재실행되지 않은 상태**였습니다. 즉 "규칙이 고장남"이 아니라 "결과물이 최신 규칙을 반영하지 못한 채로 방치되어 있었음"이 실체입니다.
* **구조적 문제**: 현재 관리자 화면(Step2/Step3, 프로젝트 목록)에는 다음 정보가 전혀 노출되지 않습니다.
  * `config.yaml`/`dashboard.json`이 **마지막 정제 실행 이후에 수정되었는지** 여부
  * `output/*_cleaned.xlsx`가 **몇 시에 마지막으로 생성**되었는지
  * 그래서 사용자는 지금 보고 있는 결과가 "최신 설정으로 만든 결과"인지 "예전에 만들어두고 잊고 있던 결과"인지 화면만 봐서는 구분할 방법이 없습니다.

### ② 아키텍처 및 구현 설계

#### 1) 백엔드 — 최신성 판정 API
* `GET /api/projects/{name}/status`(또는 신규 `/freshness` 엔드포인트)에 다음 필드를 추가합니다.
  * `config_updated_at`: `config.yaml` 파일의 mtime
  * `dashboard_updated_at`: `dashboard.json` 파일의 mtime
  * `output_generated_at`: `output/{name}_cleaned.xlsx` 파일의 mtime (이미 `_job_get()`의 `finished_at`으로 일부 커버되나, 서버 재시작 시 `_pipeline_jobs` 인메모리 상태가 초기화되므로 파일 mtime 기반으로 별도 판정 필요)
  * `is_stale`: `config_updated_at`/`dashboard_updated_at`이 `output_generated_at`보다 최신이면 `true`

#### 2) 프론트엔드 — 시각적 경고 배지
* **프로젝트 목록 화면(`ProjectListView`)**: 각 프로젝트 행에 "⚠ 설정 변경 후 미실행" 배지를 추가로 노출.
* **Step3(정제 실행 화면)**: 정제 성공 카드 상단에 "마지막 실행: YYYY-MM-DD HH:mm" 타임스탬프를 상시 표기하고, `is_stale`이 true면 "설정이 변경되었습니다. 다시 실행해주세요" 안내 문구를 강조 표시.
* **공개 대시보드**: 게시된 대시보드 하단 푸터에 데이터 생성 시각을 이미 일부 프로젝트에서 표기하고 있다면 그대로 재사용하고, 없다면 `meta.generated_at`(이미 `exporter.py`가 기록 중)을 노출.

#### 3) 기대 효과
* "정제 규칙이 안 되는 것 같다"는 오탐 문의를 줄이고, 실제 결함과 단순 미실행(stale) 상태를 사용자 스스로 구분할 수 있게 합니다.

---

## 7. 정제 규칙(Transform) 자동 테스트 커버리지 공백

### ① 현상 및 한계점

* **조사 배경**: 6번 항목 조사 도중 "실제로 다른 정제 규칙들도 검증됐는가"를 확인하기 위해, 현재 `storage/projects/` 하위 **모든 프로젝트**(`bus`, `cli_gpu_test`, `gpu_3`, `gpu_test`, `mumhwa`, `survey`, `수의계약정보`)의 `config.yaml`에 실제로 지정된 `transform` 값을 전수 수집함.
* **실사용 중인 정제 규칙 목록**: `copy`, `exclude`, `norm_num`(normalize_number), `normalize_date`, `name_blind`(mask_name), `norm_company`/`normalize_company`, `norm_phone`/`normalize_phone`, `val_email`(validate_email), `norm_position`/`normalize_title`, `group_sum`, `date_year`, `addr_split`, `norm_date_parts`.
* **테스트 커버리지 점검**: `backend/tests/test_transforms.py`(102개, 전체 통과)를 기준으로 각 함수의 실제 테스트 여부를 확인한 결과, 아래 **5개 규칙 + 1개 통합 지점이 자동 테스트 없이(또는 부분적으로만) 운영 중**임을 확인함.
  * `normalize_date` — cli_gpu_test/survey/mumhwa 등에서 사용, 테스트 0건
  * `name_blind`(마스킹, mask_name) — cli_gpu_test/gpu_3/gpu_test/survey에서 사용, 테스트 0건 (import조차 안 됨). **개인정보 마스킹 기능이라 회귀 시 파급력이 가장 큼**
  * `normalize_company` — cli_gpu_test/gpu_3/gpu_test/mumhwa에서 사용, 테스트 0건 (함수는 import만 되어 있고 검증 코드 없음)
  * `normalize_phone` — cli_gpu_test/mumhwa에서 사용, 테스트 0건 (동일)
  * `norm_date_parts` — mumhwa/수의계약정보에서 사용, 테스트 0건
  * `addr_split` — mumhwa에서 사용. ~~테스트 0건~~ **(정정)** 실제로는 주소 파싱 엔진(`AddressParser.parse()`)은 `TestCase04_AddressSplit`에서 이미 테스트되고 있음. 다만 파이프라인이 만드는 딕셔너리 wrapper(파생열 `_시도`/`_시군구`/`_상세` 확장 지점)는 별도 테스트가 없어 그 부분만 공백.
  * ~~`norm_position`(normalize_title)~~ **(정정)** 최초 조사 시 테스트 파일이 `norm_position as normalize_title` 별칭으로 import하는 걸 놓쳐서 "테스트 없음"으로 잘못 보고했음. 실제로는 `TestCase05_NormalizeTitle`에 5개 케이스로 이미 검증되어 있어 **공백 목록에서 제외**.
* **수동 검증 결과**: 위 항목 전부 실제 프로젝트 원본 데이터(mumhwa, gpu_3, survey)로 직접 함수를 호출해 결과값을 대조함. 예를 들어 `name_blind('성윤미') → '성*미'`, `normalize_company('(재)서산문화재단') → '서산문화재단'`, `validate_url('www.imsilfestival.com') → 'https://www.imsilfestival.com'` 등 전부 정상 동작 확인. **현재 시점 기준으로는 코드 결함이 발견되지 않았으나, 자동 테스트가 없어 향후 회귀(regression) 발생 시 pytest로는 잡히지 않고 실사용 중에야 발견될 위험**이 있음.

### ② 아키텍처 및 구현 설계

구체적인 테스트 케이스 설계와 우선순위, 파일 구조는 별도 계획서
[transform_test_plan.md](transform_test_plan.md)에 정리함. 요약:
* 우선순위는 **`name_blind`(개인정보 마스킹) → `_addr_split` 통합 지점/`norm_date_parts`(파생열, 최근 버그 이력 있음) → `normalize_company`/`normalize_phone`/`normalize_date`** 순으로 제안.
* `_addr_split` 통합 지점은 현재 `engine/pipeline.py`의 클로저 안에 로직이 갇혀 있어 직접 단위 테스트가 어려운 구조라, 순수 함수로 분리하는 리팩터링을 선행할지 여부를 먼저 결정해야 함.
