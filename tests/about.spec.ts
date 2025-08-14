import { test, expect } from "@playwright/test";

test("About page contains resume content", async ({ page }) => {
  // Navigate to the About page
  await page.goto("https://seanclosson.github.io/about"); // Adjust if hosted elsewhere

  // Check for a resume section header
  await expect(page.locator("body")).toContainText(/director/i);

  // Optionally, check for key resume keywords in the page
  await expect(page.locator("body")).toContainText(
    /experience|skills|education/i,
  );
});
