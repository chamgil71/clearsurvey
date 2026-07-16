import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import type { ChartItem, ProjectData, Row } from "@/types/dashboard";
import { buildChartItems } from "@/lib/aggregate";
import { cn } from "@/lib/utils";

const PALETTE = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const paletteColor = (index: number) => PALETTE[index % PALETTE.length];

export function ChartCard({
  chart,
  rows,
  data,
  onSelect,
}: {
  chart: ChartItem;
  rows: Row[];
  data: ProjectData;
  /** 교차필터: 조각/막대 클릭 시 (컬럼, 값) 전달 */
  onSelect?: (col: string, value: string) => void;
}) {
  const [mounted, setMounted] = useState(false);

  if (!chart) return null;

  useEffect(() => {
    setMounted(true);
  }, []);

  // 팔레트 색을 데이터에 실어 보낸다. recharts는 이 fill로 조각/막대를 칠하고
  // 범례 payload에도 같은 색을 넣는다.
  //
  // <Cell />은 recharts 3에서 deprecated(4.0 제거)라 걷어냈다. 공식 권장 대체재는 shape prop이나,
  // shape로 칠하면 범례 payload에는 색이 실리지 않아 범례 견본이 전부 회색(#808080)으로 죽는다.
  // 데이터에 fill을 싣는 방식은 조각·막대·범례가 한 번에 같은 색을 쓰므로 이쪽을 택했다.
  const items = useMemo(
    () => buildChartItems(chart, rows).map((item, i) => ({ ...item, fill: paletteColor(i) })),
    [chart, rows],
  );

  const total = useMemo(() => items.reduce((sum, item) => sum + item.value, 0), [items]);

  // recharts 3의 PieLabelRenderProps는 name/percent를 optional로 넘긴다.
  const renderPieLabel = ({ name, percent }: { name?: string | number; percent?: number }) => {
    if (!chart.show_percent) return null;
    if (percent == null || percent < 0.05) return null;
    return `${name} (${(percent * 100).toFixed(1)}%)`;
  };

  const hasData = items.length > 0 && items.some((item) => item.value > 0);
  const title = chart.title || (chart.type === "multibar" ? "" : chart.col);
  const unit = (chart as any).value_col ? "" : "건";

  // 교차필터 대상: 카테고리형 donut/bar/hbar만 (histogram/multibar 제외).
  // numeric 컬럼이라도 고유값이 적으면(예: 연도) unique_count가 채워져 있으므로
  // 이산 카테고리로 보고 클릭 필터를 허용한다 — 연속형 수치(금액 등)만 제외된다.
  const chartCol = "col" in chart ? chart.col : undefined;
  const chartColMeta = chartCol ? data.meta.columns.find((c) => c.key === chartCol) : undefined;
  const isDiscreteNumeric =
    chartColMeta?.type === "numeric" && (chartColMeta.unique_count ?? Infinity) <= 40;
  const catCol =
    (chart.type === "donut" || chart.type === "bar" || chart.type === "hbar") &&
    (chartColMeta?.type !== "numeric" || isDiscreteNumeric)
      ? chartCol
      : null;
  const handleChartClick = (d: { name?: string | number }) => {
    if (catCol && onSelect && d?.name != null) onSelect(catCol, String(d.name));
  };
  const clickable = !!(catCol && onSelect);

  // recharts 3의 Tooltip Formatter는 value를 number로 좁혀주지 않는다(ValueType: string | number | Array).
  const formatTooltip = (value: unknown, name: unknown): [string, string] => {
    const v = typeof value === "number" ? value : Number(value);
    if (!chart.show_percent) {
      return [`${v}${unit}`, String(name)];
    }
    const pct = total > 0 ? ((v / total) * 100).toFixed(1) : "0.0";
    return [`${v}${unit} (${pct}%)`, String(name)];
  };

  let chartHeight = 220;
  let pieOuterRadius = 82;
  let pieInnerRadius = 50;

  let layout = chart.layout;
  if (!layout) {
    if ((chart as any).width === 2 || (chart as any).width === "2") {
      layout = "2x1";
    } else {
      layout = "1x1";
    }
  }

  if (layout === "2x2") {
    chartHeight = 560;
    pieOuterRadius = 185;
    pieInnerRadius = 115;
  }

  const cardClassName = cn(
    "bg-card border border-border/60 rounded-xl p-3 shadow-sm",
    // 단일 폭 카드(1x1/0.5x1)는 열 개수가 적은 화면에서 지나치게 늘어나지 않도록 최대 폭 제한.
    // 2x1/2x2/full은 의도적으로 여러 열에 걸쳐 확장되어야 하므로 제한하지 않음.
    (layout === "1x1" || layout === "0.5x1") && "max-w-[560px]",
    layout === "2x1" && "col-span-2 max-sm:col-span-1",
    layout === "2x2" && "col-span-2 max-sm:col-span-1 row-span-2",
    layout === "full" && "col-span-full",
  );

  return (
    <div className={cardClassName}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-semibold text-foreground">{title || "Untitled Chart"}</div>
        {clickable && (
          <span
            className="text-[10px] text-muted-foreground bg-muted/50 border border-border/60 px-1.5 py-0.5 rounded cursor-help"
            title="차트를 클릭하면 해당 값으로 전체 필터가 적용됩니다."
          >
            클릭=필터
          </span>
        )}
      </div>
      <div
        className="relative"
        style={{
          minHeight: chartHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!mounted ? (
          <div className="text-xs text-muted-foreground/40">차트 로딩 중...</div>
        ) : !hasData ? (
          <div className="text-xs text-muted-foreground/50 text-center px-4 leading-relaxed">
            ⚠️ 표시할 데이터가 없습니다.
            <br />
            <span className="text-[10px] opacity-75 font-medium">
              (설정 탭에서 대상 컬럼 매핑을 확인하세요)
            </span>
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
                  onClick={handleChartClick}
                  cursor={clickable ? "pointer" : undefined}
                />
                <Tooltip formatter={formatTooltip} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            ) : chart.type === "hbar" || chart.type === "multibar" ? (
              <BarChart data={items} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,.05)" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 11 }} />
                <Tooltip formatter={formatTooltip} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} onClick={handleChartClick} cursor={clickable ? "pointer" : undefined} />
              </BarChart>
            ) : (
              <BarChart data={items}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,.05)" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={formatTooltip} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} onClick={handleChartClick} cursor={clickable ? "pointer" : undefined} />
              </BarChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
