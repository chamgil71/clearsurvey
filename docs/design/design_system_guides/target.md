---
brand: Target
brand_ko: 타겟
slug: target
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ecommerce
  - consumer
  - lifestyle

color_tone: warm
primary_color_hex: "#CC0000"
primary_color_name: "Target Red"
mood:
  - 과녁로고
  - 깔끔미니멀
  - 라이프스타일

font_category: sans-serif
font_primary: Helvetica
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1962
last_major_revision: 2023
signature_keyword: "빨강(#CC0000) 과녁 로고 + 깨끗한 흰 캔버스 + 라이프스타일 사진의 미국 백화점 톤"

hero_html: |
  <div style="font-family:Helvetica,'Pretendard',Arial,sans-serif;background:#fff;color:#333;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #EEEEEE;">
      <span style="display:inline-block;width:22px;height:22px;border-radius:50%;background:#CC0000;position:relative;">
        <span style="position:absolute;left:50%;top:50%;width:14px;height:14px;border-radius:50%;background:#fff;transform:translate(-50%,-50%);"></span>
        <span style="position:absolute;left:50%;top:50%;width:8px;height:8px;border-radius:50%;background:#CC0000;transform:translate(-50%,-50%);"></span>
      </span>
      <strong style="font-size:14px;font-weight:700;color:#CC0000;letter-spacing:-0.005em;">Target</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;background:#FAFAFA;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#FCE0E0 0%,#fff 100%);border-radius:6px;display:flex;align-items:flex-start;padding:6px;">
        <span style="background:#CC0000;color:#fff;font-size:9px;font-weight:700;padding:3px 6px;border-radius:2px;letter-spacing:0.04em;">SALE</span>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;color:#333;line-height:1.3;">Threshold 코튼 베개커버</div>
        <div style="font-size:9px;color:#666;">스탠다드 1팩 · 화이트</div>
      </div>
    </div>
    <div style="padding:8px 14px;background:#fff;border-top:1px solid #EEEEEE;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:14px;color:#CC0000;font-weight:700;">$12.99</strong>
      <span style="font-size:10px;color:#666;text-decoration:line-through;">$15.99</span>
      <span style="margin-left:auto;font-size:9px;color:#0E6E2E;font-weight:700;">RedCard 5% OFF</span>
    </div>
  </div>

sources:
  - https://www.target.com/
  - https://corporate.target.com/
---

### ① 브랜드 DNA
- **브랜드명**: Target
- **한 줄 정체성**: 미국의 디자인 친화 백화점 — Walmart보다 트렌디한 PB·라이프스타일
- **공식 디자인 철학**: "Expect more. Pay less." — 깨끗한 미니멀과 라이프스타일 사진
- **시그니처 요소 1개**: Target Red(#CC0000) 과녁 로고 + 깨끗한 흰 캔버스 + 라이프스타일 인테리어 사진. Walmart의 옐로 Spark·블루보다 차분하고 디자인 의식적

### ② 톤 & 무드
- **핵심 키워드 3개**: 과녁로고, 깔끔미니멀, 라이프스타일
- **무드 설명**: 흰 캔버스, 얇은 회색 보더. 빨강은 로고·세일·RedCard에만. 카드는 라운드 6px, 사진은 인테리어 톤. Threshold/Goodfellow 등 PB가 시각 정체성을 결정.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Target Red */
  --color-primary-50:  #FCE7E7;
  --color-primary-100: #F7BFBF;
  --color-primary-200: #F09090;
  --color-primary-300: #EA5F5F;
  --color-primary-400: #E03030;
  --color-primary-500: #CC0000;   /* Target Red */
  --color-primary-600: #B30000;
  --color-primary-700: #8C0000;
  --color-primary-800: #660000;
  --color-primary-900: #400000;

  /* Secondary - sage / khaki (라이프스타일 톤) */
  --color-secondary-500: #738571;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F4;
  --color-neutral-200:  #EEEEEE;
  --color-neutral-300:  #D9D9D9;
  --color-neutral-500:  #888888;
  --color-neutral-700:  #555555;
  --color-neutral-800:  #333333;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E4F4E8;
  --color-success-fg: #0E6E2E;     /* RedCard 절약 */
  --color-warning-bg: #FFF8E0;
  --color-warning-fg: #8C6A00;
  --color-error-bg:   #FCE0E0;
  --color-error-fg:   #CC0000;
  --color-info-bg:    #E8F0FB;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,26,0.50);

  /* Text */
  --text-primary:    #333333;
  --text-secondary:  #555555;
  --text-tertiary:   #888888;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #D9D9D9;

  /* Border */
  --border-default: #EEEEEE;
  --border-subtle:  #F4F4F4;
  --border-strong:  #D9D9D9;
  --border-focus:   #CC0000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Helvetica Now (Target 표준) / Helvetica Neue 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.015em
  - H1: 28px / 700 / 1.2 / -0.01em
  - H2: 20px / 700 / 1.3 / -0.005em
  - H3: 16px / 700 / 1.35 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1340px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.10);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Helvetica Now', Helvetica, sans-serif; border-radius: 9999px; padding: 12px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1.5px solid var(--text-primary); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-redcard { background: var(--color-primary-500); color: #fff; }
.btn-add-to-cart { background: var(--color-primary-500); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 6px; padding: 11px 14px 11px 42px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 2px rgba(204,0,0,0.15); }
```

**Card (Product)**
```css
.product { background: #fff; border-radius: 6px; padding: 0; cursor: pointer; transition: box-shadow 200ms ease; border: 1px solid transparent; }
.product:hover { box-shadow: var(--shadow-md); border-color: var(--border-default); }
.product .img { aspect-ratio: 1; background: linear-gradient(135deg, #F4F4F4, #fff); border-radius: 6px 6px 0 0; position: relative; }
.product .img .sale { position: absolute; left: 8px; top: 8px; background: var(--color-primary-500); color: #fff; font: 700 11px/1 inherit; padding: 4px 8px; border-radius: 2px; letter-spacing: 0.02em; }
.product .img .heart { position: absolute; right: 8px; top: 8px; width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.95); display: grid; place-items: center; font-size: 14px; color: var(--text-secondary); }
.product .body { padding: 12px 12px 16px; }
.product .price { font: 700 18px/1 inherit; color: var(--color-primary-500); }
.product .price .old { font: 500 12px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; margin-left: 6px; font-weight: 500; }
.product .name { font: 500 14px/1.4 inherit; color: var(--text-primary); margin: 6px 0; height: 38px; overflow: hidden; }
.product .stars { font: 500 12px/1 inherit; color: var(--text-tertiary); }
.product .stars .star { color: var(--color-primary-500); }
.product .save { font: 700 11px/1 inherit; color: var(--color-success-fg); margin-top: 6px; }
.card { background: #fff; border: 1px solid var(--border-default); border-radius: 6px; padding: 20px; }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 2px; font: 700 11px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-sale       { background: var(--color-primary-500); color: #fff; }
.tag-new        { background: #fff; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.tag-redcard    { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-pickup     { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-only-at-target { background: var(--color-primary-500); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; border-bottom: 1px solid var(--border-default); padding: 14px 24px; display: flex; align-items: center; gap: 22px; }
.topbar .brand { display: flex; align-items: center; gap: 8px; font: 700 24px/1 inherit; color: var(--color-primary-500); }
.topbar .brand .logo { width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary-500); position: relative; }
.topbar .brand .logo::before, .topbar .brand .logo::after { content:''; position: absolute; left: 50%; top: 50%; border-radius: 50%; background: #fff; transform: translate(-50%,-50%); }
.topbar .brand .logo::before { width: 20px; height: 20px; }
.topbar .brand .logo::after { width: 10px; height: 10px; background: var(--color-primary-500); }
.topbar .search { flex: 1; max-width: 700px; }
.topbar .right { display: flex; gap: 22px; align-items: center; font: 500 13px/1 inherit; color: var(--text-secondary); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 빨강 단일 액센트 외 강조색 추가 금지
2. 과녁(bullseye) 로고 형태 변형 금지
3. 카드 sharp 직각 사용 금지 — 6px Soft Round
4. 다크 모드 캔버스 사용 금지
5. 라이프스타일 사진을 흰 컷아웃으로 단순화 금지 — 환경 사진이 정체성 (IKEA와 대비)

### ⑫ 시그니처 적용 예시 (Home + Product grid)
```html
<style>
  body { margin: 0; font-family: 'Helvetica Now', Helvetica, 'Pretendard', sans-serif; background: #fff; color: #333; }
  .topbar { padding: 14px 24px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid #EEEEEE; }
  .topbar .brand { display: flex; align-items: center; gap: 8px; }
  .topbar .brand .logo { width: 36px; height: 36px; border-radius: 50%; background: #CC0000; position: relative; }
  .topbar .brand .logo::before, .topbar .brand .logo::after { content:''; position: absolute; left: 50%; top: 50%; border-radius: 50%; transform: translate(-50%,-50%); }
  .topbar .brand .logo::before { width: 22px; height: 22px; background: #fff; }
  .topbar .brand .logo::after { width: 12px; height: 12px; background: #CC0000; }
  .topbar .brand strong { font: 700 26px/1 inherit; color: #CC0000; letter-spacing: -0.01em; }
  .topbar .search { flex: 1; max-width: 720px; background: #FAFAFA; border-radius: 6px; padding: 10px 14px 10px 40px; color: #888; font-size: 14px; position: relative; }
  .topbar .search::before { content:'🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); }
  .topbar .right { display: flex; gap: 22px; align-items: center; font: 500 13px/1 inherit; color: #555; }
  .container { max-width: 1340px; margin: 0 auto; padding: 28px 24px; }
  .hero { background: linear-gradient(135deg,#FCE0E0 0%,#fff 100%); border-radius: 12px; padding: 36px 32px; margin-bottom: 28px; display: flex; align-items: center; gap: 28px; }
  .hero .text { flex: 1; }
  .hero h1 { margin: 0 0 8px; font: 700 36px/1.15 inherit; color: #333; letter-spacing: -0.01em; }
  .hero p { margin: 0 0 18px; font: 400 16px/1.4 inherit; color: #555; }
  .hero .cta { background: #CC0000; color: #fff; font: 700 14px/1 inherit; padding: 13px 26px; border: 0; border-radius: 9999px; cursor: pointer; }
  .hero .visual { width: 240px; height: 160px; background: linear-gradient(135deg,#738571,#A8B5A0); border-radius: 8px; flex-shrink: 0; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .product { background: #fff; border-radius: 6px; cursor: pointer; transition: box-shadow 200ms ease; border: 1px solid transparent; }
  .product:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.10); border-color: #EEEEEE; }
  .product .img { aspect-ratio: 1; background: linear-gradient(135deg,#F4F4F4,#fff); border-radius: 6px 6px 0 0; position: relative; }
  .product .img .sale { position: absolute; left: 8px; top: 8px; background: #CC0000; color: #fff; font: 700 11px/1 inherit; padding: 4px 8px; border-radius: 2px; letter-spacing: 0.04em; }
  .product .img .only { position: absolute; right: 8px; top: 8px; background: #fff; color: #CC0000; font: 700 10px/1 inherit; padding: 4px 8px; border-radius: 2px; letter-spacing: 0.04em; border: 1px solid #CC0000; }
  .product .body { padding: 12px 14px 18px; }
  .product .price { font: 700 18px/1 inherit; color: #CC0000; }
  .product .price .old { font: 500 12px/1 inherit; color: #888; text-decoration: line-through; margin-left: 6px; font-weight: 500; }
  .product .name { font: 500 14px/1.4 inherit; color: #333; margin: 6px 0; height: 38px; overflow: hidden; }
  .product .stars { font: 500 12px/1 inherit; color: #888; }
  .product .stars .star { color: #CC0000; }
  .product .save { font: 700 11px/1 inherit; color: #0E6E2E; margin-top: 6px; }
  .product .pickup { font: 500 11px/1.3 inherit; color: #555; margin-top: 6px; }
</style>

<header class="topbar">
  <div class="brand"><div class="logo"></div><strong>Target</strong></div>
  <div class="search">집들이 시즌 — 베개·러그·캔들 검색</div>
  <div class="right"><span>매장 찾기</span><span>♥</span><span>로그인</span><span>🛒</span></div>
</header>

<main class="container">
  <section class="hero">
    <div class="text">
      <h1>봄 살림, Threshold로 시작하기</h1>
      <p>RedCard 회원은 5% 추가 할인. 무료 매장 픽업도 함께.</p>
      <button class="cta">쇼핑하기</button>
    </div>
    <div class="visual"></div>
  </section>
  <h2 style="font: 700 22px/1.2 inherit; margin: 0 0 18px;">베스트셀러 — 홈 데코</h2>
  <div class="grid">
    <div class="product">
      <div class="img"><span class="sale">SALE</span><span class="only">Only at Target</span></div>
      <div class="body">
        <div class="price">$12.99<span class="old">$15.99</span></div>
        <div class="name">Threshold 코튼 베개커버 스탠다드 1팩</div>
        <div class="stars">★★★★★ <span>(2,842)</span></div>
        <div class="save">RedCard 추가 5% OFF</div>
        <div class="pickup">매장 픽업 무료</div>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="only">Only at Target</span></div>
      <div class="body">
        <div class="price">$24.00</div>
        <div class="name">Hearth & Hand 사이프러스 캔들</div>
        <div class="stars">★★★★ <span>(412)</span></div>
        <div class="save">RedCard 추가 5% OFF</div>
        <div class="pickup">매장 픽업 무료</div>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="sale">SALE</span></div>
      <div class="body">
        <div class="price">$49.99<span class="old">$69.99</span></div>
        <div class="name">Threshold 자카드 러그 5'×7'</div>
        <div class="stars">★★★★ <span>(821)</span></div>
        <div class="save">RedCard 추가 5% OFF</div>
        <div class="pickup">2일 내 배송</div>
      </div>
    </div>
    <div class="product">
      <div class="img"></div>
      <div class="body">
        <div class="price">$18.99</div>
        <div class="name">Goodfellow & Co 남성 옥스포드 셔츠</div>
        <div class="stars">★★★★ <span>(1,103)</span></div>
        <div class="save">RedCard 추가 5% OFF</div>
        <div class="pickup">매장 픽업 무료</div>
      </div>
    </div>
  </div>
</main>
```
