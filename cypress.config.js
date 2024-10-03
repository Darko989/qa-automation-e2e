const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.holycode.com/",
    viewportWidth: 1920, 
    setupNodeEvents(on, config) {
      
    },
  },
});
