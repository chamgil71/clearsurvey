---
brand: Amazon
brand_ko: 아마존
slug: amazon
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - ecommerce
  - consumer

color_tone: warm
primary_color_hex: "#FF9900"
primary_color_name: "Amazon Orange"
mood:
  - 신뢰
  - 정보밀집
  - 즉시

font_category: sans-serif
font_primary: Amazon Ember
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1995
last_major_revision: 2023
signature_keyword: "스마일 오렌지 + 네이비 헤더 + 정보 밀집 상품 그리드"

hero_html: |
  <div style="font-family:'Amazon Ember','Helvetica Neue',Arial,sans-serif;background:#fff;color:#0F1111;height:100%;display:grid;grid-template-rows:auto auto 1fr;letter-spacing:-0.005em;">
    <div style="background:#131A22;color:#fff;padding:8px 10px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:700;letter-spacing:-0.025em;">amazon<span style="color:#FF9900;">.</span></strong>
      <div style="flex:1;background:#fff;border-radius:4px;padding:5px 8px;font:500 12px/1.4 inherit;color:#0F1111;display:flex;align-items:center;gap:6px;">🔍 검색</div>
      <span style="font-size:11px;color:#fff;font-weight:600;">🛒 0</span>
    </div>
    <div style="background:#232F3E;color:#fff;padding:6px 10px;display:flex;align-items:center;gap:10px;font:600 11px/1.4 inherit;">
      <span style="border:1px solid transparent;padding:2px 6px;">≡ All</span>
      <span style="color:#DDD;">Today's Deals</span>
      <span style="color:#DDD;">Prime</span>
      <span style="color:#DDD;">Best Sellers</span>
    </div>
    <div style="padding:6px 8px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:linear-gradient(90deg,#FF9900,#FFC246);color:#0F1111;border-radius:0;padding:8px 12px;display:flex;align-items:center;gap:8px;font:700 12px/1.3 inherit;">
        <strong style="font-weight:900;font-size:13px;">prime</strong>
        <span style="flex:1;">FREE 2-Day shipping</span>
        <span style="font-size:14px;">›</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="background:#fff;padding:6px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#1E40AF,#1E3A8A);"></div>
          <div style="font:500 11px/1.4 inherit;margin-top:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#007185;">Apple AirPods Pro (2nd Gen) USB-C</div>
          <div style="display:flex;align-items:center;gap:3px;margin-top:2px;color:#DE7921;font:600 11px/1.4 inherit;">★★★★★<span style="color:#007185;">(8,420)</span></div>
          <div style="display:flex;align-items:baseline;gap:3px;margin-top:2px;">
            <span style="font:500 10px/1.2 inherit;color:#565959;">$</span>
            <span style="font:700 18px/1 inherit;font-variant-numeric:tabular-nums;">198</span>
            <span style="font:500 11px/1.2 inherit;">00</span>
          </div>
        </div>
        <div style="background:#fff;padding:6px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#1F2937,#374151);"></div>
          <div style="font:500 11px/1.4 inherit;margin-top:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#007185;">Echo Dot (5th Gen)</div>
          <div style="display:flex;align-items:center;gap:3px;margin-top:2px;color:#DE7921;font:600 11px/1.4 inherit;">★★★★☆<span style="color:#007185;">(2,140)</span></div>
          <div style="display:flex;align-items:baseline;gap:3px;margin-top:2px;">
            <span style="font:500 10px/1.2 inherit;color:#565959;">$</span>
            <span style="font:700 18px/1 inherit;font-variant-numeric:tabular-nums;">49</span>
            <span style="font:500 11px/1.2 inherit;">99</span>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.amazon.com/
  - https://m.media-amazon.com/images/G/01/cloudtail/help_resources/typography-style-guide.pdf
---

### ① 브랜드 DNA
- **브랜드명**: Amazon (Amazon.com, Inc.)
- **한 줄 정체성**: 1995년 시작한 세계 최대 이커머스 — A부터 Z까지 모두 판매하는 종합 마켓플레이스
- **공식 디자인 철학**: "Earth's most customer-centric company" — 검색·정보·가격 우선
- **시그니처 요소 1개**: Amazon 오렌지(#FF9900) 스마일 화살표 로고 + 네이비 헤더(#131A22) + 흰 캔버스. 가격 표시는 큰 정수 + 작은 센트의 split-price가 시그니처

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 정보밀집, 즉시
- **무드 설명**: 한 화면에 최대한 많은 상품·정보를 노출하는 compact 그리드. 헤더 네이비 + 오렌지 액센트(별점/CTA/Prime), 본문 흰색. 모서리는 거의 sharp(0~4px), 보더도 거의 없음.
- **비주얼 스타일**: 모던 미니멀 (정보 밀집 톤)
- **밀도(Density)**: Compact — 패딩 6~10px
- **모서리 성향**: Sharp (0~4px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Amazon Orange */
  --color-primary-50:  #FFF4E0;
  --color-primary-100: #FFE2A8;
  --color-primary-200: #FFCD66;
  --color-primary-300: #FFB429;
  --color-primary-400: #FFA61C;
  --color-primary-500: #FF9900;   /* Amazon Orange */
  --color-primary-600: #E88B00;
  --color-primary-700: #C7770C;
  --color-primary-800: #985E0A;
  --color-primary-900: #6B4307;

  /* Secondary - Amazon Navy */
  --color-secondary-500: #131A22;       /* Top header */
  --color-secondary-400: #232F3E;       /* Sub header */

  /* Tertiary - Action Yellow (CTA) */
  --color-cta-500: #FFD814;            /* "Add to Cart" 노랑 */
  --color-cta-600: #FCD200;
  --color-cta-buy: #FFA41C;            /* "Buy Now" 주황 */

  /* Link */
  --color-link: #007185;
  --color-link-hover: #C7511F;

  /* Star/Rating */
  --color-star: #DE7921;
  --color-star-bg: #F5F5F5;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F0F2F2;
  --color-neutral-200:  #D5D9D9;        /* border */
  --color-neutral-300:  #B3B7B7;
  --color-neutral-500:  #888C8C;
  --color-neutral-700:  #565959;        /* text secondary */
  --color-neutral-800:  #333333;
  --color-neutral-900:  #0F1111;        /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E1F2EC;
  --color-success-fg: #067D62;
  --color-warning-bg: #FEF6E0;
  --color-warning-fg: #B12704;
  --color-error-bg:   #FEF1F1;
  --color-error-fg:   #B12704;          /* 가격 할인 */
  --color-info-bg:    #E7F4FF;
  --color-info-fg:    #007185;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(15,17,17,0.55);

  /* Text */
  --text-primary:    #0F1111;
  --text-secondary:  #333333;
  --text-tertiary:   #565959;
  --text-on-primary: #0F1111;
  --text-disabled:   #888C8C;
  --text-price:      #0F1111;
  --text-deal:       #B12704;           /* 가격 할인 빨강 */

  /* Border */
  --border-default: #D5D9D9;
  --border-subtle:  #F0F2F2;
  --border-strong:  #888C8C;
  --border-focus:   #C45500;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Amazon Ember** (자체) → Helvetica Neue / Arial 폴백
  - 한글: Amazon Ember Korean / Noto Sans KR 폴백
  - 가격: tabular-nums + split-price 구조
- **위계**:
  - Display: 36px / 700 / 1.2 / -0.02em (랜딩 hero만)
  - H1 (상품 상세 제목): 24px / 500 / 1.3 / 0
  - H2: 18px / 700 / 1.3 / 0
  - H3 (상품 카드 제목): 14px / 400 / 1.4 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 400 / 1.4 / 0
  - Price Whole: 21px / 700 / 1 / -0.005em tabular-nums
  - Price Fraction: 13px / 700 / 1 / 0 tabular-nums
  - Caption: 11px / 400 / 1.4 / 0
  - Star Count: 13px / 400 / 1 color #007185

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  2px;
  --space-sm:  4px;
  --space-md:  8px;
  --space-lg: 12px;
  --space-xl: 16px;
  --space-2xl: 24px;
  --space-3xl: 32px;
  ```
- **Container**: max-width 480px (모바일), 1500px (웹), 좌우 패딩 8px / 16px

### ⑥ Border Radius
```css
--radius-none: 0;       /* 카드, 이미지 */
--radius-sm: 3px;       /* 헤더 검색바, 버튼 */
--radius-md: 6px;
--radius-lg: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.14);
```

### ⑧ Iconography
- **스타일**: Amazon UI Icons (Filled, 작음)
- **Stroke 굵기**: N/A (Filled)
- **모서리 처리**: Square
- **추천 라이브러리**: Amazon Style Library / Material Symbols (Filled)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 400 13px/1.4 'Amazon Ember', Arial, sans-serif; letter-spacing: 0;
       border-radius: 3px; padding: 8px 12px; border: 1px solid;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       cursor: pointer; }
.btn-cart { background: var(--color-cta-500); color: var(--text-primary); border-color: #FCD200; }
.btn-cart:hover { background: var(--color-cta-600); }
.btn-buy  { background: var(--color-cta-buy); color: var(--text-primary); border-color: #FF8F00; }
.btn-buy:hover { background: #FF8F00; }
.btn-secondary { background: linear-gradient(180deg, #F7F8FA 0%, #E7E9EC 100%); color: var(--text-primary); border-color: #ADB1B8 #A2A6AC #8D9096; }
.btn-secondary:hover { background: linear-gradient(180deg, #F0F2F2 0%, #DDDFE3 100%); }
```

**Input (Search)**
```css
.search-bar { background: #fff; border-radius: 4px; display: flex; overflow: hidden; }
.search-bar .cat { background: #F3F3F3; color: var(--text-primary); padding: 8px 10px; font: 400 12px/1.4 inherit; border-right: 1px solid var(--border-default); }
.search-bar input { all: unset; flex: 1; padding: 8px 12px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.search-bar .submit { background: var(--color-primary-500); padding: 0 14px; display: grid; place-items: center; font-size: 16px; color: var(--text-primary); }
.search-bar .submit:hover { background: var(--color-primary-400); }
```

**Card (Product)**
```css
.prod { background: #fff; padding: 6px; }
.prod .img { aspect-ratio: 1; background: var(--bg-subtle); position: relative; overflow: hidden; }
.prod .img .badge { position: absolute; top: 4px; left: 0; background: var(--color-error-fg); color: #fff; font: 700 11px/1 inherit; padding: 4px 8px; border-radius: 0 3px 3px 0; }
.prod .name { font: 400 13px/1.4 inherit; color: var(--color-link); margin-top: 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; cursor: pointer; }
.prod .name:hover { color: var(--color-link-hover); text-decoration: underline; }
.prod .stars { display: flex; align-items: center; gap: 4px; margin-top: 2px; color: var(--color-star); font: 400 12px/1 inherit; }
.prod .stars .count { color: var(--color-link); font-size: 13px; }
.prod .price { display: flex; align-items: baseline; gap: 2px; margin-top: 2px; color: var(--text-price); }
.prod .price .sup { font: 400 10px/1.2 inherit; color: var(--text-tertiary); }
.prod .price .whole { font: 700 21px/1 inherit; font-variant-numeric: tabular-nums; letter-spacing: -0.005em; }
.prod .price .frac { font: 700 11px/1 inherit; }
.prod .price .was { font: 400 12px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; margin-left: 6px; }
.prod .deal { color: var(--text-deal); font: 700 12px/1.4 inherit; }
.prod .prime { font: 700 11px/1.4 inherit; color: #00A8E1; margin-top: 4px; }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; font: 700 11px/1 inherit; }
.tag-deal      { background: var(--color-error-fg); color: #fff; }
.tag-bestseller { background: #FFD814; color: var(--text-primary); }
.tag-prime     { background: transparent; color: #00A8E1; font-weight: 700; }
.tag-amazons-choice { background: #131A22; color: var(--color-primary-500); padding: 3px 8px; font: 700 12px/1.3 inherit; border-radius: 0; }
```

**Navigation (Header)**
```css
.navbar { background: var(--color-secondary-500); color: #fff; padding: 6px 10px; display: flex; align-items: center; gap: 10px; }
.navbar .logo { font: 700 22px/1 inherit; letter-spacing: -0.025em; }
.navbar .logo .smile { color: var(--color-primary-500); }
.subnav { background: var(--color-secondary-400); color: #fff; padding: 6px 10px; display: flex; align-items: center; gap: 12px; font: 700 13px/1.4 inherit; overflow-x: auto; }
.subnav .item { color: #ddd; cursor: pointer; }
.subnav .item:hover { color: #fff; border: 1px solid #fff; padding: 2px 6px; margin: -2px -6px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.33, 0, 0.67, 1);
```

### ⑪ Anti-patterns
1. CTA(Add to Cart / Buy Now)에 오렌지 외 색상 사용 금지 — 노랑(#FFD814) + 오렌지(#FFA41C) 짝이 표준
2. 카드 모서리 8px 이상 라운드 금지 — sharp 0~3px이 정보 밀집 그리드 시그니처
3. 가격을 단일 폰트로 처리 금지 — split price ($21 ⁰⁰) 구조 유지
4. 한 화면 정보량을 줄이기 위한 큰 패딩 사용 금지 — Compact 그리드가 Amazon 정체성
5. 헤더 그라데이션 금지 — 네이비 단색 #131A22가 표준

### ⑫ 시그니처 적용 예시 (Amazon 데스크톱)

```html
<style>
  body { margin: 0; font-family: 'Amazon Ember', 'Helvetica Neue', Arial, sans-serif; color: #0F1111; background: #fff; }
  .app { max-width: 1200px; margin: 0 auto; min-height: 100vh; }
  .navbar { background: #131A22; color: #fff; padding: 8px 12px; display: flex; align-items: center; gap: 12px; }
  .navbar .logo { font: 700 24px/1 inherit; letter-spacing: -0.025em; padding: 4px 8px; border: 1px solid transparent; border-radius: 3px; cursor: pointer; }
  .navbar .logo:hover { border-color: #fff; }
  .navbar .logo .smile { color: #FF9900; }
  .navbar .deliver { display: flex; flex-direction: column; font: 400 11px/1.2 inherit; color: #ccc; padding: 4px 6px; border: 1px solid transparent; }
  .navbar .deliver:hover { border-color: #fff; }
  .navbar .deliver strong { font-weight: 700; color: #fff; font-size: 13px; }
  .navbar .search { flex: 1; display: flex; background: #fff; border-radius: 4px; overflow: hidden; max-width: 600px; }
  .navbar .search .cat { background: #F3F3F3; color: #0F1111; padding: 0 10px; font: 400 12px/1 inherit; display: flex; align-items: center; gap: 4px; border-right: 1px solid #ccc; }
  .navbar .search input { all: unset; flex: 1; padding: 8px 12px; font: 400 14px/1 inherit; color: #0F1111; }
  .navbar .search .go { background: #FF9900; padding: 0 16px; display: grid; place-items: center; font-size: 16px; color: #0F1111; }
  .navbar .lang, .navbar .acct, .navbar .cart { font: 700 13px/1.2 inherit; padding: 4px 8px; border: 1px solid transparent; border-radius: 3px; cursor: pointer; }
  .navbar .lang:hover, .navbar .acct:hover, .navbar .cart:hover { border-color: #fff; }
  .navbar .acct { display: flex; flex-direction: column; }
  .navbar .acct small { font-weight: 400; color: #ccc; font-size: 11px; }
  .navbar .cart { display: flex; align-items: center; gap: 4px; }
  .navbar .cart .count { color: #FF9900; font-size: 16px; font-weight: 900; }
  .subnav { background: #232F3E; color: #fff; padding: 8px 12px; display: flex; align-items: center; gap: 14px; font: 700 13px/1.4 inherit; overflow-x: auto; }
  .subnav .item { color: #ddd; cursor: pointer; padding: 2px 6px; border: 1px solid transparent; border-radius: 3px; }
  .subnav .item:hover { color: #fff; border-color: #fff; }
  .subnav .item.menu { color: #fff; font-weight: 900; }
  .banner { background: linear-gradient(90deg, #FF9900, #FFC246); padding: 10px 16px; display: flex; align-items: center; gap: 14px; font: 400 13px/1.3 inherit; color: #0F1111; }
  .banner strong { font-weight: 900; font-size: 14px; }
  .grid { padding: 14px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .prod { background: #fff; padding: 8px; }
  .prod .img { aspect-ratio: 1; background: #F7F7F7; position: relative; overflow: hidden; }
  .prod .img.p1 { background: linear-gradient(135deg, #1E40AF, #1E3A8A); }
  .prod .img.p2 { background: linear-gradient(135deg, #1F2937, #374151); }
  .prod .img.p3 { background: linear-gradient(135deg, #DC2626, #7F1D1D); }
  .prod .img.p4 { background: linear-gradient(135deg, #F59E0B, #B45309); }
  .prod .img .badge { position: absolute; top: 6px; left: 0; background: #B12704; color: #fff; padding: 4px 10px; font: 700 11px/1 inherit; border-radius: 0 3px 3px 0; }
  .prod .img .choice { position: absolute; top: 6px; left: 6px; background: #131A22; color: #FF9900; padding: 3px 8px; font: 700 11px/1.3 inherit; border-radius: 0; }
  .prod .name { font: 400 14px/1.4 inherit; color: #007185; margin-top: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; cursor: pointer; min-height: 39px; }
  .prod .name:hover { color: #C7511F; text-decoration: underline; }
  .prod .stars { display: flex; align-items: center; gap: 6px; margin-top: 2px; font: 400 13px/1 inherit; }
  .prod .stars .icons { color: #DE7921; font-size: 14px; letter-spacing: -1px; }
  .prod .stars .count { color: #007185; }
  .prod .price { display: flex; align-items: baseline; gap: 1px; margin-top: 6px; color: #0F1111; }
  .prod .price .sup { font: 400 11px/1.2 inherit; color: #565959; align-self: flex-start; margin-top: 4px; }
  .prod .price .whole { font: 700 22px/1 inherit; font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
  .prod .price .frac { font: 700 12px/1 inherit; }
  .prod .was { font: 400 12px/1.3 inherit; color: #565959; margin-left: 8px; align-self: flex-end; }
  .prod .was s { text-decoration: line-through; }
  .prod .deal { color: #B12704; font: 700 13px/1.4 inherit; margin-top: 2px; }
  .prod .prime { font: 700 12px/1.4 inherit; color: #00A8E1; margin-top: 4px; }
  .prod .delivery { font: 400 12px/1.4 inherit; color: #0F1111; margin-top: 2px; }
  .prod .delivery strong { font-weight: 700; }
  .prod .cart-btn { margin-top: 8px; background: #FFD814; border: 1px solid #FCD200; border-radius: 100px; padding: 7px 14px; font: 400 13px/1 inherit; color: #0F1111; cursor: pointer; width: 100%; }
</style>

<div class="app">
  <header class="navbar">
    <div class="logo">amazon<span class="smile">.</span></div>
    <div class="deliver"><small>Deliver to</small><strong>📍 Seoul 06236</strong></div>
    <div class="search">
      <div class="cat">All ▾</div>
      <input value="airpods pro" />
      <div class="go">🔍</div>
    </div>
    <div class="lang">🇺🇸 EN</div>
    <div class="acct"><small>Hello, Jin</small><strong>Account & Lists ▾</strong></div>
    <div class="cart"><span class="count">0</span> Cart</div>
  </header>
  <nav class="subnav">
    <span class="item menu">≡ All</span>
    <span class="item">Today's Deals</span>
    <span class="item">Customer Service</span>
    <span class="item">Registry</span>
    <span class="item">Gift Cards</span>
    <span class="item">Sell</span>
  </nav>
  <section class="banner">
    <strong>prime</strong>
    <span>FREE 2-Day shipping on millions of items. Try Prime free for 30 days.</span>
    <span style="margin-left:auto;">→</span>
  </section>
  <section class="grid">
    <div class="prod">
      <div class="img p1"><span class="choice">Amazon's Choice</span></div>
      <div class="name">Apple AirPods Pro (2nd Generation) with USB-C Charging Case</div>
      <div class="stars"><span class="icons">★★★★★</span><span class="count">(8,420)</span></div>
      <div class="price"><span class="sup">$</span><span class="whole">198</span><span class="frac">00</span><span class="was"><s>List: $249</s></span></div>
      <div class="deal">Save 20% with coupon</div>
      <div class="prime">✓ prime</div>
      <div class="delivery">FREE delivery <strong>Tomorrow</strong></div>
      <button class="cart-btn">Add to Cart</button>
    </div>
    <div class="prod">
      <div class="img p2"><span class="badge">-25%</span></div>
      <div class="name">Amazon Echo Dot (5th Gen) Smart Speaker with Alexa</div>
      <div class="stars"><span class="icons">★★★★☆</span><span class="count">(2,140)</span></div>
      <div class="price"><span class="sup">$</span><span class="whole">37</span><span class="frac">49</span><span class="was"><s>$49.99</s></span></div>
      <div class="prime">✓ prime</div>
      <div class="delivery">FREE delivery <strong>Wed, May 14</strong></div>
      <button class="cart-btn">Add to Cart</button>
    </div>
    <div class="prod">
      <div class="img p3"></div>
      <div class="name">Kindle Paperwhite (16 GB) – Now with a 6.8" display</div>
      <div class="stars"><span class="icons">★★★★★</span><span class="count">(12,800)</span></div>
      <div class="price"><span class="sup">$</span><span class="whole">139</span><span class="frac">99</span></div>
      <div class="prime">✓ prime</div>
      <div class="delivery">FREE delivery <strong>Tomorrow</strong></div>
      <button class="cart-btn">Add to Cart</button>
    </div>
    <div class="prod">
      <div class="img p4"><span class="badge">Best Seller</span></div>
      <div class="name">Fire TV Stick 4K Max streaming device</div>
      <div class="stars"><span class="icons">★★★★☆</span><span class="count">(28,420)</span></div>
      <div class="price"><span class="sup">$</span><span class="whole">39</span><span class="frac">99</span><span class="was"><s>$59.99</s></span></div>
      <div class="prime">✓ prime</div>
      <div class="delivery">FREE delivery <strong>Wed, May 14</strong></div>
      <button class="cart-btn">Add to Cart</button>
    </div>
  </section>
</div>
```
