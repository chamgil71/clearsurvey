# 💻 ClearSurvey Web Frontend Module

본 폴더는 **ClearSurvey**의 대시보드 화면 및 3단계 설정 매니저 마법사를 가동하는 **React / Vite (TanStack Start) / Tailwind v4 + shadcn/ui** 웹 애플리케이션 소스입니다.

> 프로젝트 전체 개요·백엔드 연동 방법은 루트의 [`README.md`](../README.md)와 [`GUIDE.md`](../GUIDE.md), 상세 문서는 [`docs/INDEX.md`](../docs/INDEX.md)를 참고하세요. 이 문서는 `frontend/` 폴더만 다루는 빠른 시작 가이드입니다.

## 📂 디렉토리 구조

```
frontend/src
 ├── components/
 │    ├── dashboard/   # 공개 대시보드 화면 (ChartCard, DataTable, KpiRow, FilterBar, DetailPanel, GuideDrawer)
 │    ├── manager/      # Admin 3단계 마법사 (Step1 업로드, Step2 설정 편집, Step3 실행)
 │    └── ui/           # shadcn/ui 컴포넌트
 ├── hooks/
 │    ├── useDashboardData.ts   # 공개 대시보드 데이터 로딩
 │    └── useManagerApi.ts      # Admin REST 통신 (인증, 저장/실행/내보내기)
 ├── lib/                # 집계·필터 등 순수 로직 (aggregate.ts, dashboardConfig.ts)
 ├── types/dashboard.ts  # ProjectData/ChartItem/DashboardConfig 등 공유 타입
 └── routes/             # TanStack Router 파일 기반 라우트 (index.tsx, admin.tsx, login.tsx)
```

## 🚀 로컬 실행 및 빌드

패키지 매니저는 **bun**을 사용합니다.

```bash
# 1. 의존성 설치
bun install

# 2. 개발 서버 (http://localhost:5173, /api는 backend:8000으로 프록시)
bun run dev

# 3. 프로덕션 빌드
bun run build
# → dist/client/ 에 정적 산출물 생성
```

## ✅ 테스트

```bash
bun run test          # vitest 단위 테스트
npx playwright test   # e2e 테스트 (tests/e2e/, 최초 1회 `npx playwright install chromium` 필요)
```

## 배포

- **Vercel**: 백엔드 없이 `frontend/public/data/*.json` 정적 파일만으로 공개 대시보드를 서빙합니다. 자세한 절차와 주의사항(예: 로컬에서 저장/실행만으로는 Vercel이 갱신되지 않음)은 [`docs/guides/vercel_deploy_guide.md`](../docs/guides/vercel_deploy_guide.md) 참고.
- **Docker**: 루트의 `docker-compose.yml`이 `frontend`(Nginx)와 `backend`(FastAPI)를 함께 빌드·구동합니다.
