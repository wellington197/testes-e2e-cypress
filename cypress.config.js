const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    requestTimeout:10000,
    baseUrl:'https://notes-serverless-app.com'
    /**setupNodeEvents(on, config) {
      // implement node event listeners here
    },*/
  },
})
