import { useMemo, useState } from "react";
import type { DashboardConfig, Row } from "@/types/dashboard";
import { DetailPanel } from "./DetailPanel";

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
    const blob = new Blob(["\uFEFF" + header + "\n" + body], { type: "text/csv;charset=utf-8;" });
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
      <div
        className="list-header"
        style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}
      >
        <span className="list-count-label" style={{ fontSize: "13px", color: "var(--text-muted)" }}>
          총{" "}
          <strong style={{ color: "var(--text-primary)" }}>{sorted.length.toLocaleString()}</strong>
          건
        </span>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: "6px" }}>
          <button className="btn-ghost btn-sm" onClick={() => exportCSV(false)}>
            ⬇ CSV 내보내기 (화면 컬럼)
          </button>
          <button
            className="btn-ghost btn-sm"
            onClick={() => exportCSV(true)}
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            ⬇ CSV 내보내기 (전체 컬럼)
          </button>
        </div>
      </div>

      <div className="list-split-full" style={{ width: "100%" }}>
        <div className="list-left" style={{ width: "100%" }}>
          <div
            id="list-table-wrap"
            style={{ width: "100%", overflowX: "auto", borderRadius: "var(--radius)" }}
          >
            <table className="data-table" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {visibleCols.map((col) => {
                    const active = sort.col === col;
                    return (
                      <th
                        key={col}
                        className={`sortable${active ? " sorted" : ""}`}
                        onClick={() => toggleSort(col)}
                        style={{ cursor: "pointer", userSelect: "none" }}
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
                      className="empty-row"
                      style={{ textAlign: "center", padding: "30px" }}
                    >
                      검색 결과가 없습니다
                    </td>
                  </tr>
                ) : (
                  pageRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`data-row${selected === row ? " selected" : ""}`}
                      onClick={() => setSelected(row)}
                      style={{ cursor: "pointer" }}
                    >
                      {visibleCols.map((col) => {
                        const v = row[col];
                        const display = v == null ? "" : String(v);
                        return (
                          <td key={col} title={display}>
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
          <div
            id="list-pager"
            style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "16px" }}
          >
            <span className="page-info">
              {curPage} / {totalPages} 페이지
            </span>
            {curPage > 1 && (
              <button className="btn-ghost btn-sm" onClick={() => setPage((p) => p - 1)}>
                ◀ 이전
              </button>
            )}
            {curPage < totalPages && (
              <button className="btn-ghost btn-sm" onClick={() => setPage((p) => p + 1)}>
                다음 ▶
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sliding Drawer Backdrop */}
      <div
        className={`drawer-backdrop ${selected ? "open" : ""}`}
        onClick={() => setSelected(null)}
      />

      {/* Floating sliding drawer */}
      <aside className={`drawer-panel ${selected ? "open" : ""}`}>
        <DetailPanel row={selected} cfg={cfg} onClose={() => setSelected(null)} />
      </aside>
    </>
  );
}
