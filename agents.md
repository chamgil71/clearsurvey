# AI Agent Guidelines & System Rules — ClearSurvey

본 문서는 ClearSurvey 프로젝트의 소스코드를 유지보수, 기어, 리팩토링하는 모든 AI 코딩 에이전트(`Antigravity` 등)가 준수해야 하는 강제적인 스타일 가이드 및 동작 규칙 지침서입니다.

> [!NOTE]
> `.claude/` 폴더에는 워크스페이스 공통 범용 AI 거버넌스 프레임워크(오케스트레이션·프로필·rules·skills)가
> 별도로 존재합니다. 이 문서는 그 프레임워크와 충돌 시 **항상 우선하는
> ClearSurvey 전용 규칙**입니다. 프레임워크가 이 프로젝트에 어떻게 적용되는지(무엇을 스킵하는지)는
> [.claude/reference/PROJECT_PROFILE.md](./.claude/reference/PROJECT_PROFILE.md)를 참조하십시오.

---

## 0. 프론트엔드 기술 스택 (표준 체인)

`frontend/`는 워크스페이스 표준 React 스택 체인을 그대로 따릅니다.

```
React
  ↓
TanStack Start
  ↓
Vite
  ↓
Tailwind CSS
  ↓
shadcn/ui
```

라우팅/SSR은 `@tanstack/react-start` + `@tanstack/react-router`, 번들러는 Vite, 스타일링은 Tailwind CSS 위에 shadcn/ui(Radix 기반) 컴포넌트를 사용합니다. 신규 화면/컴포넌트 추가 시 이 체인을 벗어나지 않습니다.

---

## 1. 경로 설정 및 파일시스템 주입 규칙 (Path & Directory Rules)
* **하드코딩 금지**: 드라이브명(`C:`, `D:`)이나 절대 경로를 코드에 직접 주입하지 마십시오.
* **상대 경로 갱신**: Windows 와 Linux 환경의 경로 대소문자 구분을 방어하기 위해 `Path.relative_to` 대신 항상 **`os.path.relpath`** 를 사용해 상대 경로(`../../raw/파일명.xlsx`)를 정교하게 계산 조립하십시오.
* **스토리지 디렉토리**:
  * 설문 원본은 반드시 `storage/raw/` 기점에 존재해야 합니다.
  * 프로젝트 설정과 매니페스트는 `storage/projects/{projectName}/`에 저장되어야 합니다.
  * 프론트엔드가 실시간으로 스크리닝하는 정적 JSON은 `frontend/public/data/` 에 저장되어야 합니다.
* **`storage/` 는 git 을 따라가지 않습니다** (`.gitignore` 의 `/storage/*`). 원본·레시피·손 편집
  (`overrides.json`)이 전부 여기 있으므로 **PC 를 옮기면 따라오지 않습니다.** "다른 PC 에서
  프로젝트가 안 보인다"는 버그가 아닙니다 —
  [multi_pc_data_sync.md](./docs/guides/multi_pc_data_sync.md) §2.1 참조.

---

## 2. 결측치 `NaN` 방어 및 직렬화 안전 지침 (JSON Serialization & NaN Safety)
* **이유**: Pandas 및 openpyxl 이 비어있는 수치 셀을 가공할 때 발생하는 `NaN` (Not a Number) 부동소수점 형이 JSON 에 문자열 그대로 주입되면, 프론트엔드 SSR 엔진이 파싱 도중 크래시를 내고 `Something went wrong on our end` 500 오류를 냅니다.
* **조치**:
  * 파이썬 데이터셋 직렬화단(`exporter.py` 의 `clean_value`)이나 백엔드 API Response 핸들러(`_sanitize_nans`)에서는 `math.isnan` 과 `numpy.isnan` 을 사용하여 모든 NaN 값을 사전에 검출해 **`None` (JSON `null` 로 직렬화됨)** 으로 완벽히 치환해야 합니다.
  * `clean_value` 는 **멱등**입니다(이미 정제된 값을 다시 넣어도 같은 값). 편집 경로가
    `build_data_json(..., rows_are_clean=True)` 로 전 셀 재정제를 건너뛸 수 있는 근거이므로
    이 성질을 깨지 마십시오 — 깨면 sangga(15k행) 기준 저장이 0.5초 느려지거나 값이 변형됩니다.

---

## 3. 프론트엔드 시각화 및 UX 개발 규칙
* **가상 파생 열 가동성**: `split_binary`, `norm_date_parts` 등 정제 과정에서 가상으로 추가될 파생 열 명칭들을 프론트엔드 설정 뷰어(`Step2_ConfigEditor.tsx` 의 `allAvailableChartCols`) 단에서 동적 수집하여, 차트, 합산, KPI 대상, 조회 필터 및 목록 표 노출 등 모든 설정 항목에서 사용자가 즉시 선택할 수 있게 바인딩을 보존하십시오.
* **화면 찌그러짐(Layout Crushing) 방지**: 차트 카드 제목 `Input` 이나 `select` 박스들이 한 줄에 너무 많이 몰려 뭉개지지 않도록 줄바꿈 구조 및 그리드 너비 비율을 넉넉히 제공하십시오.
* **자동 실행(Auto-Run) 가이드**: 정제 및 대시보드 설정을 저장하는 시점에 정제 엔진 파이프라인(`runPipeline`)을 백그라운드로 자동 1회 기동 연동하여 갱신 지연 없는 쾌적한 UX 흐름을 유지하십시오.
* **내부 컬럼 누출 금지 (`__row_id`)**: 행 식별자는 `rows` 에 실려 오지만 **사용자에게 보이면
  안 됩니다.** `meta.columns` 에는 없으므로 거기서 컬럼을 얻는 경로(차트·필터)는 자동으로
  안전하지만, **`Object.keys(row)` 로 컬럼을 직접 구하면 샙니다** — 실제로 표 헤더 폴백·
  CSV 전체 컬럼 내보내기·상세 드로어 3곳에서 샜습니다. 반드시
  **`visibleRowKeys(row)`**(`types/dashboard.ts`)를 쓰십시오.
* **편집·설정 UI 노출 조건**: 편집·`설정`·`원본 XLSX` 는 **`useBackendStatus()` 의 `canEdit`**
  (= 백엔드 생존 + 로그인)일 때만 노출합니다. 정적 배포(Vercel)에는 백엔드가 없어 원리적으로
  불가능하기 때문입니다. **단 버튼을 숨기면 대체 경로를 함께 주십시오** — `설정` 을 숨겼다가
  로그인 진입점까지 없애 막다른 길을 만든 적이 있습니다.

---

## 4. 단위 테스트 무결성 정책 (Test Suite Policy)
* 모든 신규 정제 규칙(`transforms`) 또는 가공 파이프라인 확장 시에는 **`tests/` 디렉토리에 전용 단위 테스트를 100% 기입**하십시오.
* 변경 사항 반영 후, 반드시 `pytest` (가상환경 `C:\ai\.venv` 활성화 후 `backend/`에서 실행)를 수행하여 전체 **421개 이상의 테스트 스위트가 100% 통과(Pass)** 함을 자가 증명해야만 최종 배포 승인을 Propose 할 수 있습니다. (2026-07-17 기준 실측치 — 신규 테스트 추가 시 이 숫자도 함께 갱신할 것)
* 프론트엔드는 `frontend/` 에서 `bun run test -- --run` — **417개 이상** 통과 (2026-07-17 기준).
  패키지 매니저는 **bun** 으로 통일합니다(`bun.lock` 이 정본). `npm install` 은 다른 의존성
  트리를 깔 수 있으므로 쓰지 마십시오.
* **테스트가 실제로 무는지 확인하십시오.** 안전장치를 새로 넣었으면 그것을 일부러 되돌려
  (변이) 테스트가 실패하는지 보십시오 — 통과만으로는 그 테스트가 무언가를 지키고 있다는
  증거가 되지 않습니다. 실제로 이 방법으로 "통과하지만 아무것도 검증하지 않던" 테스트를
  찾아냈습니다.

---

## 5. 프론트엔드 컴포넌트 아키텍처 원칙 (모듈형/조합형 컴포넌트 설계)
> **[중요 아키텍처 규칙]**
> 프론트엔드 리액트 컴포넌트를 설계하거나 리팩토링할 때, 하나의 파일에 모든 상태와 뷰를 몰아넣는 **괴물 컴포넌트(God Component)** 작성을 엄격히 금지합니다.
> - **파일 크기 제한 방어**: 단일 컴포넌트가 500~1000줄 이상 비대해질 경우, 반드시 기능별/탭별/섹션별로 별도의 컴포넌트로 쪼개어 **조합(Composition) 구조**로 재조립하십시오.
> - **의존성(Props) 분리**: 상위 부모 컴포넌트(예: Editor)는 전체 상태(State) 관리만 담당하고, 하위 자식 컴포넌트(예: ColumnConfigTab, DashboardThemeCard)들은 Props로 데이터를 받아 순수하게 렌더링만 수행하도록 책임을 철저히 분리하십시오.

## 6. 프론트엔드 UI/UX 레이아웃 및 렌더링 규칙 (Tailwind & Radix UI)
> **[중요 레이아웃 규칙]**
> - **여백과 중앙 정렬 (Spacing & Alignment)**: 컨테이너 가로폭을 과도하게 넓게(`max-w-[1400px]` 이상) 잡지 말고, 모니터 해상도에서 시원하게 중앙 정렬될 수 있도록 `max-w-5xl` 또는 `max-w-[1000px] mx-auto`를 기본으로 사용하십시오. 폰트 크기는 가독성을 위해 `text-sm` 이상으로 넉넉하게 배정하십시오.
> - **임의 기능 추가 금지 (No Unsolicited UI)**: 사용자가 제시한 목업(Mockup) 화면에 존재하지 않는 추가 설정창(예: 테마 설정, 레이아웃 설정 등)을 AI가 임의로 판단하여 화면에 욱여넣지 마십시오. 제공된 목업의 챕터(카드) 구성과 디자인 의도를 100% 준수하십시오.
> - **탭 겹침 방지 (Tabs Visibility)**: Radix UI(Shadcn)의 `TabsContent` 컴포넌트 사용 시 Tailwind v4 환경에서 비활성 탭이 숨겨지지 않는 버그를 방지하기 위해, 반드시 `className="data-[state=inactive]:hidden"` 속성을 강제로 명시하십시오.
