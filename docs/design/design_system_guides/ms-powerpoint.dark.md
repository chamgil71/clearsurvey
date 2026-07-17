---
brand: Microsoft PowerPoint
brand_ko: 마이크로소프트 파워포인트
slug: ms-powerpoint
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - productivity
  - enterprise

color_tone: warm
primary_color_hex: "#B7472A"
primary_color_name: "PowerPoint Red"
mood:
  - 발표
  - 시각
  - 자신감

font_category: sans-serif
font_primary: Aptos
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 1987
last_major_revision: 2024
signature_keyword: "PowerPoint 레드 + 16:9 슬라이드 + 슬라이드 패널의 발표 도구 표준"

card_tokens: |
  {
    "light": { "bg": "#525252", "surface": "#FFFFFF", "border": "#E1DFDD", "fg": "#252525", "fg_muted": "#605E5C", "accent": "#B7472A" },
    "dark":  { "bg": "#1F1F1F", "surface": "#2A2A2A", "border": "#3B3A39", "fg": "#F3F2F1", "fg_muted": "#A19F9D", "accent": "#CC7158" }
  }

hero_html: |
  <div style="font-family:Aptos,'Segoe UI Variable',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto auto 1fr;letter-spacing:-0.005em;">
    <div style="background:var(--card-accent);color:#fff;padding:8px 12px;display:flex;align-items:center;gap:8px;font-size:11px;font-weight:600;">
      <div style="width:18px;height:18px;background:#fff;color:var(--card-accent);border-radius:3px;display:grid;place-items:center;font:900 11px/1 inherit;">P</div>
      <span>PowerPoint</span>
      <span style="opacity:0.85;font-weight:500;">발표자료.pptx</span>
      <span style="margin-left:auto;font-size:10px;opacity:0.85;">자동 저장됨</span>
    </div>
    <div style="background:#1B1A19;border-bottom:1px solid var(--card-border);padding:4px 8px;display:flex;align-items:center;gap:6px;font-size:11px;color:var(--card-fg);">
      <span style="padding:3px 8px;background:var(--card-surface);border:1px solid var(--card-border);border-radius:3px;font-weight:600;">홈</span>
      <span style="padding:3px 8px;color:var(--card-fg-muted);">삽입</span>
      <span style="padding:3px 8px;color:var(--card-fg-muted);">디자인</span>
      <span style="padding:3px 8px;color:var(--card-fg-muted);">전환</span>
    </div>
    <div style="display:grid;grid-template-columns:60px 1fr;height:100%;">
      <div style="background:#141312;padding:6px;display:flex;flex-direction:column;gap:4px;">
        <div style="background:var(--card-surface);aspect-ratio:16/9;border-radius:2px;outline:2px solid var(--card-accent);outline-offset:1px;display:grid;place-items:center;color:var(--card-fg);font:600 7px/1 inherit;">1</div>
        <div style="background:var(--card-surface);aspect-ratio:16/9;border-radius:2px;display:grid;place-items:center;color:var(--card-fg);font:600 7px/1 inherit;opacity:0.7;">2</div>
        <div style="background:var(--card-surface);aspect-ratio:16/9;border-radius:2px;display:grid;place-items:center;color:var(--card-fg);font:600 7px/1 inherit;opacity:0.7;">3</div>
      </div>
      <div style="background:var(--card-bg);padding:14px;display:grid;place-items:center;">
        <div style="background:var(--card-surface);aspect-ratio:16/9;width:100%;padding:18px 22px;display:flex;flex-direction:column;justify-content:center;gap:6px;box-shadow:0 4px 14px rgba(0,0,0,0.55);position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;width:100%;height:6px;background:var(--card-accent);"></div>
          <div style="font:500 9px/1 inherit;color:var(--card-accent);letter-spacing:0.06em;">2026 KICKOFF</div>
          <div style="font:800 18px/1.2 inherit;letter-spacing:-0.02em;">하반기 사업 비전</div>
          <div style="font:400 10px/1.4 inherit;color:var(--card-fg-muted);">기획팀 · 김연주 · 5월 12일</div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.microsoft.com/en-us/microsoft-365/powerpoint
  - https://fluent2.microsoft.design/
---

### ① 브랜드 DNA
- **브랜드명**: Microsoft PowerPoint
- **한 줄 정체성**: 1987년 이후 프레젠테이션 표준 — 슬라이드 단위 시각 자료 제작 도구
- **공식 디자인 철학**: Microsoft 365 / Fluent 2 — 슬라이드는 캔버스, UI는 보조
- **시그니처 요소 1개**: PowerPoint 레드(#B7472A) 헤더 + 16:9 흰 슬라이드 + 좌측 슬라이드 썸네일 패널. Excel·Word와 같은 Office 컬러 코드

### ② 톤 & 무드
- **핵심 키워드 3개**: 발표, 시각, 자신감
- **무드 설명**: 어두운 회색 캔버스(#525252)에 흰 슬라이드가 중앙에 떠있는 발표 메타포. 좌측 #3B3A39 다크 슬라이드 패널, 우측 #F3F2F1 디테일 패널. 슬라이드 내부 디자인은 자유롭지만 PowerPoint UI 자체는 Office 패밀리 톤.
- **비주얼 스타일**: 모던 미니멀 (Fluent 2)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (슬라이드 0px, UI 2~4px)
- **평면성**: Layered — 슬라이드에 md 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - PowerPoint Red — 다크 배경 대비 위해 명도 상향 */
  --color-primary-50:  #3A150B;
  --color-primary-100: #5C2213;
  --color-primary-200: #7D2F1A;
  --color-primary-300: #9C3B22;
  --color-primary-400: #B7472A;   /* PowerPoint Red (원형) */
  --color-primary-500: #CC7158;   /* PowerPoint Red — 다크 대비 보정 */
  --color-primary-600: #DC9A88;
  --color-primary-700: #ECC4BA;
  --color-primary-800: #F4DBD2;
  --color-primary-900: #F8E8E4;

  /* Secondary - 슬라이드 강조 (자유) */
  --color-accent-500: #F2C811;        /* 노란 강조 */

  /* Neutral - Fluent 2 + 슬라이드 패널 다크 (반전 램프) */
  --color-neutral-0:    #1B1A19;
  --color-neutral-50:   #1F1F1F;
  --color-neutral-100:  #252525;
  --color-neutral-200:  #2A2A2A;
  --color-neutral-300:  #3B3A39;
  --color-neutral-500:  #605E5C;
  --color-neutral-600:  #A19F9D;
  --color-neutral-700:  #C8C6C4;        /* text secondary */
  --color-neutral-800:  #E1DFDD;
  --color-neutral-900:  #F3F2F1;        /* text primary */
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크 배경 대비 */
  --color-success-bg: #112B11;
  --color-success-fg: #6CCB6C;
  --color-warning-bg: #3A3110;
  --color-warning-fg: #E6C44A;
  --color-error-bg:   #3B1517;
  --color-error-fg:   #F1707A;
  --color-info-bg:    #0A2740;
  --color-info-fg:    #4FB0F5;

  /* Surface */
  --bg-canvas:    #141312;          /* 슬라이드 외부 */
  --bg-slide:     #2A2A2A;
  --bg-panel:     #1B1A19;          /* 좌측 슬라이드 썸네일 패널 */
  --bg-ribbon:    #1F1F1F;
  --bg-subtle:    #252525;
  --bg-overlay:   rgba(0,0,0,0.65);

  /* Text */
  --text-primary:    #F3F2F1;
  --text-secondary:  #D6D4D2;
  --text-tertiary:   #A19F9D;
  --text-on-primary: #FFFFFF;
  --text-on-panel:   #FFFFFF;       /* 다크 패널 위 */
  --text-disabled:   #605E5C;

  /* Border */
  --border-default: #3B3A39;
  --border-subtle:  #2A2A2A;
  --border-strong:  #605E5C;
  --border-focus:   #CC7158;        /* 슬라이드 선택 외곽선 */
}

[data-theme="light"] {
  /* Primary - PowerPoint Red */
  --color-primary-50:  #F8E8E4;
  --color-primary-100: #ECC4BA;
  --color-primary-200: #DC9A88;
  --color-primary-300: #CC7158;
  --color-primary-400: #C25A3D;
  --color-primary-500: #B7472A;   /* PowerPoint Red */
  --color-primary-600: #9C3B22;
  --color-primary-700: #7D2F1A;
  --color-primary-800: #5C2213;
  --color-primary-900: #3A150B;

  /* Secondary - 슬라이드 강조 (자유) */
  --color-accent-500: #F2C811;        /* 노란 강조 */

  /* Neutral - Fluent 2 + 슬라이드 패널 다크 */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F3F2F1;
  --color-neutral-200:  #E1DFDD;
  --color-neutral-300:  #D1D1D1;
  --color-neutral-500:  #A19F9D;
  --color-neutral-600:  #605E5C;
  --color-neutral-700:  #525252;        /* canvas bg */
  --color-neutral-800:  #3B3A39;        /* slide panel bg */
  --color-neutral-900:  #252525;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DFF6DD;
  --color-success-fg: #107C10;
  --color-warning-bg: #FFF4CE;
  --color-warning-fg: #8A6900;
  --color-error-bg:   #FDE7E9;
  --color-error-fg:   #A4262C;
  --color-info-bg:    #EFF6FC;
  --color-info-fg:    #0078D4;

  /* Surface */
  --bg-canvas:    #525252;          /* 슬라이드 외부 */
  --bg-slide:     #FFFFFF;
  --bg-panel:     #3B3A39;          /* 좌측 슬라이드 썸네일 패널 */
  --bg-ribbon:    #F3F2F1;
  --bg-subtle:    #FAFAFA;
  --bg-overlay:   rgba(0,0,0,0.45);

  /* Text */
  --text-primary:    #252525;
  --text-secondary:  #3B3A39;
  --text-tertiary:   #605E5C;
  --text-on-primary: #FFFFFF;
  --text-on-panel:   #FFFFFF;       /* 다크 패널 위 */
  --text-disabled:   #A19F9D;

  /* Border */
  --border-default: #D1D1D1;
  --border-subtle:  #E1DFDD;
  --border-strong:  #A19F9D;
  --border-focus:   #B7472A;        /* 슬라이드 선택 외곽선 */
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문 UI: **Aptos** → Segoe UI 폴백
  - 슬라이드 본문은 자유 (Calibri / Aptos / Helvetica / Times 등 사용자 선택)
  - 한글 UI: Aptos Korean / Malgun Gothic 폴백
- **위계** (PowerPoint UI 자체):
  - Title Bar: 12px / 600 / 1.4 / 0
  - Ribbon Tab: 12px / 600 / 1.4 / 0
  - Body Strong: 14px / 600 / 1.55 / 0
  - Body: 13px / 400 / 1.5 / 0
  - Caption: 11px / 600 / 1.4 / 0.02em UPPERCASE
- **슬라이드 기본 위계** (가이드):
  - Slide Title: 36~44pt / 800 / 1.2 / -0.02em
  - Slide Subtitle: 22pt / 500 / 1.3 / -0.01em
  - Slide Body: 18pt / 400 / 1.5 / 0
  - Slide Caption: 12pt / 600 / 1.4 / 0.02em UPPERCASE

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
  --slide-aspect: 16/9;
  --slide-padding: 40px 56px;       /* 슬라이드 내부 여백 */
  ```

### ⑥ Border Radius
```css
--radius-none: 0;       /* 슬라이드 */
--radius-sm: 2px;       /* 썸네일 */
--radius-md: 4px;
--radius-lg: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-slide: 0 4px 14px rgba(0,0,0,0.55);    /* 캔버스 위 슬라이드 */
--shadow-thumb: 0 1px 3px rgba(0,0,0,0.50);
--shadow-popover: 0 4px 8px rgba(0,0,0,0.46), 0 0 2px rgba(0,0,0,0.30);
--shadow-dialog: 0 8px 16px rgba(0,0,0,0.50);
```

### ⑧ Iconography
- **스타일**: Fluent UI Icons (Filled)
- **Stroke 굵기**: 1.5px equivalent
- **모서리 처리**: Square
- **추천 라이브러리**: Fluent UI Icons

### ⑨ 컴포넌트 가이드

**Button (Ribbon)**
```css
.ribbon-btn { font: 500 11px/1.4 Aptos, 'Segoe UI', sans-serif;
              border-radius: 2px; padding: 4px 8px; border: 1px solid transparent;
              background: transparent; color: var(--text-primary); cursor: pointer; }
.ribbon-btn:hover { background: var(--bg-slide); border-color: var(--border-default); }
.btn-primary { background: var(--color-primary-500); color: #fff; padding: 6px 14px; font: 600 12px/1 inherit; border-radius: 2px; border: 0; }
.btn-present { background: var(--color-primary-500); color: #fff; padding: 8px 16px; font: 700 13px/1 inherit; border-radius: 2px; border: 0; }
```

**Slide Container**
```css
.slide-canvas { background: var(--bg-canvas); padding: 32px; display: grid; place-items: center; min-height: 480px; }
.slide { background: var(--bg-slide); aspect-ratio: 16/9; width: 100%; max-width: 960px; padding: var(--slide-padding); box-shadow: var(--shadow-slide); position: relative; box-sizing: border-box; overflow: hidden; }
.slide.theme-pop::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 8px; background: var(--color-primary-500); }
.slide-thumb { background: var(--bg-slide); aspect-ratio: 16/9; box-shadow: var(--shadow-thumb); border-radius: 2px; cursor: pointer; position: relative; }
.slide-thumb.active { outline: 2px solid var(--color-primary-500); outline-offset: 2px; }
.slide-thumb .num { position: absolute; top: 2px; left: 4px; font: 600 9px/1 inherit; color: var(--text-tertiary); }
```

**Slide Panel (Sidebar)**
```css
.panel { background: var(--bg-panel); color: var(--text-on-panel); padding: 8px; width: 180px; min-height: 100vh; overflow-y: auto; }
.panel .head { font: 600 11px/1.4 inherit; color: #C8C6C4; padding: 6px 8px; text-transform: uppercase; letter-spacing: 0.04em; }
.panel .thumbs { display: flex; flex-direction: column; gap: 6px; }
.panel .thumbs .item { display: grid; grid-template-columns: 18px 1fr; gap: 6px; align-items: center; }
.panel .thumbs .item .n { font: 600 11px/1 inherit; color: #C8C6C4; text-align: right; }
```

**Badge / Tag**
```css
.tag { padding: 2px 6px; border-radius: 2px; font: 600 10px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-saved { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-anim  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-note  { background: var(--color-warning-bg); color: var(--color-warning-fg); }
```

**Navigation (Ribbon Tabs)**
```css
.tabs { background: var(--bg-ribbon); border-bottom: 1px solid var(--border-subtle); display: flex; padding: 0 8px; font: 600 12px/1.4 inherit; }
.tabs .tab { padding: 6px 14px; color: var(--text-tertiary); cursor: pointer; }
.tabs .tab.active { background: var(--bg-slide); color: var(--text-primary); border-top: 2px solid var(--color-primary-500); }
```

### ⑩ Motion
- 슬라이드 자체 전환은 PowerPoint 내장 효과(밀어내기/페이드/모핑) 사용. UI 모션은 짧게.
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.33, 0, 0.67, 1);
--ease-morph: cubic-bezier(0.4, 0, 0.2, 1);     /* 모핑 전환 */
```

### ⑪ Anti-patterns
1. 슬라이드 모서리 라운드 적용 금지 — 발표 메타포 손실
2. 슬라이드 캔버스에 흰색·라이트 배경 사용 금지 — 다크 회색(#525252)이 슬라이드 강조에 필수
3. 슬라이드 내부 폰트 weight 300 이하 사용 금지 — 원거리 시인성 미달
4. 한 슬라이드에 텍스트 7줄 이상 사용 금지 — 7/40 가이드라인
5. Ribbon UI 톤을 다크 단독으로 만들지 말 것 — Office 패밀리는 라이트 기본

### ⑫ 시그니처 적용 예시 (PowerPoint 편집기)

```html
<style>
  body { margin: 0; font-family: Aptos, 'Segoe UI Variable', -apple-system, sans-serif; letter-spacing: -0.005em; color: #F3F2F1; background: #141312; }
  .app { max-width: 1200px; margin: 0 auto; min-height: 100vh; }
  .title { background: #B7472A; color: #fff; padding: 6px 12px; display: flex; align-items: center; gap: 10px; font: 600 12px/1.4 inherit; }
  .title .icon { width: 20px; height: 20px; background: #fff; color: #B7472A; border-radius: 3px; display: grid; place-items: center; font: 900 12px/1 inherit; }
  .title .file { opacity: 0.95; font-weight: 500; }
  .title .present { margin-left: auto; background: rgba(255,255,255,0.18); color: #fff; padding: 4px 12px; border-radius: 2px; font: 700 12px/1 inherit; cursor: pointer; }
  .ribbon-tabs { background: #1F1F1F; border-bottom: 1px solid #3B3A39; padding: 0 8px; display: flex; gap: 0; font: 600 12px/1.4 inherit; }
  .ribbon-tabs .tab { padding: 6px 14px; color: #A19F9D; cursor: pointer; }
  .ribbon-tabs .tab.active { background: #2A2A2A; color: #F3F2F1; border-top: 2px solid #CC7158; }
  .ribbon { background: #2A2A2A; border-bottom: 1px solid #3B3A39; padding: 6px 8px; display: flex; gap: 6px; flex-wrap: wrap; font: 500 11px/1.4 inherit; }
  .ribbon .group { display: flex; gap: 4px; padding: 0 8px; border-right: 1px solid #3B3A39; align-items: center; }
  .ribbon .group:last-child { border-right: 0; }
  .ribbon .btn { padding: 4px 8px; border-radius: 2px; cursor: pointer; background: transparent; border: 1px solid transparent; }
  .ribbon .btn:hover { background: #1F1F1F; border-color: #3B3A39; }
  .editor { display: grid; grid-template-columns: 180px 1fr 220px; min-height: 540px; }
  .panel { background: #1B1A19; color: #fff; padding: 10px 8px; overflow-y: auto; }
  .panel .head { font: 600 10px/1.4 inherit; color: #C8C6C4; padding: 4px 6px 8px; text-transform: uppercase; letter-spacing: 0.06em; }
  .panel .thumbs { display: flex; flex-direction: column; gap: 8px; }
  .panel .thumbs .row { display: grid; grid-template-columns: 18px 1fr; gap: 6px; align-items: center; }
  .panel .thumbs .row .n { font: 600 10px/1 inherit; color: #C8C6C4; text-align: right; }
  .panel .thumbs .thumb { background: #2A2A2A; aspect-ratio: 16/9; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.5); position: relative; overflow: hidden; }
  .panel .thumbs .thumb.active { outline: 2px solid #CC7158; outline-offset: 2px; }
  .panel .thumbs .thumb.t1 { background: #2A2A2A; }
  .panel .thumbs .thumb.t1::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: #CC7158; }
  .panel .thumbs .thumb.t1 .title { position: absolute; top: 8px; left: 6px; font: 800 6px/1.1 inherit; color: #F3F2F1; letter-spacing: -0.02em; }
  .canvas { background: #141312; padding: 30px; display: grid; place-items: center; }
  .slide { background: #2A2A2A; aspect-ratio: 16/9; width: 100%; padding: 40px 50px; box-shadow: 0 4px 14px rgba(0,0,0,0.55); position: relative; box-sizing: border-box; overflow: hidden; }
  .slide::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 8px; background: #CC7158; }
  .slide .label { font: 600 12px/1 inherit; color: #CC7158; letter-spacing: 0.08em; }
  .slide h1 { margin: 8px 0 4px; font: 800 36px/1.15 'Aptos Display', Aptos, sans-serif; letter-spacing: -0.025em; color: #F3F2F1; }
  .slide .meta { font: 500 13px/1.4 inherit; color: #A19F9D; }
  .slide .points { margin-top: 18px; display: flex; flex-direction: column; gap: 6px; }
  .slide .points .row { font: 500 16px/1.5 inherit; color: #F3F2F1; }
  .slide .points .row::before { content: '▸ '; color: #CC7158; font-weight: 700; }
  .sidebar { background: #1F1F1F; border-left: 1px solid #3B3A39; padding: 10px; }
  .sidebar h3 { margin: 0 0 8px; font: 600 12px/1.4 inherit; color: #F3F2F1; }
  .sidebar .row { padding: 6px 8px; font: 500 12px/1.4 inherit; color: #D6D4D2; border-radius: 2px; cursor: pointer; display: flex; align-items: center; gap: 6px; }
  .sidebar .row:hover { background: #2A2A2A; }
  .sidebar .row.active { background: #2A2A2A; color: #CC7158; }
  .sidebar .tag { background: #3A150B; color: #ECC4BA; padding: 1px 6px; border-radius: 2px; font: 600 10px/1.4 inherit; letter-spacing: 0.04em; text-transform: uppercase; margin-left: auto; }
</style>

<div class="app">
  <header class="title">
    <div class="icon">P</div>
    <span>PowerPoint</span>
    <span class="file">2026 하반기 비전 — 발표자료.pptx</span>
    <span class="present">▶ 발표</span>
  </header>
  <nav class="ribbon-tabs">
    <span class="tab active">홈</span>
    <span class="tab">삽입</span>
    <span class="tab">디자인</span>
    <span class="tab">전환</span>
    <span class="tab">애니메이션</span>
    <span class="tab">슬라이드 쇼</span>
  </nav>
  <div class="ribbon">
    <div class="group"><span class="btn">붙여넣기</span></div>
    <div class="group">
      <span class="btn">새 슬라이드</span>
      <span class="btn">레이아웃 ▾</span>
      <span class="btn">초기화</span>
    </div>
    <div class="group">
      <span class="btn">Aptos ▾</span>
      <span class="btn">36 ▾</span>
      <span class="btn" style="font-weight:700;">B</span>
      <span class="btn" style="font-style:italic;">I</span>
    </div>
    <div class="group">
      <span class="btn">🎨</span>
      <span class="btn">🖼</span>
      <span class="btn">▲ 도형</span>
    </div>
    <div class="group">
      <span class="btn">디자이너 ✨</span>
    </div>
  </div>
  <div class="editor">
    <aside class="panel">
      <div class="head">슬라이드</div>
      <div class="thumbs">
        <div class="row">
          <span class="n">1</span>
          <div class="thumb t1 active"><span class="title">하반기 사업 비전</span></div>
        </div>
        <div class="row">
          <span class="n">2</span>
          <div class="thumb"></div>
        </div>
        <div class="row">
          <span class="n">3</span>
          <div class="thumb"></div>
        </div>
        <div class="row">
          <span class="n">4</span>
          <div class="thumb"></div>
        </div>
      </div>
    </aside>
    <main class="canvas">
      <div class="slide">
        <div class="label">2026 KICKOFF</div>
        <h1>하반기 사업 비전</h1>
        <div class="meta">기획팀 · 김연주 · 2026년 5월 12일</div>
        <div class="points">
          <div class="row">모바일 우선 채널 재정비</div>
          <div class="row">KPI를 매출 → LTV로 전환</div>
          <div class="row">운영 비용 12% 감축 (계열사 통합)</div>
        </div>
      </div>
    </main>
    <aside class="sidebar">
      <h3>디자이너</h3>
      <div class="row active">미니멀 임팩트<span class="tag">추천</span></div>
      <div class="row">컬러 블록 헤더</div>
      <div class="row">이미지 풀폭</div>
      <div class="row">차트 강조</div>
    </aside>
  </div>
</div>
```
