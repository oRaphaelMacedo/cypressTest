import locators from '../support/locators';

class HomePage {
  // Pesquisa produto
  searchProduct(product) {
    cy.get('.search-form input[type="text"]')
      .should('be.visible')
      .clear()
      .type(product + '{enter}');
  }

  // Aceita termos 
  acceptTerms() {
    cy.get(locators.HOME_PAGE.ACCEPT_TERMS).click({ force: true });
  }
}

export default new HomePage();
