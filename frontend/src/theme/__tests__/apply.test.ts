import { describe, it, expect, beforeEach } from "vitest";
import { resolveTheme, applyTheme, THEME_ATTR } from "../apply";
import { DEFAULT_THEME_ID } from "../registry";

describe("resolveTheme — 프리셋", () => {
  it("설정이 없으면 기본 테마", () => {
    expect(resolveTheme(undefined, null).presetId).toBe(DEFAULT_THEME_ID);
  });

  it("모르는 프리셋은 기본으로 떨군다", () => {
    // 카탈로그에서 테마가 빠져도 화면이 깨지지 않아야 한다.
    expect(resolveTheme({ preset: "없는테마" }, null).presetId).toBe(DEFAULT_THEME_ID);
  });

  it("아는 프리셋은 그대로", () => {
    expect(resolveTheme({ preset: "toss" }, null).presetId).toBe("toss");
  });
});

describe("resolveTheme — 명암 우선순위", () => {
  it("사용자 선택이 프로젝트 기본을 이긴다", () => {
    // 프로젝트는 다크인데 사용자가 라이트를 골랐으면 라이트다.
    expect(resolveTheme({ mode: "다크 모드" }, "").dark).toBe(false);
    expect(resolveTheme({ mode: "라이트 모드" }, "dark").dark).toBe(true);
  });

  it("사용자가 안 골랐으면 프로젝트 기본을 따른다", () => {
    expect(resolveTheme({ mode: "다크 모드" }, null).dark).toBe(true);
    expect(resolveTheme({ mode: "라이트 모드" }, null).dark).toBe(false);
  });

  it("둘 다 없으면 다크 우선 테마인지 본다", () => {
    // ink 는 다크 우선 테마다.
    expect(resolveTheme({ preset: "ink" }, null).dark).toBe(true);
    expect(resolveTheme({ preset: "toss" }, null).dark).toBe(false);
  });

  it("아무것도 없으면 라이트", () => {
    expect(resolveTheme(undefined, null).dark).toBe(false);
  });
});

describe("resolveTheme — 브랜드 텍스트", () => {
  it("logoText 기본값은 ClearSurvey", () => {
    expect(resolveTheme(undefined, null).logoText).toBe("ClearSurvey");
    expect(resolveTheme({ logoText: "   " }, null).logoText).toBe("ClearSurvey");
  });

  it("logoText 를 덮는다", () => {
    expect(resolveTheme({ logoText: "우리회사" }, null).logoText).toBe("우리회사");
  });

  it("brandTitle 은 없으면 undefined (빈 span 을 렌더하지 않도록)", () => {
    expect(resolveTheme({ brandTitle: "  " }, null).brandTitle).toBeUndefined();
    expect(resolveTheme({ brandTitle: "데이터 플랫폼" }, null).brandTitle).toBe("데이터 플랫폼");
  });
});

describe("applyTheme", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute(THEME_ATTR);
    document.documentElement.classList.remove("dark");
    document.documentElement.style.removeProperty("--radius");
  });

  it("설정이 없으면 기본 테마를 data-theme 로 붙인다", () => {
    // 기본값이 곧 styles.css 의 :root 라는 보장이 없다(DEFAULT_THEME_ID=toss, :root=shadcn).
    // 항상 붙여야 __root.tsx 의 THEME_BOOT 가 심어둔 속성과도 일치한다.
    applyTheme(resolveTheme(undefined, null));
    expect(document.documentElement.getAttribute(THEME_ATTR)).toBe(DEFAULT_THEME_ID);
  });

  it("프리셋을 data-theme 로 붙인다", () => {
    applyTheme(resolveTheme({ preset: "toss" }, null));
    expect(document.documentElement.getAttribute(THEME_ATTR)).toBe("toss");
  });

  it("명암을 .dark 로 토글한다", () => {
    applyTheme(resolveTheme({ preset: "toss" }, "dark"));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    applyTheme(resolveTheme({ preset: "toss" }, ""));
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("borderRadius 를 --radius 로 덮고, 없으면 지운다", () => {
    applyTheme(resolveTheme({ preset: "toss", borderRadius: "20px" }, null));
    expect(document.documentElement.style.getPropertyValue("--radius")).toBe("20px");
    applyTheme(resolveTheme({ preset: "toss" }, null));
    expect(document.documentElement.style.getPropertyValue("--radius")).toBe("");
  });

  it("테마를 바꾸면 이전 값이 남지 않는다", () => {
    applyTheme(resolveTheme({ preset: "kakao" }, null));
    expect(document.documentElement.getAttribute(THEME_ATTR)).toBe("kakao");
    applyTheme(resolveTheme({ preset: "toss" }, null));
    expect(document.documentElement.getAttribute(THEME_ATTR)).toBe("toss");
  });

  it("모르는 프리셋도 기본 테마로 떨궈 붙인다", () => {
    applyTheme(resolveTheme({ preset: "없는테마" }, null));
    expect(document.documentElement.getAttribute(THEME_ATTR)).toBe(DEFAULT_THEME_ID);
  });
});
