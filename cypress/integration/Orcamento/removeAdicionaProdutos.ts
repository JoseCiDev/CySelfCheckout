/// <reference types="cypress" />

import 'cypress-wait-until';
import { ELEMENTS as el } from '../../elements'
import { dadosParametros } from '../../DadosParametros'



export function removerProduto(element: string): void {

    cy.get(el.blocoProdutos, { timeout: 10000 })
        .find(element)
        .then(($produtos) => {
            const quantidadeItens = $produtos.length;

            if (quantidadeItens === 0) {
                return;
            }

            cy.log('Quantidade de itens', quantidadeItens.toString())
            const indiceAleatorio = Math.floor(Math.random() * quantidadeItens);
            cy.log('Indice aleatorio selecionado', indiceAleatorio.toString())

            cy.wrap($produtos)
                .eq(indiceAleatorio)
                .click({ force: true })
        })
}





export function insereMotivoRemocaoProduto(element: string): void {
    if (dadosParametros.pedidoParams.motivoRemocao === dadosParametros.enums.MotivoRemocaoProduto.OUTRO) {
        cy.get(element, { timeout: 10000 })
            .type(dadosParametros.pedidoParams.textoMotivoRemocaoOutro);
    }

    cy.get(element, { timeout: 10000 })
        .find(`input[type="radio"][value="${dadosParametros.pedidoParams.motivoRemocao}"]`)
        .click({ force: true });

    cy.wait(500);

    cy.get(el.confirmarRemocaoProduto, { timeout: 10000 })
        .click();

    cy.getElementAndClick(el.avancarProximaTela);

    cy.url()
        .should('contain', dadosParametros.url.etapaCompletaDadosCliente);
}



export function removeAdicionaProdutos(): void {
    cy.log('Etapa confirmação de produtos');

    cy.wait(500);
    cy.getElementAndClick(el.modalSejaBemVindo);

    if (dadosParametros.pedidoParams.item == undefined || dadosParametros.pedidoParams.item == '') {
        cy.getElementAndClick(el.avancarProximaTela);
        cy.url()
            .should('contain', dadosParametros.url.etapaCompletaDadosCliente);
    } else {

        removerProduto(el.removerProduto);

        insereMotivoRemocaoProduto(el.blocoMotivoRemocaoProdutos);


        cy.getElementAndClick(el.avancarProximaTela);
        cy.url()
            .should('contain', dadosParametros.url.etapaCompletaDadosCliente);
    }

};




describe('Etapa de confirmação de produtos', () => {
    beforeEach(() => {
        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);
    });

    it("Deve acessar SelfCheckout, remover produto, informar motivo e adicionar produto ao orçamento.", () => {

        removeAdicionaProdutos();
    });
});