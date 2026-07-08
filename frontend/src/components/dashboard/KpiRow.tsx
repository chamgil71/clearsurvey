import { useMemo } from "react";
import type { DashboardConfig, Row } from "@/types/dashboard";
import { aggNumericSum } from "@/lib/aggregate";

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
    <div className="kpi-row">
      {items.map((v, i) => {
        const origKpi = (cfg.kpi || [])[i];
        const isClickable =
          origKpi && (origKpi.type === "count_value" || origKpi.type === "total_rows");
        return (
          <div
            key={i}
            className={`kpi-card ${isClickable ? "cursor-pointer hover:shadow-md hover:border-primary/40 transition-all" : ""}`}
            onClick={() => isClickable && onKpiClick && onKpiClick(origKpi)}
            title={isClickable ? "클릭하여 이 조건으로 필터링" : undefined}
          >
            <div className="kpi-label">{v.label}</div>
            <div className="kpi-value">
              {Number(v.value).toLocaleString("ko-KR")}
              {v.unit}
            </div>
          </div>
        );
      })}
    </div>
  );
}
