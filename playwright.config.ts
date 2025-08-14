import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // or './e2e' or wherever your tests live
  projects: [
    {
      name: "local",
      use: {
        baseURL: "http://localhost:4000",
      },
    },
    {
      name: "deployed",
      use: {
        baseURL: "https://seanclosson.github.io",
      },
    },
  ],
});
