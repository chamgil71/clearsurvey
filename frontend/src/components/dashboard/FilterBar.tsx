import type { DashboardConfig, ProjectData } from "@/types/dashboard";
import { Button } from "@/components/ui/button";

interface Props {
  data: ProjectData;
  cfg: DashboardConfig;
  search: string;
  filters: Record<string, string>;
  filteredCount: number;
  onSearch: (s: string) => void;
  onFilterChange: (col: string, val: string) => void;
  onReset: () => void;
}

export function FilterBar({
  data,
  cfg,
  search,
  filters,
  filteredCount,
  onSearch,
  onFilterChange,
  onReset,
}: Props) {
  const total = data.rows.length;
  const isFiltered = filteredCount !== total;
  const filterCols = cfg.list?.filter_cols || [];

  return (
    <div className="bg-card border-b border-border px-6 py-2.5 mt-4">
      <div className="flex items-center gap-2 flex-wrap justify-between">
        <div className="relative flex items-center flex-1 min-w-[200px] max-w-[500px]">
          <span className="absolute left-2.5 text-sm text-muted-foreground pointer-events-none select-none">
            🔍
          </span>
          <input
            id="global-search"
            type="search"
            placeholder="전체 검색 (기관명, GPU종류, 지역 등...)"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {isFiltered && (
            <span className="text-xs text-primary font-semibold whitespace-nowrap ml-2">
              {filteredCount} / {total}건
            </span>
          )}
        </div>

        <div className="flex gap-1.5 flex-wrap flex-1 justify-end">
          {filterCols.map((col) => {
            const agg = data.aggregates?.[col] || {};
            const shortLabel = col.length > 8 ? col.slice(0, 8) + "…" : col;
            return (
              <select
                key={col}
                value={filters[col] || ""}
                onChange={(e) => onFilterChange(col, e.target.value)}
                className="text-xs px-2.5 py-1.5 border border-input rounded-md bg-background text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">— {shortLabel} —</option>
                {Object.entries(agg).map(([v, cnt]) => (
                  <option key={v} value={v}>
                    {v} ({cnt})
                  </option>
                ))}
              </select>
            );
          })}
        </div>

        {isFiltered && (
          <Button variant="ghost" size="sm" onClick={onReset} className="text-xs shrink-0">
            ✕ 초기화
          </Button>
        )}
      </div>
    </div>
  );
}
