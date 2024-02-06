describe("Product Update Test", () => {
  it("signs in, selects a product, adds it to cart, updates quantity, and proceeds to checkout", () => {
  
    cy.visit("https://magento.softwaretestingboard.com/");



    cy.contains("Radiant Tee").click();
    cy.get("Select Size").select('S');
    cy.get("Select Color").select('Purple');

    cy.contains("Add to Cart").click();

    cy.get(".cart-table").contains("input[name='cart[qty]']").clear().type("2");
    cy.contains("Update Shopping Cart").click();

    // Proceed to checkout
    cy.contains("Proceed to Checkout").click();

    // Add further steps for the checkout process if necessary
  });
});
