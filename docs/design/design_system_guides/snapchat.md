---
brand: Snapchat
brand_ko: 스냅챗
slug: snapchat
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - social
  - consumer

color_tone: warm
primary_color_hex: "#FFFC00"
primary_color_name: "Snapchat Yellow"
mood:
  - 즉흥
  - 유희
  - 친밀

font_category: sans-serif
font_primary: Avenir Next
font_korean_supported: true

density: comfortable
corner_style: pill
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2011
last_major_revision: 2024
signature_keyword: "쨍한 형광 옐로 + 흰 유령 로고 + 풀스크린 카메라 우선 인터페이스"

hero_html: |
  <div style="font-family:'Avenir Next','Inter','Helvetica Neue',-apple-system,sans-serif;background:#000;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;position:relative;">
    <div style="padding:12px 14px;display:flex;align-items:center;gap:10px;background:linear-gradient(180deg,rgba(0,0,0,0.5),transparent);position:absolute;top:0;left:0;right:0;z-index:2;">
      <div style="width:30px;height:30px;background:#FFFC00;border-radius:9999px;display:grid;place-items:center;color:#000;font:900 16px/1 sans-serif;">👻</div>
      <strong style="font-size:14px;font-weight:700;">스냅챗</strong>
      <span style="margin-left:auto;font-size:11px;background:rgba(255,255,255,0.2);backdrop-filter:blur(6px);padding:3px 8px;border-radius:9999px;">⚡ 12</span>
    </div>
    <div style="background:radial-gradient(circle at 50% 40%,#FFD400 0%,#FF6B6B 50%,#5F27CD 100%);min-height:0;position:relative;display:grid;place-items:center;">
      <div style="font:900 28px/1 inherit;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,0.4);">SNAP!</div>
      <div style="position:absolute;bottom:60px;left:0;right:0;display:flex;justify-content:center;gap:8px;">
        <span style="background:rgba(0,0,0,0.4);backdrop-filter:blur(8px);color:#fff;padding:6px 12px;border-radius:9999px;font:700 11px/1 inherit;">🎭 렌즈</span>
        <span style="background:#FFFC00;color:#000;padding:6px 12px;border-radius:9999px;font:900 11px/1 inherit;">📷 스냅</span>
        <span style="background:rgba(0,0,0,0.4);backdrop-filter:blur(8px);color:#fff;padding:6px 12px;border-radius:9999px;font:700 11px/1 inherit;">💬 챗</span>
      </div>
    </div>
    <div style="padding:14px 16px;background:#000;display:flex;align-items:center;justify-content:space-around;">
      <div style="font-size:20px;">💬</div>
      <div style="width:64px;height:64px;border:6px solid #FFFC00;border-radius:9999px;background:transparent;"></div>
      <div style="font-size:20px;">🎬</div>
    </div>
  </div>

sources:
  - https://www.snapchat.com/
  - https://brand.snapchat.com/
---

### ① 브랜드 DNA
- **브랜드명**: Snapchat (Snap Inc.)
- **한 줄 정체성**: 사라지는 사진·동영상 메시저 — 카메라 우선, 친구 중심
- **공식 디자인 철학**: "Camera company" — 풀스크린 카메라가 홈, 일시성과 유희
- **시그니처 요소 1개**: 형광 옐로(#FFFC00) + 흰색 유령(Ghostface Chillah) 로고 + 풀스크린 카메라 + 동그란 흰 옐로 테두리 셔터 버튼. 다른 SNS와 달리 앱을 켜면 피드가 아닌 카메라가 먼저 뜬다

### ② 톤 & 무드
- **핵심 키워드 3개**: 즉흥, 유희, 친밀
- **무드 설명**: 까만 베이스 + 형광 옐로 강조. 카메라 위 텍스트·스티커는 진한 그림자/외곽선으로 가독성 확보. 일러스트는 Bitmoji와 결합돼 캐릭터 톤이 매우 강함.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 풀스크린 위 큰 액션
- **모서리 성향**: Pill (풀필 9999px 버튼/태그)
- **평면성**: Flat + glass overlay (반투명 backdrop blur)

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Snapchat Yellow */
  --color-primary-50:  #FFFFE5;
  --color-primary-100: #FFFFB8;
  --color-primary-200: #FFFE8A;
  --color-primary-300: #FFFD5C;
  --color-primary-400: #FFFD2E;
  --color-primary-500: #FFFC00;   /* Snapchat Yellow */
  --color-primary-600: #E5E300;
  --color-primary-700: #B8B600;
  --color-primary-800: #8A8800;
  --color-primary-900: #5C5B00;

  /* Story colors (스토리 링 그라데이션) */
  --color-story-1: #FF4081;
  --color-story-2: #9C27B0;
  --color-story-3: #FFFC00;
  --color-story-grad: linear-gradient(135deg, #FFFC00, #FF4081, #9C27B0);

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F7F7;
  --color-neutral-100:  #F0F0F0;
  --color-neutral-200:  #DDDDDD;
  --color-neutral-300:  #BBBBBB;
  --color-neutral-500:  #888888;
  --color-neutral-700:  #555555;
  --color-neutral-800:  #303030;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic — 라이트 컬러 액센트 */
  --color-success-bg: #DCFCE7;
  --color-success-fg: #16A34A;
  --color-warning-bg: #FEF3C7;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FECACA;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #DBEAFE;
  --color-info-fg:    #2563EB;

  /* Chat colors per friend (스냅챗 시그니처: 친구마다 컬러 코드) */
  --color-chat-incoming: #5B6FFF;
  --color-chat-outgoing: #FF4081;
  --color-chat-snap-opened: transparent;
  --color-chat-snap-new:    #FF4081;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F7F7;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);
  --bg-camera:   #000000;        /* 카메라 풀스크린 */

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #555555;
  --text-tertiary:   #888888;
  --text-on-yellow:  #000000;
  --text-on-dark:    #FFFFFF;
  --text-disabled:   #BBBBBB;

  /* Border */
  --border-default: #EAEAEA;
  --border-subtle:  #F0F0F0;
  --border-strong:  #DDDDDD;
  --border-focus:   #FFFC00;
}

[data-theme="dark"] {
  --bg-base:     #000000;
  --bg-subtle:   #1A1A1A;
  --bg-elevated: #1F1F1F;
  --text-primary: #FFFFFF;
  --text-secondary: #BBBBBB;
  --border-default: #303030;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Avenir Next** (자체 사용) / Helvetica Neue / Inter
  - 한글: Pretendard / Apple SD Gothic Neo
  - 스냅 캡션: 사용자 입력 위 라운드 산세리프 with stroke
- **위계**:
  - Display: 32px / 900 / 1.1
  - H1: 24px / 800 / 1.2
  - H2: 20px / 800 / 1.3
  - H3: 17px / 700 / 1.35
  - Body Large: 17px / 500 / 1.4
  - Body: 15px / 500 / 1.4
  - Body Small: 13px / 600 / 1.3
  - Caption: 11px / 700 / 1.2

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 18px;
  --space-xl: 24px;
  --space-2xl: 36px;
  --space-3xl: 56px;
  ```
- **Container**: 모바일 풀폭 100% (카메라 풀스크린)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-xl: 28px;
--radius-full: 9999px;   /* 시그니처 셔터 / 칩 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.18);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.32);
--shadow-yellow: 0 8px 24px rgba(255,252,0,0.40);
--shadow-text: 0 2px 6px rgba(0,0,0,0.50);     /* 카메라 위 텍스트 */
```

### ⑧ Iconography
- **스타일**: Filled (Bitmoji + 둥근 글리프)
- **Stroke 굵기**: 2~2.5px (외곽선이 있을 경우)
- **모서리 처리**: Round (매우 둥글게)
- **추천 라이브러리**: 자체 / Bitmoji

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 'Avenir Next', Inter, sans-serif; border-radius: 9999px; padding: 12px 22px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-yellow); box-shadow: var(--shadow-yellow); }
.btn-primary:hover { transform: translateY(-1px); }
.btn-dark { background: #000; color: #fff; }
.btn-glass { background: rgba(255,255,255,0.18); backdrop-filter: blur(10px); color: #fff; border: 1px solid rgba(255,255,255,0.3); }
.btn-shutter { width: 78px; height: 78px; border-radius: 9999px; border: 6px solid var(--color-primary-500); background: transparent; padding: 0; }
.btn-shutter.recording { border-color: #FF4081; background: rgba(255,64,129,0.2); }
```

**Input (Chat)**
```css
.field { background: var(--bg-subtle); border: 0; border-radius: 9999px; padding: 11px 18px; font: 500 15px/1.3 inherit; color: var(--text-primary); outline: 0; }
.field:focus { box-shadow: 0 0 0 2px var(--color-primary-500); }
.caption-input { background: rgba(0,0,0,0.50); backdrop-filter: blur(8px); color: #fff; padding: 8px 16px; border-radius: 9999px; font: 800 16px/1.3 inherit; text-shadow: var(--shadow-text); }
```

**Card (Story / Chat row)**
```css
.story { display: flex; flex-direction: column; align-items: center; gap: 5px; min-width: 72px; }
.story .ring { width: 64px; height: 64px; border-radius: 9999px; padding: 3px; background: var(--color-story-grad); }
.story .ring img { width: 100%; height: 100%; border-radius: 9999px; background: #fff; }
.story.viewed .ring { background: var(--border-strong); }
.story .name { font: 700 11px/1.2 inherit; color: var(--text-primary); max-width: 64px; text-align: center; }
.chat-row { display: flex; align-items: center; gap: 12px; padding: 10px 14px; }
.chat-row .bitmoji { width: 48px; height: 48px; border-radius: 9999px; background: var(--color-primary-500); }
.chat-row .snap-icon { width: 18px; height: 18px; border-radius: 4px; background: var(--color-chat-snap-new); }
.chat-row .snap-icon.opened { background: transparent; border: 2px solid var(--color-chat-snap-new); }
```

**Badge / Tag**
```css
.streak { color: #FF6B00; font: 800 13px/1 inherit; }   /* 🔥 N day streak */
.badge-new { background: var(--color-primary-500); color: #000; border-radius: 9999px; padding: 2px 8px; font: 800 11px/1.3 inherit; }
.tag-lens { background: rgba(0,0,0,0.45); backdrop-filter: blur(10px); color: #fff; border-radius: 9999px; padding: 5px 12px; font: 700 12px/1 inherit; }
```

**Navigation (Bottom Tab)**
```css
.tabbar { background: #000; display: grid; grid-template-columns: 1fr 1fr 78px 1fr 1fr; align-items: center; padding: 10px 14px 18px; gap: 8px; }
.tabbar .tab { display: flex; flex-direction: column; align-items: center; gap: 2px; color: #fff; font: 700 10px/1 inherit; }
.tabbar .tab.active { color: var(--color-primary-500); }
.tabbar .shutter { justify-self: center; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 380ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);     /* 스티커 등장 */
```

### ⑪ Anti-patterns
1. 옐로를 #FFD700 같은 톤다운 색으로 대체 금지 — 형광 #FFFC00 고수
2. 카메라 외 다른 화면을 홈으로 만들기 금지 — 첫 화면은 항상 카메라
3. 카메라 위 텍스트에 텍스트 그림자 없이 두기 금지 — 가독성 위해 stroke 또는 backdrop blur 필수
4. 동그란 셔터 버튼을 사각형으로 바꾸기 금지 — 78~84px 흰 옐로 테두리 원형
5. Bitmoji 없이 추상 아이콘으로 친구 아바타 표현 금지 — 캐릭터 톤 정체성

### ⑫ 시그니처 적용 예시 (Snapchat 카메라 + Stories)

```html
<style>
  body { margin: 0; font-family: 'Avenir Next', 'Helvetica Neue', Inter, -apple-system, sans-serif; color: #fff; background: #000; }
  .app { max-width: 420px; margin: 0 auto; min-height: 100vh; position: relative; overflow: hidden; background: #000; }
  .topbar { position: absolute; top: 0; left: 0; right: 0; z-index: 3; display: flex; align-items: center; gap: 10px; padding: 14px 16px;
            background: linear-gradient(180deg, rgba(0,0,0,0.5), transparent); }
  .topbar .pfp { width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, #FFFC00, #FF4081); display: grid; place-items: center; color: #000; font: 900 16px/1 inherit; }
  .topbar .search { flex: 1; background: rgba(255,255,255,0.18); backdrop-filter: blur(10px); color: #fff; padding: 8px 14px; border-radius: 9999px; font: 700 13px/1 inherit; }
  .topbar .right { display: flex; gap: 12px; font-size: 22px; }
  .camera { height: 70vh; background: radial-gradient(circle at 50% 35%, #FFD400 0, #FF6B6B 50%, #5F27CD 100%); position: relative; display: grid; place-items: center; }
  .camera .selfie { font: 900 40px/1 inherit; color: #fff; text-shadow: 0 4px 12px rgba(0,0,0,0.35); letter-spacing: 0.04em; }
  .lenses { position: absolute; bottom: 24px; left: 0; right: 0; display: flex; justify-content: center; gap: 10px; }
  .lens { background: rgba(0,0,0,0.45); backdrop-filter: blur(10px); color: #fff; padding: 7px 14px; border-radius: 9999px; font: 700 12px/1 inherit; }
  .lens.active { background: #FFFC00; color: #000; }
  .bottom { background: #000; padding: 14px 16px 26px; display: grid; grid-template-columns: 1fr 1fr 78px 1fr 1fr; align-items: center; gap: 6px; }
  .nav { display: flex; flex-direction: column; align-items: center; gap: 3px; color: #fff; font: 700 10px/1 inherit; }
  .nav.active { color: #FFFC00; }
  .nav .ic { font-size: 24px; }
  .shutter { justify-self: center; width: 78px; height: 78px; border: 6px solid #FFFC00; border-radius: 9999px; background: transparent; box-shadow: 0 8px 24px rgba(255,252,0,0.35); }
  .stories { background: #000; padding: 12px 14px; display: flex; gap: 12px; overflow-x: auto; border-top: 1px solid #1A1A1A; }
  .story { display: flex; flex-direction: column; align-items: center; gap: 5px; min-width: 64px; }
  .story .ring { width: 58px; height: 58px; border-radius: 9999px; padding: 3px; background: linear-gradient(135deg, #FFFC00, #FF4081, #9C27B0); }
  .story .ring .face { width: 100%; height: 100%; border-radius: 9999px; background: #fff; display: grid; place-items: center; font-size: 26px; }
  .story .name { font: 700 11px/1.1 inherit; color: #fff; }
  .streak { font: 800 11px/1 inherit; color: #FF6B00; margin-top: 2px; }
</style>

<div class="app">
  <header class="topbar">
    <div class="pfp">👻</div>
    <div class="search">친구·렌즈 검색</div>
    <div class="right"><span>👻</span><span>⚡</span></div>
  </header>
  <section class="camera">
    <div class="selfie">SNAP!</div>
    <div class="lenses">
      <span class="lens">🎭 가면</span>
      <span class="lens active">⭐ 오늘</span>
      <span class="lens">🌈 무지개</span>
      <span class="lens">🐶 강아지</span>
    </div>
  </section>
  <section class="stories">
    <div class="story"><div class="ring"><div class="face">😎</div></div><div class="name">민준</div><div class="streak">🔥 142</div></div>
    <div class="story"><div class="ring"><div class="face">🦊</div></div><div class="name">서연</div><div class="streak">🔥 87</div></div>
    <div class="story"><div class="ring"><div class="face">🐱</div></div><div class="name">하늘</div></div>
    <div class="story"><div class="ring" style="background:#444"><div class="face">🐻</div></div><div class="name">지호</div></div>
  </section>
  <nav class="bottom">
    <div class="nav"><span class="ic">🗺</span>지도</div>
    <div class="nav"><span class="ic">💬</span>챗</div>
    <button class="shutter" aria-label="셔터"></button>
    <div class="nav active"><span class="ic">📸</span>스토리</div>
    <div class="nav"><span class="ic">📺</span>스포트</div>
  </nav>
</div>
```
