// cypress/integration/createAccount_spec.js

describe("Create Account Test", () => {
  it("should successfully create a new account", () => {
    // Navigate to the Magento site
    cy.visit("https://magento.softwaretestingboard.com/");

    // Click the "Create an Account" button
    cy.contains("Create an Account").click();

    // Fill in the registration form
    cy.get("#firstname").type("Syalom");
    cy.get("#lastname").type("Manurung");
    cy.get("#email_address").type("syalommanurung123@gmail.com");
    cy.get("#password").type("Manurung123");
    cy.get("#password-confirmation").type("Manurung123");

    // Submit the form
    cy.get('button[title="Create an Account"]').click();
  });
});
