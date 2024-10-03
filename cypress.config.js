const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.holycode.com/", 
    setupNodeEvents(on, config) {
      
    },
  },
});
