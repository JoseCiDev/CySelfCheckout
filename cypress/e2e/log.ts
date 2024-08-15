/// <reference types="cypress" />

import {
    elements as el,
    faker,
    fakerBr,
} from '../import';


import { removeAdicionaProdutos } from '../integration/Orcamento/removeAdicionaProdutos'
import { informaDadosCliente } from '../integration/Dados/CompletaDadosCliente'
import { informaDadosEntrega } from '../integration/Entrega/InformaDadosEntrega'
import { resumoPedidoInformaFormaPagamento } from '../integration/ResumoFormaPagamento/resumoPedidoFormaPagamento'
import { dadosParametros, getRandomValue } from '../DadosParametros'




describe('LOG?', () => {
    before(() => { });

    beforeEach(() => {

    });

    it('Deve retornar log', () => {
        cy.log('teste')
    });

});
