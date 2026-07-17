---
brand: GitLab
brand_ko: 깃랩
slug: gitlab
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - design-system

color_tone: warm
primary_color_hex: "#FC6D26"
primary_color_name: "GitLab Orange"
mood:
  - 통합적
  - 협업적
  - 개발자 친화

font_category: sans-serif
font_primary: GitLab Sans
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2014
last_major_revision: 2024
signature_keyword: "Tanuki(여우) 로고와 오렌지+퍼플의 single platform DevOps 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#DCDCDE", "fg": "#28272D", "fg_muted": "#666666", "accent": "#FC6D26" },
    "dark":  { "bg": "#28272D", "surface": "#333035", "border": "#4F4F50", "fg": "#FFFFFF", "fg_muted": "#BFBFC3", "accent": "#FC9824" }
  }

hero_html: |
  <div style="font-family:'GitLab Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-flex;align-items:center;gap:1px;">
        <span style="width:6px;height:14px;background:#FC6D26;clip-path:polygon(50% 0,100% 100%,0 100%);"></span>
        <span style="width:6px;height:14px;background:#FCA326;clip-path:polygon(50% 0,100% 100%,0 100%);"></span>
        <span style="width:6px;height:14px;background:#E24329;clip-path:polygon(50% 0,100% 100%,0 100%);"></span>
      </span>
      <strong style="font-size:13px;">GitLab</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">acme/web-app</span>
    </div>
    <div style="padding:12px 14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;font-size:13px;">
        <span style="background:#1F75CB;color:#fff;padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:600;">!42</span>
        <strong style="font-weight:600;">Add design system tokens v2</strong>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <span style="background:#DCFAE6;color:#108548;padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:600;">Open</span>
        <span style="background:#FFF3D9;color:#996B00;padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:600;">~design</span>
        <span style="background:#E5E5FA;color:#5943B6;padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:600;">~frontend</span>
      </div>
      <div style="background:var(--card-surface);border-radius:6px;padding:10px 12px;font-size:11px;color:var(--card-fg-muted);font-family:ui-monospace,monospace;line-height:1.5;">
        <span style="color:#108548;">+ added 24 tokens</span><br/>
        <span style="color:#DD2B0E;">- removed 3 deprecated</span><br/>
        <span style="color:#1F75CB;">⚡ pipeline passed</span>
      </div>
      <button style="background:#1F75CB;color:#fff;border:0;border-radius:4px;padding:8px 14px;font-size:12px;font-weight:500;font-family:inherit;align-self:flex-start;margin-top:auto;">Merge</button>
    </div>
  </div>

sources:
  - https://about.gitlab.com/
  - https://design.gitlab.com/
  - https://design.gitlab.com/foundations/colors/
---

### ① 브랜드 DNA
- **브랜드명**: GitLab
- **한 줄 정체성**: 계획부터 배포까지 한 플랫폼에서 다루는, 오픈코어 DevOps 통합 도구
- **공식 디자인 철학**: "Pajamas — design with collaboration in mind, ship the best DevOps experience"
- **시그니처 요소 1개**: 3색 Tanuki 로고(빨강/주황/노랑) + GitLab Orange(#FC6D26) + Action Blue(#1F75CB)의 조합

### ② 톤 & 무드
- **핵심 키워드 3개**: 통합적, 협업적, 개발자 친화
- **무드 설명**: 흰 캔버스에 정확한 데이터 라인. Orange는 brand mark에만, 액션은 Blue가 담당하는 명확한 역할 분리.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — MR/이슈/파이프라인 데이터 위주
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - GitLab Orange (brand mark) */
  --color-primary-50:  #FEF1E1;
  --color-primary-100: #FDDBB2;
  --color-primary-200: #FBC380;
  --color-primary-300: #FAAB4F;
  --color-primary-400: #FC9824;
  --color-primary-500: #FC6D26;  /* GitLab Orange */
  --color-primary-600: #E24329;  /* deeper red-orange */
  --color-primary-700: #C0341D;
  --color-primary-800: #8C2616;
  --color-primary-900: #5C190F;

  /* Secondary - GitLab Action Blue */
  --color-secondary-500: #1F75CB;

  /* Tanuki 3색 */
  --tanuki-red:    #E24329;
  --tanuki-orange: #FC6D26;
  --tanuki-yellow: #FCA326;
  --tanuki-purple: #6B4FBB;

  /* Neutral - Pajamas gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #DCDCDE;
  --color-neutral-300:  #BFBFC3;
  --color-neutral-500:  #89888D;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #4F4F50;
  --color-neutral-900:  #28272D;
  --color-neutral-1000: #18171D;

  /* Semantic */
  --color-success-bg: #DCFAE6;
  --color-success-fg: #108548;
  --color-warning-bg: #FFF3D9;
  --color-warning-fg: #996B00;
  --color-error-bg:   #FCEAE5;
  --color-error-fg:   #DD2B0E;
  --color-info-bg:    #E9F3FC;
  --color-info-fg:    #1F75CB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(40,39,45,0.50);

  /* Text */
  --text-primary:    #28272D;
  --text-secondary:  #666666;
  --text-tertiary:   #89888D;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #BFBFC3;

  /* Border */
  --border-default: #DCDCDE;
  --border-subtle:  #EBEBEB;
  --border-strong:  #BFBFC3;
  --border-focus:   #1F75CB;
}

[data-theme="dark"] {
  --bg-base: #28272D;
  --bg-subtle: #18171D;
  --bg-elevated: #333035;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: GitLab Sans (자체 폰트, 폴백 -apple-system, "Helvetica Neue")
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: GitLab Mono / "JetBrains Mono"
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
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
- **Container**: max-width 1280px (앱), 좌우 패딩 16px (mobile) / 24px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- **스타일**: Outline + Filled (GitLab은 둘 다 사용)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: @gitlab/svgs (MIT) / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 'GitLab Sans', Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid transparent;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-secondary-500); color: #fff; border-color: var(--color-secondary-500); }
.btn-primary:hover { background: #1761A0; border-color: #1761A0; }
.btn-primary:active { background: #114E80; }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); border-color: var(--color-neutral-100); }

.btn-confirm { background: #108548; color: #fff; border-color: #108548; }   /* Merge */
.btn-confirm:hover { background: #0D6B3A; border-color: #0D6B3A; }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border-color: var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); border-color: transparent; }
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
  font-size: 14px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 1px var(--border-focus); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Label** (GitLab 시그니처 scoped label)
```css
.label { padding: 0 8px; height: 20px; border-radius: 9999px; font-size: 11px; font-weight: 600; line-height: 20px; display: inline-flex; align-items: center; }
.label-solid   { background: var(--color-primary-500); color: #fff; }
.label-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.label-outline { border: 1px solid var(--border-default); color: var(--text-primary); background: transparent; }
.label-status-open    { background: #DCFAE6; color: #108548; }
.label-status-merged  { background: #E5E5FA; color: #5943B6; }
.label-status-closed  { background: #FCEAE5; color: #DD2B0E; }
```

**Navigation (Side nav)**
```css
.sidebar { width: 220px; background: var(--bg-subtle); border-right: 1px solid var(--border-default); padding: 12px; height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--radius-md); font-size: 13px; color: var(--text-primary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-base); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; border-left: 2px solid var(--color-primary-500); padding-left: 8px; }
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
1. Tanuki 3색을 임의 그라데이션으로 합치지 말 것 — 분리된 삼각형 모양 보존
2. Action Blue를 brand 강조용으로 분산 사용 금지 — 액션 신호 보존
3. label에 4가지 이상 색 동시 사용 금지 — scope 라벨 가독성 저하
4. MR 상태(Open/Merged/Closed)를 색으로만 구분 금지 — 라벨 텍스트 동반
5. 코드 영역에 sans-serif 폰트 사용 금지

### ⑫ 시그니처 적용 예시 (MR view)

```html
<style>
  body { margin: 0; font-family: 'GitLab Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topnav { height: 48px; background: #28272D; color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 12px; }
  .topnav .logo { display: flex; gap: 1px; align-items: center; }
  .topnav .logo span { width: 8px; height: 18px; clip-path: polygon(50% 0,100% 100%,0 100%); }
  .topnav h1 { margin: 0; font-size: 14px; font-weight: 600; }
  .layout { display: grid; grid-template-columns: 220px 1fr; min-height: calc(100vh - 48px); }
  .sidebar { background: var(--bg-subtle); padding: 16px 12px; border-right: 1px solid var(--border-default); }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 4px; font-size: 13px; cursor: pointer; }
  .sidebar .item:hover { background: var(--bg-base); }
  .sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
  .main { padding: 24px 32px; }
  .mr-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .mr-head h1 { margin: 0; font-size: 22px; font-weight: 600; }
  .mr-meta { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
  .branches { font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 13px; background: var(--bg-subtle); border: 1px solid var(--border-default); padding: 8px 12px; border-radius: 4px; margin-bottom: 16px; color: var(--text-secondary); }
  .branches code { background: var(--bg-base); padding: 2px 6px; border-radius: 3px; color: var(--color-secondary-500); }
  .pipeline { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 8px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .pipeline .ic { width: 20px; height: 20px; border-radius: 50%; background: #108548; color: #fff; display: grid; place-items: center; font-size: 12px; }
  .actions { display: flex; gap: 8px; }
</style>

<header class="topnav">
  <div class="logo">
    <span style="background:#E24329"></span>
    <span style="background:#FC6D26"></span>
    <span style="background:#FCA326"></span>
  </div>
  <h1>GitLab</h1>
  <span style="font-size:13px; color:#BFBFC3;">acme / web-app</span>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="item">▤ Project overview</div>
    <div class="item">📋 Issues <span style="margin-left:auto; background:var(--color-primary-500); color:#fff; padding:0 6px; border-radius:9999px; font-size:10px; font-weight:700;">12</span></div>
    <div class="item active">⇈ Merge requests <span style="margin-left:auto; background:var(--color-secondary-500); color:#fff; padding:0 6px; border-radius:9999px; font-size:10px; font-weight:700;">4</span></div>
    <div class="item">🔧 CI/CD</div>
    <div class="item">🚀 Deployments</div>
    <div class="item">🔒 Security</div>
  </aside>
  <main class="main">
    <div class="mr-head">
      <span class="label label-status-open">● Open</span>
      <h1>Add design system tokens v2</h1>
      <span style="color:var(--text-tertiary);">!42</span>
    </div>
    <div class="mr-meta">
      <span class="label label-subtle">~design-system</span>
      <span class="label label-subtle">~frontend</span>
      <span class="label" style="background:#FFF3D9;color:#996B00;">priority::high</span>
    </div>
    <div class="branches">Mina wants to merge 12 commits into <code>main</code> from <code>feature/tokens-v2</code></div>
    <div class="pipeline">
      <span class="ic">✓</span>
      <strong>Pipeline #4823 passed</strong>
      <span style="color:var(--text-secondary); font-size:13px;">on commit a1b2c3d · 2 min ago</span>
    </div>
    <div class="actions">
      <button class="btn btn-confirm" style="background:#108548; border-color:#108548;">Merge ▾</button>
      <button class="btn btn-secondary">Squash and merge</button>
      <button class="btn btn-ghost">Edit</button>
    </div>
  </main>
</div>
```
