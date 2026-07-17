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
      show_percent?: boolean;
      layout?: "1x1" | "2x1" | "2x2" | "0.5x1" | "full";
    }
  | {
      type: "multibar";
      title?: string;
      cols: { col: string; label: string }[];
      sort_by?: string;
      max_items?: number;
      show_percent?: boolean;
      layout?: "1x1" | "2x1" | "2x2" | "0.5x1" | "full";
    };

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
  listViewMode?: "Drawer" | "Modal" | "Page";
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
  charts: ChartItem[];
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
