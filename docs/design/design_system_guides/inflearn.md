---
brand: Inflearn
brand_ko: 인프런
slug: inflearn
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - consumer
  - productivity

color_tone: cool
primary_color_hex: "#00C471"
primary_color_name: "Inflearn Green"
mood:
  - 학습
  - 명확
  - 신뢰

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2015
last_major_revision: 2024
signature_keyword: "차분한 그린 + 흰 캔버스의 한국 개발자 에듀테크 표준"

hero_html: |
  <div style="font-family:Pretendard,-apple-system,sans-serif;background:#fff;color:#1F2937;height:100%;display:grid;grid-template-rows:auto 1fr;letter-spacing:-0.01em;">
    <div style="background:#fff;border-bottom:1px solid #E5E7EB;padding:12px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:900;color:#00C471;letter-spacing:-0.025em;">인프런</strong>
      <span style="margin-left:auto;font-size:11px;color:#6B7280;font-weight:700;">🔍 ⓜ</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:12px;">
      <div style="background:#F0FAF5;border:1px solid #B8EBD0;border-radius:10px;padding:14px;">
        <div style="font:700 11px/1.4 inherit;color:#00C471;">INFLEARN ORIGINALS</div>
        <div style="font:800 16px/1.3 inherit;margin-top:4px;">실전 React 19 마스터하기</div>
        <div style="font:600 11px/1.4 inherit;color:#6B7280;margin-top:2px;">김민준 · 12시간 32강</div>
        <div style="display:flex;align-items:baseline;gap:6px;margin-top:8px;">
          <span style="font:900 18px/1.2 inherit;color:#1F2937;">99,000<small style="font-size:12px;font-weight:800;">원</small></span>
          <span style="font:700 11px/1.3 inherit;color:#9CA3AF;text-decoration:line-through;">132,000원</span>
          <span style="font:900 12px/1.2 inherit;color:#00C471;">25% ↓</span>
        </div>
      </div>
      <div style="background:#fff;border:1px solid #E5E7EB;border-radius:10px;padding:10px;display:grid;grid-template-columns:64px 1fr;gap:10px;align-items:center;">
        <div style="aspect-ratio:16/10;background:linear-gradient(135deg,#00C471,#059669);border-radius:6px;display:grid;place-items:center;color:#fff;font:900 14px/1 inherit;">R</div>
        <div>
          <div style="font:700 12px/1.4 inherit;">TypeScript 완전 정복</div>
          <div style="font:600 10px/1.4 inherit;color:#6B7280;margin-top:1px;">이호준 · ⭐ 4.8 · 수강 12,800명</div>
          <div style="font:900 13px/1.2 inherit;color:#1F2937;margin-top:4px;">66,000<small style="font-size:10px;font-weight:800;">원</small></div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.inflearn.com/
  - https://www.inflab.com/
---

### ① 브랜드 DNA
- **브랜드명**: Inflearn (인프런)
- **한 줄 정체성**: 한국 개발자 중심 에듀테크 — 강의 마켓플레이스 + 커뮤니티
- **공식 디자인 철학**: "배움 그 이상의 성장" — 명확한 정보 + 학습자 친화 UI
- **시그니처 요소 1개**: 인프런 그린(#00C471) — Toss Blue·G마켓 그린과 다른 청량하면서 차분한 톤. 흰 캔버스에 그린 액센트가 강의 카드 곳곳에 일관 적용

### ② 톤 & 무드
- **핵심 키워드 3개**: 학습, 명확, 신뢰
- **무드 설명**: 흰색 깔끔한 캔버스 + 그린 액센트. 강의 자켓은 그라데이션이나 단색, 카드 보더 1px. 가격·할인% 강조는 그린, 본문은 검정 가까운 다크 그레이(#1F2937).
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 강의 카드 패딩 12~16px
- **모서리 성향**: Soft (6~10px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Inflearn Green */
  --color-primary-50:  #F0FAF5;
  --color-primary-100: #B8EBD0;
  --color-primary-200: #7DDAA8;
  --color-primary-300: #3FC881;
  --color-primary-400: #14BD6A;
  --color-primary-500: #00C471;   /* Inflearn Green */
  --color-primary-600: #00A75E;
  --color-primary-700: #008549;
  --color-primary-800: #056334;
  --color-primary-900: #03421F;

  /* Secondary - Indigo (학습 보조 강조) */
  --color-secondary-500: #5E6AD2;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F9FAFB;
  --color-neutral-100:  #F3F4F6;
  --color-neutral-200:  #E5E7EB;     /* border */
  --color-neutral-300:  #D1D5DB;
  --color-neutral-500:  #9CA3AF;
  --color-neutral-700:  #6B7280;     /* text secondary */
  --color-neutral-800:  #4B5563;
  --color-neutral-900:  #1F2937;     /* text primary */
  --color-neutral-1000: #111827;

  /* Semantic */
  --color-success-bg: #F0FAF5;
  --color-success-fg: #00C471;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #D97706;
  --color-error-bg:   #FEE2E2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E0E7FF;
  --color-info-fg:    #5E6AD2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F9FAFB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(31,41,55,0.55);

  /* Text */
  --text-primary:    #1F2937;
  --text-secondary:  #4B5563;
  --text-tertiary:   #6B7280;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #9CA3AF;

  /* Border */
  --border-default: #E5E7EB;
  --border-subtle:  #F3F4F6;
  --border-strong:  #D1D5DB;
  --border-focus:   #00C471;
}

[data-theme="dark"] {
  --bg-base: #0F1419;
  --bg-subtle: #161B22;
  --bg-elevated: #1E232C;
  --text-primary: #F3F4F6;
  --text-secondary: #B0B8C4;
  --border-default: #2C3340;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **Pretendard** (OFL)
  - 영문: Pretendard Latin / Inter / SF Pro
  - 코드: JetBrains Mono / Source Code Pro
- **위계**:
  - Display: 32px / 900 / 1.2 / -0.025em
  - H1 (강의 제목): 22px / 800 / 1.3 / -0.02em
  - H2 (섹션): 17px / 800 / 1.35 / -0.015em
  - H3 (강의 카드 제목): 14px / 700 / 1.4 / -0.005em
  - Body Large: 15px / 500 / 1.6 / -0.005em
  - Body: 14px / 500 / 1.6 / 0
  - Body Small (강사명/리뷰): 12px / 600 / 1.45 / 0
  - Caption: 11px / 600 / 1.4 / 0
  - Code: 13px / 500 / 1.5 monospace

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
- **Container**: max-width 480px (모바일), 1200px (웹), 좌우 패딩 14px / 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;     /* 자켓 */
--radius-lg: 10px;    /* 카드 */
--radius-xl: 14px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.12);
--shadow-cta: 0 8px 20px rgba(0,196,113,0.30);
```

### ⑧ Iconography
- **스타일**: Outline (메뉴) + Filled (재생/체크)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Heroicons

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: 6px; padding: 12px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: #fff; color: var(--color-primary-500); border: 1px solid var(--color-primary-500); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-buy { background: var(--color-primary-500); color: #fff; padding: 14px 22px; font-weight: 800; font-size: 15px; }
.btn-cart { background: #fff; color: var(--color-primary-500); border: 1.5px solid var(--color-primary-500); padding: 14px 22px; font-weight: 800; font-size: 15px; }
```

**Input**
```css
.search { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 9999px; padding: 10px 16px; font: 500 14px/1.4 inherit; color: var(--text-primary); display: flex; align-items: center; gap: 8px; }
.search:focus-within { border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(0,196,113,0.18); }
```

**Card**
```css
.course { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-lg); overflow: hidden; }
.course .thumb { aspect-ratio: 16/9; background: var(--bg-subtle); position: relative; overflow: hidden; }
.course .body { padding: 12px; }
.course .title { font: 700 14px/1.4 inherit; min-height: 39px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.course .instructor { font: 600 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 6px; }
.course .price { font: 900 16px/1.2 inherit; color: var(--text-primary); margin-top: 6px; font-variant-numeric: tabular-nums; }
.course .price small { font-size: 11px; font-weight: 800; }
.course .discount { display: flex; align-items: baseline; gap: 6px; margin-top: 4px; }
.course .discount .was { color: var(--text-tertiary); text-decoration: line-through; font: 700 12px/1.2 inherit; }
.course .discount .pct { color: var(--color-primary-500); font: 900 13px/1.2 inherit; }
.feature { background: var(--color-primary-50); border: 1px solid var(--color-primary-100); border-radius: var(--radius-lg); padding: 14px; }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 4px; font: 700 11px/1.5 inherit; }
.tag-bestseller { background: var(--color-warning-bg); color: var(--color-warning-fg); }
.tag-new        { background: var(--color-primary-500); color: #fff; }
.tag-original   { background: transparent; color: var(--color-primary-700); border: 1px solid var(--color-primary-500); }
.tag-level      { background: var(--color-info-bg); color: var(--color-info-fg); }
```

**Navigation**
```css
.tabbar { background: #fff; border-top: 1px solid var(--border-default); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 본문에 채도 높은 형광 그린 사용 금지 — Inflearn Green은 약간 차분한 톤 유지
2. 강의 썸네일을 모서리 sharp(0~4px) 사용 금지 — 6~8px 부드러운 라운드 표준
3. 가격·할인% 외 본문에 그린 강조 금지 — 잔치판 방지
4. 본문 weight 400 이하 사용 금지 — 학습 가독성
5. 한 화면에 CTA 두 개 이상 동시 강조 금지 — "수강하기" 단일 강조

### ⑫ 시그니처 적용 예시 (인프런 강의 카탈로그)

```html
<style>
  body { margin: 0; font-family: Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #1F2937; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }
  .topbar { background: #fff; border-bottom: 1px solid #E5E7EB; padding: 12px 14px; display: flex; align-items: center; gap: 12px; position: sticky; top: 0; z-index: 10; }
  .topbar .brand { font-weight: 900; color: #00C471; font-size: 20px; letter-spacing: -0.025em; }
  .topbar nav { display: flex; gap: 14px; font: 700 13px/1 inherit; color: #6B7280; margin-left: 4px; }
  .topbar nav .active { color: #1F2937; }
  .topbar .icons { margin-left: auto; font-size: 16px; color: #6B7280; }
  .home { padding: 14px; display: flex; flex-direction: column; gap: 14px; }
  .hero { background: #F0FAF5; border: 1px solid #B8EBD0; border-radius: 10px; padding: 14px; }
  .hero .label { font: 700 11px/1.4 inherit; color: #00A75E; letter-spacing: 0.02em; }
  .hero h2 { font: 800 18px/1.3 inherit; margin: 4px 0 2px; }
  .hero .meta { font: 600 12px/1.4 inherit; color: #6B7280; }
  .hero .price { display: flex; align-items: baseline; gap: 6px; margin-top: 8px; }
  .hero .price .now { font: 900 20px/1.2 inherit; color: #1F2937; font-variant-numeric: tabular-nums; }
  .hero .price .was { font: 700 12px/1.3 inherit; color: #9CA3AF; text-decoration: line-through; }
  .hero .price .pct { font: 900 13px/1.2 inherit; color: #00C471; }
  .hero button { margin-top: 12px; background: #00C471; color: #fff; border: 0; border-radius: 6px; padding: 12px 18px; font: 800 14px/1 inherit; cursor: pointer; }
  .section h3 { font: 800 15px/1.3 inherit; margin: 0 0 10px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .course { background: #fff; border: 1px solid #E5E7EB; border-radius: 10px; overflow: hidden; }
  .course .thumb { aspect-ratio: 16/10; background: linear-gradient(135deg, #00C471, #059669); display: grid; place-items: center; color: #fff; font: 900 18px/1 inherit; }
  .course .thumb.c2 { background: linear-gradient(135deg, #5E6AD2, #312E81); }
  .course .thumb.c3 { background: linear-gradient(135deg, #F59E0B, #B45309); }
  .course .thumb.c4 { background: linear-gradient(135deg, #1F2937, #6B7280); }
  .course .body { padding: 10px 12px 12px; }
  .course .tags { display: flex; gap: 4px; margin-bottom: 6px; }
  .course .tags .tag { padding: 2px 6px; border-radius: 3px; font: 700 10px/1.5 inherit; }
  .course .tags .new { background: #00C471; color: #fff; }
  .course .tags .best { background: #FEF3C7; color: #D97706; }
  .course .title { font: 700 13px/1.4 inherit; min-height: 36px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .course .instr { font: 600 11px/1.4 inherit; color: #6B7280; margin-top: 4px; }
  .course .meta { font: 600 11px/1.4 inherit; color: #6B7280; margin-top: 2px; }
  .course .price { font: 900 14px/1.2 inherit; color: #1F2937; margin-top: 6px; font-variant-numeric: tabular-nums; }
  .course .price small { font-size: 11px; font-weight: 800; }
  .tabbar { background: #fff; border-top: 1px solid #E5E7EB; display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; position: sticky; bottom: 0; }
  .tabbar .item { padding: 6px; text-align: center; font: 600 11px/1.3 inherit; color: #9CA3AF; }
  .tabbar .item.active { color: #00C471; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">인프런</span>
    <nav><span class="active">홈</span><span>로드맵</span><span>커뮤니티</span></nav>
    <span class="icons">🔍 ⓜ</span>
  </header>
  <main class="home">
    <section class="hero">
      <div class="label">INFLEARN ORIGINALS</div>
      <h2>실전 React 19 마스터하기</h2>
      <div class="meta">김민준 · 12시간 32강 · ⭐ 4.9</div>
      <div class="price"><span class="now">99,000<small>원</small></span><span class="was">132,000원</span><span class="pct">25% ↓</span></div>
      <button>수강하기</button>
    </section>
    <section class="section">
      <h3>지금 인기 강의</h3>
      <div class="grid">
        <div class="course">
          <div class="thumb">R</div>
          <div class="body">
            <div class="tags"><span class="tag new">NEW</span></div>
            <div class="title">TypeScript 완전 정복 — Generic부터 Type Challenges까지</div>
            <div class="instr">이호준</div>
            <div class="meta">⭐ 4.8 · 수강 12,800</div>
            <div class="price">66,000<small>원</small></div>
          </div>
        </div>
        <div class="course">
          <div class="thumb c2">P</div>
          <div class="body">
            <div class="tags"><span class="tag best">BEST</span></div>
            <div class="title">Python 알고리즘 — 코딩 테스트 합격까지</div>
            <div class="instr">박재성</div>
            <div class="meta">⭐ 4.9 · 수강 28,400</div>
            <div class="price">88,000<small>원</small></div>
          </div>
        </div>
        <div class="course">
          <div class="thumb c3">D</div>
          <div class="body">
            <div class="title">Docker & Kubernetes 실전 가이드</div>
            <div class="instr">조재석</div>
            <div class="meta">⭐ 4.7 · 수강 8,420</div>
            <div class="price">77,000<small>원</small></div>
          </div>
        </div>
        <div class="course">
          <div class="thumb c4">N</div>
          <div class="body">
            <div class="title">Next.js 14 — App Router & RSC 마스터</div>
            <div class="instr">이상민</div>
            <div class="meta">⭐ 4.8 · 수강 9,840</div>
            <div class="price">99,000<small>원</small></div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">강의</div>
    <div class="item">로드맵</div>
    <div class="item">대시보드</div>
    <div class="item">My</div>
  </nav>
</div>
```
