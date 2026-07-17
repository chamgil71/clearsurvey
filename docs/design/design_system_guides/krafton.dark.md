---
brand: KRAFTON
brand_ko: 크래프톤
slug: krafton
generated: 2026-06-08
source_type: product_observation
confidence: medium
is_official: false

region: korea
industry:
  - gaming
  - enterprise

color_tone: neutral
primary_color_hex: "#F6141E"
primary_color_name: "KRAFTON Red"
mood:
  - 담대함
  - 강렬한 대비
  - 절제된 미니멀

font_category: sans-serif
font_primary: Arial Bold / Pretendard
font_korean_supported: true

density: spacious
corner_style: sharp
flatness: flat

visual_style:
  - modern-minimal
  - brutalism

theme_modes:
  - light
  - dark

released_year: 2018
last_major_revision: 2024
signature_keyword: "흑백 고대비 캔버스 + KRAFTON 레드(#F6141E) 단일 강조 + 사선 평행사변형 모티프 — 데이터 중심 보고서의 담대한 톤"

card_tokens: |
  {
    "light": { "bg": "#FFFFFF", "surface": "#F2F2F2", "border": "#D9D9D9", "fg": "#111111", "fg_muted": "#5C5C5C", "accent": "#F6141E" },
    "dark":  { "bg": "#111111", "surface": "#1A1A1A", "border": "#2A2A2A", "fg": "#FFFFFF", "fg_muted": "#9A9A9A", "accent": "#F6141E" }
  }

hero_html: |
  <div style="font-family:Arial,'Helvetica Neue','Pretendard',-apple-system,sans-serif;background:#0E0E10;color:#FFFFFF;height:100%;display:grid;grid-template-rows:auto 1fr auto;letter-spacing:-0.01em;">
    <div style="padding:12px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #2A2A2A;">
      <span style="font:900 13px/1 Arial,sans-serif;letter-spacing:0.18em;">KRAFTON</span>
      <span style="margin-left:auto;display:flex;gap:3px;align-items:center;">
        <i style="display:block;width:9px;height:16px;background:#FFFFFF;transform:skewX(-20deg);"></i>
        <i style="display:block;width:9px;height:16px;background:#FFFFFF;transform:skewX(-20deg);"></i>
        <i style="display:block;width:9px;height:16px;background:#F6141E;transform:skewX(-20deg);"></i>
      </span>
    </div>
    <div style="padding:16px 14px;display:flex;flex-direction:column;justify-content:center;gap:4px;">
      <div style="font:700 10px/1 Arial,sans-serif;letter-spacing:0.22em;color:#FF3B43;text-transform:uppercase;">Revenue</div>
      <div style="font:900 38px/0.95 Arial,sans-serif;letter-spacing:-0.02em;">6,659<span style="font-size:15px;font-weight:700;color:#9A9A9A;"> 억원</span></div>
      <div style="font-size:10px;line-height:1.5;color:#9A9A9A;margin-top:4px;">2024년 1분기 — PUBG IP 기반 역대 최대 분기 매출 경신</div>
    </div>
    <div style="border-top:1px solid #2A2A2A;">
      <div style="display:flex;font:700 9px/1 Arial,sans-serif;background:#FFFFFF;color:#111111;">
        <span style="flex:2;padding:6px 10px;">항목</span>
        <span style="flex:1;padding:6px 10px;text-align:right;">1Q24</span>
        <span style="flex:1;padding:6px 8px;text-align:right;color:#F6141E;">YoY</span>
      </div>
      <div style="display:flex;font-size:9px;color:#FFFFFF;border-bottom:1px solid #2A2A2A;">
        <span style="flex:2;padding:5px 10px;">영업이익</span>
        <span style="flex:1;padding:5px 10px;text-align:right;font-weight:700;">3,105</span>
        <span style="flex:1;padding:5px 8px;text-align:right;color:#9A9A9A;">9.7%</span>
      </div>
    </div>
  </div>

sources:
  - https://www.krafton.com/
  - https://ir.krafton.com/
  - https://www.krafton.com/en/csr/
---

### ① 브랜드 DNA
- **브랜드명**: KRAFTON (크래프톤)
- **한 줄 정체성**: PUBG IP를 중심으로 한 글로벌 게임 제작·서비스 기업 — 'Production House' 철학을 내건 한국 대표 게임사
- **공식 디자인 철학**: "담대한 도전(Bold Challenge)" — 자신감 있되 과장하지 않고, 수치와 핵심 메시지를 전면에 두는 데이터 중심 미니멀리즘
- **시그니처 요소 1개**: 흑백 고대비 캔버스 위에 KRAFTON 레드(#F6141E) 단 한 점의 강조 + 로고 사선에서 파생된 기울어진 평행사변형(Slash) 모티프

### ② 톤 & 무드
- **핵심 키워드 3개**: 담대함, 강렬한 대비, 절제된 미니멀
- **무드 설명**: 흰 바탕에 검정, 또는 검정 바탕에 흰 글자 — 중간 톤을 배제한 명확한 흑·백 대비가 기본이다. 강조색은 면적의 10% 이내로 절제해 한 섹션에 하나만 쓴다. 큰 영문 대문자 디스플레이와 큰 숫자가 시선을 잡고, 부연 설명은 작고 차분하게 물러선다.
- **비주얼 스타일**: 모던 미니멀 + 살짝의 브루털리즘 (큰 영문 디스플레이 · 하드 엣지 · 검정 블록)
- **밀도(Density)**: Spacious — 큰 KPI 숫자와 넉넉한 여백, 표는 조밀하되 페이지는 비워 강조를 살림
- **모서리 성향**: Sharp(0~2px) — 사선 모티프와 검정 블록의 직각/예각이 시그니처
- **평면성**: Flat — 그림자를 거의 쓰지 않고 색면 대비와 괘선으로 위계를 만든다

### ③ 컬러 시스템 (CSS 변수)

```css
:root {
  /* Primary - KRAFTON Red 9단계 (다크 대비 위해 램프 반전 · 시그니처 강조 유지) */
  --color-primary-50:  #3A0407;   /* 가장 어두운 강조 배경 */
  --color-primary-100: #5A050A;
  --color-primary-200: #8C060F;
  --color-primary-300: #BE0813;
  --color-primary-400: #E11019;
  --color-primary-500: #F6141E;   /* KRAFTON Red — 시그니처 강조 */
  --color-primary-600: #FF3B43;   /* hover (다크에서 밝게) */
  --color-primary-700: #FF6A70;   /* active */
  --color-primary-800: #FF9CA0;
  --color-primary-900: #FFD0D2;

  /* Secondary - Signal Amber (실적/IR 강조) */
  --color-secondary-300: #B98600;
  --color-secondary-500: #F5B400;  /* Signal Amber — 핵심 수치 하이라이트 */
  --color-secondary-700: #FFD25E;

  /* CSR 영역 컬러 (영역별 보고서에서만 제한적 사용 · 다크 대비 위해 라이트니스 상향) */
  --color-csr-green:  #3FE074;     /* Digital Empowerment */
  --color-csr-blue:   #5C9DFF;     /* Shared Growth */
  --color-csr-purple: #A586FF;     /* Inclusive Universe */

  /* Neutral - 흑백 램프 반전 (브랜드 시그니처) */
  --color-neutral-0:    #0A0A0B;   /* Ink Black */
  --color-neutral-50:   #0E0E10;
  --color-neutral-100:  #1A1A1A;   /* Dark Fill — 표 줄무늬/강조 박스 */
  --color-neutral-200:  #242424;
  --color-neutral-300:  #2E2E2E;   /* Line Dark — 괘선/구분선 */
  --color-neutral-500:  #9A9A9A;   /* Sub Gray — 캡션/단위 */
  --color-neutral-700:  #C9C9C9;
  --color-neutral-800:  #E6E6E6;   /* Body Ink — 본문 텍스트 */
  --color-neutral-900:  #F5F5F5;   /* KRAFTON Light — 표지/헤더(반전 블록) */
  --color-neutral-1000: #FFFFFF;

  /* Semantic */
  --color-success-bg: #122B1A;   --color-success-fg: #4ED884;  /* 증가/흑자 */
  --color-warning-bg: #2E2408;   --color-warning-fg: #F5B400;  /* 주의 (앰버) */
  --color-error-bg:   #320A0D;   --color-error-fg:   #FF5860;  /* 감소/적자 */
  --color-info-bg:    #0E1E33;   --color-info-fg:    #5C9DFF;  /* 참고 */

  /* Surface (배경 위계) */
  --bg-base:     #0E0E10;   /* 페이지 기본 (다크 보고서) */
  --bg-subtle:   #1A1A1A;   /* 섹션 구분/표 줄무늬 */
  --bg-elevated: #1A1A1A;   /* 카드 */
  --bg-overlay:  rgba(0,0,0,0.72);   /* 모달/드롭다운 */

  /* Text 위계 */
  --text-primary:    #E6E6E6;   /* 본문 (Body Ink) */
  --text-secondary:  #9A9A9A;   /* 보조 (Sub Gray) */
  --text-tertiary:   #6E6E6E;   /* 캡션/단위 */
  --text-on-primary: #FFFFFF;   /* 레드/라이트블록 위 */
  --text-disabled:   #555555;

  /* Border */
  --border-default: #2A2A2A;   /* Line Dark — 표 괘선 */
  --border-subtle:  #222222;
  --border-strong:  #FFFFFF;   /* 라이트 강조 테두리/세로 컬러바 */
  --border-focus:   #FF3B43;   /* 포커스 링 (레드) */
}

[data-theme="light"] {
  /* Primary - KRAFTON Red 9단계 (시그니처 강조) */
  --color-primary-50:  #FEE8E9;   /* 연한 강조 배경 */
  --color-primary-100: #FCC5C8;
  --color-primary-200: #FA9499;
  --color-primary-300: #F8636B;
  --color-primary-400: #F73C45;
  --color-primary-500: #F6141E;   /* KRAFTON Red — 시그니처 강조 */
  --color-primary-600: #D60710;   /* hover */
  --color-primary-700: #A8060D;   /* active */
  --color-primary-800: #7A0409;
  --color-primary-900: #4D0206;

  /* Secondary - Signal Amber (실적/IR 강조) */
  --color-secondary-300: #FCD66B;
  --color-secondary-500: #F5B400;  /* Signal Amber — 핵심 수치 하이라이트 */
  --color-secondary-700: #B98600;

  /* CSR 영역 컬러 (영역별 보고서에서만 제한적 사용) */
  --color-csr-green:  #2BD15E;     /* Digital Empowerment */
  --color-csr-blue:   #2D7FF9;     /* Shared Growth */
  --color-csr-purple: #8B5CF6;     /* Inclusive Universe */

  /* Neutral - 흑백 램프 (브랜드 시그니처) */
  --color-neutral-0:    #FFFFFF;   /* Paper White */
  --color-neutral-50:   #FAFAFA;
  --color-neutral-100:  #F2F2F2;   /* Light Fill — 표 줄무늬/강조 박스 */
  --color-neutral-200:  #E6E6E6;
  --color-neutral-300:  #D9D9D9;   /* Line Gray — 괘선/구분선 */
  --color-neutral-500:  #5C5C5C;   /* Sub Gray — 캡션/단위 */
  --color-neutral-700:  #2E2E2E;
  --color-neutral-800:  #1A1A1A;   /* Body Ink — 본문 텍스트 */
  --color-neutral-900:  #111111;   /* KRAFTON Black — 표지/헤더 */
  --color-neutral-1000: #000000;

  /* Semantic */
  --color-success-bg: #E6F9EE;   --color-success-fg: #1B9E45;  /* 증가/흑자 */
  --color-warning-bg: #FEF6E0;   --color-warning-fg: #B98600;  /* 주의 (앰버) */
  --color-error-bg:   #FEE8E9;   --color-error-fg:   #D60710;  /* 감소/적자 */
  --color-info-bg:    #E8F1FE;   --color-info-fg:    #2D7FF9;  /* 참고 */

  /* Surface (배경 위계) */
  --bg-base:     #FFFFFF;   /* 페이지 기본 (라이트 보고서) */
  --bg-subtle:   #F2F2F2;   /* 섹션 구분/표 줄무늬 */
  --bg-elevated: #FFFFFF;   /* 카드 */
  --bg-overlay:  rgba(17,17,17,0.55);   /* 모달/드롭다운 */

  /* Text 위계 */
  --text-primary:    #1A1A1A;   /* 본문 (Body Ink) */
  --text-secondary:  #5C5C5C;   /* 보조 (Sub Gray) */
  --text-tertiary:   #8A8A8A;   /* 캡션/단위 */
  --text-on-primary: #FFFFFF;   /* 레드/블랙 위 */
  --text-disabled:   #B5B5B5;

  /* Border */
  --border-default: #D9D9D9;   /* Line Gray — 표 괘선 */
  --border-subtle:  #E6E6E6;
  --border-strong:  #111111;   /* 블랙 강조 테두리/세로 컬러바 */
  --border-focus:   #F6141E;   /* 포커스 링 (레드) */
}
```

### ④ 타이포그래피
- **폰트 페어링**:
  - 한글: Pretendard (OFL) — 미설치 환경 폴백 맑은 고딕(Malgun Gothic)
  - 영문/숫자: Arial · Helvetica 계열 Bold — 핵심 헤드라인은 대문자(UPPERCASE) 처리
  - **원칙**: 한 문서에 2종 이내(한글 + 영문)로 통일
- **위계** (font-size / font-weight / line-height / letter-spacing):
  - Display (영문 대문자): 44px / 800 / 1.0 / +0.03em (UPPERCASE)
  - H1 (섹션 제목): 28px / 700 / 1.15 / -0.01em — 좌측 컬러바 + 번호
  - H2 (소제목): 20px / 700 / 1.25 / -0.005em
  - H3: 16px / 700 / 1.3 / 0
  - Body Large: 17px / 400 / 1.6 / 0
  - Body: 15px / 400 / 1.6 / 0
  - Body Small: 13px / 400 / 1.5 / 0
  - Caption · 단위: 12px / 500 / 1.4 / +0.01em (Sub Gray)
  - KPI (핵심 수치): 40px / 800 / 1.0 / -0.02em (영문/숫자, 강조색 가능)

### ⑤ 스페이싱
- **Base unit**: 4px
- **토큰**:
  ```css
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  ```
- **Container**: max-width 1200px (기본), 900px (좁은 보고서 본문) / 좌우 패딩 30px

### ⑥ Border Radius
```css
--radius-none: 0;       /* 표지·표 헤더·검정 블록 (기본 — 하드 엣지) */
--radius-sm:   2px;     /* 버튼·인풋 */
--radius-md:   4px;     /* 카드 */
--radius-lg:   8px;     /* 강조 박스 (예외적) */
--radius-xl:   12px;
--radius-full: 9999px;  /* 뱃지/필 (제한적) */
```
> KRAFTON은 Sharp 성향 — 기본은 0~2px. 둥근 모서리는 강조 박스 등 예외에만 사용.

### ⑦ Shadow / Elevation
```css
--shadow-none: none;                            /* 기본 — 평면 + 괘선으로 위계 */
--shadow-sm:   0 1px 2px rgba(0,0,0,0.40);      /* 가벼운 카드 분리 */
--shadow-md:   0 2px 8px rgba(0,0,0,0.50);      /* 카드 hover */
--shadow-lg:   0 8px 24px rgba(0,0,0,0.60);     /* 모달 */
--shadow-xl:   0 16px 40px rgba(0,0,0,0.70);    /* 풀스크린 dialog */
```
> Flat 브랜드 — 그림자보다 `--border-strong`(라이트) 테두리와 색면 대비를 우선한다.

### ⑧ Iconography
- **스타일**: Outline (정밀, 기하학적)
- **Stroke 굵기**: 2px
- **모서리 처리**: Square (사선/직각 모티프와 일치)
- **추천 라이브러리**: Lucide / Tabler

### ⑨ 컴포넌트 가이드

**Button** — Primary는 KRAFTON Black 고대비, 레드는 단일 강조(accent)로 절제 사용
```css
.btn {
  font: 700 14px/1 Arial, 'Pretendard', -apple-system, sans-serif;
  border-radius: var(--radius-sm);
  height: 44px; padding: 0 22px;
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid transparent;
  letter-spacing: 0.01em;
  transition: background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
}
.btn-primary { background: var(--color-neutral-900); color: #0E0E10; }    /* 라이트 고대비(반전 블록) */
.btn-primary:hover { background: #FFFFFF; }
.btn-primary:active { background: #FFFFFF; transform: translateY(1px); }
.btn-primary:disabled { background: var(--color-neutral-200); color: var(--text-disabled); }
.btn-primary.is-loading { color: transparent; position: relative; }

.btn-accent { background: var(--color-primary-500); color: #fff; }       /* 레드 — 페이지당 1개 */
.btn-accent:hover { background: var(--color-primary-600); }
.btn-accent:active { background: var(--color-primary-700); }

.btn-secondary { background: transparent; color: var(--text-primary); border-color: var(--border-strong); }
.btn-secondary:hover { background: var(--color-neutral-100); }

.btn-ghost { background: transparent; color: var(--text-primary); }
.btn-ghost:hover { background: var(--color-neutral-100); }

.btn-danger { background: var(--color-error-fg); color: #fff; }
```

**Input** — Default / Focus / Error / Disabled
```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  height: 44px; padding: 0 14px;
  font: 400 15px/1.4 'Pretendard', Arial, sans-serif;
  color: var(--text-primary);
}
.input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 2px rgba(255,59,67,0.30); }
.input.is-error { border-color: var(--color-error-fg); }
.input:disabled { background: var(--color-neutral-100); color: var(--text-disabled); }
```

**Card** — 기본형 / 강조형 / Outlined
```css
.card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 24px; }
.card-emphasis { border: 2px solid var(--border-strong); }              /* 라이트 강조 */
.card-outlined { background: transparent; box-shadow: none; }
.card-kpi { background: var(--color-neutral-900); color: #0E0E10; border: 0; }  /* KPI 블록 (반전) */
.card-kpi .num { font: 800 40px/1 Arial, sans-serif; color: var(--color-secondary-700); }
```

**Badge / Tag** — Solid / Subtle / Outline
```css
.tag { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: var(--radius-sm); font: 700 12px/1.4 Arial, sans-serif; letter-spacing: 0.02em; text-transform: uppercase; }
.tag-solid   { background: var(--color-primary-500); color: #fff; }
.tag-subtle  { background: var(--color-primary-50); color: var(--color-primary-700); }
.tag-outline { border: 1px solid var(--border-strong); color: var(--text-primary); }
.tag-amber   { background: var(--color-secondary-500); color: #111; }
```

**Navigation** — 머리글(헤더) 1종: 좌측 워드마크 + 우측 문서명 + 얇은 하단선
```css
.topnav {
  display: flex; align-items: center; gap: 24px;
  padding: 16px 30px;
  background: var(--bg-base);
  border-bottom: 1px solid var(--border-default);
}
.topnav .wordmark { font: 900 16px/1 Arial, sans-serif; letter-spacing: 0.18em; color: var(--text-primary); }
.topnav .doc-name { margin-left: auto; font: 500 13px/1 'Pretendard', sans-serif; color: var(--text-secondary); }
```

### ⑩ Motion
```css
--duration-fast: 120ms;
--duration-base: 240ms;
--duration-slow: 400ms;
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```
> 절제된 모션 — 짧고 단호하게. 과한 바운스/이징은 지양.

### ⑪ Anti-patterns

이 브랜드가 회피하는 패턴 5개:
1. 중간 톤의 모호한 회색 배경을 기본 캔버스로 사용 금지 — 흰색 또는 KRAFTON Black 고대비가 원칙
2. 한 섹션에 강조색을 2개 이상 흩뿌리기 금지 — Single Accent, 페이지당 강조색 1개
3. 사선(Slash) 평행사변형 모티프를 회전·왜곡하거나 본문 텍스트 위에 겹치기 금지
4. 성과를 추상적 형용사로만 표현 금지 — 반드시 구체적 숫자(QoQ/YoY)로 제시
5. 둥근 모서리·과한 그림자로 부드럽게 처리 금지 — 하드 엣지와 색면 대비를 우선

### ⑫ 시그니처 적용 예시

위 시스템을 적용한 보고서형 Hero + KPI 카드 3개 + 데이터 테이블:

```html
<style>
  .krf { --primary:#F6141E; --amber:#F5B400; --ink:#E6E6E6; --black:#0E0E10; --line:#2A2A2A; --fill:#1A1A1A; --sub:#9A9A9A;
    font-family: Arial, 'Helvetica Neue', 'Pretendard', -apple-system, sans-serif; color: var(--ink); background:#0E0E10; }
  .krf * { box-sizing: border-box; }
  .krf .hero { background: var(--black); color:#fff; padding: 40px 30px; position: relative; overflow: hidden; }
  .krf .slash { position:absolute; top:24px; right:30px; display:flex; gap:6px; }
  .krf .slash i { display:block; width:16px; height:38px; background:#fff; transform: skewX(-20deg); }
  .krf .slash i:last-child { background: var(--primary); }
  .krf .eyebrow { font: 700 12px/1 Arial,sans-serif; letter-spacing:0.24em; color: #FF3B43; text-transform: uppercase; margin-bottom: 14px; }
  .krf .hero h1 { font: 800 44px/1.0 Arial,sans-serif; letter-spacing:0.02em; text-transform: uppercase; margin: 0 0 12px; }
  .krf .hero p { max-width: 520px; font-size: 14px; line-height: 1.6; color:#9A9A9A; margin: 0; }
  .krf .colorbar { display:flex; align-items:center; gap:14px; margin: 0 0 8px; }
  .krf .colorbar .bar { width: 4px; height: 26px; background: var(--primary); }
  .krf .colorbar .no { font: 800 15px/1 Arial,sans-serif; color: #FF3B43; }
  .krf .colorbar .ttl { font: 700 20px/1 'Pretendard',sans-serif; color: var(--ink); }
  .krf .kpis { display:grid; grid-template-columns: repeat(3,1fr); gap: 16px; padding: 30px; }
  .krf .kpi { background: var(--fill); color:#fff; padding: 22px; border-radius: 4px; border:1px solid var(--line); }
  .krf .kpi .lab { font:700 11px/1 Arial,sans-serif; letter-spacing:0.18em; text-transform:uppercase; color:#9A9A9A; }
  .krf .kpi .num { font: 800 40px/1.0 Arial,sans-serif; letter-spacing:-0.02em; margin: 10px 0 6px; }
  .krf .kpi.green .num { color:#3FE074; }
  .krf .kpi.amber .num { color: var(--amber); }
  .krf .kpi.red .num { color: #FF3B43; }
  .krf .kpi .sub { font-size: 12px; color:#9A9A9A; line-height:1.5; }
  .krf .tblwrap { padding: 0 30px 36px; }
  .krf table { width:100%; border-collapse: collapse; font-size: 13px; }
  .krf thead th { background: #F5F5F5; color:#0E0E10; font-weight:700; text-align:right; padding: 11px 14px; }
  .krf thead th:first-child { text-align:left; }
  .krf tbody td { padding: 10px 14px; text-align:right; border-bottom:1px solid var(--line); }
  .krf tbody td:first-child { text-align:left; font-weight:700; }
  .krf tbody tr:nth-child(even) { background: var(--fill); }
  .krf .col-now { background: rgba(246,20,30,0.16); font-weight:800; }
  .krf .neg { color: var(--sub); }
</style>

<div class="krf">
  <section class="hero">
    <div class="slash"><i></i><i></i><i></i></div>
    <div class="eyebrow">FY2024 · 1Q Performance</div>
    <h1>Bold Challenge</h1>
    <p>PUBG IP를 기반으로 역대 최대 분기 매출을 경신했습니다. 수치로 말하고, 핵심을 먼저 둡니다.</p>
  </section>

  <div class="colorbar"><span class="bar"></span><span class="no">01</span><span class="ttl">핵심 성과 하이라이트</span></div>

  <div class="kpis">
    <div class="kpi red"><div class="lab">Revenue</div><div class="num">6,659<span style="font-size:16px"> 억</span></div><div class="sub">YoY +23.6% · 역대 최대 분기</div></div>
    <div class="kpi amber"><div class="lab">Operating Profit</div><div class="num">3,105<span style="font-size:16px"> 억</span></div><div class="sub">QoQ +89.0%</div></div>
    <div class="kpi green"><div class="lab">Talent</div><div class="num">1,384<span style="font-size:16px"> 명</span></div><div class="sub">디지털·AI 인재 양성</div></div>
  </div>

  <div class="tblwrap">
    <table>
      <thead><tr><th>(단위: 십억원)</th><th>1Q23</th><th>4Q23</th><th class="col-now">1Q24</th><th>QoQ</th><th>YoY</th></tr></thead>
      <tbody>
        <tr><td>매출액</td><td>538.7</td><td>534.6</td><td class="col-now">665.9</td><td>24.6%</td><td>23.6%</td></tr>
        <tr><td>영업이익</td><td>283.0</td><td>164.3</td><td class="col-now">310.5</td><td>89.0%</td><td>9.7%</td></tr>
        <tr><td>당기순이익</td><td>267.2</td><td class="neg">(13.2)</td><td class="col-now">348.6</td><td>흑자전환</td><td>30.5%</td></tr>
      </tbody>
    </table>
  </div>
</div>
```
