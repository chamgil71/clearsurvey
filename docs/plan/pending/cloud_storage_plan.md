# 클라우드 스토리지 연동 (Supabase Storage) 구현 계획

> 작성일: 2026-07-15 · **정교화: 2026-07-17** (실측·전수조사 반영)
> 상태: **검토 중 (미착수) — [ROADMAP §2 Railway](../ROADMAP.md) 에 종속.** 지금 착수하지 않는다.
> 목표: 무상태(Stateless) 컨테이너 배포 시 로컬 디스크 `/storage` 파일 소실 문제 해결
> 관련: [`railway_migration_plan.md`](railway_migration_plan.md), [`dashboard_edit_plan.md`](dashboard_edit_plan.md), [`multi_pc_data_sync.md`](../../guides/multi_pc_data_sync.md)

---

## 0. 이 문서를 읽기 전에 — 이건 git 문제가 아니다

2026-07-17 [`dashboard_edit_plan`](dashboard_edit_plan.md) 검토 중 **"저장소가 부푸니 이번 참에
`storage/` 를 클라우드로 옮기자"** 는 논의가 나왔다. **틀린 연결이다. 실측으로 확인했다:**

| 오해 | 사실 |
|---|---|
| "`storage/` 를 옮기면 저장소가 가벼워진다" | **`storage/` 는 git 에 0바이트를 기여한다.** `.gitignore:16` 의 `/storage/*` 로 무시되고, 추적되는 건 README 2개뿐(`git ls-files storage/` = 2) |
| "`sangga_data.json` 19.4MB 가 저장소를 짓누른다" | git 안에서 **1.94MB**(JSON 은 90% 압축). 편집 커밋 1회당 증분 **약 207KB**(델타 압축). 문제가 아니다 |
| "그러니 클라우드/LFS 로 빼야 한다" | **뺄 이유 없음.** 이 문서의 동기는 저장소 크기와 **무관**하다 |

**이 문서의 유일한 동기는 §1 — 무상태 컨테이너에서 파일이 사라지는 것**이다.
로컬 API 우선(`dashboard_edit_plan` 요구사항 5번)인 동안에는 **그 동기가 존재하지 않는다.**

> 참고로 `.git` 팩 30.8MB 의 실질적 무게는 **히스토리에 박힌 죽은 xlsx 11.3MB**
> (`output/상가정보_cleaned.xlsx` 6.0MB + `project_budget_cleaned.xlsx` 5.3MB) 다.
> **xlsx 는 그 자체가 zip 이라 git 의 zlib·델타 압축이 둘 다 안 먹는다** — 원본 크기 그대로
> 영구 적재된다. `/output/`·`/projects/` 를 gitignore 에 넣은 것이 그 결론이었다.
> 이 사실은 §5 의 대역폭 계산에도 그대로 적용된다.

---

## 1. 현상 및 한계점 (유일한 동기)

* **현황**: GCP Cloud Run, AWS Fargate, Railway 등 무상태 컨테이너 환경에서는 롤링 배포·인스턴스
  재구동 시 로컬 디스크 `/storage` 하위의 업로드 파일·결과물이 **전량 소실**된다
  (Ephemeral Filesystem).
* **영향**: 사용자 데이터 유실 및 다운로드 에러.
* **적용 조건**: **[railway_migration_plan.md](railway_migration_plan.md) 가 확정된 뒤에만 의미가 있다.**
  Railway 이전 자체는 **Persistent Volume 으로 우선 해결 가능**하며, 다중 인스턴스/서버리스로
  확장할 때 비로소 본 문서의 추상화가 필요해진다.

> **즉 착수 조건은 "Railway 이전 확정" 이 아니라 "Railway + 다중 인스턴스 확정" 이다.**
> 단일 인스턴스 + Volume 이면 이 문서는 필요 없다. ROADMAP §3 이 §2 에 종속된 이유가 이것이다.

---

## 2. 무상태 배포를 막는 것은 `storage/` 만이 아니다 (신규)

기존 계획서는 파일 IO 만 다뤘다. 그러나 **같은 배포에서 함께 깨지는 인메모리 상태가 더 있다.**
이걸 모르고 스토리지만 추상화하면 "파일은 살아남는데 기능은 깨지는" 상태가 된다.

| 위치 | 상태 | 다중 인스턴스에서 무슨 일이 |
|---|---|---|
| `main.py:127` | `_pipeline_jobs: dict[str, dict]` (+ `threading.Lock`) | `/run` 을 A 인스턴스가 받고 `/status` 를 B 가 받으면 **"잡 없음"** 응답 |
| `main.py:130` | `_project_logs: dict[str, list[str]]` | SSE 로그 스트림(`/logs/stream`)이 **다른 인스턴스에 붙으면 빈 로그** |
| `main.py:27` | `_token_cache` | 캐시 미스만 발생 — **무해**(재검증하면 됨) |
| `main.py:271~` | 프로젝트 목록 = `STORAGE_ROOT/projects` **폴더 스캔**(`iterdir`) | 스토리지가 원격이면 **목록 자체가 스토리지 API 질의로 바뀌어야 함** |
| `main.py:96` | `FRONTEND_ROOT = BACKEND_ROOT.parent / "frontend"` | **§3 참고 — 이게 가장 큰 구멍** |

→ 결론: **이 문서는 "스토리지 추상화" 가 아니라 "무상태화" 계획의 일부**다.
잡 상태·로그는 Redis 등 외부 저장소가 필요하고, 그건 [railway_migration_plan](railway_migration_plan.md)
의 범위다. **두 문서를 함께 착수해야 한다.**

---

## 3. 기존 계획서가 빠뜨린 치명적 지점 — `FRONTEND_ROOT` (신규)

`main.py:96` 은 프런트엔드를 **같은 파일시스템의 형제 폴더**로 전제한다:

```python
FRONTEND_ROOT = BACKEND_ROOT.parent / "frontend"
...
dest_dir = FRONTEND_ROOT / "public" / "data"          # main.py:931
shutil.copy2(proj_json_path, dest_dir / f"{cfg.project}_data.json")
_update_projects_manifest(...)                        # main.py:151, 220, 273
```

**백엔드가 Railway 로 가면 `frontend/` 는 거기 없다** (Vercel 에 있다).
`shutil.copy2` 는 존재하지 않는 경로에 쓰게 되고, **발행 파이프라인 전체가 성립하지 않는다.**

기존 계획서는 `raw` 와 `cleaned.xlsx` 만 다루고 **`data.json` 발행 경로를 아예 다루지 않는다.**
그런데 그게 이 시스템이 실제로 세상에 내보이는 유일한 산출물이다(§0 의 지형).

### 3.1 그래서 클라우드로 가면 발행 모델이 바뀐다

| | 지금 (로컬) | 클라우드 이후 |
|---|---|---|
| data.json 위치 | `frontend/public/data/` (git 추적) | **버킷** `clearsurvey-public/<name>_data.json` |
| 발행 수단 | git 커밋 + 푸시 → Vercel 재빌드 | **버킷 업로드** (재빌드 없음) |
| 프런트가 읽는 법 | `fetch("/data/<name>_data.json")` | `fetch("<버킷 공개 URL>")` |
| 영향 범위 | — | `useDashboardData.ts`, `dashboard_edit_plan §6 발행` **전면 재설계** |

> `dashboard_edit_plan §6` 의 **「발행」 버튼과 git 가드 3종은 클라우드에서 전부 무의미해진다** —
> git 이 관여하지 않으므로. 대신 "버킷에 업로드" 가 되고, multi_pc 덮어쓰기 충돌 문제도
> 대부분 사라진다(단일 원본이 버킷이므로).
> **이건 이 문서가 `dashboard_edit_plan` 보다 **뒤에** 와야 하는 이유이기도 하다** — 먼저 오면
> 아직 없는 발행 모델을 설계하게 된다.

---

## 4. 아키텍처 및 구현 설계

```
┌────────────────────────────────────────────────────────┐
│                   StorageEngine (I/F)                  │
│  + upload(path, data: bytes)                           │
│  + download(path) -> bytes                             │
│  + exists(path) -> bool          ← 신규 (§4.2)         │
│  + list(prefix) -> list[str]     ← 신규 (§4.2)         │
│  + delete(path)                  -> None ← 신규        │
│  + signed_url(path, ttl)         -> str                │
└───────────────────────────┬────────────────────────────┘
                            │ STORAGE_PROVIDER 로 분기
            ┌───────────────┴───────────────┐
            ▼                               ▼
  LocalStorageEngine              SupabaseStorageEngine
  (로컬 디스크 — 현행 기본값)     (Supabase Bucket)
```

### 4.1 버킷 구성

| 버킷 | 내용 | 공개 |
|---|---|---|
| `clearsurvey-raw` | `storage/raw/*.xlsx` 원본 | **비공개** (개인정보) |
| `clearsurvey-projects` | `config.yaml`, `dashboard.json`, `overrides.json`, `output/*_cleaned.xlsx` | **비공개** |
| `clearsurvey-public` | `<name>_data.json`, `projects.json` | **공개 읽기** (§3.1) |

> `overrides.json` 은 [`dashboard_edit_plan §3`](dashboard_edit_plan.md) 이 새로 만드는 파일이다.
> **편집값이 곧 응답 내용이라 개인정보**이므로 반드시 비공개 버킷이다.

### 4.2 인터페이스가 `upload/download` 만으로 부족한 이유 (신규)

기존 계획서의 인터페이스는 2개 메서드였다. 실제 호출부를 보면 부족하다:

- `main.py:271~` 프로젝트 목록 = `proj_root.iterdir()` → **`list(prefix)` 필요**
- `main.py` 전반의 `.exists()` 분기 (config 유무, output 유무) → **`exists(path)` 필요**
- `DELETE /api/projects/{name}` (`main.py:1044`) → **`delete(path)` 필요**
- `/download` 의 `FileResponse` → **`signed_url()`** 로 대체 (§4.4)

### 4.3 `slicer.py` — 추상화로 감쌀 수 없는 지점 (신규)

```python
# engine/slicer.py:130
def inject_slicers(output_path: Path, cfg, col_index_map) -> None:
    with zipfile.ZipFile(output_path, "r") as zin:      # :143  ← 경로를 직접 연다
        ...
    with zipfile.ZipFile(tmp_path, "w", ...) as zout:   # :323  ← 임시파일에 재작성
```

`inject_slicers` 는 **저장된 xlsx 를 zip 레벨에서 다시 여는** 후처리다(openpyxl 이 슬라이서를
지원하지 않아 이렇게 만들어졌다 — [`project_files_lifecycle.md §4.8`](../../reference/project_files_lifecycle.md)).
**`upload/download` 추상화로 감쌀 수 없다.** 반드시 실제 파일 경로가 필요하다.

→ **따라서 "완전한 스토리지 추상화"는 불가능하고, 하이브리드가 유일한 현실이다**:

```
① 버킷에서 raw 다운로드 → 로컬 임시 디렉터리 (tempfile.TemporaryDirectory)
② 파이프라인·슬라이서 주입은 지금 그대로 로컬 파일로 수행   ← 코드 변경 최소화
③ 결과물만 버킷에 업로드
④ 임시 디렉터리 정리
```

**클라우드는 영속 계층, 처리는 로컬 임시 파일.** 이 원칙을 세우면 `engine/` 내부(46곳)는
거의 손대지 않아도 되고, 경계(`app/main.py`)만 바꾸면 된다. 기존 계획서가 "`engine/pipeline.py`,
`app/main.py` 내 파일 IO 전수 치환"이라 한 것보다 **훨씬 작은 범위**다.

### 4.4 결과 다운로드

`/download` 는 백엔드를 경유하지 않고 **Presigned URL** 을 발급해 브라우저가 직접 받게 한다
(백엔드 대역폭 절약). 단 [`dashboard_edit_plan §4.4`](dashboard_edit_plan.md) 의 규칙 —
**xlsx 가 뒤처졌으면 rebuild 후 URL 발급** — 을 지켜야 한다.

---

## 5. 전수 조사 결과 (기존 §3 의 "선행 필요" 를 실제로 수행)

기존 계획서는 *"파일 IO 호출 지점 전수 조사 후 목록화 선행 필요"* 라고만 적고 하지 않았다. 측정:

| 위치 | 파일 IO 호출 지점 |
|---|---|
| `app/main.py` | **108** |
| `engine/pipeline.py` | 14 |
| `engine/exporter.py` | 11 |
| `engine/analyzer.py` | 7 |
| `engine/validator.py` | 6 |
| `engine/{styler,summarizer,patterns}.py` | 각 2 |
| `engine/{config_excel,merger}.py` | 각 1 |
| **합계** | **약 154** |

**해석**: §4.3 의 하이브리드 원칙을 세우면 `engine/` 46곳은 **로컬 임시 파일을 계속 쓰므로
대부분 무변경**이다. 실질 변경 대상은 **`app/main.py` 의 108곳 중 경계에 해당하는 부분**
(업로드 수신, 프로젝트 목록, config 로드/저장, 결과 배포, 다운로드, 삭제)이다.

### 5.1 무료 티어 검토 (기존 §3 의 "사전 검토 필요")

실측 기반 계산 틀 (정확한 무료 티어 수치는 **착수 시점에 재확인 필요** — 변동됨):

| 항목 | 실측 |
|---|---|
| `cleaned.xlsx` | **약 6MB** (상가정보 기준, git 히스토리에서 확인) |
| `<name>_data.json` | 19.4MB (sangga) — **단 90% 압축 가능** → 전송 1.9MB |
| **xlsx 는 압축 불가** | 이미 zip → **6MB 가 그대로 전송된다** (§0 참고) |

- **저장**: 프로젝트당 raw + cleaned + data.json ≈ 30MB 내외 → 수십 개 프로젝트면 1GB 근접
- **대역폭(주의)**: 파이프라인 1회 = raw 다운로드 + cleaned 업로드. `dashboard_edit_plan` 의
  **rebuild 가 다운로드·발행마다 도는데, 그때마다 6MB 왕복**이 발생한다.
  → **지연 생성(lazy rebuild)이 클라우드에서는 비용 절감 수단이기도 하다.**
- **공개 data.json 은 egress 가 방문자 수에 비례한다** — 이게 무료 티어를 가장 먼저 소진시킬
  후보다. Vercel 이 정적으로 서빙하던 것을 버킷으로 옮기면 **비용 성격이 바뀐다**(§3.1).
  → 공개 버킷만 egress 무료인 곳(Cloudflare R2 등)을 쓰는 **혼합 구성**을 이때 재검토할 것.
  (비공개 `storage/` 는 저트래픽이라 Supabase 로 충분하다 — 벤더를 늘릴 이유가 없다)

---

## 6. 왜 Supabase Storage 인가

- **인증을 이미 Supabase 로 쓰고 있다** — `frontend/src/lib/supabase.ts`,
  `backend/app/main.py:30 verify_supabase_token`. 같은 프로젝트·자격증명을 재사용하므로
  **벤더가 늘지 않는다.**
- RLS·Presigned URL 이 기본 제공되어 비공개 버킷 + 서명 다운로드(§4.4)가 자연스럽다.
- **대안 검토**: R2/S3 는 egress 비용이 강점이지만, 비공개 `storage/`(저트래픽)에는 그 강점이
  해당 없다. **단 §5.1 의 공개 `data.json` 만은 예외** — 거기서만 재검토 가치가 있다.

---

## 7. 진행 순서 (착수가 결정되면)

0. **선행 조건 확인** — [Railway 이전](railway_migration_plan.md) **+ 다중 인스턴스**가 확정됐는가?
   단일 인스턴스 + Persistent Volume 이면 **여기서 멈춘다**(§1).
1. **`StorageEngine` 인터페이스 + `LocalStorageEngine`** — 현행 동작 100% 유지. 회귀 없음이 검증 기준.
2. **경계 치환** (`app/main.py`) — §5 의 108곳 중 경계만. `engine/` 은 건드리지 않는다(§4.3).
3. **`SupabaseStorageEngine`** + 버킷 3종(§4.1) + RLS.
4. **하이브리드 임시파일 경로**(§4.3) — 파이프라인·슬라이서가 그대로 도는지.
5. **발행 모델 전환**(§3.1) — `FRONTEND_ROOT` 제거, 공개 버킷 업로드, `useDashboardData` 가
   원격 URL 을 읽도록. **`dashboard_edit_plan §6` 재설계 동반.**
6. **인메모리 상태 외부화**(§2) — 잡·로그. [railway_migration_plan](railway_migration_plan.md) 범위.

---

## 8. 검토 필요 사항 (미확정)

* `STORAGE_PROVIDER=local`(기본값) 유지 시 로컬 워크플로우 무영향 확인 — **1단계의 검증 기준**.
* 무료 티어 수치 재확인(§5.1) — 특히 **공개 `data.json` egress**.
* Persistent Volume 방식과 **택일 여부**(§1) — 둘 중 하나만으로 충분할 수 있다.
* 공개 버킷을 Supabase 로 할지 R2 로 할지(§5.1·§6).

---

## 9. (참고) Supabase 세션 토큰 획득 방식 — 이미 완료됨

> 구 `remaining_improvements.md` 4번 항목. Supabase 를 다루는 문서라 참고용으로 함께 두나,
> **이미 구현 완료**이며 추가 작업이 필요 없다.

`frontend/src/hooks/useManagerApi.ts:70-94` — `localStorage` 를 루프 돌며 `sb-*-auth-token` 을
파싱하던 우회 방식에서 정합적인 세션 구독으로 전환 완료:
* 마운트 시 `supabase.auth.getSession()` 1회 조회 (line 84).
* `supabase.auth.onAuthStateChange` 구독으로 로그인/로그아웃/토큰 재발급 반영 (line 88-93).
* `fetchWithAuth`(line 96~)가 상태값 `sessionToken` 을 직접 헤더에 탑재.
* 401 시 잔여 키 정리 후 재로그인 유도 (line 107-120).

**결론**: 추가 작업 불필요. 회귀가 의심되면 위 라인만 재확인.
