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

/**
 * primary 브랜드 색의 10단계 명도 스케일(`--color-primary-50`~`900`) — 모노톤 그러데이션
 * 팔레트(예: 순서형 데이터의 명도 램프)를 만들 때 쓸 재료.
 *
 * `COLOR_TOKENS`와 달리 **선택적**이다 — 원본 가이드가 있는 11종(가이드 파생 활성 테마)만
 * 채워지고, `light`/`dark`(기본 shadcn)와 `ink`/`forest`(수작업 이관, 가이드 없음)는 없다.
 * 그래서 무결성 테스트가 이 스케일의 존재를 전체 활성 테마에 강제하지 않는다 — 대신
 * `hasPrimaryScale()`로 있는지 확인하고 없으면 폴백하는 쪽이 책임진다.
 */
export const PRIMARY_SCALE_STEPS = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

export type PrimaryScaleStep = (typeof PRIMARY_SCALE_STEPS)[number];

/** `--color-primary-{step}` CSS 변수 이름. */
export function primaryScaleVar(step: PrimaryScaleStep): string {
  return `--color-primary-${step}`;
}
