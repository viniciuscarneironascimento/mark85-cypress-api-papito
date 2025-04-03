const { defineConfig } = require("cypress");

const { connect } = require('./cypress/support/mongo')

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  projectId: "ydmqas",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions:{
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json:false,
      timestamp: "mmddyyy_HHMMss"}
    /*async setupNodeEvents(on, config) {

      const db = await connect()

      on('task', {
        async deleteUser(email) {
          const users = db.collection('users')
          await users.deleteMany({ email: email })
          return null
        }
      })

    },*/
    //baseUrl: 'http://localhost:3000'
  },
});
