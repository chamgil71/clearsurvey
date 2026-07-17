---
brand: IKEA
brand_ko: 이케아
slug: ikea
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ecommerce
  - consumer

color_tone: cool
primary_color_hex: "#0058A3"
primary_color_name: "IKEA Blue"
mood:
  - 가구카탈로그
  - 스칸디
  - 가성비

font_category: sans-serif
font_primary: Noto IKEA
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1943
last_major_revision: 2024
signature_keyword: "스웨덴 깃발의 IKEA Blue(#0058A3) + Yellow(#FFDB00) + 카탈로그형 가구 그리드"

hero_html: |
  <div style="font-family:'Noto Sans','Pretendard',-apple-system,sans-serif;background:#fff;color:#111;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:#0058A3;padding:8px 14px;display:flex;align-items:center;gap:8px;color:#FFDB00;">
      <strong style="font-size:13px;font-weight:800;letter-spacing:0.02em;">IKEA</strong>
      <span style="font-size:9px;color:#fff;opacity:0.85;margin-left:auto;">한국</span>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:8px;background:#F5F5F5;">
      <div style="background:#fff;border:1px solid #DFDFDF;aspect-ratio:1;display:flex;align-items:flex-end;padding:8px;">
        <span style="background:#FFDB00;color:#0058A3;font-size:9px;font-weight:800;padding:3px 6px;letter-spacing:0.04em;">새로운 가격</span>
      </div>
      <div>
        <div style="font-size:11px;font-weight:700;color:#111;line-height:1.3;">BILLY 빌리</div>
        <div style="font-size:9px;color:#484848;">책장, 화이트 80×28×202cm</div>
      </div>
    </div>
    <div style="padding:8px 12px;background:#fff;border-top:1px solid #DFDFDF;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:13px;color:#0058A3;font-weight:800;">₩69,900</strong>
      <span style="font-size:9px;color:#CC0000;font-weight:700;margin-left:auto;">기존 ₩89,900</span>
    </div>
  </div>

sources:
  - https://www.ikea.com/
  - https://www.ikea.com/global/en/our-business/
---

### ① 브랜드 DNA
- **브랜드명**: IKEA
- **한 줄 정체성**: 스칸디나비아 디자인의 글로벌 가성비 가구·홈퍼니싱
- **공식 디자인 철학**: "Democratic design — Form, function, quality, sustainability, low price"
- **시그니처 요소 1개**: 스웨덴 깃발의 IKEA Blue(#0058A3) + Yellow(#FFDB00) 조합 + 흰 캔버스에 가구 컷아웃 + 큰 가격표가 카탈로그처럼 깔끔하게 정렬

### ② 톤 & 무드
- **핵심 키워드 3개**: 가구카탈로그, 스칸디, 가성비
- **무드 설명**: 흰 캔버스 + 회색 카드 보더. 가구 사진은 정직한 흰 배경 컷아웃. 가격은 IKEA Blue 굵은 숫자, 할인은 빨강. UI는 정직하고 카탈로그스럽다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - IKEA Blue */
  --color-primary-50:  #E0EEFA;
  --color-primary-100: #B3D2F0;
  --color-primary-200: #80B3E5;
  --color-primary-300: #4D94D9;
  --color-primary-400: #267CD0;
  --color-primary-500: #0058A3;   /* IKEA Blue */
  --color-primary-600: #004A88;
  --color-primary-700: #003A6B;
  --color-primary-800: #002A4F;
  --color-primary-900: #001A32;

  /* Secondary - IKEA Yellow (Flag) */
  --color-secondary-500: #FFDB00;

  /* Neutral - clean light */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #EFEFEF;
  --color-neutral-200:  #DFDFDF;
  --color-neutral-300:  #BDBDBD;
  --color-neutral-500:  #767676;
  --color-neutral-700:  #484848;
  --color-neutral-800:  #2B2B2B;
  --color-neutral-900:  #111111;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #007F4E;
  --color-warning-bg: #FFF6D1;
  --color-warning-fg: #8C6A00;
  --color-error-bg:   #FDE7E7;
  --color-error-fg:   #CC0000;    /* 할인가 빨강 */
  --color-info-bg:    #E0EEFA;
  --color-info-fg:    #0058A3;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(17,17,17,0.50);

  /* Text */
  --text-primary:    #111111;
  --text-secondary:  #484848;
  --text-tertiary:   #767676;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #BDBDBD;

  /* Border */
  --border-default: #DFDFDF;
  --border-subtle:  #EFEFEF;
  --border-strong:  #BDBDBD;
  --border-focus:   #0058A3;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Noto IKEA (자체) / Verdana 폴백
  - 한글: Noto Sans KR / Pretendard
- **위계**:
  - Display: 44px / 700 / 1.15 / -0.01em
  - H1: 28px / 700 / 1.2 / -0.005em
  - H2: 20px / 700 / 1.3 / 0
  - H3: 16px / 700 / 1.35 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.04em

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
- **Container**: max-width 1380px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 0;          /* 카탈로그 톤: 직각 */
--radius-md: 2px;
--radius-lg: 4px;
--radius-xl: 8px;
--radius-full: 9999px;   /* 버튼만 pill */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.10);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Square
- **추천 라이브러리**: Phosphor / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Noto Sans', 'Pretendard', sans-serif; border-radius: 9999px; padding: 12px 24px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--text-primary); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-cart { background: var(--color-primary-500); color: #fff; border-radius: 9999px; padding: 12px 28px; font-weight: 700; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 2px; padding: 11px 14px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 2px rgba(0,88,163,0.15); }
```

**Card (Product)**
```css
.product { background: #fff; border: 1px solid var(--border-default); padding: 12px; cursor: pointer; transition: border-color 150ms ease; }
.product:hover { border-color: var(--text-primary); }
.product .img { aspect-ratio: 1; background: #fff; display: grid; place-items: center; margin-bottom: 12px; position: relative; }
.product .img .new-price { position: absolute; left: 0; bottom: 0; background: var(--color-secondary-500); color: var(--color-primary-500); font: 800 11px/1 inherit; padding: 4px 8px; letter-spacing: 0.04em; }
.product .name { font: 700 14px/1.3 inherit; color: var(--text-primary); margin-bottom: 4px; }
.product .desc { font: 400 12px/1.4 inherit; color: var(--text-tertiary); margin-bottom: 10px; }
.product .price { font: 800 18px/1 inherit; color: var(--color-primary-500); }
.product .price .old { font: 500 12px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; margin-left: 8px; }
.card { background: #fff; border: 1px solid var(--border-default); padding: 20px; }
```

**Badge / Tag**
```css
.tag { padding: 4px 8px; font: 800 11px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-new-price { background: var(--color-secondary-500); color: var(--color-primary-500); }
.tag-family    { background: var(--color-primary-500); color: var(--color-secondary-500); }   /* IKEA Family */
.tag-bargain   { background: var(--color-error-fg); color: #fff; }
.tag-online    { background: #fff; color: var(--text-primary); border: 1px solid var(--text-primary); }
```

**Navigation (Top bar)**
```css
.topbar { background: var(--color-primary-500); padding: 0 24px; height: 48px; display: flex; align-items: center; gap: 24px; color: var(--color-secondary-500); }
.topbar .brand { font: 800 22px/1 inherit; letter-spacing: 0.02em; color: var(--color-secondary-500); }
.topbar .search { flex: 1; max-width: 720px; background: #fff; padding: 8px 12px; color: var(--text-primary); font-size: 14px; }
.topbar .right { color: #fff; display: flex; gap: 16px; font: 500 13px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. IKEA Blue·Yellow 외 강조색 추가 금지 — 스웨덴 깃발 정체성
2. 카드 모서리 라운드 사용 금지 — 카탈로그 톤은 sharp
3. 가구 사진을 환경 배경에 사용 금지 — 컷아웃이 정체성 (룩북은 예외)
4. 가격을 작게 표기 금지 — IKEA Blue 굵은 가격이 시그니처
5. 다크 모드 캔버스 사용 금지 — 라이트 전용

### ⑫ 시그니처 적용 예시 (Product grid)
```html
<style>
  body { margin: 0; font-family: 'Noto Sans', 'Pretendard', sans-serif; background: #F5F5F5; color: #111; }
  .topbar { background: #0058A3; padding: 0 24px; height: 56px; display: flex; align-items: center; gap: 24px; }
  .topbar .brand { font: 800 28px/1 inherit; letter-spacing: 0.02em; color: #FFDB00; }
  .topbar .search { flex: 1; max-width: 700px; background: #fff; padding: 10px 14px; color: #111; font-size: 14px; }
  .topbar .right { margin-left: auto; color: #fff; display: flex; gap: 18px; font: 500 13px/1 inherit; align-items: center; }
  .container { max-width: 1380px; margin: 0 auto; padding: 32px 24px; }
  .container h1 { font: 700 36px/1.15 inherit; margin: 0 0 8px; letter-spacing: -0.01em; }
  .container .sub { font: 400 16px/1.5 inherit; color: #484848; margin: 0 0 28px; max-width: 720px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .product { background: #fff; border: 1px solid #DFDFDF; padding: 14px; cursor: pointer; transition: border-color 150ms ease; }
  .product:hover { border-color: #111; }
  .product .img { aspect-ratio: 1; background: #fff; display: grid; place-items: center; margin-bottom: 14px; position: relative; }
  .product .img .icon { width: 60%; height: 60%; background: linear-gradient(135deg,#DFDFDF,#fff); border: 1px solid #DFDFDF; }
  .product .img .new-price { position: absolute; left: 0; bottom: 0; background: #FFDB00; color: #0058A3; font: 800 11px/1 inherit; padding: 4px 8px; letter-spacing: 0.04em; }
  .product .img .family { position: absolute; left: 0; top: 0; background: #0058A3; color: #FFDB00; font: 800 10px/1 inherit; padding: 4px 8px; letter-spacing: 0.04em; }
  .product .name { font: 700 14px/1.3 inherit; color: #111; margin-bottom: 4px; }
  .product .desc { font: 400 12px/1.4 inherit; color: #767676; margin-bottom: 12px; }
  .product .price { font: 800 22px/1 inherit; color: #0058A3; }
  .product .price small { font: 500 12px/1 inherit; color: #767676; text-decoration: line-through; margin-left: 8px; }
  .product .stars { font-size: 12px; color: #FFB400; margin-top: 6px; }
  .product .stars .count { color: #767676; margin-left: 4px; }
  .product .cart { margin-top: 12px; width: 32px; height: 32px; background: #0058A3; color: #FFDB00; border-radius: 50%; display: grid; place-items: center; font-size: 16px; }
</style>

<header class="topbar">
  <div class="brand">IKEA</div>
  <div class="search">🔍 책상, 책장, 침대를 검색</div>
  <div class="right"><span>매장 찾기</span><span>♥</span><span>로그인</span><span>🛒 장바구니</span></div>
</header>

<main class="container">
  <h1>책장 & 책꽂이</h1>
  <p class="sub">집의 책과 추억을 정리하는 BILLY 시리즈 외 387개 상품. IKEA Family 가격으로 더 저렴하게.</p>
  <div class="grid">
    <div class="product"><div class="img"><div class="icon"></div><span class="family">FAMILY</span><span class="new-price">새로운 가격</span></div><div class="name">BILLY 빌리</div><div class="desc">책장 80×28×202cm, 화이트</div><div class="price">₩69,900<small>₩89,900</small></div><div class="stars">★★★★★ <span class="count">(4,892)</span></div><div class="cart">🛒</div></div>
    <div class="product"><div class="img"><div class="icon"></div></div><div class="name">KALLAX 칼락스</div><div class="desc">선반 유닛 77×77cm, 화이트</div><div class="price">₩59,900</div><div class="stars">★★★★★ <span class="count">(3,124)</span></div><div class="cart">🛒</div></div>
    <div class="product"><div class="img"><div class="icon"></div><span class="new-price">새로운 가격</span></div><div class="name">FINNBY 핀뷔</div><div class="desc">책장 60×24×180cm</div><div class="price">₩29,900<small>₩39,900</small></div><div class="stars">★★★★ <span class="count">(1,872)</span></div><div class="cart">🛒</div></div>
    <div class="product"><div class="img"><div class="icon"></div></div><div class="name">HEMNES 헴네스</div><div class="desc">책장 90×35×197cm, 화이트 스테인</div><div class="price">₩249,000</div><div class="stars">★★★★★ <span class="count">(982)</span></div><div class="cart">🛒</div></div>
  </div>
</main>
```
