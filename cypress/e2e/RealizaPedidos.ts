/// <reference types="cypress" />

import { elements as el } from '../elements';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';
import { removeAdicionaProdutos } from '../integration/Orcamento/removeAdicionaProdutos'
import { informaDadosCliente } from '../integration/Dados/CompletaDadosCliente'
import { informaDadosEntrega } from '../integration/Entrega/InformaDadosEntrega'
import { resumoPedidoInformaFormaPagamento } from '../integration/ResumoFormaPagamento/resumoPedidoFormaPagamento'
import { dadosParametros, getRandomValue } from '../DadosParametros'




export const realizaPedido = () => {
    const index = 0;
    cy.loginSc(index, el.containerSenha, el.continuar);

    // Confirma produtos no orçamento
    removeAdicionaProdutos();

    // Informa dados do cliente
    informaDadosCliente();

    // Informa dados de entrega
    informaDadosEntrega();

    // Informa forma de pagamento no resumo
    resumoPedidoInformaFormaPagamento();
};


describe('e2e SelfCheckout - Cliente faz pedido.', () => {
    before(() => { });

    beforeEach(() => {
        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);
    });



    it('Deve realizar pedidos aleatórios', () => {
        const numeroExecucoes: number = 10
        for (let execucaoTeste = 1; execucaoTeste < numeroExecucoes; execucaoTeste++) {
            cy.log(`TESTE NÚMERO ${execucaoTeste}`)
            realizaPedido();
        }
    });

});
