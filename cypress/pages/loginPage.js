import locators from '../support/locators';

class LoginPage {
  // Login visível
  openLoginModal() {
    cy.get('.auth-modal-heading')
      .should('contain.text', 'Iniciar sessão');
  }

  enterEmail(email) {
    cy.get(locators.ACCOUNT.EMAIL_INPUT)
      .should('be.visible')
      .clear()
      .type(email, { force: true });
  }

  enterPassword(password) {
    cy.get(locators.ACCOUNT.PASSWORD_INPUT)
      .should('be.visible')
      .clear()
      .type(password, { force: true });
  }

  submitLogin() {
    cy.get(locators.ACCOUNT.LOGIN_BTN)
      .contains('Iniciar Sessão')
      .should('be.visible')
      .click({ force: true });
  }

  login(email, password) {
    this.openLoginModal();
    this.enterEmail(email);
    this.enterPassword(password);
    this.submitLogin();
  }
}

export default new LoginPage();
