---
brand: Ant Design
brand_ko: 앤트 디자인
slug: ant-design
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: asia
industry:
  - design-system
  - enterprise

color_tone: cool
primary_color_hex: "#1677FF"
primary_color_name: "Daybreak Blue"
mood:
  - 명료
  - 효율
  - 풍부

font_category: sans-serif
font_primary: -apple-system stack
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2015
last_major_revision: 2022
signature_keyword: "12색 팔레트 generator와 표/폼 중심의 백오피스 표준"

card_tokens: |
  {
    "light": { "bg": "#F5F5F5", "surface": "#FFFFFF", "border": "#D9D9D9", "fg": "#000000", "fg_muted": "#8C8C8C", "accent": "#1677FF" },
    "dark":  { "bg": "#141414", "surface": "#262626", "border": "#424242", "fg": "#FFFFFF", "fg_muted": "#A6A6A6", "accent": "#1668DC" }
  }

hero_html: |
  <div style="font-family:-apple-system,'Segoe UI','PingFang SC',sans-serif;background:var(--card-bg);color:rgba(255,255,255,0.88);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#0a0f1a;color:#fff;padding:8px 14px;font-size:13px;display:flex;align-items:center;gap:14px;">
      <strong>Ant Design Pro</strong>
      <span style="color:rgba(255,255,255,0.65);font-size:11px;">대시보드</span>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:var(--card-surface);border-radius:8px;padding:12px;">
        <div style="font-size:11px;color:rgba(255,255,255,0.45);margin-bottom:2px;">이번 달 매출</div>
        <div style="font-size:22px;font-weight:600;line-height:1.2;">¥ 126,560</div>
        <div style="font-size:11px;color:#6ABE39;margin-top:2px;">▲ 12% YoY</div>
      </div>
      <div style="display:flex;gap:6px;">
        <span style="background:var(--card-accent);color:#fff;padding:1px 7px;border-radius:2px;font-size:10px;font-weight:400;">진행</span>
        <span style="background:#111A2C;color:#65A9F3;border:1px solid #15325B;padding:1px 7px;border-radius:2px;font-size:10px;">검토</span>
        <span style="background:#162312;color:#6ABE39;border:1px solid #274916;padding:1px 7px;border-radius:2px;font-size:10px;">완료</span>
      </div>
      <button style="background:var(--card-accent);color:#fff;border:0;border-radius:6px;padding:6px 14px;font-size:12px;font-family:inherit;align-self:flex-start;box-shadow:0 2px 0 rgba(22,104,220,0.16);">+ 새 항목</button>
    </div>
  </div>

sources:
  - https://ant.design/
  - https://ant.design/docs/spec/colors
  - https://ant.design/docs/spec/font
---

### ① 브랜드 DNA
- **브랜드명**: Ant Design (Ant Group)
- **한 줄 정체성**: 엔터프라이즈 백오피스를 구축하기 위한, 표 형식 인터페이스에 최적화된 React 디자인 시스템
- **공식 디자인 철학**: "Natural — Certain — Meaningful — Growing" (자연스러움, 확실성, 의미, 성장)
- **시그니처 요소 1개**: Ant Daybreak Blue(#1677FF) + 12색 팔레트 generator + 정밀한 표/폼 컴포넌트

### ② 톤 & 무드
- **핵심 키워드 3개**: 명료, 효율, 풍부
- **무드 설명**: 깨끗한 흰 캔버스, 정확한 표 라인, 적당한 그림자. 데이터·폼·표가 90% 차지하는 어드민 화면을 가장 잘 다룬다.
- **비주얼 스타일**: 모던 미니멀 (정보 위계 우선)
- **밀도(Density)**: Compact — 테이블/폼 중심
- **모서리 성향**: Soft (6px 기본, v5에서 8px 카드)
- **평면성**: Subtle — 그림자 1~2단계 + 라인

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Daybreak Blue (Ant dark 12-step) */
  --color-primary-50:  #111A2C;  /* blue-1 dark */
  --color-primary-100: #112545;  /* blue-2 dark */
  --color-primary-200: #15325B;  /* blue-3 dark */
  --color-primary-300: #15417E;  /* blue-4 dark */
  --color-primary-400: #1554AD;  /* blue-5 dark */
  --color-primary-500: #1668DC;  /* blue-6 — primary v5 dark */
  --color-primary-600: #3C89E8;  /* blue-7 — hover (brighter on dark) */
  --color-primary-700: #65A9F3;  /* blue-8 dark */
  --color-primary-800: #8DC5F8;  /* blue-9 dark */
  --color-primary-900: #B7DCFA;  /* blue-10 dark */

  /* Secondary - Volcano (CTA secondary, dark-tuned) */
  --color-secondary-500: #E84749;

  /* Neutral - Ant gray (inverted ramp for dark) */
  --color-neutral-0:    #141414;
  --color-neutral-50:   #1D1D1D;  /* gray-1 dark */
  --color-neutral-100:  #1F1F1F;  /* gray-2 dark */
  --color-neutral-200:  #303030;  /* gray-3 — split-line dark */
  --color-neutral-300:  #424242;  /* gray-5 — border dark */
  --color-neutral-500:  #595959;  /* gray-6 dark */
  --color-neutral-700:  #7A7A7A;  /* gray-7 — text disabled dark */
  --color-neutral-800:  #A6A6A6;  /* gray-8 — text secondary dark */
  --color-neutral-900:  #E6E6E6;  /* gray-10 — text primary dark */
  --color-neutral-1000: #FFFFFF;  /* gray-13 dark */

  /* Semantic (Ant dark default) */
  --color-success-bg: #162312;
  --color-success-fg: #6ABE39;
  --color-warning-bg: #2B2111;
  --color-warning-fg: #E8B339;
  --color-error-bg:   #2C1618;
  --color-error-fg:   #E84749;
  --color-info-bg:    #111A2C;
  --color-info-fg:    #3C89E8;

  /* Surface */
  --bg-base:     #141414;
  --bg-subtle:   #1F1F1F;
  --bg-elevated: #262626;
  --bg-overlay:  #1F1F1F;

  /* Text */
  --text-primary:    rgba(255,255,255,0.88);   /* v5 colorTextBase dark */
  --text-secondary:  rgba(255,255,255,0.65);
  --text-tertiary:   rgba(255,255,255,0.45);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.25);

  /* Border */
  --border-default: #424242;
  --border-subtle:  #303030;
  --border-strong:  #595959;
  --border-focus:   #1668DC;
}

[data-theme="light"] {
  /* Primary - Daybreak Blue (Ant 12-step) */
  --color-primary-50:  #E6F4FF;  /* blue-1 */
  --color-primary-100: #BAE0FF;  /* blue-2 */
  --color-primary-200: #91CAFF;  /* blue-3 */
  --color-primary-300: #69B1FF;  /* blue-4 */
  --color-primary-400: #4096FF;  /* blue-5 */
  --color-primary-500: #1677FF;  /* blue-6 — primary v5 */
  --color-primary-600: #0958D9;  /* blue-7 — hover */
  --color-primary-700: #003EB3;  /* blue-8 */
  --color-primary-800: #002C8C;  /* blue-9 */
  --color-primary-900: #001D66;  /* blue-10 */

  --color-secondary-500: #FA541C;

  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;  /* gray-1 */
  --color-neutral-100:  #F5F5F5;  /* gray-2 */
  --color-neutral-200:  #F0F0F0;  /* gray-3 — split-line */
  --color-neutral-300:  #D9D9D9;  /* gray-5 — border */
  --color-neutral-500:  #BFBFBF;  /* gray-6 */
  --color-neutral-700:  #8C8C8C;  /* gray-7 — text disabled */
  --color-neutral-800:  #595959;  /* gray-8 — text secondary */
  --color-neutral-900:  #262626;  /* gray-10 — text primary */
  --color-neutral-1000: #000000;  /* gray-13 */

  --color-success-bg: #F6FFED;
  --color-success-fg: #52C41A;
  --color-warning-bg: #FFFBE6;
  --color-warning-fg: #FAAD14;
  --color-error-bg:   #FFF1F0;
  --color-error-fg:   #FF4D4F;
  --color-info-bg:    #E6F4FF;
  --color-info-fg:    #1677FF;

  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  #FFFFFF;

  --text-primary:    rgba(0,0,0,0.88);   /* v5 colorTextBase */
  --text-secondary:  rgba(0,0,0,0.65);
  --text-tertiary:   rgba(0,0,0,0.45);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(0,0,0,0.25);

  --border-default: #D9D9D9;
  --border-subtle:  #F0F0F0;
  --border-strong:  #BFBFBF;
  --border-focus:   #1677FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto (system stack)
  - 한글: "PingFang SC" 폴백 → "Apple SD Gothic Neo" / "Malgun Gothic"
- **위계** (Ant heading scale):
  - Display: 38px / 600 / 1.23 / -0.02em
  - H1: 30px / 600 / 1.27 / 0
  - H2: 24px / 600 / 1.33 / 0
  - H3: 20px / 600 / 1.4 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.5715 / 0
  - Body Small: 12px / 400 / 1.66 / 0
  - Caption: 12px / 400 / 1.66 / 0

### ⑤ 스페이싱
- **Base unit**: 4px (Ant size)
- **토큰**:
  ```css
  --space-xs:  4px;     /* sizeXS */
  --space-sm:  8px;     /* sizeSM */
  --space-md: 16px;     /* size */
  --space-lg: 24px;     /* sizeLG */
  --space-xl: 32px;     /* sizeXL */
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1200px (24열 grid), 좌우 패딩 16px (mobile) / 24px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 6px;     /* v5 borderRadius 기본 */
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.20), 0 1px 6px -1px rgba(0,0,0,0.16), 0 2px 4px 0 rgba(0,0,0,0.16);
--shadow-md: 0 6px 16px 0 rgba(0,0,0,0.32), 0 3px 6px -4px rgba(0,0,0,0.40), 0 9px 28px 8px rgba(0,0,0,0.24);
--shadow-lg: 0 6px 20px rgba(0,0,0,0.44);
--shadow-xl: 0 12px 32px rgba(0,0,0,0.56);
```

### ⑧ Iconography
- **스타일**: Outline / Filled / Two-tone (Ant Design Icons는 동일 글리프 3종 weight)
- **Stroke 굵기**: 1.5~2px (outline)
- **모서리 처리**: Round
- **추천 라이브러리**: @ant-design/icons (MIT, 800+) / Lucide

### ⑨ 컴포넌트 가이드

**Button** (Ant: primary / default / dashed / text / link × default/hover/active/disabled)
```css
.btn {
  font: 400 14px/1.5715 -apple-system, "Segoe UI", "PingFang SC", "Apple SD Gothic Neo", sans-serif;
  border-radius: var(--radius-md);
  padding: 4px 15px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid var(--border-default);
  background: var(--bg-base);
  color: var(--text-primary);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 2px 0 rgba(0,0,0,0.20);
}
.btn:hover { color: var(--color-primary-500); border-color: var(--color-primary-500); }
.btn-primary { background: var(--color-primary-500); border-color: var(--color-primary-500); color: #fff; box-shadow: 0 2px 0 rgba(22,104,220,0.16); }
.btn-primary:hover { background: var(--color-primary-600); border-color: var(--color-primary-600); color: #fff; }
.btn-primary:active { background: var(--color-primary-400); border-color: var(--color-primary-400); }
.btn-primary:disabled { background: var(--color-neutral-100); border-color: var(--border-default); color: var(--text-disabled); box-shadow: none; }

.btn-secondary { /* default */ }
.btn-ghost { background: transparent; border-color: transparent; color: var(--color-primary-500); box-shadow: none; }
.btn-ghost:hover { background: var(--color-primary-50); color: var(--color-primary-600); }
.btn-danger { background: var(--color-error-fg); border-color: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 4px 11px;
  height: 32px;
  font-size: 14px;
  transition: all 0.2s;
}
.input:hover { border-color: var(--color-primary-400); }
.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 2px rgba(22,104,220,0.20);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 2px rgba(232,71,73,0.20); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); }
.card-head { padding: 0 24px; min-height: 56px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; font-weight: 600; }
.card-body { padding: 24px; }
.card-elevated { box-shadow: var(--shadow-sm); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Tag**
```css
.tag { padding: 0 7px; height: 22px; border-radius: var(--radius-sm); font-size: 12px; line-height: 20px; border: 1px solid; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; border-color: var(--color-primary-500); }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); border-color: var(--color-primary-200); }
.tag-outline { background: var(--bg-base); border-color: var(--border-default); color: var(--text-primary); }
```

**Navigation (Layout Header + Sider)**
```css
.layout-header { height: 64px; background: #0a0f1a; color: #fff; display: flex; align-items: center; padding: 0 50px; }
.layout-header .menu { display: flex; gap: 0; margin-left: 32px; }
.layout-header .menu a { color: rgba(255,255,255,0.65); padding: 0 20px; height: 64px; line-height: 64px; }
.layout-header .menu a.active { color: #fff; border-bottom: 2px solid var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 300ms;
--ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
```

### ⑪ Anti-patterns
1. 한 화면에 4가지 이상 brand color (Ant 12색 중 다수) 동시 사용 금지 — 신호 혼란
2. table row 높이를 32px 미만으로 압축 금지 — 14px 폰트 가독성 한계
3. tooltip을 정보 전달의 유일한 수단으로 사용 금지 — 모바일/터치 차단
4. modal 안에 modal 중첩 금지 — drawer 또는 단계 분리 권장
5. Compact size를 marketing 페이지에 사용 금지 — 어드민 전용

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: -apple-system, "Segoe UI", "PingFang SC", "Apple SD Gothic Neo", sans-serif; color: var(--text-primary); background: #141414; }
  .layout-header { /* 위 정의 */ }
  .layout { display: grid; grid-template-columns: 200px 1fr; min-height: 100vh; }
  .sider { background: #0a0f1a; color: rgba(255,255,255,0.65); padding: 16px 0; }
  .sider .menu-item { padding: 12px 24px; cursor: pointer; }
  .sider .menu-item.active { background: var(--color-primary-500); color: #fff; }
  .content { padding: 24px; }
  .breadcrumb { font-size: 14px; color: var(--text-secondary); margin-bottom: 16px; }
  .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px; }
  .feature-card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 24px; }
  .feature-card .stat-num { font-size: 30px; font-weight: 600; color: var(--text-primary); }
  .feature-card .stat-label { font-size: 14px; color: var(--text-secondary); margin-bottom: 4px; }
  .feature-card .delta { font-size: 13px; color: var(--color-success-fg); margin-top: 8px; }
  .toolbar { background: var(--bg-elevated); padding: 16px 24px; border-radius: var(--radius-lg); display: flex; justify-content: space-between; align-items: center; gap: 16px; }
</style>

<header class="layout-header">
  <span style="font-weight:700; font-size:18px; color:#fff">Ant Design Pro</span>
  <nav class="menu">
    <a href="#" class="active">대시보드</a>
    <a href="#">분석</a>
    <a href="#">고객</a>
    <a href="#">설정</a>
  </nav>
</header>

<div class="layout">
  <aside class="sider">
    <div class="menu-item active">▦ 개요</div>
    <div class="menu-item">▤ 주문</div>
    <div class="menu-item">▢ 상품</div>
    <div class="menu-item">⚙ 설정</div>
  </aside>
  <main class="content">
    <div class="breadcrumb">홈 / 대시보드 / 개요</div>
    <div class="toolbar">
      <input class="input" placeholder="검색..." style="flex:1; max-width:280px"/>
      <div style="display:flex; gap:8px">
        <button class="btn">필터</button>
        <button class="btn">내보내기</button>
        <button class="btn btn-primary">+ 새 항목</button>
      </div>
    </div>
    <div class="features">
      <div class="feature-card"><div class="stat-label">이번 달 매출</div><div class="stat-num">¥ 126,560</div><div class="delta">▲ 12% YoY</div></div>
      <div class="feature-card"><div class="stat-label">신규 주문</div><div class="stat-num">8,846</div><div class="delta">▲ 6.2%</div></div>
      <div class="feature-card"><div class="stat-label">활성 고객</div><div class="stat-num">6,560</div><div class="delta">▲ 3.4%</div></div>
    </div>
  </main>
</div>
```
