import { fixModernColorsInPlace } from "@/lib/pdfColorFix";

// html2pdf.js 래퍼. DetailPanel.tsx와 동일한 동적 import 패턴을 사용해
// 초기 번들에 975kB 라이브러리가 포함되지 않도록 한다.
// oklch/oklab 색상 회피는 pdfColorFix.fixModernColorsInPlace가 담당한다.
export async function exportToPdf(
  element: HTMLElement,
  projectName: string,
  isDark: boolean,
): Promise<void> {
  const { default: html2pdf } = await import("html2pdf.js");

  // 다크모드에서 캡처하면 어두운 배경이 그대로 인쇄되어 가독성이 떨어지므로
  // 캡처 직전 .dark 클래스를 제거하고 완료 후 원복한다.
  const root = document.documentElement;
  const wasDark = isDark && root.classList.contains("dark");
  if (wasDark) root.classList.remove("dark");

  // 다크 클래스 토글 후 계산 색상을 읽어야 하므로 이 시점에 변환.
  const restoreColors = fixModernColorsInPlace(element);

  try {
    await html2pdf()
      .set({
        margin: [8, 8, 8, 8],
        filename: `${projectName}_dashboard.pdf`,
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      })
      .from(element)
      .save();
  } finally {
    restoreColors();
    if (wasDark) root.classList.add("dark");
  }
}
