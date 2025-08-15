import { test, expect } from "@playwright/test";

test("Jekyll homepage renders correctly", async ({ page }) => {
  await page.goto("/");
  await page.screenshot({ path: "homepage.png" });

  //await expect(page.locator("h1")).toBeVisible();

  await expect(page.locator("body")).toContainText(/closson/i);
});
