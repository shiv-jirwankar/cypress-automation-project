import { MenuItem } from "../types/global";

export class HomePage {
   clickMenuItem(item: MenuItem) {
    cy.contains('a', item).click();
   }

    visit() {
        cy.visit("");
    }
}