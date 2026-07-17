---
brand: Salesforce Lightning Design System
brand_ko: 세일즈포스 라이트닝 디자인 시스템
slug: salesforce-lightning
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - enterprise

color_tone: cool
primary_color_hex: "#1B96FF"
primary_color_name: "Salesforce Blue"
mood:
  - 신뢰
  - 명료
  - 효율

font_category: sans-serif
font_primary: Salesforce Sans
font_korean_supported: true

density: compact
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2014
last_major_revision: 2024
signature_keyword: "구름 모티프와 Salesforce Blue가 만드는 Trailblazer CRM 톤"

hero_html: |
  <div style="font-family:'Salesforce Sans',Arial,sans-serif;background:#F3F3F3;color:#181818;padding:0;height:100%;display:grid;grid-template-rows:auto auto 1fr;">
    <div style="background:linear-gradient(135deg,#032D60 0%,#1B96FF 100%);color:#fff;padding:8px 14px;font-size:13px;display:flex;align-items:center;gap:8px;">
      <span style="width:24px;height:24px;background:rgba(255,255,255,0.18);border-radius:4px;display:inline-grid;place-items:center;font-size:10px;letter-spacing:-2px;">⋮⋮⋮</span>
      <span style="font-weight:700;">Sales</span>
    </div>
    <div style="background:#fff;border:1px solid #DDDBDA;border-radius:4px;margin:10px;padding:12px;display:flex;align-items:center;gap:10px;">
      <div style="width:32px;height:32px;border-radius:4px;background:linear-gradient(135deg,#57A3FD,#1B96FF);display:grid;place-items:center;color:#fff;font-weight:700;font-size:13px;">A</div>
      <div>
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#444;">ACCOUNT</div>
        <div style="font-size:16px;font-weight:700;line-height:1.2;">Acme Corp</div>
      </div>
    </div>
    <div style="padding:0 10px 10px;display:grid;gap:6px;">
      <div style="background:#fff;border:1px solid #DDDBDA;border-radius:4px;padding:8px 12px;font-size:11px;display:flex;justify-content:space-between;"><span>업종</span><strong>SaaS</strong></div>
      <div style="background:#fff;border:1px solid #DDDBDA;border-radius:4px;padding:8px 12px;font-size:11px;display:flex;justify-content:space-between;"><span>연 매출</span><strong>$24M</strong></div>
      <button style="background:#0176D3;color:#fff;border:0;border-radius:4px;padding:6px 12px;font-size:11px;font-family:inherit;align-self:flex-end;">새 기회 생성</button>
    </div>
  </div>

sources:
  - https://www.lightningdesignsystem.com/
  - https://www.lightningdesignsystem.com/design-tokens/
  - https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Brand/sf-brand-guidelines.pdf
---

### ① 브랜드 DNA
- **브랜드명**: Salesforce Lightning Design System (SLDS)
- **한 줄 정체성**: CRM 데이터 화면을 신뢰감 있게 다루는, 클라우드 우선 엔터프라이즈 시스템
- **공식 디자인 철학**: "Clarity. Efficiency. Consistency. Beauty." (4 Design Principles)
- **시그니처 요소 1개**: Salesforce Blue(#1B96FF) + 구름 모티프 + Salesforce Sans 폰트가 만드는 Trailblazer 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 명료, 효율
- **무드 설명**: 흰 캔버스, 명확한 표 구조, 절제된 블루 액센트. 데이터가 많은 화면에서도 위계가 흐트러지지 않는다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — 영업/서비스 콘솔의 표 위주 작업에 최적화
- **모서리 성향**: Soft (4px 기본)
- **평면성**: Subtle — 그림자 1~2단계, 라인 위주

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Salesforce Blue */
  --color-primary-50:  #EAF5FE;
  --color-primary-100: #D8EDFF;
  --color-primary-200: #AACBFF;
  --color-primary-300: #57A3FD;
  --color-primary-400: #2E84FB;
  --color-primary-500: #1B96FF;  /* SLDS brand 기본 */
  --color-primary-600: #0176D3;  /* hover */
  --color-primary-700: #014486;
  --color-primary-800: #032D60;
  --color-primary-900: #001639;

  /* Secondary - Sky/Cloud */
  --color-secondary-500: #0D9DDA;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F3F3F3;  /* background */
  --color-neutral-100:  #ECEBEA;
  --color-neutral-200:  #DDDBDA;  /* border */
  --color-neutral-300:  #C9C7C5;
  --color-neutral-500:  #939393;
  --color-neutral-700:  #706E6B;
  --color-neutral-800:  #514F4D;
  --color-neutral-900:  #181818;
  --color-neutral-1000: #080707;

  /* Semantic */
  --color-success-bg: #CDEFC4;
  --color-success-fg: #2E844A;
  --color-warning-bg: #FEF1B5;
  --color-warning-fg: #DD7A01;
  --color-error-bg:   #FEDED7;
  --color-error-fg:   #BA0517;
  --color-info-bg:    #D8EDFF;
  --color-info-fg:    #0176D3;

  /* Surface */
  --bg-base:     #F3F3F3;        /* SLDS default page */
  --bg-subtle:   #FAFAF9;
  --bg-elevated: #FFFFFF;        /* card */
  --bg-overlay:  #FFFFFF;

  /* Text */
  --text-primary:    #181818;
  --text-secondary:  #444444;
  --text-tertiary:   #706E6B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C9C7C5;

  /* Border */
  --border-default: #DDDBDA;
  --border-subtle:  #ECEBEA;
  --border-strong:  #939393;
  --border-focus:   #1589EE;
}

[data-theme="dark"] {
  --bg-base: #181818;
  --bg-subtle: #2E2E2E;
  --bg-elevated: #444444;
  --text-primary: #F3F3F3;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Salesforce Sans (Salesforce 라이선스, 웹 폴백 Arial / "Helvetica Neue")
  - 한글: Apple SD Gothic Neo / Malgun Gothic (시스템 폴백)
- **위계** (SLDS sizing scale):
  - Display: 32px / 300 / 1.25 / 0
  - H1: 24px / 300 / 1.25 / 0
  - H2: 20px / 700 / 1.25 / 0
  - H3: 18px / 700 / 1.25 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 700 / 1.27 / 0.06em (uppercase)

### ⑤ 스페이싱
- **Base unit**: 4px (SLDS spacing-xx-small ~ xxx-large)
- **토큰**:
  ```css
  --space-xs:  4px;     /* xx-small */
  --space-sm:  8px;     /* x-small */
  --space-md: 12px;     /* small */
  --space-lg: 16px;     /* medium */
  --space-xl: 24px;     /* large */
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 16px (mobile) / 24px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 0.125rem;   /* 2px */
--radius-md: 0.25rem;    /* 4px — 기본 */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 1rem;       /* 16px */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 2px 2px 0 rgba(0,0,0,0.10);                /* card */
--shadow-md: 0 2px 4px 0 rgba(0,0,0,0.15);                /* hover */
--shadow-lg: 0 2px 8px 0 rgba(0,0,0,0.20);                /* dropdown */
--shadow-xl: 0 16px 32px 0 rgba(0,0,0,0.25);              /* modal */
```

### ⑧ Iconography
- **스타일**: Filled (SLDS Icons는 utility/standard/action/custom/doctype 분류)
- **Stroke 굵기**: N/A (filled 글리프)
- **모서리 처리**: Round (1.5px corner)
- **추천 라이브러리**: SLDS Icons (CC BY-ND, 1,000+) / Lightning Icons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 400 13px/1.875 "Salesforce Sans", Arial, sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 4px;
  border: 1px solid var(--border-default);
  background: var(--bg-elevated);
  color: var(--color-primary-600);
  transition: background 50ms ease;
}
.btn:hover { background: var(--bg-subtle); color: var(--color-primary-700); }
.btn-primary { background: var(--color-primary-600); border-color: var(--color-primary-600); color: #fff; }
.btn-primary:hover { background: var(--color-primary-700); border-color: var(--color-primary-700); }
.btn-primary:active { background: var(--color-primary-800); }
.btn-primary:disabled { background: var(--color-neutral-200); border-color: var(--color-neutral-200); color: var(--text-disabled); }

.btn-secondary { /* default */ }
.btn-ghost { background: transparent; border-color: transparent; color: var(--color-primary-600); }
.btn-danger { background: var(--color-error-fg); border-color: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 12px;
  height: 32px;
  font-size: 13px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 3px var(--border-focus); }
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 3px var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); }
.card-header { padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 8px; }
.card-body { padding: 12px 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.badge { padding: 0 8px; height: 20px; border-radius: var(--radius-full); font-size: 11px; font-weight: 700; line-height: 20px; display: inline-flex; align-items: center; }
.badge-solid   { background: var(--color-primary-600); color: #fff; }
.badge-subtle  { background: var(--color-neutral-100); color: var(--text-primary); }
.badge-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Global Header)**
```css
.global-header { height: 56px; background: linear-gradient(135deg, #032D60 0%, #1B96FF 100%); color: #fff; display: flex; align-items: center; padding: 0 16px; gap: 16px; }
.global-header .app-launcher { width: 32px; height: 32px; background: rgba(255,255,255,0.15); border-radius: var(--radius-md); display: grid; place-items: center; cursor: pointer; }
```

### ⑩ Motion
```css
--duration-fast: 50ms;
--duration-base: 200ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
```

### ⑪ Anti-patterns
1. SLDS 표준 Page Header 외에 large display 폰트 사용 금지
2. utility 아이콘과 standard 아이콘을 한 위치에 혼용 금지 — 스케일/스타일 충돌
3. CRM 레코드 페이지에 풀폭 그라데이션 배경 금지 — 데이터 가독성 저하
4. 한 화면에 4단계 이상 elevation 중첩 금지
5. 본문 텍스트에 #1B96FF brand blue 사용 금지 — 액션 신호 흐려짐

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Salesforce Sans", Arial, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .global-header { /* 위 정의 */ }
  .container { padding: 16px; }
  .page-header { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 16px 24px; margin-bottom: 12px; display: flex; align-items: center; gap: 16px; }
  .page-header .icon-tile { width: 40px; height: 40px; border-radius: var(--radius-md); background: linear-gradient(135deg, #57A3FD, #1B96FF); display: grid; place-items: center; color: #fff; font-weight: 700; }
  .page-header .title { display: flex; flex-direction: column; }
  .page-header .eyebrow { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); }
  .page-header h1 { margin: 0; font-size: 20px; font-weight: 700; }
  .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .feature-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); }
  .feature-card .head { display: flex; align-items: center; gap: 8px; padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); }
  .feature-card .head .dot { width: 24px; height: 24px; border-radius: 4px; background: var(--color-primary-50); color: var(--color-primary-600); display: grid; place-items: center; }
  .feature-card h3 { margin: 0; font-size: 14px; font-weight: 700; }
  .feature-card .body { padding: 12px 16px; font-size: 13px; line-height: 1.5; color: var(--text-secondary); }
  .feature-card .row { display: flex; justify-content: space-between; padding: 6px 0; }
  .feature-card .row span:last-child { font-weight: 700; color: var(--text-primary); }
</style>

<header class="global-header">
  <div class="app-launcher">⋮⋮⋮</div>
  <span style="font-weight:700">Sales</span>
  <span style="opacity:0.8">|  Lightning Experience</span>
</header>

<div class="container">
  <div class="page-header">
    <div class="icon-tile">A</div>
    <div class="title">
      <span class="eyebrow">Account</span>
      <h1>Acme Corp</h1>
    </div>
    <div style="margin-left:auto; display:flex; gap:8px">
      <button class="btn">편집</button>
      <button class="btn btn-primary">새 기회 생성</button>
    </div>
  </div>
  <div class="features">
    <div class="feature-card">
      <div class="head"><div class="dot">📊</div><h3>핵심 정보</h3></div>
      <div class="body"><div class="row"><span>업종</span><span>SaaS</span></div><div class="row"><span>연 매출</span><span>$ 24M</span></div><div class="row"><span>직원</span><span>312</span></div></div>
    </div>
    <div class="feature-card">
      <div class="head"><div class="dot">🤝</div><h3>오픈 기회</h3></div>
      <div class="body"><div class="row"><span>Q3 Renewal</span><span class="badge badge-subtle">진행</span></div><div class="row"><span>Add-on Module</span><span class="badge badge-solid">Closing</span></div></div>
    </div>
    <div class="feature-card">
      <div class="head"><div class="dot">📞</div><h3>최근 활동</h3></div>
      <div class="body">2일 전 — 이메일<br/>5일 전 — 미팅 노트<br/>지난 주 — 통화 (24분)</div>
    </div>
  </div>
</div>
```
