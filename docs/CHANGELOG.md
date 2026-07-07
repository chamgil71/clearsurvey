# Changelog

All notable changes to the ClearSurvey project will be documented in this file.

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
