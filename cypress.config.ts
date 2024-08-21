import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";



export default defineConfig({
  projectId: "tx3tt6",
  includeShadowDom: true,
  defaultCommandTimeout: 10000,

  e2e: {
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // Necessário para o preprocessor gerar relatórios JSON após cada execução, entre outras coisas
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Certifique-se de retornar o objeto de configuração, pois ele pode ter sido modificado pelo plugin.
      return config;
    },

    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx,feature}',
    redirectionLimit: 5000,
    viewportHeight: 1280,
    viewportWidth: 1024,
    numTestsKeptInMemory: 150
  },
});