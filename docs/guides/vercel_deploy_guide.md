# ClearSurvey 프론트엔드 Vercel 배포 가이드

본 문서는 GitHub 비공개(Private) 저장소를 유지한 채, 외부 배포용 정적 대시보드 웹뷰만 Vercel(버셀)에 안전하게 호스팅하는 방법을 설명합니다.

---

## 1. 사전 준비 (GitHub 저장소 비공개 설정)
정제 원본 엑셀 데이터 및 로컬 중요 설정이 외부에 유출되지 않도록 GitHub 저장소는 반드시 **비공개(Private)** 상태로 설정해야 합니다.

1. GitHub 저장소(Repository) 페이지의 우측 상단 **Settings** 탭으로 진입합니다.
2. 페이지 가장 아래의 **Danger Zone** 영역을 찾습니다.
3. **Change repository visibility** 버튼을 클릭하여 저장소를 **Private**으로 변경합니다.

---

## 2. Vercel 가입 및 프로젝트 연결
1. [Vercel 공식 홈페이지](https://vercel.com/)에 접속하여 **GitHub 계정으로 회원가입(Sign Up)** 및 로그인을 진행합니다.
2. Vercel 메인 대시보드 우측 상단의 **[Add New...]** ➡️ **[Project]** 버튼을 클릭합니다.
3. GitHub 저장소 목록에서 `clearsurvey` 저장소를 찾아 **[Import]** 버튼을 클릭합니다.

---

## 3. 프로젝트 빌드 설정 (🌟 중요)
ClearSurvey는 백엔드(FastAPI)와 프론트엔드(React/Vite)가 하나의 저장소에 들어있는 모노레포 구조이므로, 빌드 시 아래의 **디렉토리 경로 설정**을 반드시 올바르게 지정해주어야 배포에 실패하지 않습니다.

| 설정 항목 (Configuration) | 입력할 설정 값 | 설명 |
| :--- | :--- | :--- |
| **Framework Preset** | `Other` (자동 감지 안 됨) | TanStack Start는 Vercel이 자동 감지하지 못함 |
| **Root Directory** | `frontend` | 작업 경로를 `frontend/` 폴더로 지정 |
| **Build Command** | `npm run build` | 기본값 유지 |
| **Output Directory** | `dist/client` | 🌟 **필수**: 빌드 결과물 경로 |

> [!IMPORTANT]
> **Output Directory를 반드시 `dist/client`로 설정해야 합니다.**
> TanStack Start의 SPA 모드 빌드는 `dist/client/`와 `dist/server/` 두 폴더를 모두 생성합니다.
> Vercel이 기본값으로 `public/`이나 `dist/` 루트를 바라보면 정적 파일을 찾지 못해 404가 발생합니다.
> `frontend/vercel.json`에도 동일하게 선언되어 있으나 Vercel 대시보드 설정이 우선됩니다.

---

## 4. SPA 라우팅 설정 (`frontend/vercel.json`)

Vercel에서 새로고침(F5) 시 404가 발생하지 않도록 SPA 캐치올 리라이트를 설정합니다.
이미 저장소에 포함되어 있으므로 별도 작업 불필요합니다.

```json
{
  "outputDirectory": "dist/client",
  "cleanUrls": true,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**주의:** `rewrites`의 `/(.*)`는 정적 파일보다 후순위로 적용됩니다.
즉, `/data/projects.json` 같은 실제 파일은 리라이트 없이 그대로 서빙됩니다.

---

## 5. 샘플 데이터 구조 (`frontend/public/data/`)

Vercel 배포 시 백엔드 없이도 샘플 데이터를 보여주기 위해 아래 파일들이 저장소에 포함되어 있습니다.

```
frontend/public/data/
├── projects.json          # 프로젝트 목록 (표시할 데이터 파일 목록)
├── survey_data.json       # 샘플 설문 데이터
└── 수의계약정보_data.json  # 샘플 수의계약 데이터
```

빌드 시 Vite가 `public/` 폴더 전체를 `dist/client/`로 복사하므로,
Vercel에서 `/data/projects.json` 요청 시 200 OK로 정상 서빙됩니다.

---

## 6. 실시간 배포 및 운영 흐름 (CI/CD)
Vercel 배포 세팅이 완료되고 나면 향후 대시보드 데이터 갱신 작업이 편리해집니다.

1. **로컬 작업**: 로컬 어드민 페이지(`/admin`)에서 설문 프로젝트 설정 수정 후 "실행 및 배포" 클릭
2. **저장소 푸시**: 갱신된 정적 데이터를 GitHub에 푸시
   ```bash
   git add frontend/public/data/
   git commit -m "Update dashboard data"
   git push origin main
   ```
3. **자동 갱신**: Push 감지 후 Vercel이 자동 빌드·배포 (약 1분 소요)

---

## 7. 트러블슈팅 — 실패 이력 및 해결 과정

실제 배포 과정에서 발생한 문제들과 해결 방법을 기록합니다.

---

### ❌ 문제 1: 404 NOT_FOUND (초기 배포)

**증상:** Vercel에 배포 후 `https://ms-clearsurvey.vercel.app/` 접속 시 404 에러

**원인:** `vercel.json`에 `outputDirectory`가 없어 Vercel이 기본 경로(`public/`)를 바라봤으나,
실제 빌드 결과물은 `dist/client/`에 생성됨

**해결:** `frontend/vercel.json`에 `"outputDirectory": "dist/client"` 추가

```json
{
  "outputDirectory": "dist/client",
  "cleanUrls": true,
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

### ❌ 문제 2: 빈 화면 (데이터가 있는데 대시보드 미표시)

**증상:** `/data/projects.json`, `/data/survey_data.json` 모두 200 OK로 서빙되는데
대시보드 대신 "표시할 설문 데이터가 없습니다" 화면이 나타남

**원인:** `React is not defined` 런타임 에러
TanStack Start의 자동 생성 클라이언트 엔트리 코드가 `React.createElement()`를 전역 변수로 사용하는데,
React 17+의 새 JSX 트랜스폼에서는 `React`가 자동으로 전역에 노출되지 않음

실제 브라우저 콘솔 에러:
```
Uncaught ReferenceError: React is not defined
```

빌드된 번들에서 발견된 문제 코드:
```js
lb.hydrateRoot(document, React.createElement(it.StrictMode, null, R))
```

추가로 발견된 누락 import 파일:
- `frontend/src/components/ui/sonner.tsx` — `React.ComponentProps` 사용, import 없음
- `frontend/src/components/ui/skeleton.tsx` — `React.HTMLAttributes` 사용, import 없음

**해결:**

1. `frontend/src/router.tsx`에 React를 전역 노출:
```ts
import * as React from "react";
// TanStack Start 생성 코드가 React를 전역으로 사용
(globalThis as unknown as Record<string, unknown>).React = React;
```

2. `sonner.tsx`, `skeleton.tsx`에 누락된 import 추가:
```ts
import * as React from "react";
```

---

### ❌ 문제 3: 에러 상태 UI가 의도와 다름

**증상:** 데이터 fetch 실패 시 기술적 에러 메시지만 표시되어 사용자가 빈 화면으로 인식

**해결:** 데이터가 없을 때 표시되는 빈 상태 화면을 사용자 친화적으로 개선
- 브랜드 로고 + 안내 문구
- 관리자 로그인 버튼
- GitHub 링크

---

## 8. 최종 확인 사항

배포 완료 후 아래 URL에서 정상 동작을 확인합니다.

| 확인 항목 | URL | 기대 결과 |
| :--- | :--- | :--- |
| 대시보드 메인 | `https://ms-clearsurvey.vercel.app/` | 샘플 데이터 차트 표시 |
| 프로젝트 목록 | `https://ms-clearsurvey.vercel.app/data/projects.json` | JSON 200 OK |
| 샘플 데이터 | `https://ms-clearsurvey.vercel.app/data/survey_data.json` | JSON 200 OK |
| 로그인 페이지 | `https://ms-clearsurvey.vercel.app/login` | 로그인 폼 표시 |
| SPA 라우팅 | `/login` 새로고침 | 404 없이 정상 로드 |
