import { useMemo, useState } from "react";
import type { ColumnMeta, DashboardConfig, Row } from "@/types/dashboard";
import { visibleRowKeys } from "@/types/dashboard";
import { DetailPanel } from "./DetailPanel";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const PAGE_SIZE = 30;

export function DataTable({
  rows,
  cfg,
  search = "",
  columns,
  editable = false,
  saving = false,
  onSaveRow,
  editedCells,
}: {
  rows: Row[];
  cfg: DashboardConfig;
  search?: string;
  /** data.meta.columns — 편집 위젯 선택에 쓴다. */
  columns?: ColumnMeta[];
  editable?: boolean;
  saving?: boolean;
  /** (row, 변경된 컬럼만) → 저장. 실패 시 throw 해야 draft 가 보존된다. */
  onSaveRow?: (row: Row, changes: Record<string, string | number | null | undefined>) => Promise<void>;
  /** __row_id → {컬럼: 원래값}. 이미 손 편집된 필드를 표시하는 데 쓴다. */
  editedCells?: Record<string, Record<string, string | number | null | undefined>>;
}) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<{ col: string | null; dir: 1 | -1 }>({ col: null, dir: 1 });
  const [selected, setSelected] = useState<Row | null>(null);
  // 저장 안 된 변경이 있는데 드로어가 닫히면 입력이 사라진다. Sheet 는 오버레이 클릭·Esc 로도
  // 닫히므로 패널 안에서는 막을 수 없다 — Sheet 를 가진 여기서 가로챈다.
  const [dirty, setDirty] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  const closeDrawer = () => {
    setDirty(false);
    setConfirmClose(false);
    setSelected(null);
  };

  // visible_cols 미설정 시 행의 키를 그대로 쓰는데, 그러면 내부 식별 컬럼(__row_id)까지
  // 표에 뜬다 — visibleRowKeys 로 거른다.
  const visibleCols = useMemo(
    () => (cfg.list?.visible_cols?.length ? cfg.list.visible_cols : visibleRowKeys(rows[0])),
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
    // "전체 컬럼" 은 사용자가 보는 전체이지 내부 식별 컬럼까지가 아니다.
    const colsToExport = allColumns ? visibleRowKeys(rows[0]) : visibleCols;
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
                // 검색어 형광펜 — 테마가 정할 수 있도록 토큰을 쓴다(기본값은 기존 노랑과 동일 톤).
                backgroundColor: "var(--highlight)",
                color: "var(--highlight-foreground)",
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

      <Sheet
        open={!!selected}
        onOpenChange={(open) => {
          if (open) return;
          // 저장 안 된 변경이 있으면 닫지 않고 먼저 묻는다.
          // selected 를 그대로 두면 controlled Sheet 라 열린 상태가 유지된다.
          if (dirty) {
            setConfirmClose(true);
            return;
          }
          closeDrawer();
        }}
      >
        <SheetContent side="right" className="w-[460px] sm:w-[460px] max-w-full p-6">
          <DetailPanel
            row={selected}
            cfg={cfg}
            columns={columns}
            editable={editable}
            saving={saving}
            onSave={
              onSaveRow && selected ? (changes) => onSaveRow(selected, changes) : undefined
            }
            onDirtyChange={setDirty}
            editedCols={
              selected && editedCells
                ? editedCells[String(selected["__row_id"] ?? "")]
                : undefined
            }
            onClose={() => (dirty ? setConfirmClose(true) : closeDrawer())}
          />
        </SheetContent>
      </Sheet>

      <AlertDialog open={confirmClose} onOpenChange={setConfirmClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>저장하지 않은 변경이 있습니다</AlertDialogTitle>
            <AlertDialogDescription>
              닫으면 수정한 내용이 사라집니다. 계속 편집하시겠습니까?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>계속 편집</AlertDialogCancel>
            <AlertDialogAction onClick={closeDrawer}>변경 버리고 닫기</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
