import type { Row } from "@/types/dashboard";
import { exportToPdf } from "@/lib/exportPdf";

// DataTable.tsx는 화면에 PAGE_SIZE(30)행만 그린다 — 화면 DOM을 그대로 캡처하면 필터링된
// 전체가 아니라 현재 페이지 30행만 PDF에 담긴다. DetailPanel.tsx의 오프스크린 캡처 패턴을
// 그대로 따라 전체 필터 결과를 담은 <table>을 화면 밖에 새로 그려서 캡처한다.
//
// jsPDF의 text()를 쓰지 않는 이유(exportPdfCharts.ts와 동일): 내장 폰트가
// Helvetica/Times/Courier뿐이라 한글이 깨진다. html2pdf(DOM→canvas 캡처) 경로를 쓴다.
// 표는 일반 블록 흐름(<table>)이라 대시보드 차트 그리드(CSS Grid)와 달리
// break-inside-avoid가 실제로 동작해 행이 페이지 경계에서 잘리지 않는다.

export interface ListPdfMeta {
  search?: string;
  filterSummary?: string;
  generatedAt?: string;
}

export async function exportListToPdf(
  rows: Row[],
  visibleCols: string[],
  projectName: string,
  isDark: boolean,
  meta: ListPdfMeta = {},
): Promise<void> {
  const wrapper = document.createElement("div");
  Object.assign(wrapper.style, {
    position: "fixed",
    left: "-9999px",
    top: "0",
    width: "1400px",
    background: "#ffffff",
    padding: "24px 28px",
    fontFamily: getComputedStyle(document.body).fontFamily || "sans-serif",
    fontSize: "11px",
    color: "#111",
  });

  const titleBlock = document.createElement("div");
  titleBlock.style.cssText =
    "margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #2563eb;";
  const titleLine = document.createElement("div");
  titleLine.style.cssText = "font-size:16px;font-weight:700;color:#111;";
  titleLine.textContent = `${projectName} · 목록 (${rows.length.toLocaleString()}건)`;
  titleBlock.appendChild(titleLine);

  const metaParts: string[] = [];
  if (meta.generatedAt) metaParts.push(`생성일시: ${meta.generatedAt}`);
  if (meta.search) metaParts.push(`검색어: "${meta.search}"`);
  if (meta.filterSummary) metaParts.push(`필터: ${meta.filterSummary}`);
  if (metaParts.length) {
    const metaLine = document.createElement("div");
    metaLine.style.cssText = "font-size:10px;color:#6b7280;margin-top:4px;";
    metaLine.textContent = metaParts.join("  ·  ");
    titleBlock.appendChild(metaLine);
  }
  wrapper.appendChild(titleBlock);

  const table = document.createElement("table");
  table.style.cssText = "width:100%;border-collapse:collapse;table-layout:fixed;";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headRow.className = "break-inside-avoid";
  visibleCols.forEach((col) => {
    const th = document.createElement("th");
    th.textContent = col;
    th.style.cssText =
      "padding:6px 8px;text-align:left;font-weight:700;font-size:10px;color:#fff;background:#2563eb;border:1px solid #1d4ed8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;";
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  rows.forEach((row, i) => {
    const tr = document.createElement("tr");
    tr.className = "break-inside-avoid";
    tr.style.cssText = i % 2 === 1 ? "background:#f3f4f6;" : "";
    visibleCols.forEach((col) => {
      const v = row[col];
      const td = document.createElement("td");
      td.textContent = v == null ? "" : String(v);
      td.style.cssText =
        "padding:5px 8px;border:1px solid #e5e7eb;font-size:10px;color:#111;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px;";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrapper.appendChild(table);

  document.body.appendChild(wrapper);
  try {
    await exportToPdf(wrapper, projectName, isDark, { orientation: "landscape", suffix: "list" });
  } finally {
    document.body.removeChild(wrapper);
  }
}
