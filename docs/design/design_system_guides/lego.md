---
brand: Lego
brand_ko: 레고
slug: lego
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - lifestyle
  - consumer
  - ecommerce

color_tone: warm
primary_color_hex: "#E3000B"
primary_color_name: "Lego Red"
mood:
  - 놀이
  - 친근함
  - 컬러풀

font_category: display
font_primary: Cera Pro
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - humanism
  - modern-minimal

theme_modes:
  - light

released_year: 1932
last_major_revision: 2024
signature_keyword: "노란 사각 워드마크와 LEGO 브릭의 글로벌 놀이 톤"

hero_html: |
  <div style="font-family:'Cera Pro',Inter,-apple-system,sans-serif;background:#FFFFFF;color:#000;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #E0E0E0;padding:12px 16px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;background:#E3000B;color:#FFCF00;padding:4px 8px;border:2px solid #000;border-radius:4px;font-weight:900;font-size:14px;letter-spacing:-0.03em;font-family:'Cera Pro',sans-serif;">LEGO</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="aspect-ratio:5/3;background:linear-gradient(135deg,#FFCF00 0%,#E3000B 100%);border-radius:14px;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(4,1fr);">
          <div style="background:#E3000B;"></div><div style="background:#0084CE;"></div><div style="background:#FFCF00;"></div><div style="background:#00892B;"></div><div style="background:#FFCF00;"></div><div style="background:#E3000B;"></div>
          <div style="background:#0084CE;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#E3000B;"></div><div style="background:#0084CE;"></div>
          <div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div>
          <div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div><div style="background:#FFCF00;"></div>
        </div>
        <div style="position:absolute;left:14px;bottom:14px;color:#000;background:rgba(255,255,255,0.92);padding:8px 12px;border-radius:6px;">
          <div style="font-size:10px;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;">NEW</div>
          <div style="font-size:14px;font-weight:900;letter-spacing:-0.02em;">Star Wars X-Wing</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="background:#fff;border:1px solid #E0E0E0;border-radius:10px;padding:10px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#0084CE,#FFCF00);border-radius:6px;"></div>
          <div style="font-size:11px;font-weight:700;line-height:1.3;margin-top:6px;">City 경찰서</div>
          <div style="font-size:13px;font-weight:900;color:#E3000B;margin-top:4px;">89,900원</div>
        </div>
        <div style="background:#fff;border:1px solid #E0E0E0;border-radius:10px;padding:10px;">
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#00892B,#FFCF00);border-radius:6px;"></div>
          <div style="font-size:11px;font-weight:700;line-height:1.3;margin-top:6px;">Friends 동물원</div>
          <div style="font-size:13px;font-weight:900;color:#E3000B;margin-top:4px;">64,900원</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.lego.com/
  - https://www.lego.com/en-us/about-us
---

### ① 브랜드 DNA
- **브랜드명**: LEGO (레고)
- **한 줄 정체성**: 1932년 덴마크에서 시작된 글로벌 블록 장난감 — 모든 세대의 놀이
- **공식 디자인 철학**: "Only the best is good enough — bold colors, joy of play"
- **시그니처 요소 1개**: 빨간 사각 'LEGO' 워드마크 (노란 글자, 검은 테두리) + 4색 brick (Red/Yellow/Blue/Green)

### ② 톤 & 무드
- **핵심 키워드 3개**: 놀이, 친근함, 컬러풀
- **무드 설명**: 빨/노/파/초 4색이 brick으로 시각화. 어린이부터 성인까지 모두를 위한 놀이 톤.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~14px) — brick 자체는 sharp
- **평면성**: Layered (그림자로 brick 입체감)

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50: #FFE5E7; --color-primary-100: #FFB8BC;
  --color-primary-200: #FF8087; --color-primary-300: #FF4D54;
  --color-primary-400: #ED1A22; --color-primary-500: #E3000B;
  --color-primary-600: #C20009; --color-primary-700: #9A0007;
  --color-primary-800: #6E0005; --color-primary-900: #420003;

  /* 시그니처 4색 brick */
  --lego-red:    #E3000B;
  --lego-yellow: #FFCF00;
  --lego-blue:   #0084CE;
  --lego-green:  #00892B;
  --lego-black:  #000000;

  --color-secondary-500: #FFCF00;

  --color-neutral-0: #FFFFFF; --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5; --color-neutral-200: #F0F0F0;
  --color-neutral-300: #E0E0E0; --color-neutral-500: #C7C7C7;
  --color-neutral-700: #888888; --color-neutral-800: #555555;
  --color-neutral-900: #191919; --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5; --color-success-fg: #00892B;
  --color-warning-bg: #FFF7CC; --color-warning-fg: #B89400;
  --color-error-bg: #FFE5E7; --color-error-fg: #E3000B;
  --color-info-bg: #E0F4FE; --color-info-fg: #0084CE;

  --bg-base: #FFFFFF; --bg-subtle: #F5F5F5;
  --bg-elevated: #FFFFFF; --bg-overlay: rgba(0,0,0,0.50);

  --text-primary: #000; --text-secondary: #555;
  --text-tertiary: #888; --text-on-primary: #FFFFFF;
  --text-disabled: #C7C7C7;

  --border-default: #E0E0E0; --border-subtle: #F0F0F0;
  --border-strong: #C7C7C7; --border-focus: #E3000B;
}

[data-theme="dark"] { --bg-base: #000; --bg-subtle: #1A1A1A; --bg-elevated: #2D2D2D; --text-primary: #fff; }
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Cera Pro (Lego 라이선스) / Futura — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 64px / 900 / 1.0 / -0.025em
  - H1: 36px / 900 / 1.1 / -0.02em
  - H2: 22px / 700 / 1.27 / -0.015em
  - H3: 17px / 700 / 1.3 / 0
  - Body Large: 16px / 500 / 1.5 / 0
  - Body: 14px / 500 / 1.5 / 0
  - Body Small: 13px / 500 / 1.43 / 0
  - Caption: 11px / 800 / 1.27 / 0.04em (uppercase)

### ⑤ 스페이싱
- Base 4px, Container max 1280px

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 4px; --radius-md: 8px;
--radius-lg: 14px; --radius-xl: 20px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-xl: 0 16px 32px rgba(227,0,11,0.30);
/* Brick 효과 (4px 하단 그림자) */
--shadow-brick: 0 4px 0 rgba(0,0,0,0.20);
```

### ⑧ Iconography
- Filled (놀이 친화), 2px stroke
- Round
- Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 'Cera Pro',Inter,sans-serif; letter-spacing:-0.01em; border-radius: var(--radius-md); padding: 14px 24px; border: 0; cursor: pointer; }
.btn-primary { background: var(--lego-red); color: #fff; box-shadow: 0 4px 0 #9A0007; }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:active { transform: translateY(2px); box-shadow: 0 2px 0 #9A0007; }
.btn-secondary { background: #fff; color: var(--lego-red); border: 2px solid var(--lego-red); }
.btn-yellow { background: var(--lego-yellow); color: #000; box-shadow: 0 4px 0 #B89400; }
.btn-ghost { background: transparent; color: #000; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: #fff; border: 2px solid #E0E0E0; border-radius: var(--radius-md); padding: 12px 14px; font-size: 14px; font-family: inherit; }
.input:focus { outline: none; border-color: var(--border-focus); }
```

**Card**
```css
.card { background: #fff; border: 1px solid #E0E0E0; border-radius: var(--radius-lg); padding: 14px; }
.product .img { aspect-ratio: 1; border-radius: 8px; }
.product h3 { font-size: 14px; font-weight: 700; line-height: 1.3; margin: 8px 0 4px; }
.product .price { font-size: 16px; font-weight: 900; color: var(--lego-red); }
```

**Badge / LEGO 워드마크 스타일**
```css
.lego-mark { background: var(--lego-red); color: var(--lego-yellow); padding: 6px 12px; border: 2px solid #000; border-radius: 4px; font-weight: 900; font-size: 16px; letter-spacing: -0.03em; display: inline-block; box-shadow: 0 4px 0 rgba(0,0,0,0.20); }
.tag { padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-solid { background: var(--lego-red); color: #fff; }
.tag-subtle { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: #000; }
.tag-new { background: var(--lego-yellow); color: #000; }
```

**Navigation**
```css
.topnav { padding: 14px 18px; display: flex; align-items: center; gap: 14px; background: #fff; border-bottom: 1px solid #E0E0E0; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 250ms; --duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. LEGO 워드마크 색 (red 박스 + yellow 글자 + black 테두리) 임의 변경 금지
2. brick 4색 (Red/Yellow/Blue/Green) 추가/제거 금지 — 시그니처 팔레트
3. 본문에 채도 낮은 회색 배경 사용 금지 — 컬러풀 톤 보존
4. button shadow 4px 하단 효과 제거 금지 — brick 입체감
5. 헤드라인 weight 600 이하 사용 금지 — 800+ 굵기 시그니처

### ⑫ 시그니처 적용 예시 (Home)

```html
<style>
  body { margin: 0; font-family: 'Cera Pro', Inter, -apple-system, sans-serif; color: #000; background: #fff; }
  .topnav { padding: 14px 22px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid #E0E0E0; }
  .lego-mark { background: #E3000B; color: #FFCF00; padding: 6px 12px; border: 2px solid #000; border-radius: 4px; font-weight: 900; font-size: 18px; letter-spacing: -0.03em; box-shadow: 0 4px 0 rgba(0,0,0,0.20); }
  .topnav nav { display: flex; gap: 18px; font-size: 14px; font-weight: 700; margin-left: 32px; }
  .topnav nav a { color: #000; }
  .hero { aspect-ratio: 16/8; background: linear-gradient(135deg, #FFCF00 0%, #E3000B 100%); position: relative; overflow: hidden; padding: 32px; display: flex; align-items: flex-end; }
  .hero .pattern { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(5, 1fr); opacity: 0.5; }
  .hero .pattern div { background: rgba(255,255,255,0.1); border-right: 1px solid rgba(0,0,0,0.05); border-bottom: 1px solid rgba(0,0,0,0.05); position: relative; }
  .hero .pattern div::after { content:""; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 30%; height: 30%; border-radius: 50%; background: rgba(255,255,255,0.3); }
  .hero .info { background: #fff; padding: 24px 28px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.20); position: relative; z-index: 1; }
  .hero .label { font-size: 12px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; color: #E3000B; }
  .hero h1 { font-size: 40px; font-weight: 900; letter-spacing: -0.025em; line-height: 1.05; margin: 6px 0 12px; }
  .hero p { font-size: 14px; color: #555; margin: 0 0 14px; }
  .hero button { background: #E3000B; color: #fff; border: 0; border-radius: 8px; padding: 14px 28px; font-size: 14px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 0 #9A0007; font-family: inherit; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; padding: 24px; }
  .product { background: #fff; border: 1px solid #E0E0E0; border-radius: 14px; padding: 14px; cursor: pointer; transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1); }
  .product:hover { transform: translateY(-4px); }
  .product .img { aspect-ratio: 1; border-radius: 8px; }
  .product .label { font-size: 11px; color: #555; margin: 10px 0 2px; }
  .product h3 { font-size: 14px; font-weight: 700; line-height: 1.3; margin: 0 0 6px; }
  .product .price { font-size: 18px; font-weight: 900; color: #E3000B; }
  .product .age { font-size: 11px; color: #555; margin-top: 2px; }
</style>

<header class="topnav">
  <span class="lego-mark">LEGO</span>
  <nav><a>Shop</a><a>Discover</a><a>VIP</a><a>Help</a></nav>
  <span style="margin-left:auto; font-size:14px; font-weight:700;">Account · Cart</span>
</header>

<section class="hero">
  <div class="pattern">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
  <div class="info">
    <div class="label">★ NEW SET</div>
    <h1>Star Wars<br/>X-Wing Starfighter</h1>
    <p>1,949 pieces · 18+ years</p>
    <button>Shop · 269,900원</button>
  </div>
</section>

<div class="grid">
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#0084CE,#FFCF00);"></div>
    <div class="label">CITY · 6+</div>
    <h3>경찰서 모듈러</h3>
    <div class="price">89,900원</div>
    <div class="age">668 pieces</div>
  </article>
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#00892B,#FFCF00);"></div>
    <div class="label">FRIENDS · 6+</div>
    <h3>친구들의 동물원</h3>
    <div class="price">64,900원</div>
    <div class="age">412 pieces</div>
  </article>
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#E3000B,#000);"></div>
    <div class="label">TECHNIC · 18+</div>
    <h3>페라리 SF21</h3>
    <div class="price">189,000원</div>
    <div class="age">1,074 pieces</div>
  </article>
  <article class="product">
    <div class="img" style="background:linear-gradient(135deg,#FFCF00,#E3000B);"></div>
    <div class="label">CLASSIC · 4+</div>
    <h3>창작 박스 라지</h3>
    <div class="price">42,900원</div>
    <div class="age">790 pieces</div>
  </article>
</div>
```
