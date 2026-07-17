---
brand: Daangn Market
brand_ko: 당근마켓
slug: daangn
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: korea
industry:
  - ecommerce
  - social
  - consumer

color_tone: warm
primary_color_hex: "#FF6F0F"
primary_color_name: "Daangn Orange"
mood:
  - 친근함
  - 동네
  - 따뜻함

font_category: sans-serif
font_primary: Karrot Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: subtle

visual_style:
  - humanism
  - modern-minimal

theme_modes:
  - light

released_year: 2015
last_major_revision: 2024
signature_keyword: "당근 오렌지와 동네 마스코트의 친근한 중고거래 톤"

hero_html: |
  <div style="font-family:'Karrot Sans',Pretendard,-apple-system,sans-serif;background:#FFFFFF;color:#191919;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#fff;border-bottom:1px solid #F0F0F0;padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:22px;height:22px;background:#FF6F0F;border-radius:7px;color:#fff;display:grid;place-items:center;font-weight:900;font-size:12px;">🥕</span>
      <strong style="font-size:14px;font-weight:800;">당근</strong>
      <span style="margin-left:auto;font-size:11px;color:#666;font-weight:600;">강남구 역삼동 ▾</span>
    </div>
    <div style="padding:10px;display:flex;flex-direction:column;gap:6px;">
      <div style="background:#fff;border:1px solid #F0F0F0;border-radius:14px;padding:12px;display:grid;grid-template-columns:80px 1fr;gap:12px;">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#FF6F0F,#FFC700);border-radius:10px;"></div>
        <div>
          <div style="font-size:13px;font-weight:700;line-height:1.3;">아이폰 14 Pro 256GB 거의 새 것</div>
          <div style="font-size:10px;color:#888;margin-top:4px;">역삼동 · 끌올 1시간 전</div>
          <div style="font-size:15px;font-weight:800;margin-top:4px;">800,000원</div>
          <div style="font-size:10px;color:#666;margin-top:4px;display:flex;gap:8px;">💬 12 ♥ 28</div>
        </div>
      </div>
      <div style="background:#fff;border:1px solid #F0F0F0;border-radius:14px;padding:12px;display:grid;grid-template-columns:80px 1fr;gap:12px;">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#1AAD5C,#FF6F0F);border-radius:10px;"></div>
        <div>
          <div style="font-size:13px;font-weight:700;line-height:1.3;">유아 자전거 (3~5세) 거의 안 탔어요</div>
          <div style="font-size:10px;color:#888;margin-top:4px;">삼성동 · 5분 전</div>
          <div style="font-size:15px;font-weight:800;margin-top:4px;">25,000원</div>
          <div style="font-size:10px;color:#666;margin-top:4px;display:flex;gap:8px;">💬 4 ♥ 8</div>
        </div>
      </div>
      <button style="background:#FF6F0F;color:#fff;border:0;border-radius:9999px;padding:14px 18px;font-size:14px;font-weight:800;font-family:inherit;cursor:pointer;position:fixed;bottom:14px;right:14px;box-shadow:0 6px 16px rgba(255,111,15,0.4);align-self:flex-end;width:fit-content;">+ 글쓰기</button>
    </div>
  </div>

sources:
  - https://www.daangn.com/
  - https://team.daangn.com/
  - https://design.daangn.com/
---

### ① 브랜드 DNA
- **브랜드명**: Daangn Market (당근, 당근마켓)
- **한 줄 정체성**: 동네 기반 중고거래 + 동네생활 — 한국에서 가장 친숙한 하이퍼로컬 커뮤니티
- **공식 디자인 철학**: "당신 근처의 따뜻한 거래 — 친근함, 동네, 신뢰"
- **시그니처 요소 1개**: Daangn Orange(#FF6F0F) + 당근 마스코트 + 동네 위치 표시의 친근 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 동네, 따뜻함
- **무드 설명**: 흰 캔버스 + 오렌지 액센트 + 동네 위치 정보. 거래보다 이웃 같은 톤이 우선이다.
- **비주얼 스타일**: 휴머니즘 + 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (10~14px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Daangn Orange */
  --color-primary-50:  #FFEFE0;
  --color-primary-100: #FFD8B5;
  --color-primary-200: #FFB173;
  --color-primary-300: #FF8A33;
  --color-primary-400: #FF7A1A;
  --color-primary-500: #FF6F0F;  /* Daangn Orange */
  --color-primary-600: #E55A00;
  --color-primary-700: #B84800;
  --color-primary-800: #8A3600;
  --color-primary-900: #5C2300;

  /* Secondary - 동네 그린 */
  --color-secondary-500: #1AAD5C;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-200:  #F0F0F0;
  --color-neutral-300:  #E0E0E0;
  --color-neutral-500:  #C7C7C7;
  --color-neutral-700:  #888888;
  --color-neutral-800:  #555555;
  --color-neutral-900:  #191919;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FFE5E5;
  --color-error-fg:   #FF3838;
  --color-info-bg:    #FFEFE0;
  --color-info-fg:    #FF6F0F;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,25,25,0.50);

  /* Text */
  --text-primary:    #191919;
  --text-secondary:  #555555;
  --text-tertiary:   #888888;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #F0F0F0;
  --border-subtle:  #FAFAFA;
  --border-strong:  #E0E0E0;
  --border-focus:   #FF6F0F;
}

[data-theme="dark"] {
  --bg-base: #1A1A1A;
  --bg-subtle: #2D2D2D;
  --bg-elevated: #383838;
  --text-primary: #F5F5F5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: Karrot Sans / 당근체 / Pretendard (OFL 폴백)
  - 영문: -apple-system / SF Pro
- **위계**:
  - Display: 32px / 800 / 1.15 / -0.025em
  - H1: 22px / 800 / 1.2 / -0.02em
  - H2: 17px / 700 / 1.27 / -0.015em
  - H3: 15px / 700 / 1.3 / -0.01em
  - Body Large: 15px / 500 / 1.5 / -0.005em
  - Body: 14px / 500 / 1.5 / -0.005em
  - Body Small: 12px / 500 / 1.43 / 0
  - Caption: 11px / 600 / 1.27 / 0

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
- **Container**: max-width 480px (모바일 우선)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 8px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(255,111,15,0.30);
```

### ⑧ Iconography
- **스타일**: Outline + Filled
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 15px/1 'Karrot Sans', Pretendard, -apple-system, sans-serif;
  letter-spacing: -0.01em;
  border-radius: var(--radius-md);
  padding: 12px 18px;
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-fab { border-radius: 9999px; box-shadow: 0 6px 16px rgba(255,111,15,0.4); padding: 14px 20px; }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 0; border-radius: var(--radius-md); padding: 12px 14px; font-size: 15px; font-family: inherit; }
.input:focus { outline: 2px solid var(--border-focus); outline-offset: -2px; }
```

**Card** (Listing)
```css
.listing { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px; display: grid; grid-template-columns: 80px 1fr; gap: 12px; }
.listing .img { aspect-ratio: 1; border-radius: var(--radius-md); }
.listing h3 { font-size: 15px; font-weight: 700; line-height: 1.3; margin: 0; }
.listing .area { font-size: 12px; color: var(--text-tertiary); margin-top: 4px; }
.listing .price { font-size: 17px; font-weight: 800; margin-top: 6px; }
.listing .meta { font-size: 12px; color: var(--text-secondary); margin-top: 6px; display: flex; gap: 10px; }
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 14px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-area    { background: #DCF7E5; color: #00874A; }
```

**Navigation**
```css
.topnav { padding: 12px 16px; display: flex; align-items: center; gap: 10px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .brand { font-weight: 800; font-size: 18px; color: var(--color-primary-500); display: flex; align-items: center; gap: 6px; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 동네 위치 표시(area) 누락 금지 — 하이퍼로컬 정체성 핵심
2. 거래 금액에서 "원" 단위 표기 누락 금지 — 한국 사용자 친화
3. brand orange를 destructive 액션에 사용 금지
4. 본문 폰트 weight 400 이하 사용 금지
5. 당근 마스코트 비율을 임의 변형 금지

### ⑫ 시그니처 적용 예시 (Mobile feed)

```html
<style>
  body { margin: 0; font-family: 'Karrot Sans', Pretendard, -apple-system, sans-serif; letter-spacing: -0.01em; color: #191919; background: #fff; }
  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; position: relative; }
  .topbar { padding: 12px 16px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #F0F0F0; }
  .topbar .brand { font-weight: 800; font-size: 20px; color: #FF6F0F; display: flex; align-items: center; gap: 6px; }
  .topbar .brand .ic { width: 26px; height: 26px; background: #FF6F0F; border-radius: 8px; display: grid; place-items: center; color: #fff; font-size: 14px; }
  .topbar .area { margin-left: 6px; font-size: 13px; color: #555; font-weight: 600; }
  .topbar .icons { margin-left: auto; font-size: 18px; display: flex; gap: 14px; }
  .feed { display: flex; flex-direction: column; }
  .listing { display: grid; grid-template-columns: 96px 1fr; gap: 14px; padding: 14px 16px; border-bottom: 1px solid #F5F5F5; }
  .listing .img { aspect-ratio: 1; border-radius: 12px; }
  .listing h3 { font-size: 15px; font-weight: 700; line-height: 1.3; margin: 0; }
  .listing .area { font-size: 12px; color: #888; margin-top: 4px; }
  .listing .price { font-size: 17px; font-weight: 800; margin-top: 8px; }
  .listing .meta { font-size: 12px; color: #555; margin-top: 8px; display: flex; gap: 10px; }
  .fab { position: fixed; bottom: 20px; right: 20px; background: #FF6F0F; color: #fff; border: 0; border-radius: 9999px; padding: 14px 22px; font-size: 15px; font-weight: 800; cursor: pointer; box-shadow: 0 8px 20px rgba(255,111,15,0.4); font-family: inherit; }
</style>

<div class="app">
  <header class="topbar">
    <span class="brand"><span class="ic">🥕</span>당근</span>
    <span class="area">역삼동 ▾</span>
    <span class="icons">🔍 🔔</span>
  </header>
  <div class="feed">
    <article class="listing">
      <div class="img" style="background:linear-gradient(135deg,#FF6F0F,#FFC700);"></div>
      <div>
        <h3>아이폰 14 Pro 256GB 거의 새 것</h3>
        <div class="area">역삼동 · 끌올 1시간 전</div>
        <div class="price">800,000원</div>
        <div class="meta"><span>💬 12</span><span>♥ 28</span></div>
      </div>
    </article>
    <article class="listing">
      <div class="img" style="background:linear-gradient(135deg,#1AAD5C,#FF6F0F);"></div>
      <div>
        <h3>유아 자전거 (3~5세) 거의 안 탔어요</h3>
        <div class="area">삼성동 · 5분 전</div>
        <div class="price">25,000원</div>
        <div class="meta"><span>💬 4</span><span>♥ 8</span></div>
      </div>
    </article>
    <article class="listing">
      <div class="img" style="background:linear-gradient(135deg,#FFC700,#FF6F0F);"></div>
      <div>
        <h3>책상 + 의자 세트 거의 새 것</h3>
        <div class="area">대치동 · 어제</div>
        <div class="price">120,000원</div>
        <div class="meta"><span>💬 8</span><span>♥ 14</span></div>
      </div>
    </article>
  </div>
  <button class="fab">+ 글쓰기</button>
</div>
```
