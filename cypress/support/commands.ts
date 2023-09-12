// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
/// <reference path="./cypress.d.ts" />

import { ELEMENTS as el } from '../elements'

export type Options =
    MotivoRemocaoProduto
    | Uf
    | FormaPagamento
    | FormaEnvio


export enum MotivoRemocaoProduto {
    NAO_VOU_UTILIZAR = 0,
    JA_COMPREI = 1,
    VALOR = 2,
    PREFIRO_NAO_INFORMAR = 3,
    OUTRO = "",
}

export enum FormaPagamento {
    BOLETO = 'boleto-radio-button',
    CARTAO = 'cartao-radio-button',
    PIX = 'pix-radio-button',
}



export enum FormaEnvio {
    MOTOBOY = "8",
    RETIRADA_LOJA = "7",
    SEDEX = "15",
}



export enum Uf {
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



const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);



Cypress.Commands.add('getVisible', (element: string, options: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable>) => {
    const defaultOptions = { timeout: 20000 };
    const combinedOptions = { ...defaultOptions, ...options };
    return cy.getVisible(element, combinedOptions);
})



Cypress.Commands.add('loginSm', (user: string, senha: string, baseUrl: string) => {
    cy.visit(baseUrl)
    cy.url().should('contain', baseUrl);

    cy.get(el.usuario, { timeout: 10000 })
        .type(user, { log: false })
        .should('have.text', user);

    cy.get(el.senha, { timeout: 10000 })
        .type(senha, { log: false })
        .should('have.text', senha);

    cy.get(el.entrar, { timeout: 10000 })
        .contains('login')
        .click();

    cy.url().should('contain', baseUrl + '/lembretes');

});



Cypress.Commands.add('loginSc', (index: number, element: string, continuar: string) => {
    cy.fixture('acessoSelfcheckout.json').then((dados) => {
        const link = dados[index].link;
        const senha = dados[index].senha;
        cy.visit(link)
        cy.get(element, { timeout: 10000 })
            .should('be.visible')
            .each(($input, index) => {
                const digito: string = senha[index]
                cy.wrap($input)
                    .type(digito)
            })
        cy.get(continuar, { timeout: 20000 })
            .should('be.visible')
            .click()
        cy.wait(1000)
    })


});



Cypress.Commands.add('getElementAndClick', (element: string): void => {
    cy.get(element, { timeout: 10000 })
        .then($elements => {
            if ($elements.length > 0) {
                cy.wrap($elements.first())
                    .click({ timeout: 10000, force: true });
            } else {
                cy.wrap($elements.eq(0))
                    .click({ timeout: 10000, force: true });
            }
        });
})



Cypress.Commands.add('getElementAndType', (element: string, text?: string): void => {
    if (typeof text !== 'string') {
        throw new Error('O texto a ser escrito deve ser uma string.');
    }
    cy.get(element, { timeout: 10000 })
        .should('be.visible')
        .then($elements => {
            if ($elements.length > 1) {
                cy.wrap($elements.first())
                    .clear()
                    .type(text, { timeout: 1000 })
            } else {
                cy.wrap($elements.eq(0))
                    .clear()
                    .type(text, { timeout: 1000 })
            }
        });
});



Cypress.Commands.add('getRadioOptionByValue', (dataCy: string, value: Options): void => {
    cy.get(`[data-cy="${dataCy}"]`, { timeout: 10000 })
        .should('be.visible')
        .find(`input[type="radio"][value="${value}"]`)
        .check({ force: true })
});



Cypress.Commands.add('getSelectOptionByValue', (dataCy: string, value: Options) => {
    cy.get(`[data-cy="${dataCy}"]`, { timeout: 10000 })
        .should('be.visible')
        .select(value, { force: true })
})