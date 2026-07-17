---
brand: AliExpress
brand_ko: 알리익스프레스
slug: aliexpress
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - ecommerce
  - consumer

color_tone: warm
primary_color_hex: "#FF4747"
primary_color_name: "Ali Red"
mood:
  - 세일깃발
  - 직구
  - 정보과부하

font_category: sans-serif
font_primary: Roboto
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2010
last_major_revision: 2024
signature_keyword: "빨강(#FF4747) + 오렌지 그라데이션 세일 깃발 + Choice 배지 + 빽빽한 가격·배송·할인 메타정보"

hero_html: |
  <div style="font-family:Roboto,Inter,'Pretendard',sans-serif;background:#fff;color:#222;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;background:linear-gradient(90deg,#FF4747 0%,#FF9320 100%);color:#fff;">
      <strong style="font-size:13px;font-weight:800;letter-spacing:-0.02em;">AliExpress</strong>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#FEE2CC 0%,#fff 100%);border-radius:8px;position:relative;">
        <span style="position:absolute;left:6px;top:6px;background:linear-gradient(90deg,#FF4747,#FF9320);color:#fff;font-size:8px;font-weight:800;padding:3px 6px;border-radius:2px;letter-spacing:0.02em;">Choice</span>
        <span style="position:absolute;right:6px;top:6px;background:#FFEA00;color:#FF4747;font-size:8px;font-weight:800;padding:3px 6px;border-radius:2px;">-43%</span>
      </div>
      <div>
        <div style="font-size:11px;font-weight:500;color:#222;line-height:1.3;">3-in-1 USB-C 케이블 100W</div>
      </div>
    </div>
    <div style="padding:8px 10px;border-top:1px solid #F0F0F0;display:flex;flex-direction:column;gap:2px;">
      <div style="display:flex;align-items:baseline;gap:4px;">
        <strong style="font-size:14px;color:#FF4747;font-weight:800;">₩4,290</strong>
        <span style="font-size:9px;color:#999;text-decoration:line-through;">₩7,500</span>
      </div>
      <div style="font-size:8px;color:#666;">무료배송 · 5일 내 도착 · ★ 4.8 (12K)</div>
    </div>
  </div>

sources:
  - https://www.aliexpress.com/
  - https://global.alibaba.com/
---

### ① 브랜드 DNA
- **브랜드명**: AliExpress
- **한 줄 정체성**: 알리바바 그룹의 글로벌 직구 마켓플레이스 — 초저가 + 빠른 배송
- **공식 디자인 철학**: 가격·할인·배송 정보를 최대한 노출하는 정보 과부하 톤
- **시그니처 요소 1개**: 빨강(#FF4747) + 오렌지(#FF9320) 그라데이션 세일 깃발 + Choice 배지 + 빽빽한 메타정보(할인율·평점·배송·재고). Coupang의 깔끔과 다르게 정보가 압도적으로 많다

### ② 톤 & 무드
- **핵심 키워드 3개**: 세일깃발, 직구, 정보과부하
- **무드 설명**: 흰 캔버스 + 회색 보더. 모든 카드에 할인율 옐로 배지(#FFEA00) + Choice 그라데이션 배지 + 별점·리뷰수·배송이 빽빽하게 박혀있다. 가격은 빨강 굵은 숫자.
- **비주얼 스타일**: 모던 미니멀 (압축 톤)
- **밀도(Density)**: Compact
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - AliExpress Red */
  --color-primary-50:  #FEE5E5;
  --color-primary-100: #FCBABA;
  --color-primary-200: #F98888;
  --color-primary-300: #F75757;
  --color-primary-400: #FF4747;
  --color-primary-500: #FF4747;   /* Ali Red */
  --color-primary-600: #E03535;
  --color-primary-700: #B82525;
  --color-primary-800: #8C1818;
  --color-primary-900: #5F0D0D;

  /* Secondary - Gradient Orange (sale flag) */
  --color-secondary-500: #FF9320;
  --color-accent-yellow: #FFEA00;   /* -43% 옐로 배지 */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #F0F0F0;
  --color-neutral-200:  #E0E0E0;
  --color-neutral-300:  #CCCCCC;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #444444;
  --color-neutral-900:  #222222;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1A8233;
  --color-warning-bg: #FFF5DA;
  --color-warning-fg: #B27200;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #FF4747;
  --color-info-bg:    #E8F1FB;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(34,34,34,0.50);

  /* Text */
  --text-primary:    #222222;
  --text-secondary:  #444444;
  --text-tertiary:   #666666;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #CCCCCC;

  /* Border */
  --border-default: #F0F0F0;
  --border-subtle:  #F7F7F7;
  --border-strong:  #E0E0E0;
  --border-focus:   #FF4747;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Roboto / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 800 / 1.15 / -0.01em
  - H1: 22px / 700 / 1.2 / -0.005em
  - H2: 16px / 700 / 1.3 / 0
  - H3: 14px / 700 / 1.35 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 10px / 600 / 1.3 / 0.02em

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
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.12);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합 (별·하트는 Filled)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 Roboto, Inter, sans-serif; border-radius: 9999px; padding: 9px 18px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-buy { background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }
.btn-cart-icon { width: 32px; height: 32px; padding: 0; border-radius: 50%; background: var(--color-primary-500); color: #fff; display: grid; place-items: center; }
```

**Input**
```css
.input { background: #fff; border: 1.5px solid var(--color-primary-500); border-radius: 9999px; padding: 9px 14px 9px 38px; color: var(--text-primary); font: 400 13px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; box-shadow: 0 0 0 2px rgba(255,71,71,0.20); }
```

**Card (Product)**
```css
.product { background: #fff; border-radius: 8px; padding: 0; cursor: pointer; transition: box-shadow 200ms ease; }
.product:hover { box-shadow: var(--shadow-md); }
.product .img { aspect-ratio: 1; background: linear-gradient(135deg, #FEE2CC, #fff); border-radius: 8px 8px 0 0; position: relative; }
.product .img .choice { position: absolute; left: 6px; top: 6px; background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; font: 800 10px/1 inherit; padding: 4px 8px; border-radius: 2px; letter-spacing: 0.04em; }
.product .img .discount { position: absolute; right: 6px; top: 6px; background: var(--color-accent-yellow); color: var(--color-primary-500); font: 800 11px/1 inherit; padding: 4px 6px; border-radius: 2px; }
.product .body { padding: 8px 10px 12px; }
.product .name { font: 500 13px/1.35 inherit; color: var(--text-primary); height: 36px; overflow: hidden; margin-bottom: 6px; }
.product .price-row { display: flex; align-items: baseline; gap: 6px; }
.product .price { font: 800 16px/1 inherit; color: var(--color-primary-500); }
.product .price .old { font: 500 11px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; font-weight: 500; }
.product .meta { font: 500 11px/1.4 inherit; color: var(--text-tertiary); margin-top: 4px; }
.product .meta .stars { color: var(--color-warning-fg); }
.product .flag { background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; font: 700 10px/1 inherit; padding: 3px 6px; border-radius: 2px; margin-top: 6px; display: inline-block; letter-spacing: 0.02em; }
.card { background: #fff; border-radius: 8px; padding: 14px; box-shadow: var(--shadow-sm); }
```

**Badge / Tag**
```css
.tag { padding: 3px 6px; border-radius: 2px; font: 800 10px/1.4 inherit; letter-spacing: 0.04em; }
.tag-choice    { background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }
.tag-discount  { background: var(--color-accent-yellow); color: var(--color-primary-500); }
.tag-free-ship { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-coupon    { background: var(--color-primary-50); color: var(--color-primary-500); border: 1px dashed var(--color-primary-500); }
.tag-bigsave   { background: linear-gradient(135deg, #FF4747, #FF1F8F); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500)); padding: 10px 12px; display: flex; align-items: center; gap: 12px; color: #fff; }
.topbar .brand { font: 800 22px/1 inherit; letter-spacing: -0.02em; }
.topbar .search { flex: 1; max-width: 720px; background: #fff; border-radius: 9999px; padding: 8px 14px 8px 38px; color: var(--text-primary); font-size: 13px; position: relative; }
.topbar .search::before { content:'🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--color-primary-500); }
.topbar .right { display: flex; gap: 12px; align-items: center; font: 600 12px/1 inherit; }
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
1. Choice 배지를 일반 배지 색으로 대체 금지 — 빨강·오렌지 그라데이션 고정
2. 할인율 옐로 배지 색 변경 금지 — #FFEA00이 시그니처
3. 메타정보(평점·배송·재고) 생략 금지 — 정보 과부하가 정체성
4. 가격 단색 회색 표기 금지 — 빨강 굵은 숫자
5. 다크 모드 캔버스 사용 금지

### ⑫ 시그니처 적용 예시 (Product grid)
```html
<style>
  body { margin: 0; font-family: Roboto, Inter, 'Pretendard', sans-serif; background: #F7F7F7; color: #222; }
  .topbar { background: linear-gradient(90deg,#FF4747 0%,#FF9320 100%); padding: 12px 14px; display: flex; align-items: center; gap: 14px; color: #fff; }
  .topbar .brand { font: 800 26px/1 inherit; letter-spacing: -0.02em; }
  .topbar .search { flex: 1; max-width: 720px; background: #fff; border-radius: 9999px; padding: 10px 14px 10px 42px; color: #222; font-size: 14px; position: relative; border: 2px solid #fff; }
  .topbar .search::before { content:'🔍'; position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #FF4747; }
  .topbar .right { display: flex; gap: 14px; align-items: center; font: 600 12px/1.3 inherit; }
  .container { max-width: 1280px; margin: 0 auto; padding: 14px 12px; }
  .banner { background: linear-gradient(90deg,#FF1F8F 0%,#FF4747 50%,#FF9320 100%); color: #fff; border-radius: 10px; padding: 18px 22px; margin-bottom: 16px; display: flex; align-items: center; gap: 16px; }
  .banner h1 { margin: 0; font: 800 22px/1.2 inherit; letter-spacing: -0.005em; }
  .banner .sub { font: 500 13px/1.4 inherit; opacity: 0.95; }
  .banner .cta { margin-left: auto; background: #fff; color: #FF4747; font: 800 13px/1 inherit; padding: 10px 18px; border: 0; border-radius: 9999px; cursor: pointer; }
  .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
  .product { background: #fff; border-radius: 8px; cursor: pointer; transition: box-shadow 200ms ease; }
  .product:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.10); }
  .product .img { aspect-ratio: 1; background: linear-gradient(135deg,#FEE2CC,#fff); border-radius: 8px 8px 0 0; position: relative; }
  .product .img .choice { position: absolute; left: 6px; top: 6px; background: linear-gradient(90deg,#FF4747,#FF9320); color: #fff; font: 800 10px/1 inherit; padding: 4px 8px; border-radius: 2px; letter-spacing: 0.04em; }
  .product .img .discount { position: absolute; right: 6px; top: 6px; background: #FFEA00; color: #FF4747; font: 800 11px/1 inherit; padding: 4px 6px; border-radius: 2px; }
  .product .body { padding: 8px 10px 12px; }
  .product .name { font: 500 12px/1.35 inherit; color: #222; height: 32px; overflow: hidden; margin-bottom: 6px; }
  .product .price-row { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; }
  .product .price { font: 800 16px/1 inherit; color: #FF4747; }
  .product .price .old { font: 500 11px/1 inherit; color: #999; text-decoration: line-through; font-weight: 500; }
  .product .ship { font: 600 10px/1.3 inherit; color: #1A8233; margin-top: 4px; }
  .product .stars { font: 500 10px/1.3 inherit; color: #666; margin-top: 3px; }
  .product .stars .star { color: #FFB400; }
  .product .flag { display: inline-block; background: linear-gradient(90deg,#FF4747,#FF9320); color: #fff; font: 700 9px/1 inherit; padding: 3px 6px; border-radius: 2px; margin-top: 6px; letter-spacing: 0.02em; }
</style>

<header class="topbar">
  <div class="brand">AliExpress</div>
  <div class="search">3-in-1 USB-C 케이블 100W</div>
  <div class="right"><span>주문</span><span>♥</span><span>🛒</span></div>
</header>

<main class="container">
  <section class="banner">
    <div>
      <h1>11.11 빅 세일 — 최대 70% 할인</h1>
      <div class="sub">Choice 배지 상품 무료배송 + 신규회원 ₩3,000 쿠폰</div>
    </div>
    <button class="cta">지금 쇼핑</button>
  </section>
  <div class="grid">
    <div class="product">
      <div class="img"><span class="choice">Choice</span><span class="discount">-43%</span></div>
      <div class="body">
        <div class="name">3-in-1 USB-C 100W 고속충전 케이블 1.5m</div>
        <div class="price-row"><span class="price">₩4,290</span><span class="old">₩7,500</span></div>
        <div class="ship">무료배송 · 5일 내 도착</div>
        <div class="stars">★ 4.8 (12K 평가)</div>
        <span class="flag">Top Seller</span>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="choice">Choice</span><span class="discount">-58%</span></div>
      <div class="body">
        <div class="name">블루투스 5.3 무선 이어폰 ANC 노이즈캔슬링</div>
        <div class="price-row"><span class="price">₩12,800</span><span class="old">₩29,900</span></div>
        <div class="ship">무료배송 · 7일 내 도착</div>
        <div class="stars">★ 4.6 (8.4K)</div>
        <span class="flag">Best Deal</span>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="discount">-31%</span></div>
      <div class="body">
        <div class="name">미니 휴대용 진공청소기 USB 차량용</div>
        <div class="price-row"><span class="price">₩8,200</span><span class="old">₩11,900</span></div>
        <div class="ship">₩2,500 배송 · 10일 내</div>
        <div class="stars">★ 4.5 (2,142)</div>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="choice">Choice</span><span class="discount">-22%</span></div>
      <div class="body">
        <div class="name">방수 LED 캠핑 랜턴 4가지 모드</div>
        <div class="price-row"><span class="price">₩14,900</span><span class="old">₩19,200</span></div>
        <div class="ship">무료배송 · 6일 내 도착</div>
        <div class="stars">★ 4.7 (1,082)</div>
        <span class="flag">Choice Day</span>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="discount">-65%</span></div>
      <div class="body">
        <div class="name">실리콘 주방 도구 11종 세트</div>
        <div class="price-row"><span class="price">₩6,750</span><span class="old">₩19,500</span></div>
        <div class="ship">₩1,800 배송 · 12일 내</div>
        <div class="stars">★ 4.4 (4,892)</div>
      </div>
    </div>
  </div>
</main>
```
