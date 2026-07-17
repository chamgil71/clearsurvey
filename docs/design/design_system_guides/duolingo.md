---
brand: Duolingo
brand_ko: 듀오링고
slug: duolingo
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - consumer
  - lifestyle

color_tone: cool
primary_color_hex: "#58CC02"
primary_color_name: "Duolingo Green"
mood:
  - 게임화
  - 친근함
  - 활기참

font_category: display
font_primary: Feather Bold
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - humanism
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2011
last_major_revision: 2024
signature_keyword: "Duo 부엉이 마스코트와 굵은 라운드 그림자의 게임화 학습 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F7F7", "border": "#E5E5E5", "fg": "#3C3C3C", "fg_muted": "#777777", "accent": "#58CC02" },
    "dark":  { "bg": "#1F1F1F", "surface": "#383838", "border": "#383838", "fg": "#FFFFFF", "fg_muted": "#AFAFAF", "accent": "#6FD432" }
  }

hero_html: |
  <div style="font-family:'Feather Bold','DIN Round Pro','Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:24px;height:24px;background:var(--card-accent);border-radius:50%;color:#fff;display:grid;place-items:center;font-size:14px;">🦉</span>
      <strong style="font-size:14px;font-weight:800;color:var(--card-accent);letter-spacing:-0.01em;">duolingo</strong>
      <span style="margin-left:auto;font-size:11px;color:#FF9600;font-weight:800;display:flex;align-items:center;gap:2px;">🔥 12</span>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:var(--card-accent);border-radius:16px;padding:14px;color:#fff;text-align:center;box-shadow:0 4px 0 #58A700;">
        <div style="font-size:11px;opacity:0.85;text-transform:uppercase;letter-spacing:0.04em;font-weight:800;">UNIT 1 · LESSON 1</div>
        <div style="font-size:18px;font-weight:800;margin-top:4px;">기초 인사 표현</div>
      </div>
      <div style="background:var(--card-bg);border:2px solid var(--card-border);border-radius:14px;padding:12px;box-shadow:0 4px 0 #E5E5E5;">
        <div style="font-size:13px;font-weight:800;color:var(--card-fg);margin-bottom:8px;">"안녕하세요"를 영어로?</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
          <div style="background:var(--card-bg);border:2px solid #1CB0F6;border-radius:10px;padding:8px;text-align:center;font-size:13px;font-weight:800;color:#1CB0F6;box-shadow:0 3px 0 #1CB0F6;">Hello</div>
          <div style="background:var(--card-bg);border:2px solid var(--card-border);border-radius:10px;padding:8px;text-align:center;font-size:13px;font-weight:800;box-shadow:0 3px 0 #E5E5E5;">Goodbye</div>
        </div>
      </div>
      <button style="background:var(--card-accent);color:#fff;border:0;border-bottom:4px solid #58A700;border-radius:14px;padding:10px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;text-transform:uppercase;letter-spacing:0.04em;">계속하기</button>
    </div>
  </div>

sources:
  - https://www.duolingo.com/
  - https://design.duolingo.com/
  - https://blog.duolingo.com/
---

### ① 브랜드 DNA
- **브랜드명**: Duolingo
- **한 줄 정체성**: 게임처럼 매일 5분, 부엉이가 채찍질하는 언어 학습 앱
- **공식 디자인 철학**: "Make learning fun and effective — playful, mascot-led, gamified"
- **시그니처 요소 1개**: Duo 부엉이 마스코트 + Duolingo Green(#58CC02) + 모든 버튼의 4px 하단 그림자(누르면 들어가는 게임 톤)

### ② 톤 & 무드
- **핵심 키워드 3개**: 게임화, 친근함, 활기참
- **무드 설명**: 흰 캔버스 + 굵은 라운드 + 색이 풍부한 카드. 게임 UX의 핵심인 "버튼 눌림" 효과(box-shadow를 컬러 어두운 톤으로 4px)가 모든 인터랙션에 적용된다.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀 (mascot)
- **밀도(Density)**: Comfortable — 큰 터치 타깃
- **모서리 성향**: Round (12~24px)
- **평면성**: Layered — 컬러 그림자(skeumorphic-like)

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Duolingo Green */
  --color-primary-50:  #E5F8D5;
  --color-primary-100: #C2EFA4;
  --color-primary-200: #94E368;
  --color-primary-300: #6FD432;
  --color-primary-400: #58CC02;  /* 기본 */
  --color-primary-500: #58CC02;
  --color-primary-600: #58A700;     /* 그림자 색 */
  --color-primary-700: #46850A;
  --color-primary-800: #336107;
  --color-primary-900: #1F3D04;

  /* Secondary - Duolingo Blue (correct answer) */
  --color-secondary-500: #1CB0F6;

  /* Accent colors */
  --color-streak: #FF9600;        /* 불꽃 */
  --color-gem:    #1CB0F6;        /* 보석 */
  --color-heart:  #FF4B4B;        /* 하트 */

  /* Neutral - warm */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #F1F1F1;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #AFAFAF;
  --color-neutral-700:  #777777;
  --color-neutral-800:  #4B4B4B;
  --color-neutral-900:  #3C3C3C;
  --color-neutral-1000: #1F1F1F;

  /* Semantic */
  --color-success-bg: #E5F8D5;
  --color-success-fg: #58CC02;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #FF9600;
  --color-error-bg:   #FFE0E0;
  --color-error-fg:   #FF4B4B;
  --color-info-bg:    #DDF4FE;
  --color-info-fg:    #1CB0F6;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(60,60,60,0.50);

  /* Text */
  --text-primary:    #3C3C3C;
  --text-secondary:  #777777;
  --text-tertiary:   #AFAFAF;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F1F1F1;
  --border-strong:  #C7C7C7;
  --border-focus:   #58CC02;
}

[data-theme="dark"] {
  --bg-base: #1F1F1F;
  --bg-subtle: #2D2D2D;
  --bg-elevated: #383838;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Feather Bold (Duolingo 자체 자체) / DIN Round Pro — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.02em
  - H1: 32px / 800 / 1.15 / -0.01em
  - H2: 22px / 800 / 1.27 / 0
  - H3: 17px / 800 / 1.3 / 0
  - Body Large: 16px / 700 / 1.5 / 0
  - Body: 14px / 700 / 1.43 / 0
  - Body Small: 13px / 700 / 1.43 / 0
  - Caption: 11px / 800 / 1.27 / 0.04em (uppercase)

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
- **Container**: max-width 540px (앱 콘텐츠), 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
시그니처 — 모든 액션 element는 컬러 다운(2-shade darker) 4px 하단 그림자:
```css
--shadow-none: none;
--shadow-button: 0 4px 0 var(--color-primary-600);    /* primary 버튼 */
--shadow-card: 0 4px 0 var(--color-neutral-200);
--shadow-sm: 0 2px 0 rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 16px 32px rgba(88,204,2,0.30);
```

### ⑧ Iconography
- **스타일**: Filled + 일러스트레이션 (mascot 친화)
- **Stroke 굵기**: N/A (filled)
- **모서리 처리**: Round
- **추천 라이브러리**: 자체 일러스트 + Lucide 폴백

### ⑨ 컴포넌트 가이드

**Button** (시그니처 — 4px shadow)
```css
.btn {
  font: 800 14px/1 'Feather Bold','DIN Round Pro','Pretendard',sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-radius: var(--radius-md);
  padding: 12px 18px;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  border: 0;
  cursor: pointer;
  transition: transform 80ms ease, box-shadow 80ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; box-shadow: 0 4px 0 var(--color-primary-600); }
.btn-primary:hover { background: var(--color-primary-300); }
.btn-primary:active { transform: translateY(2px); box-shadow: 0 2px 0 var(--color-primary-600); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); box-shadow: 0 4px 0 var(--color-neutral-300); }

.btn-secondary { background: #fff; color: var(--color-secondary-500); border: 2px solid var(--border-default); box-shadow: 0 4px 0 var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); box-shadow: none; }
.btn-danger { background: var(--color-error-fg); color: #fff; box-shadow: 0 4px 0 #C73A3A; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 2px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 700;
  box-shadow: 0 4px 0 var(--border-default);
}
.input:focus { outline: none; border-color: var(--color-secondary-500); box-shadow: 0 4px 0 var(--color-secondary-500); }
```

**Card** (Lesson card)
```css
.card { background: #fff; border: 2px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-card); }
.card-elevated { box-shadow: 0 6px 0 var(--border-default); }
.card-outlined { box-shadow: none; }
```

**Badge / Streak/XP**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 800; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; text-transform: uppercase; letter-spacing: 0.04em; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 2px solid var(--border-default); color: var(--text-primary); }
.streak { color: var(--color-streak); font-weight: 800; display: inline-flex; align-items: center; gap: 4px; }
.gem    { color: var(--color-gem); font-weight: 800; display: inline-flex; align-items: center; gap: 4px; }
.heart  { color: var(--color-heart); font-weight: 800; display: inline-flex; align-items: center; gap: 4px; }
```

**Navigation**
```css
.topnav { padding: 12px 16px; display: flex; align-items: center; gap: 12px; background: var(--bg-base); border-bottom: 2px solid var(--border-default); }
.topnav .brand { color: var(--color-primary-500); font-weight: 800; font-size: 18px; letter-spacing: -0.01em; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 200ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
/* 정답 셀렉트 시 spring */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. button에 4px 하단 그림자 제거 금지 — Duolingo 시그니처 (눌리는 효과)
2. 본문에 thin (300~400) 폰트 사용 금지 — 700+ Bold가 시그니처
3. Duo 부엉이 마스코트를 임의 색 변경 금지
4. streak/gem/heart 의미 색을 임의 매핑 금지
5. 정답/오답 신호를 색만으로 표현 금지 — 사운드 + 애니메이션 동반

### ⑫ 시그니처 적용 예시 (Lesson)

```html
<style>
  body { margin: 0; font-family: 'Feather Bold', 'DIN Round Pro', 'Pretendard', -apple-system, sans-serif; color: #3C3C3C; background: #fff; font-weight: 700; }
  .app { max-width: 540px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 16px; display: flex; align-items: center; gap: 14px; border-bottom: 2px solid #E5E5E5; }
  .topbar .close { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #E5E5E5; display: grid; place-items: center; cursor: pointer; }
  .topbar .progress { flex: 1; height: 16px; background: #E5E5E5; border-radius: 9999px; position: relative; overflow: hidden; }
  .topbar .progress .fill { height: 100%; width: 64%; background: #58CC02; border-radius: 9999px; position: relative; }
  .topbar .progress .fill::after { content:""; position: absolute; left: 4px; right: 4px; top: 3px; height: 3px; background: rgba(255,255,255,0.4); border-radius: 9999px; }
  .topbar .heart { color: #FF4B4B; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; font-size: 16px; }
  .lesson { padding: 24px 20px; display: flex; flex-direction: column; gap: 20px; }
  .lesson .question { font-size: 18px; font-weight: 800; }
  .lesson .duo { font-size: 64px; text-align: center; line-height: 1; }
  .lesson .prompt { background: #fff; border: 2px solid #E5E5E5; border-radius: 16px; padding: 16px 18px; font-size: 18px; font-weight: 800; box-shadow: 0 4px 0 #E5E5E5; }
  .options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .option { background: #fff; border: 2px solid #E5E5E5; border-radius: 14px; padding: 16px; font-size: 16px; font-weight: 800; text-align: center; cursor: pointer; box-shadow: 0 4px 0 #E5E5E5; transition: transform 80ms ease, box-shadow 80ms ease; font-family: inherit; }
  .option:active { transform: translateY(2px); box-shadow: 0 2px 0 #E5E5E5; }
  .option.selected { border-color: #1CB0F6; color: #1CB0F6; box-shadow: 0 4px 0 #1CB0F6; background: #DDF4FE; }
  .option.correct { border-color: #58CC02; background: #E5F8D5; color: #58A700; box-shadow: 0 4px 0 #58A700; }
  .footer { padding: 16px 20px 24px; }
  .check { background: #58CC02; color: #fff; border: 0; border-radius: 16px; padding: 16px; font-size: 16px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 0 #58A700; width: 100%; text-transform: uppercase; letter-spacing: 0.06em; font-family: inherit; transition: transform 80ms ease, box-shadow 80ms ease; }
  .check:active { transform: translateY(2px); box-shadow: 0 2px 0 #58A700; }
</style>

<div class="app">
  <header class="topbar">
    <div class="close">✕</div>
    <div class="progress"><div class="fill"></div></div>
    <div class="heart">♥ 5</div>
    <div class="streak" style="color:#FF9600; font-weight:800;">🔥 12</div>
  </header>
  <main class="lesson">
    <div class="duo">🦉</div>
    <div class="question">올바른 번역을 선택하세요</div>
    <div class="prompt">"안녕하세요"</div>
    <div class="options">
      <button class="option selected">Hello</button>
      <button class="option">Goodbye</button>
      <button class="option">Thank you</button>
      <button class="option">Sorry</button>
    </div>
  </main>
  <div class="footer">
    <button class="check">확인</button>
  </div>
</div>
```
