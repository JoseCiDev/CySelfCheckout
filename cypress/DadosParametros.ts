
import {
    faker,
    fakerBr,
    format
} from './import';



interface DadosParametros {
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


enum MotivoRemocaoProduto {
    NAO_VOU_UTILIZAR = 0,
    JA_COMPREI = 1,
    VALOR = 2,
    PREFIRO_NAO_INFORMAR = 3,
    OUTRO = "",
}

enum FormaPagamento {
    BOLETO = 'boleto-radio-button',
    CARTAO = 'cartao-radio-button',
    PIX = 'pix-radio-button',
}

enum FormaEnvio {
    MOTOBOY = "8",
    RETIRADA_LOJA = "7",
    SEDEX = "15",
}

enum Uf {
    AC = "AC",
    AL = "AL",
    AP = "AP",
    AM = "AM",
    BA = "BA",
    CE = "CE",
    DF = "DF",
    ES = "ES",
    GO = "GO",
    MA = "MA",
    MT = "MT",
    MS = "MS",
    MG = "MG",
    PA = "PA",
    PB = "PB",
    PR = "PR",
    PE = "PE",
    PI = "PI",
    RJ = "RJ",
    RN = "RN",
    RS = "RS",
    RO = "RO",
    RR = "RR",
    SC = "SC",
    SP = "SP",
    SE = "SE",
    TO = "TO",
}

export const getRandomValue = <T>(array: T[]): T => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


const motivoRemocaoOptions: MotivoRemocaoProduto[] = [
    MotivoRemocaoProduto.NAO_VOU_UTILIZAR,
    MotivoRemocaoProduto.JA_COMPREI,
    MotivoRemocaoProduto.VALOR,
    MotivoRemocaoProduto.PREFIRO_NAO_INFORMAR,
    MotivoRemocaoProduto.OUTRO,
];


const dataNascimento = faker.date.birthdate();
const ufsArray = Object.values(Uf) as string[];


export const dadosParametros: DadosParametros = {

    fixtures: require('./fixtures/acessoSelfcheckout.json'),

    url: {
        etapaCompletaDadosCliente: 'http://192.168.0.66:9420/etapa-completa-dados',
        etapaEndereco: 'http://192.168.0.66:9420/etapa-endereco',
        etapaResumoPedido: 'http://192.168.0.66:9420/etapa-resumo-pedido',
    },

    endereco: {
        cep: faker.helpers.arrayElement(['88134495', '88010000', '88036002', '88058100', '88135298', '88130015', '88130075', '88130050']),
        rua: faker.location.street(),
        numero: faker.number.int({ min: 1, max: 9897 }),
        cidade: faker.location.city(),
        estado: faker.location.state(),
        bairro: ['centro', 'Pedra Branda', 'Alvorada', 'Jurerê', 'Boa Vista', 'Bela Vista', 'Morada do Sol', 'Beira Mar', 'Praia Central', 'Jardim Primavera', 'Nova Europa', 'Campos Elísios', 'Morumbi'],
        complementos: ['fundos', 'casa 2', '2° andar', 'servidao 2'],
    },

    usuario: {
        nomeCompleto: faker.person.fullName(),
        dataNascimento: faker.date.birthdate(),
        dataNascimentoFormatada: format(dataNascimento, 'yyyy-MM-dd'),
        rg: fakerBr.rg(),
        cpf: fakerBr.cpf(),
        telefone: faker.phone.number('+48 9 #### ####'), // '+48 9 9214 8670'
        email: faker.internet.email({ provider: 'essentia.com.br', allowSpecialCharacters: true }),
    },

    ufsArray: Object.values(Uf),
    randomOptionUf: ufsArray[Math.floor(Math.random() * ufsArray.length)],




    enums: {
        MotivoRemocaoProduto,
        FormaPagamento,
        FormaEnvio,
        Uf,
    },

    formaPagamento: getRandomValue([
        FormaPagamento.BOLETO,
        FormaPagamento.CARTAO,
        FormaPagamento.PIX,
    ]),

    formaPagamentoOptions: [
        FormaPagamento.BOLETO,
        FormaPagamento.CARTAO,
        FormaPagamento.PIX,
    ],

    pedidoParams: {
        item: '1',
        motivoRemocao: MotivoRemocaoProduto.JA_COMPREI,
        textoMotivoRemocaoOutro: 'Teste',
        quantidadeEnderecosCadastrados: 0,
        enderecoSelecionado: 0,
        formaEnvio: FormaEnvio.MOTOBOY,
        adicionarProduto: true,
    },

};

