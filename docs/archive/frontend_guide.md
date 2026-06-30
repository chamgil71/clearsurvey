# ClearSurvey — 3단계: React/Vite 웹 대시보드 가이드 (Web Frontend)

본 문서는 **ClearSurvey**의 프리미엄 대시보드 및 3단계 설정 매니저 마법사를 가동하는 **React/Vite 웹 프론트엔드(`web/`)**의 컴포넌트 구조, 인터랙션 디자인, 그리고 관심사 분리 아키텍처 가이드입니다.

---

## 1. 프론트엔드 기술 스택 및 구조

웹 대시보드 및 매니저는 최신 프로덕션 수준의 기술 스택으로 무결하게 구현되었습니다.

* **Core**: React 18+ & Vite 6+
* **Styling**: Vanilla CSS (`legacy-dashboard.css`) & Tailwind CSS & shadcn/ui 기반의 Harmonious Hues 테마
* **Routing**: `@tanstack/react-router`를 이용한 타입 안정적 라우팅
* **State & Network**: REST 통신 캡슐화 커스텀 훅 및 상태 구독 모델

---

## 2. 3계층 관심사 분리 (Architecture Separation)

사용자의 엄격한 아키텍처 요건에 맞추어 프론트엔드 프로젝트의 모든 파트는 세 영역으로 나뉘어 견고하게 얽혀 있습니다:

```
[구조: Structure (JSX/TSX)]
      ▲ (Props / Data Bindings)
[로직: Logic (useManagerApi.ts)]  <== (REST) ==> [FastAPI 백엔드]
      ▼ (Visual Tokens & Variables)
[디자인: Design (legacy-dashboard.css)]
```

### ① 구조 (Structure — TSX)
* UI의 컴포넌트화와 뼈대를 정함. 비즈니스 로직(API 호출 코드 등)이 섞이지 않은 순수한 뷰(View) 템플릿입니다.
* **주요 컴포넌트**:
  - `web/src/routes/admin.tsx`: 3단계 설정 마법사 라우트 및 진행 표시기(Indicator) 바 탑재.
  - `web/src/components/manager/Step1_ProjectUpload.tsx`: 백엔드 상태에 따른 배너 제어, 드래그앤드롭 엑셀 분석 및 프로젝트 리스트업.
  - `web/src/components/manager/Step2_ConfigEditor.tsx`: 10열 드롭다운 매핑 제어 및 대시보드 KPI/차트 요소를 기획하는 레이아웃 설계자.
  - `web/src/components/manager/Step3_RunDeploy.tsx`: 원클릭 실행 단추 및 터미널 런타임 콘솔 창.
  - `web/src/components/dashboard/GuideDrawer.tsx`: 슬라이딩 도움말 가이드 패널.

### ② 구현 로직 (Logic — Custom Hook)
* **`web/src/hooks/useManagerApi.ts`**:
  - 백엔드 서버의 생존 여부를 주기적으로 진단(Health Check Polling)하여, 서버가 가동되지 않을 시 프론트엔드 전반을 **정적 데모 모드**로 안전하게 비활성화 전환합니다.
  - 업로드 폼 구성, 저장 요청, 실시간 CLI 콘솔 로그 스트리밍 데이터를 누적하고, 런타임 진행 상태를 캡슐화하여 뷰 컴포넌트에 바인딩합니다.

### ③ 디자인 (Design — legacy-dashboard.css)
* **Glassmorphism**: 도움말 및 상세 드로어에 투명 블러 효과와 입체감을 제공합니다.
* **Premium Theme**: 다크/라이트 테마에 따른 HSL 기반 색상 조화와 미세 애니메이션(micro-animations)이 구현되어 뛰어난 유저 만족도를 선사합니다.

---

## 3. 로컬 개발 및 빌드 명령어

프론트엔드 개발 서버 구동 및 프로덕션 빌드 프로시저입니다.

```bash
# web 디렉토리 이동
cd web

# 1. 의존성 설치
npm install

# 2. 로컬 Vite 개발 서버 실행
npm run dev

# 3. 프로덕션 정적 리소스 컴파일 및 SSR 패키징 빌드
npm run build
```
* 빌드가 완료되면 결과 파일들이 `dist/` 하위에 위치하여 GitHub Pages 등의 정적 호스팅 서비스로 즉각 배포할 수 있는 상태가 됩니다.
