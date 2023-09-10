export const buyBitcoin = (cartValueAlias) => {
    cy.visit('/');

    // checking for clicking on a table element and opening a page with detailed information on the currency
    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
      .click()

    //check if there is a chart on currency details page
    cy.get('canvas')

    //check if there is a controll for adding currency on currency details page
    cy.get('button')
      .contains('+')
      .click()

    //check if the modal window exists
    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7)');

    //check input
    cy.get('input')

    // check submit button
    cy.get('button')
        .contains('Submit')
        .click()

    cy.get('div[class="cart-wrapper_logo"] > div').then(($cart_value) => {
        const cartValue = $cart_value.text().split(` `)[0];
        cy.wrap(cartValue).as(cartValueAlias.toString());
    })

    // check if the coin price in cart is equal to the coin price in info
}