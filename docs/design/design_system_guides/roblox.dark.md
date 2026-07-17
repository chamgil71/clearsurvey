---
brand: Roblox
brand_ko: 로블록스
slug: roblox
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - gaming
  - social

color_tone: cool
primary_color_hex: "#E2231A"
primary_color_name: "Roblox Red"
mood:
  - 메타버스
  - UGC
  - 키즈

font_category: sans-serif
font_primary: Builder Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - dark
  - light

released_year: 2006
last_major_revision: 2025
signature_keyword: "빨간 블록(R) 로고 + 다크 캔버스 + UGC 체험 그리드 — 키즈/메타버스 게임 플랫폼"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F0F1F4", "border": "#DCDFE6", "fg": "#191B1F", "fg_muted": "#6F7280", "accent": "#E2231A" },
    "dark":  { "bg": "#191B1F", "surface": "#1F2226", "border": "#2A2D32", "fg": "#FFFFFF", "fg_muted": "#A8AAB3", "accent": "#E2231A" }
  }

hero_html: |
  <div style="font-family:'Builder Sans','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:22px;height:22px;background:var(--card-accent);border-radius:5px;display:grid;place-items:center;color:#fff;font:900 13px/1 sans-serif;">R</div>
      <span style="font-weight:700;letter-spacing:-0.01em;">Roblox</span>
    </div>
    <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#0E2A4A,#3A7AC9);border-radius:8px;padding:8px;display:flex;align-items:flex-end;font-size:9px;font-weight:700;">Adopt Me!</div>
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#4A1820,#C03048);border-radius:8px;padding:8px;display:flex;align-items:flex-end;font-size:9px;font-weight:700;">Brookhaven</div>
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#2A1B4A,#7A4DCA);border-radius:8px;padding:8px;display:flex;align-items:flex-end;font-size:9px;font-weight:700;">MeepCity</div>
      <div style="aspect-ratio:1;background:linear-gradient(135deg,#1F4A2A,#3A8C5A);border-radius:8px;padding:8px;display:flex;align-items:flex-end;font-size:9px;font-weight:700;">Pet Sim</div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid var(--card-border);display:flex;gap:10px;font-size:10px;color:var(--card-fg-muted);">
      <span style="color:#19E66B;">●</span><span>5.2M playing now</span>
    </div>
  </div>

sources:
  - https://www.roblox.com/
---

### ① 브랜드 DNA
- **브랜드명**: Roblox
- **한 줄 정체성**: 누구나 만들고 누구나 플레이하는 UGC 게이밍/메타버스 플랫폼 (특히 키즈/틴)
- **공식 디자인 철학**: "Reimagining the way people come together" — UGC + 사회적
- **시그니처 요소 1개**: 빨간 블록 R 로고 + 다크 차콜 #191B1F 캔버스 + 무수히 많은 체험(experience) 카드 그리드. Steam/Epic의 "스토어" 톤이 아닌 "사회적 놀이터" 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 메타버스, UGC, 키즈
- **무드 설명**: 다크 차콜 캔버스 위에 다양한 사용자 제작 게임 썸네일이 그리드를 채운다. 빨강 R 로고는 액션과 알림에만 등장하고 본문 톤은 무채. 라이브 플레이어 카운트가 항상 노출되는 사회적 톤.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (6~10px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Roblox Red */
  --color-primary-50:  #FFE6E5;
  --color-primary-100: #FFB5B1;
  --color-primary-200: #FF807A;
  --color-primary-300: #FF5247;
  --color-primary-400: #F03328;
  --color-primary-500: #E2231A;       /* 시그니처 */
  --color-primary-600: #B81912;
  --color-primary-700: #8C120D;
  --color-primary-800: #5F0A07;
  --color-primary-900: #330404;

  /* Live green (사회적/온라인) */
  --color-live: #19E66B;

  /* Neutral - 다크 우선 (값이 클수록 어두움) */
  --color-neutral-0:    #FFFFFF;       /* 순백 (드물게 강조 텍스트) */
  --color-neutral-50:   #F0F1F4;       /* 최상위 텍스트 톤 */
  --color-neutral-100:  #DCDFE6;       /* 보조 텍스트 */
  --color-neutral-300:  #A8AAB3;       /* 캡션/뮤트 */
  --color-neutral-500:  #6F7280;       /* 비활성 텍스트 */
  --color-neutral-700:  #393B41;       /* 강한 보더 */
  --color-neutral-800:  #2A2D32;       /* 카드 표면 */
  --color-neutral-900:  #191B1F;       /* 페이지 캔버스 */
  --color-neutral-1000: #0C0D0F;       /* 최심층/오버레이 */

  /* Semantic - 다크 위에서 읽히는 톤 */
  --color-success-bg: #062F1F;
  --color-success-fg: #19E66B;
  --color-warning-bg: #4A3D08;
  --color-warning-fg: #FFC93C;
  --color-error-bg:   #5F0A07;
  --color-error-fg:   #FF5247;
  --color-info-bg:    #082238;
  --color-info-fg:    #4DBFFF;

  /* Surface - 다크 차콜 위계 */
  --bg-base:     #191B1F;              /* 페이지 기본 캔버스 */
  --bg-subtle:   #1F2226;              /* 섹션 구분 */
  --bg-elevated: #2A2D32;              /* 카드/입력 표면 */
  --bg-overlay:  rgba(12,13,15,0.75);  /* 모달/드롭다운 */

  /* Text - 다크 캔버스 위 라이트 텍스트 */
  --text-primary:    #FFFFFF;          /* 본문 */
  --text-secondary:  #DCDFE6;          /* 보조 */
  --text-tertiary:   #A8AAB3;          /* 캡션 */
  --text-on-primary: #FFFFFF;          /* 빨강 위 */
  --text-disabled:   #6F7280;

  /* Border - 다크 위에서 분리감 주는 톤 */
  --border-default: #2A2D32;
  --border-subtle:  #1F2226;
  --border-strong:  #393B41;
  --border-focus:   #FF5247;
}

[data-theme="light"] {
  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F0F1F4;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(25,27,31,0.55);

  /* Text */
  --text-primary:    #191B1F;
  --text-secondary:  #393B41;
  --text-tertiary:   #6F7280;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A8AAB3;

  /* Border */
  --border-default: #DCDFE6;
  --border-subtle:  #F0F1F4;
  --border-strong:  #A8AAB3;
  --border-focus:   #E2231A;

  /* Semantic - 라이트 위에서 읽히는 톤 */
  --color-success-bg: #E3FAEE;
  --color-success-fg: #0E9E50;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #946A00;
  --color-error-bg:   #FDE7E6;
  --color-error-fg:   #C81810;
  --color-info-bg:    #E4F2FF;
  --color-info-fg:    #1577CC;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Builder Sans (Roblox 자체) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono / Source Code Pro
- **위계**:
  - Display: 40px / 700 / 1.15 / -0.02em
  - H1: 26px / 700 / 1.2 / -0.015em
  - H2: 18px / 700 / 1.3 / -0.01em
  - H3: 15px / 600 / 1.4 / 0
  - Body: 14px / 400 / 1.5 / 0
  - Body Small: 13px / 400 / 1.45 / 0
  - Caption: 11px / 600 / 1.4 / 0
  - Code: 13px / 400 / 1.5 mono

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
  --space-3xl: 72px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 16px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 6px 18px rgba(0,0,0,0.50);
--shadow-lg: 0 20px 56px rgba(0,0,0,0.65);
--shadow-red: 0 4px 12px rgba(226,35,26,0.25);
```

### ⑧ Iconography
- **스타일**: Filled (블록 톤) / Outline 혼합
- **Stroke 굵기**: 2px
- **모서리 처리**: Round (블록 끝)
- **추천 라이브러리**: Roblox 자체 / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 13px/1 'Builder Sans',Inter,sans-serif; padding: 9px 16px; border-radius: 8px; border: 0; cursor: pointer; transition: background 150ms ease, transform 150ms ease; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-400); transform: translateY(-1px); box-shadow: var(--shadow-red); }
.btn-play { background: #19E66B; color: #062F1F; }
.btn-play:hover { background: #34F285; }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); }
.btn-secondary:hover { background: var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-secondary); }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 8px; padding: 9px 14px; font: 400 14px/1.4 'Builder Sans',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); }
```

**Card (Experience tile)**
```css
.exp { background: var(--bg-elevated); border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 150ms ease; }
.exp:hover { transform: translateY(-2px); }
.exp .cover { aspect-ratio: 1; }
.exp .name { padding: 8px 10px 2px; font: 700 13px/1.3 'Builder Sans',sans-serif; color: var(--text-primary); }
.exp .meta { padding: 0 10px 10px; font: 500 11px/1 inherit; color: var(--text-tertiary); display: flex; align-items: center; gap: 5px; }
.exp .meta .dot { color: var(--color-live); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 9px; border-radius: 9999px; font: 700 11px/1.4 'Builder Sans',sans-serif; }
.tag-red { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-live { background: var(--color-success-bg); color: var(--color-live); }
.tag-robux { background: rgba(255,255,255,0.10); color: var(--text-primary); display: inline-flex; align-items: center; gap: 4px; }
```

**Navigation (Side)**
```css
.sidebar { background: var(--bg-base); border-right: 1px solid var(--border-default); padding: 12px 8px; display: flex; flex-direction: column; gap: 4px; }
.sidebar .item { padding: 10px 12px; border-radius: 8px; font: 600 14px/1 'Builder Sans',sans-serif; color: var(--text-secondary); display: flex; align-items: center; gap: 10px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); color: var(--text-primary); }
.sidebar .item.active { background: var(--bg-elevated); color: var(--text-primary); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. 라이트 모드 강제 금지 — 다크 디폴트 (UGC 썸네일 살리기)
2. R 빨강을 본문 텍스트에 사용 금지 — 액션과 로고에만
3. 모서리 sharp(<6px) 사용 금지 — 키즈 톤 부드러움 필수
4. 어두운 우중충한 톤 강제 금지 — UGC 다양한 컬러가 살아야 함
5. 채도 낮은 회색 카드 사용 금지 — 항상 컬러풀 썸네일

### ⑫ 시그니처 적용 예시

```html
<style>
  .rbx-app { font: 14px/1.5 'Builder Sans', Inter, -apple-system, sans-serif; background: #191B1F; color: #fff; min-height: 480px; display: grid; grid-template-columns: 200px 1fr; }
  .rbx-app .side { background: #191B1F; border-right: 1px solid #2A2D32; padding: 14px 10px; display: flex; flex-direction: column; gap: 4px; }
  .rbx-app .side .brand { display: flex; align-items: center; gap: 10px; padding: 6px 10px 14px; }
  .rbx-app .side .brand .lg { width: 26px; height: 26px; background: #E2231A; border-radius: 6px; display: grid; place-items: center; color: #fff; font: 900 15px/1 inherit; }
  .rbx-app .side .brand h1 { margin: 0; font: 700 16px/1 inherit; letter-spacing: -0.01em; }
  .rbx-app .side .item { padding: 9px 12px; border-radius: 8px; font: 600 14px/1 inherit; color: #A8AAB3; display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .rbx-app .side .item.act { background: #2A2D32; color: #fff; }
  .rbx-app .main { padding: 20px 24px; display: grid; grid-template-rows: auto auto 1fr; gap: 16px; overflow: auto; }
  .rbx-app .main .top { display: flex; align-items: center; gap: 12px; }
  .rbx-app .main .top .search { flex: 1; background: #2A2D32; border-radius: 9999px; padding: 8px 16px; font-size: 13px; color: #A8AAB3; }
  .rbx-app .main .top .robux { padding: 6px 12px; border-radius: 9999px; background: rgba(255,255,255,0.10); font: 700 12px/1.4 inherit; display: flex; align-items: center; gap: 5px; }
  .rbx-app .main .top .robux .ic { color: #FFFFFF; font-weight: 900; }
  .rbx-app .main h2 { margin: 0; font: 700 22px/1.2 inherit; letter-spacing: -0.015em; }
  .rbx-app .main .sub { font-size: 12px; color: #A8AAB3; margin-top: 2px; }
  .rbx-app .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .rbx-app .exp { background: #2A2D32; border-radius: 12px; overflow: hidden; cursor: pointer; }
  .rbx-app .exp .cv { aspect-ratio: 1; }
  .rbx-app .exp.a .cv { background: linear-gradient(135deg, #0E2A4A 0%, #3A7AC9 100%); }
  .rbx-app .exp.b .cv { background: linear-gradient(135deg, #4A1820 0%, #C03048 100%); }
  .rbx-app .exp.c .cv { background: linear-gradient(135deg, #2A1B4A 0%, #7A4DCA 100%); }
  .rbx-app .exp.d .cv { background: linear-gradient(135deg, #1F4A2A 0%, #3A8C5A 100%); }
  .rbx-app .exp.e .cv { background: linear-gradient(135deg, #4A3308 0%, #C09414 100%); }
  .rbx-app .exp.f .cv { background: linear-gradient(135deg, #0E3A4A 0%, #2A9CC0 100%); }
  .rbx-app .exp.g .cv { background: linear-gradient(135deg, #3A0E4A 0%, #9C2AC0 100%); }
  .rbx-app .exp.h .cv { background: linear-gradient(135deg, #4A2810 0%, #C06A24 100%); }
  .rbx-app .exp .name { padding: 8px 10px 2px; font: 700 13px/1.3 inherit; }
  .rbx-app .exp .meta { padding: 0 10px 10px; font: 600 11px/1 inherit; color: #A8AAB3; display: flex; align-items: center; gap: 5px; }
  .rbx-app .exp .meta .dot { color: #19E66B; }
</style>

<div class="rbx-app">
  <aside class="side">
    <div class="brand"><div class="lg">R</div><h1>Roblox</h1></div>
    <div class="item act">⌂ Home</div>
    <div class="item">★ Discover</div>
    <div class="item">♥ Favorites</div>
    <div class="item">♛ Avatar</div>
    <div class="item">⌬ Friends</div>
    <div class="item">⊞ Create</div>
  </aside>
  <main class="main">
    <div class="top">
      <div class="search">⌕ Search experiences, avatars, friends…</div>
      <div class="robux"><span class="ic">⬢</span><span>2,438</span></div>
    </div>
    <div>
      <h2>지금 인기 있는 체험</h2>
      <div class="sub">실시간 5.2M 명이 플레이 중</div>
    </div>
    <div class="grid">
      <div class="exp a"><div class="cv"></div><div class="name">Adopt Me!</div><div class="meta"><span class="dot">●</span>820K 플레이</div></div>
      <div class="exp b"><div class="cv"></div><div class="name">Brookhaven RP</div><div class="meta"><span class="dot">●</span>640K 플레이</div></div>
      <div class="exp c"><div class="cv"></div><div class="name">MeepCity</div><div class="meta"><span class="dot">●</span>410K 플레이</div></div>
      <div class="exp d"><div class="cv"></div><div class="name">Pet Simulator X</div><div class="meta"><span class="dot">●</span>380K 플레이</div></div>
      <div class="exp e"><div class="cv"></div><div class="name">Bee Swarm Sim</div><div class="meta"><span class="dot">●</span>240K 플레이</div></div>
      <div class="exp f"><div class="cv"></div><div class="name">Bedwars</div><div class="meta"><span class="dot">●</span>520K 플레이</div></div>
      <div class="exp g"><div class="cv"></div><div class="name">Murder Mystery 2</div><div class="meta"><span class="dot">●</span>290K 플레이</div></div>
      <div class="exp h"><div class="cv"></div><div class="name">Tower of Hell</div><div class="meta"><span class="dot">●</span>170K 플레이</div></div>
    </div>
  </main>
</div>
```
