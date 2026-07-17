import { describe, it, expect, afterEach } from "vitest";
import { replaceModernColors, fixModernColorsInPlace } from "@/lib/pdfColorFix";

describe("replaceModernColors", () => {
  it("oklch를 rgb로 바꾼다", () => {
    // toss --chart-1 (파랑)
    expect(replaceModernColors("oklch(0.56 0.243 261.078)")).toMatch(/^rgb\(\d+, \d+, \d+\)$/);
  });

  it("알파를 보존한다", () => {
    expect(replaceModernColors("oklch(0 0 0 / 0.85)")).toBe("rgba(0, 0, 0, 0.85)");
  });

  it("그라디언트·그림자 같은 복합 값 안의 토큰도 모두 바꾼다", () => {
    const out = replaceModernColors("linear-gradient(oklch(0.5 0.1 20), oklab(0.7 0.05 -0.02))");
    expect(out).not.toContain("okl");
    expect(out.match(/rgb\(/g)).toHaveLength(2);
  });

  it("oklch가 아닌 값은 그대로 둔다", () => {
    expect(replaceModernColors("rgb(1, 2, 3)")).toBe("rgb(1, 2, 3)");
  });
});

describe("fixModernColorsInPlace — 활성 테마 반영", () => {
  const root = document.documentElement;
  afterEach(() => {
    root.removeAttribute("data-theme");
    root.removeAttribute("style");
    document.querySelectorAll("style[data-test]").forEach((el) => el.remove());
  });

  /**
   * 회귀 테스트: 예전 구현은 스타일시트 규칙을 순서대로 훑어 `--chart-1`을 **처음 만난 값**으로
   * 확정했다. presets.css는 테마 15종이 같은 토큰을 각자 정의하고 light가 파일 맨 앞이라,
   * toss를 쓰는 화면에서도 PDF에는 light의 주황이 박혔다. 게다가 그 값을 <html> 인라인에 넣어
   * 모든 셀렉터를 이겨버렸다. 지금 적용 중인 계산값을 읽어야 한다.
   */
  it("파일 앞선 테마가 아니라 지금 적용된 테마의 색을 쓴다", () => {
    const style = document.createElement("style");
    style.setAttribute("data-test", "");
    style.textContent = `
      html[data-theme="light"]:not(.dark) { --chart-1: oklch(0.646 0.222 41.116); }
      html[data-theme="toss"]:not(.dark)  { --chart-1: oklch(0.56 0.243 261.078); }
    `;
    document.head.appendChild(style);
    root.setAttribute("data-theme", "toss");

    const el = document.createElement("div");
    document.body.appendChild(el);
    const restore = fixModernColorsInPlace(el);

    const applied = root.style.getPropertyValue("--chart-1");
    expect(applied).not.toBe("");
    // toss = 파랑이므로 B > R. light(주황)였다면 R > B 가 된다.
    const [r, , b] = applied.match(/\d+/g)!.map(Number);
    expect(b).toBeGreaterThan(r);

    restore();
    expect(root.style.getPropertyValue("--chart-1")).toBe("");
    el.remove();
  });
});
