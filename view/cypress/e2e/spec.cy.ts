describe("main page", () => {
  before(() => {
    cy.visit("/");
  });
  it("open register modal", () => {
    cy.get("button.user-create-button").click();
    cy.get(".c_userModal").should("be.visible");
  });
});
