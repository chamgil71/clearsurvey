import React, { useState } from "react";
import type { ProjectConfig } from "@/hooks/useManagerApi";
import type { DashboardConfig, KpiItem, ChartItem } from "@/types/dashboard";
import {
  Settings,
  BarChart3,
  ListCollapse,
  RotateCcw,
  Download,
  Eye,
  Play,
  Upload,
  Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ColumnConfigTab,
  ColumnDef,
  NEEDS_FLAG_KEYWORD,
  NEEDS_BACKUP_COL,
  NEEDS_SOURCE_COLS
} from "./config/ColumnConfigTab";
import { ChartConfigCard } from "./config/ChartConfigCard";

const CHART_TYPES = ["donut", "bar", "hbar", "histogram", "multibar"] as const;

const EMPTY_DASHBOARD: DashboardConfig = {
  version: 1,
  kpi: [],
  charts: [],
  list: { visible_cols: [], filter_cols: [] },
};

function normDashboard(d: DashboardConfig | null | undefined): DashboardConfig {
  if (!d || Object.keys(d).length === 0) return EMPTY_DASHBOARD;
  return {
    ...EMPTY_DASHBOARD,
    ...d,
    kpi: d.kpi ?? [],
    charts: d.charts ?? [],
    list: d.list ?? EMPTY_DASHBOARD.list,
  };
}

interface Step2Props {
  projectName: string;
  config: {
    config: ProjectConfig;
    dashboard: DashboardConfig | null;
  } | null;
  onSaveConfig: (config: ProjectConfig, dashboard: DashboardConfig | null) => Promise<void>;
  onBack: () => void;
  /** 저장 후 화면만 이동 (파이프라인 실행 없음) — "저장 후 대시보드로" 버튼 */
  onNext: () => void;
  /** 저장 후 화면 이동 + 파이프라인 실행 — "저장 후 파이프라인 가동" 버튼 */
  onNextAndRun: () => void;
  loading: boolean;
}

export const Step2_ConfigEditor: React.FC<Step2Props> = ({
  projectName,
  config,
  onSaveConfig,
  onBack,
  onNext,
  onNextAndRun,
  loading,
}) => {
  const [localConfig, setLocalConfig] = useState<ProjectConfig | null>(config?.config ?? null);
  const [localDashboard, setLocalDashboard] = useState<DashboardConfig>(
    normDashboard(config?.dashboard),
  );
  const [activeSubTab, setActiveSubTab] = useState<"columns" | "dashboard">("columns");

  React.useEffect(() => {
    if (config) {
      setLocalConfig(config.config);
      setLocalDashboard(normDashboard(config.dashboard));
    }
  }, [config]);

  // ── Column Handlers ──────────────────────────────────────────────────────────

  const handleColumnChange = (index: number, patch: Partial<ColumnDef>) => {
    setLocalConfig((prev: any) => {
      const columns = [...prev.columns];
      columns[index] = { ...columns[index], ...patch };
      return { ...prev, columns };
    });
  };

  const handleExcludeToggle = (index: number, currentlyExcluded: boolean) => {
    if (currentlyExcluded) {
      handleColumnChange(index, { transform: "copy" });
    } else {
      handleColumnChange(index, { transform: "exclude" });
    }
  };

  const handleTransformChange = (index: number, transform: string) => {
    setLocalConfig((prev: any) => {
      const columns = [...prev.columns];
      const col: ColumnDef = { ...columns[index] };
      col.transform = transform || null;

      if (!NEEDS_FLAG_KEYWORD.has(transform)) {
        delete col.flag_keyword;
      }
      if (!NEEDS_BACKUP_COL.has(transform)) {
        delete col.backup_col;
      }
      if (!NEEDS_SOURCE_COLS.has(transform)) {
        delete col.source_cols;
      }

      columns[index] = col;
      return { ...prev, columns };
    });
  };

  const addColumn = () => {
    setLocalConfig((prev: any) => ({
      ...prev,
      columns: [
        ...prev.columns,
        {
          output_col: "new_column",
          source_col: prev.columns.length + 1,
          transform: "copy",
          include_in_slicer: false,
        } satisfies ColumnDef,
      ],
    }));
  };

  const deleteColumn = (index: number) => {
    setLocalConfig((prev: any) => ({
      ...prev,
      columns: prev.columns.filter((_: ColumnDef, i: number) => i !== index),
    }));
  };

  const moveColumn = (index: number, dir: -1 | 1) => {
    setLocalConfig((prev: any) => {
      const cols = [...prev.columns];
      const target = index + dir;
      if (target < 0 || target >= cols.length) return prev;
      [cols[index], cols[target]] = [cols[target], cols[index]];
      return { ...prev, columns: cols };
    });
  };

  // ── Theme / Layout Handlers ──────────────────────────────────────────────────
  const handleReset = () => {
    if (config) {
      if (window.confirm("정말로 모든 설정을 원본으로 되돌리시겠습니까?")) {
        setLocalConfig(config.config);
        setLocalDashboard(normDashboard(config.dashboard));
      }
    }
  };

  const handleSaveToFile = () => {
    try {
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(
          JSON.stringify({ config: localConfig, dashboard: localDashboard }, null, 2),
        );
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", `${projectName}_config_backup.json`);
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } catch (err) {
      console.error("Backup download failed", err);
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleLoadFromFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        if (parsed.config && parsed.dashboard !== undefined) {
          if (window.confirm("불러온 JSON 설정으로 현재 화면의 설정을 모두 덮어쓰시겠습니까?")) {
            setLocalConfig(parsed.config);
            setLocalDashboard(normDashboard(parsed.dashboard));
          }
        } else {
          alert("유효한 ClearSurvey 설정 파일이 아닙니다.");
        }
      } catch (err) {
        console.error("Failed to parse JSON config", err);
        alert("파일을 읽는 중 오류가 발생했습니다.");
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };
    reader.readAsText(file);
  };

  const updateTheme = (patch: Partial<DashboardConfig["theme"]>) => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      theme: { ...(prev.theme || {}), ...patch },
    }));
  };

  const updateLayout = (patch: Partial<DashboardConfig["layout"]>) => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      layout: { ...(prev.layout || {}), ...patch },
    }));
  };

  const updateSummary = (patch: Partial<DashboardConfig["summary"]>) => {
    setLocalDashboard((prev) => ({
      ...prev,
      summary: { ...(prev.summary || {}), ...patch },
    }));
  };

  // ── KPI Handlers ─────────────────────────────────────────────────────────────

  const updateKpi = (i: number, patch: Record<string, any>) => {
    setLocalDashboard((prev: any) => {
      const kpi = [...prev.kpi];
      kpi[i] = { ...kpi[i], ...patch };
      return { ...prev, kpi };
    });
  };

  const addKpi = () => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      kpi: [...prev.kpi, { label: "새 KPI", type: "total_rows" }],
    }));
  };

  // ── Chart Handlers ───────────────────────────────────────────────────────────

  const updateChart = (i: number, patch: Record<string, any>) => {
    setLocalDashboard((prev: any) => {
      const charts = [...prev.charts];
      charts[i] = { ...charts[i], ...patch };
      return { ...prev, charts };
    });
  };

  const addChart = () => {
    const firstCol = (localConfig?.columns || []).find((c: any) => c.transform !== "exclude");
    setLocalDashboard((prev: any) => ({
      ...prev,
      charts: [
        ...prev.charts,
        { col: firstCol?.output_col ?? "", type: "donut", title: "새 차트" },
      ],
    }));
  };

  const deleteChart = (i: number) => {
    setLocalDashboard((prev: any) => ({
      ...prev,
      charts: prev.charts.filter((_: unknown, j: number) => j !== i),
    }));
  };

  const moveChart = (index: number, dir: -1 | 1) => {
    setLocalDashboard((prev: any) => {
      const charts = [...prev.charts];
      const target = index + dir;
      if (target < 0 || target >= charts.length) return prev;
      [charts[index], charts[target]] = [charts[target], charts[index]];
      return { ...prev, charts };
    });
  };

  const updateDashboardList = (
    patch: Partial<{ visible_cols: string[]; filter_cols: string[] }>,
  ) => {
    setLocalDashboard((prev: any) => {
      const list = { ...(prev.list || { visible_cols: [], filter_cols: [] }), ...patch };
      return { ...prev, list };
    });
  };

  const handleUpdateExcelOptions = (patch: { include_slicers?: boolean; include_charts?: boolean }) => {
    if (!localConfig) return;
    setLocalConfig((prev: any) => ({
      ...prev,
      excel_options: { ...(prev.excel_options || { include_slicers: true, include_charts: true }), ...patch },
    }));
  };

  const handleSave = async () => {
    if (!localConfig) return;
    const updatedDashboard = {
      ...localDashboard,
      list: localDashboard.list ?? { visible_cols: [], filter_cols: [] },
    };
    await onSaveConfig(localConfig, updatedDashboard);
  };

  const activeColumns: ColumnDef[] = localConfig?.columns
    ? (localConfig.columns as ColumnDef[]).filter((c) => c.transform !== "exclude")
    : [];

  const allAvailableChartCols = React.useMemo(() => {
    const list: string[] = [];
    activeColumns.forEach((col) => {
      list.push(col.output_col);
      if (col.transform === "split_binary" && col.flag_keyword) {
        const kws = col.flag_keyword
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean);
        kws.forEach((kw) => {
          list.push(`${col.output_col}_${kw}`);
        });
      }
      if (col.transform === "norm_date_parts") {
        list.push(`${col.output_col}_년`, `${col.output_col}_월`, `${col.output_col}_일`);
      }
      if (col.transform === "addr_split") {
        list.push(`${col.output_col}_시도`, `${col.output_col}_시군구`, `${col.output_col}_상세`);
      }
    });
    return list;
  }, [activeColumns]);

  if (!localConfig) {
    return (
      <div className="p-12 text-center text-muted-foreground bg-card border rounded-xl shadow-sm animate-pulse max-w-6xl mx-auto mt-8">
        ⏳ 1단계에서 프로젝트를 로드하거나 엑셀을 업로드하면 상세 편집기가 활성화됩니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f8fafc]">
      {/* ── 헤더 ── */}
      <div className="bg-card px-8 md:px-12 py-5 flex items-center justify-between border-b shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground hover:bg-muted font-bold gap-2 text-[15px]"
          >
            ◀ 프로젝트 목록으로
          </Button>
          <div className="h-5 w-px bg-muted" />
          <h2 className="text-[17px] font-bold text-primary flex items-center gap-2">
            <Settings className="h-5 w-5" />
            대시보드 설정 <span className="text-muted-foreground font-normal">{projectName}</span>
          </h2>
        </div>
        <div className="text-[15px] font-bold text-muted-foreground bg-muted px-4 py-2 rounded-full">
          총 {localConfig.columns.length}건 구성 중
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 pb-32">
        <Tabs
          value={activeSubTab}
          onValueChange={(v) => setActiveSubTab(v as "columns" | "dashboard")}
          className="w-full max-w-5xl mx-auto"
        >
          <TabsList className="flex w-fit bg-transparent gap-2 mb-6 p-0">
            <TabsTrigger 
              value="columns" 
              className="text-[14px] font-bold gap-2 py-2.5 px-5 rounded-t-lg data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-[0_-2px_10px_rgba(0,0,0,0.05)] data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=inactive]:text-muted-foreground"
            >
              <ListCollapse className="h-4 w-4" />
              1. 컬럼 정제 및 매핑 설정
            </TabsTrigger>
            <TabsTrigger 
              value="dashboard" 
              className="text-[14px] font-bold gap-2 py-2.5 px-5 rounded-t-lg data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-[0_-2px_10px_rgba(0,0,0,0.05)] data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=inactive]:text-muted-foreground"
            >
              <BarChart3 className="h-4 w-4" />
              2. 대시보드 비주얼 레이아웃
            </TabsTrigger>
          </TabsList>

          <TabsContent value="columns" className="mt-0">
            <div className="bg-card rounded-b-xl rounded-tr-xl shadow-sm border border-input p-6">
              <ColumnConfigTab
                columns={localConfig.columns as ColumnDef[]}
                onColumnChange={handleColumnChange}
                onExcludeToggle={handleExcludeToggle}
                onTransformChange={handleTransformChange}
                onAddColumn={addColumn}
                onDeleteColumn={deleteColumn}
                onMoveColumn={moveColumn}
              />
            </div>
          </TabsContent>

          <TabsContent value="dashboard" className="mt-0 outline-none">
             <div className="bg-transparent space-y-6 max-w-[1000px] mx-auto pb-12 pt-4">
              <ChartConfigCard
                dashboard={localDashboard}
                config={localConfig}
                allAvailableChartCols={allAvailableChartCols}
                chartTypes={CHART_TYPES}
                onUpdateDashboardList={updateDashboardList}
                onUpdateKpi={updateKpi}
                onAddKpi={addKpi}
                onUpdateChart={updateChart}
                onAddChart={addChart}
                onMoveChart={moveChart}
                onDeleteChart={deleteChart}
                onUpdateExcelOptions={handleUpdateExcelOptions}
                onUpdateLayout={updateLayout}
                onUpdateSummary={updateSummary}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* ── Sticky Bottom Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-6 bg-card border-t border-input shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between w-full px-4 max-w-5xl">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleReset}
              className="bg-card hover:bg-muted text-muted-foreground gap-2 h-12 px-6 rounded-lg border-input font-bold"
            >
              <RotateCcw className="h-5 w-5" />
              기본값으로 초기화
            </Button>
            <Button
              variant="outline"
              onClick={handleSaveToFile}
              className="bg-card hover:bg-muted text-muted-foreground gap-2 h-12 px-6 rounded-lg border-input font-bold"
            >
              <Download className="h-5 w-5" />
              파일로 저장
            </Button>
            <div className="relative">
              <input 
                type="file" 
                accept=".json"
                onChange={handleLoadFromFile}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                title="다른 엑셀데이터에 동일한 json 설정 덮어쓰기"
              />
              <Button
                variant="outline"
                className="bg-card hover:bg-muted text-muted-foreground gap-2 h-12 px-6 rounded-lg border-input font-bold pointer-events-none"
              >
                <Upload className="h-5 w-5" />
                설정 불러오기 (JSON)
              </Button>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={handleSave}
              className="bg-primary/10 text-primary hover:bg-primary/20 gap-2 h-12 px-6 rounded-lg border border-primary/30 font-bold"
            >
              <Eye className="h-5 w-5" />
              미리보기
            </Button>
            <Button
              onClick={() => {
                handleSave().then(() => onNext());
              }}
              disabled={loading}
              className="bg-primary hover:bg-primary text-white font-bold h-11 px-8 rounded-lg shadow-sm"
            >
              {loading ? "저장 중..." : "저장 후 대시보드로"}
            </Button>
            <Button
              onClick={async () => {
                await handleSave();
                onNextAndRun();
              }}
              disabled={loading}
              className="bg-success text-success-foreground hover:bg-success/90 gap-2 font-bold h-11 px-8 rounded-lg shadow-sm"
            >
              <Play className="h-4 w-4 fill-current" />
              저장 후 파이프라인 가동
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
