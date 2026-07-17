---
brand: Google Workspace
brand_ko: 구글 워크스페이스
slug: google-workspace
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#1A73E8"
primary_color_name: "Workspace Blue"
mood:
  - 통합
  - 4색일러
  - 협업

font_category: sans-serif
font_primary: Google Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2006
last_major_revision: 2025
signature_keyword: "Gmail·Drive·Docs·Meet·Calendar 4색 + Google Sans + Material 3 캔버스의 협업 스위트"

hero_html: |
  <div style="font-family:'Google Sans','Inter','Roboto',-apple-system,sans-serif;background:#F8F9FA;color:#202124;height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:#fff;display:flex;align-items:center;gap:10px;border-bottom:1px solid #E8EAED;">
      <div style="width:26px;height:26px;background:radial-gradient(circle at 30% 30%,#EA4335 0,#FBBC04 40%,#34A853 70%,#4285F4 100%);border-radius:9999px;"></div>
      <strong style="font-size:14px;font-weight:600;">Google Workspace</strong>
      <span style="margin-left:auto;font-size:11px;color:#5F6368;">mia@oppadu.com</span>
    </div>
    <div style="padding:12px 12px;display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:#fff;overflow:hidden;">
      <div style="background:#fff;border:1px solid #E8EAED;border-radius:8px;padding:10px 8px;text-align:center;font:600 11px/1.3 inherit;"><div style="width:36px;height:36px;background:linear-gradient(135deg,#EA4335,#C5221F);border-radius:8px;margin:0 auto 6px;display:grid;place-items:center;color:#fff;font:900 13px/1 inherit;">M</div>Gmail<div style="color:#1A73E8;font-size:10px;font-weight:700;margin-top:3px;">12</div></div>
      <div style="background:#fff;border:1px solid #E8EAED;border-radius:8px;padding:10px 8px;text-align:center;font:600 11px/1.3 inherit;"><div style="width:36px;height:36px;background:linear-gradient(135deg,#4285F4,#1A73E8);border-radius:8px;margin:0 auto 6px;display:grid;place-items:center;color:#fff;font:900 13px/1 inherit;">D</div>Drive<div style="color:#5F6368;font-size:10px;margin-top:3px;">8.2 GB</div></div>
      <div style="background:#fff;border:1px solid #E8EAED;border-radius:8px;padding:10px 8px;text-align:center;font:600 11px/1.3 inherit;"><div style="width:36px;height:36px;background:#4285F4;border-radius:8px;margin:0 auto 6px;display:grid;place-items:center;color:#fff;font:900 13px/1 inherit;">📄</div>Docs<div style="color:#5F6368;font-size:10px;margin-top:3px;">14</div></div>
      <div style="background:#fff;border:1px solid #E8EAED;border-radius:8px;padding:10px 8px;text-align:center;font:600 11px/1.3 inherit;"><div style="width:36px;height:36px;background:#34A853;border-radius:8px;margin:0 auto 6px;display:grid;place-items:center;color:#fff;font:900 13px/1 inherit;">▦</div>Sheets<div style="color:#5F6368;font-size:10px;margin-top:3px;">9</div></div>
    </div>
    <div style="padding:8px 12px;background:#fff;border-top:1px solid #E8EAED;display:flex;gap:8px;align-items:center;">
      <span style="background:#1A73E8;color:#fff;border-radius:9999px;padding:7px 16px;font:600 12px/1 inherit;">+ 새로 만들기</span>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:#5F6368;">Workspace · Business Standard</span>
    </div>
  </div>

sources:
  - https://workspace.google.com/
  - https://m3.material.io/
---

### ① 브랜드 DNA
- **브랜드명**: Google Workspace (구 G Suite)
- **한 줄 정체성**: 구글의 통합 협업 스위트 — Gmail·Drive·Docs·Sheets·Slides·Meet·Calendar 등 하나로
- **공식 디자인 철학**: Material 3 (Material You) — 친근한 라운드 + 4색(빨강/파랑/노랑/초록) 정체성
- **시그니처 요소 1개**: 4색 일러스트 톤(앱마다 컬러 분리: Gmail 빨강 / Drive 4색 / Docs 블루 / Sheets 그린 / Slides 옐로 / Meet 그린) + Google Sans 산세리프 + 9999px 풀필 액션 버튼. MS 365의 라이트 그레이 톤과 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 통합, 4색일러, 협업
- **무드 설명**: 라이트 그레이(#F8F9FA) 베이스 + 흰 카드 + 8px Round. 강조는 Workspace Blue(#1A73E8) 단일, 앱별 컬러로 영역 구분.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~12px, 액션은 9999px Pill)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Workspace Blue */
  --color-primary-50:  #E8F0FE;
  --color-primary-100: #D2E3FC;
  --color-primary-200: #AECBFA;
  --color-primary-300: #8AB4F8;
  --color-primary-400: #669DF6;
  --color-primary-500: #1A73E8;   /* Workspace Blue */
  --color-primary-600: #185ABC;
  --color-primary-700: #134496;
  --color-primary-800: #0D2E6E;
  --color-primary-900: #061A44;

  /* 4-color (Google brand) */
  --g-red:    #EA4335;
  --g-blue:   #4285F4;
  --g-yellow: #FBBC04;
  --g-green:  #34A853;

  /* App accent (앱별 정체성) */
  --gmail:    #EA4335;
  --drive-blue:   #4285F4;
  --drive-red:    #EA4335;
  --drive-green:  #34A853;
  --drive-yellow: #FBBC04;
  --docs:     #4285F4;
  --sheets:   #34A853;
  --slides:   #F4B400;
  --meet:     #00897B;
  --calendar: #4285F4;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FA;
  --color-neutral-100:  #F1F3F4;
  --color-neutral-200:  #E8EAED;
  --color-neutral-300:  #DADCE0;
  --color-neutral-500:  #9AA0A6;
  --color-neutral-700:  #5F6368;
  --color-neutral-800:  #3C4043;
  --color-neutral-900:  #202124;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #137333;
  --color-warning-bg: #FEF7E0;
  --color-warning-fg: #BF6900;
  --color-error-bg:   #FCE8E6;
  --color-error-fg:   #C5221F;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #1A73E8;

  /* Surface */
  --bg-base:     #F8F9FA;
  --bg-subtle:   #F1F3F4;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(32,33,36,0.40);

  /* Text */
  --text-primary:    #202124;
  --text-secondary:  #3C4043;
  --text-tertiary:   #5F6368;
  --text-on-primary: #FFFFFF;
  --text-link:       #1A73E8;
  --text-disabled:   #9AA0A6;

  /* Border */
  --border-default: #E8EAED;
  --border-subtle:  #F1F3F4;
  --border-strong:  #DADCE0;
  --border-focus:   #1A73E8;
}

[data-theme="dark"] {
  --bg-base:     #202124;
  --bg-subtle:   #292A2D;
  --bg-elevated: #2D2E31;
  --text-primary:    #E8EAED;
  --text-secondary:  #BDC1C6;
  --border-default:  #3C4043;
  --color-primary-500: #8AB4F8;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Google Sans** (Workspace 헤더) / **Roboto** / system-ui
  - 한글: Pretendard / Noto Sans KR
  - 코드: Roboto Mono / SF Mono
- **위계**:
  - Display: 32px / 600 / 1.2 (Google Sans)
  - H1: 24px / 500 / 1.25
  - H2: 18px / 500 / 1.3
  - H3: 16px / 500 / 1.35
  - Body Large: 14px / 400 / 1.5
  - Body: 14px / 400 / 1.5
  - Body Small: 13px / 500 / 1.4
  - Caption: 12px / 500 / 1.3

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
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;   /* 액션 버튼 시그니처 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(60,64,67,0.10);
--shadow-md: 0 1px 6px rgba(60,64,67,0.16);   /* Material 3 카드 */
--shadow-lg: 0 4px 16px rgba(60,64,67,0.22);
```

### ⑧ Iconography
- **스타일**: Material Symbols Rounded
- **Stroke 굵기**: 24px outline 기본
- **모서리 처리**: Round
- **추천 라이브러리**: Material Symbols (Rounded weight)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 'Google Sans', Roboto, sans-serif; border-radius: 9999px; padding: 10px 22px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); box-shadow: var(--shadow-sm); }
.btn-secondary { background: var(--bg-elevated); color: var(--color-primary-600); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-text { background: transparent; color: var(--color-primary-600); padding: 8px 12px; }
.btn-new { background: #fff; color: var(--text-primary); border-radius: 16px; padding: 12px 22px; box-shadow: var(--shadow-md); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 8px 12px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 1px solid var(--color-primary-500); }
.search { background: var(--bg-subtle); border: 0; border-radius: 9999px; padding: 10px 20px; font: 500 14px/1 inherit; color: var(--text-primary); }
.search:focus { background: var(--bg-elevated); box-shadow: var(--shadow-md); outline: 0; }
```

**Card (App tile / Doc card)**
```css
.app-tile { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; padding: 12px; text-align: center; cursor: pointer; }
.app-tile:hover { box-shadow: var(--shadow-md); border-color: transparent; }
.app-tile .ico { width: 44px; height: 44px; border-radius: 8px; display: grid; place-items: center; margin: 0 auto 8px; color: #fff; font: 700 16px/1 inherit; }
.app-tile.gmail .ico   { background: linear-gradient(135deg, var(--gmail), #C5221F); }
.app-tile.docs .ico    { background: var(--docs); }
.app-tile.sheets .ico  { background: var(--sheets); }
.app-tile.slides .ico  { background: var(--slides); color: var(--text-primary); }
.app-tile.meet .ico    { background: var(--meet); }
.doc-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; overflow: hidden; }
.doc-card .preview { aspect-ratio: 4/3; background: var(--bg-subtle); }
.doc-card .meta { padding: 12px 14px; }
.doc-card .name { font: 500 14px/1.3 inherit; }
.doc-card .open { font: 400 12px/1.3 inherit; color: var(--text-tertiary); margin-top: 2px; }
```

**Badge / Tag**
```css
.chip { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 9999px; padding: 5px 12px; font: 500 13px/1 inherit; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
.chip.active { background: var(--color-primary-50); border-color: var(--color-primary-500); color: var(--color-primary-700); }
.badge-unread { background: var(--gmail); color: #fff; border-radius: 9999px; padding: 1px 8px; font: 700 11px/1.3 inherit; }
.tag-shared { background: var(--color-info-bg); color: var(--color-info-fg); border-radius: 4px; padding: 1px 6px; font: 600 11px/1.3 inherit; }
```

**Navigation (App switcher + Side nav)**
```css
.appswitcher { background: var(--bg-elevated); border-radius: 12px; box-shadow: var(--shadow-lg); padding: 16px; display: grid; grid-template-columns: repeat(3, 76px); gap: 6px; }
.appswitcher .ic { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px; border-radius: 8px; font: 500 12px/1.2 inherit; color: var(--text-secondary); cursor: pointer; }
.appswitcher .ic:hover { background: var(--bg-subtle); }
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 240px; padding: 8px 0; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: var(--text-secondary); cursor: pointer; border-radius: 0 9999px 9999px 0; margin-right: 12px; }
.sidebar .item:hover { background: var(--bg-subtle); }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 300ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 액션 버튼 모서리 4px 미만으로 사용 금지 — 9999px Pill이 시그니처
2. 앱별 컬러 통일 금지 — Gmail 빨강 / Docs 블루 / Sheets 그린 등 분리 유지
3. 단색 그라데이션 풀배경 금지 — Material 3 흰 카드 + 8px Round 친근함
4. Aptos·세리프 폰트 사용 금지 — Google Sans / Roboto 산세리프 표준
5. 사이드바 아이템을 직각 4px로 만들기 금지 — 우측만 둥근 Pill 시그니처

### ⑫ 시그니처 적용 예시 (Google Workspace 런처 + Gmail)

```html
<style>
  body { margin: 0; font-family: 'Google Sans', Roboto, Pretendard, -apple-system, sans-serif; color: #202124; background: #F8F9FA; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-rows: 56px 1fr; min-height: 100vh; }
  .topbar { background: #fff; border-bottom: 1px solid #E8EAED; padding: 0 16px; display: flex; align-items: center; gap: 14px; }
  .topbar .menu { color: #5F6368; font-size: 20px; cursor: pointer; }
  .topbar .brand { display: flex; align-items: center; gap: 10px; }
  .topbar .gicon { width: 30px; height: 30px; background: radial-gradient(circle at 25% 25%, #EA4335 0, #FBBC04 40%, #34A853 70%, #4285F4 100%); border-radius: 9999px; }
  .topbar .name { font: 500 20px/1 'Google Sans'; color: #5F6368; }
  .topbar .name b { color: #202124; }
  .search { flex: 1; max-width: 720px; margin: 0 auto; background: #F1F3F4; border-radius: 9999px; padding: 10px 20px; font: 500 14px/1 inherit; color: #202124; display: flex; align-items: center; gap: 10px; }
  .topbar .right { display: flex; gap: 12px; align-items: center; }
  .av { width: 32px; height: 32px; border-radius: 9999px; background: linear-gradient(135deg, #4285F4, #1A73E8); color: #fff; display: grid; place-items: center; font: 700 13px/1 inherit; }
  .grid { display: grid; grid-template-columns: 260px 1fr 320px; gap: 0; }
  .sidebar { padding: 16px 0; }
  .compose { background: #fff; border-radius: 16px; padding: 12px 22px; font: 500 14px/1 inherit; display: inline-flex; gap: 10px; align-items: center; box-shadow: 0 1px 6px rgba(60,64,67,0.16); margin: 0 16px 12px; color: #202124; cursor: pointer; }
  .compose .pen { width: 22px; height: 22px; border-radius: 9999px; background: radial-gradient(circle at 25% 25%, #EA4335 0, #FBBC04 40%, #34A853 70%, #4285F4 100%); }
  .nav .item { display: flex; align-items: center; gap: 14px; padding: 9px 18px; font: 500 14px/1 inherit; color: #3C4043; cursor: pointer; border-radius: 0 9999px 9999px 0; margin-right: 12px; }
  .nav .item:hover { background: #F1F3F4; }
  .nav .item.active { background: #FCE8E6; color: #C5221F; font-weight: 700; }
  .nav .item .count { margin-left: auto; font: 600 12px/1 inherit; }
  main { padding: 14px 18px; }
  .chips { display: flex; gap: 8px; margin-bottom: 12px; }
  .chip { background: #fff; border: 1px solid #DADCE0; border-radius: 9999px; padding: 6px 14px; font: 500 13px/1 inherit; color: #3C4043; cursor: pointer; }
  .chip.active { background: #E8F0FE; border-color: #1A73E8; color: #185ABC; font-weight: 700; }
  .list { background: #fff; border: 1px solid #E8EAED; border-radius: 8px; overflow: hidden; }
  .row { display: grid; grid-template-columns: 32px 200px 1fr 80px; gap: 10px; padding: 10px 14px; border-bottom: 1px solid #F1F3F4; font: 500 14px/1.4 inherit; cursor: pointer; align-items: center; }
  .row:hover { background: #F8F9FA; }
  .row.unread { font-weight: 700; background: #fff; }
  .row.unread .preview { color: #5F6368; font-weight: 400; }
  .row .star { color: #FBBC04; cursor: pointer; }
  .row .star.off { color: #DADCE0; }
  .row .from { color: #202124; }
  .row.unread .from { color: #202124; }
  .row .subj { color: #202124; }
  .row .preview { color: #5F6368; }
  .row .time { color: #5F6368; font: 600 12px/1 inherit; text-align: right; }
  .aside { background: #F8F9FA; padding: 16px; border-left: 1px solid #E8EAED; }
  .aside h3 { margin: 0 0 10px; font: 700 12px/1.3 inherit; color: #5F6368; text-transform: uppercase; letter-spacing: 0.05em; }
  .apps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .app-tile { background: #fff; border: 1px solid #E8EAED; border-radius: 8px; padding: 10px 4px; text-align: center; cursor: pointer; }
  .app-tile:hover { box-shadow: 0 1px 6px rgba(60,64,67,0.16); }
  .app-tile .ico { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; margin: 0 auto 6px; color: #fff; font: 800 14px/1 inherit; }
  .app-tile .lab { font: 600 11px/1.3 inherit; color: #3C4043; }
</style>

<div class="app">
  <header class="topbar">
    <span class="menu">☰</span>
    <div class="brand"><div class="gicon"></div><div class="name"><b>Gmail</b></div></div>
    <div class="search">🔍 메일 검색</div>
    <div class="right"><span style="color:#5F6368;font-size:20px;">?</span><span style="color:#5F6368;font-size:20px;">⚙</span><span style="color:#5F6368;font-size:20px;">▦</span><div class="av">M</div></div>
  </header>
  <div class="grid">
    <aside class="sidebar">
      <div class="compose"><div class="pen"></div>편지쓰기</div>
      <nav class="nav">
        <div class="item active">📥 받은편지함<span class="count">12</span></div>
        <div class="item">⭐ 별표편지함</div>
        <div class="item">⏰ 다시 알림</div>
        <div class="item">📤 보낸편지함</div>
        <div class="item">📝 임시보관함<span class="count">2</span></div>
        <div class="item">📂 모든 메일</div>
        <div class="item">🚫 스팸</div>
      </nav>
    </aside>
    <main>
      <div class="chips">
        <span class="chip active">📥 기본</span>
        <span class="chip">👥 소셜</span>
        <span class="chip">🏷 프로모션</span>
        <span class="chip">📰 업데이트</span>
      </div>
      <section class="list">
        <div class="row unread"><span class="star">★</span><span class="from">민지, 린호 (3)</span><span><span class="subj">캠페인 검토 요청</span> <span class="preview">— 금주 시안 PDF 첨부드립니다…</span></span><span class="time">10:24</span></div>
        <div class="row unread"><span class="star off">☆</span><span class="from">GitHub</span><span><span class="subj">[oppadu/site] PR #142 리뷰 요청</span> <span class="preview">— @minji가 리뷰를 요청했습니다…</span></span><span class="time">09:42</span></div>
        <div class="row"><span class="star off">☆</span><span class="from">Google Calendar</span><span><span class="subj">월요일 9:00 — 스프린트 플래닝</span> <span class="preview">— 15분 전 알림</span></span><span class="time">08:15</span></div>
        <div class="row"><span class="star">★</span><span class="from">Notion</span><span><span class="subj">Workspace 일일 요약</span> <span class="preview">— 어제 활동 12건…</span></span><span class="time">어제</span></div>
      </section>
    </main>
    <aside class="aside">
      <h3>Workspace 앱</h3>
      <div class="apps">
        <div class="app-tile"><div class="ico" style="background:linear-gradient(135deg,#EA4335,#C5221F);">M</div><div class="lab">Gmail</div></div>
        <div class="app-tile"><div class="ico" style="background:#4285F4;">📅</div><div class="lab">Calendar</div></div>
        <div class="app-tile"><div class="ico" style="background:linear-gradient(135deg,#4285F4,#34A853,#FBBC04,#EA4335);">▲</div><div class="lab">Drive</div></div>
        <div class="app-tile"><div class="ico" style="background:#4285F4;">📄</div><div class="lab">Docs</div></div>
        <div class="app-tile"><div class="ico" style="background:#34A853;">▦</div><div class="lab">Sheets</div></div>
        <div class="app-tile"><div class="ico" style="background:#F4B400;color:#fff;">◐</div><div class="lab">Slides</div></div>
        <div class="app-tile"><div class="ico" style="background:#00897B;">🎥</div><div class="lab">Meet</div></div>
        <div class="app-tile"><div class="ico" style="background:#FBBC04;color:#fff;">💬</div><div class="lab">Chat</div></div>
        <div class="app-tile"><div class="ico" style="background:#EA4335;">📋</div><div class="lab">Forms</div></div>
      </div>
    </aside>
  </div>
</div>
```
