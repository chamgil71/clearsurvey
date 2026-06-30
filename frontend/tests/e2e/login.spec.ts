import { test, expect } from "@playwright/test";

test.describe("로그인 페이지 (/login)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("페이지 타이틀이 로그인을 포함한다", async ({ page }) => {
    await expect(page).toHaveTitle(/로그인/);
  });

  test("ClearSurvey 로고가 표시된다", async ({ page }) => {
    await expect(page.getByText("ClearSurvey")).toBeVisible();
  });

  test("이메일 입력 필드가 존재한다", async ({ page }) => {
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

  test("비밀번호 입력 필드가 존재한다", async ({ page }) => {
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test("로그인 버튼이 존재한다", async ({ page }) => {
    await expect(page.getByRole("button", { name: "로그인", exact: true })).toBeVisible();
  });

  test("GitHub 로그인 버튼이 존재한다", async ({ page }) => {
    await expect(page.getByRole("button", { name: /GitHub/ })).toBeVisible();
  });

  test("공개 대시보드 링크가 존재한다", async ({ page }) => {
    const link = page.locator("a[href='/']");
    await expect(link).toBeVisible();
  });

  test("이메일·비밀번호 미입력 시 폼 제출이 차단된다", async ({ page }) => {
    // HTML5 required 속성이 브라우저 검증을 트리거한다
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toHaveAttribute("required");
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toHaveAttribute("required");
  });
});
