---
brand: Temu
brand_ko: 테무
slug: temu
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - ecommerce
  - consumer
  - gaming

color_tone: warm
primary_color_hex: "#FB7701"
primary_color_name: "Temu Orange"
mood:
  - 게임화
  - 룰렛
  - 카운트다운

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2022
last_major_revision: 2024
signature_keyword: "오렌지(#FB7701) + 룰렛·타이머 게임화 + Lightning Deal 이중 카드의 자극 UX"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#FFF8F0;color:#222;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:#FB7701;padding:8px 14px;display:flex;align-items:center;gap:6px;color:#fff;">
      <strong style="font-size:13px;font-weight:800;letter-spacing:-0.01em;">Temu</strong>
      <span style="margin-left:auto;background:#fff;color:#FB7701;font-size:9px;font-weight:800;padding:2px 6px;border-radius:9999px;">🎁 신규</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="background:linear-gradient(135deg,#FB7701 0%,#FF4D00 100%);color:#fff;border-radius:12px;padding:8px 10px;display:flex;align-items:center;gap:6px;">
        <span style="font-size:9px;font-weight:800;letter-spacing:0.04em;">⚡ FLASH</span>
        <strong style="font-size:11px;font-weight:800;margin-left:auto;background:#000;color:#fff;border-radius:4px;padding:2px 5px;font-variant-numeric:tabular-nums;">00:14:38</strong>
      </div>
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#FEEAD1 0%,#fff 100%);border-radius:8px;position:relative;">
        <span style="position:absolute;left:6px;top:6px;background:#FB7701;color:#fff;font-size:8px;font-weight:800;padding:3px 6px;border-radius:9999px;">-86%</span>
      </div>
    </div>
    <div style="padding:6px 10px;background:#fff;border-top:1px solid #FEEAD1;display:flex;align-items:baseline;gap:4px;">
      <strong style="font-size:14px;color:#FB7701;font-weight:800;">₩2,490</strong>
      <span style="font-size:9px;color:#999;text-decoration:line-through;">₩18,000</span>
      <span style="margin-left:auto;font-size:9px;background:#000;color:#fff;padding:3px 7px;border-radius:9999px;font-weight:700;">담기</span>
    </div>
  </div>

sources:
  - https://www.temu.com/
  - https://www.pddholdings.com/
---

### ① 브랜드 DNA
- **브랜드명**: Temu
- **한 줄 정체성**: PDD Holdings의 글로벌 초저가 직구 — 게임화 UX의 끝판왕
- **공식 디자인 철학**: "Shop like a billionaire" — 가격 충격 + 게임적 보상 + 시간 압박
- **시그니처 요소 1개**: Temu Orange(#FB7701) + 룰렛·라이트닝 타이머·할인 게이지 등 도파민 UX. AliExpress가 정보 과부하라면, Temu는 게임 화면

### ② 톤 & 무드
- **핵심 키워드 3개**: 게임화, 룰렛, 카운트다운
- **무드 설명**: 흰·크림 캔버스(#FFF8F0)에 강렬한 오렌지 액센트. 카드는 라운드 round 8~12px, 타이머는 항상 검정 바탕에 흰 숫자. 페이지 곳곳에 룰렛·도장판·보상 UI.
- **비주얼 스타일**: 모던 미니멀 (게임화 톤)
- **밀도(Density)**: Compact
- **모서리 성향**: Round (8~12px)
- **평면성**: Layered — 카드 그림자 + 게이미피케이션 모달

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Temu Orange */
  --color-primary-50:  #FFF1DE;
  --color-primary-100: #FED9AC;
  --color-primary-200: #FDBE7A;
  --color-primary-300: #FCA34B;
  --color-primary-400: #FC8D26;
  --color-primary-500: #FB7701;   /* Temu Orange */
  --color-primary-600: #DF6700;
  --color-primary-700: #B25100;
  --color-primary-800: #803A00;
  --color-primary-900: #4F2300;

  /* Secondary - Hot Red (Lightning Deal) */
  --color-secondary-500: #FF4D00;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FFF8F0;     /* 크림 캔버스 */
  --color-neutral-100:  #FEEAD1;
  --color-neutral-200:  #F2E5D5;
  --color-neutral-300:  #C7BFB1;
  --color-neutral-500:  #888070;
  --color-neutral-700:  #555048;
  --color-neutral-800:  #333028;
  --color-neutral-900:  #222222;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4E2;
  --color-success-fg: #1FA73F;
  --color-warning-bg: #FFF6D1;
  --color-warning-fg: #B27200;
  --color-error-bg:   #FFE0D9;
  --color-error-fg:   #FF4D00;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #FFF8F0;
  --bg-subtle:   #FFFFFF;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(34,34,34,0.50);

  /* Text */
  --text-primary:    #222222;
  --text-secondary:  #555048;
  --text-tertiary:   #888070;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7BFB1;

  /* Border */
  --border-default: #FEEAD1;
  --border-subtle:  #FFF8F0;
  --border-strong:  #F2E5D5;
  --border-focus:   #FB7701;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter / Roboto 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 900 / 1.15 / -0.02em (캠페인)
  - H1: 22px / 800 / 1.2 / -0.01em
  - H2: 16px / 800 / 1.3 / -0.005em
  - H3: 14px / 700 / 1.35 / 0
  - Body Large: 14px / 400 / 1.45 / 0
  - Body: 12px / 400 / 1.4 / 0
  - Body Small: 11px / 500 / 1.35 / 0
  - Caption: 10px / 800 / 1.2 / 0.04em
  - Timer: 13~16px / 800 / 1 tabular-nums (시그니처)

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
- **Container**: max-width 1280px, 좌우 패딩 12px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(251,119,1,0.08);
--shadow-md: 0 4px 12px rgba(251,119,1,0.16);
--shadow-lg: 0 12px 28px rgba(251,119,1,0.24);
--shadow-flash: 0 4px 12px rgba(255,77,0,0.40);   /* 라이트닝 글로우 */
```

### ⑧ Iconography
- **스타일**: Filled + emoji 혼합 (도파민 톤)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Twemoji

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 13px/1 Inter, 'Pretendard', sans-serif; border-radius: 9999px; padding: 11px 22px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: #fff; color: var(--color-primary-500); border: 1.5px solid var(--color-primary-500); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-secondary-500); color: #fff; }
.btn-cart { background: #000; color: #fff; padding: 8px 16px; }
.btn-flash { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; box-shadow: var(--shadow-flash); }
```

**Input**
```css
.input { background: #fff; border: 2px solid var(--color-primary-500); border-radius: 9999px; padding: 10px 16px 10px 40px; color: var(--text-primary); font: 400 13px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; box-shadow: 0 0 0 3px rgba(251,119,1,0.20); }
```

**Card (Product)**
```css
.product { background: #fff; border-radius: 12px; padding: 0; cursor: pointer; transition: box-shadow 200ms ease, transform 200ms ease; }
.product:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.product .img { aspect-ratio: 1; background: linear-gradient(135deg, var(--color-primary-100), #fff); border-radius: 12px 12px 0 0; position: relative; }
.product .img .discount { position: absolute; left: 6px; top: 6px; background: var(--color-primary-500); color: #fff; font: 800 11px/1 inherit; padding: 4px 8px; border-radius: 9999px; }
.product .img .timer { position: absolute; left: 6px; bottom: 6px; background: rgba(0,0,0,0.85); color: #fff; font: 800 11px/1 inherit; padding: 3px 8px; border-radius: 9999px; font-variant-numeric: tabular-nums; }
.product .body { padding: 8px 10px 12px; }
.product .name { font: 500 12px/1.35 inherit; color: var(--text-primary); height: 32px; overflow: hidden; margin-bottom: 6px; }
.product .price-row { display: flex; align-items: baseline; gap: 4px; }
.product .price { font: 800 18px/1 inherit; color: var(--color-primary-500); }
.product .price .old { font: 500 11px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; font-weight: 500; }
.product .meta { font: 600 10px/1.4 inherit; color: var(--color-secondary-500); margin-top: 4px; }
.product .cart { margin-top: 8px; background: #000; color: #fff; font: 800 12px/1 inherit; padding: 8px 14px; border-radius: 9999px; border: 0; cursor: pointer; }
.card { background: #fff; border-radius: 12px; padding: 14px; box-shadow: var(--shadow-sm); }
.flash-card { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; border-radius: 12px; padding: 14px; }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 9999px; font: 800 11px/1.3 inherit; letter-spacing: 0.02em; }
.tag-flash    { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }
.tag-discount { background: var(--color-primary-500); color: #fff; }
.tag-coupon   { background: #fff; color: var(--color-primary-500); border: 1.5px dashed var(--color-primary-500); }
.tag-roulette { background: var(--color-secondary-500); color: #fff; }
.tag-free-gift { background: var(--color-success-bg); color: var(--color-success-fg); }
```

**Navigation (Top bar)**
```css
.topbar { background: var(--color-primary-500); padding: 10px 12px; display: flex; align-items: center; gap: 10px; color: #fff; }
.topbar .brand { font: 800 22px/1 inherit; letter-spacing: -0.01em; }
.topbar .search { flex: 1; max-width: 720px; background: #fff; border-radius: 9999px; padding: 8px 14px 8px 38px; color: var(--text-primary); font-size: 13px; position: relative; border: 2px solid #fff; }
.topbar .search::before { content:'🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--color-primary-500); }
.topbar .right { display: flex; gap: 10px; align-items: center; font: 700 12px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);   /* 룰렛/뱃지 튐 */
```

### ⑪ Anti-patterns
1. 타이머·룰렛 등 게이미피케이션 요소 생략 금지 — Temu의 정체성
2. 캔버스를 순흰색으로 변경 금지 — 따뜻한 크림(#FFF8F0)이 차별
3. 카드 sharp(0px) 사용 금지 — 라운드 12px이 친근 톤
4. 다크 모드 캔버스 사용 금지
5. 메인 액션을 회색으로 변경 금지 — Temu Orange가 시그니처

### ⑫ 시그니처 적용 예시 (Home with Flash + Roulette)
```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', sans-serif; background: #FFF8F0; color: #222; }
  .topbar { background: #FB7701; padding: 12px 14px; display: flex; align-items: center; gap: 12px; color: #fff; }
  .topbar .brand { font: 800 26px/1 inherit; letter-spacing: -0.02em; }
  .topbar .search { flex: 1; max-width: 720px; background: #fff; border-radius: 9999px; padding: 10px 16px 10px 42px; color: #222; font-size: 14px; position: relative; border: 2px solid #fff; }
  .topbar .search::before { content:'🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #FB7701; }
  .topbar .right { display: flex; gap: 12px; align-items: center; font: 700 12px/1.3 inherit; }
  .gift { background: #fff; color: #FB7701; font: 800 12px/1 inherit; padding: 7px 12px; border-radius: 9999px; }
  .container { max-width: 1280px; margin: 0 auto; padding: 14px 12px; }
  .promo-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  .flash { background: linear-gradient(135deg,#FB7701,#FF4D00); color: #fff; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 4px 12px rgba(255,77,0,0.30); }
  .flash .head { display: flex; align-items: center; gap: 8px; font: 800 13px/1 inherit; letter-spacing: 0.04em; }
  .flash .head .timer { background: #000; color: #fff; padding: 4px 8px; border-radius: 9999px; font-variant-numeric: tabular-nums; font: 800 12px/1 inherit; margin-left: auto; }
  .flash strong { font: 800 18px/1.2 inherit; letter-spacing: -0.01em; }
  .flash .cta { background: #fff; color: #FB7701; font: 800 12px/1 inherit; padding: 8px 14px; border-radius: 9999px; border: 0; align-self: flex-start; cursor: pointer; }
  .roulette { background: #fff; border-radius: 12px; padding: 14px; box-shadow: 0 4px 12px rgba(251,119,1,0.10); display: flex; align-items: center; gap: 12px; }
  .roulette .wheel { width: 70px; height: 70px; border-radius: 50%; background: conic-gradient(#FB7701 0 25%,#FF4D00 0 50%,#FCA34B 0 75%,#FB7701 0 100%); position: relative; flex-shrink: 0; }
  .roulette .wheel::before { content:''; position: absolute; inset: 8px; border-radius: 50%; background: #fff; }
  .roulette .wheel::after { content:'🎁'; position: absolute; inset: 0; display: grid; place-items: center; font-size: 22px; }
  .roulette .text strong { font: 800 14px/1.2 inherit; color: #222; display: block; margin-bottom: 4px; }
  .roulette .text .sub { font: 500 11px/1.4 inherit; color: #555; margin-bottom: 6px; }
  .roulette .text .spin { background: #FB7701; color: #fff; font: 800 11px/1 inherit; padding: 6px 12px; border-radius: 9999px; border: 0; cursor: pointer; }
  .coupon { background: #fff; border: 1.5px dashed #FB7701; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 6px; }
  .coupon strong { font: 800 24px/1 inherit; color: #FB7701; }
  .coupon .sub { font: 500 11px/1.4 inherit; color: #555; }
  .coupon .cta { background: #FB7701; color: #fff; font: 800 11px/1 inherit; padding: 7px 14px; border-radius: 9999px; border: 0; align-self: flex-start; cursor: pointer; }
  h2 { font: 800 22px/1.2 inherit; margin: 0 0 4px; letter-spacing: -0.01em; }
  .sub-h { font: 400 12px/1.4 inherit; color: #888070; margin: 0 0 12px; }
  .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
  .product { background: #fff; border-radius: 12px; cursor: pointer; transition: box-shadow 200ms ease, transform 200ms ease; }
  .product:hover { box-shadow: 0 4px 12px rgba(251,119,1,0.20); transform: translateY(-2px); }
  .product .img { aspect-ratio: 1; background: linear-gradient(135deg,#FEEAD1,#fff); border-radius: 12px 12px 0 0; position: relative; }
  .product .img .discount { position: absolute; left: 6px; top: 6px; background: #FB7701; color: #fff; font: 800 11px/1 inherit; padding: 4px 8px; border-radius: 9999px; }
  .product .img .timer { position: absolute; left: 6px; bottom: 6px; background: rgba(0,0,0,0.85); color: #fff; font: 800 11px/1 inherit; padding: 3px 8px; border-radius: 9999px; font-variant-numeric: tabular-nums; }
  .product .body { padding: 8px 10px 12px; }
  .product .name { font: 500 12px/1.35 inherit; color: #222; height: 32px; overflow: hidden; margin-bottom: 6px; }
  .product .price-row { display: flex; align-items: baseline; gap: 4px; flex-wrap: wrap; }
  .product .price { font: 800 18px/1 inherit; color: #FB7701; }
  .product .price .old { font: 500 11px/1 inherit; color: #999; text-decoration: line-through; font-weight: 500; }
  .product .sold { font: 600 10px/1.4 inherit; color: #FF4D00; margin-top: 4px; }
  .product .cart { margin-top: 8px; background: #000; color: #fff; font: 800 12px/1 inherit; padding: 7px 14px; border-radius: 9999px; border: 0; cursor: pointer; }
</style>

<header class="topbar">
  <div class="brand">Temu</div>
  <div class="search">5만원 이하 베스트셀러 검색</div>
  <div class="right"><span class="gift">🎁 신규 가입 ₩30,000</span><span>♥</span><span>🛒</span></div>
</header>

<main class="container">
  <section class="promo-row">
    <div class="flash">
      <div class="head"><span>⚡ Lightning Deals</span><span class="timer">00:14:38</span></div>
      <strong>전 상품 최대 90% OFF</strong>
      <button class="cta">지금 구매</button>
    </div>
    <div class="roulette">
      <div class="wheel"></div>
      <div class="text">
        <strong>매일 룰렛 돌리기</strong>
        <div class="sub">쿠폰 · 무료배송 · 신상 추첨</div>
        <button class="spin">SPIN</button>
      </div>
    </div>
    <div class="coupon">
      <strong>₩5,000</strong>
      <div class="sub">3만원 이상 즉시 사용 · 오늘 자정 만료</div>
      <button class="cta">쿠폰 받기</button>
    </div>
  </section>
  <h2>⚡ Lightning Deals — 곧 종료</h2>
  <p class="sub-h">남은 시간이 적은 핫딜 상품을 모았습니다.</p>
  <div class="grid">
    <div class="product">
      <div class="img"><span class="discount">-86%</span><span class="timer">00:14:38</span></div>
      <div class="body">
        <div class="name">무선 핸디 진공청소기 USB 충전식</div>
        <div class="price-row"><span class="price">₩2,490</span><span class="old">₩18,000</span></div>
        <div class="sold">🔥 1,284명이 보고 있어요</div>
        <button class="cart">＋ 담기</button>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="discount">-72%</span><span class="timer">00:22:11</span></div>
      <div class="body">
        <div class="name">실리콘 주방 도구 11종 세트</div>
        <div class="price-row"><span class="price">₩5,400</span><span class="old">₩19,500</span></div>
        <div class="sold">🔥 842명이 결제 중</div>
        <button class="cart">＋ 담기</button>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="discount">-65%</span><span class="timer">00:08:45</span></div>
      <div class="body">
        <div class="name">방수 LED 캠핑 랜턴 4가지 모드</div>
        <div class="price-row"><span class="price">₩6,750</span><span class="old">₩19,200</span></div>
        <div class="sold">🔥 거의 매진</div>
        <button class="cart">＋ 담기</button>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="discount">-58%</span><span class="timer">01:02:18</span></div>
      <div class="body">
        <div class="name">블루투스 5.3 무선 이어폰 ANC</div>
        <div class="price-row"><span class="price">₩12,800</span><span class="old">₩29,900</span></div>
        <div class="sold">🔥 8.4K 판매</div>
        <button class="cart">＋ 담기</button>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="discount">-43%</span><span class="timer">00:32:08</span></div>
      <div class="body">
        <div class="name">3-in-1 USB-C 100W 케이블 1.5m</div>
        <div class="price-row"><span class="price">₩4,290</span><span class="old">₩7,500</span></div>
        <div class="sold">🔥 12K 판매</div>
        <button class="cart">＋ 담기</button>
      </div>
    </div>
  </div>
</main>
```
