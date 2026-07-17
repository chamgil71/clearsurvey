---
brand: Workday Canvas
brand_ko: 워크데이 캔버스
slug: workday-canvas
generated: 2026-05-08
source_type: official_docs
confidence: medium
is_official: true

region: western
industry:
  - design-system
  - enterprise

color_tone: cool
primary_color_hex: "#0875E1"
primary_color_name: "Workday Blueberry"
mood:
  - 차분함
  - 신뢰
  - 데이터 친화

font_category: sans-serif
font_primary: Roboto
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2018
last_major_revision: 2024
signature_keyword: "Blueberry 블루와 부드러운 라운드의 HR/재무 톤"

hero_html: |
  <div style="font-family:Roboto,'Noto Sans KR',sans-serif;background:#F5F5F5;color:#292929;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #DDDDDD;padding:10px 16px;display:flex;align-items:center;gap:10px;">
      <span style="font-weight:700;color:#0875E1;font-size:16px;">Workday</span>
      <span style="font-size:11px;color:#585858;">홈</span>
    </div>
    <div style="padding:14px;display:grid;gap:10px;">
      <div style="background:#fff;border-radius:8px;padding:14px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <div style="font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:0.04em;color:#585858;">입사 예정</div>
        <div style="font-size:30px;font-weight:400;line-height:1.2;margin:6px 0 4px;">12</div>
        <div style="font-size:11px;color:#45822F;">▲ 다음 30일</div>
      </div>
      <div style="background:#fff;border-radius:8px;padding:14px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <div style="font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:0.04em;color:#585858;">대기 중 결재</div>
        <div style="font-size:30px;font-weight:400;line-height:1.2;margin:6px 0 4px;">28</div>
        <button style="background:#0875E1;color:#fff;border:0;border-radius:9999px;padding:5px 14px;font-size:11px;font-weight:500;font-family:inherit;margin-top:4px;">처리하기</button>
      </div>
    </div>
  </div>

sources:
  - https://canvas.workday.com/
  - https://canvas.workday.com/styles/colors/
---

### ① 브랜드 DNA
- **브랜드명**: Workday Canvas Design System
- **한 줄 정체성**: HR/재무 엔터프라이즈 SaaS를 위한, 차분한 블루 톤의 대규모 백오피스 시스템
- **공식 디자인 철학**: "Built to scale across products with consistency and accessibility"
- **시그니처 요소 1개**: Workday Blueberry (#0875E1) + Roboto 본문 + 부드러운 카드 라운드(8px) + 라이트한 캔버스 톤(#F5F5F5)

### ② 톤 & 무드
- **핵심 키워드 3개**: 차분함, 신뢰, 데이터 친화
- **무드 설명**: 블루베리 블루를 중심으로 정돈된 표와 폼이 나란히 줄을 선다. 채도가 낮은 surface와 밝은 텍스트 대비로 장시간 사용에도 피로가 적다.
- **비주얼 스타일**: 모던 미니멀 (엔터프라이즈 톤)
- **밀도(Density)**: Compact — HR/재무 데이터 테이블 위주
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Blueberry */
  --color-primary-50:  #E5F1FB;
  --color-primary-100: #CCE3F7;
  --color-primary-200: #99C7EF;
  --color-primary-300: #66ABE7;
  --color-primary-400: #338FDF;
  --color-primary-500: #0875E1;  /* Blueberry 400/500 */
  --color-primary-600: #005CB4;  /* hover */
  --color-primary-700: #00467F;  /* Blueberry 600 */
  --color-primary-800: #002F55;
  --color-primary-900: #00192C;

  /* Secondary - Berrysmoothie / Plum */
  --color-secondary-500: #6E0AAD;

  /* Neutral - Workday gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #EEEEEE;
  --color-neutral-200:  #DDDDDD;
  --color-neutral-300:  #CCCCCC;
  --color-neutral-500:  #969696;
  --color-neutral-700:  #585858;
  --color-neutral-800:  #424242;
  --color-neutral-900:  #292929;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCEFD9;
  --color-success-fg: #45822F;
  --color-warning-bg: #FFF1CB;
  --color-warning-fg: #B6740F;
  --color-error-bg:   #FAE0DD;
  --color-error-fg:   #C42528;
  --color-info-bg:    #E5F1FB;
  --color-info-fg:    #0875E1;

  /* Surface */
  --bg-base:     #F5F5F5;        /* canvas page */
  --bg-subtle:   #EEEEEE;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  #FFFFFF;

  /* Text */
  --text-primary:    #292929;
  --text-secondary:  #585858;
  --text-tertiary:   #767676;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A8A8A8;

  /* Border */
  --border-default: #BDBDBD;
  --border-subtle:  #DDDDDD;
  --border-strong:  #767676;
  --border-focus:   #0875E1;
}

[data-theme="dark"] {
  --bg-base: #1A1A1A;
  --bg-subtle: #292929;
  --bg-elevated: #424242;
  --text-primary: #F5F5F5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Roboto (Apache 2.0) — Workday Canvas 표준
  - 한글: Noto Sans KR (OFL)
- **위계**:
  - Display: 56px / 400 / 1.14 / 0
  - H1: 40px / 400 / 1.2 / 0
  - H2: 28px / 400 / 1.29 / 0
  - H3: 22px / 500 / 1.36 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 500 / 1.36 / 0.04em (uppercase)

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
  --space-3xl: 64px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
--shadow-md: 0 4px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 16px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.16);
```

### ⑧ Iconography
- **스타일**: Outline (Canvas Kit 시스템 아이콘)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: @workday/canvas-system-icons-web (Apache 2.0) / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1 "Roboto", "Noto Sans KR", sans-serif;
  border-radius: var(--radius-full);   /* Canvas는 pill */
  padding: 0 20px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid transparent;
  transition: background 150ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border-color: var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-primary-50); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 6px 12px;
  height: 36px;
  font-size: 14px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(8,117,225,0.30); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-subtle); }
```

**Badge**
```css
.badge { padding: 0 8px; height: 20px; border-radius: var(--radius-full); font-size: 11px; font-weight: 500; line-height: 20px; text-transform: uppercase; letter-spacing: 0.04em; display: inline-flex; align-items: center; }
.badge-solid   { background: var(--color-primary-500); color: #fff; }
.badge-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.badge-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Global Header)**
```css
.global-header { height: 56px; background: var(--bg-elevated); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; padding: 0 24px; gap: 16px; }
.global-header .brand { font-weight: 700; color: var(--color-primary-500); font-size: 18px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
```

### ⑪ Anti-patterns
1. 채도 높은 액센트 색을 데이터 테이블 셀 배경에 사용 금지 — 가독성 저하
2. 한 화면에 4단계 이상 elevation 중첩 금지
3. button을 사각형(>4px round 미만)으로 변경 금지 — Canvas의 pill 시그니처
4. Roboto 본문에 italic 단락 사용 금지 — 엔터프라이즈 톤 위배
5. 사용자 데이터 위에 brand 그라데이션 배경 금지 (추정)

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Roboto", "Noto Sans KR", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .global-header { /* 위 정의 */ }
  .container { max-width: 1280px; margin: 24px auto; padding: 0 24px; display: grid; grid-template-columns: 240px 1fr; gap: 24px; }
  .sidebar { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 12px; box-shadow: var(--shadow-sm); height: fit-content; }
  .sidebar a { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: var(--radius-md); color: var(--text-primary); font-size: 14px; }
  .sidebar a.active { background: var(--color-primary-50); color: var(--color-primary-700); font-weight: 500; }
  .sidebar a:hover:not(.active) { background: var(--bg-subtle); }
  .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .feature-card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); }
  .feature-card .num { font-size: 32px; font-weight: 400; line-height: 1.2; margin: 8px 0 4px; }
  .feature-card .label { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-secondary); }
  .feature-card .delta { font-size: 13px; color: var(--color-success-fg); margin-top: 8px; }
</style>

<header class="global-header">
  <span class="brand">Workday</span>
  <input class="input" placeholder="작업, 사람, 보고서 검색…" style="flex:1; max-width:480px"/>
  <button class="btn btn-ghost">알림</button>
  <button class="btn btn-primary">+</button>
</header>

<div class="container">
  <aside class="sidebar">
    <a class="active">▦ 홈</a>
    <a>👥 인사</a>
    <a>$ 재무</a>
    <a>📈 분석</a>
    <a>⚙ 설정</a>
  </aside>
  <main class="features">
    <div class="feature-card">
      <div class="label">입사 예정</div>
      <div class="num">12</div>
      <div class="delta">▲ 다음 30일</div>
    </div>
    <div class="feature-card">
      <div class="label">이번 분기 비용</div>
      <div class="num">$ 2.4M</div>
      <span class="badge badge-subtle">예산 내</span>
    </div>
    <div class="feature-card">
      <div class="label">대기 중 결재</div>
      <div class="num">28</div>
      <button class="btn btn-secondary" style="margin-top:8px">처리하기</button>
    </div>
  </main>
</div>
```
