import { defineConfig } from "cypress";

export default defineConfig({

  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
    },
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx}',
    redirectionLimit: 5000,
    viewportHeight: 1280,
    viewportWidth: 1024,
    numTestsKeptInMemory:150
  },
});
  
