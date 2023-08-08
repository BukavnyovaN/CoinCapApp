import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { open } from '../../store/modalCartSlice';
import { PATHS } from '../../constants/paths';
import { ModalCart } from '../../components';
import { FC } from 'react';
import { useGetAssetsQuery } from '../../API/coincap';
import { Icon } from '@iconify/react';
import './Header.scss';

const Header: FC = () => {
  const { main } = PATHS;
  const dispatch = useAppDispatch();
  const { data: assets, isLoading } = useGetAssetsQuery({ limit: 3 });

  const openModalCart = () => {
    dispatch(open());
  };

  return (
    <>
      <header className='header wrapper'>
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
        <Link to={main} className='logo-wrapper'>
          <Icon
            icon='game-icons:abstract-006'
            color='#ffffff'
            width='24'
            height='24'
          />
          <p className='logo-name'>COIN CAP APP</p>
        </Link>
        <div className='cart-wrapper' onClick={openModalCart}>
          <Icon
            className='header-currencies_cart'
            icon='grommet-icons:money'
            color='white'
            width='36'
            height='36'
          />
        </div>
      </header>
      <ModalCart />
    </>
  );
};

export { Header };
