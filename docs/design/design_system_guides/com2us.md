---
brand: Com2uS
brand_ko: 컴투스
slug: com2us
generated: 2026-05-19
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - gaming
  - consumer

color_tone: cool
primary_color_hex: "#00A4E4"
primary_color_name: "Com2uS Sky"
mood:
  - 콜렉터블
  - 글로벌
  - 활기

font_category: sans-serif
font_primary: Pretendard
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 1998
last_major_revision: 2024
signature_keyword: "Com2uS Sky(#00A4E4) + 사이언 글로우 + 가챠 카드 톤 — 글로벌 모바일 RPG·스포츠 게임 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F4FAFD", "border": "#D6E8F2", "fg": "#0A1A24", "fg_muted": "#4A6478", "accent": "#00A4E4" },
    "dark":  { "bg": "#061620", "surface": "#0F2A3A", "border": "#1F3D52", "fg": "#FFFFFF", "fg_muted": "#A6BFD0", "accent": "#3FC4FF" }
  }

hero_html: |
  <div style="font-family:Pretendard,'Inter',-apple-system,sans-serif;background:linear-gradient(180deg,#061620 0%,#0F2A3A 100%);color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-20px;left:-20px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(0,164,228,0.30) 0%,transparent 70%);pointer-events:none;"></div>
    <div style="position:relative;padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,0.08);">
      <div style="font:900 14px/1 inherit;letter-spacing:-0.01em;color:#00A4E4;">Com2uS</div>
      <span style="margin-left:auto;font-size:10px;font-weight:600;opacity:0.85;color:#A6BFD0;">GLOBAL · 100+ Countries</span>
    </div>
    <div style="position:relative;padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="background:linear-gradient(135deg,#1A1838 0%,#5A2A85 100%);border:1px solid rgba(255,255,255,0.08);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;">Summoners War</div>
      <div style="background:linear-gradient(135deg,#0E2A1A 0%,#1E6A3A 100%);border:1px solid rgba(255,255,255,0.08);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;">Pro Baseball</div>
      <div style="background:linear-gradient(135deg,#1A2A3A 0%,#00A4E4 100%);border:1px solid rgba(255,255,255,0.08);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;">MLB Perfect</div>
      <div style="background:linear-gradient(135deg,#3A1818 0%,#A82E2E 100%);border:1px solid rgba(255,255,255,0.08);border-radius:10px;aspect-ratio:1;padding:8px;display:flex;align-items:flex-end;font:700 10px/1.2 inherit;">Chronicles</div>
    </div>
    <div style="position:relative;padding:8px 14px;border-top:1px solid rgba(255,255,255,0.08);font-size:10px;display:flex;align-items:center;gap:8px;color:#3FC4FF;">
      <span style="font-weight:900;">★</span><span>Play with the World</span>
    </div>
  </div>

sources:
  - https://www.com2us.com/
  - https://withhive.com/
---

### ① 브랜드 DNA
- **브랜드명**: Com2uS (컴투스)
- **한 줄 정체성**: 서머너즈워·컴투스 프로야구·MLB 퍼펙트이닝 — 한국 모바일 RPG·스포츠 글로벌 퍼블리셔
- **공식 디자인 철학**: "Play with the World" — 100개국 동시 출시·글로벌 모바일 가챠 RPG 톤
- **시그니처 요소 1개**: Com2uS Sky #00A4E4 + 다크 사이언 글로우 캔버스 + 보석/카드 그라데이션. Netmarble의 정통 블루보다 한 단계 사이언/형광 톤, RPG 가챠 카드 UI 무드

### ② 톤 & 무드
- **핵심 키워드 3개**: 콜렉터블, 글로벌, 활기
- **무드 설명**: 짙은 네이비 캔버스 위 사이언 글로우. 가챠 카드처럼 보석 그라데이션이 카드마다 다르게 깔리고, 헤더는 사이언 한 줄이 액센트. 모바일 RPG·스포츠 양쪽 톤이 공존.
- **비주얼 스타일**: 모던 미니멀 (Layered 게임 카드)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (8~12px)
- **평면성**: Layered

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Com2uS Sky */
  --color-primary-50:  #E0F4FC;
  --color-primary-100: #B0E1F5;
  --color-primary-200: #7ECDED;
  --color-primary-300: #4DB9E5;
  --color-primary-400: #2AAFE2;
  --color-primary-500: #00A4E4;       /* 시그니처 */
  --color-primary-600: #0089BF;
  --color-primary-700: #006B96;
  --color-primary-800: #00496A;
  --color-primary-900: #002B40;

  /* Card / Rarity (가챠 등급별) */
  --color-rarity-n:   #9AA5B8;   /* Normal */
  --color-rarity-r:   #5E99D4;   /* Rare */
  --color-rarity-sr:  #A052D8;   /* Super Rare */
  --color-rarity-ssr: #E0B070;   /* SSR (gold) */
  --color-rarity-l:   #FF6F84;   /* Legendary */

  /* Neutral - Cool deep */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F4FAFD;
  --color-neutral-100:  #D6E8F2;
  --color-neutral-300:  #A6BFD0;
  --color-neutral-500:  #4A6478;
  --color-neutral-700:  #1F3D52;
  --color-neutral-800:  #0F2A3A;
  --color-neutral-900:  #061620;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E0F4E8;
  --color-success-fg: #1E7B3B;
  --color-warning-bg: #FFF1D6;
  --color-warning-fg: #B07A1F;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #C0392B;
  --color-info-bg:    #E0F4FC;
  --color-info-fg:    #00A4E4;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F4FAFD;
  --bg-elevated: #FFFFFF;
  --bg-game:     linear-gradient(180deg, #061620 0%, #0F2A3A 100%);
  --bg-overlay:  rgba(6,22,32,0.65);

  /* Text */
  --text-primary:    #0A1A24;
  --text-secondary:  #2A3D52;
  --text-tertiary:   #4A6478;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A6BFD0;

  /* Border */
  --border-default: #D6E8F2;
  --border-subtle:  #F4FAFD;
  --border-strong:  #A6BFD0;
  --border-focus:   #00A4E4;
}

[data-theme="dark"] {
  --bg-base: #061620;
  --bg-subtle: #0F2A3A;
  --bg-elevated: #14384F;
  --text-primary: #FFFFFF;
  --text-secondary: #C8DCEC;
  --border-default: #1F3D52;
  --color-primary-500: #3FC4FF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI: Pretendard (주력) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 영문: Inter
  - 디스플레이: Montserrat (스포츠 게임 헤드라인)
  - 코드: JetBrains Mono
- **위계**:
  - Display: 48px / 800 / 1.1 / -0.02em
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 22px / 700 / 1.3 / -0.01em
  - H3: 18px / 600 / 1.35 / 0
  - Body Large: 16px / 400 / 1.6 / 0
  - Body: 14px / 400 / 1.55 / 0
  - Body Small: 12px / 400 / 1.5 / 0
  - Caption: 11px / 600 / 1.4 / 0.06em uppercase

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 1200px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 10px;       /* 가챠 카드 시그니처 */
--radius-lg: 14px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(6,22,32,0.06);
--shadow-md: 0 6px 18px rgba(6,22,32,0.12);
--shadow-lg: 0 20px 48px rgba(6,22,32,0.20);
--shadow-cyan: 0 0 0 2px rgba(0,164,228,0.40), 0 8px 20px rgba(0,164,228,0.30);
```

### ⑧ Iconography
- **스타일**: Filled (둥근) + Outline 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: Phosphor (Bold) / 자체 게임 아이콘

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 Pretendard,sans-serif; padding: 11px 22px; border-radius: 10px; border: 0; cursor: pointer; transition: transform 150ms ease, box-shadow 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); transform: translateY(-1px); box-shadow: var(--shadow-cyan); }
.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--color-primary-600); }
.btn-gacha { background: linear-gradient(135deg, #00A4E4 0%, #A052D8 100%); color: #fff; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: 10px; padding: 11px 16px; font: 400 15px/1.4 Pretendard,sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(0,164,228,0.20); }
```

**Card (Gacha)**
```css
.card { background: var(--bg-elevated); border-radius: 14px; padding: 0; overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; position: relative; transition: transform 150ms ease, box-shadow 150ms ease; }
.card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
.card .cover { aspect-ratio: 3/4; background: linear-gradient(180deg, #1F3D52 0%, #0F2A3A 100%); position: relative; }
.card .cover::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 30%, rgba(0,164,228,0.30) 0%, transparent 60%); }
.card .meta { padding: 10px 12px; }
.card h3 { font: 700 14px/1.3 Pretendard,sans-serif; color: var(--text-primary); margin: 0 0 2px; }
.card .rarity { font: 800 11px/1.3 inherit; letter-spacing: 0.08em; text-transform: uppercase; }
.card .rarity.ssr { color: var(--color-rarity-ssr); }
.card .rarity.l   { color: var(--color-rarity-l); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font: 700 11px/1.4 Pretendard,sans-serif; letter-spacing: 0.04em; }
.tag-cyan  { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-soft  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-ssr   { background: linear-gradient(135deg, #E0B070, #FFC600); color: #5A4300; text-transform: uppercase; }
.tag-event { background: linear-gradient(135deg, #00A4E4, #A052D8); color: #fff; text-transform: uppercase; }
```

**Navigation**
```css
.topbar { background: var(--bg-base); border-bottom: 1px solid var(--border-default); padding: 14px 28px; display: flex; align-items: center; gap: 22px; }
.topbar .logo { font: 900 22px/1 Pretendard,sans-serif; letter-spacing: -0.02em; color: var(--color-primary-500); }
.topbar .item { font: 600 13px/1 inherit; color: var(--text-secondary); padding: 8px 12px; cursor: pointer; border-radius: 8px; }
.topbar .item:hover, .topbar .item.active { background: var(--color-primary-50); color: var(--color-primary-700); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 480ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.45, 0.64, 1);
```

### ⑪ Anti-patterns
1. 평면 라이트 캔버스 강제 금지 — 게임 콘텐츠 화면은 짙은 사이언 글로우 캔버스가 시그니처
2. 가챠 등급(SSR/L) 컬러를 일반 UI 강조에 사용 금지 — 카드 등급 표시 전용
3. 사이언 외 푸른 톤을 메인 강조에 사용 금지 — Netmarble Blue와 혼동 방지
4. 본문 텍스트에 800 굵기 남용 금지 — 헤더·게임 타이틀에만
5. 모서리 sharp(<4px) 사용 금지 — 가챠 카드는 round soft 톤

### ⑫ 시그니처 적용 예시

```html
<style>
  .c2-app { font: 14px/1.55 Pretendard, -apple-system, sans-serif; background: linear-gradient(180deg, #061620 0%, #0F2A3A 100%); color: #fff; min-height: 480px; display: grid; grid-template-rows: 56px 1fr; letter-spacing: -0.005em; }
  .c2-app .top { padding: 0 28px; display: flex; align-items: center; gap: 22px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .c2-app .top .logo { font: 900 22px/1 inherit; letter-spacing: -0.02em; color: #00A4E4; }
  .c2-app .top .nav { display: flex; gap: 6px; margin-left: 14px; }
  .c2-app .top .nav span { padding: 8px 12px; font: 600 13px/1 inherit; color: #A6BFD0; cursor: pointer; border-radius: 8px; }
  .c2-app .top .nav span.act { color: #fff; background: rgba(0,164,228,0.18); }
  .c2-app .top .right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
  .c2-app .top .right .hive { font: 700 11px/1 inherit; color: #00A4E4; padding: 6px 12px; border: 1px solid #00A4E4; border-radius: 9999px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; }
  .c2-app .top .right .av { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #00A4E4, #A052D8); display: grid; place-items: center; font: 800 11px/1 inherit; color: #fff; }
  .c2-app .stage { padding: 22px 28px; display: grid; grid-template-rows: auto 1fr; gap: 18px; }
  .c2-app .head { display: flex; align-items: flex-end; justify-content: space-between; }
  .c2-app .head h2 { margin: 0; font: 800 24px/1.2 inherit; letter-spacing: -0.02em; color: #fff; }
  .c2-app .head .sub { font: 600 11px/1.3 inherit; color: #A6BFD0; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; }
  .c2-app .head .more { font: 600 12px/1 inherit; color: #3FC4FF; cursor: pointer; }
  .c2-app .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .c2-app .card { background: #0F2A3A; border: 1px solid #1F3D52; border-radius: 14px; overflow: hidden; cursor: pointer; transition: transform 150ms ease, border-color 150ms ease; }
  .c2-app .card:hover { transform: translateY(-3px); border-color: #00A4E4; }
  .c2-app .card .cv { aspect-ratio: 3/4; position: relative; display: grid; place-items: center; font: 800 14px/1.2 inherit; color: #fff; }
  .c2-app .card.r1 .cv { background: linear-gradient(180deg, #1A1838 0%, #5A2A85 100%); }
  .c2-app .card.r2 .cv { background: linear-gradient(180deg, #0F2A3A 0%, #00A4E4 100%); }
  .c2-app .card.r3 .cv { background: linear-gradient(180deg, #3A2A0A 0%, #E0B070 100%); }
  .c2-app .card.r4 .cv { background: linear-gradient(180deg, #3A1818 0%, #FF6F84 100%); }
  .c2-app .card .cv::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 25%, rgba(255,255,255,0.25) 0%, transparent 55%); pointer-events: none; }
  .c2-app .card .meta { padding: 10px 12px; }
  .c2-app .card .meta h3 { margin: 0 0 2px; font: 700 13px/1.3 inherit; color: #fff; }
  .c2-app .card .meta .rar { font: 800 10px/1.3 inherit; letter-spacing: 0.1em; text-transform: uppercase; }
  .c2-app .card.r1 .rar { color: #C595E8; }
  .c2-app .card.r2 .rar { color: #3FC4FF; }
  .c2-app .card.r3 .rar { color: #E0B070; }
  .c2-app .card.r4 .rar { color: #FF6F84; }
</style>

<div class="c2-app">
  <header class="top">
    <span class="logo">Com2uS</span>
    <nav class="nav"><span class="act">Games</span><span>Hive</span><span>News</span><span>Support</span></nav>
    <div class="right"><span class="hive">Hive 로그인</span><span class="av">K</span></div>
  </header>
  <main class="stage">
    <div class="head">
      <div>
        <div class="sub">Summoners War — 신규 소환 이벤트</div>
        <h2>오늘의 픽업 몬스터</h2>
      </div>
      <span class="more">전체 보기 →</span>
    </div>
    <div class="grid">
      <div class="card r4"><div class="cv">★L</div><div class="meta"><h3>Phoenix Eir</h3><div class="rar">Legendary</div></div></div>
      <div class="card r3"><div class="cv">★SSR</div><div class="meta"><h3>Light Paladin</h3><div class="rar">SSR</div></div></div>
      <div class="card r1"><div class="cv">★SR</div><div class="meta"><h3>Dark Mage</h3><div class="rar">Super Rare</div></div></div>
      <div class="card r2"><div class="cv">★R</div><div class="meta"><h3>Water Knight</h3><div class="rar">Rare</div></div></div>
    </div>
  </main>
</div>
```
