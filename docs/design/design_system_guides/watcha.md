---
brand: Watcha
brand_ko: 왓챠
slug: watcha
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - media
  - consumer

color_tone: warm
primary_color_hex: "#FF0558"
primary_color_name: "Watcha Red"
mood:
  - 시네마틱
  - 다크
  - 영화 우선

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: compact
corner_style: sharp
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2011
last_major_revision: 2024
signature_keyword: "검정 캔버스에 Red 워드마크와 평점 별의 한국 영화 OTT 톤"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#000;color:#fff;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:linear-gradient(180deg,rgba(0,0,0,0.85),transparent);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:#FF0558;letter-spacing:-0.04em;">WATCHA</strong>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="aspect-ratio:16/9;background:linear-gradient(135deg,#831010,#000 70%);border-radius:0;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.85) 100%);"></div>
        <div style="position:absolute;left:14px;bottom:14px;color:#fff;">
          <div style="font-size:18px;font-weight:800;line-height:1;">기생충</div>
          <div style="font-size:10px;color:#FFC700;margin-top:4px;display:flex;align-items:center;gap:4px;">★ 4.6 · 2019 · 132분</div>
          <div style="display:flex;gap:4px;margin-top:6px;">
            <button style="background:#fff;color:#000;border:0;padding:4px 12px;font-size:11px;font-weight:800;font-family:inherit;cursor:pointer;">▶ 재생</button>
            <button style="background:rgba(255,255,255,0.2);color:#fff;border:0;padding:4px 12px;font-size:11px;font-weight:800;font-family:inherit;cursor:pointer;">+ 보고싶어요</button>
          </div>
        </div>
      </div>
      <div style="font-size:13px;font-weight:800;margin:6px 0 4px;">왓챠픽 · 한국 영화</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;">
        <div style="aspect-ratio:2/3;background:linear-gradient(135deg,#FF0558,#000);border-radius:0;"></div>
        <div style="aspect-ratio:2/3;background:linear-gradient(135deg,#0E1116,#831010);border-radius:0;"></div>
        <div style="aspect-ratio:2/3;background:linear-gradient(135deg,#FFC700,#831010);border-radius:0;"></div>
      </div>
    </div>
  </div>

sources:
  - https://watcha.com/
---

### ① 브랜드 DNA
- **브랜드명**: Watcha (왓챠)
- **한 줄 정체성**: 한국 영화/드라마 큐레이션 OTT — 평점 데이터 기반 추천
- **공식 디자인 철학**: "당신만의 평점 — 영화가 주인공인 검정 캔버스"
- **시그니처 요소 1개**: Watcha Red(#FF0558) 워드마크 + 검정 캔버스 + 노란 별 평점 (★ 4.6 형식)

### ② 톤 & 무드
- **핵심 키워드 3개**: 시네마틱, 다크, 영화 우선
- **무드 설명**: 풀 검정 + Red 워드마크 + 노란 별. Netflix와 유사하지만 평점 큐레이션 정체성이 더 강하다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact
- **모서리 성향**: Sharp (0~4px)
- **평면성**: Layered (그라데이션)

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  --color-primary-50: #FFE5EE; --color-primary-100: #FFB8CF;
  --color-primary-200: #FF80A6; --color-primary-300: #FF4D80;
  --color-primary-400: #FF1F66; --color-primary-500: #FF0558;
  --color-primary-600: #DB0048; --color-primary-700: #A30038;
  --color-primary-800: #6E0026; --color-primary-900: #420017;

  --color-secondary-500: #FFC700;     /* 별점 노랑 */

  --color-neutral-0: #FFFFFF; --color-neutral-50: #F5F5F5;
  --color-neutral-100: #E0E0E0; --color-neutral-200: #B3B3B3;
  --color-neutral-300: #808080; --color-neutral-500: #555555;
  --color-neutral-700: #333333; --color-neutral-800: #1F1F1F;
  --color-neutral-900: #141414; --color-neutral-1000: #000000;

  --color-success-bg: #DCF7E5; --color-success-fg: #46D369;
  --color-warning-bg: #FFF1D9; --color-warning-fg: #F5A623;
  --color-error-bg: #FFE5E5; --color-error-fg: #FF0558;
  --color-info-bg: #E0F0FE; --color-info-fg: #2563EB;

  --bg-base: #000; --bg-subtle: #141414;
  --bg-elevated: #1F1F1F; --bg-overlay: rgba(0,0,0,0.85);

  --text-primary: #fff; --text-secondary: #B3B3B3;
  --text-tertiary: #808080; --text-on-primary: #fff;
  --text-disabled: #555555;

  --border-default: #1F1F1F; --border-subtle: #141414;
  --border-strong: #555; --border-focus: #fff;
}
```

### ④ 타이포그래피
- 한글 Pretendard, 영문 -apple-system / "Helvetica Neue"
- Display 64/800/1.05/-0.025em / H1 32/800/1.15 / H2 22/700/1.25 / H3 16/700/1.3
- Body 13/500 / Small 12/500 / Caption 11/700

### ⑤ 스페이싱
- Base 4px, Container fluid

### ⑥ Border Radius
```css
--radius-none: 0; --radius-sm: 2px; --radius-md: 4px;
--radius-lg: 6px; --radius-xl: 8px; --radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 8px 24px rgba(0,0,0,0.50);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.70);
--shadow-xl: 0 24px 60px rgba(255,5,88,0.30);
```

### ⑧ Iconography
- Filled (재생) + Outline (메뉴), 2px stroke, Round
- Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 Pretendard,sans-serif; letter-spacing:-0.01em; border-radius: var(--radius-md); padding: 12px 22px; border: 0; cursor: pointer; }
.btn-play { background: #fff; color: #000; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-secondary { background: rgba(255,255,255,0.20); color: #fff; }
.btn-ghost { background: transparent; color: #fff; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: rgba(22,22,22,0.66); border: 1px solid var(--border-strong); border-radius: var(--radius-md); padding: 10px 14px; font-size: 14px; color: #fff; font-family: inherit; }
.input:focus { outline: none; border-color: #fff; }
```

**Card** (Poster)
```css
.poster { aspect-ratio: 2/3; background: var(--bg-subtle); border-radius: 0; cursor: pointer; transition: transform 200ms ease; }
.poster:hover { transform: scale(1.05); z-index: 2; }
.card { background: var(--bg-elevated); border-radius: var(--radius-md); padding: 16px; }
```

**Badge / Star rating (시그니처)**
```css
.rating { color: var(--color-secondary-500); font-weight: 700; display: inline-flex; align-items: center; gap: 4px; }
.rating::before { content: "★"; }
.tag { padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
.tag-solid { background: var(--color-primary-500); color: #fff; }
.tag-subtle { background: rgba(255,5,88,0.18); color: var(--color-primary-300); }
.tag-outline { border: 1px solid #fff; color: #fff; background: transparent; }
```

**Navigation**
```css
.topnav { padding: 14px 16px; background: linear-gradient(180deg, rgba(0,0,0,0.85), transparent); position: fixed; top: 0; left: 0; right: 0; display: flex; align-items: center; gap: 16px; z-index: 10; }
.topnav .brand { font-weight: 900; color: var(--color-primary-500); font-size: 22px; letter-spacing: -0.04em; }
```

### ⑩ Motion
```css
--duration-fast: 100ms; --duration-base: 250ms; --duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. brand red를 본문 텍스트에 사용 금지 — 워드마크와 액션에만
2. 별점 색을 brand red로 통일 금지 — 노랑(#FFC700) 보존
3. 라이트 테마 강제 금지 — 다크가 시청 톤
4. 포스터 라운드를 8px+ 변경 금지
5. WATCHA 워드마크 letter-spacing tight 변경 금지

### ⑫ 시그니처 적용 예시 (Browse)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #fff; background: #000; }
  .topnav { padding: 16px 4%; background: rgba(0,0,0,0.85); position: sticky; top: 0; z-index: 10; display: flex; align-items: center; gap: 24px; }
  .topnav .brand { font-weight: 900; color: #FF0558; font-size: 26px; letter-spacing: -0.04em; }
  .topnav nav { display: flex; gap: 16px; font-size: 14px; font-weight: 700; }
  .topnav nav a.active { color: #fff; } .topnav nav a { color: #B3B3B3; }
  .hero { aspect-ratio: 16/8; background: linear-gradient(135deg, #831010 0%, #000 60%); position: relative; }
  .hero::before { content:""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 80%, #000 100%); }
  .hero .info { position: absolute; left: 4%; bottom: 12%; max-width: 480px; }
  .hero h1 { font-size: 56px; font-weight: 800; line-height: 1.0; letter-spacing: -0.02em; margin: 0 0 10px; }
  .hero .meta { display: flex; gap: 10px; align-items: center; font-size: 13px; color: #E5E5E5; margin-bottom: 12px; }
  .hero .meta .rating { color: #FFC700; font-weight: 700; }
  .hero .actions { display: flex; gap: 10px; }
  .hero .actions button { padding: 10px 22px; font-size: 14px; font-weight: 800; border: 0; cursor: pointer; font-family: inherit; }
  .hero .actions .play { background: #fff; color: #000; }
  .hero .actions .add { background: rgba(255,255,255,0.20); color: #fff; }
  .row { padding: 24px 4% 8px; }
  .row h2 { margin: 0 0 12px; font-size: 18px; font-weight: 800; }
  .row .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
  .poster { aspect-ratio: 2/3; cursor: pointer; transition: transform 200ms ease; position: relative; }
  .poster:hover { transform: scale(1.05); z-index: 5; }
  .poster .rating { position: absolute; left: 4px; bottom: 4px; background: rgba(0,0,0,0.7); color: #FFC700; padding: 1px 6px; border-radius: 4px; font-size: 11px; font-weight: 700; }
</style>

<header class="topnav">
  <div class="brand">WATCHA</div>
  <nav><a class="active">홈</a><a>영화</a><a>드라마</a><a>예능</a><a>왓챠피디아</a></nav>
</header>

<section class="hero">
  <div class="info">
    <h1>기생충</h1>
    <div class="meta"><span class="rating">★ 4.6</span><span>2019</span><span>132분</span><span style="border:1px solid #fff; padding:0 4px; font-size:11px;">15+</span></div>
    <p style="font-size:14px; color:#E5E5E5; margin: 0 0 14px; line-height: 1.5;">반지하의 가족이 부잣집에 침투해 벌어지는 블랙 코미디. 봉준호 감독작.</p>
    <div class="actions">
      <button class="play">▶ 재생</button>
      <button class="add">+ 보고싶어요</button>
    </div>
  </div>
</section>

<div class="row">
  <h2>왓챠픽 · 한국 영화</h2>
  <div class="grid">
    <div class="poster" style="background:linear-gradient(135deg,#831010,#000);"><span class="rating">★ 4.6</span></div>
    <div class="poster" style="background:linear-gradient(135deg,#0E1116,#831010);"><span class="rating">★ 4.4</span></div>
    <div class="poster" style="background:linear-gradient(135deg,#FF0558,#000);"><span class="rating">★ 4.5</span></div>
    <div class="poster" style="background:linear-gradient(135deg,#FFC700,#831010);"><span class="rating">★ 4.7</span></div>
    <div class="poster" style="background:linear-gradient(135deg,#46D369,#0E1116);"><span class="rating">★ 4.3</span></div>
    <div class="poster" style="background:linear-gradient(135deg,#0096FF,#0E1116);"><span class="rating">★ 4.2</span></div>
  </div>
</div>
```
