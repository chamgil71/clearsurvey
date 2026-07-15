# Changelog

All notable changes to the ClearSurvey project will be documented in this file.

## [2026-07-15] 정제 파이프라인 성능 개선 및 대시보드 필터/차트 UX 수정

### Fixed
- **`backend/engine/pipeline.py::_sheet_to_dataframe`**: 원본 엑셀을 `ws.cell(r, c).value` 셀 단위로
  읽던 로직을 `ws.iter_rows(values_only=True)`로 교체. 15,424행×39열(상가정보) 기준 실측 536초 → 0.48초로
  약 1,100배 단축 — "정제하는데 시간이 너무 오래걸린다"는 문제의 근본 원인. 값 동일성은 500행 직접
  대조로 검증(출력 완전 동일, Cleaned/원본 시트·JSON export 등 하위 로직은 무변경).
- **`frontend/src/components/dashboard/FilterBar.tsx`**: 필터 컬럼의 고유값이 150개
  (`exporter.py::_FILTER_UNIQUE_CAP`)를 넘어 백엔드가 `aggregates`를 생략하면 드롭다운에 옵션이 하나도
  없이 비어 보이던 문제(예: 상권업종소분류명 239종, 표준산업분류명 249종). `aggregates`가 없는 컬럼은
  자유 텍스트 검색 입력으로 대체(값은 자동으로 `*값*` 와일드카드로 감싸 `matchesPattern`의 부분일치
  경로를 재사용, 사용자가 와일드카드 문법을 몰라도 부분 검색 동작).
- **`frontend/src/components/dashboard/ChartCard.tsx`**: numeric 타입 컬럼은 무조건 클릭 교차필터에서
  제외하던 로직 때문에, 연도(`_년` 파생열)처럼 정수값이지만 실질은 이산 카테고리인 차트를 클릭해도
  필터가 걸리지 않던 문제(mumhwa 프로젝트 연도차트에서 발견). `unique_count`가 40 이하인 numeric 컬럼은
  이산 카테고리로 간주해 클릭 필터를 허용(금액 등 진짜 연속형 수치는 그대로 제외).

### Changed
- **`backend/engine/exporter.py`**: `json.dump(..., indent=2)` → `separators=(",", ":")`로 압축 출력
  변경(프론트가 그대로 fetch해서 파싱하는 정적 데이터라 들여쓰기가 불필요 — 원본 3MB xlsx 대비
  `sangga_data.json`이 26MB로 부풀던 원인 중 하나). 실측 24.8MB → 19.4MB(약 21.6% 절감). numeric
  컬럼도 고유값이 40개 이하면 `unique_count`를 함께 내보내도록 추가(위 ChartCard 수정의 전제 데이터).
- **`frontend/src/types/dashboard.ts`**: `ColumnMeta.unique_count?: number` 필드 추가.
- **`frontend/.prettierrc`**: `endOfLine: "auto"` 추가. Windows `core.autocrlf=true`로 체크아웃된
  CRLF와 Prettier 기본값(`lf`)이 충돌해 ESLint가 열어보는 모든 파일의 모든 줄에서 `␍` 삭제를 요구하던
  노이즈 제거(`.gitattributes` 부재로 인한 근본 원인 — 저장소 전체 재정규화는 범위 밖, 필요 시 별도 진행).
- **`frontend/src/routes/index.tsx`**: 헤더 로고 텍스트 `Survey` → `ClearSurvey`. `<span>` →
  `<button onClick={() => window.location.reload()}>`로 변경해 클릭 시 새로고침되도록 함.

**결과**: 백엔드 282개, 프론트 71개 테스트 및 `tsc --noEmit` 전부 통과.

## [2026-07-15] Transform 테스트 커버리지 공백 해소 (마지막 5개 항목)

### Added
- **`backend/tests/test_transforms.py`**: `TestCase20_NormalizeCompany`(10)·
  `TestCase21_NormalizePhone`(9)·`TestCase22_NormalizeDate`(11)·`TestCase23_NormDateParts`(3)·
  `TestCase24_AddrSplitPartsDict`(4) 총 37케이스 추가. `docs/plan/transform_test_plan.md`가 지목한
  마지막 테스트 공백(5개 함수 + 1개 통합 지점)을 전부 해소.
- **`transforms/common/address.py::build_addr_parts_dict(val, sido, sigungu, detail)`**: `addr_split`
  파생열 dict 조립 로직을 순수 함수로 분리(계획서 A안 채택). `AddressParser`/`SurveyConfig` 없이도
  리터럴 문자열만으로 단위 테스트 가능.

### Changed
- **`engine/pipeline.py`**: `_addr_split` 클로저가 직접 dict를 조립하던 것을 `build_addr_parts_dict`
  호출로 교체(기존 `_parse_cached` 캐시는 그대로 유지, 동작 변경 없음).
- **`transforms/common/address.py::addr_split()`**: 폴백 함수도 동일하게 `build_addr_parts_dict`를
  사용하도록 리팩터링해 두 경로 간 dict 조립 로직 중복 제거.

### Fixed (계획서 표기 오류 정정)
- `normalize_company(val, keep_corp_type=True)`의 실제 출력은 `f"{abbr} {item}"` 코드 그대로
  약어와 항목 사이에 공백이 들어가 `"(주) 카카오"`가 되는데, `transform_test_plan.md`의 예시 표는
  공백 없는 `"(주)카카오"`로 잘못 기재되어 있었음. 테스트는 실제 동작 기준으로 작성.

**결과**: 백엔드 전체 테스트 스위트 245→**282개 전부 통과**.

## [2026-07-15] 정제 결과 최신성(stale) 배지 추가

### Added
- **`GET /api/projects/{name}/freshness`**: `config.yaml`/`dashboard.json`이 마지막 정제 실행
  이후 수정되었는지(`is_stale`)를 파일 mtime 기반으로 판정하는 신규 엔드포인트. 서버 재시작으로
  인메모리 잡 상태가 사라져도 항상 정확하게 동작.
- **`useManagerApi.ts::getProjectFreshness`**: 위 엔드포인트 호출 함수 및 `ProjectFreshness` 타입.
- **`ProjectListView`(`admin.tsx`)**: 프로젝트 목록의 각 행에 "⚠ 설정 변경 후 미실행" 배지 추가
  (전체 프로젝트 freshness를 병렬 조회).
- **`Step3_RunDeploy.tsx`**: "마지막 실행: YYYY-MM-DD HH:mm:ss" 타임스탬프 상시 표기 및 설정 변경 시
  "다시 실행해주세요" 경고 배너 추가.
- **`backend/tests/test_api.py::TestGetProjectFreshness`**: 6개 테스트 케이스 추가(245개 전체 통과).

### Verified (변경 없음)
- 공개 대시보드(`routes/index.tsx:132`)에는 `data.meta.generated_at`이 이미 헤더에 표기되어 있어
  추가 작업 불필요함을 확인.

### Known Limitation
- 브라우저 시각 검증 미완료(직전 항목과 동일한 세션 네트워크 제약). `tsc`/vitest(129개), 백엔드
  245개는 통과.

## [2026-07-15] 대시보드 차트 그리드 레이아웃 개선 및 가로 배열 개수 설정 추가

### Added
- **`types/dashboard.ts::DashboardLayout.maxColumns`**: 대시보드 차트 그리드의 가로 배열 최대 개수를
  `dashboard.json`에서 설정 가능하도록 필드 추가(기본값 4).
- **`ChartConfigCard.tsx`**: "차트 구성" 카드 우측 상단에 "가로 배열 최대 개수"(2~6개) 드롭다운 추가,
  `Step2_ConfigEditor.tsx`의 기존 `updateLayout` 함수와 연결.

### Changed
- **`routes/index.tsx`**: 차트 그리드를 `auto-fill` → `auto-fit`으로 전환(우측 유령 여백 제거), 최소
  카드 폭 280→320px 확대, 컨테이너에 `maxColumns` 기반 `max-width`를 부여해 화면이 아무리 넓어도
  기본 4열을 넘지 않도록 제한.
- **`ChartCard.tsx`**: 차트 높이 200→220px(2x2는 540→560px)로 소폭 확대, `1x1`/`0.5x1` 카드에
  `max-w-[560px]` 적용해 열이 적을 때 단일 카드가 과도하게 늘어나는 것을 방지.

### Fixed (부수 발견)
- **죽은 코드 발견**: `DashboardThemeCard.tsx`(테마/레이아웃 편집 UI)와 `Step2_ConfigEditor.tsx`의
  `updateTheme`/`updateLayout` 함수가 실제로는 어디에도 연결되지 않아, 지금까지 대시보드 테마/레이아웃을
  어드민 화면에서 조절할 방법이 전혀 없었음. 이번 `maxColumns` 설정은 (죽어있던 `DashboardThemeCard`가
  아니라) 실제로 쓰이는 `ChartConfigCard.tsx`에 연결하여 처음으로 실사용 가능하게 만듦. 나머지
  테마/배너/목록뷰 설정 UI 연결은 이번 범위 밖(추후 별도 확인 필요).

### Known Limitation
- 이 세션에서는 로컬 dev 서버(샌드박스)와 브라우저 확장이 연결된 Chrome이 네트워크적으로 분리되어 있어
  실제 브라우저 화면 확인을 하지 못함. `tsc`/vitest(129개)는 통과. 사용자가 `bun dev`로 직접 확인 필요.

## [2026-07-15] 번들 크기 점검 및 죽은 라우트 제거

### Removed
- **`frontend/src/routes/admin.backup.tsx`**: 어디서도 참조되지 않는 `admin.tsx`의 구버전 백업 사본.
  TanStack Router 파일 기반 라우팅 특성상 `/admin/backup` 경로로 실제 빌드에 포함되어 라이브 노출되고
  있었음(최신 병합 업로드 기능 등이 반영되지 않은 구코드). 삭제 후 `routeTree.gen.ts` 자동 재생성.
  부수 효과로 `admin.tsx`와 중복되던 `Step3_RunDeploy` 공유 청크가 사라지고 admin 번들이 2개 파일(약
  30kB) → 1개 파일(131kB, 순수 admin 전용)로 통합됨.

### Changed
- **`frontend/vite.config.ts`**: `chunkSizeWarningLimit`을 임시방편으로 올려뒀던 `2500` → 실측 기준
  `1000`으로 조정. `html2pdf.js`(975kB)는 `DetailPanel.tsx`에서 이미 동적 import로 지연 로드되고
  있어(초기 로딩 무관) 여전히 조용히 통과하되, 향후 실수로 1MB 넘는 동기 청크가 생기면 경고가 뜨도록 신호 복원.

### Investigated (변경 없음)
- Rollup `manualChunks`로 `html2pdf.js`/`@supabase`/`recharts`를 명시적 벤더 청크로 분리 시도 →
  최대 청크가 431kB→811kB로 오히려 악화되어 롤백. Vite 기본 자동 청크 분할이 이미 라우트/동적 import
  경계를 기준으로 이 프로젝트에는 더 적합함을 확인.

## [2026-07-15] 다중 엑셀 파일 병합 웹 UI 연동 완료

### Fixed
- **`admin.tsx` — 병합 업로드 화면 미연결 버그**: 백엔드 `POST /api/projects/create-merge` 엔드포인트와
  `Step1_ProjectUpload`의 병합 UI, `useManagerApi.createMergeProject`는 이미 각각 구현되어 있었으나
  `admin.tsx`가 `Step1_ProjectUpload`에 `onCreateMergeProject` prop을 전달하지 않아 실제로는
  "병합 기능 API가 지원되지 않는 백엔드입니다" 오류가 발생하던 문제를 수정. `handleCreateMergeProject`
  핸들러를 추가하고 prop을 연결함. 같은 자리에서 단일 업로드(`handleCreateProject`)가
  `copyFromProject` 인자를 누락하던 것도 함께 수정.
- **`backend/app/main.py::create_merge_project` — `UnboundLocalError`**: `copy_from_project`
  분기 안에서만 `import yaml`을 호출하던 코드 때문에, 해당 분기를 타지 않는 일반 병합 경로(가장 흔한
  케이스)에서 `cannot access local variable 'yaml'`로 500 에러가 발생하던 실제 버그를 발견 및 수정.
  (`yaml`은 이미 파일 상단에서 import되어 있어 중복 import 제거로 해결.)

### Added
- `backend/tests/test_api.py::TestCreateMergeProject` — 병합 성공, draft/config 생성 검증, 파일 1개 시
  거부, 잘못된 프로젝트명 거부, 잘못된 options JSON 거부까지 5개 테스트 케이스 추가 (239개 전체 통과).

## [2026-07-09] Step2 설정 테이블 디자인 개선 (가독성·평면화)

### Changed
- **설정 편집기(`Step2_ConfigEditor`) 컬럼 정제 정의 테이블 — 디자인 구성만 개선 (로직/핸들러 불변)**
  - 방향: `new-beginnings` 템플릿의 "여백·평면·좌정렬" 구성 원칙을 clearsurvey의 `@theme` 토큰(`bg-muted`·`border-border`·`text-muted-foreground` 등)으로 재표현.
  - **헤더**: 폰트 `text-[11px]→text-xs`, 고정 픽셀폭 → 텍스트 열은 `min-w`(가변)·좁은 열만 고정, 이름/규칙/인수 열 **좌정렬**, `py-3` 여백, `text-muted-foreground`.
  - **본문**: `text-xs→text-sm`, 셀 여백 `p-1/p-2 → px-3 py-3 align-top`, 인풋 `h-8→h-9`, 셀렉트 `p-1.5 text-xs → p-2 rounded-md text-sm`.
  - **초소형 요소 제거**: `text-[10px]→text-[11px]`(잔존 0), 체크박스 `scale-90` 제거, 순서 이동 버튼 `h-5→h-6`.
  - **행 구분 강화**: `hover:bg-muted/30` + `border-b border-border/60`.
  - ⚠ 스타일 시스템 차이(new-beginnings=순수 CSS / clearsurvey=Tailwind+@theme) 때문에 클래스 복붙이 아니라 **구성 원칙만 차용**해 토큰으로 재표현.

### 남은 작업
- shell(사이드바·헤더)의 과한 그라디언트·그림자·`animate-pulse` 차분화는 후속(사용자 선택: "설정 테이블부터").
- 런타임/타입체크 미검증(로컬 툴체인 부재) → `npm run dev`로 확인 필요.

## [2026-07-07] Dashboard UI & Layout Engine Improvements

### Added
- **2D Grid Spanning (차트 레이아웃 커스터마이징)**
  - 대시보드 시각화 차트에 `layout` 속성을 도입하여 1차원 Flexbox 기반 나열을 진정한 2차원 CSS Grid (`grid-auto-flow: dense`) 방식으로 업그레이드했습니다.
  - 어드민 설정 화면에서 특정 차트의 크기를 `가로 2배(2:1)`, `가로세로 2배(2:2)` 등으로 자유롭게 설정할 수 있도록 "차트 너비(비율)" 드롭다운 UI를 추가했습니다.
  - 도넛 차트의 경우 `2:2` 사이즈 설정 시, 카드의 세로 높이가 540px로 대폭 확장되며 `PieChart` 의 반지름(`innerRadius`, `outerRadius`) 역시 비례해서 크게 렌더링되도록 차트 컴포넌트(`ChartCard`)를 개선했습니다.

### Fixed
- **Admin UI Layout Fixes**
  - 어드민 설정 편집기(`Step2_ConfigEditor`)에서 다중 분석 열 리스트가 넘쳐 짤리는 문제를 해결했습니다.
  - "시각화 차트 삭제(휴지통)" 버튼이 화면이 좁을 때 밑으로 밀려 가려지던 문제를, 가시성이 높은 상단 헤더 우측(순서 이동 버튼 옆)으로 위치를 이동시켜 해결했습니다.
  - "핵심 스탯", "시각화 차트" 등의 카드 단위 UI 제목 텍스트 크기를 키우고(`text-base font-bold`) 전용 배경색으로 강조하여 설정 폼 내 시인성을 크게 높였습니다.
  - `admin.tsx` 의 좌측 내비게이션 메뉴 간격 및 레이아웃 문제를 하드코딩된 인라인 스타일 대신 Tailwind CSS 클래스를 일관되게 적용하여 리팩토링했습니다.

- **Frontend CSS Load & Build Bugs**
  - Vite HMR 환경에서 TailwindCSS 플러그인 충돌로 인해 루트 컴포넌트(`__root.tsx`)의 CSS가 적용되지 않아 쌩 HTML이 노출되던 크래시 현상을 롤백 후 해결했습니다.
  - 공개 대시보드용 `legacy-dashboard.css` 가 의도치 않게 삭제되어 기존 레이아웃이 박살났던 문제를 즉시 원상복구시키고, 향후 Tailwind 환경과의 공존을 위해 `index.tsx` 스코프에서 안정적으로 로딩되도록 재설정했습니다.
  - `Step2_ConfigEditor` 내부의 잘못된 JSX 태그 매칭(`</select>` 중복)으로 인한 렌더링 크래시를 `tsc` 를 이용한 타입 검증을 거쳐 완벽하게 수정했습니다.
