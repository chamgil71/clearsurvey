---
brand: Microsoft Loop
brand_ko: 마이크로소프트 루프
slug: ms-loop
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#6264A7"
primary_color_name: "Loop Indigo"
mood:
  - 협업캔버스
  - 실시간컴포넌트
  - 자유형식

font_category: sans-serif
font_primary: Segoe UI
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2022
last_major_revision: 2025
signature_keyword: "Loop 컴포넌트 카드 + Teams/Outlook 실시간 공유 + 자유 워크스페이스 캔버스"

card_tokens: |
  {
    "light": { "bg": "#F9F8FC", "surface": "#FFFFFF", "border": "#ECEAF5", "fg": "#201F2E", "fg_muted": "#605E70", "accent": "#6264A7" },
    "dark":  { "bg": "#1F1E2C", "surface": "#2D2C42", "border": "#3B3A52", "fg": "#FFFFFF", "fg_muted": "#D2D0E0", "accent": "#9495D2" }
  }

hero_html: |
  <div style="font-family:'Segoe UI','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-surface);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--card-border);">
      <div style="width:26px;height:22px;background:linear-gradient(135deg,#9495D2,#C77FBE);border-radius:8px;display:grid;place-items:center;color:#1F1E2C;font:900 12px/1 sans-serif;">∞</div>
      <strong style="font-size:14px;font-weight:600;">Marketing Q2 plan</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">3명 편집중</span>
    </div>
    <div style="padding:12px 14px;display:flex;flex-direction:column;gap:8px;background:var(--card-surface);overflow:hidden;">
      <div style="font:700 18px/1.3 inherit;">2026 Q2 마케팅 플랜</div>
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:8px;padding:10px 12px;font:400 13px/1.55 inherit;">
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:5px;color:var(--card-accent);font:700 11px/1.3 inherit;text-transform:uppercase;letter-spacing:0.04em;">∞ Task list</div>
        <div style="display:flex;align-items:center;gap:8px;padding:3px 0;"><input type="checkbox" checked style="accent-color:#9495D2"/><span style="color:var(--card-fg-muted);text-decoration:line-through;">캠페인 시안 3안</span><span style="margin-left:auto;background:#1F3A5F;color:#A9CBEF;border-radius:9999px;padding:1px 8px;font:700 10px/1.3 inherit;">민지</span></div>
        <div style="display:flex;align-items:center;gap:8px;padding:3px 0;"><input type="checkbox" style="accent-color:#9495D2"/>SEO 키워드 분석<span style="margin-left:auto;background:#1B3320;color:#6BCB6B;border-radius:9999px;padding:1px 8px;font:700 10px/1.3 inherit;">린호</span></div>
        <div style="display:flex;align-items:center;gap:8px;padding:3px 0;"><input type="checkbox" style="accent-color:#9495D2"/>예산 라인업<span style="margin-left:auto;background:#3A3320;color:#E0CB7A;border-radius:9999px;padding:1px 8px;font:700 10px/1.3 inherit;">미정</span></div>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:8px;align-items:center;">
      <span style="background:var(--card-accent);color:#1F1E2C;border-radius:4px;padding:6px 14px;font:600 12px/1 inherit;">/ 컴포넌트 삽입</span>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">Teams·Outlook 동기화 중</span>
    </div>
  </div>

sources:
  - https://loop.cloud.microsoft/
  - https://fluent2.microsoft.design/
---

### ① 브랜드 DNA
- **브랜드명**: Microsoft Loop
- **한 줄 정체성**: 실시간 협업 캔버스 — Loop 컴포넌트(작업/표/투표)를 Teams·Outlook에 그대로 임베드
- **공식 디자인 철학**: Fluent 2 + "Components that flow anywhere" — 컴포넌트가 페이지·채팅·메일을 넘나듦
- **시그니처 요소 1개**: Loop ∞ 로고 + Loop Indigo→Pink 그라데이션(#6264A7 → #9B4F96) + 컴포넌트 카드 좌상단 "∞ Task list / Voting / Table" 라벨. Notion의 슬래시 메뉴 톤이지만 자체 정체성

### ② 톤 & 무드
- **핵심 키워드 3개**: 협업캔버스, 실시간컴포넌트, 자유형식
- **무드 설명**: 옅은 라일락(#F9F8FC) 베이스 + 흰 페이지 카드. 모서리 8~10px Round로 친근하게. 협업 커서·아바타가 활발한 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~10px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Loop Indigo (dark-tuned: 밝은 인디고를 액션 색으로) */
  --color-primary-50:  #1A1A2E;
  --color-primary-100: #242444;
  --color-primary-200: #313158;
  --color-primary-300: #43447A;
  --color-primary-400: #595BA0;
  --color-primary-500: #8082C8;   /* Loop Indigo (dark accent) */
  --color-primary-600: #9495D2;
  --color-primary-700: #ABACDF;
  --color-primary-800: #C6C7EC;
  --color-primary-900: #E3E3F6;

  /* Secondary - Pink (그라데이션 끝) */
  --color-secondary-500: #C77FBE;
  --grad-loop: linear-gradient(135deg, #8082C8 0%, #C77FBE 100%);

  /* Neutral (dark ramp: 0=가장 어두움 → 1000=가장 밝음) */
  --color-neutral-0:    #14141E;
  --color-neutral-50:   #1A1A26;
  --color-neutral-100:  #1F1E2C;
  --color-neutral-200:  #2D2C42;
  --color-neutral-300:  #3B3A52;
  --color-neutral-500:  #6B6982;
  --color-neutral-700:  #A7A5BC;
  --color-neutral-800:  #D2D0E0;
  --color-neutral-900:  #ECEBF4;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #16301A;
  --color-success-fg: #6BCB6B;
  --color-warning-bg: #332C16;
  --color-warning-fg: #E0CB7A;
  --color-error-bg:   #3A1A1D;
  --color-error-fg:   #F08A90;
  --color-info-bg:    #142C42;
  --color-info-fg:    #5AB0F0;

  /* Component label colors */
  --comp-task:   #9495D2;
  --comp-table:  #3FBFC4;
  --comp-vote:   #FF945A;
  --comp-list:   #B681E0;
  --comp-status: #6BCB6B;

  /* Surface */
  --bg-base:     #16151F;
  --bg-subtle:   #1F1E2C;
  --bg-elevated: #2D2C42;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #F4F3FA;
  --text-secondary:  #D2D0E0;
  --text-tertiary:   #A7A5BC;
  --text-on-primary: #14141E;
  --text-link:       #9495D2;
  --text-disabled:   #6B6982;

  /* Border */
  --border-default: #3B3A52;
  --border-subtle:  #2D2C42;
  --border-strong:  #4E4D68;
  --border-focus:   #9495D2;
}

[data-theme="light"] {
  /* Primary - Loop Indigo */
  --color-primary-50:  #EFEFFA;
  --color-primary-100: #D6D7F0;
  --color-primary-200: #B6B7E2;
  --color-primary-300: #9495D2;
  --color-primary-400: #7779BC;
  --color-primary-500: #6264A7;   /* Loop Indigo */
  --color-primary-600: #4E5097;
  --color-primary-700: #3B3D7C;
  --color-primary-800: #2A2B5A;
  --color-primary-900: #18193A;

  /* Secondary - Pink (그라데이션 끝) */
  --color-secondary-500: #9B4F96;
  --grad-loop: linear-gradient(135deg, #6264A7 0%, #9B4F96 100%);

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9F8FC;
  --color-neutral-100:  #F3F2F8;
  --color-neutral-200:  #ECEAF5;
  --color-neutral-300:  #D2D0E0;
  --color-neutral-500:  #A19FB7;
  --color-neutral-700:  #605E70;
  --color-neutral-800:  #323042;
  --color-neutral-900:  #201F2E;
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

  /* Component label colors */
  --comp-task:   #6264A7;
  --comp-table:  #038387;
  --comp-vote:   #F7630C;
  --comp-list:   #5C2D91;
  --comp-status: #107C10;

  /* Surface */
  --bg-base:     #F9F8FC;
  --bg-subtle:   #F3F2F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(32,31,46,0.45);

  /* Text */
  --text-primary:    #201F2E;
  --text-secondary:  #323042;
  --text-tertiary:   #605E70;
  --text-on-primary: #FFFFFF;
  --text-link:       #6264A7;
  --text-disabled:   #A19FB7;

  /* Border */
  --border-default: #ECEAF5;
  --border-subtle:  #F3F2F8;
  --border-strong:  #D2D0E0;
  --border-focus:   #6264A7;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Segoe UI** / Aptos / system-ui
  - 한글: 맑은 고딕 / Pretendard
- **위계**:
  - Display: 32px / 700 / 1.2
  - H1: 24px / 700 / 1.25
  - H2: 19px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 16px / 400 / 1.6
  - Body: 14px / 400 / 1.55
  - Body Small: 12px / 500 / 1.4
  - Component Label: 11px / 700 / 1.3 (uppercase + tracking)
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

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;     /* 컴포넌트 카드 */
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.50);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.60);
--shadow-loop: 0 4px 16px rgba(98,100,167,0.45);
```

### ⑧ Iconography
- **스타일**: Fluent UI Icons — Outline 1.5px
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Fluent System Icons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 'Segoe UI', system-ui, sans-serif; border-radius: 4px; padding: 7px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-cta { background: var(--grad-loop); color: #14141E; border-radius: 6px; padding: 10px 18px; font: 700 14px/1 inherit; box-shadow: var(--shadow-loop); }
.btn-slash { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 4px; padding: 6px 12px; font: 700 12px/1 inherit; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 4px; padding: 7px 10px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(148,149,210,0.32); }
.slash-menu { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; padding: 6px; box-shadow: var(--shadow-md); width: 240px; }
.slash-menu .row { padding: 7px 10px; border-radius: 4px; display: flex; align-items: center; gap: 10px; font: 500 13px/1.4 inherit; cursor: pointer; }
.slash-menu .row:hover { background: var(--bg-subtle); }
.slash-menu .row .ico { width: 22px; height: 22px; border-radius: 4px; display: grid; place-items: center; color: #14141E; font: 700 11px/1 inherit; }
```

**Card (Loop component)**
```css
.loop-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; padding: 12px 14px; }
.loop-card .label { display: inline-flex; align-items: center; gap: 5px; font: 700 11px/1.3 inherit; color: var(--comp-task); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
.loop-card.table  .label { color: var(--comp-table); }
.loop-card.vote   .label { color: var(--comp-vote); }
.loop-card.status .label { color: var(--comp-status); }
.task-line { display: flex; align-items: center; gap: 10px; padding: 4px 0; font: 500 14px/1.5 inherit; }
.task-line.done { color: var(--text-tertiary); text-decoration: line-through; }
.task-line input { accent-color: var(--color-primary-500); width: 16px; height: 16px; }
.assignee { background: var(--color-info-bg); color: var(--color-info-fg); border-radius: 9999px; padding: 1px 8px; font: 700 11px/1.3 inherit; margin-left: auto; }
.collab-cursor { position: absolute; display: inline-flex; align-items: center; gap: 4px; font: 700 10px/1 inherit; color: #fff; }
.collab-cursor .dot { width: 8px; height: 8px; border-radius: 9999px; }
```

**Badge / Tag**
```css
.tag-component-task   { background: rgba(148,149,210,0.18); color: var(--comp-task); border-radius: 4px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.tag-component-table  { background: rgba(63,191,196,0.18); color: var(--comp-table); border-radius: 4px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.tag-component-vote   { background: rgba(255,148,90,0.18); color: var(--comp-vote); border-radius: 4px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.badge-live { background: var(--color-primary-500); color: #14141E; border-radius: 9999px; padding: 1px 8px; font: 700 11px/1.3 inherit; display: inline-flex; align-items: center; gap: 5px; }
.badge-live .dot { width: 6px; height: 6px; border-radius: 9999px; background: #14141E; }
```

**Navigation (Workspace sidebar)**
```css
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 240px; padding: 12px 0; }
.sidebar h2 { padding: 6px 16px; font: 700 11px/1.4 inherit; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
.sidebar .ws { display: flex; align-items: center; gap: 10px; padding: 8px 16px; font: 500 13px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .ws .ico { width: 22px; height: 22px; background: var(--grad-loop); color: #14141E; border-radius: 4px; display: grid; place-items: center; font: 800 11px/1 inherit; }
.sidebar .page { display: flex; align-items: center; gap: 10px; padding: 6px 18px 6px 36px; font: 500 13px/1.3 inherit; color: var(--text-secondary); cursor: pointer; border-radius: 4px; }
.sidebar .page:hover { background: var(--bg-subtle); }
.sidebar .page.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 보라를 Teams Purple(#5059C9)로 동일하게 사용 금지 — Loop은 더 짙은 인디고(#6264A7) + 핑크 그라데이션
2. 컴포넌트 좌상단 라벨(∞ Task / Vote / Table) 제거 금지 — 컴포넌트 정체성
3. 협업 커서·아바타 비공개로 숨기기 금지 — Loop은 실시간이 정체성
4. 카드 모서리 4px Sharp 금지 — 8~10px Round 친근함 유지
5. 슬래시 메뉴 없이 툴바 위주 UI 금지 — `/` 슬래시 컴포넌트 메뉴가 작성 패턴

### ⑫ 시그니처 적용 예시 (Loop 워크스페이스)

```html
<style>
  body { margin: 0; font-family: 'Segoe UI', system-ui, Pretendard, sans-serif; color: #F4F3FA; background: #16151F; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: #2D2C42; border-right: 1px solid #3B3A52; padding: 14px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 16px 14px; border-bottom: 1px solid #3B3A52; }
  .sidebar .brand .logo { width: 32px; height: 28px; background: linear-gradient(135deg, #8082C8, #C77FBE); border-radius: 8px; display: grid; place-items: center; color: #14141E; font: 900 14px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; }
  .sidebar h2 { padding: 12px 16px 6px; font: 700 11px/1.4 inherit; color: #A7A5BC; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
  .ws { display: flex; align-items: center; gap: 10px; padding: 8px 16px; font: 600 14px/1 inherit; color: #F4F3FA; cursor: pointer; }
  .ws .ico { width: 24px; height: 24px; background: linear-gradient(135deg, #8082C8, #C77FBE); border-radius: 4px; display: grid; place-items: center; color: #14141E; font: 900 12px/1 inherit; }
  .page { display: flex; align-items: center; gap: 8px; padding: 6px 18px 6px 36px; font: 500 13px/1.3 inherit; color: #D2D0E0; cursor: pointer; border-radius: 4px; margin: 2px 6px 2px 12px; }
  .page:hover { background: #1F1E2C; }
  .page.active { background: #313158; color: #C6C7EC; font-weight: 700; }
  main { padding: 28px 36px; max-width: 920px; }
  .meta-bar { display: flex; align-items: center; gap: 10px; font: 600 12px/1 inherit; color: #A7A5BC; }
  .breadcrumb { color: #A7A5BC; }
  .live { background: #8082C8; color: #14141E; border-radius: 9999px; padding: 3px 10px; font: 700 11px/1.3 inherit; display: inline-flex; align-items: center; gap: 6px; }
  .live .dot { width: 6px; height: 6px; background: #14141E; border-radius: 9999px; }
  .avatars { display: flex; margin-left: auto; }
  .avatars .av { width: 28px; height: 28px; border-radius: 9999px; border: 2px solid #2D2C42; display: grid; place-items: center; color: #fff; font: 700 11px/1 inherit; margin-left: -8px; }
  h1.page-title { margin: 12px 0 4px; font: 700 32px/1.2 inherit; }
  .meta { font: 500 12px/1 inherit; color: #A7A5BC; margin-bottom: 18px; }
  .doc > * + * { margin-top: 10px; }
  .doc p { margin: 0; font: 400 16px/1.7 inherit; color: #F4F3FA; }
  .doc h2 { margin: 18px 0 6px; font: 700 22px/1.3 inherit; }
  .loop-card { background: #2D2C42; border: 1px solid #3B3A52; border-radius: 8px; padding: 14px 16px; position: relative; box-shadow: 0 1px 2px rgba(0,0,0,0.40); }
  .loop-card .label { display: inline-flex; align-items: center; gap: 5px; font: 700 11px/1.3 inherit; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
  .lab-task   { color: #9495D2; }
  .lab-table  { color: #3FBFC4; }
  .lab-vote   { color: #FF945A; }
  .lab-status { color: #6BCB6B; }
  .task-line { display: flex; align-items: center; gap: 10px; padding: 5px 0; font: 500 14px/1.5 inherit; }
  .task-line.done { color: #A7A5BC; text-decoration: line-through; }
  .task-line input { accent-color: #9495D2; width: 16px; height: 16px; }
  .ass { border-radius: 9999px; padding: 1px 9px; font: 700 11px/1.3 inherit; margin-left: auto; }
  .ass.minji  { background: #1F3A5F; color: #A9CBEF; }
  .ass.linho  { background: #1B3320; color: #6BCB6B; }
  .ass.unset  { background: #3A3320; color: #E0CB7A; }
  .vote-row { display: grid; grid-template-columns: 1fr 60px 80px; gap: 10px; padding: 6px 0; font: 500 14px/1.4 inherit; align-items: center; border-bottom: 1px solid #1F1E2C; }
  .vote-row:last-child { border-bottom: 0; }
  .vote-row .bar { height: 8px; background: linear-gradient(90deg, #8082C8, #C77FBE); border-radius: 9999px; }
  .vote-row .count { font: 700 12px/1 inherit; color: #9495D2; text-align: right; }
  .slash { background: #313158; color: #C6C7EC; border-radius: 4px; padding: 4px 10px; font: 700 12px/1 inherit; display: inline-block; }
  .cursor { position: absolute; right: 14px; top: 14px; display: inline-flex; align-items: center; gap: 5px; font: 700 10px/1 inherit; color: #fff; background: #E3008C; padding: 3px 7px; border-radius: 9999px 9999px 9999px 0; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">∞</div><div class="name">Loop</div></div>
    <h2>Workspaces</h2>
    <div class="ws"><div class="ico">MK</div>Marketing</div>
    <div class="page active">📄 Marketing Q2 plan</div>
    <div class="page">📄 Campaign brainstorm</div>
    <div class="page">📄 SEO research</div>
    <div class="ws" style="margin-top:8px;"><div class="ico" style="background:linear-gradient(135deg,#3FBF6B,#6BCB6B);">ENG</div>Engineering</div>
    <div class="page">📄 Sprint 23 backlog</div>
    <div class="page">📄 Architecture review</div>
  </aside>
  <main>
    <div class="meta-bar">
      <span class="breadcrumb">Marketing › 📄 Marketing Q2 plan</span>
      <span class="live"><span class="dot"></span>LIVE · 3명 편집중</span>
      <div class="avatars">
        <span class="av" style="background:linear-gradient(135deg,#8082C8,#C77FBE);">MJ</span>
        <span class="av" style="background:linear-gradient(135deg,#3FBF6B,#6BCB6B);">LH</span>
        <span class="av" style="background:linear-gradient(135deg,#E3008C,#FF6BBA);">MS</span>
      </div>
    </div>
    <h1 class="page-title">2026 Q2 마케팅 플랜</h1>
    <div class="meta">5월 14일 (목) 오전 10:30 · @mia가 마지막 편집</div>
    <section class="doc">
      <p>이번 분기 핵심 메시지는 <strong>"디자인이 흐른다"</strong>입니다. Loop 컴포넌트를 그대로 Teams 채널과 Outlook 메일에 임베드하면, 작업 상태가 모든 도구에서 실시간으로 동기화됩니다.</p>
      <h2>이번 주 작업</h2>
      <div class="loop-card">
        <span class="cursor">민지 ✎</span>
        <div class="label lab-task">∞ Task list</div>
        <div class="task-line done"><input type="checkbox" checked/>캠페인 시안 3안 제출<span class="ass minji">민지</span></div>
        <div class="task-line"><input type="checkbox"/>SEO 키워드 분석 (Top 50)<span class="ass linho">린호</span></div>
        <div class="task-line"><input type="checkbox"/>분기 예산 라인업 정리<span class="ass unset">미정</span></div>
        <div class="task-line"><input type="checkbox"/>대행사 미팅 준비<span class="ass minji">민지</span></div>
      </div>
      <h2>주제 후보 투표</h2>
      <div class="loop-card vote">
        <div class="label lab-vote">∞ Voting</div>
        <div class="vote-row"><span>A. "디자인이 흐른다"</span><div class="bar" style="width:80%;"></div><span class="count">8 / 12</span></div>
        <div class="vote-row"><span>B. "팀이 같은 흐름으로"</span><div class="bar" style="width:50%;"></div><span class="count">5 / 12</span></div>
        <div class="vote-row"><span>C. "Loop으로 모이는 자리"</span><div class="bar" style="width:30%;"></div><span class="count">3 / 12</span></div>
      </div>
      <h2>현황</h2>
      <div class="loop-card status">
        <div class="label lab-status">∞ Status</div>
        <p style="margin:0;font:600 14px/1.5 inherit;color:#6BCB6B;">▲ On track · 캠페인 1주 앞당김</p>
      </div>
      <p style="margin-top:18px;"><span class="slash">/ component</span> 를 입력해 표·체크리스트·투표·진행 상태를 삽입할 수 있어요.</p>
    </section>
  </main>
</div>
```
