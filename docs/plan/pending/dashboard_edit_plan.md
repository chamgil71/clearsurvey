# 계획: 대시보드 행 편집(Drawer) + clean_xlsx 왕복

> 원안: `c:\ai\new-beginnings\docs\upload_and_edit_plan.md` (Lovable Cloud/Supabase 전제).
> 이 문서는 그 원안을 **ClearSurvey 의 파일 기반 파이프라인 구조에 맞게 다시 쓴 것**이다.
> 작성일: 2026-07-17.
> **상태: 1~11단계 구현 완료 · 실데이터 검증 미완** (자동 테스트 백엔드 421 · 프런트 417 통과).
> 작업 PC 에 `storage/projects/` 가 없어 화면에서 끝까지 못 돌렸다 →
> **[§12 원본 PC 인수인계](#12--원본-pc-인수인계--여기서부터-이어서-한다)부터 읽을 것.**
> 상위: [`ROADMAP.md`](../ROADMAP.md) · 관련: [`project_files_lifecycle.md`](../../reference/project_files_lifecycle.md), [`multi_pc_data_sync.md`](../../guides/multi_pc_data_sync.md)

---

## 0. 원안을 그대로 쓸 수 없는 이유

원안은 **Supabase 가 데이터의 유일한 진실**인 구조를 전제한다. `project_rows` 테이블의 셀을
UPDATE 하면 그것으로 끝이고, 되돌아볼 상위 원본이 없다.

ClearSurvey 는 정반대다. 대시보드가 읽는 `<name>_data.json` 은 4단계 파생물이다:

```
storage/raw/원본.xlsx  +  config.yaml
        └── SurveyPipeline.run() ──> output/<name>_cleaned.xlsx
                                            └── export_to_json() ──> <name>_data.json
                                                                          └── fetch ──> 대시보드
```

**여기서 값을 고친다는 것은 파생물을 고친다는 뜻이고, 파생물은 다음 `/run` 이 통째로 다시
만든다.** 원안의 §1(Supabase 스키마)·§2(인증 라우트)·§5(프로젝트 셀렉터)는 이 프로젝트에
대응물이 이미 있거나(`projects.json` 매니페스트, `login.tsx`, `useDashboardData`) 무의미하다.

그래서 이 계획의 **중심 문제는 "편집 UI 를 어떻게 그리나"가 아니라 "편집을 파이프라인 재실행에서
어떻게 살려내나"** 다. 아래 §2~§5 가 그 답이고, UI(§7)는 그 위에 얹힌다.

### 0.1 파일이 어디 있고 무엇이 git 에 올라가는가 (전제 확인)

§5·§6 의 결정이 전부 이 지형에서 나온다. 검증한 사실:

```
storage/raw/원본.xlsx                          gitignore ❌   ← 개인정보
storage/projects/<name>/config.yaml            gitignore ❌
storage/projects/<name>/output/*_cleaned.xlsx  gitignore ❌   ← clean_xlsx 의 집
storage/projects/<name>/overrides.json         gitignore ❌   ← 신규 (§13-5)
        │
        └── export ──> frontend/public/data/<name>_data.json   git 추적 ✅
                                                                    │
                                                         git push ──┴──> Vercel (정적)
```

- `.gitignore:16` — `/storage/*` + `!/storage/README.md`. **추적되는 건 README 2개뿐**
  (`git ls-files storage/` 확인). 원본·레시피·xlsx 는 커밋되지 않는다.
- **`storage/` → `frontend/public/data/` 로 넘어가는 건 `data.json` 하나뿐이고, 그것만 git 에
  올라간다.** 이 경계가 이 계획의 모든 비용을 결정한다.
- **Vercel 은 정적이라 백엔드가 없다** → 편집·설정·xlsx 다운로드가 원리적으로 불가능.
  그래서 §7.1 이 이 버튼들을 `isBackendAlive` 로 막는다. 숨기는 게 아니라 **없는 것**이다.

**따라서 xlsx 를 위한 새 폴더(`deploy/` 등)는 만들지 않는다.** xlsx 는 이미
`storage/projects/<name>/output/` 에 집이 있고, Vercel 로 보낼 이유가 없다 —
**요구사항 3번("xlsx 버튼은 API 가동 환경에서만")이 이미 그렇게 결정했다.**
`/deploy` 는 **API 엔드포인트 경로**(`POST /api/projects/{name}/deploy`)이지 폴더가 아니다(§4.4).

> ⚠️ **이 길은 이미 한 번 가봤다.** 히스토리에 `output/상가정보_cleaned.xlsx`(6.0MB) 와
> `projects/project_budget/output/project_budget_cleaned.xlsx`(5.3MB) 가 남아 있다 —
> xlsx 를 커밋하던 시절의 **죽은 무게 11.3MB 가 영구히 박혀 있고**, `/output/`·`/projects/` 를
> gitignore 에 넣은 것이 그 결론이었다.
>
> **xlsx 는 git 이 가장 못 다루는 포맷이다.** 그 자체가 이미 zip 이라 zlib 압축이 안 먹고,
> 바이너리라 델타 압축도 안 된다 — **원본 크기 그대로 영구 적재된다.**
> (대조: `sangga_data.json` 19.4MB → git 안에서 1.94MB. JSON 은 90% 압축된다.)
> `.git` 팩 30.8MB 의 실질적 무게는 data.json 이 아니라 **이 죽은 xlsx 11.3MB** 다.
> xlsx 를 커밋하는 설계(= `deploy/` 폴더)는 그 결론을 되돌리는 것이다.

---

## 1. 확정 사항

| 항목 | 결정 | 근거 |
|---|---|---|
| **편집 UX** | **기존 DetailPanel Drawer 를 편집 가능하게** (행 클릭 → 우측 드로어 → 수정 → 저장) | §7 |
| 편집 저장 위치 | **오버레이 파일** `storage/projects/<name>/overrides.json` | cleaned.xlsx 직접 수정은 다음 `/run` 에 소실 |
| 오버레이 적용 시점 | 파이프라인 **최종 단계**(transform 이후, 시트 기록 직전) | 정제 규칙과 손 편집의 우선순위 명확화 — 손 편집이 이긴다 |
| 커밋 단위 | **행 1건 = 저장 1회** | 드로어의 「저장」이 유일한 커밋 지점 |
| **저장 시 하는 일** | **`overrides.json` + `data.json` 만 갱신. xlsx 는 안 건드림** | §5. 저장 1회당 전체 파이프라인은 수십 초 — §5.1 |
| **xlsx 재생성** | **지연(lazy)** — 「다운로드」·「발행」 시점에만 | 같은 이유 |
| **배포(git)** | **「발행」 버튼 1회 = 커밋 1개 · 푸시 1회** | §6. 저장마다 푸시하면 Vercel 배포·원격 충돌 기회가 편집 횟수만큼 |
| 행 식별 | **숨은 `__row_id`** (raw 행번호 기반) | 행 순번은 원본 갱신 시 밀림. 키 컬럼 지정은 고유 컬럼 없는 프로젝트에서 불가 |
| 역방향 xlsx | 업로드본과 현재 cleaned.xlsx 를 **비교해 차이만 overrides 로 흡수** | 기준설정(config.yaml)·정제 규칙 유지. 드로어 편집과 동일 경로로 합류 |
| 편집 UI 노출 | `isBackendAlive && 인증됨` 일 때만 | 정적/Vercel 환경엔 쓸 백엔드가 없음 |
| API 대상 | **로컬 API 우선**(`http://localhost:8000`). 클라우드는 확장 | §11 |

---

## 2. `__row_id` — 편집을 행에 고정하는 열쇠

### 왜 필요한가

편집을 `overrides.json` 에 저장하려면 "몇 번째 행"이 아니라 **"어느 행"**인지 적어야 한다.
행 순번을 쓰면 원본에 행이 하나 추가·삭제되는 순간 그 아래 모든 편집이 한 칸씩 밀려
**엉뚱한 행에 조용히 적용된다.** 대시보드의 정렬·필터와도 무관해야 한다.

### 어떻게

`_sheet_to_dataframe()` (`pipeline.py:23`) 가 raw 시트를 DataFrame 으로 읽을 때, 빈 행을
건너뛰기 **전의** 원본 엑셀 행번호를 함께 보존한다. 이 값이 `__row_id` 다.

```
raw.xlsx 5행 ──> __row_id = "r5"     (빈 행을 건너뛰어도 번호는 원본 기준으로 고정)
```

- 상수는 `engine/config.py` 의 **`ROW_ID_COL`** (writer·exporter·overrides 가 공유).
- `CleanedSheetWriter.write()` 가 Cleaned 시트 **맨 끝 숨김 열**에 기록.
- `build_data_json()`(§4.2) 은 이 컬럼을 각 row 에 넣되, **`meta.columns` 에는 넣지 않는다**
  → 대시보드 표·차트·필터·CSV 내보내기·드로어에 나타나지 않는다.
- `_detect_type()`·`aggregates` 대상에서도 제외한다(`meta.columns` 를 순회하므로 자동).

### 구현하며 확정된 것 (2단계, 2026-07-17)

**(a) 행번호는 컬럼이 아니라 DataFrame 의 `index` 로 나른다.**
`_resolve_val`(`writer.py:47`)이 `row.iloc[source_col-1]` 로 **위치 기반** 접근을 하고
`len(row)` 로 경계를 검사한다. 행번호를 컬럼으로 붙이면 그 경계가 하나 밀려, 범위를 벗어난
`source_col` 이 **행번호를 데이터로 읽어간다.** index 는 `iloc` 에 관여하지 않아 안전하다.
(회귀 테스트: `test_source_col_out_of_range_does_not_read_row_id`)

**(b) 🔴 `preprocessor.py:85` 의 `reset_index(drop=True)` 가 행 식별자를 지우고 있었다.**
행 필터(`row_filter`)를 켠 프로젝트에서 index 가 0부터 다시 매겨져 **모든 편집이 통째로 밀린
행에 붙을** 뻔했다 — 이 계획이 경고한 최악의 실패 그대로다. 제거했고, 하위 코드가 전부
위치 기반(`iloc` / `enumerate(iterrows())`)이라 index 가 비연속이어도 안전함을 전수 확인했다.
(회귀 테스트: `test_row_filter_preserves_row_ids` — 변이 테스트로 실제 검출됨을 확인)

**(c) Excel Table `안에` 포함시킨다.** 사용자가 엑셀에서 정렬·필터해도 식별자가 제 행에 붙어
다녀야 한다 — 수정된 xlsx 를 되돌려 읽는 §5.4 의 행 매칭 근거다.

**(d) `col_index_map` 에는 넣지 않는다.** 이 맵은 슬라이서 배치(`slicer.py:140` 의 `n_data_cols`)와
요약 시트가 "실제 데이터 컬럼"을 세는 데 쓴다. 숨은 식별자가 끼면 슬라이서가 한 칸 밀린다.

**(e) 이름 충돌은 즉시 실패시킨다.** 사용자 `output_col` 이 `__row_id` 면 내보내기에서 dict 키가
충돌해 한쪽이 조용히 사라진다 → `writer.write()` 에서 `ValueError`.

**(f) 🔴 백엔드에서 `meta.columns` 만 빼는 걸로는 부족했다 — 프런트에 누출 경로가 3곳 있었다.**
차트·필터는 `meta.columns` 로 컬럼을 얻어 자동으로 안전하지만, **행의 키를 직접 읽는 곳**이 있었다:

| 위치 | 무엇이 샜나 |
|---|---|
| `DataTable.tsx:23` | `visible_cols` 미설정 시 헤더 폴백 `Object.keys(rows[0])` → **표에 `__row_id` 열** |
| `DataTable.tsx:49` | **"CSV 내보내기 (전체 컬럼)"** → 내려받은 CSV 에 `__row_id` 포함 |
| `DetailPanel.tsx:25` | `Object.keys(row)` → **상세 드로어와 그 PDF 에 노출** |

→ `types/dashboard.ts` 에 **`ROW_ID_COL` + `visibleRowKeys(row)`** 를 두고 세 곳을 모두 교체했다.
`Object.keys(row)` 로 컬럼을 구하는 새 코드는 앞으로도 이 함수를 써야 한다.
(회귀 테스트: `__tests__/rowId.test.tsx` — 변이 테스트로 4건 검출 확인.
백엔드 `ROW_ID_COL` 과 값이 일치하는지도 테스트로 고정)

### 한계 (명시)

원본 엑셀 자체가 교체되어 **행 순서가 바뀌면** `__row_id` 도 의미를 잃는다. 이건 어떤 방식으로도
못 푼다(원본에 고유키가 없으므로). 대신 §7.3 의 편집 검토 패널에서 **적용에 실패한 오버레이를
버리지 않고 남겨 보여준다.**

---

## 3. `overrides.json` 스키마

```jsonc
{
  "version": 1,
  "updated_at": "2026-07-17T14:03:00",
  "edits": [
    {
      "row_id": "r5",
      "col": "지역",             // Cleaned 시트의 출력 컬럼명
      "value": "서울특별시",
      "prev": "서울",            // 되돌리기·감사용 (적용 당시 파이프라인 산출값)
      "at": "2026-07-17T14:02:11",
      "by": "local_dev_user",
      "origin": "drawer"         // "drawer" | "xlsx-import"
    }
  ]
}
```

- **컬럼은 출력 컬럼명 기준**(원본 열번호 아님) — 파생 컬럼(`O_*`, `*_year`)도 편집 대상이 된다.
- `prev` 는 "이 편집이 무엇을 덮었는가"의 기록이다. 파이프라인 재실행으로 산출값이 바뀌면
  `prev` 와 달라지는데, 이때가 §7.3 의 **충돌 배지** 조건이다.
- 같은 `(row_id, col)` 에 대한 편집은 **덮어쓴다**(이력 누적 아님).
- **한 행에서 3개 컬럼을 고쳐 저장하면 `edits` 에 3개 항목이 들어간다** — 저장은 행 단위지만
  저장 형식은 셀 단위다. 되돌리기를 컬럼별로 하기 위해서다.
- **이 파일이 "편집의 진실"이다.** `data.json` 과 `cleaned.xlsx` 는 둘 다 여기서 파생된다.

---

## 4. 백엔드 변경

### 4.1 파이프라인 (`engine/`)

| 파일 | 변경 |
|---|---|
| `engine/pipeline.py` | `_sheet_to_dataframe()` 에 원본 행번호 보존 → `__row_id` 열 추가 |
| | `run()` 최종 단계에 `apply_overrides(df, overrides)` 삽입 (transform 이후, writer 이전) |
| `engine/writer.py` | `CleanedSheetWriter.write()` — `__row_id` 를 맨 끝 숨김 열에 기록 |
| `engine/exporter.py` | §4.2 의 `build_data_json()` 분리 + `__row_id` 통과·메타 제외 |
| `engine/overrides.py` **(신규)** | 로드/저장/적용/차이추출. 순수 함수 |

`engine/overrides.py` 공개 API (3·4·10단계에서 구현·확정):

```python
load_overrides(proj_dir)             -> Overrides      # 없거나 깨져도 빈 Overrides (파이프라인 안 멈춤)
save_overrides(proj_dir, overrides)  -> Path
Overrides.upsert / remove / remove_row / clear / get   # 같은 칸은 덮어쓴다 (§3)
OverrideApplier(overrides).take(row_id, col, value) -> value        # ← 아래 참고
OverrideApplier.conflicts(known_row_ids=…, known_cols=…) -> list[Conflict]
values_equal(a, b) -> bool                             # clean_value 로 도메인 맞춰 비교

# 역방향 업로드 (10단계에서 구현). 원안은 xlsx 경로를 받는 시그니처였으나, xlsx 읽기는
# exporter._read_cleaned_sheet 가 이미 하므로 **rows 를 받는 순수 함수**로 좁혔다 —
# 그래야 파일 없이 테스트된다.
diff_against(uploaded_rows, current_rows, *, editable_cols=None) -> list[Edit]
UploadRejected                                         # __row_id 가 성하지 않을 때 (§5.4 ③)
```

> 🔧 **시그니처 정정 (3단계, 2026-07-17)**: 위 원안의 `apply_overrides(df, overrides) -> (DataFrame, …)`
> 는 **코드와 맞지 않아 폐기**했다. transform 은 별도 단계가 아니라 `CleanedSheetWriter.write()`
> **안에서 셀 단위로** 일어나고(`writer.py` 의 `_apply_transform`), 출력 컬럼명으로 색인된
> DataFrame 은 파이프라인 어디에도 없다 — `df` 는 끝까지 원본의 **위치 기반 컬럼(0,1,2…)** 을
> 들고 있는데 오버레이는 **출력 컬럼명**(`지역`, `O_A`)으로 키를 잡는다. 덮어쓸 수 있는 지점은
> 셀뿐이다. 원안의 **산문**("transform 이후, 시트 기록 직전")은 정확했고 시그니처만 상상이었다.
>
> 그래서 `OverrideApplier.take(row_id, col, value) -> value` 필터로 바꿨다. 셀마다 불리므로
> (15k행 × 39열 ≈ 60만 회) **편집 없는 흔한 경우가 dict 조회 1번**으로 끝난다.
> `diff_against` 는 소비처(10단계)가 올 때 함께 만든다 — 지금 만들면 상상에 맞춰 설계하게 된다.

### 4.2 `build_data_json()` 분리 — 지연 생성의 전제

지금 `export_to_json()` 은 **두 가지 일을 한 함수에서** 한다:

```
export_to_json(cleaned_xlsx, cfg, ...)
  ├─ ① xlsx 열어서 rows 읽기                    (exporter.py:104-140)  ← 느림 (I/O)
  └─ ② rows 로부터 columns·aggregates·dashboard 조립  (exporter.py:141-210)  ← 빠름 (메모리)
```

**②는 xlsx 가 필요 없다.** `rows` 만 있으면 된다. 그래서 ②를 `build_data_json(rows, cfg, project_dir)`
로 떼어낸다. 그러면 두 경로가 같은 함수를 공유한다:

```
/run 경로     : xlsx 읽기 ──> rows ──┐
편집 저장 경로 : data.json 읽기 ──> rows 패치 ──┴──> build_data_json(rows, ...) ──> data.json
```

- 타입 감지(`_detect_type`)·`aggregates`·`unique_values` 가 **한 곳에서만** 계산된다 →
  두 경로가 어긋날 수 없다. (이게 §5.3 이 성립하는 이유)
- `export_to_json()` 은 `build_data_json()` 을 부르는 얇은 껍데기로 남는다 — 기존 호출부 무변경.

> 이건 리팩터링이 아니라 **이 계획의 전제**다. 이게 없으면 편집 저장이 xlsx 를 열 수밖에 없다.

### 4.3 뒤처짐(staleness) 판정 — 기존 개념의 확장

`/freshness`(`main.py:851`)는 이미 **"config.yaml/dashboard.json 이 output 보다 새로우면
`is_stale=True`"** 를 판정한다. 편집도 정확히 같은 구조다 — `overrides.json` 이 output 보다
새로우면 xlsx 가 뒤처진 것이다.

`_mtime_info(proj_dir / "overrides.json")` 를 `newest_config_ts` 비교 대상에 **추가하기만
하면 된다.** 응답에 필드 2개 추가:

```jsonc
{
  "is_stale": true,              // 기존 — overrides.json 도 이제 여기에 반영됨
  "overrides_updated_at": "...", // 신규
  "pending_edits": 3,            // 신규 — 아직 xlsx 에 안 들어간 편집 수
  "deploy_stale": true           // 신규 — data.json 이 마지막 커밋보다 새로움 (§6)
}
```

새 개념을 만들지 않는다. "설정이 산출물보다 앞서 있다"는 이미 있는 개념이고,
"편집이 산출물보다 앞서 있다"는 그 한 사례다.

### 4.4 API (`app/main.py`)

| 엔드포인트 | 역할 |
|---|---|
| `GET  /api/projects/{name}/overrides` | 편집 목록 + 충돌 상태 |
| `PATCH /api/projects/{name}/rows/{row_id}` | **행 1건 저장** (§5.1). body: `{ "지역": "서울특별시" }` — 변경된 컬럼만 |
| `DELETE /api/projects/{name}/overrides` | 되돌리기 (body 로 `(row_id, col)` 지정, 없으면 전체) |
| `POST /api/projects/{name}/import-xlsx` | 수정된 xlsx 업로드 → `diff_against` → 미리보기 |
| `POST /api/projects/{name}/rebuild` | **xlsx 재생성** (§5.2). 지연됐던 파이프라인 1회 |
| `POST /api/projects/{name}/deploy` | **발행** (§6). rebuild + 커밋 + 푸시 |

> ⚠️ **이름 주의**: `PATCH /api/projects/{name}/publish` 가 **이미 있다**(`main.py:1015`).
> 그건 매니페스트의 `published` 플래그 토글이지 배포가 아니다. 그래서 발행은 `/deploy` 로 나눈다.
> 같은 이름을 쓰면 "게시 상태"와 "배포"가 영구히 헷갈린다.

`/download`(`main.py:946`)는 **수정된다**: xlsx 가 뒤처져 있으면(`is_stale`) 먼저 rebuild 한 뒤
내려준다. 이렇게 해야 "다운로드한 엑셀에 내 편집이 있다"가 지연 생성에서도 성립한다.

모든 신규 엔드포인트는 기존 `Depends(verify_supabase_token)` 를 그대로 쓴다.
로컬은 `local-dev-bypass-token` 으로 이미 우회되므로 추가 작업 없음.

---

## 5. 로직 순서 (이 계획의 핵심)

### 5.0 왜 저장과 xlsx·배포를 떼어놓는가

당초 설계는 **저장 1회 = overrides 갱신 + 파이프라인 1회 + export + git 푸시**였다. 실측 근거를
보고 뒤집었다:

| 근거 | 사실 (실측) |
|---|---|
| **데이터 규모** | `sangga_data.json` = 19.4MB(압축 전), **git 추적됨**. 15,423행 × 39열. mumhwa 1.1MB, gpu_4 641K |
| **파이프라인 비용** | 저장마다: raw 읽기 → transform → Cleaned/Summary/**원본 시트(raw 전체 복사)** 쓰기 → 슬라이서 zip 재작성 → xlsx 재읽기. sangga 규모면 셀 하나에 수십 초 |
| **배포 비용** | 푸시 1회 = **Vercel 배포·빌드 1회.** 20행 고치면 배포 20회 |
| **충돌 위험** | 푸시 1회 = 원격과 어긋날 기회 1회. 저장마다 푸시하면 **[multi_pc §2.2](../../guides/multi_pc_data_sync.md) 의 충돌 창이 20배** |
| **히스토리** | 커밋 20개가 `편집 반영 (1건)` 으로 채워짐 |

> ⚠️ **정정 (2026-07-17)**: 이 표에는 원래 *"편집 1회 = 19.4MB 블롭 → 20회면 저장소가 10배"* 라는
> 근거가 있었으나 **약 100배 틀린 계산이었다.** git 은 blob 을 zlib 압축(JSON 은 90% → 1.9MB)하고
> 연속 버전을 **델타 압축**한다. 실측: 편집 10회 커밋 후 `git gc` → **총 +2MB, 편집 1회당 약 207KB**.
> `git cat-file` 이 보고하는 19.4MB 는 **압축 전 논리 크기**이지 디스크 점유가 아니다.
> **저장소 비대화는 발행 버튼의 근거가 아니다** — 위의 배포·충돌·히스토리 근거로 결론은 유지된다.

**원인은 하나다: 사용자가 지금 보고 있는 것(`data.json`)과, 아직 아무도 안 보는 것(`xlsx`·git)을
같은 시점에 묶었다.** 떼어놓으면 둘 다 풀린다. 그래서 세 경로로 나눈다:

```
저장    (자주, <1초)   → overrides.json + data.json          → 차트·KPI 즉시 갱신
rebuild (가끔)         → + cleaned.xlsx                       → 다운로드·발행 직전에만
deploy  (드물게)       → + git 커밋·푸시                      → 「발행」 버튼 누를 때만
```

각 단계는 **아래 단계를 포함**한다(deploy ⊃ rebuild ⊃ 저장). 뒤처진 상태는 §4.3 이 판정한다.

### 5.1 저장 (드로어 「저장」)

```
① [프런트] 드로어에서 값 수정        → 로컬 draft state 에만. 서버 호출 없음.
                                       (닫으면 "저장 안 된 변경" 확인 후 폐기)
② [프런트] 「저장」 클릭             → 원본 row 와 비교해 변경된 컬럼만 추출
                                       변경 0건이면 아무것도 안 하고 닫는다
③ [프런트] PATCH /rows/{row_id}      → 드로어 잠금("저장 중…"). 낙관적 반영 없음 (§5.3)
④ [백엔드] overrides.json 갱신       → (row_id, col) upsert. prev = 현재 data.json 의 값
⑤ [백엔드] data.json 로드 → 행 패치  → __row_id 로 대상 행을 찾아 값 교체
⑥ [백엔드] build_data_json(rows,…)   → columns·aggregates·unique_values 재계산 (§4.2)
                                       ★ xlsx 를 열지 않는다 — 이게 <1초의 이유
⑦ [백엔드] 저장 + 복사               → projects/<name>/<name>_data.json
                                       → frontend/public/data/<name>_data.json
⑧ [백엔드] 응답                      → { data, pending_edits, conflicts }
                                       ★ 커밋·푸시 없음. xlsx 안 건드림.
⑨ [프런트] data 교체                 → filtered → useMemo 체인이 반응
                                       → 차트·KPI·필터 카운트·표 자동 갱신 (요구사항 2번)
⑩ [프런트] 드로어 잠금 해제          → 「xlsx 뒤처짐 · 편집 N건」 배지 갱신
                                       실패 시 draft 유지한 채 에러 표시(입력 안 날림)
```

**④→⑤→⑥의 순서는 뒤집을 수 없다.** overrides 를 확정해야 그 값으로 행을 패치하고,
행을 패치해야 그 위에서 집계를 다시 계산한다.

> **⑤의 함정**: `data.json` 을 읽어 패치하면 "파이프라인 산출값 + 이전 편집들"이 이미 반영된
> 상태다. 그래서 새 편집만 얹으면 맞다. 단 `data.json` 이 어떤 이유로 overrides 와 어긋나 있으면
> (예: 사람이 파일을 직접 건드림) 오차가 누적된다. **rebuild 가 항상 overrides 로부터 전량
> 재생성하므로 그때 교정된다** — `overrides.json` 이 진실이라는 §3 의 규칙이 여기서 회복력이 된다.

> ✅ **⑥의 타입 재감지 — 해결됨 (2026-07-17)**
>
> **문제**: `columns`·`aggregates` 는 `clean_value` **전** 값으로, `rows` 는 **후** 값으로
> 계산된다(기존 코드의 불일치. 이 계획이 만든 게 아니라 `build_data_json` 분리로 드러났다).
> 그래서 텍스트 서식의 코드 컬럼(`"3000000"`)이 1회차엔 category 지만, rows 에는 `3000000`
> 으로 실려 **재감지하면 numeric 으로 뒤집히고 필터가 사라진다.**
>
> **실측(정정)**: 처음에 "🔴 차단 이슈"로 적었으나 과장이었다. 실데이터 5개·**106컬럼 중
> 뒤집힘은 1건**(`mumhwa.제공기관코드` text→numeric)이고, 그마저 `aggregates` 에 없어
> **필터가 사라지는 사례는 실데이터에 하나도 없었다.** 합성 fixture 가 만든 시나리오였다.
> 앞자리 0(`"0012"`) 컬럼도 실데이터엔 존재하지 않는다.
>
> **결정 · 구현**: `build_data_json(..., column_types={키: 타입})` 추가.
> **편집은 값을 바꾸는 것이지 컬럼의 타입을 바꾸는 것이 아니다** — 편집 경로는 `data.json` 의
> `meta.columns` 타입을 물려받고(`column_types_of(data)`), xlsx 경로는 지금처럼 감지한다.
>
> ⚠️ **타입만 물려받고 `unique_values`·min/max/sum 은 현재 값으로 다시 계산한다.**
> columns 를 통째로 재사용하면 `unique_values` 가 굳어 **편집으로 생긴 새 값이 드로어의
> Select 드롭다운에 안 나온다.** (테스트: `test_unique_values_refresh_even_with_pinned_types`)
>
> **곁가지 — 앞자리 0 은 첫 왕복에서 정규화된다**(`"0012"` → `12`). 이건 왕복이 만든 손상이
> 아니라 **원본이 이미 자기모순**이던 것이다: rows 엔 `12` 인데 aggregates 키는 `"0012"` 라
> 그 필터 항목을 골라도 **매칭되는 행이 0개**다. 왕복이 rows 기준으로 맞춰 모순을 없앤다.
>
> 테스트: `test_with_types_round_trip_keeps_types_and_filters` ·
> `test_types_survive_repeated_edit_saves` · `test_without_types_numeric_string_col_flips`
> (xlsx 경로의 재감지가 **의도된 동작**임을 고정) · `test_leading_zero_normalizes_on_first_round_trip`

### 5.2 rebuild — 지연됐던 xlsx 생성

「다운로드」 클릭 시(뒤처진 경우) 또는 「발행」의 앞단계로 실행된다.

```
① overrides.json 로드
② 파이프라인 재실행               → raw + config + overrides
                                    → apply_overrides 가 transform 이후에 값을 덮어씀
                                    → output/<name>_cleaned.xlsx  ★ 여기서 clean_xlsx 갱신
③ export_to_json()               → data.json 전량 재생성 (§5.1 ⑤의 누적 오차 교정)
④ is_stale 해제                   → 배지 사라짐
```

기존 `_run_pipeline_background` + SSE 로그 스트림을 재사용해 진행 상태를 보여준다.
**「다운로드」는 rebuild 완료 후 파일을 내려준다** — 사용자에게 "편집이 빠진 엑셀"이 가면 안 된다.

### 5.3 왜 낙관적 업데이트를 하지 않는가

원안(§4.1)은 낙관적 업데이트를 쓴다. Supabase 는 UPDATE 가 곧 결과라 예측이 정확하기 때문이다.

여기서는 **저장 결과를 프런트가 예측할 수 없다.** 입력한 값이 그대로 나오지 않을 수 있다 —
값 하나가 바뀌면 `_detect_type` 의 타입 판정, `aggregates` 의 카테고리 카운트,
`unique_values` 목록이 함께 변한다(§4.2 ⑥). 낙관적으로 그린 화면과 서버 결과가 어긋나면
**화면이 깜빡이며 값이 바뀌는** 최악의 UX가 된다.

대신 **드로어를 잠그고 「저장 중…」을 보여준다.** 지연 생성 덕에 이 대기가 **<1초**라 감당된다.
당초 설계(저장마다 전체 파이프라인)였다면 수십 초를 잠가야 했다 — 그때는 낙관적 업데이트가
불가피한 차선책이었을 것이다. **지연 생성이 UX 선택지까지 되돌려줬다.**

### 5.4 역방향 (수정된 xlsx 업로드)

```
① [사용자] 「원본 XLSX」 다운로드     → /download (뒤처졌으면 rebuild 후)
② [사용자] 엑셀에서 수정 후 업로드   → POST /import-xlsx
③ [백엔드] __row_id 검증             → 열이 있는가 · 누락/중복/미지의 id 는 없는가
                                       실패 시 "ClearSurvey 가 내려준 원본이 아닙니다" 로 거부
④ [백엔드] diff_against()            → 업로드본 vs 현재 cleaned.xlsx, __row_id 로 행 매칭
⑤ [백엔드] 변경 셀 목록 반환         → ★ 아직 아무것도 저장하지 않는다
⑥ [프런트] 미리보기 확인             → "N개 셀 변경. 반영할까요?"
⑦ [사용자] 확인                      → §5.1 의 ④~⑩ 과 동일 경로로 합류 (origin: "xlsx-import")
```

**③이 방어의 유일한 지점이다** (§13-4 결정). `__row_id` 는 숨김 열이라 사용자가 지우거나
정렬로 어긋뜨릴 수 있는데, 시트 보호로 막으면 Cleaned 시트 전체가 편집 불가가 되어
**역방향 업로드의 목적 자체와 충돌한다.** 그래서 막지 않고 **받을 때 검증**한다.
구체적인 실패 양상(사용자가 실제로 무엇을 망가뜨리는지)은 이 단계를 만들며 확정한다.

**④에서 멈추는 이유**: 엑셀 편집은 의도치 않은 변경(서식·자동 날짜 변환·앞자리 0 소실 등)을
쉽게 만든다. 확인 없이 흡수하면 **엑셀이 데이터를 조용히 망가뜨린다.**

---

## 6. 발행(deploy) — 「발행」 버튼 1회 = 커밋 1개

### 6.1 왜 버튼인가

`multi_pc_data_sync.md` §3 은 "원본 없는 PC 에서 export 후 커밋·푸시 → 원래 PC 발행물을
덮어씀"을 금지한다. 당초 설계는 저장마다 자동 푸시라 **이 금지선을 사람 판단 없이 넘었다.**
가드 5종을 붙여도 "저장 한 번이 배포 한 번이어야 하는가"는 아무도 묻지 않는다.

구체적으로 저장마다 푸시하면 — **Vercel 배포·빌드가 편집 횟수만큼** 돌고, 히스토리가
`편집 반영 (1건)` 커밋으로 채워지며, 무엇보다 **원격과 어긋날 기회(multi_pc §2.2 의 충돌)가
푸시 횟수만큼** 생긴다. (저장소 용량은 근거가 아니다 — §5.0 의 정정 참고.)

**「발행」 버튼이 그 질문 자체다.** git 명령을 직접 치지 않는다는 점은 그대로이고(요구사항 4번),
언제 배포되는지를 사람이 안다.

### 6.2 순서

```
① 헤더 배지: 「편집 12건 · 배포 미반영」   → 클릭
② 확인 대화상자: "12건의 편집을 발행합니다. Vercel 에 배포됩니다."
③ rebuild (§5.2)                          → xlsx·data.json 최신화
④ 가드 검사 (§6.3)                        → 하나라도 실패 시 중단·사유 표시
⑤ git add — 경로 2개만
⑥ git commit                              → data(<name>): 대시보드 편집 반영 (12건)
⑦ git push
⑧ 배지 해제
```

### 6.3 가드

발행은 **명시적 행위**라 당초의 가드 5종 중 일부는 불필요해졌다. 남기는 것:

1. **원본 존재 확인** — `storage/raw/<source>` 와 `config.yaml` 이 실제로 있을 때만.
   빈 PC 의 커밋을 원천 차단. (multi_pc §3 의 핵심 방어)
2. **경로 제한** — `git add` 대상은 `frontend/public/data/<name>_data.json` 과
   `projects.json` **딱 둘**. 다른 변경은 절대 스테이징하지 않음.
3. **원격 선행 확인** — `git fetch` 후 원격이 앞서 있으면 **푸시하지 않고** 충돌 경고.
   자동 rebase/force 는 하지 않는다. ← **덮어쓰기를 막는 실질적 방어**
4. **실패 표시** — 푸시 실패 시 편집·xlsx 는 유지하고 배지를 `배포 실패`로.

**뺀 것**: 당초의 `CLEARSURVEY_AUTO_PUSH` 환경변수. 자동 푸시일 땐 "이 PC 가 푸시해도 되는가"를
설정으로 물어야 했지만, 버튼을 누르는 행위가 그 답이다. 설정 파일 하나를 안 만드는 게 아니라
**설정으로 표현하려던 의도가 UI 로 옮겨간 것**이다.

> 여전히 이 기능은 **가장 위험한 부분**이다. 가드 1~3 없이 만들면 안 된다.

---

## 7. 프런트엔드 변경

### 7.1 백엔드 가용성 표시 (요구사항 1·3번)

`useManagerApi` 의 `isBackendAlive`(`/api/health` 10초 폴링)가 이미 있다. 문제는 **공개
대시보드(`routes/index.tsx`)가 이 훅을 안 쓴다**는 것 — 그래서 현재 `설정` 버튼이 백엔드
없는 Vercel 환경에서도 그냥 보인다.

- `useBackendStatus()` 훅으로 health 체크만 분리(`useManagerApi` 에서 추출, 폴링 중복 방지).
- `routes/index.tsx` 에서 — `isBackendAlive && authed` 일 때만:
  - **`설정` 버튼** (`index.tsx:314`) — 요구사항 3번
  - **`원본 XLSX` 다운로드 버튼** — `/download` 링크, 요구사항 2번·3번
  - **`편집 N건` / `배포 미반영` 배지** → 검토 패널·발행 진입점
- 드로어의 **「저장」 버튼**도 같은 조건. 아니면 드로어는 현행 읽기 전용 그대로 열린다.
- 헤더 **상태 배지**: `● 로컬 API 연결됨 — 편집 가능` / `○ 읽기 전용`
  (툴팁: "편집·설정은 로컬 백엔드가 실행 중일 때만 가능합니다") — 요구사항 1번.

> 버튼을 **숨김**으로 할지 **비활성+툴팁**으로 할지: 숨김을 택한다. Vercel 방문자에겐 존재하지
> 않는 기능이고, 회색 버튼은 "고장난 것"처럼 보인다. 대신 상태 배지가 이유를 설명한다.

### 7.2 편집 UX — 왜 Drawer 인가

원안 3번째 줄의 "**목록 탭에서 셀 더블클릭 → 인라인 편집 (Drawer 없음)**" 은 기능 제외가 아니라
**편집 방식의 선택**이다. ClearSurvey 에는 **이미 그 Drawer 가 있다** —
`DataTable.tsx:183` 의 `Sheet` + `DetailPanel`(현재 읽기 전용 + PDF 저장).

| 안 | 판단 |
|---|---|
| A. 인라인 셀 편집 | ❌ **표는 `cfg.list.visible_cols` 만 보여준다**(`DataTable.tsx:22`). 화면에 없는 컬럼은 영영 못 고친다. 셀마다 저장이라 커밋 지점이 흩어진다 |
| **B. DetailPanel 편집화** (채택) | ✅ **이미 `Object.keys(row)` 로 전 컬럼을 렌더**한다(`DetailPanel.tsx:129`). 「저장」이 명확한 커밋 지점이라 §5.1 의 순서가 단순해진다. 행 클릭 → 드로어라는 기존 동작을 그대로 잇는다 |
| C. 둘 다 | 1차 범위 초과 → §11 |

**고쳐야 할 것**:

- ⚠️ **`DetailPanel.tsx:131` 의 `if (v == null || v === "") return null`** — 빈 값 컬럼을 아예
  렌더하지 않는다. 읽기 전용일 땐 맞지만, 편집 모드에선 **비어 있는 값을 채울 수 없게 된다.**
  → 편집 모드에서만 빈 컬럼도 렌더한다(읽기 모드는 현행 유지 — PDF 출력이 지저분해지므로).
- ⚠️ `__row_id` 가 `Object.keys(row)` 에 들어온다 → 렌더에서 제외.
- `DataTable.tsx:144` 의 `<tr onClick>` → 드로어 열기는 **그대로 유지**. 인라인 편집을 안 하므로
  더블클릭과의 충돌이 애초에 없다.
- 「PDF 다운로드」와 「저장」이 한 헤더에 → 저장은 primary, PDF 는 유지.
- 편집 중 닫으려 하면 **저장 안 된 변경 확인**(`AlertDialog`).

**필드 위젯** — `ColumnMeta.type` 기반(`types/dashboard.ts:1`):
`category` → `Select` + 자유입력(`unique_values`) / `numeric` → `<input type="number">` /
`text` → `<textarea>`. 손 편집된 필드는 라벨 옆 점 + "원래: <prev>" 툴팁.

### 7.3 편집 검토 패널 (`EditReviewPanel.tsx` 신규)

헤더 `편집 N건` 배지 클릭 → Sheet:
- 편집 목록(행/컬럼/이전값→현재값/시각)
- 개별·전체 **되돌리기**
- **충돌**(§3 의 `prev` 불일치) 및 **적용 실패**(`row_id` 소실) 경고
- **「발행」 버튼** (§6) + 「수정된 XLSX 업로드」 진입점 (§5.4)

---

## 8. 파일 변경 목록

**신규**
- `backend/engine/overrides.py`
- `backend/app/git_sync.py`
- `backend/tests/test_overrides.py`
- `backend/tests/test_build_data_json.py`
- `frontend/src/components/dashboard/EditReviewPanel.tsx`
- `frontend/src/hooks/useRowEdit.ts`
- `frontend/src/hooks/useBackendStatus.ts`

**수정**
- `backend/engine/exporter.py` — **`build_data_json()` 분리**(§4.2), `__row_id` 통과·메타 제외
- `backend/engine/pipeline.py` — `__row_id` 부여, `apply_overrides` 훅
- `backend/engine/writer.py` — `__row_id` 숨김 열 기록
- `backend/app/main.py` — 신규 6개 엔드포인트, `/freshness` 확장(§4.3), `/download` rebuild 연동
- `frontend/src/hooks/useManagerApi.ts` — health 로직을 `useBackendStatus` 로 추출
- `frontend/src/routes/index.tsx` — 상태 배지, 조건부 버튼, 뒤처짐·발행 배지
- `frontend/src/components/dashboard/DetailPanel.tsx` — **편집 모드**(§7.2)
- `frontend/src/components/dashboard/DataTable.tsx` — `editable` prop 을 DetailPanel 로 전달
- `frontend/src/types/dashboard.ts` — `Overrides`/`Edit` 타입
- `docs/guides/project_files_lifecycle.md` — `overrides.json` 추가
- `docs/guides/multi_pc_data_sync.md` — 발행 버튼·가드 문서화
- `docs/plan/ROADMAP.md` — 항목 추가

**의존성**: 없음 (openpyxl·기존 스택으로 충족)

---

## 9. 진행 순서

§5 의 데이터 흐름 순서대로 **뒤에서부터** 만든다 — 앞단 UI 를 먼저 만들면 검증할 대상이 없다.

1. ✅ **`build_data_json()` 분리** (§4.2) — **완료(2026-07-17).** 순수 리팩터링.
   `_read_cleaned_sheet`(xlsx 를 아는 유일한 함수) + `build_data_json`(xlsx 를 열지 않음)
   + `write_data_json` 으로 분리. `export_to_json` 은 셋을 잇는 껍데기로 남아 시그니처·산출물 동일.
   검증: 분리 전(`HEAD`) 코드와 **바이트 동일**(숫자문자열·NaN·음수·날짜·유니코드·빈행 혼합
   입력, 1698 bytes 일치) · 기존 282 테스트 + 신규 12 통과.
   **→ 이 단계에서 §5.1 ⑥의 차단 이슈를 발견했다. 5단계 전에 결정 필요.**
2. ✅ **`__row_id` 파이프라인 관통** — **완료(2026-07-17).** `engine/config.py` 에 `ROW_ID_COL`
   상수 · `_sheet_to_dataframe` 가 원본 행번호를 **DataFrame index** 로 보존 ·
   `CleanedSheetWriter` 가 맨 끝 숨김 열에 `r{n}` 기록(Excel Table 안) ·
   `build_data_json` 이 rows 에는 싣고 `meta.columns`·`aggregates` 에서는 제외.
   검증: 신규 13 테스트 + 변이 테스트(reset_index 복원·컬럼 누출 모두 실패로 검출) + 307 전체 통과.
   **발견 2건은 §2 에 반영**: (a) `preprocessor.py` 의 `reset_index(drop=True)` 가 행 식별자를
   지우던 것 · (b) 행번호를 컬럼이 아니라 index 로 둬야 하는 이유.
3. ✅ **`engine/overrides.py` + 단위테스트** — **완료(2026-07-17).** `Edit`·`Conflict`·`Overrides`
   데이터 모델 + load/save + `OverrideApplier`. 신규 35 테스트.
   **원안의 `apply_overrides(df, …)` 시그니처는 코드와 맞지 않아 폐기**(§4.1 정정 참고).
4. ✅ **오버레이를 파이프라인에 연결** — **완료(2026-07-17).**
   `writer.write(wb, df, applier)` 가 transform 직후·시트 기록 직전에 `take()` 를 통과시킨다
   (`cleaned_col_vals` 에 담기 **전**이라 엑셀 Summary 차트도 편집을 반영).
   `pipeline.run()` 이 `overrides.json` 을 읽어 applier 를 만들고 `self.override_conflicts` 를 채운다.
   **★ 뼈대 완성**: 신규 12 통합 테스트로 **`/run` 3회 재실행에도 편집이 살아남음**을 확인.
   변이 테스트 2종(오버레이 무시·take 우회) 모두 9건씩 실패로 검출. 전체 354 통과.
5. ✅ **`/freshness` 확장 + `PATCH /rows` + `/rebuild`** — **완료(2026-07-17).**
   신규 4개(`GET/DELETE /overrides`, `PATCH /rows/{row_id}`, `POST /rebuild`) +
   `/freshness` 에 `overrides_updated_at`·`edit_count` 추가 + `/download` 가 뒤처지면 rebuild.
   `_load_project_cfg`·`_data_json_paths`·`_rebuild_project` 헬퍼로 중복 제거. 신규 24 테스트.
   **실측 결과 저장 지연 목표(1초)를 못 맞췄다 — sangga 기준 약 2.2초** → §11 참고.
   `clean_rows` 재정제를 제거해 42% 단축했으나 19.4MB JSON 쓰기(~1.2초)가 바닥이다.
   ⚠️ `edit_count` 는 계획의 `pending_edits` 를 대체한다 — "아직 xlsx 에 안 들어간 편집 수"는
   추적 없이 알 수 없고, 배지에 실제로 필요한 건 총 건수 + `is_stale` 이다.
6. 🟡 **`useBackendStatus` + 조건부 UI + 상태 배지** (요구사항 1·3번) — **구현 완료(2026-07-17),
   시각 검증 미완.** `useBackendStatus` 훅으로 health 폴링·세션 구독을 분리하고
   `useManagerApi` 와 공개 대시보드가 공유한다. `canEdit = isBackendAlive && isAuthed` 하나로
   `설정`·`원본 XLSX` 노출을 판단하고, 헤더에 상태 배지(`로컬 API 연결됨` / `로그인 필요` /
   `읽기 전용`)를 넣었다. 신규 8 테스트(canEdit 판정·withToken·mixed content 회피).

   **발견 2건**:
   - 🔴 **기존 버그**: `useManagerApi` 의 health 폴링 `useEffect` 가 `deps=[]` 라 **첫 렌더의
     `fetchWithAuth`(sessionToken=null)를 계속 붙들고 있었다** — 프로젝트 목록 요청에 인증
     헤더가 영영 안 실렸다. 로컬은 바이패스라 안 터졌지만 Supabase 환경에선 401 →
     자동 로그아웃 루프가 났을 것이다. `[isBackendAlive, sessionToken]` 로 고쳤다.
   - **https 페이지에서 `http://localhost` 는 mixed content 로 차단**된다 → 정적 배포에서
     10초마다 두드리면 공개 대시보드 콘솔이 영원히 에러로 덮인다. 그 조합이면 확인 자체를
     건너뛴다(`unreachableByDesign`).

   🔴 **이 단계가 만든 회귀 1건 — 고침**: `설정` 을 `canEdit` 뒤로 숨겼는데 **그게 `/login` 으로
   가는 유일한 길이었다.** 배지로 "로그인 필요" 라고만 하고 방법을 없앤 꼴 — 이 문서가
   "버튼만 숨기면 '왜 없지?' 가 된다"고 써놓고 정확히 그걸 했다. 백엔드는 있는데 로그인만
   없으면 **`로그인` 버튼**을 띄운다(백엔드가 없으면 로그인해도 할 게 없으므로 안 띄운다).

   ⚠️ **부분 미완**: 사용자가 화면이 뜨는 것까지 확인했으나, **"백엔드를 껐을 때 버튼이
   실제로 사라지는지"는 아직 눈으로 확인되지 않았다.** 이 환경의 브라우저 확장이
   `chrome://newtab` 조차 error page 로 보고해 자동 검증이 불가능했고, TanStack Start 는
   대시보드를 클라이언트에서 그려 SSR HTML(2.9KB 셸)로도 확인이 안 된다.
   `canEdit` 판정 자체는 훅 테스트 8개로 덮여 있다 → §10 시나리오 1·2 에서 확인할 것.
7. ✅ **DetailPanel 편집 모드** (§7.2) — **완료(2026-07-17).** 패널이 `onSave` 를 **prop 으로**
   받는다 — API 는 모른다. 그래서 8단계 전까지 앱에 "눌러도 안 되는 저장 버튼"이 생기지 않고,
   패널만 따로 테스트할 수 있다. 신규 25 테스트(변이 테스트로 2종 검출 확인).
   - **빈 값 컬럼**: 읽기 모드는 감추고(기존 동작·PDF 깔끔), **편집 모드는 반드시 보여준다**
     — 계획이 지목한 회귀 지점. 변이 테스트 4건 검출.
   - **닫기 가드는 `DataTable` 이 가진다**: Sheet 는 오버레이 클릭·Esc 로도 닫혀 패널 안에서
     막을 수 없다. 패널이 `onDirtyChange` 로 알리고 DataTable 이 `AlertDialog` 로 가로챈다.
     변이 테스트 3건 검출.
   - **변경된 컬럼만** payload 에 담고, 원래 값으로 되돌리면 payload 에서 빠진다.
     저장 실패 시 `draft` 를 유지해 입력을 날리지 않는다(§5.1 ⑩).
   - **category 위젯은 `<input list>`(datalist)** — 계획의 "Select + 자유입력" 요구를
     의존성 없이 만족한다(shadcn `Select` 는 목록에 없는 값을 못 넣는데, 설문 정제는 새 표기를
     넣는 일이 잦다). numeric → `input[type=number]`(빈 값은 0 이 아니라 `null`), text → textarea.
   - PDF 는 영향 없다 — `row` 값으로 별도 DOM 을 만들지 라이브 패널을 캡처하지 않는다.
8. ✅ **`useRowEdit` + 저장 연결** — **완료(2026-07-17).** §5.1 ①~⑩ 완주.
   `useDashboardData` 에 `applyData` 추가 → 저장 응답의 data 로 **교체**(부분 패치 아님 —
   §5.3). `__row_id` 없는 데이터(이 기능 이전 내보내기)는 저장을 거부한다. 신규 7 테스트.
9. ✅ **`/download` rebuild 연동 + 뒤처짐 배지** — **완료(2026-07-17).**
   헤더에 `편집 N건 · 엑셀 뒤처짐` 배지(검토 패널 진입점). `/download` 는 5단계에서 이미 연동.
10. ✅ **편집 검토 패널 · 되돌리기 · 역방향 xlsx** — **완료(2026-07-17).**
    `diff_against()` + `POST /import-xlsx`(**기본은 미리보기**, `apply=true` 여야 반영) +
    `EditReviewPanel`. `__row_id` 검증이 유일한 방어 지점(§5.4 ③) — 열 삭제·중복·미지의 id 를
    거부한다. 신규 21 테스트.
11. ✅ **발행(`/deploy`) + 가드 3종** — **완료(2026-07-17).** `app/git_sync.py`.
    **가드 테스트를 먼저 통과시킨 뒤** 엔드포인트를 얹었다(신규 17 테스트, 진짜 git 저장소로 검증).
    가드에 걸리면 409 + 이유 — 오류가 아니라 **의도된 정지**다.
12. ✅ **문서 갱신** — 이 문서 · [CHANGELOG](../../CHANGELOG.md) · [`project_files_lifecycle.md`](../../reference/project_files_lifecycle.md) §4.9(`overrides.json`) · [`multi_pc_data_sync.md`](../../guides/multi_pc_data_sync.md) **§3.1 신설**(발행 가드 — §3 의 금지선을 자동화하는 물건이라 설명이 그 규칙 옆에 있어야 한다) · INDEX · ROADMAP. **원본 PC 인수인계는 §12.**

---

## 10. 검증 계획

> ⚠️ **이 PC 에서는 시나리오를 끝까지 못 돈다 (2026-07-17 확인).** `storage/projects/` 에
> README 하나뿐 — **프로젝트가 0개**다. 반면 `projects.json`(git 추적)은 6개를 나열한다.
> [`multi_pc_data_sync.md`](../../guides/multi_pc_data_sync.md) §2.1 이 예고한 그대로
> **"보기는 되고 재편집·재실행은 안 되는"** PC 다(원본·레시피가 gitignore 라 따라오지 않는다).
> 그래서 어드민의 프로젝트 목록은 뜨지만 `config.yaml` 이 없어 설정 로드가 404 이고,
> `/download` 도 같은 이유로 404 다 — **버그가 아니다.**
>
> 7단계 이후(드로어 편집·저장·다운로드 왕복)를 실제로 확인하려면 셋 중 하나가 필요하다:
> ① 원본 xlsx 를 올려 이 PC 에 프로젝트를 새로 만든다 ·
> ② 원본 PC 에서 `storage/projects/<name>/` 의 `config.yaml`·`dashboard.json` 만 가져온다
> (개인정보가 없어 안전 — multi_pc §4-② 의 화이트리스트 방식) ·
> ③ 테스트용 더미 프로젝트를 만든다.
> **자동 테스트(pytest/vitest)는 자체 fixture 로 프로젝트를 만들므로 이 제약과 무관하다.**

- `pytest` (기존 282개(착수 전) + 신규) · `bun run build` · `bun test`
- **1번 단계는 회귀 검증이 전부다**: `build_data_json` 분리 전후로 기존 프로젝트의
  `data.json` 이 **바이트 단위로 동일**한지 (mumhwa·gpu_4 기준).
- 시나리오:
  - (백엔드 꺼짐) 대시보드 열람·검색·차트 정상, **설정·XLSX·편집 버튼 미노출**, `○ 읽기 전용`,
    드로어는 열리되 읽기 전용
  - (백엔드 켜짐, 로그인) `● 편집 가능` 배지, 버튼 노출
  - 행 클릭 → 드로어 → 값 수정 → 저장 → **차트·KPI 갱신** → 새로고침 후 유지
  - **저장이 1초 내에 끝나는지** (sangga 15,423행 × 39열 기준) ← 지연 생성의 존재 이유
  - **저장 후 xlsx mtime 이 안 변했는지** (= 파이프라인이 안 돌았는지)
  - **빈 값 컬럼에 값을 새로 채울 수 있는지** (§7.2 의 회귀 지점)
  - 드로어에서 수정 후 저장 없이 닫기 → 확인 대화상자 → 폐기 시 값 원복
  - 저장 → 「다운로드」 → **rebuild 후 편집값이 든 엑셀**이 오는지 (요구사항 2번 정방향)
  - **저장 → `/run` 재실행 → 편집이 살아남는지** (← 이 계획의 존재 이유)
  - 저장 20회 → **커밋 0개**인지 → 「발행」 1회 → **커밋 1개**인지 (§6)
  - 다운로드한 xlsx 수정 → 업로드 → **미리보기에서 멈추는지** → 확인 후 반영 (역방향)
  - 되돌리기 → 파이프라인 산출 원값 복귀
  - 원본 교체로 `row_id` 소실 → 편집이 **조용히 사라지지 않고** 충돌로 표시되는지
  - 발행 가드: 원본 없는 상태 → 거부 · **원격 선행 시 푸시 거부** · 경로 2개 외 미스테이징

---

## 11. 확장 (이번 범위 아님)

- **저장 지연시간 추가 단축** — 5단계에서 **실측했고, 목표를 못 맞췄다.** sangga(15,423행 ×
  39열 · 19.4MB) 기준 저장 1회 **약 2.2초**(목표 1초의 2.2배). 다른 프로젝트는 훨씬 작다
  (mumhwa 1.1MB → 대략 1/20).

  | 단계 | 비용 | 줄일 수 있나 |
  |---|---|---|
  | ① data.json 로드 | ~430ms | 메모리 캐시가 필요 — 무상태성을 깬다 |
  | ② 재계산 | ~570ms | 컬럼 좁히기로 ~200ms 더 (아래 참고) |
  | ③ 쓰기 + 복사 | ~1190ms | **19.4MB 를 디스크에. 사실상 바닥** |

  > ⚠️ **이 문서가 원래 처방한 "집계 재계산을 변경 컬럼만으로 좁히기"는 병목이 아니었다.**
  > 실측상 그건 1,771ms 중 **185ms**짜리다. 진짜 병목은 (a) `clean_rows` — 이미 정제된 값을
  > 60만 번 재정제하던 순수 낭비(**5단계에서 `rows_are_clean` 로 제거, ~42% 단축**) 와
  > (b) **19.4MB JSON 직렬화**였다. 측정 없이 처방했다면 엉뚱한 곳을 고쳤을 것이다.

  남은 선택지(6~8단계에서 실제 UI 로 체감한 뒤 판단): 컬럼 좁히기(~200ms) ·
  `clean_rows` 의 dict 재구성까지 생략(~400ms) · data.json 분할(rows 와 meta 를 별도 파일로)
  · 애초에 19.4MB 를 브라우저에 통째로 보내지 않기(페이지네이션). **마지막이 근본이지만
  범위가 훨씬 크다.**
- **인라인 셀 편집 병행** — §7.2 의 C안. 여러 행의 같은 컬럼을 훑어 고치는 작업(오타 일괄 수정)엔
  드로어보다 빠르다. 저장 경로(§5.1 ③~⑩)를 그대로 재사용하므로 `visible_cols` 한정으로 추가 가능.
- **클라우드 API** — 요구사항 5번대로 로컬 우선. 이전 시 `VITE_API_BASE_URL` 만 바꾸면 프런트는
  그대로다. 단 서버 측은 **`storage/` 가 로컬 파일시스템 전제**라 그대로 못 옮긴다 →
  [`ROADMAP §2 Railway`](../ROADMAP.md) + [`§3 클라우드 스토리지`](cloud_storage_plan.md) 에 종속.
  발행(§6)도 서버 환경에선 git 이 아니라 스토리지 업로드가 되어 다시 설계해야 한다.
- **행 추가·삭제** — 원안 §4.3. `overrides.json` 에 `added_rows`/`deleted_row_ids` 를 더하면
  같은 구조로 확장 가능하나, "원본에 없는 행"의 의미가 정제 파이프라인과 충돌해 별도 논의 필요.
- **편집 이력·다중 사용자** — 현재 `by` 는 기록만 하고 쓰지 않는다. 동시 편집 잠금 없음
  (로컬 단일 사용자 전제).

---

## 12. 🔴 원본 PC 인수인계 — 여기서부터 이어서 한다

**1~11단계 구현은 끝났고 자동 테스트(백엔드 421 · 프런트 417)는 모두 통과한다.
그러나 이 코드는 아직 실제 데이터로 한 번도 돌아본 적이 없다.**

### 12.1 왜 여기서 멈췄나

작업한 PC 에 `storage/projects/` 가 **비어 있다**(README 하나뿐). 반면 git 추적되는
`frontend/public/data/projects.json` 은 6개를 나열한다 —
[`multi_pc_data_sync.md`](../../guides/multi_pc_data_sync.md) §2.1 이 예고한
**"보기는 되고 재편집·재실행은 안 되는"** PC 다. 원본·레시피는 gitignore 라 따라오지 않는다.

그래서 어드민의 프로젝트 목록은 뜨지만 `config.yaml` 이 없어 설정 로드가 404, `/download`
도 404 다 — **버그가 아니다.** 편집 기능 전체가 프로젝트 폴더를 전제하므로 화면에서 끝까지
돌려볼 수 없었다.

### 12.2 원본 PC 에서 가장 먼저 할 일

```bash
git pull
cd backend && python -m pytest -q          # 421 통과해야 한다
cd ../frontend && bun run test -- --run    # 402 통과해야 한다
```

그다음 **`start_backend.bat` 을 반드시 새로 띄운다** — 오래 떠 있던 프로세스는 신규 라우트
(`/rows`, `/overrides`, `/rebuild`, `/import-xlsx`, `/deploy`)가 없다. 확인:

```bash
curl -s http://127.0.0.1:8000/openapi.json | grep -c overrides    # 0 이면 구버전 프로세스
```

> ⚠️ **기존 프로젝트는 `__row_id` 가 없다.** 이 기능 이전에 내보낸 `data.json` 에는 행
> 식별자가 없어 저장이 거부된다("행 식별자가 없습니다"). **프로젝트마다 `/run` 을 한 번씩
> 다시 돌려야** 편집이 열린다. 의도된 안전장치다 — 식별자 없이 저장하면 어느 행인지 모른다.

### 12.3 사람 눈으로 확인할 것 (자동 테스트가 못 덮는 것)

| # | 시나리오 | 근거 |
|---|---|---|
| 1 | 백엔드 **끄고** 대시보드 → `설정`·`원본 XLSX` **안 보임** · `○ 읽기 전용` 배지 | 6단계 미검증 |
| 2 | 백엔드 켜고 **로그아웃** 상태 → `로그인` 버튼 보임 → 누르면 `/login` | 6단계 회귀였던 지점 |
| 3 | 로그인 → `● 로컬 API 연결됨` · 버튼 노출 | |
| 4 | 목록 탭 → 행 클릭 → 드로어에 **저장 버튼** · 입력창 | 7단계 |
| 5 | **빈 값 컬럼에 값을 새로 채워** 저장 → 반영되는가 | §7.2 의 회귀 지점 |
| 6 | 값 수정 → 저장 → **차트·KPI 가 즉시 바뀌는가** · 새로고침 후 유지 | §5.1 ⑨ |
| 7 | **저장 지연시간 체감** — sangga(15k행) 기준 실측 ~2.2초 | §11 판단 근거 |
| 8 | 수정 후 저장 없이 닫기 → **확인 대화상자** | §7.2 |
| 9 | 「원본 XLSX」 → **편집이 든 엑셀**이 받아지는가 (rebuild 유발) | 요구사항 2번 |
| 10 | 그 엑셀을 고쳐 **되돌려 올리기** → 미리보기 → 반영 | §5.4 |
| 11 | **`/run` 재실행 → 편집이 살아남는가** | ★ 이 계획의 존재 이유 |
| 12 | 되돌리기 → 정제 원래값 복귀 | §7.3 |
| 13 | **발행** → 커밋 1개 · Vercel 반영 | §6 |

### 12.4 발행(11단계)은 특히 조심할 것

**아직 아무도 실제로 눌러본 적이 없다.** 가드 3종은 진짜 git 저장소로 테스트했지만
(`tests/test_git_sync.py` 17개), **실제 원격에 푸시한 적은 없다.**
첫 발행 전에 `git log --oneline -3` 으로 상태를 확인하고, 발행 후 커밋이 **딱 1개**이고
`frontend/public/data/` 의 파일 2개만 담겼는지 확인할 것.

가드에 걸리면 **409 + 이유**가 뜬다. 그건 오류가 아니라 의도된 정지다.

### 12.5 성능 (§11 참고)

sangga(15,423행 × 39열 · 19.4MB) 기준 **저장 1회 ~2.2초** — 목표(1초)의 2.2배.
`clean_rows` 재정제를 없애 42% 줄였지만 **19.4MB JSON 쓰기(~1.2초)가 바닥**이다.
다른 프로젝트는 훨씬 작다(mumhwa 1.1MB → 대략 1/20). **실제로 써 보고 견딜 만한지 판단할 것** —
못 견디면 §11 의 남은 선택지(컬럼 좁히기 · dict 재구성 생략 · data.json 분할 · 페이지네이션).

---

## 13. 열린 질문

1. ~~`sangga_data.json` 19.4MB 를 git 으로 계속 나를 것인가~~ — **닫힘(2026-07-17).** 실측 결과
   문제가 아니다: git 안에서 1.94MB(90% 압축), 편집 커밋 1회당 증분 **약 207KB**(델타 압축).
   전송도 Vercel 이 gzip 하므로 방문자는 1.9MB 를 받는다. **Git LFS·클라우드 스토리지로 뺄
   이유가 없다.** (이 항목은 §5.0 의 잘못된 계산에서 나왔던 것이다 — 그 정정 참고.)
   `.git` 의 실제 무게는 §0.1 의 **죽은 xlsx 11.3MB** 이고, 그건 이 계획이 xlsx 를 커밋하지
   않기로 한 이상 더 늘지 않는다.
2. **`storage/` 를 클라우드 스토리지로 옮길 것인가** — **이 계획과 무관하다. 지금 하지 않는다.**
   `storage/` 는 gitignore 라 **git 에 0바이트를 기여**하므로 위 1번과 직교한다.
   [`cloud_storage_plan.md`](cloud_storage_plan.md) §1 의 동기는 *"Railway 등 무상태 컨테이너에서
   재구동 시 `/storage` 전량 소실"* 이고, 요구사항 5번(**로컬 API 우선**)에서 그 동기가 아직 없다.
   비용은 그 계획서 §3 이 스스로 경고한다 — *"파일 IO 호출 지점 전수 치환… 변경 범위가 커서
   별도 리팩터링 계획 단계 선행 필요"*. **이 계획에 주는 편익은 0.**
   Railway(→ [ROADMAP §2](../ROADMAP.md))가 확정되면 그때, 그 계획서대로 Supabase Storage 로 간다
   (인증을 이미 Supabase 로 쓰고 있어 자격증명이 하나로 유지된다 — 벤더를 늘릴 이유가 없다).
3. ~~타입 재감지 문제~~ — **닫힘(2026-07-17).** `column_types` 로 해결. §5.1 ⑥ 참고.
   실측 결과 영향은 106컬럼 중 1건이었고 필터 소실 사례는 실데이터에 없었다(초기 "🔴 차단"
   판정은 과장이었다). 앞자리 0 건도 실데이터에 해당 컬럼이 없어 함께 닫는다.
4. ~~`__row_id` 를 사용자가 엑셀에서 지우면~~ — **방향 확정(2026-07-17): 숨김 유지 +
   업로드 시 검증.** 시트 보호는 Cleaned 시트 전체의 편집성을 해쳐 역방향 업로드의 목적과
   충돌하므로 쓰지 않는다. 방어를 **업로드 한 지점**에 모으고, `__row_id` 열이 없거나
   값이 깨졌으면(누락·중복·미지의 id) **"ClearSurvey 가 내려준 원본이 아닙니다"로 거부**한다.
   구체 실패 양상은 실제 소비처인 **10단계에서 보고 확정**한다 → §5.4.
5. ~~`overrides.json` 을 git 추적할지~~ — **닫힘(2026-07-17). 이미 추적되지 않는다.**
   `.gitignore:16` 의 `/storage/*` 가 그대로 덮으므로 별도 조치가 필요 없었다
   (`git check-ignore` 로 확인). 편집값은 곧 응답 내용이라 개인정보이므로 이게 맞다.
   → **원본 PC 에서 주의**: 그래서 **편집은 PC 를 따라가지 않는다.** 다른 PC 에서 발행하면
   그쪽 파이프라인 산출값(편집 없는 상태)이 올라간다. multi_pc §4-① 의 "작성 PC 1대 지정"이
   편집에도 그대로 적용된다 — 발행 가드 1(원본 존재 확인)이 이걸 물리적으로 강제한다.
