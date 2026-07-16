import type { ChartItem, Row } from "@/types/dashboard";

export interface ChartDatum {
  name: string;
  value: number;
}

function sortChartData(list: ChartDatum[], sortBy: string): void {
  if (sortBy === "value_desc") {
    list.sort((a, b) => b.value - a.value);
  } else if (sortBy === "value_asc") {
    list.sort((a, b) => a.value - b.value);
  } else if (sortBy === "name_asc") {
    list.sort((a, b) => a.name.localeCompare(b.name, "ko", { numeric: true }));
  } else if (sortBy === "name_desc") {
    list.sort((a, b) => b.name.localeCompare(a.name, "ko", { numeric: true }));
  }
}

// 차트 카드의 데이터 계산 로직. `ChartCard.tsx`의 `items` useMemo와 동일한 결과를 내는
// 순수 함수로, 컴포넌트 밖(PPT 내보내기 등)에서도 동일 수치를 재사용하기 위해 분리했다.
// histogram은 bar와 동일하게 카테고리 집계로 처리된다.
export function buildChartItems(chart: ChartItem, rows: Row[]): ChartDatum[] {
  const sortBy = chart.sort_by || "value_desc";
  const limit = chart.max_items !== undefined ? chart.max_items : 20;

  if (chart.type === "multibar") {
    const safeCols = Array.isArray(chart.cols) ? chart.cols : [];
    const list: ChartDatum[] = safeCols.map((c) => ({
      name: String(c.label || c.col),
      value: aggNumericSum(rows, c.col),
    }));
    sortChartData(list, sortBy);
    return limit > 0 ? list.slice(0, limit) : list;
  }

  let counts: Record<string, number>;
  if ((chart as { type: string }).type === "multivalue") {
    counts = aggMultiValue(rows, chart.col, (chart as { sep?: string }).sep || ",");
  } else {
    const valCol = (chart as { value_col?: string }).value_col;
    if (valCol) {
      const sums: Record<string, number> = {};
      rows.forEach((r) => {
        const groupVal = String(r[chart.col] ?? "").trim();
        if (groupVal) {
          const numVal = Number(r[valCol]) || 0;
          sums[groupVal] = (sums[groupVal] || 0) + numVal;
        }
      });
      counts = sums;
    } else {
      counts = aggCategory(rows, chart.col);
    }
  }

  const result: ChartDatum[] = Object.entries(counts).map(([name, value]) => ({ name, value }));
  sortChartData(result, sortBy);
  return limit > 0 ? result.slice(0, limit) : result;
}

export function aggCategory(rows: Row[], col: string): Record<string, number> {
  const counts: Record<string, number> = {};
  rows.forEach((r) => {
    const v = String(r[col] ?? "").trim();
    if (v) counts[v] = (counts[v] || 0) + 1;
  });
  return Object.fromEntries(Object.entries(counts).sort((a, b) => b[1] - a[1]));
}

export function aggNumericSum(rows: Row[], col: string): number {
  return rows.reduce((s, r) => {
    const val = r[col];
    if (val === null || val === undefined || val === "") return s;
    const num = Number(val);
    return s + (isNaN(num) ? 0 : num);
  }, 0);
}

export function aggMultiValue(rows: Row[], col: string, sep = ","): Record<string, number> {
  const counts: Record<string, number> = {};
  rows.forEach((r) => {
    const v = String(r[col] ?? "").trim();
    if (!v) return;
    v.split(sep).forEach((part) => {
      const p = part.trim();
      if (p) counts[p] = (counts[p] || 0) + 1;
    });
  });
  return Object.fromEntries(Object.entries(counts).sort((a, b) => b[1] - a[1]));
}

// Matches a cell string against a filter pattern.
// Supports: exact match, comma-split multi-value, wildcards (*kw*, kw*, *kw),
// negation (<>val, !=val, <>*kw*, !=*kw*), and leading = for exact.
export function matchesPattern(cellStr: string, pattern: string): boolean {
  let p = pattern.trim();
  if (p.startsWith("=")) p = p.slice(1).trim();

  if (p.startsWith("<>") || p.startsWith("!=")) {
    const clean = p.replace(/^(<>|!=)/, "").trim();
    if (clean.startsWith("*") && clean.endsWith("*")) {
      return !cellStr.includes(clean.slice(1, -1).trim());
    }
    return cellStr !== clean;
  }

  if (p.startsWith("*") && p.endsWith("*")) return cellStr.includes(p.slice(1, -1).trim());
  if (p.startsWith("*")) return cellStr.endsWith(p.slice(1).trim());
  if (p.endsWith("*")) return cellStr.startsWith(p.slice(0, -1).trim());

  return cellStr
    .split(",")
    .map((s) => s.trim())
    .includes(p);
}

export function filterRows(rows: Row[], search: string, filters: Record<string, string>): Row[] {
  const hasFilters = Object.values(filters).some(Boolean);
  if (!search && !hasFilters) return rows;
  const term = search.toLowerCase();
  return rows.filter((row) => {
    if (term) {
      const match = Object.values(row).some(
        (v) => v != null && String(v).toLowerCase().includes(term),
      );
      if (!match) return false;
    }
    for (const [col, val] of Object.entries(filters)) {
      if (!val) continue;
      const rowValStr = String(row[col] ?? "").trim();
      if (!matchesPattern(rowValStr, val)) return false;
    }
    return true;
  });
}
