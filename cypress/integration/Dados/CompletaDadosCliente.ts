/// <reference types="cypress" />

import { ELEMENTS as el } from '../../elements';
import { Uf } from '../../support/commands';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';
import { confirmaProduto } from '../Orcamento/ConfirmaProduto'
import { MotivoRemocaoProduto } from '../../support/commands'


const ambiente: string = Cypress.env('AMBIENTE');
const dadosAmbiente: string = Cypress.env(ambiente);

const nomeCompletoAleatorio: string = faker.person.fullName()
const dataNascimentoAleatorio: Date = faker.date.birthdate();
const dataNascimentoFormatada = format(dataNascimentoAleatorio, 'yyyy-MM-dd');
const rgAleatorio: string = fakerBr.br.rg();
const cpfAleatorio: string = fakerBr.br.cpf();
const telefoneAleatorio: string = faker.phone.number('+48 9 #### ####') // '+48 9 9214 8670'
const emailAleatorio: string = faker.internet.email({ provider: 'essentia.com.br', allowSpecialCharacters: true })

const ufsArray = Object.values(Uf);
const randomOptionUf = ufsArray[Math.floor(Math.random() * ufsArray.length)];


export const informaDadosCliente = () => {
    cy.log('Etapa informa dados do cliente')

    cy.getElementAndType(el.nomeCompleto, nomeCompletoAleatorio), { timeout: 10000 };

    cy.getElementAndType(el.dataNascimento, dataNascimentoFormatada.toString());

    cy.getElementAndType(el.rg, rgAleatorio);

    const selecionaUfDadosCliente = (element: string): void => {
        cy.get(element)
            .click()
        cy.getSelectOptionByValue('uf', randomOptionUf);
    }
    selecionaUfDadosCliente(el.uf);

    cy.getElementAndType(el.telefone, telefoneAleatorio);

    cy.getElementAndType(el.cpf, cpfAleatorio);

    cy.getElementAndType(el.email, emailAleatorio);

    cy.getElementAndClick(el.aceitoReceberComunicacoesEssentia);

    cy.getElementAndClick(el.aoAssinarConcordaPoliticaPrivacidade);
    // cy.pause();

    cy.getElementAndClick(el.avancarProximaTela);

    cy.url().should('contain', 'http://192.168.0.66:9420/etapa-endereco');

}




describe('Etapa de confirmação de dados do cliente', () => {


    beforeEach(() => {

        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

        confirmaProduto();
    })

    it("Deve informar dados do cliente, preenchendo todos os campos", () => {
        
        informaDadosCliente()
    })
})