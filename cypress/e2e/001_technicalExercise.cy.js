/* eslint-disable max-len */
/* eslint-disable new-cap */
/// <reference types="cypress" />

import cartPage from '../pages/cartPage';
import checkoutPage from '../pages/checkoutPage';
import homePage from '../pages/homePage';
import resultPage from '../pages/resultPage';

describe('Search products and checkout', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('marketplace'));
  });

  it('Search product, add to cart, login, select delivery and proceed', function() {
    const product = 'iPhone 16 Pro Max 256GB';
    const description = 'Apple iPhone 16 Pro Max 256GB Titânio Preto, Livre A';
    
    // Home
    homePage.searchProduct(product);
    cy.contains(description).should('be.visible').click();
    cy.contains('button', 'Adicionar ao carrinho').click();

    // Cart
    resultPage.validateCartDrawer();
    resultPage.clickViewBasket();

    // Checkout + Login
    cartPage.proceedToCheckout();
    checkoutPage.proceedDeliveryStep();
    checkoutPage.proceedAddressStep();
    checkoutPage.verifyPaymentMethodStep();
  });
});
