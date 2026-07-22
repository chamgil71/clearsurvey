export type ColumnType = "category" | "numeric" | "text";

export interface ColumnMeta {
  key: string;
  label: string;
  type: ColumnType;
  unique_values?: string[];
  unique_count?: number;
}

export interface DataMeta {
  project: string;
  total_rows: number;
  generated_at?: string;
  columns: ColumnMeta[];
}

export type Row = Record<string, string | number | null | undefined>;

/**
 * 행 식별자 컬럼. 백엔드 `engine/config.py` 의 `ROW_ID_COL` 과 같은 값이어야 한다.
 *
 * 대시보드 편집이 "몇 번째 행"이 아니라 "어느 행"에 붙는지 고정하려고 rows 에 실려 오지만,
 * **사용자에게 보여선 안 된다.** `meta.columns` 에는 애초에 없으므로 거기서 컬럼을 얻는
 * 경로(차트·필터)는 자동으로 안전하다. 다만 `Object.keys(row)` 로 컬럼을 직접 구하는 곳은
 * 이 값이 새므로 `visibleRowKeys()` 로 걸러야 한다.
 */
export const ROW_ID_COL = "__row_id";

/** `Object.keys(row)` 대신 쓴다 — 행 식별자 같은 내부 컬럼을 제외한 키만 돌려준다. */
export function visibleRowKeys(row: Row | null | undefined): string[] {
  return Object.keys(row || {}).filter((k) => k !== ROW_ID_COL);
}

export interface ProjectData {
  meta: DataMeta;
  rows: Row[];
  aggregates?: Record<string, Record<string, number>>;
  dashboard?: DashboardConfig | null;
}

export interface ProjectListItem {
  id: string;
  name: string;
  file: string;
  updated?: string;
  published?: boolean;
  /** true면 공개 대시보드가 첫 화면으로 여는 기본 프로젝트. 동시에 하나만 가능. */
  is_default?: boolean;
}

export type KpiItem =
  | { label: string; type: "total_rows" }
  | { label: string; type: "count_value"; col: string; value: string }
  | { label: string; type: "sum"; col: string };

export type ChartItem =
  | {
      type: "donut" | "bar" | "hbar" | "histogram";
      col: string;
      title?: string;
      sep?: string;
      sort_by?: string;
      max_items?: number;
      /** 툴팁(마우스 오버)에 비율(%)을 같이 보여줄지. 차트 위 캡션 표시는 show_labels가 따로 결정한다. */
      show_percent?: boolean;
      /** 차트 안(도넛 조각·막대 위)에 항목명·값을 캡션으로 항상 표시할지. 기본 꺼짐(마우스 오버 툴팁만). */
      show_labels?: boolean;
      layout?: "1x1" | "2x1" | "2x2" | "0.5x1" | "full";
    }
  | {
      type: "multibar";
      title?: string;
      cols: { col: string; label: string }[];
      sort_by?: string;
      max_items?: number;
      /** 툴팁(마우스 오버)에 비율(%)을 같이 보여줄지. 차트 위 캡션 표시는 show_labels가 따로 결정한다. */
      show_percent?: boolean;
      /** 차트 안(도넛 조각·막대 위)에 항목명·값을 캡션으로 항상 표시할지. 기본 꺼짐(마우스 오버 툴팁만). */
      show_labels?: boolean;
      layout?: "1x1" | "2x1" | "2x2" | "0.5x1" | "full";
    };

/** 차트 사이에 끼워 넣는 일반 설명 문구 박스. 집계 대상 데이터가 없다 — 순수 표시용. */
export interface TextBlockItem {
  type: "text";
  text: string;
  layout?: "1x1" | "2x1" | "2x2" | "0.5x1" | "full";
}

/** 대시보드 그리드에 순서대로 나열되는 항목. 차트 또는 텍스트 박스. */
export type DashboardItem = ChartItem | TextBlockItem;

/**
 * 프로젝트별 테마. 없으면 앱 기본 테마를 쓴다(하위 호환).
 *
 * `preset` 을 유니온 타입으로 좁히지 않는다 — 좁히면 테마 추가가 타입 변경이 되어 확장을 막는다.
 * 대신 런타임에 theme/registry.ts 로 검증하고, 모르는 값은 기본 테마로 떨군다.
 *
 * 구 `primaryColor`·`chartPalette` 는 폐기했다. 프리셋이 이미 primary 와 차트 색을 정하는데
 * 별도 필드를 남기면 둘 중 뭐가 이기는지 모호해진다 — 색은 테마 한 곳에서만 결정한다.
 */
export interface DashboardTheme {
  /** theme/registry.ts 의 테마 id. 예: "toss" */
  preset?: string;
  /** 프로젝트 기본 명암. 사용자가 헤더에서 토글하면 그쪽(localStorage)이 우선한다. */
  mode?: "라이트 모드" | "다크 모드";
  /** 테마의 기본 --radius 를 덮는다. 예: "16px" */
  borderRadius?: string;
  /** 헤더 로고 텍스트. 기본 "ClearSurvey" */
  logoText?: string;
  /** 로고 옆 보조 텍스트 + 문서 title */
  brandTitle?: string;
}

export interface DashboardLayout {
  useHeroBanner?: boolean;
  heroTitle?: string;
  heroSubtitle?: string;
  heroBgUrl?: string;
  heroBtnText?: string;
  heroBtnUrl?: string;
  useFooter?: boolean;
  footerText?: string;
  /** 목록탭에서 행 클릭 시 상세를 보여주는 방식. 기본 "drawer"(우측 슬라이드). */
  listViewMode?: "split" | "drawer" | "modal";
  /** 차트 그리드 가로 배열 최대 개수 (기본값 4). 화면이 넓어도 이 값을 넘는 열은 생성하지 않음. */
  maxColumns?: number;
}

/** 요약 탭의 표에 표시할 열. "항목"(카테고리명) 열은 항상 표시되므로 목록에 없다. */
export type SummaryColumn = "value" | "percent" | "rank" | "cumulative";

export interface DashboardSummary {
  /** 표시할 열. 미설정 시 SUMMARY_DEFAULT_COLUMNS(["value", "percent"]). */
  columns?: SummaryColumn[];
}

export interface DashboardConfig {
  version: number;
  kpi: KpiItem[];
  /** 차트와 텍스트 박스가 순서대로 섞여 들어간다 — 화면·PPT·요약 탭 등 소비처는
   * 실제로 집계할 수 있는 ChartItem만 걸러 써야 한다(item.type !== "text"). */
  charts: DashboardItem[];
  list: {
    visible_cols: string[];
    filter_cols: string[];
  };
  theme?: DashboardTheme;
  layout?: DashboardLayout;
  /** 요약 탭 설정. 기존 dashboard.json에는 없으므로 optional — 없으면 기본값을 쓴다. */
  summary?: DashboardSummary;
}

export interface GlobalFilter {
  search: string;
  filters: Record<string, string>;
}
