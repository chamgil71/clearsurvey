import type { Row } from "@/types/dashboard";

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

export function filterRows(
  rows: Row[],
  search: string,
  filters: Record<string, string>,
): Row[] {
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
      if (String(row[col] ?? "").trim() !== val) return false;
    }
    return true;
  });
}