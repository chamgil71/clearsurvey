import { useMemo } from "react";
import type { DashboardConfig, Row } from "@/types/dashboard";
import { aggNumericSum } from "@/lib/aggregate";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KpiRow({
  rows,
  cfg,
  onKpiClick,
}: {
  rows: Row[];
  cfg: DashboardConfig;
  onKpiClick?: (k: any) => void;
}) {
  const items = useMemo(() => {
    return (cfg.kpi || []).map((k) => {
      if (k.type === "total_rows") return { label: k.label, value: rows.length, unit: "건" };
      if (k.type === "count_value") {
        let valPattern = String(k.value ?? "").trim();
        if (valPattern.startsWith("=")) valPattern = valPattern.slice(1).trim();
        const cnt = rows.filter((r) => {
          const cellStr = String(r[k.col] ?? "").trim();

          // 1. Negation (e.g. <> Seoul or != Seoul)
          if (valPattern.startsWith("<>") || valPattern.startsWith("!=")) {
            const cleanPattern = valPattern.replace("<>", "").replace("!=", "").trim();
            if (cleanPattern.startsWith("*") && cleanPattern.endsWith("*")) {
              const kw = cleanPattern.slice(1, -1).trim();
              return !cellStr.includes(kw);
            }
            return cellStr !== cleanPattern;
          }

          // 2. Wildcards (e.g. *Seoul*)
          if (valPattern.startsWith("*") && valPattern.endsWith("*")) {
            const kw = valPattern.slice(1, -1).trim();
            return cellStr.includes(kw);
          } else if (valPattern.startsWith("*")) {
            const kw = valPattern.slice(1).trim();
            return cellStr.endsWith(kw);
          } else if (valPattern.endsWith("*")) {
            const kw = valPattern.slice(0, -1).trim();
            return cellStr.startsWith(kw);
          }

          // 3. Exact match
          return cellStr === valPattern;
        }).length;
        return { label: k.label, value: cnt, unit: "건" };
      }
      if (k.type === "sum") {
        const s = aggNumericSum(rows, k.col);
        return { label: k.label, value: s % 1 === 0 ? s : Number(s.toFixed(1)), unit: "" };
      }
      return { label: (k as { label: string }).label, value: 0, unit: "" };
    });
  }, [rows, cfg]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3 px-6 pt-3">
      {items.map((v, i) => {
        const origKpi = (cfg.kpi || [])[i];
        const isClickable =
          origKpi && (origKpi.type === "count_value" || origKpi.type === "total_rows");
        return (
          <Card
            key={i}
            className={cn(
              "shadow-sm border-border/60",
              isClickable && "cursor-pointer hover:shadow-md hover:border-primary/40 transition-all",
            )}
            onClick={() => isClickable && onKpiClick && onKpiClick(origKpi)}
            title={isClickable ? "클릭하여 이 조건으로 필터링" : undefined}
          >
            <CardContent className="px-4 py-3">
              <div className="text-[11px] text-muted-foreground mb-1">{v.label}</div>
              <div className="text-2xl font-bold text-primary">
                {Number(v.value).toLocaleString("ko-KR")}
                {v.unit}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
