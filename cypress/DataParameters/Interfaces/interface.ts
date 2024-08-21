
import {
    Uf,
    FormaEnvio,
    FormaPagamento,
    MotivoRemocaoProduto,
} from '../../import';

export interface CheckAndThrowError<S = string> {
    condition: boolean;
    errorMessage: S;
}

export interface ValidationConfig {
    selector: string;
    condition: (val: any) => boolean;
    validationMessage: string;
    successMessage: string;
    failureMessage: string;
}

export interface DataParameters {
    fixtures: any;
    url: {
        etapaCompletaDadosCliente: string;
        etapaEndereco: string;
        etapaResumoPedido: string;
    };
    endereco: {
        cep: string;
        rua: string;
        numero: number;
        cidade: string;
        estado: string;
        bairro: string[];
        complementos: string[];
    };
    usuario: {
        nomeCompleto: string;
        dataNascimento: Date;
        dataNascimentoFormatada: string;
        rg: string;
        cpf: string;
        telefone: string;
        email: string;
    };
    ufsArray: string[];
    randomOptionUf: string;
    formaPagamento: string;

    pedidoParams: {
        item: string | undefined;
        motivoRemocao: MotivoRemocaoProduto;
        textoMotivoRemocaoOutro: string | undefined;
        quantidadeEnderecosCadastrados: number;
        enderecoSelecionado: number;
        formaEnvio: FormaEnvio;
        adicionarProduto: boolean;
    };

    enums: {
        MotivoRemocaoProduto: typeof MotivoRemocaoProduto;
        FormaPagamento: typeof FormaPagamento;
        FormaEnvio: typeof FormaEnvio;
        Uf: typeof Uf;
    };

    formaPagamentoOptions: string[];
}