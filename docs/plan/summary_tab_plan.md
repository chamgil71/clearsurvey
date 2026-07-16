# 📋 대시보드 요약 탭 기획서 — ✅ 완료 (2026-07-17)

공개 대시보드(`/`)에 **요약** 탭을 신설한다. 차트로 표현되는 내용을 표 형태로 정리해 보여주고,
PDF(A4 세로) / DOCX로 내보낸다.

> **구현 완료.** `tsc --noEmit` 통과 · vitest **173개**(기준선 136 + 신규 37) 통과 ·
> `bun run build` 성공 · lint 314건(기준선 315 — 신규 코드 0건, 부수적으로 1건 감소).
> Playwright로 `bus` 프로젝트 구동 검증 완료 — 상세는 [§7](#7-검증-계획).
>
> **계획 대비 변경점 2건**:
> - `aggregate.ts`에 `buildChartItemsWithMeta()`를 추가했다. 잘림(`truncated`) 판정은 자르기가
>   일어나는 함수 안에서만 알 수 있는데, 밖에서 전체 목록을 다시 집계해 비교하면 큰 데이터에서
>   집계를 두 번 하게 된다. 기존 `buildChartItems`는 이 함수를 감싸는 형태로 유지해 호출부 무영향.
> - 내보내기 버튼을 요약 탭 안이 아니라 **헤더에 두고 탭에 따라 전환**했다(§2 참조).

> **작성일**: 2026-07-17  
> **대상 범위**: `frontend/` 전용 (백엔드 수정 없음)  
> **관련 문서**: [complete/chart_export_plan.md](complete/chart_export_plan.md) — 기존 PPT/PDF 내보내기와
> 같은 집계 함수(`buildChartItems`)를 공유한다.

---

## 목차

1. [기능 개요](#1-기능-개요)
2. [화면 구성](#2-화면-구성)
3. [설정 — 표시할 열 선택](#3-설정--표시할-열-선택)
4. [데이터 흐름](#4-데이터-흐름)
5. [내보내기 설계](#5-내보내기-설계)
6. [변경 파일 목록](#6-변경-파일-목록)
7. [검증 계획](#7-검증-계획)
8. [설계 결정 및 근거](#8-설계-결정-및-근거)

---

## 1. 기능 개요

현재 대시보드는 **대시보드**(차트)와 **목록 · 검색**(원본 행) 두 탭뿐이다. 차트는 시각적으로는 좋지만
정확한 수치를 읽기 어렵고, 목록 탭은 원본 행이라 집계값이 없다. 그 사이의 공백 —
**"차트가 말하는 내용을 숫자 표로 확인하고 그대로 문서로 넘기는 것"** — 을 요약 탭이 채운다.

| 항목 | 결정 |
|---|---|
| 표 내용 | 각 차트의 집계 결과를 표로. **값과 비중을 함께** 표시 |
| 필터 연동 | 차트와 동일하게 현재 필터(`filtered`) 기준 — 차트/필터 변경 시 같이 변경 |
| 표 순서 | `cfg.charts` 배열 순서 그대로 (차트 탭과 동일 순서) |
| 소제목 | 각 차트의 `title` |
| 전체 제목 | `[프로젝트명] 요약` |
| 필터 기준 | 문서 하단에 박스로 표시 |
| 내보내기 | **PDF(A4 세로)가 기본** + **DOCX**(편집 가능 보고서) |
| 백엔드 | 변경 없음 — 순수 프론트엔드 |

---

## 2. 화면 구성

```
┌──────────────────────────────────────────────┐
│  [mumhwa] 요약                    [PDF] [DOCX]│   ← 전체 제목 + 내보내기 버튼
├──────────────────────────────────────────────┤
│  소재지도로명주소_시도                          │   ← 소제목 = charts[0].title
│  ┌────────────┬───────┬────────┐              │
│  │ 항목        │  값   │  비중   │              │
│  ├────────────┼───────┼────────┤              │
│  │ 경기도      │  210  │ 16.2%  │              │
│  │ 서울특별시   │  180  │ 13.8%  │              │
│  │ …          │   …   │   …    │              │
│  ├────────────┼───────┼────────┤              │
│  │ 합계        │ 1,300 │ 100.0% │              │   ← 합계 행
│  └────────────┴───────┴────────┘              │
│                                              │
│  축제시작일자_월                                │   ← charts[1].title
│  ┌────────────┬───────┬────────┐              │
│  │ …                                         │
│                                              │
├──────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────┐ │
│ │ 필터 기준                                  │ │   ← 하단 박스
│ │ 전체 1,300건 중 695건 (53.5%)              │ │
│ │ · 검색어: "축제"                            │ │
│ │ · 소재지도로명주소_시도: 대전광역시            │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

* 필터가 하나도 없으면 박스에 `전체 1,300건 (필터 없음)`으로 표기한다.
* 차트가 0개면 "표시할 차트가 없습니다" 안내를 띄운다(설정 탭 안내 포함).
* 화면 표시와 내보내기(PDF/DOCX)는 **동일한 데이터 구조**를 쓴다 — 화면에 보이는 것이 곧 문서다.

---

## 3. 설정 — 표시할 열 선택

**차트는 전부 포함**하고, **표에 보일 열**만 설정에서 고른다.

### 3-A. 선택 가능한 열

| 키 | 라벨 | 내용 | 기본 |
|---|---|---|---|
| — | 항목 | 카테고리명. **항상 표시**(끌 수 없음) | 고정 |
| `value` | 값 | 집계값 (건수 또는 합계) | ✅ |
| `percent` | 비중 | 해당 차트 합계 대비 백분율 | ✅ |
| `rank` | 순위 | 값 내림차순 기준 순위 | ❌ |
| `cumulative` | 누적 비중 | 비중 누적합 (파레토 분석용) | ❌ |

> 요구사항의 "표는 값과 비중이 같이 나오게"를 기본값(`["value", "percent"]`)으로 만족시키고,
> 순위/누적은 선택 항목으로 둔다.

### 3-B. 타입 정의

```ts
// types/dashboard.ts
export type SummaryColumn = "value" | "percent" | "rank" | "cumulative";

export interface DashboardSummary {
  /** 요약 표에 표시할 열. 미설정 시 ["value", "percent"]. "항목" 열은 항상 표시된다. */
  columns?: SummaryColumn[];
}

export interface DashboardConfig {
  // ...기존
  summary?: DashboardSummary;   // 신규 (optional — 기존 config 하위 호환)
}
```

`summary`를 optional로 두어 **기존 프로젝트의 `dashboard.json`을 마이그레이션 없이 그대로 읽는다**
(없으면 기본값 적용).

### 3-C. 설정 UI 위치

Admin Step2 → "대시보드" 탭 → **"차트 구성" 카드**(`ChartConfigCard.tsx`).
이미 `maxColumns`(가로 배열 최대 개수) 드롭다운이 있는 카드로, 대시보드 표시 옵션이 모이는 자리다.
체크박스 4개(값/비중/순위/누적 비중)를 추가하고 기존 `onUpdateLayout`과 같은 패턴으로
`onUpdateSummary`를 `Step2_ConfigEditor`의 상태 갱신에 연결한다.

---

## 4. 데이터 흐름

```
rows (원본)
  └─ filterRows(search, filters)  ─→  filtered          [기존]
                                        │
      ┌─────────────────────────────────┼─────────────────────────────┐
      ▼                                 ▼                             ▼
  ChartCard                        SummaryTab                    exportPptx
  buildChartItems(chart,filtered)  buildSummary(cfg,filtered)    buildChartItems
      │                                 │
      ▼                                 ├─→ 화면 표
   recharts                             ├─→ exportSummaryPdf  (A4 세로)
                                        └─→ exportSummaryDocx
```

### 4-A. 신규 순수 함수 — `lib/summary.ts`

```ts
export interface SummaryRow {
  name: string;
  value: number;
  percent: number;      // 0~100
  rank: number;         // 1부터
  cumulative: number;   // 0~100
}

export interface SummarySection {
  title: string;        // 차트 title (없으면 col)
  rows: SummaryRow[];
  total: number;
}

export interface SummaryDoc {
  projectName: string;
  sections: SummarySection[];
  filterNote: FilterNote;   // 하단 박스 내용
}

export function buildSummary(
  cfg: DashboardConfig, rows: Row[], data: ProjectData, gf: GlobalFilter,
): SummaryDoc;
```

* 집계는 **기존 `buildChartItems`를 그대로 호출**한다 — 차트와 수치가 어긋날 여지를 없앤다.
  (`max_items`/`sort_by`도 자동으로 동일 적용됨)
* `percent`는 **해당 차트의 표시 항목 합계** 기준. `max_items`로 잘린 차트는 표의 합계도
  잘린 기준이므로, 그 경우 합계 행에 `(상위 N개 기준)` 주석을 단다 — 아래 §8 참조.
* 순수 함수이므로 단위 테스트가 쉽다(화면/브라우저 불필요).

---

## 5. 내보내기 설계

### 5-A. PDF (기본) — A4 세로

기존 [`exportPdf.ts`](file:///c:/ai/clearsurvey/frontend/src/lib/exportPdf.ts)를 **재사용**한다.
현재 `orientation: "landscape"`와 파일명이 하드코딩돼 있으므로 옵션 인자를 받도록 일반화한다
(차트 탭의 기존 PDF 동작은 그대로 유지 — 기본값을 현재 값으로 둔다).

```ts
export async function exportToPdf(
  element: HTMLElement, projectName: string, isDark: boolean,
  opts?: { orientation?: "portrait" | "landscape"; suffix?: string },
): Promise<void>
```

요약 탭은 `{ orientation: "portrait", suffix: "summary" }` → `mumhwa_summary.pdf`.
`pdfColorFix`(oklch 회피)와 다크모드 원복 로직을 그대로 물려받는다 —
[chart_export_plan.md §10](complete/chart_export_plan.md) 참조.

### 5-B. DOCX

`docx` 패키지(9.7.1, MIT)를 **동적 import**로 추가한다 — PPT/PDF와 동일한 패턴이라
초기 번들에 포함되지 않는다.

* 제목: `[프로젝트명] 요약` (Heading1)
* 섹션마다: 차트 제목(Heading2) + 표(`Table`)
* 하단: 필터 기준 박스(테두리 있는 1칸 표)
* 용지: A4 세로

> **PDF는 화면 캡처, DOCX는 데이터에서 직접 생성**한다. DOCX는 화면 DOM에 의존하지 않으므로
> `SummaryDoc` 구조만 있으면 만들 수 있다.

### 5-C. 포맷 선택 근거

| 포맷 | 판단 |
|---|---|
| **PDF** | 요구사항상 기본. 배포·인쇄용 |
| **DOCX** ✅ | 채택. 편집 가능한 **문서**가 현재 비어 있는 칸 |
| XLSX | ❌ 백엔드 `summarizer.py`가 이미 네이티브 차트 포함 Summary 시트를 생성 — 역할 중복 |
| MD | ❌ 의존성 0이라 매력적이나 "출력하기 좋은 형태"라는 요구에 부적합 |

---

## 6. 변경 파일 목록

### 신규

| 파일 | 내용 |
|---|---|
| `frontend/src/lib/summary.ts` | `buildSummary()` 등 순수 집계 함수 |
| `frontend/src/lib/exportSummaryDocx.ts` | DOCX 생성 (동적 import) |
| `frontend/src/components/dashboard/SummaryTab.tsx` | 요약 탭 화면 |
| `frontend/src/lib/__tests__/summary.test.ts` | `buildSummary` 단위 테스트 |
| `frontend/src/components/dashboard/__tests__/SummaryTab.test.tsx` | 렌더링 테스트 |

### 수정

| 파일 | 내용 |
|---|---|
| `frontend/src/types/dashboard.ts` | `SummaryColumn`·`DashboardSummary` 추가, `DashboardConfig.summary?` |
| `frontend/src/routes/index.tsx` | `<TabsTrigger value="summary">` + `<TabsContent>` 추가 |
| `frontend/src/lib/exportPdf.ts` | `opts`(orientation/suffix) 인자 추가 — 기존 호출부 무변경 |
| `frontend/src/components/manager/config/ChartConfigCard.tsx` | 표시 열 체크박스 4개 |
| `frontend/src/components/manager/Step2_ConfigEditor.tsx` | `updateSummary` 연결 |
| `frontend/package.json` | `docx` 추가 |

---

## 7. 검증 계획

### 자동
```bash
cd frontend
bun run --bun tsc --noEmit
bun x vitest run            # 기준선 136개 + 신규
bun run build
```

* `summary.test.ts` — 비중 계산, 합계, 순위/누적, 빈 데이터, `max_items` 절단 시 합계 기준.
* 필터 적용 시 차트(`buildChartItems`)와 요약 표의 수치가 **일치**하는지 교차 검증.

### 수동 (Playwright) — 실행 결과

`bus` 프로젝트로 확인:

| 항목 | 결과 |
|---|---|
| 요약 탭 렌더링 | ✅ 제목 `[bus] 요약`, 차트 2개 → 표 2개, 소제목이 차트 제목(`총갯수`·`읍면동`)과 일치 |
| 표 구성 | ✅ 헤더 `항목 / 값 / 비중`, 합계 행(`2,423` · `100.0%`) |
| `max_items` 절단 표시 | ✅ 읍면동 표에 `합계 (상위 20개 기준)` · `687` 노출 |
| **필터 연동** | ✅ 도넛 조각(유성구) 클릭 → 첫 행이 `695 / 28.7%` → `695 / 100.0%`로 분모가 필터 기준으로 바뀜 |
| 필터 기준 박스 | ✅ 하단에 `전체 2,423건 (필터 없음)` |
| 헤더 버튼 전환 | ✅ 요약 탭에서 `PPT/PDF` → `PDF/DOCX` |
| PDF 다운로드 | ✅ `bus_summary.pdf` 206KB, **595×842pt = A4 세로** (MediaBox 실측) |
| DOCX 다운로드 | ✅ `bus_summary.docx` 9.4KB. 압축 해제해 `document.xml` 검사 — 화면과 동일 수치, `<w:pgSz w:w="11906" w:h="16838" w:orient="portrait"/>` = A4 세로, 표 3개(섹션 2 + 필터 박스) |
| 콘솔 에러 | ✅ 0건 |

> [!WARNING]
> **어드민 설정 UI는 브라우저로 구동 검증하지 못했다.** 이 환경의 `storage/projects/`에는
> `README.md`만 있어 백엔드가 모든 프로젝트의 `/api/projects/{name}/config`에 404를 반환한다
> (프로젝트 원본 폴더는 저장소에 없고 빌드 산출물인 `public/data/*.json`만 있다). 이번 변경과
> 무관한 환경 제약으로, 설정 편집기 자체가 열리지 않는다.
> → 대신 `ChartConfigCard.summary.test.tsx`(6케이스)로 체크박스 렌더·기본값·저장값 반영·
> 체크/해제 시 `onUpdateSummary` 호출 인자까지 고정했다. 프로젝트 원본이 있는 환경에서는
> 육안 확인이 필요하다.

> [!NOTE]
> 다크모드 PDF는 기존 `exportPdf.ts`의 `.dark` 제거/원복 로직을 그대로 물려받는다
> ([chart_export_plan.md](complete/chart_export_plan.md)에서 이미 검증된 경로).

---

## 8. 설계 결정 및 근거

**① 집계를 새로 짜지 않고 `buildChartItems`를 재사용한다.**
요약 표는 "차트가 말하는 것을 숫자로 보여주는" 화면이다. 집계 로직이 갈라지면 차트와 표의 수치가
어긋나는 순간 신뢰를 잃는다. `exportPptx`가 이미 같은 이유로 이 함수를 공유하고 있다.

**② `max_items`로 잘린 차트의 비중 기준.**
차트가 `max_items: 20`이면 21번째부터는 화면에 없다. 이때 비중을 *전체 합계* 기준으로 내면
표의 비중 합이 100%가 안 되어 읽는 사람이 혼란스럽다. 반대로 *표시 항목 합계* 기준이면 100%가
되지만 "전체의 몇 %인지"를 잃는다.
→ **표시 항목 합계 기준(합이 100%)** 으로 하고, 합계 행에 `(상위 N개 기준)`을 명시한다.
차트와 같은 것을 보여준다는 원칙(①)에 맞고, 잘렸다는 사실도 숨기지 않는다.

**③ `summary`를 optional로.**
기존 프로젝트의 `dashboard.json`에는 이 키가 없다. optional + 기본값으로 두면 마이그레이션이
필요 없다. `layout?.maxColumns`가 쓴 것과 같은 패턴이다.

**④ DOCX는 DOM이 아니라 데이터에서 생성.**
PDF는 화면 캡처라 화면과 100% 같지만 편집이 안 되고 캡처 품질 이슈(oklch 등)를 안는다.
DOCX를 DOM에서 뽑으면 같은 취약점을 물려받는다. `SummaryDoc`에서 직접 만들면 깨끗하고
테스트도 쉽다.

**⑤ 요약 탭에도 필터바가 필요한가?**
필요하다. 요약은 필터에 연동되는 화면인데 필터바가 안 보이면 무엇이 걸려 있는지 알 수 없다.
필터바는 탭 바깥(공통 영역)에 있으므로 그대로 노출된다 — 추가 작업 없음.
하단 필터 박스는 **내보낸 문서**에서 조건을 알 수 있게 하는 것이 주 목적이다.
