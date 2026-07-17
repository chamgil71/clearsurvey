---
brand: Etsy
brand_ko: 엣시
slug: etsy
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ecommerce
  - consumer
  - lifestyle

color_tone: warm
primary_color_hex: "#F1641E"
primary_color_name: "Etsy Orange"
mood:
  - 핸드메이드
  - 따뜻
  - 셀러스토리

font_category: serif
font_primary: Graphik
font_korean_supported: true

density: comfortable
corner_style: pill
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2005
last_major_revision: 2024
signature_keyword: "오렌지(#F1641E) Pill CTA + 셀러 스토리 카드 + Guesa 세리프 로고의 따뜻한 마켓 톤"

hero_html: |
  <div style="font-family:Graphik,Inter,'Pretendard',sans-serif;background:#FFFFFF;color:#222;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #EFEFEF;">
      <strong style="font-family:Guesa,'Times New Roman',serif;font-size:18px;font-weight:700;color:#F1641E;letter-spacing:-0.02em;line-height:1;">Etsy</strong>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:8px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#F4D8B6 0%,#D9A35E 100%);border-radius:8px;position:relative;display:flex;align-items:flex-start;padding:8px;">
        <span style="background:#F1641E;color:#fff;font-size:8px;font-weight:700;padding:3px 6px;border-radius:9999px;">Bestseller</span>
        <span style="margin-left:auto;font-size:14px;color:rgba(255,255,255,0.95);">♥</span>
      </div>
      <div>
        <div style="font-size:11px;font-weight:500;color:#222;line-height:1.3;">Hand-thrown ceramic mug</div>
        <div style="font-size:9px;color:#595959;">LunaClayStudio · 4.9 ★ (1,284)</div>
      </div>
    </div>
    <div style="padding:8px 12px;border-top:1px solid #EFEFEF;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:13px;color:#222;font-weight:700;">$32.00</strong>
      <span style="font-size:9px;color:#595959;">+ shipping</span>
      <span style="margin-left:auto;background:#F1641E;color:#fff;font-size:9px;font-weight:700;padding:4px 10px;border-radius:9999px;">담기</span>
    </div>
  </div>

sources:
  - https://www.etsy.com/
  - https://www.etsy.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Etsy
- **한 줄 정체성**: 핸드메이드·빈티지 셀러 마켓플레이스 — 1인 크리에이터 경제의 본진
- **공식 디자인 철학**: "Keep commerce human" — 따뜻한 셀러 스토리 우선
- **시그니처 요소 1개**: 오렌지(#F1641E) Pill CTA + Guesa 세리프 로고 + 셀러 스토리 카드(샵 이름·평점·라이프)가 카드마다 노출되는 휴머니즘 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 핸드메이드, 따뜻, 셀러스토리
- **무드 설명**: 흰 캔버스에 따뜻한 베이지 보더. 오렌지 액센트는 액션·하트·찜에만. 카드는 라운드(8px), 버튼은 pill. 사진은 자연광 라이프스타일 톤.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Pill (버튼) + Round 8px (카드)
- **평면성**: Subtle — 호버 시 미세 그림자

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Etsy Orange */
  --color-primary-50:  #FEEFE4;
  --color-primary-100: #FBD3B5;
  --color-primary-200: #F8B384;
  --color-primary-300: #F5904D;
  --color-primary-400: #F37730;
  --color-primary-500: #F1641E;   /* Etsy Orange */
  --color-primary-600: #D44F0E;
  --color-primary-700: #A93D0A;
  --color-primary-800: #7B2B07;
  --color-primary-900: #4E1B04;

  /* Secondary - Sage / Warm clay (셀러 톤) */
  --color-secondary-500: #589273;

  /* Neutral - warm beige scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAF6F2;
  --color-neutral-100:  #F2EBE3;
  --color-neutral-200:  #E6DDD2;
  --color-neutral-300:  #C5BCB1;
  --color-neutral-500:  #898378;
  --color-neutral-700:  #595350;
  --color-neutral-800:  #3A3633;
  --color-neutral-900:  #222222;
  --color-neutral-1000: #0E0E0E;

  /* Semantic */
  --color-success-bg: #E4F4EB;
  --color-success-fg: #1F8F4E;
  --color-warning-bg: #FFF3D6;
  --color-warning-fg: #A87100;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #B12704;
  --color-info-bg:    #E8F2FB;
  --color-info-fg:    #2D6FD2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAF6F2;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(34,34,34,0.50);

  /* Text */
  --text-primary:    #222222;
  --text-secondary:  #595350;
  --text-tertiary:   #898378;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C5BCB1;

  /* Border */
  --border-default: #E6DDD2;
  --border-subtle:  #F2EBE3;
  --border-strong:  #C5BCB1;
  --border-focus:   #F1641E;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 로고: Guesa (자체) / Domaine Display 세리프 폴백
  - UI: Graphik / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.015em serif (랜딩 hero)
  - H1: 28px / 700 / 1.25 / -0.01em
  - H2: 22px / 600 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em

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
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(34,34,34,0.06);
--shadow-md: 0 4px 12px rgba(34,34,34,0.10);
--shadow-lg: 0 12px 28px rgba(34,34,34,0.14);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선) — 하트는 Filled Toggle
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Graphik, Inter, sans-serif; border-radius: 9999px; padding: 11px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { transform: scale(0.98); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--text-primary); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-cart { background: var(--color-primary-500); color: #fff; }
.btn-fav { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.95); color: var(--text-primary); display: grid; place-items: center; box-shadow: var(--shadow-sm); }
.btn-fav.active { color: var(--color-primary-500); }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 9999px; padding: 11px 18px 11px 42px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 2px rgba(241,100,30,0.15); }
```

**Card (Listing)**
```css
.listing { background: #fff; border-radius: 8px; cursor: pointer; transition: transform 200ms ease, box-shadow 200ms ease; }
.listing:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.listing .img { aspect-ratio: 1; border-radius: 8px; background: linear-gradient(135deg, #F4D8B6, #D9A35E); position: relative; }
.listing .img .fav { position: absolute; right: 8px; top: 8px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.95); display: grid; place-items: center; }
.listing .img .best { position: absolute; left: 8px; top: 8px; background: var(--color-primary-500); color: #fff; font: 700 11px/1 inherit; padding: 4px 10px; border-radius: 9999px; letter-spacing: 0.02em; }
.listing .body { padding: 12px 4px 0; }
.listing .by { font: 500 12px/1.3 inherit; color: var(--text-tertiary); margin-bottom: 4px; }
.listing .title { font: 500 14px/1.4 inherit; color: var(--text-primary); margin-bottom: 6px; }
.listing .stars { font: 500 12px/1 inherit; color: var(--text-tertiary); margin-bottom: 6px; }
.listing .stars .star { color: #B57500; }
.listing .price { font: 700 16px/1 inherit; color: var(--text-primary); }
.listing .price .ship { font: 500 12px/1 inherit; color: var(--text-tertiary); margin-left: 4px; font-weight: 500; }
.card { background: #fff; border-radius: 8px; padding: 20px; box-shadow: var(--shadow-sm); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 700 11px/1.4 inherit; letter-spacing: 0.02em; }
.tag-bestseller { background: var(--color-primary-500); color: #fff; }
.tag-popular    { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-handmade   { background: var(--color-secondary-500); color: #fff; }
.tag-sale       { background: var(--color-error-fg); color: #fff; }
.tag-star-seller{ background: #6E2C9E; color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; border-bottom: 1px solid var(--border-default); padding: 14px 24px; display: flex; align-items: center; gap: 22px; }
.topbar .brand { font-family: Guesa, 'Times New Roman', serif; font: 700 30px/1 inherit; color: var(--color-primary-500); letter-spacing: -0.02em; }
.topbar .search { flex: 1; max-width: 720px; }
.topbar .right { display: flex; gap: 18px; align-items: center; font: 500 13px/1 inherit; color: var(--text-secondary); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. 셀러 이름·평점 생략 금지 — Etsy의 정체성은 셀러 우선
2. 버튼 sharp 직사각 사용 금지 — pill(9999px)이 시그니처
3. 채도 높은 원색 추가 금지 — Etsy Orange 단일 액센트
4. 다크 모드 캔버스 사용 금지 — 따뜻한 라이트 전용
5. 카드 라운드 16px+ 사용 금지 — 8px Round가 표준

### ⑫ 시그니처 적용 예시 (Search results)
```html
<style>
  body { margin: 0; font-family: Graphik, Inter, 'Pretendard', sans-serif; background: #FFFFFF; color: #222; }
  .topbar { padding: 18px 24px; display: flex; align-items: center; gap: 20px; border-bottom: 1px solid #E6DDD2; }
  .topbar .brand { font-family: Guesa, 'Times New Roman', serif; font: 700 36px/1 inherit; color: #F1641E; letter-spacing: -0.02em; }
  .topbar .search { flex: 1; max-width: 720px; position: relative; }
  .topbar .search input { width: 100%; background: #fff; border: 2px solid #222; border-radius: 9999px; padding: 14px 48px 14px 22px; font: 400 14px/1.3 inherit; box-sizing: border-box; }
  .topbar .search .icon { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; border-radius: 50%; background: #F1641E; color: #fff; display: grid; place-items: center; }
  .topbar .right { display: flex; gap: 18px; align-items: center; font: 500 13px/1 inherit; color: #595350; }
  .container { max-width: 1380px; margin: 0 auto; padding: 28px 24px; }
  .container h1 { font: 700 26px/1.25 inherit; margin: 0 0 6px; letter-spacing: -0.01em; }
  .container .sub { font: 400 14px/1.5 inherit; color: #595350; margin: 0 0 24px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .listing { background: #fff; border-radius: 8px; cursor: pointer; transition: transform 200ms ease, box-shadow 200ms ease; }
  .listing:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(34,34,34,0.10); }
  .listing .img { aspect-ratio: 1; border-radius: 8px; position: relative; overflow: hidden; }
  .listing .img .fav { position: absolute; right: 8px; top: 8px; width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.95); display: grid; place-items: center; cursor: pointer; font-size: 15px; }
  .listing .img .best { position: absolute; left: 8px; top: 8px; background: #F1641E; color: #fff; font: 700 11px/1 inherit; padding: 5px 11px; border-radius: 9999px; }
  .listing .body { padding: 10px 4px 0; }
  .listing .by { font: 500 12px/1.3 inherit; color: #595350; margin-bottom: 4px; display: flex; gap: 4px; align-items: center; }
  .listing .by .star-seller { background: #6E2C9E; color: #fff; font: 700 9px/1 inherit; padding: 2px 5px; border-radius: 2px; }
  .listing .title { font: 500 14px/1.4 inherit; color: #222; margin-bottom: 6px; }
  .listing .stars { font: 500 12px/1 inherit; color: #595350; margin-bottom: 6px; }
  .listing .stars .star { color: #B57500; }
  .listing .price { font: 700 16px/1 inherit; color: #222; }
  .listing .price .ship { font: 500 12px/1 inherit; color: #595350; margin-left: 4px; font-weight: 500; }
</style>

<header class="topbar">
  <div class="brand">Etsy</div>
  <div class="search">
    <input placeholder="핸드메이드 머그를 검색하세요" />
    <div class="icon">🔍</div>
  </div>
  <div class="right"><span>로그인</span><span>♥</span><span>🛒</span></div>
</header>

<main class="container">
  <h1>"ceramic mug" 검색 결과</h1>
  <p class="sub">1,284,000개 상품 · 핸드메이드 · 빈티지</p>
  <div class="grid">
    <div class="listing">
      <div class="img" style="background:linear-gradient(135deg,#F4D8B6,#D9A35E);">
        <span class="best">Bestseller</span>
        <div class="fav">♡</div>
      </div>
      <div class="body">
        <div class="by"><span class="star-seller">Star Seller</span>LunaClayStudio</div>
        <div class="title">Hand-thrown ceramic mug · earthy speckled</div>
        <div class="stars">★★★★★ (1,284)</div>
        <div class="price">$32.00<span class="ship">+ $5 shipping</span></div>
      </div>
    </div>
    <div class="listing">
      <div class="img" style="background:linear-gradient(135deg,#E8D6C1,#A77559);"><div class="fav">♡</div></div>
      <div class="body">
        <div class="by">SoftHandsCeramics</div>
        <div class="title">Cream organic shaped mug, hand-pinched</div>
        <div class="stars">★★★★★ (842)</div>
        <div class="price">$28.50<span class="ship">+ $6 shipping</span></div>
      </div>
    </div>
    <div class="listing">
      <div class="img" style="background:linear-gradient(135deg,#D8E4D2,#6E8C6C);"><span class="best">Bestseller</span><div class="fav">♡</div></div>
      <div class="body">
        <div class="by"><span class="star-seller">Star Seller</span>WildflowerKilns</div>
        <div class="title">Forest green stoneware mug set of 2</div>
        <div class="stars">★★★★★ (2,103)</div>
        <div class="price">$68.00<span class="ship">+ free shipping</span></div>
      </div>
    </div>
    <div class="listing">
      <div class="img" style="background:linear-gradient(135deg,#EFEAE3,#B8A88F);"><div class="fav">♡</div></div>
      <div class="body">
        <div class="by">KinfolkSlowStudio</div>
        <div class="title">Minimal cream mug · matte glaze</div>
        <div class="stars">★★★★ (412)</div>
        <div class="price">$24.00<span class="ship">+ $5 shipping</span></div>
      </div>
    </div>
  </div>
</main>
```
