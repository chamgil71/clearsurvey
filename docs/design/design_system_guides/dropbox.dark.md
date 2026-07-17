---
brand: Dropbox
brand_ko: 드롭박스
slug: dropbox
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - productivity
  - infra

color_tone: cool
primary_color_hex: "#0061FF"
primary_color_name: "Dropbox Blue"
mood:
  - 단순함
  - 신뢰
  - 협업

font_category: sans-serif
font_primary: Sharp Grotesk
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2007
last_major_revision: 2017
signature_keyword: "Sharp Grotesk와 큐브 로고가 만드는 절제된 sharp 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F5F2", "border": "#E0E0E0", "fg": "#1E1919", "fg_muted": "#7B7B7B", "accent": "#0061FF" },
    "dark":  { "bg": "#1E1919", "surface": "#2D2728", "border": "#3A3334", "fg": "#F7F5F2", "fg_muted": "#9D9D9D", "accent": "#4796FF" }
  }

hero_html: |
  <div style="font-family:'Sharp Grotesk',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);"></span>
      <strong style="font-size:13px;letter-spacing:-0.005em;">Dropbox</strong>
    </div>
    <div style="padding:12px 14px 6px;border-bottom:1px solid var(--card-border);display:flex;align-items:center;gap:8px;font-size:11px;color:var(--card-fg-muted);">
      <span>📁 모든 파일</span><span>›</span><span>Design</span><span>›</span><span style="color:var(--card-fg);font-weight:600;">2026-Q3</span>
    </div>
    <div style="display:flex;flex-direction:column;">
      <div style="padding:10px 14px;border-bottom:1px solid var(--card-border);display:grid;grid-template-columns:24px 1fr 60px;gap:10px;align-items:center;font-size:12px;">
        <span style="color:var(--card-accent);">📁</span><span>Design System v2</span><span style="color:var(--card-fg-muted);font-size:10px;">5/7</span>
      </div>
      <div style="padding:10px 14px;border-bottom:1px solid var(--card-border);display:grid;grid-template-columns:24px 1fr 60px;gap:10px;align-items:center;font-size:12px;">
        <span style="color:var(--card-accent);">📁</span><span>Onboarding flow</span><span style="color:var(--card-fg-muted);font-size:10px;">5/3</span>
      </div>
      <div style="padding:10px 14px;border-bottom:1px solid var(--card-border);display:grid;grid-template-columns:24px 1fr 60px;gap:10px;align-items:center;font-size:12px;">
        <span>📄</span><span>Q3-roadmap.pdf</span><span style="color:var(--card-fg-muted);font-size:10px;">2.4 MB</span>
      </div>
      <div style="padding:10px 14px;display:grid;grid-template-columns:24px 1fr 60px;gap:10px;align-items:center;font-size:12px;">
        <span>📊</span><span>OKR-tracker.xlsx</span><span style="color:var(--card-fg-muted);font-size:10px;">128 KB</span>
      </div>
      <button style="background:var(--card-accent);color:#fff;border:0;border-radius:0;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;margin:14px;">+ 업로드</button>
    </div>
  </div>

sources:
  - https://www.dropbox.com/
  - https://dropbox.design/
  - https://www.dropbox.com/branding
---

### ① 브랜드 DNA
- **브랜드명**: Dropbox
- **한 줄 정체성**: 가장 단순한 클라우드 동기화에서 출발해 협업 워크스페이스로 진화한 파일의 집
- **공식 디자인 철학**: "Designed to work the way you do — simple, focused, dependable"
- **시그니처 요소 1개**: Sharp Grotesk 폰트의 sharp한 letterform + 큐브(#0061FF) 로고 + 거의 라운드 없는 표 인터페이스

### ② 톤 & 무드
- **핵심 키워드 3개**: 단순함, 신뢰, 협업
- **무드 설명**: 흰 캔버스 위 정확한 라인. Sharp Grotesk가 살짝 brutalist한 톤을, Blue가 한 점의 액션을 담당.
- **비주얼 스타일**: 모던 미니멀 + 살짝 브루털리즘 (sharp letterform)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~3px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Dropbox Blue (lifted for contrast on dark) */
  --color-primary-50:  #0A1A33;
  --color-primary-100: #0E2A55;
  --color-primary-200: #103D80;
  --color-primary-300: #1559B8;
  --color-primary-400: #2E7BE6;
  --color-primary-500: #4796FF;  /* Dropbox Blue on dark */
  --color-primary-600: #6BABFF;
  --color-primary-700: #8FC0FF;
  --color-primary-800: #B6D6FF;
  --color-primary-900: #DDEBFF;

  /* Secondary - Dropbox accent (Coral/Rose) */
  --color-secondary-500: #FF6B3D;

  /* Neutral - inverted ramp for dark */
  --color-neutral-0:    #16110F;
  --color-neutral-50:   #1E1919;     /* warm near-black base */
  --color-neutral-100:  #2D2728;
  --color-neutral-200:  #3A3334;
  --color-neutral-300:  #4C4444;
  --color-neutral-500:  #7B7373;
  --color-neutral-700:  #9D9D9D;
  --color-neutral-800:  #C4C4C4;
  --color-neutral-900:  #F7F5F2;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #0F3324;
  --color-success-fg: #4FD99A;
  --color-warning-bg: #3A2A0A;
  --color-warning-fg: #F2B441;
  --color-error-bg:   #3A1714;
  --color-error-fg:   #FF7A52;
  --color-info-bg:    #0E2A55;
  --color-info-fg:    #4796FF;

  /* Surface */
  --bg-base:     #1E1919;
  --bg-subtle:   #2D2728;
  --bg-elevated: #3A3334;
  --bg-overlay:  rgba(0,0,0,0.60);

  /* Text */
  --text-primary:    #F7F5F2;
  --text-secondary:  #C4C4C4;
  --text-tertiary:   #9D9D9D;
  --text-on-primary: #0E1A2E;
  --text-disabled:   #5A5252;

  /* Border */
  --border-default: #3A3334;
  --border-subtle:  #2A2424;
  --border-strong:  #54494A;
  --border-focus:   #4796FF;
}

[data-theme="light"] {
  /* Primary - Dropbox Blue */
  --color-primary-50:  #E5F0FF;
  --color-primary-100: #C2DDFF;
  --color-primary-200: #85BAFF;
  --color-primary-300: #4796FF;
  --color-primary-400: #0F7BFF;
  --color-primary-500: #0061FF;  /* Dropbox Blue */
  --color-primary-600: #0052D9;
  --color-primary-700: #0042B0;
  --color-primary-800: #003187;
  --color-primary-900: #00205A;

  /* Secondary - Dropbox accent (Coral/Rose) */
  --color-secondary-500: #FA551E;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F5F2;     /* warm off-white */
  --color-neutral-100:  #ECECEC;
  --color-neutral-200:  #DBDBDB;
  --color-neutral-300:  #C4C4C4;
  --color-neutral-500:  #9D9D9D;
  --color-neutral-700:  #7B7B7B;
  --color-neutral-800:  #4C4C4C;
  --color-neutral-900:  #1E1919;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #00875A;
  --color-warning-bg: #FFF3CC;
  --color-warning-fg: #BD7800;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FA551E;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #0061FF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F5F2;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(30,25,25,0.50);

  /* Text */
  --text-primary:    #1E1919;
  --text-secondary:  #4C4C4C;
  --text-tertiary:   #7B7B7B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C4C4C4;

  /* Border */
  --border-default: #E0E0E0;
  --border-subtle:  #F0F0F0;
  --border-strong:  #C4C4C4;
  --border-focus:   #0061FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Sharp Grotesk (Sharp Type, Dropbox 라이선스) / Atlas Grotesk (legacy) / 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 80px / 700 / 1.0 / -0.04em
  - H1: 48px / 700 / 1.1 / -0.02em
  - H2: 32px / 700 / 1.2 / -0.015em
  - H3: 22px / 600 / 1.3 / -0.005em
  - Body Large: 18px / 400 / 1.5 / 0
  - Body: 15px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;        /* Dropbox 기본 */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 4px 8px rgba(0,0,0,0.40);
--shadow-lg: 0 8px 16px rgba(0,0,0,0.50);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.60);
```

### ⑧ Iconography
- **스타일**: Outline (Dropbox 자체)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Square + Round 혼합 (sharp에 가까움)
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 'Sharp Grotesk', Inter, 'Pretendard', sans-serif;
  letter-spacing: -0.005em;
  border-radius: 0;       /* Dropbox 시그니처 sharp */
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-strong);
  border-radius: 0;
  padding: 8px 12px;
  font-size: 14px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px var(--border-focus); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 0; padding: 24px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 0 8px; height: 20px; border-radius: 0; font-size: 11px; font-weight: 600; line-height: 20px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: var(--bg-subtle); padding: 16px; border-right: 1px solid var(--border-subtle); height: 100vh; }
.sidebar .item { padding: 8px 12px; font-size: 14px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); }
.sidebar .item.active { background: var(--color-primary-500); color: #fff; font-weight: 600; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 컴포넌트에 라운드 (>4px) 사용 금지 — sharp가 시그니처
2. Sharp Grotesk를 다른 산세리프로 임의 대체 금지
3. brand 컬러를 다중 그라데이션으로 분산 사용 금지 — 단일 Blue 액션
4. 본문에 italic 강조 금지 — sharp ramp의 톤 위배
5. 파일 행 높이를 32px 미만으로 압축 금지 — 가독성 저하

### ⑫ 시그니처 적용 예시 (File browser)

```html
<style>
  body { margin: 0; font-family: 'Sharp Grotesk', Inter, 'Pretendard', -apple-system, sans-serif; letter-spacing: -0.005em; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: var(--bg-subtle); padding: 16px; border-right: 1px solid var(--border-subtle); }
  .sidebar .logo { font-weight: 700; padding: 4px 8px 16px; display: flex; align-items: center; gap: 8px; }
  .sidebar .logo .cube { width: 20px; height: 20px; background: #4796FF; clip-path: polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%); }
  .sidebar .item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; font-size: 14px; cursor: pointer; }
  .sidebar .item:hover { background: var(--bg-elevated); }
  .sidebar .item.active { background: var(--color-primary-500); color: #fff; font-weight: 600; }
  .main { padding: 0; }
  .breadcrumb { padding: 16px 24px; border-bottom: 1px solid var(--border-subtle); font-size: 13px; color: var(--text-secondary); }
  .breadcrumb strong { color: var(--text-primary); }
  .toolbar { padding: 12px 24px; border-bottom: 1px solid var(--border-default); display: flex; gap: 8px; }
  .table { width: 100%; }
  .row { display: grid; grid-template-columns: 32px 1fr 100px 100px 80px; gap: 12px; padding: 10px 24px; border-bottom: 1px solid var(--border-subtle); align-items: center; font-size: 14px; }
  .row.head { background: var(--bg-subtle); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); }
  .row .ic { font-size: 18px; color: var(--color-primary-500); }
  .row:hover:not(.head) { background: var(--bg-subtle); }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="logo"><div class="cube"></div> Dropbox</div>
    <div class="item active">🏠 모든 파일</div>
    <div class="item">⏱ 최근</div>
    <div class="item">⭐ 즐겨찾기</div>
    <div class="item">👥 공유</div>
    <div class="item">🗑 휴지통</div>
    <div style="font-size:11px; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.04em; padding:16px 12px 4px; font-weight:700;">팀</div>
    <div class="item">🟦 Acme Workspace</div>
    <div class="item">🟧 Personal</div>
  </aside>
  <main class="main">
    <div class="breadcrumb">📁 모든 파일 › Design › <strong>2026-Q3</strong></div>
    <div class="toolbar">
      <button class="btn btn-primary">+ 업로드</button>
      <button class="btn btn-secondary">+ 새 폴더</button>
      <button class="btn btn-secondary" style="margin-left:auto;">공유</button>
    </div>
    <div class="table">
      <div class="row head"><div></div><div>이름</div><div>수정 시간</div><div>크기</div><div>공유</div></div>
      <div class="row"><span class="ic">📁</span><span>Design System v2</span><span>5월 7일</span><span>—</span><span>👥 3</span></div>
      <div class="row"><span class="ic">📁</span><span>Onboarding flow</span><span>5월 3일</span><span>—</span><span>👥 2</span></div>
      <div class="row"><span>📄</span><span>Q3-roadmap.pdf</span><span>5월 6일</span><span>2.4 MB</span><span>👥 5</span></div>
      <div class="row"><span>📊</span><span>OKR-tracker.xlsx</span><span>5월 5일</span><span>128 KB</span><span>👥 12</span></div>
      <div class="row"><span>🖼</span><span>brand-mark-v2.png</span><span>4월 28일</span><span>4.1 MB</span><span>—</span></div>
    </div>
  </main>
</div>
```
