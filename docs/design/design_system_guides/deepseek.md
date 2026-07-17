---
brand: DeepSeek
brand_ko: 딥시크
slug: deepseek
generated: 2026-05-13
source_type: product_observation
confidence: high
is_official: false

region: asia
industry:
  - ai
  - dev-tools

color_tone: cool
primary_color_hex: "#4D6BFF"
primary_color_name: "DeepSeek Blue"
mood:
  - 깊이
  - 오픈소스
  - 명료

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light
  - dark

released_year: 2023
last_major_revision: 2025
signature_keyword: "푸른 고래(深海) 마스코트 + 채도 있는 블루 단색 — 가성비 오픈 LLM의 명료한 시그니처"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F1F5FF", "border": "#E5EAF5", "fg": "#1A1F2E", "fg_muted": "#7080A0", "accent": "#4D6BFF" },
    "dark":  { "bg": "#0F1424", "surface": "#1E2640", "border": "#2A3050", "fg": "#F1F5FF", "fg_muted": "#C7D0E5", "accent": "#6E83FF" }
  }

hero_html: |
  <div style="font-family:-apple-system,'Inter','PingFang SC',sans-serif;background:var(--card-bg);color:var(--card-fg);height:100%;display:grid;grid-template-rows:auto 1fr auto;font-size:11px;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--card-border);">
      <div style="width:22px;height:22px;background:var(--card-accent);border-radius:6px;display:grid;place-items:center;color:#fff;font-weight:700;">🐋</div>
      <span style="font-weight:600;">DeepSeek</span>
      <span style="margin-left:auto;font-size:10px;color:var(--card-fg-muted);padding:2px 6px;border:1px solid var(--card-border);border-radius:9999px;">V3</span>
    </div>
    <div style="padding:12px 14px;display:flex;flex-direction:column;gap:10px;">
      <div style="background:var(--card-surface);border-radius:10px;padding:10px 12px;align-self:flex-end;max-width:80%;font-size:11px;color:var(--card-fg);">DeepThink R1로 추론해줘 — 11×13 = ?</div>
      <div style="font-size:11px;color:var(--card-fg);line-height:1.55;background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:10px 12px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--card-fg-muted);margin-bottom:4px;">&lt;thinking&gt;</div>
        <div>11×13 = 11×(10+3) = 110+33 = <strong>143</strong></div>
      </div>
    </div>
    <div style="padding:8px 14px;border-top:1px solid var(--card-border);">
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:8px 12px;display:flex;align-items:center;gap:8px;font-size:11px;color:var(--card-fg-muted);">
        <span>DeepThink (R1)</span><span style="color:var(--card-accent);">●</span>
        <span style="margin-left:auto;width:22px;height:22px;background:var(--card-accent);border-radius:6px;display:grid;place-items:center;color:#fff;font-weight:700;">↑</span>
      </div>
    </div>
  </div>

sources:
  - https://www.deepseek.com/
  - https://chat.deepseek.com/
---

### ① 브랜드 DNA
- **브랜드명**: DeepSeek
- **한 줄 정체성**: 중국 발 오픈소스 LLM (V3/R1) — 가성비 있는 깊은 추론 모델
- **공식 디자인 철학**: "Open source toward AGI" — 명료하고 학술적인 톤
- **시그니처 요소 1개**: 푸른 고래(深海) 마스코트 + 채도 있는 블루 #4D6BFF 단색 액센트 + DeepThink R1의 `<thinking>` 블록 UI. 흑백 톤(OpenAI/X)이나 따뜻한 톤(Anthropic) 사이에서 학구적인 코발트 블루

### ② 톤 & 무드
- **핵심 키워드 3개**: 깊이, 오픈소스, 명료
- **무드 설명**: 흰 캔버스 위 채도 있는 블루 한 톤. 학술 논문 톤에 가까운 정돈된 위계. 추론(thinking) 블록을 명시적으로 보여주는 게 시그니처 UX.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (8~10px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - DeepSeek Blue */
  --color-primary-50:  #EEF2FF;
  --color-primary-100: #DCE2FF;
  --color-primary-200: #B6C2FF;
  --color-primary-300: #8FA1FF;
  --color-primary-400: #6E83FF;
  --color-primary-500: #4D6BFF;
  --color-primary-600: #3950DE;
  --color-primary-700: #2A3CB0;
  --color-primary-800: #1E2A80;
  --color-primary-900: #131A4D;

  /* Secondary - Whale teal (마스코트 보조) */
  --color-secondary-500: #00AABF;

  /* Neutral - Cool */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8FAFF;
  --color-neutral-100:  #F1F5FF;
  --color-neutral-300:  #C7D0E5;
  --color-neutral-500:  #7080A0;
  --color-neutral-700:  #3F4E6E;
  --color-neutral-900:  #1A1F2E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #ECFDF5;
  --color-success-fg: #059669;
  --color-warning-bg: #FFFBEB;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FEF2F2;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #EEF2FF;
  --color-info-fg:    #4D6BFF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8FAFF;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(26,31,46,0.50);

  /* Text */
  --text-primary:    #1A1F2E;
  --text-secondary:  #3F4E6E;
  --text-tertiary:   #7080A0;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7D0E5;

  /* Border */
  --border-default: #E5EAF5;
  --border-subtle:  #F1F5FF;
  --border-strong:  #C7D0E5;
  --border-focus:   #4D6BFF;
}

[data-theme="dark"] {
  --bg-base: #0F1424;
  --bg-subtle: #161D33;
  --bg-elevated: #1E2640;
  --text-primary: #F1F5FF;
  --text-secondary: #C7D0E5;
  --border-default: #2A3050;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - UI(영문): Inter / -apple-system 폴백
  - 한글: Pretendard / Noto Sans KR
  - 중문: PingFang SC / Source Han Sans
  - 코드/추론: JetBrains Mono / Source Code Pro
- **위계**:
  - Display: 48px / 600 / 1.15 / -0.025em
  - H1: 32px / 600 / 1.2 / -0.02em
  - H2: 22px / 600 / 1.3 / -0.015em
  - H3: 17px / 600 / 1.4 / -0.005em
  - Body Large: 16px / 400 / 1.65 / 0
  - Body: 15px / 400 / 1.6 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Code/Thinking: 13px / 400 / 1.6 mono
  - Caption: 12px / 500 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 14px;
  --space-lg: 22px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 72px;
  ```
- **Container**: max-width 820px (대화창)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 10px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(26,31,46,0.04);
--shadow-md: 0 4px 12px rgba(26,31,46,0.08);
--shadow-lg: 0 16px 40px rgba(26,31,46,0.12);
--shadow-deep: 0 8px 24px rgba(77,107,255,0.18);
```

### ⑧ Iconography
- **스타일**: Outline (1.5px)
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Tabler

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 500 14px/1 Inter,sans-serif; padding: 10px 16px; border-radius: 8px; border: 1px solid var(--border-default); background: var(--bg-base); color: var(--text-primary); transition: background 150ms ease; cursor: pointer; }
.btn:hover { background: var(--bg-subtle); }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); border-color: transparent; }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-ghost { background: transparent; border-color: transparent; color: var(--color-primary-600); }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 10px; padding: 10px 14px; font: 400 14px/1.5 Inter,sans-serif; color: var(--text-primary); width: 100%; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 4px rgba(77,107,255,0.12); }
```

**Card (Thinking block)**
```css
.bubble-u { background: var(--color-primary-50); border-radius: 10px; padding: 10px 14px; max-width: 80%; align-self: flex-end; font-size: 14px; }
.bubble-a { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: 10px; padding: 12px 14px; max-width: 90%; font-size: 14px; line-height: 1.6; }
.thinking { background: var(--bg-subtle); border-left: 3px solid var(--color-primary-500); border-radius: 6px; padding: 10px 14px; font: 400 13px/1.6 'JetBrains Mono',monospace; color: var(--text-secondary); margin-bottom: 8px; }
.thinking .label { font-family: Inter,sans-serif; color: var(--color-primary-600); font-weight: 600; letter-spacing: 0.02em; }
```

**Badge**
```css
.tag { display: inline-flex; padding: 3px 10px; border-radius: 9999px; font: 500 11px/1.4 Inter,sans-serif; }
.tag-blue { background: var(--color-primary-50); color: var(--color-primary-700); border: 1px solid var(--color-primary-200); }
.tag-model { font-family: 'JetBrains Mono',monospace; font-size: 11px; background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); }
```

**Navigation**
```css
.topbar { background: var(--bg-base); padding: 14px 22px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--border-subtle); }
.topbar .logo { width: 30px; height: 30px; background: var(--color-primary-500); color: var(--text-on-primary); border-radius: 8px; display: grid; place-items: center; font-size: 17px; }
.topbar h1 { font: 600 17px/1 Inter,sans-serif; letter-spacing: -0.01em; margin: 0; }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

### ⑪ Anti-patterns
1. 그라데이션 배경 금지 — 채도 있는 블루 단색만
2. 본문 텍스트에 채도 있는 블루 사용 금지 — 강조는 액션/링크에만
3. 다국어 폰트 fallback 누락 금지 — 영문/중문/한글 안정적 표시
4. thinking 블록을 본문 배경과 같게 두기 금지 — 항상 좌측 3px 블루 보더로 구분
5. 어두운 다크 톤 강조 금지 — 라이트 모드가 디폴트

### ⑫ 시그니처 적용 예시

```html
<style>
  .ds-app { font: 15px/1.6 Inter, -apple-system, 'PingFang SC', sans-serif; background: #fff; color: #1A1F2E; min-height: 480px; display: grid; grid-template-rows: auto 1fr auto; max-width: 720px; margin: 0 auto; padding: 16px; }
  .ds-app .top { padding-bottom: 14px; border-bottom: 1px solid #F1F5FF; display: flex; align-items: center; gap: 12px; }
  .ds-app .top .logo { width: 30px; height: 30px; background: #4D6BFF; color: #fff; border-radius: 8px; display: grid; place-items: center; font-size: 18px; }
  .ds-app .top h1 { font: 600 17px/1 inherit; letter-spacing: -0.01em; margin: 0; }
  .ds-app .top .v { margin-left: auto; padding: 3px 10px; border-radius: 9999px; border: 1px solid #E5EAF5; font: 500 11px/1.4 'JetBrains Mono',monospace; color: #3F4E6E; }
  .ds-app .chat { padding: 16px 0; display: flex; flex-direction: column; gap: 12px; overflow: auto; }
  .ds-app .u { background: #EEF2FF; padding: 10px 14px; border-radius: 10px; align-self: flex-end; max-width: 80%; font-size: 14px; }
  .ds-app .a { background: #fff; border: 1px solid #E5EAF5; padding: 12px 14px; border-radius: 10px; max-width: 95%; }
  .ds-app .a .think { background: #F8FAFF; border-left: 3px solid #4D6BFF; border-radius: 6px; padding: 10px 14px; margin-bottom: 8px; font: 400 13px/1.65 'JetBrains Mono', monospace; color: #3F4E6E; }
  .ds-app .a .think .label { font: 600 11px/1 Inter, sans-serif; color: #4D6BFF; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 6px; display: block; }
  .ds-app .a .ans { font-size: 14.5px; line-height: 1.6; color: #1A1F2E; }
  .ds-app .a .ans strong { color: #131A4D; }
  .ds-app .composer { background: #fff; border: 1px solid #E5EAF5; border-radius: 12px; padding: 8px 12px 8px 16px; display: flex; align-items: center; gap: 10px; }
  .ds-app .composer input { all: unset; flex: 1; color: #1A1F2E; font-size: 14px; }
  .ds-app .composer input::placeholder { color: #7080A0; }
  .ds-app .composer .pill { font: 500 11px/1.4 Inter,sans-serif; padding: 4px 9px; border-radius: 9999px; background: #EEF2FF; color: #4D6BFF; }
  .ds-app .composer .send { width: 28px; height: 28px; background: #4D6BFF; color: #fff; border-radius: 8px; display: grid; place-items: center; font-weight: 700; }
</style>

<div class="ds-app">
  <header class="top">
    <div class="logo">🐋</div>
    <h1>DeepSeek</h1>
    <span class="v">V3 · R1</span>
  </header>
  <section class="chat">
    <div class="u">DeepThink R1로 추론해줘 — 17×23 빠르게.</div>
    <div class="a">
      <div class="think">
        <span class="label">Thinking</span>
        17×23 = 17×(20+3) = 17×20 + 17×3 = 340 + 51 = 391. 검산: 17×23 = (20-3)×23 = 460-69 = 391. 일치.
      </div>
      <div class="ans">17 × 23 = <strong>391</strong> 입니다. 분배 법칙으로 17×20 + 17×3 로 나눠 풀고, (20-3)×23 검산으로 일치 확인.</div>
    </div>
  </section>
  <div class="composer">
    <span class="pill">DeepThink · R1</span>
    <input placeholder="무엇이든 깊이 물어보세요…" />
    <div class="send">↑</div>
  </div>
</div>
```
