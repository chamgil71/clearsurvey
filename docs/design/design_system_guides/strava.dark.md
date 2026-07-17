---
brand: Strava
brand_ko: 스트라바
slug: strava
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - mobility
  - social

color_tone: warm
primary_color_hex: "#FC5200"
primary_color_name: "Strava Orange"
mood:
  - 역동
  - 성취
  - 경쟁

font_category: sans-serif
font_primary: Maison Neue
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2009
last_major_revision: 2024
signature_keyword: "오렌지 액티비티 맵 트레이스와 세그먼트 리더보드의 운동 소셜 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F7FA", "border": "#DFDFDF", "fg": "#101010", "fg_muted": "#6D6D78", "accent": "#FC5200" },
    "dark":  { "bg": "#101010", "surface": "#1A1A1A", "border": "#1F1F1F", "fg": "#FFFFFF", "fg_muted": "#999999", "accent": "#FC5200" }
  }

hero_html: |
  <div style="font-family:-apple-system,'Maison Neue','Pretendard','Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;">
    <div style="padding:12px 16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:22px;height:22px;background:var(--card-accent);display:grid;place-items:center;color:#fff;font:900 13px/1 sans-serif;">S</div>
      <span style="font-weight:700;font-size:14px;letter-spacing:-0.01em;">STRAVA</span>
    </div>
    <div style="position:relative;background:#0A0A0A;overflow:hidden;">
      <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
        <rect width="200" height="160" fill="#0A0A0A"/>
        <path d="M10,130 C30,80 60,90 80,60 S130,30 150,50 180,90 195,75" stroke="#FC5200" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="10" cy="130" r="4" fill="#FC5200"/>
        <circle cx="195" cy="75" r="4" fill="#FFE600"/>
        <text x="100" y="155" text-anchor="middle" fill="#8A8A8A" font-size="6" font-family="sans-serif">12.4 km · 48:32 · 234m ↗</text>
      </svg>
    </div>
    <div style="padding:10px 16px 14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;border-top:1px solid var(--card-border);">
      <div><div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.08em;">Distance</div><div style="font-weight:700;font-size:14px;">12.4<span style="font-size:9px;color:var(--card-fg-muted);font-weight:400;"> km</span></div></div>
      <div><div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.08em;">Pace</div><div style="font-weight:700;font-size:14px;">3:54<span style="font-size:9px;color:var(--card-fg-muted);font-weight:400;"> /km</span></div></div>
      <div><div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.08em;">Elev</div><div style="font-weight:700;font-size:14px;">234<span style="font-size:9px;color:var(--card-fg-muted);font-weight:400;"> m</span></div></div>
    </div>
  </div>

sources:
  - https://www.strava.com/
  - https://brand.strava.com/
  - https://blog.strava.com/
---

### ① 브랜드 DNA
- **브랜드명**: Strava
- **한 줄 정체성**: 러닝·라이딩 GPS 액티비티를 시각화·공유·경쟁하는 글로벌 운동 소셜 네트워크
- **공식 디자인 철학**: "If it's not on Strava, it didn't happen." — 모든 액티비티는 기록되어 비교 가능해진다
- **시그니처 요소 1개**: 형광 오렌지(#FC5200) GPS 트레이스가 검정 다크맵 위를 가르는 한 줄과, 세그먼트 리더보드의 KOM/QOM 배지

### ② 톤 & 무드
- **핵심 키워드 3개**: 역동, 성취, 경쟁
- **무드 설명**: 검정 배경 위에 형광 오렌지 한 줄이 운동의 궤적을 그린다. 숫자(거리·페이스·고도)는 굵게, 라벨은 작고 차분하게. 사진 같은 GPS 맵이 항상 중심에 있다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 데이터 카드가 빽빽하지만 카드 간 여백은 분명
- **모서리 성향**: Sharp (0~4px) — 운동 데이터의 정확성 강조
- **평면성**: Flat — 그림자 없음, 색 대비로만 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Strava Orange */
  --color-primary-50:  #FFF1E5;
  --color-primary-100: #FFD9B8;
  --color-primary-200: #FFB880;
  --color-primary-300: #FF9347;
  --color-primary-400: #FE7321;
  --color-primary-500: #FC5200;   /* Strava Orange */
  --color-primary-600: #E04800;
  --color-primary-700: #B83C00;
  --color-primary-800: #8F2E00;
  --color-primary-900: #5C1E00;

  /* Secondary - KOM Yellow (리더보드 1위 배지) */
  --color-secondary-500: #FFE600;

  /* Neutral - 다크 우선, 위로 갈수록 어둡게 (반전 램프) */
  --color-neutral-0:    #0A0A0A;     /* 가장 깊은 캔버스 */
  --color-neutral-50:   #101010;     /* 다크 페이지 bg */
  --color-neutral-100:  #161616;     /* 다크 카드 bg */
  --color-neutral-200:  #1F1F1F;     /* 보더 */
  --color-neutral-300:  #2A2A2A;
  --color-neutral-500:  #8A8A8A;     /* 라벨 */
  --color-neutral-700:  #C2C2C2;
  --color-neutral-800:  #E0E0E0;
  --color-neutral-900:  #F2F2F2;     /* 가장 밝은 텍스트 */
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크에서 가독한 채도 */
  --color-success-bg: #14301A;
  --color-success-fg: #5CD679;
  --color-warning-bg: #332608;
  --color-warning-fg: #F2C14E;
  --color-error-bg:   #3A1412;
  --color-error-fg:   #F2645C;
  --color-info-bg:    #12233A;
  --color-info-fg:    #5CA8F2;

  /* Surface */
  --bg-base:     #101010;
  --bg-subtle:   #161616;
  --bg-elevated: #1F1F1F;
  --bg-overlay:  rgba(0,0,0,0.72);

  /* Text */
  --text-primary:    #F2F2F2;
  --text-secondary:  #C2C2C2;
  --text-tertiary:   #8A8A8A;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A5A5A;

  /* Border */
  --border-default: #2A2A2A;
  --border-subtle:  #1F1F1F;
  --border-strong:  #3A3A3A;
  --border-focus:   #FC5200;
}

[data-theme="light"] {
  /* Primary - Strava Orange (동일 유지) */
  --color-primary-50:  #FFF1E5;
  --color-primary-100: #FFD9B8;
  --color-primary-200: #FFB880;
  --color-primary-300: #FF9347;
  --color-primary-400: #FE7321;
  --color-primary-500: #FC5200;
  --color-primary-600: #E04800;
  --color-primary-700: #B83C00;
  --color-primary-800: #8F2E00;
  --color-primary-900: #5C1E00;

  --color-secondary-500: #FFE600;

  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7FA;
  --color-neutral-100:  #EFEFEF;     /* 라이트 카드 bg */
  --color-neutral-200:  #DFDFDF;
  --color-neutral-300:  #C2C2C2;
  --color-neutral-500:  #6D6D78;     /* 라벨 */
  --color-neutral-700:  #3A3A3A;
  --color-neutral-800:  #242428;
  --color-neutral-900:  #101010;     /* 다크 캔버스 */
  --color-neutral-1000: #000000;

  --color-success-bg: #E4F4E4;
  --color-success-fg: #2E8B2E;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #B07A00;
  --color-error-bg:   #FCE2E2;
  --color-error-fg:   #C8302C;
  --color-info-bg:    #E5EFFA;
  --color-info-fg:    #2A6DBF;

  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7FA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(16,16,16,0.65);

  --text-primary:    #101010;
  --text-secondary:  #3A3A3A;
  --text-tertiary:   #6D6D78;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C2C2C2;

  --border-default: #DFDFDF;
  --border-subtle:  #EFEFEF;
  --border-strong:  #C2C2C2;
  --border-focus:   #FC5200;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Maison Neue (Milieu Grotesque) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 숫자(데이터): Maison Neue Tabular (tabular-nums)
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.1 / -0.015em
  - H2: 26px / 700 / 1.2 / -0.01em
  - H3: 20px / 600 / 1.3 / 0
  - Body Large: 17px / 400 / 1.5 / 0
  - Body: 15px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.45 / 0
  - Data Stat: 28px / 700 / 1 / -0.01em tabular
  - Caption: 11px / 600 / 1.3 / 0.08em uppercase

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
- **Container**: max-width 1080px, 좌우 패딩 16px (모바일 우선)

### ⑥ Border Radius
```css
--radius-none: 0;       /* 액티비티 맵 카드 */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;  /* 아바타, KOM 배지 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 2px 6px rgba(0,0,0,0.55);     /* 액티비티 카드 hover */
--shadow-lg: 0 8px 20px rgba(0,0,0,0.65);    /* 모달 */
--shadow-orange: 0 4px 14px rgba(252,82,0,0.40);  /* CTA 강조 */
```

### ⑧ Iconography
- **스타일**: Outline 강세 (러닝맨/자전거 픽토그램은 Filled)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Tabler — 액티비티 픽토그램은 자체 셋

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'Maison Neue', Inter, 'Pretendard', sans-serif;
       letter-spacing: 0.04em; text-transform: uppercase;
       border-radius: var(--radius-md); padding: 12px 22px; border: 0;
       display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
       transition: background 120ms ease, transform 120ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { transform: translateY(1px); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1.5px solid var(--text-primary); }
.btn-secondary:hover { background: var(--text-primary); color: var(--bg-base); }
.btn-ghost { background: transparent; color: var(--color-primary-500); padding: 12px 8px; }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default);
         border-radius: var(--radius-md); padding: 10px 12px; height: 40px;
         font: 400 15px/1.4 inherit; color: var(--text-primary); transition: border-color 120ms ease; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(252,82,0,0.20); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card (Activity)**
```css
.activity-card { background: var(--bg-base); border: 1px solid var(--border-default);
                 border-radius: var(--radius-md); overflow: hidden; }
.activity-card .map { aspect-ratio: 16/9; background: var(--color-neutral-900); position: relative; }
.activity-card .map svg path { stroke: var(--color-primary-500); stroke-width: 3; fill: none; }
.activity-card .meta { padding: 14px 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.activity-card .stat-num { font: 700 22px/1 tabular-nums; color: var(--text-primary); }
.activity-card .stat-label { font: 600 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-tertiary); }
```

**Badge (KOM/QOM)**
```css
.badge { font: 700 11px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase;
         padding: 4px 8px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 4px; }
.badge-kom    { background: var(--color-secondary-500); color: var(--text-primary); }
.badge-solid  { background: var(--color-primary-500); color: var(--text-on-primary); }
.badge-subtle { background: var(--color-primary-50); color: var(--color-primary-700); }
.badge-outline { background: transparent; border: 1px solid var(--text-primary); color: var(--text-primary); }
```

**Navigation (Top + Tab)**
```css
.topnav { height: 56px; background: var(--text-primary); color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 24px; }
.topnav .logo { font: 900 18px/1 inherit; letter-spacing: 0.04em; }
.topnav .logo .s { color: var(--color-primary-500); }
.topnav a { color: #fff; font: 600 14px/1 inherit; text-decoration: none; opacity: 0.85; }
.topnav a.active { opacity: 1; border-bottom: 3px solid var(--color-primary-500); padding-bottom: 18px; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 240ms;
--duration-slow: 480ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 오렌지 외 컬러 강조 추가 금지 — Strava는 단일 형광 오렌지로 모든 액션·트레이스 통일
2. 액티비티 맵 배경에 패턴/그라데이션 추가 금지 — 검정 다크맵 + 오렌지 트레이스만
3. 데이터 숫자에 proportional 폰트 사용 금지 — tabular-nums 필수
4. 카드 모서리 16px 이상 라운드 금지 — Strava는 Sharp(2~4px)
5. 본문 폰트에 italic 사용 금지 — 운동 데이터의 정밀도 흐림

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: 'Maison Neue', Inter, 'Pretendard', -apple-system, sans-serif; color: #F2F2F2; background: #101010; }
  .topnav { height: 56px; background: #0A0A0A; color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 28px; }
  .topnav .logo { font: 900 20px/1 inherit; letter-spacing: 0.04em; }
  .topnav .logo .s { color: #FC5200; }
  .topnav a { color: #fff; font: 600 13px/1 inherit; text-decoration: none; opacity: 0.85; padding: 20px 0; }
  .topnav a.active { opacity: 1; border-bottom: 3px solid #FC5200; }
  .hero { background: #0A0A0A; color: #fff; padding: 64px 20px; text-align: center; position: relative; overflow: hidden; }
  .hero::before { content:""; position: absolute; inset: 0;
                  background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(252,82,0,0.28), transparent 60%); }
  .hero h1 { font-size: 56px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; margin: 0 0 16px; position: relative; }
  .hero h1 .accent { color: #FC5200; }
  .hero p { font-size: 18px; color: #C2C2C2; margin: 0 0 28px; position: relative; }
  .hero .btn-primary { background: #FC5200; color: #fff; border: 0; padding: 14px 28px; border-radius: 4px; font: 700 14px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; }
  .features { max-width: 1080px; margin: 64px auto; padding: 0 20px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .card { background: #161616; border: 1px solid #2A2A2A; border-radius: 4px; overflow: hidden; }
  .card .map { aspect-ratio: 16/9; background: #0A0A0A; position: relative; }
  .card .map svg { width: 100%; height: 100%; display: block; }
  .card .meta { padding: 14px 16px; display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
  .card .num { font: 700 22px/1 'Maison Neue', sans-serif; font-variant-numeric: tabular-nums; }
  .card .lbl { font: 600 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.08em; color: #8A8A8A; }
  .card .head { padding: 12px 16px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #1F1F1F; }
  .card .avatar { width: 32px; height: 32px; border-radius: 9999px; background: #FC5200; color: #fff; display: grid; place-items: center; font: 700 13px/1 inherit; }
  .card .name { font: 700 13px/1.3 inherit; }
  .card .when { font: 500 11px/1.3 inherit; color: #8A8A8A; }
  .badge { font: 700 10px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 8px; border-radius: 2px; background: #FFE600; color: #101010; margin-left: auto; }
</style>

<header class="topnav">
  <span class="logo"><span class="s">S</span>TRAVA</span>
  <a class="active">Feed</a><a>Activities</a><a>Segments</a><a>Clubs</a>
  <span style="margin-left:auto;font:600 13px/1 inherit;color:#FC5200;">Upgrade</span>
</header>

<section class="hero">
  <h1>If it's not on Strava,<br/><span class="accent">it didn't happen.</span></h1>
  <p>러닝·라이딩 GPS를 자동 기록하고, 친구와 비교하고, 세그먼트에서 경쟁하세요.</p>
  <button class="btn-primary">무료로 시작 →</button>
</section>

<div class="features">
  <div class="card">
    <div class="head"><div class="avatar">JK</div><div><div class="name">Jin K.</div><div class="when">오늘 아침 06:24 · 한강 자전거</div></div><span class="badge">KOM</span></div>
    <div class="map">
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="180" fill="#0A0A0A"/>
        <path d="M20,150 C60,80 110,120 150,70 S240,40 300,90" stroke="#FC5200" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="20" cy="150" r="5" fill="#FC5200"/><circle cx="300" cy="90" r="5" fill="#FFE600"/>
      </svg>
    </div>
    <div class="meta">
      <div><div class="num">42.1</div><div class="lbl">km</div></div>
      <div><div class="num">1:34</div><div class="lbl">moving</div></div>
      <div><div class="num">312</div><div class="lbl">elev m</div></div>
    </div>
  </div>
  <div class="card">
    <div class="head"><div class="avatar" style="background:#3A3A3A">SY</div><div><div class="name">Suyoung L.</div><div class="when">어제 19:02 · 야간 러닝</div></div></div>
    <div class="map">
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="180" fill="#0A0A0A"/>
        <path d="M30,40 C90,60 80,150 160,130 S260,30 290,160" stroke="#FC5200" stroke-width="4" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="meta">
      <div><div class="num">8.2</div><div class="lbl">km</div></div>
      <div><div class="num">4:42</div><div class="lbl">pace</div></div>
      <div><div class="num">86</div><div class="lbl">elev m</div></div>
    </div>
  </div>
  <div class="card">
    <div class="head"><div class="avatar" style="background:#6D6D78">MK</div><div><div class="name">Minki C.</div><div class="when">2일 전 · 북악스카이웨이</div></div></div>
    <div class="map">
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="180" fill="#0A0A0A"/>
        <path d="M10,160 C70,120 100,40 180,80 S290,140 310,30" stroke="#FC5200" stroke-width="4" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="meta">
      <div><div class="num">28.6</div><div class="lbl">km</div></div>
      <div><div class="num">1:12</div><div class="lbl">moving</div></div>
      <div><div class="num">684</div><div class="lbl">elev m</div></div>
    </div>
  </div>
</div>
```
