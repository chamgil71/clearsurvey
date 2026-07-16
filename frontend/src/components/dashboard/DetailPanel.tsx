import { Fragment, useState } from "react";
import type { DashboardConfig, Row } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { fixModernColorsInPlace } from "@/lib/pdfColorFix";

export function DetailPanel({
  row,
  cfg,
  onClose,
}: {
  row: Row | null;
  cfg: DashboardConfig;
  onClose: () => void;
}) {
  const [saving, setSaving] = useState(false);

  if (!row) {
    return (
      <div className="text-muted-foreground text-center px-2 py-8 text-sm">
        좌측 목록에서 항목을 선택하세요
      </div>
    );
  }

  const keys = Object.keys(row);
  const titleKey = cfg.list?.visible_cols?.find((c) => row[c] != null) || keys[0];
  const title = row[titleKey] ?? "(제목 없음)";

  const downloadPDF = async () => {
    if (saving) return;
    setSaving(true);
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
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
        <Button
          size="sm"
          onClick={downloadPDF}
          disabled={saving}
          className={
            saving
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }
        >
          {saving ? "⏳ 저장 중..." : "📄 PDF 다운로드"}
        </Button>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7 rounded-full">
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
            const v = row[k];
            if (v == null || v === "") return null;
            return (
              <Fragment key={k}>
                <dt className="font-semibold text-muted-foreground text-[11px] border-b border-border pb-1 flex items-center">
                  {k}
                </dt>
                <dd className="text-foreground text-xs border-b border-border pb-1 break-all whitespace-pre-wrap">
                  {String(v)}
                </dd>
              </Fragment>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
