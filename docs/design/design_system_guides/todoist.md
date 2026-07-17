---
brand: Todoist
brand_ko: 투두이스트
slug: todoist
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - consumer

color_tone: warm
primary_color_hex: "#E44332"
primary_color_name: "Todoist Red"
mood:
  - 빨강체크
  - 우선순위
  - 자연어

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: round
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2007
last_major_revision: 2025
signature_keyword: "빨강 체크 마크 + 4단계 우선순위 깃발 + 자연어 입력의 할 일 앱"

card_tokens: |
  {
    "light": { "bg": "#FAFAFA", "surface": "#FFFFFF", "border": "#E5E5E5", "fg": "#202124", "fg_muted": "#808080", "accent": "#E44332" },
    "dark":  { "bg": "#1F1F1F", "surface": "#2C2C2C", "border": "#3C3C3C", "fg": "#FFFFFF", "fg_muted": "#999999", "accent": "#E44332" }
  }

hero_html: |
  <div style="font-family:'Inter','SF Pro',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:26px;height:26px;background:var(--card-accent);border-radius:5px;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">✓</div>
      <strong style="font-size:14px;font-weight:600;">오늘</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">3 작업 · 1 완료</span>
    </div>
    <div style="padding:8px 14px;display:flex;flex-direction:column;gap:1px;background:var(--card-surface);overflow:hidden;">
      <div style="display:flex;align-items:center;gap:10px;padding:9px 0;font:500 13px/1.4 inherit;border-bottom:1px solid #F0F0F0;">
        <span style="width:18px;height:18px;border:2px solid var(--card-accent);border-radius:9999px;background:var(--card-accent);color:#fff;display:grid;place-items:center;font:900 11px/1 inherit;">✓</span>
        <span style="color:var(--card-fg-muted);text-decoration:line-through;flex:1;">캠페인 시안 PDF 검토</span>
        <span style="color:var(--card-accent);">⚐</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:9px 0;font:500 13px/1.4 inherit;border-bottom:1px solid #F0F0F0;">
        <span style="width:18px;height:18px;border:2px solid var(--card-accent);border-radius:9999px;display:grid;place-items:center;"></span>
        <div style="flex:1;">
          <div>분기 회고 워크숍 안건 정리</div>
          <div style="color:var(--card-fg-muted);font-size:11px;margin-top:2px;display:flex;gap:8px;"><span style="color:var(--card-accent);font-weight:700;">📅 오늘 16:00</span><span style="color:#246FE0;">#Marketing</span></div>
        </div>
        <span style="color:var(--card-accent);">⚐</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:9px 0;font:500 13px/1.4 inherit;">
        <span style="width:18px;height:18px;border:2px solid #FA8A00;border-radius:9999px;display:grid;place-items:center;"></span>
        <div style="flex:1;">
          <div>이메일 정리</div>
          <div style="color:var(--card-fg-muted);font-size:11px;margin-top:2px;"><span style="color:#246FE0;">#Personal</span></div>
        </div>
        <span style="color:#FA8A00;">⚐</span>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <span style="color:var(--card-accent);font:700 16px/1 inherit;">+</span>
      <input style="flex:1;border:0;outline:0;font:400 13px/1 inherit;color:var(--card-fg-muted);background:transparent;" value="내일 오후 4시 캠페인 회의 #Marketing p1" />
    </div>
  </div>

sources:
  - https://todoist.com/
  - https://doist.com/design
---

### ① 브랜드 DNA
- **브랜드명**: Todoist
- **한 줄 정체성**: 자연어 입력 기반 크로스플랫폼 할 일 앱 — 18년차 연속 출시
- **공식 디자인 철학**: "Calm productivity" — 군더더기 없는 빨강 체크 + 자연어 빠른 추가
- **시그니처 요소 1개**: 빨강(#E44332) 체크 로고 + 4단계 우선순위 깃발(P1 빨강 / P2 오렌지 / P3 블루 / P4 회색) + 자연어 입력("내일 오후 4시 #프로젝트 p1"). MS To Do의 블루·Things의 페이퍼 톤과 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 빨강체크, 우선순위, 자연어
- **무드 설명**: 라이트 베이스 + 흰 카드. 빨강 강조는 체크 표시·우선순위에만, 그 외는 무채색. 카드 모서리 8~10px Round.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 한 화면 다수의 작업
- **모서리 성향**: Round (8~10px)
- **평면성**: Flat — 1px 보더로 구분

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Todoist Red */
  --color-primary-50:  #FCE3E0;
  --color-primary-100: #F8BFB8;
  --color-primary-200: #F2978D;
  --color-primary-300: #EC6F61;
  --color-primary-400: #E85546;
  --color-primary-500: #E44332;   /* Todoist Red */
  --color-primary-600: #C73524;
  --color-primary-700: #9A2719;
  --color-primary-800: #6C1A10;
  --color-primary-900: #420F09;

  /* Priority colors (시그니처) */
  --prio-p1: #E44332;
  --prio-p2: #FA8A00;
  --prio-p3: #246FE0;
  --prio-p4: #808080;

  /* Project colors (사용자 선택 가능) */
  --proj-berry: #B8255F;
  --proj-blue:  #246FE0;
  --proj-green: #299438;
  --proj-yellow:#FAD000;
  --proj-cyan:  #14AAF5;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #CCCCCC;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #808080;
  --color-neutral-800:  #4D4D4D;
  --color-neutral-900:  #202124;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDF1E1;
  --color-success-fg: #299438;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #B07A00;
  --color-error-bg:   #FCDDDA;
  --color-error-fg:   #E44332;
  --color-info-bg:    #DCE9FB;
  --color-info-fg:    #246FE0;

  /* Surface */
  --bg-base:     #FAFAFA;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-sidebar:  #FAFAFA;
  --bg-overlay:  rgba(32,33,36,0.40);

  /* Text */
  --text-primary:    #202124;
  --text-secondary:  #4D4D4D;
  --text-tertiary:   #808080;
  --text-on-primary: #FFFFFF;
  --text-link:       #E44332;
  --text-disabled:   #CCCCCC;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F5F5F5;
  --border-strong:  #CCCCCC;
  --border-focus:   #E44332;
}

[data-theme="dark"] {
  --bg-base:     #1F1F1F;
  --bg-subtle:   #2C2C2C;
  --bg-elevated: #2C2C2C;
  --text-primary:    #FFFFFF;
  --text-secondary:  #CCCCCC;
  --border-default:  #3C3C3C;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / SF Pro / system-ui
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 28px / 700 / 1.2
  - H1: 22px / 700 / 1.25
  - H2: 18px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 14px / 400 / 1.5
  - Body: 14px / 500 / 1.4
  - Body Small: 12px / 500 / 1.4
  - Caption: 11px / 600 / 1.3
  - Strikethrough: 14px / 400 / 1.4 line-through (완료)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 14px;
  --space-xl: 20px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 5px;
--radius-lg: 8px;
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(32,33,36,0.05);
--shadow-md: 0 4px 12px rgba(32,33,36,0.10);
--shadow-lg: 0 12px 28px rgba(32,33,36,0.16);
```

### ⑧ Iconography
- **스타일**: Outline (2px) — 자체 + Phosphor
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, sans-serif; border-radius: 5px; padding: 7px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-add { background: transparent; color: var(--color-primary-500); padding: 6px 0; font: 600 14px/1 inherit; display: inline-flex; align-items: center; gap: 6px; }
.btn-add::before { content: '+'; font: 800 18px/1 inherit; }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
```

**Input (Task quick add)**
```css
.task-add { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 5px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; }
.task-add input { all: unset; flex: 1; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.task-add input::placeholder { color: var(--text-tertiary); }
.task-add .plus { color: var(--color-primary-500); font: 800 18px/1 inherit; }
.parse-hint { font: 500 11px/1.4 inherit; color: var(--text-tertiary); margin-top: 4px; }
.parse-hint code { background: var(--bg-subtle); border-radius: 3px; padding: 1px 5px; font: 600 11px/1.3 monospace; color: var(--color-primary-700); }
```

**Card (Task row)**
```css
.task { display: grid; grid-template-columns: 22px 1fr auto; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border-subtle); align-items: flex-start; }
.task .check { width: 18px; height: 18px; border: 2px solid var(--prio-p4); border-radius: 9999px; cursor: pointer; margin-top: 1px; display: grid; place-items: center; }
.task.p1 .check { border-color: var(--prio-p1); background: rgba(228,67,50,0.08); }
.task.p2 .check { border-color: var(--prio-p2); background: rgba(250,138,0,0.08); }
.task.p3 .check { border-color: var(--prio-p3); background: rgba(36,111,224,0.08); }
.task.done .check { background: var(--prio-p4); color: #fff; }
.task.done.p1 .check { background: var(--prio-p1); }
.task.done .title { color: var(--text-tertiary); text-decoration: line-through; }
.task .title { font: 500 14px/1.4 inherit; color: var(--text-primary); }
.task .meta { font: 600 11px/1.4 inherit; color: var(--text-tertiary); margin-top: 3px; display: flex; gap: 10px; flex-wrap: wrap; }
.task .meta .due-today { color: var(--prio-p1); }
.task .meta .due-overdue { color: var(--prio-p1); font-weight: 800; }
.task .flag { color: var(--prio-p4); cursor: pointer; }
.task.p1 .flag { color: var(--prio-p1); }
.task.p2 .flag { color: var(--prio-p2); }
.task.p3 .flag { color: var(--prio-p3); }
```

**Badge / Tag**
```css
.label  { background: var(--bg-subtle); color: var(--text-secondary); border-radius: 9999px; padding: 1px 8px; font: 600 11px/1.4 inherit; }
.label::before { content: '@'; opacity: 0.6; }
.project { color: var(--proj-blue); font: 600 11px/1.4 inherit; cursor: pointer; }
.project::before { content: '# '; }
.priority-pill { border-radius: 3px; padding: 1px 6px; font: 700 11px/1.3 inherit; }
.pp1 { background: var(--color-error-bg); color: var(--prio-p1); }
.pp2 { background: var(--color-warning-bg); color: var(--prio-p2); }
.pp3 { background: var(--color-info-bg); color: var(--prio-p3); }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--bg-sidebar); border-right: 1px solid var(--border-default); width: 280px; padding: 10px 0; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 7px 16px; font: 500 14px/1 inherit; color: var(--text-secondary); cursor: pointer; border-radius: 5px; margin: 1px 6px; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--color-error-bg); color: var(--prio-p1); font-weight: 700; }
.sidebar .item .count { margin-left: auto; font: 700 12px/1 inherit; color: var(--text-tertiary); }
.sidebar h2 { padding: 10px 16px 4px; font: 700 11px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
.sidebar .project-row { display: flex; align-items: center; gap: 10px; padding: 6px 16px; font: 500 13px/1 inherit; cursor: pointer; }
.sidebar .project-row .dot { width: 10px; height: 10px; border-radius: 9999px; }
```

### ⑩ Motion
```css
--duration-fast: 90ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 우선순위 깃발 색을 단일 색으로 표현 금지 — P1 빨강 / P2 오렌지 / P3 블루 / P4 회색 4단계 시그니처
2. 체크박스 모양을 사각형으로 변경 금지 — 9999px 원형 + 보더가 정체성
3. 자연어 입력 힌트(/p1, #project, @label) 제거 금지 — Todoist 작성 패턴
4. 빨강을 #FF0000 같은 순수 빨강으로 변경 금지 — #E44332 (살짝 톤다운된 빨강)
5. 완료된 작업을 즉시 삭제 금지 — line-through 후 잔존이 시그니처

### ⑫ 시그니처 적용 예시 (Todoist 오늘 뷰)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #202124; background: #FAFAFA; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 280px 1fr; min-height: 100vh; }
  .sidebar { background: #FAFAFA; border-right: 1px solid #E5E5E5; padding: 12px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 16px 16px; }
  .sidebar .brand .logo { width: 28px; height: 28px; background: #E44332; border-radius: 5px; display: grid; place-items: center; color: #fff; font: 900 14px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; }
  .sidebar .add { background: transparent; color: #E44332; font: 700 14px/1 inherit; padding: 6px 16px 12px; cursor: pointer; }
  .sidebar .item { display: flex; align-items: center; gap: 12px; padding: 7px 16px; font: 500 14px/1 inherit; color: #4D4D4D; cursor: pointer; border-radius: 5px; margin: 1px 8px; }
  .sidebar .item.active { background: #FCE3E0; color: #E44332; font-weight: 700; }
  .sidebar .item .count { margin-left: auto; font: 700 12px/1 inherit; color: #808080; }
  .sidebar .item.active .count { color: #E44332; }
  .sidebar h2 { padding: 14px 16px 4px; font: 700 11px/1.4 inherit; color: #808080; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
  .proj { display: flex; align-items: center; gap: 10px; padding: 6px 16px; font: 500 13px/1 inherit; color: #4D4D4D; cursor: pointer; }
  .proj:hover { background: #F5F5F5; }
  .proj .dot { width: 10px; height: 10px; border-radius: 9999px; }
  main { padding: 26px 36px; max-width: 800px; }
  main h1 { margin: 0; font: 700 24px/1.2 inherit; display: inline-flex; align-items: center; gap: 10px; }
  main h1 .em { font-weight: 500; color: #808080; font-size: 14px; }
  .summary { display: flex; align-items: center; gap: 18px; padding: 8px 0 18px; border-bottom: 1px solid #E5E5E5; }
  .summary .pill { background: #FCE3E0; color: #E44332; border-radius: 9999px; padding: 4px 12px; font: 700 12px/1 inherit; }
  .summary .ok { background: #DDF1E1; color: #299438; }
  .summary .right { margin-left: auto; display: flex; gap: 8px; font: 600 12px/1 inherit; color: #808080; }
  .summary .right .ic { padding: 5px 10px; background: #fff; border: 1px solid #E5E5E5; border-radius: 5px; cursor: pointer; }
  .tasks { padding-top: 8px; }
  .task { display: grid; grid-template-columns: 22px 1fr auto; gap: 12px; padding: 11px 0; border-bottom: 1px solid #F0F0F0; align-items: flex-start; cursor: pointer; }
  .task .check { width: 20px; height: 20px; border: 2px solid #808080; border-radius: 9999px; margin-top: 1px; display: grid; place-items: center; cursor: pointer; }
  .task.p1 .check { border-color: #E44332; background: rgba(228,67,50,0.08); }
  .task.p2 .check { border-color: #FA8A00; background: rgba(250,138,0,0.08); }
  .task.p3 .check { border-color: #246FE0; background: rgba(36,111,224,0.08); }
  .task.done .check { background: #E44332; color: #fff; font: 800 12px/1 inherit; }
  .task.done .check::before { content: '✓'; }
  .task.done .title { color: #808080; text-decoration: line-through; }
  .task .title { font: 500 14px/1.4 inherit; color: #202124; }
  .task .meta { font: 600 11px/1.4 inherit; margin-top: 3px; display: flex; gap: 10px; flex-wrap: wrap; }
  .task .meta .due-today { color: #E44332; }
  .task .meta .due-overdue { color: #E44332; font-weight: 800; }
  .task .meta .proj { color: #246FE0; padding: 0; cursor: pointer; }
  .task .meta .proj::before { content: '# '; }
  .task .meta .label { background: #F5F5F5; color: #4D4D4D; border-radius: 9999px; padding: 1px 8px; font: 600 11px/1.4 inherit; }
  .task .meta .label::before { content: '@'; opacity: 0.6; }
  .task .flag { color: #CCCCCC; font: 700 15px/1 inherit; }
  .task.p1 .flag { color: #E44332; }
  .task.p2 .flag { color: #FA8A00; }
  .task.p3 .flag { color: #246FE0; }
  .add-bar { background: #fff; border: 1px solid #E5E5E5; border-radius: 5px; padding: 11px 14px; display: flex; align-items: center; gap: 10px; margin-top: 12px; }
  .add-bar .plus { color: #E44332; font: 800 18px/1 inherit; }
  .add-bar input { all: unset; flex: 1; font: 400 14px/1.4 inherit; color: #202124; }
  .hint { font: 500 11px/1.4 inherit; color: #808080; margin-top: 5px; }
  .hint code { background: #F5F5F5; border-radius: 3px; padding: 1px 5px; font: 700 11px/1.3 SFMono-Regular, monospace; color: #9A2719; margin: 0 2px; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">✓</div><div class="name">Todoist</div></div>
    <div class="add">+ 빠른 작업 추가</div>
    <div class="item">🔍 검색</div>
    <div class="item">📥 받은 편지함<span class="count">2</span></div>
    <div class="item active">📅 오늘<span class="count">3</span></div>
    <div class="item">📆 다가오는 일정<span class="count">12</span></div>
    <div class="item">🔖 라벨 &amp; 필터</div>
    <h2>내 프로젝트</h2>
    <div class="proj"><span class="dot" style="background:#246FE0"></span>Marketing<span style="margin-left:auto;color:#808080;font:700 11px/1 inherit;">8</span></div>
    <div class="proj"><span class="dot" style="background:#299438"></span>Engineering<span style="margin-left:auto;color:#808080;font:700 11px/1 inherit;">14</span></div>
    <div class="proj"><span class="dot" style="background:#B8255F"></span>Design system v3<span style="margin-left:auto;color:#808080;font:700 11px/1 inherit;">5</span></div>
    <div class="proj"><span class="dot" style="background:#FAD000"></span>Personal<span style="margin-left:auto;color:#808080;font:700 11px/1 inherit;">4</span></div>
  </aside>
  <main>
    <h1>📅 오늘 <span class="em">목요일 · 5월 14일</span></h1>
    <div class="summary">
      <span class="pill">3 작업 남음</span>
      <span class="pill ok">1 완료</span>
      <span style="font:500 13px/1 inherit;color:#4D4D4D;">🔥 12일 연속 완료 중</span>
      <div class="right"><span class="ic">▤ 리스트</span><span class="ic">📋 보드</span><span class="ic">⋯</span></div>
    </div>
    <section class="tasks">
      <div class="task p1 done">
        <span class="check"></span>
        <div><div class="title">캠페인 시안 PDF 검토</div><div class="meta"><span class="due-today">📅 오늘</span><span class="proj">Marketing</span></div></div>
        <span class="flag">⚐</span>
      </div>
      <div class="task p1">
        <span class="check"></span>
        <div><div class="title">분기 회고 워크숍 안건 정리</div><div class="meta"><span class="due-today">📅 오늘 16:00</span><span class="proj">Marketing</span><span class="label">팀</span></div></div>
        <span class="flag">⚐</span>
      </div>
      <div class="task p2">
        <span class="check"></span>
        <div><div class="title">디자인 토큰 PR 머지</div><div class="meta"><span class="due-today">📅 오늘</span><span class="proj">Engineering</span><span class="label">code</span></div></div>
        <span class="flag">⚐</span>
      </div>
      <div class="task p4">
        <span class="check"></span>
        <div><div class="title">이메일 정리</div><div class="meta"><span class="proj">Personal</span></div></div>
        <span class="flag">⚐</span>
      </div>
      <div class="add-bar"><span class="plus">+</span><input value="내일 오후 4시 캠페인 회의 #Marketing p1 @팀"/></div>
      <div class="hint">힌트: <code>오늘 5pm</code> 마감, <code>매주 월요일</code> 반복, <code>#프로젝트</code>, <code>@라벨</code>, <code>p1</code>~<code>p4</code> 우선순위, <code>+민지</code> 담당자.</div>
    </section>
  </main>
</div>
```
