import { defineConfig } from "playwright/test";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.lambdatest.com/selenium-playground/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/tests/*.ts",
  },
});
