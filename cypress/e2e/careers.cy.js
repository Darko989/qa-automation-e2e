import HomePage from '../support/pageObjects/homePage';
import CareersPage from '../support/pageObjects/careersPage';

describe('Holycode Careers Page', () => {
  const homePage = new HomePage();
  const careersPage = new CareersPage();

  beforeEach(() => {
    homePage.visit(); 
  });

  it('should filter QA positions and verify the team for Senior QA Developer/QA Team Lead', () => {
    // Arrange
    careersPage.visit(); 
    
    // Act
    careersPage.filterForQAPositions(); 
    careersPage.scrollAndAssertSeniorQATeam();
});
});
