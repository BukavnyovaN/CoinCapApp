export interface IPATHS {
  MAIN: string;
  CURRENCY: string;
  ANY: string;
  NOT_FOUND: string;
}

export const PATHS: IPATHS = {
  MAIN: '/CoinCapApp',
  CURRENCY: '/CoinCapApp/currency/:currencyId',
  ANY: '*',
  NOT_FOUND: '/CoinCapApp/not-found',
};
