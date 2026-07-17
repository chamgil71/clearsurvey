---
brand: Plaid
brand_ko: 플레이드
slug: plaid
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - infra
  - dev-tools

color_tone: neutral
primary_color_hex: "#111111"
primary_color_name: "Plaid Black"
mood:
  - 인프라
  - 모노톤
  - 개발자친화

font_category: sans-serif
font_primary: Plaid Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2013
last_major_revision: 2024
signature_keyword: "검정·흰 모노 + 미세한 그리드 + 개발자 SDK 톤의 금융 인프라 미니멀"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#fff;color:#111;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid #EAEAEA;">
      <strong style="font-size:13px;font-weight:700;letter-spacing:-0.02em;">Plaid</strong>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:6px;justify-content:center;">
      <div style="font-family:'IBM Plex Mono','SF Mono',Consolas,monospace;font-size:9px;line-height:1.55;color:#111;background:#F5F5F5;border:1px solid #EAEAEA;padding:8px 10px;border-radius:6px;">
        <div style="color:#888;">// Link initialize</div>
        <div><span style="color:#9F4D8C;">const</span> handler = <span style="color:#9F4D8C;">Plaid</span>.create(&#123;</div>
        <div>  <span style="color:#196E5E;">token</span>: linkToken,</div>
        <div>  <span style="color:#196E5E;">onSuccess</span>: ...</div>
        <div>&#125;);</div>
      </div>
    </div>
    <div style="padding:6px 12px;border-top:1px solid #EAEAEA;display:flex;align-items:center;gap:4px;">
      <span style="width:6px;height:6px;border-radius:50%;background:#19A864;"></span>
      <span style="font-size:9px;color:#666;font-weight:600;">PRODUCTION · OK</span>
      <span style="font-size:9px;color:#888;margin-left:auto;font-family:'IBM Plex Mono',monospace;font-variant-numeric:tabular-nums;">12,482 calls/h</span>
    </div>
  </div>

sources:
  - https://plaid.com/
  - https://plaid.com/docs/
---

### ① 브랜드 DNA
- **브랜드명**: Plaid
- **한 줄 정체성**: 미국 발 금융 데이터 연결 인프라 — 은행·앱 사이의 API 다리
- **공식 디자인 철학**: "Unlock financial freedom for everyone" — 모노톤 SDK 미니멀
- **시그니처 요소 1개**: 검정 헤드라인 + 흰 캔버스 + 미세한 그리드 패턴 + 모노스페이스 코드 톤. 컨슈머 네오뱅크들의 컬러풀 톤과 정반대의 인프라 회사다움

### ② 톤 & 무드
- **핵심 키워드 3개**: 인프라, 모노톤, 개발자친화
- **무드 설명**: 흰 캔버스 + 검정 텍스트. 강조는 미니멀한 라임/보라/시안 액센트 (Mint, Plum, Sky). 미세한 그리드 패턴 배경과 코드 블록이 정체성을 형성.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Plaid Black */
  --color-primary-50:  #F5F5F5;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #BFBFBF;
  --color-primary-300: #8A8A8A;
  --color-primary-400: #4A4A4A;
  --color-primary-500: #111111;   /* Plaid Black */
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Plaid Mint / Plum / Sky (액센트 트리오) */
  --color-mint-500:  #74D6BA;
  --color-plum-500:  #9F4D8C;
  --color-sky-500:   #98C7E1;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #EAEAEA;
  --color-neutral-200:  #D9D9D9;
  --color-neutral-300:  #BBBBBB;
  --color-neutral-500:  #888888;
  --color-neutral-700:  #444444;
  --color-neutral-800:  #2A2A2A;
  --color-neutral-900:  #111111;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4EB;
  --color-success-fg: #196E5E;
  --color-warning-bg: #FFF5DA;
  --color-warning-fg: #8C6A00;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #B12E1F;
  --color-info-bg:    #E5F1FA;
  --color-info-fg:    #2C6BA0;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(17,17,17,0.50);

  /* Text */
  --text-primary:    #111111;
  --text-secondary:  #444444;
  --text-tertiary:   #888888;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #BBBBBB;

  /* Border */
  --border-default: #EAEAEA;
  --border-subtle:  #F5F5F5;
  --border-strong:  #D9D9D9;
  --border-focus:   #111111;
}

[data-theme="dark"] {
  --bg-base: #0A0A0A;
  --bg-subtle: #141414;
  --bg-elevated: #1F1F1F;
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.78);
  --text-tertiary: rgba(255,255,255,0.55);
  --border-default: rgba(255,255,255,0.10);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (자체 Plaid Inter)
  - 코드: IBM Plex Mono / SF Mono 폴백
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 72px / 700 / 1.05 / -0.03em
  - H1: 40px / 700 / 1.15 / -0.02em
  - H2: 26px / 700 / 1.25 / -0.01em
  - H3: 18px / 600 / 1.35 / 0
  - Body Large: 17px / 400 / 1.6 / 0
  - Body: 15px / 400 / 1.55 / 0
  - Body Small: 13px / 500 / 1.45 / 0
  - Caption: 12px / 600 / 1.3 / 0.02em
  - Code: 14px / 400 / 1.55 mono

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 36px;
  --space-2xl: 56px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(17,17,17,0.04);
--shadow-md: 0 4px 12px rgba(17,17,17,0.06);
--shadow-lg: 0 12px 24px rgba(17,17,17,0.08);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, 'Pretendard', sans-serif; border-radius: 6px; padding: 12px 22px; border: 0; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: background 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-neutral-700); }
.btn-secondary { background: #fff; color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-arrow { background: var(--color-primary-500); color: #fff; padding-right: 18px; }
.btn-arrow::after { content:'→'; margin-left: 4px; }
```

**Input**
```css
.input { background: #fff; border: 1px solid var(--border-strong); border-radius: 6px; padding: 11px 14px; color: var(--text-primary); font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(17,17,17,0.10); }
.input-code { font-family: 'IBM Plex Mono', 'SF Mono', Consolas, monospace; font-variant-numeric: tabular-nums; }
```

**Card (Doc + Code block)**
```css
.card { background: #fff; border: 1px solid var(--border-default); border-radius: 10px; padding: 24px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-grid { background: linear-gradient(0deg, rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px); background-size: 32px 32px; }
.code { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 6px; padding: 14px 16px; font: 400 14px/1.55 'IBM Plex Mono', 'SF Mono', monospace; color: var(--text-primary); overflow-x: auto; }
.code .comment { color: var(--text-tertiary); }
.code .keyword { color: var(--color-plum-500); }
.code .string  { color: var(--color-success-fg); }
.code .func    { color: var(--color-info-fg); }
.api-row { display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: var(--bg-subtle); border-radius: 6px; font: 500 13px/1 'IBM Plex Mono', monospace; }
.api-row .method { padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 11px; letter-spacing: 0.04em; }
.api-row .method.get { background: var(--color-mint-500); color: #053D33; }
.api-row .method.post { background: var(--color-info-bg); color: var(--color-info-fg); }
.api-row .path { color: var(--text-primary); }
.api-row .status { margin-left: auto; color: var(--color-success-fg); font-weight: 700; }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 4px; font: 600 11px/1.4 inherit; letter-spacing: 0.02em; }
.tag-mint    { background: rgba(116,214,186,0.20); color: var(--color-success-fg); }
.tag-plum    { background: rgba(159,77,140,0.16); color: var(--color-plum-500); }
.tag-sky     { background: rgba(152,199,225,0.30); color: var(--color-info-fg); }
.tag-prod    { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-sandbox { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.tag-beta    { background: var(--color-primary-500); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { background: #fff; padding: 16px 24px; display: flex; align-items: center; gap: 28px; border-bottom: 1px solid var(--border-default); }
.topbar .brand { font: 700 22px/1 inherit; letter-spacing: -0.02em; }
.topbar .nav { display: flex; gap: 24px; font: 500 14px/1 inherit; color: var(--text-secondary); }
.topbar .nav .a:hover { color: var(--text-primary); }
.topbar .nav .a.active { color: var(--text-primary); font-weight: 600; }
.topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; font: 500 13px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 컬러풀 그라데이션을 메인 비주얼로 사용 금지 — 모노톤 인프라 톤
2. 코드 블록 생략 금지 — 개발자 친화 정체성
3. 액센트 트리오(Mint/Plum/Sky) 외 컬러 추가 금지
4. 라운드 풀필 카드 금지 — 6~10px Soft
5. 본문에 모노스페이스 사용 금지 — 코드/API 명세만

### ⑫ 시그니처 적용 예시 (Docs landing)
```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', sans-serif; background: #fff; color: #111; }
  .topbar { padding: 16px 24px; display: flex; align-items: center; gap: 28px; border-bottom: 1px solid #EAEAEA; }
  .topbar .brand { font: 700 26px/1 inherit; letter-spacing: -0.02em; }
  .topbar .nav { display: flex; gap: 26px; font: 500 14px/1 inherit; color: #444; }
  .topbar .nav .a.active { color: #111; font-weight: 600; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; font: 500 13px/1 inherit; }
  .topbar .btn { background: #111; color: #fff; font: 600 13px/1 inherit; padding: 9px 16px; border: 0; border-radius: 6px; cursor: pointer; }
  .hero { padding: 80px 24px 56px; max-width: 1200px; margin: 0 auto; position: relative; background-image: linear-gradient(0deg, rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px); background-size: 32px 32px; }
  .hero .tag { display: inline-flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #EAEAEA; padding: 4px 10px; border-radius: 9999px; font: 600 12px/1 inherit; color: #444; margin-bottom: 24px; }
  .hero .tag .dot { width: 8px; height: 8px; border-radius: 50%; background: #74D6BA; }
  .hero h1 { margin: 0 0 18px; font: 700 56px/1.05 inherit; letter-spacing: -0.03em; max-width: 720px; }
  .hero h1 em { font-style: normal; color: #9F4D8C; }
  .hero p { margin: 0 0 28px; font: 400 18px/1.55 inherit; color: #444; max-width: 580px; }
  .hero .actions { display: flex; gap: 10px; }
  .hero .btn { font: 600 14px/1 inherit; padding: 13px 22px; border-radius: 6px; border: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
  .hero .btn-black { background: #111; color: #fff; }
  .hero .btn-line { background: #fff; color: #111; border: 1px solid #D9D9D9; }
  .grid { max-width: 1200px; margin: 56px auto; padding: 0 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .card { background: #fff; border: 1px solid #EAEAEA; border-radius: 10px; padding: 24px; }
  .card h3 { margin: 0 0 8px; font: 600 18px/1.3 inherit; letter-spacing: -0.005em; }
  .card .p { font: 400 14px/1.5 inherit; color: #444; margin: 0 0 14px; }
  .code { background: #F5F5F5; border: 1px solid #EAEAEA; border-radius: 6px; padding: 14px 16px; font: 400 13px/1.6 'IBM Plex Mono', 'SF Mono', monospace; color: #111; overflow-x: auto; }
  .code .comment { color: #888; }
  .code .keyword { color: #9F4D8C; }
  .code .string  { color: #196E5E; }
  .code .func    { color: #2C6BA0; }
  .api-card .row { display: flex; align-items: center; gap: 10px; padding: 11px 14px; background: #F5F5F5; border-radius: 6px; font: 500 13px/1 'IBM Plex Mono', monospace; margin-bottom: 6px; }
  .api-card .method { padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 11px; letter-spacing: 0.04em; }
  .api-card .method.post { background: #E5F1FA; color: #2C6BA0; }
  .api-card .method.get { background: rgba(116,214,186,0.30); color: #196E5E; }
  .api-card .status { margin-left: auto; color: #196E5E; font-weight: 700; }
</style>

<header class="topbar">
  <div class="brand">Plaid</div>
  <div class="nav">
    <span class="a active">Docs</span>
    <span class="a">Products</span>
    <span class="a">Solutions</span>
    <span class="a">Pricing</span>
    <span class="a">Status</span>
  </div>
  <div class="right">
    <span>Sign in</span>
    <button class="btn">Contact sales →</button>
  </div>
</header>

<section class="hero">
  <span class="tag"><span class="dot"></span> Production stable</span>
  <h1>Connect users to <em>their financial accounts</em>, in minutes.</h1>
  <p>Plaid Link은 사용자가 은행 계좌를 안전하게 연결할 수 있게 하는 가장 빠른 방법입니다.</p>
  <div class="actions">
    <button class="btn btn-black">Get API keys →</button>
    <button class="btn btn-line">Read the docs</button>
  </div>
</section>

<section class="grid">
  <div class="card">
    <h3>Quickstart · Initialize Link</h3>
    <p class="p">SDK 한 번 로드 후 토큰만 넘기면 Link가 시작됩니다.</p>
    <div class="code">
<span class="comment">// 1. fetch link_token from your server</span>
<span class="keyword">const</span> <span class="func">handler</span> = <span class="func">Plaid</span>.<span class="func">create</span>({
  <span class="func">token</span>: linkToken,
  <span class="func">onSuccess</span>: (publicToken, metadata) => {
    <span class="comment">// exchange public_token</span>
  }
});
<span class="func">handler</span>.<span class="func">open</span>();
    </div>
  </div>
  <div class="card api-card">
    <h3>Endpoints</h3>
    <p class="p">자주 쓰이는 Plaid Item API 4종.</p>
    <div class="row"><span class="method post">POST</span><span class="path">/link/token/create</span><span class="status">200 OK</span></div>
    <div class="row"><span class="method post">POST</span><span class="path">/item/public_token/exchange</span><span class="status">200 OK</span></div>
    <div class="row"><span class="method get">GET</span><span class="path">/accounts/balance/get</span><span class="status">200 OK</span></div>
    <div class="row"><span class="method get">GET</span><span class="path">/transactions/sync</span><span class="status">200 OK</span></div>
  </div>
</section>
```
