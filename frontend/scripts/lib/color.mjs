/**
 * sRGB(hex) ↔ OKLCH 변환.
 *
 * 디자인 가이드 원본은 hex인데 이 프로젝트의 토큰은 oklch다(Tailwind v4 / shadcn 관례).
 * 빌드 시 1회 변환해 저장하므로 런타임 비용은 없다.
 *
 * 역방향(oklab → rgb)은 src/lib/pdfColorFix.ts 에 이미 있다. 여기 행렬은 그것의 역행렬로,
 * 두 코드가 서로의 왕복 검증 대상이다(scripts/__tests__/color.test.ts).
 */

const clamp01 = (x) => Math.max(0, Math.min(1, x));

/** 감마 sRGB(0~1) → 선형 sRGB */
function toLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/** 선형 sRGB → 감마 sRGB(0~1) */
function toGamma(c) {
  return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

/** "#rgb" | "#rrggbb" → {r,g,b} (0~255). 실패 시 null. */
export function parseHex(hex) {
  if (typeof hex !== "string") return null;
  const m = hex.trim().match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  if (!m) return null;
  let h = m[1];
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

/** {r,g,b}(0~255) → {L,C,h} (L 0~1, h 0~360) */
export function rgbToOklch({ r, g, b }) {
  const lr = toLinear(r / 255);
  const lg = toLinear(g / 255);
  const lb = toLinear(b / 255);

  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;

  const C = Math.sqrt(a * a + bb * bb);
  let h = (Math.atan2(bb, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return { L, C, h };
}

/** {L,C,h} → {r,g,b}(0~255). pdfColorFix.ts::oklabToRgb 와 같은 행렬. */
export function oklchToRgb({ L, C, h }) {
  const hr = (h * Math.PI) / 180;
  const a = C * Math.cos(hr);
  const b = C * Math.sin(hr);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l3 = l_ ** 3;
  const m3 = m_ ** 3;
  const s3 = s_ ** 3;

  const rLin = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const gLin = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const bLin = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  return {
    r: Math.round(clamp01(toGamma(rLin)) * 255),
    g: Math.round(clamp01(toGamma(gLin)) * 255),
    b: Math.round(clamp01(toGamma(bLin)) * 255),
  };
}

const round = (n, d) => {
  const f = 10 ** d;
  return Math.round(n * f) / f;
};

/**
 * hex → "oklch(L C h)" 문자열. 무채색(C≈0)은 hue를 0으로 고정한다
 * (atan2 가 잡음에서 임의 각도를 내는 것을 막아 diff 안정성을 확보).
 */
export function hexToOklchString(hex) {
  const rgb = parseHex(hex);
  if (!rgb) return null;
  const { L, C, h } = rgbToOklch(rgb);
  const c = round(C, 3);
  if (c === 0) return `oklch(${round(L, 3)} 0 0)`;
  return `oklch(${round(L, 3)} ${c} ${round(h, 3)})`;
}

/**
 * rgb()/rgba() → "oklch(L C h)" 또는 "oklch(L C h / A)".
 *
 * 일부 가이드(Apple HIG 등)는 텍스트·테두리를 반투명 rgba 로 정의한다 — 배경 위에 겹쳐
 * 자연스러운 회색을 만드는 실제 기법이라 알파를 버리면 안 된다. oklch 도 `/ A` 로 알파를 낸다.
 */
export function rgbaToOklchString(str) {
  const m = str.match(
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i,
  );
  if (!m) return null;
  const [r, g, b] = [Number(m[1]), Number(m[2]), Number(m[3])];
  if ([r, g, b].some((v) => Number.isNaN(v) || v < 0 || v > 255)) return null;
  const a = m[4] === undefined ? 1 : Number(m[4]);
  const { L, C, h } = rgbToOklch({ r, g, b });
  const c = round(C, 3);
  const base = c === 0 ? `${round(L, 3)} 0 0` : `${round(L, 3)} ${c} ${round(h, 3)}`;
  return a >= 1 ? `oklch(${base})` : `oklch(${base} / ${round(a, 3)})`;
}

/**
 * CSS 값 문자열 안의 hex / rgb() / rgba() 를 oklch 로 치환한다.
 * 그라디언트·그림자처럼 색이 섞인 복합 값도 각 색만 바꾼다.
 */
export function convertValueToOklch(value) {
  if (typeof value !== "string") return value;
  let out = value.replace(/rgba?\([^)]*\)/gi, (m) => rgbaToOklchString(m) ?? m);
  out = out.replace(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g, (m) => hexToOklchString(m) ?? m);
  return out;
}
