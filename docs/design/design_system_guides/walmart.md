---
brand: Walmart
brand_ko: 월마트
slug: walmart
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ecommerce
  - consumer

color_tone: cool
primary_color_hex: "#0071CE"
primary_color_name: "Walmart Blue"
mood:
  - 매일저가
  - 친근
  - 대형마트

font_category: sans-serif
font_primary: Antonio
font_korean_supported: true

density: comfortable
corner_style: pill
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1962
last_major_revision: 2024
signature_keyword: "블루(#0071CE) + 옐로 스파크 + 'Save money. Live better.' + Pill 가격 강조의 친근한 대형마트 톤"

hero_html: |
  <div style="font-family:Antonio,'Pretendard',-apple-system,sans-serif;background:#fff;color:#2A2A33;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:#0071CE;padding:10px 14px;display:flex;align-items:center;gap:6px;color:#fff;">
      <span style="display:inline-block;width:18px;height:18px;background:#FFC220;border-radius:50%;position:relative;">
        <span style="position:absolute;left:50%;top:50%;width:2px;height:8px;background:#0071CE;transform:translate(-50%,-50%);"></span>
        <span style="position:absolute;left:50%;top:50%;width:8px;height:2px;background:#0071CE;transform:translate(-50%,-50%);"></span>
        <span style="position:absolute;left:50%;top:50%;width:8px;height:8px;border:1.5px solid #0071CE;border-radius:50%;transform:translate(-50%,-50%);"></span>
      </span>
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.01em;">Walmart</strong>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:6px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#E5F1FB 0%,#fff 100%);border-radius:8px;display:flex;align-items:flex-start;justify-content:flex-end;padding:6px;">
        <span style="background:#FFC220;color:#2A2A33;font-size:9px;font-weight:800;padding:3px 6px;border-radius:9999px;">Rollback</span>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;color:#2A2A33;line-height:1.3;">Great Value 우유 1갤런</div>
        <div style="font-size:9px;color:#707070;">매장 픽업 가능</div>
      </div>
    </div>
    <div style="padding:8px 12px;border-top:1px solid #EFEFEF;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:15px;color:#0071CE;font-weight:800;">$3.48</strong>
      <span style="font-size:10px;color:#707070;text-decoration:line-through;">$3.98</span>
      <span style="margin-left:auto;background:#0071CE;color:#fff;font-size:10px;font-weight:700;padding:5px 12px;border-radius:9999px;">담기</span>
    </div>
  </div>

sources:
  - https://www.walmart.com/
  - https://corporate.walmart.com/
---

### ① 브랜드 DNA
- **브랜드명**: Walmart
- **한 줄 정체성**: 미국 최대 대형마트의 옴니채널 이커머스 — Everyday Low Price
- **공식 디자인 철학**: "Save money. Live better." — 친근하고 저렴한 모두를 위한 마켓
- **시그니처 요소 1개**: Walmart Blue(#0071CE) + Yellow Spark(#FFC220) + Pill 가격 강조 + "Rollback" 옐로 배지. 카드 모서리가 둥글고 친근하며 매장 픽업·당일 배송 표시가 빽빽

### ② 톤 & 무드
- **핵심 키워드 3개**: 매일저가, 친근, 대형마트
- **무드 설명**: 흰 캔버스 + 옅은 블루 보더. 가격은 Walmart Blue 굵은 숫자, "Rollback"은 옐로 옐로 pill, 액션은 Blue pill. 모서리는 round 12~16px이라 친근하다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Pill (버튼) + Round 12px (카드)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Walmart Blue */
  --color-primary-50:  #E5F1FB;
  --color-primary-100: #B3D9F4;
  --color-primary-200: #80C0EC;
  --color-primary-300: #4DA7E4;
  --color-primary-400: #2691DC;
  --color-primary-500: #0071CE;   /* Walmart Blue */
  --color-primary-600: #005EAA;
  --color-primary-700: #004885;
  --color-primary-800: #00335F;
  --color-primary-900: #001D39;

  /* Secondary - Spark Yellow */
  --color-secondary-500: #FFC220;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F8FB;
  --color-neutral-100:  #EFEFEF;
  --color-neutral-200:  #E0E0E0;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #707070;
  --color-neutral-700:  #46474A;
  --color-neutral-800:  #2A2A33;
  --color-neutral-900:  #1A1A23;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #178A3D;
  --color-warning-bg: #FFF8DD;
  --color-warning-fg: #B27E00;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #DE1135;
  --color-info-bg:    #E5F1FB;
  --color-info-fg:    #0071CE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F8FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(42,42,51,0.50);

  /* Text */
  --text-primary:    #2A2A33;
  --text-secondary:  #46474A;
  --text-tertiary:   #707070;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E0E0E0;
  --border-subtle:  #EFEFEF;
  --border-strong:  #C7C7C7;
  --border-focus:   #0071CE;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Antonio (Walmart 자체) / Bogle Walmart Sans / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 44px / 700 / 1.15 / -0.01em
  - H1: 28px / 700 / 1.2 / -0.005em
  - H2: 20px / 700 / 1.3 / 0
  - H3: 16px / 700 / 1.35 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 700 / 1.3 / 0.02em

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
- **Container**: max-width 1380px, 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,113,206,0.08);
--shadow-md: 0 4px 12px rgba(0,113,206,0.10);
--shadow-lg: 0 12px 28px rgba(0,113,206,0.16);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Antonio, Bogle, Inter, sans-serif; border-radius: 9999px; padding: 12px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1.5px solid var(--text-primary); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-spark { background: var(--color-secondary-500); color: var(--text-primary); }   /* Rollback CTA */
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 9999px; padding: 11px 18px 11px 42px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(0,113,206,0.15); }
```

**Card (Product)**
```css
.product { background: #fff; border-radius: 12px; padding: 12px; cursor: pointer; transition: box-shadow 200ms ease, transform 200ms ease; border: 1px solid var(--border-subtle); }
.product:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.product .img { aspect-ratio: 1; background: linear-gradient(135deg, var(--color-primary-50), #fff); border-radius: 8px; position: relative; margin-bottom: 12px; }
.product .img .rollback { position: absolute; right: 8px; top: 8px; background: var(--color-secondary-500); color: var(--text-primary); font: 800 11px/1 inherit; padding: 4px 10px; border-radius: 9999px; }
.product .img .pickup { position: absolute; left: 8px; bottom: 8px; background: rgba(255,255,255,0.95); color: var(--color-primary-500); font: 700 10px/1 inherit; padding: 3px 8px; border-radius: 9999px; }
.product .price { font: 800 22px/1 inherit; color: var(--color-primary-500); }
.product .price .old { font: 500 12px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; margin-left: 6px; }
.product .name { font: 500 14px/1.4 inherit; color: var(--text-primary); margin: 6px 0; height: 38px; overflow: hidden; }
.product .stars { font: 500 12px/1 inherit; color: var(--text-tertiary); }
.product .stars .star { color: var(--color-secondary-500); }
.product .cart { margin-top: 10px; width: 100%; background: var(--color-primary-500); color: #fff; font: 700 13px/1 inherit; padding: 10px; border: 0; border-radius: 9999px; cursor: pointer; }
.card { background: #fff; border-radius: 12px; padding: 20px; box-shadow: var(--shadow-sm); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 800 11px/1.3 inherit; letter-spacing: 0.02em; }
.tag-rollback     { background: var(--color-secondary-500); color: var(--text-primary); }
.tag-clearance    { background: var(--color-error-fg); color: #fff; }
.tag-pickup       { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-walmart-plus { background: var(--color-primary-500); color: #fff; }
.tag-bestseller   { background: var(--color-primary-50); color: var(--color-primary-500); }
```

**Navigation (Top bar)**
```css
.topbar { background: var(--color-primary-500); padding: 14px 20px; display: flex; align-items: center; gap: 20px; color: #fff; }
.topbar .brand { display: flex; align-items: center; gap: 8px; font: 800 22px/1 inherit; }
.topbar .brand .spark { width: 28px; height: 28px; border-radius: 50%; background: var(--color-secondary-500); display: grid; place-items: center; }
.topbar .search { flex: 1; max-width: 720px; background: #fff; border-radius: 9999px; padding: 10px 16px; color: var(--text-primary); font-size: 14px; display: flex; align-items: center; gap: 8px; }
.topbar .search button { margin-left: auto; width: 36px; height: 36px; border-radius: 50%; background: var(--color-secondary-500); color: var(--color-primary-500); border: 0; display: grid; place-items: center; cursor: pointer; }
.topbar .right { display: flex; gap: 18px; font: 600 12px/1 inherit; align-items: center; }
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
1. Walmart Blue·Yellow Spark 외 강조색 추가 금지
2. 카드 sharp 직각 사용 금지 — Round 12px이 친근함의 표현
3. "Rollback" 옐로 pill 톤을 빨강으로 변경 금지 — 옐로가 정체성
4. 매장 픽업·당일 배송 표시 생략 금지 — 옴니채널 정체성
5. 다크 모드 캔버스 사용 금지

### ⑫ 시그니처 적용 예시 (Product grid)
```html
<style>
  body { margin: 0; font-family: Antonio, Bogle, Inter, 'Pretendard', sans-serif; background: #F5F8FB; color: #2A2A33; }
  .topbar { background: #0071CE; padding: 14px 20px; display: flex; align-items: center; gap: 20px; color: #fff; }
  .topbar .brand { display: flex; align-items: center; gap: 10px; font: 800 22px/1 inherit; }
  .topbar .brand .spark { width: 32px; height: 32px; border-radius: 50%; background: #FFC220; position: relative; }
  .topbar .brand .spark::before, .topbar .brand .spark::after { content:''; position: absolute; background: #0071CE; left: 50%; top: 50%; transform: translate(-50%,-50%); }
  .topbar .brand .spark::before { width: 3px; height: 16px; }
  .topbar .brand .spark::after { width: 16px; height: 3px; }
  .topbar .search { flex: 1; max-width: 760px; background: #fff; border-radius: 9999px; padding: 10px 16px 10px 18px; color: #2A2A33; font-size: 14px; display: flex; align-items: center; gap: 8px; }
  .topbar .search input { flex: 1; border: 0; font: 400 14px/1.3 inherit; outline: none; }
  .topbar .search .go { width: 36px; height: 36px; border-radius: 50%; background: #FFC220; color: #0071CE; border: 0; display: grid; place-items: center; font-size: 16px; cursor: pointer; font-weight: 800; }
  .topbar .right { display: flex; gap: 18px; align-items: center; font: 600 12px/1.2 inherit; }
  .topbar .right .item { display: flex; flex-direction: column; gap: 2px; }
  .topbar .right .item small { font-weight: 400; opacity: 0.85; }
  .container { max-width: 1380px; margin: 0 auto; padding: 28px 20px; }
  .hero { background: #0071CE; color: #fff; border-radius: 16px; padding: 28px; display: flex; align-items: center; gap: 24px; margin-bottom: 28px; }
  .hero h1 { margin: 0 0 8px; font: 800 36px/1.1 inherit; letter-spacing: -0.01em; }
  .hero p { margin: 0 0 18px; font: 400 16px/1.4 inherit; opacity: 0.95; }
  .hero .cta { background: #FFC220; color: #2A2A33; font: 800 14px/1 inherit; padding: 14px 26px; border: 0; border-radius: 9999px; cursor: pointer; }
  .hero .spark-big { width: 80px; height: 80px; flex-shrink: 0; border-radius: 50%; background: #FFC220; position: relative; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .product { background: #fff; border-radius: 12px; padding: 14px; cursor: pointer; transition: box-shadow 200ms ease, transform 200ms ease; border: 1px solid #EFEFEF; }
  .product:hover { box-shadow: 0 8px 24px rgba(0,113,206,0.16); transform: translateY(-2px); }
  .product .img { aspect-ratio: 1; background: linear-gradient(135deg,#E5F1FB,#fff); border-radius: 8px; position: relative; margin-bottom: 12px; }
  .product .img .rollback { position: absolute; right: 8px; top: 8px; background: #FFC220; color: #2A2A33; font: 800 11px/1 inherit; padding: 5px 11px; border-radius: 9999px; }
  .product .img .pickup { position: absolute; left: 8px; bottom: 8px; background: rgba(255,255,255,0.95); color: #0071CE; font: 700 10px/1 inherit; padding: 4px 9px; border-radius: 9999px; }
  .product .price { font: 800 22px/1 inherit; color: #2A2A33; }
  .product .price .old { font: 500 12px/1 inherit; color: #707070; text-decoration: line-through; margin-left: 6px; font-weight: 500; }
  .product .name { font: 500 14px/1.4 inherit; color: #2A2A33; margin: 8px 0 4px; height: 38px; overflow: hidden; }
  .product .stars { font: 500 12px/1 inherit; color: #707070; }
  .product .stars .star { color: #FFC220; }
  .product .ship { font: 500 11px/1.3 inherit; color: #178A3D; margin-top: 6px; font-weight: 600; }
  .product .cart { margin-top: 10px; width: 100%; background: #0071CE; color: #fff; font: 700 13px/1 inherit; padding: 10px; border: 0; border-radius: 9999px; cursor: pointer; }
</style>

<header class="topbar">
  <div class="brand"><div class="spark"></div><span>Walmart</span></div>
  <div class="search">📍 90210 · 매장픽업<input placeholder="모든 카테고리에서 검색" /><button class="go">🔍</button></div>
  <div class="right"><div class="item"><small>안녕,</small><strong>Account ▾</strong></div><div class="item"><small>Reorder</small><strong>My Items</strong></div><div class="item"><small>🛒 $0.00</small><strong>Cart</strong></div></div>
</header>

<main class="container">
  <section class="hero">
    <div>
      <h1>Save money. Live better.</h1>
      <p>Walmart+ 회원이라면 무료 배송. 매장 픽업도 무료.</p>
      <button class="cta">Walmart+ 시작하기</button>
    </div>
    <div class="spark-big"></div>
  </section>
  <div class="grid">
    <div class="product">
      <div class="img"><span class="rollback">Rollback</span><span class="pickup">Pickup</span></div>
      <div class="price">$3.48<span class="old">$3.98</span></div>
      <div class="name">Great Value 우유 1갤런 · whole milk</div>
      <div class="stars">★★★★★ <span>(8,492)</span></div>
      <div class="ship">내일 무료 배송</div>
      <button class="cart">＋ 담기</button>
    </div>
    <div class="product">
      <div class="img"><span class="pickup">Pickup</span></div>
      <div class="price">$12.97</div>
      <div class="name">Equate 종합비타민 200정</div>
      <div class="stars">★★★★ <span>(2,142)</span></div>
      <div class="ship">내일 무료 배송</div>
      <button class="cart">＋ 담기</button>
    </div>
    <div class="product">
      <div class="img"><span class="rollback">Rollback</span></div>
      <div class="price">$29.88<span class="old">$39.99</span></div>
      <div class="name">George 남성 슬림핏 청바지</div>
      <div class="stars">★★★★ <span>(1,103)</span></div>
      <div class="ship">3일 내 도착</div>
      <button class="cart">＋ 담기</button>
    </div>
    <div class="product">
      <div class="img"><span class="pickup">Pickup</span></div>
      <div class="price">$197.00</div>
      <div class="name">onn. 50인치 4K Roku Smart TV</div>
      <div class="stars">★★★★★ <span>(12,892)</span></div>
      <div class="ship">내일 무료 배송</div>
      <button class="cart">＋ 담기</button>
    </div>
  </div>
</main>
```
