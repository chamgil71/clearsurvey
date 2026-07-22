import type { ChartItem, DashboardConfig, Row, SummaryColumn } from "@/types/dashboard";
import { buildChartItemsWithMeta } from "@/lib/aggregate";

/** 설정이 없을 때의 기본 표시 열. 요구사항의 "값과 비중이 같이 나오게"에 해당. */
export const SUMMARY_DEFAULT_COLUMNS: SummaryColumn[] = ["value", "percent"];

export const SUMMARY_COLUMN_LABELS: Record<SummaryColumn, string> = {
  value: "값",
  percent: "비중",
  rank: "순위",
  cumulative: "누적 비중",
};

/** 체크박스 노출 순서 = 표의 열 순서. */
export const SUMMARY_COLUMN_ORDER: SummaryColumn[] = ["value", "percent", "rank", "cumulative"];

export interface SummaryRow {
  name: string;
  value: number;
  /** 표시 항목 합계 대비 백분율(0~100). truncated 차트는 잘린 기준임에 유의. */
  percent: number;
  /** 값 내림차순 순위(1부터). 동점은 같은 순위를 받지 않고 정렬 순서를 따른다. */
  rank: number;
  /** percent의 누적합(0~100). */
  cumulative: number;
}

export interface SummarySection {
  title: string;
  rows: SummaryRow[];
  /** rows의 값 합계. percent의 분모. */
  total: number;
  /**
   * max_items로 항목이 잘렸는지 여부. true면 total은 "상위 N개" 합계이므로
   * 전체 합계가 아니다 — 표의 합계 행에 그 사실을 명시해야 한다.
   */
  truncated: boolean;
}

export interface SummaryFilterNote {
  totalRows: number;
  filteredRows: number;
  search: string;
  /** [컬럼명, 값] 쌍. 값이 빈 문자열인 필터는 제외된다. */
  filters: [string, string][];
  get isFiltered(): boolean;
}

export interface SummaryDoc {
  projectName: string;
  sections: SummarySection[];
  columns: SummaryColumn[];
  filterNote: SummaryFilterNote;
}

function chartTitle(chart: ChartItem): string {
  if (chart.title) return chart.title;
  return "col" in chart ? chart.col : "제목 없음";
}

/**
 * 차트 하나를 요약 섹션으로 변환한다.
 *
 * 집계는 buildChartItems를 그대로 호출한다 — 요약 표는 "차트가 말하는 것을 숫자로 보여주는"
 * 화면이므로 집계 로직이 갈라지면 차트와 표의 수치가 어긋난다. sort_by/max_items도 자동으로
 * 동일하게 적용된다.
 */
export function buildSummarySection(chart: ChartItem, rows: Row[]): SummarySection {
  const { items, totalCount } = buildChartItemsWithMeta(chart, rows);
  const total = items.reduce((sum, it) => sum + it.value, 0);
  const truncated = totalCount > items.length;

  let running = 0;
  const summaryRows: SummaryRow[] = items.map((it, i) => {
    const percent = total > 0 ? (it.value / total) * 100 : 0;
    running += percent;
    return {
      name: it.name,
      value: it.value,
      percent,
      rank: i + 1,
      cumulative: running,
    };
  });

  return { title: chartTitle(chart), rows: summaryRows, total, truncated };
}

export function resolveSummaryColumns(cfg: DashboardConfig): SummaryColumn[] {
  const picked = cfg.summary?.columns;
  if (!picked || picked.length === 0) return SUMMARY_DEFAULT_COLUMNS;
  // 설정 순서와 무관하게 항상 정해진 열 순서로 표시한다.
  return SUMMARY_COLUMN_ORDER.filter((c) => picked.includes(c));
}

export function buildSummary(
  cfg: DashboardConfig,
  filtered: Row[],
  projectName: string,
  totalRows: number,
  search: string,
  filters: Record<string, string>,
): SummaryDoc {
  // 텍스트 박스는 집계 대상이 아니므로 요약 표에서 제외한다.
  const charts: ChartItem[] = Array.isArray(cfg.charts)
    ? cfg.charts.filter((c): c is ChartItem => c.type !== "text")
    : [];
  const activeFilters = Object.entries(filters).filter(([, v]) => Boolean(v)) as [string, string][];

  return {
    projectName,
    columns: resolveSummaryColumns(cfg),
    sections: charts.map((c) => buildSummarySection(c, filtered)),
    filterNote: {
      totalRows,
      filteredRows: filtered.length,
      search,
      filters: activeFilters,
      get isFiltered() {
        return Boolean(this.search) || this.filters.length > 0;
      },
    },
  };
}

/** 필터 값에 씌워진 와일드카드(*값*)는 사용자에게 보여줄 때 벗긴다. */
export function displayFilterValue(raw: string): string {
  return raw.startsWith("*") && raw.endsWith("*") && raw.length > 2 ? raw.slice(1, -1) : raw;
}

export function formatPercent(v: number): string {
  return `${v.toFixed(1)}%`;
}

export function formatNumber(v: number): string {
  return v.toLocaleString("ko-KR");
}

/** 필터 기준 박스의 요약 문장. 화면과 내보내기(PDF/DOCX)가 같은 문구를 쓴다. */
export function filterSummaryLine(note: SummaryFilterNote): string {
  const total = formatNumber(note.totalRows);
  if (!note.isFiltered) return `전체 ${total}건 (필터 없음)`;
  const pct = note.totalRows > 0 ? (note.filteredRows / note.totalRows) * 100 : 0;
  return `전체 ${total}건 중 ${formatNumber(note.filteredRows)}건 (${formatPercent(pct)})`;
}

/** 필터 기준 박스의 조건 목록. */
export function filterConditionLines(note: SummaryFilterNote): string[] {
  const lines: string[] = [];
  if (note.search) lines.push(`검색어: "${note.search}"`);
  for (const [col, val] of note.filters) {
    lines.push(`${col}: ${displayFilterValue(val)}`);
  }
  return lines;
}
