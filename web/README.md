# 💻 ClearSurvey Web Frontend Module

본 폴더는 **ClearSurvey**의 프리미엄 대시보드 화면 및 3단계 설정 매니저 마법사를 가동하는 **React / Vite / shadcn/ui 웹 애플리케이션** 소스 폴더입니다.

## 📂 3계층 격리형 디렉토리 구조
사용자 요건에 부합하도록 구조, 디자인, 구현 로직을 완벽하게 쪼개어 격리 설계했습니다:

\\\
[web/src]
 ├── components/ (1. 구조: Structure — 순수 마크업 컴포넌트)
 │    ├── dashboard/ (상세 드로어 DetailPanel, 가이드 드로어 GuideDrawer 등)
 │    └── manager/ (Step 1, 2, 3 단계별 전용 마법사 컴포넌트)
 ├── styles.css / legacy-dashboard.css (2. 디자인: Design — 테마 및 HSL 비주얼 CSS)
 ├── hooks/ (3. 로직: Logic — 비즈니스 상태 캡슐화 훅)
 │    └── useManagerApi.ts (REST 통신, health check, 데모 배너 등 로직 집약)
 └── routes/ (라우트 핸들러 — admin.tsx, index.tsx)
\\\

## 🚀 로컬 실행 및 컴파일 빌드
개발을 진행하거나 프로덕션 빌드를 생성하는 방법입니다:

\\\ash
# 1. 의존성 패키지 설치
npm install

# 2. 실시간 개발 서버 가동
npm run dev

# 3. 프로덕션 SSR/CSR 번들 빌드 컴파일
npm run build
\\\
* 빌드가 완료되면 \dist/client/\ 하위에 고도로 최적화된 컴포넌트 조각들이 패키징되어, 백엔드 없이도 완벽하게 작동하는 대시보드 뷰어를 GitHub Pages 등으로 무결히 호스팅 배포할 수 있습니다.