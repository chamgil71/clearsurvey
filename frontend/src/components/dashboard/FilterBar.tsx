import type { DashboardConfig, ProjectData } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

// Radix Select는 빈 문자열 value를 허용하지 않으므로 "전체" 옵션에 sentinel 값을 사용한다.
const ALL_VALUE = "__all__";

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
        <div className="flex items-center flex-1 min-w-[200px] max-w-[500px] gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <Input
              id="global-search"
              type="search"
              placeholder="전체 검색..."
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="h-8 pl-8 text-sm"
            />
          </div>
          {isFiltered && (
            <span className="text-xs text-primary font-semibold whitespace-nowrap">
              {filteredCount} / {total}건
            </span>
          )}
        </div>

        <div className="flex gap-1.5 flex-wrap flex-1 justify-end">
          {filterCols.map((col) => {
            const agg = data.aggregates?.[col];
            const shortLabel = col.length > 8 ? col.slice(0, 8) + "…" : col;

            // 고유값이 너무 많아 백엔드가 aggregates를 생략한 컬럼(예: 업종 소분류)은
            // 드롭다운을 채울 옵션이 없으므로 자유 검색 입력으로 대체한다.
            // 값은 항상 와일드카드로 감싸 matchesPattern의 부분 일치(*kw*) 경로를 태운다.
            if (!agg || Object.keys(agg).length === 0) {
              const raw = filters[col] || "";
              const displayVal = raw.startsWith("*") && raw.endsWith("*") ? raw.slice(1, -1) : raw;
              return (
                <Input
                  key={col}
                  type="text"
                  value={displayVal}
                  onChange={(e) => {
                    const v = e.target.value.trim();
                    onFilterChange(col, v ? `*${v}*` : "");
                  }}
                  placeholder={`${shortLabel} 검색`}
                  className="h-8 w-32 text-xs"
                />
              );
            }

            return (
              <Select
                key={col}
                value={filters[col] || ALL_VALUE}
                onValueChange={(v) => onFilterChange(col, v === ALL_VALUE ? "" : v)}
              >
                <SelectTrigger className="h-8 w-auto min-w-[7rem] text-xs">
                  <SelectValue placeholder={`— ${shortLabel} —`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL_VALUE} className="text-xs">
                    — {shortLabel} —
                  </SelectItem>
                  {Object.entries(agg).map(([v, cnt]) => (
                    <SelectItem key={v} value={v} className="text-xs">
                      {v} ({cnt})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          })}
        </div>

        {isFiltered && (
          <Button variant="ghost" size="sm" onClick={onReset} className="text-xs shrink-0 gap-1">
            <X className="h-3.5 w-3.5" /> 초기화
          </Button>
        )}
      </div>
    </div>
  );
}
