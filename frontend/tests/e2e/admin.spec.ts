import { test, expect } from "@playwright/test";

test.describe("어드민 페이지 인증 게이트 (/admin)", () => {
  test("미인증 상태에서 /admin 접근 시 /login 으로 리다이렉트된다", async ({ page }) => {
    await page.goto("/admin");
    // 리다이렉트 완료 대기
    await page.waitForURL(/\/login/, { timeout: 10_000 });
    expect(page.url()).toContain("/login");
  });

  test("리다이렉트 후 URL 에 redirect 파라미터가 포함된다", async ({ page }) => {
    await page.goto("/admin");
    await page.waitForURL(/\/login/, { timeout: 10_000 });
    expect(page.url()).toContain("redirect");
  });

  test("리다이렉트된 로그인 페이지에서 이메일 필드가 표시된다", async ({ page }) => {
    await page.goto("/admin");
    await page.waitForURL(/\/login/, { timeout: 10_000 });
    await expect(page.locator('input[type="email"]')).toBeVisible({
      timeout: 5_000,
    });
  });
});
