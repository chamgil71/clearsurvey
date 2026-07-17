/**
 * 차트 대시보드 → A4 가로 PDF.
 *
 * 화면 그리드를 통째로 캡처하지 않는다. html2pdf(내부 html2canvas)는 대상 전체를 한 장의 긴 이미지로
 * 만든 뒤 A4 높이마다 기계적으로 잘라 넣으므로, 차트가 어디서 시작하고 끝나는지 알지 못해 그림이
 * 중간에서 잘리고 카드 제목만 앞 페이지에 남는다. `pagebreak.avoid`로 피하려 해도 화면 그리드는
 * CSS Grid라 걸린 카드 하나만 다음 페이지로 밀 수가 없다(같은 행의 옆 카드가 따라가지 않는다).
 *
 * 그래서 카드를 **하나씩** 캡처해 이미지로 갖고, 페이지 배치는 여기서 직접 계산한다.
 * 카드 이미지는 통째로 들어가거나 통째로 다음 페이지로 가므로 잘릴 수가 없다.
 *
 * 화면 열 수는 창 폭에 반응하는 auto-fit이라 A4와 무관하다(창을 좁히면 PDF 열도 줄었다).
 * PDF는 화면과 분리해 A4 가로에 맞는 고정 3열 × 2행 격자를 쓴다.
 */
import { fixModernColorsInPlace } from "@/lib/pdfColorFix";
import { withLightModeAsync } from "@/theme/readColors";

/** A4 가로 (mm). */
const PAGE_W = 297;
const PAGE_H = 210;
const MARGIN = 8;
/** 페이지 상단 머리글(프로젝트명·페이지 번호) 높이. */
const HEADER_H = 12;
/** 카드 사이 간격 (화면 gap-3 = 12px에 대응). */
const GAP = 4;

/** mm → CSS px (96dpi 기준). 캡처 크기를 PDF 칸 크기에 맞출 때 쓴다. */
const MM_TO_PX = 96 / 25.4;
/** 화면 그리드의 gap-3 = 12px. 캡처용 재배치에서 같은 간격을 유지한다. */
const CHART_GAP_PX = 12;

/** A4 가로 한 장에 담을 격자. 3×2 = 최대 6칸. */
const COLS = 3;
const ROWS = 2;

/** 화면 layout 값 → 격자에서 차지하는 칸 수. ChartCard.tsx의 col-span/row-span과 대응한다. */
function spanOf(layout: string | undefined): { cw: number; ch: number } {
  if (layout === "2x1") return { cw: 2, ch: 1 };
  if (layout === "2x2") return { cw: 2, ch: 2 };
  if (layout === "full") return { cw: COLS, ch: 1 };
  return { cw: 1, ch: 1 }; // 1x1 / 0.5x1 / 미지정
}

/** 카드 DOM에서 layout을 되읽는다. ChartCard가 span을 클래스로 표현하므로 그것을 기준으로 삼는다. */
function layoutOfCard(el: HTMLElement): string {
  const cl = el.classList;
  if (cl.contains("col-span-full")) return "full";
  if (cl.contains("row-span-2")) return "2x2";
  if (cl.contains("col-span-2")) return "2x1";
  return "1x1";
}

/**
 * 캡처 동안 그리드를 A4 기하로 고정한다.
 *
 * 화면 그리드는 `repeat(auto-fit, minmax(320px, 1fr))` 이라 열 수도 카드 폭도 **창 크기**가 정한다.
 * 그대로 찍으면 같은 대시보드도 창을 넓히면 3열, 좁히면 2열로 나오고 카드 비율까지 달라진다
 * (실측: 넓은 창 560×275=2:1, 좁은 창 320×275=1.2:1 — 앞쪽은 칸 높이의 절반만 채운다).
 *
 * 캡처 직전에 그리드를 PDF 칸 크기(3열 고정)로 바꿔두면 카드가 출력될 비율 그대로 다시 그려지고,
 * col-span-2/row-span-2 같은 기존 span 규칙도 그대로 살아난다. 끝나면 되돌린다.
 */
async function withPdfGeometry<T>(
  gridEl: HTMLElement,
  cellPx: number,
  fn: () => Promise<T>,
): Promise<T> {
  const saved = gridEl.getAttribute("style");
  gridEl.style.setProperty("width", `${COLS * cellPx + (COLS - 1) * CHART_GAP_PX}px`);
  gridEl.style.setProperty("max-width", "none");
  gridEl.style.setProperty("grid-template-columns", `repeat(${COLS}, ${cellPx}px)`);
  try {
    // 폭이 바뀌면 recharts 가 ResizeObserver 로 다시 그린다 — 그리기가 멎을 때까지 기다린다.
    await waitForChartsIdle(gridEl);
    return await fn();
  } finally {
    if (saved) gridEl.setAttribute("style", saved);
    else gridEl.removeAttribute("style");
  }
}

/**
 * 차트 그리기가 멎을 때까지 기다린다.
 *
 * recharts 는 마운트·필터 변경 때마다 약 1.5초간 애니메이션을 돌린다(실측: 도넛 sector 의 d 가
 * 450ms~1950ms 동안 계속 바뀜). 그 사이에 캡처하면 그리다 만 그림이 박힌다 — 도넛은 얇은
 * 부채꼴로, 막대는 덜 자란 상태로 나온다. 화면은 멀쩡한데 PDF만 이상해서 원인을 찾기 어렵다.
 *
 * 고정 시간을 기다리는 대신 path 가 실제로 안 변할 때까지 본다. 애니메이션이 이미 끝났으면
 * 즉시 통과하고, 느린 기기에서도 끝까지 기다린다.
 */
async function waitForChartsIdle(el: HTMLElement, timeoutMs = 4000): Promise<void> {
  const signature = () =>
    Array.from(el.querySelectorAll("path"))
      .map((p) => p.getAttribute("d") || "")
      .join("|");

  const deadline = Date.now() + timeoutMs;
  let prev = signature();
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 120));
    const next = signature();
    if (next === prev && next.length > 0) return; // 두 번 연속 같으면 정지한 것
    prev = next;
  }
  // 시간 초과 — 계속 진행한다. 덜 그려진 그림이라도 없는 것보단 낫고, 멈추면 사용자는
  // 이유를 알 수 없다.
}

/**
 * 페이지 머리글을 DOM 으로 만들어 캡처한다.
 *
 * jsPDF 의 text() 를 쓰지 않는 이유: 내장 폰트가 Helvetica/Times/Courier 뿐이라 한글이 깨진다
 * (실측: "버스 만족도 조사" → "¼\x84Â¤ ¹ÌÈq³Ä ÈpÀ¬"). 한글 폰트를 임베드하면 한글 음절이
 * 11,172자라 서브셋을 해도 수백 KB~수 MB가 붙는다. 화면에 이미 로드된 폰트로 그려서 캡처하면
 * 폰트 문제가 사라지고 테마 색·서체도 자동으로 따라온다.
 */
async function captureHeader(
  html2canvas: typeof import("html2canvas").default,
  projectName: string,
  rightText: string,
  widthPx: number,
): Promise<string> {
  const cs = getComputedStyle(document.body);
  const el = document.createElement("div");
  el.style.cssText = [
    "position:absolute",
    "left:-10000px",
    "top:0",
    `width:${widthPx}px`,
    "display:flex",
    "align-items:baseline",
    "justify-content:space-between",
    "padding:0 0 8px 0",
    "background:#ffffff",
    `font-family:${cs.fontFamily}`,
  ].join(";");

  const left = document.createElement("div");
  left.textContent = projectName;
  left.style.cssText = `font-size:22px;font-weight:700;color:var(--foreground)`;

  const right = document.createElement("div");
  right.textContent = rightText;
  right.style.cssText = `font-size:13px;color:var(--muted-foreground)`;

  el.append(left, right);
  document.body.appendChild(el);
  try {
    // 머리글도 카드와 같은 배율로 찍어야 글자 선명도가 맞는다.
    const canvas = await html2canvas(el, { scale: 2, backgroundColor: "#ffffff" });
    return canvas.toDataURL("image/png");
  } finally {
    el.remove();
  }
}

interface Placed {
  img: string;
  /** 격자 좌표 (페이지 안에서) */
  col: number;
  row: number;
  cw: number;
  ch: number;
  page: number;
}

/**
 * 카드들을 페이지별 3×2 격자에 순서대로 채운다.
 *
 * 행 우선(row-major)으로 놓되, 현재 페이지에 자리가 없으면 다음 페이지로 넘긴다.
 * 화면의 `grid-auto-flow: dense`는 따라하지 않는다 — dense는 뒤 카드를 앞 빈칸으로 끌어올려
 * 설정 순서와 출력 순서를 어긋나게 하는데, 문서에서는 순서가 더 중요하다.
 *
 * 2x2는 두 행을 모두 쓰므로 한 페이지에 하나만 들어간다(3열에 2x2 둘이면 4열이 필요).
 * 결과적으로 2x2가 연속되면 페이지당 하나씩 나뉜다.
 */
export function packPages(cards: Array<{ img: string; layout: string }>): Placed[] {
  const out: Placed[] = [];
  let page = 0;
  // occupied[row][col]
  let grid: boolean[][] = [];
  const reset = () => {
    grid = Array.from({ length: ROWS }, () => Array<boolean>(COLS).fill(false));
  };
  reset();

  const fits = (row: number, col: number, cw: number, ch: number) => {
    if (col + cw > COLS || row + ch > ROWS) return false;
    for (let r = row; r < row + ch; r++)
      for (let c = col; c < col + cw; c++) if (grid[r][c]) return false;
    return true;
  };
  const occupy = (row: number, col: number, cw: number, ch: number) => {
    for (let r = row; r < row + ch; r++) for (let c = col; c < col + cw; c++) grid[r][c] = true;
  };

  for (const card of cards) {
    const { cw, ch } = spanOf(card.layout);
    let spot: { row: number; col: number } | null = null;
    for (let r = 0; r < ROWS && !spot; r++) {
      for (let c = 0; c < COLS && !spot; c++) {
        if (fits(r, c, cw, ch)) spot = { row: r, col: c };
      }
    }
    if (!spot) {
      // 이 페이지엔 못 넣는다 → 새 페이지 첫 칸부터.
      page++;
      reset();
      spot = { row: 0, col: 0 };
    }
    occupy(spot.row, spot.col, cw, ch);
    out.push({ img: card.img, col: spot.col, row: spot.row, cw, ch, page });
  }
  return out;
}

export async function exportChartsToPdf(
  gridEl: HTMLElement,
  projectName: string,
  generatedAt: string,
): Promise<void> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  const cards = Array.from(gridEl.children).filter(
    (el): el is HTMLElement => el instanceof HTMLElement,
  );
  if (cards.length === 0) throw new Error("내보낼 차트가 없습니다.");

  const contentW = PAGE_W - MARGIN * 2;
  const contentH = PAGE_H - MARGIN * 2 - HEADER_H;
  const cellW = (contentW - GAP * (COLS - 1)) / COLS;
  const cellH = (contentH - GAP * (ROWS - 1)) / ROWS;

  // 다크 배경이 그대로 인쇄되면 못 쓰므로 라이트 기준으로 캡처한다.
  const captured = await withLightModeAsync(async () => {
    // 칸 폭(mm)을 CSS px 로 환산해 그리드를 그 크기로 고정한 뒤 찍는다.
    const cellPx = Math.round(cellW * MM_TO_PX);
    return await withPdfGeometry(gridEl, cellPx, async () => {
      // oklch → rgb 치환은 라이트 전환·재배치 후에 해야 계산 색상이 맞다.
      const restore = fixModernColorsInPlace(gridEl);
      try {
        const shots: Array<{ img: string; layout: string }> = [];
        for (const card of cards) {
          const canvas = await html2canvas(card, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            // 화면 전용 표시(클릭 유도 배지 등)는 정지된 문서에 남으면 노이즈다.
            ignoreElements: (el) => el.hasAttribute?.("data-export-hide"),
          });
          shots.push({ img: canvas.toDataURL("image/jpeg", 0.95), layout: layoutOfCard(card) });
        }
        return {
          shots,
          borderRgb: getComputedStyle(document.documentElement).getPropertyValue("--border").trim(),
        };
      } finally {
        restore();
      }
    });
  });

  const placed = packPages(captured.shots);
  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "landscape" });

  const totalPages = placed[placed.length - 1].page + 1;

  // 머리글은 페이지마다 오른쪽(페이지 번호)이 달라 장수만큼 따로 캡처한다.
  const headers = await withLightModeAsync(async () => {
    const restore = fixModernColorsInPlace(document.body);
    try {
      const out: string[] = [];
      for (let p = 0; p < totalPages; p++) {
        const right = [generatedAt, `${p + 1} / ${totalPages}`].filter(Boolean).join("   ·   ");
        out.push(
          await captureHeader(html2canvas, projectName, right, Math.round(contentW * MM_TO_PX)),
        );
      }
      return out;
    } finally {
      restore();
    }
  });

  for (let p = 0; p < totalPages; p++) {
    if (p > 0) pdf.addPage();

    // ── 머리글: 화면 헤더는 버튼·토글이 섞여 있어 캡처 대상이 될 수 없으므로 따로 만들어 찍는다.
    const hProps = pdf.getImageProperties(headers[p]);
    const hH = (hProps.height / hProps.width) * contentW;
    pdf.addImage(headers[p], "PNG", MARGIN, MARGIN, contentW, hH);

    const rgb = captured.borderRgb.match(/\d+/g)?.map(Number) ?? [203, 213, 225];
    pdf.setDrawColor(rgb[0], rgb[1], rgb[2]);
    pdf.setLineWidth(0.2);
    pdf.line(MARGIN, MARGIN + HEADER_H - 3, PAGE_W - MARGIN, MARGIN + HEADER_H - 3);

    // ── 카드
    for (const item of placed.filter((i) => i.page === p)) {
      const boxX = MARGIN + item.col * (cellW + GAP);
      const boxY = MARGIN + HEADER_H + item.row * (cellH + GAP);
      const boxW = item.cw * cellW + (item.cw - 1) * GAP;
      const boxH = item.ch * cellH + (item.ch - 1) * GAP;

      // 캡처 비율을 유지한 채 칸 안에 맞춘다(letterbox). 늘리면 차트가 일그러진다.
      const props = pdf.getImageProperties(item.img);
      const scale = Math.min(boxW / props.width, boxH / props.height);
      const w = props.width * scale;
      const h = props.height * scale;
      pdf.addImage(item.img, "JPEG", boxX + (boxW - w) / 2, boxY + (boxH - h) / 2, w, h);
    }
  }

  pdf.save(`${projectName}_dashboard.pdf`);
}
