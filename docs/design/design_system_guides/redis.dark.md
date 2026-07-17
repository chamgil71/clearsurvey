---
brand: Redis
brand_ko: 레디스
slug: redis
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra

color_tone: warm
primary_color_hex: "#FF4438"
primary_color_name: "Redis Red"
mood:
  - 빠름
  - 인메모리
  - 큐브

font_category: sans-serif
font_primary: Space Grotesk
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2009
last_major_revision: 2024
signature_keyword: "빨강 큐브 로고 + 인메모리 KV 명령어 + RedisInsight 키 트리"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F6F8FA", "border": "#DDE3E9", "fg": "#091A23", "fg_muted": "#5C707A", "accent": "#FF4438" },
    "dark":  { "bg": "#0B1B26", "surface": "#122735", "border": "#2F4350", "fg": "#FFFFFF", "fg_muted": "#B5C0CB", "accent": "#FF4438" }
  }

hero_html: |
  <div style="font-family:'Space Grotesk','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-bg);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:28px;height:24px;background:var(--card-accent);display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;clip-path:polygon(0 30%,50% 0,100% 30%,100% 70%,50% 100%,0 70%);">⬡</div>
      <strong style="font-size:14px;font-weight:700;">RedisInsight</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">localhost:6379</span>
    </div>
    <div style="padding:10px 12px;display:grid;grid-template-columns:140px 1fr;gap:10px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:6px;display:flex;flex-direction:column;gap:3px;font:500 11px/1.4 inherit;">
        <div style="background:var(--card-bg);padding:4px 8px;border-radius:4px;border:1px solid var(--card-accent);color:var(--card-fg);display:flex;align-items:center;gap:6px;"><span style="color:var(--card-accent);font-weight:800;">k</span>user:1024</div>
        <div style="padding:4px 8px;color:var(--card-fg-muted);display:flex;align-items:center;gap:6px;">⊞ session:abc</div>
        <div style="padding:4px 8px;color:var(--card-fg-muted);display:flex;align-items:center;gap:6px;">⊞ counter:hits</div>
        <div style="padding:4px 8px;color:var(--card-fg-muted);display:flex;align-items:center;gap:6px;">⊞ queue:tasks</div>
      </div>
      <div style="background:#06121A;border-radius:6px;padding:10px 12px;font:400 12px/1.65 'JetBrains Mono','SF Mono',monospace;color:#E1E8EE;overflow:hidden;">
        <div><span style="color:#FF8A7D;">&gt;</span> GET user:1024</div>
        <div style="color:#7CDCC9;">"{\"name\":\"Mia\",\"plan\":\"pro\"}"</div>
        <div><span style="color:#FF8A7D;">&gt;</span> TTL user:1024</div>
        <div style="color:#FFD479;">(integer) 1820</div>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-bg);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <div style="background:var(--card-accent);color:#fff;border-radius:4px;padding:7px 16px;font:700 12px/1 inherit;">+ New Key</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">DB 0 · 14,082 keys · 8.2 MB</span>
    </div>
  </div>

sources:
  - https://redis.io/
  - https://redis.io/about/branding/
---

### ① 브랜드 DNA
- **브랜드명**: Redis
- **한 줄 정체성**: 초고속 인메모리 키-값 데이터 스토어 — 캐시·세션·큐·랭킹의 사실상 표준
- **공식 디자인 철학**: "Real-time data" — 빠름의 시각화: 큐브 로고 + 명령형 CLI 톤
- **시그니처 요소 1개**: 빨강 6각 큐브(데이터 블록을 쌓은 형상) 로고 + Redis Red(#FF4438) + 짙은 네이비 CLI 콘솔(#0B1B26)의 GET/SET 명령어. PostgreSQL 코끼리, MongoDB 잎과 정반대의 명령행 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 빠름, 인메모리, 큐브
- **무드 설명**: 라이트 베이스에 빨강 단일 강조. 데이터를 다루는 CLI 톤이 시그니처 — 짙은 네이비 콘솔 패널 + 모노스페이스. 키 트리는 4~6px Soft.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Redis Red (다크에서도 채도 유지, 본문 대비를 위해 500은 한 톤 밝게) */
  --color-primary-50:  #FFE3E0;
  --color-primary-100: #FFB6AE;
  --color-primary-200: #FF8A7D;
  --color-primary-300: #FF6555;
  --color-primary-400: #FF5345;
  --color-primary-500: #FF5547;   /* Redis Red (다크 표면 위 가독성용 미세 보정) */
  --color-primary-600: #FF4438;   /* 원 브랜드 레드 */
  --color-primary-700: #DB2C20;
  --color-primary-800: #A81E14;
  --color-primary-900: #75130C;

  /* Secondary - Hyper Yellow (브랜드 보조) */
  --color-secondary-500: #DCFF1E;

  /* Neutral - 다크 반전 램프 (0=가장 어두움, 1000=가장 밝음) */
  --color-neutral-0:    #06121A;     /* 가장 깊은 네이비 (CLI bg) */
  --color-neutral-50:   #0B1B26;     /* 페이지 베이스 */
  --color-neutral-100:  #122735;     /* 섹션/서브틀 */
  --color-neutral-200:  #1A3243;     /* 카드 표면 */
  --color-neutral-300:  #2F4350;     /* 보더 */
  --color-neutral-500:  #5C707A;     /* 보조 보더/뮤트 */
  --color-neutral-700:  #8898A4;     /* 3차 텍스트 */
  --color-neutral-800:  #B5C0CB;     /* 2차 텍스트 */
  --color-neutral-900:  #DDE3E9;     /* 본문 텍스트 */
  --color-neutral-1000: #F4F7FA;     /* 최고 명도 텍스트 */

  /* Semantic - 다크 표면 위 가독성 (어두운 bg + 밝은 fg) */
  --color-success-bg: #0E2E22;
  --color-success-fg: #3FD99C;
  --color-warning-bg: #33270B;
  --color-warning-fg: #F4C04A;
  --color-error-bg:   #3A1410;
  --color-error-fg:   #FF8175;
  --color-info-bg:    #0C2740;
  --color-info-fg:    #5BB1FF;

  /* Code (CLI dark) */
  --cli-prompt:  #FF8A7D;
  --cli-str:     #7CDCC9;
  --cli-num:     #FFD479;
  --cli-key:     #B7E0FF;
  --cli-cmt:     #6B7E8A;

  /* Surface */
  --bg-base:     #0B1B26;
  --bg-subtle:   #122735;
  --bg-elevated: #1A3243;
  --bg-cli:      #06121A;
  --bg-overlay:  rgba(3,9,13,0.66);

  /* Text */
  --text-primary:    #F4F7FA;
  --text-secondary:  #DDE3E9;
  --text-tertiary:   #B5C0CB;
  --text-on-primary: #FFFFFF;
  --text-link:       #FF8A7D;
  --text-disabled:   #5C707A;

  /* Border */
  --border-default: #2F4350;
  --border-subtle:  #1A3243;
  --border-strong:  #45596A;
  --border-focus:   #FF5547;
}

[data-theme="light"] {
  /* Primary - Redis Red */
  --color-primary-50:  #FFE3E0;
  --color-primary-100: #FFB6AE;
  --color-primary-200: #FF8A7D;
  --color-primary-300: #FF6555;
  --color-primary-400: #FF5345;
  --color-primary-500: #FF4438;   /* Redis Red */
  --color-primary-600: #DB2C20;
  --color-primary-700: #A81E14;
  --color-primary-800: #75130C;
  --color-primary-900: #460804;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F6F8FA;
  --color-neutral-100:  #ECF0F3;
  --color-neutral-200:  #DDE3E9;
  --color-neutral-300:  #B5C0CB;
  --color-neutral-500:  #8898A4;
  --color-neutral-700:  #5C707A;
  --color-neutral-800:  #2F4350;
  --color-neutral-900:  #091A23;
  --color-neutral-1000: #0B1B26;     /* CLI bg */

  /* Semantic */
  --color-success-bg: #E1F4EA;
  --color-success-fg: #0FA567;
  --color-warning-bg: #FFF3DA;
  --color-warning-fg: #A67000;
  --color-error-bg:   #FFE0DC;
  --color-error-fg:   #DB2C20;
  --color-info-bg:    #E0EEFD;
  --color-info-fg:    #0072CE;

  /* Code (CLI dark) */
  --cli-cmt:     #5C707A;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F6F8FA;
  --bg-elevated: #FFFFFF;
  --bg-cli:      #0B1B26;
  --bg-overlay:  rgba(9,26,35,0.50);

  /* Text */
  --text-primary:    #091A23;
  --text-secondary:  #2F4350;
  --text-tertiary:   #5C707A;
  --text-on-primary: #FFFFFF;
  --text-link:       #DB2C20;
  --text-disabled:   #B5C0CB;

  /* Border */
  --border-default: #DDE3E9;
  --border-subtle:  #ECF0F3;
  --border-strong:  #B5C0CB;
  --border-focus:   #FF4438;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Space Grotesk** (브랜드) / Inter / Helvetica
  - 코드/CLI: **Space Mono** / JetBrains Mono / SF Mono
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 36px / 700 / 1.15
  - H1: 28px / 700 / 1.2
  - H2: 22px / 600 / 1.3
  - H3: 17px / 600 / 1.35
  - Body Large: 16px / 400 / 1.55
  - Body: 14px / 400 / 1.5
  - Body Small: 12px / 500 / 1.4
  - Code: 13px / 400 / 1.65 mono
  - Caption: 11px / 600 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.60);
--shadow-red: 0 6px 18px rgba(255,68,56,0.40);
```

### ⑧ Iconography
- **스타일**: Outline (2px)
- **Stroke 굵기**: 2px
- **모서리 처리**: Sharp / Soft
- **추천 라이브러리**: Phosphor / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'Space Grotesk', Inter, sans-serif; border-radius: 4px; padding: 9px 18px; border: 0; cursor: pointer; letter-spacing: -0.005em; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-cta { background: var(--color-primary-500); color: #fff; padding: 14px 28px; border-radius: 6px; font: 700 16px/1 inherit; box-shadow: var(--shadow-red); }
.btn-cli { background: var(--color-neutral-1000); color: var(--cli-str); padding: 7px 14px; font: 600 12px/1 'Space Mono', monospace; }
```

**Input / CLI**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 8px 12px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(255,68,56,0.30); }
.cli { background: var(--bg-cli); color: #E1E8EE; padding: 14px 16px; border-radius: 6px; font: 400 13px/1.7 'Space Mono', monospace; }
.cli .prompt { color: var(--cli-prompt); }
.cli .str { color: var(--cli-str); }
.cli .num { color: var(--cli-num); }
.cli .cmt { color: var(--cli-cmt); font-style: italic; }
.cli .out { color: #E1E8EE; }
.cli input { all: unset; flex: 1; color: #E1E8EE; }
```

**Card (Key item)**
```css
.key-list { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 6px; padding: 6px; }
.key-item { display: flex; align-items: center; gap: 8px; padding: 5px 10px; border-radius: 4px; font: 500 12px/1.4 inherit; color: var(--text-primary); cursor: pointer; }
.key-item:hover { background: var(--bg-elevated); }
.key-item.active { background: var(--bg-elevated); border: 1px solid var(--color-primary-500); color: var(--text-primary); }
.key-item .type { color: var(--color-primary-500); font-weight: 800; font-family: 'Space Mono', monospace; }
.key-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 14px 16px; }
.key-card .meta { display: flex; gap: 14px; font: 500 12px/1 inherit; color: var(--text-tertiary); margin-top: 6px; }
```

**Badge / Tag**
```css
.badge-type-string  { background: rgba(255,68,56,0.20); color: var(--color-primary-200); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 'Space Mono', monospace; }
.badge-type-hash    { background: rgba(91,177,255,0.18); color: var(--color-info-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 'Space Mono', monospace; }
.badge-type-list    { background: rgba(63,217,156,0.18); color: var(--color-success-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 'Space Mono', monospace; }
.badge-type-zset    { background: rgba(244,192,74,0.18); color: var(--color-warning-fg); border-radius: 3px; padding: 2px 7px; font: 700 11px/1.3 'Space Mono', monospace; }
.tag-ttl { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); border-radius: 9999px; padding: 2px 8px; font: 700 11px/1.3 'Space Mono', monospace; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--bg-base); border-right: 1px solid var(--border-default); width: 220px; padding: 12px 0; }
.sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 16px 14px; }
.sidebar .brand .logo { width: 30px; height: 26px; background: var(--color-primary-500); clip-path: polygon(0 30%, 50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%); display: grid; place-items: center; color: #fff; font: 900 14px/1 inherit; }
.sidebar .item { display: flex; align-items: center; gap: 10px; padding: 8px 18px; font: 500 14px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); color: var(--text-primary); }
.sidebar .item.active { background: rgba(255,68,56,0.18); color: var(--color-primary-200); border-left: 3px solid var(--color-primary-500); padding-left: 15px; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 160ms;
--duration-slow: 260ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### ⑪ Anti-patterns
1. 회사 컬러를 #C00 등 어두운 적색으로 표현 금지 — Redis Red(#FF4438) 채도 유지
2. CLI 패널 없이 폼 위주 UI 금지 — 짙은 네이비 콘솔 패널이 정체성
3. 키 타입(String/Hash/List/ZSet) 색 칩 없이 모두 회색 표기 금지
4. 큐브 외 둥근 마스코트 사용 금지 — 6각 큐브 로고가 정체성
5. 본문에 Space Mono 사용 금지 — 본문은 Space Grotesk, 코드/키 이름만 Space Mono

### ⑫ 시그니처 적용 예시 (RedisInsight UI)

```html
<style>
  body { margin: 0; font-family: 'Space Grotesk', Inter, Pretendard, -apple-system, sans-serif; color: #F4F7FA; background: #0B1B26; letter-spacing: -0.005em; }
  .app { display: grid; grid-template-columns: 220px 1fr; min-height: 100vh; }
  .sidebar { background: #091A23; border-right: 1px solid #2F4350; padding: 14px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 18px 16px; }
  .sidebar .brand .logo { width: 32px; height: 28px; background: #FF4438; clip-path: polygon(0 30%, 50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%); display: grid; place-items: center; color: #fff; font: 900 14px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; }
  .sidebar .section { padding: 12px 18px 4px; font: 700 11px/1.4 inherit; color: #8898A4; text-transform: uppercase; letter-spacing: 0.06em; }
  .sidebar .item { display: flex; align-items: center; gap: 10px; padding: 9px 18px; font: 500 13px/1 inherit; color: #B5C0CB; cursor: pointer; }
  .sidebar .item:hover { background: #122735; }
  .sidebar .item.active { background: rgba(255,68,56,0.18); color: #FF8A7D; border-left: 3px solid #FF4438; padding-left: 15px; font-weight: 700; }
  main { padding: 22px 26px; display: grid; gap: 14px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 22px/1.2 inherit; }
  .head .conn { background: #122735; border: 1px solid #2F4350; border-radius: 4px; padding: 5px 10px; font: 600 12px/1.3 'Space Mono', monospace; display: inline-flex; align-items: center; gap: 8px; color: #DDE3E9; }
  .head .conn .dot { width: 8px; height: 8px; background: #3FD99C; border-radius: 9999px; }
  .head .right { margin-left: auto; display: flex; gap: 8px; }
  .btn-primary { background: #FF4438; color: #fff; border: 0; padding: 9px 18px; border-radius: 4px; font: 700 13px/1 inherit; cursor: pointer; }
  .btn-secondary { background: #122735; color: #F4F7FA; border: 1px solid #45596A; border-radius: 4px; padding: 8px 14px; font: 700 13px/1 inherit; cursor: pointer; }
  .panel { display: grid; grid-template-columns: 280px 1fr; gap: 14px; }
  .keytree { background: #122735; border: 1px solid #2F4350; border-radius: 6px; padding: 8px; }
  .keytree .search { background: #0B1B26; border: 1px solid #2F4350; border-radius: 4px; padding: 6px 10px; font: 500 12px/1.3 'Space Mono', monospace; color: #B5C0CB; margin-bottom: 6px; }
  .key-item { display: grid; grid-template-columns: 32px 1fr auto; gap: 6px; align-items: center; padding: 6px 8px; border-radius: 4px; font: 500 12px/1.4 'Space Mono', monospace; color: #F4F7FA; cursor: pointer; }
  .key-item:hover { background: #1A3243; }
  .key-item.active { background: rgba(255,68,56,0.14); border: 1px solid #A81E14; }
  .key-item .ttl { color: #8898A4; font-weight: 600; font-size: 10px; }
  .editor { background: #122735; border: 1px solid #2F4350; border-radius: 6px; padding: 14px 16px; }
  .editor .head-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
  .editor .key-name { font: 700 16px/1 'Space Mono', monospace; }
  .meta { display: flex; gap: 12px; font: 500 12px/1.3 inherit; color: #B5C0CB; }
  .meta .pill { background: #0B1B26; border: 1px solid #2F4350; border-radius: 9999px; padding: 2px 8px; font: 700 11px/1.3 'Space Mono', monospace; color: #F4F7FA; }
  .value { background: #06121A; color: #E1E8EE; padding: 12px 14px; border-radius: 6px; font: 400 13px/1.7 'Space Mono', SFMono-Regular, monospace; margin-top: 12px; }
  .value .str { color: #7CDCC9; }
  .value .num { color: #FFD479; }
  .value .key { color: #B7E0FF; }
  .cli-bar { background: #06121A; color: #E1E8EE; border-radius: 6px; padding: 10px 14px; font: 400 13px/1.6 'Space Mono', monospace; display: flex; align-items: center; gap: 8px; }
  .cli-bar .p { color: #FF8A7D; font-weight: 700; }
  .cli-bar input { all: unset; flex: 1; color: #E1E8EE; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">⬡</div><div class="name">Redis</div></div>
    <div class="section">Browse</div>
    <div class="item active">🔑 Keys</div>
    <div class="item">📈 Streams</div>
    <div class="item">🔍 Search &amp; Query</div>
    <div class="item">🧠 Vector</div>
    <div class="section">Tools</div>
    <div class="item">▶ CLI</div>
    <div class="item">📊 Analysis</div>
    <div class="item">⚙ Cluster</div>
  </aside>
  <main>
    <div class="head">
      <h1>RedisInsight</h1>
      <span class="conn"><span class="dot"></span>localhost:6379 · DB 0</span>
      <div class="right">
        <button class="btn-secondary">⤓ Export</button>
        <button class="btn-primary">+ New key</button>
      </div>
    </div>
    <section class="panel">
      <aside class="keytree">
        <div class="search">🔍 user:*</div>
        <div class="key-item active"><span style="color:#FF5547;font-weight:800;">k</span>user:1024<span class="ttl">TTL 30m</span></div>
        <div class="key-item"><span style="color:#5BB1FF;font-weight:800;">h</span>user:1024:profile<span class="ttl">∞</span></div>
        <div class="key-item"><span style="color:#3FD99C;font-weight:800;">l</span>user:1024:events<span class="ttl">∞</span></div>
        <div class="key-item"><span style="color:#F4C04A;font-weight:800;">z</span>leaderboard:daily<span class="ttl">23h</span></div>
        <div class="key-item"><span style="color:#FF5547;font-weight:800;">k</span>session:abc<span class="ttl">15m</span></div>
        <div class="key-item"><span style="color:#3FD99C;font-weight:800;">l</span>queue:tasks<span class="ttl">∞</span></div>
      </aside>
      <section class="editor">
        <div class="head-bar">
          <span class="key-name">user:1024</span>
          <span class="badge-type-string" style="background:rgba(255,68,56,0.20);color:#FF8A7D;border-radius:3px;padding:2px 7px;font:700 11px/1.3 'Space Mono',monospace;">STRING</span>
          <div class="meta" style="margin-left:auto;">
            <span class="pill">TTL 1820s</span>
            <span class="pill">82 B</span>
            <span class="pill">db 0</span>
          </div>
        </div>
        <div class="value">
<span style="color:#6B7E8A;">// GET user:1024</span>
<span class="str">"{\"name\":<span class="str">"Mia"</span>,\"plan\":<span class="str">"pro"</span>,\"age\":<span class="num">27</span>}"</span>
        </div>
        <div class="cli-bar" style="margin-top:12px;">
          <span class="p">127.0.0.1:6379&gt;</span>
          <input value="EXPIRE user:1024 3600" />
        </div>
      </section>
    </section>
  </main>
</div>
```
