---
brand: PagerDuty
brand_ko: 페이저듀티
slug: pagerduty
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - enterprise

color_tone: warm
primary_color_hex: "#06A552"
primary_color_name: "PagerDuty Green"
mood:
  - 인시던트
  - 즉응
  - 절차

font_category: sans-serif
font_primary: National 2
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2009
last_major_revision: 2025
signature_keyword: "그린 PD 모노그램 + 인시던트 타임라인 + 호출 단계의 인시던트 관리 OS"

hero_html: |
  <div style="font-family:'National 2','Inter',-apple-system,sans-serif;background:#F5F7FA;color:#161B22;height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:#fff;display:flex;align-items:center;gap:10px;border-bottom:1px solid #DDE2E8;">
      <div style="width:28px;height:24px;background:#06A552;display:grid;place-items:center;color:#fff;font:900 12px/1 sans-serif;border-radius:4px;">PD</div>
      <strong style="font-size:14px;font-weight:700;">Open incidents</strong>
      <span style="margin-left:auto;font-size:11px;color:#5F6873;">3 unresolved</span>
    </div>
    <div style="padding:10px 12px;display:flex;flex-direction:column;gap:6px;overflow:hidden;">
      <div style="background:#fff;border:1px solid #DDE2E8;border-left:4px solid #DA2D27;border-radius:4px;padding:8px 12px;font:500 12px/1.4 inherit;display:grid;grid-template-columns:1fr auto;gap:6px;">
        <div>
          <div style="font-weight:700;">API 5xx burst — prod-api</div>
          <div style="color:#5F6873;font-size:11px;margin-top:2px;">P1 · 2분 · Mia 응답</div>
        </div>
        <span style="background:#FFE0DC;color:#9F1F1A;border-radius:4px;padding:2px 8px;font:700 10px/1.3 inherit;align-self:flex-start;">CRITICAL</span>
      </div>
      <div style="background:#fff;border:1px solid #DDE2E8;border-left:4px solid #B07A00;border-radius:4px;padding:8px 12px;font:500 12px/1.4 inherit;display:grid;grid-template-columns:1fr auto;gap:6px;">
        <div>
          <div style="font-weight:700;">High p99 — checkout-svc</div>
          <div style="color:#5F6873;font-size:11px;margin-top:2px;">P2 · 8분 · 미할당</div>
        </div>
        <span style="background:#FFF1D4;color:#7F5500;border-radius:4px;padding:2px 8px;font:700 10px/1.3 inherit;align-self:flex-start;">WARNING</span>
      </div>
      <div style="background:#fff;border:1px solid #DDE2E8;border-left:4px solid #06A552;border-radius:4px;padding:8px 12px;font:500 12px/1.4 inherit;display:grid;grid-template-columns:1fr auto;gap:6px;">
        <div>
          <div style="font-weight:700;">Backup job retry — db-prod</div>
          <div style="color:#5F6873;font-size:11px;margin-top:2px;">P4 · 22분 · 자동복구</div>
        </div>
        <span style="background:#E1F4EA;color:#016B36;border-radius:4px;padding:2px 8px;font:700 10px/1.3 inherit;align-self:flex-start;">INFO</span>
      </div>
    </div>
    <div style="padding:8px 12px;background:#fff;border-top:1px solid #DDE2E8;display:flex;gap:8px;align-items:center;">
      <div style="background:#06A552;color:#fff;border-radius:4px;padding:7px 14px;font:700 12px/1 inherit;">+ New incident</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:#5F6873;">Oncall: @mia (next: @leo in 2h)</span>
    </div>
  </div>

sources:
  - https://www.pagerduty.com/
  - https://developer.pagerduty.com/docs/branding/
---

### ① 브랜드 DNA
- **브랜드명**: PagerDuty
- **한 줄 정체성**: 인시던트 관리·온콜 호출 플랫폼 — 알림→트리아지→레졸루션 자동화
- **공식 디자인 철학**: "Resolve faster" — 절차 우선, 인시던트 라이프사이클 가시화
- **시그니처 요소 1개**: 그린 "PD" 모노그램 사각 로고 + PD Green(#06A552) + Priority 별 좌측 컬러 바(P1=빨강·P2=옐로·P3=블루·P4=그린) 인시던트 카드. Datadog 보라·Opsgenie 블루와 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 인시던트, 즉응, 절차
- **무드 설명**: 라이트 베이스 + 카드형 알림 리스트. 색은 인시던트 우선순위에만, 본문 텍스트는 단정한 그레이. 모서리는 4px Soft.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 한 화면에 많은 인시던트 행
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat — 1px 보더 + 좌측 priority bar

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - PD Green */
  --color-primary-50:  #E1F4EA;
  --color-primary-100: #B0E0C5;
  --color-primary-200: #7ECCA0;
  --color-primary-300: #4DB87B;
  --color-primary-400: #25AD66;
  --color-primary-500: #06A552;   /* PD Green */
  --color-primary-600: #058843;
  --color-primary-700: #036A34;
  --color-primary-800: #024C25;
  --color-primary-900: #012E16;

  /* Priority colors (시그니처) */
  --color-prio-p1: #DA2D27;   /* Critical 빨강 */
  --color-prio-p2: #B07A00;   /* Warning 옐로/오렌지 */
  --color-prio-p3: #2D6FBF;   /* Info 블루 */
  --color-prio-p4: #06A552;   /* Low 그린 */
  --color-prio-p5: #5F6873;   /* Trace 회색 */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F7FA;
  --color-neutral-100:  #ECEFF4;
  --color-neutral-200:  #DDE2E8;
  --color-neutral-300:  #B7BFCA;
  --color-neutral-500:  #8590A2;
  --color-neutral-700:  #5F6873;
  --color-neutral-800:  #2D343C;
  --color-neutral-900:  #161B22;
  --color-neutral-1000: #0D1117;

  /* Semantic (alias to priority) */
  --color-success-bg: #E1F4EA;
  --color-success-fg: #016B36;
  --color-warning-bg: #FFF1D4;
  --color-warning-fg: #7F5500;
  --color-error-bg:   #FFE0DC;
  --color-error-fg:   #9F1F1A;
  --color-info-bg:    #E0EBF7;
  --color-info-fg:    #2D6FBF;

  /* Surface */
  --bg-base:     #F5F7FA;
  --bg-subtle:   #ECEFF4;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(22,27,34,0.50);

  /* Text */
  --text-primary:    #161B22;
  --text-secondary:  #2D343C;
  --text-tertiary:   #5F6873;
  --text-on-primary: #FFFFFF;
  --text-link:       #058843;
  --text-disabled:   #B7BFCA;

  /* Border */
  --border-default: #DDE2E8;
  --border-subtle:  #ECEFF4;
  --border-strong:  #B7BFCA;
  --border-focus:   #06A552;
}

[data-theme="dark"] {
  --bg-base:     #0D1117;
  --bg-subtle:   #161B22;
  --bg-elevated: #1A2129;
  --text-primary:    #F5F7FA;
  --text-secondary:  #DDE2E8;
  --border-default:  #2D343C;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **National 2** (브랜드) / Inter / Helvetica Neue
  - 코드: **JetBrains Mono** / SF Mono
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 700 / 1.2
  - H1: 24px / 700 / 1.25
  - H2: 19px / 700 / 1.3
  - H3: 16px / 700 / 1.35
  - Body Large: 15px / 400 / 1.55
  - Body: 13px / 400 / 1.5
  - Body Small: 12px / 500 / 1.4
  - Code: 12px / 400 / 1.55 mono
  - Caption: 11px / 700 / 1.3 (uppercase + tracking)

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
--radius-sm: 2px;
--radius-md: 4px;     /* 카드 시그니처 */
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(22,27,34,0.06);
--shadow-md: 0 4px 12px rgba(22,27,34,0.08);
--shadow-lg: 0 12px 32px rgba(22,27,34,0.14);
```

### ⑧ Iconography
- **스타일**: Outline (2px) — 자체 + Phosphor
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'National 2', Inter, sans-serif; border-radius: 4px; padding: 9px 18px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ack { background: var(--color-warning-fg); color: #fff; }
.btn-resolve { background: var(--color-primary-500); color: #fff; }
.btn-escalate { background: var(--color-prio-p1); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 8px 12px; font: 400 13px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(6,165,82,0.18); }
.search { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 7px 10px; font: 500 13px/1 inherit; color: var(--text-primary); }
```

**Card (Incident)**
```css
.incident { background: var(--bg-elevated); border: 1px solid var(--border-default); border-left: 4px solid var(--color-prio-p3); border-radius: 4px; padding: 10px 14px; display: grid; grid-template-columns: 1fr auto auto; gap: 12px; align-items: center; }
.incident.p1 { border-left-color: var(--color-prio-p1); }
.incident.p2 { border-left-color: var(--color-prio-p2); }
.incident.p3 { border-left-color: var(--color-prio-p3); }
.incident.p4 { border-left-color: var(--color-prio-p4); }
.incident .title { font: 700 14px/1.3 inherit; color: var(--text-primary); }
.incident .meta { font: 500 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 3px; }
.timeline { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; padding: 10px 14px; }
.timeline .row { display: grid; grid-template-columns: 70px 1fr; gap: 12px; padding: 6px 0; font: 500 12px/1.4 inherit; border-bottom: 1px dashed var(--border-default); }
.timeline .row:last-child { border-bottom: 0; }
.timeline .row .t { color: var(--text-tertiary); font: 600 11px/1.4 'JetBrains Mono', monospace; }
```

**Badge / Tag**
```css
.badge-prio-p1 { background: var(--color-error-bg); color: var(--color-error-fg); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.04em; }
.badge-prio-p2 { background: var(--color-warning-bg); color: var(--color-warning-fg); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.04em; }
.badge-prio-p3 { background: var(--color-info-bg); color: var(--color-info-fg); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.04em; }
.badge-prio-p4 { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.04em; }
.badge-status-triggered { background: rgba(218,45,39,0.10); color: var(--color-prio-p1); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.badge-status-ack       { background: rgba(176,122,0,0.10); color: var(--color-prio-p2); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.badge-status-resolved  { background: rgba(6,165,82,0.10); color: var(--color-primary-700); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.tag-service { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); border-radius: 3px; padding: 1px 8px; font: 600 11px/1.3 'JetBrains Mono', monospace; }
```

**Navigation (Top + Side)**
```css
.topbar { background: var(--color-neutral-900); color: #fff; padding: 8px 16px; display: flex; align-items: center; gap: 14px; }
.topbar .logo { width: 28px; height: 24px; background: var(--color-primary-500); border-radius: 4px; display: grid; place-items: center; font: 900 11px/1 inherit; color: #fff; }
.topbar .item { font: 600 13px/1 inherit; color: rgba(255,255,255,0.85); cursor: pointer; }
.topbar .item:hover, .topbar .item.active { color: #fff; border-bottom: 2px solid var(--color-primary-500); padding-bottom: 6px; margin-bottom: -8px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 우선순위(P1~P4) 좌측 컬러 바 제거 금지 — 한눈에 priority 식별이 핵심
2. 그린 외 강조 색 추가 금지 — Priority 색만 보조, 액션은 PD Green
3. 인시던트 카드를 둥근 12px+ 모서리로 표현 금지 — 4px Soft + 좌측 컬러 바 패턴
4. 본문에 명조/세리프 금지 — National 2 산세리프 톤 유지
5. 타임라인 없이 단일 상세 페이지로 표현 금지 — 시간순 활동 로그가 정체성

### ⑫ 시그니처 적용 예시 (PagerDuty Incidents)

```html
<style>
  body { margin: 0; font-family: 'National 2', Inter, Pretendard, -apple-system, sans-serif; color: #161B22; background: #F5F7FA; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-rows: 48px 1fr; min-height: 100vh; }
  .topbar { background: #161B22; color: #fff; padding: 0 16px; display: flex; align-items: center; gap: 18px; }
  .topbar .logo { width: 30px; height: 26px; background: #06A552; border-radius: 4px; display: grid; place-items: center; font: 900 12px/1 inherit; color: #fff; }
  .topbar .name { font: 700 16px/1.2 inherit; }
  .topbar .item { font: 600 13px/1 inherit; color: rgba(255,255,255,0.85); padding: 14px 0; cursor: pointer; border-bottom: 2px solid transparent; }
  .topbar .item.active { color: #fff; border-bottom-color: #06A552; }
  .topbar .right { margin-left: auto; display: flex; gap: 10px; align-items: center; }
  .oncall { background: rgba(255,255,255,0.06); color: #fff; border-radius: 9999px; padding: 4px 12px; font: 600 12px/1 inherit; }
  main { padding: 20px 24px; display: grid; gap: 14px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 22px/1.2 inherit; }
  .head .count { font: 600 12px/1.3 inherit; color: #5F6873; background: #fff; border: 1px solid #DDE2E8; border-radius: 9999px; padding: 4px 10px; }
  .head .right { margin-left: auto; display: flex; gap: 8px; }
  .btn-primary { background: #06A552; color: #fff; border: 0; padding: 9px 18px; border-radius: 4px; font: 700 13px/1 inherit; cursor: pointer; }
  .btn-secondary { background: #fff; color: #161B22; border: 1px solid #B7BFCA; border-radius: 4px; padding: 8px 14px; font: 600 13px/1 inherit; cursor: pointer; }
  .filters { display: flex; gap: 8px; }
  .filter { background: #fff; border: 1px solid #DDE2E8; border-radius: 9999px; padding: 5px 12px; font: 600 12px/1 inherit; color: #2D343C; cursor: pointer; }
  .filter.active { background: #E1F4EA; border-color: #06A552; color: #036A34; }
  .panel { display: grid; grid-template-columns: 1fr 320px; gap: 14px; }
  .incidents { display: grid; gap: 8px; }
  .incident { background: #fff; border: 1px solid #DDE2E8; border-left: 4px solid #2D6FBF; border-radius: 4px; padding: 12px 14px; display: grid; grid-template-columns: 60px 1fr auto auto auto; gap: 14px; align-items: center; box-shadow: 0 1px 2px rgba(22,27,34,0.04); }
  .incident.p1 { border-left-color: #DA2D27; }
  .incident.p2 { border-left-color: #B07A00; }
  .incident.p4 { border-left-color: #06A552; }
  .incident .id { font: 700 12px/1 'JetBrains Mono', monospace; color: #5F6873; }
  .incident .title { font: 700 14px/1.3 inherit; color: #161B22; }
  .incident .meta { font: 500 12px/1.4 inherit; color: #5F6873; margin-top: 3px; }
  .badge { border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.04em; text-align: center; }
  .b-p1 { background: #FFE0DC; color: #9F1F1A; }
  .b-p2 { background: #FFF1D4; color: #7F5500; }
  .b-p4 { background: #E1F4EA; color: #016B36; }
  .b-trig { background: rgba(218,45,39,0.10); color: #DA2D27; }
  .b-ack  { background: rgba(176,122,0,0.10); color: #B07A00; }
  .timeline { background: #fff; border: 1px solid #DDE2E8; border-radius: 4px; padding: 14px 16px; }
  .timeline h3 { margin: 0 0 12px; font: 700 14px/1.3 inherit; color: #161B22; }
  .tl-row { display: grid; grid-template-columns: 64px 1fr; gap: 10px; padding: 8px 0; border-bottom: 1px dashed #DDE2E8; font: 500 12px/1.4 inherit; }
  .tl-row:last-child { border-bottom: 0; }
  .tl-row .t { color: #5F6873; font: 700 11px/1.4 'JetBrains Mono', monospace; }
  .tl-row .ev .actor { color: #036A34; font-weight: 700; }
  .oncall-card { background: #fff; border: 1px solid #DDE2E8; border-radius: 4px; padding: 12px 14px; display: flex; align-items: center; gap: 12px; }
  .oncall-card .av { width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, #06A552, #25AD66); display: grid; place-items: center; color: #fff; font: 700 13px/1 inherit; }
  .oncall-card .who { font: 700 14px/1.3 inherit; }
  .oncall-card .role { font: 500 12px/1.3 inherit; color: #5F6873; margin-top: 2px; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">PD</div>
    <div class="name">PagerDuty</div>
    <div class="item active">Incidents</div>
    <div class="item">Services</div>
    <div class="item">Schedules</div>
    <div class="item">Automation</div>
    <div class="item">Analytics</div>
    <div class="right">
      <span class="oncall">🔔 Oncall: @mia</span>
      <span style="color:rgba(255,255,255,0.7);">⚙</span>
    </div>
  </header>
  <main>
    <div class="head">
      <h1>Open incidents</h1>
      <span class="count">3 unresolved · 1 acknowledged</span>
      <div class="right">
        <button class="btn-secondary">⤴ Subscribe</button>
        <button class="btn-primary">+ New incident</button>
      </div>
    </div>
    <div class="filters">
      <span class="filter active">All open</span>
      <span class="filter">Triggered</span>
      <span class="filter">Acknowledged</span>
      <span class="filter">Resolved (24h)</span>
      <span class="filter">My team</span>
    </div>
    <section class="panel">
      <div class="incidents">
        <div class="incident p1">
          <span class="id">#PD-4082</span>
          <div><div class="title">API 5xx burst — prod-api</div><div class="meta">2분 전 · @mia 응답 · CloudWatch 알림</div></div>
          <span class="badge b-p1">P1</span>
          <span class="badge b-trig">TRIGGERED</span>
          <button class="btn-primary" style="padding:6px 12px;font:700 11px/1 inherit;">ACK</button>
        </div>
        <div class="incident p2">
          <span class="id">#PD-4081</span>
          <div><div class="title">High p99 latency — checkout-svc</div><div class="meta">8분 전 · 미할당 · Datadog 알림</div></div>
          <span class="badge b-p2">P2</span>
          <span class="badge b-ack">ACK</span>
          <button class="btn-secondary" style="padding:6px 12px;font:700 11px/1 inherit;">Resolve</button>
        </div>
        <div class="incident p4">
          <span class="id">#PD-4076</span>
          <div><div class="title">Backup job retry — db-prod</div><div class="meta">22분 전 · 자동복구 · cron-monitor</div></div>
          <span class="badge b-p4">P4</span>
          <span class="badge b-ack">ACK</span>
          <button class="btn-secondary" style="padding:6px 12px;font:700 11px/1 inherit;">Resolve</button>
        </div>
      </div>
      <aside style="display:grid;gap:10px;">
        <div class="oncall-card">
          <div class="av">M</div>
          <div><div class="who">@mia</div><div class="role">Primary oncall · 2h 14m 남음</div></div>
        </div>
        <div class="timeline">
          <h3>#PD-4082 타임라인</h3>
          <div class="tl-row"><span class="t">09:42</span><span class="ev"><span class="actor">@mia</span> 응답함 (ack)</span></div>
          <div class="tl-row"><span class="t">09:41</span><span class="ev">CloudWatch → 인시던트 트리거</span></div>
          <div class="tl-row"><span class="t">09:39</span><span class="ev">메트릭 임계치 초과 (5xx &gt; 5%)</span></div>
        </div>
      </aside>
    </section>
  </main>
</div>
```
