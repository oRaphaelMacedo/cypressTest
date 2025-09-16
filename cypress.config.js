const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar plugins ou listeners, se necessário
    },
  },

  // Variáveis de ambiente
  env: {
    marketplace: 'https://pt.webuy.com/',
    TEST_USER_EMAIL: 'oraphaelmacedo@gmail.com',
    TEST_USER_PASSWORD: 'Cypress@2025'
  },

  // Viewport padrão
  viewportWidth: 1440,
  viewportHeight: 900,
});

