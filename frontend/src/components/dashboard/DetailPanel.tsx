import { Fragment, useEffect, useId, useMemo, useState } from "react";
import type { ColumnMeta, DashboardConfig, Row } from "@/types/dashboard";
import { visibleRowKeys } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { fixModernColorsInPlace } from "@/lib/pdfColorFix";

type CellValue = string | number | null | undefined;

/**
 * 값 하나를 고치는 입력 위젯. `ColumnMeta.type` 이 위젯을 정한다.
 *
 * category 를 `<input list>`(datalist) 로 하는 이유: 계획은 "Select + 자유입력" 을 요구하는데,
 * shadcn `Select` 는 목록에 없는 값을 못 넣는다(설문 정제는 새 표기를 넣는 일이 잦다).
 * datalist 는 **드롭다운 제안 + 자유 입력**을 둘 다 주면서 의존성이 늘지 않는다.
 */
function EditField({
  colKey,
  value,
  meta,
  listId,
  disabled,
  changed,
  onChange,
  onRevert,
}: {
  colKey: string;
  value: CellValue;
  meta?: ColumnMeta;
  listId: string;
  disabled: boolean;
  changed: boolean;
  onChange: (v: CellValue) => void;
  onRevert: () => void;
}) {
  const type = meta?.type ?? "text";
  const common =
    "w-full rounded border px-2 py-1 text-xs bg-background text-foreground " +
    (changed ? "border-warning" : "border-border") +
    " focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50";

  return (
    <div className="flex items-start gap-1 pb-1">
      {type === "numeric" ? (
        <input
          type="number"
          aria-label={colKey}
          className={common}
          disabled={disabled}
          value={value ?? ""}
          // 빈 문자열은 0 이 아니라 "값 없음" 이다 — null 로 보내야 서버가 빈 칸으로 저장한다.
          onChange={(e) => onChange(e.target.value === "" ? null : Number(e.target.value))}
        />
      ) : type === "category" ? (
        <>
          <input
            list={listId}
            aria-label={colKey}
            className={common}
            disabled={disabled}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
          />
          <datalist id={listId}>
            {(meta?.unique_values ?? []).map((u) => (
              <option key={u} value={u} />
            ))}
          </datalist>
        </>
      ) : (
        <textarea
          aria-label={colKey}
          rows={1}
          className={common + " resize-y min-h-[28px]"}
          disabled={disabled}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {changed && (
        <button
          type="button"
          onClick={onRevert}
          disabled={disabled}
          title="이 필드의 변경 취소"
          className="text-[11px] text-muted-foreground hover:text-foreground px-1 shrink-0"
        >
          ↩
        </button>
      )}
    </div>
  );
}

export interface DetailPanelProps {
  row: Row | null;
  cfg: DashboardConfig;
  onClose: () => void;
  /** 컬럼 타입(위젯 선택)·unique_values(카테고리 후보). data.meta.columns 를 그대로 넘긴다. */
  columns?: ColumnMeta[];
  /** 편집 모드 여부. 백엔드 + 로그인일 때만 켠다(useBackendStatus 의 canEdit). */
  editable?: boolean;
  /** 저장 중이면 패널을 잠근다. 서버가 계산한 결과를 기다린다(낙관적 반영 없음 — 계획 §5.3). */
  saving?: boolean;
  /** 변경된 컬럼만 넘어온다. 실패하면 throw 해야 draft 가 보존된다. */
  onSave?: (changes: Record<string, CellValue>) => void | Promise<void>;
  /** 저장 안 된 변경 유무를 바깥(Sheet 닫기 가드)에 알린다. */
  onDirtyChange?: (dirty: boolean) => void;
  /** 이미 손 편집된 컬럼 → 파이프라인 원래값. 표시용. */
  editedCols?: Record<string, CellValue>;
}

export function DetailPanel({
  row,
  cfg,
  onClose,
  columns = [],
  editable = false,
  saving = false,
  onSave,
  onDirtyChange,
  editedCols,
}: DetailPanelProps) {
  const [pdfSaving, setPdfSaving] = useState(false);
  /** 변경된 컬럼만 담는다 — "무엇이 바뀌었나" 가 곧 저장 payload 다. */
  const [draft, setDraft] = useState<Record<string, CellValue>>({});
  const listId = useId();

  const dirty = Object.keys(draft).length > 0;

  // 다른 행을 열면 이전 행의 draft 가 따라오면 안 된다.
  useEffect(() => {
    setDraft({});
  }, [row]);

  useEffect(() => {
    onDirtyChange?.(dirty);
    // onDirtyChange 를 deps 에 넣으면 부모가 인라인 함수를 줄 때 매 렌더 실행된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dirty]);

  const colMeta = useMemo(() => {
    const m: Record<string, ColumnMeta> = {};
    for (const c of columns) m[c.key] = c;
    return m;
  }, [columns]);

  if (!row) {
    return (
      <div className="text-muted-foreground text-center px-2 py-8 text-sm">
        좌측 목록에서 항목을 선택하세요
      </div>
    );
  }

  // 내부 식별 컬럼(__row_id)은 상세 보기·PDF 에 나오면 안 된다.
  const keys = visibleRowKeys(row);
  const titleKey = cfg.list?.visible_cols?.find((c) => row[c] != null) || keys[0];
  const title = row[titleKey] ?? "(제목 없음)";

  const valueOf = (k: string): CellValue => (k in draft ? draft[k] : row[k]);

  const setField = (k: string, v: CellValue) => {
    setDraft((d) => {
      const next = { ...d };
      // 원래 값으로 되돌리면 '변경'이 아니다 — payload 에서 빠져야 한다.
      if (String(v ?? "") === String(row[k] ?? "")) delete next[k];
      else next[k] = v;
      return next;
    });
  };

  const handleSave = async () => {
    if (!dirty || !onSave || saving) return;
    try {
      await onSave(draft);
      setDraft({});
    } catch {
      // 저장 실패 — draft 를 유지해 사용자가 입력을 잃지 않게 한다(계획 §5.1 ⑩).
      // 사용자에게 보이는 에러는 onSave 를 준 쪽이 처리한다.
    }
  };

  const revertField = (k: string) =>
    setDraft((d) => {
      const next = { ...d };
      delete next[k];
      return next;
    });

  const downloadPDF = async () => {
    if (pdfSaving) return;
    setPdfSaving(true);
    try {
      const { default: html2pdf } = await import("html2pdf.js");

      const wrapper = document.createElement("div");
      Object.assign(wrapper.style, {
        position: "fixed",
        left: "-9999px",
        top: "0",
        width: "760px",
        background: "#ffffff",
        padding: "28px 32px",
        fontFamily: getComputedStyle(document.body).fontFamily || "sans-serif",
        fontSize: "13px",
        color: "#111",
        lineHeight: "1.6",
      });

      const titleBlock = document.createElement("div");
      titleBlock.style.cssText =
        "margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #2563eb;";
      titleBlock.innerHTML = `
        <div style="font-size:10px;color:#6b7280;font-weight:700;text-transform:uppercase;margin-bottom:4px;">상세조회 레코드</div>
        <div style="font-size:18px;font-weight:700;color:#111;">${String(title)}</div>
      `;
      wrapper.appendChild(titleBlock);

      const table = document.createElement("table");
      table.style.cssText = "width:100%;border-collapse:collapse;";
      keys.forEach((k) => {
        const v = row[k];
        if (v == null || v === "") return;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td style="padding:6px 8px 6px 0;font-weight:600;color:#6b7280;font-size:11px;border-bottom:1px solid #e5e7eb;width:140px;vertical-align:top;">${k}</td>
          <td style="padding:6px 0 6px 8px;color:#111;font-size:12px;border-bottom:1px solid #e5e7eb;word-break:break-all;white-space:pre-wrap;">${String(v)}</td>
        `;
        table.appendChild(tr);
      });
      wrapper.appendChild(table);
      document.body.appendChild(wrapper);

      // Tailwind preflight의 기본 테두리색(var(--border)=oklch)이 wrapper·자식·유사 요소에도
      // 적용되어 html2canvas가 oklch 파싱 예외를 던지므로, 캡처 직전 rgb로 치환하고 후에 복원.
      const restoreColors = fixModernColorsInPlace(wrapper);
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await (html2pdf() as any)
          .set({
            margin: [15, 15, 15, 15],
            filename: `상세정보_${String(title).replace(/[^a-zA-Z0-9가-힣]/g, "_")}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          })
          .from(wrapper)
          .save();
      } finally {
        restoreColors();
      }

      document.body.removeChild(wrapper);
    } catch (e) {
      console.error("PDF 저장 실패:", e);
    } finally {
      setPdfSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border">
        {editable && (
          <Button size="sm" onClick={handleSave} disabled={!dirty || saving} className="text-xs">
            {saving ? "⏳ 저장 중…" : dirty ? `저장 (${Object.keys(draft).length})` : "저장"}
          </Button>
        )}
        <Button
          size="sm"
          variant={editable ? "outline" : "default"}
          onClick={downloadPDF}
          disabled={pdfSaving || saving}
          className={
            editable
              ? "text-xs"
              : pdfSaving
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-success text-success-foreground hover:bg-success/90"
          }
        >
          {pdfSaving ? "⏳ 저장 중..." : "📄 PDF 다운로드"}
        </Button>
        <span className="flex-1" />
        {editable && dirty && (
          <span className="text-[11px] text-warning" title="아직 저장되지 않았습니다">
            저장 안 됨
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          disabled={saving}
          className="h-7 w-7 rounded-full"
        >
          ✕
        </Button>
      </div>

      <div id="detail-pdf-content" className="flex-1 py-2.5 overflow-y-auto">
        <div className="mb-5 pb-3 border-b-2 border-primary">
          <small className="text-muted-foreground text-[10px] uppercase font-bold tracking-wide">
            상세조회 레코드
          </small>
          <div className="text-lg font-bold text-primary mt-1 break-words">{String(title)}</div>
        </div>

        <dl className="grid gap-x-4 gap-y-2.5" style={{ gridTemplateColumns: "130px 1fr" }}>
          {keys.map((k) => {
            const v = valueOf(k);
            // 읽기 모드는 빈 값을 감춰 깔끔하게 둔다(기존 동작).
            // 편집 모드는 **반드시 보여야 한다** — 안 그리면 비어 있는 값을 채울 방법이 없다.
            if (!editable && (v == null || v === "")) return null;

            const meta = colMeta[k];
            const changedNow = k in draft;
            const editedBefore = editedCols && k in editedCols;

            return (
              <Fragment key={k}>
                <dt className="font-semibold text-muted-foreground text-[11px] border-b border-border pb-1 flex items-center gap-1">
                  {/* 손 편집된 필드 표시 — 이 값이 정제 결과가 아니라 사람이 고친 것임을 알린다 */}
                  {(changedNow || editedBefore) && (
                    <span
                      aria-hidden
                      title={
                        changedNow
                          ? "저장 안 된 변경"
                          : `직접 수정한 값 (원래: ${String(editedCols?.[k] ?? "")})`
                      }
                      className={`inline-block h-1.5 w-1.5 rounded-full shrink-0 ${
                        changedNow ? "bg-warning" : "bg-primary"
                      }`}
                    />
                  )}
                  {k}
                </dt>
                <dd className="text-foreground text-xs border-b border-border pb-1 break-all whitespace-pre-wrap">
                  {editable ? (
                    <EditField
                      colKey={k}
                      value={v}
                      meta={meta}
                      listId={`${listId}-${k}`}
                      disabled={saving}
                      changed={changedNow}
                      onChange={(nv) => setField(k, nv)}
                      onRevert={() => revertField(k)}
                    />
                  ) : (
                    String(v)
                  )}
                </dd>
              </Fragment>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
