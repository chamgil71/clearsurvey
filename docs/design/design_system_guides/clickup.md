---
brand: ClickUp
brand_ko: 클릭업
slug: clickup
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - productivity

color_tone: mixed
primary_color_hex: "#7B68EE"
primary_color_name: "ClickUp Purple"
mood:
  - 활기참
  - 다목적
  - 컬러풀

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "Purple→Pink→Cyan 그라데이션과 Lifebuoy 마스코트의 all-in-one 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F9FB", "border": "#E5E7EB", "fg": "#1A1A2E", "fg_muted": "#7C8087", "accent": "#7B68EE" },
    "dark":  { "bg": "#1A1A2E", "surface": "#2D2F4D", "border": "#3D3F5D", "fg": "#FFFFFF", "fg_muted": "#A5A7B5", "accent": "#9B8AFF" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:linear-gradient(90deg,#7B68EE 0%,#FD71AF 50%,#49CCF9 100%);height:4px;"></div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#7B68EE,#FD71AF);"></div>
        <strong style="font-size:14px;">ClickUp</strong>
        <span style="margin-left:auto;background:#F4F1FE;color:var(--card-accent);padding:2px 6px;border-radius:4px;font-size:10px;font-weight:600;">All-in-one</span>
      </div>
      <h2 style="font-size:18px;font-weight:700;line-height:1.25;margin:6px 0;">하나의 앱으로 모든 작업을.</h2>
      <div style="background:var(--card-surface);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:5px;">
        <div style="display:flex;align-items:center;gap:8px;font-size:11px;">
          <span style="width:14px;height:14px;border-radius:3px;border:2px solid var(--card-accent);flex:0 0 14px;"></span>
          <span style="flex:1;color:var(--card-fg);">디자인 리뷰</span>
          <span style="background:#FFE5DD;color:#FF7E47;padding:1px 5px;border-radius:3px;font-size:9px;font-weight:600;">High</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;font-size:11px;">
          <span style="width:14px;height:14px;border-radius:3px;background:#04A461;color:#fff;display:grid;place-items:center;font-size:9px;flex:0 0 14px;">✓</span>
          <span style="flex:1;color:var(--card-fg-muted);text-decoration:line-through;">스펙 작성</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;font-size:11px;">
          <span style="width:14px;height:14px;border-radius:3px;border:2px solid #FD71AF;flex:0 0 14px;"></span>
          <span style="flex:1;color:var(--card-fg);">QA 일정 잡기</span>
          <span style="background:#E0F4FE;color:#1B83C2;padding:1px 5px;border-radius:3px;font-size:9px;font-weight:600;">Q3</span>
        </div>
      </div>
    </div>
    <button style="background:linear-gradient(135deg,#7B68EE,#FD71AF);color:#fff;border:0;border-radius:8px;padding:10px 16px;margin:0 14px 14px;font-size:13px;font-weight:700;font-family:inherit;">무료로 시작 →</button>
  </div>

sources:
  - https://clickup.com/
  - https://clickup.com/brand
  - https://help.clickup.com/
---

### ① 브랜드 DNA
- **브랜드명**: ClickUp
- **한 줄 정체성**: Tasks, Docs, Goals, Time까지 한 앱에서 끝내는, 활기찬 all-in-one 워크 플랫폼
- **공식 디자인 철학**: "One app to replace them all — save time, simplify work"
- **시그니처 요소 1개**: Purple→Pink→Cyan 3색 그라데이션 + 라이프부이(lifebuoy) 마스코트 — 다목적 활기 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기참, 다목적, 컬러풀
- **무드 설명**: 흰 캔버스 위에 보라/핑크/시안 그라데이션이 흐른다. 기능이 많지만 마스코트와 색이 친근함을 더한다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (라이프부이 마스코트)
- **밀도(Density)**: Compact — 다양한 뷰(List/Board/Calendar) 지원
- **모서리 성향**: Soft (6~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - ClickUp Purple */
  --color-primary-50:  #F4F1FE;
  --color-primary-100: #E5DFFD;
  --color-primary-200: #C9BFFB;
  --color-primary-300: #AC9EF8;
  --color-primary-400: #927EF4;
  --color-primary-500: #7B68EE;  /* ClickUp Purple */
  --color-primary-600: #6755D6;
  --color-primary-700: #5443B3;
  --color-primary-800: #423585;
  --color-primary-900: #2C2257;

  /* Secondary - ClickUp Pink */
  --color-secondary-500: #FD71AF;

  /* Tertiary - Cyan (그라데이션 끝) */
  --color-tertiary-500: #49CCF9;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #F1F2F4;
  --color-neutral-200:  #E4E5E8;
  --color-neutral-300:  #C9CBD0;
  --color-neutral-500:  #7C8087;
  --color-neutral-700:  #4A4D52;
  --color-neutral-800:  #2D3036;
  --color-neutral-900:  #1A1A2E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #04A461;
  --color-warning-bg: #FFE5DD;
  --color-warning-fg: #FF7E47;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FE5050;
  --color-info-bg:    #E0F4FE;
  --color-info-fg:    #1B83C2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F9FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,46,0.40);

  /* Text */
  --text-primary:    #1A1A2E;
  --text-secondary:  #4A4D52;
  --text-tertiary:   #7C8087;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C9CBD0;

  /* Border */
  --border-default: #E4E5E8;
  --border-subtle:  #F1F2F4;
  --border-strong:  #C9CBD0;
  --border-focus:   #7B68EE;
}

[data-theme="dark"] {
  --bg-base: #1A1A2E;
  --bg-subtle: #232440;
  --bg-elevated: #2D2F4D;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL)
  - 한글: Pretendard (OFL)
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

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
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 20px 40px rgba(123,104,238,0.20);
```

### ⑧ Iconography
- **스타일**: Outline (sharp ramp) + Filled
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 13px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-lg);
  padding: 0 14px;
  height: 34px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)); color: #fff; }
.btn-primary:hover { filter: brightness(1.05); }
.btn-primary:active { filter: brightness(0.95); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); filter: none; }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-primary-50); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 6px 10px;
  height: 32px;
  font-size: 13px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(123,104,238,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Priority pill**
```css
.tag { padding: 0 6px; height: 18px; border-radius: var(--radius-sm); font-size: 10px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; }
.tag-urgent  { background: #FCE4E4; color: #FE5050; }
.tag-high    { background: #FFE5DD; color: #FF7E47; }
.tag-normal  { background: #E0F4FE; color: #1B83C2; }
.tag-low     { background: #DCF7E5; color: #04A461; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: var(--bg-subtle); padding: 12px; border-right: 1px solid var(--border-subtle); height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--radius-md); color: var(--text-primary); font-size: 13px; }
.sidebar .item:hover { background: var(--bg-elevated); }
.sidebar .item.active { background: linear-gradient(135deg, rgba(123,104,238,0.10), rgba(253,113,175,0.10)); color: var(--color-primary-700); font-weight: 600; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 그라데이션 위에 본문 텍스트 직접 배치 금지 — 흰 카드 또는 dark 배경 사용
2. priority 색을 임의 매핑 금지 — Urgent/High/Normal/Low 의미 토큰 보존
3. Hub/Space/Folder/List/Task 위계를 깨고 평면 구조로 표현 금지 — ClickUp 핵심 멘탈 모델
4. 라이프부이 마스코트를 임의 색으로 변경 금지
5. 그라데이션 버튼을 페이지에 4개 이상 배치 금지 — primary action 신호 흐림

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: var(--bg-subtle); padding: 16px 12px; border-right: 1px solid var(--border-subtle); }
  .sidebar .brand { font-weight: 700; padding: 4px 8px 12px; display: flex; align-items: center; gap: 8px; }
  .sidebar .brand .logo { width: 24px; height: 24px; border-radius: 50%; background: linear-gradient(135deg,#7B68EE,#FD71AF); }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: var(--radius-md); color: var(--text-primary); font-size: 13px; cursor: pointer; }
  .sidebar .item:hover { background: var(--bg-elevated); }
  .sidebar .item.active { background: linear-gradient(135deg, rgba(123,104,238,0.10), rgba(253,113,175,0.10)); color: var(--color-primary-700); font-weight: 600; }
  .sidebar .section-label { font-size: 11px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; padding: 12px 10px 4px; font-weight: 600; }
  .main { padding: 24px 32px; }
  .page-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .page-head h1 { margin: 0; font-size: 22px; font-weight: 700; }
  .views { display: flex; gap: 4px; border-bottom: 1px solid var(--border-default); margin: 16px 0; }
  .views .view { padding: 8px 12px; font-size: 13px; color: var(--text-secondary); cursor: pointer; }
  .views .view.active { color: var(--color-primary-700); border-bottom: 2px solid var(--color-primary-500); font-weight: 600; }
  .board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .col { background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 12px; min-height: 280px; }
  .col h3 { margin: 0 0 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); display: flex; align-items: center; gap: 6px; }
  .col h3::before { content:""; width: 8px; height: 8px; border-radius: 50%; }
  .col.todo h3::before { background: var(--text-tertiary); }
  .col.progress h3::before { background: #FF7E47; }
  .col.done h3::before { background: var(--color-success-fg); }
  .task { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 8px; padding: 10px; margin-bottom: 8px; }
  .task .title { font-size: 13px; font-weight: 500; line-height: 1.4; margin-bottom: 6px; }
  .task .row { display: flex; gap: 6px; align-items: center; font-size: 11px; color: var(--text-secondary); }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="brand"><div class="logo"></div> ClickUp</div>
    <div class="item active">📥 Inbox</div>
    <div class="item">⏱ Pulse</div>
    <div class="item">🎯 Goals</div>
    <div class="section-label">Spaces</div>
    <div class="item">🟣 Engineering</div>
    <div class="item">🟠 Marketing</div>
    <div class="item">🔵 Customer Success</div>
  </aside>
  <main class="main">
    <div class="page-head">
      <h1>Engineering · Sprint 24</h1>
      <button class="btn btn-primary">+ 새 작업</button>
    </div>
    <div class="views">
      <div class="view">List</div>
      <div class="view active">Board</div>
      <div class="view">Calendar</div>
      <div class="view">Gantt</div>
      <div class="view">Workload</div>
    </div>
    <div class="board">
      <div class="col todo"><h3>To do · 4</h3>
        <div class="task"><div class="title">디자인 시스템 v2 정리</div><div class="row"><span class="tag tag-high">High</span><span>· 5/12</span></div></div>
        <div class="task"><div class="title">Q3 로드맵 회의</div><div class="row"><span class="tag tag-normal">Normal</span><span>· 5/15</span></div></div>
      </div>
      <div class="col progress"><h3>In progress · 2</h3>
        <div class="task"><div class="title">Onboarding 흐름 개선</div><div class="row"><span class="tag tag-urgent">Urgent</span><span>· 5/9</span></div></div>
      </div>
      <div class="col done"><h3>Done · 8</h3>
        <div class="task"><div class="title">스펙 문서 검토</div><div class="row"><span class="tag tag-low">Low</span><span>· 5/3</span></div></div>
      </div>
    </div>
  </main>
</div>
```
