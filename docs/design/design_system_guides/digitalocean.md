---
brand: DigitalOcean
brand_ko: 디지털오션
slug: digitalocean
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#0080FF"
primary_color_name: "DigitalOcean Blue"
mood:
  - 단순
  - 친절
  - 클라우드

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2012
last_major_revision: 2025
signature_keyword: "물방울 로고 + 청량한 DO 블루 + 일러스트 친화의 개발자 클라우드"

card_tokens: |
  {
    "light": { "bg": "#F4F8FB", "surface": "#FFFFFF", "border": "#D9DBE9", "fg": "#031B4E", "fg_muted": "#6B7280", "accent": "#0080FF" },
    "dark":  { "bg": "#0F1827", "surface": "#1B2538", "border": "#2A3242", "fg": "#FFFFFF", "fg_muted": "#D9DBE9", "accent": "#2D94FF" }
  }

hero_html: |
  <div style="font-family:'Inter','Sailec',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:28px;height:28px;background:var(--card-accent);border-radius:9999px;display:grid;place-items:center;color:#fff;font:900 16px/1 sans-serif;">●</div>
      <strong style="font-size:14px;font-weight:600;">Droplets</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">3 active</span>
    </div>
    <div style="padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:10px 12px;display:flex;align-items:center;gap:10px;font:500 12px/1.3 inherit;">
        <div style="width:28px;height:28px;background:linear-gradient(135deg,#0080FF,#62B3FF);border-radius:6px;display:grid;place-items:center;color:#fff;font:900 11px/1 sans-serif;">U</div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:600;">api-prod-01</div>
          <div style="color:var(--card-fg-muted);font-weight:400;font-size:10px;margin-top:2px;">2 vCPU · 4GB · sfo3 · Ubuntu 24.04</div>
        </div>
        <span style="background:#DDF4E4;color:#0E8E4A;border-radius:9999px;padding:2px 8px;font:700 10px/1.3 inherit;">Active</span>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:10px 12px;display:flex;align-items:center;gap:10px;font:500 12px/1.3 inherit;">
        <div style="width:28px;height:28px;background:linear-gradient(135deg,#62B3FF,#0080FF);border-radius:6px;display:grid;place-items:center;color:#fff;font:900 11px/1 sans-serif;">D</div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:600;">db-prod-02</div>
          <div style="color:var(--card-fg-muted);font-weight:400;font-size:10px;margin-top:2px;">4 vCPU · 8GB · nyc3 · Postgres 16</div>
        </div>
        <span style="background:#DDF4E4;color:#0E8E4A;border-radius:9999px;padding:2px 8px;font:700 10px/1.3 inherit;">Active</span>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <div style="background:var(--card-accent);color:#fff;border-radius:4px;padding:7px 14px;font:600 12px/1 inherit;">+ Create Droplet</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">$24/mo</span>
    </div>
  </div>

sources:
  - https://www.digitalocean.com/
  - https://www.digitalocean.com/community/tutorials
---

### ① 브랜드 DNA
- **브랜드명**: DigitalOcean
- **한 줄 정체성**: 개발자 친화 클라우드 — AWS 대비 단순한 가격·UI로 인디·SMB 시장 1위
- **공식 디자인 철학**: "Simple at the core" — 친절한 일러스트 + 단순한 카드형 UI
- **시그니처 요소 1개**: 물방울(droplet) 원형 로고 + DO Blue(#0080FF, AWS 오렌지·Azure 짙은 블루와 정반대의 청량한 시안 블루) + 일러스트 친화(상어·고래·바다 모티브). 인스턴스를 "Droplet"이라 부르며 카드형 그리드로 한눈에 표시

### ② 톤 & 무드
- **핵심 키워드 3개**: 단순, 친절, 클라우드
- **무드 설명**: 라이트 베이스 + 옅은 블루 그라데이션. 카드 8px Soft, 1px 보더 + 미세 그림자. AWS/Azure보다 한 단계 친근한 톤, 일러스트가 빈 상태에 자주 등장.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (6~10px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - DO Blue */
  --color-primary-50:  #E5F1FF;
  --color-primary-100: #B8DAFF;
  --color-primary-200: #8AC2FF;
  --color-primary-300: #5BA9FF;
  --color-primary-400: #2D94FF;
  --color-primary-500: #0080FF;   /* DO Blue */
  --color-primary-600: #006BD6;
  --color-primary-700: #0055AD;
  --color-primary-800: #003E80;
  --color-primary-900: #002752;

  /* Secondary - Navy (헤더) */
  --color-secondary-500: #031B4E;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F8FB;
  --color-neutral-100:  #ECEFF5;
  --color-neutral-200:  #D9DBE9;
  --color-neutral-300:  #BFC4D4;
  --color-neutral-500:  #8B94A8;
  --color-neutral-700:  #6B7280;
  --color-neutral-800:  #404754;
  --color-neutral-900:  #1F2937;
  --color-neutral-1000: #031B4E;

  /* Semantic */
  --color-success-bg: #DDF4E4;
  --color-success-fg: #0E8E4A;
  --color-warning-bg: #FFF3DA;
  --color-warning-fg: #B07A00;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F1FF;
  --color-info-fg:    #0080FF;

  /* Surface */
  --bg-base:     #F4F8FB;
  --bg-subtle:   #ECEFF5;
  --bg-elevated: #FFFFFF;
  --bg-hero:     linear-gradient(180deg, #E5F1FF 0%, #FFFFFF 100%);
  --bg-overlay:  rgba(3,27,78,0.50);

  /* Text */
  --text-primary:    #031B4E;
  --text-secondary:  #404754;
  --text-tertiary:   #6B7280;
  --text-on-primary: #FFFFFF;
  --text-link:       #0080FF;
  --text-disabled:   #BFC4D4;

  /* Border */
  --border-default: #D9DBE9;
  --border-subtle:  #ECEFF5;
  --border-strong:  #BFC4D4;
  --border-focus:   #0080FF;
}

[data-theme="dark"] {
  --bg-base:     #0F1827;
  --bg-subtle:   #131C2D;
  --bg-elevated: #1B2538;
  --text-primary:    #FFFFFF;
  --text-secondary:  #D9DBE9;
  --border-default:  #2A3242;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / Sailec (브랜드용) / system-ui
  - 코드: **JetBrains Mono** / SF Mono
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 36px / 700 / 1.2 / -0.02em
  - H1: 28px / 700 / 1.25
  - H2: 22px / 600 / 1.3
  - H3: 17px / 600 / 1.35
  - Body Large: 16px / 400 / 1.55
  - Body: 14px / 400 / 1.5
  - Body Small: 13px / 500 / 1.4
  - Code: 13px / 400 / 1.6 mono
  - Caption: 12px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 36px;
  --space-3xl: 56px;
  ```
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;     /* Droplet 카드 */
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(3,27,78,0.06);
--shadow-md: 0 4px 12px rgba(3,27,78,0.08);
--shadow-lg: 0 12px 32px rgba(3,27,78,0.14);
--shadow-blue: 0 8px 24px rgba(0,128,255,0.25);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / 자체 일러스트

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, sans-serif; border-radius: 4px; padding: 9px 18px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-cta-big { background: var(--color-primary-500); color: #fff; padding: 14px 28px; border-radius: 6px; font: 700 16px/1 inherit; box-shadow: var(--shadow-blue); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 9px 12px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(0,128,255,0.20); }
```

**Card (Droplet / Resource)**
```css
.droplet { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; padding: 14px 16px; display: grid; grid-template-columns: 40px 1fr auto auto; gap: 14px; align-items: center; box-shadow: var(--shadow-sm); }
.droplet:hover { border-color: var(--color-primary-200); box-shadow: var(--shadow-md); }
.droplet .icon { width: 40px; height: 40px; background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-300)); border-radius: 8px; display: grid; place-items: center; color: #fff; font: 800 14px/1 inherit; }
.droplet .name { font: 600 15px/1.3 inherit; color: var(--text-primary); }
.droplet .meta { font: 400 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 3px; }
.droplet .ip { font: 500 12px/1.3 'JetBrains Mono', monospace; color: var(--text-secondary); }
.tutorial-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; padding: 18px; box-shadow: var(--shadow-sm); }
```

**Badge / Tag**
```css
.badge-active   { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 9999px; padding: 3px 10px; font: 700 11px/1.3 inherit; }
.badge-off      { background: var(--bg-subtle); color: var(--text-tertiary); border-radius: 9999px; padding: 3px 10px; font: 700 11px/1.3 inherit; }
.tag-region     { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 9999px; padding: 2px 10px; font: 600 11px/1.3 inherit; }
.tag-price      { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); border-radius: 4px; padding: 2px 8px; font: 700 12px/1.3 inherit; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--secondary-500, #031B4E); color: #fff; width: 240px; padding: 14px 0; }
.sidebar .section { padding: 14px 18px 4px; font: 700 11px/1.4 inherit; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
.sidebar .item:hover { background: rgba(255,255,255,0.07); color: #fff; }
.sidebar .item.active { background: rgba(0,128,255,0.20); color: #fff; border-left: 3px solid var(--color-primary-500); padding-left: 15px; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 380ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
```

### ⑪ Anti-patterns
1. 짙은 네이비 단색 사용 금지 — DO Blue(#0080FF)의 청량함이 시그니처 (헤더만 네이비)
2. 카드 모서리 0px(Sharp) 금지 — 8px Soft 유지
3. 인스턴스를 "VM"이라 부르기 금지 — "Droplet" 용어가 정체성
4. 일러스트 제거하고 텍스트만으로 빈 상태 표현 금지 — 친근한 일러스트(상어/바다)가 톤
5. AWS식 빽빽한 표 강제 금지 — Card-row 그리드 + 큰 액션 버튼 패턴

### ⑫ 시그니처 적용 예시 (DigitalOcean Droplets 대시보드)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #031B4E; background: #F4F8FB; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: #031B4E; color: #fff; padding: 14px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 18px 18px; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .sidebar .brand .logo { width: 30px; height: 30px; background: #0080FF; border-radius: 9999px; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; color: #fff; }
  .sidebar .section { padding: 14px 18px 4px; font: 700 11px/1.4 inherit; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.06em; }
  .sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
  .sidebar .item:hover { background: rgba(255,255,255,0.07); color: #fff; }
  .sidebar .item.active { background: rgba(0,128,255,0.22); color: #fff; border-left: 3px solid #0080FF; padding-left: 15px; font-weight: 700; }
  main { padding: 28px 32px; display: grid; gap: 20px; }
  .hero { background: linear-gradient(180deg, #E5F1FF, #fff 80%); border-radius: 12px; padding: 22px 26px; display: flex; align-items: center; gap: 18px; }
  .hero h1 { margin: 0; font: 700 22px/1.2 inherit; }
  .hero p { margin: 4px 0 0; color: #6B7280; font: 500 14px/1.5 inherit; }
  .hero .illust { font-size: 56px; line-height: 1; }
  .hero .right { margin-left: auto; }
  .btn-primary { background: #0080FF; color: #fff; border: 0; border-radius: 6px; padding: 12px 22px; font: 700 14px/1 inherit; cursor: pointer; box-shadow: 0 6px 18px rgba(0,128,255,0.30); }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h2 { margin: 0; font: 700 18px/1.2 inherit; }
  .head .count { font: 500 12px/1 inherit; color: #6B7280; }
  .head .right { margin-left: auto; display: flex; gap: 8px; }
  .btn-secondary { background: #fff; color: #031B4E; border: 1px solid #BFC4D4; border-radius: 4px; padding: 8px 14px; font: 600 13px/1 inherit; cursor: pointer; }
  .droplets { display: grid; gap: 10px; }
  .droplet { background: #fff; border: 1px solid #D9DBE9; border-radius: 8px; padding: 14px 16px; display: grid; grid-template-columns: 40px 1fr 100px 110px 90px 28px; gap: 16px; align-items: center; box-shadow: 0 1px 2px rgba(3,27,78,0.05); }
  .droplet:hover { border-color: #8AC2FF; box-shadow: 0 4px 14px rgba(3,27,78,0.08); }
  .droplet .icon { width: 40px; height: 40px; background: linear-gradient(135deg, #0080FF, #62B3FF); border-radius: 8px; display: grid; place-items: center; color: #fff; font: 800 14px/1 inherit; }
  .droplet .name { font: 700 14px/1.3 inherit; }
  .droplet .meta { font: 400 12px/1.4 inherit; color: #6B7280; margin-top: 2px; }
  .droplet .ip   { font: 500 12px/1 'JetBrains Mono', monospace; color: #404754; }
  .badge-active { background: #DDF4E4; color: #0E8E4A; border-radius: 9999px; padding: 3px 12px; font: 700 11px/1.3 inherit; text-align: center; }
  .region { background: #E5F1FF; color: #0055AD; border-radius: 9999px; padding: 3px 10px; font: 700 11px/1.3 inherit; text-align: center; }
  .more { color: #6B7280; font-size: 18px; text-align: right; cursor: pointer; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">●</div><div class="name">DigitalOcean</div></div>
    <div class="section">Manage</div>
    <div class="item active">💧 Droplets</div>
    <div class="item">📦 Apps Platform</div>
    <div class="item">🗄 Databases</div>
    <div class="item">💾 Spaces (S3)</div>
    <div class="item">🌐 Networking</div>
    <div class="section">Resources</div>
    <div class="item">🧠 GPU Droplets</div>
    <div class="item">⚓ Kubernetes</div>
    <div class="item">📚 Tutorials</div>
    <div class="item" style="margin-top:auto;">⚙ Settings</div>
  </aside>
  <main>
    <section class="hero">
      <div class="illust">🐳</div>
      <div>
        <h1>안녕하세요, Mia! 새 Droplet을 만들까요?</h1>
        <p>1‑click 앱(Node·WordPress·Postgres) + 8개 지역 + $4부터 시작.</p>
      </div>
      <div class="right"><button class="btn-primary">+ Create Droplet</button></div>
    </section>
    <div class="head">
      <h2>Droplets</h2>
      <span class="count">3 active · 1 archived</span>
      <div class="right">
        <button class="btn-secondary">⟳ Refresh</button>
        <button class="btn-secondary">📥 Take backup</button>
      </div>
    </div>
    <section class="droplets">
      <div class="droplet">
        <div class="icon">U</div>
        <div><div class="name">api-prod-01</div><div class="meta">2 vCPU · 4GB · Ubuntu 24.04 · IPv6</div></div>
        <span class="region">sfo3</span>
        <span class="ip">143.198.x.x</span>
        <span class="badge-active">Active</span>
        <span class="more">⋯</span>
      </div>
      <div class="droplet">
        <div class="icon">D</div>
        <div><div class="name">db-prod-02</div><div class="meta">4 vCPU · 8GB · Postgres 16 Managed</div></div>
        <span class="region">nyc3</span>
        <span class="ip">167.99.x.x</span>
        <span class="badge-active">Active</span>
        <span class="more">⋯</span>
      </div>
      <div class="droplet">
        <div class="icon">W</div>
        <div><div class="name">worker-01</div><div class="meta">2 vCPU · 2GB · Docker on Ubuntu</div></div>
        <span class="region">ams3</span>
        <span class="ip">209.97.x.x</span>
        <span class="badge-active">Active</span>
        <span class="more">⋯</span>
      </div>
    </section>
  </main>
</div>
```
