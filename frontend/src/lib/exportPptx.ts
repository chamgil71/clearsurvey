import type { DashboardConfig, ProjectData, Row } from "@/types/dashboard";
import { buildChartItems, type ChartDatum } from "@/lib/aggregate";

// PPT 파일에 직접 임베드할 고정 hex 팔레트 (CSS 변수 var(--chart-N)은 PPT에서 해석 불가).
const PPT_PALETTE = ["4A90D9", "7ED321", "F5A623", "9B59B6", "E74C3C", "1ABC9C", "E67E22"];

interface KpiSummaryItem {
  label: string;
  value: number;
  unit: string;
}

// KpiRow.tsx의 값 계산 로직과 동일한 결과를 내도록 재구현 (화면 KPI와 동일 수치 보장).
export function buildKpiSummary(cfg: DashboardConfig, rows: Row[]): KpiSummaryItem[] {
  return (cfg.kpi || []).map((k) => {
    if (k.type === "total_rows") return { label: k.label, value: rows.length, unit: "건" };
    if (k.type === "count_value") {
      let valPattern = String(k.value ?? "").trim();
      if (valPattern.startsWith("=")) valPattern = valPattern.slice(1).trim();
      const cnt = rows.filter((r) => {
        const cellStr = String(r[k.col] ?? "").trim();
        if (valPattern.startsWith("<>") || valPattern.startsWith("!=")) {
          const clean = valPattern.replace("<>", "").replace("!=", "").trim();
          if (clean.startsWith("*") && clean.endsWith("*")) {
            return !cellStr.includes(clean.slice(1, -1).trim());
          }
          return cellStr !== clean;
        }
        if (valPattern.startsWith("*") && valPattern.endsWith("*")) {
          return cellStr.includes(valPattern.slice(1, -1).trim());
        } else if (valPattern.startsWith("*")) {
          return cellStr.endsWith(valPattern.slice(1).trim());
        } else if (valPattern.endsWith("*")) {
          return cellStr.startsWith(valPattern.slice(0, -1).trim());
        }
        return cellStr === valPattern;
      }).length;
      return { label: k.label, value: cnt, unit: "건" };
    }
    if (k.type === "sum") {
      const s = rows.reduce((acc, r) => {
        const val = r[k.col];
        if (val === null || val === undefined || val === "") return acc;
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
      }, 0);
      return { label: k.label, value: s % 1 === 0 ? s : Number(s.toFixed(1)), unit: "" };
    }
    return { label: (k as { label: string }).label, value: 0, unit: "" };
  });
}

function chartTitle(chart: DashboardConfig["charts"][number]): string {
  if (chart.title) return chart.title;
  return chart.type === "multibar" ? "차트" : chart.col;
}

// pptxgenjs ChartType 문자열(라이브러리 enum과 호환). doughnut/bar만 사용.
type PptChartKind = { kind: "doughnut" } | { kind: "bar"; horizontal: boolean };

function chartKind(type: string): PptChartKind {
  if (type === "donut") return { kind: "doughnut" };
  if (type === "hbar") return { kind: "bar", horizontal: true };
  // bar / multibar / histogram → 세로 막대
  return { kind: "bar", horizontal: false };
}

export async function exportToPptx(
  cfg: DashboardConfig,
  rows: Row[],
  data: ProjectData,
): Promise<void> {
  const { default: pptxgen } = await import("pptxgenjs");
  const pptx = new pptxgen();
  pptx.defineLayout({ name: "CS_WIDE", width: 10, height: 5.625 });
  pptx.layout = "CS_WIDE";

  const project = data.meta.project || "ClearSurvey";
  const generatedAt = data.meta.generated_at?.slice(0, 16).replace("T", " ") || "";

  // ── 슬라이드 1: 타이틀 ──
  const title = pptx.addSlide();
  title.background = { color: "F8FAFC" };
  title.addText(project, { x: 0.5, y: 1.6, w: 9, h: 0.9, fontSize: 36, bold: true, color: "1E293B" });
  title.addText("ClearSurvey 설문 분석 결과", {
    x: 0.5, y: 2.6, w: 9, h: 0.5, fontSize: 18, color: "4A90D9",
  });
  const subParts = [
    `총 응답수: ${rows.length.toLocaleString("ko-KR")}건`,
    generatedAt ? `생성일시: ${generatedAt}` : "",
  ].filter(Boolean);
  title.addText(subParts.join("    ·    "), {
    x: 0.5, y: 3.3, w: 9, h: 0.4, fontSize: 12, color: "64748B",
  });

  // ── 슬라이드 2: KPI 요약 ──
  const kpis = buildKpiSummary(cfg, rows);
  if (kpis.length > 0) {
    const kpiSlide = pptx.addSlide();
    kpiSlide.addText("KPI 요약", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 22, bold: true, color: "1E293B" });
    const tableRows = [
      [
        { text: "지표", options: { bold: true, fill: { color: "E2E8F0" } } },
        { text: "값", options: { bold: true, fill: { color: "E2E8F0" }, align: "right" as const } },
      ],
      ...kpis.map((k) => [
        { text: k.label, options: {} },
        { text: `${k.value.toLocaleString("ko-KR")}${k.unit}`, options: { align: "right" as const } },
      ]),
    ];
    kpiSlide.addTable(tableRows, {
      x: 0.5, y: 1.0, w: 9, colW: [6, 3], fontSize: 14, border: { type: "solid", color: "CBD5E1", pt: 1 },
    });
  }

  // ── 슬라이드 3~N: 차트 (2개/슬라이드) ──
  const chartsWithData = (cfg.charts || [])
    .map((chart) => ({ chart, items: buildChartItems(chart, rows) }))
    .filter(({ items }) => items.length > 0 && items.some((i) => i.value > 0));

  for (let i = 0; i < chartsWithData.length; i += 2) {
    const slide = pptx.addSlide();
    const pair = chartsWithData.slice(i, i + 2);
    pair.forEach(({ chart, items }, idx) => {
      const single = pair.length === 1;
      const x = single ? 0.75 : idx === 0 ? 0.4 : 5.15;
      const w = single ? 8.5 : 4.45;
      addChartToSlide(pptx, slide, chart, items, { x, y: 0.6, w, h: 4.4 });
    });
  }

  // ── 마지막: 출처 ──
  const last = pptx.addSlide();
  last.addText("데이터 출처", { x: 0.5, y: 2.2, w: 9, h: 0.5, fontSize: 18, bold: true, color: "1E293B" });
  last.addText(
    [generatedAt ? `데이터 기준일: ${generatedAt}` : "", "ClearSurvey"].filter(Boolean).join("    ·    "),
    { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 12, color: "64748B" },
  );

  await pptx.writeFile({ fileName: `${project}_dashboard.pptx` });
}

function addChartToSlide(
  pptx: any,
  slide: any,
  chart: DashboardConfig["charts"][number],
  items: ChartDatum[],
  pos: { x: number; y: number; w: number; h: number },
): void {
  const kind = chartKind(chart.type);
  const labels = items.map((it) => it.name);
  const values = items.map((it) => it.value);
  const t = chartTitle(chart);

  const common = {
    ...pos,
    showTitle: true,
    title: t,
    titleFontSize: 14,
    chartColors: PPT_PALETTE,
  };

  if (kind.kind === "doughnut") {
    slide.addChart(pptx.ChartType.doughnut, [{ name: t, labels, values }], {
      ...common,
      showLegend: true,
      legendPos: "b",
      holeSize: 55,
      dataLabelFontSize: 9,
    });
  } else {
    slide.addChart(pptx.ChartType.bar, [{ name: t, labels, values }], {
      ...common,
      barDir: kind.horizontal ? "bar" : "col",
      showLegend: false,
      showValue: true,
      dataLabelFontSize: 9,
      catAxisLabelFontSize: 9,
      valAxisLabelFontSize: 9,
    });
  }
}
