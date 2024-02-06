// cypress/integration/editAccount_spec.js

describe("Edit Account Information Test", () => {
  beforeEach(() => {
    // Log in before each test
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Sign In").click();
    cy.get("#email").type("syalommanurung123@gmail.com");
    cy.get("#pass").type("Manurung123");
    cy.contains("Sign In").click();
  });

  it("should successfully edit account information", () => {
    // Navigate to Edit Account Information
    cy.contains("My Account").click();
    cy.contains("Account Information").click();

    // Edit account information
    cy.get("#firstname").clear().type("SyalomEdited");
    cy.get("#lastname").clear().type("ManurungEdited");

    // Save changes
    cy.get('button[title="Save Account Information"]').click();

    // Assertion: Ensure changes are saved
    cy.contains("The account information has been saved.").should("be.visible");
  });

  it("should show an error message with invalid data", () => {
    // Navigate to Edit Account Information
    cy.contains("My Account").click();
    cy.contains("Account Information").click();

    // Attempt to edit account information with invalid data
    cy.get("#firstname").clear().type(""); // Invalid empty first name
    cy.get("#lastname").clear().type(""); // Invalid empty last name

    // Save changes
    cy.get('button[title="Save Account Information"]').click();

    // Assertion: Ensure error messages are displayed
    cy.get(".message-error").should("be.visible");
    cy.contains("This is a required field.").should("be.visible");
  });
});
