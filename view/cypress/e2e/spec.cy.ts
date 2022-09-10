describe("main page", () => {
  it("버튼 클릭", () => {
    cy.visit("/").get("button.sk-button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("move create page");
    });
  });
});
