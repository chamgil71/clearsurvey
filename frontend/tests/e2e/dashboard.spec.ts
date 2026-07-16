import { test, expect } from "@playwright/test";

test.describe("공개 대시보드 (/)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("페이지 타이틀이 Survey Dashboard 를 포함한다", async ({ page }) => {
    await expect(page).toHaveTitle(/Survey Dashboard/);
  });

  test("헤더가 렌더링된다", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible({ timeout: 10_000 });
  });

  // 프로젝트 선택은 shadcn <Select>(Radix)라 native <select>가 아닌 role=combobox 트리거로 렌더된다.
  test("프로젝트 선택 드롭다운이 존재한다", async ({ page }) => {
    await expect(page.locator("header").getByRole("combobox")).toBeVisible({ timeout: 10_000 });
  });

  // 탭은 shadcn <Tabs>(Radix)라 <nav>가 아닌 role=tablist/tab/tabpanel로 렌더된다.
  test("대시보드/목록 탭 네비게이션이 존재한다", async ({ page }) => {
    await expect(page.getByRole("tablist")).toBeVisible({ timeout: 15_000 });
    await expect(page.getByRole("tab", { name: /대시보드/ })).toBeVisible();
    await expect(page.getByRole("tab", { name: /목록/ })).toBeVisible();
  });

  test("대시보드 탭 클릭 시 차트가 보인다", async ({ page }) => {
    await page.getByRole("tab", { name: /대시보드/ }).click({ timeout: 15_000 });
    await expect(page.getByRole("tabpanel")).toBeVisible({ timeout: 5_000 });
    // 탭 패널만으로는 차트가 실제로 그려졌는지 알 수 없으므로 recharts SVG까지 확인한다.
    await expect(page.locator("svg.recharts-surface").first()).toBeVisible({ timeout: 15_000 });
  });

  test("목록 탭 클릭 시 테이블이 보인다", async ({ page }) => {
    await page.getByRole("tab", { name: /목록/ }).click({ timeout: 15_000 });
    await expect(page.getByRole("tabpanel").locator("table")).toBeVisible({ timeout: 10_000 });
  });

  test("다크모드 토글 버튼이 동작한다", async ({ page }) => {
    const toggle = page.locator("button[title='다크모드 전환']");
    await expect(toggle).toBeVisible({ timeout: 10_000 });
    await toggle.click();
    const isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    expect(isDark).toBe(true);
    // 복원
    await toggle.click();
  });

  test("가이드 버튼 클릭 시 드로어가 열린다", async ({ page }) => {
    await page.locator("header").waitFor({ timeout: 10_000 });
    await page.getByText("가이드").first().click();
    // 가이드 패널이 열렸는지 — 제목 heading 이 노출되면 성공
    await expect(page.getByRole("heading", { name: /가이드/ })).toBeVisible({
      timeout: 5_000,
    });
  });

  test("/admin 이 URL 에 노출되지 않는다 (공개 페이지에서 관리자 링크 제거 확인)", async ({
    page,
  }) => {
    const adminLink = page.locator("a[href='/admin'], a[href*='/admin']");
    // 관리자 링크가 없거나 숨겨져 있어야 함
    const count = await adminLink.count();
    expect(count).toBe(0);
  });
});
