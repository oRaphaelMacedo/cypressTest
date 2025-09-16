import locators from '../support/locators';

class CheckoutPage {
// Seleciona entrega

  proceedDeliveryStep() { 
    
    cy.get('input[type="radio"][id*="delivery-type"]')
      .first()
      .check({ force: true });
    
    cy.get('[data-at="btnContinueDeliveryNCollection"]')
      .should('be.visible')
      .click({ force: true });
  }

  // Seleciona endereço 1
  proceedAddressStep() {
    cy.get('#buy-checkout-address-div-address-list .xradiobutton-option-input').then($inputs => {
      if ($inputs.length === 0) {
        throw new Error('Não há endereço de entrega cadastrado!');
      } else {
        cy.wrap($inputs[0]).check({ force: true });
        cy.get('#add-div .checkout-continue-button button')
          .should('be.visible')
          .click({ force: true });
      }
    });
  }

  verifyPaymentMethodStep() {
        cy.contains('h4', 'Método de pagamento').should('be.visible');
    }

}

export default new CheckoutPage();
