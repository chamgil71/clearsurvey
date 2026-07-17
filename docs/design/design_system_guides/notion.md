---
brand: Notion
brand_ko: 노션
slug: notion
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - productivity

color_tone: warm
primary_color_hex: "#37352F"
primary_color_name: "Notion Default Text"
mood:
  - 따뜻함
  - 미니멀
  - 유연함

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light
  - dark

released_year: 2016
last_major_revision: 2024
signature_keyword: "종이 같은 따뜻한 중성색과 인라인 슬래시 메뉴의 longform 워크스페이스"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F6F3", "border": "#E9E9E7", "fg": "#37352F", "fg_muted": "#787774", "accent": "#2383E2" },
    "dark":  { "bg": "#191919", "surface": "#2F2F2F", "border": "#373737", "fg": "#FFFFFF", "fg_muted": "#9B9A97", "accent": "#5BA3F5" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-columns:80px 1fr;">
    <div style="background:var(--card-surface);padding:12px 8px;border-right:1px solid rgba(55,53,47,0.09);display:flex;flex-direction:column;gap:4px;">
      <div style="font-size:11px;font-weight:600;display:flex;align-items:center;gap:4px;padding:2px 4px;">🏠 Acme</div>
      <div style="font-size:11px;color:var(--card-fg-muted);padding:2px 4px;">🔍 Search</div>
      <div style="font-size:10px;font-weight:500;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;padding:8px 4px 2px;">Workspace</div>
      <div style="font-size:11px;color:var(--card-fg-muted);padding:2px 4px;">📚 Wiki</div>
      <div style="font-size:11px;color:var(--card-fg-muted);padding:2px 4px;">📋 Roadmap</div>
    </div>
    <div style="padding:18px 18px 12px;display:flex;flex-direction:column;justify-content:flex-start;gap:10px;">
      <div style="font-size:36px;line-height:1;">📓</div>
      <h2 style="font-size:22px;font-weight:700;line-height:1.2;letter-spacing:-0.015em;margin:0;">Engineering Onboarding</h2>
      <p style="font-size:11px;line-height:1.5;color:var(--card-fg-muted);margin:0;">새 팀원을 위한 1주 차 가이드.</p>
      <div style="background:#FDECC8;border:1px solid rgba(55,53,47,0.09);border-radius:4px;padding:8px 10px;display:flex;gap:8px;align-items:flex-start;font-size:11px;line-height:1.43;">
        <span style="font-size:14px;">💡</span>
        <span><strong>Tip</strong> — 어디서나 <code style="background:#F1F1EF;padding:0 3px;border-radius:2px;">/</code>로 슬래시 메뉴.</span>
      </div>
    </div>
  </div>

sources:
  - https://www.notion.so/
  - https://www.notion.so/brand
  - https://developers.notion.com/
---

### ① 브랜드 DNA
- **브랜드명**: Notion
- **한 줄 정체성**: 종이의 따뜻함을 디지털 캔버스로 옮긴, 인라인 편집 중심의 만능 워크스페이스
- **공식 디자인 철학**: "A new tool for the new work — flexible, calm, made to be made yours"
- **시그니처 요소 1개**: 종이 같은 따뜻한 중성색(#FFFFFF on #F7F6F3) + Inter 본문 + 인라인 슬래시 메뉴(/)와 emoji-as-icon

### ② 톤 & 무드
- **핵심 키워드 3개**: 따뜻함, 미니멀, 유연함
- **무드 설명**: 거의 흰 캔버스 위에 검은 글자만 있는 듯한 단순함. 색은 Notion red/yellow/blue 같은 highlight에만, 컴포넌트는 한없이 평면적이다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (warm grayscale, emoji 친화)
- **밀도(Density)**: Comfortable — 글쓰기와 인라인 편집에 충분한 line-height
- **모서리 성향**: Soft (3~6px) — 거의 sharp에 가까운
- **평면성**: Flat — 그림자 거의 없음, hover 배경 톤 변경

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Notion Default Text Black (Notion은 black이 primary) */
  --color-primary-50:  #F4F4F2;
  --color-primary-100: #EAE9E5;
  --color-primary-200: #D4D2CC;
  --color-primary-300: #ADA9A2;
  --color-primary-400: #787774;
  --color-primary-500: #37352F;  /* Notion default text 기본 */
  --color-primary-600: #2F2D27;
  --color-primary-700: #25241F;
  --color-primary-800: #1B1A16;
  --color-primary-900: #11100D;

  /* Secondary - Notion Blue (link/highlight) */
  --color-secondary-500: #2383E2;

  /* Neutral - Warm gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F6F3;  /* page bg subtle */
  --color-neutral-100:  #F1F1EF;  /* hover */
  --color-neutral-200:  #E9E9E7;  /* divider */
  --color-neutral-300:  #DDDDDC;
  --color-neutral-500:  #9B9A97;  /* text gray */
  --color-neutral-700:  #6F6F6E;
  --color-neutral-800:  #4A4A48;
  --color-neutral-900:  #37352F;
  --color-neutral-1000: #1F1F1C;

  /* Notion 시그니처 highlight 색 */
  --highlight-red:    #FFE2DD;
  --highlight-yellow: #FDECC8;
  --highlight-green:  #DBEDDB;
  --highlight-blue:   #D3E5EF;
  --highlight-purple: #E8DEEE;
  --highlight-pink:   #F5E0E9;
  --highlight-brown:  #EAE3DD;

  /* Semantic */
  --color-success-bg: #DBEDDB;
  --color-success-fg: #448361;
  --color-warning-bg: #FDECC8;
  --color-warning-fg: #D9730D;
  --color-error-bg:   #FFE2DD;
  --color-error-fg:   #E03E3E;
  --color-info-bg:    #D3E5EF;
  --color-info-fg:    #2383E2;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F6F3;       /* sidebar */
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(15,15,15,0.30);

  /* Text */
  --text-primary:    #37352F;
  --text-secondary:  rgba(55,53,47,0.65);
  --text-tertiary:   rgba(55,53,47,0.45);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(55,53,47,0.30);

  /* Border */
  --border-default: rgba(55,53,47,0.16);
  --border-subtle:  rgba(55,53,47,0.09);
  --border-strong:  rgba(55,53,47,0.30);
  --border-focus:   #2383E2;
}

[data-theme="dark"] {
  --bg-base: #191919;
  --bg-subtle: #202020;
  --bg-elevated: #2F2F2F;
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.70);
  --border-default: rgba(255,255,255,0.13);
  --color-primary-500: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) / Lyon (Notion 헤드 — 일부 마케팅), 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "iAWriter Mono", "JetBrains Mono"
- **위계** (Notion의 절제된 ramp):
  - Display: 48px / 700 / 1.1 / -0.02em (페이지 타이틀)
  - H1: 32px / 700 / 1.2 / -0.015em
  - H2: 24px / 600 / 1.3 / -0.01em
  - H3: 20px / 600 / 1.3 / -0.005em
  - Body Large: 18px / 400 / 1.5 / 0
  - Body: 16px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.43 / 0
  - Caption: 12px / 500 / 1.33 / 0.04em

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 48px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 900px (페이지 본문 — Notion default), 좌우 패딩 96px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 3px;     /* 컨트롤 */
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(15,15,15,0.10);
--shadow-md: rgba(15,15,15,0.05) 0px 0px 0px 1px, rgba(15,15,15,0.10) 0px 3px 6px, rgba(15,15,15,0.20) 0px 9px 24px;  /* slash menu, popup */
--shadow-lg: rgba(15,15,15,0.05) 0px 0px 0px 1px, rgba(15,15,15,0.10) 0px 5px 10px, rgba(15,15,15,0.20) 0px 15px 40px;
--shadow-xl: rgba(15,15,15,0.30) 0px 30px 60px;
```

### ⑧ Iconography
- **스타일**: Outline + Emoji (Notion의 "이모지를 아이콘으로" 문화)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor + 시스템 emoji

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 14px/1.2 "Inter", "Pretendard", sans-serif;
  border-radius: var(--radius-sm);
  padding: 0 12px;
  height: 28px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 80ms ease;
  white-space: nowrap;
}
.btn-primary { background: var(--color-secondary-500); color: #fff; }
.btn-primary:hover { background: #1B6EC2; }
.btn-primary:active { background: #155DA8; }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--color-neutral-100); }
.btn-ghost { background: transparent; color: var(--text-secondary); }
.btn-ghost:hover { background: var(--color-neutral-100); color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--color-neutral-100);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 4px 8px;
  height: 28px;
  font-size: 14px;
}
.input:focus {
  outline: none;
  background: var(--bg-base);
  border-color: var(--border-focus);
  box-shadow: rgba(35,131,226,0.30) 0px 0px 0px 2px inset;
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card** (Notion에서는 callout 또는 toggle 블록)
```css
.card { background: var(--color-neutral-50); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; display: flex; gap: 12px; }
.card .icon-emoji { font-size: 22px; line-height: 1.2; flex: 0 0 24px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Tag (Notion property pill)**
```css
.tag { padding: 0 8px; height: 20px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 500; line-height: 20px; display: inline-flex; align-items: center; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--highlight-blue); color: #183347; }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-red     { background: var(--highlight-red);    color: #5A1D1A; }
.tag-yellow  { background: var(--highlight-yellow); color: #64473A; }
.tag-green   { background: var(--highlight-green);  color: #1C3829; }
```

**Navigation (Sidebar)**
```css
.sidebar { width: 240px; background: var(--bg-subtle); padding: 8px; height: 100vh; }
.sidebar .item { display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: var(--radius-sm); color: var(--text-secondary); font-size: 14px; cursor: pointer; }
.sidebar .item:hover { background: var(--color-neutral-100); color: var(--text-primary); }
.sidebar .item .ic { width: 20px; text-align: center; }
.sidebar .section-label { padding: 16px 8px 4px; font-size: 12px; font-weight: 500; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 150ms;
--duration-slow: 250ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
```

### ⑪ Anti-patterns
1. 페이지 본문에 채도 높은 brand 컬러 배경 사용 금지 — 종이 톤(#F7F6F3 또는 #FFF) 보존
2. 컴포넌트에 큰 그림자(shadow-xl) 사용 금지 — slash menu/popup에만
3. 본문 폰트 size 16px 미만으로 줄이지 말 것 — Notion의 longform 가독성 핵심
4. emoji 아이콘과 svg 아이콘을 한 toolbar에 혼용 금지 — Notion은 emoji 일관 사용
5. callout block에 그라데이션 배경 금지 — 7개 시그니처 highlight 색만

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Inter", "Pretendard", -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
  .sidebar { background: var(--bg-subtle); padding: 8px; border-right: 1px solid var(--border-subtle); }
  .sidebar .ws { padding: 8px; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 6px; }
  .sidebar .item { display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 4px; color: var(--text-secondary); font-size: 14px; cursor: pointer; }
  .sidebar .item:hover { background: var(--color-neutral-100); color: var(--text-primary); }
  .sidebar .section-label { padding: 16px 8px 4px; font-size: 12px; font-weight: 500; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; }
  .page { padding: 96px 96px 200px; max-width: 900px; margin: 0 auto; }
  .page .icon { font-size: 78px; margin-bottom: 8px; line-height: 1; }
  .page h1 { font-size: 48px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 32px; }
  .page p { font-size: 16px; line-height: 1.5; margin: 0 0 16px; }
  .features { display: grid; grid-template-columns: 1fr; gap: 8px; margin-top: 32px; }
  .feature-card { background: var(--color-neutral-50); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 16px; display: flex; gap: 12px; }
  .feature-card .icon-emoji { font-size: 24px; flex: 0 0 24px; line-height: 1.2; }
  .feature-card h3 { font-size: 16px; font-weight: 600; margin: 0 0 4px; }
  .feature-card p { font-size: 14px; line-height: 1.43; color: var(--text-secondary); margin: 0; }
</style>

<div class="layout">
  <aside class="sidebar">
    <div class="ws">🏠 Acme Workspace</div>
    <div class="item">🔍 Search</div>
    <div class="item">⏱ Updates</div>
    <div class="item">⚙️ Settings</div>
    <div class="section-label">Workspace</div>
    <div class="item">📚 Engineering Wiki</div>
    <div class="item">📋 Roadmap 2026</div>
    <div class="item">🗂 Meeting notes</div>
    <div class="section-label">Private</div>
    <div class="item">📓 Daily journal</div>
  </aside>
  <main class="page">
    <div class="icon">📓</div>
    <h1>Engineering Onboarding</h1>
    <p>새로운 팀원을 위한 1주 차 가이드입니다. 슬래시 메뉴(/)로 블록을 추가하고, 자유롭게 편집하세요.</p>
    <div class="features">
      <div class="feature-card"><div class="icon-emoji">💡</div><div><h3>Tip — Slash menu</h3><p>아무 줄에서 <code style="background:var(--color-neutral-100); padding:1px 4px; border-radius:3px">/</code>를 누르면 30+ 블록을 호출할 수 있습니다.</p></div></div>
      <div class="feature-card"><div class="icon-emoji">📌</div><div><h3>Tip — Mention</h3><p><code style="background:var(--color-neutral-100); padding:1px 4px; border-radius:3px">@</code>로 사람·페이지·날짜를 인라인 참조하세요.</p></div></div>
      <div class="feature-card"><div class="icon-emoji">🗂</div><div><h3>데이터베이스</h3><p>표/보드/타임라인/캘린더 — 같은 데이터를 6가지 시점으로 보세요.</p></div></div>
    </div>
  </main>
</div>
```
