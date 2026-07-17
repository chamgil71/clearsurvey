---
brand: Miro
brand_ko: 미로
slug: miro
generated: 2026-05-08
source_type: product_observation
confidence: high
is_official: false

region: western
industry:
  - creative-tools
  - productivity

color_tone: warm
primary_color_hex: "#FFD02F"
primary_color_name: "Miro Yellow"
mood:
  - 활기참
  - 무한 캔버스
  - 협업

font_category: sans-serif
font_primary: Inter
font_korean_supported: true

density: comfortable
corner_style: soft
flatness: subtle

visual_style:
  - modern-minimal
  - humanism

theme_modes:
  - light

released_year: 2011
last_major_revision: 2024
signature_keyword: "Miro Yellow와 다양한 색의 스티키 노트가 떠다니는 무한 화이트보드"

hero_html: |
  <div style="font-family:Inter,'Pretendard',-apple-system,sans-serif;background:#F5F5F0;color:#050038;padding:0;height:100%;display:grid;grid-template-rows:auto 1fr;position:relative;overflow:hidden;">
    <div style="background:#fff;border-bottom:1px solid #E0E0E0;padding:8px 12px;display:flex;align-items:center;gap:8px;z-index:2;">
      <span style="width:22px;height:22px;background:#FFD02F;border-radius:6px;display:grid;place-items:center;color:#050038;font-weight:800;font-size:12px;">M</span>
      <strong style="font-size:13px;">Q3 Brainstorm</strong>
      <span style="margin-left:auto;display:flex;gap:-4px;">
        <span style="width:22px;height:22px;border-radius:50%;background:#FF6F61;border:2px solid #fff;margin-left:-4px;"></span>
        <span style="width:22px;height:22px;border-radius:50%;background:#4262FF;border:2px solid #fff;margin-left:-4px;"></span>
        <span style="width:22px;height:22px;border-radius:50%;background:#1AAD5C;border:2px solid #fff;margin-left:-4px;"></span>
      </span>
    </div>
    <div style="position:relative;background-image:radial-gradient(circle,#D0D0C8 1px,transparent 1px);background-size:14px 14px;">
      <div style="position:absolute;left:18px;top:24px;background:#FFD02F;padding:10px;border-radius:2px;font-size:11px;font-weight:600;color:#050038;width:90px;box-shadow:2px 3px 0 rgba(0,0,0,0.06);transform:rotate(-3deg);">디자인 시스템 v2</div>
      <div style="position:absolute;right:24px;top:14px;background:#FF6F61;padding:10px;border-radius:2px;font-size:11px;font-weight:600;color:#fff;width:80px;box-shadow:2px 3px 0 rgba(0,0,0,0.06);transform:rotate(2deg);">Onboarding 흐름!</div>
      <div style="position:absolute;left:60px;bottom:30px;background:#A0E7E5;padding:10px;border-radius:2px;font-size:11px;font-weight:600;color:#050038;width:90px;box-shadow:2px 3px 0 rgba(0,0,0,0.06);transform:rotate(-1deg);">대시보드 정리</div>
      <div style="position:absolute;right:18px;bottom:18px;background:#B4A0FF;padding:10px;border-radius:2px;font-size:11px;font-weight:600;color:#050038;width:80px;box-shadow:2px 3px 0 rgba(0,0,0,0.06);transform:rotate(3deg);">QA 일정 ⚠</div>
      <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:24px;font-weight:800;color:#050038;background:rgba(245,245,240,0.92);padding:6px 14px;border-radius:8px;letter-spacing:-0.01em;">Sprint 24 🎯</div>
      <div style="position:absolute;left:24px;bottom:90px;width:14px;height:14px;border-radius:50%;background:#FF6F61;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.1);"></div>
    </div>
  </div>

sources:
  - https://miro.com/
  - https://miro.com/brand
  - https://miro.com/help/
---

### ① 브랜드 DNA
- **브랜드명**: Miro
- **한 줄 정체성**: 끝없이 펼쳐지는 캔버스 위에 모두가 동시에 그리고 적는, 시각 협업 화이트보드
- **공식 디자인 철학**: "The visual workspace where teams get work done — together, on an infinite canvas"
- **시그니처 요소 1개**: Miro Yellow(#FFD02F) + 도트 그리드 무한 캔버스 + 다양한 색의 스티키 노트가 떠다니는 보드

### ② 톤 & 무드
- **핵심 키워드 3개**: 활기참, 무한 캔버스, 협업
- **무드 설명**: 따뜻한 베이지(#F5F5F0) 캔버스 위에 노란/코랄/시안/퍼플 스티키가 자유롭게 흩어져 있다. 도트 그리드가 캔버스 위에 떠다니는 무한 공간감을 준다.
- **비주얼 스타일**: 모던 미니멀 + 휴머니즘 (스티키 노트, 마커)
- **밀도(Density)**: Comfortable — 자유 배치 캔버스
- **모서리 성향**: Soft (스티키는 sharp 2px, 카드/컨트롤은 6~8px)
- **평면성**: Subtle — 스티키 그림자 + 캔버스 도트 패턴

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - Miro Yellow */
  --color-primary-50:  #FFF9E0;
  --color-primary-100: #FFF1B5;
  --color-primary-200: #FFE883;
  --color-primary-300: #FFE051;
  --color-primary-400: #FFD83A;
  --color-primary-500: #FFD02F;  /* Miro Yellow */
  --color-primary-600: #E6BB1E;
  --color-primary-700: #B8941A;
  --color-primary-800: #8A6E12;
  --color-primary-900: #5C4708;

  /* Secondary - Miro Indigo (action) */
  --color-secondary-500: #4262FF;

  /* 스티키 노트 컬러 */
  --sticky-yellow: #FFD02F;
  --sticky-coral:  #FF6F61;
  --sticky-cyan:   #A0E7E5;
  --sticky-purple: #B4A0FF;
  --sticky-pink:   #FFB4D9;
  --sticky-green:  #B4E197;
  --sticky-blue:   #B4D8FF;

  /* Neutral - warm beige base */
  --color-neutral-0:    #FFFFFF;
  --color-neutral-50:   #F5F5F0;     /* canvas warm beige */
  --color-neutral-100:  #ECECE4;
  --color-neutral-200:  #D0D0C8;
  --color-neutral-300:  #B0B0A8;
  --color-neutral-500:  #87878F;
  --color-neutral-700:  #5A5A66;
  --color-neutral-800:  #2D2E3D;
  --color-neutral-900:  #050038;     /* Miro deep navy */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #DCF7E5;
  --color-success-fg: #1AAD5C;
  --color-warning-bg: #FFF1D9;
  --color-warning-fg: #D9890C;
  --color-error-bg:   #FCE4E4;
  --color-error-fg:   #FF3D33;
  --color-info-bg:    #E5F0FF;
  --color-info-fg:    #4262FF;

  /* Surface */
  --bg-base:     #F5F5F0;          /* canvas */
  --bg-subtle:   #FFFFFF;
  --bg-elevated: #FFFFFF;
  --bg-overlay:  rgba(5,0,56,0.40);

  /* Text */
  --text-primary:    #050038;
  --text-secondary:  #5A5A66;
  --text-tertiary:   #87878F;
  --text-on-primary: #050038;       /* 노랑 위에는 navy */
  --text-disabled:   #B0B0A8;

  /* Border */
  --border-default: #E0E0E0;
  --border-subtle:  #ECECE4;
  --border-strong:  #B0B0A8;
  --border-focus:   #4262FF;
}

[data-theme="dark"] {
  --bg-base: #1A1B23;
  --bg-subtle: #25262E;
  --bg-elevated: #303140;
  --text-primary: #FFFFFF;
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 영문: Inter (OFL)
  - 한글: Pretendard (OFL) / Apple SD Gothic Neo
- **위계**:
  - Display: 64px / 800 / 1.0 / -0.03em
  - H1: 40px / 700 / 1.1 / -0.015em
  - H2: 28px / 700 / 1.2 / -0.01em
  - H3: 20px / 600 / 1.3 / 0
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
- **Container**: 캔버스는 fluid (무한), 마케팅 max-width 1280px

### ⑥ Border Radius
```css
--radius-none: 0;
--radius-sm: 2px;     /* 스티키 (사실상 sharp) */
--radius-md: 6px;     /* 컨트롤 */
--radius-lg: 8px;     /* 카드 */
--radius-xl: 16px;
--radius-full: 9999px;
```

### ⑦ Shadow / Elevation
```css
--shadow-none: none;
--shadow-sticky: 2px 3px 0 rgba(0,0,0,0.06);   /* 스티키 시그니처 */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-xl: 0 20px 48px rgba(0,0,0,0.24);
```

### ⑧ Iconography
- **스타일**: Outline (Miro 자체)
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
.btn-primary { background: var(--color-primary-500); color: var(--text-on-primary); }
.btn-primary:hover { background: var(--color-primary-600); }
.btn-primary:active { background: var(--color-primary-700); }
.btn-primary:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }

.btn-secondary { background: var(--bg-subtle); color: var(--text-primary); border: 1px solid var(--border-default); }
.btn-secondary:hover { background: var(--bg-base); }
.btn-action { background: var(--color-secondary-500); color: #fff; }   /* 캔버스 외 액션 */
.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--bg-subtle); }
.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input**
```css
.input {
  background: var(--bg-subtle);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  font-size: 14px;
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(66,98,255,0.20); }
```

**Card** (Sticky note 시그니처)
```css
.sticky { padding: 12px; border-radius: 2px; font-size: 13px; font-weight: 600; line-height: 1.35; box-shadow: var(--shadow-sticky); color: var(--text-primary); min-width: 100px; min-height: 60px; }
.sticky-yellow { background: var(--sticky-yellow); }
.sticky-coral  { background: var(--sticky-coral); color: #fff; }
.sticky-cyan   { background: var(--sticky-cyan); }
.sticky-purple { background: var(--sticky-purple); }

.card { background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 16px; box-shadow: var(--shadow-sm); }
.card-elevated { box-shadow: var(--shadow-md); }
.card-outlined { box-shadow: none; border: 1px solid var(--border-default); }
```

**Badge**
```css
.tag { padding: 2px 8px; border-radius: var(--radius-full); font-size: 11px; font-weight: 600; line-height: 16px; display: inline-flex; align-items: center; gap: 4px; }
.tag-solid   { background: var(--color-secondary-500); color: #fff; }
.tag-subtle  { background: rgba(66,98,255,0.10); color: var(--color-secondary-500); }
.tag-outline { border: 1px solid var(--border-default); color: var(--text-primary); }
```

**Navigation (Toolbar - left)**
```css
.toolbar { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); background: var(--bg-subtle); border-radius: 12px; padding: 8px 6px; display: flex; flex-direction: column; gap: 4px; box-shadow: var(--shadow-md); }
.toolbar .icon-btn { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; cursor: pointer; color: var(--text-primary); }
.toolbar .icon-btn:hover { background: var(--bg-base); }
.toolbar .icon-btn.active { background: var(--color-primary-500); }
```

### ⑩ Motion
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
/* 스티키 드래그 시 살짝 회전 */
--ease-sticky-drag: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### ⑪ Anti-patterns
1. 스티키 노트 라운드를 8px 이상으로 변경 금지 — sharp 2px이 시그니처
2. 캔버스 배경에 사진 또는 그라데이션 사용 금지 — 도트 그리드 베이지가 표준
3. 한 보드에 7가지 이상 스티키 색 동시 사용 금지 — 시각 노이즈
4. Miro Yellow를 본문 텍스트 배경으로 사용 금지 — 가독성 저하
5. 협업 cursor 색을 brand 색으로 통일 금지 — multiplayer 다양성 보존

### ⑫ 시그니처 적용 예시 (Whiteboard)

```html
<style>
  body { margin: 0; font-family: Inter, 'Pretendard', -apple-system, sans-serif; color: var(--text-primary); background: var(--bg-base); height: 100vh; }
  .board { position: relative; height: 100vh; background-image: radial-gradient(circle, #D0D0C8 1px, transparent 1px); background-size: 16px 16px; background-color: #F5F5F0; overflow: hidden; }
  .topbar { position: absolute; top: 12px; left: 12px; right: 12px; background: #fff; border-radius: 12px; padding: 8px 16px; display: flex; align-items: center; gap: 12px; box-shadow: var(--shadow-md); z-index: 10; }
  .topbar .logo { width: 28px; height: 28px; background: #FFD02F; border-radius: 8px; display: grid; place-items: center; color: #050038; font-weight: 800; }
  .topbar h1 { margin: 0; font-size: 14px; font-weight: 600; }
  .toolbar { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); background: #fff; border-radius: 12px; padding: 8px 6px; display: flex; flex-direction: column; gap: 4px; box-shadow: var(--shadow-md); z-index: 10; }
  .toolbar .icon-btn { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; cursor: pointer; font-size: 16px; }
  .toolbar .icon-btn:hover { background: #F5F5F0; }
  .toolbar .icon-btn.active { background: #FFD02F; }
  .sticky { position: absolute; padding: 14px; border-radius: 2px; font-size: 14px; font-weight: 600; line-height: 1.35; box-shadow: var(--shadow-sticky); width: 140px; }
  .members { position: absolute; top: 16px; right: 28px; display: flex; gap: -8px; z-index: 11; }
  .members .avatar { width: 32px; height: 32px; border-radius: 50%; border: 3px solid #fff; margin-left: -8px; box-shadow: var(--shadow-sm); }
</style>

<div class="board">
  <header class="topbar">
    <div class="logo">M</div>
    <h1>Q3 Brainstorm</h1>
    <span style="color:var(--text-secondary); font-size:12px;">Sprint 24</span>
    <div class="members" style="position:static; margin-left:auto;">
      <span class="avatar" style="background:linear-gradient(135deg,#FF6F61,#FFD02F)"></span>
      <span class="avatar" style="background:linear-gradient(135deg,#4262FF,#A0E7E5)"></span>
      <span class="avatar" style="background:linear-gradient(135deg,#1AAD5C,#B4A0FF)"></span>
      <button class="btn btn-action" style="margin-left:12px;">Share</button>
    </div>
  </header>
  <aside class="toolbar">
    <div class="icon-btn active">↖</div>
    <div class="icon-btn">▭</div>
    <div class="icon-btn">✎</div>
    <div class="icon-btn">🟨</div>
    <div class="icon-btn">A</div>
    <div class="icon-btn">💬</div>
  </aside>
  <div class="sticky" style="background:#FFD02F; left: 180px; top: 120px; transform: rotate(-3deg);">디자인 시스템 v2 정리</div>
  <div class="sticky" style="background:#FF6F61; color:#fff; left: 360px; top: 100px; transform: rotate(2deg);">Onboarding 흐름 개선!</div>
  <div class="sticky" style="background:#A0E7E5; left: 220px; top: 280px; transform: rotate(-1deg);">대시보드 카드 정리</div>
  <div class="sticky" style="background:#B4A0FF; left: 460px; top: 320px; transform: rotate(3deg);">QA 일정 잡기 ⚠</div>
  <div class="sticky" style="background:#B4E197; left: 600px; top: 180px; transform: rotate(-2deg);">Q3 OKR 검토</div>
  <div style="position:absolute; left:50%; top:60%; transform:translate(-50%,-50%); font-size:36px; font-weight:800; color:#050038;">Sprint 24 🎯</div>
  <div style="position:absolute; left:300px; top:240px; width:18px; height:18px; border-radius:50%; background:#FF6F61; border:3px solid #fff; box-shadow:var(--shadow-sm);"></div>
</div>
```
