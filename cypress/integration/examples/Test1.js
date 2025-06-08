describe("My first Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    expect(true).to.equal(true);
  });
});
