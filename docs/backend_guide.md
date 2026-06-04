# ClearSurvey — 2단계: FastAPI 백엔드 서버 가이드 (FastAPI Backend)

본 문서는 **ClearSurvey**의 3단계 설정 매니저와 파이썬 정제 코어를 중계하며 프로젝트 라이프사이클을 웹 인터페이스 상에서 동적으로 제어할 수 있도록 돕는 **FastAPI 백엔드 서버**의 구동 및 API 구조 명세 가이드입니다.

---

## 1. 백엔드 아키텍처 및 설정

백엔드는 `app/main.py` 단일 파일 내에 REST 엔드포인트들을 노출하여, 프론트엔드(`web`)의 비동기 요청을 파이썬 코어 엔진과 중계하도록 완벽하게 설계되었습니다.

* **CORS 설정**: 로컬 Vite 개발 서버(`http://localhost:5173` 등)와의 매끄러운 통신을 위해 CORS 미들웨어가 활성화되어 있습니다.
* **가상환경 연동**: 가상환경 또는 글로벌 파이썬에 `fastapi`, `uvicorn`, `python-multipart` 등의 API 구동 필수 의존성을 설치하여 독립 가동합니다.

---

## 2. 서버 구동 가이드

터미널 혹은 CLI 콘솔에서 API 서버를 가동시키는 명령어입니다.

```bash
# 방법 1: 배치 파일 (Windows)
start_backend.bat   # → http://localhost:8000

# 방법 2: 직접 실행
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```
* 서버 가동이 성공하면 `http://localhost:8000/api/health` 핑을 통해 상태를 실시간으로 확인할 수 있으며, 프론트엔드가 이를 자동 감지하여 정적 데모 모드에서 풀스택 설정 모드로 즉시 전환됩니다.

---

## 3. 핵심 REST API 엔드포인트 명세

| HTTP Method | URI | 설명 | 주요 역할 |
| :--- | :--- | :--- | :--- |
| **`GET`** | `/api/health` | 서버 동작 검증 (Health Check) | 프론트엔드 모드 판별 기준 제공 |
| **`GET`** | `/api/projects` | 프로젝트 리스트 조회 | `projects/` 폴더 내 프로젝트 목록 탐색 및 전송 |
| **`POST`** | `/api/projects/create` | 신규 프로젝트 및 엑셀 업로드 | `storage/`에 원본 저장 ➡️ 구조 자동 분석 ➡️ Draft xlsx 및 YAML 초안 작성 |
| **`GET`** | `/api/projects/{name}/config` | 프로젝트 설정 로드 | YAML 설정 및 `dashboard.json` 통합 객체 반환 |
| **`POST`** | `/api/projects/{name}/config` | 프로젝트 설정 및 빌더 저장 | 화면에서 수정한 10열 매핑 정보 및 대시보드 비주얼 레이아웃 저장 |
| **`POST`** | `/api/projects/{name}/run` | 정제 파이프라인 비동기 실행 | BackgroundTask로 실행 후 즉시 반환. 진행 상태는 `/status`로 폴링 |
| **`GET`** | `/api/projects/{name}/status` | 파이프라인 실행 상태 조회 | `idle` / `running` / `done` / `error` 상태 반환 |
| **`POST`** | `/api/projects/{name}/export` | 웹 대시보드용 JSON 배포 | `web/public/data/{project}_data.json`으로 가시화 데이터 추출 및 즉시 갱신 |
| **`GET`** | `/api/projects/{name}/download` | 정제 완료 결과물 다운로드 | 완성된 고품질의 엑셀 결과 파일을 원격으로 즉시 다운로드 제공 |

---

## 4. 백엔드 고도화 및 안정성 보장

* **Pydantic 검증 강화**: 설정 수정 시 `SurveyConfig.model_validate(payload)` 과정을 통과해야만 저장을 완료하므로 잘못된 인수 입력이나 손상된 데이터가 설정 파일에 덮어쓰여지는 것을 원천 방지합니다.
* **임시 파일 자동 복구**: 결과물 엑셀이 로컬 사용자 컴퓨터 등에서 이미 열려 있어 쓰기(Save)가 잠겨 있는 경우, 시스템이 다운되지 않고 타임스탬프(`_HHMMSS`)가 주입된 임시 안전 파일명을 자동으로 연산하여 우회 저장하므로 안정성을 완벽히 보장합니다.
