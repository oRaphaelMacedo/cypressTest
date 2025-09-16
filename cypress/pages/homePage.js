import locators from '../support/locators';

class HomePage {

  // Aceita termos 
  acceptTerms() {
    cy.get(locators.HOME_PAGE.ACCEPT_TERMS).click({ force: true });
  }

  // Pesquisa produto
  searchProduct(product) {
    cy.get('.search-form input[type="text"]')
      .should('be.visible')
      .clear()
      .type(product + '{enter}');
  }

}

export default new HomePage();
