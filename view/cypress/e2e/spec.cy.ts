describe("main page", () => {
  before(() => {
    cy.visit("/");
  });
  it("it forcus on inputs", () => {
    cy.get("button.user-create-button").click();
    cy.get("input[id=id]")
      .type("UserId_123")
      .should("have.value", "UserId_123");
  });
});
