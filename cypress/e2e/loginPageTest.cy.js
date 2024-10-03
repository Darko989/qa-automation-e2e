import HomePage from '../support/pageObjects/homePage';

describe('Holycode Website', () => {
  const homePage = new HomePage();

  it('should verify the page title is "Tech Solutions to scale"', () => {
    // Act
    homePage.verifyH1Tag(); 

    // Assert
    homePage.verifyUrl(); 
  });
});
