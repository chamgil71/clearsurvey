---
brand: Melon
brand_ko: 멜론
slug: melon
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#00CD3C"
primary_color_name: "Melon Green"
mood:
  - 활기
  - 청량
  - 대중적

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2004
last_major_revision: 2023
signature_keyword: "멜론 그린 강조 + 다크 캔버스가 음악 차트의 시각 표준"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F9FA", "border": "#ECEEF0", "fg": "#1B1B1B", "fg_muted": "#5F6368", "accent": "#00CD3C" },
    "dark":  { "bg": "#121212", "surface": "#232427", "border": "#2D2F33", "fg": "#F8F9FA", "fg_muted": "#BCC0C4", "accent": "#14D050" }
  }

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:12px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:var(--card-accent);letter-spacing:-0.02em;">melon</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">🔍 ⓜ</span>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:linear-gradient(135deg,#00CD3C 0%,#00A832 100%);border-radius:14px;padding:14px;color:#fff;">
        <div style="font-size:11px;font-weight:700;opacity:0.85;">TOP100</div>
        <div style="font-size:20px;font-weight:900;letter-spacing:-0.02em;margin-top:2px;">실시간 차트</div>
        <div style="font-size:11px;font-weight:600;opacity:0.85;margin-top:4px;">5월 12일 18:00 기준</div>
      </div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:10px;display:flex;align-items:center;gap:10px;">
        <div style="width:44px;height:44px;background:var(--card-surface);border-radius:6px;display:grid;place-items:center;font-weight:900;color:var(--card-fg);font-size:14px;">01</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:800;">SUPERNOVA</div>
          <div style="font-size:11px;color:var(--card-fg-muted);font-weight:600;">aespa</div>
        </div>
        <div style="color:var(--card-accent);font-size:18px;">▶</div>
      </div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:10px;display:flex;align-items:center;gap:10px;">
        <div style="width:44px;height:44px;background:var(--card-surface);border-radius:6px;display:grid;place-items:center;font-weight:900;color:var(--card-fg);font-size:14px;">02</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:800;">Magnetic</div>
          <div style="font-size:11px;color:var(--card-fg-muted);font-weight:600;">ILLIT</div>
        </div>
        <div style="color:var(--card-accent);font-size:18px;">▶</div>
      </div>
    </div>
  </div>

sources:
  - https://www.melon.com/
  - https://kakaoent.com/
---

### ① 브랜드 DNA
- **브랜드명**: Melon (멜론)
- **한 줄 정체성**: 2004년부터 이어진 한국 1위 음원 스트리밍 — 실시간 차트의 상징
- **공식 디자인 철학**: "더 가까이, 음악으로" — 차트 기반 대중 음악 발견
- **시그니처 요소 1개**: 형광 멜론 그린(#00CD3C) 단일 강조 — 차트 순위, 재생 아이콘, 좋아요 모두 이 한 가지 색으로 통일

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기, 청량, 대중적
- **무드 설명**: 흰 캔버스에 멜론 그린이 한 점씩 박힌 라이트 톤(기본)과, 앨범 아트 대비를 살린 다크 톤(플레이어). 차트 번호는 굵은 sans-serif 큰 숫자가 시각 위계의 핵심.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 리스트 카드 패딩 12~14px
- **모서리 성향**: Soft (6~12px) — 앨범 자켓은 6~8px 살짝 라운드
- **평면성**: Flat — 그림자 거의 없음, 보더만으로 분리

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Melon Green */
  --color-primary-50:  #E6FAEB;
  --color-primary-100: #B8F0C5;
  --color-primary-200: #7DE498;
  --color-primary-300: #3FD86A;
  --color-primary-400: #14D050;
  --color-primary-500: #00CD3C;   /* Melon Green */
  --color-primary-600: #00B834;
  --color-primary-700: #00A832;
  --color-primary-800: #007A24;
  --color-primary-900: #004D17;

  /* Secondary - 액센트 핫핑크 (좋아요/하트) */
  --color-secondary-500: #FF3B6A;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FA;
  --color-neutral-100:  #F1F3F4;
  --color-neutral-200:  #ECEEF0;     /* border */
  --color-neutral-300:  #DADCE0;
  --color-neutral-500:  #9AA0A6;
  --color-neutral-700:  #5F6368;     /* text secondary */
  --color-neutral-800:  #3C4043;
  --color-neutral-900:  #1B1B1B;     /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6FAEB;
  --color-success-fg: #00CD3C;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #F29900;
  --color-error-bg:   #FFE8EC;
  --color-error-fg:   #EA4335;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #1A73E8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F9FA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(27,27,27,0.55);

  /* Text */
  --text-primary:    #1B1B1B;
  --text-secondary:  #3C4043;
  --text-tertiary:   #5F6368;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #9AA0A6;

  /* Border */
  --border-default: #ECEEF0;
  --border-subtle:  #F1F3F4;
  --border-strong:  #DADCE0;
  --border-focus:   #00CD3C;
}

[data-theme="dark"] {
  --bg-base: #121212;
  --bg-subtle: #1B1C1F;
  --bg-elevated: #232427;
  --text-primary: #F8F9FA;
  --text-secondary: #BCC0C4;
  --border-default: #2D2F33;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **Pretendard** (OFL)
  - 영문: Pretendard Latin / SF Pro / Roboto 폴백
  - 차트 숫자: 굵은 sans-serif 800~900
- **위계**:
  - Display: 36px / 900 / 1.2 / -0.025em
  - H1: 24px / 800 / 1.3 / -0.02em
  - H2: 20px / 800 / 1.35 / -0.015em
  - H3 (트랙명): 14px / 800 / 1.4 / -0.005em
  - Body Large: 15px / 500 / 1.5 / -0.005em
  - Body: 13px / 500 / 1.5 / 0
  - Body Small (아티스트명): 11px / 600 / 1.45 / 0
  - Caption: 10px / 600 / 1.4 / 0.02em

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
- **Container**: max-width 480px (모바일), 1280px (웹), 좌우 패딩 12px / 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;       /* 앨범 자켓 */
--radius-md: 8px;
--radius-lg: 12px;      /* 리스트 카드 */
--radius-xl: 16px;
--radius-full: 9999px;  /* 재생 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.16);
--shadow-xl: 0 20px 40px rgba(0,205,60,0.30);  /* 플레이 강조 */
```

### ⑧ Iconography
- **스타일**: Outline (재생/메뉴) + Filled (좋아요)
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Material Symbols Rounded

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: var(--radius-md); padding: 10px 16px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-play { width: 44px; height: 44px; padding: 0; border-radius: 9999px; background: var(--color-primary-500); color: #fff; }
.btn-like { width: 36px; height: 36px; padding: 0; border-radius: 9999px; background: transparent; color: var(--color-secondary-500); }
```

**Input**
```css
.search-input { background: var(--bg-subtle); border: 0; border-radius: 9999px; padding: 10px 16px; font: 500 14px/1.4 inherit; }
.search-input:focus { outline: 2px solid var(--color-primary-500); }
```

**Card**
```css
.track-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 10px; display: grid; grid-template-columns: 44px 1fr auto; gap: 10px; align-items: center; }
.album-card { background: var(--bg-elevated); border-radius: var(--radius-md); overflow: hidden; }
.album-card .cover { aspect-ratio: 1; background: var(--bg-subtle); }
.chart-card { background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-700) 100%); color: #fff; border-radius: var(--radius-lg); padding: 16px; }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; border-radius: 4px; font: 700 10px/1.5 inherit; }
.tag-new   { background: var(--color-primary-500); color: #fff; }
.tag-rank  { background: var(--color-secondary-500); color: #fff; }
.tag-19    { background: #EA4335; color: #fff; }
```

**Navigation (TabBar)**
```css
.tabbar { background: #fff; border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 멜론 그린 외 다른 비비드 컬러를 강조에 사용 금지 — 핫핑크는 좋아요만
2. 앨범 자켓을 12px 이상 라운드 금지 — 사각 가까운 4~8px이 음원 표준
3. 차트 번호 폰트를 가는 weight(500 이하)로 사용 금지 — 800~900이 시그니처
4. 그림자로 카드 분리 금지 — 1px 보더가 음원 리스트 표준
5. 가사 영역에 산세리프 외 폰트 사용 금지

### ⑫ 시그니처 적용 예시 (실시간 차트)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #1B1B1B; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #fff; border-bottom: 1px solid #ECEEF0; padding: 12px 14px; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-weight: 900; color: #00CD3C; font-size: 22px; letter-spacing: -0.025em; }
  .topbar .icons { margin-left: auto; font-size: 16px; color: #5F6368; }
  .home { padding: 12px 14px 80px; display: flex; flex-direction: column; gap: 12px; }
  .hero { background: linear-gradient(135deg, #00CD3C 0%, #00A832 100%); color: #fff; border-radius: 14px; padding: 18px; }
  .hero .label { font-size: 11px; font-weight: 700; opacity: 0.85; }
  .hero h2 { font-size: 22px; font-weight: 900; letter-spacing: -0.02em; margin: 2px 0 0; }
  .hero .when { font-size: 11px; opacity: 0.85; margin-top: 4px; font-weight: 600; }
  .chart .head { padding: 4px 4px 8px; display: flex; justify-content: space-between; align-items: center; }
  .chart .head h3 { margin: 0; font-size: 14px; font-weight: 800; }
  .chart .head .more { font-size: 11px; color: #5F6368; font-weight: 600; }
  .track { background: #fff; border: 1px solid #ECEEF0; border-radius: 12px; padding: 10px; display: grid; grid-template-columns: 28px 44px 1fr auto; gap: 10px; align-items: center; margin-bottom: 6px; }
  .track .rank { font: 900 16px/1 Pretendard, sans-serif; color: #1B1B1B; text-align: center; }
  .track .cover { width: 44px; height: 44px; background: #ECEEF0; border-radius: 4px; display: grid; place-items: center; font: 900 13px/1 inherit; color: #5F6368; }
  .track .meta .title { font: 800 14px/1.4 inherit; }
  .track .meta .artist { font: 600 11px/1.4 inherit; color: #5F6368; margin-top: 2px; }
  .track .play { color: #00CD3C; font-size: 18px; padding: 0 4px; }
  .miniplayer { background: #1B1B1B; color: #fff; border-radius: 12px; padding: 10px 12px; display: grid; grid-template-columns: 36px 1fr auto; gap: 10px; align-items: center; }
  .miniplayer .cover { width: 36px; height: 36px; background: #2D2F33; border-radius: 4px; }
  .miniplayer .meta .title { font: 800 13px/1.3 inherit; }
  .miniplayer .meta .artist { font: 600 11px/1.3 inherit; color: #BCC0C4; margin-top: 1px; }
  .miniplayer .ctrl { color: #00CD3C; font-size: 18px; }
  .tabbar { background: #fff; border-top: 1px solid #ECEEF0; display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: #9AA0A6; }
  .tabbar .item.active { color: #00CD3C; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">melon</span>
    <span class="icons">🔍 ⓜ</span>
  </header>
  <main class="home">
    <section class="hero">
      <div class="label">TOP100</div>
      <h2>실시간 차트</h2>
      <div class="when">5월 12일 18:00 기준 · 19분 후 업데이트</div>
    </section>
    <section class="chart">
      <div class="head"><h3>차트 미리보기</h3><span class="more">전체 ›</span></div>
      <div class="track">
        <div class="rank">1</div>
        <div class="cover">A</div>
        <div class="meta"><div class="title">SUPERNOVA</div><div class="artist">aespa</div></div>
        <div class="play">▶</div>
      </div>
      <div class="track">
        <div class="rank">2</div>
        <div class="cover">I</div>
        <div class="meta"><div class="title">Magnetic</div><div class="artist">ILLIT</div></div>
        <div class="play">▶</div>
      </div>
      <div class="track">
        <div class="rank">3</div>
        <div class="cover">N</div>
        <div class="meta"><div class="title">How Sweet</div><div class="artist">NewJeans</div></div>
        <div class="play">▶</div>
      </div>
    </section>
    <section class="miniplayer">
      <div class="cover"></div>
      <div class="meta"><div class="title">SUPERNOVA</div><div class="artist">aespa</div></div>
      <div class="ctrl">⏸</div>
    </section>
  </main>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">차트</div>
    <div class="item">검색</div>
    <div class="item">보관함</div>
    <div class="item">더보기</div>
  </nav>
</div>
```
