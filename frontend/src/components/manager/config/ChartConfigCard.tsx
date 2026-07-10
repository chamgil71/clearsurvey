import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, GripVertical, Pin, BarChart2, List, Filter } from "lucide-react";

import type { DashboardConfig, KpiItem, ChartItem } from "@/types/dashboard";
import type { ProjectConfig } from "@/hooks/useManagerApi";

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
  onMoveChart: (index: number, dir: -1 | 1) => void;
  onDeleteChart: (index: number) => void;

  onUpdateExcelOptions: (options: { include_slicers?: boolean; include_charts?: boolean }) => void;
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
  onMoveChart,
  onDeleteChart,
  onUpdateExcelOptions,
}) => {

  const handleDeleteKpi = (i: number) => {
    if (onDeleteKpi) onDeleteKpi(i);
    // If not provided, we can't delete directly without it.
    // The previous implementation didn't have deleteKpi in the UI, but the image DOES.
  };

  return (
    <div className="space-y-6">
      {/* 1. KPI 카드 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Pin className="h-5 w-5 text-red-500 fill-red-500" />
          <h3 className="text-[15px] font-bold text-slate-800">KPI 카드 <span className="text-slate-400 font-normal text-[13px] ml-1">(최대 4개 권장)</span></h3>
        </div>

        <div className="space-y-3">
          {dashboard.kpi.map((k: KpiItem, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <select
                value={k.type}
                onChange={(e) => onUpdateKpi(i, { type: e.target.value })}
                className="w-[160px] h-10 px-3 rounded-md border border-slate-200 bg-white text-[13px] font-medium text-slate-700 outline-none focus:border-blue-400"
              >
                <option value="total_rows">전체 행수</option>
                <option value="count_value">값 카운트</option>
                <option value="sum">합계</option>
              </select>

              <select
                value={(k as any).col ?? ""}
                onChange={(e) => onUpdateKpi(i, { col: e.target.value })}
                disabled={k.type === "total_rows"}
                className="flex-1 h-10 px-3 rounded-md border border-slate-200 bg-white text-[13px] font-medium text-slate-700 outline-none focus:border-blue-400 disabled:bg-slate-50 disabled:text-slate-400"
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
                className="flex-1 h-10 text-[13px] font-medium border-slate-200 disabled:bg-slate-50"
              />

              <Input
                placeholder="총 응답수"
                value={k.label ?? ""}
                onChange={(e) => onUpdateKpi(i, { label: e.target.value })}
                className="flex-1 h-10 text-[13px] font-medium border-slate-200"
              />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  // If onDeleteKpi exists, call it. Otherwise fallback to mutating locally or ignore.
                  if (onDeleteKpi) onDeleteKpi(i);
                }}
                className="h-10 w-10 text-red-400 hover:text-red-600 hover:bg-red-50 shrink-0 border border-slate-100"
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
              className="text-[13px] text-slate-600 font-semibold gap-1 border-slate-200 h-9 px-4"
            >
              + KPI 추가
            </Button>
            <p className="text-[12px] text-slate-400 mt-3">
              전체 행수 - 데이터 총 건수 | 값 카운트 - 특정 컬럼의 특정 값 개수 | 합계 - 숫자 컬럼 합계
            </p>
          </div>
        </div>
      </div>

      {/* 2. 차트 구성 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <BarChart2 className="h-5 w-5 text-amber-500 fill-amber-500" />
            <h3 className="text-[15px] font-bold text-slate-800">차트 구성 <span className="text-slate-400 font-normal text-[13px] ml-1">(드래그로 순서 변경)</span></h3>
          </div>
          <p className="text-[12px] text-slate-400">
            donut - 도넛 차트 (category) | bar - 세로막대 | hbar - 가로막대 | histogram - 분포도 (numeric) | multibar - 여러 0/1 응답 비교 (0, * 목적 등)
          </p>
        </div>

        <div className="space-y-3">
          {dashboard.charts.map((c: ChartItem, i: number) => (
            <div key={i} className="flex items-center gap-3 bg-white">
              <div className="flex flex-col gap-0.5 w-6 cursor-grab">
                <Button variant="ghost" size="icon" onClick={() => onMoveChart(i, -1)} disabled={i === 0} className="h-4 w-4 text-slate-400 p-0 m-0"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m18 15-6-6-6 6"/></svg></Button>
                <GripVertical className="h-4 w-4 text-slate-300 mx-auto" />
                <Button variant="ghost" size="icon" onClick={() => onMoveChart(i, 1)} disabled={i === dashboard.charts.length - 1} className="h-4 w-4 text-slate-400 p-0 m-0"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg></Button>
              </div>

              <select
                value={"col" in c ? (c.col as string) : ""}
                onChange={(e) => onUpdateChart(i, { col: e.target.value })}
                className="flex-1 h-10 px-3 rounded-md border border-slate-200 bg-white text-[13px] font-medium text-slate-700 outline-none focus:border-blue-400"
              >
                <option value="">-- 컬럼 --</option>
                {allAvailableChartCols.map((cname) => (
                  <option key={cname} value={cname}>{cname}</option>
                ))}
              </select>

              <select
                value={c.type}
                onChange={(e) => onUpdateChart(i, { type: e.target.value })}
                className="w-[140px] h-10 px-3 rounded-md border border-slate-200 bg-white text-[13px] font-medium text-slate-700 outline-none focus:border-blue-400"
              >
                {chartTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              <Input
                placeholder="차트 제목"
                value={c.title ?? ""}
                onChange={(e) => onUpdateChart(i, { title: e.target.value })}
                className="flex-1 h-10 text-[13px] font-medium border-slate-200"
              />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDeleteChart(i)}
                className="h-10 w-10 text-red-400 hover:text-red-600 hover:bg-red-50 shrink-0 border border-slate-100"
              >
                <span className="text-lg leading-none font-light">×</span>
              </Button>
            </div>
          ))}

          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onAddChart}
              className="text-[13px] text-slate-600 font-semibold gap-1 border-slate-200 h-9 px-4"
            >
              + 차트 추가
            </Button>
          </div>
        </div>
      </div>

      {/* 3. 목록 컬럼 선택 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <List className="h-5 w-5 text-red-400" />
            <h3 className="text-[15px] font-bold text-slate-800">목록 컬럼 선택</h3>
          </div>
          <p className="text-[12px] text-slate-400">표시할 항목을 선택하세요</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white">
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
                    className="h-4 w-4 rounded-sm border-slate-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                  />
                  <span className="text-[13px] font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {colName}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. 필터 컬럼 선택 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Filter className="h-5 w-5 text-blue-500 fill-blue-500" />
            <h3 className="text-[15px] font-bold text-slate-800">필터 컬럼 선택 <span className="text-slate-400 font-normal text-[13px] ml-1">(category 타입만 지원)</span></h3>
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
                  className="h-4 w-4 rounded-sm border-slate-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                />
                <span className="text-[13px] font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
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
