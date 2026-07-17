---
brand: Nike
brand_ko: 나이키
slug: nike
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - lifestyle
  - ecommerce
  - consumer

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Nike Black"
mood:
  - 단호함
  - 스포츠
  - 모노

font_category: sans-serif
font_primary: Trade Gothic / Inter
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light

released_year: 1971
last_major_revision: 2024
signature_keyword: "Swoosh + Just Do It + 검정 모노 타이포의 글로벌 스포츠 톤"

hero_html: |
  <div style="font-family:'Trade Gothic',Inter,'Helvetica Neue',-apple-system,sans-serif;background:#FFFFFF;color:#111;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #E5E5E5;padding:12px 16px;display:flex;align-items:center;gap:12px;">
      <svg viewBox="0 0 60 22" style="width:42px;height:16px;" fill="#111"><path d="M59.7 3.6L17.5 21.3c-3.5 1.4-6.3 1.7-8.6 0.7-2.1-1-3.8-3-4.7-5.5-1-2.5-0.9-5.4 0.3-8.4 1.2-3 3.5-5.6 6.5-7.4 0.1-0.1 0.3-0.1 0.4 0 0.1 0.1 0.1 0.2 0 0.4-1.7 1.7-2.8 3.7-3.2 5.6-0.4 1.9-0.1 3.7 0.8 4.9 1 1.3 2.6 2 4.4 1.9 1.5 0 3.2-0.5 5-1.3l40.7-9.6c0.2-0.1 0.4 0.1 0.6 0.4z"/></svg>
      <span style="margin-left:auto;font-size:13px;font-weight:500;">JOIN US · SIGN IN</span>
    </div>
    <div style="padding:0;">
      <div style="aspect-ratio:1.2/1;background:linear-gradient(180deg,#191919 0%,#000 100%);position:relative;display:flex;align-items:center;justify-content:center;color:#fff;">
        <div style="text-align:center;">
          <div style="font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;opacity:0.85;">JUST IN</div>
          <div style="font-family:'Trade Gothic Bold','Helvetica Neue Condensed Bold',sans-serif;font-size:36px;font-weight:900;letter-spacing:-0.025em;line-height:0.95;margin:6px 0 12px;text-transform:uppercase;font-stretch:condensed;">AIR JORDAN<br/>1 RETRO</div>
          <button style="background:#fff;color:#111;border:0;border-radius:9999px;padding:9px 20px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Shop</button>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.nike.com/
  - https://www.nike.com/help/a/customer-content
---

### ① 브랜드 DNA
- **브랜드명**: Nike
- **한 줄 정체성**: 글로벌 스포츠 브랜드의 표준 — Swoosh + Just Do It
- **공식 디자인 철학**: "Bring inspiration and innovation to every athlete in the world"
- **시그니처 요소 1개**: Swoosh 로고 + 검정 굵은 condensed 헤드라인 + 'JUST DO IT' 슬로건

### ② 톤 & 무드
- **핵심 키워드 3개**: 단호함, 스포츠, 모노
- **무드 설명**: 검정/흰색만으로 화면을 구성. 스포츠 사진과 굵은 condensed 폰트가 정체성.
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~4px) — 단, button은 pill (9999px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50: #F5F5F5; --color-primary-100: #E5E5E5;
  --color-primary-200: #C7C7C7; --color-primary-300: #999;
  --color-primary-400: #555; --color-primary-500: #111111;
  --color-primary-600: #1A1A1A; --color-primary-700: #2D2D2D;
  --color-primary-800: #555; --color-primary-900: #888;

  --color-secondary-500: #FA5400;     /* Nike Orange */

  --color-neutral-0: #FFFFFF; --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5; --color-neutral-200: #E5E5E5;
  --color-neutral-300: #C7C7C7; --color-neutral-500: #757575;
  --color-neutral-700: #555555; --color-neutral-800: #2D2D2D;
  --color-neutral-900: #111111; --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5; --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9; --color-warning-fg: #B45309;
  --color-error-bg: #FFE5E5; --color-error-fg: #FA5400;
  --color-info-bg: #E0F0FE; --color-info-fg: #2563EB;

  --bg-base: #FFFFFF; --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF; --bg-overlay: rgba(0,0,0,0.50);

  --text-primary: #111; --text-secondary: #555;
  --text-tertiary: #757575; --text-on-primary: #FFFFFF;
  --text-disabled: #C7C7C7;

  --border-default: #E5E5E5; --border-subtle: #F5F5F5;
  --border-strong: #C7C7C7; --border-focus: #111;
}

[data-theme="dark"] { --bg-base: #111; --bg-subtle: #2D2D2D; --bg-elevated: #555; --text-primary: #fff; }
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문 헤드: Trade Gothic Bold Condensed / Futura Bold Condensed (Nike 라이선스)
  - 영문 본문: Helvetica Neue / Inter / -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display (condensed bold): 80px / 900 / 0.95 / -0.025em (uppercase)
  - H1: 48px / 900 / 1.05 / -0.02em (uppercase)
  - H2: 28px / 700 / 1.2 / -0.015em
  - H3: 16px / 700 / 1.3 / 0.04em (uppercase)
  - Body Large: 15px / 500 / 1.5 / 0
  - Body: 13px / 500 / 1.5 / 0
  - Caption: 11px / 700 / 1.27 / 0.06em (uppercase)

### ⑤ 스페이싱
- Base 4px, Container max 1280px

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 0; --radius-md: 0;
--radius-lg: 4px; --radius-xl: 8px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- Outline (정밀), 1.5px, Square + Round
- Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button** (Nike 시그니처 — pill 9999px)
```css
.btn { font: 700 14px/1 'Trade Gothic',Inter,'Helvetica Neue',sans-serif; letter-spacing:-0.01em; border-radius: 9999px; padding: 12px 24px; border: 0; cursor: pointer; }
.btn-primary { background: #111; color: #fff; }
.btn-primary:hover { background: #555; }
.btn-secondary { background: #fff; color: #111; border: 1px solid #C7C7C7; }
.btn-ghost { background: transparent; color: #111; }
.btn-danger { background: var(--color-secondary-500); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid #C7C7C7; border-radius: 0; padding: 12px 14px; font-size: 14px; font-family: inherit; }
.input:focus { outline: none; border-color: #111; }
```

**Card** (Product card)
```css
.product { padding: 0; }
.product .img { aspect-ratio: 1; background: var(--bg-subtle); }
.product .label { font-size: 11px; color: var(--color-secondary-500); font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin: 12px 0 4px; }
.product h3 { font-size: 15px; font-weight: 700; line-height: 1.3; margin: 0; }
.product .cat { font-size: 13px; color: var(--text-secondary); margin-top: 2px; }
.product .price { font-size: 14px; font-weight: 700; margin-top: 8px; }
.card { background: #fff; border: 1px solid #E5E5E5; border-radius: 0; padding: 14px; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 0; font-size: 10px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; }
.tag-just-in { color: var(--color-secondary-500); }
.tag-solid { background: #111; color: #fff; }
.tag-subtle { background: #F5F5F5; color: #111; }
.tag-outline { border: 1px solid #111; color: #111; background: transparent; }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #E5E5E5; background: #fff; }
.topnav .swoosh { width: 50px; height: 18px; }
.topnav nav { display: flex; gap: 18px; font-size: 14px; font-weight: 500; margin-left: 32px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 250ms; --duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. Swoosh 로고를 임의 변형 금지
2. 헤드라인을 일반 산세리프로 강제 변경 금지 — condensed bold가 시그니처
3. button 라운드를 sharp (4px 미만)으로 변경 금지 — pill 시그니처
4. 본문에 채도 높은 컬러 분산 사용 금지 — 모노 + Orange highlight
5. 'JUST DO IT' 슬로건 임의 변형 금지

### ⑫ 시그니처 적용 예시 (Home)

```html
<style>
  body { margin: 0; font-family: 'Trade Gothic', Inter, 'Helvetica Neue', -apple-system, sans-serif; color: #111; background: #fff; }
  .topnav { padding: 16px 28px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #E5E5E5; }
  .topnav svg { width: 60px; height: 22px; }
  .topnav nav { display: flex; gap: 22px; font-size: 16px; font-weight: 500; margin-left: 32px; }
  .topnav nav a { color: #111; }
  .topnav .right { margin-left: auto; font-size: 13px; font-weight: 500; }
  .hero { aspect-ratio: 16/9; background: linear-gradient(180deg, #2D2D2D 0%, #000 100%); position: relative; display: flex; align-items: center; justify-content: center; color: #fff; }
  .hero h1 { font-family: 'Trade Gothic Bold', 'Helvetica Neue Condensed Bold', sans-serif; font-size: 96px; font-weight: 900; letter-spacing: -0.025em; line-height: 0.92; margin: 12px 0 20px; text-transform: uppercase; text-align: center; }
  .hero .label { font-size: 14px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.85; }
  .hero .cta { display: flex; gap: 8px; justify-content: center; }
  .hero .cta button { background: #fff; color: #111; border: 0; border-radius: 9999px; padding: 12px 28px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; padding: 24px; }
  .product { padding: 0; cursor: pointer; }
  .product .img { aspect-ratio: 1; background: #F5F5F5; }
  .product .img.dark { background: #111; }
  .product .label { font-size: 12px; color: #FA5400; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin: 14px 0 4px; }
  .product h3 { font-size: 16px; font-weight: 700; line-height: 1.3; margin: 0; }
  .product .cat { font-size: 14px; color: #757575; margin-top: 2px; }
  .product .price { font-size: 14px; font-weight: 700; margin-top: 10px; }
</style>

<header class="topnav">
  <svg viewBox="0 0 60 22"><path d="M59.7 3.6L17.5 21.3c-3.5 1.4-6.3 1.7-8.6 0.7-2.1-1-3.8-3-4.7-5.5-1-2.5-0.9-5.4 0.3-8.4 1.2-3 3.5-5.6 6.5-7.4 0.1-0.1 0.3-0.1 0.4 0 0.1 0.1 0.1 0.2 0 0.4-1.7 1.7-2.8 3.7-3.2 5.6-0.4 1.9-0.1 3.7 0.8 4.9 1 1.3 2.6 2 4.4 1.9 1.5 0 3.2-0.5 5-1.3l40.7-9.6c0.2-0.1 0.4 0.1 0.6 0.4z"/></svg>
  <nav><a>New</a><a>Men</a><a>Women</a><a>Kids</a><a>Sale</a></nav>
  <div class="right">JOIN US · SIGN IN</div>
</header>

<section class="hero">
  <div>
    <div class="label">JUST IN</div>
    <h1>AIR JORDAN<br/>1 RETRO</h1>
    <div class="cta">
      <button>Shop</button>
    </div>
  </div>
</section>

<div class="grid">
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#191919,#888);"></div>
    <div class="label">JUST IN</div>
    <h3>Air Jordan 1 Retro High</h3>
    <div class="cat">Men's Shoes · 1 Color</div>
    <div class="price">189,000원</div>
  </article>
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#FA5400,#191919);"></div>
    <div class="label">SOLD OUT</div>
    <h3>Air Force 1 '07</h3>
    <div class="cat">Women's Shoes · 2 Colors</div>
    <div class="price">129,000원</div>
  </article>
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#FFFFFF,#888); border:1px solid #E5E5E5;"></div>
    <div class="label">JUST IN</div>
    <h3>Dunk Low Retro</h3>
    <div class="cat">Men's Shoes · 4 Colors</div>
    <div class="price">109,000원</div>
  </article>
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#FFC700,#FA5400);"></div>
    <div class="label">PROMO</div>
    <h3>Pegasus 41</h3>
    <div class="cat">Running Shoes</div>
    <div class="price">159,000원</div>
  </article>
</div>
```
