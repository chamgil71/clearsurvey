import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Plus } from "lucide-react";

export interface ColumnDef {
  output_col: string;
  source_col?: number | null;
  source_col_name?: string;
  transform?: string | null;
  flag_keyword?: string;
  backup_col?: number | null;
  include_in_slicer?: boolean;
  type?: string;
  source_cols?: number[];
}

export const TRANSFORM_RULES = [
  { value: "", label: "기본 통과 (변경 없음)" },
  { value: "copy", label: "copy — 원본 값 그대로" },
  { value: "exclude", label: "출력에서 제외" },
  { value: "norm_date", label: "norm_date — 날짜 표준화" },
  { value: "norm_date_parts", label: "norm_date_parts — 날짜 연/월/일" },
  { value: "date_year", label: "date_year — 연도만 추출" },
  { value: "norm_phone", label: "norm_phone — 전화번호 규격화" },
  { value: "norm_company", label: "norm_company — 회사명 규격화" },
  { value: "norm_text", label: "norm_text — 공백 제거" },
  { value: "norm_num", label: "norm_num — 숫자만 추출" },
  { value: "norm_position", label: "norm_position — 직함 규격화" },
  { value: "val_email", label: "val_email — 이메일 검증" },
  { value: "val_url", label: "val_url — URL 검증" },
  { value: "val_brn", label: "val_brn — 사업자번호 검증" },
  { value: "mask_name", label: "mask_name — 이름 마스킹" },
  { value: "mask_rrn", label: "mask_rrn — 주민번호 마스킹" },
  { value: "to_binary", label: "to_binary — 키워드 이진화" },
  { value: "split_binary", label: "split_binary — 복수 선택 이진 분리" },
  { value: "to_pct", label: "to_pct — 퍼센트 변환" },
  { value: "addr_split", label: "addr_split — 주소 시/군/구" },
  { value: "group_sum", label: "group_sum — 다중 열 합산" },
];

export const NEEDS_FLAG_KEYWORD = new Set(["to_binary", "o_binary", "split_binary"]);
export const NEEDS_BACKUP_COL = new Set(["jang"]);
export const NEEDS_SOURCE_COLS = new Set(["group_sum"]);
export const DERIVES_COLUMNS = new Set(["norm_date_parts", "addr_split", "split_binary"]);

export const COL_TYPES = [
  { value: "category", label: "category" },
  { value: "numeric", label: "numeric" },
  { value: "text", label: "text" },
  { value: "datetime", label: "datetime" },
];

export const MAX_SOURCE_COLS = 50;
export const sourceColOptions = Array.from({ length: MAX_SOURCE_COLS }, (_, i) => i + 1);

interface ColumnConfigTabProps {
  columns: ColumnDef[];
  onColumnChange: (index: number, patch: Partial<ColumnDef>) => void;
  onExcludeToggle: (index: number, currentlyExcluded: boolean) => void;
  onTransformChange: (index: number, transform: string) => void;
  onAddColumn: () => void;
  onDeleteColumn: (index: number) => void;
  onMoveColumn: (index: number, dir: -1 | 1) => void;
}

export const ColumnConfigTab: React.FC<ColumnConfigTabProps> = ({
  columns,
  onColumnChange,
  onExcludeToggle,
  onTransformChange,
  onAddColumn,
  onDeleteColumn,
  onMoveColumn,
}) => {
  return (
    <div className="space-y-4">
      <div className="border border-slate-200 bg-white rounded-xl shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex flex-col gap-1">
          <h3 className="text-[15px] font-bold text-slate-800">컬럼 정제 정의 시트</h3>
          <p className="text-[13px] text-slate-500">
            각 설문 문항의 정제 규칙과 원본 컬럼(1-based 인덱스) 번호를 매핑합니다. 타입 선택은 표시용이며, 내보내기 시 실제 데이터로 감지됩니다.
          </p>
        </div>

        <div className="w-full overflow-auto">
          <Table className="w-full min-w-[1000px] text-[13px]">
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-b border-slate-100 hover:bg-transparent">
                <TableHead className="w-[50px] text-center font-semibold text-slate-600 h-10">순서</TableHead>
                <TableHead className="w-[50px] text-center font-semibold text-slate-600 h-10">제외</TableHead>
                <TableHead className="w-[200px] font-semibold text-slate-600 h-10">출력 컬럼명</TableHead>
                <TableHead className="w-[120px] font-semibold text-slate-600 h-10">타입 (표시용)</TableHead>
                <TableHead className="w-[100px] text-center font-semibold text-slate-600 h-10">원본 열번호</TableHead>
                <TableHead className="w-[220px] font-semibold text-slate-600 h-10">정제 규칙 (Transform)</TableHead>
                <TableHead className="w-[180px] font-semibold text-slate-600 h-10">추가 인수 설정</TableHead>
                <TableHead className="w-[70px] text-center font-semibold text-slate-600 h-10">필터 여부</TableHead>
                <TableHead className="w-[50px] text-center h-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {columns.map((col, index) => {
                const transform = col.transform ?? "";
                const isExcluded = transform === "exclude";
                const totalCols = columns.length;

                return (
                  <TableRow
                    key={index}
                    className={`border-b border-slate-100 transition-colors ${
                      isExcluded ? "bg-slate-50/50 opacity-60" : "hover:bg-slate-50/30"
                    }`}
                  >
                    <TableCell className="text-center p-2">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <button
                          type="button"
                          onClick={() => onMoveColumn(index, -1)}
                          disabled={index === 0}
                          className="text-slate-300 hover:text-slate-600 disabled:opacity-30"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                        </button>
                        <span className="text-[12px] font-medium text-slate-500">{index + 1}</span>
                        <button
                          type="button"
                          onClick={() => onMoveColumn(index, 1)}
                          disabled={index === totalCols - 1}
                          className="text-slate-300 hover:text-slate-600 disabled:opacity-30"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                      </div>
                    </TableCell>

                    <TableCell className="text-center p-2">
                      <div className="flex justify-center">
                        <Checkbox
                          checked={isExcluded}
                          onCheckedChange={() => onExcludeToggle(index, isExcluded)}
                          className="border-slate-300 rounded-sm data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 h-4 w-4"
                        />
                      </div>
                    </TableCell>

                    <TableCell className="p-2">
                      <div className="flex flex-col gap-1">
                        <Input
                          value={col.output_col}
                          onChange={(e) => onColumnChange(index, { output_col: e.target.value })}
                          className="h-8 px-2 text-[13px] font-bold border-slate-200 bg-white hover:border-slate-300 focus-visible:ring-1 focus-visible:ring-blue-500 rounded-md transition-all shadow-sm"
                        />
                        {col.source_col_name && (
                          <span className="text-[11px] text-slate-400 pl-1 truncate">
                            ← {col.source_col_name}
                          </span>
                        )}
                      </div>
                    </TableCell>

                    <TableCell className="p-2">
                      <select
                        value={col.type ?? ""}
                        onChange={(e) => onColumnChange(index, { type: e.target.value })}
                        className="w-full h-8 px-2 text-[13px] border border-slate-200 bg-white rounded-md text-slate-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-300 transition-all shadow-sm"
                      >
                        <option value="">자동 감지</option>
                        {COL_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </TableCell>

                    <TableCell className="p-2">
                      <select
                        value={col.source_col ?? ""}
                        disabled={isExcluded}
                        onChange={(e) => onColumnChange(index, { source_col: e.target.value ? Number(e.target.value) : undefined })}
                        className="w-full h-8 px-1 text-center text-[13px] font-mono border border-slate-200 bg-white rounded-md text-slate-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-300 disabled:opacity-50 transition-all shadow-sm"
                      >
                        <option value="">-</option>
                        {sourceColOptions.map((n) => (
                          <option key={n} value={n}>{n}열</option>
                        ))}
                      </select>
                    </TableCell>

                    <TableCell className="p-2">
                      <select
                        value={transform}
                        onChange={(e) => onTransformChange(index, e.target.value)}
                        className="w-full h-8 px-2 text-[13px] border border-slate-200 bg-white rounded-md text-slate-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-300 transition-all shadow-sm"
                      >
                        {TRANSFORM_RULES.map((r) => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </TableCell>

                    <TableCell className="p-2">
                      <div className="flex flex-col justify-center min-h-[32px] gap-1.5">
                        {NEEDS_FLAG_KEYWORD.has(transform) && (
                          <Input
                            placeholder="키워드 (예: 예, 동의)"
                            value={col.flag_keyword ?? ""}
                            onChange={(e) => onColumnChange(index, { flag_keyword: e.target.value })}
                            className="h-8 px-2 text-[13px] border-slate-200 bg-white hover:border-slate-300 focus-visible:ring-1 focus-visible:ring-blue-500 rounded-md transition-all shadow-sm"
                          />
                        )}
                        {NEEDS_SOURCE_COLS.has(transform) && (
                          <Input
                            placeholder="원본 열 (예: 1, 2, 3)"
                            value={(col.source_cols || []).join(", ")}
                            onChange={(e) => {
                              const nums = e.target.value.split(",").map((v) => parseInt(v.trim(), 10)).filter((n) => !isNaN(n));
                              onColumnChange(index, { source_cols: nums });
                            }}
                            className="h-8 px-2 text-[13px] font-mono border-slate-200 bg-white hover:border-slate-300 focus-visible:ring-1 focus-visible:ring-blue-500 rounded-md transition-all shadow-sm"
                          />
                        )}
                        {NEEDS_BACKUP_COL.has(transform) && (
                          <select
                            value={col.backup_col ?? ""}
                            onChange={(e) => onColumnChange(index, { backup_col: e.target.value ? Number(e.target.value) : undefined })}
                            className="w-full h-8 px-2 text-[13px] border border-slate-200 bg-white rounded-md text-slate-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-300 transition-all shadow-sm"
                          >
                            <option value="">보조열 없음</option>
                            {sourceColOptions.map((n) => (
                              <option key={n} value={n}>{n}열</option>
                            ))}
                          </select>
                        )}
                        {DERIVES_COLUMNS.has(transform) && (
                          <span className="text-[11px] text-amber-600 font-bold flex items-center gap-1.5 px-1 py-1">
                            ⚡ 파생열 자동 생성
                          </span>
                        )}
                        {!NEEDS_FLAG_KEYWORD.has(transform) &&
                          !NEEDS_SOURCE_COLS.has(transform) &&
                          !NEEDS_BACKUP_COL.has(transform) &&
                          !DERIVES_COLUMNS.has(transform) && (
                            <span className="text-[12px] text-slate-300 text-center">—</span>
                          )}
                      </div>
                    </TableCell>

                    <TableCell className="text-center p-2">
                      <div className="flex justify-center">
                        <Checkbox
                          checked={col.include_in_slicer ?? false}
                          disabled={isExcluded}
                          onCheckedChange={(val) => onColumnChange(index, { include_in_slicer: !!val })}
                          className="border-slate-300 rounded-sm data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 h-4 w-4"
                        />
                      </div>
                    </TableCell>

                    <TableCell className="text-center p-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDeleteColumn(index)}
                        className="h-7 w-7 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex justify-start">
        <Button
          variant="outline"
          size="sm"
          onClick={onAddColumn}
          className="bg-white hover:bg-slate-50 text-slate-700 font-bold gap-1.5 border-slate-200 h-9 px-4 rounded-lg shadow-sm"
        >
          <Plus className="h-4 w-4 text-slate-500" />
          컬럼 정의 행 추가
        </Button>
      </div>
    </div>
  );
};
