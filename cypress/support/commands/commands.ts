/// <reference path="../cypress.d.ts" />

import {
    CheckAndThrowError,
    ValidationConfig,
    ElementTypeAndValueOpcional,
    ValidationResult,
    ConditionalWrite,
} from "../../import";


const environment = Cypress.env('AMBIENTE');
const environmentData = Cypress.env(environment);


Cypress.Commands.add('insertFile', (element, filePath): void => {
    cy.fixture(filePath, 'base64').then((fileContent) => {
        const name = filePath.split('/').pop(); // Extract the file name from the fixture path
        const mimeType = 'image/jpeg';

        const blob = Cypress.Blob.base64StringToBlob(fileContent, mimeType);
        const file = new File([blob], name, { type: mimeType });

        cy.get(element).then(($element) => {
            const event = new Event('change', { bubbles: true });
            Object.defineProperty($element[0], 'files', {
                value: [file],
                writable: false,
            });
            $element[0].dispatchEvent(event);
        });
    });
});

Cypress.Commands.add('readFileFromFixture', (fileName) => {
    // const filePath = `${dataParameters.filePath}${fileName}`;
    // return cy.fixture(filePath);
});

Cypress.Commands.add('getElementAndClick', (elements: string[]): void => {
    elements.forEach(element => {
        cy.get(element, { timeout: 20000 }).then($elements => {
            if ($elements.length > 0) {
                cy.wrap($elements.first())
                    .click({ force: true });
            }
        });
    });
});

Cypress.Commands.add('getElementAndCheck', (elements: ElementTypeAndValueOpcional): void => {
    elements.forEach(({ element, value }) => {
        cy.get(element, { timeout: 20000 })
            .then($elements => {
                if ($elements.length > 0) {
                    cy.wrap($elements.first())
                        .check(value, { force: true });
                }
            });
    })
});

Cypress.Commands.add('getElementAndType', (elements: { [key: string]: string }): void => {
    cy.wrap(null).then(() => {
        Object.entries(elements).forEach(([element, text]) => {
            cy.get(element, { timeout: 20000 })
                .each(($input) => {
                    cy.wrap($input)
                        .then(() => {
                            cy.wrap($input.first())
                                .clear({ force: true })
                                .type(text, { timeout: 1000 })
                        })
                        .invoke('val')
                        .then(val => {
                            if (!val) {
                                return cy.wrap({ error: 'Field is empty after typing' });
                            }
                        });
                })
        });
    });
});

Cypress.Commands.add('getRadioOptionByValue', (elements: ElementTypeAndValueOpcional): void => {
    Object.entries(elements).forEach(([element, value]) => {
        cy.get(element, { timeout: 20000 })
            .should('be.visible')
            .find(`input[type="radio"][value="${value}"]`)
            .check({ force: true });
    })
});

Cypress.Commands.add('getSelectOptionByValue', (elements: ElementTypeAndValueOpcional): void => {
    Object.entries(elements).forEach(([element, value]) => {
        cy.get(element, { timeout: 20000 }).then(($select) => {
            if ($select.length > 0 && $select.is(':visible')) {
                cy.wrap($select)
                    .select(value.value, { force: true });
            }
        })
    });
});

Cypress.Commands.add('getElementAutocompleteTypeAndClick', (elements: { [key: string]: string }, autocomplete: string) => {
    cy.wrap(null).then(() => {
        Object.entries(elements).forEach(([element, text]) => {
            cy.get(element, { timeout: 20000 })
                .each(($input) => {
                    cy.wrap($input)
                        .type(text)
                        .then(() => {
                            cy.get(autocomplete)
                                .as('autocompleteAlias')
                                .click({ force: true });
                        })
                })
        })
    });
});



Cypress.Commands.add('waitModalAndClick', (jqueryElement: string, element: string) => {
    const $aliasModal = Cypress.$(jqueryElement);
    if (!$aliasModal.each) {
        cy.log('O teste será prosseguido, uma vez que o elemento esperado não foi exibido na tela.');
    } else {
        cy.get(element, { timeout: 60000 })
            .as('elementAlias')
            .invoke('removeAttr', 'readonly' || 'hidden' || 'scroll' || 'auto', { force: true })
            .click({ force: true, multiple: true, timeout: 5000 });
    }
});
