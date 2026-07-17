---
brand: Microsoft To Do
brand_ko: 마이크로소프트 투두
slug: ms-todo
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - consumer

color_tone: cool
primary_color_hex: "#3D7BD9"
primary_color_name: "To Do Blue"
mood:
  - 단정
  - 하루집중
  - 체크

font_category: sans-serif
font_primary: Segoe UI
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "체크 표시 로고 + 블루 그라데이션 헤더 + My Day의 단정한 할 일 앱"

card_tokens: |
  {
    "light": { "bg": "#FAF9F8", "surface": "#FFFFFF", "border": "#EDEBE9", "fg": "#201F1E", "fg_muted": "#605E5C", "accent": "#3D7BD9" },
    "dark":  { "bg": "#201F1E", "surface": "#323130", "border": "#424140", "fg": "#FFFFFF", "fg_muted": "#D2D0CE", "accent": "#639BD3" }
  }

hero_html: |
  <div style="font-family:'Segoe UI','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:14px 16px;background:linear-gradient(135deg,#3D7BD9,#2A5DA8);color:#fff;display:flex;flex-direction:column;gap:4px;">
      <div style="font:600 12px/1 inherit;opacity:0.9;">☀ 내 하루</div>
      <strong style="font:700 22px/1.2 inherit;">5월 14일 목요일</strong>
      <span style="font:500 12px/1 inherit;opacity:0.8;">오늘 4개 · 완료 1개</span>
    </div>
    <div style="padding:10px 12px;display:flex;flex-direction:column;gap:5px;overflow:hidden;background:var(--card-surface);">
      <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--card-surface);border:1px solid var(--card-border);border-radius:4px;font:500 13px/1.4 inherit;">
        <input type="checkbox" checked style="accent-color:#3D7BD9;width:16px;height:16px;"/>
        <span style="color:var(--card-fg-muted);text-decoration:line-through;flex:1;">디자인 시스템 v3 PR 머지</span>
        <span style="color:#FFB900;">⭐</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--card-surface);border:1px solid var(--card-border);border-radius:4px;font:500 13px/1.4 inherit;">
        <input type="checkbox" style="accent-color:#3D7BD9;width:16px;height:16px;"/>
        <div style="flex:1;">
          <div>캠페인 시안 검토</div>
          <div style="color:var(--card-fg-muted);font-size:11px;margin-top:2px;display:flex;gap:8px;"><span>📅 오늘</span><span>🔔 16:00</span></div>
        </div>
        <span style="color:#FFB900;">⭐</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--card-surface);border:1px solid var(--card-border);border-radius:4px;font:500 13px/1.4 inherit;">
        <input type="checkbox" style="accent-color:#3D7BD9;width:16px;height:16px;"/>
        <div style="flex:1;">
          <div>분기 회고 워크숍 안건</div>
          <div style="color:var(--card-fg-muted);font-size:11px;margin-top:2px;display:flex;gap:8px;"><span>📅 5/15</span></div>
        </div>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <span style="color:var(--card-accent);font:700 14px/1 inherit;">+</span>
      <input style="flex:1;border:0;outline:0;font:400 13px/1 inherit;color:var(--card-fg-muted);background:transparent;" placeholder="할 일 추가" />
    </div>
  </div>

sources:
  - https://todo.microsoft.com/
  - https://fluent2.microsoft.design/
---

### ① 브랜드 DNA
- **브랜드명**: Microsoft To Do (구 Wunderlist)
- **한 줄 정체성**: MS 365 통합 할 일 앱 — Outlook Flagged 메일·Planner 작업과 동기화
- **공식 디자인 철학**: Fluent 2 — 단정한 체크리스트 + 하루 집중 패널(My Day)
- **시그니처 요소 1개**: 체크(✓) 모노그램 + To Do Blue 그라데이션 헤더(#3D7BD9 → #2A5DA8) + ☀ My Day 패널. Things 3·Todoist의 빨강과 정반대의 단정한 블루

### ② 톤 & 무드
- **핵심 키워드 3개**: 단정, 하루집중, 체크
- **무드 설명**: 라이트 베이지 그레이 베이스. 리스트별 컬러 테마 가능. 체크 표시는 액션의 정체성. 모서리 4px Soft.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - To Do Blue */
  --color-primary-50:  #E0EAF6;
  --color-primary-100: #BCD0EC;
  --color-primary-200: #8FB5DF;
  --color-primary-300: #639BD3;
  --color-primary-400: #3D7BD9;
  --color-primary-500: #3D7BD9;   /* To Do Blue */
  --color-primary-600: #2A5DA8;
  --color-primary-700: #1F4680;
  --color-primary-800: #142E5C;
  --color-primary-900: #0A1A38;

  /* Theme colors (리스트별 사용자 지정) */
  --th-blue:    #3D7BD9;
  --th-purple:  #7719AA;
  --th-red:     #A4262C;
  --th-orange:  #F7630C;
  --th-yellow:  #FFB900;
  --th-green:   #107C10;
  --th-teal:    #038387;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAF9F8;
  --color-neutral-100:  #F3F2F1;
  --color-neutral-200:  #EDEBE9;
  --color-neutral-300:  #D2D0CE;
  --color-neutral-500:  #A19F9D;
  --color-neutral-700:  #605E5C;
  --color-neutral-800:  #323130;
  --color-neutral-900:  #201F1E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DFF6DD;
  --color-success-fg: #107C10;
  --color-warning-bg: #FFF4CE;
  --color-warning-fg: #797673;
  --color-error-bg:   #FDE7E9;
  --color-error-fg:   #A4262C;
  --color-info-bg:    #DEECF9;
  --color-info-fg:    #0078D4;

  /* Surface */
  --bg-base:     #FAF9F8;
  --bg-subtle:   #F3F2F1;
  --bg-elevated: #FFFFFF;
  --bg-hero:     linear-gradient(135deg, #3D7BD9 0%, #2A5DA8 100%);
  --bg-overlay:  rgba(0,0,0,0.40);

  /* Text */
  --text-primary:    #201F1E;
  --text-secondary:  #323130;
  --text-tertiary:   #605E5C;
  --text-on-primary: #FFFFFF;
  --text-link:       #3D7BD9;
  --text-disabled:   #A19F9D;

  /* Border */
  --border-default: #EDEBE9;
  --border-subtle:  #F3F2F1;
  --border-strong:  #D2D0CE;
  --border-focus:   #3D7BD9;
}

[data-theme="dark"] {
  --bg-base:     #201F1E;
  --bg-subtle:   #2B2A29;
  --bg-elevated: #323130;
  --text-primary:    #FFFFFF;
  --text-secondary:  #D2D0CE;
  --border-default:  #424140;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Segoe UI** / Aptos / system-ui
  - 한글: 맑은 고딕 / Pretendard
- **위계**:
  - Display: 32px / 700 / 1.2 (My Day 날짜)
  - H1: 24px / 700 / 1.25
  - H2: 18px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 15px / 500 / 1.55
  - Body: 14px / 400 / 1.5
  - Body Small: 12px / 500 / 1.4
  - Caption: 11px / 600 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```

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
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.14);
--shadow-hero: 0 4px 16px rgba(61,123,217,0.30);
```

### ⑧ Iconography
- **스타일**: Fluent UI Icons — Outline 1.5px
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Fluent System Icons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 'Segoe UI', system-ui, sans-serif; border-radius: 4px; padding: 8px 16px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-add { background: transparent; color: var(--color-primary-500); padding: 10px 12px; font: 700 22px/1 inherit; }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
```

**Input (Task add bar)**
```css
.task-add { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; }
.task-add input { all: unset; flex: 1; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.task-add input::placeholder { color: var(--text-tertiary); }
.task-add .ico { color: var(--color-primary-500); font: 700 20px/1 inherit; }
```

**Card (Task row)**
```css
.task { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; padding: 10px 14px; display: grid; grid-template-columns: 18px 1fr auto; gap: 12px; align-items: center; cursor: pointer; }
.task input[type=checkbox] { accent-color: var(--color-primary-500); width: 18px; height: 18px; }
.task .title { font: 500 14px/1.4 inherit; color: var(--text-primary); }
.task .meta  { font: 500 11px/1.4 inherit; color: var(--text-tertiary); margin-top: 3px; display: flex; gap: 8px; flex-wrap: wrap; }
.task.done .title { color: var(--text-tertiary); text-decoration: line-through; }
.task .star { color: var(--th-yellow); cursor: pointer; }
.task.important { border-left: 3px solid var(--th-yellow); padding-left: 11px; }
```

**Badge / Tag**
```css
.tag-due { background: var(--bg-subtle); color: var(--text-secondary); border-radius: 3px; padding: 1px 6px; font: 600 11px/1.4 inherit; }
.tag-due.overdue { background: var(--color-error-bg); color: var(--color-error-fg); }
.tag-reminder { background: var(--color-info-bg); color: var(--color-info-fg); border-radius: 3px; padding: 1px 6px; font: 600 11px/1.4 inherit; }
.tag-step { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 9999px; padding: 1px 8px; font: 600 11px/1.3 inherit; }
```

**Navigation (Sidebar lists)**
```css
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 280px; padding: 12px 0; }
.sidebar .smart { padding: 8px 16px; font: 700 11px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
.sidebar .item { display: flex; align-items: center; gap: 10px; padding: 8px 16px; font: 500 14px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); border-left: 3px solid var(--color-primary-500); padding-left: 13px; font-weight: 700; }
.sidebar .item .count { margin-left: auto; font: 700 11px/1 inherit; color: var(--text-tertiary); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 380ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 헤더를 단색 블루로 평평하게 표현 금지 — 그라데이션(#3D7BD9 → #2A5DA8)이 시그니처
2. ☀ My Day 시그니처 패널 제거 금지 — "오늘의 작업"이 정체성
3. 체크박스 accent-color 회색 금지 — To Do Blue
4. 별표(중요) 외 다른 아이콘으로 우선순위 표시 금지 — ⭐ 는 표준
5. 카드 모서리 12px 이상 금지 — 4px Soft

### ⑫ 시그니처 적용 예시 (To Do My Day)

```html
<style>
  body { margin: 0; font-family: 'Segoe UI', system-ui, Pretendard, sans-serif; color: #201F1E; background: #FAF9F8; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 280px 1fr; min-height: 100vh; }
  .sidebar { background: #fff; border-right: 1px solid #EDEBE9; padding: 12px 0; }
  .sidebar .head { display: flex; align-items: center; gap: 10px; padding: 6px 14px 14px; border-bottom: 1px solid #EDEBE9; }
  .sidebar .head .av { width: 32px; height: 32px; border-radius: 9999px; background: linear-gradient(135deg, #3D7BD9, #2A5DA8); color: #fff; display: grid; place-items: center; font: 700 13px/1 inherit; }
  .sidebar .head .who { font: 700 13px/1.3 inherit; }
  .sidebar .head .em  { font: 500 11px/1.3 inherit; color: #605E5C; margin-top: 2px; }
  .sidebar .item { display: flex; align-items: center; gap: 12px; padding: 10px 16px; font: 500 14px/1 inherit; color: #323130; cursor: pointer; }
  .sidebar .item.active { background: #E0EAF6; color: #1F4680; border-left: 3px solid #3D7BD9; padding-left: 13px; font-weight: 700; }
  .sidebar .item .count { margin-left: auto; font: 700 11px/1 inherit; color: #605E5C; }
  .sidebar h2 { padding: 14px 16px 6px; font: 700 11px/1.4 inherit; color: #605E5C; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
  .sidebar .list { display: flex; align-items: center; gap: 12px; padding: 9px 16px; font: 500 14px/1 inherit; color: #323130; cursor: pointer; }
  .sidebar .list .dot { width: 12px; height: 12px; border-radius: 9999px; }
  main { padding: 0; }
  .hero { background: linear-gradient(135deg, #3D7BD9 0%, #2A5DA8 100%); color: #fff; padding: 32px 36px 24px; box-shadow: 0 4px 16px rgba(61,123,217,0.20); }
  .hero .label { font: 600 12px/1 inherit; opacity: 0.9; }
  .hero h1 { margin: 6px 0 4px; font: 700 28px/1.2 inherit; }
  .hero .sub { font: 500 13px/1 inherit; opacity: 0.85; }
  .hero .actions { display: flex; gap: 14px; margin-top: 16px; }
  .hero .pill { background: rgba(255,255,255,0.18); color: #fff; border-radius: 9999px; padding: 5px 12px; font: 600 12px/1 inherit; backdrop-filter: blur(6px); cursor: pointer; }
  .tasks { padding: 18px 32px; display: grid; gap: 6px; max-width: 800px; }
  .task { background: #fff; border: 1px solid #EDEBE9; border-radius: 4px; padding: 12px 16px; display: grid; grid-template-columns: 20px 1fr auto auto; gap: 14px; align-items: center; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
  .task input[type=checkbox] { accent-color: #3D7BD9; width: 18px; height: 18px; }
  .task .title { font: 500 14px/1.4 inherit; color: #201F1E; }
  .task .meta  { font: 600 11px/1.4 inherit; color: #605E5C; margin-top: 3px; display: flex; gap: 8px; flex-wrap: wrap; }
  .task .meta .tag-due.overdue { background: #FDE7E9; color: #A4262C; border-radius: 3px; padding: 1px 6px; }
  .task .meta .tag-due { background: #F3F2F1; color: #323130; border-radius: 3px; padding: 1px 6px; }
  .task .meta .tag-reminder { background: #DEECF9; color: #0078D4; border-radius: 3px; padding: 1px 6px; }
  .task .meta .tag-step { background: #E0EAF6; color: #1F4680; border-radius: 9999px; padding: 1px 8px; }
  .task.done .title { color: #605E5C; text-decoration: line-through; }
  .task .star { color: #FFB900; font-size: 16px; cursor: pointer; }
  .task.important { border-left: 3px solid #FFB900; padding-left: 13px; }
  .add-bar { background: #fff; border: 1px solid #EDEBE9; border-radius: 4px; padding: 12px 16px; display: flex; align-items: center; gap: 12px; margin-top: 6px; }
  .add-bar .ico { color: #3D7BD9; font: 800 22px/1 inherit; }
  .add-bar input { all: unset; flex: 1; font: 400 14px/1.4 inherit; color: #201F1E; }
  .section-head { margin-top: 24px; padding: 0 32px; font: 700 13px/1.4 inherit; color: #605E5C; text-transform: uppercase; letter-spacing: 0.05em; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="head">
      <div class="av">M</div>
      <div><div class="who">Mia Jeong</div><div class="em">mia@oppadu.com</div></div>
    </div>
    <div style="height:6px"></div>
    <div class="item active">☀ 내 하루<span class="count">4</span></div>
    <div class="item">⭐ 중요<span class="count">2</span></div>
    <div class="item">📅 계획됨<span class="count">7</span></div>
    <div class="item">👤 나에게 할당<span class="count">3</span></div>
    <div class="item">📥 작업<span class="count">12</span></div>
    <h2>내 목록</h2>
    <div class="list"><span class="dot" style="background:#3D7BD9"></span>업무</div>
    <div class="list"><span class="dot" style="background:#7719AA"></span>개인</div>
    <div class="list"><span class="dot" style="background:#107C10"></span>식료품</div>
    <div class="list"><span class="dot" style="background:#F7630C"></span>읽을거리</div>
  </aside>
  <main>
    <section class="hero">
      <div class="label">☀ 내 하루</div>
      <h1>5월 14일 목요일</h1>
      <div class="sub">오늘 4개의 작업 · 1개 완료</div>
      <div class="actions"><span class="pill">+ 제안</span><span class="pill">🔄 새로고침</span><span class="pill">⚙ 설정</span></div>
    </section>
    <section class="tasks">
      <div class="task done">
        <input type="checkbox" checked/>
        <div><div class="title">디자인 시스템 v3 PR 머지</div><div class="meta"><span class="tag-step">2/2 단계</span></div></div>
        <span class="star">⭐</span>
        <span style="color:#605E5C;">›</span>
      </div>
      <div class="task important">
        <input type="checkbox"/>
        <div><div class="title">캠페인 시안 검토</div><div class="meta"><span class="tag-due">📅 오늘</span><span class="tag-reminder">🔔 16:00</span><span class="tag-step">0/3 단계</span></div></div>
        <span class="star">⭐</span>
        <span style="color:#605E5C;">›</span>
      </div>
      <div class="task">
        <input type="checkbox"/>
        <div><div class="title">분기 회고 워크숍 안건 정리</div><div class="meta"><span class="tag-due">📅 5/15</span></div></div>
        <span class="star" style="color:#A19F9D;">☆</span>
        <span style="color:#605E5C;">›</span>
      </div>
      <div class="task">
        <input type="checkbox"/>
        <div><div class="title">팀 점심 식당 예약</div><div class="meta"><span class="tag-due overdue">📅 어제</span></div></div>
        <span class="star" style="color:#A19F9D;">☆</span>
        <span style="color:#605E5C;">›</span>
      </div>
      <div class="add-bar"><span class="ico">+</span><input placeholder="할 일 추가 — 내 하루에 자동 표시"/></div>
    </section>
    <div class="section-head">제안 (어제부터 옮길까요?)</div>
    <section class="tasks" style="padding-top:8px;">
      <div class="task" style="opacity:0.85;">
        <input type="checkbox"/>
        <div><div class="title">팀 점심 식당 예약</div><div class="meta"><span class="tag-due overdue">5/13 만료</span></div></div>
        <span class="star" style="color:#A19F9D;">☆</span>
        <span style="color:#3D7BD9;font:700 11px/1 inherit;">+ 오늘로 이동</span>
      </div>
    </section>
  </main>
</div>
```
