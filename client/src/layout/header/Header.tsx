import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { trpc } from '../../utils/trpc';

import { PATHS } from '../../constants/paths';
import { ModalCart, Cart } from '../../components';
import { convertToThousands } from '../../utils/convertToThousands';

import './Header.scss';

export function Header() {
  const { MAIN } = PATHS;
  const headerCurrencies = trpc.assets.useQuery({ limit: 3 });

  return (
    <>
      <header className='header wrapper'>
        <div className='header-currencies'>
          {headerCurrencies.isLoading && <div>Loading...</div>}
          {!headerCurrencies.isLoading &&
            headerCurrencies.data &&
            headerCurrencies.data.map((currency: any) => {
              return (
                <Link
                  to={`/CoinCapApp/currency/${currency.id}`}
                  key={currency.id}
                  className='header-currency__wrapper'
                >
                  <img
                    className='header-currency__icon'
                    src={`https://assets.coincap.io/assets/icons/${currency.symbol.toLowerCase()}@2x.png`}
                    alt={currency.currencysymbol}
                  />
                  <div className='header-currency__name'>
                    <div>{`${currency.name}`}</div>
                    <div>{`${currency.symbol}`}</div>
                  </div>
                  <div>{convertToThousands(currency.priceUsd)}</div>
                </Link>
              );
            })}
        </div>
        <Link to={MAIN} className='logo-wrapper'>
          <Icon
            icon='game-icons:abstract-006'
            color='#ffffff'
            width='24'
            height='24'
          />
          <p className='logo-name'>COIN CAP APP</p>
        </Link>
        <Cart />
      </header>
      <ModalCart />
    </>
  );
};