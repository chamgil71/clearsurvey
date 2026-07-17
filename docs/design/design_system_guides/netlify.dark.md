---
brand: Netlify
brand_ko: 넷리파이
slug: netlify
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#00C7B7"
primary_color_name: "Netlify Teal"
mood:
  - 친근함
  - 자동화
  - 빠른 배포

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

released_year: 2014
last_major_revision: 2024
signature_keyword: "Teal 다이아몬드 패턴과 친근한 자동 배포 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4F6F7", "border": "#E1E4E8", "fg": "#0E1E25", "fg_muted": "#5C6C75", "accent": "#00C7B7" },
    "dark":  { "bg": "#0E1E25", "surface": "#1F353D", "border": "#2D3F4A", "fg": "#FFFFFF", "fg_muted": "#A4ABB7", "accent": "#15CFBE" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#091319;color:#fff;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);"></span>
      <strong style="font-size:13px;">Netlify</strong>
      <span style="margin-left:auto;font-size:11px;color:#A4ABB7;">acme-app</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="background:#10342A;color:#34D77F;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;display:inline-flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#34D77F;"></span>Published</span>
        <strong style="font-size:13px;">main · a1b2c3d</strong>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:6px;padding:10px 12px;font-family:ui-monospace,'JetBrains Mono',monospace;font-size:10px;line-height:1.6;color:var(--card-fg);">
        <span style="color:#34D77F;">✓</span> Built in 12.4s<br/>
        <span style="color:#34D77F;">✓</span> Deployed to global edge<br/>
        <span style="color:#A4ABB7;">→</span> 119 cities · &lt;50ms TTFB
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="background:#16292F;border:1px solid var(--card-border);border-radius:6px;padding:10px;">
          <div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;">Build time</div>
          <div style="font-size:18px;font-weight:700;">12.4s</div>
        </div>
        <div style="background:#16292F;border:1px solid var(--card-border);border-radius:6px;padding:10px;">
          <div style="font-size:9px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;">Functions</div>
          <div style="font-size:18px;font-weight:700;color:var(--card-accent);">8</div>
        </div>
      </div>
      <button style="background:var(--card-accent);color:#08221F;border:0;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;">View deploy →</button>
    </div>
  </div>

sources:
  - https://www.netlify.com/
  - https://www.netlify.com/about/
  - https://docs.netlify.com/
---

### ① 브랜드 DNA
- **브랜드명**: Netlify
- **한 줄 정체성**: git push 한 번으로 글로벌 엣지에 자동 배포되는, 프론트엔드 클라우드 플랫폼
- **공식 디자인 철학**: "The fastest way to build the modern web — automated, scalable, friendly"
- **시그니처 요소 1개**: Netlify Teal(#00C7B7) + 다이아몬드/wave 모티프 + 짙은 Forest navy(#0E1E25) 헤더

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 자동화, 빠른 배포
- **무드 설명**: 흰 캔버스 + 짙은 navy 헤더에 Teal 액센트. 빌드/배포 로그가 데이터 그래프와 함께 깔끔하게 보인다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 빌드 메트릭, 배포 로그
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Netlify Teal (다크에서 명도 유지·시인성 확보) */
  --color-primary-50:  #062A28;   /* 다크 위 가장 옅은 teal tint */
  --color-primary-100: #0A3B37;
  --color-primary-200: #0F564F;
  --color-primary-300: #138C82;
  --color-primary-400: #00C7B7;   /* Netlify Teal — 다크 표면 강조 기준 */
  --color-primary-500: #15CFBE;   /* Netlify Teal (다크 기본, 한 단계 라이트) */
  --color-primary-600: #3FD7C7;
  --color-primary-700: #76E5DA;
  --color-primary-800: #B3EFE9;
  --color-primary-900: #E0F8F5;

  /* Secondary - Pink/Coral accent (다크에서 약간 밝게) */
  --color-secondary-500: #FF7A7A;

  /* Neutral - Netlify slate (다크 반전 램프) */
  --color-neutral-0:    #0E1E25;   /* 다크 캔버스 = forest navy */
  --color-neutral-50:   #112229;
  --color-neutral-100:  #16292F;
  --color-neutral-200:  #1F353D;   /* elevated surface */
  --color-neutral-300:  #2D3F4A;   /* border */
  --color-neutral-500:  #5C6C75;
  --color-neutral-700:  #A4ABB7;   /* text secondary */
  --color-neutral-800:  #C5CCD3;
  --color-neutral-900:  #E6E9EC;   /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크 표면에서 읽히는 채도 */
  --color-success-bg: #10342A;
  --color-success-fg: #34D77F;
  --color-warning-bg: #3A2C10;
  --color-warning-fg: #F0B95B;
  --color-error-bg:   #3A1E1E;
  --color-error-fg:   #FF6B6B;
  --color-info-bg:    #0A3B37;
  --color-info-fg:    #2FD9C8;

  /* Surface */
  --bg-base:     #0E1E25;          /* 페이지 기본 — forest navy */
  --bg-subtle:   #16292F;          /* 섹션 구분 */
  --bg-elevated: #1F353D;          /* 카드 */
  --bg-overlay:  rgba(5,13,17,0.66);

  /* Text */
  --text-primary:    #E6E9EC;
  --text-secondary:  #A4ABB7;
  --text-tertiary:   #7E8A93;
  --text-on-primary: #08221F;      /* Teal 위에는 짙은 navy-teal */
  --text-disabled:   #4A5860;

  /* Border */
  --border-default: #2D3F4A;
  --border-subtle:  #1F353D;
  --border-strong:  #3D515D;
  --border-focus:   #15CFBE;
}

[data-theme="light"] {
  /* Primary - Netlify Teal */
  --color-primary-50:  #E0F8F5;
  --color-primary-100: #B3EFE9;
  --color-primary-200: #76E5DA;
  --color-primary-300: #3FD7C7;
  --color-primary-400: #15CFBE;
  --color-primary-500: #00C7B7;  /* Netlify Teal */
  --color-primary-600: #00AEA0;
  --color-primary-700: #008F84;
  --color-primary-800: #006B62;
  --color-primary-900: #003D38;

  /* Secondary - Pink/Coral accent */
  --color-secondary-500: #FF5C5C;

  /* Neutral - Netlify slate */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFBFC;
  --color-neutral-100:  #F4F6F7;
  --color-neutral-200:  #E1E4E8;
  --color-neutral-300:  #C5C9D0;
  --color-neutral-500:  #8C9199;
  --color-neutral-700:  #5C6C75;
  --color-neutral-800:  #2D3F4A;
  --color-neutral-900:  #0E1E25;
  --color-neutral-1000: #050D11;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E0F8F5;
  --color-info-fg:    #00AEA0;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F4F6F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,30,37,0.50);

  /* Text */
  --text-primary:    #0E1E25;
  --text-secondary:  #5C6C75;
  --text-tertiary:   #8C9199;
  --text-on-primary: #0E1E25;        /* Teal 위에는 navy */
  --text-disabled:   #C5C9D0;

  /* Border */
  --border-default: #E1E4E8;
  --border-subtle:  #F4F6F7;
  --border-strong:  #C5C9D0;
  --border-focus:   #00C7B7;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — Netlify 마케팅/대시보드 모두
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono"
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
--shadow-xl: 0 20px 40px rgba(0,199,183,0.28);
```

### ⑧ Iconography
- **스타일**: Outline (Netlify 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-700); }
.btn-ghost:hover { background: var(--color-primary-50); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
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
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(21,207,190,0.28); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Deploy status**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-published { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-published::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: var(--color-success-fg); }
.tag-building { background: #0C2E3F; color: #5FC8EA; }
.tag-failed { background: var(--color-error-bg); color: var(--color-error-fg); }
```

**Navigation (Top + Side)**
```css
.topnav { height: 48px; background: var(--color-neutral-900); color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 12px; }
.sidebar { width: 220px; background: var(--bg-subtle); border-right: 1px solid var(--border-default); padding: 12px; height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: var(--radius-md); font-size: 13px; color: var(--text-primary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-base); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
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
1. Teal 위에 흰 텍스트 배치 금지 — navy(#0E1E25) 사용 권장
2. 다이아몬드 로고를 회전/뒤집기 금지
3. brand 색을 reaction emoji 색에 분산 사용 금지
4. 빌드 로그에 색을 4가지 이상 사용 금지 — 의미별 success/warn/error만
5. 본문 텍스트에 채도 높은 brand pink/coral 사용 금지

### ⑫ 시그니처 적용 예시 (Deploy view)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #E6E9EC; background: #0E1E25; }
  .topnav { height: 48px; background: #091319; color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 12px; }
  .topnav .logo { width: 22px; height: 22px; background: #15CFBE; clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
  .layout { display: grid; grid-template-columns: 220px 1fr; min-height: calc(100vh - 48px); }
  .sidebar { background: #16292F; border-right: 1px solid #2D3F4A; padding: 16px 12px; }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 6px; font-size: 13px; cursor: pointer; }
  .sidebar .item:hover { background: #1F353D; }
  .sidebar .item.active { background: #0A3B37; color: #2FD9C8; font-weight: 600; }
  .main { padding: 24px 32px; }
  .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .head h1 { margin: 0; font-size: 22px; font-weight: 700; }
  .deploy-card { background: #1F353D; border: 1px solid #2D3F4A; border-radius: 8px; padding: 16px; margin-bottom: 12px; display: grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items: center; }
  .deploy-card.latest { border-left: 4px solid #15CFBE; padding-left: 14px; }
  .deploy-card .commit { font-family: ui-monospace, monospace; font-size: 13px; }
  .deploy-card .commit small { color: var(--text-secondary); margin-left: 6px; font-family: Inter, sans-serif; }
  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  .panel { background: #1F353D; border: 1px solid #2D3F4A; border-radius: 8px; padding: 16px; }
  .panel .label { font-size: 10px; color: #A4ABB7; text-transform: uppercase; letter-spacing: 0.04em; }
  .panel .num { font-size: 28px; font-weight: 700; line-height: 1.1; margin-top: 4px; }
  .panel .delta { font-size: 11px; color: #34D77F; margin-top: 4px; font-weight: 600; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Netlify</strong>
  <span style="color:#A4ABB7; font-size:13px;">/ acme-app</span>
  <button class="btn btn-primary" style="margin-left:auto; background:#15CFBE; color:#08221F; border:0; border-radius:6px; padding:6px 14px; font-size:12px; font-weight:600; cursor:pointer;">+ New site</button>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="item active">▦ Overview</div>
    <div class="item">🚀 Deploys</div>
    <div class="item">⚡ Functions</div>
    <div class="item">📊 Analytics</div>
    <div class="item">🌐 Domains</div>
    <div class="item">⚙ Site settings</div>
  </aside>
  <main class="main">
    <div class="head">
      <h1>Production deploys</h1>
      <span class="tag tag-published">Published · acme-app.netlify.app</span>
    </div>
    <div class="grid">
      <div class="panel"><div class="label">Build time</div><div class="num">12.4s</div><div class="delta">▼ 2.1s faster</div></div>
      <div class="panel"><div class="label">Functions</div><div class="num" style="color:#15CFBE;">8</div><div class="delta" style="color:var(--text-secondary);">running</div></div>
      <div class="panel"><div class="label">Bandwidth · 24h</div><div class="num">42 GB</div><div class="delta">▲ 8%</div></div>
    </div>
    <div class="deploy-card latest">
      <span class="tag tag-published">● Published</span>
      <div class="commit"><strong>a1b2c3d</strong> <small>Add design tokens v2 · main · Mina · 2 min ago</small></div>
      <button class="btn btn-secondary" style="background:#1F353D; color:#E6E9EC; border:1px solid #3D515D; border-radius:6px; padding:6px 12px; font-size:12px; font-weight:600;">View →</button>
    </div>
    <div class="deploy-card">
      <span class="tag tag-published">● Published</span>
      <div class="commit"><strong>e4f5g6h</strong> <small>Fix typo in onboarding · main · Joon · 1h ago</small></div>
      <button class="btn btn-secondary" style="background:#1F353D; color:#E6E9EC; border:1px solid #3D515D; border-radius:6px; padding:6px 12px; font-size:12px; font-weight:600;">View →</button>
    </div>
    <div class="deploy-card">
      <span class="tag tag-failed">✗ Failed</span>
      <div class="commit"><strong>i7j8k9l</strong> <small>Refactor auth module · feat/auth · Dave · 3h ago</small></div>
      <button class="btn btn-secondary" style="background:#1F353D; color:#FF6B6B; border:1px solid #3D515D; border-radius:6px; padding:6px 12px; font-size:12px; font-weight:600;">Logs →</button>
    </div>
  </main>
</div>
```
