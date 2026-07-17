---
brand: Adidas
brand_ko: 아디다스
slug: adidas
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
primary_color_name: "Adidas Black"
mood:
  - 3선스트라이프
  - 굵은산세리프
  - 스포츠

font_category: sans-serif
font_primary: AdihausDIN
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light

released_year: 1949
last_major_revision: 2024
signature_keyword: "검정·흰 + 3선 스트라이프 + 굵은 산세리프 대문자 헤드라인의 스포츠웨어 톤"

hero_html: |
  <div style="font-family:AdihausDIN,Helvetica,'Pretendard',sans-serif;background:#fff;color:#000;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #EEE;">
      <span style="display:inline-flex;align-items:flex-end;gap:1.5px;">
        <span style="display:inline-block;width:3px;height:8px;background:#000;transform:skewX(-20deg);"></span>
        <span style="display:inline-block;width:3px;height:11px;background:#000;transform:skewX(-20deg);"></span>
        <span style="display:inline-block;width:3px;height:14px;background:#000;transform:skewX(-20deg);"></span>
      </span>
      <strong style="font-size:13px;font-weight:800;letter-spacing:-0.02em;text-transform:lowercase;">adidas</strong>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#F0F0F0 0%,#fff 100%);position:relative;">
        <span style="position:absolute;left:0;top:0;background:#000;color:#fff;font-size:9px;font-weight:800;padding:4px 8px;letter-spacing:0.06em;">NEW</span>
      </div>
      <div>
        <div style="font-size:8px;font-weight:800;color:#666;letter-spacing:0.08em;text-transform:uppercase;line-height:1.2;">ORIGINALS</div>
        <div style="font-size:11px;font-weight:600;color:#000;line-height:1.3;">SAMBA OG 슈즈</div>
      </div>
    </div>
    <div style="padding:6px 10px;border-top:1px solid #EEE;display:flex;align-items:baseline;gap:6px;">
      <strong style="font-size:14px;color:#000;font-weight:700;">₩139,000</strong>
      <span style="margin-left:auto;font-size:9px;background:#000;color:#fff;padding:4px 10px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;">담기</span>
    </div>
  </div>

sources:
  - https://www.adidas.com/
  - https://brand.adidas.com/
---

### ① 브랜드 DNA
- **브랜드명**: Adidas
- **한 줄 정체성**: 글로벌 스포츠웨어 — 3선 스트라이프와 트리포일·산봉우리 로고의 헤리티지
- **공식 디자인 철학**: "Impossible is nothing" — 굵은 산세리프 헤드라인 + 검정·흰 강한 대비
- **시그니처 요소 1개**: 3선 스트라이프 + 굵은 산세리프 대문자(SAMBA / GAZELLE / SUPERSTAR) + 검정/흰 모노톤. Nike의 Just Do It 스우시와 정반대의 3선 헤리티지

### ② 톤 & 무드
- **핵심 키워드 3개**: 3선스트라이프, 굵은산세리프, 스포츠
- **무드 설명**: 흰 캔버스 + 검정 헤드라인 + 빨강 보조(시즌 캠페인 한정). 사진은 자연광 운동·스니커즈 컷. 헤드라인은 대문자, 카드는 sharp(0px).
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘 (대문자 굵은 헤드라인)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Adidas Black */
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

  /* Secondary - Adidas Red (캠페인 한정) */
  --color-secondary-500: #E32B2B;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #EEEEEE;
  --color-neutral-200:  #E0E0E0;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #333333;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1A8233;
  --color-warning-bg: #FFF5DA;
  --color-warning-fg: #B27200;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #E32B2B;
  --color-info-bg:    #E8F0FB;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #333333;
  --text-tertiary:   #666666;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #EEEEEE;
  --border-subtle:  #F7F7F7;
  --border-strong:  #999999;
  --border-focus:   #000000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: AdihausDIN (자체) / Helvetica Bold 폴백
  - 한글: Pretendard Black / Noto Sans KR Black
- **위계**:
  - Display: 96px / 800 / 0.9 / -0.04em UPPERCASE (시그니처 헤드라인)
  - H1: 48px / 800 / 1.0 / -0.02em UPPERCASE
  - H2: 28px / 700 / 1.15 / -0.01em UPPERCASE
  - H3: 16px / 700 / 1.3 / 0.04em UPPERCASE
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 10px / 800 / 1.2 / 0.08em UPPERCASE

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 1440px, 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 0;
--radius-md: 0;
--radius-lg: 0;
--radius-xl: 4px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.12);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square
- **추천 라이브러리**: Phosphor / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 13px/1 AdihausDIN, Helvetica, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; border-radius: 0; padding: 16px 28px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 150ms ease, color 150ms ease; }
.btn-primary { background: #000; color: #fff; }
.btn-primary:hover { background: var(--color-secondary-500); }
.btn-secondary { background: #fff; color: #000; border: 1.5px solid #000; }
.btn-secondary:hover { background: #000; color: #fff; }
.btn-ghost { background: transparent; color: #000; text-decoration: underline; padding: 0; }
.btn-danger { background: var(--color-secondary-500); color: #fff; }
.btn-add-cart { background: #000; color: #fff; padding: 18px; width: 100%; font-size: 14px; }
.btn-arrow { background: #000; color: #fff; padding: 14px 24px; display: inline-flex; align-items: center; gap: 12px; }
.btn-arrow::after { content:'→'; }
```

**Input**
```css
.input { background: #fff; border: 1.5px solid #000; border-radius: 0; padding: 12px 14px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-secondary-500); }
```

**Card (Product)**
```css
.product { background: #fff; padding: 0; cursor: pointer; transition: transform 200ms ease; }
.product:hover { transform: translateY(-2px); }
.product .img { aspect-ratio: 1; background: linear-gradient(135deg, #F0F0F0, #fff); position: relative; }
.product .img .new { position: absolute; left: 0; top: 0; background: #000; color: #fff; font: 800 11px/1 inherit; padding: 5px 10px; letter-spacing: 0.08em; text-transform: uppercase; }
.product .img .heart { position: absolute; right: 8px; top: 8px; font-size: 18px; color: #000; }
.product .body { padding: 12px 0 0; }
.product .label { font: 800 10px/1.2 inherit; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 6px; }
.product .name { font: 700 14px/1.3 inherit; color: var(--text-primary); margin-bottom: 6px; text-transform: capitalize; }
.product .price { font: 700 14px/1 inherit; color: var(--text-primary); }
.product .price .old { font: 500 12px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; margin-left: 6px; }
.product .colors { font: 500 12px/1 inherit; color: var(--text-tertiary); margin-top: 6px; }
.card { background: #fff; border: 1px solid var(--border-default); padding: 24px; border-radius: 0; }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 0; font: 800 11px/1.4 inherit; letter-spacing: 0.08em; text-transform: uppercase; }
.tag-new       { background: #000; color: #fff; }
.tag-sale      { background: var(--color-secondary-500); color: #fff; }
.tag-collab    { background: #fff; color: #000; border: 1.5px solid #000; }   /* Y-3 / Wales Bonner */
.tag-essentials{ background: #000; color: #fff; }
.tag-3-stripes { background: #fff; color: #000; border: 1.5px solid #000; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; padding: 16px 16px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid var(--border-default); }
.topbar .brand { display: flex; align-items: center; gap: 8px; }
.topbar .brand .three { display: inline-flex; align-items: flex-end; gap: 2px; }
.topbar .brand .three span { display: inline-block; width: 5px; background: #000; transform: skewX(-20deg); }
.topbar .brand .three span:nth-child(1) { height: 14px; }
.topbar .brand .three span:nth-child(2) { height: 20px; }
.topbar .brand .three span:nth-child(3) { height: 26px; }
.topbar .brand strong { font: 800 22px/1 inherit; letter-spacing: -0.02em; text-transform: lowercase; }
.topbar .nav { display: flex; gap: 24px; font: 800 13px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.topbar .right { margin-left: auto; display: flex; gap: 18px; align-items: center; font: 500 12px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 3선 스트라이프 형태 변경 금지 — 기울어진 평행 3선이 시그니처
2. 헤드라인을 소문자·세리프로 사용 금지 — 굵은 대문자 산세리프가 정체성
3. 라운드 카드/버튼 사용 금지 — sharp(0px)이 표준
4. 빨강을 본문에 일반화 금지 — 캠페인 한정
5. 다크 모드 캔버스 사용 금지

### ⑫ 시그니처 적용 예시 (Product grid + Hero)
```html
<style>
  body { margin: 0; font-family: AdihausDIN, Helvetica, 'Pretendard', sans-serif; background: #fff; color: #000; }
  .topbar { padding: 18px 18px; display: flex; align-items: center; gap: 24px; border-bottom: 1px solid #EEEEEE; }
  .topbar .brand { display: flex; align-items: flex-end; gap: 8px; }
  .topbar .brand .three { display: inline-flex; align-items: flex-end; gap: 2px; }
  .topbar .brand .three span { display: inline-block; width: 5px; background: #000; transform: skewX(-20deg); }
  .topbar .brand .three span:nth-child(1) { height: 16px; }
  .topbar .brand .three span:nth-child(2) { height: 22px; }
  .topbar .brand .three span:nth-child(3) { height: 28px; }
  .topbar .brand strong { font: 800 26px/0.9 inherit; letter-spacing: -0.02em; text-transform: lowercase; }
  .topbar .nav { display: flex; gap: 24px; font: 800 13px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
  .topbar .nav .a.active { border-bottom: 2px solid #000; padding-bottom: 4px; }
  .topbar .right { margin-left: auto; display: flex; gap: 18px; align-items: center; font: 500 12px/1 inherit; }
  .hero { background: #000; color: #fff; padding: 80px 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center; }
  .hero .text .pre { font: 800 12px/1 inherit; letter-spacing: 0.32em; text-transform: uppercase; opacity: 0.7; margin-bottom: 16px; }
  .hero .text h1 { margin: 0 0 24px; font: 800 80px/0.9 inherit; letter-spacing: -0.04em; text-transform: uppercase; }
  .hero .text p { margin: 0 0 28px; font: 400 16px/1.5 inherit; max-width: 480px; opacity: 0.85; }
  .hero .text .cta { background: #fff; color: #000; font: 800 13px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; padding: 18px 32px; border: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 12px; }
  .hero .text .cta::after { content:'→'; font-size: 16px; }
  .hero .visual { aspect-ratio: 1; background: linear-gradient(135deg,#333,#0A0A0A); position: relative; }
  .hero .visual::after { content:''; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 80%; aspect-ratio: 4/3; background: linear-gradient(135deg,#F5F5F5,#A0A0A0); }
  .container { max-width: 1440px; margin: 0 auto; padding: 56px 16px; }
  .container h2 { font: 800 36px/1.0 inherit; letter-spacing: -0.02em; text-transform: uppercase; margin: 0 0 6px; }
  .sub { font: 500 14px/1.5 inherit; color: #666; margin: 0 0 28px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .product { background: #fff; cursor: pointer; transition: transform 200ms ease; }
  .product:hover { transform: translateY(-3px); }
  .product .img { aspect-ratio: 1; background: linear-gradient(135deg,#F0F0F0,#fff); position: relative; }
  .product .img .new { position: absolute; left: 0; top: 0; background: #000; color: #fff; font: 800 11px/1 inherit; padding: 6px 10px; letter-spacing: 0.08em; text-transform: uppercase; }
  .product .img .heart { position: absolute; right: 10px; top: 10px; font-size: 20px; color: #000; }
  .product .body { padding: 14px 0 0; }
  .product .label { font: 800 10px/1.2 inherit; letter-spacing: 0.12em; text-transform: uppercase; color: #666; margin-bottom: 6px; }
  .product .name { font: 700 15px/1.3 inherit; color: #000; margin-bottom: 6px; text-transform: capitalize; }
  .product .price { font: 700 14px/1 inherit; }
  .product .price .old { font: 500 12px/1 inherit; color: #999; text-decoration: line-through; margin-left: 6px; }
  .product .colors { font: 500 12px/1 inherit; color: #999; margin-top: 6px; }
</style>

<header class="topbar">
  <div class="brand"><div class="three"><span></span><span></span><span></span></div><strong>adidas</strong></div>
  <div class="nav">
    <span class="a active">남성</span>
    <span class="a">여성</span>
    <span class="a">키즈</span>
    <span class="a">스니커즈</span>
    <span class="a">스토리즈</span>
    <span class="a">세일</span>
  </div>
  <div class="right"><span>매장 찾기</span><span>♥</span><span>로그인</span><span>가방</span></div>
</header>

<section class="hero">
  <div class="text">
    <div class="pre">ORIGINALS · NEW SEASON</div>
    <h1>IMPOSSIBLE<br/>IS NOTHING.</h1>
    <p>SAMBA · GAZELLE · SUPERSTAR — 헤리티지 라인의 새 시즌 컬러웨이가 도착했습니다.</p>
    <button class="cta">SHOP NEW SEASON</button>
  </div>
  <div class="visual"></div>
</section>

<main class="container">
  <h2>ORIGINALS — SAMBA</h2>
  <p class="sub">스포츠 헤리티지에서 출발한 어디서나 어울리는 클래식.</p>
  <div class="grid">
    <div class="product">
      <div class="img"><span class="new">NEW</span><span class="heart">♡</span></div>
      <div class="body">
        <div class="label">ORIGINALS</div>
        <div class="name">Samba OG 슈즈</div>
        <div class="price">₩139,000</div>
        <div class="colors">3가지 컬러</div>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="heart">♡</span></div>
      <div class="body">
        <div class="label">ORIGINALS</div>
        <div class="name">Gazelle Indoor 슈즈</div>
        <div class="price">₩129,000</div>
        <div class="colors">5가지 컬러</div>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="new">NEW</span><span class="heart">♡</span></div>
      <div class="body">
        <div class="label">ORIGINALS · COLLAB</div>
        <div class="name">Wales Bonner × Samba</div>
        <div class="price">₩239,000</div>
        <div class="colors">2가지 컬러</div>
      </div>
    </div>
    <div class="product">
      <div class="img"><span class="heart">♡</span></div>
      <div class="body">
        <div class="label">ORIGINALS</div>
        <div class="name">Superstar 슈즈</div>
        <div class="price">₩119,000<span class="old">₩149,000</span></div>
        <div class="colors">8가지 컬러</div>
      </div>
    </div>
  </div>
</main>
```
