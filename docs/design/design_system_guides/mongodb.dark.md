---
brand: MongoDB
brand_ko: 몽고DB
slug: mongodb
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra
  - design-system

color_tone: cool
primary_color_hex: "#00ED64"
primary_color_name: "MongoDB Spring Green"
mood:
  - 신선함
  - 데이터 우선
  - 신뢰

font_category: sans-serif
font_primary: Euclid Circular
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2009
last_major_revision: 2024
signature_keyword: "Spring Green과 잎(leaf) 모티프의 NoSQL 데이터베이스 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F9FBFA", "border": "#E8EDEB", "fg": "#001E2B", "fg_muted": "#5C6C75", "accent": "#00ED64" },
    "dark":  { "bg": "#001E2B", "surface": "#003D5A", "border": "#0A4D6E", "fg": "#FFFFFF", "fg_muted": "#A4ABB7", "accent": "#00ED64" }
  }

hero_html: |
  <div style="font-family:'Euclid Circular',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#00111A;color:#fff;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);clip-path:polygon(50% 0,75% 50%,50% 100%,25% 50%);"></span>
      <strong style="font-size:13px;">MongoDB Atlas</strong>
      <span style="margin-left:auto;font-size:11px;color:#A4ABB7;">acme-cluster</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="background:var(--card-accent);color:#001E2B;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;">● Active</span>
        <strong style="font-size:14px;">M30 Cluster</strong>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:10px;">
          <div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;">Operations</div>
          <div style="font-size:18px;font-weight:700;color:var(--card-fg);">2.4M</div>
          <div style="font-size:10px;color:#00ED64;font-weight:600;">▲ 12% · 24h</div>
        </div>
        <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:10px;">
          <div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;">Storage</div>
          <div style="font-size:18px;font-weight:700;color:var(--card-fg);">428 MB</div>
          <div style="font-size:10px;color:var(--card-fg-muted);">of 5 GB</div>
        </div>
      </div>
      <div style="background:#00111A;color:#fff;border-radius:6px;padding:10px 12px;font-family:ui-monospace,'JetBrains Mono',monospace;font-size:10px;line-height:1.5;">
        <span style="color:#A4ABB7;">// query</span><br/>
        db.users.<span style="color:#00ED64;">find</span>({ active: <span style="color:#FFC15B;">true</span> })
      </div>
      <button style="background:var(--card-accent);color:#001E2B;border:0;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:700;font-family:inherit;align-self:flex-start;">Connect →</button>
    </div>
  </div>

sources:
  - https://www.mongodb.com/
  - https://www.mongodb.com/design
  - https://www.mongodb.com/brand-resources
---

### ① 브랜드 DNA
- **브랜드명**: MongoDB
- **한 줄 정체성**: 문서 기반 NoSQL의 표준이 된, 개발자 친화 데이터베이스 플랫폼
- **공식 디자인 철학**: "MongoDB Mongo Design — building for developers, optimized for data"
- **시그니처 요소 1개**: Spring Green(#00ED64) + 잎(leaf) 모티프 로고 + 짙은 Forest Green/Navy 헤더

### ② 톤 & 무드
- **핵심 키워드 3개**: 신선함, 데이터 우선, 신뢰
- **무드 설명**: 흰 캔버스에 짙은 navy 헤더와 Spring Green 액션. 잎 모티프가 자연스러운 데이터 흐름을 상징.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 데이터 클러스터/메트릭
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - MongoDB Spring Green (다크 베이스용 명도 반전 램프) */
  --color-primary-50:  #001A12;
  --color-primary-100: #00261C;
  --color-primary-200: #003D2C;
  --color-primary-300: #00553F;
  --color-primary-400: #00684A;     /* Forest Green */
  --color-primary-500: #00C95A;     /* action 기본 (다크 대비 보정) */
  --color-primary-600: #00ED64;     /* Spring Green */
  --color-primary-700: #71F6A6;
  --color-primary-800: #C0F1D8;
  --color-primary-900: #E3FCEF;

  /* Spring Green (시그니처 액센트) */
  --mongo-spring-green: #00ED64;

  /* Secondary - MongoDB Slate (다크에서는 밝은 슬레이트) */
  --color-secondary-500: #A4ABB7;

  /* Neutral (다크 반전 램프) */
  --color-neutral-0:    #00111A;
  --color-neutral-50:   #001E2B;
  --color-neutral-100:  #002C40;
  --color-neutral-200:  #0A4D6E;
  --color-neutral-300:  #1E5E80;
  --color-neutral-500:  #6B8C9C;
  --color-neutral-700:  #A4ABB7;
  --color-neutral-800:  #C9D2CD;
  --color-neutral-900:  #E8EDEB;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #052E20;
  --color-success-fg: #3CDC8F;
  --color-warning-bg: #3A2A05;
  --color-warning-fg: #F5B544;
  --color-error-bg:   #3A1316;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #06243F;
  --color-info-fg:    #5BA9FF;

  /* Surface */
  --bg-base:     #001E2B;
  --bg-subtle:   #00141D;
  --bg-elevated: #003D5A;
  --bg-overlay:  rgba(0,9,15,0.62);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #C2C9CF;
  --text-tertiary:   #A4ABB7;
  --text-on-primary: #001E2B;
  --text-on-spring:  #001E2B;       /* Spring Green 위에는 navy */
  --text-disabled:   #5C6C75;

  /* Border */
  --border-default: #0A4D6E;
  --border-subtle:  #002C40;
  --border-strong:  #1E5E80;
  --border-focus:   #00ED64;
}

[data-theme="light"] {
  /* Primary - MongoDB Spring Green */
  --color-primary-50:  #E3FCEF;
  --color-primary-100: #C0F1D8;
  --color-primary-200: #71F6A6;
  --color-primary-300: #00ED64;     /* Spring Green */
  --color-primary-400: #00C95A;
  --color-primary-500: #00684A;     /* Forest Green (action 기본) */
  --color-primary-600: #00553F;
  --color-primary-700: #003D2C;
  --color-primary-800: #00261C;
  --color-primary-900: #001A12;

  /* Spring Green (시그니처 액센트) */
  --mongo-spring-green: #00ED64;

  /* Secondary - MongoDB Slate */
  --color-secondary-500: #001E2B;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9FBFA;
  --color-neutral-100:  #F1F4F2;
  --color-neutral-200:  #E8EDEB;
  --color-neutral-300:  #C9D2CD;
  --color-neutral-500:  #889397;
  --color-neutral-700:  #5C6C75;
  --color-neutral-800:  #3D4F58;
  --color-neutral-900:  #001E2B;
  --color-neutral-1000: #000F19;

  /* Semantic */
  --color-success-bg: #E3FCEF;
  --color-success-fg: #00684A;
  --color-warning-bg: #FFEEC1;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DB3030;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #016BF8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F9FBFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,30,43,0.50);

  /* Text */
  --text-primary:    #001E2B;
  --text-secondary:  #5C6C75;
  --text-tertiary:   #889397;
  --text-on-primary: #FFFFFF;
  --text-on-spring:  #001E2B;       /* Spring Green 위에는 navy */
  --text-disabled:   #C9D2CD;

  /* Border */
  --border-default: #E8EDEB;
  --border-subtle:  #F1F4F2;
  --border-strong:  #C9D2CD;
  --border-focus:   #00ED64;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Euclid Circular A (MongoDB 라이선스) / 폴백 -apple-system, Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono"
- **위계**:
  - Display: 56px / 600 / 1.05 / -0.02em
  - H1: 36px / 600 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 500 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

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
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.58);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.66);
```

### ⑧ Iconography
- **스타일**: Outline (MongoDB 자체 — leafygreen-ui)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: @leafygreen-ui/icon (MIT) / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 13px/1 'Euclid Circular', Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid transparent;
  transition: background 100ms ease;
}
.btn-primary { background: var(--mongo-spring-green); color: var(--text-on-spring); border-color: var(--mongo-spring-green); }
.btn-primary:hover { background: #00C95A; border-color: #00C95A; }
.btn-primary:active { background: #00B354; }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); border-color: var(--color-neutral-100); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border-color: var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); border-color: transparent; }
.btn-danger { background: var(--color-error-fg); color: #fff; border-color: var(--color-error-fg); }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  font-size: 14px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(0,237,100,0.30); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 700; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--mongo-spring-green); color: var(--text-on-spring); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-500); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top nav)**
```css
.topnav { height: 48px; background: var(--color-neutral-900); color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 12px; }
.topnav .logo { display: flex; align-items: center; gap: 6px; font-weight: 700; }
.topnav .leaf { width: 18px; height: 18px; background: var(--mongo-spring-green); clip-path: polygon(50% 0, 75% 50%, 50% 100%, 25% 50%); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. Spring Green을 본문 텍스트에 사용 금지 — 액션/active 신호에만
2. 잎 모티프를 회전/뒤집기 금지 — 항상 정방향 다이아몬드
3. dark 테마에서 navy(#001E2B) 외 다른 검정색 사용 금지
4. Spring Green 위에 흰 텍스트 배치 금지 — navy(#001E2B) 사용
5. 데이터 그래프에 7가지 이상 색 사용 금지 — gray ramp + 1색 highlight 권장

### ⑫ 시그니처 적용 예시 (Atlas dashboard)

```html
<style>
  body { margin: 0; font-family: 'Euclid Circular', Inter, 'Pretendard', -apple-system, sans-serif; color: #FFFFFF; background: #001E2B; }
  .topnav { height: 48px; background: #00111A; color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 12px; }
  .leaf { width: 22px; height: 22px; background: #00ED64; clip-path: polygon(50% 0, 75% 50%, 50% 100%, 25% 50%); }
  .topnav h1 { margin: 0; font-size: 14px; font-weight: 600; }
  .layout { display: grid; grid-template-columns: 220px 1fr; min-height: calc(100vh - 48px); }
  .sidebar { background: #00141D; border-right: 1px solid #0A4D6E; padding: 16px 12px; }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 6px; font-size: 13px; color: #C2C9CF; cursor: pointer; }
  .sidebar .item:hover { background: #002C40; }
  .sidebar .item.active { background: #052E20; color: #3CDC8F; font-weight: 600; }
  .main { padding: 24px 32px; }
  .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .head h1 { margin: 0; font-size: 24px; font-weight: 600; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 16px; }
  .panel { background: #003D5A; border: 1px solid #0A4D6E; border-radius: 8px; padding: 14px; }
  .panel .label { font-size: 10px; color: #A4ABB7; text-transform: uppercase; letter-spacing: 0.04em; }
  .panel .num { font-size: 26px; font-weight: 600; line-height: 1.1; margin-top: 4px; }
  .panel .delta { font-size: 11px; color: #3CDC8F; margin-top: 4px; font-weight: 600; }
  .code { background: #00111A; color: #fff; border-radius: 8px; padding: 16px 18px; font-family: ui-monospace, monospace; font-size: 13px; line-height: 1.6; }
  .code .c { color: #A4ABB7; }
  .code .f { color: #00ED64; }
  .code .s { color: #FFC15B; }
  .code .v { color: #6CB7FF; }
</style>

<header class="topnav">
  <div class="leaf"></div>
  <h1>MongoDB Atlas</h1>
  <span style="color:#A4ABB7; font-size:13px;">/ acme-cluster</span>
  <span class="tag tag-solid" style="margin-left:auto; background:#00ED64; color:#001E2B; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700;">● Active</span>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="item active">▦ Overview</div>
    <div class="item">📊 Metrics</div>
    <div class="item">🗄 Database</div>
    <div class="item">🔍 Search</div>
    <div class="item">⚡ Triggers</div>
    <div class="item">🔐 Security</div>
    <div class="item">⚙ Settings</div>
  </aside>
  <main class="main">
    <div class="head">
      <h1>Cluster overview</h1>
      <button class="btn btn-primary" style="background:#00ED64; color:#001E2B; border:0; border-radius:6px; padding:8px 14px; font-size:13px; font-weight:700; cursor:pointer;">Connect</button>
    </div>
    <div class="grid">
      <div class="panel"><div class="label">Operations</div><div class="num">2.4M</div><div class="delta">▲ 12% · 24h</div></div>
      <div class="panel"><div class="label">Storage</div><div class="num">428 MB</div><div class="delta" style="color:#A4ABB7;">of 5 GB</div></div>
      <div class="panel"><div class="label">Connections</div><div class="num">128</div><div class="delta">▲ 4 active</div></div>
      <div class="panel"><div class="label">Avg latency</div><div class="num">8 ms</div><div class="delta">▼ 1ms (good)</div></div>
    </div>
    <div class="code">
<span class="c">// example query</span><br/>
db.users.<span class="f">aggregate</span>([<br/>
&nbsp;&nbsp;{ <span class="f">$match</span>: { active: <span class="v">true</span> } },<br/>
&nbsp;&nbsp;{ <span class="f">$group</span>: { _id: <span class="s">"$country"</span>, count: { <span class="f">$sum</span>: <span class="v">1</span> } } }<br/>
])
    </div>
  </main>
</div>
```
