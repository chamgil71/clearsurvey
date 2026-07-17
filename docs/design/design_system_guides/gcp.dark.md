---
brand: Google Cloud Platform
brand_ko: 구글 클라우드 플랫폼
slug: gcp
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - infra
  - dev-tools
  - enterprise

color_tone: mixed
primary_color_hex: "#4285F4"
primary_color_name: "Google Blue"
mood:
  - 가독
  - 4색
  - 협업

font_category: sans-serif
font_primary: Google Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2008
last_major_revision: 2024
signature_keyword: "Google 4색 + 라이트 콘솔의 가독성 우선 클라우드"

card_tokens: |
  {
    "light": { "bg": "#F8F9FA", "surface": "#FFFFFF", "border": "#DADCE0", "fg": "#202124", "fg_muted": "#5F6368", "accent": "#1A73E8" },
    "dark":  { "bg": "#1F1F1F", "surface": "#2D2E31", "border": "#3C4043", "fg": "#E8EAED", "fg_muted": "#BDC1C6", "accent": "#669DF6" }
  }

hero_html: |
  <div style="font-family:'Google Sans',Roboto,-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto auto 1fr;letter-spacing:-0.005em;">
    <div style="background:var(--card-surface);color:var(--card-fg);padding:8px 14px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <strong style="font-size:14px;font-weight:500;">≡</strong>
      <strong style="font-size:15px;font-weight:500;letter-spacing:-0.01em;">Google Cloud</strong>
      <span style="font-size:11px;background:#1A2A42;color:var(--card-accent);padding:2px 8px;border-radius:9999px;font-weight:500;">my-project ▾</span>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">Q 검색</span>
    </div>
    <div style="background:var(--card-surface);border-bottom:1px solid var(--card-border);padding:6px 14px;display:flex;align-items:center;gap:6px;font:500 12px/1.4 inherit;color:var(--card-fg-muted);">
      <span style="color:var(--card-accent);">Compute Engine</span><span>›</span><span style="font-weight:500;color:var(--card-fg);">VM 인스턴스</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:14px;display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;">
        <div style="width:6px;height:36px;background:#5BB974;border-radius:3px;"></div>
        <div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font:500 14px/1.3 inherit;color:var(--card-accent);">instance-prod-01</span>
            <span style="background:#1B2D22;color:#5BB974;padding:1px 6px;border-radius:4px;font:600 10px/1.4 inherit;">● 실행 중</span>
          </div>
          <div style="font:400 12px/1.4 inherit;color:var(--card-fg-muted);margin-top:2px;">e2-medium · 서울 asia-northeast3-a · 외부 IP 34.64.123.45</div>
        </div>
        <button style="background:transparent;color:var(--card-accent);border:0;font:500 13px/1 inherit;cursor:pointer;">SSH ▾</button>
      </div>
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:8px;padding:14px;display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;">
        <div style="width:6px;height:36px;background:#FCC934;border-radius:3px;"></div>
        <div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font:500 14px/1.3 inherit;color:var(--card-accent);">instance-staging</span>
            <span style="background:#322811;color:#FDD663;padding:1px 6px;border-radius:4px;font:600 10px/1.4 inherit;">● 시작 중</span>
          </div>
          <div style="font:400 12px/1.4 inherit;color:var(--card-fg-muted);margin-top:2px;">e2-small · 서울 asia-northeast3-c · 외부 IP —</div>
        </div>
        <button style="background:transparent;color:var(--card-accent);border:0;font:500 13px/1 inherit;cursor:pointer;">SSH ▾</button>
      </div>
    </div>
  </div>

sources:
  - https://cloud.google.com/
  - https://cloud.google.com/docs
  - https://m3.material.io/
---

### ① 브랜드 DNA
- **브랜드명**: Google Cloud Platform (GCP)
- **한 줄 정체성**: Google의 클라우드 — AWS·Azure에 이어 빅3 중 가독성·협업이 강점
- **공식 디자인 철학**: Material Design 기반 + Google Cloud 4색 시스템
- **시그니처 요소 1개**: Google 4색(Blue #4285F4 / Red #EA4335 / Yellow #FBBC04 / Green #34A853) 액센트 + 흰 라이트 콘솔. AWS의 짙은 네이비와 정반대로 흰 캔버스 + 옅은 보더가 가독성 우선

### ② 톤 & 무드
- **핵심 키워드 3개**: 가독, 4색, 협업
- **무드 설명**: 흰 콘솔 + 매우 옅은 보더 + 4색 액센트(서비스/상태별 색 분류). 본문 폰트는 Google Sans, 코드/리소스는 Roboto Mono. Material 카드 8px round + sm 그림자.
- **비주얼 스타일**: 모던 미니멀 (Material 3)
- **밀도(Density)**: Comfortable — AWS보다 한 단계 여유
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle — Material elevation 1~2

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Google Blue (dark-tuned: 어두운 배경 위 대비 위해 라이트 톤이 더 강조) */
  --color-primary-50:  #16223A;
  --color-primary-100: #1B2D4D;
  --color-primary-200: #1F3A66;
  --color-primary-300: #2A5599;
  --color-primary-400: #4285F4;
  --color-primary-500: #669DF6;   /* Google Blue (dark accent) */
  --color-primary-600: #8AB4F8;
  --color-primary-700: #AECBFA;
  --color-primary-800: #D2E3FC;
  --color-primary-900: #E8F0FE;

  /* Google 4 brand colors (dark-legible) */
  --color-blue:   #669DF6;
  --color-red:    #F28B82;
  --color-yellow: #FDD663;
  --color-green:  #5BB974;

  /* Service category */
  --service-compute: #669DF6;
  --service-storage: #5BB974;
  --service-database: #F28B82;
  --service-ml:       #C58AF9;
  --service-bigdata:  #8AB4F8;

  /* Neutral - Material grays (inverted ramp) */
  --color-neutral-0:    #1F1F1F;
  --color-neutral-50:   #28292C;
  --color-neutral-100:  #2D2E31;
  --color-neutral-200:  #3C4043;
  --color-neutral-300:  #5F6368;     /* border */
  --color-neutral-500:  #9AA0A6;
  --color-neutral-700:  #BDC1C6;     /* text secondary */
  --color-neutral-800:  #DADCE0;
  --color-neutral-900:  #E8EAED;     /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic - GCP 상태 */
  --color-success-bg: #1B2D22;
  --color-success-fg: #5BB974;       /* RUNNING */
  --color-warning-bg: #322811;
  --color-warning-fg: #FDD663;       /* STARTING/PROVISIONING */
  --color-error-bg:   #2E1A17;
  --color-error-fg:   #F28B82;       /* FAILED/ERROR */
  --color-info-bg:    #16223A;
  --color-info-fg:    #8AB4F8;

  /* Surface */
  --bg-base:     #1F1F1F;
  --bg-subtle:   #28292C;
  --bg-elevated: #2D2E31;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #E8EAED;
  --text-secondary:  #BDC1C6;
  --text-tertiary:   #9AA0A6;
  --text-link:       #8AB4F8;
  --text-link-hover: #AECBFA;
  --text-on-primary: #202124;
  --text-disabled:   #5F6368;

  /* Border */
  --border-default: #3C4043;
  --border-subtle:  #2D2E31;
  --border-strong:  #5F6368;
  --border-focus:   #669DF6;
}

[data-theme="light"] {
  /* Primary - Google Blue */
  --color-primary-50:  #E8F0FE;
  --color-primary-100: #D2E3FC;
  --color-primary-200: #AECBFA;
  --color-primary-300: #8AB4F8;
  --color-primary-400: #669DF6;
  --color-primary-500: #4285F4;   /* Google Blue */
  --color-primary-600: #1A73E8;
  --color-primary-700: #1967D2;
  --color-primary-800: #185ABC;
  --color-primary-900: #174EA6;

  /* Google 4 brand colors */
  --color-blue:   #4285F4;
  --color-red:    #EA4335;
  --color-yellow: #FBBC04;
  --color-green:  #34A853;

  /* Service category */
  --service-compute: #4285F4;
  --service-storage: #34A853;
  --service-database: #EA4335;
  --service-ml:       #9334E6;
  --service-bigdata:  #1A73E8;

  /* Neutral - Material grays */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FA;
  --color-neutral-100:  #F1F3F4;
  --color-neutral-200:  #E8EAED;
  --color-neutral-300:  #DADCE0;     /* border */
  --color-neutral-500:  #9AA0A6;
  --color-neutral-700:  #5F6368;     /* text secondary */
  --color-neutral-800:  #3C4043;
  --color-neutral-900:  #202124;     /* text primary */
  --color-neutral-1000: #000000;

  /* Semantic - GCP 상태 */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #137333;       /* RUNNING */
  --color-warning-bg: #FEF7E0;
  --color-warning-fg: #B25800;       /* STARTING/PROVISIONING */
  --color-error-bg:   #FCE8E6;
  --color-error-fg:   #C5221F;       /* FAILED/ERROR */
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #1A73E8;

  /* Surface */
  --bg-base:     #F8F9FA;
  --bg-subtle:   #F1F3F4;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(32,33,36,0.45);

  /* Text */
  --text-primary:    #202124;
  --text-secondary:  #3C4043;
  --text-tertiary:   #5F6368;
  --text-link:       #1A73E8;
  --text-link-hover: #174EA6;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #9AA0A6;

  /* Border */
  --border-default: #DADCE0;
  --border-subtle:  #E8EAED;
  --border-strong:  #9AA0A6;
  --border-focus:   #4285F4;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Google Sans** / Roboto 폴백
  - 한글: Noto Sans KR / Pretendard 폴백
  - 코드/리소스 ID: **Roboto Mono** / Source Code Pro
- **위계** (Material 3 Type Ramp + GCP Console):
  - Display: 28px / 500 / 1.25 / -0.015em Google Sans
  - H1: 22px / 500 / 1.3 / -0.01em
  - H2: 18px / 500 / 1.35 / -0.005em
  - H3: 16px / 500 / 1.4 / 0
  - Body Large: 14px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Strong: 14px / 500 / 1.5 / 0
  - Body Small: 12px / 400 / 1.45 / 0
  - Caption: 11px / 500 / 1.4 / 0.02em
  - Code: 13px / 400 / 1.5 'Roboto Mono', monospace

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
- **Container**: max-width 1440px (콘솔), 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;        /* 카드 시그니처 */
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation (Material 3)
```css
--shadow-none: none;
--shadow-1: 0 1px 2px rgba(0,0,0,0.40), 0 1px 3px rgba(0,0,0,0.30);
--shadow-2: 0 2px 6px rgba(0,0,0,0.50), 0 1px 2px rgba(0,0,0,0.36);
--shadow-3: 0 4px 12px rgba(0,0,0,0.55);
--shadow-4: 0 8px 24px rgba(0,0,0,0.62);
```

### ⑧ Iconography
- **스타일**: Material Symbols (Outlined → Filled)
- **Stroke 굵기**: 1.5px equivalent
- **모서리 처리**: Round
- **추천 라이브러리**: Material Symbols / Google Cloud Icons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 'Google Sans', Roboto, sans-serif; letter-spacing: 0.01em;
       border-radius: 4px; padding: 9px 16px; border: 1px solid transparent;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-tonal { background: var(--color-primary-50); color: var(--color-primary-600); }
.btn-tonal:hover { background: var(--color-primary-100); }
.btn-secondary { background: var(--bg-elevated); color: var(--color-primary-500); border-color: var(--border-strong); }
.btn-text { background: transparent; color: var(--color-primary-500); padding: 9px 12px; }
.btn-text:hover { background: var(--color-primary-50); }
.btn-fab { width: 56px; height: 56px; padding: 0; border-radius: 16px; background: var(--color-primary-500); color: var(--text-on-primary); box-shadow: var(--shadow-3); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 9px 12px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { outline: 0; border-color: var(--color-primary-500); box-shadow: 0 0 0 2px rgba(102,157,246,0.35); }
.input-code { font: 400 13px/1.4 'Roboto Mono', monospace; background: var(--bg-subtle); }
```

**Card (Resource)**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 14px 16px; box-shadow: var(--shadow-1); }
.card-elevated { box-shadow: var(--shadow-2); }
.resource-row { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 14px; display: grid; grid-template-columns: 6px 1fr auto; gap: 14px; align-items: center; }
.resource-row .status-bar { width: 6px; height: 36px; border-radius: 3px; }
.resource-row .status-bar.running { background: var(--color-green); }
.resource-row .status-bar.starting { background: var(--color-yellow); }
.resource-row .status-bar.stopped { background: var(--text-tertiary); }
.resource-row .name { font: 500 14px/1.3 inherit; color: var(--text-link); }
.resource-row .name:hover { text-decoration: underline; }
.resource-row .meta { font: 400 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 2px; }
```

**Badge / Tag**
```css
.status { padding: 1px 8px; border-radius: 4px; font: 600 11px/1.4 inherit; display: inline-flex; align-items: center; gap: 4px; }
.status::before { content: '●'; font-size: 9px; }
.status-running  { background: var(--color-success-bg); color: var(--color-success-fg); }
.status-pending  { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.status-failed   { background: var(--color-error-bg);  color: var(--color-error-fg); }
.tag-soft        { background: var(--color-primary-50); color: var(--color-primary-600); padding: 2px 8px; border-radius: 9999px; font: 500 11px/1.4 inherit; }
```

**Navigation (Top + Sidebar)**
```css
.navbar { background: var(--bg-elevated); border-bottom: 1px solid var(--border-default); padding: 0 14px; display: flex; align-items: center; gap: 12px; height: 48px; }
.navbar .menu { padding: 8px; cursor: pointer; }
.navbar .logo { font: 500 18px/1 'Google Sans', sans-serif; letter-spacing: -0.01em; color: var(--text-primary); }
.navbar .project { background: var(--color-primary-50); color: var(--color-primary-600); padding: 4px 12px; border-radius: 9999px; font: 500 13px/1.4 inherit; }
.navbar .search { margin-left: auto; max-width: 480px; flex: 1; background: var(--bg-subtle); border-radius: 4px; padding: 8px 12px; font: 400 13px/1.4 inherit; color: var(--text-tertiary); }
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); padding: 8px 0; width: 240px; }
.sidebar .item { padding: 9px 14px; font: 400 13px/1.4 inherit; color: var(--text-primary); cursor: pointer; display: flex; align-items: center; gap: 10px; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-600); font-weight: 500; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
```

### ⑪ Anti-patterns
1. AWS 톤(짙은 네이비 헤더) 사용 금지 — GCP는 흰 콘솔이 시그니처
2. 카드 모서리 12px 이상 라운드 금지 — Material 8px 표준
3. Google 4색 외 추가 강조 색 사용 금지 — 4색이 정체성
4. 본문 weight 500 이상 굵게 사용 금지 — 가독성 우선, 400 권장
5. 리소스 ID·IP를 본문 폰트로 표시 금지 — Roboto Mono 필수

### ⑫ 시그니처 적용 예시 (GCP Compute Engine)

```html
<style>
  body { margin: 0; font-family: 'Google Sans', Roboto, -apple-system, sans-serif; letter-spacing: -0.005em; color: #E8EAED; background: #1F1F1F; }
  .app { max-width: 1200px; margin: 0 auto; min-height: 100vh; }
  .navbar { background: #2D2E31; border-bottom: 1px solid #3C4043; padding: 0 14px; display: flex; align-items: center; gap: 14px; height: 50px; }
  .navbar .menu { padding: 8px; cursor: pointer; font-size: 18px; }
  .navbar .logo { font: 500 19px/1 inherit; letter-spacing: -0.01em; }
  .navbar .project { background: #16223A; color: #8AB4F8; padding: 5px 14px; border-radius: 9999px; font: 500 13px/1.4 inherit; cursor: pointer; }
  .navbar .search { margin-left: auto; flex: 1; max-width: 480px; background: #28292C; border-radius: 4px; padding: 8px 14px; font: 400 13px/1.4 inherit; color: #9AA0A6; }
  .navbar .right { display: flex; gap: 6px; font-size: 18px; color: #BDC1C6; }
  .crumb { background: #2D2E31; border-bottom: 1px solid #3C4043; padding: 10px 18px; display: flex; align-items: center; gap: 6px; font: 500 13px/1.4 inherit; color: #BDC1C6; }
  .crumb a { color: #8AB4F8; cursor: pointer; }
  .crumb .sep { color: #5F6368; }
  .crumb .here { color: #E8EAED; font-weight: 500; }
  .page { padding: 18px; }
  .page-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .page-head h1 { margin: 0; font: 500 24px/1.2 inherit; letter-spacing: -0.01em; }
  .page-head .info { background: #16223A; color: #8AB4F8; padding: 3px 10px; border-radius: 9999px; font: 500 12px/1.4 inherit; }
  .page-head .actions { margin-left: auto; display: flex; gap: 8px; }
  .btn { font: 500 14px/1 inherit; padding: 9px 16px; border-radius: 4px; border: 1px solid transparent; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
  .btn-primary { background: #669DF6; color: #202124; }
  .btn-primary:hover { background: #8AB4F8; }
  .btn-secondary { background: #2D2E31; color: #8AB4F8; border-color: #5F6368; }
  .list { display: flex; flex-direction: column; gap: 10px; }
  .row { background: #2D2E31; border: 1px solid #3C4043; border-radius: 8px; padding: 14px 16px; display: grid; grid-template-columns: 6px 1fr auto auto; gap: 14px; align-items: center; box-shadow: 0 1px 2px rgba(0,0,0,0.30); }
  .row .bar { width: 6px; height: 40px; border-radius: 3px; }
  .row .bar.green { background: #5BB974; }
  .row .bar.yellow { background: #FCC934; }
  .row .bar.gray { background: #5F6368; }
  .row .name { font: 500 14px/1.3 inherit; color: #8AB4F8; cursor: pointer; display: flex; align-items: center; gap: 8px; }
  .row .name .status { padding: 1px 8px; border-radius: 4px; font: 600 11px/1.4 inherit; display: inline-flex; align-items: center; gap: 4px; }
  .row .name .status::before { content: '●'; font-size: 9px; }
  .row .name .status.running { background: #1B2D22; color: #5BB974; }
  .row .name .status.starting { background: #322811; color: #FDD663; }
  .row .name .status.stopped { background: #28292C; color: #9AA0A6; }
  .row .meta { font: 400 12px/1.4 inherit; color: #9AA0A6; margin-top: 3px; }
  .row .meta .mono { font-family: 'Roboto Mono', monospace; color: #E8EAED; font-weight: 500; }
  .row .cpu { font: 500 13px/1.4 inherit; font-variant-numeric: tabular-nums; color: #E8EAED; min-width: 60px; text-align: right; }
  .row .cpu.good { color: #5BB974; }
  .row .ssh { background: transparent; color: #8AB4F8; border: 0; font: 500 13px/1 inherit; cursor: pointer; padding: 6px 10px; border-radius: 4px; }
  .row .ssh:hover { background: #16223A; }
</style>

<div class="app">
  <header class="navbar">
    <div class="menu">≡</div>
    <div class="logo">Google Cloud</div>
    <div class="project">my-project ▾</div>
    <div class="search">Q 리소스, 서비스, 문서 검색 (/)</div>
    <div class="right"><span>📊</span><span>🔔</span><span>❓</span></div>
  </header>
  <nav class="crumb">
    <a>Compute Engine</a><span class="sep">›</span><span class="here">VM 인스턴스</span>
  </nav>
  <main class="page">
    <div class="page-head">
      <h1>VM 인스턴스</h1>
      <span class="info">총 3개</span>
      <div class="actions">
        <button class="btn btn-secondary">↻ 새로고침</button>
        <button class="btn btn-primary">＋ 인스턴스 만들기</button>
      </div>
    </div>
    <section class="list">
      <div class="row">
        <div class="bar green"></div>
        <div>
          <div class="name">instance-prod-01 <span class="status running">실행 중</span></div>
          <div class="meta">e2-medium · 서울 <span class="mono">asia-northeast3-a</span> · 외부 IP <span class="mono">34.64.123.45</span></div>
        </div>
        <div class="cpu good">2.4%</div>
        <button class="ssh">SSH ▾</button>
      </div>
      <div class="row">
        <div class="bar yellow"></div>
        <div>
          <div class="name">instance-staging <span class="status starting">시작 중</span></div>
          <div class="meta">e2-small · 서울 <span class="mono">asia-northeast3-c</span> · 외부 IP <span class="mono">—</span></div>
        </div>
        <div class="cpu">—</div>
        <button class="ssh">SSH ▾</button>
      </div>
      <div class="row">
        <div class="bar gray"></div>
        <div>
          <div class="name">instance-dev-01 <span class="status stopped">중지됨</span></div>
          <div class="meta">e2-micro · 서울 <span class="mono">asia-northeast3-b</span> · 외부 IP <span class="mono">—</span></div>
        </div>
        <div class="cpu">—</div>
        <button class="ssh">SSH ▾</button>
      </div>
    </section>
  </main>
</div>
```
