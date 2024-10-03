class CareersPage {
    visit() {
        cy.visit('/careers');
    }

    filterForQAPositions() {
        cy.get('#\\32 6').click();
    }

    filterForSerbiaPositions() {
        cy.get('#\\32 8').click();
    }

    openAllPositions() {
        cy.get('.u-txt--center > .c-btn').click(); // Click to open all positions
    }

    scrollAndAssertSeniorQATeam() {
        cy.get('body');
        cy.get('#resources-feed > :nth-child(2)').within(() => {
            cy.contains('Senior QA Developer/QA Team Lead').should('exist');
            cy.get('.c-txt--body-lg').should('have.text', 'Team: EtonDigital');
        });
    }

    savePositionTitlesToFile() {
        cy.get('#resources-feed')
            .find('.c-txt--h3') 
            .then(($titles) => {
                const positionsArray = [];
                $titles.each((index, element) => {
                    const jobTitle = Cypress.$(element).text();
                    positionsArray.push(jobTitle);
                });
           
                cy.writeFile('cypress/fixtures/serbia_positions.txt', positionsArray.join('\n'));
            });
    }
}

export default CareersPage;
