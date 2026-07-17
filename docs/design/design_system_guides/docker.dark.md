---
brand: Docker
brand_ko: 도커
slug: docker
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#2496ED"
primary_color_name: "Docker Blue"
mood:
  - 컨테이너
  - 단정
  - 신뢰

font_category: sans-serif
font_primary: Roboto
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2013
last_major_revision: 2025
signature_keyword: "고래 등 위 컨테이너 블록 + 도커 블루 + 컨테이너 그리드의 IaC 패키저"

card_tokens: |
  {
    "light": { "bg": "#F7FBFE", "surface": "#FFFFFF", "border": "#E2EAF1", "fg": "#0A0B0D", "fg_muted": "#677488", "accent": "#2496ED" },
    "dark":  { "bg": "#0F141C", "surface": "#1B2230", "border": "#2A3242", "fg": "#FFFFFF", "fg_muted": "#98A4B3", "accent": "#4DAFFA" }
  }

hero_html: |
  <div style="font-family:'Roboto','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:28px;height:24px;background:var(--card-accent);border-radius:4px;display:grid;place-items:center;color:#0A1018;font:900 12px/1 sans-serif;">🐳</div>
      <strong style="font-size:14px;font-weight:500;">Containers</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">3 running</span>
    </div>
    <div style="padding:10px 12px;display:flex;flex-direction:column;gap:6px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:8px 12px;display:flex;align-items:center;gap:10px;font:500 12px/1.3 inherit;">
        <span style="width:8px;height:8px;background:#34D399;border-radius:9999px;"></span>
        <span style="flex:1;min-width:0;">postgres-db <span style="color:var(--card-fg-muted);font-weight:400;">· postgres:16</span></span>
        <span style="color:var(--card-fg-muted);font-size:10px;">5432</span>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:8px 12px;display:flex;align-items:center;gap:10px;font:500 12px/1.3 inherit;">
        <span style="width:8px;height:8px;background:#34D399;border-radius:9999px;"></span>
        <span style="flex:1;min-width:0;">redis-cache <span style="color:var(--card-fg-muted);font-weight:400;">· redis:7</span></span>
        <span style="color:var(--card-fg-muted);font-size:10px;">6379</span>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:8px 12px;display:flex;align-items:center;gap:10px;font:500 12px/1.3 inherit;">
        <span style="width:8px;height:8px;background:var(--card-fg-muted);border-radius:9999px;"></span>
        <span style="flex:1;min-width:0;">api-server <span style="color:var(--card-fg-muted);font-weight:400;">· node:20</span></span>
        <span style="color:var(--card-fg-muted);font-size:10px;">3000</span>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:6px;align-items:center;">
      <div style="background:var(--card-accent);color:#0A1018;border-radius:4px;padding:6px 14px;font:600 12px/1 inherit;">+ Run</div>
      <div style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">CPU 12% · 1.4 GB</div>
    </div>
  </div>

sources:
  - https://www.docker.com/
  - https://docs.docker.com/
---

### ① 브랜드 DNA
- **브랜드명**: Docker
- **한 줄 정체성**: 컨테이너 표준 — 애플리케이션을 격리된 환경에 패키징·배포
- **공식 디자인 철학**: "Build, Share, Run anywhere" — 일관된 환경, 단정한 도구 톤
- **시그니처 요소 1개**: 고래(Moby Dock) 등 위 컨테이너 블록 로고 + Docker Blue(#2496ED, 라이트한 시안 블루) + 라이트 백그라운드(#F7FBFE)의 컨테이너 카드 그리드. AWS의 오렌지·Kubernetes의 짙은 블루와 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 컨테이너, 단정, 신뢰
- **무드 설명**: 라이트 베이스가 기본(Docker Desktop). 색은 액션·상태(running 그린, stopped 회색)에만. 카드 모서리 6px, 1px 보더로 컨테이너를 한 줄씩 정렬.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat — 보더 의존

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Docker Blue (다크 베이스용 명도 반전 램프) */
  --color-primary-50:  #07293E;
  --color-primary-100: #0C4368;
  --color-primary-200: #135E94;
  --color-primary-300: #1A7AC0;
  --color-primary-400: #2496ED;   /* Docker Blue */
  --color-primary-500: #4DAFFA;   /* Docker Blue (다크 대비 보정) */
  --color-primary-600: #6BBCF3;
  --color-primary-700: #95D0F7;
  --color-primary-800: #BFE3FB;
  --color-primary-900: #E5F4FE;

  /* Secondary - Dark Navy (헤더/푸터) */
  --color-secondary-500: #C9D3DE;
  --color-secondary-600: #98A4B3;

  /* Neutral (다크 반전 램프) */
  --color-neutral-0:    #0A0B0D;
  --color-neutral-50:   #0F141C;
  --color-neutral-100:  #161C26;
  --color-neutral-200:  #2A3242;
  --color-neutral-300:  #3A4456;
  --color-neutral-500:  #677488;
  --color-neutral-700:  #98A4B3;
  --color-neutral-800:  #C9D3DE;
  --color-neutral-900:  #E2EAF1;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #0C2A1C;
  --color-success-fg: #34D399;     /* running 그린 */
  --color-warning-bg: #2E2208;
  --color-warning-fg: #E5A93A;
  --color-error-bg:   #341416;
  --color-error-fg:   #F87171;
  --color-info-bg:    #0C2A44;
  --color-info-fg:    #4DAFFA;

  /* Surface */
  --bg-base:     #0F141C;
  --bg-subtle:   #0B0F16;
  --bg-elevated: #1B2230;
  --bg-overlay:  rgba(5,7,11,0.62);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #C9D3DE;
  --text-tertiary:   #98A4B3;
  --text-on-primary: #07182A;
  --text-link:       #4DAFFA;
  --text-disabled:   #677488;

  /* Border */
  --border-default: #2A3242;
  --border-subtle:  #1B2230;
  --border-strong:  #3A4456;
  --border-focus:   #4DAFFA;
}

[data-theme="light"] {
  /* Primary - Docker Blue */
  --color-primary-50:  #E5F4FE;
  --color-primary-100: #BFE3FB;
  --color-primary-200: #95D0F7;
  --color-primary-300: #6BBCF3;
  --color-primary-400: #47AAF0;
  --color-primary-500: #2496ED;   /* Docker Blue */
  --color-primary-600: #1A7AC0;
  --color-primary-700: #135E94;
  --color-primary-800: #0C4368;
  --color-primary-900: #07293E;

  /* Secondary - Dark Navy (헤더/푸터) */
  --color-secondary-500: #0A0B0D;
  --color-secondary-600: #131822;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7FBFE;
  --color-neutral-100:  #EEF4F9;
  --color-neutral-200:  #E2EAF1;
  --color-neutral-300:  #C9D3DE;
  --color-neutral-500:  #98A4B3;
  --color-neutral-700:  #677488;
  --color-neutral-800:  #404754;
  --color-neutral-900:  #1C2027;
  --color-neutral-1000: #0A0B0D;

  /* Semantic */
  --color-success-bg: #E1F4EA;
  --color-success-fg: #0DA15B;     /* running 그린 */
  --color-warning-bg: #FFF3DA;
  --color-warning-fg: #B87B00;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #DC2D2D;
  --color-info-bg:    #E5F4FE;
  --color-info-fg:    #2496ED;

  /* Surface */
  --bg-base:     #F7FBFE;
  --bg-subtle:   #EEF4F9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(10,11,13,0.45);

  /* Text */
  --text-primary:    #0A0B0D;
  --text-secondary:  #404754;
  --text-tertiary:   #677488;
  --text-on-primary: #FFFFFF;
  --text-link:       #2496ED;
  --text-disabled:   #98A4B3;

  /* Border */
  --border-default: #E2EAF1;
  --border-subtle:  #EEF4F9;
  --border-strong:  #C9D3DE;
  --border-focus:   #2496ED;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Roboto** / Inter / -apple-system
  - 코드/CLI: **JetBrains Mono** / SF Mono / Consolas
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 700 / 1.2
  - H1: 24px / 600 / 1.3
  - H2: 20px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 15px / 400 / 1.55
  - Body: 14px / 400 / 1.5
  - Body Small: 12px / 500 / 1.4
  - Code: 13px / 400 / 1.6 mono
  - Caption: 11px / 500 / 1.3

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
- **Container**: max-width 1280px (Desktop), 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 컨테이너 카드 */
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.62);
```

### ⑧ Iconography
- **스타일**: Outline (2px) — 자체 라이브러리 + Phosphor
- **Stroke 굵기**: 2px
- **모서리 처리**: Square
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 Roboto, Inter, sans-serif; border-radius: 4px; padding: 8px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-run { background: var(--color-success-fg); color: #07182A; }
.btn-stop { background: var(--bg-elevated); color: var(--color-error-fg); border: 1px solid var(--color-error-fg); }
```

**Input (CLI / Search)**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 7px 10px; font: 400 13px/1.3 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(77,175,250,0.30); }
.cli { background: var(--color-neutral-0); color: #C9D3DE; border-radius: 4px; padding: 12px 14px; font: 400 13px/1.6 'JetBrains Mono', monospace; }
.cli .prompt { color: var(--color-primary-500); }
.cli .out { color: var(--text-tertiary); }
```

**Card (Container row)**
```css
.container-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 10px 14px; display: grid; grid-template-columns: 14px 1fr auto auto auto; gap: 14px; align-items: center; font: 500 13px/1.3 inherit; }
.container-card .dot { width: 10px; height: 10px; border-radius: 9999px; background: var(--color-neutral-300); }
.container-card.running .dot { background: var(--color-success-fg); }
.container-card .name { color: var(--text-primary); }
.container-card .image { color: var(--text-tertiary); font-weight: 400; }
.container-card .port { color: var(--text-tertiary); font: 500 12px/1 'JetBrains Mono', monospace; }
.image-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 12px 14px; }
.image-card .size { color: var(--text-tertiary); font-size: 11px; }
```

**Badge / Tag**
```css
.badge-status-running  { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 4px; padding: 2px 8px; font: 600 11px/1.3 inherit; }
.badge-status-stopped  { background: var(--bg-subtle); color: var(--text-tertiary); border-radius: 4px; padding: 2px 8px; font: 600 11px/1.3 inherit; }
.tag-image { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 4px; padding: 1px 6px; font: 600 11px/1.4 'JetBrains Mono', monospace; }
.tag-platform { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); border-radius: 4px; padding: 1px 6px; font: 500 11px/1.3 inherit; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 220px; padding: 10px 0; }
.sidebar .item { display: flex; align-items: center; gap: 10px; padding: 8px 18px; font: 500 13px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); color: var(--text-primary); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); border-left: 3px solid var(--color-primary-500); padding-left: 15px; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 진한 네이비 단색 사용 금지 — Docker Blue(#2496ED)는 라이트 시안 톤
2. 컨테이너 카드 모서리 12px 이상 금지 — 6px Soft + 1px 보더
3. 그린·블루 외 상태 색 남용 금지 — running·stopped 두 가지가 시그니처
4. 고래 마스코트 없이 텍스트만으로 브랜드 표현 금지 — Moby Dock이 정체성
5. 컨테이너 행 리스트를 큰 일러스트 그리드로 대체 금지 — 한 줄 row + 좌측 상태 dot 패턴 유지

### ⑫ 시그니처 적용 예시 (Docker Desktop UI)

```html
<style>
  body { margin: 0; font-family: Roboto, Inter, -apple-system, sans-serif; color: #FFFFFF; background: #0F141C; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 220px 1fr; min-height: 100vh; }
  .sidebar { background: #1B2230; border-right: 1px solid #2A3242; padding: 14px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 16px 18px; }
  .sidebar .brand .logo { width: 36px; height: 28px; background: #4DAFFA; border-radius: 6px; display: grid; place-items: center; color: #07182A; font: 900 14px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; color: #FFFFFF; }
  .sidebar .brand .ver  { font: 500 11px/1 inherit; color: #98A4B3; }
  .sidebar .item { display: flex; align-items: center; gap: 10px; padding: 9px 18px; font: 500 13px/1 inherit; color: #C9D3DE; cursor: pointer; }
  .sidebar .item:hover { background: #161C26; }
  .sidebar .item.active { background: #0C2A44; color: #95D0F7; border-left: 3px solid #4DAFFA; padding-left: 15px; font-weight: 700; }
  main { padding: 24px 28px; display: grid; gap: 18px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 22px/1.2 inherit; }
  .head .meta { font: 500 12px/1 inherit; color: #98A4B3; background: #1B2230; border: 1px solid #2A3242; border-radius: 4px; padding: 4px 10px; }
  .head .right { margin-left: auto; display: flex; gap: 8px; }
  .btn { font: 600 13px/1 inherit; border-radius: 4px; padding: 8px 16px; border: 0; cursor: pointer; }
  .btn-primary { background: #4DAFFA; color: #07182A; }
  .btn-secondary { background: #1B2230; color: #FFFFFF; border: 1px solid #3A4456; }
  .filters { display: flex; gap: 8px; }
  .filter { background: #1B2230; border: 1px solid #2A3242; border-radius: 9999px; padding: 5px 12px; font: 500 12px/1 inherit; color: #C9D3DE; cursor: pointer; }
  .filter.active { background: #0C2A44; border-color: #4DAFFA; color: #95D0F7; }
  .table { background: #1B2230; border: 1px solid #2A3242; border-radius: 6px; overflow: hidden; }
  .table .head-row { display: grid; grid-template-columns: 16px 1fr 1fr 100px 90px 90px 28px; gap: 12px; padding: 10px 14px; font: 700 11px/1.3 inherit; color: #98A4B3; text-transform: uppercase; letter-spacing: 0.04em; background: #0F141C; border-bottom: 1px solid #2A3242; }
  .table .row { display: grid; grid-template-columns: 16px 1fr 1fr 100px 90px 90px 28px; gap: 12px; padding: 12px 14px; font: 500 13px/1.3 inherit; color: #FFFFFF; align-items: center; border-bottom: 1px solid #161C26; }
  .table .row:last-child { border-bottom: 0; }
  .table .row:hover { background: #161C26; }
  .dot { width: 10px; height: 10px; border-radius: 9999px; background: #3A4456; }
  .dot.run { background: #34D399; }
  .image { color: #98A4B3; font: 500 12px/1.3 'JetBrains Mono', monospace; }
  .port { color: #98A4B3; font: 500 12px/1 'JetBrains Mono', monospace; }
  .cpu  { color: #C9D3DE; font: 500 12px/1 inherit; }
  .badge-running { background: #0C2A1C; color: #34D399; border-radius: 4px; padding: 2px 8px; font: 700 11px/1.3 inherit; display: inline-block; }
  .badge-stopped { background: #161C26; color: #98A4B3; border-radius: 4px; padding: 2px 8px; font: 700 11px/1.3 inherit; display: inline-block; }
  .footer { display: flex; align-items: center; gap: 18px; color: #98A4B3; font: 500 12px/1.4 inherit; }
  .resource { display: inline-flex; align-items: center; gap: 6px; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand">
      <div class="logo">🐳</div>
      <div><div class="name">Docker</div><div class="ver">Desktop 4.36</div></div>
    </div>
    <div class="item active">📦 Containers</div>
    <div class="item">🖼 Images</div>
    <div class="item">💾 Volumes</div>
    <div class="item">🌐 Builds</div>
    <div class="item">🔌 Dev Environments</div>
    <div class="item">🧪 Extensions</div>
    <div class="item" style="margin-top:auto;">⚙ Settings</div>
  </aside>
  <main>
    <div class="head">
      <h1>Containers</h1>
      <span class="meta">3 running · 2 stopped</span>
      <div class="right">
        <button class="btn btn-secondary">⟳ Refresh</button>
        <button class="btn btn-primary">+ Run new</button>
      </div>
    </div>
    <div class="filters">
      <span class="filter active">All</span>
      <span class="filter">Running</span>
      <span class="filter">Stopped</span>
      <span class="filter">Compose</span>
    </div>
    <section class="table">
      <div class="head-row"><span></span><span>Name</span><span>Image</span><span>Status</span><span>Port</span><span>CPU</span><span></span></div>
      <div class="row"><span class="dot run"></span><span>postgres-db</span><span class="image">postgres:16-alpine</span><span class="badge-running">Running</span><span class="port">5432→5432</span><span class="cpu">3.2%</span><span style="color:#98A4B3;">⋯</span></div>
      <div class="row"><span class="dot run"></span><span>redis-cache</span><span class="image">redis:7.4</span><span class="badge-running">Running</span><span class="port">6379→6379</span><span class="cpu">0.8%</span><span style="color:#98A4B3;">⋯</span></div>
      <div class="row"><span class="dot run"></span><span>api-server</span><span class="image">node:20-slim</span><span class="badge-running">Running</span><span class="port">3000→3000</span><span class="cpu">8.1%</span><span style="color:#98A4B3;">⋯</span></div>
      <div class="row"><span class="dot"></span><span>elastic-search</span><span class="image">elasticsearch:9</span><span class="badge-stopped">Stopped</span><span class="port">—</span><span class="cpu">0.0%</span><span style="color:#98A4B3;">⋯</span></div>
    </section>
    <div class="footer">
      <span class="resource">⏵ CPU 12%</span>
      <span class="resource">🧠 1.4 GB / 8 GB</span>
      <span class="resource">💾 Disk 24 GB</span>
      <span style="margin-left:auto;">v25.0.5 · Engine running</span>
    </div>
  </main>
</div>
```
