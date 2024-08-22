
import {
    DataParameters,
    format,
    fakerBr,
    faker,
    Uf,
    FormaEnvio,
    FormaPagamento,
    MotivoRemocaoProduto,
} from '../import';


export const getRandomValue = <T>(array: T[]): T => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const motivoRemocaoOptions: MotivoRemocaoProduto[] = [
    MotivoRemocaoProduto.naoVouUtilizar,
    MotivoRemocaoProduto.jaComprei,
    MotivoRemocaoProduto.valor,
    MotivoRemocaoProduto.prefiroNaoInformar,
    MotivoRemocaoProduto.outro,
];

const dataNascimento = faker.date.birthdate();
const ufsArray = Object.values(Uf) as string[];

export const dataParameters: DataParameters = {

    fixtures: require('../fixtures/acessoSelfcheckout.json'),

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
        rg: faker.helpers.arrayElement(['6207536']),
        cpf: faker.helpers.arrayElement(['08239097510']),
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
        FormaPagamento.boleto,
        FormaPagamento.cartao,
        FormaPagamento.pix,
    ]),

    formaPagamentoOptions: [
        FormaPagamento.boleto,
        FormaPagamento.cartao,
        FormaPagamento.pix,
    ],

    pedidoParams: {
        item: '1',
        motivoRemocao: MotivoRemocaoProduto.jaComprei,
        textoMotivoRemocaoOutro: 'Teste',
        quantidadeEnderecosCadastrados: 0,
        enderecoSelecionado: 0,
        formaEnvio: FormaEnvio.motoboy,
        adicionarProduto: true,
    },

};

