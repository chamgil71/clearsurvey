import { useMemo } from "react";
import type { DashboardConfig, Row } from "@/types/dashboard";
import { aggNumericSum } from "@/lib/aggregate";

export function KpiRow({ rows, cfg }: { rows: Row[]; cfg: DashboardConfig }) {
  const items = useMemo(() => {
    return (cfg.kpi || []).map((k) => {
      if (k.type === "total_rows") return { label: k.label, value: rows.length, unit: "건" };
      if (k.type === "count_value") {
        const cnt = rows.filter((r) => String(r[k.col] ?? "").trim() === k.value).length;
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
      {items.map((v, i) => (
        <div key={i} className="kpi-card">
          <div className="kpi-label">{v.label}</div>
          <div className="kpi-value">
            {Number(v.value).toLocaleString("ko-KR")}
            {v.unit}
          </div>
        </div>
      ))}
    </div>
  );
}