---
brand: Zoom
brand_ko: 줌
slug: zoom
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#0B5CFF"
primary_color_name: "Zoom Blue"
mood:
  - 신뢰
  - 명료
  - 회의 우선

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2011
last_major_revision: 2023
signature_keyword: "Blue 액션과 갤러리뷰 그리드의 화상회의 표준"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F8F9FB", "border": "#DDE0E5", "fg": "#1F2329", "fg_muted": "#5C6168", "accent": "#0B5CFF" },
    "dark":  { "bg": "#1F2329", "surface": "#2D3138", "border": "#3D434A", "fg": "#FFFFFF", "fg_muted": "#A4ABB7", "accent": "#0B5CFF" }
  }

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr auto;">
    <div style="background:var(--card-surface);padding:8px 14px;font-size:12px;display:flex;align-items:center;gap:8px;">
      <span style="width:18px;height:18px;background:var(--card-accent);border-radius:5px;display:grid;place-items:center;font-size:9px;">📹</span>
      <strong style="color:var(--card-fg);font-size:13px;">Zoom Meeting</strong>
      <span style="margin-left:auto;color:var(--card-fg-muted);font-size:10px;">● REC 12:34</span>
    </div>
    <div style="padding:8px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
      <div style="aspect-ratio:4/3;background:linear-gradient(135deg,#5E81F4,#2BAAFB);border-radius:8px;position:relative;display:grid;place-items:center;">
        <span style="width:32px;height:32px;border-radius:50%;background:rgba(0,0,0,0.4);border:2px solid #fff;"></span>
        <span style="position:absolute;left:8px;bottom:6px;background:rgba(0,0,0,0.5);color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;">Mina (You)</span>
      </div>
      <div style="aspect-ratio:4/3;background:linear-gradient(135deg,#FF9E5E,#F65177);border-radius:8px;position:relative;border:2px solid var(--card-accent);">
        <span style="position:absolute;left:8px;bottom:6px;background:rgba(0,0,0,0.5);color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;">Joon</span>
      </div>
      <div style="aspect-ratio:4/3;background:linear-gradient(135deg,#1AAD5C,#0B5CFF);border-radius:8px;position:relative;">
        <span style="position:absolute;left:8px;bottom:6px;background:rgba(0,0,0,0.5);color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;">Dave</span>
      </div>
      <div style="aspect-ratio:4/3;background:var(--card-surface);border-radius:8px;display:grid;place-items:center;color:var(--card-fg-muted);font-size:11px;">Soo (off)</div>
    </div>
    <div style="background:var(--card-surface);padding:8px 12px;display:flex;justify-content:center;gap:8px;">
      <button style="background:var(--card-border);color:#fff;border:0;border-radius:6px;padding:8px 12px;font-size:11px;font-family:inherit;display:flex;align-items:center;gap:4px;">🔇 Mute</button>
      <button style="background:var(--card-border);color:#fff;border:0;border-radius:6px;padding:8px 12px;font-size:11px;font-family:inherit;">📹 Video</button>
      <button style="background:#E02D49;color:#fff;border:0;border-radius:6px;padding:8px 14px;font-size:11px;font-weight:700;font-family:inherit;">End</button>
    </div>
  </div>

sources:
  - https://zoom.us/
  - https://zoom.us/brand-guidelines
  - https://developers.zoom.us/
---

### ① 브랜드 DNA
- **브랜드명**: Zoom (Zoom Workplace)
- **한 줄 정체성**: 어디서나 누구와도 신뢰성 있게 만나는, 화상회의의 표준
- **공식 디자인 철학**: "Bringing teams together — frictionless, reliable, accessible everywhere"
- **시그니처 요소 1개**: Zoom Blue(#0B5CFF) + 갤러리뷰의 동등한 격자 그리드 + 둥근 회의 컨트롤 바

### ② 톤 & 무드
- **핵심 키워드 3개**: 신뢰, 명료, 회의 우선
- **무드 설명**: 다크 회의 캔버스에 참가자 그리드가 동등하게 정렬된다. 색은 액션(Blue)과 종료(Red)에만 강하게.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (6~10px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Zoom Blue */
  --color-primary-50:  #E5F0FF;
  --color-primary-100: #CCE0FF;
  --color-primary-200: #99C2FF;
  --color-primary-300: #66A3FF;
  --color-primary-400: #2B7AF7;
  --color-primary-500: #0B5CFF;  /* Zoom Blue 기본 */
  --color-primary-600: #0048D9;
  --color-primary-700: #0036A8;
  --color-primary-800: #002577;
  --color-primary-900: #001647;

  /* Secondary - End/Leave Red */
  --color-secondary-500: #E02D49;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F9FB;
  --color-neutral-100:  #ECEEF2;
  --color-neutral-200:  #DDE0E5;
  --color-neutral-300:  #C5C9D0;
  --color-neutral-500:  #8C9199;
  --color-neutral-700:  #5C6168;
  --color-neutral-800:  #3D434A;
  --color-neutral-900:  #1F2329;
  --color-neutral-1000: #0E1014;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF4D6;
  --color-warning-fg: #D9890C;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #E02D49;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #0B5CFF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F9FB;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(14,16,20,0.50);

  /* Text */
  --text-primary:    #1F2329;
  --text-secondary:  #5C6168;
  --text-tertiary:   #8C9199;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C5C9D0;

  /* Border */
  --border-default: #DDE0E5;
  --border-subtle:  #ECEEF2;
  --border-strong:  #C5C9D0;
  --border-focus:   #0B5CFF;
}

[data-theme="dark"] {
  /* Zoom 회의 화면 다크 */
  --bg-base: #1F2329;
  --bg-subtle: #2D3138;
  --bg-elevated: #3D434A;
  --text-primary: #FFFFFF;
  --text-secondary: #A4ABB7;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) / Lato (legacy 마케팅) / 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 11px / 600 / 1.27 / 0.04em

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
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 10px;    /* 회의 카드, 컨트롤 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.18);
--shadow-xl: 0 16px 40px rgba(0,0,0,0.24);
```

### ⑧ Iconography
- **스타일**: Filled + Outline (회의 컨트롤은 filled, 메뉴는 outline)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 36px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-base); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-primary-50); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
.btn-danger:hover { background: #B72338; }
```

**Input**
```css
.input {
  background: var(--bg-base);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  font-size: 14px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(11,92,255,0.20); }
```

**Card** (Meeting tile)
```css
.tile { aspect-ratio: 4/3; background: var(--color-neutral-800); border-radius: var(--radius-lg); position: relative; overflow: hidden; }
.tile.active { box-shadow: 0 0 0 3px var(--color-primary-500); }
.tile .name { position: absolute; left: 8px; bottom: 6px; background: rgba(0,0,0,0.5); color: #fff; padding: 1px 8px; border-radius: var(--radius-sm); font-size: 11px; }
.card { background: var(--bg-base); border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-rec { background: rgba(0,0,0,0.6); color: #fff; }
.tag-rec::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: var(--color-error-fg); }
```

**Navigation (Meeting toolbar)**
```css
.toolbar { background: var(--color-neutral-800); padding: 10px 16px; display: flex; justify-content: center; gap: 10px; }
.toolbar .ctl { background: var(--color-neutral-700); color: #fff; border-radius: var(--radius-md); padding: 8px 14px; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; }
.toolbar .ctl.end { background: var(--color-error-fg); }
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
1. End/Leave 버튼을 Blue로 변경 금지 — Red 의미 신호 보존
2. 갤러리뷰에서 한 참가자만 비대칭 크게 표시 금지 (Speaker view 외) — 동등한 격자 표준
3. 회의 컨트롤 바 라운드를 sharp로 변경 금지
4. 본문에 채도 높은 brand 그라데이션 사용 금지 — 회의 콘텐츠 우선
5. 마이크/카메라 상태를 텍스트로만 표시 금지 — 아이콘 + 색 동시 표기

### ⑫ 시그니처 적용 예시 (Meeting view)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: #fff; background: #1F2329; }
  .meeting { display: grid; grid-template-rows: auto 1fr auto; height: 100vh; }
  .meeting-header { padding: 12px 20px; background: #2D3138; display: flex; align-items: center; gap: 12px; }
  .meeting-header h1 { margin: 0; font-size: 14px; font-weight: 600; }
  .meeting-header .info { font-size: 11px; color: #A4ABB7; }
  .gallery { padding: 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; align-content: start; }
  .tile { aspect-ratio: 4/3; background: #3D434A; border-radius: 10px; position: relative; overflow: hidden; }
  .tile.active { box-shadow: 0 0 0 3px #0B5CFF; }
  .tile.t1 { background: linear-gradient(135deg, #5E81F4, #2BAAFB); }
  .tile.t2 { background: linear-gradient(135deg, #FF9E5E, #F65177); }
  .tile.t3 { background: linear-gradient(135deg, #1AAD5C, #0B5CFF); }
  .tile.t4 { background: linear-gradient(135deg, #B07CFF, #0B5CFF); }
  .tile .name { position: absolute; left: 8px; bottom: 8px; background: rgba(0,0,0,0.5); color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 11px; }
  .tile .mic { position: absolute; right: 8px; bottom: 8px; width: 24px; height: 24px; border-radius: 50%; background: rgba(0,0,0,0.5); display: grid; place-items: center; font-size: 11px; }
  .tile.muted .mic { background: #E02D49; }
  .toolbar { background: #2D3138; padding: 12px 16px; display: flex; justify-content: center; gap: 8px; }
  .ctl { background: #3D434A; color: #fff; border: 0; border-radius: 8px; padding: 10px 14px; font-size: 12px; font-family: inherit; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
  .ctl:hover { background: #4D535C; }
  .ctl.end { background: #E02D49; font-weight: 700; }
</style>

<div class="meeting">
  <header class="meeting-header">
    <span style="background:#0B5CFF; width:24px; height:24px; border-radius:6px; display:grid; place-items:center;">📹</span>
    <h1>Q3 Roadmap Sync</h1>
    <span class="info">7명 참가 · ● REC 12:34</span>
    <span class="info" style="margin-left:auto;">✓ 잠금</span>
  </header>
  <div class="gallery">
    <div class="tile t1 muted"><span class="name">Mina (You)</span><span class="mic">🔇</span></div>
    <div class="tile t2 active"><span class="name">Joon · 발표 중</span><span class="mic">🎤</span></div>
    <div class="tile t3"><span class="name">Dave</span><span class="mic">🎤</span></div>
    <div class="tile t4 muted"><span class="name">Soo</span><span class="mic">🔇</span></div>
    <div class="tile" style="display:grid; place-items:center; color:#A4ABB7; font-size:13px;">Lin (off)</div>
    <div class="tile" style="display:grid; place-items:center; color:#A4ABB7; font-size:13px;">+ 2명</div>
  </div>
  <div class="toolbar">
    <button class="ctl">🔇 Mute</button>
    <button class="ctl">📹 Stop Video</button>
    <button class="ctl">⇪ Share</button>
    <button class="ctl">💬 Chat</button>
    <button class="ctl">⋯ More</button>
    <button class="ctl end">End</button>
  </div>
</div>
```
