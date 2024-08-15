/// <reference types="cypress" />

import { elements as el } from '../elements'
import { dadosParametros } from '../DadosParametros'


export const acessarSelfcheckout = () => {
    const fixtures = dadosParametros.fixtures;

    fixtures.forEach((fixture, index) => {
        it(`Realiza e2e SelfCheckout ${index + 1}`, () => {
            cy.log('Etapa de acesso ao Selfcheckout')

            const index = 0;
            cy.login(index, el.containerSenha, el.continuar);
        });
    });
}



describe('LOG?', () => {
    before(() => { });

    beforeEach(() => {

    });

    

    it('Deve retornar log', () => {
        cy.log('teste')
        acessarSelfcheckout()
    });

});
