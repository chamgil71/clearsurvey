---
brand: Microsoft Word
brand_ko: 마이크로소프트 워드
slug: ms-word
generated: 2026-05-12
source_type: hybrid
confidence: high
is_official: true

region: western
industry:
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#2B579A"
primary_color_name: "Word Blue"
mood:
  - 정통
  - 문서
  - 신중

font_category: serif
font_primary: Aptos Serif
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 1983
last_major_revision: 2024
signature_keyword: "Word 블루 + A4 흰 페이지 + Ribbon UI의 워드 프로세서 표준"

card_tokens: |
  {
    "light": { "bg": "#F3F2F1", "surface": "#FFFFFF", "border": "#E1DFDD", "fg": "#252525", "fg_muted": "#605E5C", "accent": "#2B579A" },
    "dark":  { "bg": "#1F1F1F", "surface": "#2A2A2A", "border": "#3B3A39", "fg": "#F3F2F1", "fg_muted": "#A19F9D", "accent": "#6892C3" }
  }

hero_html: |
  <div style="font-family:'Aptos Serif','Aptos','Segoe UI Variable',serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto auto 1fr;letter-spacing:-0.005em;">
    <div style="background:var(--card-accent);color:#fff;padding:8px 12px;display:flex;align-items:center;gap:8px;font-family:'Aptos','Segoe UI',sans-serif;font-size:11px;font-weight:600;">
      <div style="width:18px;height:18px;background:#fff;color:var(--card-accent);border-radius:3px;display:grid;place-items:center;font:900 11px/1 inherit;">W</div>
      <span>Word</span>
      <span style="opacity:0.85;font-weight:500;">제안서.docx</span>
      <span style="margin-left:auto;font-size:10px;opacity:0.85;">자동 저장됨</span>
    </div>
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:4px 8px;display:flex;align-items:center;gap:6px;font-family:'Aptos','Segoe UI',sans-serif;font-size:11px;color:var(--card-fg);">
      <span style="padding:3px 8px;background:var(--card-surface);border:1px solid var(--card-border);border-radius:3px;font-weight:600;">홈</span>
      <span style="padding:3px 8px;color:var(--card-fg-muted);">삽입</span>
      <span style="padding:3px 8px;color:var(--card-fg-muted);">레이아웃</span>
      <span style="padding:3px 8px;color:var(--card-fg-muted);">참조</span>
    </div>
    <div style="background:var(--card-bg);padding:14px;display:flex;justify-content:center;overflow:hidden;">
      <div style="background:var(--card-surface);width:90%;max-width:380px;padding:30px 28px;font:400 13px/1.65 inherit;color:var(--card-fg);box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <h2 style="margin:0 0 8px;font-family:'Aptos Display','Aptos Serif',serif;font:700 22px/1.3 inherit;color:var(--card-accent);letter-spacing:-0.015em;">제 1장. 사업 개요</h2>
        <p style="margin:0 0 8px;">이 제안서는 2026년 하반기 신규 사업 추진을 위한 기본 방향을 정리한 것입니다. <span style="border-bottom:2px solid #FFEB85;background:#FFF9E0;">핵심 가치</span>는 사용자 경험의 일관성과 운영 효율의 균형에 둡니다.</p>
        <p style="margin:0;">세부 일정은 다음 페이지의 표를 참고해 주십시오. 본 문서는 내부 의사결정을 위한 초안이므로, 외부 공유를 자제 부탁드립니다.</p>
      </div>
    </div>
  </div>

sources:
  - https://www.microsoft.com/en-us/microsoft-365/word
  - https://fluent2.microsoft.design/
---

### ① 브랜드 DNA
- **브랜드명**: Microsoft Word
- **한 줄 정체성**: 1983년 이후 워드 프로세서 표준 — A4 한 장 위 본문 + 서식 + 리뷰
- **공식 디자인 철학**: Microsoft 365 / Fluent 2 — 종이 메타포 + 협업
- **시그니처 요소 1개**: Word 블루(#2B579A) 타이틀바 + 회색 캔버스 위 흰 A4 페이지 + Aptos Serif 본문. Excel 그린·PPT 오렌지와 같은 Office 패밀리 컬러 코드

### ② 톤 & 무드
- **핵심 키워드 3개**: 정통, 문서, 신중
- **무드 설명**: 회색 캔버스(#F3F2F1) 가운데에 흰 A4 페이지가 떠 있는 metaphor. 본문은 세리프(Aptos Serif), 제목은 Aptos Display, 강조는 Word 블루 단색. 하이라이트는 노란 형광펜.
- **비주얼 스타일**: 모던 미니멀 (Fluent 2)
- **밀도(Density)**: Comfortable — 본문 line-height 1.6+
- **모서리 성향**: Sharp (페이지는 0px, UI는 2~4px)
- **평면성**: Flat — A4 페이지에만 sm 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Word Blue */
  --color-primary-50:  #EBF1F9;
  --color-primary-100: #C6D7EB;
  --color-primary-200: #97B5D7;
  --color-primary-300: #6892C3;
  --color-primary-400: #4377B1;
  --color-primary-500: #2B579A;   /* Word Blue */
  --color-primary-600: #234880;
  --color-primary-700: #1B3866;
  --color-primary-800: #14284C;
  --color-primary-900: #0C1830;

  /* Secondary - Highlight Yellow */
  --color-secondary-500: #FFEB85;

  /* Neutral - Fluent 2 */
  --color-neutral-0:    #FFFFFF;        /* page */
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F3F2F1;        /* canvas bg */
  --color-neutral-200:  #E1DFDD;
  --color-neutral-300:  #D1D1D1;
  --color-neutral-500:  #A19F9D;
  --color-neutral-700:  #605E5C;
  --color-neutral-800:  #3B3A39;
  --color-neutral-900:  #252525;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DFF6DD;
  --color-success-fg: #107C10;
  --color-warning-bg: #FFF4CE;
  --color-warning-fg: #8A6900;
  --color-error-bg:   #FDE7E9;
  --color-error-fg:   #A4262C;
  --color-info-bg:    #EBF1F9;
  --color-info-fg:    #2B579A;

  /* Tracked changes / Comments */
  --color-comment:    #B45309;        /* 주석 사이드바 */
  --color-revision:   #C2185B;        /* 변경 추적 */

  /* Surface */
  --bg-canvas:   #F3F2F1;             /* 캔버스(페이지 외부) */
  --bg-page:     #FFFFFF;             /* A4 페이지 */
  --bg-subtle:   #FAFAFA;
  --bg-ribbon:   #F3F2F1;
  --bg-overlay:  rgba(37,37,37,0.45);

  /* Text */
  --text-primary:    #252525;
  --text-secondary:  #3B3A39;
  --text-tertiary:   #605E5C;
  --text-link:       #2B579A;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A19F9D;

  /* Border */
  --border-default: #D1D1D1;
  --border-subtle:  #E1DFDD;
  --border-strong:  #A19F9D;
  --border-focus:   #2B579A;
}

[data-theme="dark"] {
  --bg-canvas: #1F1F1F;
  --bg-page: #2A2A2A;
  --bg-ribbon: #2C2C2C;
  --text-primary: #FFFFFF;
  --text-secondary: #D2D0CE;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 본문(영문): **Aptos Serif** (2024년 신규 기본) → Cambria 폴백
  - 제목(영문): **Aptos Display** → Calibri Light 폴백
  - UI(영문): Aptos (sans) → Segoe UI
  - 한글 본문: Aptos Korean Serif / 본명조 폴백
  - 한글 UI: Pretendard / Noto Sans KR
- **위계** (Word 기본 스타일):
  - Title: 28px / 700 / 1.3 / -0.015em Aptos Display
  - Heading 1: 22px / 700 / 1.3 / -0.015em color #2B579A
  - Heading 2: 18px / 600 / 1.35 / -0.01em color #2B579A
  - Heading 3: 15px / 600 / 1.4 / -0.005em color #2B579A
  - Body: 14px / 400 / 1.6 / 0 Aptos Serif
  - Body Strong: 14px / 600 / 1.6 / 0
  - Quote: 14px / 400 / 1.6 / 0.005em italic with left border
  - Caption: 11px / 600 / 1.4 / 0.02em sans
  - Code: 13px / 400 / 1.5 Cascadia Mono

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
  --page-margin: 30px 28px;     /* A4 페이지 내부 여백 */
  ```
- **Page width**: 793px (A4 비율, 픽셀 환산)

### ⑥ Border Radius
```css
--radius-none: 0;        /* 페이지 */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-page: 0 2px 8px rgba(0,0,0,0.08);   /* A4 페이지 */
--shadow-popover: 0 4px 8px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12);
--shadow-dialog: 0 8px 16px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12);
```

### ⑧ Iconography
- **스타일**: Fluent UI Icons (Regular)
- **Stroke 굵기**: 1.5px equivalent
- **모서리 처리**: Square 베이스
- **추천 라이브러리**: Fluent UI Icons

### ⑨ 컴포넌트 가이드

**Button (Ribbon)**
```css
.ribbon-btn { font: 500 11px/1.4 'Aptos','Segoe UI', sans-serif; letter-spacing: 0;
              border-radius: 2px; padding: 4px 8px; border: 1px solid transparent;
              background: transparent; color: var(--text-primary); cursor: pointer; }
.ribbon-btn:hover { background: var(--bg-page); border-color: var(--border-default); }
.btn-primary { background: var(--color-primary-500); color: #fff; padding: 6px 14px; font: 600 12px/1 inherit; border-radius: 2px; border: 0; }
```

**Page**
```css
.page { background: var(--bg-page); padding: var(--page-margin); width: 100%; max-width: 793px; box-shadow: var(--shadow-page); margin: 0 auto; }
.page h1 { font: 700 22px/1.3 'Aptos Display','Aptos Serif', serif; color: var(--color-primary-500); margin: 0 0 12px; }
.page h2 { font: 700 18px/1.35 'Aptos Display', serif; color: var(--color-primary-500); margin: 18px 0 8px; }
.page h3 { font: 600 15px/1.4 inherit; color: var(--color-primary-500); margin: 14px 0 6px; }
.page p { font: 400 14px/1.6 'Aptos Serif', Cambria, serif; margin: 0 0 10px; color: var(--text-primary); }
.page blockquote { border-left: 3px solid var(--color-primary-300); padding: 4px 0 4px 14px; margin: 8px 0; font: 400 14px/1.6 italic 'Aptos Serif', serif; color: var(--text-secondary); }
.page .highlight { background: var(--color-secondary-500); padding: 0 2px; }
.page a { color: var(--text-link); text-decoration: underline; }
```

**Track Changes / Comments**
```css
.revision-insert { background: rgba(43,87,154,0.10); color: var(--color-primary-700); text-decoration: underline; }
.revision-delete { color: var(--color-revision); text-decoration: line-through; }
.comment-margin { background: #FFF8E1; border-left: 3px solid var(--color-comment); padding: 8px 10px; font: 500 12px/1.5 'Aptos', sans-serif; }
```

**Badge / Tag**
```css
.tag { padding: 1px 6px; border-radius: 2px; font: 600 10px/1.4 inherit; text-transform: uppercase; letter-spacing: 0.04em; }
.tag-saved { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-comment { background: #FFF8E1; color: var(--color-comment); }
.tag-track { background: var(--color-primary-50); color: var(--color-primary-700); }
```

**Navigation (Outline 사이드바)**
```css
.outline { padding: 12px; background: var(--bg-canvas); border-right: 1px solid var(--border-default); width: 220px; }
.outline .item { padding: 6px 10px; font: 500 12px/1.4 inherit; color: var(--text-primary); border-radius: 2px; cursor: pointer; }
.outline .item:hover { background: var(--bg-page); }
.outline .item.h1 { font-weight: 600; }
.outline .item.h2 { padding-left: 20px; color: var(--text-secondary); }
.outline .item.h3 { padding-left: 32px; color: var(--text-tertiary); }
.outline .item.active { background: var(--color-primary-100); color: var(--color-primary-700); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.33, 0, 0.67, 1);
```

### ⑪ Anti-patterns
1. 본문에 산세리프 단독 사용 금지 — Aptos Serif가 Word 정체성
2. 페이지를 회색·다크 배경으로 변경 금지 — A4 흰 페이지 메타포 유지
3. Heading에 검정 사용 금지 — Word 블루(#2B579A) 단색 강조 표준
4. 페이지 모서리 라운드 적용 금지 — 종이 메타포 손실
5. 하이라이트에 형광 핑크·시안 사용 금지 — 노란 형광펜이 시그니처

### ⑫ 시그니처 적용 예시 (Word 문서)

```html
<style>
  body { margin: 0; font-family: 'Aptos Serif', 'Aptos', 'Segoe UI Variable', serif; letter-spacing: -0.005em; color: #252525; background: #F3F2F1; }
  .ui { font-family: 'Aptos', 'Segoe UI Variable', sans-serif; }
  .app { max-width: 1100px; margin: 0 auto; min-height: 100vh; }
  .title { background: #2B579A; color: #fff; padding: 6px 12px; display: flex; align-items: center; gap: 10px; font: 600 12px/1.4 'Aptos', sans-serif; }
  .title .icon { width: 20px; height: 20px; background: #fff; color: #2B579A; border-radius: 3px; display: grid; place-items: center; font: 900 12px/1 inherit; }
  .title .file { opacity: 0.95; font-weight: 500; }
  .title .save { margin-left: auto; font-size: 11px; opacity: 0.85; }
  .ribbon-tabs { background: #F3F2F1; border-bottom: 1px solid #E1DFDD; padding: 0 8px; display: flex; gap: 0; font: 600 12px/1.4 'Aptos', sans-serif; }
  .ribbon-tabs .tab { padding: 6px 14px; color: #605E5C; cursor: pointer; }
  .ribbon-tabs .tab.active { background: #fff; color: #252525; border-top: 2px solid #2B579A; }
  .ribbon { background: #fff; border-bottom: 1px solid #E1DFDD; padding: 6px 8px; display: flex; gap: 6px; flex-wrap: wrap; font: 500 11px/1.4 'Aptos', sans-serif; }
  .ribbon .group { display: flex; gap: 4px; padding: 0 8px; border-right: 1px solid #E1DFDD; align-items: center; }
  .ribbon .group:last-child { border-right: 0; }
  .ribbon .btn { padding: 4px 8px; border-radius: 2px; cursor: pointer; background: transparent; color: #252525; border: 1px solid transparent; }
  .ribbon .btn:hover { background: #F3F2F1; border-color: #E1DFDD; }
  .canvas { background: #F3F2F1; padding: 24px 0 60px; display: flex; justify-content: center; }
  .page { background: #fff; width: 90%; max-width: 720px; padding: 40px 50px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; }
  .page h1 { font: 700 26px/1.3 'Aptos Display', 'Aptos Serif', serif; color: #2B579A; margin: 0 0 6px; letter-spacing: -0.02em; }
  .page .subtitle { font: 500 13px/1.4 'Aptos', sans-serif; color: #605E5C; margin: 0 0 18px; }
  .page h2 { font: 700 19px/1.35 'Aptos Display', serif; color: #2B579A; margin: 22px 0 8px; }
  .page p { font: 400 14px/1.7 'Aptos Serif', Cambria, serif; margin: 0 0 12px; color: #252525; }
  .page .highlight { background: #FFEB85; padding: 0 2px; }
  .page blockquote { border-left: 3px solid #2B579A; padding: 4px 0 4px 14px; margin: 12px 0; font: 400 14px/1.7 italic 'Aptos Serif', serif; color: #3B3A39; }
  .page ul { font: 400 14px/1.7 'Aptos Serif', serif; padding-left: 20px; margin: 6px 0 12px; }
  .page ul li { margin-bottom: 4px; }
  .page .comment-badge { position: absolute; right: -200px; top: 110px; background: #FFF8E1; border-left: 3px solid #B45309; padding: 8px 10px; font: 500 11px/1.5 'Aptos', sans-serif; width: 160px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
  .page .comment-badge .name { font-weight: 700; color: #B45309; margin-bottom: 2px; }
</style>

<div class="app">
  <header class="title">
    <div class="icon">W</div>
    <span>Word</span>
    <span class="file">제안서 — 2026 하반기 신규 사업.docx</span>
    <span class="save">자동 저장됨</span>
  </header>
  <nav class="ribbon-tabs">
    <span class="tab active">홈</span>
    <span class="tab">삽입</span>
    <span class="tab">그리기</span>
    <span class="tab">디자인</span>
    <span class="tab">레이아웃</span>
    <span class="tab">참조</span>
    <span class="tab">검토</span>
  </nav>
  <div class="ribbon">
    <div class="group"><span class="btn">붙여넣기</span></div>
    <div class="group">
      <span class="btn">Aptos Serif ▾</span>
      <span class="btn">11 ▾</span>
      <span class="btn" style="font-weight:700;">B</span>
      <span class="btn" style="font-style:italic;">I</span>
      <span class="btn" style="text-decoration:underline;">U</span>
    </div>
    <div class="group">
      <span class="btn">A↓</span>
      <span class="btn">🎨</span>
    </div>
    <div class="group">
      <span class="btn">≡</span>
      <span class="btn">⋮</span>
      <span class="btn">¶</span>
    </div>
    <div class="group">
      <span class="btn">스타일 ▾</span>
    </div>
  </div>
  <div class="canvas">
    <div class="page">
      <h1>제 1장. 사업 개요</h1>
      <div class="subtitle">기획팀 · 작성자 김연주 · 2026-05-12</div>
      <p>이 제안서는 2026년 하반기 신규 사업 추진을 위한 기본 방향을 정리한 것입니다. <span class="highlight">핵심 가치</span>는 사용자 경험의 일관성과 운영 효율의 균형에 둡니다.</p>
      <p>세부 일정은 다음 페이지의 표를 참고해 주십시오. 본 문서는 내부 의사결정을 위한 초안이므로, 외부 공유를 자제 부탁드립니다.</p>
      <h2>1.1 추진 배경</h2>
      <blockquote>"기존 채널의 성장률은 둔화되었고, 신규 사용자 유입은 모바일 일변도로 기울었다."<br>— 2026 1분기 시장 분석</blockquote>
      <p>이러한 시장 흐름에 따라 다음 세 가지 우선순위를 정의합니다:</p>
      <ul>
        <li>모바일 우선 채널 재정비</li>
        <li>핵심 KPI를 매출에서 LTV로 전환</li>
        <li>운영 비용 12% 감축 (계열사 통합 운영)</li>
      </ul>
      <div class="comment-badge">
        <div class="name">박지원 · 5월 12일</div>
        이 부분 더 구체적인 예시 필요해 보입니다.
      </div>
    </div>
  </div>
</div>
```
