// cypress/integration/login_spec.js

describe("Login Test", () => {
  it("should successfully log in with valid credentials", () => {
    // Navigate to the Magento site
    cy.visit("https://magento.softwaretestingboard.com/");

    // Click the "Sign In" link
    cy.contains("Sign In").click();

    // Fill in the login form with valid credentials
    cy.get("#email").type("syalommanurung123@gmail.com");
    cy.get("#pass").type("Manurung123");

    // Submit the login form
    cy.get('button[title="Sign In"]').click();
  });
});
