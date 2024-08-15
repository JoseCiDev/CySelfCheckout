/// <reference types="cypress" />

import { elements as el } from '../../elements';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';
import { acessarSelfcheckout } from '../Login/AcessaSelfcheckout'
import { removeAdicionaProdutos } from '../Orcamento/removeAdicionaProdutos'
import { dadosParametros } from '../../DadosParametros'



export const informaUf = (element: string, randomOptionUf: string): void => {
    cy.getElementAndClick(element,)
        .click()
    cy.getSelectOptionByValue('uf', randomOptionUf);
}



export function informaDadosCliente() {

    cy.log('Etapa informar dados do cliente')

    cy.request('http://192.168.0.66:9420/etapa-completa-dados').then((response) => {
        expect(response.status).to.eq(200)

        cy.get(el.nomeCompleto)
            .clear()
        cy.waitUntil(() =>
            cy.get(el.nomeCompleto)
                .type(dadosParametros.usuario.nomeCompleto),
            {
                errorMsg: 'Elemento não ficou visível a tempo.',
                timeout: 50000, // Tempo máximo de espera em milissegundos (opcional)
                interval: 500,  // Intervalo entre verificações em milissegundos (opcional)
            }
        );

        cy.getElementAndType(el.dataNascimento, dadosParametros.usuario.dataNascimentoFormatada.toString());

        cy.get(el.rg)
            .clear()
        cy.getElementAndType(el.rg, dadosParametros.usuario.rg);

        informaUf(el.uf, dadosParametros.randomOptionUf);

        cy.get(el.telefone)
            .clear()
        cy.getElementAndType(el.telefone, dadosParametros.usuario.telefone);

        cy.get(el.cpf)
            .clear()
        cy.getElementAndType(el.cpf, dadosParametros.usuario.cpf);

        cy.get(el.email)
            .clear()
        cy.getElementAndType(el.email, dadosParametros.usuario.email);

        cy.getElementAndClick(el.aceitoReceberComunicacoesEssentia);

        cy.getElementAndClick(el.aoAssinarConcordaPoliticaPrivacidade);

        cy.getElementAndClick(el.avancarProximaTela);

        cy.url()
            .should('contain', dadosParametros.url.etapaEndereco);

    })

}








describe('Etapa de confirmação de dados do cliente', () => {


    beforeEach(() => {

        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

        removeAdicionaProdutos();
    })

    it("Deve informar dados do cliente, preenchendo todos os campos", () => {


        informaDadosCliente()
    })
})

