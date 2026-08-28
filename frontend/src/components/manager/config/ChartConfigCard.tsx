import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, Pin, BarChart2, List, Filter } from "lucide-react";

import type { DashboardConfig, KpiItem, ChartItem, DashboardItem } from "@/types/dashboard";
import type { ProjectConfig } from "@/hooks/useManagerApi";
import { resolveSummaryColumns, SUMMARY_COLUMN_LABELS, SUMMARY_COLUMN_ORDER } from "@/lib/summary";
import { cn } from "@/lib/utils";
import { ChartRow } from "@/components/manager/config/ChartRow";

interface ChartConfigCardProps {
  dashboard: DashboardConfig;
  config: ProjectConfig;
  allAvailableChartCols: string[];
  chartTypes: readonly string[];

  onUpdateDashboardList: (patch: any) => void;

  onUpdateKpi: (index: number, patch: Record<string, any>) => void;
  onAddKpi: () => void;
  onDeleteKpi?: (index: number) => void; // Added for completeness

  onUpdateChart: (index: number, patch: Record<string, any>) => void;
  onAddChart: () => void;
  onAddTextBlock?: () => void;
  onMoveChart: (index: number, dir: -1 | 1) => void;
  /** 그립을 잡고 드롭한 위치로 차트를 옮긴다(임의 위치 재배치). 없으면 드래그 재배치는 비활성화된다. */
  onReorderChart?: (from: number, to: number) => void;
  onDeleteChart: (index: number) => void;

  onUpdateExcelOptions: (options: { include_slicers?: boolean; include_charts?: boolean }) => void;
  onUpdateLayout?: (patch: Partial<DashboardConfig["layout"]>) => void;
  onUpdateSummary?: (patch: Partial<DashboardConfig["summary"]>) => void;
}

export const ChartConfigCard: React.FC<ChartConfigCardProps> = ({
  dashboard,
  config,
  allAvailableChartCols,
  chartTypes,
  onUpdateDashboardList,
  onUpdateKpi,
  onAddKpi,
  onDeleteKpi,
  onUpdateChart,
  onAddChart,
  onAddTextBlock,
  onMoveChart,
  onReorderChart,
  onDeleteChart,
  onUpdateExcelOptions,
  onUpdateLayout,
  onUpdateSummary,
}) => {
  const summaryColumns = resolveSummaryColumns(dashboard);

  // 차트 카드 드래그 재배치: 그립(GripVertical)을 누른 항목만 draggable을 켜서
  // input/select/textarea 안에서 텍스트를 드래그 선택할 때 카드가 같이 끌려가지 않게 한다.
  const [armedIndex, setArmedIndex] = useState<number | null>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  useEffect(() => {
    const disarm = () => setArmedIndex(null);
    window.addEventListener("mouseup", disarm);
    return () => window.removeEventListener("mouseup", disarm);
  }, []);

  const resetDrag = () => {
    setArmedIndex(null);
    setDragIndex(null);
    setOverIndex(null);
  };

  const dragHandlers = (i: number) => ({
    draggable: armedIndex === i,
    onDragStart: (e: React.DragEvent) => {
      if (armedIndex !== i) {
        e.preventDefault();
        return;
      }
      if (e.dataTransfer) e.dataTransfer.effectAllowed = "move";
      setDragIndex(i);
    },
    onDragOver: (e: React.DragEvent) => {
      if (dragIndex === null || dragIndex === i) return;
      e.preventDefault();
      setOverIndex(i);
    },
    onDrop: (e: React.DragEvent) => {
      e.preventDefault();
      if (dragIndex !== null && dragIndex !== i) onReorderChart?.(dragIndex, i);
      resetDrag();
    },
    onDragEnd: resetDrag,
  });

  const dragHandleProps = (i: number) => ({
    onMouseDown: () => setArmedIndex(i),
    className: cn(
      "h-4 w-4 mx-auto",
      onReorderChart
        ? "text-muted-foreground/60 cursor-grab active:cursor-grabbing"
        : "text-muted-foreground/60",
    ),
    "data-testid": "chart-drag-handle",
  });

  const handleDeleteKpi = (i: number) => {
    if (onDeleteKpi) onDeleteKpi(i);
    // If not provided, we can't delete directly without it.
    // The previous implementation didn't have deleteKpi in the UI, but the image DOES.
  };

  return (
    <div className="space-y-6">
      {/* 1. KPI 카드 */}
      <div className="bg-card rounded-xl shadow-sm border border-input p-6">
        <div className="flex items-center gap-2 mb-6">
          <Pin className="h-5 w-5 text-destructive fill-destructive" />
          <h3 className="text-[14px] font-bold text-foreground">KPI 카드 <span className="text-muted-foreground font-normal text-[13px] ml-1">(최대 4개 권장)</span></h3>
        </div>

        <div className="space-y-3">
          {dashboard.kpi.map((k: KpiItem, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <select
                value={k.type}
                onChange={(e) => onUpdateKpi(i, { type: e.target.value })}
                className="w-[160px] h-10 px-3 rounded-md border border-input bg-card text-[13px] font-medium text-foreground outline-none focus:border-ring"
              >
                <option value="total_rows">전체 행수</option>
                <option value="count_value">값 카운트</option>
                <option value="sum">합계</option>
              </select>

              <select
                value={(k as any).col ?? ""}
                onChange={(e) => onUpdateKpi(i, { col: e.target.value })}
                disabled={k.type === "total_rows"}
                className="flex-1 h-10 px-3 rounded-md border border-input bg-card text-[13px] font-medium text-foreground outline-none focus:border-ring disabled:bg-muted disabled:text-muted-foreground"
              >
                <option value="">-- 컬럼 --</option>
                {allAvailableChartCols.map((cname) => (
                  <option key={cname} value={cname}>{cname}</option>
                ))}
              </select>

              <Input
                placeholder="값"
                value={(k as any).value ?? ""}
                onChange={(e) => onUpdateKpi(i, { value: e.target.value })}
                disabled={k.type !== "count_value"}
                className="flex-1 h-10 text-[13px] font-medium border-input disabled:bg-muted"
              />

              <Input
                placeholder="총 응답수"
                value={k.label ?? ""}
                onChange={(e) => onUpdateKpi(i, { label: e.target.value })}
                className="flex-1 h-10 text-[13px] font-medium border-input"
              />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  // If onDeleteKpi exists, call it. Otherwise fallback to mutating locally or ignore.
                  if (onDeleteKpi) onDeleteKpi(i);
                }}
                className="h-10 w-10 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0 border border-border"
              >
                <span className="text-lg leading-none font-light">×</span>
              </Button>
            </div>
          ))}

          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onAddKpi}
              className="text-[13px] text-muted-foreground font-semibold gap-1 border-input h-9 px-4"
            >
              + KPI 추가
            </Button>
            <p className="text-[12px] text-muted-foreground mt-3">
              전체 행수 - 데이터 총 건수 | 값 카운트 - 특정 컬럼의 특정 값 개수 | 합계 - 숫자 컬럼 합계
            </p>
          </div>
        </div>
      </div>

      {/* 2. 차트 구성 */}
      <div className="bg-card rounded-xl shadow-sm border border-input p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-primary fill-primary" />
              <h3 className="text-[14px] font-bold text-foreground">차트 구성 <span className="text-muted-foreground font-normal text-[13px] ml-1">(드래그로 순서 변경)</span></h3>
            </div>
            {onUpdateLayout && (
              <div className="flex items-center gap-2 shrink-0">
                <label className="text-[12px] font-semibold text-muted-foreground">가로 배열 최대 개수</label>
                <select
                  value={dashboard.layout?.maxColumns ?? 4}
                  title="화면이 넓어도 한 줄에 표시할 차트 개수의 최대치입니다."
                  onChange={(e) => onUpdateLayout({ maxColumns: Number(e.target.value) })}
                  className="h-8 px-2 rounded-md border border-input bg-card text-[12px] font-medium text-foreground outline-none focus:border-ring"
                >
                  <option value={2}>최대 2개</option>
                  <option value={3}>최대 3개</option>
                  <option value={4}>최대 4개 (기본값)</option>
                  <option value={5}>최대 5개</option>
                  <option value={6}>최대 6개</option>
                </select>
              </div>
            )}
          </div>
          <p className="text-[12px] text-muted-foreground">
            donut - 도넛 차트 (category) | bar - 세로막대 | hbar - 가로막대 | histogram - 분포도 (numeric) | multibar - 여러 0/1 응답 비교 (0, * 목적 등)
          </p>

          <div className="mt-3 pt-3 border-t border-border flex items-center gap-4 flex-wrap">
            <label className="text-[12px] font-semibold text-muted-foreground shrink-0">
              원본엑셀(clean xlsx) 다운로드 옵션
            </label>
            <label className="flex items-center gap-1.5 text-[12px] font-medium text-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={config?.excel_options?.include_charts ?? true}
                onChange={(e) => onUpdateExcelOptions({ include_charts: e.target.checked })}
              />
              차트 포함
            </label>
            <label
              className="flex items-center gap-1.5 text-[12px] font-medium text-foreground cursor-pointer"
              title="일부 프로젝트에서 슬라이서 포함 시 다운로드한 엑셀 파일을 열 때 Excel이 '복구' 경고를 띄우는 알려진 문제가 있습니다. 그런 경우 여기서 끄면 즉시 정상적으로 열립니다."
            >
              <input
                type="checkbox"
                checked={config?.excel_options?.include_slicers ?? true}
                onChange={(e) => onUpdateExcelOptions({ include_slicers: e.target.checked })}
              />
              슬라이서 포함
              <span className="text-muted-foreground font-normal">(다운로드 시 열기 경고가 뜨면 꺼보세요)</span>
            </label>
          </div>

          {/* 요약 탭은 위 차트를 순서대로 표로 옮긴다. 차트는 전부 포함, 표에 보일 열만 고른다. */}
          {onUpdateSummary && (
            <div className="mt-3 pt-3 border-t border-border flex items-center gap-3 flex-wrap">
              <label className="text-[12px] font-semibold text-muted-foreground shrink-0">
                요약 탭 표시 열
              </label>
              {SUMMARY_COLUMN_ORDER.map((col) => {
                const checked = summaryColumns.includes(col);
                return (
                  <label
                    key={col}
                    className="flex items-center gap-1.5 text-[12px] font-medium text-foreground cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        const next = checked
                          ? summaryColumns.filter((c) => c !== col)
                          : [...summaryColumns, col];
                        onUpdateSummary({ columns: next });
                      }}
                      className="h-3.5 w-3.5 accent-blue-500"
                    />
                    {SUMMARY_COLUMN_LABELS[col]}
                  </label>
                );
              })}
              <span className="text-[11px] text-muted-foreground">
                &quot;항목&quot; 열은 항상 표시됩니다.
              </span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {dashboard.charts.map((c: DashboardItem, i: number) => (
            <ChartRow
              key={i}
              index={i}
              total={dashboard.charts.length}
              chart={c}
              allAvailableChartCols={allAvailableChartCols}
              chartTypes={chartTypes}
              onUpdateChart={onUpdateChart}
              onMoveChart={onMoveChart}
              onDeleteChart={onDeleteChart}
              rowProps={dragHandlers(i)}
              gripProps={dragHandleProps(i)}
              rowClassName={cn(
                "bg-card border rounded-lg p-3 transition-colors",
                c.type === "text" ? "flex items-start gap-3" : "flex flex-col gap-2",
                dragIndex === i ? "opacity-40 border-border" : "border-border",
                overIndex === i && dragIndex !== i && "border-primary border-2",
              )}
            />
          ))}

          <div className="pt-2 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onAddChart}
              className="text-[13px] text-muted-foreground font-semibold gap-1 border-input h-9 px-4"
            >
              + 차트 추가
            </Button>
            {onAddTextBlock && (
              <Button
                variant="outline"
                size="sm"
                onClick={onAddTextBlock}
                title="차트 사이에 넣을 설명 문구 박스를 추가합니다."
                className="text-[13px] text-muted-foreground font-semibold gap-1 border-input h-9 px-4"
              >
                + 텍스트 박스 추가
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* 3. 목록 컬럼 선택 */}
      <div className="bg-card rounded-xl shadow-sm border border-input p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <List className="h-5 w-5 text-destructive" />
            <h3 className="text-[14px] font-bold text-foreground">목록 컬럼 선택</h3>
          </div>
          <p className="text-[12px] text-muted-foreground">표시할 항목을 선택하세요</p>
        </div>

        <div className="border border-input rounded-lg p-5 bg-card">
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {allAvailableChartCols.map((colName) => {
              const isVisible = (dashboard.list?.visible_cols || []).includes(colName);
              return (
                <label key={colName} className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={isVisible}
                    onCheckedChange={(val) => {
                      const current = dashboard.list?.visible_cols || [];
                      const next = val
                        ? [...current, colName]
                        : current.filter((c: string) => c !== colName);
                      onUpdateDashboardList({ visible_cols: next });
                    }}
                    className="h-4 w-4 rounded-sm border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span className="text-[13px] font-bold text-foreground group-hover:text-foreground transition-colors">
                    {colName}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. 필터 컬럼 선택 */}
      <div className="bg-card rounded-xl shadow-sm border border-input p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Filter className="h-5 w-5 text-primary fill-primary" />
            <h3 className="text-[14px] font-bold text-foreground">필터 컬럼 선택 <span className="text-muted-foreground font-normal text-[13px] ml-1">(category 타입만 지원)</span></h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-4 px-2">
          {allAvailableChartCols.map((colName) => {
            const isFiltered = (dashboard.list?.filter_cols || []).includes(colName);
            return (
              <label key={colName} className="flex items-center gap-2 cursor-pointer group">
                <Checkbox
                  checked={isFiltered}
                  onCheckedChange={(val) => {
                    const current = dashboard.list?.filter_cols || [];
                    const next = val
                      ? [...current, colName]
                      : current.filter((c: string) => c !== colName);
                    onUpdateDashboardList({ filter_cols: next });
                  }}
                  className="h-4 w-4 rounded-sm border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className="text-[13px] font-bold text-foreground group-hover:text-foreground transition-colors">
                  {colName}
                </span>
              </label>
            );
          })}
        </div>
      </div>

    </div>
  );
};
