/// <reference types="cypress" />

describe("Testing a submitting select box", () => {
  // This fails in Chrome >= 83, but succeeds in Chrome 80 and in Firefox
  it("no explicit wait, this will fail but shouldn't", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("ervin");
    //cy.wait(0)
    cy.contains("button", "Ervin Howell").click();
    cy.get("[data-testid='selected-user']")
      .should("be.visible")
      .should("contain.text", "Ervin Howell");
  });
  // skip("explicit wait after submit, this will succeed", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("select").select("Second");
  //   cy.wait(1000);
  //   cy.get("input").type("Hallo");
  // });

  // skip("even a wait(0) will do", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("select").select("Second");
  //   cy.wait(1000);
  //   cy.get("input").type("Hallo");
  // });
});
