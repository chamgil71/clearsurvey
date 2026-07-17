---
brand: ElevenLabs
brand_ko: 일레븐랩스
slug: elevenlabs
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - creative-tools

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Eleven Mono"
mood:
  - 절제
  - 명확
  - 보이스

font_category: serif
font_primary: GT Sectra
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

released_year: 2022
last_major_revision: 2025
signature_keyword: "흰 캔버스 + 검정 세리프 타이틀 + 파형 한 줄 — 출판물 톤의 AI 보이스 스튜디오"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#E5E5E5", "fg": "#000000", "fg_muted": "#737373", "accent": "#000000" },
    "dark":  { "bg": "#0A0A0A", "surface": "#1F1F1F", "border": "#262626", "fg": "#FFFFFF", "fg_muted": "#737373", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:-apple-system,'Inter',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:18px;height:18px;background:var(--card-accent);border-radius:3px;display:grid;place-items:center;color:var(--card-bg);font:900 10px/1 sans-serif;">11</div>
      <span style="font-family:'GT Sectra','Source Serif Pro',serif;font-size:14px;font-weight:500;letter-spacing:-0.01em;">ElevenLabs</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:10px;">
      <div style="font-family:'GT Sectra','Source Serif Pro',serif;font-size:18px;line-height:1.3;color:var(--card-fg);">잘 들리는 AI 음성, 처음부터 끝까지.</div>
      <div style="background:var(--card-surface);border-radius:8px;padding:10px 12px;display:flex;align-items:center;gap:10px;">
        <div style="width:24px;height:24px;background:var(--card-accent);border-radius:50%;display:grid;place-items:center;color:var(--card-bg);">▶</div>
        <svg viewBox="0 0 200 24" style="flex:1;height:18px;">
          <g fill="#000">
            <rect x="0" y="9" width="2" height="6"/>
            <rect x="6" y="6" width="2" height="12"/>
            <rect x="12" y="4" width="2" height="16"/>
            <rect x="18" y="2" width="2" height="20"/>
            <rect x="24" y="6" width="2" height="12"/>
            <rect x="30" y="8" width="2" height="8"/>
            <rect x="36" y="3" width="2" height="18"/>
            <rect x="42" y="7" width="2" height="10"/>
            <rect x="48" y="5" width="2" height="14"/>
            <rect x="54" y="9" width="2" height="6"/>
            <rect x="60" y="2" width="2" height="20"/>
            <rect x="66" y="8" width="2" height="8"/>
            <rect x="72" y="4" width="2" height="16"/>
            <rect x="78" y="9" width="2" height="6"/>
            <rect x="84" y="6" width="2" height="12"/>
          </g>
        </svg>
        <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--card-fg-muted);">0:08</span>
      </div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid var(--card-border);font-size:10px;color:var(--card-fg-muted);">Voice · <span style="color:var(--card-fg);">Rachel</span> · v3</div>
  </div>

sources:
  - https://elevenlabs.io/
---

### ① 브랜드 DNA
- **브랜드명**: ElevenLabs
- **한 줄 정체성**: 가장 자연스러운 AI 음성 합성·복제·더빙 플랫폼
- **공식 디자인 철학**: "Voices that sound human" — 음성을 다루는 도구답게 톤도 조용하고 명료
- **시그니처 요소 1개**: 순백 #FFFFFF 캔버스 + 검정 #000 세리프 타이틀(GT Sectra) + 검정 파형 한 줄. 다른 AI(Midjourney 보라, Runway 그린)와 정반대의 "출판물 같은 정적인 톤"

### ② 톤 & 무드
- **핵심 키워드 3개**: 절제, 명확, 보이스
- **무드 설명**: AI 도구라는 인상보다 잡지·논문 표지에 가깝다. 세리프 헤드라인이 시그니처. UI 채도는 거의 0. 강조는 검정 한 톤만 사용해 음성 결과물이 두드러지게 함.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (세리프)
- **밀도(Density)**: Comfortable — 충분한 호흡
- **모서리 성향**: Soft (6~8px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Pure mono */
  --color-primary-50:  #F5F5F5;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #D4D4D4;
  --color-primary-300: #A3A3A3;
  --color-primary-400: #737373;
  --color-primary-500: #525252;
  --color-primary-600: #404040;
  --color-primary-700: #262626;
  --color-primary-800: #171717;
  --color-primary-900: #000000;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F5F5F5;
  --color-neutral-300:  #D4D4D4;
  --color-neutral-500:  #737373;
  --color-neutral-700:  #404040;
  --color-neutral-900:  #171717;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFDF5;
  --color-success-fg: #047857;
  --color-warning-bg: #FFFBEB;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FEF2F2;
  --color-error-fg:   #B91C1C;
  --color-info-bg:    #EFF6FF;
  --color-info-fg:    #1D4ED8;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #FAFAFA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.55);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #404040;
  --text-tertiary:   #737373;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #A3A3A3;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F5F5F5;
  --border-strong:  #D4D4D4;
  --border-focus:   #000000;
}

[data-theme="dark"] {
  --bg-base: #0A0A0A;
  --bg-subtle: #171717;
  --bg-elevated: #1F1F1F;
  --text-primary: #FFFFFF;
  --text-secondary: #D4D4D4;
  --text-tertiary: #737373;
  --border-default: #262626;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 타이틀(영문): GT Sectra (Grilli Type) / Source Serif Pro / Tiempos Text 폴백
  - UI(영문): Inter (OFL)
  - 한글 타이틀: Noto Serif KR / 본명조
  - 한글 UI: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono
- **위계**:
  - Display: 64px / 500 / 1.05 / -0.03em serif
  - H1: 40px / 500 / 1.15 / -0.025em serif
  - H2: 28px / 500 / 1.25 / -0.02em serif
  - H3: 18px / 500 / 1.35 / -0.01em serif
  - Body Large: 17px / 400 / 1.6 / 0 serif
  - Body: 15px / 400 / 1.6 / 0 sans
  - Body Small: 13px / 400 / 1.5 / 0 sans
  - Caption: 12px / 500 / 1.4 / 0 sans
  - Code/Time: 12px / 400 / 1.4 mono

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 1200px (랜딩), 720px (작업), 좌우 패딩 24px

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
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.10);
```

### ⑧ Iconography
- **스타일**: Outline (1.5px)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 13px/1 Inter,sans-serif; padding: 9px 16px; border-radius: 6px; border: 1px solid var(--border-default); background: var(--bg-base); color: var(--text-primary); transition: background 150ms ease; cursor: pointer; }
.btn:hover { background: var(--bg-subtle); }
.btn-primary { background: var(--text-primary); color: var(--text-on-primary); border-color: transparent; }
.btn-primary:hover { background: #262626; }
.btn-ghost { background: transparent; border-color: transparent; color: var(--text-secondary); }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 6px; padding: 9px 12px; font: 400 14px/1.5 Inter,sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(0,0,0,0.08); }
```

**Card (Voice / Audio)**
```css
.voice-card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
.voice-card h3 { font: 500 16px/1.3 'GT Sectra',serif; margin: 0; }
.voice-card .sub { font: 400 13px/1.4 Inter,sans-serif; color: var(--text-tertiary); }
.audio-bar { background: var(--bg-subtle); border-radius: 8px; padding: 8px 12px; display: flex; align-items: center; gap: 10px; }
.audio-bar .play { width: 28px; height: 28px; border-radius: 50%; background: var(--text-primary); color: var(--text-on-primary); display: grid; place-items: center; cursor: pointer; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font: 500 11px/1.4 Inter,sans-serif; }
.tag-default { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); }
.tag-pro { background: var(--text-primary); color: var(--text-on-primary); }
```

**Navigation**
```css
.topbar { background: var(--bg-base); padding: 14px 24px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid var(--border-subtle); }
.topbar .logo { width: 24px; height: 24px; background: var(--text-primary); border-radius: 4px; display: grid; place-items: center; color: var(--text-on-primary); font: 900 11px/1 sans-serif; }
.topbar h1 { font: 500 18px/1 'GT Sectra',serif; letter-spacing: -0.01em; margin: 0; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
```

### ⑪ Anti-patterns
1. 본문 텍스트에 세리프 사용 금지 — 타이틀만 세리프, 본문은 산세리프 분리
2. 화려한 그라데이션 배경 금지 — 단순 흰 캔버스만
3. 파형 색을 액센트 컬러로 칠하기 금지 — 검정 단색만
4. 둥근 모서리(>12px) 사용 금지 — 출판물 톤
5. 채도 있는 강조 사용 금지 — 검정/흰색의 대비만으로 위계

### ⑫ 시그니처 적용 예시

```html
<style>
  .el-app { font: 15px/1.6 Inter, -apple-system, sans-serif; background: #fff; color: #000; min-height: 480px; display: grid; grid-template-rows: auto 1fr auto; max-width: 720px; margin: 0 auto; padding: 20px; }
  .el-app .top { display: flex; align-items: center; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid #F5F5F5; }
  .el-app .top .logo { width: 26px; height: 26px; background: #000; color: #fff; border-radius: 4px; display: grid; place-items: center; font: 900 12px/1 sans-serif; }
  .el-app .top h1 { font: 500 20px/1 'GT Sectra', 'Source Serif Pro', serif; letter-spacing: -0.01em; margin: 0; }
  .el-app .top .pro { margin-left: auto; padding: 3px 10px; border-radius: 9999px; background: #000; color: #fff; font: 500 11px/1.4 Inter, sans-serif; }
  .el-app .main { padding: 32px 8px; }
  .el-app .main h2 { font: 500 36px/1.15 'GT Sectra','Source Serif Pro',serif; letter-spacing: -0.025em; margin: 0 0 14px; }
  .el-app .main p { font: 400 16px/1.65 Inter,sans-serif; color: #404040; margin: 0 0 24px; max-width: 540px; }
  .el-app .card { background: #fff; border: 1px solid #E5E5E5; border-radius: 8px; padding: 18px; display: flex; flex-direction: column; gap: 12px; }
  .el-app .card .row { display: flex; align-items: center; gap: 10px; }
  .el-app .card .voice { font: 500 14px/1.3 'GT Sectra',serif; letter-spacing: -0.005em; }
  .el-app .card .v3 { font: 500 11px/1.4 Inter,sans-serif; padding: 2px 8px; border-radius: 9999px; background: #F5F5F5; color: #404040; border: 1px solid #E5E5E5; }
  .el-app .card .meta { font: 400 12px/1 'JetBrains Mono',monospace; color: #737373; margin-left: auto; }
  .el-app .audio { background: #F5F5F5; border-radius: 8px; padding: 10px 14px; display: flex; align-items: center; gap: 12px; }
  .el-app .audio .play { width: 30px; height: 30px; border-radius: 50%; background: #000; color: #fff; display: grid; place-items: center; font-weight: 700; }
  .el-app .audio .wf { flex: 1; }
  .el-app .audio .tc { font: 400 11px/1 'JetBrains Mono',monospace; color: #737373; }
  .el-app .actions { display: flex; gap: 8px; }
  .el-app .actions .btn { font: 500 13px/1 Inter,sans-serif; padding: 9px 16px; border-radius: 6px; border: 1px solid #E5E5E5; background: #fff; color: #000; }
  .el-app .actions .btn.p { background: #000; color: #fff; border-color: transparent; }
  .el-app .foot { padding: 14px 8px 0; border-top: 1px solid #F5F5F5; font: 400 12px/1.4 Inter,sans-serif; color: #737373; }
</style>

<div class="el-app">
  <header class="top">
    <div class="logo">11</div>
    <h1>ElevenLabs</h1>
    <span class="pro">Pro</span>
  </header>
  <main class="main">
    <h2>잘 들리는 AI 음성, 처음부터 끝까지.</h2>
    <p>광고·오디오북·게임 더빙까지 자연스러운 보이스 합성과 복제. 한 문장 입력으로 결과를 확인하세요.</p>
    <div class="card">
      <div class="row">
        <span class="voice">Rachel</span>
        <span class="v3">v3 · narration</span>
        <span class="meta">0:08 / 0:08</span>
      </div>
      <div class="audio">
        <div class="play">▶</div>
        <div class="wf">
          <svg viewBox="0 0 360 28" style="display:block;width:100%;height:28px;"><g fill="#000">
            <rect x="0" y="10" width="3" height="8"/><rect x="8" y="6" width="3" height="16"/><rect x="16" y="3" width="3" height="22"/><rect x="24" y="8" width="3" height="12"/><rect x="32" y="5" width="3" height="18"/><rect x="40" y="11" width="3" height="6"/><rect x="48" y="2" width="3" height="24"/><rect x="56" y="9" width="3" height="10"/><rect x="64" y="6" width="3" height="16"/><rect x="72" y="4" width="3" height="20"/><rect x="80" y="10" width="3" height="8"/><rect x="88" y="7" width="3" height="14"/><rect x="96" y="3" width="3" height="22"/><rect x="104" y="9" width="3" height="10"/><rect x="112" y="5" width="3" height="18"/><rect x="120" y="11" width="3" height="6"/><rect x="128" y="8" width="3" height="12"/><rect x="136" y="4" width="3" height="20"/><rect x="144" y="10" width="3" height="8"/><rect x="152" y="6" width="3" height="16"/><rect x="160" y="11" width="3" height="6"/><rect x="168" y="7" width="3" height="14"/><rect x="176" y="3" width="3" height="22"/><rect x="184" y="9" width="3" height="10"/><rect x="192" y="5" width="3" height="18"/><rect x="200" y="10" width="3" height="8"/><rect x="208" y="6" width="3" height="16"/><rect x="216" y="11" width="3" height="6"/><rect x="224" y="8" width="3" height="12"/><rect x="232" y="4" width="3" height="20"/><rect x="240" y="9" width="3" height="10"/><rect x="248" y="6" width="3" height="16"/><rect x="256" y="11" width="3" height="6"/>
          </g></svg>
        </div>
        <span class="tc">0:08</span>
      </div>
      <div class="actions">
        <button class="btn p">↓ Download</button>
        <button class="btn">Regenerate</button>
      </div>
    </div>
  </main>
  <footer class="foot">Voice cloning · TTS · Dubbing · Sound effects</footer>
</div>
```
