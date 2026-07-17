---
brand: Cursor
brand_ko: 커서
slug: cursor
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - dev-tools

color_tone: cool
primary_color_hex: "#000000"
primary_color_name: "Cursor Ink"
mood:
  - 집중
  - 기민
  - 미래적

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2023
last_major_revision: 2025
signature_keyword: "VS Code DNA에 더한 잉크-블랙 캔버스 + AI 사이드패널의 모노톤 미니멀"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#E4E4E7", "fg": "#0A0A0A", "fg_muted": "#737373", "accent": "#0A0A0A" },
    "dark":  { "bg": "#0A0A0A", "surface": "#1F1F1F", "border": "#1F1F1F", "fg": "#FAFAFA", "fg_muted": "#737373", "accent": "#FAFAFA" }
  }

hero_html: |
  <div style="font-family:'Inter',-apple-system,'Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.01em;">
    <div style="padding:8px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:14px;height:14px;background:var(--card-accent);border-radius:3px;"></div>
      <span style="font-weight:600;letter-spacing:-0.02em;">Cursor</span>
      <span style="color:var(--card-fg-muted);margin-left:auto;">⌘K</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.6;">
      <div style="padding:10px;color:#A1A1AA;">
        <div><span style="color:#A78BFA;">function</span> <span style="color:#60A5FA;">main</span>() {</div>
        <div style="padding-left:10px;color:#A3E635;">// AI suggestion</div>
        <div style="padding-left:10px;"><span style="color:#FB7185;">return</span> data;</div>
        <div>}</div>
      </div>
      <div style="background:var(--card-surface);border-left:1px solid var(--card-border);padding:10px;font-family:'Inter',sans-serif;">
        <div style="color:var(--card-fg-muted);font-size:9px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">CHAT</div>
        <div style="color:var(--card-fg);">코드 리팩토링 도와줘</div>
        <div style="margin-top:8px;padding:6px 8px;background:var(--card-surface);border-radius:4px;color:#D4D4D8;font-size:10px;">함수를 더 작게 분리하면…</div>
      </div>
    </div>
    <div style="padding:6px 12px;background:var(--card-bg);border-top:1px solid var(--card-border);display:flex;gap:10px;font-size:9px;color:var(--card-fg-muted);">
      <span>⎇ main</span><span>UTF-8</span><span style="margin-left:auto;color:#A3E635;">● Ready</span>
    </div>
  </div>

sources:
  - https://www.cursor.com/
  - https://docs.cursor.com/
---

### ① 브랜드 DNA
- **브랜드명**: Cursor (Anysphere)
- **한 줄 정체성**: VS Code를 fork해 AI를 깊게 통합한 AI-first 코드 에디터
- **공식 디자인 철학**: "The AI Code Editor" — 개발자 워크플로우의 흐름을 끊지 않는 인라인 AI
- **시그니처 요소 1개**: 거의 순흑(#0A0A0A) 캔버스 + 모노톤 그레이스케일 9단계 + 우측 AI 패널의 얇은 1px 디바이더. VS Code의 코발트 블루 액센트를 제거하고 강조 없이 "타이포·구조"만 남긴 잉크 미니멀

### ② 톤 & 무드
- **핵심 키워드 3개**: 집중, 기민, 미래적
- **무드 설명**: 야간 코드 작성을 위한 가장 어두운 캔버스. 색은 신택스 하이라이트와 AI 응답에만 허용. UI 크롬은 무채색만 사용해 시선을 코드에 묶어둠.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — IDE 표준, 줄 간격 1.5
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Cursor Ink (모노톤 그레이스케일 · dark-tuned) */
  --color-primary-50:  #0A0A0A;
  --color-primary-100: #171717;
  --color-primary-200: #262626;
  --color-primary-300: #404040;
  --color-primary-400: #525252;
  --color-primary-500: #737373;
  --color-primary-600: #A1A1AA;
  --color-primary-700: #D4D4D8;
  --color-primary-800: #E4E4E7;
  --color-primary-900: #FAFAFA;

  /* Secondary - Syntax accents (코드용만) */
  --color-syntax-keyword: #A78BFA;
  --color-syntax-function: #60A5FA;
  --color-syntax-string: #A3E635;
  --color-syntax-error: #FB7185;
  --color-syntax-comment: #737373;

  /* Neutral (inverted ramp) */
  --color-neutral-0:    #0A0A0A;
  --color-neutral-50:   #141414;
  --color-neutral-100:  #1F1F1F;
  --color-neutral-300:  #404040;
  --color-neutral-500:  #737373;
  --color-neutral-700:  #D4D4D8;
  --color-neutral-900:  #FAFAFA;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #052E16;
  --color-success-fg: #A3E635;
  --color-warning-bg: #422006;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #450A0A;
  --color-error-fg:   #FB7185;
  --color-info-bg:    #1E1B4B;
  --color-info-fg:    #818CF8;

  /* Surface */
  --bg-base:     #0A0A0A;
  --bg-subtle:   #111111;
  --bg-elevated: #1F1F1F;
  --bg-overlay:  rgba(0,0,0,0.80);

  /* Text */
  --text-primary:    #FAFAFA;
  --text-secondary:  #D4D4D8;
  --text-tertiary:   #737373;
  --text-on-primary: #0A0A0A;
  --text-disabled:   #525252;

  /* Border */
  --border-default: #1F1F1F;
  --border-subtle:  #111111;
  --border-strong:  #404040;
  --border-focus:   #60A5FA;
}

[data-theme="light"] {
  /* Primary - Cursor Ink (모노톤 그레이스케일) */
  --color-primary-50:  #FAFAFA;
  --color-primary-100: #F4F4F5;
  --color-primary-200: #E4E4E7;
  --color-primary-300: #D4D4D8;
  --color-primary-400: #A1A1AA;
  --color-primary-500: #737373;
  --color-primary-600: #525252;
  --color-primary-700: #404040;
  --color-primary-800: #262626;
  --color-primary-900: #0A0A0A;

  /* Secondary - Syntax accents (코드용만) */
  --color-syntax-keyword: #7C3AED;
  --color-syntax-function: #2563EB;
  --color-syntax-string: #65A30D;
  --color-syntax-error: #E11D48;
  --color-syntax-comment: #737373;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F5;
  --color-neutral-300:  #D4D4D8;
  --color-neutral-500:  #737373;
  --color-neutral-700:  #404040;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFCCB;
  --color-success-fg: #4D7C0F;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE4E6;
  --color-error-fg:   #BE123C;
  --color-info-bg:    #E0E7FF;
  --color-info-fg:    #4F46E5;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #0A0A0A;
  --text-secondary:  #404040;
  --text-tertiary:   #737373;
  --text-on-primary: #FAFAFA;
  --text-disabled:   #A1A1AA;

  /* Border */
  --border-default: #E4E4E7;
  --border-subtle:  #F4F4F5;
  --border-strong:  #D4D4D8;
  --border-focus:   #2563EB;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Inter (OFL) / -apple-system 폴백
  - 코드: JetBrains Mono / Fira Code / Cascadia Code
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 32px / 600 / 1.2 / -0.02em
  - H1: 22px / 600 / 1.3 / -0.015em
  - H2: 16px / 600 / 1.35 / -0.01em
  - H3: 13px / 600 / 1.4 / 0
  - Body: 13px / 400 / 1.5 / 0
  - Body Small: 12px / 400 / 1.5 / 0
  - Code: 13px / 400 / 1.6 mono
  - Caption: 11px / 500 / 1.4 / 0.02em

### ⑤ 스페이싱
- **Base unit**: 4px (Compact)
- **토큰**:
  ```css
  --space-xs: 2px;
  --space-sm: 4px;
  --space-md: 8px;
  --space-lg: 12px;
  --space-xl: 16px;
  --space-2xl: 24px;
  --space-3xl: 40px;
  ```
- **Container**: 풀스크린 IDE 레이아웃, 사이드바 240px, AI 패널 380px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 4px;     /* 입력/버튼 기본 */
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(0,0,0,0.4);
--shadow-md: 0 4px 12px rgba(0,0,0,0.5);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.6);
--shadow-glow: 0 0 0 1px rgba(96,165,250,0.5);  /* 포커스 외곽선 */
```

### ⑧ Iconography
- **스타일**: Outline (1.5px)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / VS Code Codicons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 12px/1 Inter,sans-serif; padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-default); background: var(--bg-elevated); color: var(--text-primary); transition: background 120ms ease; }
.btn:hover { background: #2A2A2A; }
.btn-primary { background: var(--text-primary); color: var(--text-on-primary); border-color: transparent; }
.btn-primary:hover { background: #E4E4E7; }
.btn-ghost { background: transparent; border-color: transparent; color: var(--text-secondary); }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 4px; padding: 6px 10px; font: 400 12px/1.5 Inter,sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(96,165,250,0.2); }
```

**Card (AI Suggestion)**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 12px; font-size: 12px; line-height: 1.5; }
.card .header { font: 500 10px/1 Inter,sans-serif; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-tertiary); margin-bottom: 8px; }
```

**Badge**
```css
.tag { display: inline-block; padding: 2px 6px; border-radius: 3px; font: 500 10px/1.4 'JetBrains Mono',monospace; }
.tag-cmd { background: var(--bg-elevated); color: var(--text-secondary); border: 1px solid var(--border-default); }
.tag-ai { background: rgba(124,58,237,0.15); color: #C4B5FD; border: 1px solid rgba(124,58,237,0.3); }
```

**Navigation (Activity Bar)**
```css
.actbar { background: var(--bg-base); border-right: 1px solid var(--border-default); width: 48px; padding: 8px 0; display: flex; flex-direction: column; gap: 4px; }
.actbar .item { width: 32px; height: 32px; margin: 0 8px; border-radius: 4px; display: grid; place-items: center; color: var(--text-tertiary); cursor: pointer; }
.actbar .item:hover { background: var(--bg-elevated); color: var(--text-primary); }
.actbar .item.active { background: var(--bg-elevated); color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 150ms;
--duration-slow: 250ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. AI 응답 강조에 단색 화려한 배경 사용 금지 — 모노톤 카드만
2. 코드 영역에 둥근 모서리(>8px) 금지 — IDE 그리드 깨짐
3. 코발트 블루 액센트 UI 크롬 금지 — VS Code와 차별화 (블루는 신택스에만)
4. 인라인 AI suggestion 위에 그림자 강조 금지 — flat ghost text가 시그니처
5. 다국어 폰트 fallback 누락 금지 — 한글 코드 주석 가독성 필수

### ⑫ 시그니처 적용 예시

```html
<style>
  .cursor-app { font: 12px/1.5 Inter, -apple-system, sans-serif; background: #0A0A0A; color: #FAFAFA; min-height: 480px; display: grid; grid-template-columns: 48px 1fr 380px; }
  .cursor-app .activity { background: #0A0A0A; border-right: 1px solid #1F1F1F; padding: 8px 0; display: flex; flex-direction: column; gap: 4px; align-items: center; }
  .cursor-app .activity .ic { width: 32px; height: 32px; border-radius: 4px; display: grid; place-items: center; color: #737373; }
  .cursor-app .activity .ic.active { background: #1F1F1F; color: #FAFAFA; }
  .cursor-app .editor { background: #0A0A0A; padding: 16px 20px; font: 13px/1.6 'JetBrains Mono', monospace; }
  .cursor-app .editor .ln { color: #404040; display: inline-block; width: 24px; text-align: right; margin-right: 16px; }
  .cursor-app .editor .kw { color: #A78BFA; }
  .cursor-app .editor .fn { color: #60A5FA; }
  .cursor-app .editor .str { color: #A3E635; }
  .cursor-app .editor .cm { color: #737373; }
  .cursor-app .editor .ghost { color: #525252; font-style: italic; }
  .cursor-app .chat { background: #111111; border-left: 1px solid #1F1F1F; padding: 14px 16px; display: flex; flex-direction: column; gap: 12px; }
  .cursor-app .chat .head { font: 500 10px/1 inherit; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; }
  .cursor-app .chat .msg-u { background: #1F1F1F; padding: 10px 12px; border-radius: 6px; color: #FAFAFA; font: 13px/1.5 Inter, sans-serif; }
  .cursor-app .chat .msg-a { padding: 0 4px; color: #D4D4D8; font: 13px/1.6 Inter, sans-serif; }
  .cursor-app .chat .msg-a code { background: #1F1F1F; padding: 1px 5px; border-radius: 3px; font: 12px 'JetBrains Mono', monospace; color: #A3E635; }
  .cursor-app .chat .composer { margin-top: auto; background: #0A0A0A; border: 1px solid #1F1F1F; border-radius: 6px; padding: 8px 10px; font: 12px Inter, sans-serif; color: #737373; }
</style>

<div class="cursor-app">
  <aside class="activity">
    <div class="ic active">▣</div>
    <div class="ic">⌕</div>
    <div class="ic">⎇</div>
    <div class="ic">▷</div>
  </aside>
  <main class="editor">
    <div><span class="ln">1</span><span class="cm">// utils.ts</span></div>
    <div><span class="ln">2</span><span class="kw">export function</span> <span class="fn">groupBy</span>&lt;T&gt;(arr: T[], key: <span class="kw">keyof</span> T) {</div>
    <div><span class="ln">3</span>&nbsp;&nbsp;<span class="kw">return</span> arr.<span class="fn">reduce</span>((acc, item) =&gt; {</div>
    <div><span class="ln">4</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">const</span> k = <span class="str">String</span>(item[key]);</div>
    <div><span class="ln">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="ghost">// (acc[k] ||= []).push(item);  ← AI 제안</span></div>
    <div><span class="ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> acc;</div>
    <div><span class="ln">7</span>&nbsp;&nbsp;}, {} <span class="kw">as</span> <span class="fn">Record</span>&lt;<span class="kw">string</span>, T[]&gt;);</div>
    <div><span class="ln">8</span>}</div>
  </main>
  <aside class="chat">
    <div class="head">⌘ K · Composer</div>
    <div class="msg-u">groupBy 함수 한 줄로 줄여줘</div>
    <div class="msg-a">한 줄 리듀서로 단순화했습니다. <code>acc[k] ||= []</code> 패턴을 써서 초기화와 추가를 한 줄에 묶었습니다.</div>
    <div class="composer">코드에 대해 무엇이든 물어보세요…</div>
  </aside>
</div>
```
