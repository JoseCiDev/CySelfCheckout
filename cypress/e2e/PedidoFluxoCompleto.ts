/// <reference types="cypress" />

import { ELEMENTS as el } from '../elements';
import { FormaPagamento, MotivoRemocaoProduto, FormaEnvio } from '../support/commands';
import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';

import { confirmaProduto } from '../integration/Orcamento/ConfirmaProduto'
import { informaDadosCliente } from '../integration/Dados/CompletaDadosCliente'
import { informaDadosEntrega } from '../integration/Entrega/InformaDadosEntrega'
import { resumoPedidoInformaFormaPagamento } from '../integration/Resumo/resumoPedidoFormaPagamento'



const ambiente: string = Cypress.env('AMBIENTE');
const dadosAmbiente: string = Cypress.env(ambiente);
const fixtures = require('../fixtures/acessoSelfcheckout.json');



export const realizaPedido = ({
    item,
    motivoRemocao,
    textoMotivoRemocaoOutro,
    quantidadeEnderecosCadastrados,
    enderecoSelecionado,
    formaEnvio,
    formaPagamento,
    adicionarProduto
}) => {

    //confirmaProdutosOrcamento
    confirmaProduto(item, motivoRemocao, textoMotivoRemocaoOutro, adicionarProduto);

    // informarDadosClienteOrcamento()
    informaDadosCliente();

    // informarDadosEntrega()
    informaDadosEntrega(quantidadeEnderecosCadastrados, enderecoSelecionado, formaEnvio);

    // informarFormaPagamento()
    resumoPedidoInformaFormaPagamento(formaPagamento);
};



export let formaPagamentoSelecionada;
describe('e2e SelfCheckout - Cliente faz pedido.', () => {


    before(() => {

    })

    beforeEach(() => {

        const index = 0;
        cy.loginSc(index, el.containerSenha, el.continuar);

    })

    $arr = ["NAO_VOU_UTILIZAR","BOLETO","TESTE"];

    for($a = 0; $a < 3; $a++){

        it("Deve realizar pedidos. EM orçamento, remover 1 fórmula quando houver 1 ou mais, informar motivo Não vou utilizar. Em endereço, selecionar endereço já cadastrado e forma de envio sedex. Em resumo, selecionar forma de pagamento Boleto.", () => {
            formaPagamentoSelecionada = FormaPagamento.BOLETO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.$arr[$a],
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 0,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.SEDEX,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false,
            });
        });

    }

    fixtures.forEach((fixture, index) => {
        it("Deve realizar pedidos. EM orçamento, remover 1 fórmula quando houver 1 ou mais, informar motivo Não vou utilizar. Em endereço, selecionar endereço já cadastrado e forma de envio sedex. Em resumo, selecionar forma de pagamento Boleto.", () => {
            formaPagamentoSelecionada = FormaPagamento.BOLETO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.NAO_VOU_UTILIZAR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 0,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.SEDEX,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false,
            });
        });

        it("Deve realizar pedidos. EM orçamento, remover 1 fórmula quando houver 1 ou mais, informar motivo Não vou utilizar. Em endereço, selecionar endereço já cadastrado e forma de envio sedex. Em resumo, selecionar forma de pagamento Boleto.", () => {
            formaPagamentoSelecionada = FormaPagamento.BOLETO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.NAO_VOU_UTILIZAR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 0,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.SEDEX,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false,
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Já comprei. Em endereço, selecionar endereço já cadastrado e forma de envio sedex. EM resumo, selecionar forma de pagamento Boleto.", () => {
            formaPagamentoSelecionada = FormaPagamento.BOLETO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.JA_COMPREI,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 0,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.SEDEX,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Valor. Em endereço, selecionar endereço já cadastrado e forma de envio sedex. Em resumo, selecionar forma de pagamento Boleto.", () => {
            formaPagamentoSelecionada = FormaPagamento.BOLETO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.VALOR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 0,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.SEDEX,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Prefiro não informar. Em endereço, selecionar endereço já cadastrado e forma de envio sedex. Em resumo, selecionar forma de pagamento Boleto.", () => {
            formaPagamentoSelecionada = FormaPagamento.BOLETO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.PREFIRO_NAO_INFORMAR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 0,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.SEDEX,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Outro. Em endereço, selecionar endereço já cadastrado e forma de envio sedex. Em resumo, selecionar forma de pagamento Boleto.", () => {
            formaPagamentoSelecionada = FormaPagamento.BOLETO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.OUTRO,
                textoMotivoRemocaoOutro: 'Teste',
                quantidadeEnderecosCadastrados: 0,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.SEDEX,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos, não remover fórmulas. Em endereço, cadastrar novo endereço da região de florianópolis e selecionar forma de envio motoboy. Em resumo, selecionar forma de pagamento Cartão de crédito.", () => {
            formaPagamentoSelecionada = FormaPagamento.CARTAO;
            realizaPedido({
                item: undefined,
                motivoRemocao: undefined,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.MOTOBOY,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos. Em orçamento, remover 1 fórmula quando houver 1 ou mais, informar motivo Não vou utilizar. Em endereço, cadastrar novo endereço da região de florianópolis e selecionar forma de envio motoboy. Em resumo, selecionar forma de pagamento Cartão de crédito.", () => {
            formaPagamentoSelecionada = FormaPagamento.CARTAO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.NAO_VOU_UTILIZAR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.MOTOBOY,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Já comprei. Em endereço, cadastrar novo endereço da região de florianópolis e selecionar forma de envio motoboy. Em resumo, selecionar forma de pagamento Cartão de crédito.", () => {
            formaPagamentoSelecionada = FormaPagamento.CARTAO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.JA_COMPREI,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.MOTOBOY,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: true
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Valor. Em endereço, cadastrar novo endereço da região de florianópolis e selecionar forma de envio motoboy. Em resumo, selecionar forma de pagamento Cartão de crédito.", () => {
            formaPagamentoSelecionada = FormaPagamento.CARTAO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.VALOR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.MOTOBOY,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: true
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Prefiro não informar. Em endereço, cadastrar novo endereço da região de florianópolis e selecionar forma de envio motoboy. Em resumo, selecionar forma de pagamento Cartão de crédito.", () => {
            formaPagamentoSelecionada = FormaPagamento.CARTAO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.PREFIRO_NAO_INFORMAR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.MOTOBOY,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: true
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Outro. Em endereço, cadastrar novo endereço da região de florianópolis e selecionar forma de envio motoboy. Em resumo, selecionar forma de pagamento Cartão de crédito.", () => {
            formaPagamentoSelecionada = FormaPagamento.CARTAO;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.OUTRO,
                textoMotivoRemocaoOutro: "Teste",
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.MOTOBOY,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos. EM orçamento, remover 1 fórmula quando houver 1 ou mais, informar motivo Não vou utilizar. Em endereço, cadastrar novo endereço  e selecionar forma de envio motoboy. Em resumo, selecionar forma de pagamento Pix.", () => {
            formaPagamentoSelecionada = FormaPagamento.PIX;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.NAO_VOU_UTILIZAR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.MOTOBOY,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Já comprei. Em endereço, cadastrar novo endereço  e selecionar forma de envio Retirada Loja. Em resumo, selecionar forma de pagamento Pix.", () => {
            formaPagamentoSelecionada = FormaPagamento.PIX;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.JA_COMPREI,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.RETIRADA_LOJA,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: true
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Valor. Em endereço, cadastrar novo endereço  e selecionar forma de envio Retirada Loja. Em resumo, selecionar forma de pagamento Pix.", () => {
            formaPagamentoSelecionada = FormaPagamento.PIX;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.VALOR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 1,
                formaEnvio: FormaEnvio.RETIRADA_LOJA,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: true
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Prefiro não informar. Em endereço, cadastrar novo endereço  e selecionar forma de envio Retirada Loja. Em resumo, selecionar forma de pagamento Pix.", () => {
            formaPagamentoSelecionada = FormaPagamento.PIX;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.PREFIRO_NAO_INFORMAR,
                textoMotivoRemocaoOutro: undefined,
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 1,
                formaEnvio: FormaEnvio.RETIRADA_LOJA,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

        it("Deve realizar pedidos, remover 1 fórmula quando houver 1 ou mais, informar motivo Outro. Em endereço, cadastrar novo endereço  e selecionar forma de envio Retirada loja. Em resumo, selecionar forma de pagamento Pix.", () => {
            formaPagamentoSelecionada = FormaPagamento.PIX;
            realizaPedido({
                item: '1',
                motivoRemocao: MotivoRemocaoProduto.OUTRO,
                textoMotivoRemocaoOutro: "Teste",
                quantidadeEnderecosCadastrados: 1,
                enderecoSelecionado: 0,
                formaEnvio: FormaEnvio.RETIRADA_LOJA,
                formaPagamento: formaPagamentoSelecionada,
                adicionarProduto: false
            });
        })

    });
})
