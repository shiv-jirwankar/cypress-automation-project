import { BasePage } from "./base.page";

export class FormPage extends BasePage {
    getNameLabel(): Cypress.Chainable {
        return cy.get('form label').first();
    }

    getMessageLabel(): Cypress.Chainable {
        return cy.get('form label').last();
    }

    getNameInput(): Cypress.Chainable {
        return cy.get('#title');
    }

    getMessageInput(): Cypress.Chainable {
        return cy.get('#description');
    }

    getSubmitButton(): Cypress.Chainable {
        return cy.get('#btn-submit');
    }
}