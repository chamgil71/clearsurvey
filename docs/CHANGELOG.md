# Changelog

All notable changes to the ClearSurvey project will be documented in this file.

## [2026-07-17] 프론트엔드 패키지 업그레이드 (recharts 3 · lucide 1 · vite 8)

계획: [plan/package_upgrade_plan.md](plan/package_upgrade_plan.md). 메이저는 각각 별도 커밋으로 진행했다.

### Changed
- **`recharts` 2.15.4 → 3.9.2**: `<Cell />`이 deprecated(4.0 제거 예정)되어 걷어냈다. 공식 권장
  대체재는 `shape` prop이나, 적용해보니 **범례 payload에 색이 실리지 않아 범례 견본이 전부
  회색(`#808080`)으로 죽는 회귀**가 발생했다(타입·테스트·빌드는 모두 통과해 브라우저로만 발견됨).
  → 데이터에 `fill`을 싣는 방식으로 선회 — 조각·막대·범례가 한 번에 같은 색을 쓰고 커스텀 shape
  컴포넌트도 불필요하다. 타입 시그니처 변경 2건 대응(`PieLabelRenderProps`의 optional `name`/
  `percent`, Tooltip `Formatter`가 value를 number로 좁혀주지 않음).
- **`lucide-react` 0.575.0 → 1.24.0**: 1.0에서 상표 문제로 브랜드 아이콘이 전면 제거됐다. 사용 중인
  37종 중 `<Github />` 1건만 해당됐고 나머지 36종은 무영향. 로그인 화면의 GitHub OAuth 버튼은
  아이콘 하나 때문에 패키지를 들이는 대신 로컬 SVG 컴포넌트(`login.tsx::GithubMark`)로 대체했다.
- **`vite` 7.3.2 → 8.1.4**: 번들러가 Rollup/esbuild → Rolldown/Oxc로 교체됐으나 설정 영향은 없었다
  (`build.rollupOptions` 미사용, `post-build.js`는 출력 구조에만 의존). `@vitejs/plugin-react`는
  6.0.3이 `vite ^8.0.0`을 peer로 요구해 5 → 6 동반 상향.
- **SAFE 등급 일괄 상향**: react/react-dom 19.2.7, tailwindcss 4.3.2, `@tanstack/react-router`
  1.170.18 · react-start 1.168.28 · router-plugin 1.168.20 · react-query 5.101.2,
  supabase-js 2.110.5, Radix UI 26종. tailwindcss 4.3.3 등 일부는 `bunfig.toml`의 24시간 공급망
  가드(`minimumReleaseAge`)에 걸려 **가드를 우회하지 않고 설치 가능한 최신 버전으로** 낮춰 잡았다.
- **패키지 매니저를 bun으로 일원화**: `bun.lock`(7/9)과 `package-lock.json`(7/16)이 공존해 서로 다른
  의존성 트리를 고정하고 있었다. npm 락파일을 제거하고 `.gitignore`에 재유입 가드를 추가했다.

### Removed
- **`frontend/src/components/ui/chart.tsx`**: 어디에서도 import되지 않는 미사용 shadcn 보일러플레이트가
  recharts 3 타입 에러 10건을 내고 있어 삭제. 계획이 최대 위험으로 지목했던
  `[&_.recharts-*]` arbitrary 선택자 스타일 깨짐 리스크도 이 파일에만 있었고 **적용 대상이 없어
  애초에 존재하지 않는 리스크**였다.
- **`zod`**(미사용 — `src/` import 0건, `@hookform/resolvers`도 peer로 요구하지 않음),
  **`@tanstack/start`**(`@tanstack/react-start`로 대체된 레거시, 미참조).

### Fixed
- **`frontend/tests/e2e/dashboard.spec.ts`**: 직전 shadcn 전환이 반영되지 않아 4개가 실패하고 있던
  스펙을 갱신(패키지 업그레이드와 무관한 선행 문제). native `<select>` → `role=combobox`,
  `<nav>`/`<nav button>` → `role=tablist`/`tab`/`tabpanel`. 구조 셀렉터를 role 기반으로 바꾸면서
  의미가 옅던 단언(`section` nth)도 실제 확인 대상(차트 SVG 렌더링 / 테이블 표시)으로 교체했다.

### Notes
- **`vite-tsconfig-paths`는 유지**: vite 8이 네이티브 `resolve.tsconfigPaths`로 대체하라고 안내하고
  빌드는 통과하지만, vitest 4가 그 옵션을 해석하지 못해 테스트에서 `@/*` 임포트가 전부 깨진다.
  경위는 `vite.config.ts` 주석에 남겼다.
- **`bun run lint`는 회귀 게이트가 아니다**: 기준선부터 315건(301 errors) 실패 중인 기존 부채이며,
  업그레이드 전후 수치가 동일함만 확인했다.
- **미검증 1건**: 차트 클릭 교차필터 — 현재 세 프로젝트 어디에도 "클릭=필터"가 켜진 차트 구성이 없어
  클릭 경로를 태울 수 없었다(`onClick`은 이번 변경에서 손대지 않음).
- **미해결 1건**: `%APPDATA%\npm\`의 bun 셰임 3종이 이미 삭제된 npm 전역 패키지를 가리켜 `bun` 호출이
  실패한다(실제 bun은 `~/.bun/bin/bun.exe` v1.3.14에 정상 설치). 전역 환경 변경이라 보류 — 셰임 제거 필요.

**검증**: 프론트 `tsc --noEmit` 통과 · vitest **136개** 통과 · `bun run build` 성공 · e2e **20개**
통과(콜드 스타트 포함). Playwright로 dev 서버와 Rolldown 프로덕션 번들(`vite preview`) 양쪽을 구동해
차트 9개 렌더링·팔레트·범례 색상·막대 radius·아이콘(빈 SVG 0)·탭 전환·다크모드·PPT/PDF 내보내기
(`PK`/`%PDF-` 헤더)까지 확인. 콘솔 에러 0건.

## [2026-07-16] 대시보드 PPT/PDF 내보내기 신규 + shadcn 전환 마무리

### Added
- **`frontend/src/lib/exportPptx.ts`** (신규): 공개 대시보드 헤더의 **PPT 저장** 기능. `pptxgenjs`로
  타이틀·KPI 요약표·차트(2개/슬라이드)·출처 슬라이드를 가진 `.pptx`를 생성한다. 차트는 SVG 이미지가
  아니라 **PowerPoint 네이티브 차트 객체**(bar/hbar→막대, donut→도넛)로 삽입되어 파일 안에서 데이터
  편집이 가능하다. 현재 필터가 적용된 행(`filtered`) 기준으로 집계해 화면과 동일 수치를 낸다.
- **`frontend/src/lib/exportPdf.ts`** (신규): 공개 대시보드 헤더의 **PDF 저장** 기능. 기존
  `html2pdf.js`를 동적 import로 재활용해 대시보드 차트 영역을 A4 가로로 캡처한다. 다크모드일 때는
  캡처 직전 `.dark`를 제거하고 완료 후 원복(인쇄 가독성).
- **`frontend/src/lib/pdfColorFix.ts`** (신규): html2canvas가 파싱하지 못하는 `oklch()`/`oklab()`
  색상을 캡처 직전 rgb로 치환하는 공유 유틸(아래 Fixed 참조).
- **`frontend/src/lib/aggregate.ts::buildChartItems()`**: `ChartCard.tsx`의 `items` 집계 로직을
  순수 함수로 추출(+`ChartDatum` 타입). `ChartCard`와 `exportPptx`가 동일 로직을 공유한다.
  단위 테스트 7케이스 추가(`aggregate.test.ts`).
- **PPT/PDF 버튼**(`routes/index.tsx`): 헤더에 추가, 두 라이브러리 모두 동적 import라 초기 번들 미포함
  (빌드 시 `exportPptx`/`exportPdf` 별도 청크 확인).

### Fixed
- **PDF 내보내기 `oklch()` 파싱 예외** (신규 기능 구현 중 발견): Tailwind v4 / shadcn 테마 색상 변수가
  전부 `oklch`이고 불투명도 유틸리티(`bg-x/10`)는 `color-mix`가 `oklab`으로 계산되는데, html2pdf에
  번들된 html2canvas 버전이 이를 파싱하지 못해 `Attempting to parse an unsupported color function "oklch"`
  로 **PDF 저장이 실패**했다. 특히 Tailwind preflight가 모든 요소의 `::before`/`::after`에
  `border-color: var(--foreground)`(oklch)를 상속시켜 유사 요소는 인라인으로 덮을 수 없는 것이 핵심.
  → 캡처 직전 라이브 DOM에 대해 ① 문서 루트의 oklch/oklab **CSS 커스텀 변수를 rgb로 재정의**(유사 요소의
  `var()`까지 커버) + ② 서브트리 각 요소의 잔여 `color-mix` 계산 색상을 인라인 rgb로 치환, 캡처 후 원복.
  색공간 변환(oklch/oklab→sRGB)은 브라우저 canvas 지원 여부에 의존하지 않도록 **수학 변환으로 직접 구현**.
  변환값은 동일 색의 rgb라 화면 변화 없음.
- **`frontend/src/components/dashboard/DetailPanel.tsx`**: 행별 상세 PDF 저장도 동일한 oklch 취약점을
  잠재하고 있었음(Tailwind preflight 기본 테두리색이 동적 생성 wrapper·유사 요소에 적용). 위
  `pdfColorFix.fixModernColorsInPlace`를 공유해 함께 수정. Playwright로 실제 다운로드 검증 완료.

### Changed
- **`frontend/src/components/dashboard/FilterBar.tsx`**: native `<input>`/`<select>`+이모지(🔍/✕) →
  shadcn `<Input>`+`<Select>`+lucide 아이콘으로 전환(`design-migration-plan.md` 잔여 항목). Radix
  Select가 빈 문자열 value를 허용하지 않아 "전체" 옵션에 `__all__` sentinel 도입.
- **`frontend/src/routes/index.tsx`**: 프로젝트 선택 native `<select>` → shadcn `<Select>`, 탭
  네비게이션 커스텀 버튼 → shadcn `<Tabs>`(underline 디자인은 `data-[state=active]`로 유지).
- **`frontend/src/components/dashboard/ChartCard.tsx`**: `items` useMemo를 `buildChartItems()` 호출로
  교체(동작 동일, 로직 재사용).
- **`frontend/src/test/setup.ts`**: Radix Select가 jsdom에서 동작하도록 `hasPointerCapture`/
  `setPointerCapture`/`releasePointerCapture`/`scrollIntoView` mock 추가. `FilterBar.test.tsx`는
  `user.selectOptions()` → 트리거 클릭+옵션 클릭 패턴으로 수정.

### Docs
- `docs/plan/chart_export_ppt_pdf_plan.md`: 구현 완료로 갱신 + §10에 oklch 이슈/해결 기록.
- `docs/plan/chart_grid_spanning_plan.md`: design-migration 이후 낡은 서술(파일 위치·legacy CSS·인라인
  스타일) 정정(§5 반영 현황).
- `docs/plan/remaining_improvements.md`: §3(반응형 그리드)·§4(stale 배지) **브라우저 시각 검증 완료**로
  갱신(Playwright headless로 확인 — 이전 세션의 샌드박스 네트워크 제약 우회).
- `docs/plan/design-migration-plan.md`: §6 반영 현황 추가.

**검증**: 프론트 `tsc --noEmit` 통과 · vitest **136개**(기존 129 + `buildChartItems` 7) 통과 ·
`vite build` 성공. PPT/PDF는 Playwright headless로 실제 버튼 클릭→다운로드까지 구동해 유효 파일
생성 확인(PPT `PK`/zip, PDF `%PDF-`). §3 반응형 그리드·§4 stale 배지도 Playwright로 시각 검증.



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
