---
brand: Xbox
brand_ko: 엑스박스
slug: xbox
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - gaming
  - consumer

color_tone: cool
primary_color_hex: "#107C10"
primary_color_name: "Xbox Green"
mood:
  - 강력
  - 라이브러리
  - GamePass

font_category: sans-serif
font_primary: Xbox Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - dark

released_year: 2001
last_major_revision: 2024
signature_keyword: "Xbox 그린(#107C10) 구체와 잉크 다크 캔버스 + Game Pass 그리드 — 콘솔의 압도적 라이브러리"

hero_html: |
  <div style="font-family:'Xbox Sans','Inter',-apple-system,sans-serif;background:#0E0E10;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #2A2A2E;">
      <div style="width:20px;height:20px;background:radial-gradient(circle at 30% 30%, #43E04D 0%, #107C10 60%, #052A05 100%);border-radius:50%;"></div>
      <span style="font-weight:700;letter-spacing:0.02em;">XBOX</span>
    </div>
    <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#052A05,#107C10);border-radius:6px;display:flex;align-items:flex-end;padding:6px;font-size:9px;font-weight:600;">Forza</div>
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#1A0820,#5B3A8A);border-radius:6px;display:flex;align-items:flex-end;padding:6px;font-size:9px;font-weight:600;">Halo</div>
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#2A1B05,#8B6914);border-radius:6px;display:flex;align-items:flex-end;padding:6px;font-size:9px;font-weight:600;">Starfield</div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid #2A2A2E;display:flex;align-items:center;gap:10px;font-size:10px;color:#A8A8AB;">
      <span style="color:#43E04D;">●</span><span>Game Pass · 일자 마다 신규 게임</span>
    </div>
  </div>

sources:
  - https://www.xbox.com/
---

### ① 브랜드 DNA
- **브랜드명**: Xbox (Microsoft Gaming)
- **한 줄 정체성**: 콘솔/PC/클라우드를 잇는 Microsoft 게이밍 플랫폼, Game Pass 구독형 라이브러리
- **공식 디자인 철학**: "Power Your Dreams" — 강력한 사양과 광대한 라이브러리
- **시그니처 요소 1개**: Xbox Green #107C10 구체 로고 + 잉크 #0E0E10 캔버스 + Game Pass의 그리드. PlayStation의 4-심볼 시네마틱 톤과 정반대의 "라이브러리 + 구독" 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 강력, 라이브러리, GamePass
- **무드 설명**: 콘솔 거실 UI지만 시네마틱이라기보다 "콘텐츠 카탈로그". Game Pass 그리드가 시그니처로 영화 OTT 같은 톤. 그린은 액션과 로고에만, 메인은 거의 검정.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (6~10px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Xbox Green */
  --color-primary-50:  #E8F9E8;
  --color-primary-100: #BFEEBF;
  --color-primary-200: #8FDC8F;
  --color-primary-300: #5FC95F;
  --color-primary-400: #43BA43;
  --color-primary-500: #107C10;       /* 시그니처 */
  --color-primary-600: #0B650B;
  --color-primary-700: #084808;
  --color-primary-800: #052A05;
  --color-primary-900: #021502;

  /* Bright Green (강조/포커스) */
  --color-primary-bright: #43E04D;

  /* Neutral - Xbox Ink */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4F4F5;
  --color-neutral-100:  #D4D4D8;
  --color-neutral-300:  #A8A8AB;
  --color-neutral-500:  #6E6E72;
  --color-neutral-700:  #3A3A3E;
  --color-neutral-800:  #2A2A2E;
  --color-neutral-900:  #0E0E10;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #052A05;
  --color-success-fg: #43E04D;
  --color-warning-bg: #2A2008;
  --color-warning-fg: #FFC93C;
  --color-error-bg:   #2A0D14;
  --color-error-fg:   #FF6B5E;
  --color-info-bg:    #082A3A;
  --color-info-fg:    #4DBFFF;

  /* Surface */
  --bg-base:     #0E0E10;
  --bg-subtle:   #16161A;
  --bg-elevated: #1F1F23;
  --bg-overlay:  rgba(0,0,0,0.75);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #D4D4D8;
  --text-tertiary:   #A8A8AB;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #6E6E72;

  /* Border */
  --border-default: #2A2A2E;
  --border-subtle:  #16161A;
  --border-strong:  #3A3A3E;
  --border-focus:   #43E04D;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Xbox Sans (MS 자체) / Segoe UI / Inter 폴백
  - 한글: Pretendard / Noto Sans KR / Malgun Gothic
  - 코드: Cascadia Code / JetBrains Mono
- **위계**:
  - Display: 56px / 700 / 1.1 / -0.025em
  - H1: 36px / 700 / 1.2 / -0.02em
  - H2: 24px / 700 / 1.3 / -0.015em
  - H3: 18px / 600 / 1.4 / -0.005em
  - Body Large: 16px / 400 / 1.55 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.45 / 0
  - Caption: 12px / 600 / 1.4 / 0.04em uppercase

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
- **Container**: TV-safe area

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 2px 4px rgba(0,0,0,0.45);
--shadow-md: 0 8px 24px rgba(0,0,0,0.55);
--shadow-lg: 0 24px 64px rgba(0,0,0,0.7);
--shadow-green: 0 0 0 3px rgba(67,224,77,0.45);
```

### ⑧ Iconography
- **스타일**: Outline (2px) / Filled (Xbox sphere)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Fluent UI System Icons / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 'Xbox Sans','Segoe UI',sans-serif; padding: 10px 20px; border-radius: 4px; border: 0; cursor: pointer; transition: background 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-primary:focus { box-shadow: var(--shadow-green); }
.btn-buy { background: linear-gradient(180deg, var(--color-primary-bright), var(--color-primary-500)); color: #fff; }
.btn-ghost { background: rgba(255,255,255,0.08); color: var(--text-primary); }
.btn-ghost:hover { background: rgba(255,255,255,0.15); }
```

**Input**
```css
.input { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 10px 14px; font: 400 14px/1.4 'Xbox Sans',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(67,224,77,0.3); }
```

**Card (Game tile)**
```css
.tile { background: var(--bg-elevated); border-radius: 8px; overflow: hidden; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.tile:hover { transform: scale(1.04); box-shadow: var(--shadow-md); }
.tile:focus { box-shadow: var(--shadow-green); }
.tile .cover { aspect-ratio: 3/4; }
.tile .name { padding: 8px 10px; font: 600 13px/1.3 'Xbox Sans',sans-serif; color: var(--text-primary); }
.tile .meta { padding: 0 10px 8px; font: 500 11px/1.3 inherit; color: var(--text-tertiary); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 9px; border-radius: 4px; font: 600 11px/1.4 'Xbox Sans',sans-serif; letter-spacing: 0.04em; text-transform: uppercase; }
.tag-green { background: var(--color-primary-500); color: #fff; }
.tag-pass { background: linear-gradient(135deg, #43E04D, #107C10); color: #fff; }
.tag-default { background: rgba(255,255,255,0.10); color: var(--text-primary); }
```

**Navigation**
```css
.tvbar { background: var(--bg-base); padding: 16px 32px; display: flex; align-items: center; gap: 24px; }
.tvbar .orb { width: 28px; height: 28px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #43E04D 0%, #107C10 60%, #052A05 100%); }
.tvbar .item { font: 600 14px/1 'Xbox Sans',sans-serif; color: var(--text-secondary); padding: 8px 12px; border-radius: 6px; cursor: pointer; letter-spacing: 0.02em; }
.tvbar .item.active { color: #fff; background: rgba(255,255,255,0.10); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 220ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. PS 톤(딥 블루 + 4심볼) 차용 금지
2. Xbox 그린을 본문 텍스트에 사용 금지 — 강조 액션과 로고에만
3. 라이트 모드 강제 금지 — 다크 디폴트
4. 모서리 sharp(<4px) 사용 금지 — 콘솔 톤 부드러움 필요
5. Game Pass 카드 위에 형광 그라데이션 덮어쓰기 금지 — 게임 아트워크가 주연

### ⑫ 시그니처 적용 예시

```html
<style>
  .xb-app { font: 14px/1.5 'Xbox Sans', 'Segoe UI', Inter, sans-serif; background: #0E0E10; color: #fff; min-height: 480px; display: grid; grid-template-rows: 64px 1fr; }
  .xb-app .top { padding: 0 32px; display: flex; align-items: center; gap: 22px; }
  .xb-app .top .orb { width: 30px; height: 30px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #43E04D 0%, #107C10 60%, #052A05 100%); }
  .xb-app .top h1 { margin: 0; font: 700 18px/1 inherit; letter-spacing: 0.02em; }
  .xb-app .top .nav { display: flex; gap: 4px; margin-left: 12px; }
  .xb-app .top .nav span { padding: 8px 14px; font: 600 14px/1 inherit; color: #D4D4D8; cursor: pointer; border-radius: 6px; letter-spacing: 0.02em; }
  .xb-app .top .nav span.act { background: rgba(255,255,255,0.10); color: #fff; }
  .xb-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
  .xb-app .top .right .pass { background: linear-gradient(135deg,#43E04D,#107C10); color: #fff; padding: 6px 14px; border-radius: 6px; font: 700 12px/1 inherit; letter-spacing: 0.04em; text-transform: uppercase; }
  .xb-app .top .right .av { width: 32px; height: 32px; border-radius: 50%; background: #2A2A2E; display: grid; place-items: center; font-weight: 700; }
  .xb-app .stage { padding: 22px 32px; display: grid; grid-template-rows: auto auto 1fr; gap: 18px; }
  .xb-app .stage .head h2 { margin: 0; font: 700 28px/1.2 inherit; letter-spacing: -0.015em; }
  .xb-app .stage .head .sub { font-size: 13px; color: #A8A8AB; margin-top: 4px; }
  .xb-app .featured { background: linear-gradient(135deg, #052A05 0%, #107C10 70%, #0E0E10 100%); border-radius: 12px; padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: center; }
  .xb-app .featured .pass-mark { font: 700 11px/1 inherit; color: #43E04D; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
  .xb-app .featured h3 { font: 700 26px/1.15 inherit; margin: 0 0 8px; letter-spacing: -0.015em; }
  .xb-app .featured .desc { color: #D4D4D8; font-size: 13px; line-height: 1.55; margin-bottom: 14px; }
  .xb-app .featured .play { padding: 11px 20px; border-radius: 4px; background: #fff; color: #0E0E10; font: 700 13px/1 inherit; width: max-content; }
  .xb-app .featured .placeholder { background: rgba(255,255,255,0.10); border-radius: 8px; aspect-ratio: 16/9; }
  .xb-app .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  .xb-app .grid .t { background: #1F1F23; border-radius: 8px; aspect-ratio: 3/4; padding: 10px; display: flex; align-items: flex-end; }
  .xb-app .grid .t .name { font: 600 12px/1.3 inherit; color: #fff; }
  .xb-app .grid .t.a { background: linear-gradient(135deg,#052A05,#107C10); }
  .xb-app .grid .t.b { background: linear-gradient(135deg,#1A0820,#5B3A8A); }
  .xb-app .grid .t.c { background: linear-gradient(135deg,#2A1B05,#8B6914); }
  .xb-app .grid .t.d { background: linear-gradient(135deg,#0E2A20,#1F5A3A); }
  .xb-app .grid .t.e { background: linear-gradient(135deg,#2A0D12,#7A3424); }
  .xb-app .grid .t.f { background: linear-gradient(135deg,#0F1B36,#3A4F8C); }
</style>

<div class="xb-app">
  <header class="top">
    <div class="orb"></div>
    <h1>XBOX</h1>
    <nav class="nav"><span class="act">Home</span><span>Game Pass</span><span>Store</span><span>Library</span></nav>
    <div class="right"><span class="pass">+ Game Pass</span><div class="av">K</div></div>
  </header>
  <main class="stage">
    <div class="head">
      <h2>Featured this week</h2>
      <div class="sub">Game Pass · 일자마다 신규 추가, 30개 이상 신규 출시작 무제한 플레이.</div>
    </div>
    <section class="featured">
      <div>
        <div class="pass-mark">● Game Pass · 신규 추가</div>
        <h3>Starfield: Shattered Space</h3>
        <p class="desc">광활한 우주를 가로지르는 RPG. 새로운 행성, 새로운 종족, 그리고 새로운 균열.</p>
        <span class="play">▶ 플레이</span>
      </div>
      <div class="placeholder"></div>
    </section>
    <div class="grid">
      <div class="t a"><div class="name">Forza Horizon</div></div>
      <div class="t b"><div class="name">Halo: Infinite</div></div>
      <div class="t c"><div class="name">Sea of Thieves</div></div>
      <div class="t d"><div class="name">Grounded</div></div>
      <div class="t e"><div class="name">Hellblade</div></div>
      <div class="t f"><div class="name">Pentiment</div></div>
    </div>
  </main>
</div>
```
