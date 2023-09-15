/// <reference types="cypress" />


import { ELEMENTS as el } from '../../elements';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';
import { acessarSelfcheckout } from '../Login/AcessaSelfcheckout'
import { removeAdicionaProdutos } from '../Orcamento/removeAdicionaProdutos'
import { informaDadosCliente } from '../Dados/CompletaDadosCliente'
import { informaDadosEntrega } from '../Entrega/InformaDadosEntrega'
import { dadosParametros } from '../../DadosParametros'



export const informarFormaPagamento = (element: string): void => {
    cy.get(element, { timeout: 20000 })
        .find(`input[type="radio"][data-cy="${dadosParametros.formaPagamento}"]`)
        .check({ force: true });
};



export function resumoPedidoInformaFormaPagamento(): void {

    cy.log('Etapa resumo e forma de pagamento')

    cy.getElementAndClick(el.expandirDetalhesOrcamento);

    informarFormaPagamento(el.formaPagamento);
}




describe('Etapa de revisão dos dados do pedido e seleção da forma de pagamento', () => {

    before(() => {
    })

    beforeEach(() => {

        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

        removeAdicionaProdutos();

        informaDadosCliente();

        informaDadosEntrega();
    })


    it("Deve verificar o resumo do pedido e informar forma de pagamento.", () => {
        resumoPedidoInformaFormaPagamento()
    })
})
