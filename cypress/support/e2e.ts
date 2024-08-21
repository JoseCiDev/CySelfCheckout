import './commands/commands'
import './commands/commandsLogin'

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})