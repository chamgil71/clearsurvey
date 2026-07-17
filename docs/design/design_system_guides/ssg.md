---
brand: SSG.COM
brand_ko: 쓱닷컴
slug: ssg
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - ecommerce
  - lifestyle

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "SSG Black"
mood:
  - 프리미엄
  - 백화점
  - 모노

font_category: sans-serif
font_primary: Pretendard
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
signature_keyword: "검정 모노 톤과 sharp 그리드의 한국 백화점 프리미엄 커머스"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#FFFFFF;color:#191919;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#000;color:#fff;padding:14px 16px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;letter-spacing:-0.04em;">SSG.COM</strong>
    </div>
    <div style="padding:0;">
      <div style="aspect-ratio:5/3;background:linear-gradient(135deg,#191919,#888);display:flex;align-items:flex-end;padding:18px;">
        <div style="color:#fff;">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;opacity:0.85;">SSG SELECT</div>
          <div style="font-size:20px;font-weight:300;line-height:1.2;margin-top:4px;letter-spacing:-0.01em;font-family:'Apple SD Gothic Neo',serif;">백화점의 일상,<br/>SSG에서.</div>
        </div>
      </div>
      <div style="padding:12px;display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#E0E0E0;">
        <div style="background:#fff;padding:10px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#FFE9D5,#191919);"></div>
          <div style="font-size:10px;color:#888;margin-top:6px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">SHINSEGAE</div>
          <div style="font-size:12px;font-weight:600;line-height:1.3;margin-top:2px;">한우 등심 1+ 등급</div>
          <div style="display:flex;align-items:baseline;gap:4px;margin-top:4px;">
            <strong style="font-size:11px;color:#FF3838;">10%</strong>
            <strong style="font-size:14px;font-weight:800;">98,000</strong>
          </div>
        </div>
        <div style="background:#fff;padding:10px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#888,#191919);"></div>
          <div style="font-size:10px;color:#888;margin-top:6px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">EMART</div>
          <div style="font-size:12px;font-weight:600;line-height:1.3;margin-top:2px;">유기농 채소 박스</div>
          <div style="display:flex;align-items:baseline;gap:4px;margin-top:4px;">
            <strong style="font-size:14px;font-weight:800;">28,000</strong>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.ssg.com/
---

### ① 브랜드 DNA
- **브랜드명**: SSG.COM (쓱)
- **한 줄 정체성**: 신세계/이마트 백화점의 온라인 — 프리미엄 커머스
- **공식 디자인 철학**: "백화점의 가치를 일상으로 — 절제된 모노, 큐레이션"
- **시그니처 요소 1개**: 검정 'SSG.COM' 워드마크 + 백화점급 큰 사진 + sharp 0px 그리드

### ② 톤 & 무드
- **핵심 키워드 3개**: 프리미엄, 백화점, 모노
- **무드 설명**: 검정 헤더 + 흰 캔버스 + 큰 에디토리얼 사진. 백화점급 큐레이션 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50: #F5F5F5; --color-primary-100: #E0E0E0;
  --color-primary-200: #C7C7C7; --color-primary-300: #999999;
  --color-primary-400: #555555; --color-primary-500: #000000;
  --color-primary-600: #1A1A1A; --color-primary-700: #2D2D2D;
  --color-primary-800: #555555; --color-primary-900: #888888;

  --color-secondary-500: #FF3838;

  --color-neutral-0: #FFFFFF; --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5; --color-neutral-200: #F0F0F0;
  --color-neutral-300: #E0E0E0; --color-neutral-500: #C7C7C7;
  --color-neutral-700: #888888; --color-neutral-800: #555555;
  --color-neutral-900: #191919; --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5; --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9; --color-warning-fg: #B45309;
  --color-error-bg: #FFE5E5; --color-error-fg: #FF3838;
  --color-info-bg: #E0F0FE; --color-info-fg: #2563EB;

  --bg-base: #FFFFFF; --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF; --bg-overlay: rgba(0,0,0,0.50);

  --text-primary: #191919; --text-secondary: #555;
  --text-tertiary: #888; --text-on-primary: #FFFFFF;
  --text-disabled: #C7C7C7;

  --border-default: #E0E0E0; --border-subtle: #F0F0F0;
  --border-strong: #C7C7C7; --border-focus: #000;
}

[data-theme="dark"] { --bg-base: #000; --bg-subtle: #1A1A1A; --bg-elevated: #2D2D2D; --text-primary: #fff; }
```

### ④ 타이포그래피
- 한글 Pretendard, 영문 -apple-system / "Helvetica Neue"
- Display 56/300/1.1/-0.01em (얇은 헤드) / H1 28/700/1.2 / H2 18/700/1.27 / H3 14/700/1.3
- Body 13/500 / Small 12/500 / Caption 10/700/0.04em (uppercase)

### ⑤ 스페이싱
- Base 4px, Container max 1200px

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 0; --radius-md: 2px;
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

**Button**
```css
.btn { font: 700 13px/1 Pretendard,-apple-system,sans-serif; letter-spacing:0.04em; text-transform: uppercase; border-radius: 0; padding: 14px 18px; border: 0; cursor: pointer; }
.btn-primary { background: #000; color: #fff; }
.btn-secondary { background: #fff; color: #000; border: 1px solid #000; }
.btn-ghost { background: transparent; color: #000; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid #C7C7C7; border-radius: 0; padding: 11px 12px; font-size: 14px; font-family: inherit; }
.input:focus { outline: none; border-color: #000; }
```

**Card** (Product)
```css
.product { padding: 10px; }
.product .img { aspect-ratio: 1; background: var(--bg-subtle); }
.product .brand { font-size: 10px; color: #888; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; margin: 8px 0 2px; }
.product h3 { font-size: 13px; font-weight: 600; line-height: 1.3; margin: 0; }
.product .price-row { display: flex; align-items: baseline; gap: 4px; margin-top: 4px; }
.product .pct { font-size: 12px; color: #FF3838; font-weight: 800; }
.product .price { font-size: 15px; font-weight: 800; }
.card { background: #fff; border: 1px solid #F0F0F0; border-radius: 0; padding: 12px; }
```

**Badge**
```css
.tag { padding: 1px 6px; border-radius: 0; font-size: 10px; font-weight: 800; line-height: 14px; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-solid { background: #000; color: #fff; }
.tag-subtle { background: #F5F5F5; color: #000; }
.tag-outline { border: 1px solid #000; color: #000; background: transparent; }
.tag-shinsegae { background: transparent; color: #000; border: 1px solid #000; padding: 2px 8px; }
.tag-emart { background: #FFCB00; color: #191919; padding: 2px 8px; }
```

**Navigation**
```css
.topnav { padding: 14px 16px; background: #000; color: #fff; display: flex; align-items: center; gap: 12px; }
.topnav .brand { font-weight: 900; font-size: 22px; letter-spacing: -0.04em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 250ms; --duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 컴포넌트에 라운드(>4px) 적용 금지 — sharp 시그니처
2. 신세계/이마트 카테고리 색을 통일 금지 — 신세계 모노 / 이마트 노랑 보존
3. 헤드라인 산세리프 굵은 폰트 강제 금지 — 얇은 세리프 톤 보존
4. 본문 폰트 weight 400 이하 금지
5. 가격 영역에서 할인% 누락 금지

### ⑫ 시그니처 적용 예시 (Mobile home)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #191919; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; }
  .topbar { background: #000; color: #fff; padding: 14px 16px; display: flex; align-items: center; gap: 10px; }
  .topbar .brand { font-weight: 900; font-size: 22px; letter-spacing: -0.04em; }
  .topbar .icons { margin-left: auto; font-size: 18px; }
  .editorial { aspect-ratio: 5/3; background: linear-gradient(135deg,#191919,#888); display: flex; align-items: flex-end; padding: 24px; color: #fff; }
  .editorial .number { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.85; }
  .editorial .title { font-family: 'Apple SD Gothic Neo', serif; font-size: 28px; font-weight: 300; line-height: 1.2; letter-spacing: -0.01em; margin-top: 6px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #E0E0E0; }
  .product { background: #fff; padding: 12px; }
  .product .img { aspect-ratio: 1; background: #F5F5F5; }
  .product .brand-name { font-size: 10px; color: #888; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; margin: 8px 0 2px; }
  .product h3 { font-size: 13px; font-weight: 600; line-height: 1.3; margin: 0; }
  .product .price-row { display: flex; align-items: baseline; gap: 5px; margin-top: 6px; }
  .product .pct { font-size: 12px; color: #FF3838; font-weight: 800; }
  .product .price { font-size: 15px; font-weight: 800; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">SSG.COM</span>
    <span class="icons">🔍 ♡ 🛒</span>
  </header>
  <section class="editorial">
    <div>
      <div class="number">SSG SELECT · 005</div>
      <div class="title">백화점의 일상,<br/>SSG에서.</div>
    </div>
  </section>
  <div class="grid">
    <article class="product"><div class="img" style="background:linear-gradient(135deg,#FFE9D5,#191919);"></div><div class="brand-name">SHINSEGAE</div><h3>한우 등심 1+ 등급 600g</h3><div class="price-row"><span class="pct">10%</span><span class="price">98,000</span></div></article>
    <article class="product"><div class="img" style="background:linear-gradient(135deg,#888,#191919);"></div><div class="brand-name">EMART</div><h3>유기농 채소 박스</h3><div class="price-row"><span class="price">28,000</span></div></article>
    <article class="product"><div class="img" style="background:linear-gradient(135deg,#FFC700,#191919);"></div><div class="brand-name">EMART</div><h3>제주 감귤 5kg 특품</h3><div class="price-row"><span class="pct">15%</span><span class="price">22,800</span></div></article>
    <article class="product"><div class="img" style="background:linear-gradient(135deg,#FFE9D5,#888);"></div><div class="brand-name">SHINSEGAE</div><h3>프리미엄 와인 셀렉션</h3><div class="price-row"><span class="price">128,000</span></div></article>
  </div>
</div>
```
