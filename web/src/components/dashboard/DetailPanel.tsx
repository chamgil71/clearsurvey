import { Fragment } from "react";
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
  if (!row) {
    return <div className="detail-empty">좌측 목록에서 항목을 선택하세요</div>;
  }
  const keys = Object.keys(row);
  const titleKey = cfg.list?.visible_cols?.find(c => row[c] != null) || keys[0];
  const title = row[titleKey] ?? "(제목 없음)";

  const downloadPDF = () => {
    const element = document.getElementById("detail-pdf-content");
    if (!element) return;
    
    // Add print styling temporary class
    element.classList.add("pdf-printing");
    
    const opt = {
      margin:       [15, 15, 15, 15],
      filename:     `상세정보_${String(title).replace(/[^a-zA-Z0-9가-힣]/g, "_")}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // @ts-ignore
    window.html2pdf().set(opt).from(element).save().then(() => {
      element.classList.remove("pdf-printing");
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="detail-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button 
          onClick={downloadPDF} 
          className="btn-primary btn-sm"
          style={{ background: "#16a34a", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px" }}
        >
          📄 PDF 다운로드
        </button>
        <button 
          className="btn-ghost btn-sm" 
          onClick={onClose}
          style={{ width: "28px", height: "28px", borderRadius: "50%", padding: 0 }}
        >
          ✕
        </button>
      </div>

      <div id="detail-pdf-content" style={{ flex: 1, padding: "10px 0", overflowY: "auto" }}>
        <div style={{ marginBottom: "20px", paddingBottom: "12px", borderBottom: "2px solid var(--accent)" }}>
          <small style={{ color: "var(--text-muted)", fontSize: "10px", textTransform: "uppercase", fontWeight: 700 }}>상세조회 레코드</small>
          <div className="detail-title" style={{ fontSize: "18px", marginTop: "4px" }}>{String(title)}</div>
        </div>

        <dl className="detail-list" style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "10px 16px" }}>
          {keys.map((k) => {
            const v = row[k];
            if (v == null || v === "") return null;
            return (
              <Fragment key={k}>
                <dt style={{ 
                  fontWeight: 600, 
                  color: "var(--text-muted)", 
                  fontSize: "11px", 
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "4px",
                  display: "flex",
                  alignItems: "center"
                }}>{k}</dt>
                <dd style={{ 
                  color: "var(--text-primary)", 
                  fontSize: "12px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "4px",
                  wordBreak: "break-all",
                  whiteSpace: "pre-wrap"
                }}>{String(v)}</dd>
              </Fragment>
            );
          })}
        </dl>
      </div>
    </div>
  );
}