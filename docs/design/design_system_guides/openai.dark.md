---
brand: OpenAI
brand_ko: 오픈AI
slug: openai
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai

color_tone: neutral
primary_color_hex: "#10A37F"
primary_color_name: "OpenAI Green"
mood:
  - 모노
  - 정밀
  - 과학적

font_category: sans-serif
font_primary: OpenAI Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2015
last_major_revision: 2024
signature_keyword: "차분한 모노 캔버스에 한 점의 OpenAI Green 액센트"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4F4F4", "border": "#ECECF1", "fg": "#0D0D0D", "fg_muted": "#8E8EA0", "accent": "#10A37F" },
    "dark":  { "bg": "#212121", "surface": "#2F2F2F", "border": "#424242", "fg": "#ECECEC", "fg_muted": "#B4B4B4", "accent": "#10A37F" }
  }

hero_html: |
  <div style="font-family:'OpenAI Sans','Söhne',-apple-system,'Pretendard',sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;border:1.5px solid var(--card-fg);border-radius:50%;"></span>
      <strong style="font-size:13px;">ChatGPT</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;overflow:hidden;">
      <div style="display:flex;gap:8px;align-items:flex-start;">
        <span style="width:24px;height:24px;border-radius:50%;background:var(--card-fg);color:var(--card-bg);display:grid;place-items:center;font-size:10px;font-weight:600;flex:0 0 24px;">U</span>
        <div style="font-size:12px;line-height:1.5;color:var(--card-fg);">디자인 시스템에서 토큰이란 무엇인가요?</div>
      </div>
      <div style="display:flex;gap:8px;align-items:flex-start;">
        <span style="width:24px;height:24px;border-radius:50%;background:var(--card-accent);color:#fff;display:grid;place-items:center;font-size:10px;font-weight:700;flex:0 0 24px;">✦</span>
        <div style="font-size:12px;line-height:1.5;color:var(--card-fg);">디자인 토큰은 색상, 폰트, 간격, 그림자 등 <strong>UI를 구성하는 작은 단위 결정</strong>들을 명명한 변수입니다. 예를 들어 <code style="background:var(--card-surface);padding:1px 4px;border-radius:3px;font-family:ui-monospace,monospace;font-size:11px;">--color-primary-500</code>처럼 의미를 가진 이름으로 정리합니다.</div>
      </div>
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--card-border);">
      <div style="background:var(--card-surface);border-radius:9999px;padding:8px 14px;font-size:11px;color:var(--card-fg-muted);display:flex;align-items:center;gap:8px;">
        Message ChatGPT…
        <span style="margin-left:auto;width:24px;height:24px;border-radius:50%;background:var(--card-fg);color:var(--card-bg);display:grid;place-items:center;font-size:11px;">↑</span>
      </div>
    </div>
  </div>

sources:
  - https://openai.com/
  - https://platform.openai.com/docs
  - https://openai.com/brand
---

### ① 브랜드 DNA
- **브랜드명**: OpenAI
- **한 줄 정체성**: AGI를 안전하게 만든다는 미션 아래, ChatGPT/API를 제공하는 AI 연구·제품 회사
- **공식 디자인 철학**: "Distill complexity — clear, calm, science-forward"
- **시그니처 요소 1개**: 차분한 모노 grayscale 위에 한 점의 OpenAI Green(#10A37F) — assistant turn 아바타에만

### ② 톤 & 무드
- **핵심 키워드 3개**: 모노, 정밀, 과학적
- **무드 설명**: 흰 캔버스 + 검은 텍스트가 거의 전부. 색은 Green 한 점뿐. ChatGPT의 미니멀 채팅 UI가 시그니처.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — longform 대화
- **모서리 성향**: Round (12~24px pill 입력바)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - OpenAI Green (assistant accent) — 다크 위에서 액센트는 400을 기본으로 */
  --color-primary-50:  #06291F;
  --color-primary-100: #073B2D;
  --color-primary-200: #0A5743;
  --color-primary-300: #0D7B5E;
  --color-primary-400: #13A983;
  --color-primary-500: #10A37F;  /* OpenAI Green */
  --color-primary-600: #2DBF98;
  --color-primary-700: #4DD3AE;
  --color-primary-800: #84E2C6;
  --color-primary-900: #C2F1E2;

  /* Secondary - OpenAI Off-white (primary action, 다크에서 반전) */
  --color-secondary-500: #ECECEC;

  /* Neutral (inverted ramp — 0 = darkest canvas, 1000 = lightest text) */
  --color-neutral-0:    #0D0D0D;
  --color-neutral-50:   #171717;
  --color-neutral-100:  #212121;
  --color-neutral-200:  #2F2F2F;
  --color-neutral-300:  #424242;
  --color-neutral-500:  #6E6E80;
  --color-neutral-700:  #B4B4B4;
  --color-neutral-800:  #CDCDCD;
  --color-neutral-900:  #E3E3E3;
  --color-neutral-1000: #FFFFFF;

  /* Semantic (dark-tinted bg + bright legible fg) */
  --color-success-bg: #06291F;
  --color-success-fg: #34D399;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #2E1518;
  --color-error-fg:   #F87171;
  --color-info-bg:    #122036;
  --color-info-fg:    #60A5FA;

  /* Surface */
  --bg-base:     #212121;
  --bg-subtle:   #2F2F2F;
  --bg-elevated: #303030;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #ECECEC;
  --text-secondary:  #B4B4B4;
  --text-tertiary:   #8E8EA0;
  --text-on-primary: #0D0D0D;
  --text-disabled:   #565869;

  /* Border */
  --border-default: #424242;
  --border-subtle:  #2F2F2F;
  --border-strong:  #565869;
  --border-focus:   #ECECEC;
}

[data-theme="light"] {
  /* Primary - OpenAI Green (assistant accent) */
  --color-primary-50:  #E5F7F1;
  --color-primary-100: #C2EDDC;
  --color-primary-200: #84DBB9;
  --color-primary-300: #4DCC9C;
  --color-primary-400: #2DB890;
  --color-primary-500: #10A37F;  /* OpenAI Green */
  --color-primary-600: #0D8A6A;
  --color-primary-700: #0A6E54;
  --color-primary-800: #07523F;
  --color-primary-900: #043629;

  /* Secondary - OpenAI Black (primary action) */
  --color-secondary-500: #0D0D0D;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F8;
  --color-neutral-100:  #F4F4F4;
  --color-neutral-200:  #ECECF1;
  --color-neutral-300:  #D9D9E3;
  --color-neutral-500:  #ACACBE;
  --color-neutral-700:  #8E8EA0;
  --color-neutral-800:  #565869;
  --color-neutral-900:  #353740;
  --color-neutral-1000: #0D0D0D;

  /* Semantic */
  --color-success-bg: #E5F7F1;
  --color-success-fg: #10A37F;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #D97706;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(13,13,13,0.50);

  /* Text */
  --text-primary:    #0D0D0D;
  --text-secondary:  #565869;
  --text-tertiary:   #8E8EA0;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #D9D9E3;

  /* Border */
  --border-default: #ECECF1;
  --border-subtle:  #F4F4F4;
  --border-strong:  #D9D9E3;
  --border-focus:   #0D0D0D;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: OpenAI Sans (자체) / Söhne (legacy) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "Söhne Mono"
- **위계**:
  - Display: 64px / 600 / 1.05 / -0.025em
  - H1: 36px / 600 / 1.15 / -0.015em
  - H2: 24px / 600 / 1.25 / -0.01em
  - H3: 18px / 500 / 1.3 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 15px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 12px / 500 / 1.33 / 0

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
- **Container**: max-width 768px (chat), 1280px (마케팅)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;   /* 입력바, button */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.40);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.50);
--shadow-xl: 0 20px 48px rgba(0,0,0,0.60);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 'OpenAI Sans', 'Söhne', -apple-system, 'Pretendard', sans-serif;
  border-radius: var(--radius-full);
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-secondary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: #FFFFFF; }
.btn-primary:active { opacity: 0.9; }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input** (Chat composer)
```css
.input {
  background: var(--bg-subtle);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  padding: 12px 18px;
  font-size: 15px;
  width: 100%;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 1px var(--border-focus); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 500; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-secondary-500); color: var(--text-on-primary); }
.tag-subtle  { background: var(--color-neutral-200); color: var(--text-primary); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 260px; background: var(--bg-subtle); padding: 12px; height: 100vh; }
.sidebar .item { padding: 8px 12px; border-radius: var(--radius-sm); font-size: 14px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. brand Green을 액션 버튼이나 본문 텍스트에 사용 금지 — assistant 아바타와 success 신호에만
2. 채팅 메시지 영역에 채도 높은 배경 사용 금지 — 흰 캔버스 보존
3. 입력바를 sharp 사각으로 변경 금지 — pill (9999px) 시그니처
4. 다크 모드에서 풀 white(#FFF) 메시지 텍스트 사용 금지 — #ECECEC 권장
5. 본문에 italic 강조 금지

### ⑫ 시그니처 적용 예시 (ChatGPT)

```html
<style>
  body { margin: 0; font-family: 'OpenAI Sans', 'Söhne', -apple-system, 'Pretendard', sans-serif; color: #ECECEC; background: #212121; }
  .layout { display: grid; grid-template-columns: 260px 1fr; height: 100vh; }
  .sidebar { background: #171717; padding: 12px; border-right: 1px solid #424242; }
  .sidebar .new { background: #2F2F2F; border: 1px solid #565869; border-radius: 8px; padding: 10px 12px; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 6px; margin-bottom: 14px; }
  .sidebar .item { padding: 8px 10px; border-radius: 6px; font-size: 13px; color: #CDCDCD; cursor: pointer; }
  .sidebar .item:hover { background: #2F2F2F; }
  .sidebar .item.active { background: #2F2F2F; }
  .chat { display: flex; flex-direction: column; height: 100vh; }
  .chat-head { padding: 12px 24px; border-bottom: 1px solid #424242; font-size: 14px; font-weight: 600; }
  .messages { flex: 1; overflow-y: auto; padding: 24px; max-width: 768px; margin: 0 auto; width: 100%; box-sizing: border-box; }
  .msg { display: flex; gap: 14px; align-items: flex-start; padding: 16px 0; border-bottom: 1px solid #2F2F2F; }
  .msg .avatar { width: 32px; height: 32px; border-radius: 50%; flex: 0 0 32px; display: grid; place-items: center; font-weight: 600; font-size: 13px; color: #fff; }
  .msg.user .avatar { background: #565869; }
  .msg.assistant .avatar { background: #10A37F; }
  .msg .content { font-size: 16px; line-height: 1.6; color: #ECECEC; }
  .msg code { background: #2F2F2F; padding: 1px 4px; border-radius: 3px; font-family: ui-monospace, monospace; font-size: 14px; }
  .composer { padding: 16px 24px 24px; max-width: 768px; margin: 0 auto; width: 100%; box-sizing: border-box; }
  .composer .box { background: #2F2F2F; border: 1px solid #424242; border-radius: 9999px; padding: 12px 18px; display: flex; align-items: center; gap: 10px; }
  .composer .box input { flex: 1; background: transparent; border: 0; outline: none; font-size: 15px; font-family: inherit; color: #ECECEC; }
  .composer .box .send { width: 32px; height: 32px; border-radius: 50%; background: #ECECEC; color: #0D0D0D; border: 0; display: grid; place-items: center; cursor: pointer; }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="new">+ 새 채팅</div>
    <div class="item active">디자인 토큰이란?</div>
    <div class="item">React 18 변경점</div>
    <div class="item">CSS Grid 레이아웃</div>
  </aside>
  <main class="chat">
    <div class="chat-head">디자인 토큰이란?</div>
    <div class="messages">
      <div class="msg user">
        <div class="avatar">U</div>
        <div class="content">디자인 시스템에서 토큰이란 무엇인가요?</div>
      </div>
      <div class="msg assistant">
        <div class="avatar">✦</div>
        <div class="content">
          디자인 토큰은 색상, 폰트, 간격, 그림자 등 UI를 구성하는 작은 단위 결정들을 <strong>이름이 붙은 변수</strong>로 정리한 것입니다.<br/><br/>
          예를 들어 <code>--color-primary-500</code>이라는 토큰은 "이 시스템에서 가장 강조되는 brand 색"을 의미합니다. 토큰을 사용하면:<br/>
          ① 다크/라이트 모드 자동 전환,<br/>
          ② 브랜드 일관성 유지,<br/>
          ③ 코드 ↔ 디자인 동기화가 쉬워집니다.
        </div>
      </div>
    </div>
    <div class="composer">
      <div class="box">
        <input placeholder="Message ChatGPT…"/>
        <button class="send">↑</button>
      </div>
    </div>
  </main>
</div>
```
