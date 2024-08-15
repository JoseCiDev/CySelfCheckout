/// <reference types="cypress" />


import { elements as el } from '../../elements';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';
import { acessarSelfcheckout } from '../Login/AcessaSelfcheckout'
import { removeAdicionaProdutos } from '../Orcamento/removeAdicionaProdutos'
import { informaDadosCliente } from '../Dados/CompletaDadosCliente'
import { dadosParametros } from '../../DadosParametros'





export const inserirCep = (element: string): void => {
    cy.get(element)
        .invoke('removeAttr', 'readonly')
        .clear({ force: true })
        .type(dadosParametros.endereco.cep)
        .invoke('attr', 'readonly', 'readonly');
    cy.wait(500);
}


export const contarEnderecosCadastrados = (element: string): void => {
    cy.get(element)
        .then((enderecosCadastrados) => {
            const quantidadeEnderecos = enderecosCadastrados.length;
            cy.log(`Quantidade de endereços em tela: ${quantidadeEnderecos}`);
        });
};


export const selecionarEnderecoPorIndice = (element: string, indice: number): void => {
    cy.get(element)
        .then($enderecos => {
            const quantidadeEnderecos = $enderecos.length;
            const indiceSelecionado = indice >= quantidadeEnderecos ? 0 : indice;

            cy.wrap($enderecos)
                .eq(indiceSelecionado)
                .find(el.radiobutton)
                .check({ force: true });
        })

};


export const cadastrarEndereco = (): void => {

    cy.getElementAndClick(el.abrirModalCadastrarEnderecoEnvio);

    cy.wait(500);
    inserirCep(el.cepEnderecoEntrega)

    cy.getElementAndClick(el.numeroEnderecoEntrega);

    cy.get(el.ruaEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.ruaEnderecoEntrega, dadosParametros.endereco.rua);

    cy.get(el.bairroEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.bairroEnderecoEntrega, faker.helpers.arrayElement(dadosParametros.endereco.bairro));

    cy.get(el.numeroEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.numeroEnderecoEntrega, dadosParametros.endereco.numero.toString());

    cy.get(el.complementoEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.complementoEnderecoEntrega, faker.helpers.arrayElement(dadosParametros.endereco.complementos));

    cy.getElementAndClick(el.salvarNovoEnderecoEntrega);

    cy.wait(500);
};


export const cadastrarEnderecos = (quantidadeEnderecosCadastrados: number): void => {
    for (let i = 0; i < quantidadeEnderecosCadastrados; i++) {
        cadastrarEndereco();
    }
};


export const selecionarFormaEnvio = (element: string, randomOptionUf: string): void => {
    cy.get(element)
        .each(($el) => {
            const opcaoAtual = $el
                .find(el.radiobutton)
                .val();

            if (opcaoAtual === randomOptionUf) {
                cy.wrap($el)
                    .find(el.radiobutton)
                    .check({ force: true });
            }
        });
};


export function informaDadosEntrega  (): void {

    cy.log('Etapa entrega')

    cadastrarEnderecos(dadosParametros.pedidoParams.quantidadeEnderecosCadastrados)

    contarEnderecosCadastrados(el.endereços);

    selecionarEnderecoPorIndice(el.endereços, dadosParametros.pedidoParams.enderecoSelecionado);

    selecionarFormaEnvio(el.formaEnvio, dadosParametros.pedidoParams.formaEnvio);

    cy.getElementAndClick(el.avancarProximaTela);

    cy.url()
        .should('contain', dadosParametros.url.etapaResumoPedido);
}




describe('Etapa endereço e forma de envio', () => {

    before(() => {
    })

    beforeEach(() => {
        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

        removeAdicionaProdutos();

        informaDadosCliente();
    })

    it("Deve realizar cadastro de endereço, seleção de endereço de envio e forma de envio.", () => {

        informaDadosEntrega();
    })
})

