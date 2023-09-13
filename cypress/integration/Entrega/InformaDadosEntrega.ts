/// <reference types="cypress" />

import { ELEMENTS as el } from '../../elements';
import { Uf, FormaEnvio } from '../../support/commands';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';
import { confirmaProduto } from '../Orcamento/ConfirmaProduto'
import { informaDadosCliente } from '../Dados/CompletaDadosCliente'



const ambiente: string = Cypress.env('AMBIENTE');
const dadosAmbiente: string = Cypress.env(ambiente);



export const enderecoData = {
    cep: faker.helpers.arrayElement(['88134495', '88010000', '88036002', '88058100', '88135298', '88130015', '88130075', '88130050']),
    rua: faker.location.street(),
    numero: faker.number.int({ min: 1, max: 9897 }),
    cidade: faker.location.city(),
    estado: faker.location.state(),
    bairros: ['centro', 'Pedra Branda', 'Alvorada', 'Jurerê', 'Boa Vista', 'Bela Vista', 'Morada do Sol', 'Beira Mar', 'Praia Central', 'Jardim Primavera', 'Nova Europa', 'Campos Elísios', 'Morumbi'],
    complementos: ['fundos', 'casa 2', '2° andar', 'servidao 2'],
};



export const inserirCep = (element: string): void => {

    const inserirCEP = () => {
        cy.get(element)
            .invoke('removeAttr', 'readonly')
            .clear()
            .type('88134495')
            .invoke('attr', 'readonly', 'readonly');
    };
    inserirCEP();
    cy.get(element)
        .invoke('val')
        .then((cep) => {
            if ('88134495') {
                inserirCEP();
            }
        });
};



export const contarEnderecosCadastrados = (): void => {
    cy.get(el.endereços).then((enderecosCadastrados) => {
        const quantidadeEnderecos = enderecosCadastrados.length;
        cy.log(`Quantidade de endereços em tela: ${quantidadeEnderecos}`);
    });
};



export const selecionarEnderecoPorIndice = (element: string, indice: number) => {
    cy.get(element).then($enderecos => {
        const quantidadeEnderecos = $enderecos.length;
        const indiceSelecionado = indice >= quantidadeEnderecos ? 0 : indice;
        cy.wrap($enderecos)
            .eq(indiceSelecionado)
            .find('input[type="radio"]')
            .check({ force: true });
    })

};



export const cadastrarEndereco = (): void => {

    cy.getElementAndClick(el.abrirModalCadastrarEnderecoEnvio);

    inserirCep(el.cepEnderecoEntrega);

    cy.getElementAndClick(el.numeroEnderecoEntrega);

    cy.get(el.ruaEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.ruaEnderecoEntrega, enderecoData.rua);

    cy.get(el.bairroEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.bairroEnderecoEntrega, faker.helpers.arrayElement(enderecoData.bairros));

    cy.get(el.numeroEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.numeroEnderecoEntrega, enderecoData.numero.toString());

    cy.get(el.complementoEnderecoEntrega)
        .clear();
    cy.getElementAndType(el.complementoEnderecoEntrega, faker.helpers.arrayElement(enderecoData.complementos));

    cy.getElementAndClick(el.salvarNovoEnderecoEntrega);

};

export const cadastrarEnderecos = (quantidade: number): void => {
    for (let i = 0; i < quantidade; i++) {
        cadastrarEndereco();
    }
};



export const selecionarFormaEnvio = (element: string, formaEnvio: FormaEnvio): void => {
    // Encontre todos os elementos de opção de envio
    cy.get(element)
        .each(($el) => {
            // Verifique se o valor da opção atual coincide com a forma de envio especificada
            const opcaoAtual = $el.find('input[type="radio"]').val();
            if (opcaoAtual === formaEnvio) {
                // A opção atual corresponde à forma de envio especificada, então selecione-a
                cy.wrap($el).find('input[type="radio"]').check({ force: true });
            }
        });
};





export const informaDadosEntrega = (
    quantidadeEnderecosCadastrados: number = 0,
    enderecoSelecionado: number = 0,
    formaEnvio: FormaEnvio = FormaEnvio.SEDEX): void => {

    cy.log('Etapa entrega')

    cadastrarEnderecos(quantidadeEnderecosCadastrados)

    contarEnderecosCadastrados();
    selecionarEnderecoPorIndice(el.endereços, enderecoSelecionado);

    selecionarFormaEnvio(el.formaEnvio, formaEnvio);
    // cy.pause();

    cy.getElementAndClick(el.avancarProximaTela);

    cy.url().should('contain', 'http://192.168.0.66:9420/etapa-resumo-pedido');
}



describe('Etapa endereço e forma de envio', () => {

    before(() => {
    })

    beforeEach(() => {
        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

        confirmaProduto();

        informaDadosCliente();
    })

    it("Deve realizar cadastro de endereço, seleção de endereço de envio e forma de envio.", () => {

        informaDadosEntrega();
    })
})

