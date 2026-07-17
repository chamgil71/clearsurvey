---
brand: Apple TV Plus
brand_ko: 애플 TV+
slug: apple-tv-plus
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - media
  - consumer

color_tone: cool
primary_color_hex: "#000000"
primary_color_name: "Pure Black"
mood:
  - 시네마틱
  - 풀스크린
  - 프리미엄

font_category: sans-serif
font_primary: SF Pro
font_korean_supported: true

density: spacious
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2019
last_major_revision: 2024
signature_keyword: "끝까지 검정인 풀블리드 16:9 히어로와 단 두 줄 흰 텍스트의 시네마틱 미니멀"

hero_html: |
  <div style="font-family:-apple-system,'SF Pro Display','Pretendard',sans-serif;background:#000;color:#fff;height:100%;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,#1A2433 0%,#000 60%);"></div>
    <div style="position:relative;height:100%;display:grid;grid-template-rows:auto 1fr auto;padding:14px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:13px;font-weight:700;letter-spacing:0.04em;">tv<span style="font-weight:300;">+</span></span>
      </div>
      <div style="display:flex;flex-direction:column;justify-content:flex-end;gap:6px;">
        <div style="font-size:8px;font-weight:700;letter-spacing:0.32em;text-transform:uppercase;color:#fff;opacity:0.7;">APPLE ORIGINAL</div>
        <div style="font-size:18px;font-weight:800;letter-spacing:-0.02em;line-height:1.05;">Severance</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);">시즌 2 · 신작 에피소드</div>
      </div>
      <div style="display:flex;gap:6px;">
        <button style="background:#fff;color:#000;border:0;border-radius:9999px;padding:6px 14px;font-size:11px;font-weight:700;cursor:pointer;">▶ 재생</button>
        <button style="background:rgba(255,255,255,0.18);color:#fff;border:0;border-radius:9999px;padding:6px 14px;font-size:11px;font-weight:600;backdrop-filter:blur(20px);">＋</button>
      </div>
    </div>
  </div>

sources:
  - https://tv.apple.com/
  - https://developer.apple.com/design/human-interface-guidelines/
---

### ① 브랜드 DNA
- **브랜드명**: Apple TV+ (Apple TV Plus)
- **한 줄 정체성**: Apple Original 시네마와 시리즈만 모은 큐레이션 스트리밍
- **공식 디자인 철학**: HIG의 Clarity·Deference·Depth — 콘텐츠가 곧 인터페이스
- **시그니처 요소 1개**: 끝까지 검정 캔버스(#000) + 풀블리드 16:9 히어로 + 단 두 줄의 흰 SF Pro 텍스트 (Apple Music의 빨강 그라데이션과 달리 무채 톤)

### ② 톤 & 무드
- **핵심 키워드 3개**: 시네마틱, 풀스크린, 프리미엄
- **무드 설명**: 페이지 전체가 영화관. 키 비주얼이 캔버스를 채우고, UI는 거의 사라진다. 흰 텍스트와 무광 회색만 남는다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Spacious — 카드 간격이 넉넉
- **모서리 성향**: Soft (8~12px, 포스터 자체는 4~6px)
- **평면성**: Flat — 그라데이션 페이드 외에 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Pure Black */
  --color-primary-50:  #FAFAFA;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #BFBFBF;
  --color-primary-300: #8A8A8A;
  --color-primary-400: #555555;
  --color-primary-500: #000000;    /* Apple TV+ Black */
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Cool dark blue (히어로 그라데이션 hint) */
  --color-secondary-500: #1A2433;

  /* Neutral - HIG dark */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F7;
  --color-neutral-100:  #E5E5EA;
  --color-neutral-200:  #C7C7CC;
  --color-neutral-300:  #8E8E93;
  --color-neutral-500:  #636366;
  --color-neutral-700:  #2C2C2E;
  --color-neutral-800:  #1C1C1E;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #1F3A28;
  --color-success-fg: #34C759;
  --color-warning-bg: #3A2E1F;
  --color-warning-fg: #FF9500;
  --color-error-bg:   #3A1F22;
  --color-error-fg:   #FF453A;
  --color-info-bg:    #1F2E3A;
  --color-info-fg:    #0A84FF;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #0A0A0A;
  --bg-elevated: #1C1C1E;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.72);
  --text-tertiary:   rgba(255,255,255,0.50);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.10);
  --border-subtle:  rgba(255,255,255,0.05);
  --border-strong:  rgba(255,255,255,0.18);
  --border-focus:   #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: SF Pro Display (제목·메타), SF Pro Text (본문)
  - 한글: Apple SD Gothic Neo / Pretendard
- **위계**:
  - Display: 80px / 800 / 1.0 / -0.03em (Hero 타이틀)
  - H1: 40px / 700 / 1.1 / -0.02em
  - H2: 24px / 600 / 1.2 / -0.01em
  - H3: 17px / 600 / 1.3 / -0.005em
  - Body Large: 17px / 400 / 1.5 / 0
  - Body: 15px / 400 / 1.5 / 0
  - Body Small: 13px / 500 / 1.4 / 0
  - Caption: 11px / 700 / 1.2 / 0.32em uppercase  /* "APPLE ORIGINAL" 라벨 */

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 28px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 1440px (시네마틱 폭), 좌우 패딩 40px

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
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 8px 24px rgba(0,0,0,0.50);
--shadow-lg: 0 20px 60px rgba(0,0,0,0.65);
--shadow-fade: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%);  /* 히어로 페이드 */
```

### ⑧ Iconography
- **스타일**: SF Symbols Light
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: SF Symbols / Phosphor 폴백

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 15px/1 -apple-system, 'SF Pro Display', Inter, sans-serif; border-radius: 9999px; padding: 12px 28px; border: 0; display: inline-flex; align-items: center; gap: 8px; transition: opacity 200ms ease, transform 120ms ease; }
.btn-primary { background: #FFFFFF; color: #000; }    /* 흰 버튼이 시그니처 */
.btn-primary:hover { opacity: 0.85; }
.btn-primary:active { transform: scale(0.97); }
.btn-secondary { background: rgba(255,255,255,0.18); color: #fff; backdrop-filter: blur(20px); }
.btn-ghost { background: transparent; color: #fff; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-icon { width: 44px; height: 44px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.18); color: #fff; }
```

**Input**
```css
.input { background: rgba(255,255,255,0.10); border: 0; border-radius: 8px; padding: 10px 14px 10px 38px; color: #fff; font: 400 15px/1.2 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: 1.5px solid #fff; outline-offset: 0; }
```

**Card (Poster)**
```css
.poster { background: transparent; cursor: pointer; transition: transform 280ms cubic-bezier(0.25,0.46,0.45,0.94); }
.poster:hover { transform: scale(1.04); }
.poster .art { aspect-ratio: 16/9; border-radius: 6px; background: linear-gradient(135deg,#1A2433,#000); box-shadow: var(--shadow-md); position: relative; overflow: hidden; }
.poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.75) 100%); }
.poster h3 { margin: 10px 0 2px; font: 600 14px/1.3 inherit; color: #fff; }
.poster .sub { font: 500 12px/1.3 inherit; color: var(--text-tertiary); }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 20px; }
.card-outlined { background: transparent; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 4px; font: 700 11px/1.4 inherit; letter-spacing: 0.32em; text-transform: uppercase; }
.tag-original { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.3); padding-left: 0; padding-right: 0; border: 0; }   /* APPLE ORIGINAL */
.tag-new { background: #FFFFFF; color: #000; letter-spacing: 0.08em; }
.tag-4k  { background: rgba(255,255,255,0.18); color: #fff; letter-spacing: 0.08em; }
```

**Navigation (Top bar)**
```css
.topbar { position: sticky; top: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 28px; padding: 14px 40px; font: 500 14px/1 inherit; z-index: 100; }
.topbar .brand { font-weight: 700; letter-spacing: 0.04em; }
.topbar .nav a { color: rgba(255,255,255,0.7); text-decoration: none; }
.topbar .nav a:hover { color: #fff; }
.topbar .nav a.active { color: #fff; }
```

### ⑩ Motion
```css
--duration-fast: 200ms;
--duration-base: 400ms;
--duration-slow: 800ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. 라이트 모드 캔버스 사용 금지 — 영화관처럼 검정 유지
2. 메인 액션 버튼에 채도 높은 컬러 사용 금지 — 흰 버튼이 시그니처
3. 포스터에 별점/평점 숫자 큰 텍스트로 표시 금지 — 콘텐츠 미니멀 톤 유지
4. 히어로 영역에 정적 일러스트 사용 금지 — 실 콘텐츠 키 비주얼만
5. 풀필 pill 외 라운드 버튼 사용 금지 — 모든 액션은 9999px

### ⑫ 시그니처 적용 예시 (Discover hero)
```html
<style>
  body { margin: 0; font-family: -apple-system, 'SF Pro Display', 'Pretendard', sans-serif; background: #000; color: #fff; }
  .topbar { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; gap: 32px; padding: 16px 40px; backdrop-filter: blur(24px); background: rgba(0,0,0,0.6); font-weight: 500; font-size: 14px; }
  .topbar .brand { font-weight: 700; letter-spacing: 0.04em; font-size: 18px; }
  .topbar .nav { display: flex; gap: 24px; color: rgba(255,255,255,0.7); }
  .topbar .nav .a { cursor: pointer; }
  .topbar .nav .active { color: #fff; }
  .topbar .right { margin-left: auto; display: flex; gap: 16px; align-items: center; }
  .hero { position: relative; min-height: 70vh; padding: 80px 40px 60px; overflow: hidden; background: linear-gradient(180deg, #1A2433 0%, #000 100%); }
  .hero::before { content:''; position: absolute; inset: 0; background: radial-gradient(80% 80% at 80% 20%, rgba(70,90,120,0.45) 0%, transparent 60%), radial-gradient(60% 60% at 20% 70%, rgba(120,40,40,0.20) 0%, transparent 50%); }
  .hero::after { content:''; position: absolute; left: 0; right: 0; bottom: 0; height: 240px; background: linear-gradient(180deg, transparent, #000); }
  .hero .inner { position: relative; max-width: 640px; }
  .hero .original { font-size: 11px; font-weight: 700; letter-spacing: 0.32em; opacity: 0.85; margin-bottom: 18px; }
  .hero h1 { margin: 0 0 16px; font-size: 80px; font-weight: 800; line-height: 1.0; letter-spacing: -0.03em; }
  .hero .meta { color: rgba(255,255,255,0.72); font-size: 16px; margin-bottom: 18px; }
  .hero .desc { color: rgba(255,255,255,0.85); font-size: 17px; line-height: 1.5; margin-bottom: 28px; max-width: 540px; }
  .actions { display: flex; gap: 12px; }
  .btn { font-family: inherit; font-size: 15px; font-weight: 600; border-radius: 9999px; padding: 12px 28px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
  .btn-white { background: #fff; color: #000; }
  .btn-glass { background: rgba(255,255,255,0.18); color: #fff; backdrop-filter: blur(20px); }
  .shelf { padding: 0 40px 60px; }
  .shelf h2 { font-size: 22px; font-weight: 700; margin: 0 0 16px; letter-spacing: -0.01em; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .poster .art { aspect-ratio: 16/9; border-radius: 6px; background: linear-gradient(135deg,#1A2433,#000); position: relative; overflow: hidden; }
  .poster .art::after { content:''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%); }
  .poster .art .label { position: absolute; left: 14px; bottom: 12px; font: 800 18px/1.1 inherit; letter-spacing: -0.02em; }
  .poster .sub { font: 500 12px/1.3 inherit; color: rgba(255,255,255,0.5); margin-top: 8px; }
</style>

<header class="topbar">
  <div class="brand">tv<span style="font-weight:300;">+</span></div>
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
    <div class="original">APPLE ORIGINAL</div>
    <h1>Severance</h1>
    <div class="meta">시즌 2 · 신작 에피소드 · 2026</div>
    <p class="desc">회사에서의 기억과 사생활을 분리한 사람들의 이야기. 시즌 2가 시작됩니다.</p>
    <div class="actions">
      <button class="btn btn-white">▶ 재생</button>
      <button class="btn btn-glass">＋ 보관함</button>
    </div>
  </div>
</section>

<section class="shelf">
  <h2>지금 시청하기 좋은 작품</h2>
  <div class="grid">
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#1A2433,#000);"><div class="label">Slow Horses</div></div><div class="sub">시즌 4 · 스파이 스릴러</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#2A1A1A,#000);"><div class="label">Pachinko</div></div><div class="sub">대하 드라마</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#0D1A2A,#000);"><div class="label">For All Mankind</div></div><div class="sub">시즌 5</div></div>
    <div class="poster"><div class="art" style="background:linear-gradient(135deg,#1F1F2A,#000);"><div class="label">Silo</div></div><div class="sub">디스토피아 SF</div></div>
  </div>
</section>
```
