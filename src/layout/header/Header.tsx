import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import { FC } from 'react';
import { useGetAssetsQuery } from '../../API/coincap';
import './Header.scss';
import { Icon } from '@iconify/react';

const Header: FC = () => {
  const { main } = PATHS;
  const { data: assets, isLoading } = useGetAssetsQuery({ limit: 3 });

  return (
    <header className='header'>
      <div className='header-currencies'>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          assets &&
          assets.data.map(({ id, name, symbol, priceUsd }) => {
            return (
              <div key={id} className='header-currency__wrapper'>
                <img
                  className='header-currency__icon'
                  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                  alt={symbol}
                />
                <Link to={`/${id}`} className='header-currency__name'>
                  <div>{`${name}`}</div>
                  <div>{`${symbol}`}</div>
                </Link>
                <div>{`${new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(+priceUsd)}`}</div>
              </div>
            );
          })}
      </div>
      <div className='wrapper'>
        <Link to={main} className='logo-wrapper'>
          <Icon
            icon='game-icons:abstract-006'
            color='#ffffff'
            width='24'
            height='24'
          />
          <p className='logo-name'>COIN CAP APP</p>
        </Link>
        <Icon
          className='header-currencies_cart'
          icon='grommet-icons:money'
          color='white'
          width='36'
          height='36'
        />
      </div>
    </header>
  );
};

export { Header };
