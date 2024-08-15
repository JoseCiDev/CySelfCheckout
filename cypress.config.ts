import { defineConfig } from "cypress";

export default defineConfig({
  "projectId": "tx3tt6",

  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://192.168.0.66:9425',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx}',
    redirectionLimit: 5000,
    viewportHeight: 1280,
    viewportWidth: 1024,
    numTestsKeptInMemory: 150
  },
});