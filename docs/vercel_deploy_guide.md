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
3. GitHub 저장소 목록에서 방금 비공개로 설정한 본 `clearsurvey` 저장소를 찾아 **[Import]** 버튼을 클릭합니다.

---

## 3. 프로젝트 빌드 설정 (🌟 중요)
ClearSurvey는 백엔드(FastAPI)와 프론트엔드(React/Vite)가 하나의 저장소에 들어있는 모노레포 구조이므로, 빌드 시 아래의 **디렉토리 경로 설정**을 반드시 올바르게 지정해주어야 배포에 실패하지 않습니다.

| 설정 항목 (Configuration) | 입력할 설정 값 | 설명 |
| :--- | :--- | :--- |
| **Framework Preset** | `Vite` 또는 `Other` | 프론트엔드 빌드 도구 (Vercel이 자동 감지) |
| **Root Directory** | `frontend` | 작업 경로를 `frontend/` 폴더로 지정 (터미널 `cd frontend`와 동일) |
| **Build Command** | `npm run build` | 빌드 실행 명령어 (기본값 유지) |
| **Output Directory** | **수동 수정 금지 (기본값 유지)** | 🌟 **절대 건드리지 마세요**: Vercel이 빌드 완료 후 Nitro 엔진이 뱉어내는 `.vercel/output`을 자동 감지하여 배포를 완료합니다. |

> [!IMPORTANT]
> **Output Directory 설정 시 주의사항**
> 본 프로젝트는 일반 React SPA가 아닌 **TanStack Start** 풀스택 프레임워크를 사용하고 있습니다. 
> 따라서 Vercel 클라우드에서 빌드 명령을 돌리면 내부 Nitro 엔진이 자체적으로 **`.vercel/output`** (또는 `.output`) 디렉토리를 생성하여 Vercel의 서버리스 엣지 규격에 맞춰 조립을 완료합니다.
> Vercel 설정 대시보드에서 **Output Directory** 항목을 `dist/client` 등으로 수동 덮어쓰기하게 되면, 서버리스 구동에 필요한 엣지 라우팅 설정이 유실되어 배포가 실패하거나 오작동하게 됩니다. **반드시 기본값(공란) 그대로 두어 Vercel의 프레임워크 자동 매핑(Zero-Configuration) 기능이 작동되도록 하셔야 합니다.**

---

## 4. SPA 라우팅 예외 처리 (`vercel.json`)
Vercel 호스팅 환경에서 페이지를 새로고침(F5)할 때 React 라우팅이 풀리며 `404 Not Found` 에러가 나는 현상을 방지하기 위해, 이미 프론트엔드 루트 폴더 하위에 [frontend/vercel.json](file:///C:/ai/clearsurvey/frontend/vercel.json) 설정 파일을 생성해 두었습니다.
이 파일이 깃허브에 함께 올라가면 Vercel이 이를 자동으로 인식하여 모든 가상 라우트 경로를 `index.html`로 매핑해 줍니다.

---

## 5. 실시간 배포 및 운영 흐름 (CI/CD)
Vercel 배포 세팅이 완료되고 나면 향후 대시보드 데이터 갱신 작업이 대단히 편리해집니다.

1. **로컬 작업**: 로컬 어드민 페이지(`/admin`)에서 설문 프로젝트의 설정을 수정하고 "실행 및 배포"를 실행합니다.
2. **저장소 푸시**: 갱신된 정적 데이터를 포함하여 깃허브에 푸시합니다.
   ```bash
   git add .
   git commit -m "Update dashboard data"
   git push origin main
   ```
3. **자동 갱신**: Git Push가 입력되면 Vercel 클라우드 서버가 이를 실시간 감지하여 자동으로 새 소스를 가져가 빌드를 완료하고, 외부 공개용 웹 대시보드를 무중단으로 1분 내에 자동 최신화해 줍니다.
