import { useMemo } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import type { ChartItem, ProjectData, Row } from "@/types/dashboard";
import { aggCategory, aggMultiValue, aggNumericSum } from "@/lib/aggregate";

const PALETTE = [
  "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
  "#06b6d4", "#f97316", "#84cc16", "#ec4899", "#6366f1",
  "#14b8a6", "#fb923c", "#a3e635", "#e879f9", "#38bdf8",
];

export function ChartCard({ chart, rows, data }: { chart: ChartItem; rows: Row[]; data: ProjectData }) {
  const items = useMemo(() => {
    if (chart.type === "multibar") {
      return [...chart.cols]
        .map((c) => ({ name: c.label || c.col, value: aggNumericSum(rows, c.col) }))
        .sort((a, b) => b.value - a.value);
    }
    const colMeta = data.meta.columns.find((c) => c.key === chart.col);
    let counts: Record<string, number>;
    if (colMeta?.type === "numeric") {
      const numRows = rows.filter((r) => typeof r[chart.col] === "number" && (r[chart.col] as number) > 0);
      counts = { [`${chart.col} > 0`]: numRows.length, "미입력/0": rows.length - numRows.length };
    } else if ((chart as { type: string }).type === "multivalue") {
      counts = aggMultiValue(rows, chart.col, (chart as { sep?: string }).sep || ",");
    } else {
      counts = aggCategory(rows, chart.col);
    }
    return Object.entries(counts).slice(0, 20).map(([name, value]) => ({ name, value }));
  }, [chart, rows, data]);

  const title = chart.title || (chart.type === "multibar" ? "" : chart.col);

  return (
    <div className="chart-card">
      <div className="chart-title">{title}</div>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={240}>
          {chart.type === "donut" ? (
            <PieChart>
              <Pie data={items} dataKey="value" nameKey="name" innerRadius={50} outerRadius={85}>
                {items.map((_, i) => (
                  <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => `${v}건`} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          ) : chart.type === "hbar" || chart.type === "multibar" ? (
            <BarChart data={items} layout="vertical" margin={{ left: 20, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,.05)" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `${v}건`} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {items.map((_, i) => (
                  <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <BarChart data={items}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,.05)" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `${v}건`} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {items.map((_, i) => (
                  <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}