import { Link } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import { ModalCart, Cart } from '../../components';
import { FC } from 'react';
import { useGetAssetsQuery } from '../../API/coincap';
import { convertToThousands } from '../../utils/convertToThousands';
import { Icon } from '@iconify/react';
import './Header.scss';

const Header: FC = () => {
  const { MAIN } = PATHS;
  const { data: assets, isLoading } = useGetAssetsQuery({ limit: 3 });

  return (
    <>
      <header className='header wrapper'>
        <div className='header-currencies'>
          {isLoading && <div>Loading...</div>}
          {!isLoading &&
            assets &&
            assets.data.map(({ id, name, symbol, priceUsd }) => {
              return (
                <Link
                  to={`/currency/${id}`}
                  key={id}
                  className='header-currency__wrapper'
                >
                  <img
                    className='header-currency__icon'
                    src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                    alt={symbol}
                  />
                  <div className='header-currency__name'>
                    <div>{`${name}`}</div>
                    <div>{`${symbol}`}</div>
                  </div>
                  <div>{convertToThousands(priceUsd)}</div>
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

export { Header };
