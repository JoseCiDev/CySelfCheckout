/// <reference types="cypress" />

import { ELEMENTS as el } from '../../elements';
import { FormaPagamento } from '../../support/commands';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';
import { confirmaProduto } from '../Orcamento/ConfirmaProduto'
import { informaDadosCliente } from '../Dados/CompletaDadosCliente'
import { informaDadosEntrega } from '../Entrega/InformaDadosEntrega'
import { formaPagamentoSelecionada } from '../../e2e/PedidoFluxoCompleto'




const ambiente: string = Cypress.env('AMBIENTE');
const dadosAmbiente: string = Cypress.env(ambiente);



export const informarFormaPagamento = (formaPagamentoSelecionada): void => {

    cy.get(el.formaPagamento, { timeout: 20000 })
        .find(`input[type="radio"][data-cy="${formaPagamentoSelecionada}"]`)
        .check({ force: true });
};



export const resumoPedidoInformaFormaPagamento = (formaPagamentoSelecionada): void => {
    
    cy.log('Etapa resumo e forma de pagamento')

    cy.getElementAndClick(el.expandirDetalhesOrcamento);

    informarFormaPagamento(formaPagamentoSelecionada);
}



describe('Etapa de confirmação de dados do cliente', () => {

    before(() => {

    })

    beforeEach(() => {

        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

        confirmaProduto();

        informaDadosCliente();

        informaDadosEntrega();
    })



    it("Deve informar dados do cliente, preenchendo todos os campos", () => {
        resumoPedidoInformaFormaPagamento(formaPagamentoSelecionada)
    })
})
