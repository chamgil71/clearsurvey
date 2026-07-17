---
brand: LINE
brand_ko: 라인
slug: line
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - social
  - lifestyle

color_tone: cool
primary_color_hex: "#06C755"
primary_color_name: "LINE Green"
mood:
  - 친근
  - 통통
  - 캐릭터

font_category: sans-serif
font_primary: LINE Seed
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

released_year: 2011
last_major_revision: 2024
signature_keyword: "라이트 LINE 그린 + 통통한 말풍선 + 브라운/코니 캐릭터의 일본·아시아 메신저"

card_tokens: |
  {
    "light": { "bg": "#8CABD8", "surface": "#FFFFFF", "border": "#E5E7EB", "fg": "#1F1F1F", "fg_muted": "#6B7280", "accent": "#06C755" },
    "dark":  { "bg": "#1A1A1A", "surface": "#2C2C2C", "border": "#383838", "fg": "#F7F8F9", "fg_muted": "#D1D5DB", "accent": "#06C755" }
  }

hero_html: |
  <div style="font-family:'LINE Seed','LINESeedKR','Pretendard',-apple-system,sans-serif;background:var(--card-bg);height:100%;display:grid;grid-template-rows:auto 1fr auto;color:var(--card-fg);">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:30px;height:30px;background:var(--card-accent);border-radius:8px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">L</div>
      <strong style="font-size:14px;font-weight:700;">브라운 친구들</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">12명</span>
    </div>
    <div style="padding:12px 10px;display:flex;flex-direction:column;gap:8px;overflow:hidden;">
      <div style="align-self:flex-start;display:flex;gap:6px;align-items:flex-end;">
        <div style="width:30px;height:30px;background:#5C4033;border-radius:9999px;flex:none;"></div>
        <div style="background:var(--card-surface);border-radius:18px 18px 18px 4px;padding:8px 12px;max-width:75%;font:500 13px/1.4 inherit;box-shadow:0 1px 1px rgba(0,0,0,0.04);color:var(--card-fg);">오늘 스티커 신상 봤어? 🐻</div>
      </div>
      <div style="align-self:flex-end;background:var(--card-accent);color:#fff;border-radius:18px 18px 4px 18px;padding:8px 12px;max-width:75%;font:500 13px/1.4 inherit;">코니 너무 귀여워 💚</div>
      <div style="align-self:flex-end;background:var(--card-surface);border-radius:18px;padding:6px;max-width:70%;box-shadow:0 1px 1px rgba(0,0,0,0.04);">
        <div style="width:120px;height:80px;background:linear-gradient(135deg,#FFE082,#FFB74D);border-radius:14px;display:grid;place-items:center;font:900 32px/1 inherit;">🐰</div>
      </div>
    </div>
    <div style="padding:8px 10px;background:var(--card-surface);display:flex;gap:6px;align-items:center;border-top:1px solid var(--card-border);">
      <div style="flex:1;background:#F3F4F6;border-radius:9999px;padding:8px 14px;font:500 13px/1 inherit;color:var(--card-fg-muted);">아루나우</div>
      <div style="width:32px;height:32px;border-radius:9999px;background:var(--card-accent);color:#fff;display:grid;place-items:center;font:700 14px/1 inherit;">➤</div>
    </div>
  </div>

sources:
  - https://line.me/
  - https://designsystem.line.me/
---

### ① 브랜드 DNA
- **브랜드명**: LINE
- **한 줄 정체성**: 일본·대만·태국 1위 메신저 — 메시지·스티커·페이·뉴스를 한 앱에
- **공식 디자인 철학**: "Closing the Distance" — 거리감을 줄이는 친근하고 따뜻한 톤
- **시그니처 요소 1개**: 라이트 LINE Green(#06C755, WhatsApp보다 한 톤 밝고 살짝 옐로기) + 통통한 18px Round 말풍선 + 브라운·코니 등 자체 IP 캐릭터 스티커 문화. 헤더는 흰색이며 다른 메신저와 달리 채팅 배경에 라이트 블루 그라데이션을 허용

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근, 통통, 캐릭터
- **무드 설명**: 모서리는 둥글둥글, 자간은 0에 가깝다. 캐릭터 IP가 UI의 일부 — 빈 화면·로딩·축하에 브라운/코니/샐리가 등장. 본문 폰트는 LINE Seed로 살짝 어린 느낌.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀
- **밀도(Density)**: Comfortable — 말풍선 8px 패딩, 행간 1.4
- **모서리 성향**: Round (16~22px 말풍선)
- **평면성**: Subtle — 0.5~1px 그림자, 카드 보더는 매우 옅음

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - LINE Green */
  --color-primary-50:  #E6FAEE;
  --color-primary-100: #C2F0D2;
  --color-primary-200: #94E5AF;
  --color-primary-300: #5ED385;
  --color-primary-400: #2EC868;
  --color-primary-500: #06C755;   /* LINE Green */
  --color-primary-600: #04A847;
  --color-primary-700: #058036;
  --color-primary-800: #054F23;
  --color-primary-900: #023316;

  /* Secondary - LINE Brown (캐릭터 톤) */
  --color-secondary-500: #5C4033;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F8F9;
  --color-neutral-100:  #F3F4F6;
  --color-neutral-200:  #E5E7EB;
  --color-neutral-300:  #D1D5DB;
  --color-neutral-500:  #9CA3AF;
  --color-neutral-700:  #6B7280;
  --color-neutral-800:  #374151;
  --color-neutral-900:  #1F1F1F;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6FAEE;
  --color-success-fg: #058036;
  --color-warning-bg: #FFF3D6;
  --color-warning-fg: #B07A1F;
  --color-error-bg:   #FDE2E2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E0F2FE;
  --color-info-fg:    #0284C7;

  /* Surface */
  --bg-base:     #8CABD8;     /* 채팅 라이트 블루 (시그니처) */
  --bg-subtle:   #F7F8F9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.40);

  /* Text */
  --text-primary:    #1F1F1F;
  --text-secondary:  #374151;
  --text-tertiary:   #6B7280;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #9CA3AF;

  /* Border */
  --border-default: #E5E7EB;
  --border-subtle:  #F3F4F6;
  --border-strong:  #D1D5DB;
  --border-focus:   #06C755;
}

[data-theme="dark"] {
  --bg-base:     #1A1A1A;
  --bg-subtle:   #232323;
  --bg-elevated: #2C2C2C;
  --text-primary:   #F7F8F9;
  --text-secondary: #D1D5DB;
  --border-default: #383838;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문/일본어: **LINE Seed** (자체 폰트, 무료 배포)
  - 한글: LINE Seed KR / Pretendard
  - 시스템 폴백: -apple-system, "Hiragino Sans"
- **위계**:
  - Display: 28px / 700 / 1.25
  - H1: 22px / 700 / 1.3
  - H2: 19px / 700 / 1.3
  - H3: 16px / 700 / 1.35
  - Body Large: 16px / 500 / 1.5
  - Body: 14px / 500 / 1.4
  - Body Small: 13px / 500 / 1.4
  - Caption: 11px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 36px;
  --space-3xl: 56px;
  ```
- **Container**: 모바일 100%, 데스크톱 max-width 1200px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 18px;   /* 말풍선 시그니처 */
--radius-xl: 22px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 1px rgba(0,0,0,0.04);   /* 말풍선 */
--shadow-md: 0 2px 8px rgba(0,0,0,0.06);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.10);
--shadow-xl: 0 20px 48px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- **스타일**: Filled (LINE Friends 캐릭터 톤) + Rounded outline
- **Stroke 굵기**: 2px
- **모서리 처리**: Round (매우 둥글게)
- **추천 라이브러리**: 자체 / Phosphor Bold / Material Symbols Rounded

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 'LINE Seed', Pretendard, sans-serif; border-radius: 9999px; padding: 12px 22px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); box-shadow: 0 2px 0 rgba(4,168,71,0.25); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 0; }
.btn-ghost { background: transparent; color: var(--color-primary-700); }
.btn-send { width: 36px; height: 36px; padding: 0; }
```

**Input**
```css
.field { background: var(--bg-subtle); border: 1px solid transparent; border-radius: 9999px; padding: 10px 16px; font: 500 14px/1.3 inherit; color: var(--text-primary); }
.field:focus { background: var(--bg-elevated); border-color: var(--color-primary-500); outline: 0; }
```

**Card (Message bubble)**
```css
.bubble { max-width: 75%; padding: 8px 12px; border-radius: 18px; font: 500 14px/1.4 inherit; box-shadow: var(--shadow-sm); }
.bubble.in  { background: #fff; color: var(--text-primary); align-self: flex-start; border-bottom-left-radius: 4px; }
.bubble.out { background: var(--color-primary-500); color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
.sticker { background: transparent; box-shadow: none; padding: 0; font-size: 60px; line-height: 1; }
.avatar-line { width: 30px; height: 30px; border-radius: 9999px; flex: none; }
```

**Badge / Tag**
```css
.badge-new { background: var(--color-primary-500); color: #fff; border-radius: 9999px; padding: 2px 8px; font: 700 11px/1.4 inherit; }
.badge-unread { background: #EF4444; color: #fff; border-radius: 9999px; min-width: 18px; height: 18px; display: inline-grid; place-items: center; font: 700 11px/1 inherit; padding: 0 5px; }
.tag-soft { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 9999px; padding: 4px 10px; font: 700 11px/1.3 inherit; }
```

**Navigation (Bottom tab)**
```css
.tabbar { display: grid; grid-template-columns: repeat(5, 1fr); background: var(--bg-elevated); border-top: 1px solid var(--border-default); }
.tabbar .tab { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 0 8px; font: 600 10px/1 inherit; color: var(--text-tertiary); cursor: pointer; }
.tabbar .tab.active { color: var(--color-primary-500); }
.tabbar .tab .icon { font-size: 22px; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 380ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);   /* 스티커 등장 */
```

### ⑪ Anti-patterns
1. 다크 그린(#075E54 등 WhatsApp 톤) 사용 금지 — LINE Green은 라이트하고 옐로기 있는 톤
2. 말풍선 모서리 8px 이하 금지 — 18px Round가 시그니처
3. 캐릭터 없이 빈 상태 화면 비우기 금지 — 브라운/코니/샐리/제임스/문 등 활용
4. 본문 글꼴에 명조/세리프 사용 금지 — LINE Seed의 둥근 산세리프 톤 유지
5. 헤더에 그린 풀배경 금지 — 헤더는 흰색, 그린은 액션·강조용

### ⑫ 시그니처 적용 예시 (LINE 채팅 UI)

```html
<style>
  body { margin: 0; font-family: 'LINE Seed','LINESeedKR','Pretendard',-apple-system,'Hiragino Sans',sans-serif; color: #1F1F1F; background: #8CABD8; }
  .app { max-width: 420px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { background: #fff; padding: 12px 16px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #E5E7EB; }
  .topbar .logo { width: 32px; height: 32px; background: #06C755; border-radius: 8px; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .topbar h1 { margin: 0; font: 700 16px/1.2 inherit; }
  .topbar .sub { font: 500 11px/1 inherit; color: #6B7280; margin-top: 2px; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; font-size: 18px; color: #374151; }
  .chat { padding: 14px 12px; display: flex; flex-direction: column; gap: 10px; background: #8CABD8; min-height: 0; overflow-y: auto; }
  .row { display: flex; gap: 6px; align-items: flex-end; max-width: 100%; }
  .row.in  { justify-content: flex-start; }
  .row.out { justify-content: flex-end; }
  .avatar { width: 30px; height: 30px; border-radius: 9999px; flex: none; }
  .avatar.brown { background: radial-gradient(circle at 30% 30%, #7A5A45 0, #5C4033 60%); }
  .name { font: 600 11px/1 inherit; color: #fff; margin-bottom: 4px; text-shadow: 0 1px 1px rgba(0,0,0,0.15); }
  .bubble { padding: 8px 12px; border-radius: 18px; font: 500 14px/1.4 inherit; box-shadow: 0 1px 1px rgba(0,0,0,0.05); max-width: 250px; }
  .bubble.in  { background: #fff; color: #1F1F1F; border-bottom-left-radius: 4px; }
  .bubble.out { background: #06C755; color: #fff; border-bottom-right-radius: 4px; }
  .sticker { font-size: 64px; line-height: 1; padding: 0; background: transparent; box-shadow: none; }
  .time { font: 500 10px/1 inherit; color: #fff; align-self: flex-end; text-shadow: 0 1px 1px rgba(0,0,0,0.15); }
  .compose { background: #fff; padding: 8px 10px; display: flex; gap: 8px; align-items: center; border-top: 1px solid #E5E7EB; }
  .compose .ico { width: 28px; text-align: center; color: #6B7280; font-size: 20px; }
  .compose .field { flex: 1; background: #F3F4F6; border-radius: 9999px; padding: 10px 16px; font: 500 14px/1 inherit; color: #1F1F1F; border: 0; outline: 0; }
  .compose .send { width: 36px; height: 36px; border-radius: 9999px; background: #06C755; color: #fff; border: 0; display: grid; place-items: center; font: 800 14px/1 inherit; box-shadow: 0 2px 0 rgba(4,168,71,0.25); cursor: pointer; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">L</div>
    <div>
      <h1>브라운의 친구들</h1>
      <div class="sub">멤버 12명 · 활동중 3명</div>
    </div>
    <div class="right"><span>📞</span><span>🎥</span><span>≡</span></div>
  </header>
  <main class="chat">
    <div class="row in">
      <div class="avatar brown"></div>
      <div>
        <div class="name">브라운</div>
        <div class="bubble in">오늘 스티커 신상 봤어? 🐻</div>
      </div>
    </div>
    <div class="row out">
      <div class="bubble out">코니 너무 귀여워 💚</div>
      <div class="time">19:04</div>
    </div>
    <div class="row out">
      <div class="bubble out sticker">🐰</div>
      <div class="time">19:04</div>
    </div>
    <div class="row in">
      <div class="avatar" style="background:#FFB74D"></div>
      <div>
        <div class="name">샐리</div>
        <div class="bubble in">나도 사러갈게! 🐤</div>
      </div>
    </div>
  </main>
  <div class="compose">
    <div class="ico">+</div>
    <input class="field" placeholder="아루나우" />
    <div class="ico">😊</div>
    <button class="send">➤</button>
  </div>
</div>
```
