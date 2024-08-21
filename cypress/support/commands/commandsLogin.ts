/// <reference path="../cypress.d.ts" />

import {
    ElementTypeAndValueOpcional,
    ValidationResult,
    ConditionalWrite,
} from "../../DataParameters/Types/types";

import {
    CheckAndThrowError,
    ValidationConfig,
    
} from "../../DataParameters/Interfaces/interface";


const environment = Cypress.env('AMBIENTE');
const environmentData = Cypress.env(environment);


Cypress.Commands.add('login', (index: number, element: string, access: string) => {
    cy.fixture('acessoSelfcheckout.json').then((data) => {
        const link = data[index].link;
        const password = data[index].senha;

        cy.visit(link)

        cy.get(element, { timeout: 10000 })
            .should('be.visible')
            .each(($input, index) => {
                const digit: string = password[index]
                cy.wrap($input)
                    .type(digit)
            })
        cy.get(access, { timeout: 20000 })
            .should('be.visible')
            .click()
    })
});