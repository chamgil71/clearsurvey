# Web 전환 계획: Vanilla JS → React/Vite (TypeScript)

> 작성일: 2026-05-22  
> 기준: `c:\ai\new-beginnings` (React 대시보드) + `survey2/web/` (현재 Vanilla JS)  
> 참고: `new-beginnings/docs/MIGRATION_AND_USAGE.md`

---

## 1. 현황 비교

| 항목 | survey2/web (현재) | new-beginnings (기준) |
|------|-------------------|----------------------|
| 프레임워크 | Vanilla JS + Vite 5 | TanStack Start + Vite 7 |
| 언어 | JavaScript | TypeScript |
| 차트 | Chart.js | recharts |
| UI | CSS 직접 작성 | shadcn/ui (Radix UI + Tailwind CSS v4) |
| 라우팅 | 멀티 HTML (index.html, admin.html) | TanStack Router (파일 기반) |
| SSR | 없음 | TanStack Start (Cloudflare Workers) |
| 패키지 매니저 | npm | bun |
| 데이터 경로 | `web/data/*.json` | `public/data/*.json` |

### 전환 방향 결정

survey2는 Python CLI가 JSON을 생성하고 브라우저가 열람하는 **정적 뷰어**다.  
SSR(TanStack Start)은 불필요하며 Cloudflare Workers 의존성도 제거한다.

→ **plain React 19 + Vite 7 SPA** (TanStack Router는 유지)  
→ new-beginnings의 `src/` 컴포넌트 그대로 이식, SSR 레이어만 제거

---

## 2. 최종 디렉토리 구조 (전환 후)

```
survey2/web/
├── public/
│   └── data/                     ← 기존 web/data/ 이동
│       ├── projects.json
│       ├── dummy_gpu_survey_data.json
│       └── dummy_budget_data.json
├── src/
│   ├── types/
│   │   └── dashboard.ts          ← new-beginnings 그대로
│   ├── lib/
│   │   ├── utils.ts              ← new-beginnings 그대로
│   │   ├── aggregate.ts          ← new-beginnings 그대로
│   │   └── dashboardConfig.ts    ← new-beginnings 그대로
│   ├── hooks/
│   │   ├── use-mobile.tsx        ← new-beginnings 그대로
│   │   └── useDashboardData.ts   ← new-beginnings 그대로
│   ├── components/
│   │   ├── ui/                   ← new-beginnings 35개 shadcn 컴포넌트
│   │   └── dashboard/
│   │       ├── KpiRow.tsx
│   │       ├── FilterBar.tsx
│   │       ├── ChartCard.tsx
│   │       ├── DataTable.tsx
│   │       └── DetailPanel.tsx
│   ├── routes/
│   │   ├── __root.tsx            ← new-beginnings 수정 (SSR 제거)
│   │   ├── index.tsx             ← new-beginnings 수정 (createFileRoute만 유지)
│   │   └── admin.tsx             ← new-beginnings 수정 (동일)
│   ├── routeTree.gen.ts          ← TanStack Router 자동 생성
│   ├── main.tsx                  ← 신규 (SPA 진입점)
│   ├── styles.css                ← new-beginnings 그대로
│   └── legacy-dashboard.css     ← new-beginnings 그대로
├── index.html                    ← 신규 (SPA 단일 HTML)
├── package.json                  ← 수정 (bun→npm, SSR 패키지 제거)
├── tsconfig.json                 ← new-beginnings 수정
├── vite.config.ts                ← 신규 (표준 @vitejs/plugin-react)
├── components.json               ← new-beginnings 그대로 (shadcn 설정)
├── eslint.config.js              ← new-beginnings 그대로
├── .prettierrc                   ← new-beginnings 그대로
└── start_server.ps1              ← 기존 유지
```

---

## 3. 제거할 파일 (new-beginnings에서 가져오지 않는 것)

| 파일 | 이유 |
|------|------|
| `src/server.ts` | TanStack Start SSR 진입점 — 불필요 |
| `src/start.ts` | Cloudflare Workers 진입점 — 불필요 |
| `src/lib/error-capture.ts` | Cloudflare 전용 에러 처리 — 불필요 |
| `src/lib/error-page.ts` | Cloudflare 전용 에러 페이지 — 불필요 |
| `wrangler.jsonc` | Cloudflare Workers 설정 — 불필요 |
| `bunfig.toml` | bun 전용 설정 — npm 사용 시 불필요 |
| `.lovable/` | Lovable 개발도구 — 불필요 |
| `web/index.html`, `web/admin.html` | Vanilla JS HTML 교체 |
| `web/js/*.js`, `web/css/main.css` | Vanilla JS 전체 교체 |

---

## 4. package.json 변경사항

### 제거할 패키지
```
@cloudflare/vite-plugin
@tanstack/react-start
@lovable.dev/vite-tanstack-config
```

### 유지할 패키지
```
react, react-dom (^19)
@tanstack/react-router
@tanstack/router-plugin
recharts
tailwindcss, @tailwindcss/vite
lucide-react
shadcn/ui 관련 (radix-ui/*, class-variance-authority, clsx 등)
vite, @vitejs/plugin-react
typescript
```

### 최종 스크립트
```json
"scripts": {
  "dev": "vite --port 5174",
  "build": "vite build",
  "preview": "vite preview --port 5174"
}
```

---

## 5. vite.config.ts (신규)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: 'src/routes' }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 5174,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
```

---

## 6. 라우트 파일 수정 포인트

### src/routes/__root.tsx
`@tanstack/react-start`의 `createRootRoute`/`Meta`/`Scripts` 제거 →  
`@tanstack/react-router`의 `createRootRoute` + `<Outlet />`만 남긴다.

```tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => <Outlet />,
})
```

### src/routes/index.tsx, admin.tsx
`createFileRoute` 사용은 그대로 유지.  
`head: ()` 메타 설정 제거 (TanStack Start 전용).

### src/main.tsx (신규)
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles.css'

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

---

## 7. 데이터 스키마 — Python 백엔드 수정 필요

### 7-1. 현재 survey2 export JSON 구조

```json
{
  "meta": { "project": "...", "columns": [...], "total_rows": N },
  "rows": [...],
  // aggregates 없음 ← 문제
  // dashboard 없음 ← 문제
}
```

### 7-2. new-beginnings 기대 구조

```json
{
  "meta": { "project": "...", "columns": [...], "total_rows": N, "generated_at": "..." },
  "rows": [...],
  "aggregates": {           ← 반드시 추가
    "지역": { "서울": 3, "부산": 2 },
    "기관유형": { "대학": 5 }
  },
  "dashboard": null         ← null이면 자동 기본값 생성
}
```

### 7-3. Python export 수정 (engine/pipeline.py 또는 export 명령)

```python
# category 컬럼의 aggregates 자동 생성
aggregates = {}
for col in category_columns:
    aggregates[col] = dict(
        Counter(str(row.get(col, '') or '').strip() for row in rows if row.get(col))
    )

# dashboard 키 추가
export_data = {
    "meta": meta,
    "rows": rows,
    "aggregates": aggregates,
    "dashboard": None,  # 또는 저장된 DashboardConfig
}
```

> **중요**: `aggregates`가 없으면 FilterBar 드롭다운 옵션이 비어 나타남.  
> 상세 내용: `new-beginnings/docs/MIGRATION_AND_USAGE.md` 섹션 6 참조.

### 7-4. meta.columns 필드 호환성

survey2의 컬럼 메타에는 `min`, `max`, `sum`, `source_file` 등 추가 필드가 있다.  
React 대시보드는 이를 무시하므로 별도 처리 불필요.

---

## 8. 구현 단계

### Phase 1 — 뼈대 세팅 (1일)

1. `web/` 백업: `web_vanilla/` 로 이동 (또는 git branch)
2. `web/` 내 JS/HTML/CSS 파일 제거
3. `web/data/` → `web/public/data/` 이동
4. npm 초기화 + 패키지 설치
5. `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx` 생성
6. `bun run dev` → 빈 React 앱 확인

### Phase 2 — 컴포넌트 이식 (1일)

7. `src/types/`, `src/lib/`, `src/hooks/` 복사 (new-beginnings 그대로)
8. `src/components/ui/` 35개 shadcn 컴포넌트 복사
9. `src/components/dashboard/` 5개 컴포넌트 복사
10. `src/styles.css`, `src/legacy-dashboard.css` 복사

### Phase 3 — 라우트 수정 (반나절)

11. `src/routes/__root.tsx` SSR 제거 버전으로 교체
12. `src/routes/index.tsx` — `head:` 제거만
13. `src/routes/admin.tsx` — `head:` 제거만
14. `src/routeTree.gen.ts` — TanStack Router CLI로 재생성 (`npx tsr generate`)

### Phase 4 — 데이터 연결 (반나절)

15. Python `export` 명령에 `aggregates` + `dashboard: null` 추가
16. `public/data/projects.json` 형식 확인 (new-beginnings 스키마와 동일)
17. 기존 dummy JSON 파일에 `aggregates` + `dashboard` 키 추가 (테스트용)

### Phase 5 — 검증 (반나절)

18. `npm run dev` → `/` 대시보드 KPI/차트/탭 확인
19. `/admin` → 차트 추가/KPI 편집 → 새로고침 후 유지 확인
20. 프로젝트 셀렉터로 dummy_gpu_survey ↔ dummy_budget 전환 확인
21. 검색·필터 드롭다운 동작 확인
22. 다크모드 토글 확인

### Phase 6 — 빌드 & 배포 연동 (반나절)

23. `npm run build` → `dist/` 생성 확인
24. `start_server.ps1` 수정: `dist/` 경로로 정적 서빙
25. `python main.py export/deploy` 출력 경로 → `web/public/data/` 로 수정

---

## 9. 기존 기능 대응표

| 기존 Vanilla JS | React 대체 |
|----------------|-----------|
| `web/index.html` + `js/app.js` | `src/routes/index.tsx` + `useDashboardData` hook |
| `web/admin.html` + `js/admin.js` | `src/routes/admin.tsx` |
| `js/charts.js` (Chart.js) | `src/components/dashboard/ChartCard.tsx` (recharts) |
| `js/table.js` | `src/components/dashboard/DataTable.tsx` |
| `js/config.js` (localStorage) | `src/lib/dashboardConfig.ts` |
| `window.SURVEY_DATA` 전역 | `useDashboardData` hook state |
| `window.DASH_CFG` 전역 | `useMemo(cfg)` + `useState` |
| `data/` 경로 | `public/data/` (Vite 동일하게 `/data/` 서빙) |

---

## 10. 주의사항 및 리스크

| 항목 | 리스크 | 대응 |
|------|--------|------|
| TanStack Router 자동생성 | `routeTree.gen.ts` 수동 편집 금지 | `npx tsr generate` 사용 |
| `aggregates` 누락 | 필터 드롭다운 빈 값 | Phase 4에서 Python export 수정 필수 |
| Tailwind CSS v4 | v3와 설정 방식 다름 (`@tailwindcss/vite` 플러그인, `@import "tailwindcss"`) | `src/styles.css` 상단 import 방식 그대로 복사 |
| 기존 `web/data/` 경로 | Python export 스크립트가 `web/data/`에 쓰고 있음 | `web/public/data/`로 경로 변경 필요 |
| `start_server.ps1` | 현재 `web/` 루트를 서빙 | `dist/` 또는 Vite dev 서버 방식으로 변경 |

---

## 11. docs 업데이트 대상

| 파일 | 업데이트 내용 |
|------|-------------|
| `docs/plan/web_plan.md` | "현재 구현" 섹션을 React/Vite SPA로 업데이트 |
| `GUIDE.md` | `web/` 경로 안내, `npm run dev` 명령 추가 |
| `README.md` | Web 실행 방법 업데이트 |

---

## 참고 문서

- `c:\ai\new-beginnings\docs\MIGRATION_AND_USAGE.md` — 데이터 계약·차트/KPI 설정 가이드
- `survey2/docs/plan/web_plan.md` — FastAPI+React 서버형 장기 계획 (Phase 2 이후 참고)
- `survey2/docs/todo.md` — P4 "지도 탭" (addr_split 완료 후 이 React 앱에 지도 탭 추가)
