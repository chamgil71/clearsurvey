import { Fragment, useState } from "react";
import type { DashboardConfig, Row } from "@/types/dashboard";

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
    return <div className="detail-empty">좌측 목록에서 항목을 선택하세요</div>;
  }

  const keys = Object.keys(row);
  const titleKey = cfg.list?.visible_cols?.find((c) => row[c] != null) || keys[0];
  const title = row[titleKey] ?? "(제목 없음)";

  const downloadPDF = async () => {
    if (saving) return;
    setSaving(true);
    try {
      // 동적 import — CDN 불필요, 타입 안전
      const { default: html2pdf } = await import("html2pdf.js");

      // 오프스크린 컨테이너: overflow/height 제약 없이 전체 내용 캡처
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

      // 제목 섹션
      const titleBlock = document.createElement("div");
      titleBlock.style.cssText = "margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #2563eb;";
      titleBlock.innerHTML = `
        <div style="font-size:10px;color:#6b7280;font-weight:700;text-transform:uppercase;margin-bottom:4px;">상세조회 레코드</div>
        <div style="font-size:18px;font-weight:700;color:#111;">${String(title)}</div>
      `;
      wrapper.appendChild(titleBlock);

      // 데이터 필드 — dl 대신 table 구조로 (html2canvas dl/grid 호환성 개선)
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

      document.body.removeChild(wrapper);
    } catch (e) {
      console.error("PDF 저장 실패:", e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        className="detail-header"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <button
          onClick={downloadPDF}
          disabled={saving}
          className="btn-primary btn-sm"
          style={{
            background: saving ? "#9ca3af" : "#16a34a",
            fontSize: "11px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: saving ? "not-allowed" : "pointer",
          }}
        >
          {saving ? "⏳ 저장 중..." : "📄 PDF 다운로드"}
        </button>
        <button
          className="btn-ghost btn-sm"
          onClick={onClose}
          style={{ width: "28px", height: "28px", borderRadius: "50%", padding: 0 }}
        >
          ✕
        </button>
      </div>

      <div
        id="detail-pdf-content"
        style={{ flex: 1, padding: "10px 0", overflowY: "auto" }}
      >
        <div
          style={{
            marginBottom: "20px",
            paddingBottom: "12px",
            borderBottom: "2px solid var(--accent)",
          }}
        >
          <small
            style={{
              color: "var(--text-muted)",
              fontSize: "10px",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            상세조회 레코드
          </small>
          <div className="detail-title" style={{ fontSize: "18px", marginTop: "4px" }}>
            {String(title)}
          </div>
        </div>

        <dl
          className="detail-list"
          style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "10px 16px" }}
        >
          {keys.map((k) => {
            const v = row[k];
            if (v == null || v === "") return null;
            return (
              <Fragment key={k}>
                <dt
                  style={{
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    fontSize: "11px",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {k}
                </dt>
                <dd
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "12px",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "4px",
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                  }}
                >
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
