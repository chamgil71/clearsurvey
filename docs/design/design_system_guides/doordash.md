---
brand: DoorDash
brand_ko: 도어대시
slug: doordash
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - ecommerce
  - consumer

color_tone: warm
primary_color_hex: "#FF3008"
primary_color_name: "DoorDash Red"
mood:
  - 활기참
  - 빠른 배달
  - 지역적

font_category: sans-serif
font_primary: TT Norms
font_korean_supported: true

density: compact
corner_style: round
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2013
last_major_revision: 2024
signature_keyword: "Red 액센트와 음식 사진 그리드의 푸드 배달 톤"

hero_html: |
  <div style="font-family:'TT Norms',Inter,'Pretendard',-apple-system,sans-serif;background:#FFFFFF;color:#191919;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #EEEEEE;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <strong style="font-size:18px;font-weight:800;color:#FF3008;letter-spacing:-0.02em;">DoorDash</strong>
      <span style="margin-left:auto;background:#FFE9E5;color:#FF3008;padding:2px 10px;border-radius:9999px;font-size:10px;font-weight:700;">DashPass</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;gap:6px;overflow:hidden;">
        <span style="background:#FF3008;color:#fff;padding:5px 10px;border-radius:9999px;font-size:10px;font-weight:700;flex:0 0 auto;">전체</span>
        <span style="background:#fff;color:#191919;border:1px solid #DDDDDD;padding:5px 10px;border-radius:9999px;font-size:10px;font-weight:600;flex:0 0 auto;">🍔 햄버거</span>
        <span style="background:#fff;color:#191919;border:1px solid #DDDDDD;padding:5px 10px;border-radius:9999px;font-size:10px;font-weight:600;flex:0 0 auto;">🍕 피자</span>
        <span style="background:#fff;color:#191919;border:1px solid #DDDDDD;padding:5px 10px;border-radius:9999px;font-size:10px;font-weight:600;flex:0 0 auto;">🍣 스시</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div>
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#FFE9E5,#FF3008);border-radius:14px;position:relative;display:grid;place-items:center;font-size:36px;">🍔</div>
          <div style="margin-top:4px;">
            <div style="font-size:11px;font-weight:700;display:flex;justify-content:space-between;"><span>Burger House</span><span>★ 4.7</span></div>
            <div style="font-size:10px;color:#767676;">25–35분 · ₩4,500 배송</div>
            <span style="display:inline-block;background:#E0F4EC;color:#1B7E47;padding:1px 6px;border-radius:9999px;font-size:9px;font-weight:700;margin-top:2px;">DashPass</span>
          </div>
        </div>
        <div>
          <div style="aspect-ratio:1;background:linear-gradient(135deg,#FFE5DD,#FFC15B);border-radius:14px;position:relative;display:grid;place-items:center;font-size:36px;">🍕</div>
          <div style="margin-top:4px;">
            <div style="font-size:11px;font-weight:700;display:flex;justify-content:space-between;"><span>Pizza Co.</span><span>★ 4.6</span></div>
            <div style="font-size:10px;color:#767676;">20–30분 · ₩3,000 배송</div>
          </div>
        </div>
      </div>
    </div>
  </div>

sources:
  - https://www.doordash.com/
  - https://help.doordash.com/
  - https://about.doordash.com/
---

### ① 브랜드 DNA
- **브랜드명**: DoorDash
- **한 줄 정체성**: 미국 1위 음식 배달 플랫폼 — 지역 식당과 소비자를 잇는 라스트마일 네트워크
- **공식 디자인 철학**: "Empower local economies — fast, friendly, dependable"
- **시그니처 요소 1개**: DoorDash Red(#FF3008) + 큰 음식 사진 카드 + DashPass 멤버십 그린

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기참, 빠른 배달, 지역적
- **무드 설명**: 흰 캔버스 + 큰 음식 사진. Red가 brand action에, Green이 DashPass 멤버십에 사용. 식욕을 자극하는 따뜻한 톤.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (음식 사진)
- **밀도(Density)**: Compact — 음식점 카드 그리드
- **모서리 성향**: Round (12~16px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - DoorDash Red */
  --color-primary-50:  #FFE9E5;
  --color-primary-100: #FFCBC0;
  --color-primary-200: #FF9682;
  --color-primary-300: #FF6244;
  --color-primary-400: #FF4824;
  --color-primary-500: #FF3008;  /* DoorDash Red */
  --color-primary-600: #E02906;
  --color-primary-700: #B82105;
  --color-primary-800: #8A1903;
  --color-primary-900: #5C1002;

  /* Secondary - DashPass Green */
  --color-secondary-500: #1B7E47;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F4F4F4;
  --color-neutral-200:  #EEEEEE;
  --color-neutral-300:  #DDDDDD;
  --color-neutral-500:  #B0B0B0;
  --color-neutral-700:  #767676;
  --color-neutral-800:  #4D4D4D;
  --color-neutral-900:  #191919;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4EC;
  --color-success-fg: #1B7E47;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE9E5;
  --color-error-fg:   #FF3008;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #2563EB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,25,25,0.50);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #767676;
  --text-tertiary:   #B0B0B0;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #DDDDDD;

  /* Border */
  --border-default: #DDDDDD;
  --border-subtle:  #EEEEEE;
  --border-strong:  #B0B0B0;
  --border-focus:   #FF3008;
}

[data-theme="dark"] {
  --bg-base: #191919;
  --bg-subtle: #2A2A2A;
  --bg-elevated: #383838;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: TT Norms / Inter (OFL fallback) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 800 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.15 / -0.01em
  - H2: 22px / 700 / 1.27 / 0
  - H3: 17px / 700 / 1.3 / 0
  - Body Large: 15px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 700 / 1.27 / 0

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
- **Container**: max-width 1280px, 좌우 패딩 16px (mobile) / 24px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
--shadow-xl: 0 16px 32px rgba(255,48,8,0.18);
```

### ⑧ Iconography
- **스타일**: Outline + Emoji (음식 카테고리에 emoji 적극 사용)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor + 시스템 emoji

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'TT Norms', Inter, 'Pretendard', sans-serif;
  border-radius: 9999px;
  padding: 0 18px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 9999px; padding: 10px 18px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(255,48,8,0.18); }
```

**Card** (Restaurant card)
```css
.restaurant { cursor: pointer; }
.restaurant .photo { aspect-ratio: 1.4; border-radius: var(--radius-lg); position: relative; overflow: hidden; }
.restaurant .meta { padding: 8px 4px; }
.restaurant h3 { font-size: 15px; font-weight: 700; margin: 0; display: flex; justify-content: space-between; gap: 8px; }
.card { background: var(--bg-base); border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge / DashPass**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-pass    { background: var(--color-success-bg); color: var(--color-success-fg); }
```

**Navigation**
```css
.topnav { padding: 12px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-subtle); }
.topnav .brand { font-weight: 800; font-size: 22px; color: var(--color-primary-500); letter-spacing: -0.02em; }
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
1. button을 sharp 사각으로 변경 금지 — pill 시그니처
2. brand red를 본문 텍스트에 사용 금지 — 액션과 brand mark에만
3. DashPass green을 일반 success 신호로 무차별 사용 금지 — 멤버십 식별 신호 보존
4. 음식 사진 위에 채도 높은 텍스트 overlay 사용 금지 — 사진 식별성 저하
5. 카테고리 칩의 emoji를 임의 색 변경 금지

### ⑫ 시그니처 적용 예시 (Mobile feed)

```html
<style>
  body { margin: 0; font-family: 'TT Norms', Inter, 'Pretendard', -apple-system, sans-serif; color: #191919; background: #fff; }
  .app { max-width: 420px; margin: 0 auto; min-height: 100vh; }
  .topbar { padding: 14px 18px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #EEEEEE; }
  .topbar .brand { font-weight: 800; font-size: 24px; color: #FF3008; letter-spacing: -0.02em; }
  .topbar .pass { background: #FFE9E5; color: #FF3008; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; }
  .search { padding: 12px 18px; }
  .search input { width: 100%; box-sizing: border-box; background: #F4F4F4; border: 0; border-radius: 9999px; padding: 12px 18px; font-size: 14px; font-family: inherit; }
  .chips { padding: 0 18px 12px; display: flex; gap: 8px; overflow-x: auto; }
  .chip { background: #fff; border: 1px solid #DDDDDD; padding: 8px 14px; border-radius: 9999px; font-size: 13px; font-weight: 600; flex: 0 0 auto; }
  .chip.active { background: #FF3008; color: #fff; border-color: #FF3008; }
  .grid { padding: 0 18px 24px; display: grid; grid-template-columns: 1fr; gap: 18px; }
  .restaurant .photo { aspect-ratio: 1.6; border-radius: 16px; display: grid; place-items: center; font-size: 80px; position: relative; }
  .restaurant .photo .like { position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.9); width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-size: 16px; }
  .restaurant .meta { padding: 10px 0 0; }
  .restaurant h3 { margin: 0; font-size: 17px; font-weight: 700; display: flex; justify-content: space-between; }
  .restaurant .sub { font-size: 13px; color: #767676; margin: 4px 0 0; display: flex; gap: 8px; align-items: center; }
  .pass-tag { background: #E0F4EC; color: #1B7E47; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 700; }
</style>

<div class="app">
  <header class="topbar">
    <div class="brand">DoorDash</div>
    <div class="pass" style="margin-left:auto">DashPass</div>
  </header>
  <div class="search"><input placeholder="🔍 음식점 또는 음식 검색"/></div>
  <div class="chips">
    <span class="chip active">전체</span>
    <span class="chip">🍔 햄버거</span>
    <span class="chip">🍕 피자</span>
    <span class="chip">🍣 스시</span>
    <span class="chip">🥗 샐러드</span>
    <span class="chip">🍜 라면</span>
  </div>
  <div class="grid">
    <div class="restaurant">
      <div class="photo" style="background:linear-gradient(135deg,#FFE9E5,#FF3008);">🍔<span class="like">♡</span></div>
      <div class="meta">
        <h3><span>Burger House</span><span>★ 4.7</span></h3>
        <div class="sub"><span>25–35분</span><span>·</span><span>₩4,500 배송</span><span class="pass-tag">DashPass</span></div>
      </div>
    </div>
    <div class="restaurant">
      <div class="photo" style="background:linear-gradient(135deg,#FFE5DD,#FFC15B);">🍕<span class="like">♡</span></div>
      <div class="meta">
        <h3><span>Pizza Co.</span><span>★ 4.6</span></h3>
        <div class="sub"><span>20–30분</span><span>·</span><span>₩3,000 배송</span></div>
      </div>
    </div>
    <div class="restaurant">
      <div class="photo" style="background:linear-gradient(135deg,#E0F4EC,#1B7E47);">🍣<span class="like">♡</span></div>
      <div class="meta">
        <h3><span>Sushi Bar</span><span>★ 4.9</span></h3>
        <div class="sub"><span>30–40분</span><span>·</span><span>₩5,000 배송</span><span class="pass-tag">DashPass</span></div>
      </div>
    </div>
  </div>
</div>
```
