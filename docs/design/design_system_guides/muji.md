---
brand: MUJI
brand_ko: 무인양품
slug: muji
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - lifestyle
  - ecommerce

color_tone: warm
primary_color_hex: "#A8001E"
primary_color_name: "MUJI Red"
mood:
  - 무브랜드
  - 자연
  - 절제

font_category: sans-serif
font_primary: Hiragino / Noto Sans
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1980
last_major_revision: 2024
signature_keyword: "MUJI Red 워드마크와 베이지 자연 톤의 무브랜드 라이프스타일"

hero_html: |
  <div style="font-family:'Hiragino Sans','Noto Sans JP','Apple SD Gothic Neo',sans-serif;background:#F5F2EA;color:#231F20;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #E0DCCF;padding:14px 16px;display:flex;align-items:center;gap:8px;">
      <span style="background:#A8001E;color:#fff;padding:4px 12px;font-size:11px;font-weight:700;letter-spacing:0.04em;">無印良品</span>
      <strong style="font-size:13px;font-weight:500;letter-spacing:0.06em;">MUJI</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="aspect-ratio:5/3;background:linear-gradient(135deg,#E8DDC2,#A89B7B);"></div>
      <div style="font-family:serif;font-size:18px;font-weight:300;letter-spacing:-0.01em;line-height:1.4;">これからの素材<br/><span style="color:#888;font-size:11px;font-weight:400;">자연과 함께하는 일상</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#E0DCCF;">
        <div style="background:#F5F2EA;padding:10px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#E8DDC2,#888);"></div>
          <div style="font-size:11px;color:#888;margin-top:6px;">의류</div>
          <div style="font-size:12px;font-weight:500;line-height:1.3;margin-top:2px;">오가닉 코튼 후드</div>
          <div style="font-size:13px;font-weight:700;margin-top:4px;">38,000円</div>
        </div>
        <div style="background:#F5F2EA;padding:10px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#FFFFFF,#E0DCCF);border:1px solid #E0DCCF;"></div>
          <div style="font-size:11px;color:#888;margin-top:6px;">생활</div>
          <div style="font-size:12px;font-weight:500;line-height:1.3;margin-top:2px;">아로마 디퓨저</div>
          <div style="font-size:13px;font-weight:700;margin-top:4px;">7,490円</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.muji.com/
  - https://ryohin-keikaku.jp/
---

### ① 브랜드 DNA
- **브랜드명**: MUJI (無印良品, 무인양품)
- **한 줄 정체성**: 일본의 무브랜드(no-brand) 라이프스타일 — 자연 색감, 절제된 디자인
- **공식 디자인 철학**: "これでいい (이것으로 충분하다) — 절제, 자연, 익명성"
- **시그니처 요소 1개**: MUJI Red(#A8001E) 사각 박스 워드마크 + 베이지 자연 톤 + 일본어 + 영문 dual

### ② 톤 & 무드
- **핵심 키워드 3개**: 무브랜드, 자연, 절제
- **무드 설명**: 베이지 캔버스 + Red 워드마크 + 브라운/베이지 사진. 절제된 자연 톤이 모든 것.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50: #FCE5E9; --color-primary-100: #F4B8C0;
  --color-primary-200: #E37C8F; --color-primary-300: #D14060;
  --color-primary-400: #BF2244; --color-primary-500: #A8001E;
  --color-primary-600: #8C0019; --color-primary-700: #6E0014;
  --color-primary-800: #50000F; --color-primary-900: #320009;

  --color-secondary-500: #231F20;

  /* MUJI 자연 톤 */
  --muji-beige: #F5F2EA;
  --muji-sand:  #E8DDC2;
  --muji-tan:   #A89B7B;
  --muji-brown: #6E5A3D;

  --color-neutral-0: #FFFFFF; --color-neutral-50: #F5F2EA;
  --color-neutral-100: #E8E2D2; --color-neutral-200: #E0DCCF;
  --color-neutral-300: #C2BCAF; --color-neutral-500: #888;
  --color-neutral-700: #5A5A52; --color-neutral-800: #3A3D24;
  --color-neutral-900: #231F20; --color-neutral-1000: #000000;

  --color-success-bg: #DCEFD9; --color-success-fg: #4F7A38;
  --color-warning-bg: #FFF1D9; --color-warning-fg: #B45309;
  --color-error-bg: #FCE5E9; --color-error-fg: #A8001E;
  --color-info-bg: #E0F0FE; --color-info-fg: #2563EB;

  --bg-base: #F5F2EA; --bg-subtle: #E8E2D2;
  --bg-elevated: #FFFFFF; --bg-overlay: rgba(35,31,32,0.50);

  --text-primary: #231F20; --text-secondary: #5A5A52;
  --text-tertiary: #888; --text-on-primary: #FFFFFF;
  --text-disabled: #C2BCAF;

  --border-default: #E0DCCF; --border-subtle: #E8E2D2;
  --border-strong: #C2BCAF; --border-focus: #231F20;
}

[data-theme="dark"] { --bg-base: #231F20; --bg-subtle: #3A3D24; --bg-elevated: #5A5A52; --text-primary: #F5F2EA; }
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 일본어: Hiragino Sans / Noto Sans JP
  - 한글: Apple SD Gothic Neo / Noto Sans KR / Pretendard
  - 영문: Helvetica / -apple-system
- **위계**:
  - Display (serif 가능): 48px / 300 / 1.2 / -0.005em
  - H1: 28px / 400 / 1.3 / -0.005em
  - H2: 18px / 500 / 1.3 / 0
  - H3: 14px / 500 / 1.4 / 0.06em (MUJI 워드마크)
  - Body Large: 14px / 400 / 1.6 / 0
  - Body: 13px / 400 / 1.6 / 0
  - Caption: 11px / 500 / 1.4 / 0.04em

### ⑤ 스페이싱
- Base 4px, Container max 1200px

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 0; --radius-md: 0;
--radius-lg: 2px; --radius-xl: 4px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.08);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.12);
```

### ⑧ Iconography
- Outline (얇음), 1px, Square + Round
- Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 13px/1 'Hiragino Sans','Noto Sans JP','Apple SD Gothic Neo',sans-serif; letter-spacing:0.04em; border-radius: 0; padding: 12px 22px; border: 0; cursor: pointer; }
.btn-primary { background: #231F20; color: #fff; }
.btn-secondary { background: #fff; color: #231F20; border: 1px solid #231F20; }
.btn-red { background: #A8001E; color: #fff; }
.btn-ghost { background: transparent; color: #231F20; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 1px solid #C2BCAF; border-radius: 0; padding: 11px 13px; font-size: 14px; font-family: inherit; }
.input:focus { outline: none; border-color: #231F20; }
```

**Card**
```css
.card { background: #fff; border: 1px solid #E0DCCF; border-radius: 0; padding: 14px; }
.product { padding: 10px; background: var(--muji-beige); }
.product .img { aspect-ratio: 1; background: linear-gradient(135deg, var(--muji-sand), var(--muji-tan)); }
.product .cat { font-size: 11px; color: var(--text-tertiary); margin-top: 8px; }
.product h3 { font-size: 13px; font-weight: 500; line-height: 1.4; margin: 2px 0 4px; }
.product .price { font-size: 14px; font-weight: 700; }
```

**Badge / MUJI 워드마크**
```css
.muji-mark { background: #A8001E; color: #fff; padding: 6px 14px; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; display: inline-block; }
.tag { padding: 2px 8px; border-radius: 0; font-size: 10px; font-weight: 500; }
.tag-solid { background: #231F20; color: #fff; }
.tag-subtle { background: #E8E2D2; color: #231F20; }
.tag-outline { border: 1px solid #231F20; color: #231F20; background: transparent; }
```

**Navigation**
```css
.topnav { padding: 14px 18px; background: #fff; border-bottom: 1px solid #E0DCCF; display: flex; align-items: center; gap: 14px; }
.topnav .muji-mark { background: #A8001E; color: #fff; padding: 5px 12px; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; }
.topnav .word { font-size: 12px; font-weight: 500; letter-spacing: 0.06em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 250ms; --duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. MUJI Red(#A8001E) 사각 박스 비율을 변형하지 말 것 — 정확한 워드마크
2. 라운드(>4px) 적용 금지 — sharp 시그니처
3. 채도 높은 색 분산 사용 금지 — Red 워드마크 외 자연 톤만
4. 베이지 캔버스를 흰색으로 변경 금지 — 무인양품 자연 톤 보존
5. 폰트 weight 700+ 굵게 강제 금지 — 300~500 절제 톤

### ⑫ 시그니처 적용 예시 (Home)

```html
<style>
  body { margin: 0; font-family: 'Hiragino Sans', 'Noto Sans JP', 'Apple SD Gothic Neo', sans-serif; color: #231F20; background: #F5F2EA; }
  .topnav { padding: 16px 24px; background: #fff; border-bottom: 1px solid #E0DCCF; display: flex; align-items: center; gap: 14px; }
  .muji-mark { background: #A8001E; color: #fff; padding: 6px 14px; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; }
  .word { font-size: 13px; font-weight: 500; letter-spacing: 0.06em; }
  .topnav nav { display: flex; gap: 18px; font-size: 13px; font-weight: 400; }
  .topnav nav a { color: #231F20; }
  .hero { aspect-ratio: 16/7; background: linear-gradient(135deg, #E8DDC2 0%, #A89B7B 100%); position: relative; display: flex; align-items: flex-end; padding: 40px; }
  .hero .quote { color: #231F20; font-family: 'Hiragino Mincho Pro', 'Apple SD Gothic Neo', serif; font-weight: 300; font-size: 36px; line-height: 1.4; letter-spacing: -0.01em; max-width: 480px; }
  .hero .quote .sub { font-size: 13px; color: #5A5A52; font-weight: 400; margin-top: 8px; display: block; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #E0DCCF; padding: 1px 0; }
  .product { background: #F5F2EA; padding: 14px; }
  .product .img { aspect-ratio: 1; background: linear-gradient(135deg, #E8DDC2, #A89B7B); }
  .product .cat { font-size: 11px; color: #888; margin-top: 10px; }
  .product h3 { font-size: 13px; font-weight: 500; line-height: 1.4; margin: 2px 0 6px; }
  .product .price { font-size: 14px; font-weight: 700; }
  .product .small { font-size: 11px; color: #5A5A52; margin-top: 4px; }
</style>

<header class="topnav">
  <span class="muji-mark">無印良品</span>
  <span class="word">MUJI</span>
  <nav style="margin-left:auto;"><a>의류</a><a>생활</a><a>식품</a><a>가구</a></nav>
</header>

<section class="hero">
  <div class="quote">これからの素材<span class="sub">자연과 함께하는 일상의 소재</span></div>
</section>

<div class="grid">
  <article class="product"><div class="img" style="background:linear-gradient(135deg,#E8DDC2,#888);"></div><div class="cat">의류 · 메인즈</div><h3>오가닉 코튼 후드</h3><div class="price">38,000円</div><div class="small">M / L / XL</div></article>
  <article class="product"><div class="img" style="background:linear-gradient(135deg,#FFFFFF,#E0DCCF); border:1px solid #E0DCCF;"></div><div class="cat">생활 · 가전</div><h3>아로마 디퓨저 small</h3><div class="price">7,490円</div></article>
  <article class="product"><div class="img" style="background:linear-gradient(135deg,#A89B7B,#6E5A3D);"></div><div class="cat">가구 · 수납</div><h3>오크 우드 박스</h3><div class="price">12,800円</div></article>
  <article class="product"><div class="img" style="background:linear-gradient(135deg,#F5F2EA,#A89B7B);"></div><div class="cat">식품 · 음료</div><h3>호지차 티백 50p</h3><div class="price">490円</div></article>
</div>
```
