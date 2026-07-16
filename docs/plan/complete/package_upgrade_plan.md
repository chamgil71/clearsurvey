# 📦 패키지 업그레이드 위험성 분석 및 단계별 실행 계획 — ✅ 완료 (2026-07-17)

> [!NOTE]
> **실행 완료.** Step 1 `f24ff5c` · Step 2 `09f0543` · Step 3a `1e91f6e` · Step 3b `1d9996a` ·
> Step 3c `af9d750`. 기준선은 `2c56435`.
>
> 최종 상태: `tsc --noEmit` 통과 · vitest **136개** 통과 · `bun run build` 성공 ·
> lint 315건(기준선과 동일, [아래](#6-검증-계획) 참조). dev 서버와 Rolldown 프로덕션 번들 양쪽을
> Playwright로 구동해 차트·아이콘·탭·PPT/PDF 내보내기·다크모드까지 확인.
>
> **계획 대비 실제와 달랐던 점** (상세는 각 절):
> - `ui/chart.tsx`가 **미사용 파일**이었다 → 삭제로 해결. 이 계획의 최대 경고였던
>   `[&_.recharts-*]` 선택자 스타일 깨짐 리스크는 **애초에 존재하지 않았다**(아무 데도 적용 안 됨).
> - recharts의 `<Cell />` 공식 대체재인 `shape` prop은 **범례를 회색으로 죽이는 회귀**를 일으켰다
>   → 데이터에 `fill`을 싣는 방식으로 선회.
> - lucide 1.0의 실제 파괴는 **브랜드 아이콘 제거**였다(`<Github />` 1건). 나머지 36종은 무영향.
> - vite 8은 설정 영향이 없었다. 대신 `@vitejs/plugin-react`를 5→6으로 동반 상향해야 했다.
> - **미해결**: bun 실행 파일 PATH 고장(아래 [Open Questions](#7-open-questions)) — 전역 환경
>   변경이라 사용자 승인 대기. 현재는 전체 경로 호출로 우회 중.

본 문서는 ClearSurvey 프론트엔드([frontend/package.json](file:///c:/ai/clearsurvey/frontend/package.json))
의존성을 최신 버전으로 정리·업그레이드하기 위한 위험도 분석과 실행 계획을 정의한다.

`new-beginnings` 프로젝트의 [package_upgrade_implementation_plan.md](file:///c:/ai/new-beginnings/docs/package_upgrade_implementation_plan.md)
를 검토 기준으로 삼았다. 스택이 사실상 동일(TanStack Start + React 19 + Tailwind 4 + Radix +
recharts 2.15 + shadcn `chart.tsx`)하여 recharts 분석은 그대로 유효하나, **그 문서가 "안전"으로
분류한 항목 중 본 프로젝트에서는 메이저 업그레이드인 것이 3개** 있어 위험도 표를 재작성했다.

**기준선**: 커밋 `2c56435` (PPT/PDF 내보내기 작업 완료 시점).
`tsc --noEmit` 통과 · vitest **136개** 통과 · `vite build` 성공 상태에서 출발한다.

---

## 목차
1. [위험도 요약표](#1-위험도-요약표)
2. [사전 정리 필요 사항](#2-사전-정리-필요-사항)
3. [recharts 2.x → 3.x 상세 분석](#3-recharts-2x--3x-상세-분석)
4. [new-beginnings 계획과의 차이점](#4-new-beginnings-계획과의-차이점)
5. [단계별 실행 계획](#5-단계별-실행-계획)
6. [검증 계획](#6-검증-계획)
7. [Open Questions](#7-open-questions)

---

## 1. 위험도 요약표

버전은 2026-07-16 npm 레지스트리 조회 기준. "설치본"은 캐럿 범위로 실제 설치된 버전이며,
`package.json` 선언값보다 앞서 있는 경우가 많다.

| 패키지 | 선언 | 설치본 | 최신 | 위험도 | 분류 |
|---|---|---|---|---|---|
| `recharts` | ^2.15.0 | 2.15.4 | **3.9.2** | 🔴 **HIGH** | 메이저 |
| `lucide-react` | ^0.575.0 | 0.575.0 | **1.24.0** | 🔴 **HIGH** | 메이저 (0.x→1.x) |
| `vite` | ^7.3.1 | 7.3.6 | **8.1.5** | 🔴 **MED-HIGH** | 메이저 |
| `zod` | ^3.24.2 | 3.25.76 | 4.4.3 | ⚪ **무관** | 미사용 → **제거 확정** |
| `@tanstack/start` (dev) | ^1.120.20 | — | 1.120.20 | ⚪ **무관** | 레거시 → **제거 확정** |
| `@tanstack/react-router` | ^1.168.25 | 1.170.8 | 1.170.18 | 🟢 **SAFE** | 마이너 |
| `@tanstack/react-start` | ^1.167.50 | — | 1.168.28 | 🟡 **LOW** | 마이너 |
| `@tanstack/router-plugin` | ^1.167.28 | — | 1.168.20 | 🟡 **LOW** | react-start 연동 |
| `@tanstack/react-query` | ^5.83.0 | — | 5.101.2 | 🟢 **SAFE** | 마이너 |
| `react` / `react-dom` | ^19.2.0 | 19.2.6 | 19.2.7 | 🟢 **SAFE** | 패치 |
| `tailwindcss` / `@tailwindcss/vite` | ^4.2.1 | 4.3.0 | 4.3.3 | 🟢 **SAFE** | 마이너 |
| `@supabase/supabase-js` | ^2.107.0 | — | 2.110.7 | 🟢 **SAFE** | 마이너 |
| Radix UI 전반 | 각 ^1~2 | — | 최신 마이너 | 🟢 **SAFE** | 마이너 |
| `vitest` / `@vitest/coverage-v8` | ^4.1.10 | 4.1.10 | 4.1.10 | ✅ | **이미 최신** |
| `html2pdf.js` | ^0.14.0 | 0.14.0 | 0.14.0 | ✅ | **이미 최신** |
| `pptxgenjs` | ^4.0.1 | 4.0.1 | 4.0.1 | ✅ | **이미 최신** |

> [!NOTE]
> 🟢 SAFE 등급 다수는 캐럿 범위 덕에 **설치본이 이미 최신에 근접**하다(react 19.2.6, tailwind 4.3.0,
> router 1.170.8). 즉 이 등급의 작업은 실질적으로 `package.json` **하한선 표기 정리**에 가까우며
> 런타임 변화가 거의 없다. 실제 리스크는 🔴 3종에 집중돼 있다.

---

## 2. 사전 정리 필요 사항

### ① 락파일이 두 개 공존

```
frontend/bun.lock           186 KB   (2026-07-09)
frontend/package-lock.json  636 KB   (2026-07-16)  ← 최근 갱신
```

두 락파일이 공존하면 서로 다른 의존성 트리를 고정하므로 업그레이드 착수 전에 하나를 폐기해야 한다.

**결정: bun 확정** — `package-lock.json`을 삭제하고 `bun.lock`을 유지한다. 갱신 시각만 보면 npm이
현행으로 보이나, 실제로는 **bun 실행 파일이 PATH에서 깨져 있어 npm으로 임시 폴백한 흔적**으로
판단된다(상세 및 조치는 [Open Questions](#7-open-questions) 참조).

### ② 미사용 의존성 2종

* **`zod` (^3.24.2)**: `frontend/src/` 전체에서 `from "zod"` import가 **0건**.
  유일한 잠재 소비자인 `@hookform/resolvers`(^5.2.2)는 peer가 `react-hook-form`뿐이라 zod를
  요구하지 않으며, 그마저도 [ui/form.tsx](file:///c:/ai/clearsurvey/frontend/src/components/ui/form.tsx)
  한 곳에서만 쓰인다. → **zod 4 메이저 업그레이드 대상이 아니라 제거 대상**이다.
* **`@tanstack/start` (dev, ^1.120.20)**: `@tanstack/react-start`로 대체된 레거시 패키지.
  최신 버전이 여전히 1.120.20으로 사실상 방치 상태이며, `src/`·`vite.config.ts` 어디에서도
  참조하지 않는다. → **제거 대상**.

---

## 3. recharts 2.x → 3.x 상세 분석

`new-beginnings` 분석이 그대로 유효하다. 본 프로젝트 기준 확인 결과만 정리한다.

### ① `<Cell />` Deprecated — ⚠️ 해당됨

3.x에서 제거되지는 않고 deprecated 처리(4.0 제거 예정)되므로 **즉각 런타임 에러는 없고 콘솔 경고만**
발생한다. 사용처는 [ChartCard.tsx](file:///c:/ai/clearsurvey/frontend/src/components/dashboard/ChartCard.tsx)
3곳뿐이다:

```tsx
// L163 (Pie), L177 / L189 (Bar) — 패턴 동일
<Cell key={i} fill={PALETTE[i % PALETTE.length]} />
```

사용처가 3줄로 적어 마이그레이션 비용이 낮다.

### ② CSS 선택자 호환성 — ⚠️ 검증 필요

[ui/chart.tsx L51](file:///c:/ai/clearsurvey/frontend/src/components/ui/chart.tsx)에 Tailwind
arbitrary 선택자(`[&_.recharts-cartesian-grid_line[stroke='#ccc']]` 등)가 있다. recharts 3.x에서
내부 DOM 클래스명/기본 stroke 값이 바뀌었다면 **렌더링은 되지만 스타일이 깨질 수 있다**. 자동
검증이 불가능하므로 육안 검증이 필수다.

### ③ TypeScript target — ✅ 해결됨

`new-beginnings` 계획의 미확인 항목(#5, `target: es6` 이상 요구)은 본 프로젝트
[tsconfig.json](file:///c:/ai/clearsurvey/frontend/tsconfig.json)이 이미 `"target": "ES2022"`이므로
**충족 확인 완료**.

### ④ 영향 없음으로 확인된 항목

* `CategoricalChartState` 내부 상태 제거 → 내부 상태 직접 접근 코드 없음.
* `<Customized />` props 변경 → 미사용.
* `react-smooth` 의존성 제거 → 직접 import 없음.
* peer 요구사항(`react` ^19 / `react-dom` ^19 / `react-is` ^19) → 현 React 19.2.6과 충족.

### ⑤ 시점상 주의

기준선 커밋(`2c56435`)에서 방금 추가한 PPT/PDF 내보내기가 차트 데이터 경로
([exportPptx.ts](file:///c:/ai/clearsurvey/frontend/src/lib/exportPptx.ts),
[aggregate.ts](file:///c:/ai/clearsurvey/frontend/src/lib/aggregate.ts)의 `buildChartItems()`)를
공유한다. recharts 메이저 업그레이드 시 **PPT/PDF 내보내기 결과물까지 재검증 대상**이다.
(단 `pptxgenjs`는 recharts와 무관하게 자체적으로 차트를 생성하므로 영향은 PDF 캡처 쪽에 국한될
가능성이 높다.)

---

## 4. new-beginnings 계획과의 차이점

향후 두 프로젝트를 비교할 때 혼동을 막기 위해 명시한다.

| 항목 | new-beginnings 계획 | ClearSurvey 실제 |
|---|---|---|
| `lucide-react` | 🟢 SAFE ("아이콘 추가/변경만") | 🔴 **0.575 → 1.24 메이저**. `src/` 33개 파일이 import |
| `vite` | 언급 없음 | 🔴 **7 → 8 메이저** |
| `zod` | 🟢 SAFE ("최신 마이너") | ⚪ **미사용 — 제거 대상** (3→4는 메이저이나 무관) |
| tsconfig target | ❓ 확인 필요 | ✅ ES2022로 충족 확인 |
| 패키지 매니저 | bun 전제 | ⚠️ **bun/npm 락파일 공존** |
| 레거시 패키지 | 언급 없음 | ⚪ `@tanstack/start` 제거 대상 |

`lucide-react` 1.x와 `vite` 8.x의 구체적 breaking changes는 **본 문서 작성 시점에 미조사**이며,
[5단계 실행 계획](#5-단계별-실행-계획)의 Step 3에서 착수 직전 릴리스 노트를 확인한다.

---

## 5. 단계별 실행 계획

> [!IMPORTANT]
> **일괄 업그레이드는 하지 않는다.** 메이저 3종을 한 커밋에 묶으면 빌드가 깨졌을 때 원인 분리가
> 불가능하다. 각 메이저는 **독립 커밋**으로 진행하고, 커밋마다 [검증 계획](#6-검증-계획)의 자동
> 검증을 통과시킨다.

### Step 1 — 정리 (리스크 없음)

1. `package.json`에서 `zod`, `@tanstack/start` 제거.
2. 락파일 일원화 — 채택하지 않을 쪽 삭제 후 재설치.
3. 자동 검증 통과 확인 → **커밋**.

이 단계는 런타임 동작 변화가 없어야 하며, 이후 단계의 노이즈를 줄이는 것이 목적이다.

### Step 2 — 무해 버전 정리 (SAFE 등급)

`package.json` 하한선을 최신으로 정렬:
`react`/`react-dom` ^19.2.7 · `tailwindcss`/`@tailwindcss/vite` ^4.3.3 ·
`@tanstack/react-router` ^1.170.18 · `@tanstack/react-start` ^1.168.28 ·
`@tanstack/router-plugin` ^1.168.20 · `@tanstack/react-query` ^5.101.2 ·
`@supabase/supabase-js` ^2.110.7 · Radix UI 각 최신 마이너.

* `@tanstack/react-start`: `inputValidator()` → `validator()` 이름 변경(deprecation 경고, 즉각
  에러 없음). 해당 API 사용 여부 확인 후 필요 시 교체.
* 자동 검증 통과 확인 → **커밋**.

### Step 3 — 메이저 (커밋 분리)

순서 근거: recharts를 먼저 하는 이유는 위험이 가장 크고 UI 검증 범위가 명확해서다. vite를 마지막에
두는 이유는 빌드 툴체인 변경이 앞선 단계의 검증 결과를 오염시키지 않게 하기 위함이다.

#### 3a. recharts 3 — ✅ `1e91f6e`

2.15.4 → 3.9.2. 타입 에러 14건이 났고 `ChartCard.tsx`·`ui/chart.tsx` 두 파일에 몰려 있었다.

* **`ui/chart.tsx`는 미사용 파일이었다** — 배럴도 없고 import하는 곳이 0건인 shadcn 보일러플레이트가
  타입 에러 10건을 내고 있었다. 삭제로 해결. 이 계획이 최대 위험으로 지목한
  `[&_.recharts-*]` 선택자 리스크도 이 파일에만 있었으므로 **함께 소멸**(적용 대상이 없었다).
* **`<Cell />` → `shape`는 오답이었다.** 공식 권장대로 `shape` prop으로 옮기니 조각/막대는 칠해지나
  **범례 payload에 색이 실리지 않아 범례 견본이 전부 회색(`#808080`)으로 죽었다.** 브라우저로
  확인 후 **데이터에 `fill`을 싣는 방식**으로 선회 — 조각·막대·범례가 한 번에 같은 색을 쓰고
  커스텀 shape 컴포넌트도 불필요하다. (참고: 3.0 마이그레이션 가이드에는 Cell deprecation 언급이
  아예 없다. 3.x 중간에 deprecated되어 패키지 타입 정의에만 기록돼 있다.)
* 타입 시그니처 변경 2건 대응: `PieLabelRenderProps`가 `name`/`percent`를 optional로 넘김,
  Tooltip `Formatter`가 value를 number로 좁혀주지 않음(`ValueType`).

#### 3b. lucide-react 1 — ✅ `1d9996a`

0.575.0 → 1.24.0. **실제 파괴는 브랜드 아이콘 전면 제거**였다(상표 이슈). 사용 중인 37종 중
`<Github />` **1건만** 해당됐고 나머지 36종은 rename 영향이 없었다. 로그인 화면의 GitHub OAuth
버튼은 제공자 식별이 필요하므로 아이콘 하나 때문에 패키지를 들이는 대신 로컬 SVG 컴포넌트로 대체.

그 외 1.0 변경(참고): 아이콘 rename, UMD 빌드 제거, `aria-hidden` 기본값 true, 번들 32% 감소.

#### 3c. vite 8 — ✅ `af9d750`

7.3.2 → 8.1.4. 번들러가 Rollup/esbuild → **Rolldown/Oxc**로 교체되는 큰 변경이나 **설정 영향은
없었다** — `build.rollupOptions`를 쓰지 않아 `rolldownOptions` 리네임 대상이 없고,
`scripts/post-build.js`도 TanStack Start 출력 구조에만 의존해 그대로 동작한다.

* **`@vitejs/plugin-react` 5 → 6 동반 상향 필수** — 6.0.3이 `vite ^8.0.0`을 peer로 요구한다.
  `@tailwindcss/vite`(^5~^8)·`vitest`(^6~^8)·`router-plugin`(>=8)·`react-start`(>=7)는 이미 지원.
* **`vite-tsconfig-paths`는 유지한다.** vite 8이 네이티브 `resolve.tsconfigPaths`로 대체하라고
  안내하고 빌드는 실제로 통과하지만, **vitest 4가 그 옵션을 해석하지 못해 테스트에서 `@/*` 임포트가
  전부 깨진다**(9개 스위트 전멸). 빌드와 테스트가 경로를 같은 방식으로 풀도록 플러그인을 유지했다.
  vitest가 지원하면 그때 제거 — 경위는 `vite.config.ts` 주석에 남겼다.

---

## 6. 검증 계획

### 자동 검증 (매 커밋)

```bash
cd frontend
bun run --bun tsc --noEmit   # 기준선: 통과
bun x vitest run             # 기준선: 136개 통과
bun run build                # 기준선: 성공 (post-build.js 포함)
```

> [!NOTE]
> **`bun run lint`는 회귀 게이트로 쓸 수 없다.** 기준선(`f24ff5c`)에서 이미 **315건
> (301 errors, 14 warnings)** 으로 실패하며, 대부분 `@typescript-eslint/no-explicit-any` 등
> 기존 기술 부채다. 업그레이드 전후 수치가 동일한지(315건 유지)만 비교 지표로 삼고, 통과 여부를
> 조건으로 걸지 않는다. lint 부채 정리는 본 계획의 범위 밖이다.

> [!IMPORTANT]
> **`bunfig.toml`의 24시간 공급망 가드(`minimumReleaseAge = 86400`)를 우회하지 않는다.**
> 릴리스 24시간 미만 버전은 설치가 차단되므로, 목표 버전이 막히면 **가드를 통과하는 최신 버전으로
> 낮춰 잡는다**(예외 등록 금지 — `minimumReleaseAgeExcludes` 추가는 사용자 승인 사항).
> 이로 인해 일부 패키지는 "최신"이 아닌 "설치 가능한 최신"으로 고정된다.

### 수동 검증 — 실행 결과

Playwright로 dev 서버와 Rolldown 프로덕션 번들(`vite preview`) 양쪽에서 확인했다.

| 항목 | 결과 |
|---|---|
| 차트 렌더링 (donut/bar) | ✅ 9개 렌더링, 조각·막대가 `var(--chart-1..5)` 순환 |
| 범례 색상 | ✅ 팔레트 동일 (shape 방식의 회색 회귀를 잡아낸 지점) |
| 막대 radius | ✅ 유지 (`A 4,4` arc 확인) |
| 다크모드 전환 | ✅ 차트·범례 모두 다크 팔레트로 전환 |
| 아이콘 (Step 3b) | ✅ 19개 렌더, 빈 SVG 0개, GitHub 마크 정상 |
| 탭 전환 | ✅ 목록 탭에서 테이블 표시 |
| PPT/PDF 내보내기 | ✅ 유효 파일 생성 (`PK` / `%PDF-` 헤더 확인) |
| 콘솔 에러/경고 | ✅ 0건 (Cell deprecation 경고 포함 없음) |
| 차트 클릭 교차필터 | ✅ `bus` 프로젝트에서 확인 (아래) |

**교차필터 검증 경위**: 처음에는 기본 프로젝트(`수의계약정보`)만 보고 "클릭=필터 배지가 없어 검증
불가"로 판단했으나, 오판이었다. 그 프로젝트의 차트만 조건을 만족하지 않았을 뿐이고 드롭다운의
`bus`·`sangga`·`mumhwa`에는 클릭 가능한 차트가 있다. `bus`에서 도넛 조각(유성구)을 클릭하니
필터바에 `유성구 (695)`가 잡히고 카운트가 `695 / 2423건`, KPI가 695건으로 갱신되며, 도넛은 해당
항목만 남고 옆 막대 차트도 유성구 읍면동으로 재집계됐다 — **정상 동작**.

> [!NOTE]
> 교차필터가 켜지는 조건은 `ChartCard.tsx`의 `catCol` 계산이다 — 차트 타입이 donut/bar/hbar이고,
> `col`이 있으며, 그 컬럼이 `numeric`이 아니거나 `unique_count <= 40`인 이산 수치일 것.
> `gpu_4`는 클릭 가능한 차트를 갖고 있으나 **비공개 프로젝트라 공개 대시보드 드롭다운에 뜨지 않는다**.
>
> 목록 행 수는 필터 확인 지표로 쓸 수 없다 — 테이블이 페이지당 30행으로 잘라 보여줘서 필터 전후가
> 모두 30으로 나온다. 조각 수·KPI·필터바 카운트를 봐야 한다.

> [!NOTE]
> **`tests/e2e/dashboard.spec.ts`가 낡아 있던 문제는 후속으로 해결했다** (이번 업그레이드와 무관한
> 선행 문제였다). 직전 shadcn 전환에서 native `<select>` → `<Select>`(`role=combobox`), 탭
> `<nav>` → `<Tabs>`(`role=tablist`)로 바뀐 것이 반영되지 않아 4개가 실패하고 있었다. 브라우저로
> `nav` 0개 / `[role=tablist]` 1개를 확인해 recharts 회귀가 아님을 먼저 확정한 뒤, 구조 셀렉터를
> role 기반으로 교체했다. e2e **20개 전체 통과**(콜드 스타트 포함).

---

## 7. Open Questions

### 결정 완료 (2026-07-16)

| 쟁점 | 결정 |
|---|---|
| 패키지 매니저 | **bun 확정** — `package-lock.json` 삭제, `bun.lock` 유지 |
| `zod` / `@tanstack/start` | **둘 다 제거** |
| 메이저 3종 진행 범위 | **recharts 3 · lucide-react 1 · vite 8 전부 진행** (각각 별도 커밋) |

> [!CAUTION]
> **bun 실행 파일이 PATH에서 깨져 있습니다 (착수 전 해결 필요).**
> 실제 bun은 `C:\Users\nipa\.bun\bin\bun.exe`(v1.3.14)에 정상 설치되어 있으나, PATH에서 먼저
> 잡히는 `%APPDATA%\npm\`의 셰이밍 3종(`bun`, `bun.cmd`, `bun.ps1`)이 **이미 삭제된 npm 전역
> 패키지**(`%APPDATA%\npm\node_modules\bun` — 부재 확인)를 가리켜 `bun` 호출이 실패한다.
>
> `bun.lock`(7/9)보다 `package-lock.json`(7/16)이 최근인 것은 **이 고장으로 npm에 임시 폴백한
> 결과일 가능성**이 높다. 즉 npm이 의도된 현행이 아니었을 수 있다.
>
> 조치: 깨진 셰임 3종 삭제(전역 환경 변경 → 사용자 승인 필요). 임시로는 전체 경로 호출로 우회 가능.

> [!WARNING]
> **`ui/chart.tsx`의 Tailwind arbitrary 선택자(`[&_.recharts-*]`)는 recharts 3.x에서 내부 DOM
> 클래스명이 변경되었을 경우 조용히 스타일만 깨집니다.** 타입 체크·테스트로 검출되지 않으므로
> Step 3a 이후 육안 검증을 생략해서는 안 됩니다.

> [!NOTE]
> `lucide-react` 1.x / `vite` 8.x의 breaking changes는 미조사 상태입니다. Step 3b·3c 착수 시
> 릴리스 노트를 먼저 확인하고, 영향 범위가 크면 해당 단계만 보류하는 선택지가 있습니다.
> (Step 1·2와 3a는 3b·3c와 독립적이라 먼저 완료할 수 있습니다.)
