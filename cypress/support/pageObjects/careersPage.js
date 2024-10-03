class CareersPage {
    visit() {
        cy.visit('https://www.holycode.com/careers');
    }
    
    filterForQAPositions() {
        cy.get('#\\32 6').click();
    }

    scrollAndAssertSeniorQATeam() {
        cy.get('body');
        cy.get('#resources-feed > :nth-child(2)').within(() => {
            cy.contains('Senior QA Developer/QA Team Lead').should('exist');
            cy.get('.c-txt--body-lg').should('have.text', 'Team: EtonDigital');
        });
    }
}

export default CareersPage;
