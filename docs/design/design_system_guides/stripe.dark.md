---
brand: Stripe
brand_ko: 스트라이프
slug: stripe
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - fintech
  - dev-tools

color_tone: cool
primary_color_hex: "#635BFF"
primary_color_name: "Stripe Indigo"
mood:
  - 정교함
  - 흐름
  - 신뢰

font_category: sans-serif
font_primary: Sohne
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

released_year: 2010
last_major_revision: 2024
signature_keyword: "자주색 그라데이션과 코드 스니펫이 흐르는 핀테크 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F6F9FC", "border": "#E3E8EE", "fg": "#0A2540", "fg_muted": "#525F7F", "accent": "#635BFF" },
    "dark":  { "bg": "#0A2540", "surface": "#16315A", "border": "#1E3A6B", "fg": "#F6F9FC", "fg_muted": "#BCB9FB", "accent": "#7B77F7" }
  }

hero_html: |
  <div style="font-family:Sohne,-apple-system,'Pretendard','Helvetica Neue',sans-serif;background:linear-gradient(180deg,#0A2540 0%,#16315A 100%);color:#fff;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:-40px;background:radial-gradient(ellipse 70% 50% at 80% 20%,rgba(123,119,247,0.45),transparent 60%),radial-gradient(ellipse 60% 50% at 20% 80%,rgba(0,212,255,0.30),transparent 60%);filter:blur(30px);pointer-events:none;"></div>
    <div style="padding:14px 18px 6px;font-weight:700;color:#BCB9FB;font-size:18px;position:relative;z-index:1;">stripe</div>
    <div style="padding:6px 18px 18px;display:flex;flex-direction:column;justify-content:space-between;position:relative;z-index:1;">
      <div>
        <h2 style="font-size:26px;font-weight:600;line-height:1.06;letter-spacing:-0.02em;margin:0 0 8px;background:linear-gradient(90deg,#F6F9FC,#BCB9FB);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">금융 인프라를<br/>가장 단순하게.</h2>
        <p style="font-size:11px;color:#A8B6C9;margin:0;line-height:1.4;">한 줄의 코드로 결제, 정산, 매출 관리.</p>
      </div>
      <div style="background:rgba(7,26,46,0.6);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.10);border-radius:8px;padding:10px 12px;font-family:'Sohne Mono',ui-monospace,monospace;font-size:10px;line-height:1.5;color:#A8B6C9;margin-top:10px;">
        <span style="color:#FF8B83;">await</span> stripe.charges.<span style="color:#FF8B83;">create</span>({<br/>&nbsp;&nbsp;amount: <span style="color:#BCB9FB;">2000</span>,<br/>&nbsp;&nbsp;currency: <span style="color:#C5F8B7;">'usd'</span>,<br/>});
      </div>
      <button style="background:var(--card-accent);color:#fff;border:0;border-radius:8px;padding:8px 14px;font-size:12px;font-weight:500;font-family:inherit;align-self:flex-start;margin-top:10px;box-shadow:0 4px 12px rgba(123,119,247,0.4);">시작하기 →</button>
    </div>
  </div>

sources:
  - https://stripe.com/
  - https://stripe.com/blog/brand-evolution
  - https://stripe.com/jp/customers
---

### ① 브랜드 DNA
- **브랜드명**: Stripe
- **한 줄 정체성**: 결제의 복잡함을 자주색 그라데이션과 부드러운 일러스트로 풀어내는 개발자 친화 핀테크
- **공식 디자인 철학**: "Increase the GDP of the internet — beautifully built primitives for builders"
- **시그니처 요소 1개**: 동적 자주색 그라데이션 (#635BFF → #00D4FF) + Sohne 폰트 + 끊임없이 흐르는 색의 layered ribbon

### ② 톤 & 무드
- **핵심 키워드 3개**: 정교함, 흐름, 신뢰
- **무드 설명**: 흰 캔버스 위에 자주색이 강처럼 흐른다. 코드 스니펫과 일러스트가 한 화면에 자연스럽게 공존한다.
- **비주얼 스타일**: 모던 미니멀 + 글래스모피즘 (그라데이션 배경)
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (8~12px)
- **평면성**: Layered — 그라데이션 ribbon이 z축으로 겹친다

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Stripe Indigo (시그니처 자주, 다크 대비 위해 라이트니스 상향) */
  --color-primary-50:  #1A1840;
  --color-primary-100: #232066;
  --color-primary-200: #322CB7;
  --color-primary-300: #4F46E5;
  --color-primary-400: #635BFF;  /* Stripe Indigo 원본 */
  --color-primary-500: #7B77F7;  /* Stripe Indigo 기본 (dark-tuned) */
  --color-primary-600: #9A96F9;  /* hover */
  --color-primary-700: #BCB9FB;
  --color-primary-800: #DDDCFD;
  --color-primary-900: #F0EFFE;

  /* Secondary - Stripe Cyan (그라데이션 끝) */
  --color-secondary-500: #38DDFF;

  /* Neutral - Stripe navy ramp, inverted for dark (cool-leaning) */
  --color-neutral-0:    #0A2540;  /* Stripe deep navy (darkest) */
  --color-neutral-50:   #0E1B2E;  /* page bg */
  --color-neutral-100:  #142A45;
  --color-neutral-200:  #1E3A6B;
  --color-neutral-300:  #2C4A78;
  --color-neutral-500:  #5B6E8C;
  --color-neutral-700:  #8FA0B8;
  --color-neutral-800:  #B8C4D6;
  --color-neutral-900:  #DDE5EE;
  --color-neutral-1000: #F6F9FC;  /* Stripe off-white (lightest) */

  /* Semantic */
  --color-success-bg: #0E2A1E;
  --color-success-fg: #4ED99A;
  --color-warning-bg: #2E2410;
  --color-warning-fg: #F0B45C;
  --color-error-bg:   #321217;
  --color-error-fg:   #F08A82;
  --color-info-bg:    #0E2438;
  --color-info-fg:    #5BB8F5;

  /* Surface */
  --bg-base:     #0A2540;  /* Stripe deep navy */
  --bg-subtle:   #0E1B2E;
  --bg-elevated: #16315A;
  --bg-overlay:  rgba(3,12,22,0.60);

  /* Text */
  --text-primary:    #F6F9FC;     /* Stripe off-white */
  --text-secondary:  #BCC8DA;
  --text-tertiary:   #8FA0B8;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #4A5C76;

  /* Border */
  --border-default: #1E3A6B;
  --border-subtle:  #16315A;
  --border-strong:  #2C4A78;
  --border-focus:   #7B77F7;
}

[data-theme="light"] {
  /* Primary - Stripe Indigo (시그니처 자주) */
  --color-primary-50:  #F0EFFE;
  --color-primary-100: #DDDCFD;
  --color-primary-200: #BCB9FB;
  --color-primary-300: #9A96F9;
  --color-primary-400: #7B77F7;
  --color-primary-500: #635BFF;  /* Stripe Indigo 기본 */
  --color-primary-600: #4F46E5;  /* hover */
  --color-primary-700: #3F37CF;
  --color-primary-800: #322CB7;
  --color-primary-900: #1F1A8C;

  /* Secondary - Stripe Cyan (그라데이션 끝) */
  --color-secondary-500: #00D4FF;

  /* Neutral - Stripe gray (warm-leaning) */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F6F9FC;  /* page bg */
  --color-neutral-100:  #EFEFF4;
  --color-neutral-200:  #E3E8EE;
  --color-neutral-300:  #C1C9D2;
  --color-neutral-500:  #8C99A6;
  --color-neutral-700:  #525F7F;
  --color-neutral-800:  #3C4257;
  --color-neutral-900:  #2A2F45;
  --color-neutral-1000: #0A2540;  /* Stripe deep navy */

  /* Semantic */
  --color-success-bg: #D7F7E8;
  --color-success-fg: #06A66B;
  --color-warning-bg: #FFF3D2;
  --color-warning-fg: #BF7100;
  --color-error-bg:   #FFE4E4;
  --color-error-fg:   #E25950;
  --color-info-bg:    #E0F2FE;
  --color-info-fg:    #0073D5;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F6F9FC;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(10,37,64,0.40);

  /* Text */
  --text-primary:    #0A2540;     /* Stripe deep navy */
  --text-secondary:  #425466;
  --text-tertiary:   #697386;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #ADBDCC;

  /* Border */
  --border-default: #E3E8EE;
  --border-subtle:  #EFEFF4;
  --border-strong:  #C1C9D2;
  --border-focus:   #635BFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Sohne (Klim Type, 상업 라이선스, 폴백 -apple-system, "Helvetica Neue") / Sohne Mono (코드)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 64px / 600 / 1.06 / -0.02em
  - H1: 48px / 600 / 1.1 / -0.015em
  - H2: 32px / 600 / 1.2 / -0.01em
  - H3: 24px / 600 / 1.25 / -0.005em
  - Body Large: 18px / 400 / 1.55 / 0
  - Body: 16px / 400 / 1.5 / 0
  - Body Small: 14px / 400 / 1.43 / 0
  - Caption: 12px / 500 / 1.33 / 0.04em (uppercase)

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
- **Container**: max-width 1200px, 좌우 패딩 24px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;     /* 입력 */
--radius-lg: 12px;    /* 카드 */
--radius-xl: 24px;    /* hero panel */
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 2px 5px rgba(0,0,0,0.40), 0 1px 1px rgba(0,0,0,0.30);
--shadow-md: 0 7px 14px rgba(0,0,0,0.45), 0 3px 6px rgba(0,0,0,0.30);  /* 카드 hover */
--shadow-lg: 0 13px 27px rgba(0,0,0,0.50), 0 8px 16px rgba(0,0,0,0.35); /* 강조 카드 */
--shadow-xl: 0 30px 60px rgba(0,0,0,0.55), 0 18px 36px rgba(0,0,0,0.40); /* hero */
```

### ⑧ Iconography
- **스타일**: Outline (1.5~2px) — Stripe 자체 일러스트 라인
- **Stroke 굵기**: 1.5px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor (Stripe 공개 아이콘 라이브러리는 없음)

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 500 16px/1 "Sohne", -apple-system, "Pretendard", "Helvetica Neue", sans-serif;
  border-radius: var(--radius-md);
  padding: 10px 18px;
  height: 40px;
  display: inline-flex; align-items: center; gap: 8px;
  border: 0;
  transition: background 100ms ease, transform 100ms ease, box-shadow 100ms ease;
}
.btn-primary { background: var(--color-primary-500); color: #fff; box-shadow: 0 2px 5px rgba(123,119,247,0.35); }
.btn-primary:hover { background: var(--color-primary-600); transform: translateY(-1px); box-shadow: 0 4px 8px rgba(123,119,247,0.45); }
.btn-primary:active { transform: translateY(0); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); box-shadow: none; }

.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-default); box-shadow: var(--shadow-sm); }
.btn-secondary:hover { box-shadow: var(--shadow-md); }
.btn-ghost { background: transparent; color: var(--color-primary-500); }
.btn-ghost:hover { background: var(--color-primary-50); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 10px 12px;
  height: 40px;
  font-size: 16px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04);
  transition: box-shadow 150ms ease;
}
.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 4px rgba(123,119,247,0.25);
}
.input[aria-invalid="true"] { border-color: var(--color-error-fg); box-shadow: 0 0 0 4px rgba(240,138,130,0.25); }
```

**Card**
```css
.card { background: var(--bg-elevated); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.badge { padding: 2px 10px; border-radius: var(--radius-full); font-size: 12px; font-weight: 500; line-height: 18px; display: inline-flex; align-items: center; gap: 4px; }
.badge-solid   { background: var(--color-primary-500); color: #fff; }
.badge-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.badge-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Top Nav)**
```css
.topnav { height: 72px; background: rgba(10,37,64,0.85); backdrop-filter: blur(12px); position: sticky; top: 0; display: flex; align-items: center; padding: 0 24px; gap: 32px; border-bottom: 1px solid var(--border-subtle); z-index: 10; }
.topnav .logo { color: var(--color-primary-500); font-weight: 700; font-size: 24px; }
.topnav a { color: var(--text-primary); font-size: 15px; font-weight: 500; }
.topnav a:hover { color: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 250ms;
--duration-slow: 600ms;     /* 그라데이션 ribbon용 long */
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### ⑪ Anti-patterns
1. 자주색 그라데이션 위에 본문 텍스트 직접 배치 금지 — 흰 카드 또는 dark navy 배경 사용
2. 본문 폰트에 italic 강조 금지 — Sohne의 시그니처 톤 위반
3. 코드 스니펫에 colorful 신택스 + 그라데이션 배경 동시 사용 금지 — 가독성 파괴
4. button을 pill로 변경 금지 — Stripe의 8px round가 시그니처
5. brand 그라데이션을 form input 배경에 사용 금지 — focus state 신호 흐림

### ⑫ 시그니처 적용 예시

```html
<style>
  body { margin: 0; font-family: "Sohne", -apple-system, "Pretendard", "Helvetica Neue", sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topnav { /* 위 정의 */ }
  .hero { position: relative; padding: 120px 24px; overflow: hidden; background: linear-gradient(180deg, var(--color-neutral-0) 0%, #16315A 100%); color: #fff; }
  .hero::before {
    content:""; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 80% 20%, rgba(123,119,247,0.4) 0%, transparent 50%),
      radial-gradient(ellipse 60% 50% at 20% 80%, rgba(0,212,255,0.3) 0%, transparent 50%);
    filter: blur(40px);
  }
  .hero-inner { max-width: 1200px; margin: 0 auto; position: relative; display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: center; }
  .hero h1 { font-size: 64px; font-weight: 600; line-height: 1.06; letter-spacing: -0.02em; margin: 0 0 24px; background: linear-gradient(90deg, #F6F9FC, #BCB9FB); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .hero p { font-size: 20px; line-height: 1.5; color: #A8B6C9; margin: 0 0 32px; max-width: 520px; }
  .code-card { background: rgba(7,26,46,0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.10); border-radius: var(--radius-xl); padding: 24px; box-shadow: var(--shadow-xl); font: 14px/1.6 "Sohne Mono", ui-monospace, monospace; color: #F6F9FC; }
  .code-card .k { color: #FF8B83; }
  .code-card .s { color: #C5F8B7; }
  .code-card .v { color: #BCB9FB; }
  .features { max-width: 1200px; margin: 96px auto; padding: 0 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .feature-card { background: #16315A; border-radius: var(--radius-lg); padding: 32px; box-shadow: var(--shadow-sm); position: relative; overflow: hidden; }
  .feature-card::before { content:""; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500)); }
  .feature-card h3 { font-size: 22px; font-weight: 600; margin: 12px 0 8px; }
  .feature-card p { font-size: 15px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
</style>

<header class="topnav">
  <span class="logo">stripe</span>
  <nav style="display:flex; gap:24px"><a>Products</a><a>Solutions</a><a>Developers</a><a>Pricing</a></nav>
  <button class="btn btn-primary" style="margin-left:auto">시작하기 →</button>
</header>

<section class="hero">
  <div class="hero-inner">
    <div>
      <h1>금융 인프라를<br/>가장 단순하게.</h1>
      <p>수백만 기업이 Stripe로 결제, 정산, 매출 관리를 자동화합니다.</p>
      <button class="btn btn-primary">시작하기</button>
      <button class="btn btn-ghost" style="color:#fff; margin-left:8px">영업팀 문의 →</button>
    </div>
    <div class="code-card">
<span class="k">const</span> charge = <span class="k">await</span> stripe.charges.<span class="k">create</span>({
  amount: <span class="v">2000</span>,
  currency: <span class="s">'usd'</span>,
  source: <span class="s">'tok_visa'</span>,
  description: <span class="s">'Test charge'</span>,
});
    </div>
  </div>
</section>

<div class="features">
  <div class="feature-card"><h3>Payments</h3><p>한 줄의 코드로 카드, 지갑, 후불결제까지.</p></div>
  <div class="feature-card"><h3>Connect</h3><p>마켓플레이스에 정산을 통합.</p></div>
  <div class="feature-card"><h3>Atlas</h3><p>회사 설립부터 은행 계좌까지 며칠 안에.</p></div>
</div>
```
