
import {
    DataParameters,
    format,
    fakerBr,
    faker,
    Uf,
    ShippingMethod,
    PaymentMethod,
    ReasonProductRemoval,
} from '../import';


export const getRandomValue = <T>(array: T[]): T => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const removalReasonOptions: ReasonProductRemoval[] = [
    ReasonProductRemoval.naoVouUtilizar,
    ReasonProductRemoval.jaComprei,
    ReasonProductRemoval.valor,
    ReasonProductRemoval.prefiroNaoInformar,
    ReasonProductRemoval.outro,
];

const birthDate = faker.date.birthdate();
const ufsArray = Object.values(Uf) as string[];

export const dataParameters: DataParameters = {

    fixtures: import('../fixtures/acessoSelfcheckout.json'),

    url: {
        completeStepCustomerData: 'http://192.168.0.66:9420/etapa-completa-dados',
        addressStep: 'http://192.168.0.66:9420/etapa-endereco',
        budgetSummaryStep: 'http://192.168.0.66:9420/etapa-resumo-pedido',
    },

    address: {
        postalCode: faker.helpers.arrayElement(['88134495', '88010000', '88036002', '88058100', '88135298', '88130015', '88130075', '88130050']),
        street: faker.location.street(),
        streetNumber: faker.number.int({ min: 1, max: 9897 }),
        city: faker.location.city(),
        state: faker.location.state(),
        district: ['centro', 'Pedra Branda', 'Alvorada', 'Jurerê', 'Boa Vista', 'Bela Vista', 'Morada do Sol', 'Beira Mar', 'Praia Central', 'Jardim Primavera', 'Nova Europa', 'Campos Elísios', 'Morumbi'],
        complements: ['fundos', 'casa 2', '2° andar', 'servidao 2'],
    },

    user: {
        fullName: faker.person.fullName(),
        birthDate: faker.date.birthdate(),
        formattedBirthDate: format(birthDate, 'yyyy-MM-dd'),
        rg: faker.helpers.arrayElement(['6207536']),
        cpf: faker.helpers.arrayElement(['08239097510']),
        phoneNumber: faker.phone.number('+48 9 #### ####'), // '+48 9 9214 8670'
        email: faker.internet.email({ provider: 'essentia.com.br', allowSpecialCharacters: true }),
    },

    ufsArray: Object.values(Uf),
    randomOptionUf: ufsArray[Math.floor(Math.random() * ufsArray.length)],

    enums: {
        reasonProductRemoval: ReasonProductRemoval,
        paymentMethod: PaymentMethod,
        shippingMethod: ShippingMethod,
        Uf,
    },

    paymentMethod: getRandomValue([
        PaymentMethod.boleto,
        PaymentMethod.cartao,
        PaymentMethod.pix,
    ]),

    paymentMethodOptions: [
        PaymentMethod.boleto,
        PaymentMethod.cartao,
        PaymentMethod.pix,
    ],

    budgetParams: {
        item: '1',
        removalReason: ReasonProductRemoval.jaComprei,
        textReasonForRemovalOther: 'Teste',
        amountRegisteredAddresses: 0,
        selectedAddress: 0,
        shippingMethod: ShippingMethod.motoboy,
        addProduct: true,
    },

};

