# ClearSurvey 관련 서비스·오픈소스 리서치 (2026-08-27)

> 목적: ClearSurvey와 비슷한 문제(설문/행정 엑셀 원본 → 정제 → 대시보드/보고서 발행)를 다루는
> 외부 서비스·오픈소스 프로젝트를 웹 검색으로 조사하고, ClearSurvey의 설계 대비 위치를 정리한다.
> "왜 이렇게 만들었는가"의 참고 자료이며 즉시 반영해야 할 실행 계획은 아니다.

## 0. ClearSurvey를 한 문장으로 겹치는 문제가 없는 이유

ClearSurvey는 아래 4가지를 **하나의 파이프라인**으로 묶는다. 조사 결과, 이 4가지를 모두 하나의 도구로
제공하는 곳은 찾지 못했다 — 보통 앞의 2~3단계까지만 하고 나머지는 다른 도구(Power BI, PPT 수작업 등)로
넘어간다.

1. 엑셀 원본 업로드 → 컬럼 구조 자동 분석 → **10열 드롭다운으로 정제 규칙을 코드 없이 정의**
2. `config.yaml` 기반 **재현 가능한(reproducible)** 정제 파이프라인 실행
3. 결과를 **웹 대시보드**(정적/풀스택 하이브리드)로 즉시 배포
4. 같은 데이터에서 **PPT(네이티브 차트) / PDF / Word / 슬라이서 내장 엑셀**까지 한 번에 발행

아래는 이 4단계 중 일부와 겹치는 카테고리별 조사 결과다.

---

## 1. 설문/필드 데이터 수집·정제 플랫폼 — 가장 가까운 이웃

### KoboToolbox
인도적 지원(humanitarian) 현장에서 널리 쓰이는 무료 오픈소스 설문 수집 도구. 오프라인 모바일 수집
(KoboCollect) + 서버 대시보드에서 제출 데이터를 표로 보고 행 단위로 편집·승인(Approved/Not Approved)
표시가 가능하다. CSV/Excel/SPSS/GeoJSON으로 내보낸다.
- **겹치는 지점**: 행 단위 편집, Excel 내보내기, 대시보드에서 데이터 확인.
- **다른 지점**: KoboToolbox는 "수집 단계"가 중심이고, 컬럼별 정제 규칙(주소 분할, 마스킹, 날짜 정규화
  같은 `transforms`)을 코드/드롭다운으로 정의하는 개념은 없다 — 서버 측 정제는 검증(validation) 수준.
  자체 PPT/PDF 리포트 발행 기능도 없다.

### SurveyCTO / ODK
SurveyCTO는 ODK(오픈소스) 위에 관리형 호스팅과 데이터 품질 도구를 얹은 유료 상용 제품. XLSForm으로
설문지를 정의하고, 자동 품질 검사(automated quality checks)를 설문 설계 단계에서 미리 정의해둔다.
- **겹치는 지점**: "설정을 먼저 정의하고 파이프라인이 그대로 따른다"는 철학 자체는 ClearSurvey의
  `config.yaml` 접근과 유사.
- **다른 지점**: XLSForm은 설문 *설계*(질문/응답 유형) 스키마이고, ClearSurvey의 10열 config는 이미
  걷힌 데이터의 *정제* 규칙 스키마라 계층이 다르다. 웹 대시보드·PPT/PDF 네이티브 발행도 없음.

**시사점**: 이 카테고리 도구들은 "수집"에 강하고 "수집 후 정제+발행"은 약하다. ClearSurvey는 반대로
수집은 다루지 않고(엑셀 원본을 이미 가진 사람이 대상) 정제+발행에 집중한다 — 포지션이 겹치지 않고
보완적이다.

---

## 2. 범용 데이터 정제 도구 — 엔진 설계의 참고선

### OpenRefine
가장 확립된 오픈소스 데스크톱 데이터 정제 도구. 조작 히스토리를 재생(replay)할 수 있어 추적성이
좋다. 브라우저 UI에서 대화식으로 정제한다.
- **다른 지점**: 매번 사람이 대화식으로 조작 — `config.yaml`처럼 규칙을 저장해 **같은 양식의 새
  파일에 그대로 재사용**하는 개념이 약하다. 웹 대시보드/보고서 발행 기능 없음.

### Power Query (Excel/Power BI 내장)
Microsoft의 데이터 준비 도구. 결측치 제거, 날짜 형식 통일, 여러 파일 자동 병합(폴더 가져오기) 등을
지원하며 국내 검색 결과에서도 "엑셀 대시보드 자동화"의 사실상 기본 답으로 나온다.
- **겹치는 지점**: 반복 가능한 변환 스텝 저장, 다중 엑셀 병합 — ClearSurvey의 다중 소스 병합 기능과
  목적이 같다.
- **다른 지점**: Power Query는 Excel/Power BI 생태계 안에 갇혀 있고, 결과를 독립된 웹 대시보드로
  퍼블릭 배포하거나 PPT 네이티브 차트로 내보내는 흐름은 별도 수작업이 필요하다.

### pyjanitor / pdpipe
pandas 위에 얹는 파이썬 정제 라이브러리. 메서드 체이닝으로 정제 단계를 표현하거나(pyjanitor), 재사용
가능한 파이프라인 스테이지(컬럼 매핑, 필터링 등)를 제공한다(pdpipe).
- **겹치는 지점**: ClearSurvey `backend/transforms/`의 레지스트리 패턴과 사상이 비슷하다 — 정제를
  "이름 붙은 재사용 가능 단계"로 다룬다.
- **다른 지점**: 둘 다 **코드로** 파이프라인을 짜는 라이브러리이지, 비개발자가 드롭다운으로 규칙을
  정의하는 UI가 없다. YAML 기반 컬럼 매핑 설정을 표준으로 제공하는 것도 아니다(검색 결과 자체가
  "커스텀 구현이 필요하다"고 확인해 줌).

**시사점**: ClearSurvey의 "정제 규칙을 코드가 아니라 config로 비개발자가 편집"하는 부분은 이
카테고리에서 흔치 않다. `transforms/` 레지스트리 설계 방향(이름 붙은 순수 함수 + 테스트)은 pyjanitor/
pdpipe와 같은 궤도라 확인 차원에서 안심할 수 있다.

---

## 3. 셀프호스팅 BI 대시보드 — "대시보드" 부분의 비교군

### Metabase / Apache Superset / Redash
셋 다 무료 오픈소스로 셀프호스팅 가능한 BI 대시보드다.
- **Superset**: 시각화 종류가 가장 많고(Sankey, 지도 등) 임베딩 API가 강함. 완전 Apache 2.0.
- **Metabase**: 비개발자 접근성이 가장 좋음(X-ray로 테이블에서 자동 대시보드 생성). 다만 샌드박싱·
  감사 로그 등은 유료 티어.
- **Redash**: Databricks 인수 이후 유지보수 모드(최신 오픈소스 릴리스가 2024-03). SQL 우선.
- **겹치는 지점**: 필터·차트·공유 가능한 대시보드라는 최종 결과물의 모양이 비슷하다.
- **다른 지점**: 셋 다 **SQL 데이터베이스에 연결**하는 것을 전제로 한다 — "엑셀 파일 하나 업로드하면
  끝"이라는 ClearSurvey의 시작점과 다르다. 자체 서버(Java/Python 백엔드 + DB)를 상시 띄워야 하며,
  ClearSurvey처럼 "정적 JSON만으로도 대시보드가 돈다"는 무료 정적 배포 경로가 없다.

**시사점**: ClearSurvey가 하이브리드(정적 모드)로 "백엔드 없이도 대시보드가 돈다"를 확보한 것은 이
카테고리 대비 뚜렷한 차별점이다. 다만 Superset/Metabase 수준의 차트 다양성·드릴다운은 ClearSurvey가
따라갈 필요는 없다(용도가 다름 — 설문 결과 요약 vs 범용 BI 탐색).

---

## 4. "BI as Code" 정적 사이트형 — 아키텍처적으로 가장 가까운 사례

### Evidence.dev
SQL + Markdown으로 리포트를 작성하면 **배포 가능한 정적 웹사이트**로 빌드해 주는 오픈소스 도구.
"대시보드를 Git으로 관리하고 PR로 리뷰한다"는 철학이 특징이며, dbt와 함께 쓰는 사례가 많다.
- **겹치는 지점**: **정적 사이트로 대시보드를 배포한다**는 아키텍처가 ClearSurvey의 "정적 모드
  (Vercel 무료 호스팅)"와 정확히 같은 발상이다. "레시피(config/SQL)를 저장소에 커밋해두면 언제든
  같은 결과를 재생산할 수 있다"는 점도 ClearSurvey의 `config.yaml` 재사용과 같은 원칙이다.
- **다른 지점**: Evidence.dev는 이미 정리된 SQL 데이터 웨어하우스가 있는 팀(주로 dbt 사용자) 대상이라
  "지저분한 엑셀 원본 정제"라는 전(前) 단계가 없다. 즉 ClearSurvey의 2~3단계(정제 엔진)에 해당하는
  부분이 통째로 빠져 있다.

**시사점**: "정적 배포로 무료 호스팅 + 코드/설정으로 재현 가능"이라는 ClearSurvey의 핵심 아키텍처
결정이 업계에서 독자적인 발상이 아니라 **검증된 패턴(Jamstack 계열)**을 설문 정제 도메인에 적용한
것임을 확인할 수 있었다. 이는 설계 방향에 대한 좋은 방증이다.

---

## 5. No-code 차트/스프레드시트→앱 도구 — 인접하지만 다른 문제

### Datawrapper / Flourish
CSV를 올리면 임베드 가능한 차트를 만들어주는 도구. Datawrapper는 블로그/보도자료용 정적 차트에,
Flourish는 애니메이션·스크롤 스토리텔링에 강하다.
- **다른 지점**: 차트 하나하나를 만드는 도구지 "설문 원본 → 정제 → 여러 차트가 조합된 대시보드
  1개"를 자동 조립해주지 않는다. 정제 개념도 없다.

### Glide / Softr / AppSheet
스프레드시트를 그대로 데이터소스로 써서 앱(포털, 카탈로그, 예약 시스템 등)을 만들어주는 no-code
빌더.
- **다른 지점**: "행 단위 CRUD 앱"이 목적이라 설문 데이터의 통계적 요약(KPI, 집계 차트, 요약 표)
  용도와는 맞지 않는다. 데이터 정제 개념도 없음(원본 그대로 노출).

**시사점**: 이 카테고리는 ClearSurvey와 겹치는 부분이 작다 — 참고보다는 "이 방향으로는 갈 필요 없다"는
확인용에 가깝다.

---

## 6. 멀티포맷 리포트 발행 — "PPT/PDF/Word 동시 발행"의 참고선

### Quarto
하나의 소스(Markdown + 코드)에서 HTML, PDF, PowerPoint, Word, ePub을 동시에 만들어내는 오픈소스
퍼블리싱 시스템(R/Python 데이터 과학 커뮤니티에서 널리 사용).
- **겹치는 지점**: "같은 데이터/분석 결과를 여러 포맷으로 동시에 발행한다"는 목표가 ClearSurvey의
  대시보드→PPT/PDF/Word 내보내기와 완전히 같은 문제의식이다.
- **다른 지점**: Quarto의 PPT/PDF는 **정적 문서 렌더링**(빌드 시점에 한 번 생성)이 중심이라, "지금
  화면에 걸린 필터 상태를 그대로 캡처해 내보낸다"는 ClearSurvey의 인터랙티브 내보내기와는 만들어지는
  방식이 다르다. 웹 대시보드 자체를 서비스하는 기능도 없다.

**시사점**: "한 데이터로 여러 산출물"이라는 요구 자체는 이미 널리 인정된 문제이며 Quarto가 그 정석적
해법이다. ClearSurvey는 같은 문제를 "필터링된 화면 상태 기준 내보내기"라는 다른 방식으로 풀고
있다는 점을 이 비교로 더 명확히 설명할 수 있다.

---

## 7. Excel 네이티브 슬라이서 — 기술적 난이도 확인

`openpyxl`(Python에서 가장 널리 쓰이는 엑셀 라이브러리) 자체의 이슈 트래커에서 **슬라이서는 지원되지
않는 기능으로 명시**되어 있다 — 슬라이서는 파일 포맷 표준 제정 이후 Microsoft가 추가한 확장이라
라이브러리 차원의 지원이 필요하고, 템플릿을 열었다가 다시 저장하면 기존 슬라이서가 통째로 사라진다는
보고도 있다.

**시사점**: ClearSurvey가 ZipArchive 조작으로 슬라이서 XML을 직접 주입하는 것은 "남들이 이미 쉽게
풀어놓은 문제를 다시 구현"하는 게 아니라, **생태계 표준 라이브러리가 공식적으로 포기한 기능을 우회
구현**한 것이다. 이 자체가 프로젝트의 기술적 차별점으로 문서화할 가치가 있다(다만 README의 Excel
"복구" 경고 이슈가 바로 이 미지원 영역과 맞닿아 있을 가능성이 높다 — `docs/qna.md` 6-c 참조).

---

## 8. 국내 시장 관찰

"설문 데이터 정제 대시보드 자동화" 계열로 한국어 검색을 했을 때, 정확히 겹치는 국내 서비스는 찾지
못했다. 검색에 걸린 것은 다음 두 갈래뿐이었다.
- **VBA/파워쿼리 기반 "엑셀 대시보드 만들기" 강의/도구** — 개인이 직접 수식·매크로를 짜야 함.
- **FineBI 등 범용 중국계 BI 툴** — 데이터 웨어하우스 구축을 전제로 하는 무거운 엔터프라이즈 제품.

**시사점**: "설문/행정 엑셀 원본을 그대로 올려서 정제 규칙만 설정하면 무료로 웹 대시보드까지 나온다"는
조합은 국내 검색 결과에서 직접적인 경쟁자가 보이지 않았다 — 이 자체를 근거로 삼기보다는, 검색으로
확인 가능한 범위 내에서는 니치가 비어 있어 보인다는 정도로 해석해야 한다(비공개 사내 도구, 유료
컨설팅 형태로 존재할 가능성은 배제할 수 없음).

---

## 9. 종합 비교표

| 카테고리 | 대표 사례 | 정제 규칙 재사용(config) | 웹 대시보드 배포 | 무료 정적 배포 | PPT/PDF 네이티브 내보내기 | 코드 없이 사용 |
|---|---|:---:|:---:|:---:|:---:|:---:|
| **ClearSurvey** | — | ✅ (`config.yaml`) | ✅ | ✅ (Vercel) | ✅ (네이티브 차트) | ✅ (10열 드롭다운) |
| 설문 수집 플랫폼 | KoboToolbox, SurveyCTO | 부분적(검증 규칙) | ✅(내부용) | ❌ | ❌ | ✅ |
| 범용 정제 도구 | OpenRefine, Power Query | 부분적/도구 종속 | ❌ | ❌ | ❌ | ✅(OpenRefine) / △(PQ) |
| 정제 라이브러리 | pyjanitor, pdpipe | ✅(코드 기반) | ❌ | ❌ | ❌ | ❌(코드 필요) |
| 셀프호스팅 BI | Metabase, Superset, Redash | N/A(DB 연결 전제) | ✅ | ❌(서버 상시 필요) | 부분적(플러그인) | ✅ |
| BI as Code | Evidence.dev | ✅(SQL/Markdown) | ✅ | ✅ | ❌ | ❌(SQL 필요) |
| 차트/스프레드시트 앱 | Datawrapper, Glide | ❌ | ✅(단일 차트/앱) | ✅ | ❌ | ✅ |
| 멀티포맷 리포트 | Quarto | ✅(소스 재사용) | ❌(정적 문서 중심) | ✅(정적 HTML) | ✅(빌드 시점) | ❌(코드 필요) |

---

## 10. 결론 — ClearSurvey 설계에 대한 시사점

1. **아키텍처 방향은 이미 검증된 패턴을 따르고 있다.** "정적 배포 + 커밋 가능한 설정으로 재현"이라는
   선택은 Evidence.dev·Jamstack 계열이 이미 증명한 접근이다. 낯선 실험이 아니라는 근거가 된다.
2. **가장 뚜렷한 빈틈은 "정제 후 대시보드"까지 하나로 묶은 도구가 드물다는 것**이다. 수집(Kobo/
   SurveyCTO), 정제(OpenRefine/pyjanitor), BI(Metabase 등), 발행(Quarto)이 각자 카테고리에 흩어져
   있고, ClearSurvey처럼 엑셀 한 장에서 시작해 이 전부를 잇는 사례는 조사 범위에서 확인되지 않았다.
3. **Excel 슬라이서 주입은 생태계 표준 라이브러리가 공식적으로 지원을 포기한 영역**이라는 점이
   확인됐다 — 다만 그만큼 사후관리 부담(Excel "복구" 경고 등 알려진 이슈)도 구조적으로 안고 가는
   기능임을 감안해야 한다.
4. **비교 대상이 될 만한 "직접 경쟁자"보다는 "부분 겹치는 이웃"이 많다.** 우선순위를 정할 때
   "저 도구들만큼 잘하기"보다 "저 도구들이 놓치는 이음매(엑셀→정제→대시보드→발행)를 계속 매끄럽게
   유지하기"가 더 유효한 기준이 될 것으로 보인다.

---

## 참고 링크 (검색 결과 원출처)

- [OpenRefine](https://openrefine.org/)
- [Evidence.dev — GitHub](https://github.com/Evidence-dev-Dashboard)
- [Evidence.dev + DuckDB: Zero-Cost BI Dashboards](https://duckdblab.org/en/post/duckdb-evidence-bi-dashboard/)
- [KoboToolbox](https://www.kobotoolbox.org/)
- [KoboToolbox — Data collection tools](https://support.kobotoolbox.org/data-collection-tools.html)
- [SurveyCTO vs. ODK](https://www.surveycto.com/product/surveycto-vs-odk/)
- [Reviewing and correcting incoming data — SurveyCTO Docs](https://docs.surveycto.com/04-monitoring-and-management/01-the-basics/04.reviewing-and-correcting.html)
- [pdpipe — GitHub](https://github.com/pdpipe/pdpipe)
- [pyjanitor — GitHub](https://github.com/ericmjl/pyjanitor)
- [Apache Superset vs Metabase vs Redash (2026)](https://blog.elest.io/apache-superset-vs-metabase-vs-redash-which-open-source-bi-tool-to-self-host-in-2026/)
- [Metabase vs Apache Superset (2026)](https://fastero.com/blog/metabase-vs-superset-open-source-bi-compared)
- [JAMstack — Wikipedia](https://en.wikipedia.org/wiki/JAMstack)
- [Jamstack in 2026: What Replaced It and What Still Works](https://naturaily.com/blog/what-is-jamstack)
- [Datawrapper vs Flourish](https://www.spotsaas.com/compare/datawrapper-vs-flourish-studio)
- [Glide — spreadsheet to app](https://www.glideapps.com/blog/spreadsheets-web-app)
- [Quarto](https://quarto.org/)
- [Quarto — Publishing Basics](https://quarto.org/docs/publishing/)
- [openpyxl — Excel slicers support? (Issue #17)](https://github.com/chronossc/openpyxl/issues/17)
- [오빠두엑셀 — 엑셀 보고서를 실시간 웹 대시보드로 자동화하는 방법](https://www.oppadu.com/lesson/xl-cloudflare-dashboard/)
- [FanRuan — 엑셀 대시보드 자동화, 초보도 쉽게 시작하는 방법](https://www.fanruan.com/ko-kr/blog/excel-dashboard-automation-easy-start-method)
