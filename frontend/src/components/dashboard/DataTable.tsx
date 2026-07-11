import { useMemo, useState } from "react";
import type { DashboardConfig, Row } from "@/types/dashboard";
import { DetailPanel } from "./DetailPanel";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const PAGE_SIZE = 30;

export function DataTable({
  rows,
  cfg,
  search = "",
}: {
  rows: Row[];
  cfg: DashboardConfig;
  search?: string;
}) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<{ col: string | null; dir: 1 | -1 }>({ col: null, dir: 1 });
  const [selected, setSelected] = useState<Row | null>(null);

  const visibleCols = useMemo(
    () => (cfg.list?.visible_cols?.length ? cfg.list.visible_cols : Object.keys(rows[0] || {})),
    [cfg, rows],
  );

  const sorted = useMemo(() => {
    if (!sort.col) return rows;
    const col = sort.col;
    return [...rows].sort((a, b) => {
      const av = a[col];
      const bv = b[col];
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * sort.dir;
      return String(av).localeCompare(String(bv), "ko") * sort.dir;
    });
  }, [rows, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const curPage = Math.min(page, totalPages);
  const pageRows = sorted.slice((curPage - 1) * PAGE_SIZE, curPage * PAGE_SIZE);

  const toggleSort = (col: string) => {
    setSort((s) => (s.col === col ? { col, dir: (s.dir * -1) as 1 | -1 } : { col, dir: 1 }));
  };

  const exportCSV = (allColumns: boolean = false) => {
    const colsToExport = allColumns ? Object.keys(rows[0] || {}) : visibleCols;
    const header = colsToExport.join(",");
    const body = sorted
      .map((row) =>
        colsToExport.map((col) => `"${String(row[col] ?? "").replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");
    const blob = new Blob(["﻿" + header + "\n" + body], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const filename = allColumns ? "export_all_columns.csv" : "export_visible_columns.csv";
    const a = Object.assign(document.createElement("a"), { href: url, download: filename });
    a.click();
    URL.revokeObjectURL(url);
  };

  const highlightText = (text: string, searchWord: string) => {
    if (!searchWord.trim()) return text;
    const parts = text.split(
      new RegExp(`(${searchWord.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "gi"),
    );
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === searchWord.toLowerCase() ? (
            <mark
              key={i}
              style={{
                backgroundColor: "#fef08a",
                color: "#1e293b",
                padding: "0 2px",
                borderRadius: "3px",
                fontWeight: "600",
              }}
            >
              {part}
            </mark>
          ) : (
            part
          ),
        )}
      </span>
    );
  };

  return (
    <>
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-sm text-muted-foreground">
          총 <strong className="text-foreground">{sorted.length.toLocaleString()}</strong>건
        </span>
        <div className="flex-1" />
        <div className="flex gap-1.5">
          <Button variant="outline" size="sm" className="text-xs" onClick={() => exportCSV(false)}>
            ⬇ CSV 내보내기 (화면 컬럼)
          </Button>
          <Button variant="outline" size="sm" className="text-xs border-primary/50 text-primary hover:bg-primary/10" onClick={() => exportCSV(true)}>
            ⬇ CSV 내보내기 (전체 컬럼)
          </Button>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border border-border/60 shadow-sm">
        <table className="w-full border-collapse text-xs bg-card">
          <thead>
            <tr>
              {visibleCols.map((col) => {
                const active = sort.col === col;
                return (
                  <th
                    key={col}
                    onClick={() => toggleSort(col)}
                    className={`px-3 py-2.5 text-left font-semibold whitespace-nowrap cursor-pointer select-none text-primary-foreground ${active ? "bg-primary" : "bg-primary/80 hover:bg-primary"}`}
                  >
                    {col}
                    {active ? (sort.dir === 1 ? " ▲" : " ▼") : ""}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 ? (
              <tr>
                <td
                  colSpan={visibleCols.length}
                  className="text-center text-muted-foreground py-8"
                >
                  검색 결과가 없습니다
                </td>
              </tr>
            ) : (
              pageRows.map((row, i) => (
                <tr
                  key={i}
                  onClick={() => setSelected(row)}
                  className={`cursor-pointer border-b border-border/40 transition-colors ${
                    selected === row
                      ? "bg-primary text-primary-foreground"
                      : i % 2 === 0
                        ? "hover:bg-muted/60"
                        : "bg-muted/30 hover:bg-muted/60"
                  }`}
                >
                  {visibleCols.map((col) => {
                    const v = row[col];
                    const display = v == null ? "" : String(v);
                    return (
                      <td key={col} title={display} className="px-3 py-2 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {highlightText(display, search)}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2.5 mt-4 text-xs text-muted-foreground">
        <span>{curPage} / {totalPages} 페이지</span>
        {curPage > 1 && (
          <Button variant="outline" size="sm" className="text-xs h-7" onClick={() => setPage((p) => p - 1)}>
            ◀ 이전
          </Button>
        )}
        {curPage < totalPages && (
          <Button variant="outline" size="sm" className="text-xs h-7" onClick={() => setPage((p) => p + 1)}>
            다음 ▶
          </Button>
        )}
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent side="right" className="w-[460px] sm:w-[460px] max-w-full p-6">
          <DetailPanel row={selected} cfg={cfg} onClose={() => setSelected(null)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
