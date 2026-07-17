---
brand: Things 3
brand_ko: 띵스 3
slug: things
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - consumer

color_tone: cool
primary_color_hex: "#3A82F7"
primary_color_name: "Things Blue"
mood:
  - 정갈
  - 아름다움
  - 애플답게

font_category: sans-serif
font_primary: SF Pro
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "별 To-Day 로고 + 블루 체크박스 + 정갈한 SF Pro의 Apple Design Award 할 일 앱"

card_tokens: |
  {
    "light": { "bg": "#F5F5F5", "surface": "#FFFFFF", "border": "#E5E5EA", "fg": "#1D1D1F", "fg_muted": "#8E8E93", "accent": "#3A82F7" },
    "dark":  { "bg": "#1C1C1E", "surface": "#2C2C2E", "border": "#3A3A3C", "fg": "#FFFFFF", "fg_muted": "#8E8E93", "accent": "#3A82F7" }
  }

hero_html: |
  <div style="font-family:-apple-system,'SF Pro Text','Inter',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:14px 18px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:28px;height:28px;background:var(--card-accent);border-radius:6px;display:grid;place-items:center;color:#fff;font:700 16px/1 sans-serif;">★</div>
      <strong style="font-size:18px;font-weight:700;">Today</strong>
      <span style="margin-left:auto;font-size:12px;color:var(--card-fg-muted);">3 to-dos</span>
    </div>
    <div style="padding:12px 18px;display:flex;flex-direction:column;gap:4px;background:var(--card-surface);overflow:hidden;">
      <div style="display:flex;align-items:center;gap:12px;padding:8px 0;font:400 15px/1.4 inherit;">
        <span style="width:18px;height:18px;border:1.5px solid var(--card-accent);border-radius:4px;display:grid;place-items:center;cursor:pointer;background:var(--card-accent);color:#fff;font:700 12px/1 inherit;">✓</span>
        <span style="color:var(--card-fg-muted);text-decoration:line-through;flex:1;">캠페인 시안 PDF 검토</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:8px 0;font:400 15px/1.4 inherit;">
        <span style="width:18px;height:18px;border:1.5px solid var(--card-border);border-radius:4px;cursor:pointer;"></span>
        <div style="flex:1;">
          <div>분기 회고 워크숍 안건 정리</div>
          <div style="color:var(--card-fg-muted);font-size:12px;margin-top:2px;display:flex;gap:8px;align-items:center;"><span style="color:var(--card-accent);">📍 Marketing</span><span>☆ 16:00</span></div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:8px 0;font:400 15px/1.4 inherit;">
        <span style="width:18px;height:18px;border:1.5px solid var(--card-border);border-radius:4px;cursor:pointer;"></span>
        <div style="flex:1;">
          <div>디자인 토큰 PR 머지</div>
          <div style="color:var(--card-fg-muted);font-size:12px;margin-top:2px;"><span style="color:var(--card-accent);">📍 Engineering</span></div>
        </div>
      </div>
    </div>
    <div style="padding:10px 18px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;font:500 13px/1 inherit;color:var(--card-accent);">+ New To-Do</div>
  </div>

sources:
  - https://culturedcode.com/things/
---

### ① 브랜드 DNA
- **브랜드명**: Things 3 (Cultured Code)
- **한 줄 정체성**: macOS·iOS 전용 프리미엄 할 일 앱 — 2017 Apple Design Award
- **공식 디자인 철학**: "Beautifully simple" — Apple HIG 충실, 정갈한 타이포·여백
- **시그니처 요소 1개**: 별(★) To-Day 로고 + Things Blue(#3A82F7) 체크박스 + Inbox/Today/Upcoming/Anytime/Someday 5단계 시간 분류 + SF Pro 본문 17px의 정갈한 톤. Todoist 빨강과 정반대의 단정한 블루

### ② 톤 & 무드
- **핵심 키워드 3개**: 정갈, 아름다움, 애플답게
- **무드 설명**: 라이트 그레이(#F5F5F5) 베이스, 흰 콘텐츠 카드, 보더 거의 없음. 색은 Things Blue 단일 강조 + 별표 옐로. 모서리 6~10px Round.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (4~10px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Things Blue */
  --color-primary-50:  #E0EDFE;
  --color-primary-100: #BDD7FD;
  --color-primary-200: #90BAFB;
  --color-primary-300: #639CFA;
  --color-primary-400: #4D8FF9;
  --color-primary-500: #3A82F7;   /* Things Blue */
  --color-primary-600: #2A6FE0;
  --color-primary-700: #1F55B0;
  --color-primary-800: #143A78;
  --color-primary-900: #082146;

  /* Star (today/evening) yellow */
  --color-star: #FFCC02;

  /* Project deadline pink */
  --color-deadline: #FF3B30;

  /* Neutral (Apple system gray) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #F2F2F7;
  --color-neutral-200:  #E5E5EA;
  --color-neutral-300:  #D1D1D6;
  --color-neutral-500:  #AEAEB2;
  --color-neutral-700:  #8E8E93;
  --color-neutral-800:  #48484A;
  --color-neutral-900:  #1D1D1F;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #D1F0DC;
  --color-success-fg: #34C759;
  --color-warning-bg: #FFF1C5;
  --color-warning-fg: #FF9500;
  --color-error-bg:   #FFDAD7;
  --color-error-fg:   #FF3B30;
  --color-info-bg:    #E0EDFE;
  --color-info-fg:    #3A82F7;

  /* Surface */
  --bg-base:     #F5F5F5;
  --bg-subtle:   #F2F2F7;
  --bg-elevated: #FFFFFF;
  --bg-sidebar:  #F0F0F0;
  --bg-overlay:  rgba(29,29,31,0.40);

  /* Text */
  --text-primary:    #1D1D1F;
  --text-secondary:  #48484A;
  --text-tertiary:   #8E8E93;
  --text-on-primary: #FFFFFF;
  --text-link:       #3A82F7;
  --text-disabled:   #C7C7CC;

  /* Border */
  --border-default: #E5E5EA;
  --border-subtle:  #F2F2F7;
  --border-strong:  #C7C7CC;
  --border-focus:   #3A82F7;
}

[data-theme="dark"] {
  --bg-base:     #1C1C1E;
  --bg-subtle:   #2C2C2E;
  --bg-elevated: #2C2C2E;
  --bg-sidebar:  #1C1C1E;
  --text-primary:    #FFFFFF;
  --text-secondary:  #EBEBF5;
  --border-default:  #3A3A3C;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **SF Pro Text/Display** (Apple 시스템)
  - 한글: Apple SD Gothic Neo / Pretendard
- **위계**:
  - Display: 34px / 700 / 1.2 (Today 헤더)
  - H1: 28px / 700 / 1.25
  - H2: 22px / 700 / 1.3
  - H3: 17px / 700 / 1.35
  - Body Large: 17px / 400 / 1.45 (Apple HIG body)
  - Body: 15px / 400 / 1.4
  - Body Small: 13px / 500 / 1.4
  - Caption: 12px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 18px;
  --space-xl: 24px;
  --space-2xl: 36px;
  --space-3xl: 56px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 체크박스 */
--radius-lg: 10px;
--radius-xl: 14px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.10);
```

### ⑧ Iconography
- **스타일**: SF Symbols (Apple 시스템)
- **Stroke 굵기**: 1.5~2px (SF Symbol Regular)
- **모서리 처리**: Round
- **추천 라이브러리**: SF Symbols

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 15px/1 -apple-system, 'SF Pro Text', sans-serif; border-radius: 6px; padding: 8px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--color-primary-500); border: 1px solid var(--border-default); }
.btn-add { background: transparent; color: var(--color-primary-500); padding: 8px 0; font: 500 15px/1 inherit; display: inline-flex; align-items: center; gap: 6px; }
.btn-add::before { content: '+'; font: 400 18px/1 inherit; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 6px; padding: 9px 12px; font: 400 15px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(58,130,247,0.20); }
.todo-input { background: transparent; border: 0; font: 400 17px/1.4 inherit; color: var(--text-primary); outline: 0; padding: 0; }
```

**Card (To-Do row)**
```css
.todo { display: grid; grid-template-columns: 22px 1fr; gap: 12px; padding: 9px 0; align-items: flex-start; }
.todo .check { width: 18px; height: 18px; border: 1.5px solid var(--border-strong); border-radius: 4px; cursor: pointer; margin-top: 2px; display: grid; place-items: center; transition: all 150ms; }
.todo .check:hover { border-color: var(--color-primary-500); }
.todo.done .check { background: var(--color-primary-500); color: #fff; border-color: var(--color-primary-500); font: 800 12px/1 inherit; }
.todo.done .check::before { content: '✓'; }
.todo.done .title { color: var(--text-tertiary); text-decoration: line-through; }
.todo .title { font: 400 17px/1.4 inherit; color: var(--text-primary); }
.todo .meta { font: 500 13px/1.4 inherit; color: var(--text-tertiary); margin-top: 3px; display: flex; gap: 12px; align-items: center; }
.todo .meta .project { color: var(--color-primary-500); display: inline-flex; align-items: center; gap: 4px; }
.todo .meta .when { display: inline-flex; align-items: center; gap: 4px; }
.todo .meta .deadline { color: var(--color-deadline); }
.project-card { background: var(--bg-elevated); border-radius: 10px; padding: 14px 18px; box-shadow: var(--shadow-sm); }
.project-card .head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.project-card .progress { width: 22px; height: 22px; border-radius: 9999px; background: conic-gradient(var(--color-primary-500) 60%, var(--bg-subtle) 0); }
.project-card .title { font: 700 17px/1.3 inherit; }
```

**Badge / Tag**
```css
.tag { background: var(--bg-subtle); color: var(--text-secondary); border-radius: 9999px; padding: 2px 10px; font: 600 12px/1.4 inherit; }
.area-badge { background: var(--bg-subtle); color: var(--text-primary); border-radius: 6px; padding: 3px 10px; font: 600 13px/1.4 inherit; }
.star-yellow { color: var(--color-star); font: 700 14px/1 inherit; }
.heading { font: 700 17px/1.4 inherit; color: var(--text-primary); padding: 14px 0 6px; border-bottom: 1px solid var(--border-default); margin-bottom: 6px; }
```

**Navigation (Sidebar — 5단계 시간 분류)**
```css
.sidebar { background: var(--bg-sidebar); width: 240px; padding: 14px 0; }
.sidebar .item { display: flex; align-items: center; gap: 14px; padding: 7px 18px; font: 500 15px/1 inherit; color: var(--text-secondary); cursor: pointer; border-radius: 6px; margin: 1px 8px; }
.sidebar .item:hover { background: var(--border-default); }
.sidebar .item.active { background: var(--color-primary-500); color: #fff; font-weight: 600; }
.sidebar .item.active .count { color: rgba(255,255,255,0.85); }
.sidebar .item .ico { width: 22px; text-align: center; font-size: 16px; }
.sidebar .item .count { margin-left: auto; font: 500 13px/1 inherit; color: var(--text-tertiary); }
.sidebar h2 { padding: 12px 18px 4px; font: 600 12px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; margin: 0; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 240ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);   /* Apple spring */
```

### ⑪ Anti-patterns
1. 5단계 시간 분류(Inbox/Today/Upcoming/Anytime/Someday) 축소 금지 — 시간 축 분류가 정체성
2. 체크박스를 원형으로 변경 금지 — Things는 4px Round 사각 체크박스
3. 본문 폰트 17px 미만으로 줄이기 금지 — Apple HIG 본문 톤
4. 색을 여러 가지 추가 금지 — Blue·Star Yellow·Deadline Red 3색만
5. 풀필 9999px 카드 모서리 금지 — 6~10px Round + 거의 보더 없음

### ⑫ 시그니처 적용 예시 (Things 3 Today)

```html
<style>
  body { margin: 0; font-family: -apple-system, 'SF Pro Text', 'SF Pro Display', Pretendard, sans-serif; color: #1D1D1F; background: #F5F5F5; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: #F0F0F0; padding: 14px 0; }
  .sidebar .brand { padding: 0 18px 14px; display: flex; align-items: center; gap: 10px; }
  .sidebar .brand .logo { width: 30px; height: 30px; background: #3A82F7; border-radius: 6px; display: grid; place-items: center; color: #fff; font: 700 16px/1 inherit; }
  .sidebar .brand .name { font: 700 17px/1 inherit; }
  .item { display: flex; align-items: center; gap: 14px; padding: 8px 18px; font: 500 15px/1 inherit; color: #48484A; cursor: pointer; border-radius: 6px; margin: 1px 8px; }
  .item:hover { background: #E5E5EA; }
  .item.active { background: #3A82F7; color: #fff; font-weight: 600; }
  .item .ico { width: 22px; text-align: center; font-size: 16px; }
  .item .count { margin-left: auto; font: 500 13px/1 inherit; color: #8E8E93; }
  .item.active .count { color: rgba(255,255,255,0.85); }
  h2 { padding: 14px 18px 4px; font: 600 12px/1.4 inherit; color: #8E8E93; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
  main { background: #fff; padding: 28px 36px; }
  main h1 { margin: 0 0 6px; font: 700 30px/1.2 inherit; display: flex; align-items: center; gap: 12px; }
  main h1 .star { color: #FFCC02; }
  main .when { color: #8E8E93; font: 500 14px/1 inherit; margin-bottom: 18px; }
  .heading-row { font: 700 17px/1.4 inherit; padding: 12px 0 6px; color: #1D1D1F; border-bottom: 1px solid #E5E5EA; margin-bottom: 6px; display: flex; align-items: center; gap: 10px; }
  .heading-row .star { color: #FFCC02; font-size: 14px; }
  .heading-row .count { margin-left: auto; font: 600 13px/1 inherit; color: #8E8E93; }
  .todo { display: grid; grid-template-columns: 22px 1fr; gap: 14px; padding: 9px 0; align-items: flex-start; }
  .todo .check { width: 20px; height: 20px; border: 1.5px solid #C7C7CC; border-radius: 4px; cursor: pointer; margin-top: 2px; display: grid; place-items: center; transition: all 200ms ease; }
  .todo .check:hover { border-color: #3A82F7; }
  .todo.done .check { background: #3A82F7; color: #fff; border-color: #3A82F7; font: 800 13px/1 inherit; }
  .todo.done .check::before { content: '✓'; }
  .todo.done .title { color: #8E8E93; text-decoration: line-through; }
  .todo .title { font: 400 17px/1.45 inherit; color: #1D1D1F; }
  .todo .meta { font: 500 13px/1.4 inherit; color: #8E8E93; margin-top: 3px; display: flex; gap: 14px; align-items: center; }
  .todo .meta .proj { color: #3A82F7; display: inline-flex; align-items: center; gap: 4px; }
  .todo .meta .proj::before { content: '📍'; font-size: 11px; }
  .todo .meta .when { display: inline-flex; align-items: center; gap: 4px; color: #FFCC02; }
  .todo .meta .deadline { color: #FF3B30; display: inline-flex; align-items: center; gap: 4px; }
  .add-row { font: 500 15px/1 inherit; color: #3A82F7; padding: 14px 0 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
  .add-row::before { content: '+'; font-size: 18px; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">★</div><div class="name">Things</div></div>
    <div class="item"><span class="ico">📥</span>Inbox<span class="count">2</span></div>
    <div class="item active"><span class="ico" style="color:#FFCC02;">★</span>Today<span class="count">3</span></div>
    <div class="item"><span class="ico">📅</span>Upcoming<span class="count">8</span></div>
    <div class="item"><span class="ico">🗂</span>Anytime<span class="count">14</span></div>
    <div class="item"><span class="ico">📦</span>Someday<span class="count">22</span></div>
    <div class="item"><span class="ico">📓</span>Logbook</div>
    <h2>Areas</h2>
    <div class="item"><span class="ico" style="color:#3A82F7;">●</span>Work</div>
    <div class="item"><span class="ico" style="color:#34C759;">●</span>Personal</div>
    <div class="item"><span class="ico" style="color:#FF9500;">●</span>Learning</div>
  </aside>
  <main>
    <h1>★ <span>Today</span></h1>
    <div class="when">Thursday · May 14, 2026</div>
    <div class="heading-row"><span class="star">★</span>This Morning<span class="count">3 to-dos</span></div>
    <div class="todo done">
      <span class="check"></span>
      <div><div class="title">캠페인 시안 PDF 검토</div><div class="meta"><span class="proj">Marketing</span></div></div>
    </div>
    <div class="todo">
      <span class="check"></span>
      <div><div class="title">분기 회고 워크숍 안건 정리</div><div class="meta"><span class="proj">Marketing</span><span class="when">★ 16:00</span></div></div>
    </div>
    <div class="todo">
      <span class="check"></span>
      <div><div class="title">디자인 토큰 PR 머지</div><div class="meta"><span class="proj">Engineering</span><span class="deadline">⚐ 5/15 마감</span></div></div>
    </div>
    <div class="heading-row" style="margin-top:14px;"><span>🌙</span>This Evening<span class="count">1 to-do</span></div>
    <div class="todo">
      <span class="check"></span>
      <div><div class="title">디자인 시스템 책 30p 읽기</div><div class="meta"><span class="proj" style="color:#FF9500;">Learning</span></div></div>
    </div>
    <span class="add-row">New To-Do</span>
  </main>
</div>
```
