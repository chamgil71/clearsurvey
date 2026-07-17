---
brand: Square
brand_ko: 스퀘어
slug: square
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - fintech

color_tone: neutral
primary_color_hex: "#000000"
primary_color_name: "Square Black"
mood:
  - 단순
  - 정밀
  - 머천트 친화

font_category: sans-serif
font_primary: Square Sans
font_korean_supported: true

density: comfortable
corner_style: round
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2009
last_major_revision: 2024
signature_keyword: "검정 사각 결제 단말과 모노톤의 머천트 결제 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F5F5F5", "border": "#E5E5E5", "fg": "#000000", "fg_muted": "#666666", "accent": "#000000" },
    "dark":  { "bg": "#000000", "surface": "#1A1A1A", "border": "#2D2D2D", "fg": "#FFFFFF", "fg_muted": "#999999", "accent": "#FFFFFF" }
  }

hero_html: |
  <div style="font-family:'Square Sans',Inter,'Pretendard',-apple-system,sans-serif;background:var(--card-bg);color:var(--card-fg);padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:var(--card-bg);border-bottom:1px solid var(--card-border);padding:10px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:var(--card-accent);border-radius:4px;"></span>
      <strong style="font-size:14px;font-weight:700;letter-spacing:-0.01em;">Square</strong>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:11px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;font-weight:700;">오늘 매출</div>
      <div style="font-size:30px;font-weight:700;letter-spacing:-0.01em;">$ 1,284.<small style="color:var(--card-fg-muted);font-size:20px;">50</small></div>
      <div style="font-size:11px;color:#1AAD5C;font-weight:700;">▲ +12% vs 어제</div>
      <div style="background:var(--card-surface);border-radius:12px;padding:12px;margin-top:6px;">
        <div style="font-size:11px;color:var(--card-fg-muted);text-transform:uppercase;letter-spacing:0.04em;font-weight:700;margin-bottom:6px;">결제 받기</div>
        <div style="background:var(--card-accent);color:var(--card-bg);border-radius:8px;padding:14px;text-align:center;">
          <div style="font-size:11px;opacity:0.7;text-transform:uppercase;letter-spacing:0.04em;">금액 입력</div>
          <div style="font-size:36px;font-weight:700;margin:6px 0;">$ 24.00</div>
          <div style="font-size:11px;opacity:0.85;">탭 또는 카드 삽입</div>
        </div>
      </div>
      <button style="background:var(--card-accent);color:var(--card-bg);border:0;border-radius:8px;padding:12px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;margin-top:6px;">결제 진행</button>
    </div>
  </div>

sources:
  - https://squareup.com/
  - https://block.xyz/
---

### ① 브랜드 DNA
- **브랜드명**: Square (Block)
- **한 줄 정체성**: 머천트가 어디서든 카드 결제를 받게 한, 사각 카드 리더의 시작
- **공식 디자인 철학**: "Make commerce easier — bold, simple, accessible to small business"
- **시그니처 요소 1개**: 검정 사각 카드 리더 모티프 + 모노톤 + Square 워드마크의 절제된 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 단순, 정밀, 머천트 친화
- **무드 설명**: 흰 캔버스 + 검정 액션 + grayscale 본문. Cash App과 형제이지만 머천트 톤은 더 절제됐다.
- **비주얼 스타일**: 모던 미니멀 + 살짝 브루털리즘
- **밀도(Density)**: Comfortable
- **모서리 성향**: Round (4~12px)
- **평면성**: Flat

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Square Black */
  --color-primary-50:  #F5F5F5;
  --color-primary-100: #E5E5E5;
  --color-primary-200: #C7C7C7;
  --color-primary-300: #999999;
  --color-primary-400: #4D4D4D;
  --color-primary-500: #000000;
  --color-primary-600: #1A1A1A;
  --color-primary-700: #2D2D2D;
  --color-primary-800: #4D4D4D;
  --color-primary-900: #666666;

  /* Secondary - Square Blue (action highlight) */
  --color-secondary-500: #006AFF;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F8F8;
  --color-neutral-100:  #F1F1F1;
  --color-neutral-200:  #E5E5E5;
  --color-neutral-300:  #C7C7C7;
  --color-neutral-500:  #999999;
  --color-neutral-700:  #666666;
  --color-neutral-800:  #2D2D2D;
  --color-neutral-900:  #1A1A1A;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDFCEA;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E0F0FE;
  --color-info-fg:    #006AFF;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F8F8;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(0,0,0,0.50);

  /* Text */
  --text-primary:    #000000;
  --text-secondary:  #666666;
  --text-tertiary:   #999999;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C7C7C7;

  /* Border */
  --border-default: #E5E5E5;
  --border-subtle:  #F1F1F1;
  --border-strong:  #C7C7C7;
  --border-focus:   #000000;
}

[data-theme="dark"] {
  --bg-base: #000000;
  --bg-subtle: #1A1A1A;
  --bg-elevated: #2D2D2D;
  --text-primary: #FFFFFF;
  --color-primary-500: #FFFFFF;
  --text-on-primary: #000000;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Square Sans / Cash Sans 형제 — 폴백 -apple-system, Inter
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 64px / 700 / 1.05 / -0.02em
  - H1: 36px / 700 / 1.15 / -0.01em
  - H2: 24px / 700 / 1.25 / 0
  - H3: 18px / 600 / 1.3 / 0
  - Body Large: 16px / 400 / 1.5 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 13px / 400 / 1.43 / 0
  - Caption: 11px / 700 / 1.27 / 0.04em

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
- **Container**: max-width 1200px, 좌우 패딩 24px

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
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.24);
```

### ⑧ Iconography
- **스타일**: Outline (정밀)
- **Stroke 굵기**: 2px
- **모서리 처리**: Square + Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 14px/1 'Square Sans',Inter,'Pretendard',sans-serif;
  border-radius: var(--radius-md);
  padding: 0 18px;
  height: 44px;
  display: inline-flex; align-items: center; gap: 6px;
  border: 0;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-700); }
.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-strong); border-radius: var(--radius-md); padding: 12px 14px; font-size: 16px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(0,0,0,0.10); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-neutral-100); color: var(--text-primary); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation**
```css
.topnav { padding: 14px 24px; display: flex; align-items: center; gap: 16px; background: var(--bg-base); border-bottom: 1px solid var(--border-default); }
.topnav .logo { width: 22px; height: 22px; background: var(--color-primary-500); border-radius: 4px; }
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
1. brand action 색을 brand 외 컬러로 분산 사용 금지 — 모노가 시그니처
2. Square 카드 리더 사각형 모티프를 임의 회전/변형 금지
3. 본문에 채도 높은 그라데이션 배경 금지
4. 머천트 결제 화면에 광고 카피 추가 금지 — 결제 흐름이 우선
5. 결제 성공 신호를 텍스트로만 표시 금지 — 큰 시각 피드백 동반

### ⑫ 시그니처 적용 예시 (POS)

```html
<style>
  body { margin: 0; font-family: 'Square Sans', Inter, 'Pretendard', -apple-system, sans-serif; color: #000; background: #fff; }
  .pos { max-width: 480px; margin: 0 auto; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
  .topbar { padding: 14px 18px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #E5E5E5; }
  .topbar .logo { width: 24px; height: 24px; background: #000; border-radius: 5px; }
  .topbar strong { font-weight: 700; }
  .display { padding: 32px 24px; text-align: center; }
  .display .label { font-size: 12px; color: #666; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .display .total { font-size: 80px; font-weight: 700; letter-spacing: -0.04em; line-height: 1; margin: 12px 0; }
  .display .total small { font-size: 48px; color: #666; }
  .display .item { font-size: 14px; color: #666; }
  .keypad { padding: 0 24px 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .keypad button { background: #F8F8F8; border: 0; border-radius: 8px; padding: 18px; font-size: 22px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .keypad button:active { background: #E5E5E5; }
  .footer { padding: 16px 24px 28px; }
  .charge { background: #000; color: #fff; border: 0; border-radius: 8px; padding: 18px; font-size: 17px; font-weight: 700; cursor: pointer; width: 100%; font-family: inherit; }
</style>

<div class="pos">
  <header class="topbar">
    <div class="logo"></div>
    <strong>Square</strong>
    <span style="margin-left:auto; font-size:13px; color:#666;">Mina's Café</span>
  </header>
  <main>
    <section class="display">
      <div class="label">결제 금액</div>
      <div class="total">$ 24<small>.00</small></div>
      <div class="item">아이스 라떼 + 크루아상</div>
    </section>
    <div class="keypad">
      <button>1</button><button>2</button><button>3</button>
      <button>4</button><button>5</button><button>6</button>
      <button>7</button><button>8</button><button>9</button>
      <button>.</button><button>0</button><button>⌫</button>
    </div>
  </main>
  <div class="footer">
    <button class="charge">$24.00 청구</button>
  </div>
</div>
```
