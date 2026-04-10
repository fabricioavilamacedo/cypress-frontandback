# Challenge
## Description
Technical challenge using Cypress.
## Instructions
1. Download and install Node in its latest version: [https://nodejs.org/];
2. Clone the repository: `` (SSH) or `` (HTTPS);
3. In the root directory of the project, run the commands `npm install` and `npx cypress open` to open the framework;
4. After Cypress has started, select and run the test '' or '' and it will execute all the respective test cases;
5. After any push within the repository, the pipeline routines will start automatically according to the settings in the 'cy.yml' file.

## Notes
- The tests without the use of cucumber (login.api.cy.js and login.web.cy.js) have been maintained, to perform the executions without the use of the cucumber plugin, you must comment out the configuration of "specPattern: "cypress/e2e/step_definitions/*.feature" in the config.js file, and the script "cypress-cucumber-preprocessor" in the 'package.json file.

## Directory structure
```
/
├─ .github/workflows/   # CI/CD Pipeline configurations (GitHub Actions)
├─ cypress/
│  ├─ e2e/
│  │  ├─ features/       # BDD scenario specifications (Gherkin)
│  │  ├─ pages/          # Page Object Model (Encapsulation of elements and actions)
│  │  └─ step_definitions/# Technical implementation of Gherkin steps
│  ├─ fixtures/          # Static test data (JSON)
│  └─ support/           # Custom commands and element mapping (Elements.js)
├─ cypress.config.js     # Global Cypress and Cucumber configurations
├─ cypress.env.json      # Environment variables and sensitive data (Git ignored)
├─ generate-report.js    # Node script for HTML report generation
├─ package.json          # Project manifest and automation scripts
└─ README.md             # Project documentation
```
