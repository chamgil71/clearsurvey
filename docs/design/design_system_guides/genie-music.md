---
brand: Genie Music
brand_ko: 지니뮤직
slug: genie-music
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#3617CE"
primary_color_name: "Genie Purple"
mood:
  - 세련
  - 몰입
  - 신비

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2010
last_major_revision: 2024
signature_keyword: "퍼플 그라데이션과 다크 캔버스의 KT 음악 플랫폼"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#0A0820;color:#F5F5FA;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#0A0820;border-bottom:1px solid #1E1A3D;padding:12px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;background:linear-gradient(90deg,#7C3AED,#3617CE);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-0.02em;">genie</strong>
      <span style="margin-left:auto;font-size:11px;color:#8E89B5;">🔍 ⓜ</span>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:linear-gradient(135deg,#5B21B6 0%,#3617CE 100%);border-radius:16px;padding:16px;position:relative;overflow:hidden;">
        <div style="position:absolute;right:-20px;top:-20px;width:120px;height:120px;background:radial-gradient(circle,rgba(168,85,247,0.45),transparent 70%);"></div>
        <div style="font-size:11px;font-weight:700;opacity:0.85;color:#fff;">지니 차트 TOP200</div>
        <div style="font-size:22px;font-weight:900;letter-spacing:-0.025em;margin-top:2px;color:#fff;">실시간 차트</div>
        <div style="font-size:11px;opacity:0.85;margin-top:4px;color:#fff;font-weight:600;">5월 12일 18:00</div>
      </div>
      <div style="background:#13102C;border:1px solid #1E1A3D;border-radius:12px;padding:10px;display:flex;align-items:center;gap:10px;">
        <div style="width:44px;height:44px;background:#1E1A3D;color:#A8A0E0;border-radius:6px;display:grid;place-items:center;font:900 14px/1 inherit;">01</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:800;">SUPERNOVA</div>
          <div style="font-size:11px;color:#8E89B5;font-weight:600;">aespa</div>
        </div>
        <div style="color:#A78BFA;font-size:18px;">▶</div>
      </div>
    </div>
  </div>

sources:
  - https://www.genie.co.kr/
  - https://corp.genie.co.kr/
---

### ① 브랜드 DNA
- **브랜드명**: Genie Music (지니뮤직 — KT 그룹)
- **한 줄 정체성**: KT 그룹 음악 플랫폼 — 멜론에 이은 한국 2위 음원, 차별점은 "퍼플 톤"
- **공식 디자인 철학**: "당신이 원하는 음악, 지니가 들려드려요" — 추천·차트·라이브
- **시그니처 요소 1개**: 지니 퍼플(#3617CE)에서 시작해 바이올렛(#7C3AED)·인디고로 흐르는 그라데이션 + 다크 캔버스(#0A0820). 형광 멜론 그린과 정반대의 음악 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 세련, 몰입, 신비
- **무드 설명**: 거의 검정에 가까운 다크 퍼플 캔버스 + 그라데이션 히어로 + 보라 라디얼 글로우. 차트 리스트는 다크 카드 + 1px 보더로 무게감 유지.
- **비주얼 스타일**: 모던 미니멀 + 글래스모피즘 (히어로/플레이어)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px)
- **평면성**: Subtle — 그라데이션 + 블러 글로우

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Genie Purple */
  --color-primary-50:  #F2EEFF;
  --color-primary-100: #DDD2FF;
  --color-primary-200: #B6A1FF;
  --color-primary-300: #8E70FF;
  --color-primary-400: #6E47F2;
  --color-primary-500: #3617CE;   /* Genie Purple */
  --color-primary-600: #2A11A8;
  --color-primary-700: #1F0C7F;
  --color-primary-800: #150857;
  --color-primary-900: #0A042E;

  /* Secondary - Violet (그라데이션 짝) */
  --color-secondary-500: #7C3AED;
  --color-secondary-300: #A78BFA;

  /* Neutral (Dark-first) */
  --color-neutral-0:    #050410;
  --color-neutral-50:   #0A0820;     /* page bg */
  --color-neutral-100:  #13102C;     /* surface */
  --color-neutral-200:  #1E1A3D;     /* border */
  --color-neutral-300:  #2C2756;
  --color-neutral-500:  #5E5891;
  --color-neutral-700:  #8E89B5;     /* text tertiary */
  --color-neutral-800:  #BFBADC;
  --color-neutral-900:  #F5F5FA;     /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #102D1D;
  --color-success-fg: #4ADE80;
  --color-warning-bg: #2A1F00;
  --color-warning-fg: #F59E0B;
  --color-error-bg:   #2A0F1A;
  --color-error-fg:   #F87171;
  --color-info-bg:    #1A1740;
  --color-info-fg:    #A78BFA;

  /* Surface */
  --bg-base:     #0A0820;
  --bg-subtle:   #13102C;
  --bg-elevated: #1A163A;
  --bg-overlay:  rgba(5,4,16,0.78);

  /* Text */
  --text-primary:    #F5F5FA;
  --text-secondary:  #BFBADC;
  --text-tertiary:   #8E89B5;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5E5891;

  /* Border */
  --border-default: #1E1A3D;
  --border-subtle:  #13102C;
  --border-strong:  #2C2756;
  --border-focus:   #7C3AED;
}

[data-theme="light"] {
  --bg-base: #F8F7FC;
  --bg-subtle: #F1EFF9;
  --bg-elevated: #FFFFFF;
  --text-primary: #1A1438;
  --text-secondary: #4A4576;
  --border-default: #E5E1F0;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **Pretendard** (OFL)
  - 영문: Pretendard Latin / Inter / SF Pro 폴백
- **위계**:
  - Display: 36px / 900 / 1.2 / -0.025em
  - H1: 24px / 800 / 1.3 / -0.02em
  - H2: 20px / 800 / 1.35 / -0.015em
  - H3 (트랙명): 14px / 800 / 1.4 / -0.005em
  - Body Large: 15px / 500 / 1.5 / -0.005em
  - Body: 13px / 500 / 1.5 / 0
  - Body Small: 11px / 600 / 1.45 / 0
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
- **Container**: max-width 480px (모바일), 좌우 패딩 12px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;     /* 카드 시그니처 */
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.40);
--shadow-md: 0 4px 16px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.65);
--shadow-glow: 0 0 32px rgba(124,58,237,0.40);   /* 퍼플 라디얼 */
```

### ⑧ Iconography
- **스타일**: Outline + 가는 Stroke
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: var(--radius-md); padding: 11px 16px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease, box-shadow 200ms ease; }
.btn-primary { background: linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-primary-500) 100%); color: #fff; box-shadow: var(--shadow-glow); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-secondary-300); }
.btn-play { width: 44px; height: 44px; padding: 0; border-radius: 9999px; background: var(--color-secondary-300); color: #0A0820; }
```

**Input**
```css
.search-input { background: var(--bg-elevated); border: 1px solid var(--border-default); color: var(--text-primary); border-radius: 9999px; padding: 10px 16px; font: 500 14px/1.4 inherit; }
.search-input:focus { outline: 0; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(124,58,237,0.25); }
```

**Card**
```css
.track-card { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 10px; display: grid; grid-template-columns: 44px 1fr auto; gap: 10px; align-items: center; }
.hero-card { background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-500) 100%); border-radius: var(--radius-lg); padding: 18px; color: #fff; position: relative; overflow: hidden; }
.hero-card::after { content: ''; position: absolute; right: -30px; top: -30px; width: 140px; height: 140px; background: radial-gradient(circle, rgba(168,85,247,0.45), transparent 70%); }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: 9999px; font: 700 10px/1.5 inherit; }
.tag-new   { background: var(--color-secondary-500); color: #fff; }
.tag-hot   { background: var(--color-error-fg); color: #0A0820; }
.tag-subtle{ background: var(--color-primary-100); color: var(--color-primary-700); }
```

**Navigation (TabBar)**
```css
.tabbar { background: var(--bg-base); border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--color-secondary-300); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 240ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-purple-fade: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 형광 그린·시안 등 멜론·스포티파이 톤 색상 강조 금지 — 퍼플 단일 유지
2. 다크 위 본문 텍스트에 채도 높은 보라 사용 금지 — 본문은 #F5F5FA 부근
3. 그라데이션 위에 그라데이션 본문 텍스트 중첩 금지 — 가독성 손실
4. 차트 번호 폰트를 가는 weight로 사용 금지 — 800~900 굵게
5. 보라 글로우(`--shadow-glow`)를 한 화면에 두 곳 이상 사용 금지

### ⑫ 시그니처 적용 예시 (지니 홈)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #F5F5FA; background: #0A0820; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #0A0820; border-bottom: 1px solid #1E1A3D; padding: 12px 14px; display: flex; align-items: center; gap: 12px; }
  .topbar .brand { font-weight: 900; font-size: 22px; letter-spacing: -0.025em; background: linear-gradient(90deg, #A78BFA, #7C3AED); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .topbar .icons { margin-left: auto; font-size: 16px; color: #8E89B5; }
  .home { padding: 12px 14px 80px; display: flex; flex-direction: column; gap: 12px; }
  .hero { background: linear-gradient(135deg, #5B21B6 0%, #3617CE 100%); border-radius: 16px; padding: 18px; position: relative; overflow: hidden; box-shadow: 0 0 32px rgba(124,58,237,0.40); }
  .hero::after { content: ''; position: absolute; right: -30px; top: -30px; width: 160px; height: 160px; background: radial-gradient(circle, rgba(168,85,247,0.45), transparent 70%); }
  .hero .label { font-size: 11px; font-weight: 700; opacity: 0.85; color: #fff; }
  .hero h2 { font-size: 22px; font-weight: 900; letter-spacing: -0.02em; margin: 2px 0 0; color: #fff; }
  .hero .when { font-size: 11px; opacity: 0.85; margin-top: 4px; color: #fff; font-weight: 600; }
  .hero button { margin-top: 12px; background: rgba(255,255,255,0.18); color: #fff; border: 0; border-radius: 9999px; padding: 8px 14px; font: 700 12px/1 inherit; backdrop-filter: blur(8px); cursor: pointer; }
  .chart-head { padding: 4px 4px 8px; display: flex; justify-content: space-between; align-items: center; }
  .chart-head h3 { margin: 0; font-size: 14px; font-weight: 800; color: #F5F5FA; }
  .chart-head .more { font-size: 11px; color: #8E89B5; font-weight: 600; }
  .track { background: #13102C; border: 1px solid #1E1A3D; border-radius: 12px; padding: 10px; display: grid; grid-template-columns: 28px 44px 1fr auto; gap: 10px; align-items: center; margin-bottom: 6px; }
  .track .rank { font: 900 16px/1 inherit; color: #A78BFA; text-align: center; }
  .track .cover { width: 44px; height: 44px; background: #1E1A3D; color: #8E89B5; border-radius: 6px; display: grid; place-items: center; font: 900 13px/1 inherit; }
  .track .meta .title { font: 800 14px/1.4 inherit; color: #F5F5FA; }
  .track .meta .artist { font: 600 11px/1.4 inherit; color: #8E89B5; margin-top: 2px; }
  .track .play { color: #A78BFA; font-size: 18px; }
  .tabbar { background: #0A0820; border-top: 1px solid #1E1A3D; display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: #5E5891; }
  .tabbar .item.active { color: #A78BFA; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">genie</span>
    <span class="icons">🔍 ⓜ</span>
  </header>
  <main class="home">
    <section class="hero">
      <div class="label">지니 차트 TOP200</div>
      <h2>실시간 차트</h2>
      <div class="when">5월 12일 18:00 · 매 시간 갱신</div>
      <button>차트 보기 ›</button>
    </section>
    <section>
      <div class="chart-head"><h3>차트 미리보기</h3><span class="more">전체 ›</span></div>
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
