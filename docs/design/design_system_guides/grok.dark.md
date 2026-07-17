---
brand: xAI Grok
brand_ko: 그록
slug: grok
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - ai
  - social

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Grok Black"
mood:
  - 직설
  - 첨예
  - 위트

font_category: sans-serif
font_primary: TwitterChirp
font_korean_supported: true

density: compact
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2023
last_major_revision: 2025
signature_keyword: "X와 같은 순흑 캔버스 + 백색 / 발화점 같은 좁은 라인 — 위트 있는 무채색 AI"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F7F9F9", "border": "#EFF3F4", "fg": "#0F1419", "fg_muted": "#536471", "accent": "#000000" },
    "dark":  { "bg": "#000000", "surface": "#16181C", "border": "#2F3336", "fg": "#E7E9EA", "fg_muted": "#71767B", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:'TwitterChirp','Inter',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.01em;">
    <div style="padding:10px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:18px;height:18px;background:var(--card-accent);border-radius:4px;display:grid;place-items:center;color:var(--card-bg);font-weight:900;font-size:11px;">𝕏</div>
      <span style="font-weight:700;">Grok</span>
      <span style="color:var(--card-fg-muted);margin-left:auto;">Beta</span>
    </div>
    <div style="padding:10px 14px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:var(--card-surface);border-radius:14px;padding:9px 12px;align-self:flex-end;max-width:80%;font-size:11px;">실시간 뉴스 요약해줘</div>
      <div style="font-size:11px;line-height:1.55;color:var(--card-fg);">
        오늘 X에서 가장 회자된 토픽 3가지:
        <ul style="margin:4px 0 0;padding-left:18px;color:var(--card-fg-muted);font-size:10px;line-height:1.5;">
          <li><span style="color:var(--card-fg);">AI 규제</span> — 의회 청문회 이슈</li>
          <li><span style="color:var(--card-fg);">Tesla FSD v13</span> — 베타 확장</li>
          <li><span style="color:var(--card-fg);">Hyperloop</span> — 부활 토론</li>
        </ul>
      </div>
    </div>
    <div style="padding:8px 12px;border-top:1px solid var(--card-border);">
      <div style="background:var(--card-surface);border-radius:9999px;padding:8px 12px;color:var(--card-fg-muted);font-size:11px;display:flex;align-items:center;gap:8px;">
        <span style="flex:1;">Grok에게 물어보기…</span>
        <span style="width:22px;height:22px;background:var(--card-accent);color:var(--card-bg);border-radius:9999px;display:grid;place-items:center;font-weight:700;">↑</span>
      </div>
    </div>
  </div>

sources:
  - https://x.ai/
  - https://x.com/i/grok
---

### ① 브랜드 DNA
- **브랜드명**: Grok (xAI)
- **한 줄 정체성**: X 플랫폼과 통합되어 실시간 정보·풍자적 위트를 함께 제공하는 AI 어시스턴트
- **공식 디자인 철학**: "Maximally truth-seeking" — 직설적이고 위트 있는 톤
- **시그니처 요소 1개**: X(구 트위터)와 동일한 순흑 캔버스 + 백색 텍스트 + 1px Cool Gray 디바이더. 모든 다른 AI가 따뜻한 톤(Claude 크림·ChatGPT 미디엄·Gemini 스펙트럼)으로 갈 때 정반대의 메탈릭한 무채색

### ② 톤 & 무드
- **핵심 키워드 3개**: 직설, 첨예, 위트
- **무드 설명**: X 모회사의 디자인 언어를 그대로 차용. 사용자/AI 메시지 모두 어두운 회색 카드, 강조는 거의 없음. 무거운 채색 대신 타입 위계와 그리드만으로 정보를 정리.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Compact — X 타임라인 톤
- **모서리 성향**: Soft (8~12px) — X bubble 곡률
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Grok White on Black (다크 기본: 강조는 백색) */
  --color-primary-50:  #16181C;
  --color-primary-100: #1E2126;
  --color-primary-200: #2F3336;
  --color-primary-300: #3D4954;
  --color-primary-400: #536471;
  --color-primary-500: #71767B;
  --color-primary-600: #AAB8C2;
  --color-primary-700: #D7DBDC;
  --color-primary-800: #EFF3F4;
  --color-primary-900: #FFFFFF;

  /* Secondary - X Blue (링크/액션 강조에 한정, 다크 위에서 밝게) */
  --color-secondary-500: #1D9BF0;

  /* Neutral - 다크용 반전 램프 (0=가장 어두움, 1000=가장 밝음) */
  --color-neutral-0:    #000000;
  --color-neutral-50:   #16181C;
  --color-neutral-100:  #1E2126;
  --color-neutral-300:  #2F3336;
  --color-neutral-500:  #71767B;
  --color-neutral-700:  #AAB8C2;
  --color-neutral-900:  #EFF3F4;
  --color-neutral-1000: #FFFFFF;

  /* Semantic - 다크 배경 위 가독 */
  --color-success-bg: #0A2E1E;
  --color-success-fg: #00BA7C;
  --color-warning-bg: #2A1E08;
  --color-warning-fg: #FFD400;
  --color-error-bg:   #2A0F12;
  --color-error-fg:   #F4212E;
  --color-info-bg:    #021E36;
  --color-info-fg:    #1D9BF0;

  /* Surface */
  --bg-base:     #000000;
  --bg-subtle:   #16181C;
  --bg-elevated: #1E2126;
  --bg-overlay:  rgba(91,112,131,0.40);

  /* Text */
  --text-primary:    #E7E9EA;
  --text-secondary:  #AAB8C2;
  --text-tertiary:   #71767B;
  --text-on-primary: #000000;
  --text-disabled:   #3D4954;

  /* Border */
  --border-default: #2F3336;
  --border-subtle:  #16181C;
  --border-strong:  #3D4954;
  --border-focus:   #FFFFFF;
}

[data-theme="light"] {
  /* Primary - Grok Black on White (라이트: 강조는 흑색) */
  --color-primary-50:  #F7F9F9;
  --color-primary-100: #EFF3F4;
  --color-primary-200: #D7DBDC;
  --color-primary-300: #AAB8C2;
  --color-primary-400: #71767B;
  --color-primary-500: #536471;
  --color-primary-600: #3D4954;
  --color-primary-700: #2F3336;
  --color-primary-800: #16181C;
  --color-primary-900: #000000;

  /* Secondary - X Blue (링크/액션 강조에 한정) */
  --color-secondary-500: #1D9BF0;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F9F9;
  --color-neutral-100:  #EFF3F4;
  --color-neutral-300:  #AAB8C2;
  --color-neutral-500:  #71767B;
  --color-neutral-700:  #2F3336;
  --color-neutral-900:  #16181C;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDF5EB;
  --color-success-fg: #00754A;
  --color-warning-bg: #FBF1CC;
  --color-warning-fg: #8A6D00;
  --color-error-bg:   #FBE1E3;
  --color-error-fg:   #C4121F;
  --color-info-bg:    #DCEEFB;
  --color-info-fg:    #1D7FC4;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F7F9F9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(91,112,131,0.40);

  /* Text */
  --text-primary:    #0F1419;
  --text-secondary:  #536471;
  --text-tertiary:   #71767B;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #AAB8C2;

  /* Border */
  --border-default: #EFF3F4;
  --border-subtle:  #F7F9F9;
  --border-strong:  #D7DBDC;
  --border-focus:   #000000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): TwitterChirp (X 자체 폰트) / Inter 폴백
  - 한글: Pretendard / Noto Sans KR
  - 코드: JetBrains Mono / Söhne Mono
- **위계**:
  - Display: 40px / 800 / 1.2 / -0.02em
  - H1: 24px / 700 / 1.3 / -0.015em
  - H2: 20px / 700 / 1.3 / -0.01em
  - H3: 16px / 700 / 1.4 / 0
  - Body: 15px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.45 / 0
  - Caption: 13px / 400 / 1.4 / 0
  - Code: 13px / 400 / 1.55 mono

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 40px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 800px (대화 영역)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;     /* X 버튼/입력 시그니처 */
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 0 rgba(255,255,255,0.04);
--shadow-md: 0 0 16px rgba(0,0,0,0.5);
--shadow-lg: 0 24px 64px rgba(0,0,0,0.65);
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합 (X 스타일 그대로)
- **Stroke 굵기**: 2px
- **모서리 처리**: Round
- **추천 라이브러리**: X 자체 / Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 700 14px/1 TwitterChirp,Inter,sans-serif; padding: 8px 16px; border-radius: 9999px; border: 0; cursor: pointer; transition: background 150ms ease; }
.btn-primary { background: #fff; color: #000; }
.btn-primary:hover { background: #D7DBDC; }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-elevated); }
.btn-ghost { background: transparent; color: var(--color-secondary-500); border: 0; }
```

**Input**
```css
.input { background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: 9999px; padding: 10px 16px; font: 400 15px/1.4 TwitterChirp,sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); }
```

**Card (Message)**
```css
.msg-u { background: var(--bg-elevated); color: var(--text-primary); border-radius: 16px; padding: 10px 14px; max-width: 80%; align-self: flex-end; font: 400 15px/1.5 TwitterChirp,sans-serif; }
.msg-a { background: transparent; color: var(--text-primary); padding: 4px 4px; max-width: 95%; font: 400 15px/1.55 TwitterChirp,sans-serif; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 9999px; font: 700 11px/1.4 TwitterChirp,sans-serif; }
.tag-beta { background: var(--bg-elevated); color: var(--text-secondary); border: 1px solid var(--border-default); }
.tag-live { background: var(--color-success-fg); color: var(--text-on-primary); }
```

**Navigation**
```css
.sidebar { background: var(--bg-base); border-right: 1px solid var(--border-default); padding: 12px 8px; display: flex; flex-direction: column; gap: 4px; }
.sidebar .item { padding: 12px 16px; border-radius: 9999px; font: 400 15px/1 TwitterChirp,sans-serif; color: var(--text-primary); display: flex; align-items: center; gap: 12px; cursor: pointer; }
.sidebar .item:hover { background: var(--bg-elevated); }
.sidebar .item.active { font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 채도 있는 그라데이션 배경 금지 — 순흑 단색만
2. 따뜻한 베이지/크림 톤 금지 — Claude/ChatGPT와 정반대 톤 유지
3. 화려한 일러스트 마스코트 사용 금지 — 텍스트와 그리드만
4. 본문에 800 굵기 이상 사용 금지 — 헤더에만 ExtraBold
5. 핑크/보라 강조 금지 — X Blue(#1D9BF0)만 액션 강조

### ⑫ 시그니처 적용 예시

```html
<style>
  .grok-app { font: 15px/1.5 TwitterChirp, Inter, -apple-system, sans-serif; background: #000; color: #E7E9EA; min-height: 480px; display: grid; grid-template-rows: auto 1fr auto; }
  .grok-app .top { padding: 14px 18px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #2F3336; }
  .grok-app .top .x { width: 24px; height: 24px; background: #fff; color: #000; border-radius: 6px; display: grid; place-items: center; font: 900 16px/1 sans-serif; }
  .grok-app .top h1 { margin: 0; font: 800 18px/1 inherit; letter-spacing: -0.02em; }
  .grok-app .top .beta { font: 700 11px/1 inherit; padding: 3px 8px; border-radius: 9999px; background: #16181C; color: #71767B; border: 1px solid #2F3336; }
  .grok-app .feed { padding: 16px 22px; display: flex; flex-direction: column; gap: 14px; overflow: auto; }
  .grok-app .feed .u { background: #1E2126; align-self: flex-end; max-width: 75%; padding: 10px 14px; border-radius: 18px; font-size: 15px; }
  .grok-app .feed .a { padding: 4px 4px; max-width: 95%; }
  .grok-app .feed .a .head { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; font: 700 13px/1 inherit; color: #E7E9EA; }
  .grok-app .feed .a .head .ic { width: 20px; height: 20px; background: #fff; color: #000; border-radius: 5px; display: grid; place-items: center; font: 900 11px/1 sans-serif; }
  .grok-app .feed .a .body { font-size: 15px; line-height: 1.55; color: #E7E9EA; }
  .grok-app .feed .a .body strong { color: #fff; font-weight: 700; }
  .grok-app .feed .a .meta { display: flex; gap: 14px; margin-top: 8px; color: #71767B; font-size: 13px; }
  .grok-app .composer { padding: 12px 18px 16px; border-top: 1px solid #2F3336; }
  .grok-app .composer .box { background: #16181C; border: 1px solid #2F3336; border-radius: 9999px; padding: 10px 12px 10px 18px; display: flex; align-items: center; gap: 10px; }
  .grok-app .composer .box input { all: unset; flex: 1; color: #E7E9EA; font-size: 15px; }
  .grok-app .composer .box input::placeholder { color: #71767B; }
  .grok-app .composer .send { width: 30px; height: 30px; background: #fff; color: #000; border-radius: 9999px; display: grid; place-items: center; font: 700 14px/1 inherit; }
</style>

<div class="grok-app">
  <header class="top">
    <div class="x">𝕏</div>
    <h1>Grok</h1>
    <span class="beta">Beta</span>
  </header>
  <section class="feed">
    <div class="u">오늘 X에서 가장 회자된 토픽 3가지 요약해줘.</div>
    <div class="a">
      <div class="head"><div class="ic">𝕏</div>Grok</div>
      <div class="body">
        오늘의 토픽 — <strong>AI 규제</strong>: 의회 청문회 발언이 인용. <strong>Tesla FSD v13</strong>: 베타 확장. <strong>Hyperloop 부활</strong>: 머스크의 새 트윗으로 회자. 보수적 시각과 진보적 시각이 거의 같은 비중으로 갈라졌습니다.
      </div>
      <div class="meta"><span>❤ 1.2K</span><span>↻ 380</span><span>↗</span></div>
    </div>
  </section>
  <div class="composer">
    <div class="box">
      <input placeholder="Grok에게 물어보기…" />
      <div class="send">↑</div>
    </div>
  </div>
</div>
```
