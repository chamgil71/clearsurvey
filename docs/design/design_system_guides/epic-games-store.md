---
brand: Epic Games Store
brand_ko: 에픽게임즈 스토어
slug: epic-games-store
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - gaming
  - ecommerce

color_tone: cool
primary_color_hex: "#2F2F2F"
primary_color_name: "Epic Charcoal"
mood:
  - 큐레이션
  - 시네마틱
  - 무료증정

font_category: sans-serif
font_primary: Brutal Type
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2018
last_major_revision: 2024
signature_keyword: "다크 차콜 + 시안 액션 + 매주 Free Game 슬롯 — 라이브러리보다 큐레이션 톤의 게임 스토어"

hero_html: |
  <div style="font-family:'Brutal Type','Inter',-apple-system,sans-serif;background:#121212;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #2F2F2F;">
      <div style="width:18px;height:18px;background:#FFF;border-radius:3px;display:grid;place-items:center;color:#000;font:900 11px/1 sans-serif;">E</div>
      <span style="font-weight:600;letter-spacing:0.02em;">Epic Games Store</span>
    </div>
    <div style="padding:10px;display:grid;grid-template-rows:auto auto;gap:6px;">
      <div style="background:linear-gradient(135deg,#1A1830,#3A2A6E);aspect-ratio:16/9;border-radius:6px;padding:10px;display:flex;align-items:flex-end;flex-direction:column;justify-content:flex-end;align-items:flex-start;color:#fff;">
        <span style="font-size:9px;color:#26BBFF;letter-spacing:0.08em;text-transform:uppercase;font-weight:700;">FREE NOW</span>
        <div style="font-size:11px;font-weight:700;margin-top:2px;">Featured Title</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;">
        <div style="background:#1F1F22;aspect-ratio:3/4;border-radius:4px;"></div>
        <div style="background:#22202D;aspect-ratio:3/4;border-radius:4px;"></div>
        <div style="background:#1F2225;aspect-ratio:3/4;border-radius:4px;"></div>
      </div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #2F2F2F;display:flex;align-items:center;gap:10px;font-size:10px;color:#A8A8A8;">
      <span style="color:#26BBFF;">●</span><span>Every Thursday — free game</span>
    </div>
  </div>

sources:
  - https://store.epicgames.com/
---

### ① 브랜드 DNA
- **브랜드명**: Epic Games Store
- **한 줄 정체성**: Fortnite/UE의 Epic이 운영하는 PC 게임 스토어 — 매주 무료 게임 제공
- **공식 디자인 철학**: "Pick a game, play a game" — 큐레이션 + 시네마틱
- **시그니처 요소 1개**: 다크 차콜 #121212 캔버스 + Cyan #26BBFF 액션 + Hero 시네마틱 슬롯 + "FREE NOW" 노란 라벨. Steam의 그라데이션 톤보다 정돈된 OTT 같은 카드 그리드

### ② 톤 & 무드
- **핵심 키워드 3개**: 큐레이션, 시네마틱, 무료증정
- **무드 설명**: 거의 검정에 가까운 다크 차콜 캔버스 + 무채색 + Cyan 단일 액센트. 매주 목요일 free game 슬롯의 노랑 마크. Steam의 게이머 라이브러리 톤과 차별되는 "스트리밍 OTT" 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~8px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Epic Charcoal */
  --color-primary-50:  #F5F5F5;
  --color-primary-100: #D6D6D6;
  --color-primary-200: #A8A8A8;
  --color-primary-300: #757575;
  --color-primary-400: #4D4D4D;
  --color-primary-500: #2F2F2F;       /* 시그니처 */
  --color-primary-600: #1F1F22;
  --color-primary-700: #18181B;
  --color-primary-800: #121212;
  --color-primary-900: #050505;

  /* Secondary - Epic Cyan (액션) */
  --color-secondary-300: #74D5FF;
  --color-secondary-500: #26BBFF;
  --color-secondary-700: #1B82B8;

  /* Free game label */
  --color-free: #FFE34D;
  --color-free-bg: #4A3D08;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #D6D6D6;
  --color-neutral-300:  #8A8A8A;
  --color-neutral-500:  #5A5A5A;
  --color-neutral-700:  #2F2F2F;
  --color-neutral-900:  #121212;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #062F1F;
  --color-success-fg: #4DD2A0;
  --color-warning-bg: #4A3D08;
  --color-warning-fg: #FFE34D;
  --color-error-bg:   #2A0D14;
  --color-error-fg:   #FF6B5E;
  --color-info-bg:    #082238;
  --color-info-fg:    #26BBFF;

  /* Surface */
  --bg-base:     #121212;
  --bg-subtle:   #18181B;
  --bg-elevated: #1F1F22;
  --bg-overlay:  rgba(0,0,0,0.78);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #D6D6D6;
  --text-tertiary:   #8A8A8A;
  --text-on-primary: #121212;
  --text-disabled:   #5A5A5A;

  /* Border */
  --border-default: #2F2F2F;
  --border-subtle:  #18181B;
  --border-strong:  #4D4D4D;
  --border-focus:   #26BBFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Brutal Type (Pangram) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono / Söhne Mono
- **위계**:
  - Display: 48px / 700 / 1.15 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 22px / 700 / 1.3 / -0.01em
  - H3: 16px / 700 / 1.35 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.45 / 0
  - Caption: 11px / 700 / 1.4 / 0.06em uppercase
  - Code: 13px / 400 / 1.5 mono

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 36px;
  --space-2xl: 56px;
  --space-3xl: 80px;
  ```
- **Container**: max-width 1280px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(0,0,0,0.4);
--shadow-md: 0 8px 24px rgba(0,0,0,0.5);
--shadow-lg: 0 20px 56px rgba(0,0,0,0.7);
--shadow-cyan: 0 0 0 2px rgba(38,187,255,0.4);
```

### ⑧ Iconography
- **스타일**: Outline (1.75px)
- **Stroke 굵기**: 1.75px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'Brutal Type',Inter,sans-serif; padding: 10px 18px; border-radius: 4px; border: 0; cursor: pointer; text-transform: uppercase; letter-spacing: 0.04em; transition: background 150ms ease; }
.btn-primary { background: var(--color-secondary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-secondary-300); }
.btn-buy { background: var(--color-secondary-500); color: var(--text-on-primary); }
.btn-buy:hover { background: var(--color-secondary-300); }
.btn-secondary { background: rgba(255,255,255,0.10); color: var(--text-primary); }
.btn-secondary:hover { background: rgba(255,255,255,0.18); }
.btn-ghost { background: transparent; color: var(--text-secondary); }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 4px; padding: 10px 14px; font: 400 14px/1.4 'Brutal Type',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(38,187,255,0.25); }
```

**Card (Game tile)**
```css
.tile { background: var(--bg-elevated); border-radius: 6px; overflow: hidden; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.tile:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.tile .cover { aspect-ratio: 3/4; }
.tile .name { padding: 8px 10px 4px; font: 700 13px/1.3 'Brutal Type',sans-serif; color: var(--text-primary); }
.tile .price { padding: 0 10px 10px; font: 700 12px/1 inherit; color: var(--text-secondary); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 8px; border-radius: 3px; font: 700 10px/1.4 'Brutal Type',sans-serif; letter-spacing: 0.08em; text-transform: uppercase; }
.tag-default { background: rgba(255,255,255,0.08); color: var(--text-primary); }
.tag-free { background: var(--color-free-bg); color: var(--color-free); }
.tag-cyan { background: rgba(38,187,255,0.20); color: var(--color-secondary-500); }
```

**Navigation**
```css
.topbar { background: var(--bg-base); padding: 14px 28px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid var(--border-default); }
.topbar .logo { width: 28px; height: 28px; background: #fff; color: #121212; border-radius: 4px; display: grid; place-items: center; font: 900 14px/1 'Brutal Type',sans-serif; }
.topbar .item { font: 600 13px/1 'Brutal Type',sans-serif; color: var(--text-secondary); padding: 6px 4px; cursor: pointer; }
.topbar .item:hover, .topbar .item.active { color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. Steam 톤(짙은 네이비 그라데이션) 차용 금지 — 차콜 단색
2. 채도 높은 액센트 남용 금지 — Cyan + Yellow(free) 둘만
3. 모서리 round(>12px) 사용 금지 — 그리드 OTT 톤
4. 라이트 모드 강제 금지 — 다크 디폴트
5. 본문에 다중 굵기 혼합 사용 금지 — 400/700 두 단계만

### ⑫ 시그니처 적용 예시

```html
<style>
  .epic-app { font: 14px/1.5 'Brutal Type', Inter, -apple-system, sans-serif; background: #121212; color: #fff; min-height: 480px; display: grid; grid-template-rows: auto 1fr; }
  .epic-app .top { padding: 14px 28px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid #2F2F2F; }
  .epic-app .top .lg { width: 28px; height: 28px; background: #fff; color: #121212; border-radius: 4px; display: grid; place-items: center; font: 900 15px/1 inherit; }
  .epic-app .top h1 { margin: 0; font: 700 17px/1 inherit; letter-spacing: -0.005em; }
  .epic-app .top .nav { display: flex; gap: 18px; margin-left: 8px; }
  .epic-app .top .nav span { font: 600 13px/1 inherit; color: #A8A8A8; cursor: pointer; }
  .epic-app .top .nav span.act { color: #fff; }
  .epic-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 12px; font-size: 12px; color: #A8A8A8; }
  .epic-app .stage { padding: 22px 28px; display: grid; grid-template-rows: auto auto 1fr; gap: 16px; }
  .epic-app .head h2 { margin: 0; font: 700 26px/1.2 inherit; letter-spacing: -0.015em; }
  .epic-app .head .sub { font-size: 13px; color: #8A8A8A; margin-top: 4px; }
  .epic-app .hero { background: linear-gradient(135deg, #1A0820 0%, #3A2A6E 50%, #1A1830 100%); border-radius: 8px; aspect-ratio: 16/6; padding: 28px; display: flex; flex-direction: column; justify-content: flex-end; box-shadow: 0 8px 24px rgba(0,0,0,0.55); }
  .epic-app .hero .free { font: 700 11px/1 inherit; color: #FFE34D; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 9px; background: rgba(255,227,77,0.10); border-radius: 3px; width: max-content; margin-bottom: 12px; }
  .epic-app .hero h3 { margin: 0 0 6px; font: 700 32px/1.1 inherit; letter-spacing: -0.02em; }
  .epic-app .hero .desc { color: #D6D6D6; font-size: 14px; max-width: 60%; margin-bottom: 16px; line-height: 1.55; }
  .epic-app .hero .row { display: flex; gap: 8px; }
  .epic-app .hero .btn { padding: 11px 22px; border-radius: 4px; font: 700 13px/1 inherit; letter-spacing: 0.06em; text-transform: uppercase; }
  .epic-app .hero .btn.p { background: #26BBFF; color: #121212; }
  .epic-app .hero .btn.g { background: rgba(255,255,255,0.10); color: #fff; }
  .epic-app .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
  .epic-app .t { background: #1F1F22; border-radius: 6px; padding: 0; overflow: hidden; cursor: pointer; }
  .epic-app .t .cv { aspect-ratio: 3/4; }
  .epic-app .t.a .cv { background: linear-gradient(135deg, #1F2225 0%, #3A4F8C 100%); }
  .epic-app .t.b .cv { background: linear-gradient(135deg, #1F1832 0%, #5B3A8A 100%); }
  .epic-app .t.c .cv { background: linear-gradient(135deg, #2A1B05 0%, #8B6914 100%); }
  .epic-app .t.d .cv { background: linear-gradient(135deg, #052A05 0%, #2F8C2F 100%); }
  .epic-app .t.e .cv { background: linear-gradient(135deg, #2A0D14 0%, #7A3424 100%); }
  .epic-app .t .name { padding: 8px 10px 2px; font: 700 13px/1.3 inherit; }
  .epic-app .t .px { padding: 0 10px 10px; font: 700 12px/1 inherit; color: #D6D6D6; }
  .epic-app .t .px .sale { background: #4A3D08; color: #FFE34D; padding: 2px 6px; border-radius: 2px; font-size: 10px; margin-right: 4px; letter-spacing: 0.06em; text-transform: uppercase; }
</style>

<div class="epic-app">
  <header class="top">
    <div class="lg">E</div>
    <h1>Epic Games Store</h1>
    <nav class="nav"><span class="act">Discover</span><span>Browse</span><span>News</span><span>Free Games</span></nav>
    <div class="right"><span>Cart · 0</span><span>K</span></div>
  </header>
  <main class="stage">
    <div class="head">
      <h2>Free This Week</h2>
      <div class="sub">매주 목요일 자정, 새로운 무료 게임이 등장합니다.</div>
    </div>
    <section class="hero">
      <span class="free">★ Free Now — until Thu</span>
      <h3>Pillars of the Drift</h3>
      <p class="desc">잊혀진 도시의 비밀을 추적하는 액션 어드벤처. 이번 주 무료로 라이브러리에 영구 추가됩니다.</p>
      <div class="row"><span class="btn p">Get Now</span><span class="btn g">+ Wishlist</span></div>
    </section>
    <div class="grid">
      <div class="t a"><div class="cv"></div><div class="name">Stellar Drift</div><div class="px"><span class="sale">-40%</span>$23.99</div></div>
      <div class="t b"><div class="cv"></div><div class="name">Echo Citadel</div><div class="px">$29.99</div></div>
      <div class="t c"><div class="cv"></div><div class="name">Saffron Sands</div><div class="px">$19.99</div></div>
      <div class="t d"><div class="cv"></div><div class="name">Verdant Vow</div><div class="px"><span class="sale">FREE</span></div></div>
      <div class="t e"><div class="cv"></div><div class="name">Ember Rite</div><div class="px">$34.99</div></div>
    </div>
  </main>
</div>
```
