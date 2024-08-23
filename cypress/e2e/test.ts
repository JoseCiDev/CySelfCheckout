// cypress/e2e/duckduckgo.ts
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.log("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.log('Teste')
});