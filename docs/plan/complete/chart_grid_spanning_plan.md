# 대시보드 차트 2D 그리드 레이아웃 확장 (Grid Spanning)

> **⚠ 반영 현황 (2026-07-16 갱신)**: 이 기능은 **구현 완료**되었으나, 이후 `design-migration-plan.md`
> 작업(legacy CSS 제거 + shadcn/Tailwind 전환)으로 인해 아래 §2~§4의 *구현 방식* 서술이 현재 코드와
> 달라졌습니다. 정확한 최신 구현은 문서 하단 **[§5 반영 현황](#5-반영-현황-2026-07-16-기준)**을 참조하세요.

사용자 피드백에 따라, 기존의 1차원적인 너비 분할(Flexbox) 방식 대신 기준 크기(1:1)를 바탕으로 차트 카드를 가로/세로로 2배 이상 키울 수 있는 진정한 2차원 그리드 확장 시스템으로 개편합니다.

## 목표
차트 높이 및 반지름 확장 정책:
세로로 2배(2:2) 커지는 카드의 경우, 내부 차트(도넛 등)가 단순히 빈 공간만 차지하지 않도록 높이를 500px 수준으로 2배 늘리고, 도넛의 반지름(`outerRadius`)도 크게 비례 확장하도록 구현합니다.

## 변경 사항

### 1. `src/types/dashboard.ts`
- `ChartItem` 타입의 `width` 속성 대신 `layout?: "1x1" | "2x1" | "2x2" | "0.5x1" | "full"` 등의 명확한 2D 스팬 크기 속성을 정의합니다.

### 2. `src/components/manager/Step2_ConfigEditor.tsx`
- 차트 크기 선택 드롭다운 UI 변경:
  - `기본 크기 (1:1)`
  - `가로 2배 넓게 (2:1)`
  - `가로세로 2배 크게 (2:2)` - 특히 도넛 차트에 적합
  - `절반 축소 (1/2)` (기존 축소 기능 유지)
  - `한 줄 꽉 채우기`

### 3. `src/legacy-dashboard.css`
- `.chart-grid` 클래스를 CSS Grid (`display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); grid-auto-flow: dense;`) 로 재구축하여 빈 공간을 밀도 있게 채우는 조각보(Masonry-like) 레이아웃을 구현합니다.

### 4. `src/components/dashboard/ChartCard.tsx`
- `layout` 설정값에 따라 CSS `gridColumn: 'span 2'`, `gridRow: 'span 2'` 등을 인라인 스타일로 주입합니다.
- 세로 2배(`2x2`)일 경우, `<ResponsiveContainer>` 와 내부 차트의 높이를 `240`에서 `500` 정도로 키우고, PieChart의 `outerRadius` 와 `innerRadius` 를 확장합니다.

---

## 5. 반영 현황 (2026-07-16 기준)

기능(2D 그리드 스팬)은 **구현 완료**되었다. 다만 위 §2~§4에 적힌 구현 *방식*은 이후 두 차례 변경으로
현재 코드와 다르므로 아래로 정정한다.

### ✅ 구현된 것 (기능 정상 동작)
- `types/dashboard.ts` — `ChartItem.layout?: "1x1" | "2x1" | "2x2" | "0.5x1" | "full"` 정의됨 (§1대로).
- 차트 크기 선택 드롭다운 — `1x1`/`2x1`/`2x2`/`0.5x1`/`full` 옵션 제공됨 (§2 의도대로).
- `2x2` 카드 높이·파이 반지름 비례 확장 — 적용됨 (§4 의도대로, 높이는 `560px`로 조정 — `remaining_improvements.md` §3 참조).

### ⚠ 서술이 낡은 부분 (기능은 동일, 방식만 바뀜)

| 문서 위치 | 원래 서술 | 실제 현재 구현 |
|---|---|---|
| §2 | 크기 드롭다운이 `Step2_ConfigEditor.tsx`에 있음 | **`components/manager/config/ChartConfigCard.tsx`** 로 분리됨 (Step2의 "차트 구성" 카드) |
| §3 | `src/legacy-dashboard.css`의 `.chart-grid`를 CSS Grid로 재구축 | **`legacy-dashboard.css`는 삭제됨**(`design-migration-plan.md`). 그리드는 `routes/index.tsx`에 인라인 Tailwind(`grid [grid-auto-flow:dense]` + `gridTemplateColumns: repeat(auto-fit, minmax(320px, 1fr))`)로 이동. 무한 팽창은 `maxColumns` 기반 `maxWidth`로 방어(`remaining_improvements.md` §3) |
| §4 | `layout`에 따라 `gridColumn`/`gridRow`를 **인라인 스타일**로 주입 | **className 기반**으로 변경: `col-span-2 max-sm:col-span-1`(2x1), `col-span-2 max-sm:col-span-1 row-span-2`(2x2), `col-span-full`(full). 인라인 스타일은 CSS 오버라이드가 안 돼 모바일에서 강제 1열로 접을 수 없던 문제(구 PR #12) 때문에 className으로 전환 |

→ 코드 재작업은 불필요. 이 문서의 §2~§4는 위 표 기준으로 읽을 것.
