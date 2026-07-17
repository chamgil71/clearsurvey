---
brand: HashiCorp Terraform
brand_ko: 해시코프 테라폼
slug: terraform
generated: 2026-05-14
source_type: product_observation
confidence: high
is_official: true

region: western
industry:
  - dev-tools
  - infra

color_tone: cool
primary_color_hex: "#7B42BC"
primary_color_name: "Terraform Purple"
mood:
  - 인프라
  - 정형
  - 견고

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal

theme_modes:
  - light

released_year: 2014
last_major_revision: 2025
signature_keyword: "보라 T 로고 + HCL 코드 + plan/apply 다이얼로그의 IaC 표준"

hero_html: |
  <div style="font-family:'Inter',-apple-system,'Segoe UI',sans-serif;background:#F7F8FA;color:#0E0E10;height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.005em;">
    <div style="padding:10px 14px;background:#fff;display:flex;align-items:center;gap:10px;border-bottom:1px solid #E4E5E9;">
      <div style="width:24px;height:24px;background:#7B42BC;display:grid;place-items:center;color:#fff;font:900 14px/1 sans-serif;">T</div>
      <strong style="font-size:14px;font-weight:600;">terraform-aws-vpc</strong>
      <span style="margin-left:auto;font-size:11px;color:#6F7178;">main.tf</span>
    </div>
    <div style="padding:10px 12px;font:400 12px/1.65 'JetBrains Mono','SF Mono',monospace;background:#0E0E10;color:#E4E5E9;overflow:hidden;">
      <div><span style="color:#A180D6;">resource</span> <span style="color:#7AE7B3;">"aws_vpc"</span> <span style="color:#7AE7B3;">"main"</span> {</div>
      <div style="padding-left:14px;"><span style="color:#A180D6;">cidr_block</span> = <span style="color:#FFD479;">"10.0.0.0/16"</span></div>
      <div style="padding-left:14px;"><span style="color:#A180D6;">tags</span> = { <span style="color:#FFD479;">"Env"</span> = <span style="color:#FFD479;">"prod"</span> }</div>
      <div>}</div>
      <div style="margin-top:6px;color:#7AE7B3;">+ 3 to add, ~ 0 to change, - 0 to destroy</div>
    </div>
    <div style="padding:8px 12px;background:#fff;border-top:1px solid #E4E5E9;display:flex;gap:8px;align-items:center;">
      <div style="background:#7B42BC;color:#fff;border-radius:0;padding:7px 16px;font:600 12px/1 inherit;">terraform apply</div>
      <div style="margin-left:auto;font:400 11px/1 inherit;color:#6F7178;">workspace: prod-us-east</div>
    </div>
  </div>

sources:
  - https://www.terraform.io/
  - https://design-system.hashicorp.dev/
---

### ① 브랜드 DNA
- **브랜드명**: Terraform (HashiCorp)
- **한 줄 정체성**: Infrastructure as Code 표준 — HCL로 클라우드 리소스를 선언적으로 정의·관리
- **공식 디자인 철학**: Helios Design System — 정형·견고·읽기 쉬운 코드 우선
- **시그니처 요소 1개**: 보라 T 모노그램(블록을 쌓아 올린 형태) + Terraform Purple(#7B42BC) + plan/apply 다이얼로그 컬러 코딩(+ add 그린, ~ change 옐로, - destroy 빨강). HashiCorp 패밀리(Vault·Consul·Nomad) 안에서 단독 시그니처

### ② 톤 & 무드
- **핵심 키워드 3개**: 인프라, 정형, 견고
- **무드 설명**: 라이트(F7F8FA) 베이스 + 모노스페이스 코드 카드. 모서리는 0~2px Sharp(블록 쌓아 올린 로고와 일치). 강조는 보라 단색.
- **비주얼 스타일**: 모던 미니멀
- **밀도(Density)**: Comfortable
- **모서리 성향**: Sharp (0~4px)
- **평면성**: Flat — 1px 보더 의존

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Terraform Purple */
  --color-primary-50:  #F2E8FB;
  --color-primary-100: #D9BEF1;
  --color-primary-200: #BE93E5;
  --color-primary-300: #A26ED6;
  --color-primary-400: #8E54C8;
  --color-primary-500: #7B42BC;   /* Terraform Purple */
  --color-primary-600: #6332A0;
  --color-primary-700: #4A2378;
  --color-primary-800: #321750;
  --color-primary-900: #1B0B30;

  /* Plan colors (시그니처) */
  --color-plan-add:     #15A864;   /* + */
  --color-plan-change:  #F2B33D;   /* ~ */
  --color-plan-destroy: #DC2626;   /* - */

  /* Neutral */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F7F8FA;
  --color-neutral-100:  #EDEEF2;
  --color-neutral-200:  #E4E5E9;
  --color-neutral-300:  #C2C5CC;
  --color-neutral-500:  #8C8F96;
  --color-neutral-700:  #6F7178;
  --color-neutral-800:  #3B3D42;
  --color-neutral-900:  #1B1C1E;
  --color-neutral-1000: #0E0E10;   /* terminal bg */

  /* Semantic */
  --color-success-bg: #E1F5EB;
  --color-success-fg: #15A864;
  --color-warning-bg: #FFF3DA;
  --color-warning-fg: #B47B00;
  --color-error-bg:   #FCE3E3;
  --color-error-fg:   #DC2626;
  --color-info-bg:    #F2E8FB;
  --color-info-fg:    #7B42BC;

  /* Surface */
  --bg-base:     #F7F8FA;
  --bg-subtle:   #EDEEF2;
  --bg-elevated: #FFFFFF;
  --bg-terminal: #0E0E10;
  --bg-overlay:  rgba(14,14,16,0.50);

  /* Text */
  --text-primary:    #0E0E10;
  --text-secondary:  #3B3D42;
  --text-tertiary:   #6F7178;
  --text-on-primary: #FFFFFF;
  --text-link:       #7B42BC;
  --text-disabled:   #C2C5CC;

  /* Border */
  --border-default: #E4E5E9;
  --border-subtle:  #EDEEF2;
  --border-strong:  #C2C5CC;
  --border-focus:   #7B42BC;
}

[data-theme="dark"] {
  --bg-base:     #0E0E10;
  --bg-subtle:   #1B1C1E;
  --bg-elevated: #25262A;
  --text-primary:    #FFFFFF;
  --text-secondary:  #C2C5CC;
  --border-default:  #3B3D42;
  --color-primary-500: #A26ED6;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: **Inter** / system-ui
  - 코드: **JetBrains Mono** / SF Mono / Source Code Pro
  - 한글: Pretendard / Noto Sans KR
- **위계**:
  - Display: 36px / 700 / 1.15
  - H1: 28px / 700 / 1.2
  - H2: 22px / 600 / 1.3
  - H3: 17px / 600 / 1.35
  - Body Large: 16px / 400 / 1.55
  - Body: 14px / 400 / 1.5
  - Body Small: 13px / 500 / 1.4
  - Code: 13px / 400 / 1.65 mono
  - Caption: 12px / 500 / 1.3

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 36px;
  --space-3xl: 56px;
  ```

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;     /* 버튼 시그니처 */
--radius-md: 4px;
--radius-lg: 6px;
--radius-xl: 8px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(14,14,16,0.06);
--shadow-md: 0 4px 12px rgba(14,14,16,0.10);
--shadow-lg: 0 12px 32px rgba(14,14,16,0.18);
```

### ⑧ Iconography
- **스타일**: Flight Icons (HashiCorp 자체) — Outline 위주
- **Stroke 굵기**: 1.5~2px
- **모서리 처리**: Sharp
- **추천 라이브러리**: Flight Icons / Phosphor Light

### ⑨ 컴포넌트 가이드

**Button**
```css
.btn { font: 600 14px/1 Inter, sans-serif; border-radius: 2px; padding: 9px 18px; border: 0; cursor: pointer; }
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-secondary { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); }
.btn-secondary:hover { background: var(--bg-subtle); }
.btn-destructive { background: var(--color-plan-destroy); color: #fff; }
.btn-cli { background: var(--color-neutral-900); color: #fff; padding: 9px 16px; font: 600 13px/1 'JetBrains Mono', monospace; }
```

**Input**
```css
.input { background: var(--bg-elevated); border: 1px solid var(--border-strong); border-radius: 2px; padding: 8px 12px; font: 400 14px/1.4 inherit; color: var(--text-primary); }
.input:focus { border-color: var(--color-primary-500); outline: 2px solid rgba(123,66,188,0.20); }
.code-block { background: var(--bg-terminal); color: #E4E5E9; padding: 14px 16px; font: 400 13px/1.65 'JetBrains Mono', monospace; border-radius: 2px; }
.code-block .kw { color: #A180D6; }
.code-block .str { color: #FFD479; }
.code-block .id  { color: #7AE7B3; }
.code-block .cmt { color: #6F7178; font-style: italic; }
.code-block .num { color: #6BB6FF; }
```

**Card (Resource / Plan diff)**
```css
.resource-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-left: 3px solid var(--color-primary-500); border-radius: 2px; padding: 12px 16px; font: 500 13px/1.4 inherit; }
.resource-card .head { display: flex; align-items: center; gap: 8px; font-weight: 700; }
.resource-card .meta { color: var(--text-tertiary); font-weight: 400; font-size: 12px; margin-top: 4px; }
.plan-line { font: 400 13px/1.7 'JetBrains Mono', monospace; padding: 2px 8px; border-radius: 2px; }
.plan-line.add     { background: rgba(21,168,100,0.12); color: var(--color-plan-add); }
.plan-line.change  { background: rgba(242,179,61,0.15); color: var(--color-plan-change); }
.plan-line.destroy { background: rgba(220,38,38,0.10); color: var(--color-plan-destroy); }
```

**Badge / Tag**
```css
.badge-version { background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-default); border-radius: 2px; padding: 2px 6px; font: 600 11px/1.3 'JetBrains Mono', monospace; }
.tag-provider { background: var(--color-primary-50); color: var(--color-primary-700); border-radius: 2px; padding: 2px 8px; font: 600 11px/1.3 inherit; }
.tag-workspace { background: var(--bg-elevated); color: var(--text-primary); border: 1px solid var(--border-strong); border-radius: 2px; padding: 3px 10px; font: 600 12px/1.3 inherit; }
.kbd-tf { background: var(--bg-terminal); color: #E4E5E9; border-radius: 2px; padding: 2px 6px; font: 600 11px/1 'JetBrains Mono', monospace; }
```

**Navigation (Sidebar)**
```css
.sidebar { background: var(--bg-elevated); border-right: 1px solid var(--border-default); width: 260px; padding: 12px 0; }
.sidebar .item { display: flex; align-items: center; gap: 12px; padding: 8px 18px; font: 500 14px/1 inherit; color: var(--text-secondary); cursor: pointer; }
.sidebar .item:hover { background: var(--bg-subtle); color: var(--text-primary); }
.sidebar .item.active { background: var(--bg-subtle); color: var(--color-primary-500); border-left: 3px solid var(--color-primary-500); padding-left: 15px; font-weight: 600; }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 320ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ⑪ Anti-patterns
1. 카드/버튼 모서리 6px 이상 금지 — 0~4px Sharp가 블록 로고와 일치
2. plan diff에 단색만 사용 금지 — `+` add 그린, `~` change 옐로, `-` destroy 빨강 컬러 코드 유지
3. 보라 외 다른 강조 색 추가 금지 — Terraform Purple 단일 강조
4. 본문에 모노스페이스 폰트 사용 금지 — 본문은 Inter, 코드만 JetBrains Mono
5. 다른 HashiCorp 제품 컬러(Vault 옐로/Consul 핑크) 혼용 금지 — Terraform은 보라 단독

### ⑫ 시그니처 적용 예시 (Terraform Plan UI)

```html
<style>
  body { margin: 0; font-family: Inter, Pretendard, -apple-system, sans-serif; color: #0E0E10; background: #F7F8FA; letter-spacing: -0.005em; }
  .app { display: grid; grid-template-columns: 260px 1fr; min-height: 100vh; }
  .sidebar { background: #fff; border-right: 1px solid #E4E5E9; padding: 14px 0; }
  .sidebar .brand { display: flex; align-items: center; gap: 10px; padding: 0 18px 18px; border-bottom: 1px solid #E4E5E9; }
  .sidebar .brand .logo { width: 30px; height: 30px; background: #7B42BC; display: grid; place-items: center; color: #fff; font: 900 16px/1 inherit; }
  .sidebar .brand .name { font: 700 16px/1 inherit; }
  .sidebar .brand .sub  { font: 500 11px/1 inherit; color: #6F7178; margin-top: 3px; }
  .sidebar .item { display: flex; align-items: center; gap: 12px; padding: 9px 18px; font: 500 14px/1 inherit; color: #3B3D42; cursor: pointer; }
  .sidebar .item:hover { background: #EDEEF2; color: #0E0E10; }
  .sidebar .item.active { background: #F2E8FB; color: #4A2378; border-left: 3px solid #7B42BC; padding-left: 15px; font-weight: 700; }
  main { padding: 28px 32px; display: grid; gap: 18px; }
  .head { display: flex; align-items: center; gap: 12px; }
  .head h1 { margin: 0; font: 700 24px/1.2 inherit; }
  .head .badge-ws { background: #fff; border: 1px solid #C2C5CC; border-radius: 2px; padding: 4px 12px; font: 700 12px/1.3 inherit; }
  .head .right { margin-left: auto; display: flex; gap: 8px; }
  .btn-primary { background: #7B42BC; color: #fff; border: 0; border-radius: 2px; padding: 9px 18px; font: 700 13px/1 inherit; cursor: pointer; }
  .btn-secondary { background: #fff; color: #0E0E10; border: 1px solid #C2C5CC; border-radius: 2px; padding: 9px 18px; font: 700 13px/1 inherit; cursor: pointer; }
  .summary { background: #fff; border: 1px solid #E4E5E9; border-left: 3px solid #7B42BC; border-radius: 2px; padding: 16px 20px; display: flex; gap: 24px; align-items: center; }
  .summary .item { display: flex; align-items: center; gap: 8px; font: 600 14px/1.3 inherit; }
  .summary .item.add     { color: #15A864; }
  .summary .item.change  { color: #B47B00; }
  .summary .item.destroy { color: #DC2626; }
  .summary .item .num { font: 700 22px/1 inherit; }
  .diff { background: #0E0E10; color: #E4E5E9; border-radius: 2px; overflow: hidden; }
  .diff .head { padding: 10px 14px; background: #1B1C1E; font: 600 12px/1.3 inherit; color: #C2C5CC; border-bottom: 1px solid #25262A; display: flex; gap: 12px; align-items: center; }
  .diff .body { padding: 12px 14px; font: 400 13px/1.7 'JetBrains Mono', SFMono-Regular, Consolas, monospace; }
  .line { padding: 1px 8px; border-radius: 2px; white-space: pre; }
  .line.add { background: rgba(21,168,100,0.12); color: #7AE7B3; }
  .line.change { background: rgba(242,179,61,0.12); color: #FFD479; }
  .line.destroy { background: rgba(220,38,38,0.12); color: #FF8A8A; }
  .line.ctx { color: #C2C5CC; }
  .kw { color: #A180D6; }
  .str { color: #FFD479; }
  .cmt { color: #6F7178; font-style: italic; }
  .cli { background: #fff; border: 1px solid #E4E5E9; border-radius: 2px; padding: 10px 14px; font: 600 13px/1.5 'JetBrains Mono', monospace; color: #0E0E10; }
  .cli .p { color: #7B42BC; margin-right: 6px; }
</style>

<div class="app">
  <aside class="sidebar">
    <div class="brand">
      <div class="logo">T</div>
      <div><div class="name">Terraform</div><div class="sub">v1.10 · HCP</div></div>
    </div>
    <div class="item">📂 Workspaces</div>
    <div class="item active">⊞ Plans &amp; Applies</div>
    <div class="item">📦 Modules</div>
    <div class="item">🧪 Providers</div>
    <div class="item">🔐 Variables</div>
    <div class="item">📊 Runs</div>
    <div class="item" style="margin-top:auto;">⚙ Settings</div>
  </aside>
  <main>
    <div class="head">
      <h1>Plan</h1>
      <span class="badge-ws">prod-us-east</span>
      <span style="color:#6F7178;font:500 12px/1 inherit;">Triggered by <strong>@minji</strong> · 방금</span>
      <div class="right">
        <button class="btn-secondary">Discard</button>
        <button class="btn-primary">▶ Apply plan</button>
      </div>
    </div>
    <section class="summary">
      <div class="item add"><span class="num">+3</span> to add</div>
      <div class="item change"><span class="num">~1</span> to change</div>
      <div class="item destroy"><span class="num">-0</span> to destroy</div>
      <span style="margin-left:auto;color:#6F7178;font:500 12px/1.4 inherit;">terraform-aws-vpc · main.tf</span>
    </section>
    <section class="diff">
      <div class="head">📄 main.tf · planned changes</div>
      <div class="body">
<div class="line ctx">  <span class="cmt"># aws_vpc.main 새 리소스</span></div>
<div class="line add">+ <span class="kw">resource</span> <span class="str">"aws_vpc"</span> <span class="str">"main"</span> {</div>
<div class="line add">+   cidr_block       = <span class="str">"10.0.0.0/16"</span></div>
<div class="line add">+   enable_dns_hosts = <span class="kw">true</span></div>
<div class="line add">+   tags = { Env = <span class="str">"prod"</span> }</div>
<div class="line add">+ }</div>
<div class="line ctx"></div>
<div class="line ctx">  <span class="cmt"># aws_subnet.public[0] 변경</span></div>
<div class="line change">~ <span class="kw">resource</span> <span class="str">"aws_subnet"</span> <span class="str">"public"</span> {</div>
<div class="line change">~   tags = { Env = <span class="str">"staging"</span> }   <span class="cmt">→ { Env = "prod" }</span></div>
<div class="line change">~ }</div>
      </div>
    </section>
    <div class="cli"><span class="p">$</span>terraform apply -auto-approve "prod-us-east.tfplan"</div>
  </main>
</div>
```
