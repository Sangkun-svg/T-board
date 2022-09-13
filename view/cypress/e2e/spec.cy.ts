describe("main page", () => {
  it("open register modal", () => {
    cy.visit("/").get("button.user-create-button").click();
    cy.get(".c_userModal").should("be.visible");
  });
});
