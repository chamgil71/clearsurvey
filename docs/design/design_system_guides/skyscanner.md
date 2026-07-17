---
brand: Skyscanner
brand_ko: 스카이스캐너
slug: skyscanner
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - mobility
  - ecommerce

color_tone: cool
primary_color_hex: "#0770E3"
primary_color_name: "Skyscanner Blue"
mood:
  - 명료
  - 비교
  - 자유

font_category: sans-serif
font_primary: Relative
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2003
last_major_revision: 2023
signature_keyword: "스카이블루 비행기와 월별 최저가 캘린더의 항공권 비교 톤"

hero_html: |
  <div style="font-family:-apple-system,'Relative','Pretendard','Segoe UI',sans-serif;background:linear-gradient(180deg,#0770E3 0%,#0962C7 100%);color:#fff;height:100%;display:grid;grid-template-rows:auto auto 1fr;position:relative;overflow:hidden;">
    <div style="padding:12px 14px;display:flex;align-items:center;gap:6px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3.5 13.5l4 2 13-11-9 14-3.5-2-4 0z" fill="#fff"/></svg>
      <span style="font-weight:700;font-size:14px;letter-spacing:-0.01em;">Skyscanner</span>
    </div>
    <div style="padding:0 14px;">
      <h2 style="margin:0;font-size:18px;font-weight:700;line-height:1.2;letter-spacing:-0.01em;">월별 최저가로<br/>가장 싼 날에 떠나기.</h2>
    </div>
    <div style="padding:10px 14px 14px;display:flex;flex-direction:column;justify-content:end;">
      <div style="background:#fff;color:#111236;border-radius:10px;padding:8px;box-shadow:0 6px 16px rgba(0,0,0,0.15);">
        <div style="font-size:9px;color:#6B6E8B;margin-bottom:4px;font-weight:600;">ICN → NRT · 6월</div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;font-size:8px;font-weight:600;">
          <div style="text-align:center;color:#6B6E8B;">월</div>
          <div style="text-align:center;color:#6B6E8B;">화</div>
          <div style="text-align:center;color:#6B6E8B;">수</div>
          <div style="text-align:center;color:#6B6E8B;">목</div>
          <div style="text-align:center;color:#6B6E8B;">금</div>
          <div style="text-align:center;color:#6B6E8B;">토</div>
          <div style="text-align:center;color:#6B6E8B;">일</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-top:2px;font-size:8px;font-weight:700;">
          <div style="background:#FFF3D2;color:#B07A00;padding:4px 0;border-radius:3px;text-align:center;">₩142K</div>
          <div style="background:#E5F5E6;color:#1F8A24;padding:4px 0;border-radius:3px;text-align:center;">₩98K</div>
          <div style="background:#E5F5E6;color:#1F8A24;padding:4px 0;border-radius:3px;text-align:center;">₩102K</div>
          <div style="background:#FFF3D2;color:#B07A00;padding:4px 0;border-radius:3px;text-align:center;">₩138K</div>
          <div style="background:#FEE2E0;color:#C81A12;padding:4px 0;border-radius:3px;text-align:center;">₩188K</div>
          <div style="background:#FEE2E0;color:#C81A12;padding:4px 0;border-radius:3px;text-align:center;">₩212K</div>
          <div style="background:#FFF3D2;color:#B07A00;padding:4px 0;border-radius:3px;text-align:center;">₩148K</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.skyscanner.net/
  - https://www.skyscanner.net/about-us
---

### ① 브랜드 DNA
- **브랜드명**: Skyscanner
- **한 줄 정체성**: 전 세계 1,200+ 항공사·OTA를 한 번에 비교해 최저가 항공권을 찾아주는 메타서치 엔진
- **공식 디자인 철학**: "Find. Compare. Book." — 항공·호텔·렌터카를 가장 명료하게 비교
- **시그니처 요소 1개**: 스카이블루(#0770E3) 비행기 트레이스 로고 + 월별 가격 캘린더(녹/노/빨 3단계 컬러로 가격 분포 즉시 인지) + "최저가는 어디로?" 발견 모드

### ② 톤 & 무드
- **핵심 키워드 3개**: 명료, 비교, 자유
- **무드 설명**: 밝은 스카이블루가 헤더와 CTA를 잡고, 본문은 차분한 다크 인디고. 가격 표는 신호등 컬러(녹→노→빨)로 즉각 해석 가능. 사진보다 데이터·그래프 우선.
- **비주얼 스타일**: 모던 미니멀 (Data-focused)
- **밀도(Density)**: Comfortable — 가격 비교 표가 빽빽하지만 행 간격이 명확
- **모서리 성향**: Soft (8~12px)
- **평면성**: Subtle — 카드에 옅은 그림자, 가격 캘린더는 평면

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Skyscanner Blue */
  --color-primary-50:  #E7F1FD;
  --color-primary-100: #C0DBFB;
  --color-primary-200: #8FBDF7;
  --color-primary-300: #5C9FF3;
  --color-primary-400: #2C87EE;
  --color-primary-500: #0770E3;   /* Skyscanner Blue */
  --color-primary-600: #0962C7;
  --color-primary-700: #0950A4;
  --color-primary-800: #073E80;
  --color-primary-900: #042A57;

  /* Secondary - Deep indigo (본문) */
  --color-secondary-500: #111236;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F8FB;
  --color-neutral-100:  #EEF0F5;
  --color-neutral-200:  #DDE0EA;
  --color-neutral-300:  #BFC4D3;
  --color-neutral-500:  #6B6E8B;
  --color-neutral-700:  #3A3D5C;
  --color-neutral-800:  #1E2040;
  --color-neutral-900:  #111236;
  --color-neutral-1000: #08092A;

  /* Semantic - 가격 캘린더 신호등 */
  --color-success-bg: #E5F5E6;
  --color-success-fg: #1F8A24;     /* 최저가 (녹) */
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #B07A00;     /* 중간가 (노) */
  --color-error-bg:   #FEE2E0;
  --color-error-fg:   #C81A12;     /* 최고가 (빨) */
  --color-info-bg:    #E7F1FD;
  --color-info-fg:    #0770E3;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F8FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(17,18,54,0.55);

  /* Text */
  --text-primary:    #111236;
  --text-secondary:  #3A3D5C;
  --text-tertiary:   #6B6E8B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #BFC4D3;

  /* Border */
  --border-default: #DDE0EA;
  --border-subtle:  #EEF0F5;
  --border-strong:  #BFC4D3;
  --border-focus:   #0770E3;
}

[data-theme="dark"] {
  --bg-base:     #08092A;
  --bg-subtle:   #111236;
  --bg-elevated: #1E2040;
  --text-primary: #FFFFFF;
  --text-secondary: #C0DBFB;
  --border-default: #1E2040;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Relative (Skyscanner 자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 가격(숫자): tabular-nums 필수
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 24px / 700 / 1.25 / -0.01em
  - H3: 18px / 700 / 1.35 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 13px / 400 / 1.4 / 0
  - Price: 22px / 700 / 1 / -0.01em tabular
  - Caption: 12px / 600 / 1.3 / 0.01em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 40px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1160px, 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;     /* 캘린더 셀 */
--radius-md: 8px;     /* 입력, 카드 작은 요소 */
--radius-lg: 12px;    /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px;  /* 칩, 배지 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(17,18,54,0.06);
--shadow-md: 0 4px 12px rgba(17,18,54,0.08);     /* 가격 카드 */
--shadow-lg: 0 12px 24px rgba(17,18,54,0.14);    /* 드롭다운 */
--shadow-xl: 0 24px 48px rgba(17,18,54,0.20);    /* 모달 */
```

### ⑧ Iconography
- **스타일**: Outline (1.75px) + Filled 픽토그램 작은 사이즈
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor (Skyscanner 자체 셋 존재)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 15px/1 'Relative', Inter, 'Pretendard', sans-serif;
       border-radius: var(--radius-md); padding: 12px 22px; height: 48px; border: 0;
       display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
       transition: background 150ms ease, box-shadow 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); box-shadow: 0 4px 10px rgba(7,112,227,0.25); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { transform: translateY(1px); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); box-shadow: none; }
.btn-secondary { background: #fff; color: var(--text-primary); border: 2px solid var(--color-primary-500); padding: 10px 20px; }
.btn-secondary:hover { background: var(--color-primary-50); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-primary-50); }
```

**Input (Search field)**
```css
.input { background: #fff; border: 1px solid var(--border-default);
         border-radius: var(--radius-md); padding: 12px 14px; height: 52px;
         font: 500 15px/1.4 inherit; color: var(--text-primary); display: flex; align-items: center; gap: 10px; }
.input .label { font: 600 12px/1 inherit; color: var(--text-tertiary); margin-bottom: 2px; }
.input:focus-within { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(7,112,227,0.15); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card (Flight result)**
```css
.flight-card { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; display: grid; grid-template-columns: 1fr 1fr 140px; gap: 16px; align-items: center; transition: box-shadow 200ms ease; }
.flight-card:hover { box-shadow: var(--shadow-md); }
.flight-card .leg { display: flex; align-items: center; gap: 12px; }
.flight-card .airline { width: 28px; height: 28px; border-radius: var(--radius-sm); background: var(--color-neutral-100); }
.flight-card .time { font: 700 18px/1 inherit; font-variant-numeric: tabular-nums; color: var(--text-primary); }
.flight-card .route-line { flex: 1; height: 1px; background: var(--border-strong); position: relative; }
.flight-card .route-line::after { content:"→"; position: absolute; top: -10px; left: 50%; transform: translateX(-50%); font-size: 14px; color: var(--text-tertiary); background: #fff; padding: 0 4px; }
.flight-card .stops { font: 600 12px/1.3 inherit; color: var(--text-tertiary); text-align: center; }
.flight-card .price-block { text-align: right; }
.flight-card .price { font: 700 24px/1 inherit; font-variant-numeric: tabular-nums; color: var(--text-primary); }
.flight-card .cta { background: var(--color-primary-500); color: #fff; border: 0; padding: 8px 14px; border-radius: var(--radius-md); font: 700 13px/1 inherit; margin-top: 8px; cursor: pointer; }
```

**Badge (Price calendar cell)**
```css
.cal-cell { padding: 8px 4px; border-radius: var(--radius-sm); text-align: center; font: 700 12px/1.2 inherit; font-variant-numeric: tabular-nums; cursor: pointer; }
.cal-cell.low  { background: var(--color-success-bg); color: var(--color-success-fg); }
.cal-cell.mid  { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.cal-cell.high { background: var(--color-error-bg);   color: var(--color-error-fg); }
.cal-cell.selected { outline: 2px solid var(--color-primary-500); outline-offset: -2px; }

.badge { padding: 4px 10px; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.02em; display: inline-flex; gap: 4px; align-items: center; }
.badge-cheapest { background: var(--color-success-bg); color: var(--color-success-fg); }
.badge-fastest  { background: var(--color-info-bg); color: var(--color-info-fg); }
.badge-best     { background: var(--color-primary-500); color: #fff; }
```

**Navigation (Top)**
```css
.topnav { height: 64px; background: #fff; border-bottom: 1px solid var(--border-default); display: flex; align-items: center; padding: 0 20px; gap: 28px; }
.topnav .logo { display: inline-flex; align-items: center; gap: 8px; font: 700 22px/1 inherit; color: var(--color-primary-500); }
.topnav .logo svg { fill: var(--color-primary-500); }
.topnav a { color: var(--text-primary); font: 600 14px/1 inherit; text-decoration: none; }
.topnav a:hover { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 가격 캘린더에 단일 색 사용 금지 — 녹/노/빨 3단계 신호등이 시그니처
2. 항공권 비교에 사진 큰 히어로 사용 금지 — Skyscanner는 데이터·그래프 우선
3. 본문 텍스트에 스카이블루 사용 금지 — CTA·링크·로고 한정
4. 가격 숫자에 proportional 폰트 사용 금지 — tabular-nums 필수
5. 카드 모서리 16px 이상 라운드 금지 — Soft 8~12px 유지 (정보 톤)

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: 'Relative', Inter, 'Pretendard', -apple-system, sans-serif; color: #111236; background: #F7F8FB; }
  .topnav { height: 64px; background: #fff; border-bottom: 1px solid #DDE0EA; display: flex; align-items: center; padding: 0 24px; gap: 28px; }
  .topnav .logo { display: inline-flex; align-items: center; gap: 8px; font: 700 22px/1 inherit; color: #0770E3; }
  .topnav a { color: #111236; font: 600 14px/1 inherit; text-decoration: none; }
  .topnav a:hover { color: #0770E3; }
  .hero { background: linear-gradient(180deg, #0770E3 0%, #0962C7 100%); color: #fff; padding: 56px 24px 32px; }
  .hero-inner { max-width: 1160px; margin: 0 auto; }
  .hero h1 { font: 700 44px/1.1 inherit; letter-spacing: -0.02em; margin: 0 0 8px; }
  .hero p { font: 400 17px/1.5 inherit; color: rgba(255,255,255,0.85); margin: 0 0 24px; }
  .searchbar { background: #fff; color: #111236; border-radius: 12px; padding: 12px; box-shadow: 0 12px 32px rgba(17,18,54,0.20); display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr auto; gap: 8px; align-items: stretch; }
  .field { border: 1px solid #DDE0EA; border-radius: 8px; padding: 8px 12px; display: flex; flex-direction: column; gap: 2px; }
  .field .lbl { font: 600 11px/1 inherit; color: #6B6E8B; }
  .field .val { font: 700 15px/1.3 inherit; }
  .btn-go { background: #0770E3; color: #fff; border: 0; border-radius: 8px; padding: 0 28px; font: 700 15px/1 inherit; cursor: pointer; box-shadow: 0 4px 10px rgba(7,112,227,0.30); }
  .features { max-width: 1160px; margin: 32px auto 64px; padding: 0 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .cal-card { background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(17,18,54,0.06); }
  .cal-card h3 { font: 700 16px/1.3 inherit; margin: 0 0 4px; }
  .cal-card .sub { font: 500 12px/1.4 inherit; color: #6B6E8B; margin-bottom: 12px; }
  .cal-grid { display: grid; grid-template-columns: repeat(7,1fr); gap: 4px; }
  .cal-grid .dow { text-align: center; font: 700 11px/1.4 inherit; color: #6B6E8B; padding: 4px 0; }
  .cell { padding: 10px 4px; border-radius: 4px; text-align: center; font: 700 12px/1.3 inherit; font-variant-numeric: tabular-nums; cursor: pointer; }
  .cell .d { display: block; font-size: 11px; font-weight: 500; color: #6B6E8B; }
  .cell.low  { background: #E5F5E6; color: #1F8A24; }
  .cell.mid  { background: #FFF3D2; color: #B07A00; }
  .cell.high { background: #FEE2E0; color: #C81A12; }
  .cell.sel  { outline: 2px solid #0770E3; outline-offset: -2px; }
  .flight-list { display: flex; flex-direction: column; gap: 8px; }
  .fcard { background: #fff; border: 1px solid #DDE0EA; border-radius: 12px; padding: 14px 16px; display: grid; grid-template-columns: 1fr auto; gap: 14px; align-items: center; }
  .fcard:hover { box-shadow: 0 4px 12px rgba(17,18,54,0.08); }
  .leg { display: flex; align-items: center; gap: 12px; }
  .airline { width: 28px; height: 28px; border-radius: 4px; background: linear-gradient(135deg,#5C9FF3,#0770E3); }
  .leg-times { display: flex; align-items: center; gap: 8px; }
  .time { font: 700 17px/1 inherit; font-variant-numeric: tabular-nums; }
  .arrow { color: #BFC4D3; }
  .stops { font: 600 11px/1.3 inherit; color: #6B6E8B; margin-left: 8px; }
  .pblock { text-align: right; }
  .price { font: 700 22px/1 inherit; font-variant-numeric: tabular-nums; }
  .badge-c { background: #E5F5E6; color: #1F8A24; font: 700 10px/1.3 inherit; padding: 3px 7px; border-radius: 9999px; display: inline-block; margin-bottom: 4px; }
</style>

<header class="topnav">
  <span class="logo">
    <svg width="22" height="22" viewBox="0 0 24 24"><path d="M3.5 13.5l4 2 13-11-9 14-3.5-2-4 0z"/></svg>
    Skyscanner
  </span>
  <a>항공권</a><a>호텔</a><a>렌터카</a><a>최저가 발견</a>
  <span style="margin-left:auto;font:600 13px/1 inherit;">KRW · 한국어</span>
</header>

<section class="hero">
  <div class="hero-inner">
    <h1>월별 최저가로<br/>가장 싼 날에 떠나기.</h1>
    <p>1,200+ 항공사·여행사를 한 번에 비교하세요.</p>
    <div class="searchbar">
      <div class="field"><span class="lbl">출발/도착</span><span class="val">ICN → NRT</span></div>
      <div class="field"><span class="lbl">출발일</span><span class="val">6/12 (수)</span></div>
      <div class="field"><span class="lbl">도착일</span><span class="val">6/16 (일)</span></div>
      <div class="field"><span class="lbl">승객 · 좌석</span><span class="val">성인 1 · 이코노미</span></div>
      <button class="btn-go">검색</button>
    </div>
  </div>
</section>

<div class="features">
  <div class="cal-card">
    <h3>6월 ICN → NRT 최저가</h3>
    <div class="sub">색상이 진할수록 비쌉니다. 가장 싼 날을 골라보세요.</div>
    <div class="cal-grid">
      <span class="dow">월</span><span class="dow">화</span><span class="dow">수</span><span class="dow">목</span><span class="dow">금</span><span class="dow">토</span><span class="dow">일</span>
      <div class="cell mid">₩142K<span class="d">9</span></div>
      <div class="cell low">₩98K<span class="d">10</span></div>
      <div class="cell low sel">₩102K<span class="d">11</span></div>
      <div class="cell low">₩104K<span class="d">12</span></div>
      <div class="cell mid">₩138K<span class="d">13</span></div>
      <div class="cell high">₩188K<span class="d">14</span></div>
      <div class="cell high">₩212K<span class="d">15</span></div>
      <div class="cell mid">₩148K<span class="d">16</span></div>
      <div class="cell low">₩99K<span class="d">17</span></div>
      <div class="cell low">₩97K<span class="d">18</span></div>
      <div class="cell mid">₩132K<span class="d">19</span></div>
      <div class="cell high">₩192K<span class="d">20</span></div>
      <div class="cell high">₩232K<span class="d">21</span></div>
      <div class="cell mid">₩158K<span class="d">22</span></div>
    </div>
  </div>
  <div class="flight-list">
    <div class="fcard">
      <div class="leg">
        <div class="airline" style="background:linear-gradient(135deg,#5C9FF3,#0770E3)"></div>
        <div class="leg-times">
          <span class="time">09:15</span><span class="arrow">→</span><span class="time">11:35</span>
          <span class="stops">직항 · 2h 20m</span>
        </div>
      </div>
      <div class="pblock"><span class="badge-c">최저가</span><div class="price">₩98,200</div></div>
    </div>
    <div class="fcard">
      <div class="leg">
        <div class="airline" style="background:linear-gradient(135deg,#0962C7,#042A57)"></div>
        <div class="leg-times">
          <span class="time">14:40</span><span class="arrow">→</span><span class="time">17:05</span>
          <span class="stops">직항 · 2h 25m</span>
        </div>
      </div>
      <div class="pblock"><div class="price">₩104,800</div></div>
    </div>
    <div class="fcard">
      <div class="leg">
        <div class="airline" style="background:linear-gradient(135deg,#8FBDF7,#0770E3)"></div>
        <div class="leg-times">
          <span class="time">20:30</span><span class="arrow">→</span><span class="time">06:10</span>
          <span class="stops">1회 경유 · 9h 40m</span>
        </div>
      </div>
      <div class="pblock"><div class="price">₩86,400</div></div>
    </div>
  </div>
</div>
```
