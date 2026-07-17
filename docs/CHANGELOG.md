# Changelog

All notable changes to the ClearSurvey project will be documented in this file.

## [2026-07-17] 대시보드 행 편집 (1~11단계) · 로컬 실행 환경 수정

[plan/pending/dashboard_edit_plan.md](plan/pending/dashboard_edit_plan.md) 의 1~11단계 구현 완료.
대시보드에서 행을 고치면 차트·KPI 가 따라 바뀌고, 엑셀·발행까지 왕복한다.

**결과**: 백엔드 421개(282 → +139) · 프런트 417개(+69) 테스트 및 `tsc --noEmit`·`build` 전부 통과.

> 🔴 **아직 실제 데이터로 돌아본 적이 없다.** 작업 PC 에 `storage/projects/` 가 비어 있어
> (multi_pc §2.1 의 "보기 전용 PC") 화면에서 끝까지 확인하지 못했다. 자동 테스트는
> 자체 fixture 를 쓰므로 무관하다. **원본 PC 에서 확인할 항목은 계획서 §12 에 체크리스트로 있다.**
> 특히 **기존 프로젝트는 `/run` 을 한 번 다시 돌려야** 편집이 열린다(`__row_id` 가 없어서).

### Added
- **`engine/overrides.py`** — 손 편집 오버레이(`storage/projects/<name>/overrides.json`).
  `cleaned.xlsx` 는 raw+config 에서 매번 재생성되는 파생물이라 거기 직접 쓰면 다음 `/run` 이
  지운다. 편집을 따로 쌓아 파이프라인 **최종 단계**(transform 이후·시트 기록 직전)에 얹는다.
- **`__row_id`** (`engine/config.py`의 `ROW_ID_COL`) — 편집을 "몇 번째 행"이 아니라 "어느 행"에
  고정하는 숨은 열. 원본 엑셀 행번호 기반이라 빈 행·행 필터·정렬과 무관하다.
- **편집 API** — `GET/DELETE /overrides`, `PATCH /rows/{row_id}`, `POST /rebuild`,
  `POST /import-xlsx`, `POST /deploy`.
  저장은 `data.json` 만 갱신하고 xlsx 는 다운로드·발행 때 지연 생성한다.
- **드로어 편집** (`DetailPanel`) — 행 클릭 → 우측 드로어 → 수정 → 저장.
  표는 `visible_cols` 만 보여주지만 드로어는 **전 컬럼**을 보여줘서 편집 창구로 택했다.
  편집 모드에선 **빈 값 컬럼도 렌더**한다 — 안 그리면 비어 있는 값을 채울 수 없다.
  category 는 `<input list>`(datalist)로 **제안 + 자유입력**을 함께 준다(설문 정제는 새 표기를
  넣는 일이 잦아 고정 Select 로는 절반이 죽는다).
- **역방향 xlsx** (`POST /import-xlsx`) — 「원본 XLSX」로 받아 엑셀에서 고친 파일을 되돌려 올리면
  바뀐 셀만 골라 흡수한다. **기본은 미리보기**이고 확인해야 반영된다 — 엑셀은 서식·자동 날짜
  변환으로 값을 조용히 망가뜨린다. `__row_id` 검증(열 삭제·중복·미지의 id)이 유일한 방어 지점이다.
- **발행** (`app/git_sync.py`, `POST /deploy`) — 「발행」 1회 = **커밋 1개 · 푸시 1회**.
  저장마다 밀면 Vercel 배포와 원격 충돌 기회가 편집 횟수만큼 생긴다.
  가드 3종(원본 존재 · 경로 2개 제한 · 원격 선행 시 거부)을 **먼저 테스트로 통과시킨 뒤** 붙였다
  — multi_pc §3 이 금지하는 "원본 없는 PC 의 커밋"에 손이 닿는 기능이라서다.
- **`build_data_json()`** — `export_to_json` 에서 분리. xlsx 없이 rows 만으로 대시보드 JSON 을
  만든다(지연 생성의 전제). 두 경로가 같은 함수를 써 산출물이 어긋날 수 없다.
- **`useBackendStatus`** — health 폴링·세션 구독을 한 곳에 모아 공개 대시보드와 어드민이 공유.
  `canEdit = 백엔드 + 로그인` 으로 `설정`·`원본 XLSX` 노출을 판단하고 헤더에 상태 배지를 띄운다.

### Fixed
- 🔴 **`preprocessor.py` 의 `reset_index(drop=True)` 가 행 식별자를 지우고 있었다.**
  행 필터를 켠 프로젝트에서 편집이 통째로 밀린 행에 붙을 수 있었다.
- 🔴 **`useManagerApi` 의 프로젝트 목록 요청에 인증 헤더가 안 실렸다.** health 폴링 `useEffect`
  의 `deps=[]` 가 첫 렌더의 `fetchWithAuth(sessionToken=null)` 를 계속 붙들고 있었다.
  로컬은 바이패스라 안 터졌지만 Supabase 환경에선 401 → 자동 로그아웃 루프가 났을 것이다.
- **`__row_id` 가 프런트 3곳으로 샐 뻔했다** — 표 헤더 폴백·**CSV 전체 컬럼 내보내기**·상세
  드로어(+PDF). `meta.columns` 를 안 거치고 `Object.keys(row)` 를 쓰던 곳들 →
  `visibleRowKeys()` 로 통일.
- **백엔드 호출마다 ~210ms 낭비** (`useBackendStatus.ts`): `start_backend.bat` 은
  `--host 127.0.0.1`(IPv4)인데 프런트 기본값이 `http://localhost:8000` 이었다. Windows 에서
  `localhost` 는 `::1` 로 **먼저** 풀려 IPv6 시도 → 실패 → IPv4 폴백을 매번 반복했다.
  기본값을 `127.0.0.1:8000` 으로 맞춰 **210ms → 24ms**.
- **`start_web.bat` 의 `--force` 가 매 실행마다 ~5.4초를 버렸다** (첫 페이지까지 14.1s → 8.7s).
  `node_modules/.vite`(25MB 사전 번들)를 통째로 재생성한다. 응급 옵션이지 상시 옵션이 아니다.
  같이 `npm` → `bun` 으로 통일(`bun.lock` 이 정본인데 이 파일만 npm 을 썼다).
- **`start_backend.bat` 이 실행 시 알 수 없는 명령 에러 2줄을 뱉었다.** UTF-8 파일인데
  `chcp 65001` 이 파일 중간에서 코드페이지를 바꿔, 그 뒤 한글 REM 2줄이 조각나 명령으로
  해석됐다. 배치 파일을 ASCII 전용으로 통일(이유를 주석에 명시).

### Changed
- `/freshness` 가 `overrides.json` 도 본다 — "설정이 산출물보다 앞서 있다"는 기존 개념에
  "편집이 앞서 있다"를 얹었을 뿐이라 새 개념을 만들지 않았다. `edit_count` 추가.
- `/download` 가 뒤처졌으면 먼저 rebuild 한다 — 사용자가 "편집이 빠진 엑셀"을 받으면 안 된다.

## [2026-07-17] 차트 PDF 재작성 · 내보내기 색상 테마 연동

차트 PDF는 화면을 통째로 찍는 대신 카드별로 캡처해 A4에 직접 배치한다. PDF·PPT 모두 이제
활성 테마 색을 따른다. 계획: [plan/complete/chart_export_plan.md §4](plan/complete/chart_export_plan.md).

### Fixed
- **PDF가 활성 테마를 무시하고 `light` 팔레트로 나오던 버그** (`lib/pdfColorFix.ts`):
  스타일시트 규칙을 순서대로 훑어 `--chart-1` 등을 **처음 만난 값**으로 확정하고 있었다.
  `presets.css`는 테마 15종이 같은 토큰을 각자 정의하고 `light`가 파일 맨 앞(5행)이라, `toss`
  화면에서도 항상 light의 주황(`oklch(0.646 0.222 41.116)`)이 잡혔다. 게다가 그 값을 `<html>`
  인라인에 박아 모든 셀렉터를 이겼다. 테마가 하나(`:root`)뿐이던 시절의 가정이 테마 15종이
  되면서 깨진 것 — 이제 `getComputedStyle`로 **지금 적용 중인** 값을 읽는다. 차트 색만이 아니라
  배경·텍스트·테두리 전부 해당됐고, 요약 탭 PDF·DetailPanel도 함께 고쳐졌다.
- **차트가 A4 경계에서 잘리던 문제**: `pagebreak.avoid: ".break-inside-avoid"`가 대시보드에서
  **아무것도 매치하지 않았다**(그 클래스는 `SummaryTab`에만 있다). 클래스를 붙여도 해결되지
  않는다 — html2pdf의 `avoid`는 걸린 요소를 여백으로 밀어내는데, 대시보드는 CSS Grid라 한 카드만
  밀 수 없다(같은 행의 옆 카드가 따라가지 않는다).
- **카드 제목이 누락되던 문제**: 위 잘림의 증상이었다. 제목이 카드 최상단이라 경계에 걸리면
  제목만 앞 페이지에 남았다.
- **애니메이션 도중 캡처되던 문제**: recharts는 마운트·필터 변경 후 약 1.5초간 애니메이션을 돈다
  (실측: 도넛 sector의 `d`가 450~1950ms 동안 변함). PDF를 빨리 누르면 도넛이 얇은 부채꼴로,
  막대는 덜 자란 채로 박혔다 — 화면은 멀쩡해 원인을 찾기 어려운 종류다. 이제 그리기가 멎을
  때까지 기다린 뒤 찍는다.
- **출력이 브라우저 창 크기에 좌우되던 문제**: 화면 그리드가 `repeat(auto-fit, minmax(320px, 1fr))`
  이라 열 수도 카드 비율도 창이 정했다(창을 넓히면 3열, 좁히면 2열). 캡처 직전 그리드를 A4 기하로
  고정해 창 크기와 무관하게 같은 결과가 나온다.

### Added
- **`lib/exportPdfCharts.ts`**: 차트 PDF 전용 경로. 카드별 html2canvas 캡처 + A4 가로 **3열 × 2행**
  격자에 jsPDF로 직접 배치. 카드 이미지는 통째로 들어가거나 통째로 다음 페이지로 가므로 잘릴 수
  없다. `2x1`/`2x2`/`full` span은 화면 규칙 그대로 유지되고, `2x2`는 3열에 둘이 못 서므로 연속되면
  페이지당 하나씩 나뉜다.
- **페이지 머리글**(프로젝트명 · 생성일시 · 페이지 번호): PPT에는 타이틀 슬라이드가 있었으나
  PDF에는 대응물이 없었다(캡처 대상이 차트 그리드뿐이고 화면 헤더는 버튼이 섞여 캡처 불가).
  jsPDF `text()`가 아니라 **DOM을 만들어 캡처**한다 — jsPDF 내장 폰트는 Helvetica/Times/Courier
  뿐이라 한글이 깨진다(실측: "버스 만족도 조사" → `¼Â¤ ¹ÌÈq³Ä ÈpÀ¬`). 한글 폰트 임베드는
  음절 11,172자라 수백 KB~수 MB가 붙는다.
- **`theme/readColors.ts`**: 적용 중인 테마 색을 hex로 읽는 공용 함수. PDF·PPT가 공유한다.
  `withLightModeAsync`는 캡처처럼 await가 필요한 작업용 — 동기판에 async 콜백을 넘기면 `finally`가
  캡처 전에 실행돼 다크가 되돌아온다.
- **테스트 16개**: `packPages` 배치 규칙(겹침·격자 이탈·2x2 페이지 분할) 7건, `pdfColorFix`
  회귀 5건, e2e 4건(실제 PDF 생성·한글 폰트 회귀·캡처 후 테마 원복·활성 테마 색).

### Changed
- **PPT 색상이 테마를 따른다** (`lib/exportPptx.ts`): `PPT_PALETTE` 하드코딩 7색을 걷어내고
  차트·제목·표·테두리 색을 현재 테마에서 읽는다. PDF와 달리 이쪽은 버그가 아니라 **애초에 테마를
  시도하지 않던 것**이었다. 다크모드에서 그대로 읽으면 어두운 배경이 PPT에 박히므로 PDF와 같이
  라이트 기준으로 읽는다.
- **"클릭=필터" 배지가 PDF에서 빠진다**(`ChartCard.tsx`의 `data-export-hide`): 클릭 유도 표시라
  정지된 문서에선 노이즈다.
- **`jspdf`·`html2canvas`를 직접 의존성으로 승격**: 이미 `html2pdf.js`의 전이 의존성으로 트리에
  있었다(새 다운로드 없음). index 청크는 336KB로 변동 없다 — 둘 다 동적 import라 별도 청크다.

### Notes
- 요약 탭 PDF는 기존 `lib/exportPdf.ts`(html2pdf 통짜 캡처)를 그대로 쓴다. 그쪽은 일반 블록
  흐름이라 `break-inside-avoid`가 실제로 동작하고, 잘림 문제가 없다.

## [2026-07-17] 테마 시스템 — 테마 15종 · 프로젝트별 적용 · 하드코딩 제거

계획: [plan/complete/theme_system_plan.md](plan/complete/theme_system_plan.md).
**기본 테마가 `toss`로 바뀌었다** (기존 shadcn 기본값은 `light` 프리셋으로 남아 있다).

### Added
- **테마 팩 15종**(`frontend/src/theme/`): `light`·`dark`(현행 shadcn 기본값) + 가이드 파생 11종
  (`toss`·`apple-hig`·`anthropic`·`claude`·`linear`·`vercel`·`duolingo`·`datadog`·`kakao`·
  `github-primer`·`airbnb`) + 수작업 이관 2종(`ink`·`forest`). 나머지 215종은 `catalog.json`에 백업.
- **`docs/design/design_system_guides/`**: 브랜드 350종 디자인 가이드. `new-beginnings`에서 가져와
  **이 저장소로 이관**했다 — 처음엔 옆 저장소 경로를 참조했으나 그러면 테마를 재생성할 수 없다.
- **`frontend/scripts/build-themes.mjs`**: 가이드 → 카탈로그 + 드롭인 CSS + 런타임 프리셋 생성.
  `new-beginnings/scripts/build-design-catalog.mjs`를 이식하되, 그쪽이 `{id}.md`/`{id}.dark.md`를
  별개 테마로 다루는 것과 달리 **두 파일을 짝지어** 하나의 테마로 만든다(`{id}.dark.md`의 `:root`가
  완전한 다크 토큰셋이라 `{id}.md` 안의 6줄짜리 축약 블록보다 낫다).
- **`scripts/lib/color.mjs`**: hex/rgba → oklch 변환(`pdfColorFix.ts`의 역행렬). 왕복 테스트로 고정.
- **`--success`·`--warning`·`--highlight` 토큰**: shadcn 기본엔 없으나 이 앱이 실제로 쓰는 시맨틱 색
  (실행/완료·주의·검색 형광펜). 원본 가이드의 `--color-success-fg` 등과 대응된다.
- **프로젝트별 테마**: 어드민 Step2 → "대시보드 비주얼 레이아웃" → 테마 및 디자인 설정.
  `dashboard.theme.preset`에 저장되고 `<html data-theme="{id}">`로 반영된다.

### Changed
- **하드코딩 색상 276 → 33건**: 어드민 쪽 Tailwind 팔레트 하드코딩을 시멘틱 토큰으로 치환.
  공개 대시보드는 이미 0건이었고(design-migration Phase 2), 남은 건 `config/*` 카드들이었다.
  기존에 어드민은 블루, 공개 대시보드는 네이비로 어긋나 있었는데 이제 같은 브랜드 색을 따른다.
- **`DashboardTheme` 타입 통일**: `primaryColor`·`chartPalette` **폐기**. 프리셋이 이미 primary와
  차트 색을 정하는데 별도 필드를 남기면 둘 중 뭐가 이기는지 모호해진다 — 색은 테마 한 곳에서만
  결정한다. `DashboardThemeCard`의 로컬 `ThemeConfig`(필드가 어긋나 있던 별도 정의)도 제거.
- **동작하지 않던 필드 구현**: `logoText`(헤더 로고)·`brandTitle`(옆 보조 텍스트)·`borderRadius`
  (`--radius` 오버라이드)가 실제로 반영된다. 이들은 타입·UI에만 있고 구현이 없었다.
- **`routes/__root.tsx`**: 첫 페인트 전 테마를 심는 인라인 스크립트(`THEME_BOOT`) 추가. React가
  붙은 뒤 적용하면 기본 테마로 한 번 그려졌다가 바뀌어 색이 번쩍인다(FOUC).

### Fixed
- **죽어 있던 테마 코드 3종**: `DashboardThemeCard`(import 0곳)·`updateTheme`(전달 0곳)·`cfg.theme`
  (읽는 곳 0곳). [remaining_improvements §3](plan/complete/remaining_improvements.md)이 지적했던
  문제로, 그때 `layout`만 살리고 `theme`은 남아 있었다.

### Notes
- **색 표기는 oklch를 유지한다.** 초안은 "hex로 통일"이었으나 폐기했다 — 근거로 든 "html2canvas가
  oklch를 못 읽어 PDF가 깨진다"는 `pdfColorFix.ts`가 **이미 해결한 문제**였다. 이미 값을 치른 문제를
  새 결정의 근거로 삼은 것이 오류였고, Tailwind v4 기본 팔레트가 oklch라 이탈 비용이 크다.
  가이드 원본(hex)은 빌드 시 1회 변환한다.
- **차트 팔레트는 자동 도출이 아니라 수작업이다.** 15종을 진단하니 12종이 부적합했다 — 본문 텍스트용
  색을 조각으로 고르거나(`toss` `#191F28` → 도넛이 검정), 모노크롬 브랜드라 5색 중 3색이 무채색이거나
  (`vercel`), semantic 색이 부족해 primary 램프만 반복해 색상이 사실상 같았다(Δh≈0~3°).
  11종에 `overrides/{id}.json`을 두어 각 브랜드가 실제로 쓰는 팔레트로 확정했다.
- **테마 저장은 export를 해야 공개 대시보드에 반영된다.** 공개 대시보드는
  `public/data/{name}_data.json`을 읽고 그 안의 `dashboard`는 export 시점 스냅샷이다. 테마만의
  제약이 아니라 차트·KPI 등 모든 dashboard 설정에 해당하는 기존 구조다.
- **남은 하드코딩 33건은 의도적이다**: `GuideDrawer.GROUP_COLORS` 28건(정제 규칙 그룹 7색 —
  범주형 팔레트라 테마 색으로 뭉치면 그룹을 구별할 수 없다)과 `Step3` 터미널 로그 5건(컨테이너가
  `bg-black` 고정이라 테마 토큰을 쓰면 라이트 테마에서 대비가 사라진다).

**검증**: `tsc --noEmit` 통과 · vitest **344개** 통과(시작 시 173) · `bun run build` 성공 ·
e2e **20개** 통과(CI 모드) · lint 313(기준선 314). 브라우저로 확인 — 기본이 toss(Toss Blue,
radius 12px), 어드민에서 kakao 저장 → export → 공개 대시보드가 카카오 옐로 + 로고/브랜드 반영.
CSS 명시도 버그 2건을 브라우저 검증에서 잡았다(프리셋이 `:root`에 지던 것, 다크에서 radius가
리셋되던 것) — 타입체크·테스트로는 잡히지 않는 종류라 계산값을 직접 읽어야 발견된다.

## [2026-07-17] 백엔드 실행 환경을 공용 venv(.venv314)로 정리

### Changed
- **`start_backend.bat`**: `uv run uvicorn` → `C:\ai\.venv314`의 `python -m uvicorn`. `C:\ai` 아래
  12개 프로젝트가 이 가상환경을 **공유**하는데 이 배치 파일만 uv를 요구해, uv 미설치 환경에서
  `'uv' is not recognized`로 실행이 실패했다. 경로는 `CLEARSURVEY_PYTHON` 환경변수로 덮을 수 있고,
  없으면 무엇을 설정해야 하는지 안내하고 종료한다.
  → uv는 이 프로젝트에서 이 한 줄에서만 쓰이고 있었다. CI는 이미 `pip install -e ".[dev]"`를 쓴다.
- **문서의 uv 안내 갱신**: `README.md`·`GUIDE.md`(`uv sync` → venv 활성화 + `pip install -e ".[dev]"`,
  `uv run main.py` → `python main.py` 17건), `agents.md`(`uv run --extra dev pytest` → `pytest`).

### Fixed
- **`docs/guides/cli_vs_web_guide.md`**: 존재하지 않는 `backend/cli.py`를 가리키고 인자 형식도
  실제와 달랐다(`--file`/`--project` vs 실제는 위치 인자). 실제 `main.py` 시그니처로 정정.

### Removed
- **`backend/uv.lock`**(210KB)과 **Dockerfile의 uv 의존**: `Dockerfile`이 `pip install uv` →
  `uv sync --extra dev` → `CMD ["uv","run",...]`로 uv를 쓰고 있었다(처음에 `.bat`과 문서만 보고
  "uv.lock은 아무도 안 쓴다"고 판단했으나 **오판**이었다 — Dockerfile을 놓쳤다).
  → Dockerfile을 `pip install -e ".[dev]"` + `CMD ["python","-m","uvicorn",...]`로 바꿔
  **로컬·CI·Docker 세 경로를 모두 pip으로 통일**하고 `uv.lock`을 제거했다. 이제 저장소에서
  uv를 쓰는 곳은 없다.
  - 트레이드오프: 프로덕션 이미지가 버전 고정(`uv.lock`)을 잃고 `pyproject.toml`의 범위를 따른다.
    CI(`pip install -e ".[dev]"`)가 이미 같은 방식이라 새로 생긴 위험은 아니다.
  - 레이어 캐시를 위해 `pyproject.toml`을 먼저 COPY하던 순서는 유지하되, `pip install -e`가
    패키지를 찾으려면 소스가 먼저 있어야 하므로 소스 COPY를 설치 앞으로 옮겼다.

### Notes
- **`uv sync`를 공용 venv에 실행하면 안 된다**: 잠금 파일에 없는 패키지를 *제거*하므로
  `.venv314`(106개 패키지)에 대고 실행하면 다른 11개 프로젝트의 의존성이 날아간다.

**검증**: 수정한 `.bat`과 동일한 명령으로 백엔드 구동 확인(`Application startup complete`),
`.venv314`로 `pytest` **282개 통과**, `python main.py --help` 정상.

## [2026-07-17] 대시보드 요약 탭 신설

계획: [plan/complete/summary_tab_plan.md](plan/complete/summary_tab_plan.md).

### Added
- **요약 탭**(`frontend/src/components/dashboard/SummaryTab.tsx`): 차트가 말하는 내용을 표로 정리하는
  탭. 대시보드(차트)와 목록(원본 행) 사이의 공백 — "정확한 수치를 읽고 그대로 문서로 넘기는 것" — 을
  채운다. 전체 제목 `[프로젝트명] 요약`, 소제목은 차트 제목, 표는 `항목 / 값 / 비중` + 합계 행,
  하단에 필터 기준 박스. 차트 순서를 그대로 따르고 현재 필터(`filtered`)에 연동된다.
- **`frontend/src/lib/summary.ts`**: `buildSummary()` 등 순수 함수. 집계는 **기존
  `buildChartItems`를 그대로 재사용**한다 — 로직이 갈라지면 차트와 표의 수치가 어긋나는 순간
  신뢰를 잃기 때문이다(`exportPptx`가 이미 같은 이유로 공유 중).
- **`frontend/src/lib/aggregate.ts::buildChartItemsWithMeta()`**: 자르기 전 후보 개수(`totalCount`)를
  함께 반환. `max_items`로 잘렸는지는 자르기가 일어나는 함수 안에서만 알 수 있고, 밖에서 전체 목록을
  다시 집계해 비교하면 큰 데이터(sangga 2만행)에서 집계를 두 번 하게 된다. 기존 `buildChartItems`는
  이를 감싸는 형태로 유지 — 호출부 무영향.
- **내보내기**: PDF(A4 세로, 기존 `exportPdf.ts` 재사용)와 **DOCX**(신규 `exportSummaryDocx.ts`).
  DOCX는 화면 DOM이 아니라 `SummaryDoc` 데이터에서 직접 생성한다 — DOM 캡처는 편집이 불가하고
  oklch 파싱 같은 렌더링 취약점을 물려받는다. `docx`(9.7.1, MIT) 동적 import로 초기 번들 미포함.
- **설정**(`ChartConfigCard.tsx`): 요약 표에 표시할 열 선택(값·비중·순위·누적 비중). 기본값은
  값·비중. "항목" 열은 항상 표시. `DashboardConfig.summary?`는 optional이라 기존 `dashboard.json`을
  마이그레이션 없이 읽는다(`layout?.maxColumns`와 같은 패턴).

### Changed
- **`frontend/src/lib/exportPdf.ts`**: `orientation`/`suffix` 옵션 추가(기본값이 기존 동작이라
  차트 탭 PDF는 무변경). 표가 페이지 경계에서 잘리지 않도록 `pagebreak` 옵션도 추가 — html2pdf.js가
  지원하는 옵션이나 번들된 타입 정의에 빠져 있어 캐스팅했다.
- **`frontend/src/routes/index.tsx`**: 헤더 내보내기 버튼을 **현재 탭에 맞춰 전환**한다
  (대시보드 → `PPT`/`PDF`, 요약 → `PDF`/`DOCX`). 탭마다 PDF 버튼을 따로 두면 "어느 PDF인지"
  모호해지므로 "보고 있는 것을 내보낸다"로 정리했다.

### Notes
- **`max_items`로 잘린 차트의 비중 기준**: 표시 항목 합계 기준(합이 100%)으로 하고, 합계 행에
  `(상위 N개 기준)`을 명시한다. 전체 합계 기준이면 비중 합이 100%가 안 되어 혼란스럽고,
  표시 기준만 쓰면 잘렸다는 사실이 숨겨진다 — 둘 다 피한다.
- **어드민 설정 UI는 브라우저 구동 검증을 하지 못했다**: 이 환경의 `storage/projects/`에
  `README.md`만 있어 백엔드가 `/api/projects/{name}/config`에 404를 반환한다(이번 변경과 무관한
  환경 제약). 대신 `ChartConfigCard.summary.test.tsx` 6케이스로 계약을 고정했다.

**검증**: `tsc --noEmit` 통과 · vitest **173개**(기준선 136 + 신규 37) 통과 · `bun run build` 성공 ·
lint 314건(기준선 315 — 신규 코드 0건). Playwright로 `bus` 프로젝트 구동 — 표/합계/절단 표시,
도넛 클릭 시 요약 수치 연동(`695 / 28.7%` → `695 / 100.0%`), PDF **595×842pt=A4 세로**(MediaBox 실측),
DOCX는 압축 해제해 `document.xml` 검사(화면과 동일 수치, `w:orient="portrait"`, 표 3개) 확인.

## [2026-07-17] 프론트엔드 패키지 업그레이드 (recharts 3 · lucide 1 · vite 8)

계획: [plan/complete/package_upgrade_plan.md](plan/complete/package_upgrade_plan.md). 메이저는 각각 별도 커밋으로 진행했다.

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
- **`.github/workflows/ci.yml`**: 위 일원화에 맞춰 `npm ci` → `bun install --frozen-lockfile`,
  `npx` → `bunx`, `npm test` → `bun run test`로 교체. `cache-dependency-path`가 삭제된
  `package-lock.json`을 가리키고 있어 그대로 두면 `typescript-check`·`playwright-e2e` 두 잡이
  전부 깨진다. node는 vite 8 요구사항(`^20.19 || >=22.12`)과 Vercel 프로덕션(24.x)에 맞춰 20 → 24.

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

### Docs
- **`docs/plan/` 정리**: 완료된 계획 8건을 `docs/plan/complete/` 하위 폴더로 이동(기존 `pending/`과 대칭).
  `docs/plan/`에는 살아있는 문서인 `prd.md`와 `pending/`만 남는다. 삭제가 아니라 보존이며, 설계 의도와
  시행착오 기록은 그대로 유지된다. `INDEX.md`·`GUIDE.md`·`pending/cloud_storage_plan.md`·
  `backend/tests/test_transforms.py`의 참조 경로와 이동한 문서 안의 상대 링크를 함께 갱신했다.
  색인에서 누락돼 있던 `chart_export_ppt_pdf_plan.md`·`package_upgrade_plan.md`도 `INDEX.md`에 추가.
  과거 CHANGELOG 항목의 경로 표기는 그 시점의 사실이므로 고치지 않았다.

### Notes
- **`vite-tsconfig-paths`는 유지**: vite 8이 네이티브 `resolve.tsconfigPaths`로 대체하라고 안내하고
  빌드는 통과하지만, vitest 4가 그 옵션을 해석하지 못해 테스트에서 `@/*` 임포트가 전부 깨진다.
  경위는 `vite.config.ts` 주석에 남겼다.
- **`bun run lint`는 회귀 게이트가 아니다**: 기준선부터 315건(301 errors) 실패 중인 기존 부채이며,
  업그레이드 전후 수치가 동일함만 확인했다.
- **개발 환경 수정**: `%APPDATA%\npm\`의 bun/bunx 셰임 6종이 이미 삭제된 npm 전역 패키지
  (`%APPDATA%\npm\node_modules\bun`)를 가리켜 `bun` 호출이 실패하고 있었다. PATH에는 이미
  `~/.bun/bin`(실제 bun v1.3.14)이 등록돼 있었으나 npm 경로가 앞순위라 가려진 상태였다.
  → 고아 셰임 6종 삭제. 이제 `bun`/`bunx`가 실제 바이너리로 해석된다. `bun.lock`(7/9)보다
  `package-lock.json`(7/16)이 최신이었던 것은 이 고장으로 npm에 임시 폴백한 흔적으로 보인다.
- **교차필터 조건 참고**: `ChartCard.tsx::catCol` — donut/bar/hbar이고 `col`이 있으며 그 컬럼이
  `numeric`이 아니거나 `unique_count <= 40`인 이산 수치일 때만 클릭 필터가 켜진다. 기본 프로젝트
  `수의계약정보`는 이 조건을 만족하는 차트가 없다(`bus`·`sangga`·`mumhwa`에는 있음).

**검증**: 프론트 `tsc --noEmit` 통과 · vitest **136개** 통과 · `bun run build` 성공 · e2e **20개**
통과(콜드 스타트 포함). Playwright로 dev 서버와 Rolldown 프로덕션 번들(`vite preview`) 양쪽을 구동해
차트 9개 렌더링·팔레트·범례 색상·막대 radius·아이콘(빈 SVG 0)·탭 전환·다크모드·PPT/PDF 내보내기
(`PK`/`%PDF-` 헤더)까지 확인. 콘솔 에러 0건. **차트 클릭 교차필터**는 `bus` 프로젝트에서 도넛 조각
클릭 → 필터바 `유성구 (695)`·카운트 `695 / 2423건`·KPI 갱신·연동 차트 재집계까지 확인.

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
