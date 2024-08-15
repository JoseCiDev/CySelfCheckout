/// <reference types="cypress" />

import { elements as el } from '../../elements'
import { dadosParametros } from '../../DadosParametros'





export const acessarSelfcheckout = () => {
    const fixtures = dadosParametros.fixtures;

    fixtures.forEach((fixture, index) => {
        it(`Realiza e2e SelfCheckout ${index + 1}`, () => {
            cy.log('Etapa de acesso ao Selfcheckout')

            const index = 0;
            cy.loginSc(index, el.containerSenha, el.continuar);
        });
    });
}
acessarSelfcheckout()
//a






// ,
//   {
//     "link": "http://192.168.0.66:9420?key=48T-64c2d90c5d63c&company=bXlzcWwtaGtt",
//     "senha": "8036"
//   },
//   {
//     "link": "http://192.168.0.66:9420?key=66L-64f65d5f4b6c3&company=bXlzcWwtaGtt",
//     "senha": "7319"
//   },
//   {
//     "link": "http://192.168.0.66:9420?key=10T-64f65d6e8d20d&company=bXlzcWwtaGtt",
//     "senha": "1220"
//   },
//   {
//     "link": "http://192.168.0.66:9420?key=66B-64d3c3944936f&company=bXlzcWwtaGtt",
//     "senha": "7149"
//   },
//   {
//     "link": "http://192.168.0.66:9420?key=32H-64d3c4fbdcdc7&company=bXlzcWwtaGtt",
//     "senha": "7138"
//   },
//   {
//     "link": "",
//     "senha": ""
//   }/