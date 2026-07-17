import { describe, it, expect } from "vitest";
// @ts-expect-error — .mjs 빌드 스크립트 유틸 (타입 선언 없음, 의도적)
import {
  hexToOklchString,
  parseHex,
  rgbToOklch,
  oklchToRgb,
  convertValueToOklch,
  rgbaToOklchString,
} from "../lib/color.mjs";

/**
 * hex → oklch 변환은 테마 전체 색의 근간이라 틀리면 조용히 모든 테마가 어긋난다.
 * 왕복(round-trip)으로 고정한다.
 */

const roundTrip = (hex: string) => {
  const rgb = parseHex(hex);
  const back = oklchToRgb(rgbToOklch(rgb));
  return back;
};

describe("hex → oklch 왕복", () => {
  it.each([
    ["#0064FF", "Toss Blue"],
    ["#007AFF", "Apple System Blue"],
    ["#FFFFFF", "흰색"],
    ["#000000", "검정"],
    ["#191F28", "Toss Navy"],
    ["#FF3B30", "Apple Red"],
    ["#34C759", "Apple Green"],
    ["#F2F4F6", "밝은 회색"],
  ])("%s (%s) 는 왕복해도 같은 값이다", (hex) => {
    const rgb = parseHex(hex);
    expect(roundTrip(hex)).toEqual(rgb);
  });

  it("3자리 단축 hex 도 처리한다", () => {
    expect(parseHex("#fff")).toEqual({ r: 255, g: 255, b: 255 });
    expect(parseHex("#08f")).toEqual({ r: 0, g: 136, b: 255 });
  });

  it("hex 가 아니면 null", () => {
    expect(parseHex("rgba(0,0,0,.5)")).toBeNull();
    expect(parseHex("oklch(0.5 0.1 200)")).toBeNull();
    expect(parseHex("")).toBeNull();
  });
});

describe("hexToOklchString", () => {
  it("oklch(L C h) 형식으로 낸다", () => {
    expect(hexToOklchString("#0064FF")).toMatch(/^oklch\(0\.\d+ 0\.\d+ \d+(\.\d+)?\)$/);
  });

  it("흰색·검정은 무채색이라 hue 를 0 으로 고정한다", () => {
    // atan2 가 잡음에서 임의 각도를 내면 빌드마다 diff 가 흔들린다.
    expect(hexToOklchString("#FFFFFF")).toBe("oklch(1 0 0)");
    expect(hexToOklchString("#000000")).toBe("oklch(0 0 0)");
  });

  it("색역 밖 oklch 는 왕복이 보장되지 않는다 (변환기 한계 명시)", () => {
    // shadcn 의 --destructive oklch(0.577 0.245 27.325) 는 sRGB 색역을 벗어난다.
    // rgb 로 내릴 때 clamp 되므로 되돌리면 L 이 어긋난다 — 물리적 한계지 버그가 아니다.
    // 빌드 스크립트는 hex(항상 색역 내)에서 출발하므로 이 경로를 타지 않는다.
    const outOfGamut = { L: 0.577, C: 0.245, h: 27.325 };
    const back = rgbToOklch(oklchToRgb(outOfGamut));
    expect(back.L).not.toBeCloseTo(outOfGamut.L, 3);
  });
});

describe("rgba → oklch (알파 보존)", () => {
  // Apple HIG 등은 텍스트·테두리를 반투명 rgba 로 정의한다. 배경 위에 겹쳐 회색을 만드는
  // 실제 기법이라 알파를 버리면 색이 뭉개진다. 이 경로가 빠져 있어 테마 테스트가 잡아냈다.
  it("알파를 / A 로 보존한다", () => {
    expect(rgbaToOklchString("rgba(0,0,0,0.85)")).toBe("oklch(0 0 0 / 0.85)");
  });

  it("알파가 1이거나 없으면 생략한다", () => {
    expect(rgbaToOklchString("rgb(0,100,255)")).toBe("oklch(0.56 0.243 261.078)");
    expect(rgbaToOklchString("rgba(0,100,255,1)")).toBe("oklch(0.56 0.243 261.078)");
  });

  it("형식이 아니면 null", () => {
    expect(rgbaToOklchString("rgba(x,y,z)")).toBeNull();
    expect(rgbaToOklchString("#fff")).toBeNull();
  });

  it("범위를 벗어난 값은 거부한다", () => {
    expect(rgbaToOklchString("rgba(300,0,0,1)")).toBeNull();
  });
});

describe("convertValueToOklch", () => {
  it("hex 와 rgba 를 모두 바꾸고 나머지는 둔다", () => {
    expect(convertValueToOklch("#FFFFFF")).toBe("oklch(1 0 0)");
    expect(convertValueToOklch("rgba(0,0,0,0.85)")).toBe("oklch(0 0 0 / 0.85)");
    expect(convertValueToOklch("none")).toBe("none");
  });

  it("그림자처럼 hex 가 섞인 복합 값도 처리한다", () => {
    const out = convertValueToOklch("0 1px 2px #000000");
    expect(out).toBe("0 1px 2px oklch(0 0 0)");
  });

  it("문자열이 아니면 그대로 돌려준다", () => {
    expect(convertValueToOklch(undefined)).toBeUndefined();
  });
});
