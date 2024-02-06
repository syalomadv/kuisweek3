describe("My Account Tests", () => {
  it("should log in and edit address", () => {
    // Buka halaman utama
    cy.visit("https://magento.softwaretestingboard.com/");

    // Klik tombol "Sign In"
    cy.contains("Sign In").click();

    // Masukkan informasi login Anda
    cy.get("#email").type("syalommanurung123@gmail.com");
    cy.get("#pass").type("Manurung123");
    cy.get("#send2").click();

    // Pergi ke halaman "Edit Address"
    cy.contains("My Account").click();
    cy.contains("Manage Addresses").click();

    // Klik tombol "Edit" pada alamat pertama (Anda dapat menyesuaikan sesuai kebutuhan)
    cy.get(".box-content .box-head:first-child .box-head-button")
      .contains("Edit")
      .click();

    // Edit alamat sesuai kebutuhan
    cy.get("#street_1").clear().type("Medan street");
    cy.get("#city").clear().type("Pematangsiantar");
    cy.get("#postcode").clear().type("12345");
    cy.get("#telephone").clear().type("987654321");
    cy.get('button[title="Save Address"]').click();

    // Verifikasi bahwa alamat berhasil diperbarui
    cy.contains("The address has been saved.").should("be.visible");
  });
});
