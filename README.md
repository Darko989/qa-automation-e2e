QA Automation E2E Project
Overview
This project is an end-to-end testing framework using Cypress. The goal is to automate the testing of the  Careers page, filter job positions for Serbia, and save the job titles in a text file.

Project Structure
/cypress: Contains the integration tests and fixtures for the project.

/support/pageObjects: Page Object Model files that define interactions with the website.

/cypress/fixtures: Contains files saved during the tests, such as filtered job titles.

Installation
Requirements

Node.js: Ensure Node.js is installed (version 14 or greater). Check with node -v.

npm: Ensure npm is installed. Check with npm -v.

Cypress: Version 10.0 or greater.

Setup
Clone the repository:
Navigate to folder:

git clone https://github.com/Darko989/qa-automation-e2e.git

cd qa-automation-e2e
Install the dependencies:

npm install
Install Cypress (if not already installed):

npm install cypress --save-dev

Running Cypress Tests

Open Cypress Test Runner:
To open the Cypress Test Runner UI:

npx cypress open
This will open a graphical interface where you can run individual tests or all tests interactively.

Run Tests in Headless Mode:
To run all tests in headless mode:
npx cypress run

Run an Individual Test:

To run a specific test file, you can use the --spec option. For example:

npx cypress run --spec "cypress/e2e/careersPageTest.cy.js"

This will run the careersPageTest.cy.js file directly.

Usage
The tests can be found under /cypress/e2e.
Page objects are stored in /support/pageObjects.
Filtered job titles will be saved in the serbia_positions.txt file in /cypress/fixtures.
Features
Career Page Test: Automates filtering positions for Serbia and saving job titles.
Page Object Model (POM): Utilized for structuring the test code.
File Writing: Saves the job titles to a text file (serbia_positions.txt).

Test Workflow
Visit Careers Page: Navigates to the Holycode Careers page.
Filter for Serbia: Applies the filter to show only positions in Serbia.
Open All Positions: Clicks to expand all positions on the page.
Save Job Titles: Collects all job titles and saves them to a text file.

Project Structure
cypress/e2e:
Contains the test scripts.
cypress/fixtures:
Contains saved files such as serbia_positions.txt.
support/pageObjects:
Contains page objects for reusable actions and page interactions.
Example Test
Here’s an example of a Cypress test:

describe('Holycode Careers Page', () => {
    const careersPage = new CareersPage();

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

Saving Job Titles to a Text File
The test saves filtered job titles to a file named serbia_positions.txt in the cypress/fixtures directory. You can review the file after the test execution to see the saved job titles.

Repository
The full project can be found on [GitHub](https://github.com/Darko989/qa-automation-e2e).

