# 디자인시스템 가이드 — ClearSurvey

> 이 문서는 ClearSurvey의 `legacy-dashboard.css` → Tailwind v4 + shadcn/ui 마이그레이션 경험을 바탕으로,
> 디자인시스템 구축의 이론·실전·최신 동향을 정리합니다.

---

## 1. 기존 CSS 디자인시스템의 문제점

### 1-1. 이중 진실 소스 (Dual Source of Truth)

```
legacy-dashboard.css   — --bg-primary, --accent, --border (커스텀 변수)
styles.css (Tailwind)  — --background, --primary, --border (shadcn 변수)
```

같은 이름(`--border`)이 두 파일에 정의되어 우선순위 충돌.  
어느 값이 실제로 적용되는지 추적이 불가능해지며 예측 불가능한 버그 발생.

### 1-2. 다크모드 토글 방식 이중화

```css
/* legacy-dashboard.css */
[data-theme="dark"] { --bg-primary: #0f1724; }

/* styles.css (Tailwind/shadcn) */
.dark { --background: oklch(0.129 0.042 264.695); }
```

```ts
// index.tsx — 두 가지 방식을 동시에 적용해야 했음
document.documentElement.dataset.theme = "dark";          // 레거시 CSS용
document.documentElement.classList.toggle("dark", true);  // shadcn용
```

다크모드 토글 코드가 두 라인 필요. 어느 한쪽만 빠지면 일부 컴포넌트가 미반영.

### 1-3. 하드코딩된 팔레트 색상

```tsx
// admin.tsx (마이그레이션 전)
<div className="bg-white border-slate-200 text-slate-800">
<div className="text-blue-600 border-blue-200">
```

`bg-white`는 `.dark` 클래스에 반응하지 않음. shadcn의 다크모드를 적용해도  
이 요소들은 항상 흰 배경·검은 글자로 고정 → **다크모드 무효화**.

### 1-4. 매직 넘버 의존

```tsx
// GuideDrawer.tsx (마이그레이션 전)
<div style={{ position: "fixed", top: "56px" }}>
```

헤더 높이가 56px임을 하드코딩. 헤더 높이가 바뀌면 드로어가 헤더 뒤로 숨거나 겹침.  
레이아웃 변경이 연쇄적으로 수동 수정을 요구.

### 1-5. `!important`로 덮는 모바일 대응

```css
/* @media (max-width: 640px) */
.chart-card { grid-column: auto !important; }
```

`ChartCard.tsx`의 인라인 스타일 `gridColumn: "span 2"`를 CSS에서 `!important`로 억제.  
인라인 스타일이 있는 한 CSS 계층에서는 `!important` 없이 재정의 불가능.  
올바른 해법은 인라인 스타일을 제거하고 Tailwind `col-span-2 max-sm:col-span-1`로 교체.

### 1-6. CSS 클래스가 테스트 선택자로 사용

```ts
// E2E 테스트 (마이그레이션 전)
page.waitForSelector(".header")
page.locator(".theme-toggle")
page.locator(".tab-nav")
```

스타일용 클래스가 테스트 선택자로 이중 역할. CSS 클래스를 바꾸면 테스트가 깨짐.  
관심사 분리 위반 — 스타일과 테스트가 결합.

### 1-7. 컴포넌트 간 시각적 불일치

`index` 페이지: `legacy-dashboard.css` 기반 (파란 계열 accent)  
`admin` 페이지: Tailwind + shadcn (slate 계열 primary)  

동일 프로젝트인데 두 페이지의 폰트, 버튼 스타일, 카드 형태가 달라 사용자 경험 불일치.

---

## 2. Tailwind + shadcn/ui로 교체한 이유

### 2-1. 단일 시맨틱 토큰 계층

```css
/* styles.css — 하나의 진실 소스 */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.208 0.042 265.755);
  --border: oklch(0.929 0.013 255.508);
}
.dark {
  --background: oklch(0.129 0.042 264.695);
  --primary: oklch(0.929 0.013 255.508);
}
```

모든 컴포넌트가 `bg-background`, `text-foreground`, `border-border`를 사용.  
다크모드는 `:root` → `.dark` 값 교체만으로 전체 적용.

### 2-2. Tailwind v4의 CSS-first 구성

```css
@theme inline {
  --color-primary: var(--primary);   /* CSS 변수 → 유틸리티 클래스 자동 매핑 */
  --color-border:  var(--border);
}
```

`tailwind.config.js` 없이 CSS 파일 하나로 설계 토큰 정의.  
토큰 추가 시 CSS만 수정하면 `bg-{token}`, `text-{token}` 클래스 자동 생성.

### 2-3. shadcn/ui의 복사 붙여넣기 모델

shadcn은 npm 패키지가 아니라 **소스 코드를 직접 복사**해 쓰는 모델.  
- 라이브러리 업데이트에 종속되지 않음
- 컴포넌트를 자유롭게 수정 가능
- Radix UI 프리미티브 기반 → 접근성(a11y) 내장

### 2-4. 접근성 내장 (Radix UI)

```tsx
// Sheet (사이드 드로어) — 포커스 트랩, Escape 닫기, aria 자동 처리
<Sheet open={isOpen} onOpenChange={onClose}>
  <SheetContent>...</SheetContent>
</Sheet>
```

직접 구현하면 누락되기 쉬운 `aria-modal`, `focus-trap`, `Escape` 바인딩이  
Radix 프리미티브에 내장되어 있어 별도 구현 불필요.

### 2-5. 번들 최적화

Tailwind의 JIT 엔진은 실제 사용된 클래스만 CSS에 포함.  
레거시 CSS 방식은 사용 여부와 무관하게 모든 규칙이 번들에 포함됨.

---

## 3. Tailwind 장단점

### 장점

| 항목 | 설명 |
|------|------|
| **빠른 개발 속도** | 클래스 이름을 외우면 CSS 파일 전환 없이 바로 스타일링 |
| **디자인 토큰 일관성** | `gap-3`, `text-sm`, `rounded-lg` 등 스케일이 고정되어 임의 값 방지 |
| **반응형 직관적** | `sm:`, `md:`, `lg:` 접두사로 인라인 반응형 |
| **다크모드 단순** | `dark:` 접두사만 추가. 별도 미디어쿼리 불필요 |
| **번들 크기 최소화** | 미사용 클래스 자동 제거 (PurgeCSS 내장) |
| **타입 힌트** | Tailwind Intellisense로 자동완성·유효성 검사 |

### 단점

| 항목 | 설명 |
|------|------|
| **HTML 가독성 저하** | 긴 클래스 문자열이 마크업을 복잡하게 만듦 |
| **동적 클래스 주의** | `bg-${color}` 같은 동적 생성 클래스는 PurgeCSS가 제거할 수 있음 → `safelist` 또는 `cn()` 사용 |
| **학습 곡선** | 기존 CSS 개발자에게 다른 사고방식 요구 |
| **디자이너 협업** | Figma 디자이너는 Tailwind 클래스를 직접 쓰지 않음 → 코드-디자인 간극 존재 |
| **arbitrary value 남용** | `w-[137px]` 같은 임의 값이 늘면 토큰 일관성 무너짐 |

### 올바른 사용 패턴

```tsx
// ❌ 안티패턴 — 동적 클래스 문자열 조합
<div className={`text-${color}-500`}>   // PurgeCSS에 의해 제거될 수 있음

// ✅ 올바른 패턴 — cn() + 완전한 클래스명
import { cn } from "@/lib/utils";
<div className={cn(
  "base-class",
  isActive && "text-primary",
  isError  && "text-destructive",
)}>
```

---

## 4. 최신 디자인시스템 구축 방향과 체계구조

### 4-1. 3계층 토큰 구조

```
Layer 1 — Primitive Tokens (원자값)
  --color-blue-500: #3b82f6
  --color-slate-900: #0f172a

Layer 2 — Semantic Tokens (의미값)      ← 핵심 계층
  --primary: var(--color-blue-600)
  --background: var(--color-white)
  --destructive: var(--color-red-500)

Layer 3 — Component Tokens (컴포넌트값)
  --button-primary-bg: var(--primary)
  --card-border: var(--border)
```

**의미값(Semantic)** 계층을 중심으로 설계해야 다크모드·테마 교체가  
컴포넌트 코드 수정 없이 토큰 값 교체만으로 가능.

### 4-2. oklch 색상 공간 (2024+ 트렌드)

```css
/* shadcn 기본값 — oklch 사용 */
--primary: oklch(0.208 0.042 265.755);
```

- **장점**: 지각적으로 균일한 밝기. 어두운 색과 밝은 색의 대비를 수식으로 예측 가능
- **실용**: 다크모드 토큰 설계 시 밝기(L값)만 반전하면 일관된 색상 대비 유지
- **지원**: Chrome 111+, Safari 16.2+, Firefox 113+ (2024년 기준 모든 최신 브라우저 지원)

### 4-3. 컴포넌트 계층 구조

```
┌─────────────────────────────────────────┐
│  Pages / Routes                         │  라우팅 + 데이터 조합
├─────────────────────────────────────────┤
│  Feature Components                     │  도메인 로직 포함 (FilterBar, KpiRow 등)
├─────────────────────────────────────────┤
│  UI Components (shadcn 레이어)          │  Button, Card, Sheet, Select 등
├─────────────────────────────────────────┤
│  Primitive Components (Radix 레이어)    │  접근성·인터랙션 로직
├─────────────────────────────────────────┤
│  Design Tokens (CSS 변수)              │  색상·타이포·간격·반경
└─────────────────────────────────────────┘
```

### 4-4. 파일 구조 권장

```
src/
  styles.css              ← 토큰 정의 (유일한 디자인 진실 소스)
  lib/
    utils.ts              ← cn() 유틸리티
  components/
    ui/                   ← shadcn 컴포넌트 (수정 가능한 소스 코드)
      button.tsx
      card.tsx
      sheet.tsx
    dashboard/            ← 도메인 Feature 컴포넌트
      KpiRow.tsx
      ChartCard.tsx
    manager/              ← 관리자 Feature 컴포넌트
```

### 4-5. 다크모드 설계 원칙

```css
/* ❌ 피해야 할 패턴 */
.card { background: white; }             /* 다크모드 무반응 */
.card { background: var(--bg-card); }   /* 레거시 커스텀 변수 */

/* ✅ 올바른 패턴 */
.card { background: var(--card); }      /* shadcn 시맨틱 토큰 */
/* 또는 Tailwind */
<div className="bg-card">              {/* → var(--card) → 자동 다크모드 */}
```

**규칙**: 컴포넌트 스타일에서 `white`, `black`, `#hex` 또는 팔레트 클래스(`slate-200`, `blue-600`)를  
직접 쓰면 다크모드가 깨진다. **항상 시맨틱 토큰을 경유한다.**

예외: 터미널 배경, PDF 생성용 HTML처럼 의도적으로 고정 색상이 필요한 경우.

### 4-6. 접근성(a11y) 체크리스트

- [ ] 색상 대비 WCAG 2.1 AA 기준 (4.5:1 일반 텍스트, 3:1 대형 텍스트)
- [ ] 모달/드로어: 포커스 트랩, Escape 닫기, `aria-modal`
- [ ] 폼 요소: `label`-`input` 연결, 오류 메시지 `aria-describedby`
- [ ] 아이콘 버튼: `aria-label` 또는 시각적으로 숨겨진 텍스트
- [ ] 키보드 내비게이션: Tab 순서 논리적, 포커스 링 visible

### 4-7. 최신 동향 (2024~2025)

| 동향 | 설명 |
|------|------|
| **CSS Layer (`@layer`)** | 스타일 우선순위를 명시적으로 관리. Tailwind v4가 기본 채택 |
| **Container Queries** | 부모 컨테이너 크기 기반 반응형. `@container` + Tailwind `@/sm:` |
| **Design Token 표준화** | W3C Design Tokens Community Group의 JSON 포맷 표준화 진행 중 |
| **Zero-runtime CSS-in-JS** | Linaria, Vanilla Extract 등 — 런타임 JS 없이 정적 CSS 생성 |
| **Figma Variables → Token** | Figma 변수를 JSON으로 내보내 코드 토큰과 동기화 (Tokens Studio 등) |
| **shadcn/ui Registry** | 컴포넌트를 직접 URL로 설치 (`npx shadcn add`) — 패키지 없는 배포 |

---

## 5. 디자인시스템 구축 프롬프트

다음 프롬프트를 AI 코딩 어시스턴트에게 전달하면 이 프로젝트 기준에 맞는  
디자인시스템을 일관성 있게 구축할 수 있습니다.

---

### 5-1. 신규 프로젝트 디자인시스템 설계 프롬프트

```
이 프로젝트의 프론트엔드 디자인시스템을 구축한다.
기술 스택: React + TypeScript + Tailwind CSS v4 + shadcn/ui (New York style, slate base)

[디자인 토큰 규칙]
- 색상은 반드시 시맨틱 토큰을 사용한다: bg-background, bg-card, text-foreground,
  text-muted-foreground, text-primary, border-border, text-destructive
- 팔레트 클래스(bg-white, text-slate-800, border-blue-200 등)는 컴포넌트 스타일에 절대 사용하지 않는다
- 예외: 터미널·PDF 등 의도적 고정색이 필요한 경우만 팔레트 허용하고 주석으로 이유를 명시

[다크모드 규칙]
- 다크모드는 .dark 클래스 기반 단일 방식만 사용한다
- data-theme 속성 방식은 사용하지 않는다
- 토글 코드: document.documentElement.classList.toggle("dark", isDark)

[컴포넌트 규칙]
- UI 컴포넌트는 shadcn/ui 컴포넌트를 우선 사용한다
- 레이아웃은 Tailwind 유틸리티 클래스로 구성한다
- 동적 클래스 조합은 cn() 유틸리티를 사용한다: cn("base", condition && "modifier")
- 인라인 style 속성은 동적 계산값(chartHeight, transform 등)에만 허용한다
- position:fixed 와 top/left 매직 넘버는 shadcn Sheet/Dialog/Popover로 대체한다

[접근성 규칙]
- 아이콘만 있는 버튼에는 반드시 title 또는 aria-label을 부여한다
- 모달·드로어는 shadcn Sheet/Dialog를 사용해 포커스 트랩과 Escape 닫기를 보장한다
- 폼 select는 shadcn Select를 우선 사용한다
  (테스트에서 getAllByRole("combobox") + user.selectOptions() 필요 시 네이티브 select 유지)

[테스트 선택자 규칙]
- E2E/unit 테스트에서 스타일용 CSS 클래스를 선택자로 사용하지 않는다
- 선택자 우선순위: role > aria-label/title > data-testid > 시맨틱 HTML 요소
- 예: page.locator("header"), page.locator("button[title='닫기']"), page.getByRole("dialog")

[금지 패턴]
- ❌ style={{ background: "var(--bg-primary)" }}   (레거시 커스텀 변수)
- ❌ className="bg-white border-slate-200"          (팔레트 하드코딩)
- ❌ style={{ top: "56px" }}                        (레이아웃 매직 넘버)
- ❌ className={`text-${color}-500`}               (동적 클래스 문자열)
- ❌ .btn-ghost { ... }  in global CSS             (전역 유틸리티 클래스 CSS 정의)
```

---

### 5-2. 기존 레거시 CSS → Tailwind 마이그레이션 프롬프트

```
이 프로젝트의 legacy CSS 파일을 Tailwind v4 + shadcn/ui로 마이그레이션한다.

[분석 단계 — 구현 전 반드시 수행]
1. 레거시 CSS 파일을 읽고 정의된 CSS 변수 목록을 추출한다
2. shadcn styles.css의 시맨틱 토큰과 매핑 테이블을 작성한다
   (예: --bg-primary → --background, --text-muted → --muted-foreground, --accent → --primary)
3. 레거시 CSS 클래스를 사용하는 모든 컴포넌트 파일을 열거한다
4. E2E/unit 테스트에서 CSS 클래스를 선택자로 사용하는 경우를 모두 찾는다
5. 다크모드 토글 방식(data-theme vs .dark)이 몇 가지인지 확인한다
6. 분석 결과를 docs/plan/ 폴더에 문서로 저장한 뒤 구현을 진행한다

[마이그레이션 우선순위]
Phase 1 (낮은 위험): 하드코딩된 팔레트 색상 → 시맨틱 토큰 교체, 단순 컴포넌트 shadcn 교체
Phase 2 (높은 위험): 레거시 CSS 파일 자체를 삭제, 레이아웃 컴포넌트 전면 교체
Phase 3: E2E 테스트 선택자 업데이트, 다크모드 통합 검증

[각 컴포넌트 마이그레이션 체크리스트]
- [ ] CSS 클래스 의존 제거 (className="legacy-class" → Tailwind)
- [ ] var(--legacy-var) 인라인 스타일 → var(--shadcn-token) 또는 Tailwind 클래스
- [ ] position:fixed + 매직 넘버 → shadcn Sheet/Dialog
- [ ] 네이티브 <select> → shadcn <Select> (단, 테스트 영향 고려)
- [ ] 이모지 아이콘 → lucide-react 아이콘
- [ ] 레거시 CSS 삭제 후 npm run build 오류 없음 확인
- [ ] E2E 테스트 선택자 업데이트 (CSS 클래스 → 시맨틱 선택자)
```

---

### 5-3. 신규 컴포넌트 추가 프롬프트 (일상 개발용)

```
이 프로젝트에 새로운 UI 컴포넌트를 추가한다.
디자인시스템 규칙: Tailwind v4 + shadcn/ui, 시맨틱 토큰 전용, .dark 기반 다크모드

컴포넌트 위치:
- 재사용 UI: src/components/ui/ (shadcn 컴포넌트 패턴)
- 도메인 Feature: src/components/dashboard/ 또는 src/components/manager/

필수 요구사항:
1. 모든 색상은 bg-background, bg-card, text-foreground, text-muted-foreground,
   text-primary, border-border, text-destructive 시맨틱 토큰 사용
2. 다크모드를 별도로 구현하지 않는다 (토큰이 자동으로 처리)
3. 동적 className은 cn() 사용
4. 접근성: 상호작용 요소에 aria-label 또는 title 부여
5. Props 타입을 명시적으로 정의한다
6. 기존 shadcn 컴포넌트(Button, Card, Sheet, Select 등)를 활용하고,
   바퀴를 재발명하지 않는다

금지:
- 글로벌 CSS 파일에 새 클래스 추가
- 팔레트 색상 직접 사용 (bg-white, text-blue-600 등)
- position:fixed + 픽셀 수치 조합
```

---

## 참고

- [Tailwind CSS v4 공식 문서](https://tailwindcss.com/docs)
- [shadcn/ui 공식 문서](https://ui.shadcn.com)
- [Radix UI 프리미티브](https://www.radix-ui.com)
- [oklch 색상 피커](https://oklch.com)
- [W3C Design Tokens](https://www.w3.org/community/design-tokens/)
- [WCAG 2.1 접근성 가이드](https://www.w3.org/TR/WCAG21/)
