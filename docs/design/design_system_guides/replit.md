---
brand: Replit
brand_ko: 리플릿
slug: replit
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - dev-tools
  - creative-tools

color_tone: warm
primary_color_hex: "#F26207"
primary_color_name: "Replit Orange"
mood:
  - 친근함
  - 실시간 코딩
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
  - dark
  - light

released_year: 2016
last_major_revision: 2024
signature_keyword: "다크 IDE 캔버스 위 오렌지 액센트와 AI 친화 협업 코딩 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F9FC", "border": "#E1E6EB", "fg": "#0E1525", "fg_muted": "#5C6275", "accent": "#F26207" },
    "dark":  { "bg": "#0E1525", "surface": "#1C2333", "border": "#2B313F", "fg": "#F5F9FC", "fg_muted": "#A4ABB7", "accent": "#F26207" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);border-radius:4px;display:grid;place-items:center;color:#fff;font-weight:800;font-size:11px;">▶</span>
      <strong style="font-size:13px;">Replit</strong>
      <span style="margin-left:auto;background:var(--card-surface);color:#0CCE6B;padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:600;">● Live</span>
    </div>
    <div style="display:grid;grid-template-columns:80px 1fr;height:100%;">
      <div style="background:var(--card-bg);border-right:1px solid var(--card-border);padding:8px;display:flex;flex-direction:column;gap:4px;font-size:10px;color:var(--card-fg-muted);">
        <div style="color:var(--card-fg);font-weight:600;padding:4px;">Files</div>
        <div style="padding:2px 4px;color:var(--card-fg);background:var(--card-surface);border-radius:3px;">📄 main.py</div>
        <div style="padding:2px 4px;">📄 utils.py</div>
        <div style="padding:2px 4px;">📁 tests</div>
      </div>
      <div style="background:var(--card-bg);font-family:ui-monospace,'JetBrains Mono',monospace;font-size:11px;line-height:1.6;padding:10px 12px;color:var(--card-fg);">
        <span style="color:#5C6275;">1</span>&nbsp; <span style="color:#FF8B83;">def</span> <span style="color:#9CDCFE;">greet</span>(<span style="color:#FFC15B;">name</span>):<br/>
        <span style="color:#5C6275;">2</span>&nbsp;&nbsp;&nbsp; <span style="color:#FF8B83;">return</span> <span style="color:#A8E5A0;">f"Hello, {name}!"</span><br/>
        <span style="color:#5C6275;">3</span><br/>
        <span style="color:#5C6275;">4</span>&nbsp; print(greet(<span style="color:#A8E5A0;">"Replit"</span>))<br/>
        <div style="margin-top:10px;background:var(--card-surface);border-radius:4px;padding:8px 10px;font-size:10px;border-left:3px solid var(--card-accent);">
          <span style="color:var(--card-fg-muted);">$ python main.py</span><br/>
          <span style="color:#0CCE6B;">Hello, Replit!</span>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://replit.com/
  - https://replit.com/about
  - https://docs.replit.com/
---

### ① 브랜드 DNA
- **브랜드명**: Replit
- **한 줄 정체성**: 브라우저에서 즉시 시작하는, AI와 함께 코딩하는 협업 IDE
- **공식 디자인 철학**: "The fastest way to build apps — code with AI, ship instantly"
- **시그니처 요소 1개**: Replit Orange(#F26207) 재생(▶) 마크 + 다크 IDE 캔버스(#0E1525) + multiplayer 협업 cursor

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 실시간 코딩, 협업
- **무드 설명**: 다크 IDE 캔버스가 기본. 강조는 Orange 한 색. 마치 노트북에 코드 한 줄 적는 듯한 가벼운 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 코드 + 콘솔
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Replit Orange */
  --color-primary-50:  #FEF1E5;
  --color-primary-100: #FCDFC2;
  --color-primary-200: #FAB985;
  --color-primary-300: #F89249;
  --color-primary-400: #F47620;
  --color-primary-500: #F26207;  /* Replit Orange */
  --color-primary-600: #D55404;
  --color-primary-700: #A84203;
  --color-primary-800: #7A3002;
  --color-primary-900: #4D1D01;

  /* Secondary - Replit Cyan accent */
  --color-secondary-500: #69D7E2;

  /* Neutral - Replit dark canvas */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F9FC;
  --color-neutral-100:  #E1E6EB;
  --color-neutral-200:  #C2CAD3;
  --color-neutral-300:  #A4ABB7;
  --color-neutral-500:  #6E7682;
  --color-neutral-700:  #5C6275;
  --color-neutral-800:  #2B313F;
  --color-neutral-900:  #1C2333;
  --color-neutral-1000: #0E1525;     /* canvas */

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #0CCE6B;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #FFC15B;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FF8B83;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #69D7E2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F9FC;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,21,37,0.50);

  /* Text */
  --text-primary:    #0E1525;
  --text-secondary:  #5C6275;
  --text-tertiary:   #A4ABB7;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C2CAD3;

  /* Border */
  --border-default: #E1E6EB;
  --border-subtle:  #F0F2F5;
  --border-strong:  #C2CAD3;
  --border-focus:   #F26207;
}

[data-theme="dark"] {
  /* Replit IDE 시그니처 다크 */
  --bg-base: #0E1525;
  --bg-subtle: #1C2333;
  --bg-elevated: #2B313F;
  --text-primary: #F5F9FC;
  --text-secondary: #A4ABB7;
  --border-default: #1C2333;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono"
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
- **Container**: IDE는 fluid

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
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-xl: 0 16px 32px rgba(242,98,7,0.18);
```

### ⑧ Iconography
- **스타일**: Outline (Replit 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 13px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 12px;
  height: 30px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 4px 8px; font-size: 13px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(242,98,7,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: 600; line-height: 14px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-live    { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-live::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
```

**Navigation**
```css
.topnav { height: 44px; background: var(--color-neutral-1000); color: var(--color-neutral-50); display: flex; align-items: center; padding: 0 14px; gap: 10px; border-bottom: 1px solid var(--color-neutral-900); }
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
1. brand orange를 본문 텍스트에 사용 금지 — 액션/신호에만
2. 코드 영역에 sans-serif 폰트 사용 금지
3. 다크 캔버스에서 풀 white(#FFF) 텍스트 금지 — #F5F9FC까지만
4. 협업 cursor 색을 brand orange로 통일 금지 — multiplayer 다양성 보존
5. AI agent UI에 brand 색을 그라데이션으로 분산 사용 금지

### ⑫ 시그니처 적용 예시 (IDE dark)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #F5F9FC; background: #0E1525; }
  .topnav { height: 44px; background: #0E1525; color: #F5F9FC; display: flex; align-items: center; padding: 0 14px; gap: 10px; border-bottom: 1px solid #1C2333; font-size: 13px; }
  .topnav .logo { width: 22px; height: 22px; background: #F26207; border-radius: 4px; display: grid; place-items: center; color: #fff; font-weight: 800; font-size: 12px; }
  .layout { display: grid; grid-template-columns: 200px 1fr 240px; height: calc(100vh - 44px); }
  .files { background: #0E1525; border-right: 1px solid #1C2333; padding: 8px; }
  .files h3 { font-size: 11px; color: #A4ABB7; text-transform: uppercase; letter-spacing: 0.04em; padding: 6px; margin: 0; font-weight: 600; }
  .files .item { padding: 4px 8px; font-size: 12px; color: #A4ABB7; cursor: pointer; border-radius: 3px; }
  .files .item:hover { background: #1C2333; color: #F5F9FC; }
  .files .item.active { background: #1C2333; color: #F5F9FC; font-weight: 500; }
  .editor { background: #0E1525; padding: 12px 16px; font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.7; }
  .editor .line { display: grid; grid-template-columns: 32px 1fr; gap: 8px; }
  .editor .ln { color: #5C6275; text-align: right; user-select: none; }
  .editor .k { color: #FF8B83; }
  .editor .f { color: #9CDCFE; }
  .editor .v { color: #FFC15B; }
  .editor .s { color: #A8E5A0; }
  .editor .c { color: #5C6275; }
  .console { background: #1C2333; border-radius: 6px; padding: 10px 12px; margin-top: 12px; border-left: 3px solid #F26207; font-size: 12px; color: #F5F9FC; }
  .console .prompt { color: #A4ABB7; }
  .console .out { color: #0CCE6B; }
  .agent { background: #0E1525; border-left: 1px solid #1C2333; padding: 12px; }
  .agent h3 { font-size: 11px; color: #A4ABB7; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 8px; font-weight: 600; }
  .agent .msg { background: #1C2333; border-radius: 6px; padding: 8px 10px; margin-bottom: 6px; font-size: 12px; line-height: 1.5; color: #F5F9FC; }
  .agent .msg.ai { border-left: 3px solid #F26207; }
  .agent .input { background: #1C2333; border: 1px solid #2B313F; border-radius: 6px; padding: 8px 10px; color: #F5F9FC; font-size: 12px; margin-top: auto; }
</style>

<header class="topnav">
  <div class="logo">▶</div>
  <strong>my-app</strong>
  <span style="color:#A4ABB7; font-size:12px;">Python · main</span>
  <button class="btn btn-primary" style="margin-left:auto; background:#F26207; color:#fff; border:0; border-radius:4px; padding:5px 14px; font-size:12px; font-weight:600;">Run ▶</button>
</header>

<div class="layout">
  <aside class="files">
    <h3>Files</h3>
    <div class="item active">📄 main.py</div>
    <div class="item">📄 utils.py</div>
    <div class="item">📁 tests</div>
    <div class="item">📄 requirements.txt</div>
  </aside>
  <main class="editor">
    <div class="line"><span class="ln">1</span><span><span class="k">def</span> <span class="f">greet</span>(<span class="v">name</span>):</span></div>
    <div class="line"><span class="ln">2</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s">f"Hello, {name}!"</span></span></div>
    <div class="line"><span class="ln">3</span><span></span></div>
    <div class="line"><span class="ln">4</span><span>print(greet(<span class="s">"Replit"</span>))</span></div>
    <div class="console">
      <div class="prompt">$ python main.py</div>
      <div class="out">Hello, Replit!</div>
    </div>
  </main>
  <aside class="agent">
    <h3>AI Agent</h3>
    <div class="msg">main.py에 인사 함수가 정의되어 있어요. 추가로 도움이 필요하면 알려주세요.</div>
    <div class="msg ai">테스트 케이스도 작성해드릴까요?</div>
    <div class="input" style="margin-top:8px;">코드를 어떻게 도와드릴까요?</div>
  </aside>
</div>
```
