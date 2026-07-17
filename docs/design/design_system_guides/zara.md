---
brand: Zara
brand_ko: 자라
slug: zara
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ecommerce
  - consumer
  - lifestyle

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Zara Black"
mood:
  - 시네마틱패션
  - 세리프로고
  - 룩북

font_category: serif
font_primary: Zara Sans Serif Display
font_korean_supported: true

density: spacious
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1975
last_major_revision: 2023
signature_keyword: "검정 세리프 로고 + 풀블리드 시네마틱 패션 사진 + 1열 룩북 톤의 럭셔리 미니멀"

hero_html: |
  <div style="font-family:'Times New Roman',serif;background:#fff;color:#000;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:14px 14px 6px;display:flex;align-items:center;justify-content:center;border-bottom:0;">
      <strong style="font-family:'Times New Roman',serif;font-size:22px;font-weight:700;letter-spacing:-0.06em;line-height:1;color:#000;">ZARA</strong>
    </div>
    <div style="padding:0;display:flex;flex-direction:column;">
      <div style="flex:1;background:linear-gradient(180deg,#E5DDD3 0%,#A89880 50%,#3F3530 100%);position:relative;">
      </div>
    </div>
    <div style="padding:8px 14px 14px;display:flex;flex-direction:column;gap:4px;">
      <div style="font-family:Arial,sans-serif;font-size:9px;font-weight:600;color:#000;letter-spacing:0.04em;text-transform:uppercase;">WOMAN · STUDIO COLLECTION</div>
      <div style="font-family:Arial,sans-serif;font-size:11px;font-weight:500;color:#000;line-height:1.3;">롱 오버사이즈 트렌치 코트</div>
      <div style="font-family:Arial,sans-serif;font-size:11px;font-weight:600;color:#000;">259,000 KRW</div>
    </div>
  </div>

sources:
  - https://www.zara.com/
  - https://www.inditex.com/
---

### ① 브랜드 DNA
- **브랜드명**: Zara
- **한 줄 정체성**: 스페인 Inditex 그룹의 글로벌 패스트 패션 — 룩북 톤의 시네마틱 패션 카탈로그
- **공식 디자인 철학**: "Trend-driven luxury at accessible price" — 럭셔리 잡지 톤의 패션 카탈로그
- **시그니처 요소 1개**: 검정 세리프 로고(ZARA) + 풀블리드 흑백/세피아 패션 사진 + 1~2열 시네마틱 그리드. Uniqlo의 산세리프·정사각과 정반대의 럭셔리 미니멀

### ② 톤 & 무드
- **핵심 키워드 3개**: 시네마틱패션, 세리프로고, 룩북
- **무드 설명**: 흰 캔버스. 사진은 거의 흑백·세피아. UI는 거의 사라진다 (라벨도 작게). 메타정보는 산세리프 작은 라벨로만, 큰 사진이 주인공.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Spacious — 1~2열 룩북
- **모서리 성향**: Sharp (0px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Zara Black */
  --color-primary-50:  #F7F7F7;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #BFBFBF;
  --color-primary-300: #8A8A8A;
  --color-primary-400: #4A4A4A;
  --color-primary-500: #000000;
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Warm taupe (룩북 톤) */
  --color-secondary-500: #A89880;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F2F2F2;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #555555;
  --color-neutral-800:  #2A2A2A;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1A6E2E;
  --color-warning-bg: #F5F0E5;
  --color-warning-fg: #8C6A00;
  --color-error-bg:   #F5E0E0;
  --color-error-fg:   #A02020;
  --color-info-bg:    #E5EBF2;
  --color-info-fg:    #2C4060;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #2A2A2A;
  --text-tertiary:   #999999;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F2F2F2;
  --border-strong:  #999999;
  --border-focus:   #000000;
}

[data-theme="dark"] {
  --bg-base: #000000;
  --bg-subtle: #0A0A0A;
  --bg-elevated: #1A1A1A;
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.85);
  --text-tertiary: rgba(255,255,255,0.55);
  --border-default: rgba(255,255,255,0.10);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 로고/디스플레이: 자체 세리프 (Times New Roman 폴백)
  - UI: Arial / Helvetica 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 80px / 700 / 1.0 / -0.06em serif (로고/히어로)
  - H1: 36px / 600 / 1.1 / -0.04em serif
  - H2: 18px / 600 / 1.3 / 0 serif
  - H3: 14px / 500 / 1.3 / 0.02em sans uppercase
  - Body Large: 14px / 400 / 1.5 / 0 sans
  - Body: 12px / 400 / 1.45 / 0 sans
  - Body Small: 11px / 400 / 1.4 / 0 sans
  - Caption: 10px / 600 / 1.2 / 0.06em sans uppercase

### ⑤ 스페이싱
- **Base unit**: 4px (Spacious)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 80px;
  --space-3xl: 120px;
  ```
- **Container**: full-bleed (룩북) / max-width 1600px (그리드), 좌우 패딩 14px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 0;
--radius-md: 0;
--radius-lg: 0;
--radius-xl: 0;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.08);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1px
- **모서리 처리**: Square
- **추천 라이브러리**: Phosphor Thin

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 12px/1 Arial, 'Pretendard', sans-serif; letter-spacing: 0.04em; text-transform: uppercase; border-radius: 0; padding: 14px 28px; border: 1px solid #000; background: #fff; color: #000; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, color 200ms ease; }
.btn:hover { background: #000; color: #fff; }
.btn-primary { background: #000; color: #fff; }
.btn-primary:hover { background: #fff; color: #000; }
.btn-secondary { background: #fff; color: #000; }
.btn-ghost { background: transparent; color: #000; border: 0; text-decoration: underline; padding: 0; }
.btn-danger { background: var(--color-error-fg); color: #fff; border: 0; }
.btn-add-bag { width: 100%; padding: 16px; background: #000; color: #fff; border: 0; font: 600 12px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
```

**Input**
```css
.input { background: transparent; border: 0; border-bottom: 1px solid #000; border-radius: 0; padding: 10px 0; color: var(--text-primary); font: 400 13px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-bottom-width: 2px; }
```

**Card (Product, lookbook)**
```css
.lookbook { background: transparent; padding: 0; cursor: pointer; }
.lookbook .img { aspect-ratio: 3/4; background: linear-gradient(180deg, #E5DDD3 0%, #A89880 50%, #3F3530 100%); position: relative; margin-bottom: 12px; }
.lookbook .meta { padding: 0; }
.lookbook .cat { font: 600 10px/1.2 Arial, sans-serif; color: var(--text-primary); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 6px; }
.lookbook .name { font: 500 13px/1.4 Arial, sans-serif; color: var(--text-primary); margin-bottom: 4px; }
.lookbook .price { font: 600 13px/1 Arial, sans-serif; color: var(--text-primary); }
.lookbook .price .old { font-weight: 400; color: var(--text-tertiary); text-decoration: line-through; margin-left: 6px; }
.card { background: #fff; padding: 24px; }
```

**Badge / Tag**
```css
.tag { padding: 4px 0; font: 600 10px/1.4 Arial, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; background: transparent; color: var(--text-primary); }
.tag-new       { color: var(--text-primary); }
.tag-sale      { color: var(--color-error-fg); }
.tag-special   { color: var(--text-primary); border: 1px solid var(--text-primary); padding: 4px 10px; }
.tag-online    { color: var(--text-primary); }
.tag-limited   { color: var(--color-error-fg); border: 1px solid var(--color-error-fg); padding: 4px 10px; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; padding: 18px 18px 14px; display: flex; align-items: center; gap: 18px; }
.topbar .brand { flex: 1; text-align: left; font: 700 32px/1 'Times New Roman', serif; letter-spacing: -0.06em; color: #000; }
.topbar .nav { display: flex; gap: 22px; font: 600 11px/1 Arial, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-primary); }
.topbar .right { display: flex; gap: 18px; font: 500 11px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. 세리프 로고를 산세리프로 변경 금지 — 정체성 핵심
2. 카드 라운드 사용 금지 — sharp(0px)가 룩북 톤
3. 사진을 흰 배경 컷아웃으로 사용 금지 — 풀블리드 환경 사진이 정체성
4. 가격을 큰 굵은 빨강 숫자로 강조 금지 — 작은 산세리프 라벨로 절제
5. 그리드 4~6열 빽빽 사용 금지 — 1~2열 시네마틱 (Shein과 정반대)

### ⑫ 시그니처 적용 예시 (Lookbook spread)
```html
<style>
  body { margin: 0; font-family: Arial, 'Pretendard', sans-serif; background: #fff; color: #000; }
  .topbar { padding: 22px 22px 18px; display: flex; align-items: center; gap: 18px; }
  .topbar .brand { font: 700 36px/1 'Times New Roman', serif; letter-spacing: -0.06em; flex: 1; }
  .topbar .nav { display: flex; gap: 22px; font: 600 11px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
  .topbar .nav .a.active { font-weight: 800; }
  .topbar .right { display: flex; gap: 18px; font: 500 11px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; align-items: center; }
  .topbar .search { background: #FAFAFA; padding: 8px 14px; min-width: 200px; font-size: 12px; color: #999; }
  .hero { width: 100%; aspect-ratio: 21/9; background: linear-gradient(135deg,#3F3530 0%,#A89880 60%,#E5DDD3 100%); position: relative; margin-bottom: 0; }
  .hero .text { position: absolute; left: 6%; bottom: 8%; color: #fff; }
  .hero .text .pre { font: 600 11px/1 inherit; letter-spacing: 0.32em; text-transform: uppercase; opacity: 0.85; margin-bottom: 12px; }
  .hero .text h1 { margin: 0 0 18px; font: 600 80px/1.0 'Times New Roman', serif; letter-spacing: -0.04em; }
  .hero .text .cta { font: 600 12px/1 Arial, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 28px; background: #fff; color: #000; border: 0; cursor: pointer; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
  .item { position: relative; cursor: pointer; }
  .item .img { aspect-ratio: 3/4; }
  .item .meta { padding: 18px 22px 36px; }
  .item .cat { font: 600 10px/1.4 inherit; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
  .item .name { font: 500 13px/1.4 inherit; margin-bottom: 6px; }
  .item .price { font: 600 13px/1 inherit; }
  .item .price .old { font-weight: 400; color: #999; text-decoration: line-through; margin-left: 6px; }
  .row-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 0; }
  .row-3 .item .img { aspect-ratio: 3/4; }
  .container-title { padding: 80px 22px 32px; }
  .container-title h2 { margin: 0; font: 600 28px/1.1 'Times New Roman', serif; letter-spacing: -0.02em; }
  .container-title p { margin: 12px 0 0; font: 400 13px/1.5 inherit; color: #555; max-width: 540px; }
</style>

<header class="topbar">
  <div class="brand">ZARA</div>
  <div class="nav">
    <span class="a active">WOMAN</span>
    <span class="a">MAN</span>
    <span class="a">KIDS</span>
    <span class="a">HOME</span>
    <span class="a">BEAUTY</span>
  </div>
  <div class="search">검색</div>
  <div class="right"><span>Sign in</span><span>♥</span><span>Bag</span></div>
</header>

<section class="hero">
  <div class="text">
    <div class="pre">SS26 — STUDIO COLLECTION</div>
    <h1>Slow Light</h1>
    <button class="cta">Discover</button>
  </div>
</section>

<section class="container-title">
  <h2>The Coat Edit</h2>
  <p>The new season returns to the coat as the centerpiece — oversize trench, sculpted shoulders, single button.</p>
</section>

<section class="grid">
  <div class="item">
    <div class="img" style="background:linear-gradient(180deg,#E5DDD3 0%,#A89880 50%,#3F3530 100%);"></div>
    <div class="meta">
      <div class="cat">WOMAN · STUDIO COLLECTION</div>
      <div class="name">롱 오버사이즈 트렌치 코트</div>
      <div class="price">259,000 KRW</div>
    </div>
  </div>
  <div class="item">
    <div class="img" style="background:linear-gradient(180deg,#0F0F0F 0%,#2A2520 50%,#A89880 100%);"></div>
    <div class="meta">
      <div class="cat">WOMAN · STUDIO COLLECTION</div>
      <div class="name">크롭 더블 브레스트 자켓 · 100% 울</div>
      <div class="price">329,000 KRW</div>
    </div>
  </div>
</section>

<section class="row-3">
  <div class="item">
    <div class="img" style="background:linear-gradient(180deg,#F5F0E5 0%,#D6C5A8 100%);"></div>
    <div class="meta"><div class="cat">WOMAN</div><div class="name">실크 텍스처 드레스 미디</div><div class="price">99,000 KRW</div></div>
  </div>
  <div class="item">
    <div class="img" style="background:linear-gradient(180deg,#A8917D 0%,#3F3530 100%);"></div>
    <div class="meta"><div class="cat">WOMAN</div><div class="name">레더 라이딩 부츠 무릎 높이</div><div class="price">189,000 KRW</div></div>
  </div>
  <div class="item">
    <div class="img" style="background:linear-gradient(180deg,#E5DDD3 0%,#737062 100%);"></div>
    <div class="meta"><div class="cat">WOMAN</div><div class="name">하이 웨이스트 와이드 팬츠</div><div class="price">59,900 KRW</div></div>
  </div>
</section>
```
