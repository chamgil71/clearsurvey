---
brand: Runway
brand_ko: 런웨이
slug: runway
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - creative-tools

color_tone: cool
primary_color_hex: "#00FF88"
primary_color_name: "Runway Neon"
mood:
  - 영상감독
  - 정밀
  - 미래

font_category: sans-serif
font_primary: Suisse Int'l
font_korean_supported: true

density: compact
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - dark

released_year: 2018
last_major_revision: 2025
signature_keyword: "흑백 NLE 그리드 + 형광 그린 액션 — 영상 편집 도구의 정밀함을 입은 AI 비디오 스튜디오"

hero_html: |
  <div style="font-family:'Suisse Intl','Inter',-apple-system,sans-serif;background:#0A0A0A;color:#fff;height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.01em;">
    <div style="padding:8px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #1A1A1A;">
      <div style="width:14px;height:14px;background:#00FF88;"></div>
      <span style="font-weight:500;">Runway</span>
      <span style="color:#737373;margin-left:auto;">Gen-4</span>
    </div>
    <div style="display:grid;grid-template-rows:1fr auto;padding:6px;gap:6px;">
      <div style="background:linear-gradient(135deg,#1A1A1A 0%,#0A0A0A 100%);aspect-ratio:16/9;display:grid;place-items:center;border:1px solid #1A1A1A;">
        <div style="width:32px;height:32px;border:2px solid #00FF88;border-radius:50%;display:grid;place-items:center;color:#00FF88;font-weight:700;">▶</div>
      </div>
      <div style="background:#0E0E0E;border:1px solid #1A1A1A;height:24px;position:relative;">
        <div style="position:absolute;left:18%;top:0;bottom:0;width:0.5px;background:#00FF88;"></div>
        <div style="position:absolute;left:0;top:0;height:6px;width:40%;background:#1F1F1F;"></div>
        <div style="position:absolute;left:42%;top:0;height:6px;width:35%;background:#1F1F1F;"></div>
      </div>
    </div>
    <div style="padding:6px 10px;border-top:1px solid #1A1A1A;font-size:9px;color:#737373;display:flex;gap:10px;font-family:'JetBrains Mono',monospace;">
      <span>00:02:14</span><span>16:9</span><span style="margin-left:auto;color:#00FF88;">● REC</span>
    </div>
  </div>

sources:
  - https://runwayml.com/
---

### ① 브랜드 DNA
- **브랜드명**: Runway
- **한 줄 정체성**: 텍스트·이미지에서 영상을 생성하고 편집하는 AI 비디오 스튜디오 (Gen-1 ~ Gen-4)
- **공식 디자인 철학**: "Tools for human imagination" — 영상감독의 NLE 도구처럼 정밀
- **시그니처 요소 1개**: 거의 검정 #0A0A0A 캔버스 + 형광 그린(#00FF88) 한 점 액션 강조 + 1px 모서리. After Effects/Premiere 같은 NLE 톤을 AI에 이식

### ② 톤 & 무드
- **핵심 키워드 3개**: 영상감독, 정밀, 미래
- **무드 설명**: 영상 편집실의 다크 워크스테이션. 그리드와 타임라인이 캔버스의 80%를 차지하며, 강조는 1픽셀 형광 그린 또는 흰 한 줄로 끝낸다. Midjourney의 보라 그라데이션과 정반대의 "기술자 톤".
- **비주얼 스타일**: 모던 미니멀 + 브루털리즘 (그리드/모서리)
- **밀도(Density)**: Compact — NLE 워크플로우
- **모서리 성향**: Sharp (0~3px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Runway Neon (시그니처 강조) */
  --color-primary-50:  #E6FFF3;
  --color-primary-100: #B3FFD9;
  --color-primary-200: #80FFBF;
  --color-primary-300: #4DFFA5;
  --color-primary-400: #1AFF92;
  --color-primary-500: #00FF88;
  --color-primary-600: #00CC6E;
  --color-primary-700: #009955;
  --color-primary-800: #00663B;
  --color-primary-900: #003322;

  /* Secondary - 없음. 모노톤 + 그린 한 톤 */

  /* Neutral - Pure ink */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F5;
  --color-neutral-100:  #E5E5E5;
  --color-neutral-300:  #A1A1A1;
  --color-neutral-500:  #737373;
  --color-neutral-700:  #404040;
  --color-neutral-800:  #1F1F1F;
  --color-neutral-900:  #0A0A0A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #003322;
  --color-success-fg: #00FF88;
  --color-warning-bg: #2A2008;
  --color-warning-fg: #FFD400;
  --color-error-bg:   #2A0A14;
  --color-error-fg:   #FF4D6D;
  --color-info-bg:    #0A1A2A;
  --color-info-fg:    #4D9FFF;

  /* Surface */
  --bg-base:     #0A0A0A;
  --bg-subtle:   #0E0E0E;
  --bg-elevated: #1A1A1A;
  --bg-overlay:  rgba(0,0,0,0.85);

  /* Text */
  --text-primary:    #FFFFFF;
  --text-secondary:  #A1A1A1;
  --text-tertiary:   #737373;
  --text-on-primary: #0A0A0A;
  --text-disabled:   #404040;

  /* Border */
  --border-default: #1A1A1A;
  --border-subtle:  #0E0E0E;
  --border-strong:  #404040;
  --border-focus:   #00FF88;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Suisse Int'l / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드/타임코드: JetBrains Mono / IBM Plex Mono
- **위계**:
  - Display: 56px / 500 / 1.1 / -0.03em
  - H1: 32px / 500 / 1.2 / -0.02em
  - H2: 18px / 500 / 1.3 / -0.01em
  - H3: 13px / 600 / 1.4 / 0
  - Body: 13px / 400 / 1.5 / 0
  - Body Small: 11px / 400 / 1.45 / 0
  - Code/Timecode: 12px / 400 / 1.4 mono
  - Caption: 10px / 600 / 1.4 / 0.08em uppercase

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 2px;
  --space-sm: 4px;
  --space-md: 8px;
  --space-lg: 12px;
  --space-xl: 16px;
  --space-2xl: 24px;
  --space-3xl: 40px;
  ```
- **Container**: 풀스크린 NLE 레이아웃

### ⑥ Border Radius
```css
--radius-none: 0;       /* NLE는 직각 시그니처 */
--radius-sm: 2px;
--radius-md: 3px;       /* 기본 */
--radius-lg: 4px;
--radius-xl: 6px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(0,0,0,0.6);
--shadow-md: 0 4px 16px rgba(0,0,0,0.7);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.8);
--shadow-neon: 0 0 0 1px #00FF88;     /* 포커스 외곽선 */
```

### ⑧ Iconography
- **스타일**: Outline (1.25px) — NLE 톤
- **Stroke 굵기**: 1.25px
- **모서리 처리**: Sharp / Square
- **추천 라이브러리**: Lucide / Phosphor (Sharp variant)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 12px/1 'Suisse Intl',Inter,sans-serif; padding: 7px 12px; border-radius: 3px; border: 1px solid var(--border-default); background: var(--bg-elevated); color: var(--text-primary); transition: background 120ms ease; cursor: pointer; }
.btn:hover { background: #25252A; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); border-color: transparent; font-weight: 600; }
.btn-primary:hover { background: var(--color-primary-400); }
.btn-ghost { background: transparent; border-color: transparent; color: var(--text-secondary); }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 3px; padding: 6px 10px; font: 400 12px/1.4 'Suisse Intl',sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); }
```

**Card (Clip / Preview)**
```css
.clip { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 3px; padding: 6px; display: flex; flex-direction: column; gap: 6px; }
.clip .thumb { aspect-ratio: 16/9; background: var(--bg-base); border-radius: 2px; position: relative; overflow: hidden; }
.clip .label { font: 500 11px/1.3 'Suisse Intl',sans-serif; }
.clip .tc { font: 400 10px/1 'JetBrains Mono',monospace; color: var(--text-tertiary); }
```

**Badge**
```css
.tag { display: inline-flex; padding: 2px 6px; border-radius: 2px; font: 600 10px/1.4 'Suisse Intl',sans-serif; text-transform: uppercase; letter-spacing: 0.06em; }
.tag-gen { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); }
.tag-rec { background: var(--color-primary-500); color: var(--text-on-primary); }
.tag-tc { font-family: 'JetBrains Mono',monospace; text-transform: none; letter-spacing: 0; background: transparent; color: var(--text-tertiary); }
```

**Navigation (Tool bar)**
```css
.toolbar { background: var(--bg-base); border-bottom: 1px solid var(--border-default); padding: 6px 10px; display: flex; align-items: center; gap: 6px; height: 40px; }
.toolbar .ic { width: 28px; height: 28px; border-radius: 3px; display: grid; place-items: center; color: var(--text-secondary); cursor: pointer; }
.toolbar .ic:hover { background: var(--bg-elevated); color: var(--text-primary); }
.toolbar .ic.active { background: var(--bg-elevated); color: var(--color-primary-500); }
.toolbar .sep { width: 1px; height: 18px; background: var(--border-default); margin: 0 4px; }
```

### ⑩ Motion
```css
--duration-fast: 80ms;
--duration-base: 150ms;
--duration-slow: 300ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-linear: linear;       /* 타임라인 스크럽 */
```

### ⑪ Anti-patterns
1. 그라데이션 배경 금지 — 직각 다크 단색만
2. 둥근 모서리(>6px) 사용 금지 — NLE 그리드 톤
3. 두 가지 이상 액센트 색 사용 금지 — 형광 그린 한 톤만
4. 본문에 굵은 굵기(>500) 사용 금지 — 헤더만 medium
5. 채도 있는 backdrop 사용 금지 — 영상 미리보기가 주연

### ⑫ 시그니처 적용 예시

```html
<style>
  .rw-app { font: 13px/1.4 'Suisse Intl', Inter, sans-serif; background: #0A0A0A; color: #fff; min-height: 480px; display: grid; grid-template-rows: 40px 1fr 90px; }
  .rw-app .tool { border-bottom: 1px solid #1A1A1A; padding: 0 12px; display: flex; align-items: center; gap: 8px; }
  .rw-app .tool .logo { width: 14px; height: 14px; background: #00FF88; }
  .rw-app .tool h1 { margin: 0; font: 500 13px/1 inherit; letter-spacing: -0.01em; }
  .rw-app .tool .gen { font: 400 10px/1 'JetBrains Mono',monospace; color: #737373; margin-left: 4px; padding: 2px 6px; border: 1px solid #1A1A1A; border-radius: 2px; }
  .rw-app .tool .play { margin-left: auto; padding: 5px 12px; font: 500 11px/1 inherit; background: #00FF88; color: #0A0A0A; border-radius: 3px; }
  .rw-app .stage { padding: 12px; display: grid; grid-template-columns: 200px 1fr 220px; gap: 8px; }
  .rw-app .col { background: #0E0E0E; border: 1px solid #1A1A1A; padding: 10px; overflow: auto; }
  .rw-app .col .cap { font: 600 10px/1 inherit; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 8px; }
  .rw-app .clip { background: #1A1A1A; padding: 4px; margin-bottom: 4px; display: flex; gap: 6px; align-items: center; font-size: 11px; }
  .rw-app .clip .th { width: 36px; height: 22px; background: linear-gradient(135deg,#1A1A1A,#2D2D33); }
  .rw-app .clip .tc { font-family: 'JetBrains Mono',monospace; font-size: 10px; color: #737373; margin-left: auto; }
  .rw-app .preview { background: #0E0E0E; border: 1px solid #1A1A1A; aspect-ratio: 16/9; display: grid; place-items: center; position: relative; }
  .rw-app .preview .frame { width: 60%; aspect-ratio: 16/9; background: linear-gradient(140deg,#1A1A1A 0%,#2D2D33 100%); }
  .rw-app .preview .btnplay { position: absolute; width: 48px; height: 48px; border: 2px solid #00FF88; border-radius: 50%; display: grid; place-items: center; color: #00FF88; font-weight: 600; }
  .rw-app .timeline { background: #0E0E0E; border-top: 1px solid #1A1A1A; padding: 8px 12px; display: grid; grid-template-rows: auto 1fr; gap: 6px; }
  .rw-app .tc-row { display: flex; gap: 12px; font-family: 'JetBrains Mono',monospace; font-size: 10px; color: #737373; }
  .rw-app .tc-row .red { color: #00FF88; margin-left: auto; }
  .rw-app .track { background: #0A0A0A; border: 1px solid #1A1A1A; height: 36px; position: relative; }
  .rw-app .track .blk { position: absolute; top: 4px; height: 14px; background: #1F1F1F; border-left: 2px solid #00FF88; }
  .rw-app .track .blk.a { left: 4%; width: 40%; }
  .rw-app .track .blk.b { left: 46%; width: 32%; }
  .rw-app .track .blk.c { left: 80%; width: 18%; }
  .rw-app .track .blk2 { position: absolute; top: 22px; height: 10px; background: #404040; }
  .rw-app .track .blk2.a { left: 4%; width: 76%; }
  .rw-app .track .head { position: absolute; left: 32%; top: 0; bottom: 0; width: 1px; background: #00FF88; }
</style>

<div class="rw-app">
  <div class="tool">
    <div class="logo"></div>
    <h1>Runway</h1>
    <span class="gen">Gen-4</span>
    <span class="play">▶ Render</span>
  </div>
  <div class="stage">
    <aside class="col">
      <div class="cap">Assets</div>
      <div class="clip"><div class="th"></div>shot_01<span class="tc">00:02</span></div>
      <div class="clip"><div class="th"></div>shot_02<span class="tc">00:04</span></div>
      <div class="clip"><div class="th"></div>b_roll<span class="tc">00:01</span></div>
    </aside>
    <div class="preview">
      <div class="frame"></div>
      <div class="btnplay">▶</div>
    </div>
    <aside class="col">
      <div class="cap">Settings</div>
      <div style="font-size:11px;color:#A1A1A1;line-height:1.7;">
        <div>Resolution · <span style="color:#fff;">1920×1080</span></div>
        <div>FPS · <span style="color:#fff;">24</span></div>
        <div>Motion · <span style="color:#00FF88;">Strong</span></div>
        <div>Seed · <span style="color:#fff;font-family:'JetBrains Mono',monospace;">8472</span></div>
      </div>
    </aside>
  </div>
  <div class="timeline">
    <div class="tc-row"><span>00:00:00</span><span>00:00:08</span><span class="red">● 00:02:14</span></div>
    <div class="track">
      <div class="blk a"></div><div class="blk b"></div><div class="blk c"></div>
      <div class="blk2 a"></div>
      <div class="head"></div>
    </div>
  </div>
</div>
```
