# 🚀 ClearSurvey 잔여 기능 개선 및 아키텍처 기획서

본 문서는 ClearSurvey 시스템의 지속 가능한 발전과 엔터프라이즈급 안정성을 확보하기 위해 프론트엔드 및 백엔드 영역에 남겨진 **4대 잔여 개선 사항**의 구체적인 아키텍처 설계와 구현 로드맵을 정의한 기획서입니다.

---

## 목차
1. [다중 엑셀 파일 병합(Merge)의 웹 UI 연동 기획](#1-다중-엑셀-파일-병합merge의-웹-ui-연동-기획)
2. [클라우드 스토리지 연동 (Railway Ephemeral Filesystem 대응) 기획](#2-클라우드-스토리지-연동-railway-ephemeral-filesystem-대응-기획)
3. [프론트엔드 번들 크기 최적화 (Chunk Size Warning) 기획](#3-프론트엔드-번들-크기-최적화-chunk-size-warning-기획)
4. [프론트엔드 Supabase 세션 토큰 획득 방식 개선 기획](#4-프론트엔드-supabase-세션-토큰-획득-방식-개선-기획)

---

## 1. 다중 엑셀 파일 병합(Merge)의 웹 UI 연동 기획

### ① 현상 및 한계점
* **현황**: 백엔드 엔진([merger.py](file:///c:/ai/clearsurvey/backend/engine/merger.py)) 및 CLI 명령어(`uv run main.py merge`)를 통해서는 여러 파일 병합 설정(yaml)을 처리할 수 있으나, 웹 UI(Step 1 ~ Step 3)의 프로젝트 생성 화면은 오직 단일 파일 업로드만 지원하여 다중 소스 취합 작업을 웹 브라우저에서 수행할 수 없는 한계가 있습니다.

### ② 아키텍처 및 구현 설계

#### 1) UI/UX 와이어프레임 기획
* `Step1_ProjectUpload` 컴포넌트 상단에 **[단일 파일 업로드 / 다중 파일 병합]** 선택 스위치 배치.
* 다중 파일 병합 선택 시:
  * **파일 드래그앤드롭 영역**: 복수 개의 `.xlsx` 파일을 동시에 업로드하여 파일 리스트 수집.
  * **병합 설정 패널**:
    * **중복 제거 기준 컬럼 (Key Column)**: 행 중복 제거의 기준이 될 원본 열 이름 선택.
    * **중복 제거 전략 (Dedup Strategy)**: `first` (첫 행 보존), `last` (마지막 행 보존), `none` (중복 허용) 선택 드롭다운.
    * **출처 파일 기록 여부**: 결과물 시트에 `_출처파일` 컬럼을 자동 추가할지 여부 토글 스위치.

#### 2) API 명세 및 백엔드 파이프라인 연계
* **신규 API 엔드포인트 개설**: `POST /api/projects/create-merge`
* **요청 바디**: 복수 파일 (`file[]`) 및 병합 설정 정보 (JSON string).
```json
{
  "project_name": "연도별_수의계약_통합",
  "dedup_strategy": "first",
  "key_cols": ["답변ID"],
  "add_source_col": true
}
```
* **백엔드 처리 플로우**:
  1. 백엔드는 수신된 복수 엑셀 파일들을 `storage/raw/{projectName}/` 임시 폴더에 격리 저장합니다.
  2. 수신된 JSON 설정을 기반으로 `engine/merger.py` 모듈을 가동하여 하나의 `merged.xlsx` 파일을 빌드합니다.
  3. 빌드 완료된 `merged.xlsx`에 대해 기존 `ExcelAnalyzer.analyze()` 분석기를 가동하여 초안 `draft.xlsx` 및 `config.yaml`을 동일하게 생성하고 성공 응답을 반환합니다.

---

## 2. 클라우드 스토리지 연동 (Railway Ephemeral Filesystem 대응) 기획

### ① 현상 및 한계점
* **현황**: GCP Cloud Run, AWS Fargate, Railway 등 무상태(Stateless) 컨테이너 클라우드 환경에서는 컨테이너 롤링 배포 및 인스턴스 재구동 시 로컬 디스크 `/storage` 하위에 적재된 업로드 파일 및 요약 보고서 파일이 전량 소실되는 Ephemeral Filesystem 한계를 가지고 있습니다.
* **영향**: 사용자 데이터 유실 및 다운로드 에러가 동반됩니다.

### ② 아키텍처 및 구현 설계

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

#### 1) 스토리지 추상화 인터페이스 (Storage Engine Interface) 도입
* 백엔드 내에 파일 IO를 로컬 디스크에 하드코딩하지 않고 추상화된 스토리지 인터페이스인 `StorageEngine`을 수립합니다.
* 환경 변수 `STORAGE_PROVIDER` (값: `local` 또는 `supabase`)에 따라 구동 시점에 의존성 주입(Dependency Injection)을 처리합니다.

#### 2) Supabase Storage 연동 프로세스
* **파일 업로드**: 사용자가 엑셀 파일을 업로드하면, 백엔드는 해당 바이너리를 로컬 디스크가 아닌 Supabase Storage 버킷 `clearsurvey-raw`에 저장합니다.
* **정제 실행 (Pipeline Run)**: 
  * 파이프라인 구동 시점에 Supabase Storage로부터 Raw 엑셀 바이너리를 스트림으로 로드하여 `openpyxl` 및 `pandas` 메모리에 이식합니다.
  * 정제가 끝난 `cleaned.xlsx` 결과물 역시 `clearsurvey-projects/{projectName}/cleaned_result.xlsx` 위치로 직접 업로드(Upload)합니다.
* **결과 다운로드**: 프론트엔드가 다운로드 요청 시, 백엔드를 경유하지 않고 Supabase Storage의 **보안 다운로드 서명 URL (Presigned URL)**을 직접 발급받아 프론트엔드 브라우저에서 다운로드가 실행되게 설계하여 백엔드 대역폭 부하를 최소화합니다.

---

## 3. 프론트엔드 번들 크기 최적화 (Chunk Size Warning) 기획

### ① 현상 및 한계점
* **현황**: React 컴파일 및 빌드 시 `html2pdf.js` (약 975kB) 및 `supabase-js` (약 208kB) 등 고용량 외부 라이브러리들로 인해 번들러(Vite/Rollup)가 "Some chunks are larger than 500 kB" 경고를 발생시킵니다.
* **영향**: 초기 웹 서비스 접속 시 무거운 벤더 스크립트 파일을 한 번에 내려받아야 하므로 페이지 로딩 성능 저하를 초래합니다.

### ② 아키텍처 및 구현 설계

#### 1) Rollup Manual Chunks 최적화
* `frontend/vite.config.ts` 파일의 `rollupOptions` 설정을 정교화하여 덩치가 큰 외부 패키지들을 메인 번들 스크립트 `index.js`에서 독립된 별도의 벤더 청크 파일로 물리적 분리 처리를 수행합니다.
```typescript
// vite.config.ts 예시
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('html2pdf.js')) return 'vendor-pdf';
            if (id.includes('@supabase')) return 'vendor-supabase';
            return 'vendor-core';
          }
        }
      }
    }
  }
});
```

#### 2) 동적 import (Lazy Loading) 기법 이식
* **대시보드 PDF 인쇄 모듈**: `html2pdf.js` 라이브러리는 사용자가 상세 드로어 화면을 열어 **[PDF로 저장]** 단추를 누르는 특정 이벤트 시점에만 활용됩니다.
* **최적화**: 컴파일 시 최상단에서 정적 `import`를 수행하지 않고, 버튼 클릭 시 실행되는 함수 내에서 `const html2pdf = (await import('html2pdf.js')).default` 형태의 비동기 동적 임포트를 탑재합니다.
* **효과**: 초기 로딩 청크에서 1MB에 달하는 PDF 변환 스크립트가 완전히 제외되므로 대시보드 로딩 응답 성능이 수백% 가량 향상됩니다.

---

## 4. 프론트엔드 Supabase 세션 토큰 획득 방식 개선 기획

### ① 현상 및 한계점
* **현황**: `useManagerApi.ts`에서 API 인증 헤더에 기입할 Bearer JWT 토큰을 획득하기 위해 브라우저 `localStorage` 전체를 루프 돌며 `"sb-*-auth-token"` 문자열 키를 직접 발굴 및 디코딩하여 파싱하는 우회 방식을 취하고 있습니다.
* **영향**: Supabase JS SDK 라이브러리의 버전 업그레이드 시 내부 로컬 스토리지 보존 키 포맷이 변경되면, 토큰 획득 메커니즘 전체가 예고 없이 마비될 수 있는 구조적 취약성을 내포합니다.

### ② 아키텍처 및 구현 설계

#### 1) 정합적인 세션 구독(Subscription) 체계로의 대전환
* Supabase SDK가 정형적으로 지원하는 `supabase.auth` 세션 수명 제어 인터페이스를 전면 차용합니다.

#### 2) 구현 메커니즘
* **세션 상태 및 구독 수립**:
  * 프론트엔드 진입 최상위 계층(`admin.tsx` 또는 전역 `AuthContext`)에서 Supabase Auth 세션 상태를 리액트 state로 저장 관리합니다.
  * 마운트 시점에 `supabase.auth.getSession()`을 1회 조회해 세션을 수집하고, `supabase.auth.onAuthStateChange` 이벤트를 구독하여 로그인/로그아웃/토큰 만료 재발급 등의 변화를 유기적으로 리액트 상태에 반영합니다.
* **인증 래퍼 연동**:
  * `useManagerApi.ts` 내 `getLocalAccessToken` 함수는 이제 더 이상 `localStorage` 루프를 돌지 않고, 메모리상에 유지되는 Supabase Client 세션 객체(`session.access_token`)를 직접 조회해 헤더에 탑재합니다.
  * 토큰이 만료(Expired)되어 만료 시간이 지난 경우 Supabase SDK 내부가 제공하는 토큰 자동 갱신(Refresh Token) 기법이 유기적으로 백그라운드 작동하므로, 401 인증 유실 없이 지속적인 API 어드민 연동이 보장됩니다.
