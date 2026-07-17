---
brand: Google Maps
brand_ko: 구글 지도
slug: google-maps
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - mobility
  - consumer

color_tone: cool
primary_color_hex: "#4285F4"
primary_color_name: "Maps Blue"
mood:
  - 지도
  - 길찾기
  - 정확

font_category: sans-serif
font_primary: Google Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2005
last_major_revision: 2024
signature_keyword: "빨강 지오 핀 + 4색 지도 타일(도로 회색·물 블루·녹지 그린) + 길찾기 패널"

card_tokens: |
  {
    "light": { "bg": "#E8EFF4", "surface": "#FFFFFF", "border": "#DADCE0", "fg": "#202124", "fg_muted": "#5F6368", "accent": "#1A73E8" },
    "dark":  { "bg": "#202124", "surface": "#2D2E31", "border": "#3C4043", "fg": "#E8EAED", "fg_muted": "#BDC1C6", "accent": "#8AB4F8" }
  }

hero_html: |
  <div style="font-family:'Google Sans','Roboto',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.003em;position:relative;overflow:hidden;">
    <div style="padding:8px 10px;background:var(--card-surface);display:flex;align-items:center;gap:6px;border-radius:9999px;margin:8px 10px 0;box-shadow:0 1px 6px rgba(0,0,0,0.45);">
      <div style="width:22px;height:22px;background:var(--card-surface);display:grid;place-items:center;font:900 14px/1 sans-serif;color:var(--card-accent);">☰</div>
      <input style="flex:1;border:0;outline:0;font:400 13px/1 inherit;color:var(--card-fg);" value="구글 본사" />
      <div style="width:24px;height:24px;background:var(--card-accent);border-radius:9999px;display:grid;place-items:center;color:#202124;font:700 12px/1 inherit;">🔍</div>
    </div>
    <div style="position:relative;background:linear-gradient(135deg,#1A2330 0%,#1B2A22 60%,#16241C 100%);overflow:hidden;">
      <svg viewBox="0 0 280 200" style="position:absolute;inset:0;width:100%;height:100%;">
        <path d="M -20 60 L 80 100 L 130 70 L 220 130 L 320 100" stroke="#5A5F66" stroke-width="10" fill="none" stroke-linecap="round"/>
        <path d="M -20 60 L 80 100 L 130 70 L 220 130 L 320 100" stroke="#E8B84B" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M 40 -20 L 50 80 L 110 130 L 90 220" stroke="#5A5F66" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M 40 -20 L 50 80 L 110 130 L 90 220" stroke="#5A5F66" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="0 0"/>
        <circle cx="130" cy="70" r="6" fill="#202124" stroke="#8AB4F8" stroke-width="3"/>
      </svg>
      <div style="position:absolute;left:135px;top:40px;display:flex;flex-direction:column;align-items:center;">
        <div style="font-size:28px;color:#F28B82;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.55));">📍</div>
      </div>
      <div style="position:absolute;right:8px;bottom:8px;display:flex;flex-direction:column;gap:4px;">
        <div style="width:32px;height:32px;background:var(--card-surface);border-radius:6px;display:grid;place-items:center;font:700 16px/1 inherit;box-shadow:0 1px 4px rgba(0,0,0,0.5);">+</div>
        <div style="width:32px;height:32px;background:var(--card-surface);border-radius:6px;display:grid;place-items:center;font:700 16px/1 inherit;box-shadow:0 1px 4px rgba(0,0,0,0.5);">−</div>
      </div>
    </div>
    <div style="background:var(--card-surface);padding:10px 14px;display:flex;flex-direction:column;gap:4px;box-shadow:0 -2px 6px rgba(0,0,0,0.40);">
      <div style="display:flex;align-items:center;gap:8px;font:700 14px/1.3 inherit;">Googleplex<span style="background:#16223A;color:var(--card-accent);border-radius:4px;padding:1px 6px;font:700 10px/1.3 inherit;">본사</span></div>
      <div style="font:500 11px/1.3 inherit;color:var(--card-fg-muted);">1600 Amphitheatre Pkwy, Mountain View</div>
      <div style="display:flex;gap:6px;margin-top:4px;">
        <div style="background:var(--card-accent);color:#202124;border-radius:9999px;padding:5px 12px;font:700 11px/1 inherit;display:inline-flex;gap:5px;align-items:center;">🧭 길찾기</div>
        <div style="background:var(--card-surface);color:var(--card-accent);border:1px solid var(--card-border);border-radius:9999px;padding:5px 12px;font:700 11px/1 inherit;">⤴ 공유</div>
      </div>
    </div>
  </div>

sources:
  - https://maps.google.com/
  - https://m3.material.io/
---

### ① 브랜드 DNA
- **브랜드명**: Google Maps
- **한 줄 정체성**: 세계 지도·길찾기·라이브 트래픽·스트리트 뷰 통합
- **공식 디자인 철학**: Material 3 — 지도가 주인공, UI는 카드/풀필 버튼으로 떠 있음
- **시그니처 요소 1개**: 빨강(#EA4335) 지오핀(드롭 그림자) + Maps 4색 지도 타일(도로 #FEFEFE·물 #AADAFF·녹지 #C8E6C9·건물 #F5F5F5) + 옐로 하이라이트 라우트 + 흰 풀필 검색바. Naver/Kakao 맵의 그린·옐로 톤과 차별

### ② 톤 & 무드
- **핵심 키워드 3개**: 지도, 길찾기, 정확
- **무드 설명**: 지도 타일이 화면을 채우고 UI는 검색바·하단 카드·우측 줌 컨트롤로 떠 있음. 라이트 톤 기본, 다크 모드 지원.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (8~16px, 검색바 9999px)
- **평면성**: Subtle — 카드는 Material 그림자

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Maps Blue (dark-tuned: 어두운 지도 위 대비 위해 라이트 톤이 더 강조) */
  --color-primary-50:  #0B2A66;
  --color-primary-100: #134496;
  --color-primary-200: #185ABC;
  --color-primary-300: #1967D2;
  --color-primary-400: #4285F4;
  --color-primary-500: #669DF6;   /* Maps Blue (dark accent) */
  --color-primary-600: #8AB4F8;
  --color-primary-700: #AECBFA;
  --color-primary-800: #D2E3FC;
  --color-primary-900: #E8F0FE;

  /* Map tile colors (시그니처 · 다크 지도) */
  --map-water:    #17263D;
  --map-park:     #1B3024;
  --map-road:     #5A5F66;
  --map-highway:  #E8B84B;
  --map-building: #2A2C2F;
  --map-pin:      #F28B82;
  --map-route:    #8AB4F8;
  --map-route-alt:#FDD663;

  /* Neutral (inverted ramp) */
  --color-neutral-0:    #1A1A1C;
  --color-neutral-50:   #202124;
  --color-neutral-100:  #292A2D;
  --color-neutral-200:  #3C4043;
  --color-neutral-300:  #5F6368;
  --color-neutral-500:  #9AA0A6;
  --color-neutral-700:  #BDC1C6;
  --color-neutral-800:  #DADCE0;
  --color-neutral-900:  #E8EAED;
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #16291D;
  --color-success-fg: #81C995;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #FDD663;
  --color-error-bg:   #2E1A17;
  --color-error-fg:   #F28B82;
  --color-info-bg:    #16223A;
  --color-info-fg:    #8AB4F8;

  /* Surface */
  --bg-base:     #202124;
  --bg-subtle:   #292A2D;
  --bg-elevated: #2D2E31;
  --bg-map:      linear-gradient(135deg, #1A2330 0%, #1B2A22 60%, #16241C 100%);
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #E8EAED;
  --text-secondary:  #BDC1C6;
  --text-tertiary:   #9AA0A6;
  --text-on-primary: #202124;
  --text-link:       #8AB4F8;
  --text-disabled:   #5F6368;

  /* Border */
  --border-default: #3C4043;
  --border-subtle:  #2D2E31;
  --border-strong:  #5F6368;
  --border-focus:   #8AB4F8;
}

[data-theme="light"] {
  /* Primary - Maps Blue (액션) */
  --color-primary-50:  #E8F0FE;
  --color-primary-100: #D2E3FC;
  --color-primary-200: #AECBFA;
  --color-primary-300: #8AB4F8;
  --color-primary-400: #669DF6;
  --color-primary-500: #4285F4;   /* Maps Blue */
  --color-primary-600: #1967D2;
  --color-primary-700: #185ABC;
  --color-primary-800: #134496;
  --color-primary-900: #0B2A66;

  /* Map tile colors (시그니처) */
  --map-water:    #AADAFF;
  --map-park:     #C8E6C9;
  --map-road:     #FFFFFF;
  --map-highway:  #FFC65C;
  --map-building: #F0F0F0;
  --map-pin:      #EA4335;
  --map-route:    #4285F4;
  --map-route-alt:#FBBC04;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FA;
  --color-neutral-100:  #F1F3F4;
  --color-neutral-200:  #E8EAED;
  --color-neutral-300:  #DADCE0;
  --color-neutral-500:  #9AA0A6;
  --color-neutral-700:  #5F6368;
  --color-neutral-800:  #3C4043;
  --color-neutral-900:  #202124;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F4EA;
  --color-success-fg: #137333;
  --color-warning-bg: #FEF7E0;
  --color-warning-fg: #BF6900;
  --color-error-bg:   #FCE8E6;
  --color-error-fg:   #C5221F;
  --color-info-bg:    #E8F0FE;
  --color-info-fg:    #1A73E8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F9FA;
  --bg-elevated: #FFFFFF;
  --bg-map:      linear-gradient(135deg, #E8EFF4 0%, #D9E5DB 60%, #BFD9C8 100%);
  --bg-overlay:  rgba(32,33,36,0.45);

  /* Text */
  --text-primary:    #202124;
  --text-secondary:  #3C4043;
  --text-tertiary:   #5F6368;
  --text-on-primary: #FFFFFF;
  --text-link:       #1A73E8;
  --text-disabled:   #9AA0A6;

  /* Border */
  --border-default: #DADCE0;
  --border-subtle:  #E8EAED;
  --border-strong:  #9AA0A6;
  --border-focus:   #1A73E8;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Google Sans** / Roboto / system-ui
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 28px / 700 / 1.2
  - H1: 22px / 600 / 1.25
  - H2: 18px / 600 / 1.3
  - H3: 16px / 500 / 1.35
  - Body Large: 16px / 400 / 1.5
  - Body: 14px / 400 / 1.45
  - Body Small: 13px / 500 / 1.4
  - Map label: 11px / 500 / 1 (지도 라벨)
  - Caption: 12px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;     /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px; /* 검색바·액션 시그니처 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 4px rgba(0,0,0,0.45);
--shadow-md: 0 2px 8px rgba(0,0,0,0.55);  /* 떠 있는 검색바 */
--shadow-lg: 0 6px 24px rgba(0,0,0,0.65); /* Bottom sheet */
```

### ⑧ Iconography
- **스타일**: Material Symbols Rounded
- **Stroke 굵기**: outline 24
- **모서리 처리**: Round
- **추천 라이브러리**: Material Symbols (Rounded)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 13px/1 'Google Sans', Roboto, sans-serif; border-radius: 9999px; padding: 9px 18px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); display: inline-flex; align-items: center; gap: 6px; }
.btn-primary:hover { background: var(--color-primary-600); box-shadow: var(--shadow-sm); }
.btn-secondary { background: var(--bg-elevated); color: var(--color-primary-600); border: 1px solid var(--border-default); }
.btn-fab { width: 48px; height: 48px; padding: 0; background: var(--bg-elevated); color: var(--color-primary-500); box-shadow: var(--shadow-md); border-radius: 9999px; }
.btn-zoom { width: 36px; height: 36px; background: var(--bg-elevated); color: var(--text-primary); border-radius: 6px; font: 700 18px/1 inherit; box-shadow: var(--shadow-sm); padding: 0; }
```

**Input (Search bar)**
```css
.searchbar { background: var(--bg-elevated); border-radius: 9999px; padding: 10px 16px; box-shadow: var(--shadow-md); display: flex; align-items: center; gap: 10px; }
.searchbar input { all: unset; flex: 1; font: 500 14px/1 inherit; color: var(--text-primary); }
.searchbar .ic { color: var(--text-tertiary); font-size: 18px; }
```

**Card (POI / Bottom sheet)**
```css
.poi-card { background: var(--bg-elevated); border-radius: 12px 12px 0 0; padding: 14px 16px; box-shadow: var(--shadow-lg); }
.poi-card .name { font: 700 18px/1.3 inherit; }
.poi-card .addr { font: 500 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 3px; }
.poi-card .rating { display: inline-flex; align-items: center; gap: 4px; font: 600 13px/1.4 inherit; color: var(--text-primary); margin-top: 6px; }
.poi-card .rating .stars { color: #FDD663; }
.poi-card .actions { display: flex; gap: 8px; margin-top: 12px; }
.directions-card { background: var(--bg-elevated); border-radius: 12px; padding: 12px 16px; box-shadow: var(--shadow-md); display: grid; grid-template-columns: 36px 1fr auto; gap: 10px; align-items: center; }
.directions-card .mode { width: 32px; height: 32px; border-radius: 9999px; background: var(--color-primary-500); color: #202124; display: grid; place-items: center; font: 700 16px/1 inherit; }
.directions-card .eta { font: 700 18px/1.3 inherit; }
.directions-card .dist { font: 500 12px/1.4 inherit; color: var(--text-tertiary); margin-top: 2px; }
```

**Badge / Tag**
```css
.chip-poi { background: var(--bg-elevated); border-radius: 9999px; padding: 5px 12px; font: 600 12px/1 inherit; color: var(--text-primary); box-shadow: var(--shadow-sm); display: inline-flex; align-items: center; gap: 5px; cursor: pointer; }
.chip-poi.active { background: var(--color-primary-500); color: #202124; }
.tag-traffic-fast { background: var(--color-success-bg); color: var(--color-success-fg); border-radius: 9999px; padding: 1px 8px; font: 700 11px/1.3 inherit; }
.tag-traffic-slow { background: var(--color-error-bg); color: var(--color-error-fg); border-radius: 9999px; padding: 1px 8px; font: 700 11px/1.3 inherit; }
.pin { font-size: 28px; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.55)); color: var(--map-pin); }
.pin.user { color: var(--color-primary-500); }
```

**Navigation (Floating chips + bottom sheet)**
```css
.chip-row { display: flex; gap: 8px; padding: 8px 16px; overflow-x: auto; }
.bottom-sheet { background: var(--bg-elevated); border-radius: 16px 16px 0 0; box-shadow: var(--shadow-lg); padding: 14px 16px; }
.bottom-sheet .handle { width: 32px; height: 4px; background: var(--border-strong); border-radius: 9999px; margin: 0 auto 10px; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 360ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 빨강 지오핀 모양 변경 금지 — 드롭 형태 그림자가 정체성
2. 검색바를 사각 모서리(4~8px)로 표현 금지 — 9999px 풀필 + 떠 있는 그림자
3. 라우트 라인을 단색으로만 표현 금지 — 메인은 블루(#4285F4), 대안은 옐로(#FBBC04)
4. UI를 지도 위 덮개로 가득 채우기 금지 — 지도가 주인공, UI는 카드/칩으로만
5. Naver/Kakao 톤(그린/옐로 지도)으로 변경 금지 — Google Maps의 4색 타일 팔레트 고수

### ⑫ 시그니처 적용 예시 (Google Maps 길찾기)

```html
<style>
  body { margin: 0; font-family: 'Google Sans', Roboto, Pretendard, -apple-system, sans-serif; color: #E8EAED; background: #202124; letter-spacing: -0.003em; }
  .app { display: grid; grid-template-rows: 1fr; height: 100vh; position: relative; }
  .map { position: absolute; inset: 0; background: linear-gradient(135deg, #1A2330 0%, #1B2A22 60%, #16241C 100%); overflow: hidden; }
  .map svg { width: 100%; height: 100%; }
  .map .water { fill: #17263D; }
  .map .park { fill: #1B3024; }
  .map .road { stroke: #5A5F66; stroke-width: 10; fill: none; stroke-linecap: round; }
  .map .highway-shadow { stroke: #3A3D42; stroke-width: 14; fill: none; stroke-linecap: round; }
  .map .highway { stroke: #E8B84B; stroke-width: 8; fill: none; stroke-linecap: round; }
  .map .route-shadow { stroke: #0E1626; stroke-width: 10; fill: none; stroke-linecap: round; }
  .map .route { stroke: #8AB4F8; stroke-width: 6; fill: none; stroke-linecap: round; }
  .map .label { font: 700 13px Roboto, sans-serif; fill: #BDC1C6; text-anchor: middle; }
  .map .label-water { fill: #8AB4F8; font-style: italic; }
  .pin { position: absolute; font-size: 32px; filter: drop-shadow(0 3px 4px rgba(0,0,0,0.55)); color: #F28B82; transform: translate(-50%, -100%); }
  .pin.user { color: #8AB4F8; }
  .me-dot { position: absolute; transform: translate(-50%, -50%); width: 16px; height: 16px; background: #8AB4F8; border: 3px solid #202124; border-radius: 9999px; box-shadow: 0 0 0 8px rgba(138,180,248,0.20), 0 1px 6px rgba(0,0,0,0.5); }
  .topbar { position: absolute; top: 12px; left: 12px; right: 12px; display: flex; gap: 8px; align-items: center; }
  .searchbar { flex: 1; background: #2D2E31; border-radius: 9999px; padding: 10px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.55); display: flex; align-items: center; gap: 10px; max-width: 420px; }
  .searchbar input { all: unset; flex: 1; font: 500 14px/1 inherit; color: #E8EAED; }
  .searchbar .ico { color: #9AA0A6; font-size: 18px; }
  .searchbar .menu { color: #9AA0A6; font-size: 18px; cursor: pointer; }
  .av { width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, #669DF6, #8AB4F8); color: #202124; display: grid; place-items: center; font: 700 14px/1 inherit; box-shadow: 0 2px 6px rgba(0,0,0,0.55); cursor: pointer; }
  .chips { position: absolute; top: 70px; left: 12px; right: 12px; display: flex; gap: 8px; overflow-x: auto; padding: 4px 0; }
  .chip { background: #2D2E31; border-radius: 9999px; padding: 7px 14px; font: 600 12px/1 inherit; color: #BDC1C6; box-shadow: 0 1px 4px rgba(0,0,0,0.45); display: inline-flex; align-items: center; gap: 5px; cursor: pointer; flex: none; }
  .chip.active { background: #8AB4F8; color: #202124; }
  .zoom { position: absolute; right: 12px; bottom: 220px; display: flex; flex-direction: column; gap: 6px; }
  .zoom .btn { width: 38px; height: 38px; background: #2D2E31; color: #E8EAED; border-radius: 8px; font: 700 20px/1 inherit; box-shadow: 0 1px 4px rgba(0,0,0,0.45); display: grid; place-items: center; cursor: pointer; }
  .fab { position: absolute; right: 12px; bottom: 160px; width: 52px; height: 52px; background: #2D2E31; color: #8AB4F8; border-radius: 9999px; font-size: 22px; display: grid; place-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.55); cursor: pointer; }
  .sheet { position: absolute; left: 0; right: 0; bottom: 0; background: #2D2E31; border-radius: 16px 16px 0 0; padding: 14px 18px 18px; box-shadow: 0 -4px 18px rgba(0,0,0,0.60); }
  .sheet .handle { width: 36px; height: 4px; background: #5F6368; border-radius: 9999px; margin: 0 auto 10px; }
  .sheet .route-tab { display: grid; grid-template-columns: 48px 1fr auto; gap: 12px; padding: 8px 0; border-bottom: 1px solid #3C4043; align-items: center; }
  .sheet .route-tab:last-child { border-bottom: 0; }
  .sheet .route-tab .mode { width: 40px; height: 40px; border-radius: 9999px; background: #16223A; color: #8AB4F8; display: grid; place-items: center; font: 700 16px/1 inherit; }
  .sheet .route-tab.active .mode { background: #8AB4F8; color: #202124; }
  .sheet .eta { font: 700 18px/1.3 inherit; }
  .sheet .eta .fast { color: #81C995; font: 700 12px/1.3 inherit; margin-left: 6px; }
  .sheet .dist { font: 500 12px/1.4 inherit; color: #9AA0A6; }
  .sheet .go { background: #8AB4F8; color: #202124; border-radius: 9999px; padding: 9px 18px; font: 700 13px/1 inherit; border: 0; }
</style>

<div class="app">
  <div class="map">
    <svg viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#16181B"/>
      <path class="park" d="M 0 0 L 250 0 L 250 220 L 0 220 Z"/>
      <path class="water" d="M 600 0 L 800 0 L 800 380 L 540 380 L 580 200 Z"/>
      <path class="park" d="M 350 380 L 580 380 L 580 600 L 350 600 Z"/>
      <path class="road" d="M 0 320 L 800 320"/>
      <path class="highway-shadow" d="M 0 460 L 800 460"/>
      <path class="highway" d="M 0 460 L 800 460"/>
      <path class="road" d="M 280 0 L 280 600"/>
      <path class="road" d="M 540 0 L 540 600"/>
      <path class="route-shadow" d="M 120 540 C 260 540 280 460 280 320 C 280 220 380 220 540 320"/>
      <path class="route" d="M 120 540 C 260 540 280 460 280 320 C 280 220 380 220 540 320"/>
      <text class="label" x="130" y="100">Mountain View Park</text>
      <text class="label label-water" x="700" y="200">Pacific Bay</text>
      <text class="label" x="540" y="555" style="fill:#81C995;">Greenfield</text>
    </svg>
    <div class="me-dot" style="left:120px;top:540px;"></div>
    <div class="pin" style="left:540px;top:320px;">📍</div>
  </div>
  <header class="topbar">
    <div class="searchbar">
      <span class="menu">☰</span>
      <input value="Googleplex, Mountain View" />
      <span class="ico">🎯</span>
    </div>
    <div class="av">M</div>
  </header>
  <div class="chips">
    <span class="chip active">🍽 식당</span>
    <span class="chip">☕ 카페</span>
    <span class="chip">🛒 마트</span>
    <span class="chip">⛽ 주유소</span>
    <span class="chip">🏥 병원</span>
    <span class="chip">🚌 정류장</span>
  </div>
  <div class="zoom"><button class="btn">+</button><button class="btn">−</button></div>
  <div class="fab">🧭</div>
  <section class="sheet">
    <div class="handle"></div>
    <div style="display:flex;align-items:flex-end;gap:10px;margin-bottom:12px;">
      <div>
        <div style="font:700 22px/1.2 inherit;">28분</div>
        <div style="font:500 13px/1.4 inherit;color:#9AA0A6;">14.2 km · Highway 101 경유</div>
      </div>
      <span style="background:#16291D;color:#81C995;border-radius:9999px;padding:3px 10px;font:700 11px/1.3 inherit;margin-bottom:3px;">평소보다 빠름 ▼</span>
      <button class="go" style="margin-left:auto;">▶ 시작</button>
    </div>
    <div class="route-tab active">
      <div class="mode">🚗</div>
      <div><div class="eta">28분 <span class="fast">평소대로</span></div><div class="dist">Highway 101 N</div></div>
      <span style="font:600 12px/1 inherit;color:#9AA0A6;">기본</span>
    </div>
    <div class="route-tab">
      <div class="mode">🚌</div>
      <div><div class="eta">42분</div><div class="dist">VTA 22 → 셔틀</div></div>
      <span style="font:600 12px/1 inherit;color:#9AA0A6;">대중교통</span>
    </div>
    <div class="route-tab">
      <div class="mode">🚲</div>
      <div><div class="eta">54분</div><div class="dist">Stevens Creek Trail</div></div>
      <span style="font:600 12px/1 inherit;color:#9AA0A6;">자전거</span>
    </div>
  </section>
</div>
```
