/// <reference types="cypress" />

import { ELEMENTS as el } from '../../elements'
import { MotivoRemocaoProduto } from '../../support/commands'
import { acessarSelfcheckout } from '../Login/AcessaSelfcheckout'



interface ItemPedido {
    item?: string;
    motivo?: MotivoRemocaoProduto;
    textoMotivoRemocaoOutro?: string;
    adicionarProduto?: boolean;
}



const ambiente: string = Cypress.env('AMBIENTE');
const dadosAmbiente: string = Cypress.env(ambiente);



export const MotivoRemocaoSelectors: Record<MotivoRemocaoProduto, string> = {
    [MotivoRemocaoProduto.NAO_VOU_UTILIZAR]: `input[type="radio"][value="0"]`,
    [MotivoRemocaoProduto.JA_COMPREI]: `input[type="radio"][name="motivo-remocao-formula"][value="1"]`,
    [MotivoRemocaoProduto.VALOR]: `input[type="radio"][name="motivo-remocao-formula"][value="2"]`,
    [MotivoRemocaoProduto.PREFIRO_NAO_INFORMAR]: `input[type="radio"][name="motivo-remocao-formula"][value="3"]`,
    [MotivoRemocaoProduto.OUTRO]: `input[type="radio"][name="motivo-remocao-formula"][value=""]`,
};



export function removerProduto(): void {
    cy.get('.bloco-manipulados', { timeout: 10000 })
        .find(el.removerFormulaOrcamento)
        .then(($elementos) => {
            const quantidadeItens = $elementos.length;
            let indiceAleatorio = Math.floor(Math.random() * quantidadeItens);
            if (indiceAleatorio >= quantidadeItens) {
                indiceAleatorio = 0;
            }
            cy.wrap($elementos)
                .eq(indiceAleatorio)
                .click({force:true});
        });
}



export const confirmaProduto = (item?: string, motivoRemocao?: MotivoRemocaoProduto, textoMotivoRemocaoOutro?: string, adicionarProduto?: boolean): void => {
    cy.log('Etapa confirmação de produtos')

    cy.getElementAndClick(el.modalSejaBemVindo);

    if (item !== undefined && motivoRemocao !== undefined) {

        removerProduto();

        if (motivoRemocao !== MotivoRemocaoProduto.OUTRO) {
            cy.get(MotivoRemocaoSelectors[motivoRemocao])
                .click({force:true});
        } else {
            cy.get(MotivoRemocaoSelectors[MotivoRemocaoProduto.OUTRO])
                .click({force:true});

            if (textoMotivoRemocaoOutro) {
                cy.get('#outro-motivo')
                    .type(textoMotivoRemocaoOutro);
            }
        }

        if (adicionarProduto) {
            removerProduto();
        }
        cy.get('#modal-remocao-formula')
            .should('be.visible');

        cy.getElementAndClick(el.confirmarRemocaoProduto), { timeout: 1000 };

        if (adicionarProduto) {
            cy.getElementAndClick(el.adicionarProduto), { timeout: 1000 };
        }
        cy.getElementAndClick(el.avancarProximaTela), { timeout: 1000 };

        cy.url().should('not.eq', 'http://192.168.0.66:9420/etapa-confirma-produtos')
    }
    else {

        cy.getElementAndClick(el.avancarProximaTela);

        cy.url().should('not.eq', 'http://192.168.0.66:9420/etapa-confirma-produtos')
    }
};



describe('Etapa de confirmação de produtos', () => {

    beforeEach(() => {

        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

    })

    it("Deve acessar SelfCheckout, remover fórmula, informar motivo e adicionar fórmula ao orçamento.", () => {

        confirmaProduto();

    })
})