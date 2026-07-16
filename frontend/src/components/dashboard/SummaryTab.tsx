import { useMemo } from "react";
import type { DashboardConfig, Row, SummaryColumn } from "@/types/dashboard";
import {
  buildSummary,
  filterConditionLines,
  filterSummaryLine,
  formatNumber,
  formatPercent,
  SUMMARY_COLUMN_LABELS,
  type SummaryDoc,
  type SummaryRow,
  type SummarySection,
} from "@/lib/summary";

function cellValue(row: SummaryRow, col: SummaryColumn): string {
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

function SectionTable({ section, columns }: { section: SummarySection; columns: SummaryColumn[] }) {
  return (
    <section className="mb-6 break-inside-avoid">
      <h3 className="text-sm font-semibold text-foreground mb-2">{section.title}</h3>
      {section.rows.length === 0 ? (
        <p className="text-xs text-muted-foreground/70 py-2">표시할 데이터가 없습니다.</p>
      ) : (
        <table className="w-full text-xs border border-border/60 border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border/60 px-2 py-1.5 text-left font-medium">항목</th>
              {columns.map((c) => (
                <th
                  key={c}
                  className="border border-border/60 px-2 py-1.5 text-right font-medium w-24"
                >
                  {SUMMARY_COLUMN_LABELS[c]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i} className="even:bg-muted/20">
                <td className="border border-border/60 px-2 py-1">{row.name}</td>
                {columns.map((c) => (
                  <td key={c} className="border border-border/60 px-2 py-1 text-right tabular-nums">
                    {cellValue(row, c)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="font-semibold bg-muted/40">
              <td className="border border-border/60 px-2 py-1">
                합계
                {/* max_items로 잘린 차트는 합계가 전체가 아니라 상위 N개 합계다. 숨기지 않고 명시한다. */}
                {section.truncated && (
                  <span className="ml-1 font-normal text-muted-foreground">
                    (상위 {section.rows.length}개 기준)
                  </span>
                )}
              </td>
              {columns.map((c) => (
                <td key={c} className="border border-border/60 px-2 py-1 text-right tabular-nums">
                  {c === "value"
                    ? formatNumber(section.total)
                    : c === "percent" || c === "cumulative"
                      ? formatPercent(section.total > 0 ? 100 : 0)
                      : ""}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
}

function FilterNoteBox({ doc }: { doc: SummaryDoc }) {
  const conditions = filterConditionLines(doc.filterNote);
  return (
    <div className="mt-8 border border-border rounded-md p-3 bg-muted/30 break-inside-avoid">
      <div className="text-xs font-semibold text-foreground mb-1">필터 기준</div>
      <div className="text-xs text-muted-foreground">{filterSummaryLine(doc.filterNote)}</div>
      {conditions.length > 0 && (
        <ul className="mt-1.5 space-y-0.5">
          {conditions.map((line, i) => (
            <li key={i} className="text-xs text-muted-foreground">
              · {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * 요약 탭 — 각 차트의 집계 결과를 차트 순서대로 표로 보여준다.
 * 집계는 lib/summary.ts가 buildChartItems를 재사용하므로 차트 탭과 수치가 항상 일치한다.
 */
export function SummaryTab({
  cfg,
  filtered,
  projectName,
  totalRows,
  search,
  filters,
  contentRef,
}: {
  cfg: DashboardConfig;
  filtered: Row[];
  projectName: string;
  totalRows: number;
  search: string;
  filters: Record<string, string>;
  /** PDF 캡처 대상. 내보내기 버튼은 부모(index.tsx) 헤더에 있다. */
  contentRef?: React.Ref<HTMLDivElement>;
}) {
  const doc = useMemo(
    () => buildSummary(cfg, filtered, projectName, totalRows, search, filters),
    [cfg, filtered, projectName, totalRows, search, filters],
  );

  return (
    <div ref={contentRef} className="mx-auto max-w-[900px] bg-background">
      <h2 className="text-lg font-bold text-foreground mb-5">[{doc.projectName}] 요약</h2>

      {doc.sections.length === 0 ? (
        <p className="text-sm text-muted-foreground py-8 text-center">
          표시할 차트가 없습니다.
          <br />
          <span className="text-xs opacity-75">
            (설정 탭에서 차트를 추가하면 여기에 요약 표가 나타납니다)
          </span>
        </p>
      ) : (
        doc.sections.map((s, i) => <SectionTable key={i} section={s} columns={doc.columns} />)
      )}

      <FilterNoteBox doc={doc} />
    </div>
  );
}
