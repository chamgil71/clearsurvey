---
brand: Expedia
brand_ko: 익스피디아
slug: expedia
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - mobility
  - ecommerce

color_tone: warm
primary_color_hex: "#FFC72C"
primary_color_name: "Expedia Yellow"
mood:
  - 활기
  - 통합
  - 신뢰

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: pill
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1996
last_major_revision: 2022
signature_keyword: "옐로 트래블 캡슐과 항공+호텔 통합 검색바의 미국 OTA 톤"

hero_html: |
  <div style="font-family:Inter,-apple-system,'Pretendard','Segoe UI',sans-serif;background:linear-gradient(180deg,#FFF8E1 0%,#FFFCF0 100%);height:100%;display:grid;grid-template-rows:auto 1fr;position:relative;overflow:hidden;">
    <div style="padding:12px 16px;display:flex;align-items:center;gap:6px;">
      <div style="width:22px;height:22px;border-radius:9999px;background:#FFC72C;display:grid;place-items:center;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 16l9-13 9 13M3 16l4-2 4 4 4-3 5 1" stroke="#191E3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <span style="font-weight:700;font-size:15px;letter-spacing:-0.01em;color:#191E3B;">Expedia</span>
    </div>
    <div style="padding:0 14px 14px;display:flex;flex-direction:column;justify-content:center;gap:10px;">
      <h2 style="margin:0;font-size:18px;font-weight:700;line-height:1.2;color:#191E3B;letter-spacing:-0.01em;">한 번에 묶으면<br/>더 저렴한 여행.</h2>
      <div style="background:#fff;border:1px solid #E6E6E6;border-radius:14px;padding:8px;box-shadow:0 4px 12px rgba(0,0,0,0.05);font-size:10px;">
        <div style="display:flex;gap:4px;margin-bottom:6px;">
          <span style="padding:3px 8px;border-radius:9999px;background:#191E3B;color:#fff;font-weight:600;">항공+숙소</span>
          <span style="padding:3px 8px;border-radius:9999px;color:#191E3B;font-weight:500;">항공</span>
          <span style="padding:3px 8px;border-radius:9999px;color:#191E3B;font-weight:500;">숙소</span>
        </div>
        <div style="border:1px solid #E6E6E6;border-radius:8px;padding:6px 8px;color:#5C5C5C;display:flex;align-items:center;gap:6px;">
          <span style="color:#191E3B;">✈</span> ICN → NRT
        </div>
        <button style="margin-top:6px;width:100%;background:#FFC72C;color:#191E3B;border:0;border-radius:9999px;padding:8px;font-weight:700;font-size:11px;font-family:inherit;cursor:pointer;">검색하기</button>
      </div>
    </div>
  </div>

sources:
  - https://www.expedia.com/
  - https://www.expediagroup.com/our-brands/expedia
  - https://www.expedia.com/p/info-other/legal/brand
---

### ① 브랜드 DNA
- **브랜드명**: Expedia
- **한 줄 정체성**: 항공·호텔·렌터카·액티비티를 한 번에 묶어 할인을 제공하는 미국 1세대 OTA
- **공식 디자인 철학**: "Travel Yourself Interesting" — 여행자가 더 자유롭게 결정할 수 있도록 묶음·비교·리워드 제공
- **시그니처 요소 1개**: 옐로(#FFC72C) 비행기 트레이스 캡슐 로고 + 네이비(#191E3B) 본문 + Bundle & Save(항공+숙소) 탭이 항상 첫 자리에 있는 통합 검색바

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기, 통합, 신뢰
- **무드 설명**: 따뜻한 옐로가 검색·결제의 주요 CTA를 잡아주고, 본문은 차분한 네이비. 카드 모서리는 둥글지만 버튼은 풀필. 호텔/항공 검색 결과 카드가 빽빽하게 정보를 담는다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 결과 페이지에 가격·등급·리뷰가 한 행에 모두 노출
- **모서리 성향**: Pill (버튼·탭) + 카드 12px Soft 혼합 → 단일 값으로는 Pill
- **평면성**: Subtle — 카드에 옅은 그림자, 옐로 CTA는 평면

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Expedia Yellow */
  --color-primary-50:  #FFFCF0;
  --color-primary-100: #FFF8D6;
  --color-primary-200: #FFEFA3;
  --color-primary-300: #FFE470;
  --color-primary-400: #FFD64A;
  --color-primary-500: #FFC72C;   /* Expedia Yellow */
  --color-primary-600: #E5AD0B;
  --color-primary-700: #B88800;
  --color-primary-800: #8A6500;
  --color-primary-900: #5C4300;

  /* Secondary - Expedia Navy (본문/헤더) */
  --color-secondary-500: #191E3B;

  /* Neutral - Cool gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F8FA;
  --color-neutral-100:  #EEF0F3;
  --color-neutral-200:  #DDE0E5;
  --color-neutral-300:  #C5C9D0;
  --color-neutral-500:  #6D7280;
  --color-neutral-700:  #3F4350;
  --color-neutral-800:  #2A2E3F;
  --color-neutral-900:  #191E3B;     /* 본문 텍스트/헤더 */
  --color-neutral-1000: #0B0E1F;

  /* Semantic */
  --color-success-bg: #E3F4E0;
  --color-success-fg: #1A7F37;     /* "Great deal" 그린 */
  --color-warning-bg: #FFF1D6;
  --color-warning-fg: #B45A00;     /* "Almost sold out" 오렌지 */
  --color-error-bg:   #FCE2E2;
  --color-error-fg:   #C8302C;
  --color-info-bg:    #E0EAF8;
  --color-info-fg:    #1E5BB4;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F8FA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,30,59,0.55);

  /* Text */
  --text-primary:    #191E3B;
  --text-secondary:  #3F4350;
  --text-tertiary:   #6D7280;
  --text-on-primary: #191E3B;        /* 옐로 위는 네이비 텍스트 */
  --text-disabled:   #C5C9D0;

  /* Border */
  --border-default: #DDE0E5;
  --border-subtle:  #EEF0F3;
  --border-strong:  #C5C9D0;
  --border-focus:   #191E3B;
}

[data-theme="dark"] {
  --bg-base:     #0B0E1F;
  --bg-subtle:   #191E3B;
  --bg-elevated: #1F2547;
  --text-primary: #FFFFFF;
  --text-secondary: #C5C9D0;
  --border-default: #2A2E3F;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) / Helvetica Neue 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 24px / 700 / 1.25 / -0.01em
  - H3: 18px / 700 / 1.35 / -0.005em
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 13px / 400 / 1.4 / 0
  - Price: 22px / 700 / 1 / -0.01em
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
- **Container**: max-width 1200px, 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;     /* 입력 */
--radius-lg: 12px;    /* 검색바, 카드 */
--radius-xl: 16px;    /* 검색바 컨테이너 */
--radius-full: 9999px;  /* 버튼, 탭, 배지 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(25,30,59,0.06);     /* 카드 */
--shadow-md: 0 4px 12px rgba(25,30,59,0.10);    /* 검색바 */
--shadow-lg: 0 12px 24px rgba(25,30,59,0.14);   /* 호버 */
--shadow-xl: 0 20px 40px rgba(25,30,59,0.18);   /* 모달 */
```

### ⑧ Iconography
- **스타일**: Outline (1.5~2px), 카테고리 아이콘은 Filled 작은 배지
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor (Expedia 내부 아이콘 셋 존재)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Inter, 'Pretendard', sans-serif; letter-spacing: 0;
       border-radius: 9999px; padding: 12px 22px; height: 44px; border: 0;
       display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
       transition: background 150ms ease, box-shadow 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); color: #fff; }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--text-primary); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
```

**Input (Search field)**
```css
.input { background: #fff; border: 1px solid var(--border-default);
         border-radius: var(--radius-lg); padding: 12px 14px; height: 56px;
         font: 400 14px/1.4 inherit; color: var(--text-primary); display: flex; align-items: center; gap: 10px; }
.input .label { font: 700 12px/1 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 2px; }
.input .value { font: 600 14px/1.3 inherit; color: var(--text-primary); }
.input:focus-within { border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(25,30,59,0.10); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card (Hotel/Flight result)**
```css
.result-card { background: #fff; border-radius: var(--radius-lg); border: 1px solid var(--border-default); padding: 16px; display: grid; grid-template-columns: 96px 1fr auto; gap: 16px; transition: box-shadow 200ms ease; }
.result-card:hover { box-shadow: var(--shadow-md); }
.result-card .thumb { width: 96px; height: 96px; border-radius: var(--radius-md); background: var(--color-neutral-100); }
.result-card .title { font: 700 16px/1.3 inherit; color: var(--text-primary); margin: 0 0 4px; }
.result-card .stars { color: var(--color-primary-500); font-size: 12px; letter-spacing: 0.05em; }
.result-card .price-block { text-align: right; display: flex; flex-direction: column; justify-content: space-between; }
.result-card .price { font: 700 22px/1 inherit; color: var(--text-primary); }
.result-card .price-note { font: 500 11px/1.3 inherit; color: var(--text-tertiary); }
```

**Badge**
```css
.badge { padding: 4px 10px; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.02em; display: inline-flex; gap: 4px; align-items: center; }
.badge-deal    { background: var(--color-success-bg); color: var(--color-success-fg); }
.badge-vip     { background: var(--color-secondary-500); color: var(--color-primary-500); }
.badge-hot     { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.badge-outline { background: #fff; border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top + Tab pill)**
```css
.topnav { height: 60px; background: var(--color-secondary-500); color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 28px; }
.topnav .logo { font: 700 22px/1 inherit; letter-spacing: -0.01em; display: inline-flex; align-items: center; gap: 6px; }
.topnav .logo .badge-y { width: 28px; height: 28px; background: var(--color-primary-500); border-radius: 9999px; }
.topnav a { color: #fff; font: 600 14px/1 inherit; text-decoration: none; opacity: 0.9; }
.tab-pill { display: inline-flex; padding: 4px; background: var(--bg-subtle); border-radius: 9999px; }
.tab-pill button { background: transparent; border: 0; padding: 8px 16px; border-radius: 9999px; font: 600 13px/1 inherit; color: var(--text-primary); cursor: pointer; }
.tab-pill button.active { background: var(--color-secondary-500); color: #fff; }
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
1. 옐로 배경 위에 흰 텍스트 사용 금지 — 항상 네이비(#191E3B) 텍스트
2. 검색 결과 카드에 그라데이션/포토필터 금지 — 호텔 사진 원본 그대로
3. CTA 버튼을 사각형(Sharp)으로 변경 금지 — Expedia는 풀필 pill 버튼이 시그니처
4. 본문에 옐로 텍스트 사용 금지 — 옐로는 CTA·배지·로고 한정
5. 검색바 첫 탭에 "Hotels"만 두기 금지 — 항상 Bundle(항공+숙소) 우선이 OTA 시그니처

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #191E3B; background: linear-gradient(180deg, #FFF8E1 0%, #FFFCF0 40%, #FFFFFF 100%); }
  .topnav { height: 60px; background: #191E3B; color: #fff; display: flex; align-items: center; padding: 0 24px; gap: 28px; }
  .topnav .logo { display: inline-flex; align-items: center; gap: 8px; font: 700 22px/1 inherit; }
  .topnav .logo .y { width: 30px; height: 30px; background: #FFC72C; border-radius: 9999px; display: grid; place-items: center; color: #191E3B; }
  .topnav a { color: #fff; font: 600 14px/1 inherit; opacity: 0.9; text-decoration: none; }
  .hero { padding: 56px 24px 24px; max-width: 1200px; margin: 0 auto; }
  .hero h1 { font: 700 44px/1.1 inherit; letter-spacing: -0.02em; margin: 0 0 12px; }
  .hero p { font: 400 17px/1.5 inherit; color: #3F4350; margin: 0 0 28px; }
  .searchbar { background: #fff; border-radius: 16px; padding: 16px; box-shadow: 0 8px 24px rgba(25,30,59,0.10); border: 1px solid #DDE0E5; }
  .tabs { display: inline-flex; gap: 4px; padding: 4px; background: #F7F8FA; border-radius: 9999px; margin-bottom: 12px; }
  .tabs button { background: transparent; border: 0; padding: 8px 14px; border-radius: 9999px; font: 600 13px/1 inherit; color: #191E3B; cursor: pointer; }
  .tabs button.active { background: #191E3B; color: #fff; }
  .search-fields { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 8px; }
  .field { border: 1px solid #DDE0E5; border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; gap: 2px; }
  .field .lbl { font: 700 11px/1 inherit; color: #6D7280; text-transform: uppercase; letter-spacing: 0.04em; }
  .field .val { font: 600 14px/1.3 inherit; color: #191E3B; }
  .btn-go { background: #FFC72C; color: #191E3B; border: 0; border-radius: 9999px; padding: 0 24px; font: 700 15px/1 inherit; cursor: pointer; }
  .features { max-width: 1200px; margin: 48px auto; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .card { background: #fff; border-radius: 12px; border: 1px solid #DDE0E5; padding: 16px; display: grid; grid-template-columns: 80px 1fr; gap: 14px; transition: box-shadow 200ms ease; }
  .card:hover { box-shadow: 0 8px 20px rgba(25,30,59,0.10); }
  .card .thumb { width: 80px; height: 80px; border-radius: 8px; background: linear-gradient(135deg, #FFE470, #FFC72C); }
  .card .name { font: 700 15px/1.3 inherit; margin: 0 0 4px; }
  .card .meta { font: 500 12px/1.4 inherit; color: #6D7280; margin-bottom: 8px; }
  .card .row { display: flex; align-items: end; justify-content: space-between; }
  .card .price { font: 700 22px/1 inherit; color: #191E3B; }
  .badge { padding: 3px 8px; border-radius: 9999px; font: 700 10px/1.4 inherit; letter-spacing: 0.02em; background: #E3F4E0; color: #1A7F37; }
</style>

<header class="topnav">
  <span class="logo"><span class="y">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 16l9-13 9 13M3 16l4-2 4 4 4-3 5 1" stroke="#191E3B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </span> Expedia</span>
  <a>Stays</a><a>Flights</a><a>Cars</a><a>Things to do</a>
  <span style="margin-left:auto;font:600 13px/1 inherit;">One Key</span>
</header>

<section class="hero">
  <h1>한 번에 묶으면<br/>더 저렴한 여행.</h1>
  <p>항공+숙소를 함께 검색하고 최대 30% 절약하세요. One Key 회원에겐 추가 리워드.</p>
  <div class="searchbar">
    <div class="tabs">
      <button class="active">항공+숙소</button>
      <button>항공</button>
      <button>숙소</button>
      <button>렌터카</button>
    </div>
    <div class="search-fields">
      <div class="field"><span class="lbl">출발/도착</span><span class="val">ICN → NRT</span></div>
      <div class="field"><span class="lbl">날짜</span><span class="val">6/12 → 6/16</span></div>
      <div class="field"><span class="lbl">여행자</span><span class="val">성인 2 · 객실 1</span></div>
      <button class="btn-go">검색</button>
    </div>
  </div>
</section>

<div class="features">
  <div class="card">
    <div class="thumb"></div>
    <div>
      <h3 class="name">Tokyo Hilton</h3>
      <div class="meta">★★★★★ · 신주쿠 · 9.1 훌륭함</div>
      <div class="row"><span class="badge">최대 30% 할인</span><span class="price">₩142,000</span></div>
    </div>
  </div>
  <div class="card">
    <div class="thumb" style="background:linear-gradient(135deg,#FFD64A,#E5AD0B)"></div>
    <div>
      <h3 class="name">Park Hyatt Tokyo</h3>
      <div class="meta">★★★★★ · 시부야 · 9.4 환상적</div>
      <div class="row"><span class="badge">VIP Access</span><span class="price">₩268,000</span></div>
    </div>
  </div>
  <div class="card">
    <div class="thumb" style="background:linear-gradient(135deg,#FFEFA3,#FFC72C)"></div>
    <div>
      <h3 class="name">Shibuya Granbell</h3>
      <div class="meta">★★★★ · 시부야 · 8.6 매우 좋음</div>
      <div class="row"><span class="badge">번들 절약 ₩42K</span><span class="price">₩98,000</span></div>
    </div>
  </div>
</div>
```
