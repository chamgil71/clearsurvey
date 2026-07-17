---
brand: Agoda
brand_ko: 아고다
slug: agoda
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - mobility
  - ecommerce

color_tone: warm
primary_color_hex: "#E2231A"
primary_color_name: "Agoda Red"
mood:
  - 즉시성
  - 절약
  - 직관

font_category: sans-serif
font_primary: Helvetica Neue
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2005
last_major_revision: 2023
signature_keyword: "빨강 가격 강조 배지와 아시아 호텔 우선 노출의 직판 OTA 톤"

hero_html: |
  <div style="font-family:-apple-system,'Helvetica Neue','Pretendard','Segoe UI',sans-serif;background:#fff;height:100%;display:grid;grid-template-rows:auto 1fr;position:relative;overflow:hidden;">
    <div style="background:#5392F9;padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <span style="font-weight:900;font-size:18px;color:#fff;letter-spacing:-0.02em;">agoda</span>
      <span style="margin-left:auto;font-size:10px;color:#fff;opacity:0.9;">EN · KRW</span>
    </div>
    <div style="padding:12px 14px;display:flex;flex-direction:column;gap:8px;">
      <div style="border:2px solid #FFB400;border-radius:4px;padding:8px;position:relative;background:#FFFCF0;">
        <div style="position:absolute;top:-8px;left:8px;background:#E2231A;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:2px;">SECRET DEAL</div>
        <div style="font-weight:700;font-size:12px;color:#212121;margin-top:4px;">시부야 그랜벨 호텔</div>
        <div style="font-size:9px;color:#6E6E73;">★★★★ · 8.6 매우 좋음</div>
        <div style="margin-top:6px;display:flex;align-items:baseline;gap:6px;">
          <span style="font-size:9px;color:#9E9E9E;text-decoration:line-through;">₩148,000</span>
          <span style="font-size:18px;font-weight:900;color:#E2231A;">₩98,000</span>
        </div>
      </div>
      <div style="background:#fff;border:1px solid #E0E0E0;border-radius:4px;padding:8px;">
        <div style="font-weight:700;font-size:11px;color:#212121;">신주쿠 위싱턴</div>
        <div style="font-size:9px;color:#6E6E73;">★★★ · 8.1 좋음</div>
        <div style="margin-top:4px;display:flex;align-items:baseline;gap:6px;">
          <span style="font-size:14px;font-weight:900;color:#212121;">₩72,000</span>
          <span style="background:#FFE8E6;color:#E2231A;font-size:8px;font-weight:700;padding:1px 5px;border-radius:2px;">-28%</span>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.agoda.com/
  - https://www.agoda.com/info/agoda-brand-guidelines.html
---

### ① 브랜드 DNA
- **브랜드명**: Agoda
- **한 줄 정체성**: 아시아·태평양 호텔에 강한 부킹닷컴 그룹 산하 OTA — 가격 절감과 시크릿 딜로 직판
- **공식 디자인 철학**: "Smarter travel for everyone" — 가격 비교와 절약을 가장 직접적으로 보여주는 UI
- **시그니처 요소 1개**: 빨강(#E2231A) 가격 강조 + 노랑(#FFB400) SECRET DEAL 배지 조합, 그리고 카드 모서리는 4px 이하 Sharp로 정보 밀도를 최대화

### ② 톤 & 무드
- **핵심 키워드 3개**: 즉시성, 절약, 직관
- **무드 설명**: 흰 캔버스 위에 정보가 빽빽하게 박힌다. 가격은 항상 굵은 빨강. 할인율 배지가 카드 곳곳에 박힌다. 디자인보다 정보 전달 우선.
- **비주얼 스타일**: 모던 미니멀 (Functional)
- **밀도(Density)**: Compact — 한 화면에 호텔 8~10개 정렬
- **모서리 성향**: Sharp (2~4px) — 표·티켓 같은 산업적 톤
- **평면성**: Flat — 그림자 거의 없음, 컬러 배지로만 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Agoda Red (가격 강조) */
  --color-primary-50:  #FEEAE8;
  --color-primary-100: #FCC6C1;
  --color-primary-200: #F89A91;
  --color-primary-300: #F46E61;
  --color-primary-400: #ED4838;
  --color-primary-500: #E2231A;   /* Agoda Red */
  --color-primary-600: #C81A12;
  --color-primary-700: #A0140E;
  --color-primary-800: #780F0A;
  --color-primary-900: #500A07;

  /* Secondary - Agoda Blue (헤더/링크) */
  --color-secondary-500: #5392F9;

  /* Tertiary - Deal Yellow (시크릿 딜 강조 테두리) */
  --color-tertiary-500: #FFB400;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F6;
  --color-neutral-200:  #E0E0E0;
  --color-neutral-300:  #C2C2C7;
  --color-neutral-500:  #6E6E73;
  --color-neutral-700:  #3A3A3D;
  --color-neutral-800:  #212121;
  --color-neutral-900:  #121212;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E5F5E6;
  --color-success-fg: #1F8A24;     /* 평점 8.0+ 그린 */
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #B07A00;
  --color-error-bg:   #FEE2E0;
  --color-error-fg:   #C81A12;
  --color-info-bg:    #E5EFFE;
  --color-info-fg:    #1F61CB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(33,33,33,0.55);

  /* Text */
  --text-primary:    #212121;
  --text-secondary:  #3A3A3D;
  --text-tertiary:   #6E6E73;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C2C2C7;

  /* Border */
  --border-default: #E0E0E0;
  --border-subtle:  #F4F4F6;
  --border-strong:  #C2C2C7;
  --border-focus:   #5392F9;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Helvetica Neue / Arial 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 800 / 1.15 / -0.01em
  - H1: 24px / 700 / 1.2 / 0
  - H2: 20px / 700 / 1.25 / 0
  - H3: 16px / 700 / 1.35 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 400 / 1.4 / 0
  - Price: 20px / 900 / 1 / -0.01em (color:red)
  - Caption: 11px / 600 / 1.3 / 0.01em

### ⑤ 스페이싱
- **Base unit**: 4px (Compact 톤)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 14px;
  --space-xl: 20px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```
- **Container**: max-width 1140px, 좌우 패딩 12px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;     /* 배지 */
--radius-md: 4px;     /* 카드, 입력 — Agoda 시그니처 */
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 2px 6px rgba(0,0,0,0.08);    /* 카드 hover (미세) */
--shadow-lg: 0 6px 16px rgba(0,0,0,0.12);   /* 모달 */
--shadow-xl: 0 12px 28px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- **스타일**: Filled 작은 픽토그램 + Outline 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Square (industrial)
- **추천 라이브러리**: Tabler / Material Symbols

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'Helvetica Neue', 'Pretendard', Arial, sans-serif;
       border-radius: var(--radius-md); padding: 10px 16px; height: 38px; border: 0;
       display: inline-flex; align-items: center; gap: 4px; cursor: pointer;
       transition: background 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-secondary { background: var(--color-secondary-500); color: #fff; }
.btn-secondary:hover { background: #3A77E5; }
.btn-outline { background: #fff; color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); padding: 10px 8px; }
.btn-danger { background: var(--color-primary-600); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-default);
         border-radius: var(--radius-md); padding: 8px 10px; height: 36px;
         font: 400 13px/1.4 inherit; color: var(--text-primary); }
.input:focus { outline: none; border-color: var(--color-secondary-500); box-shadow: 0 0 0 2px rgba(83,146,249,0.20); }
.input[aria-invalid="true"] { border-color: var(--color-primary-500); }
```

**Card (Hotel result)**
```css
.hotel-card { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 12px; display: grid; grid-template-columns: 120px 1fr 140px; gap: 12px; }
.hotel-card:hover { background: var(--bg-subtle); }
.hotel-card .thumb { width: 120px; height: 100px; border-radius: var(--radius-sm); background: var(--color-neutral-100); }
.hotel-card .name { font: 700 14px/1.3 inherit; color: var(--text-primary); margin: 0 0 2px; }
.hotel-card .stars { color: var(--color-tertiary-500); font-size: 11px; }
.hotel-card .review-block { display: inline-flex; align-items: center; gap: 6px; }
.hotel-card .score { background: var(--color-success-fg); color: #fff; font: 700 12px/1 inherit; padding: 4px 6px; border-radius: var(--radius-sm); }
.hotel-card .price-block { text-align: right; }
.hotel-card .strike { font: 400 11px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; }
.hotel-card .price { font: 900 20px/1 inherit; color: var(--color-primary-500); }
.hotel-card .price-note { font: 400 10px/1.3 inherit; color: var(--text-tertiary); }
.hotel-card .secret { border: 2px solid var(--color-tertiary-500); background: #FFFCF0; padding-top: 14px; position: relative; }
.hotel-card .secret::before { content:"SECRET DEAL"; position: absolute; top: -9px; left: 12px; background: var(--color-primary-500); color: #fff; font: 700 10px/1 inherit; letter-spacing: 0.04em; padding: 3px 6px; border-radius: var(--radius-sm); }
```

**Badge**
```css
.badge { font: 700 10px/1 inherit; letter-spacing: 0.02em; padding: 3px 6px; border-radius: var(--radius-sm); display: inline-block; }
.badge-discount { background: var(--color-primary-50); color: var(--color-primary-600); }
.badge-deal     { background: var(--color-tertiary-500); color: var(--text-primary); }
.badge-score    { background: var(--color-success-fg); color: #fff; padding: 4px 6px; font-weight: 700; font-size: 12px; }
.badge-outline  { background: #fff; border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top)**
```css
.topnav { height: 56px; background: var(--color-secondary-500); color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 24px; }
.topnav .logo { font: 900 22px/1 inherit; letter-spacing: -0.02em; }
.topnav a { color: #fff; font: 600 13px/1 inherit; opacity: 0.9; text-decoration: none; }
.topnav .right { margin-left: auto; display: flex; gap: 14px; font: 500 12px/1 inherit; opacity: 0.95; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 가격 텍스트를 검정으로 표기 금지 — Agoda는 모든 가격이 빨강(#E2231A)
2. 카드 모서리 8px 이상 라운드 금지 — 4px 이하 Sharp가 정보형 톤 유지
3. 호텔 카드에 큰 그림자 사용 금지 — Flat 톤 유지
4. SECRET DEAL 배지를 다른 컬러로 변경 금지 — 노란 테두리 + 빨강 라벨이 시그니처
5. 결과 페이지에 큰 여백 두기 금지 — Compact 밀도가 가격 비교 신뢰감의 핵심

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: 'Helvetica Neue', 'Pretendard', Arial, sans-serif; color: #212121; background: #FAFAFA; }
  .topnav { height: 56px; background: #5392F9; color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 28px; }
  .topnav .logo { font: 900 26px/1 inherit; letter-spacing: -0.02em; }
  .topnav a { color: #fff; font: 600 13px/1 inherit; opacity: 0.92; text-decoration: none; }
  .topnav .right { margin-left: auto; display: flex; gap: 16px; font: 500 12px/1 inherit; }
  .searchbar { background: #FFB400; padding: 16px 20px; }
  .searchbar .row { max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 8px; }
  .field { background: #fff; border: 1px solid #E0E0E0; border-radius: 4px; padding: 10px 12px; }
  .field .lbl { font: 700 10px/1 inherit; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px; }
  .field .val { font: 700 14px/1.3 inherit; color: #212121; }
  .btn-go { background: #E2231A; color: #fff; border: 0; border-radius: 4px; padding: 0 24px; font: 700 15px/1 inherit; cursor: pointer; }
  .results { max-width: 1140px; margin: 24px auto; padding: 0 12px; display: flex; flex-direction: column; gap: 8px; }
  .card { background: #fff; border: 1px solid #E0E0E0; border-radius: 4px; padding: 14px; display: grid; grid-template-columns: 140px 1fr 160px; gap: 14px; align-items: center; }
  .card:hover { background: #FAFAFA; }
  .card .thumb { width: 140px; height: 110px; border-radius: 2px; background: linear-gradient(135deg,#E0E0E0,#C2C2C7); }
  .card .name { font: 700 15px/1.3 inherit; margin: 0 0 4px; }
  .card .stars { color: #FFB400; font-size: 11px; letter-spacing: 0.05em; }
  .card .review { display: inline-flex; align-items: center; gap: 6px; margin-top: 6px; }
  .card .score { background: #1F8A24; color: #fff; font: 800 12px/1 inherit; padding: 4px 6px; border-radius: 2px; }
  .card .score-label { font: 700 12px/1 inherit; color: #1F8A24; }
  .card .count { font: 400 11px/1 inherit; color: #6E6E73; }
  .card .meta { font: 400 12px/1.4 inherit; color: #6E6E73; margin-top: 6px; }
  .card .badges { display: flex; gap: 4px; margin-top: 6px; flex-wrap: wrap; }
  .b-discount { background: #FEEAE8; color: #C81A12; font: 700 10px/1 inherit; padding: 3px 6px; border-radius: 2px; }
  .b-breakfast { background: #E5EFFE; color: #1F61CB; font: 700 10px/1 inherit; padding: 3px 6px; border-radius: 2px; }
  .price-block { text-align: right; }
  .price-block .strike { font: 400 12px/1 inherit; color: #9E9E9E; text-decoration: line-through; }
  .price-block .price { font: 900 22px/1 inherit; color: #E2231A; margin-top: 2px; }
  .price-block .note { font: 400 10px/1.3 inherit; color: #6E6E73; margin-top: 4px; }
  .card.secret { border: 2px solid #FFB400; background: #FFFCF0; position: relative; }
  .card.secret::before { content:"SECRET DEAL"; position: absolute; top: -10px; left: 14px; background: #E2231A; color: #fff; font: 700 10px/1 inherit; letter-spacing: 0.06em; padding: 4px 8px; border-radius: 2px; }
</style>

<header class="topnav">
  <span class="logo">agoda</span>
  <a>호텔</a><a>홈/아파트</a><a>항공</a><a>액티비티</a>
  <span class="right"><span>KRW</span><span>한국어</span><span>로그인</span></span>
</header>

<section class="searchbar">
  <div class="row">
    <div class="field"><div class="lbl">목적지</div><div class="val">도쿄, 일본</div></div>
    <div class="field"><div class="lbl">체크인/아웃</div><div class="val">6/12 → 6/16</div></div>
    <div class="field"><div class="lbl">객실 & 인원</div><div class="val">객실 1 · 성인 2</div></div>
    <button class="btn-go">검색</button>
  </div>
</section>

<section class="results">
  <div class="card secret">
    <div class="thumb"></div>
    <div>
      <h3 class="name">시부야 그랜벨 호텔</h3>
      <div class="stars">★★★★</div>
      <div class="review"><span class="score">8.6</span><span class="score-label">매우 좋음</span><span class="count">· 후기 2,134개</span></div>
      <div class="meta">시부야역 도보 4분 · 무료 Wi-Fi · 조식 포함</div>
      <div class="badges"><span class="b-discount">-34%</span><span class="b-breakfast">조식 포함</span></div>
    </div>
    <div class="price-block">
      <div class="strike">₩148,000</div>
      <div class="price">₩98,000</div>
      <div class="note">1박, 세금 포함</div>
    </div>
  </div>
  <div class="card">
    <div class="thumb" style="background:linear-gradient(135deg,#C2C2C7,#6E6E73)"></div>
    <div>
      <h3 class="name">신주쿠 워싱턴 호텔</h3>
      <div class="stars">★★★</div>
      <div class="review"><span class="score">8.1</span><span class="score-label">좋음</span><span class="count">· 후기 5,021개</span></div>
      <div class="meta">신주쿠역 도보 6분 · 무료 Wi-Fi</div>
      <div class="badges"><span class="b-discount">-28%</span></div>
    </div>
    <div class="price-block">
      <div class="strike">₩99,000</div>
      <div class="price">₩72,000</div>
      <div class="note">1박, 세금 포함</div>
    </div>
  </div>
  <div class="card">
    <div class="thumb" style="background:linear-gradient(135deg,#E0E0E0,#9E9E9E)"></div>
    <div>
      <h3 class="name">아사쿠사 뷰 호텔</h3>
      <div class="stars">★★★★</div>
      <div class="review"><span class="score">8.9</span><span class="score-label">훌륭함</span><span class="count">· 후기 3,840개</span></div>
      <div class="meta">아사쿠사역 도보 3분 · 스카이트리 뷰</div>
      <div class="badges"><span class="b-discount">-19%</span></div>
    </div>
    <div class="price-block">
      <div class="strike">₩162,000</div>
      <div class="price">₩131,000</div>
      <div class="note">1박, 세금 포함</div>
    </div>
  </div>
</section>
```
