class HomePage {
    visit() {
      cy.visit('/');
      this.acceptCookies(); 
    }
  
    acceptCookies() {
      cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
        .should('be.visible') 
        .click();
    }
    verifyPageTitle() {
      cy.get('h1').should('have.text', 'Tech Solutions to scale'); 
    }

    verifyUrl() {
      cy.url().should('eq', 'https://www.holycode.com/');
    }
  
    verifyH1Tag() {
      cy.get('h1').should('exist'); 
      cy.get('h1').should('have.text', 'Tech Solutions to scale'); 
    }
  }
  
  export default HomePage;
  