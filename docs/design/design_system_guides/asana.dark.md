---
brand: Asana
brand_ko: 아사나
slug: asana
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - productivity
  - enterprise

color_tone: warm
primary_color_hex: "#F06A6A"
primary_color_name: "Asana Coral"
mood:
  - 명확함
  - 친근함
  - 조직적

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2008
last_major_revision: 2023
signature_keyword: "Coral 액센트와 3-dot 마스코트가 만드는 조직 작업 관리 톤"

card_tokens: |
  {
    "light": { "bg": "#F6F7F8", "surface": "#FFFFFF", "border": "#EDEDED", "fg": "#1E1F21", "fg_muted": "#6F7782", "accent": "#F06A6A" },
    "dark":  { "bg": "#1E1F21", "surface": "#2A2B2D", "border": "#38393B", "fg": "#FFFFFF", "fg_muted": "#A0A2A6", "accent": "#F06A6A" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-surface);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-surface);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:10px;">
      <div style="display:flex;gap:2px;">
        <span style="width:9px;height:9px;border-radius:50%;background:var(--card-accent);"></span>
        <span style="width:9px;height:9px;border-radius:50%;background:var(--card-accent);"></span>
        <span style="width:9px;height:9px;border-radius:50%;background:var(--card-accent);"></span>
      </div>
      <strong style="font-size:14px;">asana</strong>
      <span style="margin-left:auto;font-size:12px;color:var(--card-fg-muted);">My tasks ▾</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:6px;background:var(--card-bg);">
      <div style="background:var(--card-surface);border-radius:8px;padding:10px 12px;border:1px solid var(--card-border);display:flex;align-items:center;gap:10px;">
        <span style="width:18px;height:18px;border-radius:50%;border:2px solid #4FBDF7;flex:0 0 18px;"></span>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:500;">디자인 시스템 v2 정리</div>
          <div style="font-size:10px;color:var(--card-fg-muted);margin-top:2px;display:flex;gap:8px;align-items:center;">
            <span style="background:#4A3A1A;color:#F5C77E;padding:1px 6px;border-radius:9999px;font-weight:600;font-size:9px;">In progress</span>
            <span>· 5월 12일</span>
          </div>
        </div>
        <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#F06A6A,#FBC850);"></div>
      </div>
      <div style="background:var(--card-surface);border-radius:8px;padding:10px 12px;border:1px solid var(--card-border);display:flex;align-items:center;gap:10px;">
        <span style="width:18px;height:18px;border-radius:50%;background:#4ECB8D;color:#15171A;display:grid;place-items:center;font-size:10px;flex:0 0 18px;">✓</span>
        <div style="flex:1;text-decoration:line-through;color:var(--card-fg-muted);">
          <div style="font-size:13px;">스펙 문서 검토</div>
        </div>
      </div>
      <div style="background:var(--card-surface);border-radius:8px;padding:10px 12px;border:1px solid var(--card-border);display:flex;align-items:center;gap:10px;">
        <span style="width:18px;height:18px;border-radius:50%;border:2px solid #55565A;flex:0 0 18px;"></span>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:500;">Q3 로드맵 회의</div>
          <div style="font-size:10px;color:var(--card-fg-muted);margin-top:2px;">5월 15일</div>
        </div>
      </div>
      <button style="background:#8C82FF;color:#15171A;border:0;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;margin-top:auto;">+ 새 작업</button>
    </div>
  </div>

sources:
  - https://asana.com/
  - https://asana.com/brand
  - https://asana.com/guide
---

### ① 브랜드 DNA
- **브랜드명**: Asana
- **한 줄 정체성**: 팀의 모든 작업을 분명하게 정리하는, 명확함 우선의 워크 매니지먼트
- **공식 디자인 철학**: "Clarity — make it easy for teams to know who's doing what by when"
- **시그니처 요소 1개**: 3-dot Coral 마스코트(#F06A6A) + 부드러운 흰 캔버스 + Indigo(#796EFF) 액션 버튼

### ② 톤 & 무드
- **핵심 키워드 3개**: 명확함, 친근함, 조직적
- **무드 설명**: 흰 캔버스 위에 명확한 Task 라인이 정렬된다. Coral은 brand에만, Indigo는 액션에만 등장하는 절제된 색 사용.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (라운드 마스코트)
- **밀도(Density)**: Comfortable — 다양한 사용자가 매일 보는 작업 리스트
- **모서리 성향**: Soft (6~8px)
- **평면성**: Subtle — 라인 + 약한 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Asana Coral (brand mark) */
  --color-primary-50:  #3A1C1C;
  --color-primary-100: #4E2424;
  --color-primary-200: #6E3232;
  --color-primary-300: #9A4646;
  --color-primary-400: #CE5C5C;
  --color-primary-500: #F06A6A;  /* Asana Coral */
  --color-primary-600: #F38181;  /* hover (lighter on dark) */
  --color-primary-700: #F7A0A0;
  --color-primary-800: #FAC0C0;
  --color-primary-900: #FCDADA;

  /* Secondary - Asana Indigo (액션 버튼) */
  --color-secondary-500: #8C82FF;

  /* Neutral - warm gray (inverted for dark) */
  --color-neutral-0:    #15171A;
  --color-neutral-50:   #1E1F21;
  --color-neutral-100:  #2A2B2D;
  --color-neutral-200:  #38393B;
  --color-neutral-300:  #55565A;
  --color-neutral-500:  #82858B;
  --color-neutral-700:  #A0A2A6;
  --color-neutral-800:  #C7C8CB;
  --color-neutral-900:  #ECEDEE;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #163A29;
  --color-success-fg: #4ECB8D;
  --color-warning-bg: #4A3A1A;
  --color-warning-fg: #F5C77E;
  --color-error-bg:   #44211F;
  --color-error-fg:   #FF7A88;
  --color-info-bg:    #173747;
  --color-info-fg:    #4FBDF7;

  /* Surface */
  --bg-base:     #1E1F21;
  --bg-subtle:   #2A2B2D;
  --bg-elevated: #38393B;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #ECEDEE;
  --text-secondary:  #A0A2A6;
  --text-tertiary:   #82858B;
  --text-on-primary: #15171A;
  --text-disabled:   #55565A;

  /* Border */
  --border-default: #38393B;
  --border-subtle:  #2A2B2D;
  --border-strong:  #55565A;
  --border-focus:   #8C82FF;
}

[data-theme="light"] {
  /* Primary - Asana Coral (brand mark) */
  --color-primary-50:  #FDECEC;
  --color-primary-100: #FBD5D5;
  --color-primary-200: #F8B0B0;
  --color-primary-300: #F58A8A;
  --color-primary-400: #F26F6F;
  --color-primary-500: #F06A6A;  /* Asana Coral */
  --color-primary-600: #D85959;  /* hover */
  --color-primary-700: #BD4747;
  --color-primary-800: #9F3535;
  --color-primary-900: #732424;

  /* Secondary - Asana Indigo (액션 버튼) */
  --color-secondary-500: #796EFF;

  /* Neutral - warm gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F6F7F8;
  --color-neutral-100:  #EDEDED;
  --color-neutral-200:  #E2E2E4;
  --color-neutral-300:  #C7C8CB;
  --color-neutral-500:  #9CA0A8;
  --color-neutral-700:  #6F7782;
  --color-neutral-800:  #44464A;
  --color-neutral-900:  #1E1F21;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DEFBE6;
  --color-success-fg: #36B37E;
  --color-warning-bg: #FFE2A8;
  --color-warning-fg: #9C5700;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #E8384F;
  --color-info-bg:    #DDF0FA;
  --color-info-fg:    #14AAF5;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F6F7F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(30,31,33,0.40);

  /* Text */
  --text-primary:    #1E1F21;
  --text-secondary:  #6F7782;
  --text-tertiary:   #9CA0A8;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C8CB;

  /* Border */
  --border-default: #EDEDED;
  --border-subtle:  #F4F4F5;
  --border-strong:  #C7C8CB;
  --border-focus:   #796EFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — Asana는 Inter 기반 시스템 (이전 Proxima Nova에서 마이그레이션)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 48px / 700 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 20px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.38 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em (uppercase)

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
- **Container**: max-width 1280px, 좌우 패딩 16px (mobile) / 24px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 기본 */
--radius-lg: 8px;     /* 카드 */
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.40);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.50);
--shadow-xl: 0 16px 40px rgba(0,0,0,0.60);
```

### ⑧ Iconography
- **스타일**: Outline (Asana 자체 — checkbox/circle 모티프)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 13px/1 Inter, 'Pretendard', -apple-system, sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-secondary-500); color: #15171A; }
.btn-primary:hover { background: #A29AFF; }
.btn-primary:active { background: #B6AFFF; }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #15171A; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 6px 10px;
  height: 32px;
  font-size: 13px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(140,130,255,0.30); }
```

**Card** (Task row)
```css
.task { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 10px 12px; display: flex; align-items: center; gap: 10px; }
.task .check { width: 18px; height: 18px; border-radius: 50%; border: 2px solid var(--border-strong); flex: 0 0 18px; cursor: pointer; }
.task.done .check { background: var(--color-success-fg); border-color: var(--color-success-fg); color: #15171A; display: grid; place-items: center; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge / Status pill**
```css
.tag { padding: 0 8px; height: 18px; border-radius: var(--radius-full); font-size: 10px; font-weight: 600; line-height: 18px; display: inline-flex; align-items: center; }
.tag-progress { background: #4A3A1A; color: #F5C77E; }
.tag-on-track { background: #163A29; color: #4ECB8D; }
.tag-at-risk  { background: #4A211C; color: #FF8C7A; }
.tag-solid    { background: var(--color-primary-500); color: #15171A; }
.tag-subtle   { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline  { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 220px; background: var(--bg-base); border-right: 1px solid var(--border-default); padding: 12px; height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: var(--radius-md); color: var(--text-primary); font-size: 13px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
/* Asana 시그니처: task complete 시 unicorn celebration */
--ease-celebrate: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. Coral을 액션 버튼에 사용 금지 — brand mark 전용 (Indigo가 액션 색)
2. Task row 사이에 풀 그림자(shadow-lg) 사용 금지 — flat list 톤
3. checkbox를 사각으로 변경 금지 — circle이 시그니처
4. 본문에 italic 강조 금지 — 명확함 원칙 위배
5. 한 화면에 4단계 이상 status pill 색 동시 사용 금지

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 220px 1fr; min-height: 100vh; }
  .sidebar { background: var(--bg-base); border-right: 1px solid var(--border-default); padding: 16px 12px; }
  .sidebar .brand { font-weight: 700; padding: 4px 8px 12px; display: flex; align-items: center; gap: 8px; }
  .sidebar .brand .dots { display: flex; gap: 2px; }
  .sidebar .brand .dots span { width: 9px; height: 9px; border-radius: 50%; background: var(--color-primary-500); }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: var(--radius-md); color: var(--text-primary); font-size: 13px; cursor: pointer; }
  .sidebar .item:hover { background: var(--bg-subtle); }
  .sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
  .main { padding: 24px 32px; }
  .page-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .page-head h1 { margin: 0; font-size: 24px; font-weight: 700; }
  .toolbar { display: flex; gap: 8px; }
  .views { display: flex; gap: 4px; border-bottom: 1px solid var(--border-default); margin-bottom: 16px; }
  .views .view { padding: 8px 12px; font-size: 13px; color: var(--text-secondary); cursor: pointer; }
  .views .view.active { color: var(--color-primary-600); border-bottom: 2px solid var(--color-primary-500); font-weight: 600; }
  .features { display: flex; flex-direction: column; gap: 6px; }
  .task { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 8px; padding: 12px 14px; display: grid; grid-template-columns: 18px 1fr auto auto auto; gap: 12px; align-items: center; }
  .task .check { width: 18px; height: 18px; border-radius: 50%; border: 2px solid var(--border-strong); cursor: pointer; }
  .task.done .check { background: #4ECB8D; border-color: #4ECB8D; color: #15171A; display: grid; place-items: center; font-size: 11px; }
  .task.done .title { text-decoration: line-through; color: var(--text-secondary); }
  .task .title { font-size: 14px; font-weight: 500; }
  .task .due { font-size: 12px; color: var(--text-secondary); }
  .task .avatar { width: 24px; height: 24px; border-radius: 50%; }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="brand"><div class="dots"><span></span><span></span><span></span></div> asana</div>
    <div class="item active">📋 My tasks</div>
    <div class="item">📥 Inbox <span style="margin-left:auto; background:var(--color-primary-500); color:#15171A; padding:0 6px; border-radius:9999px; font-size:10px; font-weight:700;">3</span></div>
    <div class="item">📊 Reporting</div>
    <div class="item">🎯 Goals</div>
    <div style="font-size:11px; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.04em; padding:12px 8px 4px;">Projects</div>
    <div class="item">🟢 Design System v2</div>
    <div class="item">🟣 Q3 Roadmap</div>
  </aside>
  <main class="main">
    <div class="page-head">
      <h1>My tasks</h1>
      <div class="toolbar">
        <button class="btn btn-secondary">필터</button>
        <button class="btn btn-primary">+ 새 작업</button>
      </div>
    </div>
    <div class="views">
      <div class="view active">List</div>
      <div class="view">Board</div>
      <div class="view">Calendar</div>
      <div class="view">Files</div>
    </div>
    <div class="features">
      <div class="task">
        <span class="check"></span>
        <span class="title">디자인 시스템 v2 정리</span>
        <span class="tag tag-progress">In progress</span>
        <span class="due">5월 12일</span>
        <span class="avatar" style="background:linear-gradient(135deg,#F06A6A,#FBC850)"></span>
      </div>
      <div class="task done">
        <span class="check">✓</span>
        <span class="title">스펙 문서 검토</span>
        <span class="tag tag-on-track">Done</span>
        <span class="due">5월 7일</span>
        <span class="avatar" style="background:linear-gradient(135deg,#796EFF,#14AAF5)"></span>
      </div>
      <div class="task">
        <span class="check"></span>
        <span class="title">Q3 로드맵 회의 준비</span>
        <span class="tag tag-at-risk">At risk</span>
        <span class="due">5월 15일</span>
        <span class="avatar" style="background:linear-gradient(135deg,#36B37E,#796EFF)"></span>
      </div>
    </div>
  </main>
</div>
```
