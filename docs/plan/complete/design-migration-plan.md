# ClearSurvey 디자인 마이그레이션 분석 & 개선 계획
작성일: 2026-07-11

---

## 1. Admin 현재 코드 하드코딩 요소

### 1-A. admin.tsx — AdminDashboard / ProjectListView / StatCard

| 위치 | 하드코딩 값 | 올바른 토큰 |
|---|---|---|
| 루트 div | `bg-[#f3f4f6]` (hex) | `bg-background` |
| 루트 div (view !== list) | `bg-[#f3f4f6]` (hex) | `bg-muted/30` |
| 목록 영역 | `bg-[#f8fafc]` (hex) | `bg-background` |
| header | `bg-white border-slate-200` | `bg-card border-border` |
| ProjectListView 헤더 박스 | `bg-white border-slate-200` | `bg-card border-border` |
| h1 | `text-slate-800` | `text-foreground` |
| 부제목 p | `text-slate-500` | `text-muted-foreground` |
| table thead | `bg-slate-50/80 text-slate-500` | `bg-muted/50 text-muted-foreground` |
| table tbody | `divide-slate-100` | `divide-border` |
| table row hover | `hover:bg-slate-50/80` | `hover:bg-muted/50` |
| 프로젝트명 아이콘 박스 | `bg-slate-100 group-hover:bg-blue-50` | `bg-muted group-hover:bg-primary/10` |
| 프로젝트명 텍스트 | `text-slate-700 group-hover:text-blue-700` | `text-foreground group-hover:text-primary` |
| 날짜 셀 | `text-slate-500` | `text-muted-foreground` |
| Switch 색상 | `data-[state=checked]:bg-blue-600` | 제거 (shadcn 기본값 사용) |
| 공개 배지 | `text-blue-600 bg-blue-50` | `text-primary bg-primary/10` |
| 비공개 배지 | `text-slate-400 bg-slate-100` | `text-muted-foreground bg-muted` |
| "엔진 가동" 버튼 | `bg-slate-800 hover:bg-slate-700 text-white` | `variant="default"` 사용 |
| table 감싸는 div | `bg-white border-slate-200 rounded-2xl` | `bg-card border-border rounded-xl` |

**StatCard:**
| 현재 | 올바른 토큰 |
|---|---|
| `bg-white border rounded-2xl` | `bg-card border-border/60 rounded-xl` |
| `border-blue-200` (accent) | `border-primary/30` |
| `text-slate-500` | `text-muted-foreground` |
| `text-3xl font-black text-slate-800` | `text-2xl font-bold text-foreground` |
| `text-3xl font-black text-blue-600` (accent) | `text-2xl font-bold text-primary` |

→ **StatCard 전체를 shadcn `<Card>` + `<CardContent>`으로 교체**가 적합

---

### 1-B. Step3_RunDeploy.tsx

| 위치 | 하드코딩 값 | 올바른 처리 |
|---|---|---|
| 성공 박스 | `bg-green-500/10 border-green-500/30 text-green-500` | `bg-[--color-success-bg] text-[--color-success-fg]` 또는 shadcn Alert |
| 대시보드 버튼 | `bg-green-600 hover:bg-green-700 text-white` | `variant="default"` + className으로 처리 가능하지만 의미상 success 색상이므로 유지 가능 |
| 터미널 배경 | `bg-black` | **유지** (터미널 UI 의도적 선택) |
| 터미널 로그 색상 | `text-sky-400`, `text-yellow-400`, `text-green-400`, `text-rose-500` | **유지** (터미널 컨벤션) |
| 미리보기 변경 행 | `bg-amber-500/5`, `text-amber-600` | `bg-[--color-warning-bg] text-[--color-warning-fg]` 고려 가능 |

---

### 1-C. GuideDrawer.tsx

| 현재 구현 | 문제 |
|---|---|
| 커스텀 `position: fixed` backdrop (inline style) | shadcn `<Sheet>`를 쓰면 자동 처리됨 |
| `top: "56px"` hardcoded offset | 헤더 높이에 의존, 헤더 높이 바뀌면 깨짐 |
| `width: "min(480px, 100vw)"` inline style | `<SheetContent className="w-[480px] max-w-full">` |
| 백드롭 opacity inline style | Sheet가 자동 제공 |
| `GROUP_COLORS`에 `bg-slate-100 text-slate-600` | dark variant 있으나 비시멘틱 |

→ **shadcn `<Sheet>`로 전면 교체** 필요

---

### 1-D. 구조적 문제 — StepIndicator 사용 안 됨

`StepIndicator` 컴포넌트가 `admin.tsx` 하단에 정의되어 있으나 **실제 렌더링 JSX에서 단 한 번도 사용되지 않음**.
현재 view 전환은 버튼 클릭(Back, Next)으로만 이루어지며 사용자는 현재 어느 단계인지 시각적으로 알 수 없음.

→ 스텝 인디케이터를 상단 헤더 또는 서브 헤더에 실제로 렌더링해야 함

---

### 1-E. Admin 레이아웃 — Sidebar 부재

design.md §15는 `SidebarProvider` + `Sidebar` 레이아웃을 명시한다.
현재 admin은 `flex flex-col h-screen` + 탑헤더만 있고 사이드바 없음.

**현실적 판단**: 프로젝트의 admin이 step-wizard(목록→설정→실행) 구조이므로 영구 사이드바가 맞지 않을 수 있다.
대신 step-wizard 상단에 breadcrumb/step 인디케이터를 추가하는 것이 더 적합하다.
→ **사이드바 레이아웃은 도입하지 않고, StepIndicator를 상단에 배치하는 방향으로 결정**

---

## 2. Admin → design.md 적용 계획

### 변경 파일 목록

| 파일 | 변경 범위 |
|---|---|
| `admin.tsx` | 하드코딩 색상 전체 → 시멘틱 토큰, StatCard → shadcn Card, StepIndicator 렌더링 추가 |
| `GuideDrawer.tsx` | inline style → shadcn `<Sheet>` 전환 |
| `Step3_RunDeploy.tsx` | 성공 박스 → Alert 또는 design token, 버튼 색상 정리 |
| `Step1_ProjectUpload.tsx` | 이미 shadcn 잘 사용 중, `<select>` 하나 → shadcn Select로 교체만 필요 |
| `Step2_ConfigEditor.tsx` | 별도 확인 필요 (읽은 부분은 정상) |

### admin.tsx 주요 변경 사항

```
bg-[#f3f4f6]          → bg-background
bg-[#f8fafc]          → bg-background  
bg-white              → bg-card
border-slate-200      → border-border
text-slate-800        → text-foreground
text-slate-500        → text-muted-foreground
bg-slate-50/80        → bg-muted/50
divide-slate-100      → divide-border
hover:bg-slate-50/80  → hover:bg-muted/50
data-[state=checked]:bg-blue-600 → 제거
bg-blue-50/text-blue-600 → bg-primary/10 text-primary
bg-slate-800 hover:bg-slate-700 → variant="default"
```

**StatCard 교체:**
```tsx
// 현재
<div className="bg-white border rounded-2xl border-blue-200 ...">
  <div className="text-3xl font-black text-blue-600">{value}</div>

// 목표 (design.md §11 KPI 카드 패턴)
<Card className="shadow-sm border-border/60">
  <CardContent className="px-4 py-2.5 flex flex-col justify-center">
    <div className="text-[12px] font-medium text-muted-foreground mb-0.5">{label}</div>
    <div className="text-2xl font-bold tracking-tight text-primary">{value}</div>
  </CardContent>
</Card>
```

**GuideDrawer → Sheet 교체:**
```tsx
// 현재: 커스텀 fixed div + backdrop div
// 목표
<Sheet open={isOpen} onOpenChange={(o) => !o && onClose()}>
  <SheetContent className="w-[480px] sm:w-[480px] overflow-y-auto">
    <SheetHeader>
      <SheetTitle>설문 정제 가이드</SheetTitle>
    </SheetHeader>
    {/* 내용 동일 */}
  </SheetContent>
</Sheet>
```

---

## 3. Index 현재 코드 → design.md 변경사항 분석

### 3-A. 스타일 시스템 전환

| 항목 | 현재 (legacy-dashboard.css) | 목표 (Tailwind + shadcn) |
|---|---|---|
| 페이지 배경 | `.app-wrap { background: var(--bg-primary) }` | `className="bg-background min-h-screen"` |
| 헤더 | `.header { ... }` | `<header className="h-14 border-b bg-card px-4 sm:px-6 flex items-center gap-3">` |
| KPI 행 | `.kpi-row { display: grid; ... }` | `<div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 sm:px-6 py-3 bg-secondary/20 border-b">` |
| KPI 카드 | `.kpi-card { ... }` | `<Card>` + `<CardContent>` |
| 필터 영역 | `.filter-section`, `.filter-row` | `<div className="border-b bg-card py-2">` |
| 검색창 | `<input>` + `.search-wrap` + 이모지🔍 | shadcn `<Input>` + lucide `<Search>` |
| 필터 드롭다운 | `<select className="filter-select">` | shadcn `<Select>` (Radix) |
| 초기화 버튼 | `<button className="btn-ghost btn-sm">` | `<Button variant="ghost" size="sm">` |
| 탭 | `.tab-nav`, `.tab-btn.active` | shadcn `<Tabs>`, `<TabsList>`, `<TabsTrigger>` |
| 차트 그리드 | `.chart-grid { grid-template-columns: repeat(auto-fill, minmax(280px,1fr)) }` | `className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 p-4"` |
| 차트 카드 | `.chart-card`, `.chart-title` | shadcn `<Card>` + `<CardHeader>` + `<CardContent>` |
| 데이터 테이블 | `.data-table` raw HTML table | shadcn `<Table>` 컴포넌트 |
| 드로어 패널 | `.drawer-panel`, `.drawer-backdrop` CSS 애니메이션 | shadcn `<Sheet>` |
| 아이콘 | 이모지 (📊, 🔍, ⚙️, 📖, ✕) | lucide-react (`BarChart3`, `Search`, `Settings`, `BookOpen`, `X`) |
| 다크모드 트리거 | `[data-theme="dark"]` CSS 셀렉터 | `.dark` 클래스 (shadcn 방식) |

### 3-B. 변경 파일 목록

| 파일 | 변경 범위 |
|---|---|
| `routes/index.tsx` | 헤더, 탭 → shadcn Tabs, import 제거 |
| `components/dashboard/KpiRow.tsx` | `.kpi-row` → Tailwind grid + shadcn Card |
| `components/dashboard/FilterBar.tsx` | 전체 → shadcn Input + Select + Button |
| `components/dashboard/ChartCard.tsx` | `.chart-card` → shadcn Card, 2x1 inline style → className |
| `components/dashboard/DataTable.tsx` | `.data-table` → shadcn Table, 드로어 → shadcn Sheet |
| `components/dashboard/GuideDrawer.tsx` | admin과 동일한 Sheet 교체 (index에서도 사용) |
| `legacy-dashboard.css` | **삭제** |

---

## 4. 기능 오류 점검

### 4-A. PR #12 무효화 문제 ⚠️ 중요

PR #12 (현재 open)는 `legacy-dashboard.css` 안의 `@media (max-width: 640px)` 블록에 
`.chart-card { grid-column: auto !important; }` 를 추가하는 모바일 버그 수정이다.

**`legacy-dashboard.css`를 삭제하면 PR #12가 무의미해진다.**

올바른 해결책:
```tsx
// ChartCard.tsx 현재: inline style (CSS 오버라이드 불가)
if (layout === "2x1") cardStyle = { gridColumn: "span 2" };

// 목표: className으로 교체 (모바일에서 max-sm:col-span-1 추가 가능)
className={cn(
  "...",
  layout === "2x1" && "col-span-2 max-sm:col-span-1",
  layout === "2x2" && "col-span-2 row-span-2 max-sm:col-span-1",
  layout === "full" && "col-span-full",
)}
```
→ **PR #12를 닫고 index 마이그레이션에서 함께 처리**

---

### 4-B. 다크모드 로직 변경

현재 `index.tsx`는 다크모드를 이중으로 설정한다:
```ts
document.documentElement.dataset.theme = next;     // legacy-dashboard.css용
document.documentElement.classList.toggle("dark"); // shadcn/Tailwind용
```

`legacy-dashboard.css` 삭제 후:
- `dataset.theme` 라인 제거
- `.dark` 클래스 토글만 유지
- `localStorage.setItem("theme", next)` 유지

---

### 4-C. FilterBar 테스트 변경 ⚠️

현재 `FilterBar.test.tsx`는 `screen.getAllByRole("combobox")`로 native `<select>` 를 찾는다.

shadcn `<Select>` (Radix UI)는 접근성 패턴이 다르다:
- `<SelectTrigger>`는 `role="combobox"` — 동일하게 찾힘
- `user.selectOptions()`는 동작 안 함 → `user.click()` + `user.click(option)` 패턴으로 변경 필요

→ **`FilterBar.test.tsx` 인터랙션 테스트 수정 필요**

---

### 4-D. DataTable 드로어 → Sheet 전환

현재:
- `.drawer-panel` + `.drawer-backdrop`이 CSS 애니메이션으로 슬라이드인
- `selected` 상태로 `open/close` 제어
- 백드롭 클릭 → `setSelected(null)`

shadcn `<Sheet>` 전환 후:
- `open={!!selected}` + `onOpenChange={(o) => !o && setSelected(null)}` 사용
- 기능 동일, 애니메이션은 shadcn 기본값 사용

→ **기능적 변화 없음, 애니메이션만 다름**

---

### 4-E. GuideDrawer top 오프셋 제거

현재 `top: "56px"` 는 헤더가 56px임을 가정한다.
shadcn `<Sheet side="right">` 는 `inset-y-0 right-0` (전체 높이)로 렌더된다.
→ **오히려 더 자연스러워짐, 기능 문제 없음**

---

### 4-F. Step1_ProjectUpload 내 native `<select>` 1개

`Step1_ProjectUpload.tsx`의 "중복 제거 전략" 드롭다운이 native `<select>`를 쓴다.
→ shadcn `<Select>`로 교체 필요 (디자인 통일)

---

### 4-G. index.tsx 탭 숨김 처리

현재:
```tsx
<section className={`tab-panel${tab !== "dashboard" ? " hidden" : ""}`}>
```
`hidden`은 Tailwind 유틸리티이므로 작동은 하나, `tab-panel` 클래스는 legacy CSS 의존.

shadcn `<Tabs>`로 교체하면 `TabsContent`가 자동으로 숨김/표시를 처리한다.

---

## 5. 전체 개선 계획

### Phase 1: Admin 색상/컴포넌트 정리 (범위 작음, 기능 영향 낮음)

**목표**: 하드코딩 제거, 다크모드 활성화, StatCard/GuideDrawer 교체

변경 파일:
- `admin.tsx` — 하드코딩 색상 → 시멘틱 토큰, StatCard → shadcn Card, StepIndicator 실제 렌더링
- `GuideDrawer.tsx` — inline style backdrop → shadcn Sheet
- `Step3_RunDeploy.tsx` — 성공 박스 색상 정리
- `Step1_ProjectUpload.tsx` — native select 1개 교체

기능 리스크: **낮음**

---

### Phase 2: Index 전면 마이그레이션 (범위 큼)

**목표**: legacy-dashboard.css 완전 삭제, 모든 컴포넌트 shadcn 전환

순서:
1. `KpiRow.tsx` → shadcn Card
2. `FilterBar.tsx` → shadcn Input + Select + Button
3. `ChartCard.tsx` → shadcn Card + className 기반 grid span
4. `DataTable.tsx` → shadcn Table + Sheet
5. `routes/index.tsx` → 헤더 Tailwind, 탭 shadcn Tabs, 다크모드 로직 단순화
6. `legacy-dashboard.css` 삭제
7. PR #12 닫기

기능 리스크:
- FilterBar 테스트 수정 필요
- 다크모드 로직 단순화 확인 필요
- ChartCard 2x1 모바일 처리 방식 변경 (inline style → className)

---

### Phase 3: 통일 후 검증

- 다크모드 전환 확인 (index + admin 동시)
- 모바일 레이아웃 확인 (차트 2x1 처리)
- 기존 Vitest 테스트 통과 확인 + FilterBar 테스트 수정

---

## 우선순위 요약

| 우선순위 | 작업 | 이유 |
|---|---|---|
| 1 | PR #12 닫기 | legacy-dashboard.css 삭제 시 무의미 |
| 2 | Admin Phase 1 | 기능 리스크 낮고 즉각적 개선 |
| 3 | Index Phase 2 | 큰 작업이지만 핵심 목표 |
| 4 | 테스트 수정 | Phase 2 완료 후 |

---

## 6. 반영 현황 (2026-07-16 기준)

계획 대비 실제 코드 반영 상태를 정리한다.

### ✅ 완료

**Phase 1 — Admin** (`admin.tsx`, `GuideDrawer.tsx`)
- 하드코딩 색상 → 시멘틱 토큰 전면 적용
- StatCard → shadcn `<Card>` + `<CardContent>` 교체
- StepIndicator 상단 헤더에 실제 렌더링 (§1-D 해결)
- GuideDrawer → shadcn `<Sheet>` + `<Tabs>` + `<Table>` 전환

**Phase 2 — Index**
- `legacy-dashboard.css` 삭제 완료
- 다크모드 로직 단순화 (§4-B): `dataset.theme` 제거, `.dark` 클래스 토글 + `localStorage`만 유지
- `ChartCard.tsx` 2x1/2x2 그리드 스팬 (§4-A): inline `gridColumn` → `col-span-2 max-sm:col-span-1` className. PR #12의 모바일 버그가 여기서 흡수됨
- `DataTable.tsx` 드로어 → shadcn `<Sheet>` 전환
- `FilterBar.tsx` (§3-B): native `<input>`/`<select>` + 이모지 → shadcn `<Input>` + `<Select>` + lucide `<Search>`/`<X>`. Radix Select의 빈 value 제약 때문에 "전체" 옵션에 `__all__` sentinel 도입
- `routes/index.tsx`: 프로젝트 선택 native `<select>` → shadcn `<Select>`, 탭 네비 커스텀 버튼 → shadcn `<Tabs>` (underline 디자인은 `data-[state=active]`로 유지)

**Phase 3 — 검증**
- FilterBar 테스트 수정 (§4-C): `user.selectOptions()` → 트리거 클릭 + 옵션 클릭 패턴, "✕ 초기화" → "초기화" 매칭
- `src/test/setup.ts`: Radix Select용 jsdom mock 추가 (`hasPointerCapture`/`setPointerCapture`/`releasePointerCapture`/`scrollIntoView`)
- 전체 테스트 129/129 통과, `tsc --noEmit` exit 0, `vite build` 성공(프리렌더 포함)

### ⏳ 미반영 (기능·디자인 영향 없음, 선택 사항)
- `DataTable.tsx` 표 본체: 드로어는 Sheet로 전환됐으나 표 자체는 native `<table>`(토큰 스타일 적용) 유지. shadcn `<Table>` 교체는 시각적 차이가 없어 보류
- PR #12: `legacy-dashboard.css` 삭제 + ChartCard 스팬 흡수로 내용상 무의미(moot) 상태. GitHub에서 별도 close 필요

---

## 7. 차트 2D 그리드 레이아웃 (Grid Spanning) — ✅ 완료

> 구 `chart_grid_spanning_plan.md`를 이 문서로 통합(2026-07-17). 원래 별도 계획서였으나, 그 문서의
> §2~§4(구현 *방식*)가 본 문서의 마이그레이션으로 전부 무효화되어 따로 둘 이유가 없어졌다.
> 기능 자체는 구현 완료 상태다.

### 7-A. 목표

1차원 너비 분할(Flexbox) 대신, 기준 크기(1:1)를 바탕으로 차트 카드를 가로/세로로 2배 이상 키우는
2차원 그리드 확장. 세로 2배(`2x2`) 카드는 내부 차트(도넛 등)가 빈 공간만 차지하지 않도록 높이와
도넛 반지름(`outerRadius`)을 비례 확장한다.

### 7-B. 최종 구현 (현재 코드 기준)

| 항목 | 구현 |
|---|---|
| 타입 | `types/dashboard.ts` — `ChartItem.layout?: "1x1" \| "2x1" \| "2x2" \| "0.5x1" \| "full"` |
| 설정 UI | `components/manager/config/ChartConfigCard.tsx` (Step2 "차트 구성" 카드)의 크기 드롭다운 |
| 그리드 | `routes/index.tsx`의 인라인 Tailwind — `grid [grid-auto-flow:dense]` + `gridTemplateColumns: repeat(auto-fit, minmax(320px, 1fr))`. 무한 팽창은 `maxColumns` 기반 `maxWidth`로 방어([remaining_improvements.md](remaining_improvements.md) §3) |
| 스팬 | `ChartCard.tsx`의 **className** — `col-span-2 max-sm:col-span-1`(2x1), `col-span-2 max-sm:col-span-1 row-span-2`(2x2), `col-span-full`(full) |
| 크기 확장 | `2x2`는 높이 560px, 파이 반지름 비례 확대 |

### 7-C. 폐기된 설계 (기록용)

원 계획서는 아래 3가지를 전제했으나 전부 바뀌었다. 같은 실수를 반복하지 않도록 이유를 남긴다.

- **크기 드롭다운이 `Step2_ConfigEditor.tsx`에 있다** → `ChartConfigCard.tsx`로 분리됨.
- **`src/legacy-dashboard.css`의 `.chart-grid`를 CSS Grid로 재구축** → 이 문서의 Phase 2에서
  `legacy-dashboard.css` 자체가 삭제됨. 그리드는 `routes/index.tsx`로 이동.
- **`layout`에 따라 `gridColumn`/`gridRow`를 인라인 스타일로 주입** → **className 기반으로 전환**.
  인라인 스타일은 CSS로 오버라이드할 수 없어 모바일에서 강제 1열로 접히지 않는 버그(구 PR #12)를
  낳았다. `max-sm:col-span-1`로 접으려면 반드시 className이어야 한다.
