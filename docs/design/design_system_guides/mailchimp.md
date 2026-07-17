---
brand: Mailchimp Design System
brand_ko: 메일침프 디자인 시스템
slug: mailchimp
generated: 2026-05-08
source_type: official_docs
confidence: medium
is_official: true

region: western
industry:
  - design-system
  - marketing

color_tone: warm
primary_color_hex: "#FFE01B"
primary_color_name: "Cavendish Yellow"
mood:
  - 친근함
  - 크래프트
  - 격려

font_category: sans-serif
font_primary: Cerebri Sans
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: flat

visual_style:
  - humanism
  - retro-craft

theme_modes:
  - light

released_year: 2017
last_major_revision: 2023
signature_keyword: "노란 캔버스와 손그림 일러스트, hard-edge 그림자의 craft 톤"

hero_html: |
  <div style="font-family:'Cerebri Sans','Helvetica Neue','Pretendard',sans-serif;background:#FFE01B;color:#241C15;padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;border:2px solid #241C15;position:relative;overflow:hidden;">
    <div>
      <div style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:6px;">Mailchimp</div>
      <h2 style="font-size:30px;font-weight:800;line-height:0.96;letter-spacing:-0.02em;margin:0 0 10px;">고객을 키우는<br/>진짜 쉬운 방법</h2>
      <p style="font-size:13px;margin:0;line-height:1.4;">이메일, 자동화, 랜딩 페이지 — 작은 비즈니스의 큰 일.</p>
    </div>
    <div style="width:64px;height:64px;background:#fff;border:3px solid #241C15;border-radius:14px;box-shadow:6px 6px 0 #241C15;display:grid;place-items:center;font-size:36px;align-self:center;">🐵</div>
    <button style="background:#fff;color:#241C15;border:2px solid #241C15;border-radius:4px;padding:10px 16px;font-size:13px;font-weight:700;font-family:inherit;box-shadow:4px 4px 0 #241C15;align-self:flex-start;">무료로 시작 →</button>
  </div>

sources:
  - https://ux.mailchimp.com/
  - https://mailchimp.com/about/brand-assets/
---

### ① 브랜드 DNA
- **브랜드명**: Mailchimp Design System
- **한 줄 정체성**: 중소상공인을 응원하는, 손글씨 일러스트와 카바콘 노랑이 만드는 친근한 마케팅 시스템
- **공식 디자인 철학**: "Crafted, friendly, helpful — design that makes business feel approachable"
- **시그니처 요소 1개**: Cavendish Yellow(#FFE01B) + Helvetica Neue/CerebriSans 헤드라인 + 손그림 일러스트(scribble illustration)

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 크래프트, 격려
- **무드 설명**: 노란 배경 위에 검은 타이포가 또렷하다. 일러스트는 불완전한 손맛을 살리고, 카피는 사람의 말투로 쓴다.
- **비주얼 스타일**: 휴머니즘 + 살짝의 retro craft
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp~Soft (0~4px) — 헤드라인은 sharp, 컨트롤은 약간의 round
- **평면성**: Flat — 그림자보다 색의 명도 차이로 위계

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Cavendish Yellow */
  --color-primary-50:  #FFFBE5;
  --color-primary-100: #FFF7CC;
  --color-primary-200: #FFEF99;
  --color-primary-300: #FFE866;
  --color-primary-400: #FFE033;
  --color-primary-500: #FFE01B;  /* Mailchimp Yellow 기본 */
  --color-primary-600: #E5C918;  /* hover */
  --color-primary-700: #B39E13;
  --color-primary-800: #80720E;
  --color-primary-900: #4D4509;

  /* Secondary - Peppercorn Black (대비축) */
  --color-secondary-500: #241C15;  /* Peppercorn */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #FBF8F0;  /* Mailchimp warm off-white */
  --color-neutral-100:  #F2F0E9;
  --color-neutral-200:  #E0DACC;
  --color-neutral-300:  #C5BEAE;
  --color-neutral-500:  #8A8174;
  --color-neutral-700:  #5C5448;
  --color-neutral-800:  #3F392F;
  --color-neutral-900:  #241C15;
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DDF4DD;
  --color-success-fg: #3A8540;
  --color-warning-bg: #FFF3CC;
  --color-warning-fg: #B07900;
  --color-error-bg:   #FBE5E5;
  --color-error-fg:   #B53636;
  --color-info-bg:    #E7F0FB;
  --color-info-fg:    #2A6FB7;

  /* Surface */
  --bg-base:     #FBF8F0;        /* warm canvas */
  --bg-subtle:   #F2F0E9;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  #FFFFFF;

  /* Text */
  --text-primary:    #241C15;    /* Peppercorn */
  --text-secondary:  #5C5448;
  --text-tertiary:   #8A8174;
  --text-on-primary: #241C15;    /* 노랑 위에는 검정 */
  --text-disabled:   #C5BEAE;

  /* Border */
  --border-default: #E0DACC;
  --border-subtle:  #F2F0E9;
  --border-strong:  #8A8174;
  --border-focus:   #007C89;     /* 보조 청록 */
}

[data-theme="dark"] {
  --bg-base: #241C15;
  --bg-subtle: #3F392F;
  --bg-elevated: #5C5448;
  --text-primary: #FBF8F0;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문 헤드: Cerebri Sans / Founders Grotesk (마케팅) / Helvetica Neue (앱 UI)
  - 영문 본문: Helvetica Neue, Arial fallback
  - 한글: Pretendard (OFL) / Noto Sans KR
- **위계**:
  - Display: 72px / 800 / 1.0 / -0.02em (마케팅 hero)
  - H1: 48px / 800 / 1.05 / -0.01em
  - H2: 32px / 700 / 1.15 / 0
  - H3: 22px / 700 / 1.27 / 0
  - Body Large: 18px / 400 / 1.55 / 0
  - Body: 16px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.43 / 0
  - Caption: 12px / 600 / 1.33 / 0.04em (uppercase)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  ```
- **Container**: max-width 1280px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 4px;     /* 컨트롤 */
--radius-lg: 8px;     /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(36,28,21,0.06);
--shadow-md: 0 4px 8px rgba(36,28,21,0.10);
--shadow-lg: 0 8px 24px rgba(36,28,21,0.14);
--shadow-xl: 0 16px 40px rgba(36,28,21,0.20);
```
일러스트와 결합 시 `--shadow-offset: 4px 4px 0 #241C15` 같은 hard-edge 그림자도 자주 사용 (handcrafted 감성).

### ⑧ Iconography
- **스타일**: Outline + 손그림 일러스트
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor + 자체 일러스트 라이브러리

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 700 16px/1 "Cerebri Sans", "Helvetica Neue", "Pretendard", sans-serif;
  border-radius: var(--radius-md);
  padding: 12px 20px;
  border: 2px solid var(--color-secondary-500);
  background: var(--color-primary-500);
  color: var(--color-secondary-500);
  transition: transform 100ms ease, box-shadow 100ms ease;
  box-shadow: 4px 4px 0 var(--color-secondary-500);
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--color-secondary-500); }
.btn:active { transform: translate(2px, 2px); box-shadow: 0 0 0 var(--color-secondary-500); }
.btn:disabled { background: var(--color-neutral-200); color: var(--text-disabled); border-color: var(--text-disabled); box-shadow: 4px 4px 0 var(--text-disabled); }

.btn-primary { /* 위 기본이 primary */ }
.btn-secondary { background: var(--bg-elevated); }
.btn-ghost { background: transparent; border-color: transparent; box-shadow: none; }
.btn-ghost:hover { background: var(--color-primary-100); }
.btn-danger { background: var(--color-error-fg); color: #fff; border-color: var(--color-secondary-500); }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 2px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  font-size: 16px;
}
.input:focus {
  outline: none;
  border-color: var(--color-secondary-500);
  box-shadow: 4px 4px 0 var(--color-secondary-500);
  transform: translate(-2px, -2px);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); }
```

**Card**
```css
.card { background: var(--bg-elevated); border: 2px solid var(--color-secondary-500); border-radius: var(--radius-lg); padding: 24px; box-shadow: 6px 6px 0 var(--color-secondary-500); }
.card-elevated { background: var(--color-primary-500); }
.card-outlined { box-shadow: none; }
```

**Badge / Tag**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
.tag-solid   { background: var(--color-secondary-500); color: var(--color-primary-500); }
.tag-subtle  { background: var(--color-primary-100); color: var(--color-secondary-500); }
.tag-outline { border: 1.5px solid var(--color-secondary-500); color: var(--color-secondary-500); }
```

**Navigation (Top Nav)**
```css
.topnav { height: 72px; background: var(--bg-base); border-bottom: 2px solid var(--color-secondary-500); display: flex; align-items: center; padding: 0 32px; gap: 24px; }
.topnav .logo { width: 36px; height: 36px; border-radius: 50%; background: var(--color-primary-500); border: 2px solid var(--color-secondary-500); }
.topnav a { color: var(--color-secondary-500); font-weight: 700; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### ⑪ Anti-patterns
1. Cavendish Yellow + 흰 텍스트 조합 금지 — 명도 대비 부족
2. 사진 위에 본문 텍스트 직접 배치 금지 — 노랑 또는 흰 박스 배경 사용
3. 손그림 일러스트와 사실적 사진을 한 화면 동급 배치 금지 — 톤 충돌
4. corporate 느낌의 차가운 그라데이션 배경 금지 — Mailchimp 친근함 위배
5. 본문 폰트에 Cerebri Display 사용 금지 — 헤드라인 전용

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Cerebri Sans", "Helvetica Neue", "Pretendard", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topnav { /* 위 정의 */ }
  .hero { background: var(--color-primary-500); padding: 96px 32px; border-bottom: 2px solid var(--color-secondary-500); position: relative; overflow: hidden; }
  .hero-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr; gap: 48px; align-items: center; }
  .hero h1 { font-size: 72px; font-weight: 800; line-height: 0.96; letter-spacing: -0.02em; margin: 0 0 24px; color: var(--color-secondary-500); }
  .hero p { font-size: 20px; line-height: 1.4; color: var(--color-secondary-500); margin: 0 0 32px; }
  .hero .scribble { font-family: "Comic Sans MS", cursive; font-size: 24px; transform: rotate(-4deg); display: inline-block; }
  .hero .illust { width: 100%; aspect-ratio: 1; background: #fff; border: 3px solid var(--color-secondary-500); border-radius: 20px; box-shadow: 12px 12px 0 var(--color-secondary-500); display: grid; place-items: center; font-size: 96px; }
  .features { max-width: 1100px; margin: 96px auto; padding: 0 32px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .feature-card { background: #fff; border: 2px solid var(--color-secondary-500); border-radius: var(--radius-lg); padding: 24px; box-shadow: 6px 6px 0 var(--color-secondary-500); }
  .feature-card .emoji { font-size: 36px; margin-bottom: 8px; }
  .feature-card h3 { font-size: 22px; font-weight: 800; margin: 0 0 8px; }
  .feature-card p { font-size: 15px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Mailchimp</strong>
  <span style="margin-left:auto"><button class="btn">로그인</button></span>
</header>

<section class="hero">
  <div class="hero-inner">
    <div>
      <h1>고객을 키우는 <span class="scribble">진짜 쉬운 방법</span></h1>
      <p>이메일, 자동화, 랜딩 페이지 — 작은 비즈니스가 큰 일을 해내도록 설계됐습니다.</p>
      <button class="btn">무료로 시작하기 →</button>
    </div>
    <div class="illust">🐵</div>
  </div>
</section>

<div class="features">
  <div class="feature-card"><div class="emoji">✉️</div><h3>이메일 캠페인</h3><p>드래그 앤 드롭 빌더로 5분 안에 발송.</p></div>
  <div class="feature-card"><div class="emoji">🪄</div><h3>자동화</h3><p>고객 행동에 따라 알아서 보내는 시퀀스.</p></div>
  <div class="feature-card"><div class="emoji">📊</div><h3>인사이트</h3><p>오픈/클릭/매출까지 한 화면에서.</p></div>
</div>
```
