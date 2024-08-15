// load the global Cypress types
/// <reference types="cypress" />

import { mount } from 'cypress/react'






declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {

      /**
       * comando customizado de login.
       * @example cy.login('user', 'password')
       */
      login(index: number, element: string, continuar: string): Chainable<Element>

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
      * comando customizado para selecionar o elemento e clicar.
      * @example cy.getElementAndClick(el.elemento)
      */
      getElementAndClick(elements: string[]): ValidationResult;

      /**
     * comando customizado de login.
     * @example cy.getElementAndClick(el.elemento)
    */
      getElementAndType(elements: { [key: string]: string }): ValidationResult

      /**
      * comando customizado para selecionar a opcao radio.
      * @example cy.getRadioOptionByValue(element,valor)
      */
      getRadioOptionByValue(elements: ElementTypeAndValueOpcional): ValidationResult


      /**
     * comando customizado para selecionar opção do select.
     * @example cy.getSelectOptionByValue(el.elemento)
     */
      getSelectOptionByValue(elements: ElementTypeAndValueOpcional): ValidationResult;

      /**
      * * comando customizado para guardar modal e clicar.
      * @example cy.waitModalAndClick(orcamentista,atendente)
      */
      waitModalAndClick(jqueryElement: string, element: string): ValidationResult;

      /**
      * * comando customizado para selecionar elemento autocomplete apos digitar e capturar sugestão autocomplete clicando.
      * @example cy.getElementAutocompleteTypeAndClick(orcamentista,atendente)
      */
      getElementAutocompleteTypeAndClick(elements: { [key: string]: string }, autocomplete: string): ValidationResult;

      /**
      * comando customizado para capturar elemento e marcar checkbox.
      * @example cy.getElementAndCheck(el.elemento)
      */
      getElementAndCheck(elements: ElementTypeAndValueOpcional): ValidationResult;

      /**
      * comando customizado para ler arquivos
      * @example cy.lerArquivo('orcamentoFilial.json')
      */
      readFileFromFixture(fileName: string): ValidationResult;

      /**
      * comando customizado para inserir arquivos.
      * @example cy.insertFile('img/ReceitaJpeg(1).jpeg', el.importarImagem);
      */
      insertFile(element, filePath): ValidationResult;


    }
  }

}