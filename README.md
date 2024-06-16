# automationexercise
Web test automation for an clothing store.

# How to Start

# 1. Prerequisites:

    Node.js (v20 or higher)

    npm (v6 or higher)

# 2. Installation:

   Clone the repository:

   `git clone <repository-url>`

   `cd automation`

   Install the dependencies:

    `npm install`

# 3. Configuration:

    Cypress Configuration (cypress.config.js):




<img width="382" alt="image" src="https://github.com/JuniorMendez/automationexercise/assets/30270548/7334f3da-2782-444e-a36c-ce8d52b3a00a">



Add Mochawesome Reporter in cypress/support/e2e.js:

 `import 'cypress-mochawesome-reporter/register'; `




# Running Tests:

  To execute the tests, run the following command:

  `Run npm test` to execute the tests in test runner | `Run npx cypress run` to execute the tests in CLI.

Generating Reports:

  The test reports will be generated automatically in the cypress\reports\html\ directory using the Mochawesome reporter.


# Structure:



<img width="317" alt="image" src="https://github.com/JuniorMendez/automationexercise/assets/30270548/e382cf9f-7273-4db7-9cc7-b56f0c3e835d">



# Additional Information:

1. To see the report and video generated with mochawesome go to the cypress\reports\html\ directory and open the index.html file. Also the video generated from the execution is in cypress\reports\html\videos
2. Ensure all environment variables in cypress.config.js are correctly set for your test environment.
3. Custom commands and page objects are defined in the cypress/support directory for better maintainability and reusability of code.


