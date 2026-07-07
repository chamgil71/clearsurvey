import { useEffect, useMemo, useState } from "react";
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
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export function ChartCard({ chart, rows, data }: { chart: ChartItem; rows: Row[]; data: ProjectData }) {
  const [mounted, setMounted] = useState(false);
  
  if (!chart) return null;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useMemo(() => {
    const sortBy = chart.sort_by || "value_desc";
    const limit = chart.max_items !== undefined ? chart.max_items : 20;

    if (chart.type === "multibar") {
      const safeCols = Array.isArray((chart as any).cols) ? (chart as any).cols : [];
      const list = safeCols.map((c: any) => ({ name: c.label || c.col, value: aggNumericSum(rows, c.col) }));
      if (sortBy === "value_desc") {
        list.sort((a, b) => b.value - a.value);
      } else if (sortBy === "value_asc") {
        list.sort((a, b) => a.value - b.value);
      } else if (sortBy === "name_asc") {
        list.sort((a, b) => a.name.localeCompare(b.name, "ko"));
      }
      return limit > 0 ? list.slice(0, limit) : list;
    }
    const colMeta = data.meta.columns.find((c) => c.key === chart.col);
    let counts: Record<string, number>;
    if (colMeta?.type === "numeric") {
      const numRows = rows.filter((r) => typeof r[chart.col] === "number" && (r[chart.col] as number) > 0);
      counts = { [`${chart.col} > 0`]: numRows.length, "미입력/0": rows.length - numRows.length };
    } else if ((chart as { type: string }).type === "multivalue") {
      counts = aggMultiValue(rows, chart.col, (chart as { sep?: string }).sep || ",");
    } else {
      const valCol = (chart as any).value_col;
      if (valCol) {
        const sums: Record<string, number> = {};
        rows.forEach((r) => {
          const groupVal = String(r[chart.col] ?? "").trim();
          if (groupVal) {
            const numVal = Number(r[valCol]) || 0;
            sums[groupVal] = (sums[groupVal] || 0) + numVal;
          }
        });
        counts = sums;
      } else {
        counts = aggCategory(rows, chart.col);
      }
    }

    const result = Object.entries(counts).map(([name, value]) => ({ name, value }));
    if (sortBy === "value_desc") {
      result.sort((a, b) => b.value - a.value);
    } else if (sortBy === "value_asc") {
      result.sort((a, b) => a.value - b.value);
    } else if (sortBy === "name_asc") {
      result.sort((a, b) => a.name.localeCompare(b.name, "ko"));
    }
    return limit > 0 ? result.slice(0, limit) : result;
  }, [chart, rows, data]);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.value, 0), [items]);

  const renderPieLabel = ({ name, percent }: { name: string; percent: number }) => {
    if (!chart.show_percent) return null;
    if (percent < 0.05) return null; // 5% 미만은 텍스트가 겹치므로 표시 안 함
    return `${name} (${(percent * 100).toFixed(1)}%)`;
  };

  const hasData = items.length > 0 && items.some((item) => item.value > 0);
  const title = chart.title || (chart.type === "multibar" ? "" : chart.col);
  const unit = (chart as any).value_col ? "" : "건";

  const formatTooltip = (v: number, name: string) => {
    if (!chart.show_percent) {
      return [`${v}${unit}`, name];
    }
    const pct = total > 0 ? ((v / total) * 100).toFixed(1) : "0.0";
    return [`${v}${unit} (${pct}%)`, name];
  };

  let cardStyle: React.CSSProperties = {};
  let chartHeight = 240;
  let pieOuterRadius = 80;
  let pieInnerRadius = 50;

  // 정석 마이그레이션을 통과하지 못하고 메모리에 잔존해 있던 구버전 데이터에 대한 최종 렌더링 방어선
  let layout = chart.layout;
  if (!layout) {
    if ((chart as any).width === 2 || (chart as any).width === "2") {
      layout = "2x1";
    } else {
      layout = "1x1";
    }
  }

  if (layout === "2x1") {
    cardStyle = { gridColumn: "span 2" };
  } else if (layout === "2x2") {
    cardStyle = { gridColumn: "span 2", gridRow: "span 2" };
    chartHeight = 540;
    pieOuterRadius = 180;
    pieInnerRadius = 110;
  } else if (layout === "full") {
    cardStyle = { gridColumn: "1 / -1" };
  } else if (layout === "0.5x1") {
    cardStyle = { maxWidth: "100%" };
  }

  return (
    <div className="chart-card" style={cardStyle}>
      <div className="chart-title">{title || "Untitled Chart"}</div>
      <div className="chart-wrap" style={{ minHeight: chartHeight, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {!mounted ? (
          <div className="text-xs text-muted-foreground/40">차트 로딩 중...</div>
        ) : !hasData ? (
          <div className="text-xs text-muted-foreground/50 text-center px-4 leading-relaxed">
            ⚠️ 표시할 데이터가 없습니다.<br />
            <span className="text-[10px] opacity-75 font-medium">(설정 탭에서 대상 컬럼 매핑을 확인하세요)</span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={chartHeight}>
            {chart.type === "donut" ? (
              <PieChart>
                <Pie
                  data={items}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={pieInnerRadius}
                  outerRadius={pieOuterRadius}
                  label={renderPieLabel}
                  labelLine={false}
                >
                  {items.map((_, i) => (
                    <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={formatTooltip} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            ) : chart.type === "hbar" || chart.type === "multibar" ? (
              <BarChart data={items} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,.05)" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 11 }} />
                <Tooltip formatter={formatTooltip} />
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
                <Tooltip formatter={formatTooltip} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {items.map((_, i) => (
                    <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                  ))}
                </Bar>
              </BarChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}