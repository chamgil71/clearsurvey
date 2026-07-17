---
brand: Apple Human Interface Guidelines
brand_ko: 애플 휴먼 인터페이스 가이드라인
slug: apple-hig
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - consumer

color_tone: cool
primary_color_hex: "#007AFF"
primary_color_name: "iOS System Blue"
mood:
  - 정밀함
  - 명료함
  - 깊이감

font_category: sans-serif
font_primary: SF Pro
font_korean_supported: true

density: comfortable
corner_style: round
flatness: layered

visual_style:
  - modern-minimal
  - glassmorphism

theme_modes:
  - light
  - dark

released_year: 1985
last_major_revision: 2024
signature_keyword: "SF Pro와 vibrancy 블러가 만드는 콘텐츠 우선의 깊이감"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#FFFFFF", "border": "#D1D1D6", "fg": "#000000", "fg_muted": "#8E8E93", "accent": "#007AFF" },
    "dark":  { "bg": "#000000", "surface": "#1C1C1E", "border": "#3A3A3C", "fg": "#FFFFFF", "fg_muted": "#8E8E93", "accent": "#0A84FF" }
  }

hero_html: |
  <div style="font-family:-apple-system,'SF Pro Text','Segoe UI',sans-serif;background:var(--card-bg);color:var(--card-fg);padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;letter-spacing:-0.011em;">
    <div>
      <div style="font-size:11px;font-weight:600;color:rgba(60,60,67,0.6);letter-spacing:0;">APPLE HIG</div>
      <h2 style="font-size:34px;font-weight:700;line-height:1.07;letter-spacing:-0.022em;margin:8px 0 12px;">한 차원 더<br/>명료하게.</h2>
      <p style="font-size:13px;color:rgba(60,60,67,0.6);margin:0;line-height:1.4;">콘텐츠가 인터페이스를 이끕니다.</p>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <button style="background:var(--card-accent);color:#fff;border:0;border-radius:10px;padding:10px 18px;font-size:13px;font-weight:600;font-family:inherit;letter-spacing:-0.011em;">시작하기</button>
      <span style="color:var(--card-accent);font-size:13px;font-weight:600;">자세히 ›</span>
    </div>
    <div style="display:flex;gap:6px;">
      <span style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#007AFF,#5856D6);"></span>
      <span style="width:24px;height:24px;border-radius:6px;background:#34C759;"></span>
      <span style="width:24px;height:24px;border-radius:6px;background:#FF9500;"></span>
      <span style="width:24px;height:24px;border-radius:6px;background:#FF3B30;"></span>
    </div>
  </div>

sources:
  - https://developer.apple.com/design/human-interface-guidelines
  - https://developer.apple.com/design/resources/
---

### ① 브랜드 DNA
- **브랜드명**: Apple Human Interface Guidelines (HIG)
- **한 줄 정체성**: 사람을 중심에 두고 콘텐츠가 인터페이스를 이끌게 하는 시스템
- **공식 디자인 철학**: "Hierarchy, Harmony, Consistency" — 정보 위계, 시스템 전반의 조화, 플랫폼 간 일관성
- **시그니처 요소 1개**: SF Pro 가족 + iOS Blue(#007AFF)와 vibrancy(반투명 블러) 레이어가 만드는 깊이감

### ② 톤 & 무드
- **핵심 키워드 3개**: 정밀함, 명료함, 깊이감(deference)
- **무드 설명**: 콘텐츠가 주인공이고 크롬은 한 발 물러난다. 흰 캔버스 + 정확한 타이포 + 시스템 블루의 절제된 강조로 차분하면서도 또렷하다.
- **비주얼 스타일**: 모던 미니멀 + 글래스모피즘 (iOS 7 이후 vibrancy 레이어)
- **밀도(Density)**: Comfortable — 터치 타깃 44pt 최소 보장, 손가락 친화적 여백 유지
- **모서리 성향**: Round (12~16px, continuous corner) — iOS의 squircle/Apple superellipse
- **평면성**: Layered — 모달, 시트, vibrancy 등 명확한 z축 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - System Blue 9단계 */
  --color-primary-50:  #E5F1FF;  /* 가장 옅은 배경 */
  --color-primary-100: #CCE4FF;
  --color-primary-200: #99C9FF;
  --color-primary-300: #66ADFF;
  --color-primary-400: #3392FF;
  --color-primary-500: #007AFF;  /* iOS System Blue 기본 */
  --color-primary-600: #0062CC;  /* hover/pressed */
  --color-primary-700: #004999;
  --color-primary-800: #003166;
  --color-primary-900: #001833;

  /* Secondary - System Indigo */
  --color-secondary-500: #5856D6;  /* iOS System Indigo */

  /* Neutral - Apple Gray scale */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F2F2F7;  /* systemGroupedBackground */
  --color-neutral-100:  #E5E5EA;  /* systemGray6 */
  --color-neutral-200:  #D1D1D6;  /* systemGray5 */
  --color-neutral-300:  #C7C7CC;  /* systemGray4 */
  --color-neutral-400:  #AEAEB2;  /* systemGray3 */
  --color-neutral-500:  #8E8E93;  /* systemGray */
  --color-neutral-700:  #636366;  /* systemGray2 */
  --color-neutral-800:  #48484A;
  --color-neutral-900:  #1C1C1E;  /* systemGray6 dark */
  --color-neutral-1000: #000000;

  /* Semantic - iOS system colors */
  --color-success-bg:   #E8F8EE;
  --color-success-fg:   #34C759;  /* System Green */
  --color-warning-bg:   #FFF8E1;
  --color-warning-fg:   #FF9500;  /* System Orange */
  --color-error-bg:     #FFEBEE;
  --color-error-fg:     #FF3B30;  /* System Red */
  --color-info-bg:      #E5F1FF;
  --color-info-fg:      #007AFF;

  /* Surface */
  --bg-base:     #FFFFFF;          /* systemBackground */
  --bg-subtle:   #F2F2F7;          /* secondarySystemBackground */
  --bg-elevated: #FFFFFF;          /* 카드 — 그림자로 분리 */
  --bg-overlay:  rgba(255,255,255,0.72); /* vibrancy 효과 */

  /* Text */
  --text-primary:    rgba(0,0,0,0.85);   /* labelColor */
  --text-secondary:  rgba(60,60,67,0.60); /* secondaryLabelColor */
  --text-tertiary:   rgba(60,60,67,0.30);
  --text-on-primary: #FFFFFF;
  --text-disabled:   rgba(60,60,67,0.18);

  /* Border */
  --border-default: rgba(60,60,67,0.18);
  --border-subtle:  rgba(60,60,67,0.12);
  --border-strong:  rgba(60,60,67,0.36);
  --border-focus:   #007AFF;
}

[data-theme="dark"] {
  --bg-base: #000000;
  --bg-subtle: #1C1C1E;
  --bg-elevated: #2C2C2E;
  --bg-overlay: rgba(28,28,30,0.72);
  --text-primary: rgba(255,255,255,0.92);
  --text-secondary: rgba(235,235,245,0.60);
  --text-tertiary: rgba(235,235,245,0.30);
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: SF Pro / SF Pro Display / SF Pro Text (Apple 라이선스, Apple 플랫폼 한정)
  - 한글: Apple SD Gothic Neo (macOS/iOS 번들)
- **위계** (Apple Dynamic Type 기준):
  - Display: 48px / 700 / 1.1 / -0.022em
  - H1 (Large Title): 34px / 700 / 1.2 / -0.020em
  - H2 (Title 1): 28px / 600 / 1.25 / -0.017em
  - H3 (Title 2): 22px / 600 / 1.3 / -0.014em
  - Body Large (Headline): 17px / 600 / 1.41 / -0.011em
  - Body: 17px / 400 / 1.41 / -0.011em
  - Body Small (Footnote): 13px / 400 / 1.38 / -0.005em
  - Caption: 11px / 400 / 1.27 / 0em

### ⑤ 스페이싱
- **Base unit**: 8px (iOS 기본 그리드)
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 980px (Apple.com 기준), 좌우 패딩 22px (mobile) / 44px (desktop)

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 6px;     /* 작은 칩 */
--radius-md: 10px;    /* 버튼, 입력 */
--radius-lg: 14px;    /* 카드 */
--radius-xl: 22px;    /* 시트, 모달 (continuous corner 권장) */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);                          /* 평면 카드 */
--shadow-md: 0 2px 8px rgba(0,0,0,0.08);                          /* 카드 hover */
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);                         /* 모달, 팝오버 */
--shadow-xl: 0 24px 48px rgba(0,0,0,0.18);                        /* 풀스크린 sheet */
```

### ⑧ Iconography
- **스타일**: Outline + Filled 혼합 (SF Symbols 4,000+ 글리프)
- **Stroke 굵기**: 1.5~2px (가변 weight: ultralight ~ black)
- **모서리 처리**: Round
- **추천 라이브러리**: SF Symbols (Apple 플랫폼) / Lucide (웹 대체)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 17px/1.41 -apple-system, "SF Pro Text", sans-serif;
  letter-spacing: -0.011em;
  border-radius: var(--radius-md);
  padding: 12px 20px;
  transition: opacity 150ms ease-out, transform 100ms ease-out;
  min-height: 44px;
}
.btn-primary {
  background: var(--color-primary-500);
  color: var(--text-on-primary);
}
.btn-primary:hover { opacity: 0.85; }
.btn-primary:active { opacity: 0.7; transform: scale(0.97); }
.btn-primary:disabled { background: var(--color-neutral-300); color: var(--text-disabled); }

.btn-secondary {
  background: rgba(0,122,255,0.10);
  color: var(--color-primary-500);
}
.btn-ghost {
  background: transparent;
  color: var(--color-primary-500);
}
.btn-danger {
  background: var(--color-error-fg);
  color: #fff;
}
```

**Input**
```css
.input {
  background: var(--bg-subtle);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 12px 14px;
  font-size: 17px;
  color: var(--text-primary);
}
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  background: var(--bg-base);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
.input:disabled { color: var(--text-disabled); }
```

**Card**
```css
.card {
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
}
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-subtle); }
```

**Badge / Tag**
```css
.badge { padding: 4px 10px; border-radius: var(--radius-full); font-size: 13px; font-weight: 600; }
.badge-solid   { background: var(--color-primary-500); color: #fff; }
.badge-subtle  { background: rgba(0,122,255,0.12); color: var(--color-primary-500); }
.badge-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Tab Bar)**
```css
.tabbar {
  position: fixed; bottom: 0; left: 0; right: 0;
  height: 49px;
  background: var(--bg-overlay);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-top: 1px solid var(--border-subtle);
  display: flex; justify-content: space-around;
}
.tab-item { color: var(--text-secondary); }
.tab-item.active { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
/* Apple 특유의 spring */
--ease-spring: cubic-bezier(0.5, 1.25, 0.5, 1);
```

### ⑪ Anti-patterns
1. 시스템 컬러를 임의 RGB로 덮어쓰지 말 것 — 다크모드/접근성 자동 적응이 깨진다
2. 44pt 미만의 터치 타깃 금지
3. 본문 폰트에 Display 가족 사용 금지 (SF Pro Display는 20pt 이상에만)
4. 번역 가능한 텍스트를 이미지로 굽지 말 것 (Dynamic Type/접근성 차단)
5. iOS 표준 컨트롤(스위치, 액션시트, 알림)을 커스텀으로 재구현 금지 — 일관성 파괴

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: -apple-system, "SF Pro Text", "Apple SD Gothic Neo", sans-serif; color: var(--text-primary); background: var(--bg-base); -webkit-font-smoothing: antialiased; }
  .hero { max-width: 980px; margin: 0 auto; padding: 96px 22px; text-align: center; }
  .hero h1 { font-size: 56px; font-weight: 700; letter-spacing: -0.022em; line-height: 1.07; margin: 0 0 16px; }
  .hero p { font-size: 21px; color: var(--text-secondary); margin: 0 0 32px; letter-spacing: -0.014em; }
  .hero .cta-row { display: flex; gap: 16px; justify-content: center; }
  .features { max-width: 980px; margin: 0 auto; padding: 0 22px 96px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .feature-card {
    background: var(--bg-subtle);
    border-radius: var(--radius-xl);
    padding: 32px 24px;
    transition: transform 250ms var(--ease-out);
  }
  .feature-card:hover { transform: translateY(-4px); }
  .feature-card h3 { font-size: 22px; font-weight: 600; letter-spacing: -0.014em; margin: 0 0 8px; }
  .feature-card p { font-size: 15px; line-height: 1.45; color: var(--text-secondary); margin: 0; }
  .feature-card .icon { width: 44px; height: 44px; border-radius: var(--radius-md); background: linear-gradient(135deg, #007AFF, #5856D6); margin-bottom: 16px; }
</style>

<section class="hero">
  <h1>한 차원 더 명료하게.</h1>
  <p>콘텐츠가 인터페이스를 이끕니다. 모든 것이 자연스럽게 자리를 찾습니다.</p>
  <div class="cta-row">
    <button class="btn btn-primary">지금 시작하기</button>
    <button class="btn btn-ghost">자세히 알아보기 ›</button>
  </div>
</section>

<div class="features">
  <div class="feature-card"><div class="icon"></div><h3>정밀한 타이포</h3><p>SF Pro로 픽셀 단위까지 다듬은 위계.</p></div>
  <div class="feature-card"><div class="icon"></div><h3>vibrancy 레이어</h3><p>반투명 블러가 만드는 자연스러운 깊이.</p></div>
  <div class="feature-card"><div class="icon"></div><h3>Dynamic Type</h3><p>모든 사람이 자신에게 맞는 크기로 읽는다.</p></div>
</div>
```
