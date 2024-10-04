# QA Automation E2E Project

## Overview
This project is an end-to-end testing framework using Cypress. The goal is to automate the testing of the Careers page, filter job positions for Serbia, and save the job titles in a text file.

## Project Structure
- **/cypress**: Contains the integration tests and fixtures for the project.
- **/support/pageObjects**: Page Object Model files that define interactions with the website.
- **/cypress/fixtures**: Contains files saved during the tests, such as filtered job titles.

## Installation

### Requirements
- **Node.js**: Ensure Node.js is installed (version 14 or greater). Check with: `node -v`
- **npm**: Ensure npm is installed. Check with: `npm -v`
- **Cypress**: Version 10.0 or greater.

### Setup
1. Clone the repository: `git clone https://github.com/Darko989/qa-automation-e2e.git`
2. Navigate to the folder: `cd qa-automation-e2e`
3. Install the dependencies: `npm install`
4. Install Cypress (if not already installed): `npm install cypress --save-dev`

## Running Cypress Tests

### Open Cypress Test Runner
To open the Cypress Test Runner UI: `npx cypress open`. This will open a graphical interface where you can run individual tests or all tests interactively.

### Run Tests in Headless Mode
To run all tests in headless mode: `npx cypress run`.

### Run an Individual Test
To run a specific test file, you can use the `--spec` option. For example: `npx cypress run --spec "cypress/e2e/careersPageTest.cy.js"`.

## Usage
- The tests can be found under `/cypress/e2e`.
- Page objects are stored in `/support/pageObjects`.
- Filtered job titles will be saved in the `serbia_positions.txt` file in `/cypress/fixtures`.

## Features
- **Career Page Test**: Automates filtering positions for Serbia and saving job titles.
- **Page Object Model (POM)**: Utilized for structuring the test code.
- **File Writing**: Saves the job titles to a text file (`serbia_positions.txt`).

## Test Workflow
1. **Visit Careers Page**: Navigates to the Holycode Careers page.
2. **Filter for Serbia**: Applies the filter to show only positions in Serbia.
3. **Open All Positions**: Clicks to expand all positions on the page.
4. **Save Job Titles**: Collects all job titles and saves them to a text file.

## Docker Consideration
This project is not set up using Docker to keep things simple and focus on the main task. 
However, Cypress can easily be integrated with Docker, which would be ideal for Continuous Integration/Continuous Deployment (CI/CD) pipelines. 
If needed, a Docker setup can be provided for running the tests in isolated environments, ensuring consistency across machines.

## Repository
The full project can be found on [GitHub](https://github.com/Darko989/qa-automation-e2e).
