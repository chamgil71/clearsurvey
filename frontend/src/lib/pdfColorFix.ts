// html2pdf(내부 html2canvas)는 CSS `oklch()`/`oklab()` 색상 함수를 파싱하지 못해 예외를 던진다.
// 이 프로젝트는 Tailwind v4 / shadcn을 써서 테마 변수(--background/--foreground/--border 등)가 전부
// oklch이고, 불투명도 유틸리티(bg-x/10)는 color-mix가 oklab으로 계산된다. 특히 Tailwind preflight가
// 모든 요소(및 ::before/::after)에 `border-color: var(--border)`(oklch)를 상속시켜, 눈에 안 보이는
// 기본 테두리색까지 oklch가 된다. 캡처 직전 이 색들을 동일한 rgb로 치환해 예외를 회피한다.
//
// html2canvas가 클론이 아닌 원본 DOM의 계산 스타일을 읽으므로 onclone으로는 회피 불가 → 라이브 DOM을
// 직접(같은 색의 rgb라 화면 변화 없음) 수정하고 캡처 후 복원한다.

import { COLOR_TOKENS } from "@/theme/tokens";

// oklab(L a b) → 감마 sRGB rgb. oklch도 lab로 변환 후 공용.
function oklabToRgb(L: number, a: number, b: number, A: number): string {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l3 = l_ ** 3;
  const m3 = m_ ** 3;
  const s3 = s_ ** 3;

  const rLin = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const gLin = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const bLin = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  const gamma = (x: number) => (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
  const to255 = (x: number) => Math.max(0, Math.min(255, Math.round(gamma(x) * 255)));

  const r = to255(rLin);
  const g = to255(gLin);
  const b2 = to255(bLin);
  return A < 1 ? `rgba(${r}, ${g}, ${b2}, ${A})` : `rgb(${r}, ${g}, ${b2})`;
}

const numOf = (s: string) => (s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s));

// 문자열 내 모든 oklch(...)/oklab(...) 토큰을 rgb로 치환. 그라디언트·그림자 등 복합 값도 처리.
// 색공간 변환을 직접 수행하므로 브라우저 canvas의 oklch 지원 여부에 의존하지 않는다.
export function replaceModernColors(input: string): string {
  return input.replace(
    /okl(ch|ab)\(\s*([\d.]+%?)\s+(-?[\d.]+%?)\s+(-?[\d.]+)(?:deg)?\s*(?:\/\s*([\d.]+%?)\s*)?\)/gi,
    (_full, kind, p1, p2, p3, p4) => {
      const L = numOf(p1);
      const A = p4 != null ? numOf(p4) : 1;
      if (kind.toLowerCase() === "ch") {
        const C = numOf(p2);
        const H = parseFloat(p3);
        const hr = (H * Math.PI) / 180;
        return oklabToRgb(L, C * Math.cos(hr), C * Math.sin(hr), A);
      }
      return oklabToRgb(L, numOf(p2), parseFloat(p3), A);
    },
  );
}

const hasModern = (v: string) => v.includes("oklch") || v.includes("oklab");

// 라이브 요소 트리의 oklch/oklab 계산 색상을 동일한 rgb 값으로 인라인 고정한다.
// 캡처 후 원상 복원할 함수를 반환한다.
export function fixModernColorsInPlace(rootEl: HTMLElement): () => void {
  const cache = new Map<string, string>();
  const convert = (v: string) => {
    const c = cache.get(v);
    if (c) return c;
    const out = replaceModernColors(v);
    cache.set(v, out);
    return out;
  };

  // ① 문서 루트의 oklch/oklab CSS 커스텀 변수를 rgb로 재정의(유사 요소의 var()까지 커버).
  //
  // 값은 반드시 getComputedStyle로 "지금 적용 중인" 것을 읽는다. 스타일시트 규칙을 직접 훑으면
  // 안 된다 — presets.css는 테마 15종이 같은 토큰(--chart-1 등)을 각자 정의하므로, 규칙 순서대로
  // 처음 만난 값을 쓰면 파일 첫 테마(light)의 색이 잡히고 활성 테마(toss 등)가 무시된다.
  // 게다가 그 값을 docEl 인라인 스타일에 박으면 인라인이 모든 셀렉터를 이겨서, 캡처 동안 페이지
  // 전체가 엉뚱한 테마 색으로 렌더된다(실제 증상: 토스 화면인데 PDF만 light 팔레트).
  // 브라우저가 이미 셀렉터 우선순위를 계산해 뒀으니 그 결과를 그대로 쓴다.
  const docEl = document.documentElement;
  const savedRootVars: Array<[string, string]> = [];
  const rootCs = getComputedStyle(docEl);
  for (const token of COLOR_TOKENS) {
    const name = `--${token}`;
    const applied = rootCs.getPropertyValue(name).trim();
    if (!applied || !hasModern(applied)) continue;
    savedRootVars.push([name, docEl.style.getPropertyValue(name)]);
    docEl.style.setProperty(name, replaceModernColors(applied));
  }

  // ② 서브트리 각 요소의 계산 색상 중 여전히 oklch/oklab인 값(color-mix 결과 등)을 인라인 치환.
  const els: HTMLElement[] = [rootEl, ...Array.from(rootEl.querySelectorAll<HTMLElement>("*"))];
  const saved: Array<[HTMLElement, string]> = [];

  els.forEach((el) => {
    const cs = getComputedStyle(el);
    let savedStyle: string | null = null;
    for (let i = 0; i < cs.length; i++) {
      const name = cs[i];
      const v = cs.getPropertyValue(name);
      if (v && hasModern(v)) {
        if (savedStyle === null) {
          savedStyle = el.getAttribute("style") || "";
          saved.push([el, savedStyle]);
        }
        try {
          el.style.setProperty(name, convert(v));
        } catch {
          /* 일부 계산 전용 속성은 설정 불가 — 무시 */
        }
      }
    }
  });

  return () => {
    savedRootVars.forEach(([name, prev]) => {
      if (prev) docEl.style.setProperty(name, prev);
      else docEl.style.removeProperty(name);
    });
    saved.forEach(([el, style]) => {
      if (style) el.setAttribute("style", style);
      else el.removeAttribute("style");
    });
  };
}
