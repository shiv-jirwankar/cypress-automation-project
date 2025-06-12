import { FormPage } from "../pages/form.page";
import { HomePage } from "../pages/home.page";

describe("Home Page Tests", () => {
    let homePage: HomePage;
    let formPage: FormPage;
  
  beforeEach(() => {
    homePage = new HomePage();
    formPage = new FormPage();

    homePage.visit();
  });

  it('should successfully submit form with valid data', () => {
    homePage.clickMenuItem('Ajax Form Submit');
    formPage.getMessageLabel().should('have.text', 'Message:');
    formPage.getNameLabel().should('have.text', 'Name:');
    formPage.getNameInput().should('be.visible');
    formPage.getNameInput().type('John Doe');
    formPage.getNameInput().should('have.value', 'John Doe');
    formPage.getMessageInput().should('be.visible');
    formPage.getMessageInput().type('This is a test message.');
    formPage.getMessageInput().should('have.value', 'This is a test message.');
    formPage.getSubmitButton().should('be.visible');
    formPage.getSubmitButton().should('be.enabled');
    formPage.getSubmitButton().click();
  });
}); 
