---
brand: Procreate
brand_ko: 프로크리에이트
slug: procreate
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - creative-tools

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Procreate Black"
mood:
  - 아이패드
  - 브러시
  - 캔버스미니멀

font_category: sans-serif
font_primary: SF Pro
font_korean_supported: true

density: spacious
corner_style: round
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2011
last_major_revision: 2024
signature_keyword: "검정·흰 모노 + 다양한 컬러 브러시 + iPad 풀스크린 캔버스의 일러스트 톤"

hero_html: |
  <div style="font-family:-apple-system,'SF Pro Display','Pretendard',sans-serif;background:#1A1A1A;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="padding:8px 14px;display:flex;align-items:center;gap:6px;">
      <strong style="font-size:12px;font-weight:600;letter-spacing:-0.005em;">갤러리</strong>
      <span style="margin-left:auto;font-size:9px;color:#A0A0A0;">선택 ⋯</span>
    </div>
    <div style="padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#FFB084 0%,#E73F58 50%,#5A2A8C 100%);border-radius:6px;padding:6px;color:#fff;font-size:8px;display:flex;align-items:flex-end;box-shadow:0 6px 16px rgba(0,0,0,0.40);">제목 없는 그림</div>
      <div style="aspect-ratio:1;background:linear-gradient(180deg,#7AC4D5 0%,#2E5C7E 100%);border-radius:6px;padding:6px;color:#fff;font-size:8px;display:flex;align-items:flex-end;box-shadow:0 6px 16px rgba(0,0,0,0.40);">하늘</div>
      <div style="aspect-ratio:1;background:#0A0A0A;border-radius:6px;padding:6px;color:rgba(255,255,255,0.5);font-size:8px;display:flex;align-items:center;justify-content:center;border:1px dashed rgba(255,255,255,0.20);">＋</div>
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#F5E5C8 0%,#A88958 100%);border-radius:6px;padding:6px;color:#3A2A1A;font-size:8px;display:flex;align-items:flex-end;box-shadow:0 6px 16px rgba(0,0,0,0.40);">사막 풍경</div>
    </div>
    <div style="background:#0A0A0A;padding:6px 12px;display:flex;align-items:center;gap:8px;font-size:9px;color:#A0A0A0;border-top:1px solid #2A2A2A;">
      <span style="font-variant-numeric:tabular-nums;">12개 작품</span>
      <span style="margin-left:auto;color:#fff;font-weight:500;">스택</span>
    </div>
  </div>

sources:
  - https://procreate.com/
  - https://procreate.com/handbook
---

### ① 브랜드 DNA
- **브랜드명**: Procreate
- **한 줄 정체성**: iPad 전용 페인팅·일러스트 앱 — Apple Pencil의 표준 캔버스
- **공식 디자인 철학**: "Disappear so the work doesn't" — UI가 사라지는 캔버스 중심 톤
- **시그니처 요소 1개**: 검정 캔버스 + 흰 텍스트 + 다양한 컬러 브러시 미리보기 + 갤러리 카드 그라데이션. UI가 최소화되고 캔버스가 풀스크린

### ② 톤 & 무드
- **핵심 키워드 3개**: 아이패드, 브러시, 캔버스미니멀
- **무드 설명**: 다크 모노 캔버스 + 그림 미리보기는 다양한 컬러 그라데이션. UI 칩은 둥글고 검정 위에 떠있다. 작은 텍스트와 아이콘. 작품 자체가 주인공.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Spacious
- **모서리 성향**: Round (8~14px)
- **평면성**: Layered — 갤러리 카드 그림자

### ③ 컬러 시스템 (CSS 변수)
```css
:root {
  /* Primary - Procreate Black */
  --color-primary-50:  #F7F7F7;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #BFBFBF;
  --color-primary-300: #8A8A8A;
  --color-primary-400: #4A4A4A;
  --color-primary-500: #000000;
  --color-primary-600: #000000;
  --color-primary-700: #000000;
  --color-primary-800: #000000;
  --color-primary-900: #000000;

  /* Secondary - Brush rainbow (작품 그라데이션 톤) */
  --color-brush-coral:  #E73F58;
  --color-brush-amber:  #F5A623;
  --color-brush-mint:   #7AC4D5;
  --color-brush-plum:   #5A2A8C;
  --color-brush-sand:   #F5E5C8;

  /* Neutral - dark scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #EEEEEE;
  --color-neutral-200:  #C0C0C0;
  --color-neutral-300:  #8A8A8A;
  --color-neutral-500:  #555555;
  --color-neutral-700:  #2A2A2A;
  --color-neutral-800:  #1A1A1A;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #0F2A1A;
  --color-success-fg: #34C273;
  --color-warning-bg: #2A2010;
  --color-warning-fg: #FFB84F;
  --color-error-bg:   #2A0F18;
  --color-error-fg:   #FF4D6D;
  --color-info-bg:    #1A2A3A;
  --color-info-fg:    #4FA0FF;

  /* Surface */
  --bg-base:     #1A1A1A;
  --bg-subtle:   #0A0A0A;
  --bg-elevated: #2A2A2A;
  --bg-canvas:   #FFFFFF;     /* 종이 캔버스 */
  --bg-overlay:  rgba(0,0,0,0.80);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.78);
  --text-tertiary:   #A0A0A0;
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(255,255,255,0.28);

  /* Border */
  --border-default: rgba(255,255,255,0.10);
  --border-subtle:  rgba(255,255,255,0.05);
  --border-strong:  rgba(255,255,255,0.20);
  --border-focus:   #FFFFFF;
}

[data-theme="light"] {
  --bg-base: #FFFFFF;
  --bg-subtle: #F7F7F7;
  --bg-elevated: #FFFFFF;
  --text-primary: #000000;
  --text-secondary: #2A2A2A;
  --text-tertiary: #555555;
  --border-default: #EEEEEE;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: SF Pro Display / SF Pro Text (Apple Native)
  - 한글: Apple SD Gothic Neo / Pretendard
- **위계**:
  - Display: 36px / 700 / 1.15 / -0.01em
  - H1: 22px / 600 / 1.2 / -0.005em
  - H2: 17px / 600 / 1.3 / 0
  - H3: 14px / 600 / 1.35 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 13px / 400 / 1.45 / 0
  - Body Small: 12px / 500 / 1.4 / 0
  - Caption: 11px / 600 / 1.3 / 0.02em
  - Numeric: 13px / 500 tabular-nums

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 36px;
  --space-2xl: 56px;
  --space-3xl: 80px;
  ```
- **Container**: iPad 풀스크린 (1024~1366), 좌우 패딩 20px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-xl: 22px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.30);
--shadow-md: 0 6px 16px rgba(0,0,0,0.40);
--shadow-lg: 0 16px 32px rgba(0,0,0,0.55);
```

### ⑧ Iconography
- **스타일**: Outline (얇은 선) + SF Symbols
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: SF Symbols / Phosphor 폴백

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 -apple-system, 'SF Pro Text', Inter, sans-serif; border-radius: 9999px; padding: 10px 18px; border: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background 150ms ease; }
.btn-primary { background: rgba(255,255,255,0.16); color: #fff; backdrop-filter: blur(20px); }
.btn-primary:hover { background: rgba(255,255,255,0.24); }
.btn-secondary { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.30); }
.btn-secondary:hover { border-color: #fff; }
.btn-ghost { background: transparent; color: rgba(255,255,255,0.78); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-pill { background: #fff; color: #000; padding: 8px 16px; }
.btn-tool { width: 44px; height: 44px; padding: 0; border-radius: 50%; background: rgba(255,255,255,0.10); color: #fff; backdrop-filter: blur(20px); }
```

**Input**
```css
.input { background: rgba(255,255,255,0.08); border: 1px solid transparent; border-radius: 9999px; padding: 10px 18px; color: #fff; font: 400 14px/1.3 inherit; }
.input::placeholder { color: var(--text-tertiary); }
.input:focus { outline: none; background: rgba(255,255,255,0.14); }
```

**Card (Artwork)**
```css
.artwork { background: var(--bg-elevated); border-radius: 8px; cursor: pointer; transition: transform 250ms ease, box-shadow 250ms ease; position: relative; }
.artwork:hover { transform: scale(1.02); }
.artwork .img { aspect-ratio: 1; border-radius: 8px; background: linear-gradient(135deg, var(--color-brush-amber), var(--color-brush-coral) 50%, var(--color-brush-plum)); box-shadow: var(--shadow-md); position: relative; overflow: hidden; }
.artwork .label { position: absolute; left: 12px; bottom: 12px; font: 500 12px/1.3 inherit; color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,0.50); }
.artwork .duration { position: absolute; right: 12px; top: 12px; background: rgba(0,0,0,0.45); color: #fff; font: 500 11px/1 inherit; padding: 4px 8px; border-radius: 9999px; font-variant-numeric: tabular-nums; backdrop-filter: blur(10px); }
.brush-chip { background: rgba(255,255,255,0.08); border-radius: 14px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; cursor: pointer; }
.brush-chip:hover { background: rgba(255,255,255,0.14); }
.brush-chip .stroke { flex: 1; }
.brush-chip .name { font: 500 13px/1.3 inherit; color: #fff; }
.brush-chip .opt { font: 500 11px/1 inherit; color: var(--text-tertiary); font-variant-numeric: tabular-nums; }
.card { background: var(--bg-elevated); border-radius: 14px; padding: 18px; border: 1px solid var(--border-default); }
```

**Badge / Tag**
```css
.tag { padding: 4px 10px; border-radius: 9999px; font: 600 11px/1.4 inherit; }
.tag-new       { background: rgba(255,255,255,0.16); color: #fff; }
.tag-imported  { background: rgba(79,160,255,0.20); color: var(--color-info-fg); }
.tag-time-lapse{ background: rgba(255,184,79,0.20); color: var(--color-warning-fg); }
.tag-shared    { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-dream     { background: linear-gradient(90deg, var(--color-brush-coral), var(--color-brush-plum)); color: #fff; }
```

**Navigation (Top bar)**
```css
.topbar { padding: 14px 22px; display: flex; align-items: center; gap: 20px; font: 500 14px/1 inherit; }
.topbar .left { display: flex; gap: 18px; color: var(--text-secondary); }
.topbar .left .a { cursor: pointer; }
.topbar .left .a.active { color: #fff; font-weight: 600; }
.topbar .right { margin-left: auto; display: flex; gap: 14px; align-items: center; color: var(--text-secondary); }
.topbar .right .pill { background: rgba(255,255,255,0.10); padding: 8px 16px; border-radius: 9999px; color: #fff; font: 500 13px/1 inherit; cursor: pointer; backdrop-filter: blur(20px); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 280ms;
--duration-slow: 450ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 갤러리 카드 색을 단일 톤으로 변경 금지 — 컬러풀 그라데이션이 정체성
2. UI 칩을 sharp 사각으로 변경 금지 — 풀필 pill 또는 라운드 8~14px
3. 라이트 모드를 기본 캔버스로 사용 금지 — 다크가 표준 (갤러리)
4. 작품 사진을 텍스트로 가리기 금지 — 작품이 주인공
5. 헤더 라벨에 글로벌 본문 폰트 사용 금지 — SF Pro Apple Native

### ⑫ 시그니처 적용 예시 (Gallery)
```html
<style>
  body { margin: 0; font-family: -apple-system, 'SF Pro Text', 'Pretendard', sans-serif; background: #1A1A1A; color: #fff; min-height: 100vh; }
  .topbar { padding: 18px 28px; display: flex; align-items: center; gap: 22px; font: 500 15px/1 inherit; }
  .topbar .left { display: flex; gap: 20px; color: rgba(255,255,255,0.7); }
  .topbar .left .a { cursor: pointer; }
  .topbar .left .a.active { color: #fff; font-weight: 600; }
  .topbar .right { margin-left: auto; display: flex; gap: 12px; align-items: center; color: rgba(255,255,255,0.7); }
  .topbar .right .pill { background: rgba(255,255,255,0.10); padding: 9px 18px; border-radius: 9999px; color: #fff; font: 500 14px/1 inherit; cursor: pointer; backdrop-filter: blur(20px); }
  .topbar .right .pill.solid { background: #fff; color: #000; font-weight: 600; }
  .container { max-width: 1240px; margin: 0 auto; padding: 0 28px 60px; }
  h1 { margin: 0 0 6px; font: 700 32px/1.1 inherit; letter-spacing: -0.01em; }
  .sub { font: 500 14px/1.4 inherit; color: rgba(255,255,255,0.6); margin: 0 0 28px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .artwork { cursor: pointer; transition: transform 250ms ease; position: relative; }
  .artwork:hover { transform: scale(1.02); }
  .artwork .img { aspect-ratio: 1; border-radius: 10px; box-shadow: 0 14px 28px rgba(0,0,0,0.45); position: relative; overflow: hidden; }
  .artwork .label { position: absolute; left: 14px; bottom: 12px; font: 600 13px/1.3 inherit; color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,0.50); }
  .artwork .duration { position: absolute; right: 12px; top: 12px; background: rgba(0,0,0,0.45); color: #fff; font: 500 11px/1 inherit; padding: 5px 10px; border-radius: 9999px; font-variant-numeric: tabular-nums; backdrop-filter: blur(10px); }
  .artwork .tag-strip { position: absolute; left: 12px; top: 12px; background: rgba(0,0,0,0.45); color: #fff; font: 600 10px/1 inherit; padding: 5px 10px; border-radius: 9999px; letter-spacing: 0.04em; text-transform: uppercase; backdrop-filter: blur(10px); }
  .artwork.add .img { background: #0A0A0A; border: 1.5px dashed rgba(255,255,255,0.25); display: grid; place-items: center; font-size: 36px; color: rgba(255,255,255,0.55); box-shadow: none; }
  .meta-row { display: flex; justify-content: space-between; padding: 10px 4px 0; font: 500 12px/1.3 inherit; color: rgba(255,255,255,0.6); }
  .meta-row .name { color: #fff; font-weight: 500; }
  .meta-row .v { font-variant-numeric: tabular-nums; }
</style>

<header class="topbar">
  <div class="left">
    <span class="a active">갤러리</span>
    <span class="a">선택</span>
    <span class="a">가져오기</span>
    <span class="a">사진</span>
  </div>
  <div class="right">
    <span class="pill">＋ 캔버스 만들기</span>
  </div>
</header>

<main class="container">
  <h1>최근 작품</h1>
  <p class="sub">42개의 작품 · 12.4 GB 사용 중</p>
  <section class="grid">
    <div class="artwork">
      <div class="img" style="background:linear-gradient(135deg,#F5A623 0%,#E73F58 50%,#5A2A8C 100%);">
        <span class="tag-strip">새 작품</span>
        <span class="duration">2h 14m</span>
        <span class="label">제목 없는 그림</span>
      </div>
      <div class="meta-row"><span class="name">제목 없는 그림</span><span class="v">2,048 × 2,732</span></div>
    </div>
    <div class="artwork">
      <div class="img" style="background:linear-gradient(180deg,#7AC4D5 0%,#2E5C7E 100%);">
        <span class="duration">4h 38m</span>
        <span class="label">하늘</span>
      </div>
      <div class="meta-row"><span class="name">하늘</span><span class="v">2,560 × 1,440</span></div>
    </div>
    <div class="artwork">
      <div class="img" style="background:linear-gradient(135deg,#F5E5C8 0%,#A88958 60%,#3A2A1A 100%);">
        <span class="duration">5h 02m</span>
        <span class="label" style="color:#1A1A1A;text-shadow:none;">사막 풍경</span>
      </div>
      <div class="meta-row"><span class="name">사막 풍경</span><span class="v">3,300 × 2,550</span></div>
    </div>
    <div class="artwork">
      <div class="img" style="background:linear-gradient(135deg,#1A1A1A 0%,#5A2A8C 60%,#E73F58 100%);">
        <span class="tag-strip" style="background:linear-gradient(90deg,#E73F58,#5A2A8C);">DREAM</span>
        <span class="duration">8h 52m</span>
        <span class="label">밤의 정원</span>
      </div>
      <div class="meta-row"><span class="name">밤의 정원</span><span class="v">4,096 × 4,096</span></div>
    </div>
    <div class="artwork">
      <div class="img" style="background:linear-gradient(135deg,#F5E5C8 0%,#F5A623 80%);">
        <span class="duration">1h 24m</span>
        <span class="label" style="color:#3A2A1A;text-shadow:none;">정물</span>
      </div>
      <div class="meta-row"><span class="name">정물</span><span class="v">2,048 × 2,048</span></div>
    </div>
    <div class="artwork">
      <div class="img" style="background:linear-gradient(135deg,#FFB084 0%,#E73F58 100%);">
        <span class="duration">3h 18m</span>
        <span class="label">레터링</span>
      </div>
      <div class="meta-row"><span class="name">레터링</span><span class="v">2,732 × 2,048</span></div>
    </div>
    <div class="artwork">
      <div class="img" style="background:linear-gradient(180deg,#2A2A2A 0%,#0A0A0A 100%);">
        <span class="duration">0h 38m</span>
        <span class="label">스케치</span>
      </div>
      <div class="meta-row"><span class="name">스케치 12</span><span class="v">1,920 × 1,080</span></div>
    </div>
    <div class="artwork add">
      <div class="img">＋</div>
      <div class="meta-row"><span class="name" style="color:rgba(255,255,255,0.6);">새 캔버스</span></div>
    </div>
  </section>
</main>
```
