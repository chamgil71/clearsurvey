# 지도 탭 확장 계획

> 상태: 미구현 선택 계획.
> 현재 `web/js/map.js` 및 지도용 GeoJSON 데이터는 없습니다.
> 먼저 `exporter.py`의 지역 메타데이터와 시도 단위 코로플레스 요구가 확정되어야 합니다.

## 개요

survey 대시보드에 **🗺 지도** 탭을 추가하여 응답 데이터를 지역별로 시각화합니다.  
엑셀 데이터에 주소 관련 컬럼이 없으면 탭을 자동으로 숨깁니다.

---

## 구현 방식

### 정적 파일 방식 (빌드 불필요)

React 전환 없이 현재 vanilla JS 구조를 유지합니다.

```
Leaflet.js (CDN) + Korea GeoJSON 파일
→ web/data/korea-sido.geojson  (~300 KB, 시도 경계)
→ web/data/korea-sgg.geojson   (~1.2 MB, 시군구 경계)
```

---

## 기능 설계

### Level 1 — 시도 코로플레스 (완전 정적, API 키 없음)

- 시도별 응답수를 색상 농도로 표시
- 시도 클릭 → 시군구 드릴다운
- 마커 위치: 시군구 중심점 (정확도 보통)
- 인터넷 연결 불필요 (OpenStreetMap 타일 제외)

### Level 2 — 개별 주소 마커 (정적 + Python geocoding)

- Python export 단계에서 주소 → 위경도 변환 (Kakao/Naver Geocoding API 1회 호출)
- 변환 결과를 JSON에 포함 → 웹은 좌표만 찍음 (완전 정적)
- API 키는 Python 서버 측에만 존재 (웹에 노출 안됨)
- 마커 클릭 → 해당 행 상세 정보 팝업

---

## 구현 파일 목록

### 신규 파일

```
web/js/map.js                  # Leaflet 지도 렌더링
web/data/korea-sido.geojson    # 시도 경계 (공개 데이터)
web/data/korea-sgg.geojson     # 시군구 경계 (공개 데이터)
```

### 수정 파일

```
engine/exporter.py
  → meta에 has_geo 플래그 추가
      has_sido: bool    (소재지_시도 컬럼 존재 여부)
      has_latlon: bool  (위도/경도 컬럼 존재 여부)
  → rows에 lat/lng 포함 (있을 경우)

web/index.html
  → 🗺 지도 탭 버튼 추가 (조건부 표시)
  → Leaflet.js CDN 추가

web/js/app.js
  → meta.has_sido 여부에 따라 지도 탭 표시/숨김
  → switchTab('map') 처리 추가

web/css/main.css
  → 지도 컨테이너 스타일
```

---

## 탭 자동 숨김 로직

```javascript
// 데이터 로드 후 지도 탭 표시 여부 결정
const hasSido = data.meta.columns.some(c =>
  ['시도', 'sido', '지역'].some(k => c.key.includes(k))
)
document.querySelector('[data-tab="map"]')?.classList.toggle('hidden', !hasSido)
```

---

## 지도 렌더링 흐름

```
1. 탭 전환 시 map.js 초기화 (최초 1회)
2. filteredRows() → 시도별 응답수 집계
3. Korea GeoJSON 로드
4. Leaflet choropleth 렌더링
5. 필터 변경 → 집계 재계산 → 색상 업데이트
6. (Level 2) lat/lng 있는 행 → 개별 마커 오버레이
```

---

## 참고: 기존 mymap 프로젝트와의 관계

`c:\coding\msshin\mymap\frontend` 는 React + Vite + Kakao Maps SDK + SVG 벡터 지도 기반의
독립 애플리케이션입니다. SVG 코로플레스, 드릴다운, Zustand 상태관리 등 고급 기능을 갖추고 있으나
현재 survey 대시보드의 vanilla JS 구조와 직접 통합은 어렵습니다.

아래 두 가지 경로 중 선택:
- **단기**: Leaflet.js 기반 정적 통합 (survey 대시보드 구조 유지)
- **장기**: survey 대시보드 전체를 React로 전환 후 mymap 컴포넌트 재사용

---

## 우선순위 및 일정

- 현재 상태: **계획 단계**
- 선행 조건: 엑셀 데이터에 `소재지_시도` 또는 위경도 컬럼 존재 확인
- 예상 공수: Level 1 (2~3일), Level 2 (3~4일, Geocoding API 세팅 포함)
