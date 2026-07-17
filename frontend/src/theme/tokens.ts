/**
 * 테마 토큰의 단일 정의.
 *
 * 토큰 이름이 styles.css / theme/*.css / presets.css / 변환 스크립트에 흩어지면 하나 추가할 때
 * 네 군데를 손봐야 하고, 빠뜨리면 그 색만 조용히 기본값으로 떨어져 발견이 어렵다.
 * 여기를 유일한 출처로 두고 스크립트와 테스트가 공유한다.
 */

/** 라이트/다크 각각 반드시 정의돼야 하는 색 토큰. */
export const COLOR_TOKENS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  // shadcn 기본엔 없으나 이 앱이 실제로 쓰는 시맨틱 색 (theme_system_plan §4-G)
  "success",
  "success-foreground",
  "warning",
  "warning-foreground",
  "highlight",
  "highlight-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
] as const;

export type ColorToken = (typeof COLOR_TOKENS)[number];

/** 색이 아닌 토큰 — 라이트/다크가 같은 값을 쓴다. */
export const SCALAR_TOKENS = ["radius"] as const;

/** 차트 팔레트 슬롯 수. --chart-1 ~ --chart-N. */
export const CHART_SLOTS = 5;
