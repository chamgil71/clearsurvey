# 대시보드 이관 · 사용 가이드

백엔드 프로젝트(data/*.json 생성자)에 본 React 대시보드를 통합하기 위한 이관 절차와,
KPI·검색·차트 설정 방법을 정리한 문서입니다.

---

## 1. 현재 구조 요약

- 프레임워크: **TanStack Start (React 19) + Vite 7 + recharts**
- 데이터 소스: `public/data/projects.json` + `public/data/{file}.json`
- 설정 영속화: 백엔드 서버 프로젝트 폴더의 dashboard.json (우선순위 1) 및 로컬 폴백용 localStorage 키 survey-dash-config-{project} (우선순위 2)
- 라우트
  - `/` → 대시보드 + 목록·검색 탭 (`src/routes/index.tsx`)
  - `/admin` → KPI/차트/목록 컬럼 설정 (`src/routes/admin.tsx`)

### 데이터 계약 (백엔드가 반드시 지켜야 할 스키마)

`/data/projects.json`
```json
[{ "id": "survey", "name": "설문조사", "file": "survey_data.json", "updated": "2026-05-21" }]
```

`/data/{file}.json`
```json
{
  "meta": {
    "project": "survey",
    "total_rows": 8,
    "generated_at": "2026-05-21T10:00:00",
    "columns": [
      { "key": "기관명", "label": "기관명", "type": "category", "unique_values": ["서울대","KAIST"] },
      { "key": "GPU수량", "label": "GPU수량", "type": "numeric" }
    ]
  },
  "rows": [ { "기관명": "서울대", "지역": "서울", "GPU수량": 8 } ],
  "aggregates": {
    "기관명":  { "서울대": 1, "KAIST": 1 },
    "지역":   { "서울": 3, "부산": 3, "대전": 2 },
    "GPU종류": { "A100": 3, "H100": 3, "V100": 2 }
  },
  "dashboard": null
}
```

> **중요**: 카테고리 컬럼은 `aggregates`에 키가 있어야 검색 드롭다운에 나타납니다. (6번 항목 참고)

---

## 2. 이관 절차 (백엔드 레포로 복사)

### A. 백엔드도 TanStack Start/React인 경우 (권장)

1. 다음 파일을 그대로 복사
   - `src/types/dashboard.ts`
   - `src/lib/dashboardConfig.ts`, `src/lib/aggregate.ts`
   - `src/hooks/useDashboardData.ts`
   - `src/components/dashboard/*.tsx` (KpiRow, FilterBar, ChartCard, DataTable, DetailPanel)
   - `src/routes/index.tsx`, `src/routes/admin.tsx` (백엔드에 `/`가 이미 있으면 `dashboard.tsx`, `dashboard.admin.tsx`로 이름 변경)
   - `src/legacy-dashboard.css`
2. `package.json`에 `"recharts": "^2.15.0"` 추가 후 `bun install`
3. 백엔드 export 스크립트 출력 경로를 `public/data/`로 지정
4. import 경로(`@/`) 확인 — tsconfig paths가 동일하면 수정 없음

### B. 백엔드가 다른 스택(Django/Spring/Express 등)

- **방법 1 (권장)**: 본 프로젝트를 `bun run build` → `dist/`를 백엔드 정적 경로(`/dashboard`)에 마운트
- **방법 2**: iframe 임베드 (`<iframe src="https://dashboard.example.com">`)
- **방법 3**: SSR 불필요 시 정적 호스팅(Cloudflare Pages 등) 후 백엔드에서 데이터만 CORS 제공
- CORS가 다른 오리진이면 백엔드 응답에 `Access-Control-Allow-Origin` 헤더 + fetch에 `credentials: 'include'` 필요

### C. 체크리스트

- [ ] `public/data/projects.json` 형식 일치
- [ ] 각 카테고리 컬럼이 `aggregates`에 포함
- [ ] `meta.columns[*].type` = `category | numeric | text` 정확히 부여
- [ ] 인증이 필요하면 fetch에 토큰/쿠키 추가
- [ ] 다크모드 토큰 충돌 시 `src/styles.css`와 `legacy-dashboard.css` 병합 검토

---

## 3. KPI 설정 방법

KPI는 상단 카드 영역에 표시되며 3가지 타입이 있습니다.

| type | 의미 | 필드 |
|---|---|---|
| `total_rows` | 필터링된 행 수 | `label` |
| `count_value` | 특정 컬럼에서 값이 일치하는 행 수 | `label`, `col`, `value` |
| `sum` | 숫자 컬럼 합계 | `label`, `col` |

예시 (`localStorage` 또는 백엔드 `dashboard` 필드):
```json
"kpi": [
  { "label": "총 응답수", "type": "total_rows" },
  { "label": "서울 기관", "type": "count_value", "col": "지역", "value": "서울" },
  { "label": "총 GPU 수량", "type": "sum", "col": "GPU수량" }
]
```

**설정 방법**
1. `/admin` 페이지 진입
2. KPI 섹션에서 추가/삭제/순서 변경
3. 저장 시 서버 API를 통해 백엔드 프로젝트 디렉토리의 dashboard.json 파일로 저장되며(전체 사용자 동기화), 로컬 폴백을 위해 localStorage에도 기록됩니다.
4. 최대 4개 권장(레이아웃 기준)

---

## 4. 검색 대상(컬럼 포함 방법)

검색 UI는 두 가지로 구성됩니다.

### 4-1. 전체 검색 (상단 돋보기)
- 동작: 모든 행의 **모든 컬럼 값**을 lowercase로 부분 일치 검색
- 코드: `src/lib/aggregate.ts` → `filterRows()`
- 별도 설정 불필요. 행에 들어있는 값이면 무엇이든 검색됨

### 4-2. 컬럼별 드롭다운 필터
- 위치: 상단 검색창 옆 select 박스들
- 노출 컬럼은 `cfg.list.filter_cols` 배열로 결정
- 옵션 목록은 `data.aggregates[col]`에서 가져옴 **(매우 중요)**

**컬럼을 검색 드롭다운에 추가하려면:**
1. `/admin` → "목록 · 필터 컬럼" 섹션에서 해당 컬럼 체크
2. 백엔드 export 시 해당 컬럼이 `aggregates`에 포함되어야 옵션이 표시됨
   - 누락 시: 드롭다운에 컬럼은 보이지만 옵션이 비어 있음

### 4-3. 목록 표시 컬럼
- `cfg.list.visible_cols`로 제어 (List 탭의 테이블 컬럼)
- `/admin`에서 체크박스/순서 변경

---

## 5. 대시보드 차트 컨트롤 방법

차트는 `cfg.charts[]` 배열로 정의됩니다. 각 항목은 다음 중 하나의 타입:

| type | 설명 | 필드 |
|---|---|---|
| `donut` | 도넛(원) 차트 | `col`, `title?` |
| `bar` | 세로 막대 | `col`, `title?` |
| `hbar` | 가로 막대 | `col`, `title?` |
| `histogram` | (현재 bar로 대체 렌더링) | `col`, `title?` |
| `multibar` | 여러 컬럼 합계 비교 | `cols: [{col,label}]`, `title?` |

### 5-1. 제목 변경
- `chart.title` 값 수정 (`/admin`의 차트 카드 제목 입력란)
- 비우면 `chart.col` 또는 빈 문자열로 폴백

### 5-2. 차트 추가
- `/admin` → "+ 차트 추가" 버튼 클릭 → 컬럼/타입 선택
- 또는 백엔드 `dashboard.charts`에 직접 push

### 5-3. 차트 변경 / 타입 전환
- 각 차트 카드의 type select에서 `donut/bar/hbar` 변경
- `multibar`로 바꿀 경우 `cols` 배열을 직접 구성 (numeric 컬럼만 가능)

### 5-4. 한 행에 표시할 차트 갯수
- `src/legacy-dashboard.css` 의 `.chart-grid` 규칙
  ```css
  .chart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 16px;
  }
  ```
- 한 행 강제 개수:
  - 2개: `grid-template-columns: repeat(2, 1fr);`
  - 3개: `repeat(3, 1fr);`
  - 반응형: `minmax(N px, 1fr)`의 N을 키우면 한 행 차트 수가 줄어듦

### 5-5. 차트 크기 조절
- 높이: `src/components/dashboard/ChartCard.tsx` 의 `<ResponsiveContainer height={240}>` 값 수정
- 너비: `.chart-grid`의 컬럼 수가 너비를 결정 (5-4 참고)
- 카드 패딩/그림자: `.chart-card` CSS

### 5-6. 색상 변경
- `src/components/dashboard/ChartCard.tsx` 상단 `PALETTE` 배열 수정
  ```ts
  const PALETTE = ["#3b82f6", "#10b981", "#f59e0b", /* ... */];
  ```
- 디자인 토큰 기반으로 통일하려면 `src/styles.css`에 `--chart-1 ~ --chart-n` 정의 후
  `getComputedStyle(...).getPropertyValue('--chart-1')`로 동적 로드
- 단일 차트만 다른 색상: 해당 `<Cell fill={...}>` 분기 추가

### 5-7. 정렬·상위 N개 제한
- `ChartCard.tsx` → `Object.entries(counts).slice(0, 20)` 의 20을 조정
- 정렬은 `aggregate.ts`의 `aggCategory()`에서 count desc로 이미 적용됨

---

## 6. 🔍 "기관명이 차트에는 보이는데 검색 드롭다운에는 없음" 원인

### 결론
백엔드가 만든 `aggregates`에 `기관명` 키가 **빠져 있기 때문**입니다.
차트는 `rows`를 직접 집계해서 그리지만, 검색 드롭다운은 `aggregates`만 참조합니다.

### 확인된 사실 (현재 sample `public/data/survey_data.json`)
```json
"aggregates": {
  "지역":   { ... },
  "GPU종류": { ... }
}
```
→ `기관명` 키가 없음. 또한 `meta.columns`의 `기관명` 항목에 `unique_values`도 없음.

### 코드 흐름
- 차트(`ChartCard.tsx`): `aggCategory(rows, "기관명")` — rows에서 즉석 집계 → 서울대/KAIST 표시 O
- 필터(`FilterBar.tsx`): `data.aggregates?.["기관명"] || {}` → 빈 객체 → 옵션 없음

### 백엔드 수정 방안 (지금 당장은 아님)
옵션 A — **백엔드 export에서 모든 category 컬럼을 aggregates에 포함**
```python
for col in category_columns:
    aggregates[col] = dict(Counter(row[col] for row in rows if row.get(col)))
```

옵션 B — **프론트엔드 폴백**: `aggregates`에 없으면 `rows`에서 동적 집계
```ts
// FilterBar.tsx
const agg = data.aggregates?.[col] ?? aggCategory(data.rows, col);
```
권장: A안(백엔드 일관성) + B안(안전망) 동시 적용.

### 누락 가능 원인 (백엔드 코드 미확인 추정)
1. 카디널리티 임계치(예: unique > N이면 aggregate 생략) 로직 존재
2. category로 인식 못하고 text로 분류됨 (→ `meta.columns[*].type` 확인)
3. PII/식별자 자동 마스킹 룰
4. export 대상 컬럼 화이트리스트에서 누락

→ 백엔드 export 스크립트의 컬럼 분류/aggregate 생성 로직 확인 필요.

---

## 7. 이관 후 즉시 확인할 것 (스모크 테스트)

1. `/`에서 KPI, 차트 그리드, 탭 전환 정상
2. 검색창 입력 시 행/차트가 같이 필터링
3. 컬럼 드롭다운 옵션이 모든 카테고리 컬럼에 대해 채워짐 (6번 항목)
4. `/admin`에서 차트 추가/타입 변경 → 새로고침 후 유지
5. 다크모드 토글, 프로젝트 셀렉터 동작
6. `?data=/data/xxx.json` 쿼리스트링으로 강제 로드 가능

---

## 8. 향후 확장 메모

- 디자인 토큰화: `src/styles.css`의 oklch 변수로 차트 팔레트 통합
- 설정 영속화: 백엔드 API를 통해 dashboard.json 저장이 이미 구현 완료되어, 여러 브라우저 및 사용자 간 대시보드 레이아웃 설정이 동기화됩니다. 로컬 스토리지 캐시는 서버 설정이 없는 경우의 폴백으로 동작합니다.
- 권한: `/admin` 접근 제한 시 `_authenticated` 레이아웃으로 이동
