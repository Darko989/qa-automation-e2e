import HomePage from '../support/pageObjects/homePage';
import CareersPage from '../support/pageObjects/careersPage';

describe('Holycode Careers Page', () => {
    const homePage = new HomePage();
    const careersPage = new CareersPage();

    it('should filter positions for Serbia and save titles to a text file', () => {
        // Arrange
        careersPage.visit();
        careersPage.filterForSerbiaPositions(); 

        // Act
        careersPage.openAllPositions(); 
        careersPage.savePositionTitlesToFile(); 

    });
});
