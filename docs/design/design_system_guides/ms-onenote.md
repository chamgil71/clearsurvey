---
brand: Microsoft OneNote
brand_ko: 마이크로소프트 원노트
slug: ms-onenote
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#7719AA"
primary_color_name: "OneNote Purple"
mood:
  - 디지털노트
  - 섹션탭
  - 자유캔버스

font_category: sans-serif
font_primary: Segoe UI
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2003
last_major_revision: 2024
signature_keyword: "보라 N 로고 + 컬러 섹션 탭 + 자유 배치 캔버스의 디지털 노트북"

card_tokens: |
  {
    "light": { "bg": "#FBFAF7", "surface": "#FFFFFF", "border": "#EDEBE9", "fg": "#201F1E", "fg_muted": "#605E5C", "accent": "#7719AA" },
    "dark":  { "bg": "#252423", "surface": "#383735", "border": "#424140", "fg": "#FFFFFF", "fg_muted": "#D2D0CE", "accent": "#A75CD1" }
  }

hero_html: |
  <div style="font-family:'Segoe UI','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto auto 1fr;letter-spacing:-0.003em;">
    <div style="padding:10px 14px;background:var(--card-accent);color:#fff;display:flex;align-items:center;gap:10px;">
      <div style="width:22px;height:22px;background:#fff;color:var(--card-accent);border-radius:3px;display:grid;place-items:center;font:900 12px/1 sans-serif;">N</div>
      <strong style="font-size:14px;font-weight:600;">Work Notebook</strong>
    </div>
    <div style="background:var(--card-surface);border-bottom:1px solid var(--card-border);display:flex;gap:0;padding:0 8px;font:600 12px/1 inherit;">
      <span style="padding:8px 14px;border-bottom:3px solid var(--card-accent);color:var(--card-accent);">📓 Plans</span>
      <span style="padding:8px 14px;color:var(--card-fg-muted);border-bottom:3px solid #107C10;">🟢 Notes</span>
      <span style="padding:8px 14px;color:var(--card-fg-muted);border-bottom:3px solid #F7630C;">🟠 Research</span>
      <span style="padding:8px 14px;color:var(--card-fg-muted);border-bottom:3px solid #0078D4;">🔵 Personal</span>
    </div>
    <div style="padding:12px 16px;background:var(--card-surface);font:400 13px/1.55 inherit;">
      <div style="font:700 18px/1.3 inherit;margin-bottom:6px;">2026 Q2 OKR</div>
      <div style="color:var(--card-fg-muted);font-size:11px;margin-bottom:10px;">5월 14일 오전 10:30</div>
      <div style="display:flex;align-items:center;gap:6px;margin:3px 0;"><input type="checkbox" checked style="accent-color:#7719AA"/> Design system v3 출시</div>
      <div style="display:flex;align-items:center;gap:6px;margin:3px 0;"><input type="checkbox" style="accent-color:#7719AA"/> 마케팅 캠페인 3안</div>
      <div style="display:flex;align-items:center;gap:6px;margin:3px 0;"><input type="checkbox" style="accent-color:#7719AA"/> 분기 회고 워크숍</div>
      <div style="margin-top:10px;background:#FFF4CE;border-left:3px solid #FFB900;padding:8px 12px;border-radius:0 4px 4px 0;font:500 12px/1.4 inherit;">⚡ 이번 주: 디자인 토큰 prov 합치기</div>
    </div>
  </div>

sources:
  - https://www.onenote.com/
  - https://fluent2.microsoft.design/
---

### ① 브랜드 DNA
- **브랜드명**: Microsoft OneNote
- **한 줄 정체성**: 자유 캔버스 디지털 노트북 — 노트북/섹션/페이지 3단 구조
- **공식 디자인 철학**: Fluent 2 — 종이같은 캔버스 + 컬러 섹션 탭으로 시각적 분류
- **시그니처 요소 1개**: 보라 N 모노그램 + OneNote Purple(#7719AA) + 섹션마다 다른 컬러 탭(그린·오렌지·블루·핑크) + 자유 좌표 텍스트 박스(드래그 가능 노트). 다른 MS 365 앱과 달리 그리드 강제 없음

### ② 톤 & 무드
- **핵심 키워드 3개**: 디지털노트, 섹션탭, 자유캔버스
- **무드 설명**: 라이트 베이지(#FBFAF7) 종이 캔버스. 헤더는 보라 단색, 섹션 탭은 사용자 지정 색. 카드는 1px 보더 + Soft 모서리.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~6px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - OneNote Purple */
  --color-primary-50:  #F2E3F8;
  --color-primary-100: #E0BCF1;
  --color-primary-200: #C58BE1;
  --color-primary-300: #A75CD1;
  --color-primary-400: #8E3BBE;
  --color-primary-500: #7719AA;   /* OneNote Purple */
  --color-primary-600: #631294;
  --color-primary-700: #4B0D72;
  --color-primary-800: #34084F;
  --color-primary-900: #1E042E;

  /* Section colors (자유 배정) */
  --sec-purple: #7719AA;
  --sec-green:  #107C10;
  --sec-orange: #F7630C;
  --sec-blue:   #0078D4;
  --sec-pink:   #E3008C;
  --sec-yellow: #FFB900;
  --sec-teal:   #038387;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FBFAF7;     /* 종이 캔버스 */
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
  --bg-base:     #FBFAF7;
  --bg-subtle:   #F3F2F1;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.40);

  /* Text */
  --text-primary:    #201F1E;
  --text-secondary:  #323130;
  --text-tertiary:   #605E5C;
  --text-on-primary: #FFFFFF;
  --text-link:       #7719AA;
  --text-disabled:   #A19F9D;

  /* Border */
  --border-default: #EDEBE9;
  --border-subtle:  #F3F2F1;
  --border-strong:  #D2D0CE;
  --border-focus:   #7719AA;
}

[data-theme="dark"] {
  --bg-base:     #2D2C2B;
  --bg-subtle:   #252423;
  --bg-elevated: #383735;
  --text-primary:    #FFFFFF;
  --text-secondary:  #D2D0CE;
  --border-default:  #424140;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Segoe UI** / Aptos / Calibri (필기 톤)
  - 한글: 맑은 고딕 / Pretendard
  - 손글씨: Lucida Handwriting (옵션)
- **위계**:
  - Display: 28px / 600 / 1.2
  - H1: 22px / 700 / 1.3
  - H2: 18px / 600 / 1.35
  - H3: 16px / 600 / 1.4
  - Body Large: 16px / 400 / 1.6 (필기감)
  - Body: 14px / 400 / 1.55
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
  --space-2xl: 36px;
  --space-3xl: 56px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 10px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- **스타일**: Fluent UI Icons (Outline/Filled)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Fluent System Icons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 'Segoe UI', system-ui, sans-serif; border-radius: 3px; padding: 7px 14px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-icon { background: transparent; border: 0; width: 30px; height: 30px; border-radius: 3px; color: var(--text-secondary); }
.btn-icon:hover { background: var(--bg-subtle); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 3px; padding: 6px 10px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 0; }
.note-textbox { background: transparent; border: 1px dashed transparent; padding: 4px 6px; font: 400 15px/1.6 inherit; color: var(--text-primary); }
.note-textbox:focus-within { border-color: var(--color-primary-500); background: var(--bg-elevated); border-radius: 2px; }
```

**Card (Page / Note)**
```css
.section-tab { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; font: 600 13px/1 inherit; cursor: pointer; border-bottom: 3px solid transparent; color: var(--text-tertiary); }
.section-tab.active { color: var(--text-primary); border-bottom-color: var(--sec-purple); background: var(--bg-elevated); }
.section-tab.green.active  { border-bottom-color: var(--sec-green); }
.section-tab.orange.active { border-bottom-color: var(--sec-orange); }
.section-tab.blue.active   { border-bottom-color: var(--sec-blue); }
.page-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 4px; padding: 12px 16px; box-shadow: var(--shadow-sm); }
.page-card h1 { margin: 0 0 4px; font: 700 22px/1.3 inherit; }
.page-card .time { font: 500 11px/1 inherit; color: var(--text-tertiary); }
.callout-yellow { background: var(--color-warning-bg); border-left: 3px solid var(--sec-yellow); padding: 10px 14px; border-radius: 0 4px 4px 0; font: 500 13px/1.5 inherit; }
.callout-green  { background: var(--color-success-bg); border-left: 3px solid var(--sec-green); padding: 10px 14px; border-radius: 0 4px 4px 0; font: 500 13px/1.5 inherit; }
```

**Badge / Tag**
```css
.tag-page { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 3px; padding: 2px 8px; font: 700 11px/1.3 inherit; }
.checkbox-row { display: flex; align-items: center; gap: 8px; padding: 4px 0; font: 500 14px/1.45 inherit; }
.checkbox-row input { accent-color: var(--color-primary-500); }
.checkbox-row.done { color: var(--text-tertiary); text-decoration: line-through; }
.priority-flag { color: var(--sec-orange); font: 700 14px/1 inherit; }
```

**Navigation (Notebook / Section / Page 3단)**
```css
.notebooks { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 220px; padding: 10px 0; }
.notebooks .nb { display: flex; align-items: center; gap: 10px; padding: 8px 14px; font: 500 13px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.notebooks .nb.active { background: var(--color-primary-50); color: var(--color-primary-700); border-left: 3px solid var(--color-primary-500); padding-left: 11px; font-weight: 700; }
.notebooks .nb .badge { width: 8px; height: 8px; border-radius: 9999px; background: var(--sec-purple); }
.pages { background: var(--bg-subtle); border-right: 1px solid var(--border-default); width: 220px; padding: 8px 0; }
.pages .page { padding: 7px 14px 7px 22px; font: 500 13px/1.3 inherit; color: var(--text-primary); cursor: pointer; border-bottom: 1px solid var(--border-subtle); }
.pages .page.active { background: var(--bg-elevated); border-left: 3px solid var(--color-primary-500); padding-left: 19px; font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 90ms;
--duration-base: 180ms;
--duration-slow: 280ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 보라를 Teams Purple(#5059C9)로 대체 금지 — OneNote는 짙은 보라(#7719AA)
2. 섹션 탭을 단색 그레이로 통일 금지 — 색별 시각적 분류가 핵심
3. 페이지 본문을 강제 그리드에 끼우기 금지 — 자유 좌표 노트 박스 허용
4. 체크박스 액센트 색 회색 금지 — accent-color는 OneNote Purple
5. 노트북/섹션/페이지 3단 구조 단순화 금지 — 3단 트리가 정체성

### ⑫ 시그니처 적용 예시 (OneNote 노트북)

```html
<style>
  body { margin: 0; font-family: 'Segoe UI', system-ui, Pretendard, sans-serif; color: #201F1E; background: #FBFAF7; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-rows: 44px auto 1fr; min-height: 100vh; }
  .topbar { background: #7719AA; color: #fff; padding: 0 14px; display: flex; align-items: center; gap: 14px; }
  .topbar .logo { width: 28px; height: 22px; background: #fff; color: #7719AA; border-radius: 3px; display: grid; place-items: center; font: 900 12px/1 inherit; }
  .topbar h1 { margin: 0; font: 600 16px/1 inherit; }
  .topbar .right { margin-left: auto; display: flex; gap: 14px; }
  .tabs { background: #fff; border-bottom: 1px solid #EDEBE9; display: flex; gap: 0; padding: 0 14px; align-items: center; }
  .tab { padding: 10px 16px; font: 600 13px/1 inherit; color: #605E5C; cursor: pointer; border-bottom: 3px solid transparent; }
  .tab.active.purple { color: #7719AA; border-bottom-color: #7719AA; background: #FBFAF7; }
  .tab.green  { color: #107C10; border-bottom: 3px solid #107C10; opacity: 0.8; }
  .tab.orange { color: #F7630C; border-bottom: 3px solid #F7630C; opacity: 0.8; }
  .tab.blue   { color: #0078D4; border-bottom: 3px solid #0078D4; opacity: 0.8; }
  .tab.pink   { color: #E3008C; border-bottom: 3px solid #E3008C; opacity: 0.8; }
  .tab.new    { color: #605E5C; }
  .grid { display: grid; grid-template-columns: 220px 220px 1fr; height: calc(100vh - 44px - 41px); }
  .notebooks { background: #fff; border-right: 1px solid #EDEBE9; padding: 10px 0; }
  .notebooks h2 { padding: 6px 14px; font: 700 11px/1.4 inherit; color: #605E5C; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
  .nb { display: flex; align-items: center; gap: 10px; padding: 8px 14px; font: 500 13px/1 inherit; color: #323130; cursor: pointer; }
  .nb .dot { width: 10px; height: 10px; border-radius: 2px; }
  .nb.active { background: #F2E3F8; color: #4B0D72; border-left: 3px solid #7719AA; padding-left: 11px; font-weight: 700; }
  .pages { background: #FBFAF7; border-right: 1px solid #EDEBE9; padding: 8px 0; }
  .pages .head { padding: 8px 14px; font: 700 12px/1.3 inherit; color: #605E5C; }
  .page { padding: 9px 14px 9px 22px; font: 500 13px/1.3 inherit; color: #201F1E; cursor: pointer; border-bottom: 1px solid #EDEBE9; }
  .page.active { background: #fff; border-left: 3px solid #7719AA; padding-left: 19px; font-weight: 700; }
  .page .when { color: #605E5C; font-size: 11px; margin-top: 2px; font-weight: 400; }
  .canvas { background: #fff; padding: 22px 28px; overflow-y: auto; }
  .canvas h1 { margin: 0 0 4px; font: 700 28px/1.3 inherit; }
  .canvas .meta { color: #605E5C; font: 500 12px/1 inherit; margin-bottom: 18px; }
  .check { display: flex; align-items: center; gap: 10px; padding: 4px 0; font: 500 15px/1.55 inherit; }
  .check input { accent-color: #7719AA; width: 16px; height: 16px; }
  .check.done { color: #605E5C; text-decoration: line-through; }
  .callout { background: #FFF4CE; border-left: 3px solid #FFB900; padding: 10px 14px; border-radius: 0 4px 4px 0; font: 500 14px/1.55 inherit; margin: 12px 0; }
  .callout.green { background: #DFF6DD; border-left-color: #107C10; }
  .tablet { background: #F3F2F1; border: 1px solid #EDEBE9; border-radius: 4px; padding: 10px 14px; margin-top: 14px; font: 400 14px/1.6 inherit; }
  .tablet h3 { margin: 0 0 6px; font: 700 14px/1.3 inherit; }
  .freebox { position: absolute; right: 36px; top: 240px; background: #fff; border: 1px dashed #D2D0CE; border-radius: 3px; padding: 10px 14px; font: 400 13px/1.5 inherit; max-width: 220px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .freebox .ttl { font: 700 12px/1.3 inherit; color: #7719AA; margin-bottom: 4px; }
</style>

<div class="app">
  <header class="topbar">
    <div class="logo">N</div>
    <h1>OneNote</h1>
    <div class="right"><span>↗ Share</span><span>⚙</span></div>
  </header>
  <nav class="tabs">
    <span class="tab active purple">📓 Plans</span>
    <span class="tab green">🟢 Notes</span>
    <span class="tab orange">🟠 Research</span>
    <span class="tab blue">🔵 Personal</span>
    <span class="tab pink">🟣 Ideas</span>
    <span class="tab new">+</span>
  </nav>
  <div class="grid">
    <aside class="notebooks">
      <h2>Notebooks</h2>
      <div class="nb active"><div class="dot" style="background:#7719AA"></div>Work Notebook</div>
      <div class="nb"><div class="dot" style="background:#107C10"></div>Personal Notebook</div>
      <div class="nb"><div class="dot" style="background:#F7630C"></div>2026 OKRs</div>
      <div class="nb"><div class="dot" style="background:#0078D4"></div>Reading</div>
      <h2 style="margin-top:10px;">Shared</h2>
      <div class="nb"><div class="dot" style="background:#E3008C"></div>Marketing 팀</div>
      <div class="nb"><div class="dot" style="background:#038387"></div>Engineering 팀</div>
    </aside>
    <aside class="pages">
      <div class="head">Plans 섹션</div>
      <div class="page active">2026 Q2 OKR<div class="when">5월 14일 10:30</div></div>
      <div class="page">Sprint 23 백로그<div class="when">5월 12일</div></div>
      <div class="page">디자인 시스템 v3 일정<div class="when">5월 9일</div></div>
      <div class="page">분기 회고 워크숍 안건<div class="when">5월 7일</div></div>
    </aside>
    <main class="canvas" style="position:relative;">
      <h1>2026 Q2 OKR</h1>
      <div class="meta">5월 14일 (목) 오전 10:30 · Mia가 마지막 수정</div>
      <h2 style="margin:14px 0 8px;font:700 18px/1.3 inherit;color:#4B0D72;">Objectives</h2>
      <div class="check done"><input type="checkbox" checked/>디자인 시스템 v3 출시 (PR #142)</div>
      <div class="check"><input type="checkbox"/>마케팅 캠페인 시안 3안 선정</div>
      <div class="check"><input type="checkbox"/>분기 회고 워크숍 (5/28)</div>
      <div class="check"><input type="checkbox"/>온보딩 가이드 영상 3편 제작</div>
      <div class="callout">⚡ 이번 주 우선순위: 디자인 토큰 prov 합치기 + Sprint 23 계획</div>
      <h2 style="margin:14px 0 8px;font:700 18px/1.3 inherit;color:#4B0D72;">Key Results</h2>
      <div class="tablet">
        <h3>KR1. 시스템 페이지 트래픽 +30%</h3>
        측정: GA 4 / 기간: 4월~6월 / 담당: 린호
      </div>
      <div class="tablet">
        <h3>KR2. NPS 65 이상</h3>
        측정: 분기 설문 / 기간: 6월 말 / 담당: 민지
      </div>
      <div class="callout green">✓ 완료한 항목은 자동으로 회고 노트로 이동합니다.</div>
      <aside class="freebox">
        <div class="ttl">📌 자유 노트 박스</div>
        OneNote는 본문 외 임의 좌표에 노트를 놓을 수 있어요. 드래그로 이동.
      </aside>
    </main>
  </div>
</div>
```
