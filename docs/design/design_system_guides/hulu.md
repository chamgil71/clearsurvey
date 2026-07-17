---
brand: Hulu
brand_ko: 훌루
slug: hulu
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#1CE783"
primary_color_name: "Hulu Green"
mood:
  - 라이브TV
  - 라임그린
  - 다크

font_category: sans-serif
font_primary: Graphik
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2007
last_major_revision: 2023
signature_keyword: "라임 그린(#1CE783) + 검정 캔버스 + 라이브 TV·VOD 통합 가이드의 활기찬 톤"

hero_html: |
  <div style="font-family:Graphik,Inter,'Pretendard',sans-serif;background:#040405;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(120% 80% at 80% 20%, rgba(28,231,131,0.20) 0%, transparent 60%);"></div>
    <div style="position:relative;padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:14px;font-weight:800;color:#1CE783;letter-spacing:-0.01em;">hulu</strong>
    </div>
    <div style="position:relative;padding:0 14px;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;padding-bottom:10px;">
      <div style="display:flex;gap:4px;align-items:center;">
        <span style="background:#FF0066;color:#fff;font-size:7px;font-weight:800;padding:2px 5px;border-radius:2px;letter-spacing:0.04em;">LIVE</span>
        <span style="font-size:9px;color:rgba(255,255,255,0.7);">NBC · 21:00</span>
      </div>
      <div style="font-size:15px;font-weight:800;letter-spacing:-0.02em;line-height:1.05;">The Bear</div>
      <div style="font-size:9px;color:#1CE783;font-weight:600;">시즌 4 · Hulu Original</div>
    </div>
    <div style="position:relative;padding:10px 14px;display:flex;gap:6px;">
      <button style="background:#1CE783;color:#040405;border:0;border-radius:4px;padding:6px 14px;font-size:11px;font-weight:700;">▶ 시청하기</button>
      <button style="background:rgba(255,255,255,0.10);color:#fff;border:0;border-radius:4px;padding:6px 12px;font-size:11px;">＋</button>
    </div>
  </div>

sources:
  - https://www.hulu.com/
  - https://press.huluentertainment.com/
---

### ① 브랜드 DNA
- **브랜드명**: Hulu
- **한 줄 정체성**: VOD + 라이브 TV + Disney 채널을 묶은 미국 OTT (Disney+ 시너지)
- **공식 디자인 철학**: "Bold, immediate, fun" — 라임 그린 시그니처로 활기와 즉시성 강조
- **시그니처 요소 1개**: 라임 그린(#1CE783) + 검정 캔버스 + 라이브 TV 통합 가이드(채널 + 편성표). Apple TV+의 무채 / HBO Max의 보라와 명확히 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 라이브TV, 라임그린, 다크
- **무드 설명**: 거의 검정 캔버스. 핵심 액션과 브랜드 식별은 강렬한 라임 그린. 라이브 TV는 핑크(#FF0066) 보조, VOD는 그린 액션. 활기차고 즉시성을 강조.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Layered

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Hulu Green */
  --color-primary-50:  #E5FCF1;
  --color-primary-100: #BAFAD8;
  --color-primary-200: #88F4BB;
  --color-primary-300: #54EFA0;
  --color-primary-400: #34EB91;
  --color-primary-500: #1CE783;   /* Hulu Green */
  --color-primary-600: #15CC73;
  --color-primary-700: #0FA15C;
  --color-primary-800: #097A45;
  --color-primary-900: #054F2E;

  /* Secondary - Live red/pink */
  --color-secondary-500: #FF0066;

  /* Neutral - dark scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F7;
  --color-neutral-100:  #E5E5E8;
  --color-neutral-200:  #BFBFC4;
  --color-neutral-300:  #8A8A91;
  --color-neutral-500:  #4F4F58;
  --color-neutral-700:  #1F1F26;
  --color-neutral-800:  #14141A;
  --color-neutral-900:  #0A0A0F;
  --color-neutral-1000: #040405;     /* canvas */

  /* Semantic */
  --color-success-bg: #0A2A1A;
  --color-success-fg: #1CE783;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #FFB84F;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #FF0066;
  --color-info-bg:    #0F1F2A;
  --color-info-fg:    #4FB0FF;

  /* Surface */
  --bg-base:     #040405;
  --bg-subtle:   #0A0A0F;
  --bg-elevated: #14141A;
  --bg-overlay:  rgba(4,4,5,0.85);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.75);
  --text-tertiary:   rgba(255,255,255,0.50);
  --text-on-primary: #040405;       /* Green 위 검정 */
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.10);
  --border-subtle:  rgba(255,255,255,0.05);
  --border-strong:  rgba(255,255,255,0.20);
  --border-focus:   #1CE783;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Graphik (Commercial Type) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 60px / 800 / 1.05 / -0.025em
  - H1: 32px / 700 / 1.15 / -0.015em
  - H2: 22px / 700 / 1.25 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 700 / 1.3 / 0.04em

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
  --space-3xl: 72px;
  ```
- **Container**: max-width 1440px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 8px 24px rgba(0,0,0,0.50);
--shadow-lg: 0 20px 40px rgba(0,0,0,0.60);
--shadow-green: 0 8px 24px rgba(28,231,131,0.35);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합 (라이브 인디케이터는 Filled)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Graphik, Inter, sans-serif; border-radius: 4px; padding: 12px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:active { transform: scale(0.98); }
.btn-secondary { background: rgba(255,255,255,0.10); color: #fff; backdrop-filter: blur(20px); }
.btn-ghost { background: transparent; color: #fff; border: 1px solid var(--border-strong); }
.btn-danger { background: var(--color-secondary-500); color: #fff; }
.btn-live { background: var(--color-secondary-500); color: #fff; display: inline-flex; align-items: center; gap: 6px; }
.btn-live::before { content:''; width: 6px; height: 6px; border-radius: 50%; background: #fff; animation: pulse 1.4s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
.btn-icon { width: 40px; height: 40px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.10); color: #fff; }
```

**Input**
```css
.input { background: rgba(255,255,255,0.08); border: 1px solid transparent; border-radius: 4px; padding: 10px 14px 10px 38px; color: #fff; font: 400 14px/1.2 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); }
```

**Card (Poster + Live row)**
```css
.poster { background: transparent; cursor: pointer; transition: transform 200ms ease; }
.poster:hover { transform: scale(1.04); }
.poster .art { aspect-ratio: 16/9; border-radius: 4px; background: linear-gradient(135deg,#1F1F26,#040405); box-shadow: var(--shadow-md); position: relative; overflow: hidden; }
.poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.85)); }
.poster .live-tag { position: absolute; top: 8px; left: 8px; background: var(--color-secondary-500); color: #fff; font: 800 9px/1 inherit; letter-spacing: 0.08em; padding: 3px 5px; border-radius: 2px; }
.poster .label { position: absolute; left: 12px; bottom: 10px; font: 800 16px/1.05 inherit; color: #fff; }
.poster .sub { font: 500 12px/1.3 inherit; color: var(--text-tertiary); margin-top: 8px; }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
.live-row { display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: var(--bg-elevated); border-radius: 4px; border-left: 3px solid var(--color-secondary-500); }
.live-row .ch { font: 700 13px/1 inherit; color: #fff; }
.live-row .show { font: 500 14px/1.3 inherit; color: #fff; }
.live-row .at { font: 500 11px/1 inherit; color: var(--text-tertiary); margin-left: auto; }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 2px; font: 800 11px/1.3 inherit; letter-spacing: 0.08em; text-transform: uppercase; }
.tag-original { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-live     { background: var(--color-secondary-500); color: #fff; }
.tag-new      { background: #fff; color: #040405; }
.tag-4k       { background: rgba(255,255,255,0.10); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: rgba(4,4,5,0.92); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 24px; padding: 14px 24px; font: 500 14px/1 inherit; position: sticky; top: 0; z-index: 100; }
.topbar .brand { font: 800 22px/1 inherit; color: var(--color-primary-500); letter-spacing: -0.01em; }
.topbar .nav a { color: rgba(255,255,255,0.7); cursor: pointer; }
.topbar .nav a:hover { color: #fff; }
.topbar .nav a.active { color: var(--color-primary-500); }
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
1. 라임 그린(#1CE783)을 다른 그린으로 변경 금지 — Hulu 시그니처 정체성
2. 메인 액션 버튼을 흰색으로 변경 금지 — 그린이 시그니처
3. LIVE 배지를 그린으로 사용 금지 — Live는 핑크(#FF0066)
4. 라이트 모드 캔버스 사용 금지 — 검정이 정체성
5. 라이브 TV 가이드 생략 금지 — Hulu의 차별 기능

### ⑫ 시그니처 적용 예시 (Hub with Live guide)
```html
<style>
  body { margin: 0; font-family: Graphik, Inter, 'Pretendard', sans-serif; background: #040405; color: #fff; min-height: 100vh; }
  .topbar { background: rgba(4,4,5,0.9); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 24px; padding: 14px 24px; font-weight: 500; font-size: 14px; position: sticky; top: 0; z-index: 10; }
  .topbar .brand { font: 800 28px/1 inherit; color: #1CE783; letter-spacing: -0.02em; }
  .topbar .nav { display: flex; gap: 20px; color: rgba(255,255,255,0.7); }
  .topbar .nav .a.active { color: #1CE783; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; }
  .hero { position: relative; min-height: 60vh; padding: 60px 24px; overflow: hidden; }
  .hero::before { content:''; position: absolute; inset: 0; background: radial-gradient(80% 80% at 80% 20%, rgba(28,231,131,0.20) 0%, transparent 60%), #040405; }
  .hero .inner { position: relative; max-width: 660px; }
  .hero .row { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
  .hero .row .orig { background: #1CE783; color: #040405; font: 800 11px/1 inherit; letter-spacing: 0.08em; padding: 4px 8px; border-radius: 2px; }
  .hero .row .meta { color: rgba(255,255,255,0.7); font-size: 13px; }
  .hero h1 { margin: 0 0 12px; font-size: 56px; font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; }
  .hero .desc { color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.5; margin-bottom: 22px; max-width: 580px; }
  .actions { display: flex; gap: 10px; }
  .btn { font-family: inherit; font-size: 14px; font-weight: 700; border-radius: 4px; padding: 12px 22px; border: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
  .btn-green { background: #1CE783; color: #040405; }
  .btn-glass { background: rgba(255,255,255,0.10); color: #fff; }
  .live-section { padding: 0 24px 32px; }
  .live-section h2 { font-size: 20px; font-weight: 700; margin: 0 0 14px; display: flex; align-items: center; gap: 10px; }
  .live-section h2 .pill { background: #FF0066; color: #fff; font: 800 11px/1 inherit; letter-spacing: 0.08em; padding: 4px 8px; border-radius: 2px; display: inline-flex; align-items: center; gap: 6px; }
  .live-section h2 .pill::before { content:''; width: 6px; height: 6px; border-radius: 50%; background: #fff; }
  .live-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .channel { background: #14141A; border-radius: 4px; padding: 12px; border-left: 3px solid #FF0066; cursor: pointer; }
  .channel:hover { background: #1F1F26; }
  .channel .ch { font: 700 12px/1 inherit; color: rgba(255,255,255,0.7); letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 4px; }
  .channel .show { font: 700 16px/1.2 inherit; }
  .channel .progress { height: 3px; background: #1F1F26; border-radius: 9999px; overflow: hidden; margin: 10px 0 6px; }
  .channel .progress .bar { height: 100%; background: #FF0066; }
  .channel .at { font: 500 11px/1 inherit; color: rgba(255,255,255,0.5); }
  .shelf { padding: 0 24px 60px; }
  .shelf h2 { font-size: 20px; font-weight: 700; margin: 0 0 14px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .poster { cursor: pointer; transition: transform 200ms ease; }
  .poster:hover { transform: scale(1.03); }
  .poster .art { aspect-ratio: 16/9; border-radius: 4px; background: linear-gradient(135deg,#1F1F26,#040405); box-shadow: 0 8px 24px rgba(0,0,0,0.5); position: relative; overflow: hidden; }
  .poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.85)); }
  .poster .art .label { position: absolute; left: 12px; bottom: 10px; font: 800 16px/1.05 inherit; }
  .poster .art .ribbon { position: absolute; top: 8px; left: 8px; background: #1CE783; color: #040405; font: 800 10px/1 inherit; padding: 3px 5px; border-radius: 2px; letter-spacing: 0.08em; }
  .poster .sub { font: 500 12px/1.3 inherit; color: rgba(255,255,255,0.5); margin-top: 8px; }
</style>

<header class="topbar">
  <div class="brand">hulu</div>
  <div class="nav">
    <span class="a active">홈</span>
    <span class="a">TV</span>
    <span class="a">영화</span>
    <span class="a">라이브 TV</span>
    <span class="a">키즈</span>
  </div>
  <div class="right">🔍 ⋯</div>
</header>

<section class="hero">
  <div class="inner">
    <div class="row"><span class="orig">HULU ORIGINAL</span><span class="meta">시즌 4 · 2026 · 19+</span></div>
    <h1>The Bear</h1>
    <p class="desc">시카고의 한 식당, 셰프 카르멘의 분투. 시즌 4 신작 에피소드가 매주 공개됩니다.</p>
    <div class="actions">
      <button class="btn btn-green">▶ 시청하기</button>
      <button class="btn btn-glass">＋ 내 목록</button>
    </div>
  </div>
</section>

<section class="live-section">
  <h2>지금 방송 중 <span class="pill">LIVE</span></h2>
  <div class="live-grid">
    <div class="channel"><div class="ch">NBC</div><div class="show">Sunday Night Football</div><div class="progress"><div class="bar" style="width:38%"></div></div><div class="at">21:00 - 24:00</div></div>
    <div class="channel"><div class="ch">CNN</div><div class="show">Anderson Cooper 360</div><div class="progress"><div class="bar" style="width:62%"></div></div><div class="at">22:00 - 23:00</div></div>
    <div class="channel"><div class="ch">ESPN</div><div class="show">SportsCenter</div><div class="progress"><div class="bar" style="width:25%"></div></div><div class="at">21:30 - 22:30</div></div>
    <div class="channel"><div class="ch">HGTV</div><div class="show">House Hunters</div><div class="progress"><div class="bar" style="width:80%"></div></div><div class="at">21:30 - 22:00</div></div>
  </div>
</section>

<section class="shelf">
  <h2>Hulu 추천 시리즈</h2>
  <div class="grid">
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#0F2A1A,#040405);"><div class="ribbon">HULU</div><div class="label">Only Murders in the Building</div></div><div class="sub">시즌 5 · 코미디 미스터리</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#2A1A0F,#040405);"><div class="ribbon">HULU</div><div class="label">The Handmaid's Tale</div></div><div class="sub">완결 · 드라마</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#1A0F2A,#040405);"><div class="ribbon">FX</div><div class="label">Shōgun</div></div><div class="sub">한정 시리즈</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#0F1A2A,#040405);"><div class="ribbon">HULU</div><div class="label">Tell Me Lies</div></div><div class="sub">시즌 2</div></div>
  </div>
</section>
```
