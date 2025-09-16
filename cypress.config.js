const { defineConfig } = require("cypress");
require("dotenv").config(); // carrega as variáveis do .env

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },

  // Variáveis de ambiente
  env: {
    marketplace: process.env.CYPRESS_marketplace || 'https://pt.webuy.com/',
    TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL,
    TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD
  },

  // Viewport padrão
  viewportWidth: 1440,
  viewportHeight: 900,
});
