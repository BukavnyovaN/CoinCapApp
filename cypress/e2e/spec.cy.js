import {buyBitcoin} from "./buy-bitcoin";
import {convertDollarToNumber} from "./utils/convert-dollar-to-number";
import {updateBitcoinPrice} from "./update-bitcoin-price";

describe('CoinCapApp E2E tests', () => {
    it('Main page e2e tests', () => {
      cy.visit('/');

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
      cy.wait(1000)
      cy.get('main')
        .click(40, 40)

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
        buyBitcoin('cartValue');
        updateBitcoinPrice('bitcoinPrice')

        cy.get(`@cartValue`).then((cartValue) => {
            cy.get(`@bitcoinPrice`).then((bitcoinPrice) => {
                expect(cartValue).to.be.equal(bitcoinPrice)
            })
        })
    })

    it('Header e2e tests', () => {
      cy.visit('/');

      //check if the header contains 3 crypocurrencies
      cy.get('.header-currency__wrapper')
        .should('have.length', 3);

    })

    it('Calculation features tests', () => {
        //Buy coin and compare difference tests
        const CART_VALUE = 'cartValue';
        const BITCOIN_PRICE = 'bitcoinPrice';
        buyBitcoin(CART_VALUE);
        cy.wait(31000);
        updateBitcoinPrice(BITCOIN_PRICE)
        cy.get('div[class=\'cart-wrapper_info\'] div:nth-child(1)').then(($cart_difference) => {
            cy.get(`@${BITCOIN_PRICE}`).then((bitcoinPrice) => {
                cy.get(`@${CART_VALUE}`).then((savedCartValue) => {
                    const actualBitcoinPrice = convertDollarToNumber(bitcoinPrice);
                    const oldCartValue = convertDollarToNumber(savedCartValue);
                    const actualCartDifference = convertDollarToNumber($cart_difference.text());
                    const calculatedCartDifference = +((actualBitcoinPrice - oldCartValue).toFixed(2));
                    expect(actualCartDifference).equal(calculatedCartDifference)
                })
            })
        })
    })

    it('Cart e2e tests', () => {
      cy.visit('/');
      cy.get('div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)')
        .should('have.text', 'Add');
      cy.get('div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)')
        .click()
      cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > div:nth-child(3)');
      cy.get('input')
        .type('234')
      cy.get('button')
        .contains('Submit')
        .click()
      cy.get('.cart-wrapper')
        .click()
      cy.get('.flex_space-between > .button-delete')
        .click()

        cy.get(`.modal-window_total`).then(($total) => {
          let totalSum = convertDollarToNumber($total.text())
          expect(totalSum).equal(0)
      })

      cy.get(".modal_window-wrapper > .button-delete")
        .click()

    })

    
})