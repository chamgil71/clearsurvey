---
brand: KakaoT
brand_ko: 카카오T
slug: kakao-t
generated: 2026-05-12
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - mobility
  - consumer

color_tone: warm
primary_color_hex: "#FAE100"
primary_color_name: "Kakao T Yellow"
mood:
  - 즉시
  - 친근
  - 안심

font_category: sans-serif
font_primary: Kakao Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2015
last_major_revision: 2024
signature_keyword: "노란 호출 버튼과 지도 풀스크린의 모빌리티 슈퍼앱"

hero_html: |
  <div style="font-family:'Kakao Sans',Pretendard,-apple-system,sans-serif;background:#E8EEF2;color:#191919;height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.01em;position:relative;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,#E8EEF2 0%,#D2DCE3 60%,#BAC6CF 100%);">
      <svg width="100%" height="100%" viewBox="0 0 200 300" style="opacity:0.4;"><path d="M0,80 Q60,40 120,90 T200,120" stroke="#fff" stroke-width="6" fill="none"/><path d="M0,180 Q70,140 140,170 T200,200" stroke="#fff" stroke-width="4" fill="none"/></svg>
    </div>
    <div style="position:relative;background:#fff;padding:10px 14px;display:flex;align-items:center;gap:8px;box-shadow:0 1px 2px rgba(0,0,0,0.04);">
      <strong style="font-size:18px;font-weight:900;color:#191919;letter-spacing:-0.025em;">kakao T</strong>
      <span style="margin-left:auto;font-size:11px;color:#7E8593;">⚙</span>
    </div>
    <div style="position:relative;"></div>
    <div style="position:relative;background:#fff;border-radius:16px 16px 0 0;padding:14px;display:flex;flex-direction:column;gap:10px;box-shadow:0 -2px 12px rgba(0,0,0,0.08);">
      <div style="font-size:13px;font-weight:800;color:#191919;">어디로 갈까요?</div>
      <button style="background:#F5F6F8;color:#191919;border:0;border-radius:10px;padding:14px 12px;font:600 14px/1 inherit;text-align:left;display:flex;align-items:center;gap:8px;cursor:pointer;">🔍 <span style="color:#7E8593;">목적지 입력</span></button>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
        <button style="background:#FAE100;color:#191919;border:0;border-radius:10px;padding:14px 6px;font:800 12px/1.2 inherit;cursor:pointer;">🚕<br/>택시</button>
        <button style="background:#F5F6F8;color:#191919;border:0;border-radius:10px;padding:14px 6px;font:700 12px/1.2 inherit;cursor:pointer;">🛵<br/>바이크</button>
        <button style="background:#F5F6F8;color:#191919;border:0;border-radius:10px;padding:14px 6px;font:700 12px/1.2 inherit;cursor:pointer;">🅿️<br/>주차</button>
      </div>
    </div>
  </div>

sources:
  - https://kakao.com/
  - https://kakaomobility.com/
---

### ① 브랜드 DNA
- **브랜드명**: KakaoT (카카오 T)
- **한 줄 정체성**: 택시·바이크·대리·주차·내비를 묶은 한국 모빌리티 슈퍼앱
- **공식 디자인 철학**: "이동을 더 쉽고 안전하게" — 즉시 호출 + 투명한 가격
- **시그니처 요소 1개**: 풀스크린 지도 + 흰색 바텀시트 + 카카오 T 옐로우(#FAE100) 호출 CTA. 카카오 패밀리 옐로우보다 살짝 따뜻한 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 즉시, 친근, 안심
- **무드 설명**: 지도 위 흰색 바텀시트 + 가벼운 라운드 16px + 노랑 호출 버튼. 한 화면 = 한 액션 원칙. 차량 종류·요금 정보는 큰 글자, 16px 카드 분리.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable — 터치 영역 큼(택시 호출 버튼 56px+)
- **모서리 성향**: Round (12~16px) — 카카오 패밀리 공통
- **평면성**: Subtle — 바텀시트에 sm 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Kakao T Yellow */
  --color-primary-50:  #FFFEF0;
  --color-primary-100: #FFFCC2;
  --color-primary-200: #FFF685;
  --color-primary-300: #FFEE47;
  --color-primary-400: #FCE61F;
  --color-primary-500: #FAE100;   /* Kakao T Yellow */
  --color-primary-600: #E0CA00;
  --color-primary-700: #B3A100;
  --color-primary-800: #867800;
  --color-primary-900: #595000;

  /* Secondary - 예약/블루 강조 */
  --color-secondary-500: #3478F6;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #F5F6F8;
  --color-neutral-200:  #E8EAED;
  --color-neutral-300:  #D6D9DD;
  --color-neutral-500:  #A0A4AB;
  --color-neutral-700:  #7E8593;     /* text tertiary */
  --color-neutral-800:  #4A4F58;
  --color-neutral-900:  #191919;     /* text primary */
  --color-neutral-1000: #000000;

  /* Map muted (지도 위 카드) */
  --map-bg-light:  #E8EEF2;
  --map-bg-dark:   #1B1D24;

  /* Semantic */
  --color-success-bg: #E8F8E8;
  --color-success-fg: #16A55C;
  --color-warning-bg: #FFF6E0;
  --color-warning-fg: #F2A50C;
  --color-error-bg:   #FFEDED;
  --color-error-fg:   #E53935;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #3478F6;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F6F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,25,25,0.55);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #4A4F58;
  --text-tertiary:   #7E8593;
  --text-on-primary: #191919;
  --text-disabled:   #A0A4AB;

  /* Border */
  --border-default: #E8EAED;
  --border-subtle:  #F5F6F8;
  --border-strong:  #D6D9DD;
  --border-focus:   #3478F6;
}

[data-theme="dark"] {
  --bg-base: #121212;
  --bg-subtle: #1B1C1F;
  --bg-elevated: #232427;
  --text-primary: #F1F3F5;
  --text-secondary: #B8BDC4;
  --border-default: #2C2F37;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: **Kakao Sans / Pretendard** (OFL)
  - 영문: Kakao Sans Latin / Inter / SF Pro
- **위계**:
  - Display (요금/시간): 32px / 900 / 1.2 / -0.025em
  - H1: 24px / 800 / 1.3 / -0.02em
  - H2 (섹션): 18px / 800 / 1.35 / -0.015em
  - H3 (차량 종류): 15px / 800 / 1.4 / -0.005em
  - Body Large: 15px / 600 / 1.5 / -0.005em
  - Body: 14px / 600 / 1.5 / 0
  - Body Small: 12px / 600 / 1.45 / 0
  - Caption: 11px / 700 / 1.4 / 0.02em

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
- **Container**: max-width 480px (모바일 풀스크린), 좌우 패딩 14px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;      /* 바텀시트 모서리 */
--radius-xl: 20px;
--radius-full: 9999px;  /* 차량 마커 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 2px 8px rgba(0,0,0,0.06);
--shadow-sheet: 0 -2px 12px rgba(0,0,0,0.08);   /* 바텀시트 */
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-cta: 0 8px 20px rgba(250,225,0,0.40);
```

### ⑧ Iconography
- **스타일**: Filled (모드/차량) + Outline (메뉴)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Kakao Icons / Phosphor Fill

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 800 14px/1 'Kakao Sans', Pretendard, sans-serif; letter-spacing: -0.01em;
       border-radius: var(--radius-md); padding: 14px 18px; border: 0;
       display: inline-flex; align-items: center; justify-content: center; gap: 6px;
       transition: background 150ms ease, transform 80ms ease; }
.btn:active { transform: scale(0.98); }
.btn-call    { background: var(--color-primary-500); color: var(--text-on-primary); font-weight: 900; padding: 16px 18px; }   /* 호출 = 노란 굵은 버튼 */
.btn-call:hover { background: var(--color-primary-400); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); }
.btn-cancel  { background: transparent; color: var(--color-error-fg); border: 1px solid var(--color-error-fg); }
```

**Input**
```css
.search { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 14px 14px; font: 600 14px/1.4 inherit; color: var(--text-primary); display: flex; align-items: center; gap: 8px; }
.search input { all: unset; flex: 1; font: inherit; color: inherit; }
.search input::placeholder { color: var(--text-tertiary); }
```

**Card (Bottom Sheet)**
```css
.sheet { background: #fff; border-radius: var(--radius-lg) var(--radius-lg) 0 0; padding: 16px; box-shadow: var(--shadow-sheet); }
.sheet-handle { width: 36px; height: 4px; background: var(--border-strong); border-radius: 9999px; margin: 0 auto 12px; }
.vehicle-card { background: #fff; border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 14px; display: grid; grid-template-columns: 40px 1fr auto; gap: 12px; align-items: center; }
.vehicle-card.active { border: 2px solid var(--color-primary-500); }
```

**Badge / Tag**
```css
.tag { padding: 3px 8px; border-radius: 9999px; font: 700 11px/1.5 inherit; }
.tag-eta   { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-blue  { background: var(--color-info-bg); color: var(--color-info-fg); }
.tag-soft  { background: var(--color-primary-50); color: var(--color-primary-700); }
```

**Navigation**
```css
.tabbar { background: #fff; border-top: 1px solid var(--border-subtle); display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
.tabbar .item { padding: 6px; text-align: center; font: 700 11px/1.3 inherit; color: var(--text-tertiary); }
.tabbar .item.active { color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-sheet: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 지도 위에 흰색 외 다른 색 캔버스 사용 금지 — 바텀시트는 흰색
2. 호출 CTA를 노란색 외 다른 색으로 변경 금지 — 옐로우 단일 액션 원칙
3. 한 화면에 차량 모드 4종 이상 동시 노출 금지 — 택시·바이크·대리·주차 등 그리드 3~4분할 한정
4. 본문 weight 500 이하 사용 금지 — 야간/이동 중 가독성 미달
5. 노랑 호출 위에 흰 텍스트 사용 금지 — 명도 부족, 반드시 검정

### ⑫ 시그니처 적용 예시 (카카오 T 홈)

```html
<style>
  body { margin: 0; font-family: 'Kakao Sans', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #191919; background: #E8EEF2; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; position: relative; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { background: #fff; padding: 12px 14px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); position: relative; z-index: 2; }
  .topbar .brand { font-weight: 900; font-size: 20px; letter-spacing: -0.025em; }
  .topbar .icons { margin-left: auto; font-size: 16px; color: #7E8593; }
  .map { position: relative; background: linear-gradient(180deg, #E8EEF2 0%, #BAC6CF 100%); min-height: 360px; }
  .map svg { display: block; width: 100%; height: 100%; opacity: 0.45; }
  .map .marker { position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); width: 44px; height: 44px; border-radius: 9999px; background: #FAE100; box-shadow: 0 4px 12px rgba(0,0,0,0.18); display: grid; place-items: center; font-size: 20px; }
  .sheet { background: #fff; border-radius: 16px 16px 0 0; padding: 14px; box-shadow: 0 -2px 12px rgba(0,0,0,0.08); position: sticky; bottom: 60px; z-index: 2; }
  .sheet .handle { width: 36px; height: 4px; background: #D6D9DD; border-radius: 9999px; margin: 0 auto 12px; }
  .sheet h2 { font: 900 16px/1.3 inherit; margin: 0 0 10px; }
  .destination { background: #F5F6F8; color: #191919; border: 0; border-radius: 10px; padding: 14px 12px; font: 600 14px/1 inherit; display: flex; align-items: center; gap: 8px; width: 100%; box-sizing: border-box; cursor: pointer; margin-bottom: 10px; }
  .destination .ic { color: #7E8593; }
  .destination .ph { color: #7E8593; font-weight: 500; }
  .modes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
  .modes button { background: #F5F6F8; color: #191919; border: 0; border-radius: 10px; padding: 14px 4px; font: 700 12px/1.3 inherit; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .modes button.active { background: #FAE100; font-weight: 900; }
  .quick { margin-top: 12px; background: #fff; border: 1px solid #E8EAED; border-radius: 10px; padding: 12px; display: grid; grid-template-columns: 36px 1fr auto; gap: 10px; align-items: center; }
  .quick .ic { width: 36px; height: 36px; border-radius: 9999px; background: #FFFCC2; color: #191919; display: grid; place-items: center; font: 900 14px/1 inherit; }
  .quick .name { font: 800 13px/1.3 inherit; }
  .quick .meta { font: 600 11px/1.3 inherit; color: #7E8593; margin-top: 2px; }
  .quick .more { color: #7E8593; }
  .tabbar { background: #fff; border-top: 1px solid #E8EAED; display: grid; grid-template-columns: repeat(5, 1fr); padding: 4px 0; }
  .tabbar .item { padding: 6px; text-align: center; font: 700 11px/1.3 inherit; color: #A0A4AB; }
  .tabbar .item.active { color: #191919; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand">kakao T</span>
    <span class="icons">🔔 ⚙</span>
  </header>
  <section class="map">
    <svg viewBox="0 0 480 360"><path d="M0,80 Q120,40 240,90 T480,120" stroke="#fff" stroke-width="6" fill="none"/><path d="M0,200 Q140,140 280,180 T480,220" stroke="#fff" stroke-width="4" fill="none"/></svg>
    <div class="marker">📍</div>
  </section>
  <section class="sheet">
    <div class="handle"></div>
    <h2>어디로 갈까요?</h2>
    <button class="destination"><span class="ic">🔍</span><span class="ph">목적지 입력</span></button>
    <div class="modes">
      <button class="active">🚕<span>택시</span></button>
      <button>🛵<span>바이크</span></button>
      <button>🅿️<span>주차</span></button>
      <button>🚌<span>대리</span></button>
    </div>
    <div class="quick">
      <div class="ic">집</div>
      <div>
        <div class="name">집</div>
        <div class="meta">서울 강남구 테헤란로</div>
      </div>
      <span class="more">›</span>
    </div>
  </section>
  <nav class="tabbar">
    <div class="item active">홈</div>
    <div class="item">이용내역</div>
    <div class="item">결제</div>
    <div class="item">이벤트</div>
    <div class="item">전체</div>
  </nav>
</div>
```
