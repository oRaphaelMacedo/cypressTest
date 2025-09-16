const locators = {
  HOME_PAGE: {
    SEARCH_BAR: ".search-form",
    SUBMIT_BUTTON: "#nav-search-submit-button",
    ACCEPT_TERMS: "sp-cc-accept",
  },

  CART_PAGE: {
    // button "Continuar para o checkout" 
    PROCEED_TO_CHECKOUT: '[data-at="btnProceedToBuy"]',
   },

  ACCOUNT: {
    // iniciar sessão
    EMAIL_INPUT: "#email",
    PASSWORD_INPUT: "#password",
    LOGIN_BTN: 'button[type="submit"]', 
  },
};

export default locators;
