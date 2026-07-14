# 멀티 PC 데이터 동기화 & Vercel 배포 충돌 가이드

> 여러 PC에서 clearsurvey를 오갈 때 발생하는 **프로젝트 미표시·Vercel 덮어쓰기 충돌** 문제의 원인과 안전한 운영 방법을 정리한다.
> 배경: `storage/`가 개인정보(설문 원본)를 이유로 gitignore 되어 있어, PC 간에 데이터가 따라오지 않는다.

---

## 1. 데이터 3종 구조 (핵심)

clearsurvey의 데이터는 성격·git 추적 여부가 **서로 다른 3종류**로 나뉜다. 이 구분을 이해하면 모든 혼란이 풀린다.

| 구분 | 위치 | Git 추적 | 성격 |
| :--- | :--- | :---: | :--- |
| **① 원본 (raw)** | `storage/raw`·`draft`·`dummy`·`backup` | ❌ 무시 | **개인정보 포함** → 절대 커밋 금지 |
| **② 프로젝트 레시피** | `projects/<name>/config.yaml`·`dashboard.json` | ❌ 무시 | 개인정보 없음. **이것만 있으면 100% 재현 가능** |
| **③ 발행 대시보드** | `frontend/public/data/*.json` | ✅ **추적됨** | **Vercel이 실제로 서빙**하는 파일 |

### 데이터 흐름
```
[업로드] storage/raw  ──analyze──▶  projects/<name>/(config.yaml, dashboard.json)
                                          │ run(정제 파이프라인)
                                          ▼
                             projects/<name>/output/cleaned.xlsx
                                          │ export
                                          ▼
                    ✅ frontend/public/data/<name>_data.json  ──git push──▶ Vercel 서빙
```
- export API(`backend/app/main.py`)는 결과 JSON을 **프로젝트 폴더에 저장한 뒤 `frontend/public/data/`로 복사**한다.
- 따라서 **웹/Vercel에 보이는 것은 추적되는 `frontend/public/data/*.json`** 이다. (`projects.json`이 매니페스트)

---

## 2. 무엇이 문제인가

### 2.1 다른 PC에서 만든 프로젝트가 안 보인다
- 풀스택 매니저의 **프로젝트 목록은 gitignore된 `projects/`를 스캔**한다.
- 그래서 **레시피·원본이 없는 PC에서는 편집용 프로젝트가 보이지 않는다.**
- 단, **이미 발행된 대시보드(`frontend/public/data`)는 git에 있으므로 정적 모드·Vercel에선 그대로 보인다.**
- 요약: **"보기"는 되고 "재편집·재실행"은 안 된다.** (원본·레시피가 로컬에 없어서)

### 2.2 Vercel 덮어쓰기 / 양쪽 PC 충돌
- **로컬 서버를 켜는 것만으로는 Vercel에 아무 영향 없다.** Vercel은 **커밋+푸시된** `frontend/public/data`만 반영한다.
- **진짜 위험**: 원본·레시피가 없는 PC에서 **export/빌드를 돌려 `public/data`를 (빈/다른 데이터로) 재생성 → 커밋·푸시**하면
  - 원래 PC가 만든 대시보드를 **덮어쓰고**, **Vercel도 비워진다.**
  - 양쪽 PC가 이 JSON을 각자 고쳐 푸시하면 **git 병합 충돌**.

---

## 3. 하지 말아야 할 것

- 🚫 **`storage/`(raw)를 gitignore에서 풀어 커밋** — 개인정보를 저장소(비공개라도)에 올리는 것은 위험.
- 🚫 **원본·레시피가 없는 PC(빈 PC)에서 export/빌드로 `frontend/public/data`를 재생성 후 커밋·푸시** — 원래 PC의 발행물을 덮어씀.
- 🚫 **데이터가 없는 PC에서 동기화 목적의 커밋** — 빈 상태를 커밋해 원격을 훼손할 위험. **모든 데이터 커밋은 데이터가 있는 PC에서.**

---

## 4. 권장 운영 방법 (안전 순서)

### ① [기본·가장 안전] '작성 PC' 1대 지정 — 설정 변경 없음
- 데이터가 있는 **원래 PC만** 파이프라인·export·`frontend/public/data` 커밋을 담당(= 유일한 authoring PC).
- **다른 PC는 "보기/프론트 개발 전용"**:
  - `git pull`로 최신 대시보드만 받아 본다(정적 모드).
  - export/build로 `public/data`를 **쓰지 않는다**, 그 폴더를 **커밋하지 않는다**.
- `storage`·`projects` .gitignore는 **그대로 둔다.**

### ② [선택] 레시피만 동기화 (raw는 계속 제외)
`config.yaml`·`dashboard.json`은 개인정보가 없으므로 **이 둘만 화이트리스트**로 추적하면 프로젝트 정의가 PC 간에 따라온다.

```gitignore
# projects/ 는 무시하되, 개인정보 없는 레시피(config·dashboard)만 추적
/projects/*
!/projects/*/
!/projects/*/config.yaml
!/projects/*/dashboard.json
!/projects/README.md
```

- ⚠️ 이 편집·첫 커밋도 **원래(데이터 보유) PC에서** 수행.
- 한계: raw가 없어 **클렌징 재실행은 여전히 원본이 필요**하지만, 대시보드 레이아웃 재현·수정에는 충분.

### ③ [raw까지 공유가 꼭 필요하면] git 대신 클라우드 동기화
- `storage/`를 **OneDrive / Google Drive / NAS**의 동기화 폴더에 두거나 심볼릭 링크로 연결.
- git 저장소는 깨끗하게 유지하고 **raw만 별도 채널로 동기화** → 개인정보 대응으로도 정석.

---

## 5. 요약 (권장 결론)

- **raw는 풀지 않는다.** 빈 PC는 **뷰어**로만 쓴다.
- 편집·발행은 **작성 PC 한 곳**에서만.
- 프로젝트 정의를 옮기고 싶으면 **레시피(config.yaml·dashboard.json)만** 화이트리스트로 추적(§4②).
- raw 공유가 필요하면 **클라우드 드라이브**로(§4③), git 아님.

| 상황 | 해야 할 일 |
| :--- | :--- |
| 다른 PC에서 대시보드를 **보기만** | `git pull` → 정적 모드로 확인 (export·커밋 금지) |
| 새 프로젝트 **편집·발행** | 작성 PC에서 실행 → `frontend/public/data` 커밋·푸시 |
| 프로젝트 정의를 **다른 PC로 이전** | §4② 화이트리스트로 config·dashboard 커밋(작성 PC에서) |
| raw까지 공유 | §4③ 클라우드 폴더/NAS 동기화 |

---

*작성: 2026-07-09 — storage gitignore로 인한 멀티 PC 동기화·Vercel 충돌 이슈 정리*
