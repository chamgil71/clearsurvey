---
brand: Anthropic
brand_ko: 앤스로픽
slug: anthropic
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai

color_tone: warm
primary_color_hex: "#CC785C"
primary_color_name: "Anthropic Coral"
mood:
  - 따뜻함
  - 사려깊음
  - 인문적

font_category: serif
font_primary: Tiempos / Styrene
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - humanism
  - retro-craft

theme_modes:
  - light
  - dark

released_year: 2021
last_major_revision: 2024
signature_keyword: "크림 캔버스(#F0EEE6)에 코럴 액센트와 세리프 헤드라인의 인문적 AI 톤"

card_tokens: |
  {
    "light": { "bg": "#F0EEE6", "surface": "#FFFFFF", "border": "#E4E1D7", "fg": "#191919", "fg_muted": "#7C7869", "accent": "#CC785C" },
    "dark":  { "bg": "#2A2620", "surface": "#3A352E", "border": "#3A352E", "fg": "#F0EEE6", "fg_muted": "#A39E89", "accent": "#D88861" }
  }

hero_html: |
  <div style="font-family:'Tiempos Headline',Georgia,'Apple SD Gothic Neo',serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);border-radius:50%;"></span>
      <strong style="font-family:'Styrene B',-apple-system,sans-serif;font-size:13px;font-weight:600;">Claude</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;overflow:hidden;">
      <div style="display:flex;gap:8px;align-items:flex-start;">
        <span style="width:24px;height:24px;border-radius:50%;background:var(--card-fg);color:var(--card-bg);display:grid;place-items:center;font-family:'Styrene B',sans-serif;font-size:10px;font-weight:600;flex:0 0 24px;">U</span>
        <div style="font-family:'Styrene B',-apple-system,sans-serif;font-size:12px;line-height:1.55;color:var(--card-fg);">디자인 시스템을 한 문장으로 설명한다면?</div>
      </div>
      <div style="display:flex;gap:8px;align-items:flex-start;">
        <span style="width:24px;height:24px;border-radius:50%;background:var(--card-accent);color:#2A2620;display:grid;place-items:center;font-family:serif;font-size:14px;font-weight:700;flex:0 0 24px;">✦</span>
        <div style="font-size:13px;line-height:1.6;color:var(--card-fg);font-style:normal;">"디자인 시스템은 <em style="font-style:italic;">팀이 같은 결정을 두 번 하지 않게 해주는 합의의 기록</em>입니다 — 색, 글자, 여백 같은 작은 결정부터 컴포넌트와 패턴까지를 명명하고 공유하는 살아있는 문서이지요."</div>
      </div>
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--card-border);background:var(--card-bg);">
      <div style="background:var(--card-surface);border:1px solid var(--card-border);border-radius:12px;padding:10px 14px;font-family:'Styrene B',-apple-system,sans-serif;font-size:11px;color:var(--card-fg-muted);display:flex;align-items:center;gap:8px;">
        Claude에게 메시지…
        <span style="margin-left:auto;width:24px;height:24px;border-radius:50%;background:var(--card-accent);color:#2A2620;display:grid;place-items:center;font-size:11px;">↑</span>
      </div>
    </div>
  </div>

sources:
  - https://www.anthropic.com/
  - https://claude.ai/
  - https://www.anthropic.com/news
---

### ① 브랜드 DNA
- **브랜드명**: Anthropic
- **한 줄 정체성**: AI 안전(Safety) 연구를 중심에 둔, Claude를 만드는 인간 중심 AI 회사
- **공식 디자인 철학**: "Thoughtful, calm, human — AI that's helpful, harmless, and honest"
- **시그니처 요소 1개**: 크림 캔버스(#F0EEE6) + Anthropic Coral(#CC785C) + Tiempos 세리프 헤드라인 — 따뜻한 인문적 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 따뜻함, 사려깊음, 인문적
- **무드 설명**: 종이 같은 크림 배경에 깊은 검정 본문, 코럴이 한 점의 강조. 세리프 헤드라인이 책 표지처럼 차분하다.
- **비주얼 스타일**: 휴머니즘 + 살짝의 retro-craft (세리프 + 종이 톤)
- **밀도(Density)**: Comfortable — longform 대화/기사
- **모서리 성향**: Soft (8~16px)
- **평면성**: Flat — 그림자 거의 없음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Anthropic Coral (다크 대비 위해 라이트니스 상향) */
  --color-primary-50:  #2A1B14;
  --color-primary-100: #3D261B;
  --color-primary-200: #5A3727;
  --color-primary-300: #8B4D38;
  --color-primary-400: #B26349;
  --color-primary-500: #D88861;  /* Anthropic Coral (dark-tuned) */
  --color-primary-600: #E29E7C;
  --color-primary-700: #EAB59A;
  --color-primary-800: #F1CDB9;
  --color-primary-900: #F8E5DA;

  /* Secondary - Anthropic Slate Blue */
  --color-secondary-500: #9AA6B5;

  /* Neutral - Warm cream/slate ramp, inverted for dark (브랜드 시그니처) */
  --color-neutral-0:    #191510;
  --color-neutral-50:   #1F1B16;     /* darkest warm */
  --color-neutral-100:  #2A2620;     /* canvas (dark) */
  --color-neutral-200:  #3A352E;
  --color-neutral-300:  #4D4738;
  --color-neutral-500:  #807A66;
  --color-neutral-700:  #A39E89;
  --color-neutral-800:  #CBC6B5;
  --color-neutral-900:  #F0EEE6;     /* lightest cream */
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #1E2C1B;
  --color-success-fg: #9AD192;
  --color-warning-bg: #2E211A;
  --color-warning-fg: #E29E7C;
  --color-error-bg:   #321A14;
  --color-error-fg:   #E8907A;
  --color-info-bg:    #1C232B;
  --color-info-fg:    #9AA6B5;

  /* Surface */
  --bg-base:     #2A2620;            /* canvas (dark) */
  --bg-subtle:   #1F1B16;
  --bg-elevated: #3A352E;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #F0EEE6;
  --text-secondary:  #CBC6B5;
  --text-tertiary:   #A39E89;
  --text-on-primary: #2A2620;
  --text-disabled:   #6B6657;

  /* Border */
  --border-default: #3A352E;
  --border-subtle:  #322D27;
  --border-strong:  #4D4738;
  --border-focus:   #D88861;
}

[data-theme="light"] {
  /* Primary - Anthropic Coral */
  --color-primary-50:  #FBF1EC;
  --color-primary-100: #F4DCD0;
  --color-primary-200: #E9B9A4;
  --color-primary-300: #DD9778;
  --color-primary-400: #D5876A;
  --color-primary-500: #CC785C;  /* Anthropic Coral */
  --color-primary-600: #B26349;
  --color-primary-700: #8B4D38;
  --color-primary-800: #663828;
  --color-primary-900: #422317;

  /* Secondary - Anthropic Slate Blue */
  --color-secondary-500: #6E7B8C;

  /* Neutral - Cream/Slate ramp (브랜드 시그니처) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAF9F5;     /* lightest cream */
  --color-neutral-100:  #F0EEE6;     /* canvas cream */
  --color-neutral-200:  #E4E1D7;
  --color-neutral-300:  #D2CDB8;
  --color-neutral-500:  #A39E89;
  --color-neutral-700:  #7C7869;
  --color-neutral-800:  #4D4938;
  --color-neutral-900:  #191919;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCEDD6;
  --color-success-fg: #3E7A38;
  --color-warning-bg: #FBF1EC;
  --color-warning-fg: #B26349;
  --color-error-bg:   #F8DAD3;
  --color-error-fg:   #B0432D;
  --color-info-bg:    #E5EAEF;
  --color-info-fg:    #6E7B8C;

  /* Surface */
  --bg-base:     #F0EEE6;            /* canvas cream */
  --bg-subtle:   #E4E1D7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,25,25,0.40);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #4D4938;
  --text-tertiary:   #7C7869;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A39E89;

  /* Border */
  --border-default: #E4E1D7;
  --border-subtle:  #EFEDE3;
  --border-strong:  #D2CDB8;
  --border-focus:   #CC785C;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문 헤드: Tiempos Headline (Klim Type, 상업 라이선스, 폴백 Georgia)
  - 영문 본문: Styrene B (Berton Hasebe / Commercial Type, 폴백 -apple-system)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo (헤드라인 시 Noto Serif KR 권장)
- **위계**:
  - Display (Tiempos): 64px / 600 / 1.05 / -0.01em
  - H1 (Tiempos): 40px / 500 / 1.15 / -0.005em
  - H2 (Tiempos): 28px / 500 / 1.25 / 0
  - H3 (Styrene): 20px / 600 / 1.3 / 0
  - Body Large (Styrene): 17px / 400 / 1.6 / 0
  - Body (Styrene): 15px / 400 / 1.55 / 0
  - Body Small (Styrene): 13px / 400 / 1.5 / 0
  - Caption (Styrene): 12px / 500 / 1.33 / 0.04em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 720px (longform), 1200px (마케팅)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 20px;
--radius-full: 9999px;
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
- **스타일**: Outline (정밀, 손맛 살짝)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 'Styrene B', -apple-system, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 18px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-base); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #2A2620; }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 15px;
  font-family: 'Styrene B', -apple-system, 'Pretendard', sans-serif;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(216,136,97,0.30); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 20px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 500; line-height: 18px; display: inline-flex; align-items: center; font-family: 'Styrene B', sans-serif; }
.tag-solid   { background: var(--color-primary-500); color: #2A2620; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 16px 24px; display: flex; align-items: center; gap: 24px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .logo { width: 22px; height: 22px; background: var(--color-primary-500); border-radius: 50%; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 450ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 흰색 배경(#FFF)을 페이지 base로 사용 금지 — 크림(#F0EEE6)이 시그니처
2. 채도 높은 brand 색을 본문 단락 배경으로 사용 금지 — 인문적 톤 위배
3. 헤드라인에 sans-serif 강제 사용 금지 — Tiempos 세리프가 시그니처
4. Coral 위 흰 텍스트 외 다른 색 사용 금지
5. 대화 영역에 컬러풀 그라데이션 사용 금지 — Claude의 차분한 톤 보존

### ⑫ 시그니처 적용 예시 (Claude.ai)

```html
<style>
  body { margin: 0; font-family: 'Styrene B', -apple-system, 'Pretendard', sans-serif; color: #F0EEE6; background: #2A2620; }
  .layout { display: grid; grid-template-columns: 260px 1fr; height: 100vh; }
  .sidebar { background: #1F1B16; padding: 16px 12px; border-right: 1px solid #3A352E; }
  .sidebar .new { background: #3A352E; border: 1px solid #4D4738; border-radius: 10px; padding: 10px 12px; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 6px; margin-bottom: 16px; font-family: inherit; }
  .sidebar h3 { font-size: 11px; color: #A39E89; text-transform: uppercase; letter-spacing: 0.04em; padding: 4px 8px; margin: 0 0 4px; font-weight: 600; }
  .sidebar .item { padding: 8px 10px; border-radius: 6px; font-size: 13px; color: #CBC6B5; cursor: pointer; }
  .sidebar .item:hover { background: rgba(255,255,255,0.06); }
  .sidebar .item.active { background: #3A352E; color: #F0EEE6; }
  .chat { display: flex; flex-direction: column; height: 100vh; background: #2A2620; }
  .chat-head { padding: 16px 32px; border-bottom: 1px solid #3A352E; display: flex; align-items: center; gap: 8px; font-family: 'Styrene B', sans-serif; font-size: 14px; font-weight: 600; }
  .chat-head .dot { width: 22px; height: 22px; border-radius: 50%; background: #D88861; }
  .messages { flex: 1; overflow-y: auto; padding: 32px; max-width: 760px; margin: 0 auto; width: 100%; box-sizing: border-box; }
  .msg { display: flex; gap: 14px; align-items: flex-start; padding: 16px 0; }
  .msg .avatar { width: 32px; height: 32px; border-radius: 50%; flex: 0 0 32px; display: grid; place-items: center; font-weight: 600; font-size: 13px; color: #2A2620; }
  .msg.user .avatar { background: #F0EEE6; color: #2A2620; }
  .msg.assistant .avatar { background: #D88861; font-family: 'Tiempos Headline', Georgia, serif; font-size: 16px; }
  .msg .content { font-size: 16px; line-height: 1.65; color: #F0EEE6; }
  .msg.assistant .content em { font-family: 'Tiempos Headline', Georgia, serif; font-style: italic; font-size: 17px; }
  .composer { padding: 16px 32px 32px; max-width: 760px; margin: 0 auto; width: 100%; box-sizing: border-box; }
  .composer .box { background: #3A352E; border: 1px solid #4D4738; border-radius: 14px; padding: 14px 16px; display: flex; align-items: center; gap: 10px; }
  .composer .box input { flex: 1; background: transparent; border: 0; outline: none; font-size: 15px; font-family: inherit; color: #F0EEE6; }
  .composer .box .send { width: 32px; height: 32px; border-radius: 50%; background: #D88861; color: #2A2620; border: 0; display: grid; place-items: center; cursor: pointer; }
  .quote { border-left: 3px solid #D88861; padding-left: 16px; margin: 16px 0; font-family: 'Tiempos Headline', Georgia, serif; font-style: italic; font-size: 18px; line-height: 1.5; color: #CBC6B5; }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="new">+ 새 대화</div>
    <h3>최근</h3>
    <div class="item active">디자인 시스템 정의</div>
    <div class="item">Claude 사용법</div>
    <div class="item">Constitutional AI 원리</div>
  </aside>
  <main class="chat">
    <div class="chat-head"><div class="dot"></div> Claude</div>
    <div class="messages">
      <div class="msg user">
        <div class="avatar">U</div>
        <div class="content">디자인 시스템을 한 문장으로 설명한다면?</div>
      </div>
      <div class="msg assistant">
        <div class="avatar">✦</div>
        <div class="content">
          <div class="quote">디자인 시스템은 팀이 같은 결정을 두 번 하지 않게 해주는, <em>합의의 기록</em>입니다.</div>
          색, 글자, 여백 같은 작은 단위 결정부터 컴포넌트와 패턴까지를 이름 붙여 공유하는, 살아있는 문서이죠. 잘 만들어진 디자인 시스템은 새 화면을 만들 때마다 처음부터 시작하지 않게 해줍니다.
        </div>
      </div>
    </div>
    <div class="composer">
      <div class="box">
        <input placeholder="Claude에게 메시지…"/>
        <button class="send">↑</button>
      </div>
    </div>
  </main>
</div>
```
