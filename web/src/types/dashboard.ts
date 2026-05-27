export type ColumnType = "category" | "numeric" | "text";

export interface ColumnMeta {
  key: string;
  label: string;
  type: ColumnType;
  unique_values?: string[];
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
}

export type KpiItem =
  | { label: string; type: "total_rows" }
  | { label: string; type: "count_value"; col: string; value: string }
  | { label: string; type: "sum"; col: string };

export type ChartItem =
  | { type: "donut" | "bar" | "hbar" | "histogram"; col: string; title?: string; sep?: string }
  | { type: "multibar"; title?: string; cols: { col: string; label: string }[] };

export interface DashboardConfig {
  version: number;
  kpi: KpiItem[];
  charts: ChartItem[];
  list: {
    visible_cols: string[];
    filter_cols: string[];
  };
}

export interface GlobalFilter {
  search: string;
  filters: Record<string, string>;
}