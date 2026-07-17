/**
 * 지금 적용 중인 테마 색을 DOM 에서 읽는다.
 *
 * 내보내기(PDF/PPT)는 화면과 같은 색이어야 하는데, 활성 테마는 `html[data-theme]` + `.dark` 조합으로
 * 정해지므로 코드가 색을 알 방법이 없다. 스타일시트를 뒤지면 안 된다 — 테마 15종이 같은 토큰을 각자
 * 정의하므로 어느 규칙이 이겼는지는 브라우저만 안다. getComputedStyle 이 그 답을 갖고 있다.
 *
 * pptxgenjs 는 oklch 를 모르고, jsPDF 도 마찬가지라 hex 로 변환해서 준다.
 */
import { replaceModernColors } from "@/lib/pdfColorFix";
import { CHART_SLOTS } from "./tokens";

/** `rgb(r, g, b)` / `rgba(r, g, b, a)` → `RRGGBB` (pptxgenjs·jsPDF 가 쓰는 형식, # 없음). */
function rgbToHex(rgb: string): string | null {
  const m = rgb.match(/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
  if (!m) return null;
  const hex = (s: string) =>
    Math.max(0, Math.min(255, Math.round(parseFloat(s))))
      .toString(16)
      .padStart(2, "0");
  return (hex(m[1]) + hex(m[2]) + hex(m[3])).toUpperCase();
}

/**
 * 토큰 하나를 hex 로. 못 읽으면 fallback.
 * @param token `--` 없는 이름 (예: "chart-1", "foreground")
 */
export function readTokenHex(token: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const raw = getComputedStyle(document.documentElement).getPropertyValue(`--${token}`).trim();
  if (!raw) return fallback;
  // oklch/oklab 이면 rgb 로 먼저 바꾼다. 이미 rgb/hex 면 그대로 통과.
  const rgb = replaceModernColors(raw);
  if (/^#[0-9a-f]{6}$/i.test(rgb)) return rgb.slice(1).toUpperCase();
  return rgbToHex(rgb) ?? fallback;
}

/** 차트 팔레트(--chart-1..N)를 hex 배열로. 화면 ChartCard 의 PALETTE 와 같은 순서. */
export function readChartPaletteHex(fallback: string[]): string[] {
  return Array.from({ length: CHART_SLOTS }, (_, i) =>
    readTokenHex(`chart-${i + 1}`, fallback[i % fallback.length]),
  );
}

/**
 * 다크 클래스를 잠시 벗기고 콜백을 실행한다.
 *
 * 내보내기 결과물은 인쇄·배포용이라 어두운 배경이 그대로 찍히면 못 쓴다. PDF 는 이미 캡처 직전
 * .dark 를 벗기고 있었는데(exportPdf), 색을 DOM 에서 읽는 PPT 도 같은 처리가 필요해졌다 —
 * 그러지 않으면 다크모드에서 내보낸 PPT 만 어두운 팔레트로 나온다.
 */
export function withLightMode<T>(fn: () => T): T {
  const root = document.documentElement;
  const wasDark = root.classList.contains("dark");
  if (wasDark) root.classList.remove("dark");
  try {
    return fn();
  } finally {
    if (wasDark) root.classList.add("dark");
  }
}

/**
 * withLightMode 의 비동기판.
 *
 * 동기판에 async 콜백을 넘기면 안 된다 — `return fn()` 이 Promise 를 돌려주는 순간 finally 가
 * 실행되어, 캡처가 끝나기 전에 .dark 가 되돌아온다(캡처 결과가 다시 어두워진다).
 * 캡처처럼 await 가 필요한 작업은 이쪽을 쓴다.
 */
export async function withLightModeAsync<T>(fn: () => Promise<T>): Promise<T> {
  const root = document.documentElement;
  const wasDark = root.classList.contains("dark");
  if (wasDark) root.classList.remove("dark");
  try {
    return await fn();
  } finally {
    if (wasDark) root.classList.add("dark");
  }
}
