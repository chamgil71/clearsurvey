# 클라우드 스토리지 연동 (Supabase Storage) 구현 계획

> 작성일: 2026-07-15
> 상태: 검토 중 (미구현) — `docs/plan/remaining_improvements.md` 2번 항목에서 분리 이관
> 목표: Railway 등 무상태(Stateless) 컨테이너 배포 시 로컬 디스크 `/storage` 파일 소실 문제 해결

---

## 0. 이관 배경

기존 `docs/plan/remaining_improvements.md`에 잔여 개선 사항 중 하나로 함께 있었으나,
독립적인 아키텍처 변경(스토리지 추상화 계층 도입)이라 별도 계획서로 분리함.
Supabase를 다루는 김에 관련 세션 토큰 이슈(구 4번 항목)도 참고용으로 §4에 함께 기록.

**본 문서는 계획 단계이며 착수 여부가 결정되지 않았습니다 (보류).**

---

## 1. 현상 및 한계점

* **현황**: GCP Cloud Run, AWS Fargate, Railway 등 무상태(Stateless) 컨테이너 클라우드 환경에서는
  컨테이너 롤링 배포 및 인스턴스 재구동 시 로컬 디스크 `/storage` 하위에 적재된 업로드 파일 및
  요약 보고서 파일이 전량 소실되는 Ephemeral Filesystem 한계를 가지고 있습니다.
* **영향**: 사용자 데이터 유실 및 다운로드 에러가 동반됩니다.
* **관련 계획**: [railway_migration_plan.md](railway_migration_plan.md)와 동시에 검토되어야 함
  (Railway 이전 자체는 Persistent Volume으로 우선 해결 가능하나, 다중 인스턴스/서버리스
  환경으로 확장 시에는 본 문서의 스토리지 추상화가 필요해짐).

---

## 2. 아키텍처 및 구현 설계

```
┌────────────────────────────────────────────────────────┐
│                   StorageEngine (I/F)                  │
│  + upload_file(path, data)                             │
│  + download_file(path) -> bytes                        │
└───────────────────────────┬────────────────────────────┘
                            │ (구현체 분기)
            ┌───────────────┴───────────────┐
            ▼                               ▼
  LocalStorageEngine              SupabaseStorageEngine
  (로컬 디스크 보존)              (Supabase Bucket 원격 저장)
```

### 2.1 스토리지 추상화 인터페이스 (Storage Engine Interface) 도입
* 백엔드 내에 파일 IO를 로컬 디스크에 하드코딩하지 않고 추상화된 스토리지 인터페이스인
  `StorageEngine`을 수립합니다.
* 환경 변수 `STORAGE_PROVIDER` (값: `local` 또는 `supabase`)에 따라 구동 시점에
  의존성 주입(Dependency Injection)을 처리합니다.

### 2.2 Supabase Storage 연동 프로세스
* **파일 업로드**: 사용자가 엑셀 파일을 업로드하면, 백엔드는 해당 바이너리를 로컬 디스크가
  아닌 Supabase Storage 버킷 `clearsurvey-raw`에 저장합니다.
* **정제 실행 (Pipeline Run)**:
  * 파이프라인 구동 시점에 Supabase Storage로부터 Raw 엑셀 바이너리를 스트림으로 로드하여
    `openpyxl` 및 `pandas` 메모리에 이식합니다.
  * 정제가 끝난 `cleaned.xlsx` 결과물 역시 `clearsurvey-projects/{projectName}/cleaned_result.xlsx`
    위치로 직접 업로드(Upload)합니다.
* **결과 다운로드**: 프론트엔드가 다운로드 요청 시, 백엔드를 경유하지 않고 Supabase Storage의
  **보안 다운로드 서명 URL (Presigned URL)**을 직접 발급받아 프론트엔드 브라우저에서 다운로드가
  실행되게 설계하여 백엔드 대역폭 부하를 최소화합니다.

---

## 3. 검토 필요 사항 (미확정)

* `STORAGE_PROVIDER=local`(현재 기본값) 유지 시 로컬 개발 워크플로우에 영향이 없는지 확인 필요.
* Supabase Storage 무료 티어 용량/대역폭 제한이 실사용량 대비 충분한지 사전 검토 필요.
* `engine/pipeline.py`, `app/main.py` 내 파일 IO 호출 지점 전수 조사 후 `StorageEngine` 인터페이스로
  치환 가능한 지점 목록화 선행 필요 (변경 범위가 커서 별도 리팩터링 계획 단계를 거쳐야 함).
* [railway_migration_plan.md](railway_migration_plan.md)의 Persistent Volume 방식과 우선순위/병행
  여부 결정 필요 — 두 방식 중 하나만으로 충분할 수 있음.

---

## 4. (참고) Supabase 세션 토큰 획득 방식 — 이미 완료됨

> 구 `remaining_improvements.md` 4번 항목. Supabase를 다루는 문서이므로 참고용으로 함께 기록하나,
> **이미 구현이 완료된 상태**이며 추가 작업이 필요하지 않습니다.

### 4.1 과거 현상 (해결됨)
* 과거에는 `useManagerApi.ts`에서 API 인증 헤더에 기입할 Bearer JWT 토큰을 획득하기 위해 브라우저
  `localStorage` 전체를 루프 돌며 `"sb-*-auth-token"` 문자열 키를 직접 발굴 및 디코딩하여 파싱하는
  우회 방식을 취하고 있었습니다.

### 4.2 현재 구현 상태 (확인됨, 2026-07-15)
`frontend/src/hooks/useManagerApi.ts:70-94`에 이미 정합적인 세션 구독 체계로 전환 완료:
* 마운트 시점에 `supabase.auth.getSession()`을 1회 조회해 세션을 수집 (line 84).
* `supabase.auth.onAuthStateChange` 이벤트를 구독하여 로그인/로그아웃/토큰 만료 재발급 등의
  변화를 리액트 상태(`sessionToken`)에 반영 (line 88-93).
* `fetchWithAuth`(line 96~)가 `localStorage` 루프 없이 상태값 `sessionToken`을 직접 헤더에 탑재.
* 401 응답 시 `sb-*-auth-token` 잔여 키 정리 후 재로그인 유도 로직도 별도로 유지 중 (line 107-120).

**결론**: 추가 작업 불필요. 향후 회귀가 의심될 경우 위 라인만 재확인하면 됨.
