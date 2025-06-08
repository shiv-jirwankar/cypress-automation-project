import { BasePage } from "./base.page";

export class FormPage extends BasePage {
    getNameLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('form label').first();
    }

    getMessageLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('form label').last();
    }

    getNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#title');
    }

    getMessageInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#description');
    }

    getSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#btn-submit');
    }
}