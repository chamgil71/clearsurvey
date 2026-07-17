/**
 * 활성 테마 레지스트리 — UI 가 참조하는 유일한 목록.
 *
 * 프리셋 드롭다운을 `<option value="toss">` 식으로 코드에 박으면 테마를 추가할 때마다 UI 를
 * 고쳐야 한다. 여기 한 곳만 보고 map() 하도록 두어, 테마 추가가 데이터 변경으로 끝나게 한다.
 *
 * 목록은 registry.gen.ts(생성물)에서 온다. **catalog.json 을 직접 import 하지 말 것** —
 * 720KB 가 __root.tsx 를 타고 초기 번들에 통째로 들어간다(실측: index 청크 431KB -> 886KB).
 * 앱에 필요한 건 활성 15종의 메타데이터뿐이고, 색 값은 CSS(presets.css)가 담당한다.
 */
import { THEME_PRESET_META, type ThemePresetMeta } from "./registry.gen";

export type ThemePreset = ThemePresetMeta;

export const THEME_PRESETS: ThemePreset[] = THEME_PRESET_META;

/**
 * 앱 기본 테마. 프로젝트가 preset 을 지정하지 않으면 이 테마를 쓴다.
 *
 * `light`(= styles.css 의 :root, shadcn 기본값)로 되돌리려면 이 값을 "light" 로 바꾼다.
 * routes/__root.tsx 의 THEME_BOOT 인라인 스크립트가 같은 값을 첫 페인트 전에 심으므로
 * 함께 바꿔야 한다(어긋나면 FOUC 가 난다 — 테스트가 잡는다).
 */
export const DEFAULT_THEME_ID = "toss";

/**
 * 모르는 id 는 기본 테마로 떨군다.
 * `preset` 을 유니온 타입으로 좁히지 않는 이유 — 좁히면 테마 추가가 타입 변경이 되어
 * 확장을 막는다. 대신 런타임에 레지스트리로 검증한다.
 */
export function resolveThemeId(id: string | undefined | null): string {
  if (!id) return DEFAULT_THEME_ID;
  return THEME_PRESETS.some((p) => p.id === id) ? id : DEFAULT_THEME_ID;
}

export function getThemePreset(id: string): ThemePreset | undefined {
  return THEME_PRESETS.find((p) => p.id === id);
}
