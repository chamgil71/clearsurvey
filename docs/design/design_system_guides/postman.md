---
brand: Postman
brand_ko: 포스트맨
slug: postman
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - dev-tools

color_tone: warm
primary_color_hex: "#FF6C37"
primary_color_name: "Postman Orange"
mood:
  - 친근함
  - API 우선
  - 협업

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2012
last_major_revision: 2024
signature_keyword: "Orange 우주비행사 로고와 HTTP method 배지의 API 작업대 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#E5E5E5", "fg": "#212121", "fg_muted": "#7B7B7B", "accent": "#FF6C37" },
    "dark":  { "bg": "#212121", "surface": "#2D2D2D", "border": "#383838", "fg": "#FFFFFF", "fg_muted": "#9D9D9D", "accent": "#FF6C37" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#212121;color:#fff;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;border-radius:50%;background:var(--card-accent);position:relative;"><span style="position:absolute;left:5px;top:5px;width:8px;height:8px;background:#fff;border-radius:50%;"></span></span>
      <strong style="font-size:13px;">Postman</strong>
      <span style="margin-left:auto;font-size:11px;opacity:0.85;">acme-api</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="background:#22B12C;color:#fff;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;font-family:ui-monospace,monospace;">GET</span>
        <span style="font-size:11px;font-family:ui-monospace,monospace;color:var(--card-fg);flex:1;background:var(--card-surface);padding:4px 8px;border-radius:4px;border:1px solid var(--card-border);">/api/v1/users/me</span>
        <button style="background:var(--card-accent);color:#fff;border:0;border-radius:4px;padding:4px 10px;font-size:11px;font-weight:600;font-family:inherit;">Send</button>
      </div>
      <div style="display:flex;gap:8px;font-size:11px;border-bottom:1px solid var(--card-border);padding-bottom:4px;">
        <span style="color:var(--card-accent);font-weight:600;border-bottom:2px solid var(--card-accent);padding-bottom:4px;">Body</span>
        <span style="color:var(--card-fg-muted);">Headers</span>
        <span style="color:var(--card-fg-muted);">Auth</span>
      </div>
      <div style="background:#212121;color:#fff;border-radius:6px;padding:10px 12px;font-family:ui-monospace,monospace;font-size:10px;line-height:1.6;">
        <span style="color:#7B7B7B;">// 200 OK · 42ms</span><br/>
        {<br/>
        &nbsp;&nbsp;<span style="color:#9CDCFE;">"id"</span>: <span style="color:#CE9178;">"u_128"</span>,<br/>
        &nbsp;&nbsp;<span style="color:#9CDCFE;">"name"</span>: <span style="color:#CE9178;">"Mina"</span>,<br/>
        &nbsp;&nbsp;<span style="color:#9CDCFE;">"role"</span>: <span style="color:#CE9178;">"admin"</span><br/>
        }
      </div>
    </div>
  </div>

sources:
  - https://www.postman.com/
  - https://www.postman.com/about/
  - https://learning.postman.com/
---

### ① 브랜드 DNA
- **브랜드명**: Postman
- **한 줄 정체성**: API의 모든 단계(설계/테스트/문서/모니터링)를 다루는 API-first 워크스페이스
- **공식 디자인 철학**: "The API platform — for the next generation of software"
- **시그니처 요소 1개**: Postman Orange(#FF6C37) + 우주비행사 Postie 마스코트 + HTTP method별 컬러 배지(GET/POST/PUT/DELETE)

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, API 우선, 협업
- **무드 설명**: 흰 캔버스에 오렌지 액센트, JSON 응답이 다크 톤으로 강조된다. method 배지의 컬러 코딩이 시그니처.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 요청/응답 패널
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Postman Orange */
  --color-primary-50:  #FFF1EB;
  --color-primary-100: #FFD6C2;
  --color-primary-200: #FFB18F;
  --color-primary-300: #FF8B5C;
  --color-primary-400: #FF7A47;
  --color-primary-500: #FF6C37;  /* Postman Orange */
  --color-primary-600: #E55A2A;
  --color-primary-700: #B8451E;
  --color-primary-800: #8C3514;
  --color-primary-900: #5C220A;

  /* Secondary - Postman Black */
  --color-secondary-500: #212121;

  /* HTTP method 컬러 */
  --method-get:    #22B12C;
  --method-post:   #FFA500;
  --method-put:    #00B5E2;
  --method-delete: #DC2626;
  --method-patch:  #6B46C1;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #9D9D9D;
  --color-neutral-700:  #7B7B7B;
  --color-neutral-800:  #4D4D4D;
  --color-neutral-900:  #212121;
  --color-neutral-1000: #0F0F0F;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #22B12C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E0F4FF;
  --color-info-fg:    #00B5E2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(33,33,33,0.50);

  /* Text */
  --text-primary:    #212121;
  --text-secondary:  #7B7B7B;
  --text-tertiary:   #9D9D9D;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F5F5F5;
  --border-strong:  #C7C7C7;
  --border-focus:   #FF6C37;
}

[data-theme="dark"] {
  --bg-base: #212121;
  --bg-subtle: #2D2D2D;
  --bg-elevated: #383838;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — Postman 마케팅/앱 모두
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono", "Fira Code"
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 14px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.43 / 0
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
- **Container**: 도구는 fluid, 마케팅 max-width 1280px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 16px 32px rgba(255,108,55,0.18);
```

### ⑧ Iconography
- **스타일**: Outline (Postman 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 13px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input** (URL bar)
```css
.input {
  background: var(--bg-subtle);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
  font-size: 13px;
  font-family: ui-monospace, monospace;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(255,108,55,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / HTTP method (시그니처)**
```css
.method { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 700; line-height: 16px; color: #fff; font-family: ui-monospace, monospace; display: inline-flex; align-items: center; }
.method-get    { background: var(--method-get); }
.method-post   { background: var(--method-post); }
.method-put    { background: var(--method-put); }
.method-delete { background: var(--method-delete); }
.method-patch  { background: var(--method-patch); }

.tag { padding: 0 8px; height: 20px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 600; line-height: 20px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top + Sidebar)**
```css
.topnav { height: 44px; background: var(--color-secondary-500); color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 12px; }
.sidebar { width: 280px; background: var(--bg-subtle); border-right: 1px solid var(--border-default); padding: 12px 8px; height: 100vh; }
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
1. HTTP method 색을 임의 매핑 금지 — GET=green, POST=orange 등 산업 표준 보존
2. JSON 응답 영역에 sans-serif 폰트 사용 금지 — 모노 필수
3. brand orange를 destructive 액션에 사용 금지 — Send action에만
4. 다크 헤더 위 채도 높은 노랑 사용 금지
5. Postie 마스코트를 임의 색 변경 금지

### ⑫ 시그니처 적용 예시 (Request workspace)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #212121; background: #fff; }
  .topnav { height: 44px; background: #212121; color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 12px; font-size: 13px; }
  .topnav .logo { width: 22px; height: 22px; border-radius: 50%; background: #FF6C37; position: relative; }
  .topnav .logo::after { content:""; position: absolute; left: 6px; top: 6px; width: 10px; height: 10px; border-radius: 50%; background: #fff; }
  .layout { display: grid; grid-template-columns: 280px 1fr; height: calc(100vh - 44px); }
  .sidebar { background: #FAFAFA; border-right: 1px solid #E5E5E5; padding: 12px 8px; overflow: auto; }
  .sidebar h3 { font-size: 11px; color: #7B7B7B; text-transform: uppercase; letter-spacing: 0.04em; padding: 6px; margin: 4px 0; font-weight: 700; }
  .sidebar .req { display: grid; grid-template-columns: 50px 1fr; gap: 6px; padding: 6px 8px; border-radius: 4px; cursor: pointer; align-items: center; font-family: ui-monospace, monospace; font-size: 12px; }
  .sidebar .req:hover { background: #fff; }
  .sidebar .req.active { background: #FFF1EB; color: #B8451E; }
  .request { padding: 12px 16px; display: flex; flex-direction: column; gap: 10px; height: 100%; }
  .url-bar { display: flex; align-items: center; gap: 6px; background: #FAFAFA; border: 1px solid #E5E5E5; border-radius: 4px; padding: 4px; }
  .url-bar select { background: #22B12C; color: #fff; border: 0; border-radius: 3px; padding: 6px 10px; font-weight: 700; font-family: ui-monospace, monospace; font-size: 12px; }
  .url-bar input { flex: 1; background: transparent; border: 0; outline: none; padding: 6px; font-size: 13px; font-family: ui-monospace, monospace; color: #212121; }
  .url-bar button { background: #FF6C37; color: #fff; border: 0; border-radius: 3px; padding: 6px 16px; font-weight: 600; font-size: 12px; cursor: pointer; }
  .tabs { display: flex; gap: 0; border-bottom: 1px solid #E5E5E5; }
  .tabs .tab { padding: 8px 14px; font-size: 13px; color: #7B7B7B; cursor: pointer; }
  .tabs .tab.active { color: #FF6C37; border-bottom: 2px solid #FF6C37; font-weight: 600; }
  .response { background: #212121; color: #fff; border-radius: 6px; padding: 14px 16px; font-family: ui-monospace, monospace; font-size: 12px; line-height: 1.6; flex: 1; }
  .resp-meta { display: flex; gap: 8px; align-items: center; padding: 6px 0; font-size: 11px; color: #7B7B7B; }
  .resp-meta strong { color: #22B12C; font-weight: 700; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Postman</strong>
  <span style="opacity:0.85;">/ acme-api</span>
</header>

<div class="layout">
  <aside class="sidebar">
    <h3>Collections · acme-api</h3>
    <div class="req active"><span class="method method-get">GET</span><span style="font-size:11px;">/api/v1/users/me</span></div>
    <div class="req"><span class="method method-post">POST</span><span style="font-size:11px;">/api/v1/users</span></div>
    <div class="req"><span class="method method-put">PUT</span><span style="font-size:11px;">/api/v1/users/:id</span></div>
    <div class="req"><span class="method method-delete">DELETE</span><span style="font-size:11px;">/api/v1/users/:id</span></div>
    <div class="req"><span class="method method-patch">PATCH</span><span style="font-size:11px;">/api/v1/profile</span></div>
  </aside>
  <main class="request">
    <div class="url-bar">
      <select><option>GET</option></select>
      <input value="https://api.acme.com/v1/users/me"/>
      <button>Send</button>
    </div>
    <div class="tabs">
      <div class="tab">Params</div>
      <div class="tab">Headers</div>
      <div class="tab">Auth</div>
      <div class="tab active">Body</div>
      <div class="tab">Tests</div>
    </div>
    <div class="resp-meta">
      <strong>200 OK</strong>
      <span>·</span>
      <span>42 ms</span>
      <span>·</span>
      <span>1.2 KB</span>
    </div>
    <div class="response">
<span style="color:#7B7B7B;">// Response body</span><br/>
{<br/>
&nbsp;&nbsp;<span style="color:#9CDCFE;">"id"</span>: <span style="color:#CE9178;">"u_128"</span>,<br/>
&nbsp;&nbsp;<span style="color:#9CDCFE;">"name"</span>: <span style="color:#CE9178;">"Mina Park"</span>,<br/>
&nbsp;&nbsp;<span style="color:#9CDCFE;">"role"</span>: <span style="color:#CE9178;">"admin"</span>,<br/>
&nbsp;&nbsp;<span style="color:#9CDCFE;">"created_at"</span>: <span style="color:#CE9178;">"2025-04-12T09:14:22Z"</span><br/>
}
    </div>
  </main>
</div>
```
