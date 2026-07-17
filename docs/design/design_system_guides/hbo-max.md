---
brand: HBO Max
brand_ko: HBO 맥스
slug: hbo-max
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#8C2BFF"
primary_color_name: "Max Purple"
mood:
  - 시네마틱
  - 보라그라데이션
  - 프리미엄

font_category: sans-serif
font_primary: HBO Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2020
last_major_revision: 2024
signature_keyword: "보라(#8C2BFF)→블루 그라데이션과 시리즈 카드 그리드, HBO 헤리티지의 시네마틱 다크"

hero_html: |
  <div style="font-family:'HBO Sans',Inter,'Pretendard',sans-serif;background:#0A0A14;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(120% 80% at 70% 20%, rgba(140,43,255,0.40) 0%, transparent 60%), radial-gradient(80% 80% at 20% 90%, rgba(34,79,191,0.35) 0%, transparent 60%);"></div>
    <div style="position:relative;padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:14px;font-weight:800;letter-spacing:-0.01em;">Max</strong>
    </div>
    <div style="position:relative;padding:0 14px;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;padding-bottom:14px;">
      <div style="font-size:8px;font-weight:800;letter-spacing:0.24em;color:#B388FF;text-transform:uppercase;">HBO ORIGINAL</div>
      <div style="font-size:17px;font-weight:800;letter-spacing:-0.02em;line-height:1.0;">The Last of Us</div>
      <div style="font-size:9px;color:rgba(255,255,255,0.7);">시즌 2 · 신작 에피소드</div>
    </div>
    <div style="position:relative;padding:10px 14px;display:flex;gap:6px;">
      <button style="background:#fff;color:#0A0A14;border:0;border-radius:4px;padding:6px 14px;font-size:11px;font-weight:700;">▶ 재생</button>
      <button style="background:rgba(255,255,255,0.15);color:#fff;border:0;border-radius:4px;padding:6px 14px;font-size:11px;font-weight:600;backdrop-filter:blur(20px);">＋</button>
    </div>
  </div>

sources:
  - https://www.max.com/
  - https://www.hbo.com/
---

### ① 브랜드 DNA
- **브랜드명**: HBO Max (Max)
- **한 줄 정체성**: HBO 헤리티지 + 디스커버리 합병 콘텐츠를 묶은 프리미엄 OTT
- **공식 디자인 철학**: Bold cinematic — "Stories that move you" · HBO 톤의 시네마틱 보존
- **시그니처 요소 1개**: 보라(#8C2BFF)→블루(#224FBF) 그라데이션 + 다크 청보라 캔버스(#0A0A14) + HBO Sans 큰 타이틀. Apple TV+의 무채 시네마틱과 정반대의 컬러풀 시네마틱

### ② 톤 & 무드
- **핵심 키워드 3개**: 시네마틱, 보라그라데이션, 프리미엄
- **무드 설명**: 다크 청보라 캔버스. 히어로는 보라→블루 그라데이션이 라이팅처럼 흘러들어온다. 그리드 톤은 16:9 + 16:9 mixed로 시리즈와 영화가 한 화면에 공존.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~8px)
- **평면성**: Layered — 그라데이션 + 카드 그림자

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Max Purple */
  --color-primary-50:  #F0E6FF;
  --color-primary-100: #D9BFFF;
  --color-primary-200: #BA8AFF;
  --color-primary-300: #A35FFF;
  --color-primary-400: #9438FF;
  --color-primary-500: #8C2BFF;   /* Max Purple */
  --color-primary-600: #7820E0;
  --color-primary-700: #5F1AB3;
  --color-primary-800: #441280;
  --color-primary-900: #2A0A50;

  /* Secondary - Max Blue (gradient end) */
  --color-secondary-500: #224FBF;
  --color-secondary-300: #5577E0;
  --color-secondary-700: #143280;

  /* Neutral - dark navy scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F8;
  --color-neutral-100:  #E5E5EC;
  --color-neutral-200:  #C0C0CC;
  --color-neutral-300:  #8A8A99;
  --color-neutral-500:  #4F4F60;
  --color-neutral-700:  #1F1F2E;
  --color-neutral-800:  #14141F;
  --color-neutral-900:  #0F0F18;
  --color-neutral-1000: #0A0A14;

  /* Semantic */
  --color-success-bg: #0E2A1A;
  --color-success-fg: #34D17C;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #E5B044;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #E04A6A;
  --color-info-bg:    #1A2040;
  --color-info-fg:    #5577E0;

  /* Surface */
  --bg-base:     #0A0A14;
  --bg-subtle:   #0F0F18;
  --bg-elevated: #14141F;
  --bg-overlay:  rgba(10,10,20,0.85);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.72);
  --text-tertiary:   rgba(255,255,255,0.50);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.10);
  --border-subtle:  rgba(255,255,255,0.05);
  --border-strong:  rgba(255,255,255,0.20);
  --border-focus:   var(--color-primary-500);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: HBO Sans (자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 72px / 800 / 1.0 / -0.03em (Hero)
  - H1: 36px / 700 / 1.15 / -0.02em
  - H2: 22px / 700 / 1.25 / -0.01em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 10px / 800 / 1.2 / 0.24em uppercase (HBO ORIGINAL)

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
  --space-3xl: 80px;
  ```
- **Container**: max-width 1440px, 좌우 패딩 32px

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
--shadow-md: 0 8px 24px rgba(0,0,0,0.55);
--shadow-lg: 0 20px 48px rgba(0,0,0,0.65);
--shadow-purple: 0 20px 48px rgba(140,43,255,0.40);   /* 시그니처 보라 글로우 */
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'HBO Sans', Inter, sans-serif; border-radius: 4px; padding: 12px 24px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: opacity 200ms ease, transform 120ms ease; }
.btn-primary { background: #fff; color: #0A0A14; }       /* 메인은 흰 버튼 */
.btn-primary:hover { opacity: 0.85; }
.btn-secondary { background: rgba(255,255,255,0.15); color: #fff; backdrop-filter: blur(20px); }
.btn-ghost { background: transparent; color: #fff; border: 1px solid var(--border-strong); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-purple { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }   /* CTA */
.btn-icon { width: 44px; height: 44px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.15); color: #fff; }
```

**Input**
```css
.input { background: rgba(255,255,255,0.10); border: 1px solid transparent; border-radius: 4px; padding: 10px 14px 10px 38px; color: #fff; font: 400 14px/1.2 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); background: rgba(255,255,255,0.15); }
```

**Card (Poster)**
```css
.poster { background: transparent; cursor: pointer; transition: transform 280ms ease; }
.poster:hover { transform: scale(1.04); }
.poster .art { aspect-ratio: 16/9; border-radius: 4px; background: linear-gradient(135deg, var(--color-primary-700), var(--color-secondary-700)); box-shadow: var(--shadow-md); position: relative; overflow: hidden; }
.poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.75) 100%); }
.poster .label { position: absolute; left: 14px; bottom: 12px; font: 800 16px/1.1 inherit; letter-spacing: -0.01em; color: #fff; }
.poster h3 { margin: 8px 0 2px; font: 700 14px/1.3 inherit; }
.poster .sub { font: 500 12px/1.3 inherit; color: var(--text-tertiary); }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 20px; }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 2px; font: 800 10px/1.4 inherit; letter-spacing: 0.16em; text-transform: uppercase; }
.tag-original { background: transparent; color: var(--color-primary-200); }    /* HBO ORIGINAL */
.tag-new { background: #fff; color: #0A0A14; letter-spacing: 0.08em; }
.tag-4k  { background: rgba(255,255,255,0.15); color: #fff; letter-spacing: 0.08em; }
.tag-purple { background: var(--color-primary-500); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { position: sticky; top: 0; background: rgba(10,10,20,0.7); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 28px; padding: 14px 32px; font: 500 14px/1 inherit; z-index: 100; }
.topbar .brand { font-weight: 800; font-size: 18px; letter-spacing: -0.01em; }
.topbar .nav a { color: rgba(255,255,255,0.7); text-decoration: none; cursor: pointer; }
.topbar .nav a:hover { color: #fff; }
.topbar .nav a.active { color: #fff; }
```

### ⑩ Motion
```css
--duration-fast: 200ms;
--duration-base: 400ms;
--duration-slow: 700ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. 보라/블루 그라데이션을 단색 캔버스로 평탄화 금지 — 시그니처 광원
2. 메인 액션을 보라 버튼으로 사용 금지 — 흰 버튼 + 보라는 CTA/HBO 라벨 한정
3. 라이트 모드 캔버스 사용 금지 — 다크 시네마틱이 정체성
4. 풀필 pill 버튼 사용 금지 — 4px Soft 직사각
5. HBO ORIGINAL 라벨에 다른 색 사용 금지 — 연보라(#B388FF)가 표준

### ⑫ 시그니처 적용 예시 (Discover hero)
```html
<style>
  body { margin: 0; font-family: 'HBO Sans', Inter, 'Pretendard', sans-serif; background: #0A0A14; color: #fff; min-height: 100vh; }
  .topbar { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; gap: 32px; padding: 16px 32px; backdrop-filter: blur(24px); background: rgba(10,10,20,0.6); font-weight: 500; font-size: 14px; }
  .topbar .brand { font-weight: 800; font-size: 22px; letter-spacing: -0.02em; }
  .topbar .nav { display: flex; gap: 22px; color: rgba(255,255,255,0.7); }
  .topbar .nav .a { cursor: pointer; }
  .topbar .nav .a.active { color: #fff; }
  .topbar .right { margin-left: auto; display: flex; gap: 16px; align-items: center; }
  .hero { position: relative; min-height: 72vh; padding: 80px 32px 60px; overflow: hidden; }
  .hero::before { content:''; position: absolute; inset: 0; background: radial-gradient(120% 80% at 75% 20%, rgba(140,43,255,0.55) 0%, transparent 60%), radial-gradient(80% 80% at 20% 90%, rgba(34,79,191,0.45) 0%, transparent 60%), #0A0A14; }
  .hero::after { content:''; position: absolute; left: 0; right: 0; bottom: 0; height: 200px; background: linear-gradient(180deg, transparent, #0A0A14); }
  .hero .inner { position: relative; max-width: 680px; }
  .hero .pre { font-size: 11px; font-weight: 800; letter-spacing: 0.24em; color: #B388FF; margin-bottom: 18px; }
  .hero h1 { margin: 0 0 14px; font-size: 72px; font-weight: 800; line-height: 1.0; letter-spacing: -0.03em; }
  .hero .meta { color: rgba(255,255,255,0.72); font-size: 15px; margin-bottom: 18px; display: flex; gap: 12px; align-items: center; }
  .hero .meta .tag { padding: 3px 8px; background: rgba(255,255,255,0.15); border-radius: 2px; font: 700 11px/1 inherit; letter-spacing: 0.08em; text-transform: uppercase; }
  .hero .desc { color: rgba(255,255,255,0.85); font-size: 16px; line-height: 1.5; margin-bottom: 28px; max-width: 580px; }
  .actions { display: flex; gap: 12px; }
  .btn { font-family: inherit; font-size: 14px; font-weight: 700; border-radius: 4px; padding: 12px 24px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
  .btn-white { background: #fff; color: #0A0A14; }
  .btn-glass { background: rgba(255,255,255,0.15); color: #fff; backdrop-filter: blur(20px); }
  .shelf { padding: 0 32px 60px; }
  .shelf h2 { font-size: 22px; font-weight: 700; margin: 0 0 14px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .poster { cursor: pointer; transition: transform 280ms cubic-bezier(0.16,1,0.3,1); }
  .poster:hover { transform: scale(1.03); }
  .poster .art { aspect-ratio: 16/9; border-radius: 4px; position: relative; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.55); }
  .poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.85) 100%); }
  .poster .art .label { position: absolute; left: 14px; bottom: 12px; font: 800 18px/1.05 inherit; letter-spacing: -0.02em; }
  .poster .sub { font: 500 12px/1.3 inherit; color: rgba(255,255,255,0.55); margin-top: 8px; }
  .poster .ribbon { position: absolute; top: 10px; left: 10px; padding: 3px 8px; background: rgba(0,0,0,0.6); color: #B388FF; font: 800 10px/1 inherit; letter-spacing: 0.16em; text-transform: uppercase; border-radius: 2px; }
</style>

<header class="topbar">
  <div class="brand">Max</div>
  <div class="nav">
    <span class="a active">홈</span>
    <span class="a">시리즈</span>
    <span class="a">영화</span>
    <span class="a">스포츠</span>
    <span class="a">키즈</span>
  </div>
  <div class="right">🔍 ⋯</div>
</header>

<section class="hero">
  <div class="inner">
    <div class="pre">HBO ORIGINAL</div>
    <h1>The Last of Us</h1>
    <div class="meta"><span>시즌 2 · 2026</span><span class="tag">신작</span><span class="tag">4K HDR</span></div>
    <p class="desc">팬데믹 이후 폐허가 된 세계, 살아남은 이들의 이야기. 시즌 2 신작 에피소드가 매주 공개됩니다.</p>
    <div class="actions">
      <button class="btn btn-white">▶ 재생</button>
      <button class="btn btn-glass">＋ 내 목록</button>
    </div>
  </div>
</section>

<section class="shelf">
  <h2>Max 추천 시리즈</h2>
  <div class="grid">
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#5F1AB3,#224FBF);"><div class="ribbon">HBO</div><div class="label">House of the Dragon</div></div><div class="sub">시즌 3 · 판타지 드라마</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#8C2BFF,#1F1F2E);"><div class="ribbon">HBO</div><div class="label">Succession</div></div><div class="sub">완결 · 드라마</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#224FBF,#0A0A14);"><div class="ribbon">MAX</div><div class="label">The Penguin</div></div><div class="sub">스핀오프 시리즈</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#7820E0,#5577E0);"><div class="ribbon">HBO</div><div class="label">Euphoria</div></div><div class="sub">시즌 3 · 청춘 드라마</div></div>
  </div>
</section>
```
