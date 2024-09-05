// cypress/e2e/duckduckgo.ts
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit application", () => {
  cy.visit("http://sm-hkm.docker.local:8080/");
});

Then("Here I return a welcome message in several languages", () => {
  cy.log('Welcome!');
  cy.log('¡Bienvenido!');
  cy.log('Willkommen!');
  cy.log('Powitanie!');
  cy.log('Hoş geldiňiz!');
  cy.log('歡迎！');
  
});