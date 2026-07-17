---
brand: Shein
brand_ko: 쉬인
slug: shein
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - ecommerce
  - consumer
  - lifestyle

color_tone: cool
primary_color_hex: "#000000"
primary_color_name: "Shein Black"
mood:
  - 패스트패션
  - 그리드밀집
  - 핑크액세서리

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2008
last_major_revision: 2024
signature_keyword: "검정·흰 + Shein Pink(#FF60AC) 액세서리 + 인물 컷이 빽빽한 6열 패션 그리드"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#fff;color:#222;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #EEE;">
      <strong style="font-size:18px;font-weight:900;color:#000;letter-spacing:-0.02em;">SHEIN</strong>
    </div>
    <div style="padding:8px;display:flex;flex-direction:column;gap:6px;">
      <div style="aspect-ratio:3/4;background:linear-gradient(180deg,#F5F0EC 0%,#D9C9BC 100%);border-radius:0;position:relative;">
        <span style="position:absolute;left:6px;top:6px;background:#FF60AC;color:#fff;font-size:8px;font-weight:800;padding:2px 5px;letter-spacing:0.04em;">신상</span>
        <span style="position:absolute;left:6px;bottom:6px;background:#000;color:#fff;font-size:7px;font-weight:700;padding:2px 4px;">-58%</span>
        <span style="position:absolute;right:6px;top:6px;color:#fff;font-size:14px;">♡</span>
      </div>
      <div>
        <div style="font-size:10px;font-weight:500;color:#222;line-height:1.3;height:24px;overflow:hidden;">크롭 박시 핏 빈티지 워시 데님 자켓</div>
      </div>
    </div>
    <div style="padding:6px 8px;display:flex;flex-direction:column;gap:2px;border-top:1px solid #EEE;">
      <div style="display:flex;align-items:baseline;gap:4px;">
        <strong style="font-size:13px;color:#000;font-weight:800;">₩18,900</strong>
        <span style="font-size:9px;color:#999;text-decoration:line-through;">₩44,900</span>
      </div>
      <div style="font-size:8px;color:#FF60AC;font-weight:700;">★ 4.7 (12.4K) · S25P15 코드 추가할인</div>
    </div>
  </div>

sources:
  - https://www.shein.com/
  - https://www.sheingroup.com/
---

### ① 브랜드 DNA
- **브랜드명**: Shein
- **한 줄 정체성**: 중국발 글로벌 울트라 패스트 패션 — 매일 신상 수천 개
- **공식 디자인 철학**: 인물 컷·트렌드 키워드를 압축한 그리드형 패션 카탈로그
- **시그니처 요소 1개**: 검정 SHEIN 로고 + 흰 캔버스 + Pink(#FF60AC) 액세서리(신상·할인 라벨·하트) + 6열 빽빽한 인물 컷 그리드. AliExpress의 그라데이션 깃발과 정반대의 모노톤 + 핑크

### ② 톤 & 무드
- **핵심 키워드 3개**: 패스트패션, 그리드밀집, 핑크액세서리
- **무드 설명**: 흰 캔버스. 사진은 화이트 백·인물 풀바디. 액세서리 핑크가 강조. 가격은 검정 굵은 숫자, 할인은 검정 sharp 배지. 모서리는 sharp(0~2px)로 패션 카탈로그 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 6~7열 그리드
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Shein Black */
  --color-primary-50:  #F5F5F5;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #BFBFBF;
  --color-primary-300: #8A8A8A;
  --color-primary-400: #4A4A4A;
  --color-primary-500: #000000;   /* Shein Black */
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Shein Pink (액세서리) */
  --color-secondary-500: #FF60AC;
  --color-secondary-300: #FFA0CC;
  --color-secondary-700: #C73D85;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F2F2F2;
  --color-neutral-200:  #EEEEEE;
  --color-neutral-300:  #CCCCCC;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #333333;
  --color-neutral-900:  #222222;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1A8233;
  --color-warning-bg: #FFF5DA;
  --color-warning-fg: #B27200;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #E51F4C;
  --color-info-bg:    #E8F0FB;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #222222;
  --text-secondary:  #555555;
  --text-tertiary:   #999999;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #CCCCCC;

  /* Border */
  --border-default: #EEEEEE;
  --border-subtle:  #F2F2F2;
  --border-strong:  #CCCCCC;
  --border-focus:   #000000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter / Roboto 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 900 / 1.1 / -0.02em (로고/캠페인)
  - H1: 22px / 800 / 1.2 / -0.01em
  - H2: 16px / 700 / 1.3 / -0.005em
  - H3: 14px / 700 / 1.35 / 0
  - Body Large: 14px / 400 / 1.45 / 0
  - Body: 12px / 400 / 1.4 / 0
  - Body Small: 11px / 500 / 1.35 / 0
  - Caption: 10px / 700 / 1.2 / 0.04em uppercase

### ⑤ 스페이싱
- **Base unit**: 4px (Compact)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 40px;
  --space-3xl: 56px;
  ```
- **Container**: max-width 1340px, 좌우 패딩 10px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 0;          /* 시그니처: sharp 그리드 */
--radius-md: 2px;
--radius-lg: 4px;
--radius-xl: 8px;
--radius-full: 9999px;
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
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 Inter, 'Pretendard', sans-serif; border-radius: 0; padding: 11px 22px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; letter-spacing: 0.02em; text-transform: uppercase; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-neutral-700); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--text-primary); }
.btn-ghost { background: transparent; color: var(--text-primary); text-decoration: underline; text-transform: none; letter-spacing: 0; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-pink { background: var(--color-secondary-500); color: #fff; }   /* 한정 액션 */
.btn-add-cart { background: var(--color-primary-500); color: #fff; width: 100%; padding: 13px; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid transparent; border-radius: 0; padding: 11px 14px 11px 38px; color: var(--text-primary); font: 400 13px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--text-primary); background: #fff; }
```

**Card (Product)**
```css
.product { background: #fff; padding: 0; cursor: pointer; }
.product .img { aspect-ratio: 3/4; background: linear-gradient(180deg, #F5F0EC, #D9C9BC); position: relative; }
.product .img .new { position: absolute; left: 6px; top: 6px; background: var(--color-secondary-500); color: #fff; font: 800 10px/1 inherit; padding: 3px 6px; letter-spacing: 0.04em; }
.product .img .discount { position: absolute; left: 6px; bottom: 6px; background: var(--color-primary-500); color: #fff; font: 700 11px/1 inherit; padding: 3px 5px; }
.product .img .heart { position: absolute; right: 6px; top: 6px; color: #fff; font-size: 18px; opacity: 0.9; }
.product .body { padding: 6px 4px 0; }
.product .name { font: 500 12px/1.35 inherit; color: var(--text-primary); height: 32px; overflow: hidden; margin-bottom: 4px; }
.product .price-row { display: flex; align-items: baseline; gap: 4px; }
.product .price { font: 800 14px/1 inherit; color: var(--text-primary); }
.product .price .old { font: 500 11px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; font-weight: 500; }
.product .meta { font: 500 10px/1.4 inherit; color: var(--color-secondary-700); margin-top: 4px; }
.card { background: #fff; padding: 16px; border: 1px solid var(--border-default); border-radius: 0; }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; border-radius: 0; font: 800 10px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-new       { background: var(--color-secondary-500); color: #fff; }
.tag-discount  { background: var(--color-primary-500); color: #fff; }
.tag-bestseller{ background: #fff; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.tag-trending  { background: var(--color-secondary-500); color: #fff; }
.tag-premium   { background: #C7A95B; color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; padding: 12px 14px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid var(--border-default); }
.topbar .brand { font: 900 22px/1 inherit; color: #000; letter-spacing: -0.02em; }
.topbar .search { flex: 1; max-width: 720px; }
.topbar .nav { display: flex; gap: 18px; font: 500 13px/1 inherit; color: var(--text-secondary); }
.topbar .right { display: flex; gap: 16px; align-items: center; font: 500 12px/1 inherit; }
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
1. 카드·버튼 라운드 사용 금지 — sharp(0~2px)가 패션 카탈로그 톤
2. 메인 액션을 핑크 버튼으로 사용 금지 — 검정이 메인, 핑크는 액세서리
3. 사진을 컷아웃으로 사용 금지 — 인물 풀바디가 정체성
4. 그리드 3열 이하 사용 금지 — 5~6열 빽빽한 카탈로그
5. 다크 모드 캔버스 사용 금지

### ⑫ 시그니처 적용 예시 (Category grid)
```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', sans-serif; background: #fff; color: #222; }
  .topbar { padding: 12px 14px; display: flex; align-items: center; gap: 18px; border-bottom: 1px solid #EEEEEE; position: sticky; top: 0; background: #fff; z-index: 10; }
  .topbar .brand { font: 900 24px/1 inherit; color: #000; letter-spacing: -0.02em; }
  .topbar .nav { display: flex; gap: 18px; font: 600 12px/1 inherit; color: #222; }
  .topbar .nav .a.active { color: #FF60AC; }
  .topbar .search { flex: 1; max-width: 460px; background: #FAFAFA; border-radius: 0; padding: 9px 12px 9px 36px; color: #999; font-size: 13px; position: relative; }
  .topbar .search::before { content:'🔍'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%); }
  .topbar .right { display: flex; gap: 14px; align-items: center; font: 500 12px/1 inherit; }
  .banner { background: #000; color: #fff; padding: 14px 18px; display: flex; align-items: center; gap: 14px; font: 500 13px/1 inherit; }
  .banner strong { background: #FF60AC; color: #fff; padding: 3px 8px; font: 800 11px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
  .banner .cta { margin-left: auto; background: #fff; color: #000; font: 800 12px/1 inherit; padding: 8px 16px; cursor: pointer; letter-spacing: 0.06em; text-transform: uppercase; }
  .container { max-width: 1340px; margin: 0 auto; padding: 14px 10px; }
  h1 { font: 800 24px/1.2 inherit; margin: 0 0 4px; letter-spacing: -0.01em; }
  .sub { font: 400 12px/1.4 inherit; color: #999; margin: 0 0 16px; }
  .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; }
  .product { background: #fff; cursor: pointer; }
  .product .img { aspect-ratio: 3/4; position: relative; }
  .product .img .new { position: absolute; left: 5px; top: 5px; background: #FF60AC; color: #fff; font: 800 9px/1 inherit; padding: 3px 5px; letter-spacing: 0.04em; }
  .product .img .discount { position: absolute; left: 5px; bottom: 5px; background: #000; color: #fff; font: 700 11px/1 inherit; padding: 3px 5px; }
  .product .img .heart { position: absolute; right: 6px; top: 6px; color: #fff; font-size: 17px; opacity: 0.9; }
  .product .body { padding: 5px 2px 0; }
  .product .name { font: 500 11px/1.35 inherit; color: #222; height: 30px; overflow: hidden; margin-bottom: 3px; }
  .product .price-row { display: flex; align-items: baseline; gap: 4px; }
  .product .price { font: 800 14px/1 inherit; color: #000; }
  .product .price .old { font: 500 10px/1 inherit; color: #999; text-decoration: line-through; font-weight: 500; }
  .product .meta { font: 600 10px/1.4 inherit; color: #FF60AC; margin-top: 3px; }
</style>

<header class="topbar">
  <div class="brand">SHEIN</div>
  <div class="nav">
    <span class="a active">신상</span>
    <span class="a">여성</span>
    <span class="a">SHEIN×</span>
    <span class="a">큐레이션</span>
    <span class="a">홈</span>
    <span class="a">뷰티</span>
  </div>
  <div class="search">검색</div>
  <div class="right"><span>♥</span><span>주문</span><span>🛒</span></div>
</header>

<div class="banner">
  <strong>FLASH SALE</strong><span>전 상품 최대 70% OFF · 5만원 이상 무료배송 · 코드: S25P15</span>
  <button class="cta">지금 쇼핑</button>
</div>

<main class="container">
  <h1>신상 — 데님 자켓</h1>
  <p class="sub">12,482개 상품 · 매일 새로 업데이트</p>
  <div class="grid">
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#F5F0EC,#D9C9BC);">
        <span class="new">신상</span><span class="discount">-58%</span><span class="heart">♡</span>
      </div>
      <div class="body">
        <div class="name">크롭 박시 핏 빈티지 워시 데님 자켓</div>
        <div class="price-row"><span class="price">₩18,900</span><span class="old">₩44,900</span></div>
        <div class="meta">★ 4.7 (12.4K)</div>
      </div>
    </div>
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#E5E0D5,#A89F8C);">
        <span class="new">신상</span><span class="discount">-42%</span><span class="heart">♡</span>
      </div>
      <div class="body">
        <div class="name">오버사이즈 그래픽 프린트 자켓 · 빈티지 워시</div>
        <div class="price-row"><span class="price">₩22,400</span><span class="old">₩38,500</span></div>
        <div class="meta">★ 4.6 (3,142)</div>
      </div>
    </div>
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#D6E0DA,#7E9787);">
        <span class="discount">-65%</span><span class="heart">♡</span>
      </div>
      <div class="body">
        <div class="name">라이트 워시 데님 트러커 자켓 슬림핏</div>
        <div class="price-row"><span class="price">₩16,200</span><span class="old">₩46,800</span></div>
        <div class="meta">★ 4.5 (8.2K)</div>
      </div>
    </div>
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#F0E5DD,#D6BFA5);">
        <span class="new">신상</span><span class="heart">♡</span>
      </div>
      <div class="body">
        <div class="name">패딩 라이닝 윈터 데님 자켓</div>
        <div class="price-row"><span class="price">₩42,900</span></div>
        <div class="meta">★ 4.8 (1,124)</div>
      </div>
    </div>
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#EFE3E0,#C09A92);">
        <span class="discount">-50%</span><span class="heart">♡</span>
      </div>
      <div class="body">
        <div class="name">라이트 핑크 워시 크롭 자켓 · 코튼 100%</div>
        <div class="price-row"><span class="price">₩19,500</span><span class="old">₩39,000</span></div>
        <div class="meta">★ 4.7 (2,842)</div>
      </div>
    </div>
  </div>
</main>
```
