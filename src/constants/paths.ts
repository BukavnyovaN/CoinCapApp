export interface IPATHS {
  MAIN: string;
  CURRENCY: string;
  ANY: string;
  NOT_FOUND: string;
}

export const PATHS: IPATHS = {
  MAIN: '/',
  CURRENCY: '/currency/:currencyId',
  ANY: '*',
  NOT_FOUND: '/not-found',
};
