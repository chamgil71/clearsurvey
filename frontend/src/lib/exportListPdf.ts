import type { Row } from "@/types/dashboard";
import { fixModernColorsInPlace } from "@/lib/pdfColorFix";

// DataTable.tsx는 화면에 PAGE_SIZE(30)행만 그린다 — 화면 DOM을 그대로 캡처하면 필터링된
// 전체가 아니라 현재 페이지 30행만 PDF에 담긴다. 필터 결과 전체를 오프스크린에 다시 그려 캡처한다.
//
// 전체 행을 통째로 한 캔버스에 담지 않는다. 예전 구현은 수만 행짜리 표(예: 15,000행)를 단일
// html2canvas 호출로 찍었는데, 캔버스 높이가 행 수에 비례해 브라우저 한계(대략 한 변 32,767px,
// 총 픽셀 268M 안팎)에 근접·초과하거나, 그 전에 래스터화 자체가 메인 스레드를 오래 막아
// "생성중"에서 멈춘 것처럼 보였다. 행을 청크로 나눠 청크마다 작은 캔버스를 찍고 jsPDF로 직접
// 페이지를 이어붙인다(exportPdfCharts.ts의 카드별 캡처와 같은 패턴). 청크 크기가 고정이므로
// 전체 행 수가 얼마든 캔버스 크기는 항상 같은 안전한 범위에 머문다.
//
// jsPDF의 text()를 쓰지 않는 이유(exportPdfCharts.ts와 동일): 내장 폰트가
// Helvetica/Times/Courier뿐이라 한글이 깨진다. html2canvas(DOM→캔버스 캡처) 경로를 쓴다.

/** A4 가로 (mm). */
const PAGE_W = 297;
const PAGE_H = 210;
const MARGIN = 8;
/** 오프스크린 wrapper 폭(px). 화면 DataTable과 무관하게 인쇄용으로 고정. */
const WRAPPER_PX = 1400;
/**
 * 청크당 행 수. 행높이 ~22px 기준 캔버스 높이 ≈ 250 × 22 × scale(2) ≈ 11,000px로,
 * 브라우저 캔버스 한계(약 32,767px/268M px)에 여유를 두면서도 15,000행 표 기준
 * html2canvas 호출을 60회 안팎으로 묶어 총 캡처 시간을 합리적으로 유지한다.
 */
const ROWS_PER_CHUNK = 250;

export interface ListPdfMeta {
  search?: string;
  filterSummary?: string;
  generatedAt?: string;
}

/** rows를 size개씩 잘라 담는다. 캔버스 크기를 행 수와 무관하게 일정하게 유지하기 위한 분할 단위. */
export function chunkRows<T>(rows: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < rows.length; i += size) out.push(rows.slice(i, i + size));
  return out;
}

function buildTitleBlock(projectName: string, totalRows: number, meta: ListPdfMeta): HTMLElement {
  const titleBlock = document.createElement("div");
  titleBlock.style.cssText =
    "margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #2563eb;";
  const titleLine = document.createElement("div");
  titleLine.style.cssText = "font-size:16px;font-weight:700;color:#111;";
  titleLine.textContent = `${projectName} · 목록 (${totalRows.toLocaleString()}건)`;
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
  return titleBlock;
}

/**
 * 헤더(thead) + 청크 행(tbody) 하나짜리 표.
 * 청크마다 새로 만들어 캡처하므로 헤더가 매 청크(=매 캔버스)에 자동으로 반복된다.
 * startIndex는 전체 rows 기준 절대 인덱스 — 청크 경계와 무관하게 줄무늬 배경이 이어지도록 한다.
 */
function buildChunkTable(visibleCols: string[], chunk: Row[], startIndex: number): HTMLElement {
  const table = document.createElement("table");
  table.style.cssText = "width:100%;border-collapse:collapse;table-layout:fixed;";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
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
  chunk.forEach((row, i) => {
    const tr = document.createElement("tr");
    tr.style.cssText = (startIndex + i) % 2 === 1 ? "background:#f3f4f6;" : "";
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
  return table;
}

interface Shot {
  dataUrl: string;
  width: number;
  height: number;
}

/** 요소 하나를 캡처한다. oklch/oklab 색은 캡처 직전에 rgb로 고정했다가 직후 복원한다. */
async function captureAsImage(
  html2canvas: typeof import("html2canvas").default,
  el: HTMLElement,
): Promise<Shot> {
  const restore = fixModernColorsInPlace(el);
  try {
    const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
    return {
      dataUrl: canvas.toDataURL("image/jpeg", 0.95),
      width: canvas.width,
      height: canvas.height,
    };
  } finally {
    restore();
  }
}

export async function exportListToPdf(
  rows: Row[],
  visibleCols: string[],
  projectName: string,
  isDark: boolean,
  meta: ListPdfMeta = {},
): Promise<void> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  // 다크모드에서 캡처하면 어두운 배경이 그대로 인쇄되므로 캡처 동안 .dark를 벗긴다.
  const root = document.documentElement;
  const wasDark = isDark && root.classList.contains("dark");
  if (wasDark) root.classList.remove("dark");

  const wrapper = document.createElement("div");
  Object.assign(wrapper.style, {
    position: "fixed",
    left: "-9999px",
    top: "0",
    width: `${WRAPPER_PX}px`,
    background: "#ffffff",
    padding: "24px 28px",
    fontFamily: getComputedStyle(document.body).fontFamily || "sans-serif",
    fontSize: "11px",
    color: "#111",
  });
  document.body.appendChild(wrapper);

  try {
    const titleBlock = buildTitleBlock(projectName, rows.length, meta);
    wrapper.appendChild(titleBlock);
    const titleShot = await captureAsImage(html2canvas, titleBlock);
    wrapper.removeChild(titleBlock);

    const chunkShots: Shot[] = [];
    let startIndex = 0;
    for (const chunk of chunkRows(rows, ROWS_PER_CHUNK)) {
      const table = buildChunkTable(visibleCols, chunk, startIndex);
      wrapper.appendChild(table);
      chunkShots.push(await captureAsImage(html2canvas, table));
      wrapper.removeChild(table);
      startIndex += chunk.length;
    }

    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "landscape" });
    const contentW = PAGE_W - MARGIN * 2;
    const maxH = PAGE_H - MARGIN * 2;
    let cursorY = MARGIN;

    const place = (shot: Shot) => {
      let w = contentW;
      let h = (shot.height / shot.width) * contentW;
      // 극단적으로 청크 하나가 한 페이지보다 커지는 경우의 방어적 축소(letterbox).
      if (h > maxH) {
        w = w * (maxH / h);
        h = maxH;
      }
      if (cursorY + h > PAGE_H - MARGIN && cursorY > MARGIN) {
        pdf.addPage();
        cursorY = MARGIN;
      }
      pdf.addImage(shot.dataUrl, "JPEG", MARGIN, cursorY, w, h);
      cursorY += h;
    };

    place(titleShot);
    chunkShots.forEach(place);

    pdf.save(`${projectName}_list.pdf`);
  } finally {
    document.body.removeChild(wrapper);
    if (wasDark) root.classList.add("dark");
  }
}
