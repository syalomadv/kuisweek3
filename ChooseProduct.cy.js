describe("Product Selection Test", () => {
  it("signs in, selects a product, and adds it to cart", () => {
    // Buka halaman website
    cy.visit("https://magento.softwaretestingboard.com/");

    // Klik tombol "Sign In"
    cy.contains("Sign In").click();

    // Masukkan email dan password untuk sign in
    cy.get("#email").type("syalommanurung123@gmail.com");
    cy.get("#pass").type("Manurung123");

    cy.get('button[title="Sign In"]').click();

    cy.contains("Radiant Tee").click();
      cy.get('#selectSize').select('S');
     cy.get('#selectColor').select('Purple');

    // Klik tombol "Add to Cart" untuk menambahkan produk ke keranjang
    cy.contains("Add to Cart").click();

  });
});
