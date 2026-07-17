/**
 * 활성 테마 레지스트리 — UI 가 참조하는 유일한 목록.
 *
 * 프리셋 드롭다운을 `<option value="toss">` 식으로 코드에 박으면 테마를 추가할 때마다 UI 를
 * 고쳐야 한다. 여기 한 곳만 보고 map() 하도록 두어, 테마 추가가 데이터 변경으로 끝나게 한다.
 *
 * 목록의 출처는 catalog.json(생성물)이다. 여기서 다시 선언하지 않고 읽어 쓴다 —
 * 두 벌로 적으면 반드시 갈라진다.
 */
import catalog from "./catalog.json";

export interface ThemePreset {
  /** `data-theme` 값이자 파일명. `light` 는 기본(속성 없음)으로 취급한다. */
  id: string;
  label: string;
  description: string;
  /** 출처(가이드 경로 등) — 추적용 */
  source: string;
  /** 이 테마가 자체 다크 토큰을 갖는지. false 면 기본 .dark 를 쓴다. */
  hasDark: boolean;
  /** 다크를 기본 명암으로 하는 테마(ink 등) */
  darkFirst: boolean;
}

interface CatalogEntry {
  id: string;
  label: string;
  description: string;
  source: string;
  hasDark: boolean;
  handmadeDarkMode?: boolean;
}

const entries = catalog.entries as CatalogEntry[];
const activeIds = catalog.active as string[];

export const THEME_PRESETS: ThemePreset[] = activeIds
  .map((id) => entries.find((e) => e.id === id))
  .filter((e): e is CatalogEntry => Boolean(e))
  .map((e) => ({
    id: e.id,
    label: e.label,
    description: e.description,
    source: e.source,
    hasDark: e.hasDark,
    darkFirst: Boolean(e.handmadeDarkMode),
  }));

/**
 * 앱 기본 테마. 프로젝트가 preset 을 지정하지 않으면 이 테마를 쓴다.
 *
 * `light`(= styles.css 의 :root, shadcn 기본값)로 되돌리려면 이 값을 "light" 로 바꾼다.
 * routes/__root.tsx 의 THEME_BOOT 인라인 스크립트가 같은 값을 첫 페인트 전에 심으므로
 * 함께 바꿔야 한다(어긋나면 FOUC 가 난다).
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
