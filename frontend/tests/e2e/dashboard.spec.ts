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

  test("프로젝트 선택 드롭다운이 존재한다", async ({ page }) => {
    await expect(page.locator("header select")).toBeVisible({ timeout: 10_000 });
  });

  test("대시보드/목록 탭 네비게이션이 존재한다", async ({ page }) => {
    // 로딩 완료 대기 (#loading 이 사라질 때까지)
    await page.waitForSelector("#loading", { state: "detached", timeout: 15_000 }).catch(() => {});
    await expect(page.locator("nav")).toBeVisible({ timeout: 10_000 });
  });

  test("대시보드 탭 클릭 시 차트 영역이 보인다", async ({ page }) => {
    await page.locator("nav").waitFor({ timeout: 15_000 });
    await page.locator("nav button").first().click();
    await expect(page.locator("section").first()).toBeVisible({ timeout: 5_000 });
  });

  test("목록 탭 클릭 시 테이블이 보인다", async ({ page }) => {
    await page.locator("nav").waitFor({ timeout: 15_000 });
    await page.locator("nav button").nth(1).click();
    await expect(page.locator("section").nth(1)).toBeVisible({ timeout: 5_000 });
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
