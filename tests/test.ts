import { test, expect } from "@playwright/test";

test("Jekyll homepage renders correctly", async ({ page }) => {
  await page.goto("http://localhost:4000");
  await page.screenshot({ path: "homepage.png" });

  // Optional: check for a known element
  await expect(page.locator("h1")).toBeVisible();
});
