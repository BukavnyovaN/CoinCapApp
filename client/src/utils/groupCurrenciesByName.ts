import { ICart } from '../store/cartSlice';

export const currenciesToDict = (
  currentCartList: ICart[]
): { [key: string]: ICart } => {
  const groupedCurrencies: { [key: string]: ICart } = {};
  currentCartList.forEach((currencyCart: ICart) => {
    if (!groupedCurrencies[currencyCart.name]) {
      groupedCurrencies[currencyCart.name] = {
        id: currencyCart.id,
        name: currencyCart.name,
        symbol: currencyCart.symbol,
        priceUsd: currencyCart.priceUsd,
        amount: currencyCart.amount,
        datetime: currencyCart.datetime,
      };
    } else {
      const groupedCurrency = groupedCurrencies[currencyCart.name];
      groupedCurrency.priceUsd = (
        +groupedCurrency.priceUsd +
        +currencyCart.priceUsd * currencyCart.amount
      ).toString();
      groupedCurrency.amount += currencyCart.amount;
    }
  });
  return groupedCurrencies;
};

export const groupCurrenciesByName = (currentCartList: ICart[]): ICart[] => {
  const currenciesDict = currenciesToDict(currentCartList);
  return Object.values(currenciesDict);
};
