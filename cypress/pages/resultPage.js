import locators from '../support/locators';

class ResultPage {
  validateCartDrawer() {
    cy.get('.cx-drawer-right').should('be.visible');
    cy.contains('.drawer-heading', 'Adicionado ao seu carrinho').should('be.visible');
  }

  clickViewBasket() {
    cy.contains('button', 'Ver cesto')
      .should('be.visible')
      .click({ force: true });
  }

  selectProduct_ByDescription(description) {
    cy.contains(description).click();
  }

  clickOnFilter() {
    cy.xpath(locators.RESULTS_PAGE.FILTER).click();
  }
}

export default new ResultPage();
