const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "result/my-test-output-[hash].xml"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
});
