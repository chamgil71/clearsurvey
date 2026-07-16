import { fixModernColorsInPlace } from "@/lib/pdfColorFix";

// html2pdf.js 래퍼. DetailPanel.tsx와 동일한 동적 import 패턴을 사용해
// 초기 번들에 975kB 라이브러리가 포함되지 않도록 한다.
// oklch/oklab 색상 회피는 pdfColorFix.fixModernColorsInPlace가 담당한다.
export interface PdfOptions {
  /** 용지 방향. 기본 landscape(차트 대시보드용). 요약 탭은 portrait(A4 세로). */
  orientation?: "portrait" | "landscape";
  /** 파일명 접미사 — `{projectName}_{suffix}.pdf`. 기본 "dashboard". */
  suffix?: string;
}

export async function exportToPdf(
  element: HTMLElement,
  projectName: string,
  isDark: boolean,
  opts: PdfOptions = {},
): Promise<void> {
  const { orientation = "landscape", suffix = "dashboard" } = opts;
  const { default: html2pdf } = await import("html2pdf.js");

  // 다크모드에서 캡처하면 어두운 배경이 그대로 인쇄되어 가독성이 떨어지므로
  // 캡처 직전 .dark 클래스를 제거하고 완료 후 원복한다.
  const root = document.documentElement;
  const wasDark = isDark && root.classList.contains("dark");
  if (wasDark) root.classList.remove("dark");

  // 다크 클래스 토글 후 계산 색상을 읽어야 하므로 이 시점에 변환.
  const restoreColors = fixModernColorsInPlace(element);

  const worker = html2pdf();

  // pagebreak는 html2pdf.js가 실제로 지원하는 옵션이나 번들된 타입 정의(Html2PdfOptions)에
  // 빠져 있어 캐스팅한다. 표가 페이지 경계에서 잘리지 않도록 .break-inside-avoid 단위로 분할.
  const options = {
    margin: [8, 8, 8, 8],
    filename: `${projectName}_${suffix}.pdf`,
    image: { type: "jpeg", quality: 0.95 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
    jsPDF: { unit: "mm", format: "a4", orientation },
    pagebreak: { mode: ["css", "legacy"], avoid: ".break-inside-avoid" },
  } as Parameters<typeof worker.set>[0];

  try {
    await worker.set(options).from(element).save();
  } finally {
    restoreColors();
    if (wasDark) root.classList.add("dark");
  }
}
