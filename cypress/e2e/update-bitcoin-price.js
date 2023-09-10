export const updateBitcoinPrice = (bitcoinPriceAlias) => {
    cy.visit('/');

    // checking for clicking on a table element and opening a page with detailed information on the currency
    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
        .click()

    cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)')
        .then(($coinPriceElement) => {
            const bitcoinPriceValue = $coinPriceElement.text().split(` `)[0];
            cy.wrap(bitcoinPriceValue).as(bitcoinPriceAlias.toString());
        });
}