// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import 'cypress-xpath';


// Configs globais
Cypress.config('defaultCommandTimeout', 10000);

Cypress.on("uncaught:exception", (err, runnable, promise) => {
   return false;
});

Cypress.on("window:before:load", () => {
   Cypress.cy.state("jQuery", Cypress.$);
});