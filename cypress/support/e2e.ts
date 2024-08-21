

import './commands/commands'

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})