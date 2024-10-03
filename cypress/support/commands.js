Cypress.Commands.add('acceptCookies', () => {
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
      .should('be.visible') 
      .click();
});
