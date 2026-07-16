# 📊 대시보드 차트 PPT / PDF 내보내기 기능 기획서

> **⛔ 구현 상태 (2026-07-16 기준): 미착수.** 아래 §5 변경 파일 및 마지막 체크리스트 8개 항목이 전부
> 미구현 상태입니다(`exportPptx.ts`/`exportPdf.ts` 없음, `pptxgenjs` 미설치, `buildChartItems()` 미추출,
> `index.tsx` PPT/PDF 버튼 없음). 단 `html2pdf.js`는 이미 설치되어 있고 `DetailPanel.tsx`의 개별 행
> PDF에 사용 중입니다(대시보드 전체 내보내기와는 별개). 이 문서는 구현 착수 시 그대로 사용합니다.

> **작성일**: 2026-07-15  
> **대상 범위**: `frontend/` 전용 (백엔드 수정 없음)  
> **관련 파일**: [`ChartCard.tsx`](file:///c:/ai/clearsurvey/frontend/src/components/dashboard/ChartCard.tsx) · [`KpiRow.tsx`](file:///c:/ai/clearsurvey/frontend/src/components/dashboard/KpiRow.tsx) · [`index.tsx`](file:///c:/ai/clearsurvey/frontend/src/routes/index.tsx) · [`types/dashboard.ts`](file:///c:/ai/clearsurvey/frontend/src/types/dashboard.ts)

---

## 목차

1. [기능 개요 및 목표](#1-기능-개요-및-목표)
2. [기술 스택 및 라이브러리 선택](#2-기술-스택-및-라이브러리-선택)
3. [PPT 내보내기 — 네이티브 차트 방식 설계](#3-ppt-내보내기--네이티브-차트-방식-설계)
4. [PDF 내보내기 — 기존 html2pdf.js 활용 설계](#4-pdf-내보내기--기존-html2pdfjs-활용-설계)
5. [변경 파일 목록 및 상세 설계](#5-변경-파일-목록-및-상세-설계)
6. [슬라이드 구성안 (PPT)](#6-슬라이드-구성안-ppt)
7. [기술적 제약 및 해결 전략](#7-기술적-제약-및-해결-전략)
8. [검증 계획](#8-검증-계획)
9. [예상 공수](#9-예상-공수)

---

## 1. 기능 개요 및 목표

현재 공개 대시보드(`/`)에는 Recharts 기반의 차트들(막대, 가로막대, 도넛, 멀티바)과 KPI 카드가 렌더링되어 있습니다. 이 화면에서 사용자가 **현재 필터가 적용된 상태**의 차트 데이터를 그대로:

- **PPT(.pptx)**: PowerPoint에서 수정 가능한 네이티브 차트 객체로 내보내기
- **PDF(.pdf)**: 현재 화면 레이아웃을 그대로 PDF로 인쇄하기

두 가지 내보내기를 대시보드 헤더 버튼으로 제공합니다.

### 핵심 원칙

| 항목 | 결정사항 |
|------|---------|
| PPT 차트 포맷 | SVG 이미지 ❌ → **네이티브 PPT 차트 객체** ✅ (PowerPoint에서 막대/파이 수정 가능) |
| PDF 렌더링 | 기존 설치된 `html2pdf.js` 재활용 (동적 import 방식) |
| 백엔드 변경 | 없음 — 순수 프론트엔드 구현 |
| 필터 상태 반영 | `filtered` rows 기준 집계 → 현재 화면과 동일한 수치 |

---

## 2. 기술 스택 및 라이브러리 선택

### PPT: `pptxgenjs` (신규 설치 1개)

```bash
# frontend/ 디렉토리에서 실행
bun add pptxgenjs
```

**선택 근거:**
- `slide.addChart(ChartType.bar, data)` API로 **네이티브 PPT 차트 객체** 생성
- PowerPoint에서 우클릭 → "데이터 편집" → Excel 시트 열림 (수치·범주명 수정 가능)
- `ChartCard.tsx`의 `items` 배열(`{ name, value }[]`)이 `pptxgenjs` 입력 포맷과 동일 — 변환 코드 최소화
- 지원 차트 타입: `bar`(세로), `barH`(가로), `doughnut`(도넛), `pie`

| ClearSurvey 차트 타입 | `pptxgenjs` 타입 |
|---|---|
| `bar` | `pptx.ChartType.bar` |
| `hbar` | `pptx.ChartType.barH` |
| `donut` | `pptx.ChartType.doughnut` |
| `multibar` | `pptx.ChartType.bar` (다중 시리즈) |

### PDF: `html2pdf.js` (기설치, 이미 `package.json` L56에 존재)

- `DetailPanel.tsx`에서 이미 동적 import 패턴으로 활용 중
- 동일 방식으로 대시보드 차트 그리드 영역을 캡처

---

## 3. PPT 내보내기 — 네이티브 차트 방식 설계

### 3-1. 데이터 흐름

```
index.tsx (DashboardPage)
  ├─ filtered: Row[]          ← 현재 필터 적용 상태 행
  ├─ cfg: DashboardConfig     ← 차트·KPI 설정
  └─ "PPT 저장" 버튼 클릭
       └─ exportToPptx(cfg, filtered, data) 호출
            └─ lib/exportPptx.ts [NEW]
                 ├─ buildChartData(chart, rows, data)  ← items 계산
                 ├─ pptx.addSlide() × N               ← 슬라이드 생성
                 └─ pptx.writeFile("clearsurvey.pptx") ← 다운로드
```

### 3-2. 차트 데이터 변환 로직

`ChartCard.tsx`의 `useMemo` 내 `items` 계산 로직을 순수 함수로 추출하여 `exportPptx.ts`에서 재사용합니다.

```typescript
// lib/exportPptx.ts 내 buildChartItems() — ChartCard.tsx의 items useMemo를 함수로 분리
function buildChartItems(
  chart: ChartItem,
  rows: Row[],
  data: ProjectData
): { name: string; value: number }[]
```

> **Note**: `ChartCard.tsx`의 `useMemo`를 직접 재활용하려면 React 훅 규칙상 컴포넌트 밖에서 호출 불가.  
> 순수 함수로 추출하면 `ChartCard.tsx`에서도, `exportPptx.ts`에서도 동일하게 호출 가능합니다.

### 3-3. `pptxgenjs` 차트 삽입 코드 (핵심)

```typescript
// bar 예시
slide.addChart(pptx.ChartType.bar, [
  {
    name: chart.title || chart.col,
    labels: items.map((i) => i.name),   // ["매우 만족", "만족", ...]
    values: items.map((i) => i.value),  // [42, 31, ...]
  },
], {
  x: 0.5, y: 1.0, w: 8.5, h: 4.5,
  showLegend: true,
  showTitle: true,
  title: chart.title || chart.col,
  dataLabelFontSize: 10,
  chartColors: ["4A90D9", "7ED321", "F5A623", "9B59B6", "E74C3C"],
});

// donut 예시
slide.addChart(pptx.ChartType.doughnut, [...], { holeSize: 55 });

// multibar (다중 시리즈) 예시
slide.addChart(pptx.ChartType.bar, [
  { name: col1.label, labels: [...], values: [...] },
  { name: col2.label, labels: [...], values: [...] },
]);
```

---

## 4. PDF 내보내기 — 기존 html2pdf.js 활용 설계

### 4-1. 캡처 대상 DOM 요소

현재 `index.tsx`의 대시보드 탭 `<section>` 요소 전체를 캡처합니다.

```tsx
// index.tsx에 ref 추가
const dashboardRef = useRef<HTMLDivElement>(null);

// 대시보드 섹션에 ref 부착
<section ref={dashboardRef} className={`px-6 py-5 ...`}>
  {/* 차트 그리드 */}
</section>
```

### 4-2. PDF 생성 함수 (동적 import)

```typescript
// lib/exportPdf.ts [NEW]
export async function exportToPdf(
  element: HTMLElement,
  projectName: string
): Promise<void> {
  const { default: html2pdf } = await import("html2pdf.js");
  await html2pdf()
    .set({
      margin: [8, 8, 8, 8],           // mm
      filename: `${projectName}_dashboard.pdf`,
      image: { type: "jpeg", quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    })
    .from(element)
    .save();
}
```

### 4-3. 다크모드 대응

PDF 출력 시 다크모드 배경이 그대로 캡처되면 인쇄 가독성이 떨어집니다.  
캡처 직전 `document.documentElement.classList.remove("dark")`를 적용하고, 캡처 완료 후 원복합니다.

```typescript
const wasDark = document.documentElement.classList.contains("dark");
if (wasDark) document.documentElement.classList.remove("dark");
try {
  await exportToPdf(element, projectName);
} finally {
  if (wasDark) document.documentElement.classList.add("dark");
}
```

---

## 5. 변경 파일 목록 및 상세 설계

### 프론트엔드

---

#### [NEW] `frontend/src/lib/exportPptx.ts`

**역할**: PPT 내보내기 전체 로직

```
주요 함수:
  buildChartItems(chart, rows, data)    → items[] 계산 (ChartCard와 동일 로직)
  buildKpiSummary(cfg, rows)            → KPI 수치 목록 계산
  exportToPptx(cfg, rows, data)         → pptxgenjs 호출, .pptx 다운로드
    ├─ 슬라이드 1: 타이틀 슬라이드
    ├─ 슬라이드 2: KPI 요약 테이블
    └─ 슬라이드 3~N: 차트 슬라이드 (2개/슬라이드)
```

**주요 처리 세부사항:**
- CSS 변수(`var(--chart-1)` 등) 대신 고정 hex 팔레트 사용 (PPT 파일 내 직접 임베드)
- `multibar` 타입은 `cols` 배열을 다중 시리즈(`{ name, labels, values }[]`)로 변환
- 차트 1개인 경우 슬라이드 전체(`w: 9, h: 5.5`)에 단독 배치, 2개인 경우 좌우 분할

---

#### [NEW] `frontend/src/lib/exportPdf.ts`

**역할**: PDF 내보내기 전체 로직 (html2pdf.js 래퍼)

```
주요 함수:
  exportToPdf(element, projectName, isDark)  → 다크모드 처리 후 html2pdf 호출
```

---

#### [MODIFY] [`frontend/src/lib/aggregate.ts`](file:///c:/ai/clearsurvey/frontend/src/lib/aggregate.ts)

**역할**: `buildChartItems()` 순수 함수 추가

- `ChartCard.tsx`의 `items useMemo` 로직을 순수 함수로 추출하여 이 파일에 추가
- `ChartCard.tsx`와 `exportPptx.ts` 양쪽에서 import하여 재사용
- 기존 함수(`aggCategory`, `aggMultiValue`, `aggNumericSum`, `filterRows`)는 변경 없음

```typescript
// 추가될 함수 시그니처
export function buildChartItems(
  chart: ChartItem,
  rows: Row[],
  data: ProjectData
): { name: string; value: number }[]
```

---

#### [MODIFY] [`frontend/src/components/dashboard/ChartCard.tsx`](file:///c:/ai/clearsurvey/frontend/src/components/dashboard/ChartCard.tsx)

**역할**: `items` useMemo를 `buildChartItems()` 호출로 교체

- L47~L100의 `useMemo` 내부 계산 로직을 `buildChartItems(chart, rows, data)` 단일 호출로 교체
- 컴포넌트 동작 변화 없음 (리팩터링만)

---

#### [MODIFY] [`frontend/src/routes/index.tsx`](file:///c:/ai/clearsurvey/frontend/src/routes/index.tsx)

**역할**: "PPT 저장" / "PDF 저장" 버튼 추가 및 핸들러 연결

헤더(`<header>`) 영역 — 다크모드 토글 버튼(`Moon/Sun`) 좌측에 두 버튼 삽입:

```tsx
// 추가될 버튼 (헤더 우측)
<Button variant="outline" size="sm" onClick={handleExportPptx}
        className="text-xs gap-1.5" title="차트를 PPT로 내보내기">
  <FileBarChart className="h-3.5 w-3.5" /> PPT
</Button>
<Button variant="outline" size="sm" onClick={handleExportPdf}
        className="text-xs gap-1.5" title="대시보드를 PDF로 내보내기">
  <FileText className="h-3.5 w-3.5" /> PDF
</Button>
```

추가 상태:
```tsx
const [exporting, setExporting] = useState<"ppt" | "pdf" | null>(null);
const dashboardRef = useRef<HTMLDivElement>(null);
```

핸들러:
```tsx
const handleExportPptx = async () => {
  if (!cfg || !data) return;
  setExporting("ppt");
  try {
    const { exportToPptx } = await import("@/lib/exportPptx");
    await exportToPptx(cfg, filtered, data);
  } finally {
    setExporting(null);
  }
};

const handleExportPdf = async () => {
  if (!dashboardRef.current || !data) return;
  setExporting("pdf");
  const { exportToPdf } = await import("@/lib/exportPdf");
  try {
    await exportToPdf(
      dashboardRef.current,
      data.meta.project,
      theme === "dark"
    );
  } finally {
    setExporting(null);
  }
};
```

---

## 6. 슬라이드 구성안 (PPT)

```
┌─────────────────────────────────────┐
│  슬라이드 1: 타이틀                   │
│  ・ 프로젝트명 (대제목)               │
│  ・ "ClearSurvey 설문 분석 결과"      │
│  ・ 생성일시 · 총 응답수 (부제목)      │
│  ・ 적용된 필터 조건 (있을 경우)       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  슬라이드 2: KPI 요약                 │
│  ・ KPI 항목을 텍스트 박스로 나열      │
│    (label + 수치 + 단위)             │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  슬라이드 3~N: 차트 (2개/슬라이드)    │
│  ・ 차트 좌/우 2열 배치               │
│  ・ 차트가 홀수인 경우 마지막 슬라이드  │
│    에 1개만 중앙에 크게 배치           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  마지막 슬라이드: 출처                │
│  ・ 데이터 기준일 · ClearSurvey 출처  │
└─────────────────────────────────────┘
```

---

## 7. 기술적 제약 및 해결 전략

### ⚠ CSS 변수 색상 (`var(--chart-1)`)

**문제**: Recharts에서 `fill="var(--chart-1)"`로 렌더링되는 색상은 DOM CSS 변수이므로, `pptxgenjs`에 넘기는 데이터에 그 문자열을 그대로 사용하면 PPT 파일에서 올바른 색상이 적용되지 않습니다.

**해결**: `exportPptx.ts` 내부에 고정 hex 팔레트 정의:
```typescript
const PPT_PALETTE = ["4A90D9", "7ED321", "F5A623", "9B59B6", "E74C3C"];
```
CSS 변수 대신 이 팔레트를 직접 `chartColors` 옵션에 전달합니다.

### ⚠ `histogram` 차트 타입

**문제**: `ChartItem` 타입 중 `histogram`은 연속형 수치를 구간 분할하는 방식으로, `pptxgenjs`에 직접 매핑이 어렵습니다.

**해결**: `histogram` 타입은 `bar`로 폴백 처리 (구간값을 범주로 취급).

### ⚠ PDF 다크모드 배경

**문제**: 다크모드에서 캡처하면 PPT 슬라이드처럼 어두운 배경이 PDF에 그대로 들어가 인쇄 시 가독성 저하 및 잉크 낭비.

**해결**: §4-3의 `dark` 클래스 일시 제거 → 캡처 → 원복 패턴 적용.

### ⚠ `pptxgenjs` 번들 크기

**문제**: `pptxgenjs`는 약 800kB 크기의 라이브러리입니다.

**해결**: `exportToPptx()` 내부에서 `await import("pptxgenjs")`로 동적 import 적용 → 초기 로딩 번들에 포함되지 않고 버튼 클릭 시점에만 로드됩니다. (`html2pdf.js`와 동일한 패턴)

---

## 8. 검증 계획

### 자동 테스트 (`vitest`)

- `buildChartItems()` 순수 함수의 단위 테스트 추가 (`frontend/src/lib/__tests__/aggregate.test.ts`에 케이스 추가)
  - `bar` 타입: 정렬·`max_items` 절삭 확인
  - `donut` 타입: `show_percent` 옵션
  - `multibar` 타입: 다중 시리즈 변환
  - `histogram` 타입: `bar` 폴백
- `tsc` 타입 체크 통과 확인

### 수동 검증

| 항목 | 검증 방법 |
|------|---------|
| PPT 버튼 클릭 → .pptx 다운로드 | 파일 열어 차트 우클릭 → "데이터 편집" 확인 |
| PPT 차트 수정 가능 여부 | 막대 색상·수치 변경 후 저장 테스트 |
| PDF 라이트모드 출력 | 다크모드 상태에서 PDF 생성 후 배경 흰색 확인 |
| 필터 적용 상태 반영 | 특정 값으로 필터 후 PPT/PDF → 해당 수치 일치 확인 |
| 차트 0개인 경우 | 차트 없는 프로젝트에서 버튼 비활성화 또는 빈 PPT 안전 처리 |
| `multibar` 타입 | 다중 시리즈 PPT 차트로 정상 렌더링 확인 |

---

## 9. 예상 공수

| 작업 항목 | 예상 시간 |
|----------|----------|
| `bun add pptxgenjs` 설치 및 타입 확인 | 0.5h |
| `aggregate.ts`에 `buildChartItems()` 추출 | 1.0h |
| `ChartCard.tsx` 리팩터링 (useMemo → 함수 호출) | 0.5h |
| `exportPptx.ts` 구현 (슬라이드 빌더 전체) | 2.0h |
| `exportPdf.ts` 구현 (html2pdf.js 래퍼) | 0.5h |
| `index.tsx` 버튼 추가 및 핸들러 연결 | 0.5h |
| 단위 테스트 추가 (`buildChartItems`) | 0.5h |
| 수동 검증 및 엣지케이스 처리 | 0.5h |
| **합계** | **~6.0h** |

---

## 구현 시작 체크리스트

- [ ] `bun add pptxgenjs` 설치
- [ ] `aggregate.ts`에 `buildChartItems()` 순수 함수 추출
- [ ] `ChartCard.tsx` useMemo를 `buildChartItems()` 호출로 교체
- [ ] `lib/exportPptx.ts` 신규 작성
- [ ] `lib/exportPdf.ts` 신규 작성
- [ ] `index.tsx` PPT/PDF 버튼 추가 및 핸들러 연결
- [ ] `vitest` 단위 테스트 추가 및 `tsc` 통과 확인
- [ ] 브라우저에서 PPT/PDF 출력물 수동 검증
