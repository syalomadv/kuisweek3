describe("Product Update Test", () => {
  it("signs in, selects a product, adds it to cart, and updates quantity", () => {
  
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Sign In").click();

     cy.get("#email").type("syalommanurung123@gmail.com");
    cy.get("#pass").type("Manurung123");

    cy.get('button[title="Sign In"]').click();

  cy.contains("Radiant Tee").click();
  cy.get('#selectSize').select('S');
    cy.get('#selectColor').select('Purple');

    cy.contains("Add to Cart").click();
       cy.get(".cart-table").contains("input[name='cart[qty]']").clear().type("2");     cy.contains("Update Shopping Cart").click();       });
});
