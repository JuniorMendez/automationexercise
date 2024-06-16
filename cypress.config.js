
const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,

  defaultCommandTimeout: 6000,

  env: {
    url: "https://automationexercise.com",
    user_name: "Sr Perez",
    password: "jmM@e",
    urlLogin: "https://automationexercise.com/login"
  

  },

  e2e: {
    setupNodeEvents(on,config)
    {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/automationexercise/*.js',
    testIsolation: false,

  },
});
