import type { SummaryColumn } from "@/types/dashboard";
import {
  filterConditionLines,
  filterSummaryLine,
  formatNumber,
  formatPercent,
  SUMMARY_COLUMN_LABELS,
  type SummaryDoc,
  type SummaryRow,
} from "@/lib/summary";

function cellText(row: SummaryRow, col: SummaryColumn): string {
  switch (col) {
    case "value":
      return formatNumber(row.value);
    case "percent":
      return formatPercent(row.percent);
    case "rank":
      return String(row.rank);
    case "cumulative":
      return formatPercent(row.cumulative);
  }
}

/**
 * 요약 문서를 DOCX로 내보낸다.
 *
 * PDF와 달리 화면 DOM을 캡처하지 않고 SummaryDoc에서 직접 생성한다 — DOM 캡처는 편집 불가에
 * oklch 파싱 같은 렌더링 취약점을 물려받지만, 데이터에서 만들면 깨끗하고 표가 실제 표로 나온다.
 * docx는 4.6MB라 동적 import로 불러 초기 번들에서 제외한다(html2pdf/pptxgenjs와 같은 패턴).
 */
export async function exportSummaryToDocx(doc: SummaryDoc): Promise<void> {
  const {
    Document,
    Packer,
    Paragraph,
    Table,
    TableRow,
    TableCell,
    TextRun,
    HeadingLevel,
    AlignmentType,
    WidthType,
  } = await import("docx");

  const HEADER_BG = "F1F5F9";
  const TOTAL_BG = "E2E8F0";

  const textCell = (text: string, opts?: { bold?: boolean; right?: boolean; bg?: string }) =>
    new TableCell({
      shading: opts?.bg ? { fill: opts.bg } : undefined,
      children: [
        new Paragraph({
          alignment: opts?.right ? AlignmentType.RIGHT : AlignmentType.LEFT,
          children: [new TextRun({ text, bold: opts?.bold, size: 18 })],
        }),
      ],
    });

  const children: (InstanceType<typeof Paragraph> | InstanceType<typeof Table>)[] = [
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: `[${doc.projectName}] 요약`, bold: true, size: 32 })],
    }),
  ];

  if (doc.sections.length === 0) {
    children.push(
      new Paragraph({ children: [new TextRun({ text: "표시할 차트가 없습니다.", size: 20 })] }),
    );
  }

  for (const section of doc.sections) {
    children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 300, after: 120 },
        children: [new TextRun({ text: section.title, bold: true, size: 24 })],
      }),
    );

    if (section.rows.length === 0) {
      children.push(
        new Paragraph({ children: [new TextRun({ text: "표시할 데이터가 없습니다.", size: 18 })] }),
      );
      continue;
    }

    const headerRow = new TableRow({
      tableHeader: true,
      children: [
        textCell("항목", { bold: true, bg: HEADER_BG }),
        ...doc.columns.map((c) =>
          textCell(SUMMARY_COLUMN_LABELS[c], { bold: true, right: true, bg: HEADER_BG }),
        ),
      ],
    });

    const bodyRows = section.rows.map(
      (row) =>
        new TableRow({
          children: [
            textCell(row.name),
            ...doc.columns.map((c) => textCell(cellText(row, c), { right: true })),
          ],
        }),
    );

    const totalLabel = section.truncated ? `합계 (상위 ${section.rows.length}개 기준)` : "합계";
    const totalRow = new TableRow({
      children: [
        textCell(totalLabel, { bold: true, bg: TOTAL_BG }),
        ...doc.columns.map((c) =>
          textCell(
            c === "value"
              ? formatNumber(section.total)
              : c === "percent" || c === "cumulative"
                ? formatPercent(section.total > 0 ? 100 : 0)
                : "",
            { bold: true, right: true, bg: TOTAL_BG },
          ),
        ),
      ],
    });

    children.push(
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [headerRow, ...bodyRows, totalRow],
      }),
    );
  }

  // 하단 필터 기준 박스 — 테두리 있는 1칸 표로 표현한다.
  const noteLines = [
    filterSummaryLine(doc.filterNote),
    ...filterConditionLines(doc.filterNote).map((l) => `· ${l}`),
  ];
  children.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              shading: { fill: "F8FAFC" },
              children: [
                new Paragraph({
                  spacing: { after: 60 },
                  children: [new TextRun({ text: "필터 기준", bold: true, size: 18 })],
                }),
                ...noteLines.map(
                  (line) => new Paragraph({ children: [new TextRun({ text: line, size: 18 })] }),
                ),
              ],
            }),
          ],
        }),
      ],
    }),
  );

  const docxFile = new Document({
    sections: [
      {
        properties: {
          page: {
            // A4 세로 — twip 단위(1mm ≈ 56.7twip). 210mm × 297mm, 여백 20mm.
            size: { width: 11906, height: 16838 },
            margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 },
          },
        },
        children,
      },
    ],
  });

  const blob = await Packer.toBlob(docxFile);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${doc.projectName}_summary.docx`;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
}
