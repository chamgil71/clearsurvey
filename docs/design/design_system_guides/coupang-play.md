---
brand: Coupang Play
brand_ko: 쿠팡플레이
slug: coupang-play
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - media
  - consumer

color_tone: warm
primary_color_hex: "#FF4E20"
primary_color_name: "Coupang Orange-Red"
mood:
  - 역동
  - 강렬
  - 라이브

font_category: sans-serif
font_primary: Coupang Sans
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2020
last_major_revision: 2024
signature_keyword: "쿠팡 오렌지레드 + 검정 캔버스의 스포츠·예능 라이브 OTT"

hero_html: |
  <div style="font-family:'Coupang Sans',Pretendard,-apple-system,sans-serif;background:#000;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#000;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <strong style="font-size:17px;font-weight:900;color:#FF4E20;letter-spacing:-0.025em;">coupang play</strong>
      <span style="margin-left:auto;font-size:11px;color:#9CA3AF;">🔍</span>
    </div>
    <div style="display:grid;grid-template-rows:auto 1fr;">
      <div style="position:relative;height:180px;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.92) 100%),linear-gradient(135deg,#7C2D12 0%,#FF4E20 100%);padding:14px;display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="display:inline-flex;width:fit-content;background:#FF4E20;color:#000;padding:2px 6px;border-radius:0;font:900 9px/1.4 inherit;letter-spacing:0.08em;">LIVE</div>
        <div style="font-size:20px;font-weight:900;letter-spacing:-0.025em;margin-top:6px;">손흥민 EPL 결승전</div>
        <div style="font-size:11px;color:#D1D5DB;font-weight:600;margin-top:2px;">⚪ 24,512명 시청 중</div>
        <button style="margin-top:10px;background:#FF4E20;color:#000;border:0;padding:9px 14px;font:900 13px/1 inherit;cursor:pointer;width:fit-content;">▶ 지금 보기</button>
      </div>
      <div style="padding:10px 14px;">
        <div style="font-size:13px;font-weight:800;margin-bottom:8px;color:#fff;">쿠팡플레이 시리즈</div>
        <div style="display:flex;gap:8px;overflow:hidden;">
          <div style="min-width:80px;height:110px;background:linear-gradient(180deg,#7C2D12,#FF4E20);"></div>
          <div style="min-width:80px;height:110px;background:linear-gradient(180deg,#1F2937,#374151);"></div>
          <div style="min-width:80px;height:110px;background:linear-gradient(180deg,#000,#FF4E20);"></div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.coupangplay.com/
  - https://www.coupang.com/
---

### ① 브랜드 DNA
- **브랜드명**: Coupang Play (쿠팡플레이)
- **한 줄 정체성**: 쿠팡 와우 멤버십에 묶인 OTT — EPL·U-League·예능 라이브가 강점
- **공식 디자인 철학**: 와우 멤버십 패밀리 톤 계승 + 라이브 스포츠/예능 강조
- **시그니처 요소 1개**: 쿠팡 오렌지레드(#FF4E20) 단일 강조 + sharp 사각 라운드(0~4px). LIVE 배지가 늘 시그니처

### ② 톤 & 무드
- **핵심 키워드 3개**: 역동, 강렬, 라이브
- **무드 설명**: 순흑 캔버스에 오렌지레드 액센트와 sharp 사각 디자인. Wavve보다 더 거친/강한 톤, Netflix의 빨강과는 살짝 옅고 따뜻한 색감.
- **비주얼 스타일**: 모던 미니멀 — 모서리만 sharp로 차별화
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~4px) — 자켓도 거의 직각, 라이브 배지 0px
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Coupang Orange-Red */
  --color-primary-50:  #FFEFEA;
  --color-primary-100: #FFD2C2;
  --color-primary-200: #FFA585;
  --color-primary-300: #FF7848;
  --color-primary-400: #FF5E29;
  --color-primary-500: #FF4E20;   /* Coupang Orange-Red */
  --color-primary-600: #E63F12;
  --color-primary-700: #B82D0A;
  --color-primary-800: #7C2D12;
  --color-primary-900: #431407;

  /* Secondary */
  --color-secondary-500: #FACC15;   /* 와우 노랑 보조 */

  /* Neutral (Dark-first) */
  --color-neutral-0:    #000000;
  --color-neutral-50:   #0A0A0A;
  --color-neutral-100:  #111111;
  --color-neutral-200:  #1F1F1F;     /* border */
  --color-neutral-300:  #2B2B2B;
  --color-neutral-500:  #5F5F5F;
  --color-neutral-700:  #9CA3AF;     /* text tertiary */
  --color-neutral-800:  #D1D5DB;
  --color-neutral-900:  #F9FAFB;     /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #052E1A;
  --color-success-fg: #4ADE80;
  --color-warning-bg: #2A1F00;
  --color-warning-fg: #FACC15;
  --color-error-bg:   #2A0F0A;
  --color-error-fg:   #FF4E20;
  --color-info-bg:    #1F2937;
  --color-info-fg:    #60A5FA;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #0A0A0A;
  --bg-elevated: #111111;
  --bg-overlay:  rgba(0,0,0,0.82);

  /* Text */
  --text-primary:    #F9FAFB;
  --text-secondary:  #D1D5DB;
  --text-tertiary:   #9CA3AF;
  --text-on-primary: #000000;
  --text-disabled:   #5F5F5F;

  /* Border */
  --border-default: #1F1F1F;
  --border-subtle:  #111111;
  --border-strong:  #2B2B2B;
  --border-focus:   #FF4E20;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **Coupang Sans** (자체) → 폴백 Pretendard, Noto Sans KR
  - 영문: Coupang Sans Latin / SF Pro / Inter
  - 굵은 weight(800~900)가 라이브·스포츠 톤 핵심
- **위계**:
  - Display: 40px / 900 / 1.1 / -0.025em
  - H1: 26px / 900 / 1.2 / -0.025em
  - H2: 18px / 800 / 1.3 / -0.015em
  - H3 (자켓): 13px / 800 / 1.4 / -0.005em
  - Body Large: 15px / 600 / 1.5 / -0.005em
  - Body: 13px / 600 / 1.5 / 0
  - Body Small: 11px / 700 / 1.45 / 0
  - LIVE 배지: 10px / 900 / 1.4 / 0.08em UPPERCASE

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 40px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 480px (모바일), 1440px (웹)

### ⑥ Border Radius
```css
--radius-none: 0;       /* LIVE 배지, 버튼 */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;  /* 아바타만 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.55);
--shadow-md: 0 4px 16px rgba(0,0,0,0.65);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.78);
--shadow-red: 0 0 32px rgba(255,78,32,0.45);
```

### ⑧ Iconography
- **스타일**: Filled (재생/라이브) + Outline (메뉴)
- **Stroke 굵기**: 2px
- **모서리 처리**: Square
- **추천 라이브러리**: Material Symbols (Sharp) / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 900 13px/1 'Coupang Sans', Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: 0; padding: 11px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-secondary { background: rgba(255,255,255,0.15); color: #fff; backdrop-filter: blur(8px); }
.btn-secondary:hover { background: rgba(255,255,255,0.25); }
.btn-white { background: #fff; color: #000; }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
```

**Input**
```css
.search-input { background: var(--bg-elevated); border: 1px solid var(--border-default); color: var(--text-primary); border-radius: 4px; padding: 10px 14px; font: 600 14px/1.4 inherit; }
.search-input:focus { outline: 0; border-color: var(--border-focus); }
```

**Card**
```css
.poster { background: var(--bg-elevated); border-radius: 4px; overflow: hidden; aspect-ratio: 2/3; position: relative; }
.poster:hover { transform: scale(1.04); }
.hero { position: relative; height: 380px; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.95)); }
.live-card { border-left: 4px solid var(--color-primary-500); padding: 12px 14px; background: var(--bg-elevated); }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; border-radius: 0; font: 900 10px/1.5 'Coupang Sans', sans-serif; letter-spacing: 0.08em; text-transform: uppercase; }
.tag-live    { background: var(--color-primary-500); color: #000; }
.tag-new     { background: var(--color-secondary-500); color: #000; }
.tag-original{ border: 1px solid var(--color-primary-500); color: var(--color-primary-500); background: transparent; }
```

**Navigation (TabBar)**
```css
.tabbar { background: rgba(0,0,0,0.92); backdrop-filter: blur(12px); border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 800 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-pulse: cubic-bezier(0.4, 0, 0.6, 1);   /* LIVE 깜빡임용 */
```

### ⑪ Anti-patterns
1. 자켓·버튼에 round 16px 이상 사용 금지 — sharp 사각이 시그니처
2. 본문에 노랑(#FACC15) 단독 사용 금지 — 와우 보조색, 강조는 오렌지레드
3. 본문 weight 500 이하 사용 금지 — 라이브 톤은 굵은 폰트
4. 그라데이션 본문에 오렌지레드 텍스트 직접 사용 금지 — 페이드 오버레이 필수
5. LIVE 배지를 라이브가 아닌 콘텐츠에 사용 금지

### ⑫ 시그니처 적용 예시 (쿠팡플레이 홈)

```html
<style>
  body { margin: 0; font-family: 'Coupang Sans', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #fff; background: #000; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #000; padding: 12px 14px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 10; }
  .topbar .brand { font-weight: 900; color: #FF4E20; font-size: 18px; letter-spacing: -0.025em; }
  .topbar nav { margin-left: 8px; display: flex; gap: 12px; font: 800 13px/1 inherit; color: #9CA3AF; }
  .topbar nav .active { color: #fff; }
  .topbar .icons { margin-left: auto; font-size: 16px; }
  .hero { position: relative; height: 380px; background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.95) 100%), linear-gradient(135deg, #7C2D12 0%, #FF4E20 100%); padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; }
  .hero .live { background: #FF4E20; color: #000; padding: 3px 8px; font: 900 11px/1.4 inherit; letter-spacing: 0.1em; width: fit-content; display: inline-flex; align-items: center; gap: 4px; }
  .hero .live::before { content: '●'; color: #fff; font-size: 8px; }
  .hero h1 { font: 900 32px/1.1 inherit; letter-spacing: -0.025em; margin: 8px 0 4px; }
  .hero .meta { font: 700 12px/1.4 inherit; color: #D1D5DB; }
  .hero .actions { display: flex; gap: 8px; margin-top: 14px; }
  .hero .actions .play { background: #FF4E20; color: #000; border: 0; padding: 10px 18px; font: 900 13px/1 inherit; cursor: pointer; }
  .hero .actions .add { background: rgba(255,255,255,0.18); color: #fff; border: 0; padding: 10px 16px; font: 800 13px/1 inherit; backdrop-filter: blur(8px); cursor: pointer; }
  .row { padding: 16px 14px; }
  .row h2 { font: 900 16px/1.3 inherit; margin: 0 0 10px; }
  .row .strip { display: grid; grid-auto-flow: column; grid-auto-columns: 105px; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
  .poster { aspect-ratio: 2/3; background: linear-gradient(180deg, #7C2D12, #FF4E20); position: relative; overflow: hidden; }
  .poster.p2 { background: linear-gradient(180deg, #1F2937, #374151); }
  .poster.p3 { background: linear-gradient(180deg, #000, #FF4E20); }
  .poster.p4 { background: linear-gradient(180deg, #5B21B6, #DB2777); }
  .poster.p5 { background: linear-gradient(180deg, #FACC15, #B45309); }
  .poster .badge { position: absolute; top: 4px; left: 4px; background: #FF4E20; color: #000; padding: 1px 4px; font: 900 8px/1.4 inherit; letter-spacing: 0.1em; }
  .tabbar { background: rgba(0,0,0,0.92); backdrop-filter: blur(12px); border-top: 1px solid #1F1F1F; display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 4px; text-align: center; font: 800 11px/1.3 inherit; color: #9CA3AF; }
  .tabbar .item.active { color: #FF4E20; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">coupang play</span>
    <nav><span class="active">홈</span><span>LIVE</span><span>스포츠</span></nav>
    <span class="icons">🔍</span>
  </header>
  <section class="hero">
    <span class="live">LIVE</span>
    <h1>손흥민 EPL 결승전</h1>
    <div class="meta">⚪ 24,512명 시청 중 · 후반 28분</div>
    <div class="actions">
      <button class="play">▶ 지금 보기</button>
      <button class="add">＋ 알림</button>
    </div>
  </section>
  <section class="row">
    <h2>쿠팡플레이 시리즈</h2>
    <div class="strip">
      <div class="poster"><span class="badge">ORIGINAL</span></div>
      <div class="poster p2"></div>
      <div class="poster p3"></div>
      <div class="poster p4"></div>
      <div class="poster p5"></div>
    </div>
  </section>
  <section class="row">
    <h2>실시간 인기</h2>
    <div class="strip">
      <div class="poster p3"></div>
      <div class="poster p4"></div>
      <div class="poster"></div>
      <div class="poster p2"></div>
    </div>
  </section>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">LIVE</div>
    <div class="item">스포츠</div>
    <div class="item">시리즈</div>
    <div class="item">My</div>
  </nav>
</div>
```
