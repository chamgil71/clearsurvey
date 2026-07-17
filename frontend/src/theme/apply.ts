import type { DashboardTheme } from "@/types/dashboard";
import { resolveThemeId, DEFAULT_THEME_ID, getThemePreset } from "./registry";

/**
 * 프로젝트 테마를 DOM 에 반영한다.
 *
 * 두 축을 분리해 다룬다:
 *  - `data-theme` = 브랜드(toss/kakao/…) — presets.css 의 `[data-theme="{id}"]` 블록을 켠다
 *  - `.dark`      = 명암 — 같은 브랜드 안에서 `[data-theme="{id}"].dark` 로 조합된다
 *
 * design-migration 이 `dataset.theme` 를 걷어냈던 이유는 그때 `.dark` 와 **중복**이었기
 * 때문이다. 지금은 서로 다른 축을 담당하므로 중복이 아니다 — 다시 걷어내지 말 것.
 */

export const THEME_ATTR = "data-theme";

/** 사용자가 헤더에서 고른 명암. 프로젝트 기본값(cfg.theme.mode)보다 우선한다. */
export const USER_MODE_KEY = "theme";

export interface ResolvedTheme {
  /** registry 에 있는 테마 id. 모르는 값이면 기본 테마. */
  presetId: string;
  /** 최종 명암. 사용자 선택 > 프로젝트 기본 > 라이트 */
  dark: boolean;
  /** --radius 오버라이드. 없으면 테마 기본값을 그대로 둔다. */
  radius?: string;
  logoText: string;
  brandTitle?: string;
}

/**
 * 테마 설정 + 사용자 선택을 최종 상태로 합친다.
 * @param userMode localStorage 의 사용자 선택("dark" | "" | null). null/undefined 면 미선택.
 */
export function resolveTheme(
  theme: DashboardTheme | undefined,
  userMode: string | null | undefined,
): ResolvedTheme {
  const presetId = resolveThemeId(theme?.preset);
  const preset = getThemePreset(presetId);

  // 우선순위: 사용자 토글 > 프로젝트 기본(mode) > 테마 자체가 다크 우선인지(ink 등)
  let dark: boolean;
  if (userMode === "dark") dark = true;
  else if (userMode === "") dark = false;
  else if (theme?.mode) dark = theme.mode === "다크 모드";
  else dark = Boolean(preset?.darkFirst);

  return {
    presetId,
    dark,
    radius: theme?.borderRadius,
    logoText: theme?.logoText?.trim() || "ClearSurvey",
    brandTitle: theme?.brandTitle?.trim() || undefined,
  };
}

/** resolveTheme 결과를 실제 DOM 에 적용한다. SSR 에서는 아무것도 하지 않는다. */
export function applyTheme(r: ResolvedTheme): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  // 기본 테마도 속성을 붙인다. 기본값이 곧 styles.css 의 :root 라는 보장이 없기 때문이다
  // (DEFAULT_THEME_ID 는 toss 이고 :root 는 shadcn 기본값이다). 항상 붙이면 두 값이
  // 어긋날 여지가 없고, __root.tsx 의 THEME_BOOT 가 심어둔 속성과도 일치한다.
  root.setAttribute(THEME_ATTR, r.presetId);

  root.classList.toggle("dark", r.dark);

  if (r.radius) root.style.setProperty("--radius", r.radius);
  else root.style.removeProperty("--radius");
}
