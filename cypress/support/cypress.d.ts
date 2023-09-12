// load the global Cypress types
/// <reference types="cypress" />

import { mount } from 'cypress/react'
// load the 3rd party command definition
/// <reference types="cypress-wait-until" />

import { MotivoRemocaoProduto , Uf } from '../support/commands'








declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      mount: typeof mount

      /**
       * comando customizado de login.
       * @example cy.loginSm('user', 'password','baseUrl')
       */
      loginSm(user: string, senha: string, baseUrl: string): Chainable<Element>

      /**
       * comando customizado de login.
       * @example cy.login('user', 'password')
       */
      loginSc(index: number, element: string, continuar: string): Chainable<Element>

      /**
       * comando customizado para inserir arquivos.
       * @example cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', el.importarImagem);
       */
      inserirArquivo(fixturePath, elementoBotao): Chainable<unknown>;

      /**
       * comando customizado para selecinar elemento e verificar se esta visivel.
       * @example cy.getVisible()
       */
      getVisible(element: string, options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable>): Chainable<Subject>;

      /**
       * comando customizado de login.
       * @example cy.getElementAndClick(el.elemento)
       */
      getElementAndClick(element: string): Chainable<Element>
      
      /**
       * comando customizado de login.
       * @example cy.getElementAndClick(el.elemento)
       */
      getElementAndType(element: string, text?: string): Chainable<Element>
      
      /**
       * comando customizado de login.
       * @example cy.selecionarRadioOptionByValue(el.elemento)
       */
      getRadioOptionByValue(dataCy: string, value: MotivoRemocaoProdutoOrcamento): Chainable<Element>
      

      /**
       * comando customizado de login.
       * @example cy.selecionarRadioOptionByValue(el.elemento)
       */
      getSelectOptionByValue(dataCy: string, value: Uf): Chainable<Element>
      
    }
  }

}