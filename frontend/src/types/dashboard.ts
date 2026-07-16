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

export interface DashboardTheme {
  preset?: string;
  mode?: "라이트 모드" | "다크 모드";
  primaryColor?: string;
  borderRadius?: string;
  brandTitle?: string;
  logoText?: string;
  chartPalette?: string;
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
