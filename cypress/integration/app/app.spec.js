/// <reference types="cypress" />

describe("Testing a submitting select box", () => {
  it("should show the selected user", () => {
    cy.visit("http://localhost:3000");

    cy.wait(200);
    cy.contains("button", "Ervin Howell").click();
    cy.get("[data-testid='selected-user']")
      .should("be.visible")
      .should("contain.text", "Ervin Howell");
  });
});
