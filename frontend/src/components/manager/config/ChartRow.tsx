import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

import type { DashboardItem } from "@/types/dashboard";

const LAYOUT_OPTIONS = (
  <>
    <option value="1x1">크기: 기본 (1:1)</option>
    <option value="2x1">크기: 가로 2배 (2:1)</option>
    <option value="2x2">크기: 크게 (2:2)</option>
    <option value="0.5x1">크기: 절반 (1/2)</option>
    <option value="full">크기: 한 줄 전체</option>
  </>
);

/** 순서 이동/삭제/드래그 재배치에 필요한 최소 핸들 UI. 텍스트/일반 차트 행 양쪽에서 재사용한다. */
function RowHandle({
  index,
  total,
  onMoveChart,
  gripProps,
  className,
}: {
  index: number;
  total: number;
  onMoveChart: (index: number, dir: -1 | 1) => void;
  gripProps: React.SVGAttributes<SVGSVGElement> & { onMouseDown?: () => void };
  className?: string;
}) {
  return (
    <div className={className ?? "flex flex-col gap-0.5 w-6"}>
      <Button variant="ghost" size="icon" onClick={() => onMoveChart(index, -1)} disabled={index === 0} className="h-4 w-4 text-muted-foreground p-0 m-0"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m18 15-6-6-6 6"/></svg></Button>
      <GripVertical {...gripProps} />
      <Button variant="ghost" size="icon" onClick={() => onMoveChart(index, 1)} disabled={index === total - 1} className="h-4 w-4 text-muted-foreground p-0 m-0"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg></Button>
    </div>
  );
}

export interface ChartRowProps {
  index: number;
  total: number;
  chart: DashboardItem;
  allAvailableChartCols: string[];
  chartTypes: readonly string[];
  onUpdateChart: (index: number, patch: Record<string, any>) => void;
  onMoveChart: (index: number, dir: -1 | 1) => void;
  onDeleteChart: (index: number) => void;
  /** 드래그 재배치용 컨테이너 이벤트(draggable/onDragStart/onDragOver/onDrop/onDragEnd). */
  rowProps: React.HTMLAttributes<HTMLDivElement> & { draggable?: boolean };
  /** 그립 아이콘에 붙는 드래그 아밍 이벤트(onMouseDown). */
  gripProps: React.SVGAttributes<SVGSVGElement> & { onMouseDown?: () => void };
  rowClassName: string;
}

export function ChartRow({
  index,
  total,
  chart: c,
  allAvailableChartCols,
  chartTypes,
  onUpdateChart,
  onMoveChart,
  onDeleteChart,
  rowProps,
  gripProps,
  rowClassName,
}: ChartRowProps) {
  if (c.type === "text") {
    return (
      <div data-testid="chart-row" {...rowProps} className={rowClassName}>
        <RowHandle
          index={index}
          total={total}
          onMoveChart={onMoveChart}
          gripProps={gripProps}
          className="flex flex-col gap-0.5 w-6 pt-1"
        />
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-[11px] font-semibold shrink-0">텍스트 박스</Badge>
            <select
              value={c.layout ?? "2x1"}
              title="박스 크기(비율)"
              onChange={(e) => onUpdateChart(index, { layout: e.target.value as any })}
              className="h-8 px-2 rounded-md border border-input bg-card text-[12px] font-medium text-foreground outline-none focus:border-ring"
            >
              {LAYOUT_OPTIONS}
            </select>
          </div>
          <textarea
            placeholder="차트 사이에 표시할 설명 문구를 입력하세요"
            value={c.text ?? ""}
            onChange={(e) => onUpdateChart(index, { text: e.target.value })}
            rows={2}
            className="w-full px-3 py-2 rounded-md border border-input bg-card text-[13px] text-foreground outline-none focus:border-ring resize-y"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDeleteChart(index)}
          className="h-10 w-10 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0 border border-border"
        >
          <span className="text-lg leading-none font-light">×</span>
        </Button>
      </div>
    );
  }

  const isMultibar = c.type === "multibar";
  const multibarCols: { col: string; label: string }[] = isMultibar ? ((c as any).cols || []) : [];

  return (
    <div data-testid="chart-row" {...rowProps} className={rowClassName}>
      <div className="flex items-center gap-3">
        <RowHandle index={index} total={total} onMoveChart={onMoveChart} gripProps={gripProps} />

        {isMultibar ? (
          <div className="flex-1 h-10 px-3 rounded-md border border-dashed border-input bg-muted text-[12px] text-muted-foreground flex items-center">
            ※ 아래 다중 분석 열에서 설정하세요
          </div>
        ) : (
          <select
            value={"col" in c ? (c.col as string) : ""}
            onChange={(e) => onUpdateChart(index, { col: e.target.value })}
            className="flex-1 h-10 px-3 rounded-md border border-input bg-card text-[13px] font-medium text-foreground outline-none focus:border-ring"
          >
            <option value="">-- 컬럼 --</option>
            {allAvailableChartCols.map((cname) => (
              <option key={cname} value={cname}>{cname}</option>
            ))}
          </select>
        )}

        <select
          value={c.type}
          onChange={(e) => {
            const newType = e.target.value;
            if (newType === "multibar") {
              onUpdateChart(index, { type: newType, cols: (c as any).cols ?? [], col: undefined });
            } else {
              onUpdateChart(index, {
                type: newType,
                cols: undefined,
                col: ("col" in c ? c.col : undefined) || allAvailableChartCols[0] || "",
              });
            }
          }}
          className="w-[140px] h-10 px-3 rounded-md border border-input bg-card text-[13px] font-medium text-foreground outline-none focus:border-ring"
        >
          {chartTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <Input
          placeholder="차트 제목"
          value={c.title ?? ""}
          onChange={(e) => onUpdateChart(index, { title: e.target.value })}
          className="flex-1 h-10 text-[13px] font-medium border-input"
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDeleteChart(index)}
          className="h-10 w-10 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0 border border-border"
        >
          <span className="text-lg leading-none font-light">×</span>
        </Button>
      </div>

      {isMultibar && (
        <div className="ml-9 border border-dashed border-input rounded-md p-2 bg-muted/60 min-h-[36px] flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-semibold text-muted-foreground mr-1 text-[11px]">다중 분석 열:</span>
          {multibarCols.map((colObj, colIdx) => (
            <Badge key={colIdx} variant="secondary" className="text-[11px] font-semibold flex items-center gap-1">
              {colObj.label || colObj.col}
              <button
                type="button"
                onClick={() => {
                  const nextCols = multibarCols.filter((_, ci) => ci !== colIdx);
                  onUpdateChart(index, { cols: nextCols });
                }}
                className="hover:text-destructive text-muted-foreground font-bold ml-0.5"
              >
                ×
              </button>
            </Badge>
          ))}
          <select
            value=""
            onChange={(e) => {
              if (!e.target.value) return;
              const selected = e.target.value;
              if (multibarCols.some((co) => co.col === selected)) return;
              onUpdateChart(index, { cols: [...multibarCols, { col: selected, label: selected }] });
            }}
            className="h-6 px-1 rounded border border-input bg-card text-[11px] shadow-sm font-semibold max-w-[140px] outline-none cursor-pointer"
          >
            <option value="">+ 컬럼 추가...</option>
            {allAvailableChartCols.map((cname) => (
              <option key={cname} value={cname}>{cname}</option>
            ))}
          </select>
        </div>
      )}

      <div className="ml-9 flex flex-wrap items-center gap-2">
        {!isMultibar && (
          <select
            value={(c as any).value_col ?? ""}
            title="합산할 값 열 (선택)"
            onChange={(e) => onUpdateChart(index, { value_col: e.target.value || undefined })}
            className="h-8 px-2 rounded-md border border-input bg-card text-[12px] max-w-[170px] flex-1 font-medium text-foreground outline-none focus:border-ring"
          >
            <option value="">-- 단순 건수(Count) --</option>
            {allAvailableChartCols.map((cname) => (
              <option key={cname} value={cname}>값 합산: {cname}</option>
            ))}
          </select>
        )}
        <select
          value={c.sort_by ?? "value_desc"}
          title="차트 데이터 정렬 순서"
          onChange={(e) => onUpdateChart(index, { sort_by: e.target.value })}
          className="h-8 px-2 rounded-md border border-input bg-card text-[12px] max-w-[150px] flex-1 font-medium text-foreground outline-none focus:border-ring"
        >
          <option value="value_desc">정렬: 값 내림차순</option>
          <option value="value_asc">정렬: 값 오름차순</option>
          <option value="name_asc">정렬: 이름 가나다 (오름차순)</option>
          <option value="name_desc">정렬: 이름 역순 (내림차순)</option>
          <option value="none">정렬: 데이터 원본 순서</option>
        </select>
        <select
          value={c.max_items ?? 20}
          title="표시할 항목 갯수 제한"
          onChange={(e) => onUpdateChart(index, { max_items: Number(e.target.value) })}
          className="h-8 px-2 rounded-md border border-input bg-card text-[12px] max-w-[140px] flex-1 font-medium text-foreground outline-none focus:border-ring"
        >
          <option value={20}>상위 20개 표시</option>
          <option value={15}>상위 15개 표시</option>
          <option value={10}>상위 10개 표시</option>
          <option value={5}>상위 5개 표시</option>
          <option value={0}>전체 표시</option>
        </select>
        <select
          value={c.show_labels ? "yes" : "no"}
          title="차트 안(도넛 조각·막대 위)에 항목명·값을 캡션으로 항상 표시할지. 마우스를 올렸을 때 나오는 툴팁과는 별개입니다."
          onChange={(e) => onUpdateChart(index, { show_labels: e.target.value === "yes" })}
          className="h-8 px-2 rounded-md border border-input bg-card text-[12px] max-w-[150px] flex-1 font-medium text-foreground outline-none focus:border-ring"
        >
          <option value="no">차트값표시: 표시 안 함</option>
          <option value="yes">차트값표시: 표시함</option>
        </select>
        <select
          value={c.show_percent ? "yes" : "no"}
          title="마우스를 올렸을 때(툴팁) 비율(%)을 같이 보여줄지. 차트 안 캡션에도 켜져 있으면 같이 적용됩니다."
          onChange={(e) => onUpdateChart(index, { show_percent: e.target.value === "yes" })}
          className="h-8 px-2 rounded-md border border-input bg-card text-[12px] max-w-[140px] flex-1 font-medium text-foreground outline-none focus:border-ring"
        >
          <option value="no">비율: 표시 안 함</option>
          <option value="yes">비율: % 표시함</option>
        </select>
        <select
          value={c.layout ?? "1x1"}
          title="차트 크기(비율)"
          onChange={(e) => onUpdateChart(index, { layout: e.target.value as any })}
          className="h-8 px-2 rounded-md border border-input bg-card text-[12px] max-w-[150px] flex-1 font-medium text-foreground outline-none focus:border-ring"
        >
          {LAYOUT_OPTIONS}
        </select>
      </div>
    </div>
  );
}
