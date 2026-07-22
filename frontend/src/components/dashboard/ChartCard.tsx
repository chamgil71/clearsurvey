import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart,
  Bar,
  LabelList,
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
  // 문자열만 반환하면 recharts가 폰트 크기를 지정하지 않은 <Text>로 감싸버려 범례(11px)보다
  // 훨씬 크게 렌더링되고 카드 밖으로 넘친다 — 위치·크기를 직접 계산한 <text>를 반환해야 한다.
  const RADIAN = Math.PI / 180;
  const renderPieLabel = (props: {
    cx?: number;
    cy?: number;
    midAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
    name?: string | number;
    percent?: number;
  }) => {
    if (!chart.show_labels) return null;
    const { cx, cy, midAngle, innerRadius, outerRadius, name, percent } = props;
    if (percent == null || percent < 0.05) return null;
    if (cx == null || cy == null || midAngle == null || innerRadius == null || outerRadius == null) {
      return null;
    }
    const radius = outerRadius + 14;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const text = chart.show_percent ? `${name} (${(percent * 100).toFixed(1)}%)` : `${name}`;
    return (
      <text
        x={x}
        y={y}
        fontSize={11}
        fill="var(--muted-foreground)"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {text}
      </text>
    );
  };

  const hasData = items.length > 0 && items.some((item) => item.value > 0);
  const title = chart.title || (chart.type === "multibar" ? "" : chart.col);
  const unit = (chart as any).value_col ? "" : "건";

  // 막대 위/옆에 값 라벨을 표시할지는 show_labels로, 그 라벨에 비율(%)을 같이 적을지는
  // show_percent로 따로 제어한다. vertical(세로 막대)은 막대 위쪽, horizontal(가로 막대)은
  // 막대 오른쪽에 표시.
  // recharts 3의 LabelList content prop 타입이 x/y/width/height/value를 string|number|null
  // 등 넓게 잡아줘 좁히지 않는다(formatTooltip과 같은 이유) — any로 받아 직접 좁힌다.
  const renderBarLabel = (orientation: "vertical" | "horizontal") => (props: any) => {
      if (!chart.show_labels) return null;
      if (props.x == null || props.y == null || props.width == null || props.height == null || props.value == null) {
        return null;
      }
      const x = Number(props.x);
      const y = Number(props.y);
      const width = Number(props.width);
      const height = Number(props.height);
      const value = Number(props.value);
      const text = chart.show_percent
        ? `${value}${unit} (${total > 0 ? ((value / total) * 100).toFixed(1) : "0.0"}%)`
        : `${value}${unit}`;
      const labelX = orientation === "horizontal" ? x + width + 4 : x + width / 2;
      const labelY = orientation === "horizontal" ? y + height / 2 : y - 6;
      return (
        <text
          x={labelX}
          y={labelY}
          fontSize={11}
          fill="var(--muted-foreground)"
          textAnchor={orientation === "horizontal" ? "start" : "middle"}
          dominantBaseline="central"
        >
          {text}
        </text>
      );
    };

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
          // data-export-hide: 클릭 유도 표시라 정지된 문서(PDF)에선 의미가 없다 → 캡처에서 제외.
          <span
            data-export-hide
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
                  // recharts 기본값(startAngle=0, endAngle=360)은 3시 방향에서 시작해
                  // 반시계로 돈다 — 조각이 몇 개인지·값 분포가 어떤지에 따라 그 이음매를
                  // 넘나드는 조각이 매번 달라 카드마다 "시작점이 제각각"으로 보인다.
                  // 12시에서 시작해 정렬된 순서(sort_by, 기본 value_desc) 그대로
                  // 시계 방향으로 돌게 고정한다.
                  startAngle={90}
                  endAngle={-270}
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
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 11 }} />
                <Tooltip formatter={formatTooltip} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} onClick={handleChartClick} cursor={clickable ? "pointer" : undefined}>
                  <LabelList dataKey="value" content={renderBarLabel("horizontal")} />
                </Bar>
              </BarChart>
            ) : (
              <BarChart data={items}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={formatTooltip} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} onClick={handleChartClick} cursor={clickable ? "pointer" : undefined}>
                  <LabelList dataKey="value" content={renderBarLabel("vertical")} />
                </Bar>
              </BarChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
