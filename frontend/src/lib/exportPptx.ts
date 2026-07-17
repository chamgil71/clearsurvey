import type PptxGenJS from "pptxgenjs";
import type { DashboardConfig, ProjectData, Row } from "@/types/dashboard";
import { buildChartItems, type ChartDatum } from "@/lib/aggregate";
import { readChartPaletteHex, readTokenHex, withLightMode } from "@/theme/readColors";

// 테마를 못 읽는 상황(SSR·테스트)의 최후 기본값. 실제 색은 readPptTheme()이 현재 테마에서 읽는다.
// 여기 값을 화면 색으로 착각하지 말 것 — 화면은 항상 CSS 변수를 따른다.
const FALLBACK_PALETTE = ["4A90D9", "7ED321", "F5A623", "9B59B6", "E74C3C", "1ABC9C", "E67E22"];

interface PptTheme {
  palette: string[];
  /** 본문·제목 텍스트 */
  fg: string;
  /** 보조 텍스트(부제·각주) */
  muted: string;
  /** 강조(부제 제목 등) */
  accent: string;
  /** 타이틀 슬라이드 배경 */
  bg: string;
  /** 표 헤더 채움 */
  tableHead: string;
  /** 표 테두리 */
  border: string;
}

/**
 * 현재 적용 중인 테마에서 PPT 색을 읽는다.
 *
 * 다크모드에서 그대로 읽으면 어두운 배경·밝은 글자가 PPT에 박혀 인쇄물로 못 쓰므로,
 * PDF와 동일하게 라이트 기준으로 읽는다(withLightMode).
 */
function readPptTheme(): PptTheme {
  return withLightMode(() => ({
    palette: readChartPaletteHex(FALLBACK_PALETTE),
    fg: readTokenHex("foreground", "1E293B"),
    muted: readTokenHex("muted-foreground", "64748B"),
    accent: readTokenHex("primary", "4A90D9"),
    bg: readTokenHex("muted", "F8FAFC"),
    tableHead: readTokenHex("secondary", "E2E8F0"),
    border: readTokenHex("border", "CBD5E1"),
  }));
}

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

  const th = readPptTheme();
  const project = data.meta.project || "ClearSurvey";
  const generatedAt = data.meta.generated_at?.slice(0, 16).replace("T", " ") || "";

  // ── 슬라이드 1: 타이틀 ──
  const title = pptx.addSlide();
  title.background = { color: th.bg };
  title.addText(project, {
    x: 0.5,
    y: 1.6,
    w: 9,
    h: 0.9,
    fontSize: 36,
    bold: true,
    color: th.fg,
  });
  title.addText("ClearSurvey 설문 분석 결과", {
    x: 0.5,
    y: 2.6,
    w: 9,
    h: 0.5,
    fontSize: 18,
    color: th.accent,
  });
  const subParts = [
    `총 응답수: ${rows.length.toLocaleString("ko-KR")}건`,
    generatedAt ? `생성일시: ${generatedAt}` : "",
  ].filter(Boolean);
  title.addText(subParts.join("    ·    "), {
    x: 0.5,
    y: 3.3,
    w: 9,
    h: 0.4,
    fontSize: 12,
    color: th.muted,
  });

  // ── 슬라이드 2: KPI 요약 ──
  const kpis = buildKpiSummary(cfg, rows);
  if (kpis.length > 0) {
    const kpiSlide = pptx.addSlide();
    kpiSlide.addText("KPI 요약", {
      x: 0.5,
      y: 0.3,
      w: 9,
      h: 0.5,
      fontSize: 22,
      bold: true,
      color: th.fg,
    });
    const tableRows = [
      [
        { text: "지표", options: { bold: true, fill: { color: th.tableHead } } },
        {
          text: "값",
          options: { bold: true, fill: { color: th.tableHead }, align: "right" as const },
        },
      ],
      ...kpis.map((k) => [
        { text: k.label, options: {} },
        {
          text: `${k.value.toLocaleString("ko-KR")}${k.unit}`,
          options: { align: "right" as const },
        },
      ]),
    ];
    kpiSlide.addTable(tableRows, {
      x: 0.5,
      y: 1.0,
      w: 9,
      colW: [6, 3],
      fontSize: 14,
      border: { type: "solid", color: th.border, pt: 1 },
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
      addChartToSlide(pptx, slide, chart, items, { x, y: 0.6, w, h: 4.4 }, th);
    });
  }

  // ── 마지막: 출처 ──
  const last = pptx.addSlide();
  last.addText("데이터 출처", {
    x: 0.5,
    y: 2.2,
    w: 9,
    h: 0.5,
    fontSize: 18,
    bold: true,
    color: th.fg,
  });
  last.addText(
    [generatedAt ? `데이터 기준일: ${generatedAt}` : "", "ClearSurvey"]
      .filter(Boolean)
      .join("    ·    "),
    { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 12, color: th.muted },
  );

  await pptx.writeFile({ fileName: `${project}_dashboard.pptx` });
}

function addChartToSlide(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  chart: DashboardConfig["charts"][number],
  items: ChartDatum[],
  pos: { x: number; y: number; w: number; h: number },
  th: PptTheme,
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
    chartColors: th.palette,
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
