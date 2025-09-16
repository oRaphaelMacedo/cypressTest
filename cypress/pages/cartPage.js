import locators from '../support/locators';
import loginPage from './loginPage';

class CartPage {

  validateCartPage() {
    cy.contains('O seu carrinho').should('be.visible');
  }

  // continua checkout + login
  proceedToCheckout() {
    cy.get(locators.CART_PAGE.PROCEED_TO_CHECKOUT)
      .should('be.visible')
      .click({ force: true });

    // verifica login (variáveis in cypress.config)
    cy.get('body').then($body => {
      if ($body.find('.auth-modal-heading:contains("Iniciar sessão")').length > 0) {
        loginPage.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
        cy.contains('Resumo da Ordem').should('be.visible');
        cy.get(locators.CART_PAGE.PROCEED_TO_CHECKOUT)
          .should('be.visible')
          .click({ force: true });
      }
    });
  }
}

export default new CartPage();
