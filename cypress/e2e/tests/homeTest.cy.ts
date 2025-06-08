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
    formPage.getNameInput().should('be.visible').type('John Doe').should('have.value', 'John Doe');
    formPage.getMessageInput().should('be.visible').type('This is a test message.').should('have.value', 'This is a test message.');
    formPage.getSubmitButton().should('be.visible').should('be.enabled').click();
  });
}); 