---
brand: Wavve
brand_ko: 웨이브
slug: wavve
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#1ECFFF"
primary_color_name: "Wavve Cyan"
mood:
  - 신선
  - 동적
  - 친근

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2019
last_major_revision: 2024
signature_keyword: "다크 캔버스 + Wavve 시안 강조의 한국 OTT"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#000;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#000;padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <strong style="font-size:18px;font-weight:900;background:linear-gradient(90deg,#1ECFFF,#0EA5E9);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-0.025em;">wavve</strong>
      <span style="margin-left:auto;font-size:11px;color:#A0A4B0;">🔍</span>
    </div>
    <div style="display:grid;grid-template-rows:auto 1fr;">
      <div style="position:relative;height:160px;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.85) 100%),linear-gradient(135deg,#1E3A8A 0%,#1ECFFF 100%);padding:14px;display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="font-size:10px;font-weight:800;color:#1ECFFF;letter-spacing:0.08em;">WAVVE ORIGINAL</div>
        <div style="font-size:20px;font-weight:900;letter-spacing:-0.02em;margin-top:4px;">스토브리그 시즌 2</div>
        <div style="display:flex;gap:6px;margin-top:8px;">
          <button style="background:#fff;color:#000;border:0;border-radius:6px;padding:8px 12px;font:800 12px/1 inherit;cursor:pointer;">▶ 재생</button>
          <button style="background:rgba(255,255,255,0.18);color:#fff;border:0;border-radius:6px;padding:8px 12px;font:700 12px/1 inherit;cursor:pointer;backdrop-filter:blur(8px);">+ 보관함</button>
        </div>
      </div>
      <div style="padding:10px 14px;">
        <div style="font-size:13px;font-weight:800;margin-bottom:8px;">인기 TOP10</div>
        <div style="display:flex;gap:8px;overflow:hidden;">
          <div style="min-width:80px;height:110px;background:linear-gradient(180deg,#1E40AF,#1ECFFF);border-radius:6px;"></div>
          <div style="min-width:80px;height:110px;background:linear-gradient(180deg,#9333EA,#EC4899);border-radius:6px;"></div>
          <div style="min-width:80px;height:110px;background:linear-gradient(180deg,#0EA5E9,#10B981);border-radius:6px;"></div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.wavve.com/
  - https://corp.contentwavve.com/
---

### ① 브랜드 DNA
- **브랜드명**: Wavve (웨이브)
- **한 줄 정체성**: SK텔레콤 + 지상파 3사 합작 OTT — 국내 드라마·예능에 강한 한국 토종 OTT
- **공식 디자인 철학**: "삶에 흐르는 즐거움" — 파도(Wave) 메타포의 가벼움
- **시그니처 요소 1개**: Wavve 시안(#1ECFFF) ↔ 딥블루(#1E3A8A) 그라데이션 + 순흑(#000) 캔버스. Netflix 빨강과 정반대 톤의 한국 OTT 색채

### ② 톤 & 무드
- **핵심 키워드 3개**: 신선, 동적, 친근
- **무드 설명**: 순흑 배경에 콘텐츠 자켓이 가장 큰 시각 요소. 텍스트는 흰색 + 보조 회색. 강조는 시안 단일.
- **비주얼 스타일**: 모던 미니멀 — Netflix·Disney+ 패턴 계승
- **밀도(Density)**: Comfortable — 카드 간 8px 가로 스와이프
- **모서리 성향**: Soft (6~8px) — 자켓 6px이 OTT 표준
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Wavve Cyan */
  --color-primary-50:  #E0F8FF;
  --color-primary-100: #B3EEFF;
  --color-primary-200: #7DE0FF;
  --color-primary-300: #47D2FF;
  --color-primary-400: #29CFFF;
  --color-primary-500: #1ECFFF;   /* Wavve Cyan */
  --color-primary-600: #0EA5E9;
  --color-primary-700: #0284C7;
  --color-primary-800: #075985;
  --color-primary-900: #0C4A6E;

  /* Secondary - Deep Blue (그라데이션 짝) */
  --color-secondary-500: #1E3A8A;
  --color-secondary-300: #3B82F6;

  /* Neutral (Dark-first) */
  --color-neutral-0:    #000000;     /* page bg */
  --color-neutral-50:   #0A0A0C;
  --color-neutral-100:  #14141A;     /* surface */
  --color-neutral-200:  #1F1F26;     /* border */
  --color-neutral-300:  #2A2A33;
  --color-neutral-500:  #5E626E;
  --color-neutral-700:  #A0A4B0;     /* text tertiary */
  --color-neutral-800:  #D1D5DB;
  --color-neutral-900:  #F8FAFC;     /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #052E1A;
  --color-success-fg: #4ADE80;
  --color-warning-bg: #2A1F00;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #2A0F1A;
  --color-error-fg:   #F87171;
  --color-info-bg:    #0C4A6E;
  --color-info-fg:    #1ECFFF;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #0A0A0C;
  --bg-elevated: #14141A;
  --bg-overlay:  rgba(0,0,0,0.78);

  /* Text */
  --text-primary:    #F8FAFC;
  --text-secondary:  #D1D5DB;
  --text-tertiary:   #A0A4B0;
  --text-on-primary: #000000;
  --text-disabled:   #5E626E;

  /* Border */
  --border-default: #1F1F26;
  --border-subtle:  #14141A;
  --border-strong:  #2A2A33;
  --border-focus:   #1ECFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **Pretendard** (OFL)
  - 영문: Pretendard Latin / SF Pro / Roboto 폴백
- **위계**:
  - Display (히어로 타이틀): 40px / 900 / 1.1 / -0.025em
  - H1: 26px / 900 / 1.2 / -0.025em
  - H2 (섹션): 18px / 800 / 1.3 / -0.015em
  - H3 (자켓 타이틀): 13px / 800 / 1.4 / -0.005em
  - Body Large: 15px / 500 / 1.5 / -0.005em
  - Body: 13px / 500 / 1.5 / 0
  - Body Small (장르/연도): 11px / 600 / 1.45 / 0
  - Caption (배지): 10px / 800 / 1.4 / 0.06em

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
- **Container**: max-width 480px (모바일), 1440px (웹), 좌우 패딩 14px / 48px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 자켓 시그니처 */
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.50);
--shadow-md: 0 4px 16px rgba(0,0,0,0.60);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.75);
--shadow-cyan: 0 0 32px rgba(30,207,255,0.40);
```

### ⑧ Iconography
- **스타일**: Filled (재생/북마크) + Outline (메뉴)
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Material Symbols

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 13px/1 Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: 6px; padding: 11px 16px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease; }
.btn-primary { background: #fff; color: #000; }              /* 재생 = 흰 버튼이 OTT 표준 */
.btn-primary:hover { background: #E5E7EB; }
.btn-secondary { background: rgba(255,255,255,0.18); color: #fff; backdrop-filter: blur(8px); }
.btn-secondary:hover { background: rgba(255,255,255,0.28); }
.btn-cyan { background: var(--color-primary-500); color: #000; }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
```

**Input**
```css
.search-input { background: var(--bg-elevated); border: 1px solid var(--border-default); color: var(--text-primary); border-radius: 6px; padding: 10px 14px; font: 500 14px/1.4 inherit; }
.search-input:focus { outline: 0; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(30,207,255,0.30); }
```

**Card**
```css
.poster { background: var(--bg-elevated); border-radius: var(--radius-md); overflow: hidden; aspect-ratio: 2/3; }
.poster:hover { transform: scale(1.05); transition: transform 200ms ease; }
.hero-card { position: relative; height: 220px; background: linear-gradient(135deg, var(--color-secondary-500), var(--color-primary-500)); border-radius: var(--radius-md); overflow: hidden; }
.hero-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85)); }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: 4px; font: 800 10px/1.5 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
.tag-original { background: transparent; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.tag-new      { background: var(--color-error-fg); color: #000; }
.tag-19       { background: #DC2626; color: #fff; }
```

**Navigation (TabBar)**
```css
.tabbar { background: rgba(0,0,0,0.92); backdrop-filter: blur(12px); border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 700 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 240ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-zoom: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 흰 배경 캔버스 사용 금지 — 영상 콘텐츠 가독성 저하, OTT는 순흑 베이스
2. 자켓 모서리를 16px 이상 라운드 금지 — 6px 표준
3. 시안과 빨강을 한 화면에 강조로 동시 사용 금지 (Netflix와 혼동)
4. 본문 가는 폰트(weight 400 이하) 사용 금지
5. 그라데이션 위에 본문 텍스트 직접 배치 금지 — 반드시 어두운 페이드 오버레이 추가

### ⑫ 시그니처 적용 예시 (Wavve 홈)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #fff; background: #000; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #000; padding: 12px 14px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 10; }
  .topbar .brand { font-weight: 900; font-size: 22px; letter-spacing: -0.025em; background: linear-gradient(90deg, #1ECFFF, #0EA5E9); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .topbar nav { margin-left: 14px; display: flex; gap: 12px; font: 700 13px/1 inherit; color: #A0A4B0; }
  .topbar nav .active { color: #fff; }
  .topbar .icons { margin-left: auto; font-size: 16px; }
  .hero { position: relative; height: 380px; background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.92) 100%), linear-gradient(135deg, #1E3A8A 0%, #1ECFFF 100%); padding: 14px; display: flex; flex-direction: column; justify-content: flex-end; }
  .hero .label { font: 800 10px/1.4 inherit; color: #1ECFFF; letter-spacing: 0.08em; }
  .hero h1 { font: 900 28px/1.1 inherit; letter-spacing: -0.025em; margin: 6px 0 4px; }
  .hero .meta { font: 600 11px/1.4 inherit; color: #D1D5DB; }
  .hero .actions { display: flex; gap: 8px; margin-top: 14px; }
  .hero .actions .play { background: #fff; color: #000; border: 0; border-radius: 6px; padding: 10px 16px; font: 800 13px/1 inherit; cursor: pointer; }
  .hero .actions .add { background: rgba(255,255,255,0.18); color: #fff; border: 0; border-radius: 6px; padding: 10px 16px; font: 700 13px/1 inherit; backdrop-filter: blur(8px); cursor: pointer; }
  .row { padding: 16px 14px; }
  .row h2 { font: 800 15px/1.3 inherit; margin: 0 0 10px; }
  .row .strip { display: grid; grid-auto-flow: column; grid-auto-columns: 100px; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
  .poster { aspect-ratio: 2/3; border-radius: 6px; background: linear-gradient(180deg, #1E3A8A, #1ECFFF); position: relative; overflow: hidden; }
  .poster.p2 { background: linear-gradient(180deg, #9333EA, #EC4899); }
  .poster.p3 { background: linear-gradient(180deg, #0EA5E9, #10B981); }
  .poster.p4 { background: linear-gradient(180deg, #DC2626, #F59E0B); }
  .poster.p5 { background: linear-gradient(180deg, #4F46E5, #06B6D4); }
  .poster .badge { position: absolute; top: 4px; left: 4px; background: transparent; color: #1ECFFF; border: 1px solid #1ECFFF; padding: 1px 4px; border-radius: 3px; font: 800 8px/1.4 inherit; letter-spacing: 0.06em; }
  .tabbar { background: rgba(0,0,0,0.92); backdrop-filter: blur(12px); border-top: 1px solid #1F1F26; display: grid; grid-template-columns: repeat(5, 1fr); padding: 6px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 4px; text-align: center; font: 700 11px/1.3 inherit; color: #A0A4B0; }
  .tabbar .item.active { color: #fff; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">wavve</span>
    <nav><span class="active">홈</span><span>실시간</span><span>드라마</span></nav>
    <span class="icons">🔍</span>
  </header>
  <section class="hero">
    <div class="label">WAVVE ORIGINAL</div>
    <h1>스토브리그 시즌 2</h1>
    <div class="meta">2026 · 드라마 · 15세</div>
    <div class="actions">
      <button class="play">▶ 재생</button>
      <button class="add">＋ 보관함</button>
    </div>
  </section>
  <section class="row">
    <h2>인기 TOP 10</h2>
    <div class="strip">
      <div class="poster"><span class="badge">ORIGINAL</span></div>
      <div class="poster p2"></div>
      <div class="poster p3"></div>
      <div class="poster p4"></div>
      <div class="poster p5"></div>
    </div>
  </section>
  <section class="row">
    <h2>이번 주 신작</h2>
    <div class="strip">
      <div class="poster p3"></div>
      <div class="poster p2"></div>
      <div class="poster"></div>
      <div class="poster p5"></div>
    </div>
  </section>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">실시간</div>
    <div class="item">검색</div>
    <div class="item">보관함</div>
    <div class="item">My</div>
  </nav>
</div>
```
