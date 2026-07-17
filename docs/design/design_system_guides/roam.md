---
brand: Roam Research
brand_ko: 로암 리서치
slug: roam
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - consumer

color_tone: warm
primary_color_hex: "#137CBD"
primary_color_name: "Roam Blue"
mood:
  - 양방향링크
  - 데일리노트
  - 아웃라이너

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - dark

released_year: 2019
last_major_revision: 2024
signature_keyword: "데일리 노트 + 양방향 [[링크]] 그래프 + 불릿 들여쓰기의 네트워크 아웃라이너"

hero_html: |
  <div style="font-family:'Inter','Söhne',-apple-system,sans-serif;background:#FFFEF7;color:#10161A;height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:#fff;display:flex;align-items:center;gap:10px;border-bottom:1px solid #E5E8EB;">
      <div style="width:24px;height:24px;background:#137CBD;display:grid;place-items:center;color:#fff;font:900 12px/1 sans-serif;border-radius:3px;">R</div>
      <strong style="font-size:14px;font-weight:700;">2026-05-14 Thursday</strong>
      <span style="margin-left:auto;font-size:11px;color:#5C7080;">데일리 노트</span>
    </div>
    <div style="padding:12px 16px;font:400 14px/1.65 inherit;background:#FFFEF7;overflow:hidden;">
      <div style="font:700 20px/1.3 inherit;margin-bottom:8px;">May 14th, 2026</div>
      <div style="display:flex;gap:6px;align-items:flex-start;padding:2px 0;"><span style="color:#5C7080;flex:none;line-height:1.65;">•</span><div><span style="color:#137CBD;text-decoration:underline;">[[디자인 시스템 v3]]</span> 의 핵심은 양방향 링크</div></div>
      <div style="display:flex;gap:6px;align-items:flex-start;padding:2px 0 2px 18px;"><span style="color:#5C7080;flex:none;line-height:1.65;">•</span><div>모든 노트는 <span style="color:#137CBD;text-decoration:underline;">[[노드]]</span> 다</div></div>
      <div style="display:flex;gap:6px;align-items:flex-start;padding:2px 0 2px 18px;"><span style="color:#5C7080;flex:none;line-height:1.65;">•</span><div>폴더 대신 <span style="color:#137CBD;text-decoration:underline;">[[연결]]</span> 로 구조화</div></div>
      <div style="display:flex;gap:6px;align-items:flex-start;padding:2px 0;"><span style="color:#5C7080;flex:none;line-height:1.65;">•</span><div><span style="background:#FFE066;color:#7A4A00;padding:0 3px;">^^TODO^^</span> 분기 회고 안건 정리 <span style="color:#5C7080;">#blocked</span></div></div>
    </div>
    <div style="padding:8px 14px;background:#fff;border-top:1px solid #E5E8EB;display:flex;gap:8px;align-items:center;font:600 12px/1 inherit;">
      <span style="color:#137CBD;">📌</span><span>Linked references · 3</span>
      <span style="margin-left:auto;color:#5C7080;">Unlinked · 5</span>
    </div>
  </div>

sources:
  - https://roamresearch.com/
---

### ① 브랜드 DNA
- **브랜드명**: Roam Research
- **한 줄 정체성**: 네트워크 사고를 위한 아웃라이너 — 데일리 노트 + 양방향 [[링크]] + 블록 참조
- **공식 디자인 철학**: "A note-taking tool for networked thought" — 폴더 없는 그래프 구조
- **시그니처 요소 1개**: Roam Blue(#137CBD, Blueprint UI 영향) + 불릿 들여쓰기 아웃라인 + [[더블 대괄호]] 링크 자동 변환 + 매일 자동 생성되는 데일리 노트. Obsidian의 다크 + 그래프와 정반대의 라이트 + 텍스트 위주

### ② 톤 & 무드
- **핵심 키워드 3개**: 양방향링크, 데일리노트, 아웃라이너
- **무드 설명**: 종이 같은 옅은 베이지(#FFFEF7) 베이스 + 짙은 본문 텍스트. 색은 [[링크]] 블루 단일 강조. 모서리는 0~2px Sharp, 도구 자체가 보이지 않게 만드는 톤.
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘 (도구 최소화)
- **밀도(Density)**: Compact — 불릿 들여쓰기로 정보 밀도 극대화
- **모서리 성향**: Sharp (0~2px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Roam Blue (Blueprint 영향) */
  --color-primary-50:  #E7F2FB;
  --color-primary-100: #BDDBF1;
  --color-primary-200: #8FC0E5;
  --color-primary-300: #5FA4D8;
  --color-primary-400: #338FCB;
  --color-primary-500: #137CBD;   /* Roam Blue */
  --color-primary-600: #0E62A0;
  --color-primary-700: #0A4B7C;
  --color-primary-800: #073558;
  --color-primary-900: #042036;

  /* Tag color (해시태그) */
  --color-tag: #D9822B;
  --color-highlight: #FFE066;

  /* Neutral - Warm paper */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FFFEF7;     /* paper */
  --color-neutral-100:  #F5F4ED;
  --color-neutral-200:  #E5E8EB;
  --color-neutral-300:  #BFCCD6;
  --color-neutral-500:  #8A9BA8;
  --color-neutral-700:  #5C7080;
  --color-neutral-800:  #394B59;
  --color-neutral-900:  #182026;
  --color-neutral-1000: #10161A;

  /* Semantic */
  --color-success-bg: #DCF1DC;
  --color-success-fg: #137333;
  --color-warning-bg: #FFEFC2;
  --color-warning-fg: #7A4A00;
  --color-error-bg:   #FCDDDA;
  --color-error-fg:   #BB1B1B;
  --color-info-bg:    #E7F2FB;
  --color-info-fg:    #137CBD;

  /* Surface */
  --bg-base:     #FFFEF7;
  --bg-subtle:   #F5F4ED;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(16,22,26,0.50);

  /* Text */
  --text-primary:    #10161A;
  --text-secondary:  #394B59;
  --text-tertiary:   #5C7080;
  --text-on-primary: #FFFFFF;
  --text-link:       #137CBD;
  --text-disabled:   #BFCCD6;

  /* Border */
  --border-default: #E5E8EB;
  --border-subtle:  #F5F4ED;
  --border-strong:  #BFCCD6;
  --border-focus:   #137CBD;
}

[data-theme="dark"] {
  --bg-base:     #182026;
  --bg-subtle:   #1E262E;
  --bg-elevated: #243038;
  --text-primary:    #F5F4ED;
  --text-secondary:  #BFCCD6;
  --border-default:  #2D3942;
  --color-primary-500: #5FA4D8;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / **Söhne** / system-ui
  - 한글: Pretendard / Noto Sans KR
  - 코드: **Fira Code** / JetBrains Mono / Source Code Pro
- **위계**:
  - Display: 30px / 700 / 1.2 (Daily Note 제목)
  - H1: 22px / 700 / 1.3
  - H2: 18px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 15px / 400 / 1.7
  - Body: 14px / 400 / 1.65 (불릿)
  - Body Small: 12px / 500 / 1.4
  - Code: 13px / 400 / 1.55 mono
  - Caption: 11px / 600 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  2px;
  --space-sm:  4px;
  --space-md:  8px;
  --space-lg: 12px;
  --space-xl: 18px;
  --space-2xl: 28px;
  --space-3xl: 44px;
  --indent: 18px;     /* 불릿 들여쓰기 단위 */
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-xl: 6px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(16,22,26,0.08);
--shadow-md: 0 4px 12px rgba(16,22,26,0.12);
--shadow-lg: 0 12px 32px rgba(16,22,26,0.18);
```

### ⑧ Iconography
- **스타일**: Blueprint Icons (자체 영향) / Phosphor
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Square
- **추천 라이브러리**: Blueprint Icons / Phosphor Light

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 Inter, sans-serif; border-radius: 3px; padding: 6px 12px; border: 1px solid transparent; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); border-color: var(--color-primary-500); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border-color: var(--border-strong); }
.btn-link { background: transparent; color: var(--color-primary-500); border: 0; padding: 0; text-decoration: underline; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 3px; padding: 5px 10px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 1px solid rgba(19,124,189,0.30); }
.bullet-line { all: unset; flex: 1; font: 400 14px/1.65 inherit; color: var(--text-primary); }
```

**Card (Bullet outline)**
```css
.bullet { display: flex; gap: 6px; align-items: flex-start; padding: 1px 0; }
.bullet > .dot { flex: none; line-height: 1.65; color: var(--text-tertiary); cursor: pointer; font: 700 16px/1.65 inherit; }
.bullet.expand > .dot::before { content: '▾'; font-size: 12px; }
.bullet.collapse > .dot::before { content: '▸'; font-size: 12px; }
.bullet > .body { flex: 1; min-width: 0; font: 400 14px/1.65 inherit; color: var(--text-primary); }
.bullet .children { padding-left: var(--indent); display: flex; flex-direction: column; gap: 1px; margin-top: 2px; border-left: 1px dotted var(--border-strong); margin-left: 7px; padding-left: calc(var(--indent) - 7px); }
.refs-panel { background: var(--bg-subtle); border-top: 1px solid var(--border-default); padding: 12px 16px; }
.refs-panel h3 { margin: 0 0 8px; font: 700 12px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
.ref-item { background: var(--bg-elevated); border-left: 3px solid var(--color-primary-500); padding: 8px 12px; font: 500 13px/1.5 inherit; margin-bottom: 6px; }
.ref-item .src { font: 700 12px/1.3 inherit; color: var(--color-primary-500); }
```

**Badge / Tag**
```css
.wikilink { color: var(--color-primary-500); text-decoration: underline; text-decoration-thickness: 1px; cursor: pointer; }
.wikilink::before { content: '[['; opacity: 0.4; }
.wikilink::after  { content: ']]'; opacity: 0.4; }
.tag-hash { color: var(--color-tag); font: 600 14px/1.65 inherit; cursor: pointer; }
.tag-hash::before { content: '#'; }
.highlight { background: var(--color-highlight); color: var(--color-warning-fg); padding: 0 3px; border-radius: 2px; }
.highlight::before { content: '^^'; opacity: 0.4; }
.highlight::after  { content: '^^'; opacity: 0.4; }
.todo-checkbox { display: inline-flex; align-items: center; gap: 4px; }
.todo-checkbox::before { content: '☐'; color: var(--text-tertiary); font: 700 14px/1 inherit; }
.todo-checkbox.done::before { content: '☑'; color: var(--color-success-fg); }
```

**Navigation (Left sidebar)**
```css
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 250px; padding: 10px 0; }
.sidebar .item { display: flex; align-items: center; gap: 10px; padding: 6px 14px; font: 500 13px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); color: var(--text-primary); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); border-left: 3px solid var(--color-primary-500); padding-left: 11px; font-weight: 700; }
.sidebar .shortcuts { padding: 12px 14px 6px; font: 700 11px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 150ms;
--duration-slow: 250ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 폴더 트리를 메인 내비게이션으로 강제 금지 — Daily Notes + 양방향 링크가 정체성
2. 카드 모서리 8px 이상 금지 — 0~3px Sharp (도구 최소화 톤)
3. 다크 모드를 기본으로 두기 금지 — Roam은 라이트 종이 톤 우선 (Obsidian과 차별)
4. [[링크]] 표기를 옅은 회색 텍스트로 표현 금지 — 블루 + underline 시그니처
5. 본문에 그라데이션 또는 화려한 그림자 추가 금지 — Brutalist 톤 유지

### ⑫ 시그니처 적용 예시 (Roam 데일리 노트)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #10161A; background: #FFFEF7; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 250px 1fr 360px; min-height: 100vh; }
  .sidebar { background: #fff; border-right: 1px solid #E5E8EB; padding: 12px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 14px 14px; border-bottom: 1px solid #E5E8EB; }
  .sidebar .brand .logo { width: 28px; height: 28px; background: #137CBD; border-radius: 3px; display: grid; place-items: center; color: #fff; font: 900 14px/1 inherit; }
  .sidebar .brand .name { font: 700 15px/1 inherit; }
  .sidebar .item { display: flex; align-items: center; gap: 10px; padding: 7px 14px; font: 500 13px/1 inherit; color: #394B59; cursor: pointer; }
  .sidebar .item:hover { background: #F5F4ED; }
  .sidebar .item.active { background: #E7F2FB; color: #0A4B7C; border-left: 3px solid #137CBD; padding-left: 11px; font-weight: 700; }
  .sidebar h2 { padding: 14px 14px 4px; font: 700 11px/1.4 inherit; color: #5C7080; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
  .sidebar .page { padding: 5px 14px 5px 24px; font: 500 13px/1.4 inherit; color: #137CBD; cursor: pointer; }
  .sidebar .page:hover { text-decoration: underline; }
  main { padding: 22px 36px; max-width: 720px; }
  main h1 { margin: 0 0 4px; font: 700 28px/1.3 inherit; }
  main .when { color: #5C7080; font: 500 12px/1 inherit; margin-bottom: 16px; }
  .out { display: flex; flex-direction: column; gap: 1px; }
  .b { display: flex; gap: 6px; align-items: flex-start; padding: 1px 0; }
  .b .dot { color: #5C7080; cursor: pointer; flex: none; font: 700 16px/1.65 inherit; }
  .b .dot::before { content: '•'; }
  .b.collapse .dot::before { content: '▸'; font-size: 12px; }
  .b.expand .dot::before { content: '▾'; font-size: 12px; }
  .b .text { flex: 1; min-width: 0; font: 400 15px/1.7 inherit; color: #10161A; }
  .b .children { padding-left: 18px; margin-left: 7px; border-left: 1px dotted #BFCCD6; padding-left: 11px; margin-top: 2px; display: flex; flex-direction: column; gap: 1px; }
  .wl { color: #137CBD; text-decoration: underline; text-decoration-thickness: 1px; cursor: pointer; }
  .wl::before { content: '[['; opacity: 0.4; } .wl::after { content: ']]'; opacity: 0.4; }
  .tag { color: #D9822B; cursor: pointer; }
  .hl { background: #FFE066; color: #7A4A00; padding: 0 3px; border-radius: 2px; }
  .todo::before { content: '☐ '; color: #5C7080; font: 700 14px/1 inherit; }
  .todo.done::before { content: '☑ '; color: #137333; }
  .blocked { color: #BB1B1B; font: 600 11px/1.3 inherit; background: #FCDDDA; border-radius: 2px; padding: 0 5px; }
  .refs { background: #F5F4ED; border-left: 1px solid #E5E8EB; padding: 16px 18px; }
  .refs h3 { margin: 0 0 8px; font: 700 11px/1.4 inherit; color: #5C7080; text-transform: uppercase; letter-spacing: 0.05em; }
  .ref { background: #fff; border-left: 3px solid #137CBD; padding: 10px 12px; margin-bottom: 8px; font: 500 13px/1.55 inherit; }
  .ref .src { font: 700 12px/1.3 inherit; color: #137CBD; cursor: pointer; text-decoration: underline; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">R</div><div class="name">Roam Research</div></div>
    <div class="item active">📅 Daily Notes</div>
    <div class="item">📑 All Pages</div>
    <div class="item">🕸 Graph Overview</div>
    <h2>Shortcuts</h2>
    <div class="page">디자인 시스템 v3</div>
    <div class="page">PKM 원칙</div>
    <div class="page">백링크</div>
    <div class="page">2026-05-13</div>
    <div class="page">2026-05-12</div>
  </aside>
  <main>
    <h1>May 14th, 2026</h1>
    <div class="when">Thursday · 데일리 노트</div>
    <section class="out">
      <div class="b expand">
        <div class="dot"></div>
        <div class="text"><span class="wl">디자인 시스템 v3</span> 의 핵심 아이디어
          <div class="children">
            <div class="b"><div class="dot"></div><div class="text">모든 노트는 <span class="wl">노드</span> 다. 폴더 없이 <span class="wl">연결</span> 로 구조화한다.</div></div>
            <div class="b"><div class="dot"></div><div class="text"><span class="hl">^^왜 양방향인가^^</span> 단방향 링크는 정보가 흐르지 않는다. <span class="wl">백링크</span> 가 그 흐름을 가능하게 한다.</div></div>
            <div class="b"><div class="dot"></div><div class="text">참고: <span class="wl">PKM 원칙</span>, <span class="wl">노트테이킹</span></div></div>
          </div>
        </div>
      </div>
      <div class="b">
        <div class="dot"></div>
        <div class="text"><span class="todo done">캠페인 시안 PDF 검토</span> <span class="tag">#design</span></div>
      </div>
      <div class="b">
        <div class="dot"></div>
        <div class="text"><span class="todo">분기 회고 워크숍 안건</span> <span class="blocked">#blocked</span> — 일정 조율 중</div>
      </div>
      <div class="b">
        <div class="dot"></div>
        <div class="text"><span class="todo">v3 토큰 정리 PR 머지</span> <span class="tag">#design-system</span> <span class="tag">#wip</span></div>
      </div>
    </section>
  </main>
  <aside class="refs">
    <h3>Linked References · 3</h3>
    <div class="ref"><div><span class="src">디자인 시스템 v3</span></div><div style="margin-top:4px;">"양방향 링크가 폴더보다 강력하다 — Daily 2026-05-14"</div></div>
    <div class="ref"><div><span class="src">PKM 원칙</span></div><div style="margin-top:4px;">"노드 → 연결 → 흐름 — Daily 2026-05-14"</div></div>
    <div class="ref"><div><span class="src">2026-05-13</span></div><div style="margin-top:4px;">"내일은 v3 데일리 작성 — 어제 노트"</div></div>
    <h3 style="margin-top:14px;">Unlinked · 5</h3>
    <div style="font:500 12px/1.5 inherit;color:#5C7080;">"디자인 시스템" 문자열을 포함하지만 [[링크]] 로 변환되지 않은 5개 노트가 있습니다.</div>
  </aside>
</div>
```
