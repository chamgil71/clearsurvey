import type { DashboardConfig, ProjectData } from "@/types/dashboard";

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

export function FilterBar({ data, cfg, search, filters, filteredCount, onSearch, onFilterChange, onReset }: Props) {
  const total = data.rows.length;
  const isFiltered = filteredCount !== total;
  const filterCols = cfg.list?.filter_cols || [];

  return (
    <div className="filter-section" style={{ display: "block" }}>
      <div className="filter-row">
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            id="global-search"
            type="search"
            placeholder="전체 검색 (기관명, GPU종류, 지역 등...)"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
          {isFiltered && <span className="filter-count">{filteredCount} / {total}건</span>}
        </div>
        <div className="filter-selects">
          {filterCols.map((col) => {
            const agg = data.aggregates?.[col] || {};
            const shortLabel = col.length > 8 ? col.slice(0, 8) + "…" : col;
            return (
              <select
                key={col}
                className="filter-select"
                value={filters[col] || ""}
                onChange={(e) => onFilterChange(col, e.target.value)}
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
          <button className="btn-ghost btn-sm" onClick={onReset}>
            ✕ 초기화
          </button>
        )}
      </div>
    </div>
  );
}