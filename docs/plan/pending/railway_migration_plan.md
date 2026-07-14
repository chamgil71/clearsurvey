# Railway 마이그레이션 구현 계획

> 작성일: 2026-07-08  
> 상태: 검토 중 (미구현)  
> 목표: 어드민 API 서버(FastAPI)를 로컬에서 Railway로 이전하면서 로컬 개발 환경도 유지

---

## 1. 현재 구조 (AS-IS)

```
[개발자 PC]
  ├─ frontend/    → bun dev (localhost:3000)
  └─ backend/     → uv run uvicorn (localhost:8000)
       └─ 파이프라인 실행 시 JSON을 
          frontend/public/data/ 에 직접 파일로 씀

[GitHub] ← git push
  └─ chamgil71/clearsurvey (private)

[Vercel] ← GitHub push 감지 → 자동 빌드/배포
  └─ frontend/ 빌드 → dist/client/ 서빙
       └─ /data/*.json 정적 파일 서빙
          (git에 커밋된 JSON만 보임)

[Railway] ← 없음 (로컬 전용)
```

**현재 문제점:**
- 어드민(`/admin`)에서 파이프라인을 실행해 JSON 내보내기를 해도, 그 결과를 git push해야만 Vercel에 반영됨
- 백엔드가 항상 로컬에서 가동 중이어야 어드민 기능 사용 가능
- 외부(다른 PC/모바일)에서 어드민 접근 불가

---

## 2. 목표 구조 (TO-BE)

```
[개발자 PC]
  ├─ frontend/    → bun dev (localhost:3000)
  └─ backend/     → uv run uvicorn (localhost:8000)  ← 로컬 개발 유지

[GitHub] ← git push
  ├─ Vercel 자동 배포 트리거
  └─ Railway 자동 배포 트리거

[Vercel] ← frontend/ 빌드/배포
  └─ 공개 대시보드: /api/data/* 를 Railway에서 직접 fetch

[Railway] ← backend/ 빌드/배포 (항상 켜짐)
  ├─ FastAPI :8000
  ├─ Persistent Volume: /app/storage/
  │    ├─ raw/           (업로드 엑셀)
  │    ├─ projects/      (프로젝트 설정, 정제 결과)
  │    └─ data/          (공개 JSON - 신규)
  └─ GET /api/data/projects  ← 신규 공개 엔드포인트
     GET /api/data/{name}    ← 신규 공개 엔드포인트
```

**변경 후 데이터 흐름:**
```
어드민 파이프라인 실행
→ Railway 백엔드: /app/storage/data/{name}_data.json 저장
→ Vercel 프론트엔드: GET https://[railway].railway.app/api/data/projects 조회
→ 공개 대시보드에 즉시 반영 (git push 불필요)
```

---

## 3. 로컬 → GitHub → Vercel/Railway 연결 구조

### 3-1. GitHub → Vercel (현재 구성)

| 항목 | 값 |
|---|---|
| 연결 방법 | Vercel 프로젝트 > GitHub 저장소 연동 |
| 감지 브랜치 | `main` (push 시 자동 빌드) |
| Root Directory | `frontend` |
| Build Command | `npm run build` (bun 사용) |
| Output Directory | `dist/client` |
| 자동 배포 | push 후 약 1~2분 |

**Vercel 환경변수 (현재):**
```
VITE_API_BASE_URL=http://localhost:8000   ← Railway 이전 후 변경 필요
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
```

### 3-2. GitHub → Railway (신규 설정 필요)

| 항목 | 값 |
|---|---|
| 연결 방법 | Railway 프로젝트 > GitHub 저장소 연동 |
| 감지 브랜치 | `main` (push 시 자동 배포) |
| Build 방식 | Dockerfile 자동 감지 (`backend/Dockerfile`) |
| 빌드 루트 | `backend/` |
| 포트 | 8000 |
| Healthcheck | `GET /api/health` |

**Railway 환경변수 (신규 설정):**
```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx
ALLOWED_ORIGINS=https://ms-clearsurvey.vercel.app,http://localhost:3000
STORAGE_ROOT=/app/storage
```

**Railway Volume 설정:**
```
Mount Path: /app/storage
```
- Starter 이상 플랜 필요 (Hobby/Pro: 영구 볼륨 지원)
- 무료 Trial 플랜은 컨테이너 재시작 시 파일 소멸 → 볼륨 필수

### 3-3. 로컬 개발 (변경 없음 유지 목표)

```bash
# 터미널 1: 백엔드
cd backend
uv run uvicorn app.main:app --reload --port 8000

# 터미널 2: 프론트엔드
cd frontend
bun dev
```

로컬에서는 `VITE_API_BASE_URL=http://localhost:8000` 그대로 사용.  
Supabase 환경변수 없으면 로컬 우회 모드(bypass) 자동 활성화.

---

## 4. 변경이 필요한 파일 목록 (상세)

### 4-1. `backend/app/main.py`

#### (a) STORAGE_ROOT 환경변수화

**현재 코드 (90~96행):**
```python
BACKEND_ROOT = Path(__file__).parent.parent
sys.path.append(str(BACKEND_ROOT))

STORAGE_ROOT = BACKEND_ROOT.parent / "storage"
FRONTEND_ROOT = BACKEND_ROOT.parent / "frontend"
```

**변경 후:**
```python
BACKEND_ROOT = Path(__file__).parent.parent
sys.path.append(str(BACKEND_ROOT))

# Railway: STORAGE_ROOT=/app/storage 환경변수로 오버라이드
STORAGE_ROOT = Path(os.environ.get("STORAGE_ROOT", str(BACKEND_ROOT.parent / "storage")))
DATA_DIR = STORAGE_ROOT / "data"   # 공개 JSON 저장 경로 (신규)
DATA_DIR.mkdir(parents=True, exist_ok=True)

FRONTEND_ROOT = BACKEND_ROOT.parent / "frontend"  # 로컬 호환용 유지
```

**이유:** Railway Docker에서 `__file__` = `/app/app/main.py`, `BACKEND_ROOT.parent` = `/` (파일시스템 루트)가 되어 `/storage`를 가리키게 됨. 환경변수로 `/app/storage`를 명시해야 Railway Volume과 매핑됨.

#### (b) CORS 환경변수화

**현재 코드 (108~115행):**
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    ...
)
```

**변경 후:**
```python
_origins_raw = os.environ.get("ALLOWED_ORIGINS", "")
_allowed_origins = (
    [o.strip() for o in _origins_raw.split(",") if o.strip()]
    if _origins_raw else ["*"]
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=_allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**이유:** 프로덕션에서 `allow_origins=["*"]`는 보안 위험. Railway에서 `ALLOWED_ORIGINS=https://ms-clearsurvey.vercel.app,http://localhost:3000` 설정.

#### (c) `/data` 정적 파일 마운트 → DATA_DIR로 변경

**현재 코드 (117~120행):**
```python
data_dir = FRONTEND_ROOT / "public" / "data"
data_dir.mkdir(parents=True, exist_ok=True)
app.mount("/data", StaticFiles(directory=str(data_dir)), name="data")
```

**변경 후:**
```python
# 정적 마운트 제거 — 대신 /api/data/* 엔드포인트로 서빙
# (로컬 개발 호환: localhost:8000/api/data/projects 로 동일하게 동작)
```

**주의:** 기존에 `localhost:8000/data/survey_data.json` 직접 접근하던 방식은 더 이상 동작 안 함. 프론트엔드가 `/api/data/` 경로를 쓰도록 같이 변경해야 함.

#### (d) `_update_projects_manifest` 함수

**현재:** `FRONTEND_ROOT / "public" / "data" / "projects.json"` 에 씀  
**변경 후:** `DATA_DIR / "projects.json"` 에 씀

영향 범위: `_update_projects_manifest`, `_run_pipeline_background`, `list_projects`, `set_publish_status`, `delete_project` — 모두 manifest_path 참조 변경 필요.

#### (e) `export_project_json` 함수

**현재 (809~813행):**
```python
dest_dir = FRONTEND_ROOT / "public" / "data"
dest_dir.mkdir(parents=True, exist_ok=True)
json_path = dest_dir / f"{cfg.project}_data.json"
shutil.copy2(proj_json_path, json_path)
```

**변경 후:**
```python
dest_dir = DATA_DIR
json_path = dest_dir / f"{cfg.project}_data.json"
shutil.copy2(proj_json_path, json_path)
```

#### (f) 공개 API 엔드포인트 2개 추가 (신규)

```python
@app.get("/api/data/projects")
def get_public_projects():
    """공개 대시보드용 프로젝트 목록 (인증 불필요)."""
    manifest_path = DATA_DIR / "projects.json"
    if not manifest_path.exists():
        return []
    try:
        with open(manifest_path, encoding="utf-8") as f:
            projects = json.load(f)
        # published=True 또는 필드 없는 레거시 항목만 반환
        return [p for p in projects if p.get("published", True) is not False]
    except Exception:
        return []


@app.get("/api/data/{name}")
def get_public_project_data(name: str):
    """공개 대시보드용 프로젝트 데이터 JSON (인증 불필요)."""
    _validate_project_name(name)
    data_path = DATA_DIR / f"{name}_data.json"
    if not data_path.exists():
        raise HTTPException(status_code=404, detail="프로젝트 데이터가 없습니다.")
    try:
        with open(data_path, encoding="utf-8") as f:
            return json.load(f)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"데이터 로드 실패: {exc}")
```

**주의:** `GET /api/data/{name}`이 `GET /api/data/projects`와 충돌할 수 있음.  
FastAPI는 경로 순서대로 매칭하므로 `/api/data/projects`를 `/api/data/{name}` **앞에** 정의해야 함.

---

### 4-2. `frontend/src/hooks/useDashboardData.ts`

**현재:** `/data/projects.json`, `/data/{name}_data.json` 정적 URL 직접 fetch  
**변경 후:** `${API_BASE}/api/data/projects`, `${API_BASE}/api/data/{name}` API 호출

**API_BASE 추가:**
```typescript
const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ??
  "http://localhost:8000";
```

**`normalizeUrl` 함수 제거** — 더 이상 불필요.

**`useDashboardData` 반환 값 변경:**
- `url: string | null` (현재) → `projectId: string | null` (변경 후)
- `switchProject(file: string)` → `switchProject(projectId: string)`

**변경 전후 비교:**

| 항목 | 현재 | 변경 후 |
|---|---|---|
| 프로젝트 목록 | `fetch("/data/projects.json")` | `fetch("${API_BASE}/api/data/projects")` |
| 데이터 로드 | `fetch("/data/{name}_data.json")` | `fetch("${API_BASE}/api/data/{id}")` |
| switchProject 인수 | 파일명 문자열 | 프로젝트 id |
| 반환 url | `/data/xxx_data.json` | 프로젝트 id |

---

### 4-3. `frontend/src/routes/index.tsx`

**현재 (152~165행):**
```tsx
<select value={url ?? ""}
  onChange={(e) => e.target.value && switchProject(e.target.value)}>
  {projects.map((p) => {
    const v = p.file.startsWith("data/") ? "/" + p.file : "/data/" + p.file;
    return <option key={p.id} value={v}>{p.name}</option>;
  })}
</select>
```

**변경 후:**
```tsx
<select value={projectId ?? ""}
  onChange={(e) => e.target.value && switchProject(e.target.value)}>
  {projects.map((p) => (
    <option key={p.id} value={p.id}>{p.name}</option>
  ))}
</select>
```

**`?data=` 쿼리파라미터 처리 (22~24행):**  
현재 `initialUrl` (파일 URL)을 `initialProjectId` (프로젝트 id)로 의미 변경. 기존 쿼리파라미터 형식 `?data=/data/xxx_data.json` → `?data=xxx` 로 변경됨.

---

### 4-4. `railway.json` (신규 파일, 저장소 루트)

```json
{
  "$schema": "https://railway.com/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "backend/Dockerfile",
    "buildContext": "backend"
  },
  "deploy": {
    "healthcheckPath": "/api/health",
    "healthcheckTimeout": 300,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 3
  }
}
```

---

### 4-5. `backend/Dockerfile` (수정 불필요, 현재 그대로 사용 가능)

현재 Dockerfile은 Railway에서 그대로 동작함.  
단, `uv sync --extra dev`로 `fastapi`, `uvicorn`이 포함되므로 별도 조치 불필요.

---

### 4-6. `docker-compose.yml` (로컬 Docker 사용 시 볼륨 경로 버그 수정 필요)

**현재 버그:**
```yaml
volumes:
  - ./storage:/app/storage          # /app/storage 에 마운트
  - ./frontend/public/data:/app/frontend/public/data
```

**코드에서 실제 참조하는 경로 (Docker 컨테이너 내):**
```
STORAGE_ROOT = /storage    ← /app/storage 가 아님!
FRONTEND_ROOT = /frontend  ← /app/frontend 가 아님!
```

**원인:** `__file__` = `/app/app/main.py` → `BACKEND_ROOT.parent` = `/`

**해결 방법 (docker-compose.yml에 환경변수 주입):**
```yaml
services:
  backend:
    environment:
      - STORAGE_ROOT=/app/storage
      - ALLOWED_ORIGINS=http://localhost:80,http://localhost:3000
```

현재 로컬에서는 Docker 없이 직접 `uv run uvicorn`으로 실행하므로 이 버그는 로컬 개발에 영향 없음. Docker 환경에서 실행할 경우 수정 필요.

---

## 5. Railway 설정 순서 (구현 시 작업 순서)

```
1. Railway 계정 생성 (railway.app)
2. New Project → GitHub 연동 → chamgil71/clearsurvey 선택
3. Service 설정:
   - Root Directory: backend
   - 또는 railway.json 자동 감지
4. Volume 추가:
   - Mount Path: /app/storage
   - Size: 1GB 이상 권장
5. 환경변수 설정 (Variables 탭):
   SUPABASE_URL=...
   SUPABASE_ANON_KEY=...
   ALLOWED_ORIGINS=https://ms-clearsurvey.vercel.app,http://localhost:3000
   STORAGE_ROOT=/app/storage
6. Deploy → 성공 확인
7. Railway URL 확인 (예: https://clearsurvey-backend.railway.app)
```

---

## 6. Vercel 환경변수 변경 (Railway 배포 후)

Railway URL 확정 후 Vercel 프로젝트 Settings → Environment Variables에서:

```
VITE_API_BASE_URL=https://clearsurvey-backend.railway.app   ← 변경
```

변경 후 Vercel Redeploy (또는 다음 push 시 자동 반영).

---

## 7. Supabase 설정 변경

Railway 배포 후 Supabase 대시보드 → Authentication → URL Configuration:

**Redirect URLs에 추가:**
```
https://ms-clearsurvey.vercel.app/admin
https://ms-clearsurvey.vercel.app/login
```

**GitHub OAuth App 설정 (GitHub OAuth 로그인 사용 시):**  
GitHub → Settings → Developer Settings → OAuth Apps → clearsurvey:
```
Homepage URL:     https://ms-clearsurvey.vercel.app
Callback URL:     https://ms-clearsurvey.vercel.app/login
```

---

## 8. 기존 데이터 이전 계획

현재 `frontend/public/data/` 에 있는 JSON 파일들:
```
survey_data.json
bus_data.json
mumhwa_data.json
수의계약정보_data.json
projects.json
```

Railway Volume 초기화 시 이 파일들이 없으므로:
1. Railway 배포 후 어드민에서 각 프로젝트를 다시 업로드/실행하거나
2. 초기 데이터를 Railway Volume에 수동 복사 (Railway CLI: `railway run`)

**또는:** Railway 배포 전에 기존 정적 JSON 파일을 폴백(fallback)으로 유지  
- Vercel에 기존 `public/data/*.json` 남겨두고
- API 호출 실패 시 정적 파일로 폴백하는 로직 추가 (선택사항)

---

## 9. 변경 시 검토 사항

### 필수 검토

| 항목 | 내용 | 위험도 |
|---|---|---|
| **경로 충돌** | `/api/data/projects`와 `/api/data/{name}` 라우트 순서 | 높음 |
| **볼륨 영속성** | Railway 볼륨 설정 없으면 재시작 시 프로젝트 파일 전부 소실 | 높음 |
| **CORS** | `ALLOWED_ORIGINS`에 Vercel 도메인 미포함 시 어드민 API 호출 전부 실패 | 높음 |
| **기존 데이터** | 이전 JSON 파일이 `public/data/`에만 있어 Railway에 없음 | 높음 |
| **로컬 개발** | `STORAGE_ROOT` 기본값이 올바른지 (로컬 경로 유지) | 중간 |
| **Supabase 리다이렉트** | GitHub OAuth callback URL 미등록 시 OAuth 로그인 실패 | 중간 |
| **`?data=` 쿼리파라미터** | 기존 공유된 URL 형식(`?data=/data/xxx.json`)이 깨짐 | 낮음 |

### 로컬 개발 영향 없음 확인

아래 사항은 이번 변경 후에도 로컬에서 동일하게 동작해야 함:

- [ ] `bun dev` 프론트엔드 개발서버 정상 시작
- [ ] `uv run uvicorn app.main:app --reload` 백엔드 정상 시작
- [ ] `VITE_API_BASE_URL` 미설정 시 `http://localhost:8000` 자동 사용
- [ ] Supabase 환경변수 없을 때 로컬 우회(bypass) 로그인 동작
- [ ] 어드민 페이지에서 파이프라인 실행 후 로컬 `/storage/data/` 에 JSON 저장
- [ ] 공개 대시보드 `localhost:3000`에서 `localhost:8000/api/data/projects` 호출 성공

### 프로덕션 검증 항목

- [ ] `GET https://[railway].railway.app/api/health` → `{"status":"ok"}`
- [ ] `GET https://[railway].railway.app/api/data/projects` → 프로젝트 목록 JSON
- [ ] `GET https://[railway].railway.app/api/data/{name}` → 데이터 JSON
- [ ] Vercel 대시보드 `/` → 데이터 정상 표시
- [ ] Vercel 어드민 `/admin` → Railway 백엔드 "서버 온라인" 표시
- [ ] Vercel 어드민에서 파이프라인 실행 → 즉시 공개 대시보드 반영
- [ ] GitHub OAuth 로그인 동작 (callback URL 등록 확인)

---

## 10. 롤백 계획

Railway 배포 실패 또는 문제 발생 시:
1. Vercel 환경변수 `VITE_API_BASE_URL`을 `http://localhost:8000`으로 되돌림
2. `useDashboardData.ts`의 fetch URL을 `/data/projects.json`으로 되돌림
3. 기존 정적 파일 서빙 방식으로 복귀 (변경 전 코드로 revert)

Railway 배포와 기존 로컬 방식은 독립적으로 동작하므로, 코드 변경만 롤백하면 됨.

---

## 11. 구현 우선순위 및 순서

```
1단계: backend/app/main.py 수정
   - STORAGE_ROOT 환경변수화
   - CORS 환경변수화
   - DATA_DIR 도입 및 manifest/export 경로 변경
   - 공개 API 엔드포인트 2개 추가
   - /data StaticFiles 마운트 제거

2단계: railway.json 생성

3단계: Railway 서비스 설정 (환경변수, 볼륨)

4단계: Railway 배포 확인 (health, /api/data/projects)

5단계: frontend/src/hooks/useDashboardData.ts 수정
   - API_BASE 상수 추가
   - fetch URL 변경
   - normalizeUrl 제거
   - 반환값 url → projectId 변경

6단계: frontend/src/routes/index.tsx 수정
   - select value를 projectId로 변경

7단계: Vercel 환경변수 VITE_API_BASE_URL 업데이트 → Redeploy

8단계: Supabase redirect URL 추가

9단계: 전체 검증 (로컬 + 프로덕션)
```
