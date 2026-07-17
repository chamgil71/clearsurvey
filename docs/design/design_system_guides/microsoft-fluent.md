---
brand: Microsoft Fluent Design
brand_ko: 마이크로소프트 플루언트 디자인
slug: microsoft-fluent
generated: 2026-05-08
source_type: official_docs
confidence: high
is_official: true

region: western
industry:
  - design-system
  - productivity
  - enterprise

color_tone: cool
primary_color_hex: "#0078D4"
primary_color_name: "Communication Blue"
mood:
  - 자연스러움
  - 직관
  - 빛과 재질

font_category: sans-serif
font_primary: Segoe UI Variable
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: layered

visual_style:
  - modern-minimal
  - glassmorphism

theme_modes:
  - light
  - dark

released_year: 2017
last_major_revision: 2022
signature_keyword: "Acrylic + Mica 재질이 만드는 빛이 통과하는 표면감"

card_tokens: |
  {
    "light": { "bg": "#FAFAFA", "surface": "#FFFFFF", "border": "#EDEBE9", "fg": "#201F1E", "fg_muted": "#605E5C", "accent": "#0078D4" },
    "dark":  { "bg": "#1F1F1F", "surface": "#2D2D2D", "border": "#3A3A3A", "fg": "#FFFFFF", "fg_muted": "#D2D0CE", "accent": "#2899F5" }
  }

hero_html: |
  <div style="font-family:'Segoe UI Variable','Segoe UI','Malgun Gothic',sans-serif;color:var(--card-fg);padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;background:radial-gradient(ellipse at 30% 20%,rgba(0,120,212,0.18),transparent 50%),radial-gradient(ellipse at 70% 80%,rgba(92,45,145,0.12),transparent 50%),var(--card-bg);position:relative;overflow:hidden;">
    <div>
      <div style="font-size:11px;font-weight:600;color:var(--card-fg-muted);letter-spacing:0.04em;text-transform:uppercase;">FLUENT 2</div>
      <h2 style="font-size:30px;font-weight:600;line-height:1.06;margin:8px 0 12px;">일을 더<br/>자연스럽게.</h2>
      <p style="font-size:13px;color:var(--card-fg-muted);margin:0;line-height:1.4;">빛, 깊이, 모션, 재질, 스케일.</p>
    </div>
    <div style="background:rgba(255,255,255,0.7);backdrop-filter:blur(20px);border:1px solid var(--card-border);border-radius:8px;padding:10px 12px;font-size:12px;color:var(--card-fg);display:flex;align-items:center;gap:8px;">
      <span style="width:20px;height:20px;border-radius:4px;background:#EFF6FC;color:var(--card-accent);display:inline-grid;place-items:center;font-size:11px;font-weight:700;">A</span>
      <span>Acrylic surface</span>
    </div>
    <button style="background:var(--card-accent);color:#fff;border:1px solid var(--card-accent);border-radius:4px;padding:8px 16px;font-size:13px;font-weight:600;font-family:inherit;align-self:flex-start;">시작</button>
  </div>

sources:
  - https://fluent2.microsoft.design/
  - https://react.fluentui.dev/
  - https://learn.microsoft.com/en-us/windows/apps/design/
---

### ① 브랜드 DNA
- **브랜드명**: Microsoft Fluent Design (Fluent 2)
- **한 줄 정체성**: 빛(Light), 깊이(Depth), 모션(Motion), 재질(Material), 스케일(Scale)을 전제로 한 자연스러운 크로스플랫폼 시스템
- **공식 디자인 철학**: "Natural and intuitive — connecting people, devices, and content"
- **시그니처 요소 1개**: Acrylic + Mica 재질(material) — 반투명 노이즈 블러로 빛이 통과하는 듯한 표면감

### ② 톤 & 무드
- **핵심 키워드 3개**: 자연스러움, 직관, 빛과 재질
- **무드 설명**: 흰 표면 + Microsoft Blue 강조 + 부드러운 acrylic 블러. 엔터프라이즈의 신뢰감과 컨슈머의 친근함이 균형을 이룬다.
- **비주얼 스타일**: 모던 미니멀 + 글래스모피즘 (acrylic/mica)
- **밀도(Density)**: Comfortable — 데스크톱 우선, 표 형식 컨트롤이 많아 명확한 라인 높이
- **모서리 성향**: Soft (4px 기본, Fluent 2에서 컴포넌트 라운드 강화)
- **평면성**: Layered — z-depth와 acrylic이 만드는 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Microsoft Brand Blue */
  --color-primary-50:  #EFF6FC;
  --color-primary-100: #DEECF9;
  --color-primary-200: #C7E0F4;
  --color-primary-300: #71AFE5;
  --color-primary-400: #2899F5;
  --color-primary-500: #0078D4;  /* Communication Blue 기본 */
  --color-primary-600: #106EBE;  /* hover */
  --color-primary-700: #005A9E;
  --color-primary-800: #004578;
  --color-primary-900: #002B4D;

  /* Secondary */
  --color-secondary-500: #5C2D91;  /* Microsoft Purple */

  /* Neutral - Fluent Gray */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F3F2F1;
  --color-neutral-200:  #EDEBE9;
  --color-neutral-300:  #E1DFDD;
  --color-neutral-400:  #C8C6C4;
  --color-neutral-500:  #A19F9D;
  --color-neutral-700:  #605E5C;
  --color-neutral-800:  #323130;
  --color-neutral-900:  #201F1E;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DFF6DD;
  --color-success-fg: #107C10;
  --color-warning-bg: #FFF4CE;
  --color-warning-fg: #797673;
  --color-error-bg:   #FDE7E9;
  --color-error-fg:   #A4262C;
  --color-info-bg:    #EFF6FC;
  --color-info-fg:    #0078D4;

  /* Surface */
  --bg-base:     #FAFAFA;        /* canvas */
  --bg-subtle:   #F3F2F1;        /* layer */
  --bg-elevated: #FFFFFF;        /* card */
  --bg-overlay:  rgba(255,255,255,0.80); /* acrylic */

  /* Text */
  --text-primary:    #201F1E;
  --text-secondary:  #605E5C;
  --text-tertiary:   #A19F9D;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C8C6C4;

  /* Border */
  --border-default: #D1D1D1;     /* stroke 1 */
  --border-subtle:  #EDEBE9;
  --border-strong:  #8A8886;
  --border-focus:   #0078D4;
}

[data-theme="dark"] {
  --bg-base: #1F1F1F;
  --bg-subtle: #292929;
  --bg-elevated: #2D2D2D;
  --bg-overlay: rgba(44,44,44,0.85);
  --text-primary: #FFFFFF;
  --text-secondary: #D2D0CE;
  --color-primary-500: #2899F5;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Segoe UI Variable / Segoe UI (Windows 번들), 웹은 "Segoe UI" 폴백
  - 한글: Malgun Gothic / Yu Gothic UI (Windows 번들)
- **위계** (Fluent 2 ramp):
  - Display: 68px / 600 / 1.06 / 0
  - H1 (Title 1): 40px / 600 / 1.1 / 0
  - H2 (Title 2): 32px / 600 / 1.13 / 0
  - H3 (Title 3): 28px / 600 / 1.14 / 0
  - Body Large: 18px / 400 / 1.33 / 0
  - Body: 14px / 400 / 1.43 / 0
  - Body Small: 12px / 400 / 1.33 / 0
  - Caption: 10px / 400 / 1.4 / 0

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;     /* Fluent는 12px 흔히 씀 */
  --space-lg: 20px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;     /* 기본 컨트롤 */
--radius-lg: 8px;     /* 카드 */
--radius-xl: 12px;    /* dialog */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
Fluent depth 8단계 중 핵심:
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12);   /* depth 2 — 카드 */
--shadow-md: 0 2px 4px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12);   /* depth 4 — hover */
--shadow-lg: 0 4px 8px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12);   /* depth 8 — flyout */
--shadow-xl: 0 8px 16px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12);  /* depth 16 — dialog */
```

### ⑧ Iconography
- **스타일**: Outline + Filled (Fluent UI System Icons는 동일 글리프의 두 weight 제공)
- **Stroke 굵기**: 1.5px (regular) / 2px (filled)
- **모서리 처리**: Round (pixel-aligned)
- **추천 라이브러리**: Fluent UI System Icons (MIT, 2,800+) / Lucide

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1.43 "Segoe UI Variable", "Segoe UI", "Malgun Gothic", sans-serif;
  border-radius: var(--radius-md);
  padding: 5px 12px;
  height: 32px;
  display: inline-flex; align-items: center; gap: 6px;
  transition: background 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; border: 1px solid var(--color-primary-500); }
.btn-primary:hover { background: var(--color-primary-600); border-color: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); border-color: var(--color-neutral-200); }

.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-ghost { background: transparent; color: var(--text-primary); border: 1px solid transparent; }
.btn-danger { background: var(--color-error-fg); color: #fff; border: 1px solid var(--color-error-fg); }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-bottom-width: 1px;
  border-radius: var(--radius-md);
  padding: 5px 10px;
  height: 32px;
  font-size: 14px;
}
.input:hover { border-color: var(--border-strong); }
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  border-bottom-width: 2px;
  padding-bottom: 4px;
}
```

**Card**
```css
.card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 16px;
  box-shadow: var(--shadow-sm);
}
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; }
```

**Badge**
```css
.badge { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 600; }
.badge-solid   { background: var(--color-primary-500); color: #fff; }
.badge-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.badge-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Command Bar)**
```css
.command-bar {
  height: 44px;
  background: var(--bg-overlay);
  backdrop-filter: blur(20px) saturate(125%);
  border-bottom: 1px solid var(--border-subtle);
  display: flex; align-items: center; padding: 0 12px; gap: 4px;
}
.command-bar button { background: transparent; border: 0; padding: 8px 12px; border-radius: var(--radius-md); font: 600 14px "Segoe UI Variable"; }
.command-bar button:hover { background: var(--bg-subtle); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--ease-out: cubic-bezier(0.1, 0.9, 0.2, 1);          /* Fluent decelerate */
--ease-in-out: cubic-bezier(0.8, 0, 0.2, 1);          /* Fluent accelerate */
```

### ⑪ Anti-patterns
1. acrylic을 본문 텍스트 배경으로 사용 금지 — 가독성 저하
2. 6단계 이상 z-depth 중첩 금지 — 시각적 노이즈
3. Communication Blue를 비-액션 영역에 사용 금지 — 인터랙션 신호 흐려짐
4. Segoe UI를 다른 산세리프로 임의 대체 금지 — Windows 시스템 일관성 파괴
5. 16px 이하의 본문 폰트 weight를 600 이상으로 강제 금지 — Segoe Variable의 자연스러운 ramp 흐트러뜨림

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Segoe UI Variable", "Segoe UI", "Malgun Gothic", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .hero {
    padding: 96px 24px; max-width: 1200px; margin: 0 auto;
    background:
      radial-gradient(ellipse at 30% 20%, rgba(0,120,212,0.10), transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(92,45,145,0.08), transparent 50%),
      var(--bg-base);
  }
  .hero h1 { font-size: 68px; font-weight: 600; line-height: 1.06; margin: 0 0 16px; }
  .hero p { font-size: 18px; color: var(--text-secondary); margin: 0 0 32px; max-width: 640px; }
  .features { max-width: 1200px; margin: 0 auto; padding: 0 24px 96px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .feature-card {
    background: rgba(255,255,255,0.70);
    backdrop-filter: blur(40px) saturate(125%);
    -webkit-backdrop-filter: blur(40px) saturate(125%);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: 24px;
    box-shadow: var(--shadow-sm);
  }
  .feature-card h3 { font-size: 20px; font-weight: 600; margin: 0 0 8px; }
  .feature-card p { font-size: 14px; line-height: 1.43; color: var(--text-secondary); margin: 0; }
  .feature-card .icon-square { width: 32px; height: 32px; border-radius: var(--radius-md); background: var(--color-primary-50); color: var(--color-primary-500); display: grid; place-items: center; font-weight: 700; margin-bottom: 12px; }
</style>

<section class="hero">
  <h1>일을 더 자연스럽게.</h1>
  <p>Fluent는 빛, 깊이, 모션, 재질, 스케일로 사람과 디바이스를 연결합니다.</p>
  <button class="btn btn-primary">지금 시작</button>
  <button class="btn btn-secondary">데모 보기</button>
</section>

<div class="features">
  <div class="feature-card"><div class="icon-square">A</div><h3>Acrylic 재질</h3><p>반투명 블러가 빛이 통과하는 표면감을 만듭니다.</p></div>
  <div class="feature-card"><div class="icon-square">M</div><h3>Mica 배경</h3><p>데스크톱 컨텍스트에서 자연스럽게 녹아드는 윈도 배경.</p></div>
  <div class="feature-card"><div class="icon-square">F</div><h3>Fluent Icons</h3><p>2,800+ 글리프, regular와 filled 두 weight 제공.</p></div>
</div>
```
