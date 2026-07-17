---
brand: Gemini
brand_ko: 제미나이
slug: gemini
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - ai
  - productivity

color_tone: mixed
primary_color_hex: "#4285F4"
primary_color_name: "Gemini Spectrum Blue"
mood:
  - 우주적
  - 다채
  - 부드러움

font_category: sans-serif
font_primary: Google Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - glassmorphism
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2023
last_major_revision: 2025
signature_keyword: "스펙트럼 블루-핑크-퍼플 그라데이션의 Google AI"

card_tokens: |
  {
    "light": { "bg": "#F8F9FB", "surface": "#FFFFFF", "border": "#E8EAED", "fg": "#1F1F1F", "fg_muted": "#5F6368", "accent": "#4285F4" },
    "dark":  { "bg": "#131314", "surface": "#282A2C", "border": "#3C4043", "fg": "#E8EAED", "fg_muted": "#BDC1C6", "accent": "#8AB4F8" }
  }

hero_html: |
  <div style="font-family:'Google Sans',Roboto,-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.005em;">
    <div style="padding:14px;display:flex;align-items:center;gap:8px;">
      <div style="width:24px;height:24px;background:conic-gradient(from 0deg,#8AB4F8,#C09BE0,#F08A95,#FBD45C,#8AB4F8);border-radius:9999px;mask:radial-gradient(circle,transparent 35%,#000 36%);-webkit-mask:radial-gradient(circle,transparent 35%,#000 36%);"></div>
      <strong style="font-size:16px;font-weight:600;color:var(--card-fg);letter-spacing:-0.02em;">Gemini</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">⚙</span>
    </div>
    <div style="padding:8px 14px;display:flex;flex-direction:column;gap:10px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:18px;padding:14px;font-size:13px;font-weight:500;line-height:1.5;color:var(--card-fg);">React 19에서 useTransition은 어떻게 동작해?</div>
      <div style="background:linear-gradient(135deg,rgba(138,180,248,0.14) 0%,rgba(192,155,224,0.14) 50%,rgba(240,138,149,0.14) 100%);border:1px solid var(--card-border);border-radius:18px;padding:14px;font-size:13px;line-height:1.6;color:var(--card-fg);">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <div style="width:14px;height:14px;background:conic-gradient(from 0deg,#8AB4F8,#C09BE0,#F08A95,#FBD45C,#8AB4F8);border-radius:9999px;mask:radial-gradient(circle,transparent 35%,#000 36%);-webkit-mask:radial-gradient(circle,transparent 35%,#000 36%);"></div>
          <span style="font:600 11px/1 inherit;color:var(--card-fg-muted);">Gemini</span>
        </div>
        React 19의 <code style="background:#3C4043;padding:1px 4px;border-radius:3px;font-family:'Roboto Mono',monospace;font-size:12px;">useTransition</code>은 우선순위가 낮은 상태 업데이트를...
      </div>
    </div>
    <div style="padding:10px 14px 14px;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:24px;padding:10px 14px;font-size:13px;color:var(--card-fg-muted);display:flex;align-items:center;gap:8px;">
        <span style="flex:1;">메시지를 입력하세요...</span>
        <div style="width:30px;height:30px;background:linear-gradient(135deg,#8AB4F8,#C09BE0);border-radius:9999px;display:grid;place-items:center;color:#131314;font-weight:700;">↑</div>
      </div>
    </div>
  </div>

sources:
  - https://gemini.google.com/
  - https://deepmind.google/technologies/gemini/
  - https://blog.google/products/gemini/
---

### ① 브랜드 DNA
- **브랜드명**: Gemini (Google)
- **한 줄 정체성**: Google DeepMind의 멀티모달 LLM 어시스턴트 — Bard의 후신, Workspace 통합형 AI
- **공식 디자인 철학**: "Helpful, Bold, Optimistic" — 부드럽고 다채롭게 정보를 전달
- **시그니처 요소 1개**: Blue → Purple → Pink → Yellow를 순환하는 스펙트럼 그라데이션 별(star) 로고와 답변 카드 보더. Material 단일 인디고와 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 우주적, 다채, 부드러움
- **무드 설명**: Material 3 expressive 베이스 + Gemini만의 스펙트럼 그라데이션. 답변 영역에는 옅은 그라데이션 보더/배경, 인터랙션은 부드러운 진입 모션.
- **비주얼 스타일**: 글래스모피즘 (그라데이션 보더) + 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (16~24px) — Material 3 대형 라운드
- **평면성**: Layered — 카드/메시지 간 미세한 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Gemini Blue (스펙트럼 시작점, 다크 위 가독성 위해 라이트 톤으로 시프트) */
  --color-primary-50:  #0F1B2D;
  --color-primary-100: #15273F;
  --color-primary-200: #1B3458;
  --color-primary-300: #2A5599;
  --color-primary-400: #4285F4;
  --color-primary-500: #8AB4F8;   /* Spectrum Blue (dark surface 기준) */
  --color-primary-600: #AECBFA;
  --color-primary-700: #C6DAFC;
  --color-primary-800: #D2E3FC;
  --color-primary-900: #E8F0FE;

  /* Secondary - Spectrum Purple/Pink/Yellow (다크 위 밝게 보정) */
  --color-spectrum-1: #8AB4F8;
  --color-spectrum-2: #C09BE0;
  --color-spectrum-3: #F08A95;
  --color-spectrum-4: #FBD45C;

  /* Neutral - Material You inspired (다크 반전 램프) */
  --color-neutral-0:    #131314;
  --color-neutral-50:   #1B1B1D;
  --color-neutral-100:  #1E1F22;
  --color-neutral-200:  #282A2C;
  --color-neutral-300:  #3C4043;
  --color-neutral-500:  #5F6368;
  --color-neutral-700:  #9AA0A6;
  --color-neutral-800:  #BDC1C6;
  --color-neutral-900:  #E8EAED;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #16261B;
  --color-success-fg: #81C995;
  --color-warning-bg: #2A2113;
  --color-warning-fg: #FDD663;
  --color-error-bg:   #2D1A17;
  --color-error-fg:   #F28B82;
  --color-info-bg:    #15273F;
  --color-info-fg:    #8AB4F8;

  /* Surface */
  --bg-base:     #131314;
  --bg-subtle:   #1E1F22;
  --bg-elevated: #282A2C;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #E8EAED;
  --text-secondary:  #BDC1C6;
  --text-tertiary:   #9AA0A6;
  --text-on-primary: #131314;
  --text-disabled:   #5F6368;

  /* Border */
  --border-default: #3C4043;
  --border-subtle:  #282A2C;
  --border-strong:  #5F6368;
  --border-focus:   #8AB4F8;

  /* Gemini gradient */
  --gradient-spectrum: linear-gradient(135deg, #8AB4F8 0%, #C09BE0 50%, #F08A95 100%);
  --gradient-spectrum-soft: linear-gradient(135deg, rgba(138,180,248,0.14) 0%, rgba(192,155,224,0.14) 50%, rgba(240,138,149,0.14) 100%);
  --gradient-conic: conic-gradient(from 0deg, #8AB4F8, #C09BE0, #F08A95, #FBD45C, #8AB4F8);
}

[data-theme="light"] {
  /* Primary - Gemini Blue (스펙트럼 시작점) */
  --color-primary-50:  #E8F0FE;
  --color-primary-100: #D2E3FC;
  --color-primary-200: #AECBFA;
  --color-primary-300: #8AB4F8;
  --color-primary-400: #669DF6;
  --color-primary-500: #4285F4;   /* Spectrum Blue */
  --color-primary-600: #1A73E8;
  --color-primary-700: #1967D2;
  --color-primary-800: #185ABC;
  --color-primary-900: #174EA6;

  /* Secondary - Spectrum Purple/Pink/Yellow */
  --color-spectrum-1: #4285F4;
  --color-spectrum-2: #9B72CB;
  --color-spectrum-3: #D96570;
  --color-spectrum-4: #F4B400;

  /* Neutral - Material You inspired */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #F1F3F4;
  --color-neutral-200:  #E8EAED;
  --color-neutral-300:  #DADCE0;
  --color-neutral-500:  #9AA0A6;
  --color-neutral-700:  #5F6368;
  --color-neutral-800:  #3C4043;
  --color-neutral-900:  #1F1F1F;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #1E8E3E;
  --color-warning-bg: #FEF7E0;
  --color-warning-fg: #B25800;
  --color-error-bg:   #FCE8E6;
  --color-error-fg:   #D93025;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #1A73E8;

  /* Surface */
  --bg-base:     #F8F9FB;
  --bg-subtle:   #F1F3F4;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(31,31,31,0.50);

  /* Text */
  --text-primary:    #1F1F1F;
  --text-secondary:  #3C4043;
  --text-tertiary:   #5F6368;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #9AA0A6;

  /* Border */
  --border-default: #E8EAED;
  --border-subtle:  #F1F3F4;
  --border-strong:  #DADCE0;
  --border-focus:   #4285F4;

  /* Gemini gradient */
  --gradient-spectrum: linear-gradient(135deg, #4285F4 0%, #9B72CB 50%, #D96570 100%);
  --gradient-spectrum-soft: linear-gradient(135deg, rgba(66,133,244,0.08) 0%, rgba(155,114,203,0.08) 50%, rgba(217,101,112,0.08) 100%);
  --gradient-conic: conic-gradient(from 0deg, #4285F4, #9B72CB, #D96570, #F4B400, #4285F4);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Google Sans** (자체) — 폴백 Roboto, -apple-system
  - 한글: Noto Sans KR / Pretendard 폴백
  - 코드: Roboto Mono / Source Code Pro
- **위계**:
  - Display: 36px / 500 / 1.2 / -0.02em
  - H1: 28px / 500 / 1.25 / -0.015em
  - H2: 22px / 500 / 1.3 / -0.01em
  - H3: 18px / 500 / 1.35 / -0.005em
  - Body Large: 16px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 13px / 500 / 1.45 / 0
  - Caption: 11px / 600 / 1.4 / 0.02em
  - Code: 13px / 400 / 1.5 Roboto Mono

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
- **Container**: max-width 720px (대화창), 1200px (랜딩)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 20px;     /* 메시지 카드 시그니처 */
--radius-xl: 28px;     /* 인풋 박스 */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.60);
--shadow-spectrum: 0 0 24px rgba(192,155,224,0.40);
```

### ⑧ Iconography
- **스타일**: Outlined (Material Symbols Outlined, weight 400)
- **Stroke 굵기**: 1.75px equivalent
- **모서리 처리**: Round
- **추천 라이브러리**: Material Symbols

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 'Google Sans', Roboto, sans-serif; letter-spacing: 0.01em;
       border-radius: 9999px; padding: 10px 20px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 200ms ease, box-shadow 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: #131314; }
.btn-primary:hover { background: var(--color-primary-600); box-shadow: var(--shadow-md); }
.btn-tonal { background: var(--color-primary-50); color: var(--color-primary-700); }
.btn-tonal:hover { background: var(--color-primary-100); }
.btn-text { background: transparent; color: var(--color-primary-600); padding: 10px 12px; }
.btn-spectrum { background: var(--gradient-spectrum); color: #131314; box-shadow: var(--shadow-spectrum); }
.btn-send { width: 36px; height: 36px; padding: 0; border-radius: 9999px; background: var(--gradient-spectrum); color: #131314; }
```

**Input (Chat box)**
```css
.chatbox { background: #282A2C; border: 1px solid var(--border-default); border-radius: 28px; padding: 10px 16px; display: flex; align-items: center; gap: 10px; box-shadow: var(--shadow-sm); }
.chatbox:focus-within { border-color: transparent; background-image: linear-gradient(#282A2C, #282A2C), var(--gradient-spectrum); background-origin: border-box; background-clip: padding-box, border-box; }
.chatbox input { all: unset; flex: 1; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.chatbox input::placeholder { color: var(--text-tertiary); }
```

**Card (Message)**
```css
.msg-user { background: #282A2C; border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px 16px; max-width: 80%; align-self: flex-end; font: 500 14px/1.55 inherit; }
.msg-ai { background: var(--gradient-spectrum-soft); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px 16px; max-width: 95%; font: 400 14px/1.6 inherit; }
.msg-ai .header { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; font: 600 11px/1 inherit; color: var(--text-tertiary); }
.msg-ai .logo { width: 14px; height: 14px; background: var(--gradient-conic); border-radius: 9999px; mask: radial-gradient(circle, transparent 35%, #000 36%); -webkit-mask: radial-gradient(circle, transparent 35%, #000 36%); }
```

**Badge / Tag (Suggestion chip)**
```css
.chip { padding: 8px 14px; border-radius: 9999px; font: 500 13px/1.3 inherit; background: #282A2C; color: var(--text-primary); border: 1px solid var(--border-default); cursor: pointer; transition: background 150ms ease; }
.chip:hover { background: var(--color-primary-50); border-color: var(--color-primary-200); color: var(--color-primary-700); }
.chip-spectrum { background: var(--gradient-spectrum); color: #131314; border-color: transparent; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--bg-base); padding: 8px; }
.sidebar .item { padding: 10px 14px; border-radius: 9999px; font: 500 13px/1.4 inherit; color: var(--text-primary); display: flex; align-items: center; gap: 10px; cursor: pointer; }
.sidebar .item:hover { background: var(--color-primary-50); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 500; }
.sidebar .new-chat { background: #282A2C; border: 1px solid var(--border-default); border-radius: 9999px; padding: 10px 16px; font: 500 13px/1 inherit; box-shadow: var(--shadow-sm); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);              /* Material standard */
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);          /* Material 3 emphasized */
--ease-shimmer: cubic-bezier(0.4, 0, 0.6, 1);           /* 로딩 그라데이션 */
```

### ⑪ Anti-patterns
1. Material 3 sharp Outlined Button을 그대로 사용 금지 — Gemini는 Pill round 9999px이 시그니처
2. Spectrum 그라데이션을 본문 텍스트 가독성 방해할 정도로 진하게 사용 금지 — 답변 카드 보더·옅은 배경 한정
3. 다크모드를 Material 3 Tonal Surface 그대로 사용 금지 — `#131314`/`#1E1F22` 톤이 Gemini 표준
4. 단일 primary 색만 사용 금지 — 4색 스펙트럼이 브랜드 정체성
5. 차크라/Bootstrap 류 sharp border 사용 금지 — 모든 라운드 16px+

### ⑫ 시그니처 적용 예시 (Gemini 채팅 UI)

```html
<style>
  body { margin: 0; font-family: 'Google Sans', Roboto, -apple-system, sans-serif; letter-spacing: -0.005em; color: #E8EAED; background: #131314; }
  .app { max-width: 720px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px 20px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #282A2C; background: #131314; }
  .topbar .logo { width: 28px; height: 28px; background: conic-gradient(from 0deg, #8AB4F8, #C09BE0, #F08A95, #FBD45C, #8AB4F8); border-radius: 9999px; -webkit-mask: radial-gradient(circle, transparent 35%, #000 36%); mask: radial-gradient(circle, transparent 35%, #000 36%); }
  .topbar h1 { margin: 0; font: 500 18px/1.3 inherit; letter-spacing: -0.015em; }
  .topbar h1 small { font: 500 12px/1 inherit; color: #9AA0A6; margin-left: 6px; vertical-align: middle; }
  .topbar .right { margin-left: auto; display: flex; gap: 10px; font: 500 13px/1 inherit; color: #9AA0A6; }
  .chat { padding: 24px 20px; display: flex; flex-direction: column; gap: 14px; overflow-y: auto; }
  .msg-user { background: #282A2C; border: 1px solid #3C4043; border-radius: 20px; padding: 14px 16px; max-width: 80%; align-self: flex-end; font: 500 14px/1.55 inherit; box-shadow: 0 1px 2px rgba(0,0,0,0.40); }
  .msg-ai { background: linear-gradient(135deg, rgba(138,180,248,0.10) 0%, rgba(192,155,224,0.10) 50%, rgba(240,138,149,0.10) 100%); border: 1px solid #3C4043; border-radius: 20px; padding: 14px 16px; max-width: 95%; font: 400 14px/1.65 inherit; }
  .msg-ai .head { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; font: 600 11px/1 inherit; color: #9AA0A6; letter-spacing: 0.02em; }
  .msg-ai .head .dot { width: 14px; height: 14px; background: conic-gradient(from 0deg, #8AB4F8, #C09BE0, #F08A95, #FBD45C, #8AB4F8); border-radius: 9999px; -webkit-mask: radial-gradient(circle, transparent 35%, #000 36%); mask: radial-gradient(circle, transparent 35%, #000 36%); }
  .msg-ai code { background: #3C4043; padding: 1px 5px; border-radius: 4px; font: 400 13px/1.4 'Roboto Mono', monospace; }
  .chips { padding: 0 20px 12px; display: flex; gap: 8px; flex-wrap: wrap; }
  .chip { padding: 8px 14px; border-radius: 9999px; font: 500 13px/1.3 inherit; background: #282A2C; color: #E8EAED; border: 1px solid #3C4043; cursor: pointer; }
  .input { padding: 12px 20px 20px; }
  .input .box { background: #282A2C; border: 1px solid #3C4043; border-radius: 28px; padding: 10px 12px 10px 18px; display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 2px rgba(0,0,0,0.40); }
  .input .box input { all: unset; flex: 1; font: 400 14px/1.4 inherit; }
  .input .box input::placeholder { color: #9AA0A6; }
  .input .box .send { width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, #8AB4F8, #C09BE0); color: #131314; display: grid; place-items: center; font: 700 16px/1 inherit; box-shadow: 0 0 16px rgba(192,155,224,0.40); }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo"></div>
    <h1>Gemini <small>2.5 Pro</small></h1>
    <div class="right"><span>Apps</span><span>Settings</span></div>
  </header>
  <main class="chat">
    <div class="msg-user">React 19에서 useTransition은 어떻게 동작해? 예제 코드도 보여줘.</div>
    <div class="msg-ai">
      <div class="head"><span class="dot"></span>Gemini</div>
      React 19의 <code>useTransition</code>은 우선순위가 낮은 상태 업데이트를 백그라운드에서 처리해, 더 중요한 업데이트가 먼저 반영되도록 합니다. 사용자 입력 같은 즉시 반영이 필요한 작업과, 무거운 렌더링이 필요한 업데이트를 분리할 때 유용합니다.<br><br>
      <strong>핵심 동작</strong><br>
      • <code>startTransition()</code> 안의 업데이트는 "transition"으로 표시됨<br>
      • <code>isPending</code>으로 진행 중인 상태 추적 가능<br>
      • Suspense와 함께 자연스러운 로딩 처리 가능
    </div>
  </main>
  <div class="chips">
    <span class="chip">코드 예제 보여줘</span>
    <span class="chip">useDeferredValue와 차이</span>
    <span class="chip">실전 사용 사례</span>
  </div>
  <div class="input">
    <div class="box">
      <input placeholder="메시지를 입력하세요..." />
      <div class="send">↑</div>
    </div>
  </div>
</div>
```
