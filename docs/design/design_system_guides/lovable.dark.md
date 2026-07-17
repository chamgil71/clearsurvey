---
brand: Lovable
brand_ko: 러버블
slug: lovable
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - dev-tools

color_tone: warm
primary_color_hex: "#FF4F86"
primary_color_name: "Lovable Pink"
mood:
  - 친근
  - 활기
  - 풀스택

font_category: sans-serif
font_primary: Inter
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

released_year: 2024
last_major_revision: 2025
signature_keyword: "핫핑크 → 코랄 그라데이션과 둥근 12px 카드의 친근한 풀스택 AI 빌더"

card_tokens: |
  {
    "light": { "bg": "#FFF1F4", "surface": "#FFFFFF", "border": "#E5E5E5", "fg": "#1A1124", "fg_muted": "#737373", "accent": "#FF4F86" },
    "dark":  { "bg": "#1A1124", "surface": "#2F1F3D", "border": "#3D2A4E", "fg": "#FFF1F4", "fg_muted": "#D4C5DE", "accent": "#FF4F86" }
  }

hero_html: |
  <div style="font-family:'Inter',-apple-system,sans-serif;background:linear-gradient(135deg,#1A1124 0%,#2A1320 100%);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;padding:0;font-size:11px;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <div style="width:18px;height:18px;background:linear-gradient(135deg,#FF4F86,#FF8A4F);border-radius:6px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:11px;">♥</div>
      <span style="font-weight:600;letter-spacing:-0.01em;">lovable</span>
    </div>
    <div style="padding:8px 14px;display:flex;flex-direction:column;gap:8px;">
      <div style="background:var(--card-surface);border-radius:12px;padding:10px 12px;box-shadow:0 1px 2px rgba(0,0,0,0.45);font-size:11px;color:var(--card-fg);">내 카페 메뉴판 만들어줘 ✨</div>
      <div style="background:var(--card-accent);color:#fff;border-radius:12px;padding:10px 12px;font-size:11px;align-self:flex-start;max-width:90%;">아메리카노 4,500원 / 라떼 5,000원 카드 3개 만들고 있어요…</div>
    </div>
    <div style="padding:10px 14px;">
      <div style="background:var(--card-surface);border-radius:12px;padding:8px 12px;font-size:11px;color:var(--card-fg-muted);display:flex;align-items:center;gap:8px;">
        <span style="flex:1;">무엇을 만들어볼까요?</span>
        <span style="width:24px;height:24px;background:linear-gradient(135deg,#FF4F86,#FF8A4F);border-radius:9999px;display:grid;place-items:center;color:#fff;font-weight:700;">↑</span>
      </div>
    </div>
  </div>

sources:
  - https://lovable.dev/
---

### ① 브랜드 DNA
- **브랜드명**: Lovable
- **한 줄 정체성**: 한 줄 프롬프트로 풀스택 웹앱(프론트+백+DB)을 만들어주는 AI 빌더
- **공식 디자인 철학**: "Anyone can build software" — 비개발자에게도 친근한 톤
- **시그니처 요소 1개**: 핫핑크(#FF4F86) → 코랄오렌지(#FF8A4F) 좌상→우하 그라데이션 + 12px 둥근 카드 + 하트 로고. v0/Cursor의 무채색 톤과 정반대의 "따뜻한 풀스택 AI"

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근, 활기, 풀스택
- **무드 설명**: 코드 도구의 무거움을 벗고 채팅 메신저처럼 둥글고 따뜻한 카드 위주. 핑크 그라데이션이 강한 시그니처지만 본문은 흰 배경 위 검은 텍스트로 가독성 유지.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘
- **밀도(Density)**: Comfortable — 채팅 + 미리보기 구조
- **모서리 성향**: Round (12~16px)
- **평면성**: Subtle — 그림자 1단계 미세

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Lovable Pink */
  --color-primary-50:  #FFF1F4;
  --color-primary-100: #FFE0E8;
  --color-primary-200: #FFC2D2;
  --color-primary-300: #FF99B5;
  --color-primary-400: #FF7099;
  --color-primary-500: #FF5C90;
  --color-primary-600: #FF4F86;
  --color-primary-700: #ED2D6B;
  --color-primary-800: #C5184F;
  --color-primary-900: #9A0E3D;

  /* Secondary - Coral (그라데이션 종점) */
  --color-secondary-300: #FFC9A6;
  --color-secondary-500: #FF8A4F;
  --color-secondary-700: #D9582E;

  /* Neutral (다크 반전 램프) */
  --color-neutral-0:    #14101C;
  --color-neutral-50:   #1A1124;
  --color-neutral-100:  #221730;
  --color-neutral-300:  #3D2A4E;
  --color-neutral-500:  #6B5A7C;
  --color-neutral-700:  #B7A6C6;
  --color-neutral-900:  #FFF1F4;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #122B22;
  --color-success-fg: #34D399;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #FBBF24;
  --color-error-bg:   #321521;
  --color-error-fg:   #FB7185;
  --color-info-bg:    #122036;
  --color-info-fg:    #60A5FA;

  /* Surface */
  --bg-base:     #1A1124;
  --bg-subtle:   #221730;
  --bg-elevated: #2F1F3D;
  --bg-overlay:  rgba(8,5,14,0.65);
  --bg-hero:     linear-gradient(135deg, #1A1124 0%, #2A1320 100%);

  /* Text */
  --text-primary:    #FFF1F4;
  --text-secondary:  #D4C5DE;
  --text-tertiary:   #9684A6;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #5A4A6B;

  /* Border */
  --border-default: #3D2A4E;
  --border-subtle:  #2B1E39;
  --border-strong:  #543D67;
  --border-focus:   #FF4F86;

  /* Brand gradient */
  --gradient-brand: linear-gradient(135deg, #FF4F86 0%, #FF8A4F 100%);
}

[data-theme="light"] {
  /* Primary - Lovable Pink */
  --color-primary-50:  #FFF1F4;
  --color-primary-100: #FFE0E8;
  --color-primary-200: #FFC2D2;
  --color-primary-300: #FF99B5;
  --color-primary-400: #FF7099;
  --color-primary-500: #FF4F86;
  --color-primary-600: #ED2D6B;
  --color-primary-700: #C5184F;
  --color-primary-800: #9A0E3D;
  --color-primary-900: #62082A;

  /* Secondary - Coral (그라데이션 종점) */
  --color-secondary-300: #FFB58A;
  --color-secondary-500: #FF8A4F;
  --color-secondary-700: #D9582E;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-300:  #E5E5E5;
  --color-neutral-500:  #A1A1AA;
  --color-neutral-700:  #52525B;
  --color-neutral-900:  #1A1124;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFDF5;
  --color-success-fg: #059669;
  --color-warning-bg: #FFFBEB;
  --color-warning-fg: #D97706;
  --color-error-bg:   #FEF2F2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #EFF6FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,17,36,0.55);
  --bg-hero:     linear-gradient(135deg, #FFF1F4 0%, #FFE2D6 100%);

  /* Text */
  --text-primary:    #1A1124;
  --text-secondary:  #52525B;
  --text-tertiary:   #A1A1AA;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #D4D4D8;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F5F5F5;
  --border-strong:  #D4D4D8;
  --border-focus:   #FF4F86;

  /* Brand gradient */
  --gradient-brand: linear-gradient(135deg, #FF4F86 0%, #FF8A4F 100%);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Inter (OFL) / -apple-system 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono / Geist Mono
- **위계**:
  - Display: 56px / 600 / 1.1 / -0.03em
  - H1: 36px / 600 / 1.2 / -0.02em
  - H2: 24px / 600 / 1.3 / -0.015em
  - H3: 18px / 600 / 1.4 / -0.01em
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Caption: 12px / 500 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 20px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 12px;     /* 카드 시그니처 */
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.45);
--shadow-md: 0 4px 16px rgba(0,0,0,0.50);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.60);
--shadow-glow: 0 0 0 4px rgba(255,79,134,0.30);
```

### ⑧ Iconography
- **스타일**: Outline (1.75px) — 둥근 단면
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 Inter,sans-serif; padding: 10px 18px; border-radius: 9999px; border: 0; transition: transform 150ms ease, box-shadow 150ms ease; cursor: pointer; }
.btn-primary { background: var(--gradient-brand); color: var(--text-on-primary); }
.btn-primary:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-600); }
```

**Input (Prompt)**
```css
.prompt { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 12px; padding: 12px 14px 12px 16px; font: 400 14px/1.5 Inter,sans-serif; color: var(--text-primary); display: flex; align-items: center; gap: 10px; box-shadow: var(--shadow-sm); }
.prompt:focus-within { border-color: var(--border-focus); box-shadow: var(--shadow-glow); }
.prompt input { all: unset; flex: 1; color: var(--text-primary); }
.prompt input::placeholder { color: var(--text-tertiary); }
.prompt .send { width: 28px; height: 28px; border-radius: 9999px; background: var(--gradient-brand); color: #fff; display: grid; place-items: center; font-weight: 700; cursor: pointer; }
```

**Card (Chat bubble)**
```css
.bubble-u { background: var(--bg-base); border-radius: 12px; padding: 10px 14px; max-width: 80%; align-self: flex-end; box-shadow: var(--shadow-sm); }
.bubble-a { background: var(--color-primary-500); color: var(--text-on-primary); border-radius: 12px; padding: 10px 14px; max-width: 90%; }
.preview-card { background: var(--bg-base); border-radius: 12px; padding: 16px; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 4px 10px; border-radius: 9999px; font: 500 11px/1.4 Inter,sans-serif; }
.tag-pink { background: var(--color-primary-50); color: var(--color-primary-700); border: 1px solid var(--color-primary-100); }
.tag-mono { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); }
```

**Navigation (Top)**
```css
.topbar { background: var(--bg-base); padding: 14px 20px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--border-subtle); }
.topbar .logo { width: 22px; height: 22px; background: var(--gradient-brand); border-radius: 7px; display: grid; place-items: center; color: #fff; font-weight: 700; }
.topbar h1 { font: 600 16px/1 Inter,sans-serif; letter-spacing: -0.01em; margin: 0; }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 450ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* 약한 바운스 */
```

### ⑪ Anti-patterns
1. 본문 텍스트를 핑크 그라데이션 위에 직접 배치 금지 — 가독성 저하
2. 모서리 sharp(0~4px) 카드 금지 — 친근한 톤 유지
3. 코드 영역까지 핑크 강조 침투 금지 — 코드는 모노톤
4. 핑크 + 보색 강조 동시 사용 금지 — single brand accent
5. 그림자 강하게 사용 금지 — 핑크 캔버스 위에선 미세 그림자만

### ⑫ 시그니처 적용 예시

```html
<style>
  .lov-app { font: 14px/1.5 Inter, -apple-system, sans-serif; background: linear-gradient(135deg, #1A1124 0%, #2A1320 100%); color: #FFF1F4; min-height: 480px; display: grid; grid-template-rows: auto 1fr auto; padding: 16px; gap: 12px; }
  .lov-app .top { display: flex; align-items: center; gap: 10px; padding: 4px 4px; }
  .lov-app .top .logo { width: 28px; height: 28px; background: linear-gradient(135deg, #FF4F86, #FF8A4F); border-radius: 8px; display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 16px; }
  .lov-app .top h1 { margin: 0; font: 600 16px/1 inherit; letter-spacing: -0.01em; }
  .lov-app .top .new { margin-left: auto; background: #2F1F3D; border: 1px solid #3D2A4E; color: #FFF1F4; padding: 6px 12px; border-radius: 9999px; font: 500 12px/1 inherit; }
  .lov-app .chat { display: flex; flex-direction: column; gap: 10px; padding: 0 4px; overflow: auto; }
  .lov-app .bubble-u { background: #2F1F3D; border-radius: 12px; padding: 10px 14px; max-width: 80%; align-self: flex-end; box-shadow: 0 1px 2px rgba(0,0,0,0.45); font-size: 13px; }
  .lov-app .bubble-a { background: #FF4F86; color: #fff; border-radius: 12px; padding: 12px 14px; max-width: 90%; font-size: 13px; line-height: 1.55; }
  .lov-app .preview { background: #2F1F3D; border-radius: 16px; padding: 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.50); display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; align-self: stretch; }
  .lov-app .menu { background: linear-gradient(135deg, #3A2336, #2A1320); border-radius: 10px; padding: 12px 10px; text-align: center; }
  .lov-app .menu .name { font: 600 13px/1.2 inherit; letter-spacing: -0.01em; }
  .lov-app .menu .price { font: 500 11px/1 inherit; color: #FF99B5; margin-top: 4px; }
  .lov-app .composer { background: #2F1F3D; border-radius: 12px; padding: 10px 12px 10px 16px; display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 2px rgba(0,0,0,0.45); }
  .lov-app .composer input { all: unset; flex: 1; color: #FFF1F4; font-size: 14px; }
  .lov-app .composer input::placeholder { color: #9684A6; }
  .lov-app .composer .send { width: 30px; height: 30px; border-radius: 9999px; background: linear-gradient(135deg, #FF4F86, #FF8A4F); color: #fff; display: grid; place-items: center; font-weight: 700; }
</style>

<div class="lov-app">
  <header class="top">
    <div class="logo">♥</div>
    <h1>lovable</h1>
    <button class="new">+ 새 프로젝트</button>
  </header>
  <section class="chat">
    <div class="bubble-u">내 카페 메뉴판 만들어줘 ✨</div>
    <div class="bubble-a">아메리카노 / 라떼 / 콜드브루 3개 카드를 가로로 배치하고, 가격은 핑크로 강조했어요. 실제 결제는 어떻게 받을까요?</div>
    <div class="preview">
      <div class="menu"><div class="name">아메리카노</div><div class="price">4,500원</div></div>
      <div class="menu"><div class="name">라떼</div><div class="price">5,000원</div></div>
      <div class="menu"><div class="name">콜드브루</div><div class="price">5,500원</div></div>
    </div>
  </section>
  <div class="composer">
    <input placeholder="무엇을 만들어볼까요?" />
    <div class="send">↑</div>
  </div>
</div>
```
