---
brand: Supabase
brand_ko: 슈파베이스
slug: supabase
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#3ECF8E"
primary_color_name: "Supabase Green"
mood:
  - 개발자 친화
  - 모노 다크
  - 오픈소스

font_category: sans-serif
font_primary: Custom (Circular)
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2020
last_major_revision: 2024
signature_keyword: "다크 모노 위 Supabase Green이 한 점으로 강조되는 OSS Firebase 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#E0E0E0", "fg": "#1C1C1C", "fg_muted": "#595959", "accent": "#3ECF8E" },
    "dark":  { "bg": "#1C1C1C", "surface": "#1F1F1F", "border": "#262626", "fg": "#EDEDED", "fg_muted": "#A1A1A1", "accent": "#3ECF8E" }
  }

hero_html: |
  <div style="font-family:'Circular',Inter,'Pretendard',-apple-system,sans-serif;letter-spacing:-0.01em;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);border-radius:2px;"></span>
      <strong style="font-size:13px;">supabase</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">acme-prod</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="display:flex;gap:6px;">
        <span style="background:var(--card-surface);border:1px solid var(--card-border);color:var(--card-accent);padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;">● Database</span>
        <span style="background:var(--card-surface);border:1px solid var(--card-border);color:var(--card-fg-muted);padding:2px 8px;border-radius:4px;font-size:10px;">Auth</span>
        <span style="background:var(--card-surface);border:1px solid var(--card-border);color:var(--card-fg-muted);padding:2px 8px;border-radius:4px;font-size:10px;">Storage</span>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:10px 12px;font-family:ui-monospace,'JetBrains Mono',monospace;font-size:11px;line-height:1.5;color:var(--card-fg);">
        <span style="color:var(--card-fg-muted);">// Supabase JS</span><br/>
        <span style="color:#FF7E5C;">const</span> <span style="color:#A8C7FF;">{ data }</span> = <span style="color:#FF7E5C;">await</span> supabase<br/>
        &nbsp;&nbsp;.<span style="color:var(--card-accent);">from</span>(<span style="color:#FFD56B;">'profiles'</span>)<br/>
        &nbsp;&nbsp;.<span style="color:var(--card-accent);">select</span>(<span style="color:#FFD56B;">'*'</span>);
      </div>
      <button style="background:var(--card-accent);color:var(--card-bg);border:0;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;">Run query →</button>
    </div>
  </div>

sources:
  - https://supabase.com/
  - https://supabase.com/brand-assets
  - https://supabase.com/docs
---

### ① 브랜드 DNA
- **브랜드명**: Supabase
- **한 줄 정체성**: Postgres 위에 올라간 오픈소스 Firebase 대안 — 백엔드 한 줄로 끝
- **공식 디자인 철학**: "Build in a weekend, scale to millions — open source Firebase alternative"
- **시그니처 요소 1개**: Supabase Green(#3ECF8E) + 다크 모노 캔버스(#1C1C1C) + 마름모(diamond) 로고 — OSS dev tool 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 개발자 친화, 모노 다크, 오픈소스
- **무드 설명**: 거의 모든 화면이 모노 다크. 강조는 Supabase Green 한 색. 코드 스니펫과 그래프가 화면의 주인공.
- **비주얼 스타일**: 모던 미니멀 + 살짝 브루털리즘
- **밀도(Density)**: Compact — 데이터/코드 위주
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat — 그림자 거의 없음, 1px border 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Supabase Green (다크 캔버스 위 그대로 빛나는 시그니처 액센트) */
  --color-primary-50:  #0E2A1D;       /* 다크용 가장 어두운 그린 틴트 */
  --color-primary-100: #11472F;
  --color-primary-200: #1B6B47;
  --color-primary-300: #258F60;
  --color-primary-400: #2FB378;
  --color-primary-500: #3ECF8E;  /* Supabase Green */
  --color-primary-600: #50D397;
  --color-primary-700: #5FD79C;
  --color-primary-800: #84DFB0;
  --color-primary-900: #C2EFD7;

  /* Secondary - Vue green family (보조) */
  --color-secondary-500: #4FD1C5;

  /* Neutral - Supabase의 검은 ramp (다크 기준 반전) */
  --color-neutral-0:    #0E0E0E;       /* deep canvas */
  --color-neutral-50:   #161616;
  --color-neutral-100:  #1C1C1C;       /* canvas */
  --color-neutral-200:  #262626;       /* border */
  --color-neutral-300:  #383838;
  --color-neutral-500:  #707070;
  --color-neutral-700:  #A1A1A1;
  --color-neutral-800:  #C0C0C0;
  --color-neutral-900:  #EDEDED;       /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크 위 가독 톤 (어두운 bg + 밝은 fg) */
  --color-success-bg: #11472F;
  --color-success-fg: #50D397;
  --color-warning-bg: #3A2A0E;
  --color-warning-fg: #F1A33B;
  --color-error-bg:   #3A1C16;
  --color-error-fg:   #FF7E5C;
  --color-info-bg:    #15273A;
  --color-info-fg:    #3984F2;

  /* Surface */
  --bg-base:     #1C1C1C;              /* 시그니처 다크 캔버스 */
  --bg-subtle:   #1F1F1F;
  --bg-elevated: #262626;
  --bg-overlay:  rgba(0,0,0,0.70);

  /* Text */
  --text-primary:    #EDEDED;          /* 풀 white 금지 — #EDEDED까지만 */
  --text-secondary:  #A1A1A1;
  --text-tertiary:   #707070;
  --text-on-primary: #1C1C1C;          /* 그린 위에는 검정 */
  --text-disabled:   #4D4D4D;

  /* Border */
  --border-default: #262626;
  --border-subtle:  #1F1F1F;
  --border-strong:  #383838;
  --border-focus:   #3ECF8E;
}

[data-theme="light"] {
  /* Primary - Supabase Green */
  --color-primary-50:  #E5F8EE;
  --color-primary-100: #C2EFD7;
  --color-primary-200: #84DFB0;
  --color-primary-300: #5FD79C;
  --color-primary-400: #50D397;
  --color-primary-500: #3ECF8E;  /* Supabase Green */
  --color-primary-600: #2FB378;
  --color-primary-700: #258F60;
  --color-primary-800: #1B6B47;
  --color-primary-900: #11472F;

  /* Secondary - Vue green family (보조) */
  --color-secondary-500: #4FD1C5;

  /* Neutral - Supabase의 검은 ramp */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #EDEDED;
  --color-neutral-200:  #E0E0E0;
  --color-neutral-300:  #C0C0C0;
  --color-neutral-500:  #828282;
  --color-neutral-700:  #595959;
  --color-neutral-800:  #383838;
  --color-neutral-900:  #1C1C1C;       /* canvas */
  --color-neutral-1000: #0E0E0E;       /* deep canvas */

  /* Semantic */
  --color-success-bg: #E5F8EE;
  --color-success-fg: #3ECF8E;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #F1A33B;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FF7E5C;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #3984F2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(28,28,28,0.50);

  /* Text */
  --text-primary:    #1C1C1C;
  --text-secondary:  #595959;
  --text-tertiary:   #828282;
  --text-on-primary: #1C1C1C;          /* 그린 위에는 검정 */
  --text-disabled:   #C0C0C0;

  /* Border */
  --border-default: #E0E0E0;
  --border-subtle:  #EDEDED;
  --border-strong:  #C0C0C0;
  --border-focus:   #3ECF8E;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Custom (Circular Std-like) / 폴백 -apple-system, Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono", "Fira Code"
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.025em
  - H1: 36px / 600 / 1.15 / -0.015em
  - H2: 24px / 600 / 1.25 / -0.01em
  - H3: 18px / 500 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 11px / 500 / 1.27 / 0.04em

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
--radius-sm: 3px;
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
--shadow-lg: 0 8px 24px rgba(0,0,0,0.60);
--shadow-xl: 0 16px 32px rgba(62,207,142,0.24);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide (Supabase 표준) / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 Inter, 'Pretendard', sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid transparent;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); border-color: var(--color-primary-500); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }

.btn-secondary { background: transparent; color: var(--text-primary); border-color: var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); border-color: transparent; }
.btn-danger { background: var(--color-error-fg); color: #fff; border-color: var(--color-error-fg); }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 6px 10px;
  height: 32px;
  font-size: 13px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(62,207,142,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 500; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); background: transparent; }
.tag-active  { color: var(--color-primary-500); }
.tag-active::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: var(--color-primary-500); }
```

**Navigation (Top + Sidebar)**
```css
.topnav { height: 48px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); display: flex; align-items: center; padding: 0 14px; gap: 12px; }
.sidebar { width: 240px; background: var(--bg-subtle); border-right: 1px solid var(--border-default); padding: 12px; height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--radius-md); font-size: 13px; color: var(--text-primary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); }
.sidebar .item.active { background: rgba(62,207,142,0.10); color: var(--color-primary-500); font-weight: 600; }
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
1. brand 그린을 본문 텍스트에 사용 금지 — 액션/active 상태에만
2. 다크 모드에서 풀 white(#FFF) 사용 금지 — #EDEDED까지만
3. 코드 스니펫에 sans-serif 폰트 사용 금지 — 모노 필수
4. 모달/dropdown에 큰 그림자(shadow-xl) 사용 금지 — flat 톤 위배
5. 마름모 로고를 임의 색으로 변경 금지 — Supabase Green 단일

### ⑫ 시그니처 적용 예시 (Dashboard dark)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; letter-spacing: -0.01em; color: #EDEDED; background: #1C1C1C; }
  .topnav { height: 48px; background: #1C1C1C; border-bottom: 1px solid #262626; display: flex; align-items: center; padding: 0 16px; gap: 12px; font-size: 13px; }
  .topnav .logo { width: 18px; height: 18px; background: #3ECF8E; clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); border-radius: 2px; }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: calc(100vh - 48px); }
  .sidebar { background: #1F1F1F; border-right: 1px solid #262626; padding: 12px; }
  .sidebar .section { font-size: 11px; color: #707070; text-transform: uppercase; letter-spacing: 0.04em; padding: 12px 10px 4px; font-weight: 500; }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 6px; font-size: 13px; color: #A1A1A1; cursor: pointer; }
  .sidebar .item:hover { background: #262626; color: #EDEDED; }
  .sidebar .item.active { background: rgba(62,207,142,0.10); color: #3ECF8E; font-weight: 600; }
  .main { padding: 24px 32px; }
  .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .head h1 { margin: 0; font-size: 22px; font-weight: 600; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
  .panel { background: #1F1F1F; border: 1px solid #262626; border-radius: 8px; padding: 16px; }
  .panel h3 { margin: 0 0 8px; font-size: 13px; font-weight: 500; color: #A1A1A1; }
  .panel .num { font-size: 24px; font-weight: 600; color: #EDEDED; }
  .panel .delta { font-size: 11px; color: #3ECF8E; margin-top: 4px; font-weight: 500; }
  .code { background: #0E0E0E; border: 1px solid #262626; border-radius: 6px; padding: 14px 16px; font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.6; }
  .code .c { color: #707070; }
  .code .k { color: #FF7E5C; }
  .code .s { color: #FFD56B; }
  .code .v { color: #A8C7FF; }
  .code .f { color: #3ECF8E; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>supabase</strong>
  <span style="color:#A1A1A1;">/ acme-prod</span>
  <span class="tag tag-active" style="margin-left:auto; padding:2px 8px; border:1px solid #262626; border-radius:4px; font-size:11px; color:#3ECF8E; display:inline-flex; align-items:center; gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#3ECF8E;"></span> Healthy</span>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="section">Project</div>
    <div class="item active">▦ Home</div>
    <div class="item">📋 Table editor</div>
    <div class="item">⚡ SQL editor</div>
    <div class="section">Build</div>
    <div class="item">🗄 Database</div>
    <div class="item">🔐 Authentication</div>
    <div class="item">📦 Storage</div>
    <div class="item">⚙ Edge Functions</div>
  </aside>
  <main class="main">
    <div class="head">
      <h1>Project overview</h1>
      <button class="btn btn-primary" style="background:#3ECF8E; color:#1C1C1C; border:0; border-radius:6px; padding:8px 14px; font-size:13px; font-weight:600; cursor:pointer;">+ New query</button>
    </div>
    <div class="grid">
      <div class="panel"><h3>Database size</h3><div class="num">428 MB</div><div class="delta">▲ 12 MB</div></div>
      <div class="panel"><h3>API requests · 24h</h3><div class="num">128.4k</div><div class="delta">▲ 8%</div></div>
      <div class="panel"><h3>Auth users</h3><div class="num">12,840</div><div class="delta">▲ 142 today</div></div>
      <div class="panel"><h3>Storage</h3><div class="num">2.4 GB</div><div class="delta">▲ 80 MB</div></div>
    </div>
    <div class="panel">
      <h3>Quick start — Supabase JS client</h3>
      <div class="code">
<span class="c">// fetch profiles</span><br/>
<span class="k">const</span> <span class="v">{ data, error }</span> = <span class="k">await</span> supabase<br/>
&nbsp;&nbsp;.<span class="f">from</span>(<span class="s">'profiles'</span>)<br/>
&nbsp;&nbsp;.<span class="f">select</span>(<span class="s">'id, name, avatar_url'</span>)<br/>
&nbsp;&nbsp;.<span class="f">eq</span>(<span class="s">'is_active'</span>, <span class="v">true</span>);
      </div>
    </div>
  </main>
</div>
```
