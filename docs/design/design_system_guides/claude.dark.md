---
brand: Claude
brand_ko: 클로드
slug: claude
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - ai
  - productivity

color_tone: warm
primary_color_hex: "#C96442"
primary_color_name: "Claude Clay"
mood:
  - 침착
  - 따뜻
  - 신중

font_category: serif
font_primary: Tiempos Text
font_korean_supported: true

density: spacious
corner_style: soft
flatness: flat

visual_style:
  - humanism
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2023
last_major_revision: 2025
signature_keyword: "크림 캔버스 + 점토 오렌지 + 세리프의 인본주의 AI"

card_tokens: |
  {
    "light": { "bg": "#F0EEE6", "surface": "#FFFFFF", "border": "#E5E0D5", "fg": "#1F1E1D", "fg_muted": "#807D75", "accent": "#C96442" },
    "dark":  { "bg": "#1F1E1D", "surface": "#2F2E2C", "border": "#3F3D38", "fg": "#F0EEE6", "fg_muted": "#C8C5BC", "accent": "#D88861" }
  }

hero_html: |
  <div style="font-family:'Tiempos Text','Source Serif Pro',ui-serif,Georgia,serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.005em;">
    <div style="padding:14px;display:flex;align-items:center;gap:8px;font-family:Styrene,'Inter',-apple-system,sans-serif;">
      <div style="width:22px;height:22px;background:var(--card-accent);border-radius:6px;display:grid;place-items:center;color:#1F1E1D;font:900 13px/1 sans-serif;">✱</div>
      <strong style="font-size:15px;font-weight:500;color:var(--card-fg);letter-spacing:-0.01em;">Claude</strong>
      <span style="font-size:11px;font-weight:500;color:var(--card-fg-muted);margin-left:4px;">Opus 4.7</span>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">⚙</span>
    </div>
    <div style="padding:6px 16px;display:flex;flex-direction:column;gap:14px;overflow:hidden;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:14px;padding:14px 18px;font:500 13px/1.6 'Styrene','Inter',sans-serif;align-self:flex-end;max-width:80%;color:var(--card-fg);">에세이 초안 좀 다듬어줄래?</div>
      <div style="font:400 14px/1.7 inherit;color:var(--card-fg);padding:0 4px;">
        물론입니다. 보내주신 글을 살펴보면, 도입부의 호흡이 다소 가파른 듯합니다. 첫 문단을 한 문장 늘려, 독자가 주장에 닿기 전에 한 호흡 머무를 수 있게 만들면 어떨까요?
      </div>
    </div>
    <div style="padding:10px 14px 14px;font-family:Styrene,'Inter',sans-serif;">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:16px;padding:10px 12px 10px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 1px 2px rgba(0,0,0,0.40);">
        <span style="flex:1;font:500 13px/1.4 inherit;color:var(--card-fg-muted);">Claude에게 물어보세요...</span>
        <div style="width:30px;height:30px;background:var(--card-accent);border-radius:9999px;display:grid;place-items:center;color:#1F1E1D;font-weight:700;">↑</div>
      </div>
    </div>
  </div>

sources:
  - https://claude.ai/
  - https://www.anthropic.com/claude
  - https://www.anthropic.com/news/styleguide
---

### ① 브랜드 DNA
- **브랜드명**: Claude (Anthropic)
- **한 줄 정체성**: 안전 우선 헌법적 AI 어시스턴트 — 글쓰기·코드·분석에 강한 대화형 모델
- **공식 디자인 철학**: "Honesty, Helpfulness, Harmlessness" — 사려깊고 인본주의적 톤
- **시그니처 요소 1개**: 크림 화이트(#F0EEE6) 캔버스 + 점토 오렌지(#C96442) 단일 강조 + 본문 한글/영문 모두 세리프(Tiempos/Styrene 혼합). ChatGPT의 무채 톤·Gemini 스펙트럼과 정반대의 따뜻한 휴머니즘

### ② 톤 & 무드
- **핵심 키워드 3개**: 침착, 따뜻, 신중
- **무드 설명**: 종이를 닮은 크림-베이지 캔버스. 본문은 세리프, UI 라벨은 산세리프(Styrene). 흰 카드, 옅은 베이지 보더, 강조는 점토 오렌지 한 가지만. 모서리는 둥글지만 풀필이 아닌 12~16px.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀
- **밀도(Density)**: Spacious — 본문 line-height 1.7, 카드 패딩 14~18px
- **모서리 성향**: Soft (12~16px)
- **평면성**: Flat — 그림자 매우 절제

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Claude Clay (점토 오렌지, 다크 위 한 단계 라이트) */
  --color-primary-50:  #2A1810;   /* 다크 위 가장 옅은 점토 틴트 */
  --color-primary-100: #3D2316;
  --color-primary-200: #5C3320;
  --color-primary-300: #8C4A2E;
  --color-primary-400: #B05E3D;
  --color-primary-500: #D88861;   /* Claude Clay — 다크 캔버스 위 라이트닝 */
  --color-primary-600: #E29C79;
  --color-primary-700: #ECB294;
  --color-primary-800: #F2CBB3;
  --color-primary-900: #F8E2D4;

  /* Secondary - Olive/Sage (보조 강조) */
  --color-secondary-500: #9BA388;

  /* Neutral - Warm dark tones (0 = darkest canvas, 1000 = lightest cream text) */
  --color-neutral-0:    #141312;
  --color-neutral-50:   #1F1E1D;     /* page bg — 따뜻한 다크 캔버스 */
  --color-neutral-100:  #28272B;
  --color-neutral-200:  #2F2E2C;     /* elevated surface */
  --color-neutral-300:  #3F3D38;     /* border */
  --color-neutral-500:  #5C5A53;
  --color-neutral-700:  #A09C92;     /* text tertiary */
  --color-neutral-800:  #C8C5BC;
  --color-neutral-900:  #F0EEE6;     /* text primary — 크림 */
  --color-neutral-1000: #FAF9F5;

  /* Semantic - 다크 위 따뜻한 채도 (틴트 bg + 밝고 또렷한 fg) */
  --color-success-bg: #1C2A14;
  --color-success-fg: #9CC97A;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #E5B45A;
  --color-error-bg:   #2E1512;
  --color-error-fg:   #E58474;
  --color-info-bg:    #16282A;
  --color-info-fg:    #7FB5BA;

  /* Surface */
  --bg-base:     #1F1E1D;          /* 따뜻한 다크 캔버스 */
  --bg-subtle:   #28272B;
  --bg-elevated: #2F2E2C;
  --bg-overlay:  rgba(0,0,0,0.66);

  /* Text */
  --text-primary:    #F0EEE6;
  --text-secondary:  #C8C5BC;
  --text-tertiary:   #A09C92;
  --text-on-primary: #1F1E1D;     /* 점토 오렌지 위는 다크 텍스트 */
  --text-disabled:   #5C5A53;

  /* Border */
  --border-default: #3F3D38;
  --border-subtle:  #2A2926;
  --border-strong:  #514E47;
  --border-focus:   #D88861;
}

[data-theme="light"] {
  /* Primary - Claude Clay (점토 오렌지) */
  --color-primary-50:  #FBEFE7;
  --color-primary-100: #F2D4BF;
  --color-primary-200: #E5B091;
  --color-primary-300: #D88861;
  --color-primary-400: #D17350;
  --color-primary-500: #C96442;   /* Claude Clay */
  --color-primary-600: #B05231;
  --color-primary-700: #8C4022;
  --color-primary-800: #682E16;
  --color-primary-900: #441C0B;

  /* Secondary - Olive/Sage (보조 강조) */
  --color-secondary-500: #6F7864;

  /* Neutral - Warm cream tones */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAF9F5;
  --color-neutral-100:  #F0EEE6;     /* page bg — 크림 캔버스 */
  --color-neutral-200:  #E5E0D5;     /* border */
  --color-neutral-300:  #D4CFC4;
  --color-neutral-500:  #ABA597;
  --color-neutral-700:  #807D75;     /* text tertiary */
  --color-neutral-800:  #4A4845;
  --color-neutral-900:  #1F1E1D;     /* text primary */
  --color-neutral-1000: #0B0A09;

  /* Semantic - 톤다운된 따뜻한 채도 */
  --color-success-bg: #E8EEDF;
  --color-success-fg: #4F7A35;
  --color-warning-bg: #FBEEDA;
  --color-warning-fg: #B07A1F;
  --color-error-bg:   #F5DDDA;
  --color-error-fg:   #B23A2C;
  --color-info-bg:    #E0E7E8;
  --color-info-fg:    #3F6F73;

  /* Surface */
  --bg-base:     #F0EEE6;          /* 크림 */
  --bg-subtle:   #FAF9F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(31,30,29,0.50);

  /* Text */
  --text-primary:    #1F1E1D;
  --text-secondary:  #4A4845;
  --text-tertiary:   #807D75;
  --text-on-primary: #F0EEE6;     /* 점토 오렌지 위는 크림 텍스트 */
  --text-disabled:   #ABA597;

  /* Border */
  --border-default: #E5E0D5;
  --border-subtle:  #F0EEE6;
  --border-strong:  #D4CFC4;
  --border-focus:   #C96442;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 본문(영문): **Tiempos Text** (라이선스) / Source Serif Pro 폴백
  - UI/라벨(영문): **Styrene** (Commercial Type) / Inter 폴백
  - 한글 본문: Noto Serif KR / 본명조 폴백
  - 한글 UI: Pretendard / Noto Sans KR
  - 코드: Söhne Mono / JetBrains Mono / Source Code Pro
- **위계** (본문은 세리프, UI는 산세리프 분리):
  - Display: 40px / 500 / 1.25 / -0.02em serif
  - H1: 28px / 500 / 1.3 / -0.015em serif
  - H2: 22px / 500 / 1.35 / -0.01em serif
  - H3: 18px / 600 / 1.4 / -0.005em serif
  - Body Large: 16px / 400 / 1.7 / 0 serif
  - Body: 15px / 400 / 1.7 / 0 serif
  - Body Small: 13px / 500 / 1.55 / 0 sans
  - UI Label: 13px / 500 / 1.3 / 0 sans
  - Caption: 11px / 500 / 1.4 / 0.01em sans
  - Code: 13px / 400 / 1.55 mono

### ⑤ 스페이싱
- **Base unit**: 4px (Spacious 톤)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 14px;
  --space-lg: 20px;
  --space-xl: 28px;
  --space-2xl: 44px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 760px (대화창), 1120px (랜딩), 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 16px;     /* 카드 시그니처 */
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.60);
--shadow-clay: 0 4px 16px rgba(216,136,97,0.28);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선) — Phosphor Regular
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round (얇게)
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 Styrene, Inter, sans-serif; letter-spacing: -0.005em;
       border-radius: 9999px; padding: 11px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 200ms ease, box-shadow 200ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-600); }
.btn-send { width: 32px; height: 32px; padding: 0; border-radius: 9999px; background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-send:disabled { background: var(--border-default); color: var(--text-disabled); }
```

**Input (Chat box)**
```css
.chatbox { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 10px 12px 10px 18px; display: flex; align-items: center; gap: 10px; box-shadow: var(--shadow-sm); transition: border-color 200ms ease; }
.chatbox:focus-within { border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(216,136,97,0.18); }
.chatbox input, .chatbox textarea { all: unset; flex: 1; font: 400 15px/1.55 Tiempos, serif; color: var(--text-primary); }
.chatbox input::placeholder { color: var(--text-tertiary); font-family: Styrene, Inter, sans-serif; }
```

**Card (Message)**
```css
.msg-user { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px 18px; max-width: 75%; align-self: flex-end; font: 500 14px/1.6 Styrene, Inter, sans-serif; color: var(--text-primary); }
.msg-ai { background: transparent; border-radius: 0; padding: 0 4px; max-width: 90%; font: 400 15px/1.75 Tiempos, 'Source Serif Pro', serif; color: var(--text-primary); }
.msg-ai .head { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 8px; font: 500 11px/1 Styrene, sans-serif; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.06em; }
.msg-ai .logo { width: 16px; height: 16px; background: var(--color-primary-500); border-radius: 4px; display: grid; place-items: center; color: var(--text-on-primary); font: 900 10px/1 sans-serif; }
.callout { background: var(--color-primary-50); border-left: 3px solid var(--color-primary-500); border-radius: 4px; padding: 12px 16px; font: 400 14px/1.65 inherit; }
```

**Badge / Tag**
```css
.tag { padding: 3px 10px; border-radius: 9999px; font: 500 11px/1.5 Styrene, Inter, sans-serif; letter-spacing: 0.02em; }
.tag-version { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); }
.tag-clay    { background: var(--color-primary-50); color: var(--color-primary-700); border: 1px solid var(--color-primary-100); }
.tag-new     { background: var(--color-primary-500); color: var(--text-on-primary); }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--bg-subtle); padding: 12px; border-right: 1px solid var(--border-default); }
.sidebar .item { padding: 10px 14px; border-radius: 9999px; font: 500 13px/1.4 Styrene, Inter, sans-serif; color: var(--text-primary); display: flex; align-items: center; gap: 10px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-base); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); }
.sidebar .new { background: var(--color-primary-500); color: var(--text-on-primary); border: 0; border-radius: 9999px; padding: 10px 14px; font: 500 13px/1 inherit; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;     /* 한 호흡 더 길게 */
--duration-slow: 500ms;
--ease-out: cubic-bezier(0.32, 0.72, 0, 1);     /* 부드러운 도착 */
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
```

### ⑪ Anti-patterns
1. 본문에 산세리프 단독 사용 금지 — Claude의 정체성은 세리프 본문 (UI는 산세리프 분리)
2. 채도 높은 그라데이션 배경 금지 — 크림 단색 캔버스 유지
3. 점토 오렌지 외 다른 강조 색 추가 금지 — single accent 원칙
4. 본문 line-height 1.5 이하 사용 금지 — 1.65~1.75가 침착 톤 유지
5. 풀필 round(9999px) 카드 사용 금지 — 카드는 12~16px Soft, pill은 버튼/태그에만

### ⑫ 시그니처 적용 예시 (Claude 채팅 UI)

```html
<style>
  :root { font-family: 'Tiempos Text', 'Source Serif Pro', ui-serif, Georgia, serif; }
  body { margin: 0; letter-spacing: -0.005em; color: #F0EEE6; background: #1F1E1D; }
  .app { max-width: 760px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px 20px; display: flex; align-items: center; gap: 10px; font-family: Styrene, Inter, -apple-system, sans-serif; border-bottom: 1px solid #3F3D38; }
  .topbar .logo { width: 26px; height: 26px; background: #D88861; border-radius: 7px; display: grid; place-items: center; color: #1F1E1D; font: 900 14px/1 sans-serif; }
  .topbar h1 { margin: 0; font: 500 16px/1.3 inherit; }
  .topbar .ver { font: 500 12px/1 inherit; color: #A09C92; padding: 3px 8px; border: 1px solid #3F3D38; border-radius: 9999px; }
  .topbar .right { margin-left: auto; display: flex; gap: 12px; font: 500 13px/1 inherit; color: #C8C5BC; }
  .chat { padding: 28px 20px; display: flex; flex-direction: column; gap: 22px; overflow-y: auto; }
  .msg-user { background: #2F2E2C; border: 1px solid #3F3D38; border-radius: 16px; padding: 14px 18px; max-width: 75%; align-self: flex-end; font: 500 14px/1.6 Styrene, Inter, sans-serif; box-shadow: 0 1px 2px rgba(0,0,0,0.40); }
  .msg-ai { padding: 0 4px; max-width: 95%; }
  .msg-ai .head { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 10px; font: 500 11px/1 Styrene, sans-serif; color: #A09C92; text-transform: uppercase; letter-spacing: 0.08em; }
  .msg-ai .head .dot { width: 16px; height: 16px; background: #D88861; border-radius: 5px; display: grid; place-items: center; color: #1F1E1D; font: 900 10px/1 sans-serif; }
  .msg-ai .body { font: 400 16px/1.75 inherit; color: #F0EEE6; }
  .msg-ai .body p { margin: 0 0 14px; }
  .msg-ai .body em { color: #ECB294; font-style: italic; }
  .msg-ai .callout { background: #2A1810; border-left: 3px solid #D88861; border-radius: 4px; padding: 12px 16px; font: 400 14px/1.65 inherit; margin: 12px 0; }
  .chips { padding: 0 20px 12px; display: flex; gap: 8px; flex-wrap: wrap; font-family: Styrene, Inter, sans-serif; }
  .chip { padding: 8px 14px; border-radius: 9999px; font: 500 13px/1.3 inherit; background: #2F2E2C; color: #F0EEE6; border: 1px solid #3F3D38; cursor: pointer; }
  .input { padding: 14px 20px 24px; font-family: Styrene, Inter, sans-serif; }
  .input .box { background: #2F2E2C; border: 1px solid #3F3D38; border-radius: 16px; padding: 12px 12px 12px 18px; display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 2px rgba(0,0,0,0.40); }
  .input .box input { all: unset; flex: 1; font: 400 15px/1.55 Tiempos, serif; color: #F0EEE6; }
  .input .box input::placeholder { color: #A09C92; font-family: Styrene, Inter, sans-serif; font-size: 14px; }
  .input .box .send { width: 32px; height: 32px; border-radius: 9999px; background: #D88861; color: #1F1E1D; display: grid; place-items: center; font: 700 14px/1 inherit; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">✱</div>
    <h1>Claude</h1>
    <span class="ver">Opus 4.7</span>
    <div class="right"><span>Projects</span><span>⚙</span></div>
  </header>
  <main class="chat">
    <div class="msg-user">에세이 초안 좀 다듬어줄래? 도입부가 어딘가 어색한 느낌이야.</div>
    <div class="msg-ai">
      <div class="head"><span class="dot">✱</span>Claude</div>
      <div class="body">
        <p>물론입니다. 보내주신 글을 살펴보면, 도입부의 호흡이 다소 가파른 듯합니다. 첫 문단을 한 문장 늘려, 독자가 주장에 닿기 전에 한 호흡 머무를 수 있게 만들면 어떨까요?</p>
        <p>예를 들어 첫 문장 뒤에 <em>"그 풍경은 오래 머무르지 않았다"</em> 같은 매개 문장을 두면, 자연스럽게 다음 단락으로 시선이 이어집니다.</p>
        <div class="callout">초안을 직접 다듬어드릴 수 있습니다. 원문을 그대로 붙여넣어 주시면, 한 단락씩 수정 제안을 드리겠습니다.</div>
      </div>
    </div>
  </main>
  <div class="chips">
    <span class="chip">원문 다듬어줘</span>
    <span class="chip">제목 후보 5개</span>
    <span class="chip">한 문단 더 쓸까?</span>
  </div>
  <div class="input">
    <div class="box">
      <input placeholder="Claude에게 물어보세요..." />
      <div class="send">↑</div>
    </div>
  </div>
</div>
```
