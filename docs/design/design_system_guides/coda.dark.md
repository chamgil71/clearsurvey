---
brand: Coda
brand_ko: 코다
slug: coda
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - productivity

color_tone: warm
primary_color_hex: "#FF7F00"
primary_color_name: "Coda Orange"
mood:
  - 통합적
  - 따뜻함
  - 유연함

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2024
signature_keyword: "doc + database가 한 페이지에 자연스럽게 흐르는 따뜻한 워크 캔버스"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FFF7EE", "border": "#ECECEC", "fg": "#1A1A1A", "fg_muted": "#666666", "accent": "#FF7F00" },
    "dark":  { "bg": "#1A1A1A", "surface": "#2A2A2A", "border": "#333333", "fg": "#FFFFFF", "fg_muted": "#9C9C9C", "accent": "#FF9C33" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="width:20px;height:20px;background:var(--card-accent);border-radius:5px;display:grid;place-items:center;color:#1a1a1a;font-weight:800;font-size:11px;">C</span>
      <strong style="font-size:13px;">Coda</strong>
    </div>
    <div style="padding:18px 16px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:32px;line-height:1;">📓</div>
      <h2 style="font-size:22px;font-weight:700;line-height:1.2;margin:6px 0 4px;">Engineering Hub</h2>
      <p style="font-size:11px;color:var(--card-fg-muted);line-height:1.4;margin:0;">팀 위키 + 작업 트래커가 한 문서에서.</p>
      <div style="margin-top:8px;border:1px solid var(--card-border);border-radius:6px;overflow:hidden;font-size:11px;">
        <div style="background:var(--card-surface);padding:6px 10px;font-weight:600;color:var(--card-accent);border-bottom:1px solid var(--card-border);display:flex;align-items:center;gap:6px;">▤ Tasks</div>
        <div style="display:grid;grid-template-columns:1fr 60px;border-bottom:1px solid var(--card-border);">
          <div style="padding:6px 10px;">디자인 v2</div>
          <div style="padding:6px;text-align:center;background:#173A22;color:#5BD98A;font-weight:600;font-size:10px;">Done</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 60px;">
          <div style="padding:6px 10px;">Onboarding</div>
          <div style="padding:6px;text-align:center;background:#3A2E12;color:#E0A93B;font-weight:600;font-size:10px;">WIP</div>
        </div>
      </div>
      <button style="background:var(--card-accent);color:#1a1a1a;border:0;border-radius:6px;padding:8px 12px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;margin-top:6px;">+ 새 섹션</button>
    </div>
  </div>

sources:
  - https://coda.io/
  - https://coda.io/about
  - https://help.coda.io/
---

### ① 브랜드 DNA
- **브랜드명**: Coda
- **한 줄 정체성**: 문서와 데이터베이스가 한 페이지에 융합되는, all-in-one 워크 캔버스
- **공식 디자인 철학**: "A new doc for a new era of teams — words, data, and apps in one"
- **시그니처 요소 1개**: Coda Orange(#FF7F00) + 따뜻한 흰 캔버스 + Pack(통합 블록)이 자연스럽게 흐르는 longform 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 통합적, 따뜻함, 유연함
- **무드 설명**: 흰 캔버스에 검은 글자, 오렌지 액센트. 텍스트 사이에 표/차트/버튼이 자연스럽게 끼어든다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable — longform 글쓰기 + 작업
- **모서리 성향**: Soft (4~8px)
- **평면성**: Flat — 그림자 거의 없음, line 위주

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Coda Orange (dark-tuned) */
  --color-primary-50:  #2A1A05;
  --color-primary-100: #3D2608;
  --color-primary-200: #5C3A0D;
  --color-primary-300: #8F5A14;
  --color-primary-400: #E66800;
  --color-primary-500: #FF8A1A;  /* Coda Orange on dark */
  --color-primary-600: #FF9C33;
  --color-primary-700: #FFB866;
  --color-primary-800: #FFD299;
  --color-primary-900: #FFE9CC;

  /* Secondary - Coda Coral */
  --color-secondary-500: #F47168;

  /* Neutral (inverted ramp) */
  --color-neutral-0:    #121214;
  --color-neutral-50:   #18181B;
  --color-neutral-100:  #1F1F23;
  --color-neutral-200:  #2A2A2E;
  --color-neutral-300:  #3A3A40;
  --color-neutral-500:  #71717A;
  --color-neutral-700:  #A1A1AA;
  --color-neutral-800:  #D4D4D8;
  --color-neutral-900:  #ECECEE;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #173A22;
  --color-success-fg: #5BD98A;
  --color-warning-bg: #3A2E12;
  --color-warning-fg: #E0A93B;
  --color-error-bg:   #3D1A1A;
  --color-error-fg:   #F47168;
  --color-info-bg:    #14243F;
  --color-info-fg:    #6BA8FF;

  /* Surface */
  --bg-base:     #1A1A1A;
  --bg-subtle:   #232323;
  --bg-elevated: #2A2A2A;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #ECECEE;
  --text-secondary:  #A1A1AA;
  --text-tertiary:   #71717A;
  --text-on-primary: #1A1A1A;
  --text-disabled:   #57575C;

  /* Border */
  --border-default: #333333;
  --border-subtle:  #262626;
  --border-strong:  #4A4A4A;
  --border-focus:   #FF8A1A;
}

[data-theme="light"] {
  /* Primary - Coda Orange */
  --color-primary-50:  #FFF7EE;
  --color-primary-100: #FFE9CC;
  --color-primary-200: #FFD299;
  --color-primary-300: #FFB866;
  --color-primary-400: #FF9C33;
  --color-primary-500: #FF7F00;  /* Coda Orange */
  --color-primary-600: #E66800;
  --color-primary-700: #BD5400;
  --color-primary-800: #8F4000;
  --color-primary-900: #5C2A00;

  /* Secondary - Coda Coral */
  --color-secondary-500: #F25C54;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F4;
  --color-neutral-200:  #ECECEC;
  --color-neutral-300:  #D4D4D4;
  --color-neutral-500:  #9C9C9C;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #424242;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4E5;
  --color-success-fg: #0C7C2A;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #9C6700;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #D6473C;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2D7FF9;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,26,26,0.40);

  /* Text */
  --text-primary:    #1A1A1A;
  --text-secondary:  #666666;
  --text-tertiary:   #9C9C9C;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #ECECEC;
  --border-subtle:  #F4F4F4;
  --border-strong:  #D4D4D4;
  --border-focus:   #FF7F00;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 600 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 17px / 400 / 1.6 / 0
  - Body: 15px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.43 / 0
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
- **Container**: max-width 880px (longform), 좌우 패딩 32px

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
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 12px rgba(0,0,0,0.45);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.55);
--shadow-xl: 0 16px 40px rgba(0,0,0,0.65);
```

### ⑧ Iconography
- **스타일**: Outline + 이모지 (longform doc 친화)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor + 시스템 emoji

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #1a1a1a; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-primary-50); }
.btn-danger { background: var(--color-error-fg); color: #1a1a1a; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  font-size: 15px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(255,138,26,0.25); }
```

**Card** (Coda block)
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Status**
```css
.tag { padding: 0 8px; height: 20px; border-radius: var(--radius-full); font-size: 11px; font-weight: 600; line-height: 20px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-primary-500); color: #1a1a1a; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-done    { background: #173A22; color: #5BD98A; }
.tag-wip     { background: #3A2E12; color: #E0A93B; }
.tag-stuck   { background: #3D1A1A; color: #F47168; }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: var(--bg-subtle); padding: 12px; height: 100vh; }
.sidebar .item { padding: 6px 10px; border-radius: var(--radius-md); font-size: 13px; cursor: pointer; }
.sidebar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
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
1. doc 본문에 채도 높은 brand 컬러 배경 사용 금지 — 흰 캔버스 보존
2. Pack 블록에 헤비 그림자 사용 금지 — 본문 흐름 끊김
3. 본문 폰트 size 13px 미만으로 줄이지 말 것
4. 버튼을 본문 단락 사이에 4개 이상 배치 금지 — longform 흐름 방해
5. table 셀 색상으로 status 외 의미 매핑 금지

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: var(--bg-subtle); padding: 16px 12px; }
  .sidebar .doc { padding: 6px 10px; border-radius: 6px; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
  .sidebar .doc:hover { background: var(--bg-elevated); }
  .sidebar .doc.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 600; }
  .sidebar .section { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-tertiary); padding: 12px 10px 4px; font-weight: 600; }
  .doc-page { padding: 48px 64px; max-width: 880px; margin: 0 auto; }
  .doc-page .icon { font-size: 48px; line-height: 1; margin-bottom: 8px; }
  .doc-page h1 { font-size: 36px; font-weight: 700; line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 24px; }
  .doc-page h2 { font-size: 22px; font-weight: 600; margin: 32px 0 12px; }
  .doc-page p { font-size: 15px; line-height: 1.6; margin: 12px 0; }
  .pack { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 8px; margin: 16px 0; overflow: hidden; }
  .pack-head { background: var(--color-primary-50); color: var(--color-primary-700); padding: 8px 14px; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--border-default); }
  .pack-table { width: 100%; border-collapse: collapse; font-size: 14px; }
  .pack-table th { background: var(--bg-base); padding: 8px 12px; font-size: 11px; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.04em; text-align: left; border-bottom: 1px solid var(--border-default); }
  .pack-table td { padding: 10px 12px; border-bottom: 1px solid var(--border-subtle); }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="section">My Docs</div>
    <div class="doc active">📓 Engineering Hub</div>
    <div class="doc">🎯 Q3 OKR</div>
    <div class="doc">📋 Sprint Notes</div>
    <div class="section">Shared</div>
    <div class="doc">📊 Company Dashboard</div>
  </aside>
  <main class="doc-page">
    <div class="icon">📓</div>
    <h1>Engineering Hub</h1>
    <p>이 페이지는 엔지니어링 팀의 모든 정보가 모이는 곳입니다. 문서, 작업, 의사결정이 한 자리에서 살아 움직이도록 설계됐습니다.</p>
    <h2>이번 주 작업</h2>
    <p>아래 표는 Tasks 베이스에서 자동으로 동기화됩니다.</p>
    <div class="pack">
      <div class="pack-head">▤ Tasks · Sprint 24</div>
      <table class="pack-table">
        <thead><tr><th>Item</th><th>Owner</th><th>Status</th><th>Due</th></tr></thead>
        <tbody>
          <tr><td>디자인 시스템 v2 정리</td><td>Mina</td><td><span class="tag tag-done">Done</span></td><td>5/7</td></tr>
          <tr><td>Onboarding 흐름 개선</td><td>Joon</td><td><span class="tag tag-wip">In progress</span></td><td>5/12</td></tr>
          <tr><td>QA 일정 잡기</td><td>Dave</td><td><span class="tag tag-stuck">Stuck</span></td><td>5/15</td></tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-primary" style="margin-top:16px;">+ 새 섹션 추가</button>
  </main>
</div>
```
