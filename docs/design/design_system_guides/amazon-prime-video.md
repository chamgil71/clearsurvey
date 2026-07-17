---
brand: Amazon Prime Video
brand_ko: 아마존 프라임 비디오
slug: amazon-prime-video
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#00A8E1"
primary_color_name: "Prime Blue"
mood:
  - 액션우선
  - 정보풍부
  - 글로벌

font_category: sans-serif
font_primary: Amazon Ember
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2006
last_major_revision: 2024
signature_keyword: "Prime Blue(#00A8E1) 큰 'Watch now' 액션 + IMDb 평점 박스가 카드마다 박힌 정보 풍부 톤"

hero_html: |
  <div style="font-family:'Amazon Ember',Inter,'Pretendard',sans-serif;background:#0F171E;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,#1A3A52 0%,#0F171E 70%);"></div>
    <div style="position:relative;padding:10px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:11px;font-weight:700;letter-spacing:0.04em;">prime <span style="color:#00A8E1;">video</span></strong>
    </div>
    <div style="position:relative;padding:0 14px;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;padding-bottom:10px;">
      <div style="display:flex;gap:4px;align-items:center;">
        <span style="background:#00A8E1;color:#0F171E;font-size:8px;font-weight:800;padding:2px 5px;border-radius:2px;letter-spacing:0.04em;">PRIME</span>
        <span style="font-size:9px;color:rgba(255,255,255,0.7);">Amazon Original</span>
      </div>
      <div style="font-size:16px;font-weight:800;letter-spacing:-0.02em;line-height:1.05;">Reacher</div>
      <div style="display:flex;gap:6px;align-items:center;font-size:9px;color:rgba(255,255,255,0.7);">
        <span style="background:#F5C518;color:#000;padding:1px 4px;border-radius:2px;font-weight:800;">IMDb 8.1</span>
        <span>시즌 3</span>
      </div>
    </div>
    <div style="position:relative;padding:10px 14px;display:flex;gap:6px;">
      <button style="background:#00A8E1;color:#0F171E;border:0;border-radius:18px;padding:6px 14px;font-size:11px;font-weight:700;">▶ Watch now</button>
      <button style="background:rgba(255,255,255,0.12);color:#fff;border:0;border-radius:18px;padding:6px 12px;font-size:11px;">＋</button>
    </div>
  </div>

sources:
  - https://www.primevideo.com/
  - https://www.aboutamazon.com/news/entertainment
---

### ① 브랜드 DNA
- **브랜드명**: Amazon Prime Video
- **한 줄 정체성**: 프라임 멤버십과 묶인 영화·시리즈 + 채널 구독 OTT
- **공식 디자인 철학**: Amazon Ember + 정보 풍부 — 평점·시즌·언어·자막을 한눈에
- **시그니처 요소 1개**: Prime Blue(#00A8E1) "Watch now" 큰 액션 + IMDb 노란 평점 박스(#F5C518)가 거의 모든 카드에 노출되는 정보 우선 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 액션우선, 정보풍부, 글로벌
- **무드 설명**: 다크 청회색 캔버스(#0F171E). 히어로는 청보라 그라데이션. 액션 버튼은 Prime Blue 단색. 카드마다 IMDb·연도·연령등급·시즌 정보를 압축해서 보여준다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px) / 버튼은 pill
- **평면성**: Layered — 카드 그림자 + 히어로 그라데이션

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Prime Blue */
  --color-primary-50:  #E0F4FC;
  --color-primary-100: #B0E3F5;
  --color-primary-200: #7CCFED;
  --color-primary-300: #44BAE5;
  --color-primary-400: #1FB0E3;
  --color-primary-500: #00A8E1;   /* Prime Blue */
  --color-primary-600: #008CBF;
  --color-primary-700: #006D94;
  --color-primary-800: #004E69;
  --color-primary-900: #00303F;

  /* Secondary - IMDb Yellow */
  --color-secondary-500: #F5C518;

  /* Neutral - dark blue-gray scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F7F8;
  --color-neutral-100:  #E5E7EA;
  --color-neutral-200:  #C0C4CC;
  --color-neutral-300:  #8A8F99;
  --color-neutral-500:  #4F555E;
  --color-neutral-700:  #1F2A33;
  --color-neutral-800:  #16202A;
  --color-neutral-900:  #131C24;
  --color-neutral-1000: #0F171E;     /* Prime canvas */

  /* Semantic */
  --color-success-bg: #0A2A1A;
  --color-success-fg: #1FC97A;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #F5C518;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #E04A6A;
  --color-info-bg:    #0A2535;
  --color-info-fg:    #00A8E1;

  /* Surface */
  --bg-base:     #0F171E;
  --bg-subtle:   #131C24;
  --bg-elevated: #1F2A33;
  --bg-overlay:  rgba(15,23,30,0.85);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.72);
  --text-tertiary:   rgba(255,255,255,0.50);
  --text-on-primary: #0F171E;       /* Prime Blue 위는 짙은 글자 */
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.10);
  --border-subtle:  rgba(255,255,255,0.05);
  --border-strong:  rgba(255,255,255,0.20);
  --border-focus:   #00A8E1;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Amazon Ember (자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 20px / 700 / 1.3 / -0.005em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 15px / 400 / 1.5 / 0
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
  --space-lg: 22px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 1500px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 8px 24px rgba(0,0,0,0.55);
--shadow-lg: 0 20px 48px rgba(0,0,0,0.65);
--shadow-blue: 0 8px 24px rgba(0,168,225,0.30);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Amazon Ember', Inter, sans-serif; border-radius: 9999px; padding: 12px 24px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: rgba(255,255,255,0.12); color: #fff; backdrop-filter: blur(20px); }
.btn-ghost { background: transparent; color: #fff; border: 1px solid var(--border-strong); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-icon { width: 40px; height: 40px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.12); color: #fff; }
.btn-watchparty { background: #FF9900; color: #0F171E; }  /* Amazon orange 보조 */
```

**Input**
```css
.input { background: rgba(255,255,255,0.10); border: 1px solid transparent; border-radius: 4px; padding: 10px 14px 10px 38px; color: #fff; font: 400 14px/1.2 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); }
```

**Card (Poster)**
```css
.poster { background: transparent; cursor: pointer; transition: transform 200ms ease; }
.poster:hover { transform: scale(1.03); }
.poster .art { aspect-ratio: 2/3; border-radius: 4px; background: linear-gradient(135deg, #1A3A52, #0F171E); box-shadow: var(--shadow-md); position: relative; overflow: hidden; }
.poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.85) 100%); }
.poster .ribbon { position: absolute; top: 8px; left: 8px; background: var(--color-primary-500); color: var(--text-on-primary); font: 800 9px/1 inherit; letter-spacing: 0.04em; padding: 3px 5px; border-radius: 2px; }
.poster .label { position: absolute; left: 10px; bottom: 8px; font: 800 14px/1.1 inherit; color: #fff; }
.poster .imdb { position: absolute; right: 8px; top: 8px; background: var(--color-secondary-500); color: #000; font: 800 10px/1 inherit; padding: 3px 5px; border-radius: 2px; }
.poster h3 { margin: 8px 0 2px; font: 600 14px/1.3 inherit; }
.poster .sub { font: 500 12px/1.3 inherit; color: var(--text-tertiary); }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 3px 6px; border-radius: 2px; font: 700 11px/1.3 inherit; letter-spacing: 0.04em; }
.tag-prime  { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-imdb   { background: var(--color-secondary-500); color: #000; }
.tag-uhd    { background: rgba(255,255,255,0.10); color: #fff; }
.tag-x-ray  { background: rgba(0,168,225,0.16); color: var(--color-primary-300); }
```

**Navigation (Top bar)**
```css
.topbar { background: rgba(15,23,30,0.92); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 24px; padding: 14px 24px; font: 500 14px/1 inherit; position: sticky; top: 0; z-index: 100; }
.topbar .brand { font: 700 18px/1 inherit; }
.topbar .brand .accent { color: var(--color-primary-500); }
.topbar .nav a { color: rgba(255,255,255,0.7); cursor: pointer; }
.topbar .nav a:hover { color: #fff; }
.topbar .nav a.active { color: #fff; }
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
1. 메인 CTA를 흰 버튼으로 사용 금지 — Prime Blue가 시그니처
2. IMDb 평점을 숨기는 카드 구성 금지 — 정보 풍부 톤 유지
3. 라이트 모드 캔버스 사용 금지 — 다크 청회색이 정체성
4. 포스터 모서리 12px+ 라운드 사용 금지 — 4~6px Soft
5. PRIME 리본 위치를 카드 중앙 등으로 변경 금지 — 좌상단 고정

### ⑫ 시그니처 적용 예시 (Discover hero)
```html
<style>
  body { margin: 0; font-family: 'Amazon Ember', Inter, 'Pretendard', sans-serif; background: #0F171E; color: #fff; min-height: 100vh; }
  .topbar { background: rgba(15,23,30,0.92); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 24px; padding: 14px 24px; font-weight: 500; font-size: 14px; position: sticky; top: 0; z-index: 10; }
  .topbar .brand { font: 700 20px/1 inherit; letter-spacing: -0.005em; }
  .topbar .brand .accent { color: #00A8E1; }
  .topbar .nav { display: flex; gap: 20px; color: rgba(255,255,255,0.7); }
  .topbar .nav .a.active { color: #fff; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; }
  .hero { position: relative; min-height: 68vh; padding: 60px 24px; overflow: hidden; background: linear-gradient(180deg, #1A3A52 0%, #0F171E 70%); }
  .hero::before { content:''; position: absolute; right: 0; top: 0; width: 60%; height: 100%; background: radial-gradient(80% 80% at 80% 30%, rgba(0,168,225,0.25) 0%, transparent 60%); }
  .hero::after { content:''; position: absolute; left: 0; right: 0; bottom: 0; height: 160px; background: linear-gradient(180deg, transparent, #0F171E); }
  .hero .inner { position: relative; max-width: 680px; }
  .hero .row { display: flex; gap: 8px; align-items: center; margin-bottom: 14px; }
  .hero .row .prime { background: #00A8E1; color: #0F171E; font: 800 11px/1 inherit; padding: 4px 8px; border-radius: 2px; letter-spacing: 0.04em; }
  .hero .row .orig { font-size: 12px; color: rgba(255,255,255,0.7); }
  .hero h1 { margin: 0 0 12px; font-size: 56px; font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; }
  .hero .meta { display: flex; gap: 10px; align-items: center; font-size: 13px; color: rgba(255,255,255,0.7); margin-bottom: 14px; }
  .hero .meta .imdb { background: #F5C518; color: #000; padding: 2px 6px; border-radius: 2px; font: 700 12px/1 inherit; }
  .hero .meta .uhd { background: rgba(255,255,255,0.15); padding: 2px 6px; border-radius: 2px; font: 700 11px/1 inherit; }
  .hero .desc { color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.5; margin-bottom: 22px; max-width: 580px; }
  .actions { display: flex; gap: 10px; }
  .btn { font-family: inherit; font-size: 14px; font-weight: 700; border-radius: 9999px; padding: 12px 22px; border: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
  .btn-blue { background: #00A8E1; color: #0F171E; }
  .btn-glass { background: rgba(255,255,255,0.12); color: #fff; backdrop-filter: blur(20px); }
  .shelf { padding: 0 24px 60px; }
  .shelf h2 { font-size: 20px; font-weight: 700; margin: 0 0 14px; }
  .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
  .poster { cursor: pointer; transition: transform 200ms ease; }
  .poster:hover { transform: scale(1.04); }
  .poster .art { aspect-ratio: 2/3; border-radius: 4px; background: linear-gradient(135deg, #1A3A52, #0F171E); box-shadow: 0 8px 24px rgba(0,0,0,0.55); position: relative; overflow: hidden; }
  .poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.85)); }
  .poster .art .label { position: absolute; left: 10px; bottom: 8px; font: 800 14px/1.1 inherit; }
  .poster .art .ribbon { position: absolute; top: 8px; left: 8px; background: #00A8E1; color: #0F171E; font: 800 9px/1 inherit; padding: 3px 5px; border-radius: 2px; letter-spacing: 0.04em; }
  .poster .art .imdb { position: absolute; top: 8px; right: 8px; background: #F5C518; color: #000; font: 800 10px/1 inherit; padding: 3px 5px; border-radius: 2px; }
  .poster .sub { font: 500 11px/1.3 inherit; color: rgba(255,255,255,0.55); margin-top: 6px; }
</style>

<header class="topbar">
  <div class="brand">prime <span class="accent">video</span></div>
  <div class="nav">
    <span class="a active">홈</span>
    <span class="a">영화</span>
    <span class="a">시리즈</span>
    <span class="a">라이브 TV</span>
    <span class="a">내 보관함</span>
  </div>
  <div class="right">🔍 ⋯</div>
</header>

<section class="hero">
  <div class="inner">
    <div class="row"><span class="prime">PRIME</span><span class="orig">Amazon Original</span></div>
    <h1>Reacher</h1>
    <div class="meta"><span class="imdb">IMDb 8.1</span><span>시즌 3 · 2026</span><span class="uhd">UHD</span><span class="uhd">X-Ray</span></div>
    <p class="desc">전직 미군 헌병 잭 리처의 새로운 임무. 시즌 3, 매주 신규 에피소드 공개.</p>
    <div class="actions">
      <button class="btn btn-blue">▶ Watch now</button>
      <button class="btn btn-glass">＋ Watchlist</button>
    </div>
  </div>
</section>

<section class="shelf">
  <h2>Prime 회원에게 추천하는 작품</h2>
  <div class="grid">
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#1A3A52,#0F171E);"><div class="ribbon">PRIME</div><div class="imdb">8.4</div><div class="label">Fallout</div></div><div class="sub">2024 · 18+</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#2A1A3A,#0F171E);"><div class="ribbon">PRIME</div><div class="imdb">8.7</div><div class="label">The Boys</div></div><div class="sub">시즌 4 · 19+</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#3A2A1A,#0F171E);"><div class="ribbon">PRIME</div><div class="imdb">8.0</div><div class="label">Rings of Power</div></div><div class="sub">시즌 2 · 15+</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#1A2A3A,#0F171E);"><div class="ribbon">PRIME</div><div class="imdb">7.5</div><div class="label">Citadel</div></div><div class="sub">스파이 시리즈</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#3A1A2A,#0F171E);"><div class="ribbon">PRIME</div><div class="imdb">7.8</div><div class="label">Jack Ryan</div></div><div class="sub">시즌 4</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#1A3A3A,#0F171E);"><div class="ribbon">PRIME</div><div class="imdb">8.2</div><div class="label">Invincible</div></div><div class="sub">애니메이션</div></div>
  </div>
</section>
```
