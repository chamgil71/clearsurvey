# 📊 차트 내보내기 기능 기획서 (Excel · PPT · PDF)

> **✅ 구현 상태: 완료.** 세 경로 모두 구현 및 검증 완료.
> - **Excel 네이티브 차트**(백엔드, `summarizer.py`) — [§0](#0-excel-네이티브-차트-백엔드) 참조
> - **PPT 네이티브 차트 / PDF 캡처**(프론트엔드, 2026-07-16) — 아래 §1~§10 참조.
>   계획에 없던 이슈 하나를 발견·해결(html2canvas의 `oklch()` 미지원). 상세는
>   **[§10 구현 결과 및 계획 대비 변경점](#10-구현-결과-및-계획-대비-변경점)**.

> **⚠️ 개정(2026-07-17)**: **차트 PDF의 §4 설계는 폐기·재작성됐다.** "그리드 통째 캡처"로는
> A4 경계에서 차트가 잘리는 것을 막을 수 없었다(CSS Grid + html2pdf `avoid`의 구조적 한계).
> 현재는 카드별 캡처 + A4 3×2 직접 배치(`lib/exportPdfCharts.ts`)를 쓴다 → [§4-3](#4-3-그리드-통째-캡처를-폐기한-이유-2026-07-17)·[§4-4](#4-4-현재-설계--libexportpdfchartsts).
> 또한 PDF·PPT의 **색이 활성 테마를 따르도록** 바뀌었다 → [§3-3](#3-3-pptxgenjs-차트-삽입-코드-핵심).

> **통합 안내(2026-07-17)**: 구 `excel_chart_plan.md`(백엔드 Excel 차트)를 이 문서 §0으로 통합했다.
> "차트를 파일로 내보낸다"는 동일 주제이고, 세 경로가 같은 `dashboard.json`의 `charts` 정의를
> 공유하므로 한 문서에서 보는 편이 낫다.

> **작성일**: 2026-07-15 (프론트) / Excel 편은 그 이전  
> **관련 파일**: [`ChartCard.tsx`](file:///c:/ai/clearsurvey/frontend/src/components/dashboard/ChartCard.tsx) · [`KpiRow.tsx`](file:///c:/ai/clearsurvey/frontend/src/components/dashboard/KpiRow.tsx) · [`index.tsx`](file:///c:/ai/clearsurvey/frontend/src/routes/index.tsx) · [`types/dashboard.ts`](file:///c:/ai/clearsurvey/frontend/src/types/dashboard.ts) · [`summarizer.py`](file:///c:/ai/clearsurvey/backend/engine/summarizer.py)

---

## 목차

0. [Excel 네이티브 차트 (백엔드)](#0-excel-네이티브-차트-백엔드)
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

## 0. Excel 네이티브 차트 (백엔드)

> 구 `excel_chart_plan.md`. 정제 실행 시 생성되는 결과 엑셀(`_cleaned.xlsx`)의 `Summary` 시트
> 우측에 **openpyxl 네이티브 차트**를 주입한다. 아래 PPT/PDF(프론트, 클라이언트 사이드)와 달리
> 이쪽은 **백엔드 파이프라인**에서 수행된다.

### 0-A. 아키텍처 및 연동 흐름

```
[사용자 대시보드 기획 (웹 UI Step 2)]
            │
            ▼ (dashboard.json 저장)
[projects/{project_name}/dashboard.json]
            │
            ▼ (정제 실행 시 로드)
[SummarySheetWriter (engine/summarizer.py)]
  - config.yaml의 요약 섹션 및 dashboard.json 동시 로드
  - 집계 테이블 배치 좌표(scol, srow, height) 역산
  - 차트 타입(bar, pie, line)에 따라 openpyxl.chart 객체 생성
  - 카테고리(Reference) 및 데이터(Reference) 범위 바인딩
  - Summary 시트 우측 영역(G열)에 세로 간격으로 차트 오버레이 삽입
```

### 0-B. 세부 구현 설계

**① dashboard.json 감지 및 로드**
`SummarySheetWriter.write` 내부에서 `projects/{project}/dashboard.json`을 안전하게 읽는다.
파일이 없거나 `charts`가 없으면 차트 로직을 건너뛰고 기존 요약 시트 작성만 수행한다(하위 호환).

**② 데이터 바인딩 주소 역산 알고리즘**
차트의 `colRef`로 `config.yaml`에 정의된 요약 섹션(`sec`)을 순회 매칭한다.
- `sec.type == "unique_count"` 이며 `sec.col_ref == colRef`
- `sec.type == "totals"` 이며 `sec.items` 중 `item.col_ref == colRef`
- `sec.type == "binary_sum"` 이며 `sec.columns` 중 `col.col_ref == colRef`

좌표 계산 (`n_rows` = 타이틀/헤더 제외 데이터 행수):
- **카테고리 범위**: `min_col=scol, min_row=srow+2, max_row=srow+2+n_rows-1`
- **데이터 범위**: `min_col=scol+1, min_row=srow+1, max_row=srow+2+n_rows-1`
  (헤더 행을 포함해 차트 계열 타이틀을 획득)

**③ 차트 생성 및 속성**
- bar → `BarChart()` + `chart.type = "col"` (세로 막대)
- pie/donut → `PieChart()`
- line → `LineChart()`
- 공통: `chart.title`(사용자 지정 또는 컬럼명), `chart.width = 16`, `chart.height = 10`

**④ 우측 오버레이 배치**
요약 테이블이 `A`~`D`열에 2단 그리드로 세로 배치되므로, 차트는 우측 **`G`열** `G2`부터
`offset = 15 rows` 간격으로 배치한다 → `G2`, `G17`, `G32`…

### 0-C. 검증

- **자동**: `pytest tests/test_summarizer.py` — 요약 시트 렌더링 회귀 테스트.
- **수동**: Step 2에서 차트 종류를 다수 지정·저장 → Step 3 정제 실행/내보내기 →
  결과 `_cleaned.xlsx`의 Summary 시트 우측에 네이티브 차트가 삽입됐는지 육안 확인.

### 0-D. 프론트 내보내기와의 관계

| | Excel (§0) | PPT (§3) | PDF (§4) |
|---|---|---|---|
| 실행 위치 | 백엔드 파이프라인 | 브라우저 | 브라우저 |
| 차트 형태 | openpyxl 네이티브 | pptxgenjs 네이티브 | 화면 캡처(래스터) |
| 필터 반영 | ❌ 전체 데이터 기준 | ✅ 현재 필터(`filtered`) | ✅ 현재 필터 |
| 편집 가능 | ✅ | ✅ | ❌ |

→ **Excel은 "정제 산출물"**, **PPT/PDF는 "지금 보고 있는 화면"**이라는 성격 차이가 있다.
같은 `dashboard.json`의 `charts`를 읽지만 필터 반영 여부가 다르다는 점에 주의.

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
| PDF 렌더링 | ~~기존 설치된 `html2pdf.js` 재활용~~ → **카드별 캡처 + jsPDF 직접 배치** (2026-07-17 개정, [§4-4](#4-4-현재-설계--libexportpdfchartsts)) |
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

### PDF: `html2pdf.js` (기설치) → **`jspdf` + `html2canvas` 직접 사용** (2026-07-17 개정)

- 최초: `DetailPanel.tsx`가 쓰던 동적 import 패턴 그대로 차트 그리드 영역을 통째 캡처
- 현재: **차트 PDF만** `jspdf` + `html2canvas`를 직접 쓴다([§4-4](#4-4-현재-설계--libexportpdfchartsts)).
  둘 다 이미 `html2pdf.js`의 전이 의존성이라 새 다운로드는 없고, 직접 import 하므로 명시적
  의존성으로 승격했다.
- `html2pdf.js`는 **요약 탭 PDF·DetailPanel**에 계속 쓰인다 — 그쪽은 일반 블록 흐름이라
  `break-inside-avoid`가 실제로 동작한다.

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
  chartColors: th.palette,   // 2026-07-17 개정: 하드코딩 → 활성 테마의 --chart-N 을 hex 로 읽음
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

> ⚠️ **이 절(4-1 ~ 4-2)의 설계는 2026-07-17에 폐기됐습니다.** 아래 내용은 최초 설계 기록으로만
> 남깁니다. 현재 차트 PDF는 **`lib/exportPdfCharts.ts`** (카드별 캡처 + A4 3×2 직접 배치)를 쓰고,
> 여기 적힌 "그리드 통째 캡처" 방식은 쓰지 않습니다. 왜 바꿨는지는 [§4-3](#4-3-그리드-통째-캡처를-폐기한-이유-2026-07-17)을 보세요.
>
> `lib/exportPdf.ts`(html2pdf 래퍼)는 **요약 탭 PDF 전용**으로 남아 있습니다 — 그쪽은 표 문서라
> 일반 블록 흐름이고 `break-inside-avoid`가 실제로 동작해 문제가 없습니다.

### 4-1. 캡처 대상 DOM 요소 (폐기됨)

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

### 4-3. 그리드 통째 캡처를 폐기한 이유 (2026-07-17)

사용자 보고 3건 — ① 상단 제목 없음 ② 차트 제목 누락 ③ A4 중간에서 차트 잘림 — 을 추적하니
**뿌리가 하나**였다. PPT는 데이터로 문서를 만들고(`addSlide()`로 타이틀, 차트 1개 = 슬라이드 1장),
PDF는 화면을 사진 찍는다. html2canvas가 그리드 전체를 **한 장의 긴 이미지**로 만들면 그 뒤로는
차트 경계를 아는 주체가 없다 — A4 높이마다 기계적으로 잘릴 뿐이다.

`pagebreak.avoid`로 막으려던 시도는 두 겹으로 실패해 있었다:

1. `avoid: ".break-inside-avoid"`가 **대시보드에서 아무것도 매치하지 않았다.** 그 클래스는
   `SummaryTab.tsx` 두 곳에만 있고 `ChartCard`엔 없다. 차트 경로에선 죽은 옵션이었다.
2. 클래스를 붙여도 안 됐을 것이다. html2pdf의 `avoid`는 경계에 걸린 요소에 **위쪽 여백을 줘서
   다음 페이지로 밀어내는** 방식인데, 대시보드는 CSS Grid라 한 카드만 밀 수 없다 — 같은 행의
   옆 카드가 따라가지 않아 레이아웃이 깨진다. (요약 탭이 잘 되는 건 일반 블록 흐름이라서다.)

추적 중에 드러난 것 둘:

- **애니메이션 경합**: recharts는 마운트·필터 변경 후 약 1.5초간 애니메이션을 돈다(실측: 도넛
  sector의 `d`가 450~1950ms 동안 변함). 그 사이 캡처하면 도넛이 얇은 부채꼴로 박힌다.
  화면은 멀쩡하고 PDF만 이상해서 원인 찾기가 어렵다.
- **창 크기 의존**: 그리드가 `repeat(auto-fit, minmax(320px, 1fr))`이라 열 수와 카드 비율을
  **브라우저 창**이 정했다. 같은 대시보드가 창 폭에 따라 다르게 출력됐다.

### 4-4. 현재 설계 — `lib/exportPdfCharts.ts`

카드를 **하나씩** 캡처해 이미지로 갖고, 페이지 배치를 코드가 직접 계산한다. 카드 이미지는 통째로
들어가거나 통째로 다음 페이지로 가므로 잘릴 수가 없다.

| 결정 | 내용 | 근거 |
|---|---|---|
| 격자 | A4 가로 **3열 × 2행** (최대 6칸) | 화면 auto-fit은 A4와 무관 → PDF는 화면과 분리해 고정 |
| span | `2x1`/`2x2`/`full` 화면 규칙 유지 | 설정한 크기가 출력에도 반영되어야 한다 |
| `2x2` 연속 | 페이지당 하나씩 분리 | 3열에 2x2 둘이 서려면 4열이 필요 |
| 배치 순서 | 설정 순서 유지(`dense` 미적용) | dense는 뒤 카드를 앞 빈칸으로 끌어올린다 — 문서는 순서가 중요 |
| 캡처 시점 | 그리기가 멎을 때까지 대기 | 고정 시간이 아니라 path가 안 변할 때까지 (`waitForChartsIdle`) |
| 캡처 크기 | 직전에 그리드를 A4 기하로 고정 | 창 크기와 무관하게 같은 결과 |
| 머리글 | **DOM을 만들어 캡처** (jsPDF `text()` 아님) | jsPDF 내장 폰트는 라틴 전용 → 한글이 깨진다 (§4-5) |

### 4-5. 머리글에 jsPDF `text()`를 쓰지 않는 이유

jsPDF의 내장 폰트는 Helvetica/Times/Courier/Symbol/ZapfDingbats 뿐이라 한글을 그리면 깨진다.

```
pdf.text("버스 만족도 조사", 8, 14)  →  PDF 스트림: (¼Â¤ ¹ÌÈq³Ä ÈpÀ¬) Tj
```

한글 폰트를 임베드하면 되지만 한글 음절이 11,172자라 서브셋을 해도 수백 KB~수 MB가 붙는다.
화면에 이미 로드된 폰트로 DOM을 그려 캡처하면 폰트 문제가 사라지고 테마 색·서체도 자동으로
따라온다. e2e가 이 결정을 고정한다 — PDF 안에 텍스트 그리기 오퍼레이터(`Tj`)가 하나라도 있으면
실패한다(누군가 `pdf.text()`로 한글을 그리기 시작했다는 뜻).

### 4-6. 다크모드 대응

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

- [x] `pptxgenjs` 설치 (`npm install pptxgenjs` — 이 프로젝트는 npm 사용, `bun` 아님)
- [x] `aggregate.ts`에 `buildChartItems()` 순수 함수 추출
- [x] `ChartCard.tsx` useMemo를 `buildChartItems()` 호출로 교체
- [x] `lib/exportPptx.ts` 신규 작성
- [x] `lib/exportPdf.ts` 신규 작성 (+ oklch 색상 회피 로직 — §10 참조)
- [x] `index.tsx` PPT/PDF 버튼 추가 및 핸들러 연결
- [x] `vitest` 단위 테스트 추가 (`buildChartItems` 7케이스) 및 `tsc` 통과 확인
- [x] 브라우저(Playwright headless)에서 PPT/PDF 출력물 검증 — 둘 다 유효 파일 생성 확인

---

## 10. 구현 결과 및 계획 대비 변경점 (2026-07-16)

### 완료 내역
- **신규**: `src/lib/exportPptx.ts`, `src/lib/exportPdf.ts`
- **수정**: `src/lib/aggregate.ts`(`buildChartItems()`+`ChartDatum` 추가), `src/components/dashboard/ChartCard.tsx`(items useMemo→함수 호출), `src/routes/index.tsx`(PPT/PDF 버튼·핸들러·`dashboardRef`), `src/lib/__tests__/aggregate.test.ts`(7케이스)
- **패키지**: `pptxgenjs@^4` 추가. exportPptx/exportPdf 모두 동적 import → 별도 청크로 분리됨(초기 번들 미포함) 빌드로 확인.

### 검증 결과
- `tsc` 통과 · vitest **136개**(기존 129 + buildChartItems 7) 통과 · `vite build` 성공.
- Playwright headless로 실제 버튼 클릭 → 다운로드까지 구동: **PPT** `mumhwa_dashboard.pptx`(≈200KB, zip 매직 `PK`), **PDF** `mumhwa_dashboard.pdf`(≈265KB, `%PDF-`) 정상 생성.

### ⚠ 계획에 없던 이슈 — html2canvas `oklch()` 미지원 (중요)
- **증상**: PDF 내보내기 최초 실행 시 `Attempting to parse an unsupported color function "oklch"` 예외로 **실패**. §4 계획은 "기존 html2pdf.js 재활용, 다크모드만 처리"만 다뤘고 이 문제를 예상하지 못함.
- **원인**: 이 프로젝트는 Tailwind v4 / shadcn을 쓰며 테마 색상 변수(`--background`,`--foreground`,`--border` 등)가 전부 `oklch()`이고, 불투명도 유틸리티(`bg-x/10`)는 `color-mix`가 `oklab()`으로 계산됨. html2pdf에 번들된 html2canvas 버전은 `oklch`/`oklab`을 파싱하지 못한다. 특히 **Tailwind preflight가 모든 요소의 `::before`/`::after`에 `border-color: var(--foreground)`(oklch)를 상속**시키는데, 유사 요소는 인라인 스타일로 덮을 수 없어 요소 단위 치환만으로는 해결되지 않았음.
- **해결 (`exportPdf.ts`)**: 캡처 직전 라이브 DOM에 대해 ① 문서 루트(`documentElement`)의 oklch/oklab **CSS 커스텀 변수를 rgb로 재정의**(유사 요소의 `var()`까지 커버) + ② 서브트리 각 요소의 계산 색상 중 남은 oklch/oklab(color-mix 결과)을 인라인 rgb로 치환. 캡처 후 원복. 색공간 변환(oklch/oklab→sRGB)은 브라우저 canvas의 oklch 지원 여부에 의존하지 않도록 **수학 변환으로 직접 구현**(구형 Chromium에서 canvas가 oklch를 변환하지 못함을 확인). 변환값은 동일 색의 rgb 표기라 화면상 변화 없음.
- **참고**: 기존 `DetailPanel.tsx`의 개별 행 PDF도 동일한 oklch 취약점이 잠재해 있을 수 있음(이번 범위 밖, 별도 점검 권장).

### 계획과 달라진 사소한 점
- 패키지 매니저: 계획서 `bun add` → 실제 `npm install`(레포 표준).
- `multibar`는 계획 §3-3의 "다중 시리즈"가 아니라 화면과 동일하게 **단일 시리즈**(열별 1막대)로 렌더 — 현재 대시보드의 multibar 집계 형태와 일치시킴.
- `histogram`은 계획대로 `bar`로 폴백.
