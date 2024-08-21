/// <reference types="cypress" />

import {
    Given, When, Then,
    elements as el,
    DataParameters,
    dataParameters
} from '../import'

describe('Teste de acesso', () => {
    before(() => { });

    beforeEach(() => {

    });

    const index = 0;
    it(`Acesso Selfcheckout ${index + 1}`, () => {
        cy.log('teste')

        const fixtures = dataParameters.fixtures;

        fixtures.forEach((fixture, index) => {
            cy.log('Etapa de acesso ao Selfcheckout')

            cy.fixture('acessoSelfcheckout.json').then((data) => {
                const link = data[index].link;
                const password = data[index].senha;

                cy.visit(link)

                cy.get(el.containerSenha, { timeout: 10000 })
                    .should('be.visible')
                    .each(($input, index) => {
                        const digit: string = password[index]
                        cy.wrap($input)
                            .type(digit)
                    })
                cy.get(el.continuar, { timeout: 20000 })
                    .should('be.visible')
                    .click()
            })
        });
    });
});
