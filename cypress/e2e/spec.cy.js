describe('CoinCapApp E2E tests', () => {
  it('Main page e2e tests', () => {
    cy.visit('https://bukavnyovan.github.io/CoinCapApp/');

    //check if the button Add exists
    cy.get('div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)')
      .should('have.text', 'Add');

    //check the main function of the button - open modal window for adding currency amount to the cart
    cy.get('div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)')
      .click()

    //check if the modal window exists
    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > div:nth-child(3)');

    //check input
    cy.get('input')
      .type('234')

    // check submit button
    cy.get('button')
      .contains('Submit')
      .click() 

    // check closing modal window by button 

    cy.get('div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)')
      .click()
    cy.get('.modal-window_button-wrapper > .button-delete')
      .click()

    // check closing modal window by clicking outside of the modal window
    cy.get('div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)')
      .click()
    cy.get('main')
      .click()

    // check pagination
    cy.get('button')
      .contains('>>')
      .click() 
    cy.get('button')
      .contains('<<')
      .click() 

    // checking for clicking on a table element and opening a page with detailed information on the currency
    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
      .click()
  })

  it('Currency page e2e tests', () => {
    cy.visit('https://bukavnyovan.github.io/CoinCapApp/');

    // checking for clicking on a table element and opening a page with detailed information on the currency
    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
      .click()

    //check if there is a chart on currency details page
    cy.get('canvas')

    //check if there is a controll for adding currency on currency details page
    cy.get('button')
      .contains('+')
      .click()
    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)')
      .then(($coin_price) => {
        const coin_price_value = $coin_price.text().split(` `)[0]

        //check if the modal window exists
        cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7)');

        //check input
        cy.get('input')

        // check submit button
        cy.get('button')
          .contains('Submit')
          .click() 

        // check if the coin price in cart is equal to the coin price in info
        
        cy.get('div[class="cart-wrapper_logo"] > div').should(($cart_value) => {
          expect($cart_value.text()).to.be.equal(coin_price_value)
        })
      })
  })

  it('Header e2e tests', () => {
    cy.visit('https://bukavnyovan.github.io/CoinCapApp/');

    //check if the header contains 3 crypocurrencies 
    cy.get('.header-currency__wrapper')
      .should('have.length', 3);

  })
})