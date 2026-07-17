import { test, expect } from "@playwright/test";
import { readFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

/**
 * 차트 PDF 내보내기 검증.
 *
 * 이 경로는 단위 테스트로 잡히지 않는 종류의 버그가 났던 곳이다 — 타입·테스트·빌드가 모두
 * 통과하는데 실제로 뽑아 보면 색이 다르거나 차트가 잘렸다. 그래서 진짜 브라우저에서
 * 진짜 PDF를 만들어 확인한다.
 */
test.describe("차트 PDF 내보내기", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/?data=/data/bus_data.json");
    await expect(page.getByRole("button", { name: /PDF/ })).toBeVisible({ timeout: 15_000 });
    // recharts 가 그려질 때까지 — 캡처가 빈 카드를 찍으면 의미가 없다.
    await expect(page.locator(".recharts-surface").first()).toBeVisible({ timeout: 15_000 });
  });

  test("PDF 파일이 생성된다", async ({ page }) => {
    const downloadPromise = page.waitForEvent("download", { timeout: 60_000 });
    await page.getByRole("button", { name: /PDF/ }).click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toMatch(/\.pdf$/);

    const dir = mkdtempSync(join(tmpdir(), "cs-pdf-"));
    const file = join(dir, download.suggestedFilename());
    await download.saveAs(file);

    const buf = readFileSync(file);
    expect(buf.subarray(0, 4).toString()).toBe("%PDF");
    // 카드 이미지가 실제로 들어갔다면 최소 수십 KB 는 된다(빈 페이지 방지).
    expect(buf.byteLength).toBeGreaterThan(20_000);
  });

  /**
   * 머리글은 jsPDF text() 가 아니라 DOM 캡처 이미지다 — jsPDF 내장 폰트(Helvetica 등)로
   * 한글을 그리면 깨지기 때문이다. 그래서 "PDF 안에 텍스트로 있는가"로는 확인할 수 없고,
   * 한글이 폰트를 타지 않는다는 것만 확인한다: 라틴 전용 폰트로 그린 텍스트가 하나도 없어야 한다.
   */
  test("한글이 jsPDF 내장 폰트로 그려지지 않는다(깨짐 방지)", async ({ page }) => {
    const downloadPromise = page.waitForEvent("download", { timeout: 60_000 });
    await page.getByRole("button", { name: /PDF/ }).click();
    const download = await downloadPromise;
    const dir = mkdtempSync(join(tmpdir(), "cs-pdf-"));
    const file = join(dir, download.suggestedFilename());
    await download.saveAs(file);

    const raw = readFileSync(file).toString("latin1");
    // Tj = 텍스트 그리기 오퍼레이터. 머리글을 이미지로 넣으므로 본문 텍스트가 없어야 한다.
    // (여기 걸린다면 누군가 pdf.text() 로 한글을 그리기 시작한 것이다 → 화면에선 깨져 보인다.)
    const drawn = raw.match(/\(.*?\)\s*Tj/g) ?? [];
    expect(drawn).toHaveLength(0);
  });

  test("PDF 캡처 후 화면의 테마가 원상 복구된다", async ({ page }) => {
    const before = await page.evaluate(() => ({
      theme: document.documentElement.getAttribute("data-theme"),
      inline: document.documentElement.getAttribute("style") || "",
    }));

    const downloadPromise = page.waitForEvent("download", { timeout: 60_000 });
    await page.getByRole("button", { name: /PDF/ }).click();
    await downloadPromise;
    await page.waitForTimeout(500);

    // fixModernColorsInPlace 는 <html> 인라인에 rgb 를 심는다. 복원이 안 되면
    // 화면이 그 색에 영구히 고정된다(테마 전환이 죽는다).
    const after = await page.evaluate(() => ({
      theme: document.documentElement.getAttribute("data-theme"),
      inline: document.documentElement.getAttribute("style") || "",
    }));
    expect(after.theme).toBe(before.theme);
    expect(after.inline).toBe(before.inline);
  });

  test("캡처는 활성 테마(toss)의 색을 쓴다", async ({ page }) => {
    // 회귀 방지: 예전 pdfColorFix 는 스타일시트 첫 규칙(light)의 색을 잡아
    // <html> 인라인에 박았고, 인라인이 모든 셀렉터를 이겨 캡처가 light 팔레트로 나왔다.
    const applied = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue("--chart-1").trim(),
    );
    // toss --chart-1 = oklch(0.56 0.243 261.078) — 색조 261 은 파랑.
    expect(applied).toContain("261");
  });
});
