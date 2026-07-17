---
brand: Uniqlo
brand_ko: 유니클로
slug: uniqlo
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - ecommerce
  - consumer
  - lifestyle

color_tone: warm
primary_color_hex: "#FF0000"
primary_color_name: "Uniqlo Red"
mood:
  - 일본미니멀
  - 카타카나로고
  - 라이프웨어

font_category: sans-serif
font_primary: Helvetica
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 1984
last_major_revision: 2023
signature_keyword: "빨강(#FF0000) 박스 로고 + 검정 카타카나 ユニクロ + 흰 캔버스 + 직각 카탈로그 그리드"

hero_html: |
  <div style="font-family:Helvetica,'Pretendard',Arial,sans-serif;background:#fff;color:#000;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:0;display:flex;align-items:stretch;border-bottom:1px solid #E5E5E5;">
      <div style="background:#FF0000;padding:8px 12px;display:flex;align-items:center;gap:4px;color:#fff;">
        <strong style="font-size:13px;font-weight:800;letter-spacing:0.04em;line-height:1;">UNIQLO</strong>
        <span style="font-size:10px;font-weight:800;line-height:1;">ユニクロ</span>
      </div>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="aspect-ratio:3/4;background:linear-gradient(180deg,#F8F5F0 0%,#D9CFC2 100%);position:relative;">
        <span style="position:absolute;left:0;bottom:0;background:#FF0000;color:#fff;font-size:9px;font-weight:800;padding:4px 8px;letter-spacing:0.02em;">한정 가격</span>
      </div>
      <div>
        <div style="font-size:10px;font-weight:500;color:#000;line-height:1.3;">에어리즘 코튼 크루넥 티셔츠</div>
        <div style="font-size:9px;color:#666;">유니섹스 · 4가지 컬러</div>
      </div>
    </div>
    <div style="padding:6px 10px;border-top:1px solid #E5E5E5;display:flex;align-items:baseline;gap:6px;">
      <strong style="font-size:14px;color:#FF0000;font-weight:800;">₩14,900</strong>
      <span style="font-size:9px;color:#999;text-decoration:line-through;">₩19,900</span>
    </div>
  </div>

sources:
  - https://www.uniqlo.com/
  - https://www.fastretailing.com/
---

### ① 브랜드 DNA
- **브랜드명**: Uniqlo
- **한 줄 정체성**: 일본의 라이프웨어 — 기본 베이직 + 기능성 소재 (HEATTECH / AIRism / Ultra Light Down)
- **공식 디자인 철학**: "LifeWear — Simple made better" · Made for All
- **시그니처 요소 1개**: 빨강(#FF0000) 박스 로고 + 검정 카타카나(ユニクロ) + 흰 캔버스 + 직각 카탈로그 그리드. Zara의 세리프·시네마틱과 정반대의 일본 미니멀

### ② 톤 & 무드
- **핵심 키워드 3개**: 일본미니멀, 카타카나로고, 라이프웨어
- **무드 설명**: 흰 캔버스 + 검정 텍스트 + 빨강 액센트. 사진은 모델 풀바디 + 정사각 컬러 옵션 칩. 라벨은 직각, 가격 옆 한정가격은 빨강.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Uniqlo Red */
  --color-primary-50:  #FEE5E5;
  --color-primary-100: #FCBABA;
  --color-primary-200: #F98888;
  --color-primary-300: #F75757;
  --color-primary-400: #FA2D2D;
  --color-primary-500: #FF0000;   /* Uniqlo Red */
  --color-primary-600: #CC0000;
  --color-primary-700: #990000;
  --color-primary-800: #660000;
  --color-primary-900: #330000;

  /* Secondary - Charcoal (텍스트) */
  --color-secondary-500: #1A1A1A;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F2F2F2;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #CCCCCC;
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
  --color-error-fg:   #FF0000;
  --color-info-bg:    #E8F0FB;
  --color-info-fg:    #2C70BE;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #333333;
  --text-tertiary:   #666666;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #CCCCCC;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F2F2F2;
  --border-strong:  #CCCCCC;
  --border-focus:   #FF0000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Helvetica Neue / Helvetica
  - 일본어 (로고): 자체 카타카나
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 40px / 800 / 1.15 / -0.01em
  - H1: 28px / 700 / 1.2 / -0.005em
  - H2: 20px / 700 / 1.3 / 0
  - H3: 16px / 700 / 1.35 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 10px / 700 / 1.2 / 0.04em uppercase

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
--radius-sm: 0;          /* 시그니처: 직각 */
--radius-md: 0;
--radius-lg: 2px;
--radius-xl: 4px;
--radius-full: 9999px;   /* 필터칩만 */
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
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square
- **추천 라이브러리**: Phosphor Light / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 Helvetica, sans-serif; border-radius: 0; padding: 14px 26px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #000; color: #fff; }
.btn-outline { background: #fff; color: #000; border: 1px solid #000; }
.btn-ghost { background: transparent; color: var(--color-primary-500); text-decoration: underline; padding: 0; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-add-cart { background: #000; color: #fff; width: 100%; padding: 14px; font-size: 14px; }
```

**Input**
```css
.input { background: #fff; border: 1px solid #000; border-radius: 0; padding: 11px 14px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); }
```

**Card (Product)**
```css
.product { background: #fff; padding: 0; cursor: pointer; }
.product .img { aspect-ratio: 3/4; background: linear-gradient(180deg, #F8F5F0, #D9CFC2); position: relative; }
.product .img .limited { position: absolute; left: 0; bottom: 0; background: var(--color-primary-500); color: #fff; font: 800 11px/1 inherit; padding: 5px 10px; letter-spacing: 0.02em; }
.product .img .new { position: absolute; left: 0; top: 0; background: #000; color: #fff; font: 800 11px/1 inherit; padding: 5px 10px; letter-spacing: 0.02em; }
.product .body { padding: 8px 0 0; }
.product .name { font: 500 13px/1.4 inherit; color: var(--text-primary); margin-bottom: 6px; min-height: 36px; }
.product .colors { display: flex; gap: 4px; margin-bottom: 8px; }
.product .colors .dot { width: 14px; height: 14px; border: 1px solid #E5E5E5; cursor: pointer; }
.product .price { font: 800 16px/1 inherit; color: var(--text-primary); }
.product .price.limited { color: var(--color-primary-500); }
.product .price .old { font: 500 12px/1 inherit; color: var(--text-tertiary); text-decoration: line-through; margin-left: 6px; font-weight: 500; }
.product .stars { font: 500 11px/1.3 inherit; color: var(--text-tertiary); margin-top: 4px; }
.card { background: #fff; border: 1px solid var(--border-default); padding: 20px; }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 0; font: 800 11px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-limited { background: var(--color-primary-500); color: #fff; }
.tag-new     { background: #000; color: #fff; }
.tag-online  { background: #fff; color: #000; border: 1px solid #000; }
.tag-tech    { background: #1A1A1A; color: #fff; }   /* HEATTECH / AIRism */
.tag-collab  { background: #fff; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }   /* +J / UU 콜라보 */
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; display: flex; align-items: stretch; border-bottom: 1px solid var(--border-default); }
.topbar .brand { background: var(--color-primary-500); padding: 14px 22px; display: flex; align-items: center; gap: 6px; color: #fff; }
.topbar .brand .en { font: 800 18px/1 inherit; letter-spacing: 0.04em; }
.topbar .brand .ja { font: 800 13px/1 inherit; }
.topbar .nav { display: flex; align-items: center; gap: 24px; padding: 0 22px; font: 500 13px/1 inherit; color: var(--text-primary); }
.topbar .right { margin-left: auto; padding: 0 22px; display: flex; gap: 18px; align-items: center; font: 500 12px/1 inherit; }
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
1. 카타카나 (ユニクロ) 또는 박스 로고 분리 사용 금지 — 함께 쓰는 게 시그니처
2. 라운드 카드/버튼 사용 금지 — 직각이 일본 미니멀 정체성
3. 사진을 라이프스타일 환경으로만 사용 금지 — 모델 풀바디 + 컬러 옵션이 표준
4. 빨강을 본문에 사용 금지 — 로고와 한정가격에만
5. 다크 모드 캔버스 사용 금지

### ⑫ 시그니처 적용 예시 (Product grid with color options)
```html
<style>
  body { margin: 0; font-family: Helvetica, 'Pretendard', Arial, sans-serif; background: #fff; color: #000; }
  .topbar { display: flex; align-items: stretch; border-bottom: 1px solid #E5E5E5; }
  .topbar .brand { background: #FF0000; padding: 16px 22px; display: flex; flex-direction: column; align-items: center; gap: 4px; color: #fff; }
  .topbar .brand .en { font: 800 20px/1 inherit; letter-spacing: 0.04em; }
  .topbar .brand .ja { font: 800 14px/1 inherit; }
  .topbar .nav { display: flex; align-items: center; gap: 24px; padding: 0 22px; font: 500 14px/1 inherit; }
  .topbar .nav .a { color: #000; cursor: pointer; }
  .topbar .nav .a.active { color: #FF0000; font-weight: 700; }
  .topbar .right { margin-left: auto; padding: 0 22px; display: flex; gap: 18px; align-items: center; font: 500 13px/1 inherit; }
  .container { max-width: 1380px; margin: 0 auto; padding: 32px 20px; }
  .container h1 { font: 800 32px/1.15 inherit; margin: 0 0 4px; letter-spacing: -0.005em; }
  .container .sub { font: 400 14px/1.5 inherit; color: #666; margin: 0 0 24px; }
  .filters { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }
  .filters .chip { padding: 8px 14px; border: 1px solid #000; font: 600 12px/1 inherit; cursor: pointer; }
  .filters .chip.active { background: #000; color: #fff; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .product { background: #fff; cursor: pointer; }
  .product .img { aspect-ratio: 3/4; background: linear-gradient(180deg,#F8F5F0,#D9CFC2); position: relative; }
  .product .img .limited { position: absolute; left: 0; bottom: 0; background: #FF0000; color: #fff; font: 800 11px/1 inherit; padding: 6px 10px; letter-spacing: 0.04em; }
  .product .img .new { position: absolute; left: 0; top: 0; background: #000; color: #fff; font: 800 11px/1 inherit; padding: 6px 10px; letter-spacing: 0.04em; }
  .product .body { padding: 10px 0 0; }
  .product .name { font: 500 14px/1.4 inherit; color: #000; margin-bottom: 8px; min-height: 40px; }
  .product .colors { display: flex; gap: 4px; margin-bottom: 8px; }
  .product .colors .dot { width: 16px; height: 16px; border: 1px solid #E5E5E5; cursor: pointer; }
  .product .price { font: 800 18px/1 inherit; }
  .product .price.lim { color: #FF0000; }
  .product .price .old { font: 500 12px/1 inherit; color: #999; text-decoration: line-through; margin-left: 6px; font-weight: 500; }
  .product .stars { font: 500 11px/1.3 inherit; color: #666; margin-top: 6px; }
</style>

<header class="topbar">
  <div class="brand"><span class="en">UNIQLO</span><span class="ja">ユニクロ</span></div>
  <div class="nav">
    <span class="a active">여성</span>
    <span class="a">남성</span>
    <span class="a">키즈</span>
    <span class="a">베이비</span>
    <span class="a">스토어 정보</span>
  </div>
  <div class="right"><span>매장 찾기</span><span>♥</span><span>로그인</span><span>🛒</span></div>
</header>

<main class="container">
  <h1>에어리즘 시리즈</h1>
  <p class="sub">AIRism · 매끄럽고 시원한 일상 베이직</p>
  <div class="filters">
    <span class="chip active">전체</span>
    <span class="chip">티셔츠</span>
    <span class="chip">언더웨어</span>
    <span class="chip">셔츠</span>
    <span class="chip">팬츠</span>
    <span class="chip">한정 가격</span>
  </div>
  <div class="grid">
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#F8F5F0,#D9CFC2);"><span class="limited">한정 가격</span></div>
      <div class="body">
        <div class="name">에어리즘 코튼 크루넥 티셔츠 (반팔) · 유니섹스</div>
        <div class="colors"><span class="dot" style="background:#fff"></span><span class="dot" style="background:#000"></span><span class="dot" style="background:#9CA09C"></span><span class="dot" style="background:#3A5C7D"></span></div>
        <div class="price lim">₩14,900<span class="old">₩19,900</span></div>
        <div class="stars">★★★★★ (12,824)</div>
      </div>
    </div>
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#EDE5DA,#A89F8C);"><span class="new">NEW</span></div>
      <div class="body">
        <div class="name">에어리즘 코튼 옥스포드 셔츠 (긴팔)</div>
        <div class="colors"><span class="dot" style="background:#fff"></span><span class="dot" style="background:#1A6E9E"></span><span class="dot" style="background:#3A5C7D"></span></div>
        <div class="price">₩39,900</div>
        <div class="stars">★★★★ (482)</div>
      </div>
    </div>
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#E5E0D5,#A89F8C);"><span class="limited">한정 가격</span></div>
      <div class="body">
        <div class="name">에어리즘 와플 크루넥 티셔츠 (긴팔)</div>
        <div class="colors"><span class="dot" style="background:#fff"></span><span class="dot" style="background:#000"></span><span class="dot" style="background:#5C6A4D"></span><span class="dot" style="background:#B58860"></span></div>
        <div class="price lim">₩19,900<span class="old">₩29,900</span></div>
        <div class="stars">★★★★ (8,142)</div>
      </div>
    </div>
    <div class="product">
      <div class="img" style="background:linear-gradient(180deg,#F0EAE0,#C7B89F);"></div>
      <div class="body">
        <div class="name">울트라 라이트 다운 베스트</div>
        <div class="colors"><span class="dot" style="background:#000"></span><span class="dot" style="background:#3A5C7D"></span><span class="dot" style="background:#5C6A4D"></span><span class="dot" style="background:#9F4F4F"></span></div>
        <div class="price">₩59,900</div>
        <div class="stars">★★★★★ (4,892)</div>
      </div>
    </div>
  </div>
</main>
```
