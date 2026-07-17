---
brand: Pinterest
brand_ko: 핀터레스트
slug: pinterest
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - lifestyle

color_tone: warm
primary_color_hex: "#E60023"
primary_color_name: "Pinterest Red"
mood:
  - 영감
  - 시각적
  - 발견

font_category: sans-serif
font_primary: Pinterest Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2010
last_major_revision: 2024
signature_keyword: "Pinterest Red save 버튼과 masonry pin grid의 영감 발견 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FAFAFA", "border": "#EFEFEF", "fg": "#111111", "fg_muted": "#767676", "accent": "#E60023" },
    "dark":  { "bg": "#111111", "surface": "#2A2A2A", "border": "#404040", "fg": "#FFFFFF", "fg_muted": "#B8B8B8", "accent": "#E60023" }
  }

hero_html: |
  <div style="font-family:'Pinterest Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:22px;height:22px;background:var(--card-accent);border-radius:50%;color:#fff;display:grid;place-items:center;font-weight:900;font-size:12px;font-family:Georgia,serif;">P</span>
      <strong style="font-size:14px;font-weight:700;">Pinterest</strong>
      <span style="margin-left:auto;font-size:11px;color:var(--card-fg-muted);">interior · 인테리어</span>
    </div>
    <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr;gap:6px;align-items:start;">
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="aspect-ratio:3/4;background:linear-gradient(135deg,#5A2E28,#E60023);border-radius:14px;position:relative;cursor:pointer;">
          <button style="position:absolute;right:6px;top:6px;background:var(--card-accent);color:#fff;border:0;border-radius:9999px;padding:4px 10px;font-size:10px;font-weight:700;font-family:inherit;">저장</button>
        </div>
        <div style="aspect-ratio:1/1;background:linear-gradient(135deg,#16A085,#5A2E28);border-radius:14px;position:relative;"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="aspect-ratio:1/1;background:linear-gradient(135deg,#404040,#1A1A1A);border-radius:14px;position:relative;"></div>
        <div style="aspect-ratio:3/5;background:linear-gradient(135deg,#FFCB00,#E60023);border-radius:14px;position:relative;"></div>
      </div>
    </div>
  </div>

sources:
  - https://www.pinterest.com/
  - https://newsroom.pinterest.com/en/brand
  - https://gestalt.pinterest.systems/
---

### ① 브랜드 DNA
- **브랜드명**: Pinterest
- **한 줄 정체성**: 시각적 영감을 모으고 발견하는, 이미지 큐레이션 플랫폼
- **공식 디자인 철학**: "Bring everyone the inspiration to create a life they love" (Gestalt design system)
- **시그니처 요소 1개**: Pinterest Red(#E60023) 저장 버튼 + masonry(벽돌식) pin 그리드 + 둥근 라운드 카드

### ② 톤 & 무드
- **핵심 키워드 3개**: 영감, 시각적, 발견
- **무드 설명**: 흰 캔버스 위에 다양한 비율의 둥근 이미지 핀이 벽돌식으로 쌓인다. 색은 핀 콘텐츠가 주도하고 UI chrome은 절제된다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (이미지 우선)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (12~16px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Pinterest Red (다크에서도 시그니처 유지) */
  --color-primary-50:  #FFE9EC;
  --color-primary-100: #FFC2C9;
  --color-primary-200: #FF8B96;
  --color-primary-300: #FF5A6E;
  --color-primary-400: #FF3A52;
  --color-primary-500: #FF2740;  /* Pinterest Red — 다크 배경 위 가독성 위해 한 단계 라이트 */
  --color-primary-600: #E60023;  /* 정통 Pinterest Red */
  --color-primary-700: #C8001E;
  --color-primary-800: #A30019;
  --color-primary-900: #7A0013;

  /* Secondary - Gestalt Forest */
  --color-secondary-500: #16A085;

  /* Neutral - 다크 반전 램프 */
  --color-neutral-0:    #0E0E10;   /* 가장 어두운 페이지 바닥 */
  --color-neutral-50:   #161618;
  --color-neutral-100:  #1C1C1F;
  --color-neutral-200:  #242427;
  --color-neutral-300:  #2E2E32;
  --color-neutral-500:  #4A4A4F;
  --color-neutral-700:  #8A8A90;
  --color-neutral-800:  #B8B8B8;
  --color-neutral-900:  #E6E6E6;
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크 배경에서 판독 가능한 채도 */
  --color-success-bg: #133029;
  --color-success-fg: #4ED9B0;
  --color-warning-bg: #3A2A10;
  --color-warning-fg: #F0B454;
  --color-error-bg:   #3A1418;
  --color-error-fg:   #FF6378;
  --color-info-bg:    #12273A;
  --color-info-fg:    #5BA8FF;

  /* Surface */
  --bg-base:     #111111;          /* 페이지 기본 */
  --bg-subtle:   #1B1B1D;          /* 섹션 구분 · 검색창 */
  --bg-elevated: #2A2A2A;          /* 카드 */
  --bg-overlay:  rgba(0,0,0,0.66);

  /* Text */
  --text-primary:    #F2F2F2;
  --text-secondary:  #B8B8B8;
  --text-tertiary:   #767676;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #4A4A4F;

  /* Border */
  --border-default: #2E2E32;
  --border-subtle:  #242427;
  --border-strong:  #404040;
  --border-focus:   #FF2740;
}

[data-theme="light"] {
  /* Primary - Pinterest Red */
  --color-primary-50:  #FFE9EC;
  --color-primary-100: #FFC2C9;
  --color-primary-200: #FF8B96;
  --color-primary-300: #FF5A6E;
  --color-primary-400: #FF2E47;
  --color-primary-500: #E60023;  /* Pinterest Red */
  --color-primary-600: #C8001E;
  --color-primary-700: #A30019;
  --color-primary-800: #7A0013;
  --color-primary-900: #4D000C;

  /* Secondary - Gestalt Forest */
  --color-secondary-500: #0E7C66;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F1F1F1;
  --color-neutral-200:  #EFEFEF;
  --color-neutral-300:  #DDDDDD;
  --color-neutral-500:  #B8B8B8;
  --color-neutral-700:  #767676;
  --color-neutral-800:  #404040;
  --color-neutral-900:  #111111;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #0E7C66;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE9EC;
  --color-error-fg:   #E60023;
  --color-info-bg:    #E0F0FF;
  --color-info-fg:    #0074E8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(17,17,17,0.50);

  /* Text */
  --text-primary:    #111111;
  --text-secondary:  #767676;
  --text-tertiary:   #B8B8B8;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #DDDDDD;

  /* Border */
  --border-default: #EFEFEF;
  --border-subtle:  #F1F1F1;
  --border-strong:  #DDDDDD;
  --border-focus:   #E60023;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Pinterest Sans (자체) — 폴백 -apple-system, "Helvetica Neue"
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.15 / -0.01em
  - H2: 22px / 700 / 1.27 / 0
  - H3: 16px / 700 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 12px / 600 / 1.33 / 0

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
- **Container**: fluid (masonry), 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;     /* pin */
--radius-xl: 24px;
--radius-full: 9999px;   /* save 버튼 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.40);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.65);
--shadow-xl: 0 16px 32px rgba(230,0,35,0.30);
```

### ⑧ Iconography
- **스타일**: Outline (Pinterest Gestalt icons)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: gestalt icons / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'Pinterest Sans', -apple-system, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 16px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-save { background: var(--color-primary-500); color: #fff; }   /* 시그니처 save */
.btn-save.saved { background: #fff; color: #111; }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-secondary:hover { background: var(--color-neutral-200); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: 9999px; padding: 12px 18px; font-size: 14px; width: 100%; box-sizing: border-box; }
.input:focus { outline: 2px solid var(--border-focus); }
```

**Card** (Pin)
```css
.pin { position: relative; cursor: pointer; }
.pin .image { background: var(--bg-subtle); border-radius: var(--radius-lg); position: relative; overflow: hidden; transition: transform 200ms ease, box-shadow 200ms ease; }
.pin:hover .image { box-shadow: var(--shadow-md); }
.pin .save-btn { position: absolute; right: 8px; top: 8px; opacity: 0; transition: opacity 200ms ease; }
.pin:hover .save-btn { opacity: 1; }
.pin .title { font-size: 14px; font-weight: 600; margin: 8px 4px 0; line-height: 1.3; color: var(--text-primary); }
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-error-bg); color: var(--color-primary-200); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 12px 16px; display: flex; align-items: center; gap: 12px; background: var(--bg-base); }
.topnav .logo { width: 32px; height: 32px; background: var(--color-primary-500); color: #fff; border-radius: 50%; display: grid; place-items: center; font-weight: 900; font-family: Georgia, serif; font-size: 18px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. save 버튼 색을 brand 외 다른 색으로 변경 금지 — Red save가 시그니처
2. pin 라운드를 8px 미만으로 줄이지 말 것 — 16px이 시그니처
3. masonry 그리드를 균일 그리드로 변경 금지 — 다양한 비율 보존
4. brand red를 본문 텍스트나 link에 사용 금지 — save action에만
5. pin hover에 채도 높은 overlay 사용 금지 — 이미지가 주인공

### ⑫ 시그니처 적용 예시 (Home feed)

```html
<style>
  body { margin: 0; font-family: 'Pinterest Sans', -apple-system, 'Pretendard', sans-serif; color: #F2F2F2; background: #111; }
  .topnav { padding: 14px 24px; display: flex; align-items: center; gap: 12px; background: #111; }
  .topnav .logo { width: 32px; height: 32px; background: #FF2740; color: #fff; border-radius: 50%; display: grid; place-items: center; font-weight: 900; font-family: Georgia, serif; font-size: 18px; }
  .topnav .nav { display: flex; gap: 4px; }
  .topnav .nav button { background: transparent; border: 0; padding: 12px 18px; font-size: 16px; font-weight: 700; cursor: pointer; border-radius: 9999px; font-family: inherit; color: #F2F2F2; }
  .topnav .nav button.active { background: #F2F2F2; color: #111; }
  .topnav .search { flex: 1; max-width: 720px; background: #1B1B1D; border-radius: 9999px; padding: 12px 18px; font-size: 14px; color: #B8B8B8; }
  .feed { padding: 16px 32px 64px; columns: 5; column-gap: 16px; }
  .feed > * { break-inside: avoid; margin-bottom: 16px; }
  .pin { position: relative; cursor: pointer; }
  .pin .image { border-radius: 16px; overflow: hidden; transition: box-shadow 200ms ease; position: relative; }
  .pin:hover .image { box-shadow: var(--shadow-md); }
  .pin:hover .save { opacity: 1; }
  .pin .save { position: absolute; top: 10px; right: 10px; background: #FF2740; color: #fff; border: 0; border-radius: 9999px; padding: 8px 14px; font-size: 13px; font-weight: 700; cursor: pointer; opacity: 0; transition: opacity 200ms ease; font-family: inherit; }
  .pin .title { font-size: 14px; font-weight: 600; margin: 8px 4px 0; line-height: 1.3; color: #F2F2F2; }
  @media (max-width: 1100px) { .feed { columns: 3; } }
</style>

<header class="topnav">
  <div class="logo">P</div>
  <div class="nav">
    <button class="active">홈</button>
    <button>탐색</button>
  </div>
  <div class="search">🔍 영감 검색</div>
  <span style="margin-left:auto; font-size:14px; color:#B8B8B8;">알림 메시지 ⓜ</span>
</header>

<div class="feed">
  <div class="pin">
    <div class="image" style="aspect-ratio:3/4; background:linear-gradient(135deg,#5A2E28,#E60023);"><button class="save">저장</button></div>
    <div class="title">미니멀 침실 인테리어 12선</div>
  </div>
  <div class="pin">
    <div class="image" style="aspect-ratio:1/1; background:linear-gradient(135deg,#16A085,#5A2E28);"><button class="save">저장</button></div>
    <div class="title">식물로 꾸민 작업 공간</div>
  </div>
  <div class="pin">
    <div class="image" style="aspect-ratio:3/5; background:linear-gradient(135deg,#FFCB00,#E60023);"><button class="save">저장</button></div>
    <div class="title">컬러 팔레트 — 따뜻한 가을</div>
  </div>
  <div class="pin">
    <div class="image" style="aspect-ratio:1/1; background:linear-gradient(135deg,#404040,#1A1A1A);"><button class="save">저장</button></div>
    <div class="title">미드센추리 가구 무드보드</div>
  </div>
  <div class="pin">
    <div class="image" style="aspect-ratio:3/4; background:linear-gradient(135deg,#8C3A42,#E60023);"><button class="save">저장</button></div>
    <div class="title">제주 여행 사진 영감</div>
  </div>
  <div class="pin">
    <div class="image" style="aspect-ratio:1/1; background:linear-gradient(135deg,#1E5BA8,#16A085);"><button class="save">저장</button></div>
    <div class="title">UI 디자인 트렌드 2026</div>
  </div>
  <div class="pin">
    <div class="image" style="aspect-ratio:3/5; background:linear-gradient(135deg,#5A2E28,#FFCB00);"><button class="save">저장</button></div>
    <div class="title">베이커리 인테리어 무드보드</div>
  </div>
  <div class="pin">
    <div class="image" style="aspect-ratio:1/1; background:linear-gradient(135deg,#16A085,#1E5BA8);"><button class="save">저장</button></div>
    <div class="title">자연광이 드는 거실</div>
  </div>
</div>
```
