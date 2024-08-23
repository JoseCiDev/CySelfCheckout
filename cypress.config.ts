
import {
  defineConfig,
  createBundler,
  addCucumberPreprocessorPlugin,
  createEsbuildPlugin
} from './cypress/import';



export default defineConfig({
  projectId: "tx3tt6",
  includeShadowDom: true,
  defaultCommandTimeout: 10000,

  e2e: {
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    supportFile: 'cypress/support/e2e.ts',
    specPattern: [
      'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
      'cypress/integration/**/*.{js,jsx,ts,tsx,feature}'
    ],
    excludeSpecPattern: [
      'cypress/support/*',
      'cypress/support/commands/*',
      'cypress/elements.ts',
      'cypress/reports/*',
      'cypress/reports/html/*',
      'cypress/reports/html/assets/*',
      'cypress/reports/.jsons/*',
      'cypress/DataParameters/Enums/*',
      'cypress/DataParameters/Interfaces/*',
      'cypress/DataParameters/**/*',
      'cypress/import.ts'
    ],
    redirectionLimit: 5000,
    viewportHeight: 1280,
    viewportWidth: 1024,
    numTestsKeptInMemory: 150
  }
});