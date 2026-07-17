---
brand: Microsoft Outlook
brand_ko: 마이크로소프트 아웃룩
slug: ms-outlook
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#0078D4"
primary_color_name: "Outlook Blue"
mood:
  - 메일
  - 일정
  - 단정

font_category: sans-serif
font_primary: Segoe UI
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 1997
last_major_revision: 2025
signature_keyword: "Outlook 블루 + 봉투+O 로고 + 3분할 리딩 패널의 비즈니스 메일"

card_tokens: |
  {
    "light": { "bg": "#FAF9F8", "surface": "#FFFFFF", "border": "#EDEBE9", "fg": "#201F1E", "fg_muted": "#605E5C", "accent": "#0078D4" },
    "dark":  { "bg": "#1B1A19", "surface": "#2D2C2B", "border": "#323130", "fg": "#FFFFFF", "fg_muted": "#D2D0CE", "accent": "#2E9DE0" }
  }

hero_html: |
  <div style="font-family:'Segoe UI','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;">
    <div style="padding:8px 14px;background:var(--card-accent);color:#fff;display:flex;align-items:center;gap:10px;">
      <div style="width:24px;height:20px;background:#fff;color:var(--card-accent);border-radius:3px;display:grid;place-items:center;font:900 11px/1 sans-serif;">O</div>
      <strong style="font-size:13px;font-weight:600;">받은 편지함</strong>
      <span style="margin-left:auto;font-size:11px;opacity:0.85;">12 unread</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr;overflow:hidden;">
      <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;">
        <div style="background:var(--card-surface);border-left:3px solid var(--card-accent);padding:8px 12px;display:grid;grid-template-columns:1fr auto;gap:4px;font:500 12px/1.4 inherit;border-radius:0 4px 4px 0;">
          <div>
            <div style="font-weight:700;color:var(--card-accent);">민지 · 캠페인 검토 요청</div>
            <div style="color:var(--card-fg-muted);font-size:11px;margin-top:1px;">금주 시안 PDF 첨부드립니다…</div>
          </div>
          <div style="font:600 10px/1 inherit;color:var(--card-fg-muted);text-align:right;">📎 10:24</div>
        </div>
        <div style="padding:8px 12px;display:grid;grid-template-columns:1fr auto;gap:4px;font:500 12px/1.4 inherit;border-bottom:1px solid var(--card-border);">
          <div>
            <div>린호 · 디자인 시스템 v3</div>
            <div style="color:var(--card-fg-muted);font-size:11px;margin-top:1px;">변경 사항 정리 메모…</div>
          </div>
          <div style="font:600 10px/1 inherit;color:var(--card-fg-muted);text-align:right;">09:42</div>
        </div>
        <div style="padding:8px 12px;display:grid;grid-template-columns:1fr auto;gap:4px;font:500 12px/1.4 inherit;border-bottom:1px solid var(--card-border);">
          <div>
            <div>GitHub · 풀 리퀘스트 #142</div>
            <div style="color:var(--card-fg-muted);font-size:11px;margin-top:1px;">@minji가 리뷰 요청…</div>
          </div>
          <div style="font:600 10px/1 inherit;color:var(--card-fg-muted);text-align:right;">08:15</div>
        </div>
      </div>
    </div>
    <div style="padding:8px 12px;background:var(--card-surface);border-top:1px solid var(--card-border);display:flex;gap:6px;align-items:center;">
      <div style="background:var(--card-accent);color:#fff;border-radius:3px;padding:6px 14px;font:600 12px/1 inherit;">✉ 새 메일</div>
      <span style="margin-left:auto;font:400 11px/1 inherit;color:var(--card-fg-muted);">Focused</span>
    </div>
  </div>

sources:
  - https://outlook.live.com/
  - https://fluent2.microsoft.design/
---

### ① 브랜드 DNA
- **브랜드명**: Microsoft Outlook
- **한 줄 정체성**: MS 365 메일·캘린더·연락처 통합 클라이언트 — 비즈니스 메일 사실상 표준
- **공식 디자인 철학**: Fluent 2 — Outlook Blue 헤더 + 단정한 메일 리스트
- **시그니처 요소 1개**: 봉투(▽) + 흰 O 모노그램 로고 + Outlook Blue(#0078D4) 헤더 + 3분할(폴더 / 리스트 / 리딩) 레이아웃. Teams 보라·OneNote 보라와 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 메일, 일정, 단정
- **무드 설명**: 라이트 베이지 그레이 베이스(#FAF9F8) + Outlook Blue 헤더. 카드보다 표 형태에 가까운 메일 리스트, 1px 보더 + 활성 메일 좌측 3px 블루 막대.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 메일 리스트 한 줄 60~70px
- **모서리 성향**: Soft (3~4px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Outlook Blue (dark-tuned: 다크 표면 대비 위해 라이트니스 상향) */
  --color-primary-50:  #0A2438;
  --color-primary-100: #0E3556;
  --color-primary-200: #134975;
  --color-primary-300: #185E99;
  --color-primary-400: #1F7AC4;
  --color-primary-500: #2E9DE0;   /* Outlook Blue (on dark) */
  --color-primary-600: #4EAEE8;
  --color-primary-700: #74C0EE;
  --color-primary-800: #A3D5F4;
  --color-primary-900: #D4EBFA;

  /* Neutral - Fluent warm gray (inverted ramp) */
  --color-neutral-0:    #1B1A19;
  --color-neutral-50:   #201F1E;     /* page bg */
  --color-neutral-100:  #252423;
  --color-neutral-200:  #323130;
  --color-neutral-300:  #484644;
  --color-neutral-500:  #797673;
  --color-neutral-700:  #C8C6C4;
  --color-neutral-800:  #E1DFDD;
  --color-neutral-900:  #F3F2F1;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #143B1A;
  --color-success-fg: #6CCB70;
  --color-warning-bg: #3D3416;
  --color-warning-fg: #E6C84B;
  --color-error-bg:   #4A1D20;
  --color-error-fg:   #F1707B;
  --color-info-bg:    #0E3556;
  --color-info-fg:    #2E9DE0;

  /* Category colors (Outlook 카테고리 색) */
  --cat-red:    #F1707B;
  --cat-orange: #F89B5C;
  --cat-yellow: #FFCD3C;
  --cat-green:  #6CCB70;
  --cat-blue:   #2E9DE0;
  --cat-purple: #B18CDA;

  /* Surface */
  --bg-base:     #1B1A19;
  --bg-subtle:   #252423;
  --bg-elevated: #2D2C2B;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #E1DFDD;
  --text-tertiary:   #C8C6C4;
  --text-on-primary: #FFFFFF;
  --text-link:       #6BB9EC;
  --text-disabled:   #797673;

  /* Border */
  --border-default: #323130;
  --border-subtle:  #2A2928;
  --border-strong:  #484644;
  --border-focus:   #2E9DE0;
}

[data-theme="light"] {
  /* Primary - Outlook Blue */
  --color-primary-50:  #DEECF9;
  --color-primary-100: #B7DAF1;
  --color-primary-200: #8AC4E8;
  --color-primary-300: #5BAEE0;
  --color-primary-400: #2E9DE0;
  --color-primary-500: #0078D4;   /* Outlook Blue */
  --color-primary-600: #106EBE;
  --color-primary-700: #005A9E;
  --color-primary-800: #004578;
  --color-primary-900: #002E50;

  /* Neutral - Fluent warm gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAF9F8;     /* page bg */
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

  /* Category colors (Outlook 카테고리 색) */
  --cat-red:    #E81123;
  --cat-orange: #F7630C;
  --cat-yellow: #FFB900;
  --cat-green:  #107C10;
  --cat-blue:   #0078D4;
  --cat-purple: #5C2D91;

  /* Surface */
  --bg-base:     #FAF9F8;
  --bg-subtle:   #F3F2F1;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.40);

  /* Text */
  --text-primary:    #201F1E;
  --text-secondary:  #323130;
  --text-tertiary:   #605E5C;
  --text-on-primary: #FFFFFF;
  --text-link:       #0078D4;
  --text-disabled:   #A19F9D;

  /* Border */
  --border-default: #EDEBE9;
  --border-subtle:  #F3F2F1;
  --border-strong:  #D2D0CE;
  --border-focus:   #0078D4;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Segoe UI** / Aptos / system-ui
  - 한글: 맑은 고딕 / Pretendard
- **위계**:
  - Display: 28px / 600 / 1.2
  - H1: 22px / 600 / 1.25
  - H2: 18px / 600 / 1.3
  - H3: 16px / 600 / 1.35
  - Body Large: 14px / 400 / 1.5
  - Body: 14px / 400 / 1.5
  - Body Small: 12px / 500 / 1.4 (메타 정보)
  - Caption: 11px / 600 / 1.3 (timestamp)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  6px;
  --space-md: 10px;
  --space-lg: 14px;
  --space-xl: 20px;
  --space-2xl: 28px;
  --space-3xl: 44px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.28);
--shadow-md: 0 4px 12px rgba(0,0,0,0.40);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.55);
```

### ⑧ Iconography
- **스타일**: Fluent UI Icons (Outline/Filled)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Fluent System Icons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 'Segoe UI', system-ui, sans-serif; border-radius: 2px; padding: 7px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-icon { background: transparent; border: 0; width: 32px; height: 32px; border-radius: 3px; color: var(--text-secondary); }
.btn-icon:hover { background: var(--bg-subtle); }
.btn-reply { background: var(--color-primary-500); color: #fff; padding: 7px 14px; }
```

**Input / Compose**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 2px; padding: 6px 10px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 0; }
.compose { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; padding: 12px 14px; }
.compose .row { display: grid; grid-template-columns: 60px 1fr; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--border-default); font: 400 13px/1.4 inherit; }
.compose .row .label { color: var(--text-tertiary); font-weight: 600; }
.recipient-pill { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 9999px; padding: 1px 8px; font: 600 12px/1.4 inherit; display: inline-flex; align-items: center; gap: 4px; }
```

**Card (Mail row / Reading pane)**
```css
.maillist { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 340px; }
.mail-row { padding: 10px 14px; border-bottom: 1px solid var(--border-subtle); display: grid; grid-template-columns: 1fr auto; gap: 4px; cursor: pointer; }
.mail-row.unread { border-left: 3px solid var(--color-primary-500); padding-left: 11px; }
.mail-row .from { font: 600 13px/1.3 inherit; color: var(--text-primary); }
.mail-row .subject { font: 500 13px/1.3 inherit; color: var(--text-primary); margin-top: 2px; }
.mail-row.unread .subject { font-weight: 700; }
.mail-row .preview { font: 400 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 2px; }
.mail-row .time { font: 600 11px/1 inherit; color: var(--text-tertiary); }
.mail-row .attach { color: var(--text-tertiary); font-size: 12px; }
.mail-row.active { background: var(--bg-subtle); }
.reading { padding: 16px 20px; background: var(--bg-elevated); border-radius: 4px; }
.reading h2 { margin: 0 0 6px; font: 600 18px/1.3 inherit; }
.reading .meta { display: flex; align-items: center; gap: 10px; font: 500 12px/1.4 inherit; color: var(--text-tertiary); padding: 8px 0; border-bottom: 1px solid var(--border-default); }
.reading .body { padding: 14px 0; font: 400 14px/1.6 inherit; }
```

**Badge / Tag**
```css
.cat-red    { width: 10px; height: 10px; border-radius: 3px; background: var(--cat-red); display: inline-block; }
.cat-blue   { width: 10px; height: 10px; border-radius: 3px; background: var(--cat-blue); display: inline-block; }
.cat-yellow { width: 10px; height: 10px; border-radius: 3px; background: var(--cat-yellow); display: inline-block; }
.badge-unread-count { background: var(--color-primary-500); color: #fff; border-radius: 9999px; padding: 1px 8px; font: 700 11px/1.4 inherit; min-width: 20px; text-align: center; }
.tag-focused { background: var(--color-primary-500); color: #fff; border-radius: 2px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
```

**Navigation (Top + Folder tree)**
```css
.topbar { background: var(--color-primary-500); color: #fff; padding: 8px 14px; display: flex; align-items: center; gap: 12px; }
.topbar .logo { width: 24px; height: 20px; background: #fff; color: var(--color-primary-500); border-radius: 3px; display: grid; place-items: center; font: 900 11px/1 inherit; }
.topbar h1 { margin: 0; font: 600 16px/1 inherit; }
.search { flex: 1; background: rgba(255,255,255,0.12); border-radius: 3px; padding: 5px 12px; font: 500 13px/1 inherit; color: #fff; }
.folders { width: 220px; background: var(--bg-elevated); border-right: 1px solid var(--border-default); padding: 10px 0; }
.folders .item { display: flex; align-items: center; gap: 10px; padding: 7px 16px; font: 500 13px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.folders .item:hover { background: var(--bg-subtle); }
.folders .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 700; border-left: 3px solid var(--color-primary-500); padding-left: 13px; }
```

### ⑩ Motion
```css
--duration-fast: 90ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. Outlook Blue를 Teams Purple로 대체 금지 — 각 MS 365 앱마다 시그니처 색 분리 (Outlook=블루)
2. 메일 리스트 모서리 12px 이상 금지 — 0~3px Sharp/Soft, 1px 보더로 구분
3. 활성 메일에 좌측 3px 컬러 막대 제거 금지 — 읽지 않은 메일도 같은 시그니처
4. Aptos/Segoe UI 외 세리프 본문 금지 — MS 365 일관성
5. 3분할 레이아웃(폴더/리스트/리딩)을 2분할로 축소 강제 금지 — 데스크톱은 3분할이 정체성

### ⑫ 시그니처 적용 예시 (Outlook 3분할)

```html
<style>
  body { margin: 0; font-family: 'Segoe UI', system-ui, Pretendard, sans-serif; color: #FFFFFF; background: #1B1A19; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-rows: 44px 1fr; min-height: 100vh; }
  .topbar { background: #2E9DE0; color: #fff; padding: 0 14px; display: flex; align-items: center; gap: 14px; }
  .topbar .logo { width: 28px; height: 22px; background: #fff; color: #2E9DE0; border-radius: 3px; display: grid; place-items: center; font: 900 12px/1 inherit; }
  .topbar h1 { margin: 0; font: 600 16px/1 inherit; }
  .search { flex: 1; max-width: 600px; background: rgba(255,255,255,0.14); border-radius: 3px; padding: 7px 12px; font: 500 13px/1 inherit; color: #fff; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; }
  .grid { display: grid; grid-template-columns: 220px 340px 1fr; height: calc(100vh - 44px); }
  .folders { background: #2D2C2B; border-right: 1px solid #323130; padding: 12px 0; }
  .folders h2 { margin: 0; padding: 6px 16px; font: 700 11px/1.4 inherit; color: #C8C6C4; text-transform: uppercase; letter-spacing: 0.05em; }
  .folders .item { display: flex; align-items: center; gap: 10px; padding: 8px 16px; font: 500 13px/1 inherit; color: #E1DFDD; cursor: pointer; }
  .folders .item:hover { background: #252423; }
  .folders .item.active { background: #0E3556; color: #74C0EE; font-weight: 700; border-left: 3px solid #2E9DE0; padding-left: 13px; }
  .folders .item .count { margin-left: auto; font: 700 11px/1 inherit; color: #2E9DE0; }
  .maillist { background: #2D2C2B; border-right: 1px solid #323130; }
  .maillist .head { padding: 10px 14px; border-bottom: 1px solid #323130; display: flex; align-items: center; gap: 8px; }
  .maillist .head h3 { margin: 0; font: 700 16px/1.2 inherit; }
  .maillist .tabs { display: flex; gap: 20px; padding: 0 14px; border-bottom: 1px solid #323130; font: 600 13px/1 inherit; }
  .maillist .tabs .tab { padding: 10px 0; cursor: pointer; color: #C8C6C4; border-bottom: 2px solid transparent; }
  .maillist .tabs .tab.active { color: #2E9DE0; border-bottom-color: #2E9DE0; }
  .row { padding: 11px 14px 11px 16px; border-bottom: 1px solid #323130; display: grid; grid-template-columns: 1fr auto; gap: 4px; cursor: pointer; }
  .row.unread { border-left: 3px solid #2E9DE0; padding-left: 13px; }
  .row.active { background: #0E3556; }
  .row .from { font: 600 13px/1.3 inherit; color: #FFFFFF; }
  .row.unread .from { color: #6BB9EC; }
  .row .subject { font: 500 13px/1.3 inherit; color: #FFFFFF; margin-top: 2px; }
  .row.unread .subject { font-weight: 700; }
  .row .preview { font: 400 12px/1.4 inherit; color: #C8C6C4; margin-top: 2px; }
  .row .time { font: 700 11px/1 inherit; color: #C8C6C4; text-align: right; }
  .row .attach { color: #C8C6C4; font-size: 12px; text-align: right; margin-top: 4px; }
  .reading { padding: 20px 24px; background: #2D2C2B; overflow-y: auto; }
  .reading h2 { margin: 0; font: 600 20px/1.3 inherit; }
  .reading .meta { display: grid; grid-template-columns: 40px 1fr auto; gap: 12px; padding: 14px 0; border-bottom: 1px solid #323130; align-items: center; }
  .reading .meta .av { width: 40px; height: 40px; border-radius: 9999px; background: linear-gradient(135deg, #7C84E8, #9AA0F0); color: #fff; display: grid; place-items: center; font: 700 14px/1 inherit; }
  .reading .meta .who { font: 600 14px/1.3 inherit; }
  .reading .meta .when { font: 500 12px/1.3 inherit; color: #C8C6C4; margin-top: 2px; }
  .reading .meta .actions { display: flex; gap: 6px; }
  .btn-reply { background: #2E9DE0; color: #fff; border: 0; padding: 7px 14px; border-radius: 2px; font: 600 13px/1 inherit; cursor: pointer; }
  .btn-ghost { background: transparent; color: #E1DFDD; border: 1px solid #484644; padding: 7px 14px; border-radius: 2px; font: 600 13px/1 inherit; cursor: pointer; }
  .reading .body { padding: 16px 0; font: 400 14px/1.65 inherit; color: #E1DFDD; }
  .reading .attach-card { display: inline-flex; gap: 8px; align-items: center; background: #252423; border: 1px solid #323130; border-radius: 4px; padding: 8px 12px; font: 500 12px/1.3 inherit; margin-top: 10px; }
  .reading .attach-card .ico { width: 28px; height: 28px; background: #F1707B; border-radius: 3px; color: #fff; display: grid; place-items: center; font: 800 12px/1 inherit; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">O</div>
    <h1>Outlook</h1>
    <div class="search">🔍 메일·일정·연락처 검색</div>
    <div class="right"><span>⚙</span><span>?</span></div>
  </header>
  <div class="grid">
    <aside class="folders">
      <h2>Favorites</h2>
      <div class="item active">📥 받은 편지함<span class="count">12</span></div>
      <div class="item">📤 보낸 편지함</div>
      <div class="item">⭐ 표시된 메일</div>
      <h2 style="margin-top:8px;">Folders</h2>
      <div class="item">✏ 임시 보관함</div>
      <div class="item">📂 보관함</div>
      <div class="item">🗑 지운 메일</div>
      <div class="item">📌 정크 메일</div>
      <h2 style="margin-top:8px;">Groups</h2>
      <div class="item">👥 Marketing</div>
      <div class="item">👥 Engineering</div>
    </aside>
    <section class="maillist">
      <div class="head"><h3>받은 편지함</h3><span style="margin-left:auto;font:500 12px/1 inherit;color:#C8C6C4;">Filter ▾</span></div>
      <div class="tabs"><span class="tab active">Focused</span><span class="tab">Other</span></div>
      <div class="row unread active">
        <div><div class="from">민지</div><div class="subject">캠페인 검토 요청</div><div class="preview">금주 시안 PDF 첨부드립니다. 16:00 회의 전에…</div></div>
        <div><div class="time">10:24</div><div class="attach">📎</div></div>
      </div>
      <div class="row unread">
        <div><div class="from">린호</div><div class="subject">디자인 시스템 v3 변경 사항</div><div class="preview">컴포넌트별 토큰 변경 사항 정리 메모…</div></div>
        <div><div class="time">09:42</div></div>
      </div>
      <div class="row">
        <div><div class="from">GitHub</div><div class="subject">[oppadu/site] PR #142</div><div class="preview">@minji가 리뷰를 요청했습니다…</div></div>
        <div><div class="time">08:15</div></div>
      </div>
      <div class="row">
        <div><div class="from">캘린더</div><div class="subject">월요일 9:00 — 스프린트 플래닝</div><div class="preview">15분 전 알림</div></div>
        <div><div class="time">어제</div></div>
      </div>
    </section>
    <section class="reading">
      <h2>캠페인 검토 요청</h2>
      <div class="meta">
        <div class="av">MJ</div>
        <div>
          <div class="who">민지 &lt;minji@oppadu.com&gt; <span style="font:500 12px/1 inherit;color:#C8C6C4;">→ 나, 린호</span></div>
          <div class="when">2026년 5월 14일 (목) 오전 10:24</div>
        </div>
        <div class="actions">
          <button class="btn-reply">↩ 답장</button>
          <button class="btn-ghost">↪ 전달</button>
          <button class="btn-ghost">⋯</button>
        </div>
      </div>
      <div class="body">
        <p>안녕하세요,</p>
        <p>금주 캠페인 시안 PDF 첨부드립니다. 컬러 톤은 Outlook Blue 계열로 통일했고, 헤더 카피는 세 안으로 준비했어요. 16:00 회의 전에 가볍게 봐주실 수 있을까요?</p>
        <p>감사합니다.<br/>민지 드림</p>
        <div class="attach-card"><div class="ico">PDF</div><div><div style="font-weight:700;">Marketing_Campaign_v3.pdf</div><div style="color:#C8C6C4;font-size:11px;">2.4 MB · 12 페이지</div></div></div>
      </div>
    </section>
  </div>
</div>
```
