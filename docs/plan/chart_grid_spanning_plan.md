# 대시보드 차트 2D 그리드 레이아웃 확장 (Grid Spanning)

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
