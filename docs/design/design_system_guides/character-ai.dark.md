---
brand: Character.ai
brand_ko: 캐릭터 AI
slug: character-ai
generated: 2026-05-13
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - ai
  - consumer

color_tone: warm
primary_color_hex: "#FFB347"
primary_color_name: "Character Sunshine"
mood:
  - 친근
  - 다채
  - 놀이

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - humanism
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2022
last_major_revision: 2025
signature_keyword: "원형 캐릭터 아바타 + 노란 액센트의 다채로운 채팅 — 페르소나 놀이터 AI"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F1E2", "border": "#F2EAD8", "fg": "#1F1B16", "fg_muted": "#7A6E5C", "accent": "#FFB347" },
    "dark":  { "bg": "#1F1B16", "surface": "#332C24", "border": "#4A4135", "fg": "#FBF8F1", "fg_muted": "#E5DAC2", "accent": "#FFB347" }
  }

hero_html: |
  <div style="font-family:-apple-system,'Inter',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:22px;height:22px;background:linear-gradient(135deg,#FFB347,#FF6F61);border-radius:50%;display:grid;place-items:center;color:#1F1B16;font:900 11px/1 sans-serif;">c</div>
      <span style="font-weight:700;">Character.ai</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:flex-end;gap:6px;">
        <div style="width:22px;height:22px;background:#FF6F61;border-radius:50%;flex-shrink:0;display:grid;place-items:center;color:#1F1B16;font-weight:700;font-size:11px;">A</div>
        <div style="background:#3A332A;border-radius:12px 12px 12px 4px;padding:8px 12px;font-size:11px;max-width:75%;">안녕! 셜록 홈즈야. 무슨 사건이지?</div>
      </div>
      <div style="background:var(--card-accent);color:#1F1B16;border-radius:12px 12px 4px 12px;padding:8px 12px;font-size:11px;align-self:flex-end;max-width:75%;">옆집에서 이상한 소리가 나…</div>
    </div>
    <div style="padding:8px 12px;border-top:1px solid var(--card-border);">
      <div style="background:var(--card-surface);border-radius:9999px;padding:7px 12px;display:flex;align-items:center;gap:8px;font-size:11px;color:var(--card-fg-muted);">
        <span style="flex:1;">메시지 입력…</span>
        <span style="width:22px;height:22px;background:var(--card-accent);border-radius:50%;display:grid;place-items:center;color:#1F1B16;font-weight:700;">→</span>
      </div>
    </div>
  </div>

sources:
  - https://character.ai/
---

### ① 브랜드 DNA
- **브랜드명**: Character.ai
- **한 줄 정체성**: 캐릭터(셜록, 아인슈타인, 애니 캐릭터…)와 1:1 롤플레이 채팅 AI
- **공식 디자인 철학**: "Have a chat with anyone" — 친근한 페르소나 놀이터
- **시그니처 요소 1개**: 원형 컬러풀 캐릭터 아바타 + 카카오톡/메신저 톤의 채팅 버블 + 노랑(#FFB347)~코랄 액센트. AI 도구라기보단 메신저처럼 캐주얼한 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근, 다채, 놀이
- **무드 설명**: 다른 AI 인터페이스(다크/모노톤)와 정반대로 캐주얼하고 컬러풀. 캐릭터마다 다른 아바타 색이 시그니처가 되고 UI는 모두 라운드.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px), 채팅 버블은 비대칭 round
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Character Sunshine */
  --color-primary-50:  #4A2604;
  --color-primary-100: #804108;
  --color-primary-200: #B85F08;
  --color-primary-300: #ED7E10;
  --color-primary-400: #FFB347;     /* 시그니처 */
  --color-primary-500: #FFC062;
  --color-primary-600: #FFD58F;
  --color-primary-700: #FFEAC2;
  --color-primary-800: #FFF1D8;
  --color-primary-900: #FFF6E6;

  /* Secondary - Coral (캐릭터 아바타) */
  --color-secondary-300: #C84D40;
  --color-secondary-500: #FF6F61;
  --color-secondary-700: #FFB4A8;

  /* Avatar palette (다중) */
  --avatar-1: #FF8478;   /* 코랄 */
  --avatar-2: #6FBFFF;   /* 하늘 */
  --avatar-3: #B79CFB;   /* 라일락 */
  --avatar-4: #5DD39E;   /* 민트 */
  --avatar-5: #FFB347;   /* 노랑 */
  --avatar-6: #FF9FBE;   /* 핑크 */

  /* Neutral - Warm charcoal */
  --color-neutral-0:    #14110D;
  --color-neutral-50:   #1F1B16;
  --color-neutral-100:  #2A241D;
  --color-neutral-300:  #4A4135;
  --color-neutral-500:  #8A7C66;
  --color-neutral-700:  #C7BAA2;
  --color-neutral-900:  #FBF8F1;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #14302A;
  --color-success-fg: #5DD39E;
  --color-warning-bg: #38301A;
  --color-warning-fg: #FFC062;
  --color-error-bg:   #3A2220;
  --color-error-fg:   #FF8478;
  --color-info-bg:    #1B2A3D;
  --color-info-fg:    #6FBFFF;

  /* Surface */
  --bg-base:     #1F1B16;
  --bg-subtle:   #2A241D;
  --bg-elevated: #332C24;
  --bg-overlay:  rgba(10,8,6,0.66);

  /* Text */
  --text-primary:    #FBF8F1;
  --text-secondary:  #E5DAC2;
  --text-tertiary:   #B6A98F;
  --text-on-primary: #1F1B16;
  --text-disabled:   #6E634F;

  /* Border */
  --border-default: #4A4135;
  --border-subtle:  #332C24;
  --border-strong:  #5F5444;
  --border-focus:   #FFB347;
}

[data-theme="light"] {
  /* Primary - Character Sunshine */
  --color-primary-50:  #FFF6E6;
  --color-primary-100: #FFEAC2;
  --color-primary-200: #FFD58F;
  --color-primary-300: #FFC062;
  --color-primary-400: #FFB347;     /* 시그니처 */
  --color-primary-500: #FF9D26;
  --color-primary-600: #ED7E10;
  --color-primary-700: #B85F08;
  --color-primary-800: #804108;
  --color-primary-900: #4A2604;

  /* Secondary - Coral (캐릭터 아바타) */
  --color-secondary-300: #FFB4A8;
  --color-secondary-500: #FF6F61;
  --color-secondary-700: #C84D40;

  /* Avatar palette (다중) */
  --avatar-1: #FF6F61;   /* 코랄 */
  --avatar-2: #6FBFFF;   /* 하늘 */
  --avatar-3: #A78BFA;   /* 라일락 */
  --avatar-4: #5DD39E;   /* 민트 */
  --avatar-5: #FFB347;   /* 노랑 */
  --avatar-6: #FF8FB1;   /* 핑크 */

  /* Neutral - Warm cream */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FBF8F1;
  --color-neutral-100:  #F8F1E2;
  --color-neutral-300:  #E5DAC2;
  --color-neutral-500:  #A89A82;
  --color-neutral-700:  #7A6E5C;
  --color-neutral-900:  #1F1B16;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFDF5;
  --color-success-fg: #047857;
  --color-warning-bg: #FFFBEB;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FEF2F2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #EFF6FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FBF8F1;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(31,27,22,0.55);

  /* Text */
  --text-primary:    #1F1B16;
  --text-secondary:  #4A4135;
  --text-tertiary:   #7A6E5C;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A89A82;

  /* Border */
  --border-default: #F2EAD8;
  --border-subtle:  #FBF8F1;
  --border-strong:  #E5DAC2;
  --border-focus:   #FFB347;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Inter / -apple-system 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono
- **위계**:
  - Display: 40px / 700 / 1.15 / -0.02em
  - H1: 26px / 700 / 1.2 / -0.015em
  - H2: 20px / 700 / 1.3 / -0.01em
  - H3: 16px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Caption: 12px / 500 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 14px;
  --space-lg: 22px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 720px (대화창)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 18px;        /* 카드 시그니처 */
--radius-xl: 24px;
--radius-bubble-u: 18px 18px 4px 18px;   /* 사용자 버블 */
--radius-bubble-a: 18px 18px 18px 4px;   /* 캐릭터 버블 */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 6px 18px rgba(0,0,0,0.50);
--shadow-lg: 0 20px 48px rgba(0,0,0,0.60);
```

### ⑧ Iconography
- **스타일**: Outline (1.75px), 둥근 단면
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter,sans-serif; padding: 10px 18px; border-radius: 9999px; border: 0; transition: transform 150ms ease; cursor: pointer; }
.btn-primary { background: var(--color-primary-400); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-500); transform: translateY(-1px); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-700); }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 9999px; padding: 10px 16px; font: 400 14px/1.4 Inter,sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); }
```

**Card (Character) / Bubble**
```css
.char-card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
.char-card .avatar { width: 56px; height: 56px; border-radius: 50%; }
.bubble-u { background: var(--color-primary-400); color: var(--text-on-primary); border-radius: 18px 18px 4px 18px; padding: 10px 14px; max-width: 75%; align-self: flex-end; font: 400 14px/1.55 Inter,sans-serif; }
.bubble-a { background: var(--color-primary-50); color: var(--text-primary); border-radius: 18px 18px 18px 4px; padding: 10px 14px; max-width: 75%; font: 400 14px/1.55 Inter,sans-serif; }
.row-a { display: flex; align-items: flex-end; gap: 8px; }
.row-a .avatar { width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font: 500 11px/1.4 Inter,sans-serif; }
.tag-sun { background: var(--color-primary-50); color: var(--color-primary-700); border: 1px solid var(--color-primary-100); }
.tag-popular { background: var(--color-secondary-500); color: var(--text-on-primary); }
```

**Navigation (Bottom tab)**
```css
.tabbar { background: var(--bg-base); border-top: 1px solid var(--border-default); padding: 10px 14px; display: flex; align-items: center; justify-content: space-around; }
.tabbar .item { display: flex; flex-direction: column; align-items: center; gap: 2px; font: 600 11px/1 Inter,sans-serif; color: var(--text-tertiary); cursor: pointer; }
.tabbar .item.active { color: var(--color-primary-600); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.45, 0.64, 1);
```

### ⑪ Anti-patterns
1. 흑백 모노톤 UI 사용 금지 — 캐릭터 다채로움이 시그니처
2. 채팅 버블 사각형 모서리 사용 금지 — 비대칭 round로 메신저 톤
3. 캐릭터 아바타에 같은 색 일괄 사용 금지 — palette 다양성 유지
4. 진지한 다크 톤 캔버스 강제 금지 — 라이트 모드 디폴트
5. 본문에 강한 굵기(700+) 사용 금지 — 헤더와 캐릭터 이름만

### ⑫ 시그니처 적용 예시

```html
<style>
  .ch-app { font: 14px/1.55 Inter, -apple-system, sans-serif; background: #1F1B16; color: #FBF8F1; min-height: 480px; display: grid; grid-template-rows: auto 1fr auto; max-width: 480px; margin: 0 auto; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 48px rgba(0,0,0,0.60); }
  .ch-app .top { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-bottom: 1px solid #4A4135; }
  .ch-app .top .av { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg,#FF6F61,#FFB347); display: grid; place-items: center; color: #1F1B16; font: 900 14px/1 sans-serif; }
  .ch-app .top .meta h1 { margin: 0; font: 700 15px/1.2 inherit; letter-spacing: -0.005em; }
  .ch-app .top .meta .sub { font: 500 11px/1.3 inherit; color: #B6A98F; }
  .ch-app .top .pop { margin-left: auto; padding: 3px 10px; border-radius: 9999px; background: #FF6F61; color: #1F1B16; font: 600 11px/1.4 inherit; }
  .ch-app .chat { padding: 16px 14px; display: flex; flex-direction: column; gap: 10px; overflow: auto; background: #2A241D; }
  .ch-app .row-a { display: flex; align-items: flex-end; gap: 8px; }
  .ch-app .row-a .av { width: 28px; height: 28px; border-radius: 50%; background: #FF6F61; color: #1F1B16; display: grid; place-items: center; font: 700 12px/1 inherit; flex-shrink: 0; }
  .ch-app .bubble-a { background: #3A332A; color: #FBF8F1; padding: 10px 14px; border-radius: 18px 18px 18px 4px; max-width: 75%; }
  .ch-app .bubble-u { background: #FFB347; color: #1F1B16; padding: 10px 14px; border-radius: 18px 18px 4px 18px; max-width: 75%; align-self: flex-end; }
  .ch-app .composer { padding: 10px 12px; background: #1F1B16; border-top: 1px solid #4A4135; display: flex; align-items: center; gap: 8px; }
  .ch-app .composer .pill { flex: 1; background: #332C24; border-radius: 9999px; padding: 8px 14px; color: #B6A98F; font-size: 13px; }
  .ch-app .composer .send { width: 32px; height: 32px; border-radius: 50%; background: #FFB347; color: #1F1B16; display: grid; place-items: center; font-weight: 700; }
  .ch-app .tabbar { display: flex; padding: 6px 10px 10px; background: #1F1B16; gap: 14px; justify-content: space-around; }
  .ch-app .tabbar .it { font: 600 11px/1 inherit; color: #8A7C66; display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .ch-app .tabbar .it.act { color: #FFB347; }
</style>

<div class="ch-app">
  <header class="top">
    <div class="av">S</div>
    <div class="meta">
      <h1>Sherlock Holmes</h1>
      <div class="sub">탐정 · 빅토리아 런던</div>
    </div>
    <span class="pop">★ 인기</span>
  </header>
  <section class="chat">
    <div class="row-a"><div class="av">S</div><div class="bubble-a">안녕! 셜록 홈즈야. 무슨 사건이지?</div></div>
    <div class="bubble-u">옆집에서 한밤중에 이상한 소리가 나…</div>
    <div class="row-a"><div class="av">S</div><div class="bubble-a">흥미롭군. 시간대와 소리의 종류, 마지막으로 들린 시각을 알려줘. 그리고 그 집 거주자에 대한 정보도.</div></div>
  </section>
  <div class="composer">
    <div class="pill">메시지 입력…</div>
    <div class="send">→</div>
  </div>
  <div class="tabbar">
    <div class="it act">★ Discover</div>
    <div class="it">+ Create</div>
    <div class="it">♥ Saved</div>
    <div class="it">○ Me</div>
  </div>
</div>
```
