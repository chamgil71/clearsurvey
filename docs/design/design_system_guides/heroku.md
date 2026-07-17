---
brand: Heroku
brand_ko: 헤로쿠
slug: heroku
generated: 2026-05-08
source_type: product_observation
confidence: medium
is_official: false

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#79589F"
primary_color_name: "Heroku Purple"
mood:
  - 친근함
  - 정돈
  - 클래식 PaaS

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

released_year: 2007
last_major_revision: 2022
signature_keyword: "보라 dyno와 git push 한 줄로 끝나는 PaaS의 원형"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#FFFFFF;color:#1B1F23;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;">
    <div style="background:#430098;color:#fff;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="display:inline-block;width:18px;height:18px;background:#79589F;border-radius:4px;clip-path:polygon(20% 0,80% 0,100% 30%,100% 70%,80% 100%,20% 100%,0 70%,0 30%);"></span>
      <strong style="font-size:13px;">Heroku</strong>
      <span style="margin-left:auto;font-size:11px;opacity:0.85;">acme-app</span>
    </div>
    <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="background:#E5F5E0;color:#178A2E;padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:600;display:inline-flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#178A2E;"></span>Up</span>
        <strong style="font-size:13px;">v42 · main</strong>
      </div>
      <div style="background:#F4F2F8;border:1px solid #E1DEEC;border-radius:6px;padding:10px 12px;font-family:ui-monospace,monospace;font-size:11px;line-height:1.6;color:#430098;">
        $ git push heroku main<br/>
        <span style="color:#178A2E;">remote: ✓ Build succeeded</span><br/>
        <span style="color:#5C5664;">remote: → released v42</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="background:#fff;border:1px solid #E1DEEC;border-radius:6px;padding:8px 10px;">
          <div style="font-size:9px;color:#5C5664;text-transform:uppercase;letter-spacing:0.04em;">Dynos</div>
          <div style="font-size:18px;font-weight:700;color:#79589F;">3</div>
        </div>
        <div style="background:#fff;border:1px solid #E1DEEC;border-radius:6px;padding:8px 10px;">
          <div style="font-size:9px;color:#5C5664;text-transform:uppercase;letter-spacing:0.04em;">Region</div>
          <div style="font-size:13px;font-weight:600;">us</div>
        </div>
      </div>
      <button style="background:#79589F;color:#fff;border:0;border-radius:6px;padding:8px 14px;font-size:12px;font-weight:600;font-family:inherit;align-self:flex-start;">View logs →</button>
    </div>
  </div>

sources:
  - https://www.heroku.com/
  - https://devcenter.heroku.com/
  - https://www.heroku.com/about
---

### ① 브랜드 DNA
- **브랜드명**: Heroku (Salesforce)
- **한 줄 정체성**: `git push heroku main` 한 줄로 모든 배포가 끝나는, PaaS의 원형
- **공식 디자인 철학**: "The cloud platform for developers — focus on your app, we handle the rest"
- **시그니처 요소 1개**: Heroku Purple(#79589F) + dyno(원기둥) 모티프 + Salesforce 통합 후의 깊은 보라(#430098) 톤

### ② 톤 & 무드
- **핵심 키워드 3개**: 친근함, 정돈, 클래식 PaaS
- **무드 설명**: 흰 캔버스 + 짙은 보라 헤더 + 부드러운 라벤더 톤 액센트. 데이터 메트릭과 빌드 로그가 차분하게 보인다.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Soft (4~8px)
- **평면성**: Subtle

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Heroku Purple */
  --color-primary-50:  #F4F2F8;
  --color-primary-100: #E1DEEC;
  --color-primary-200: #C0B7D9;
  --color-primary-300: #9F8FC5;
  --color-primary-400: #8E73B2;
  --color-primary-500: #79589F;  /* Heroku Purple */
  --color-primary-600: #614885;
  --color-primary-700: #4D3A6A;
  --color-primary-800: #3A2C50;
  --color-primary-900: #271D35;

  /* Secondary - Heroku Deep Purple (post-Salesforce) */
  --color-secondary-500: #430098;

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F8F8FA;
  --color-neutral-100:  #EEEEF2;
  --color-neutral-200:  #DDDDE3;
  --color-neutral-300:  #C0C0CB;
  --color-neutral-500:  #8C8C99;
  --color-neutral-700:  #5C5664;
  --color-neutral-800:  #3D3942;
  --color-neutral-900:  #1B1F23;
  --color-neutral-1000: #0A0E12;

  /* Semantic */
  --color-success-bg: #E5F5E0;
  --color-success-fg: #178A2E;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #B45309;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #E1F0F9;
  --color-info-fg:    #1F75CB;

  /* Surface */
  --bg-base:     #FFFFFF;
  --bg-subtle:   #F8F8FA;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(27,31,35,0.50);

  /* Text */
  --text-primary:    #1B1F23;
  --text-secondary:  #5C5664;
  --text-tertiary:   #8C8C99;
  --text-on-primary: #FFFFFF;
  --text-disabled:   #C0C0CB;

  /* Border */
  --border-default: #DDDDE3;
  --border-subtle:  #EEEEF2;
  --border-strong:  #C0C0CB;
  --border-focus:   #79589F;
}

[data-theme="dark"] {
  --bg-base: #1B1F23;
  --bg-subtle: #2A2E35;
  --bg-elevated: #353A42;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL) — 폴백 -apple-system
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
  - 모노: ui-monospace, "JetBrains Mono"
- **위계**:
  - Display: 56px / 700 / 1.05 / -0.02em
  - H1: 32px / 700 / 1.15 / -0.01em
  - H2: 22px / 600 / 1.27 / 0
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
- **Container**: max-width 1200px, 좌우 패딩 24px

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
--shadow-sm: 0 1px 3px rgba(27,31,35,0.06);
--shadow-md: 0 4px 12px rgba(27,31,35,0.10);
--shadow-lg: 0 8px 24px rgba(27,31,35,0.14);
--shadow-xl: 0 16px 32px rgba(121,88,159,0.20);
```

### ⑧ Iconography
- **스타일**: Outline (Heroku 자체 + Lucide 호환)
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Round
- **추천 라이브러리**: Lucide / Phosphor

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn {
  font: 600 14px/1 Inter, 'Pretendard', sans-serif;
  border-radius: var(--radius-md);
  padding: 0 14px;
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
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 8px 12px; font-size: 14px; }
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(121,88,159,0.20); }
```

**Card**
```css
.card { background: var(--bg-base); border: 1px solid var(--border-default); border-radius: var(--radius-lg); padding: 16px; }
.card-elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.card-outlined { box-shadow: none; }
```

**Badge / Status**
```css
.tag { padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
.tag-up { background: var(--color-success-bg); color: var(--color-success-fg); }
.tag-up::before { content:""; width: 6px; height: 6px; border-radius: 50%; background: var(--color-success-fg); }
```

**Navigation (Top nav)**
```css
.topnav { height: 50px; background: #430098; color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 12px; }
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
1. brand 보라를 본문 텍스트에 사용 금지 — 액션과 brand mark에만
2. 다크 보라 헤더 위 채도 높은 노랑/오렌지 텍스트 사용 금지 — 가독성 저하
3. dyno 모티프를 임의 변형/회전 금지
4. 데이터 그래프에 7가지 이상 색 사용 금지
5. 본문에 italic 강조 금지

### ⑫ 시그니처 적용 예시 (App dashboard)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); }
  .topnav { height: 50px; background: #430098; color: #fff; display: flex; align-items: center; padding: 0 20px; gap: 12px; font-size: 13px; }
  .topnav .logo { width: 22px; height: 22px; background: #79589F; border-radius: 4px; clip-path: polygon(20% 0,80% 0,100% 30%,100% 70%,80% 100%,20% 100%,0 70%,0 30%); }
  .layout { padding: 24px 32px; max-width: 1200px; margin: 0 auto; }
  .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .head h1 { margin: 0; font-size: 22px; font-weight: 700; }
  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  .panel { background: #fff; border: 1px solid #DDDDE3; border-radius: 8px; padding: 14px; }
  .panel .label { font-size: 11px; color: #5C5664; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600; }
  .panel .num { font-size: 26px; font-weight: 700; line-height: 1.1; margin-top: 4px; color: #79589F; }
  .panel .delta { font-size: 11px; color: #178A2E; margin-top: 4px; font-weight: 600; }
  .build-log { background: #F4F2F8; border: 1px solid #E1DEEC; border-radius: 8px; padding: 14px 16px; font-family: ui-monospace, monospace; font-size: 13px; line-height: 1.6; color: #430098; }
</style>

<header class="topnav">
  <div class="logo"></div>
  <strong>Heroku</strong>
  <span style="opacity:0.85;">/ acme-app</span>
  <span class="tag tag-up" style="margin-left:auto; background:rgba(255,255,255,0.15); color:#fff;"><span style="background:#3FCB37;"></span> v42 · main · Up</span>
</header>

<main class="layout">
  <div class="head">
    <h1>Acme App</h1>
    <button class="btn btn-primary">Deploy ▾</button>
  </div>
  <div class="grid">
    <div class="panel"><div class="label">Dynos</div><div class="num">3</div><div class="delta">all up</div></div>
    <div class="panel"><div class="label">Requests · 24h</div><div class="num">128k</div><div class="delta">▲ 8%</div></div>
    <div class="panel"><div class="label">Avg response</div><div class="num">42ms</div><div class="delta">▼ 3ms</div></div>
  </div>
  <div class="build-log">
$ git push heroku main<br/>
<span style="color:#5C5664;">remote: Compressing source files...</span><br/>
<span style="color:#5C5664;">remote: Building source...</span><br/>
<span style="color:#178A2E;">remote: ✓ Build succeeded in 24.8s</span><br/>
<span style="color:#5C5664;">remote: → Deploying...</span><br/>
<span style="color:#178A2E;">remote: ✓ Released v42</span>
  </div>
</main>
```
