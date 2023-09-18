import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useContext } from 'react';

import { Button } from '../../button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { removeCurrencyInfoFromCart } from '../../../store/cartSlice';
import { convertToThousands } from '../../../utils/convertToThousands';
import { groupCurrenciesByName } from '../../../utils/groupCurrenciesByName';
import { ModalCartContext } from '../../../context';

import './ModalCart.scss';

export function ModalCart({isModalCartOpened}:any) {
  const { closeModalCart } = useContext(ModalCartContext);
  const isModalCartOpen = isModalCartOpened || false;
  const currentCartList = useAppSelector(({ cart }) => cart.cartList);
  const currentCartTotal = useAppSelector(({ cart }) => cart.total);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    closeModalCart();
  };

  const deleteCurrency = (value: string) => {
    dispatch(removeCurrencyInfoFromCart(value));
  };

  const groupedCurrenciesList = groupCurrenciesByName(currentCartList);

  return (
    <>
      <div
        className={`modal-cart ${
          !isModalCartOpen ? 'display_none' : ''
        }`}
      >
        {!currentCartList.length && (
          <h2>Your portfolio is empty... Add more currency!</h2>
        )}
        {groupedCurrenciesList &&
          groupedCurrenciesList.map(
            ({ id, name, symbol, priceUsd, amount, datetime }) => {
              return (
                <div key={datetime} className='modal-cart__currencies'>
                  <Link
                    to={`/CoinCapApp/currency/${id}`}
                    className='modal-cart__currencies-name'
                    onClick={closeModal}
                  >
                    <img
                      src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                      alt={symbol}
                      className='modal-cart__currencies-icon'
                    />
                    <div className='.modal-cart__currencies-info'>
                      <div>{`${name}`}</div>
                      <div>{`${symbol}`}</div>
                    </div>
                  </Link>
                  <div>{`Amount: ${amount}`}</div>
                  <div>{`Price: ${convertToThousands(
                    (+priceUsd).toString()
                  )}`}</div>
                  <button
                    className='button_delete'
                    onClick={() => deleteCurrency(id)}
                  >
                    <Icon
                      icon='cil:trash'
                      color='white'
                      width='18'
                      height='18'
                    />
                  </button>
                </div>
              );
            }
          )}
        <div className='modal-cart__total'>{`Total: ${convertToThousands(
          currentCartTotal.toString()
        )}`}</div>
        <Button
          className='button_delete'
          description={
            <Icon icon='ic:round-close' color='white' width='14' height='14' />
          }
          onClick={closeModal}
        />
      </div>
      <div
        className={`shadow ${!isModalCartOpen ? 'display_none' : ''}`}
        onClick={closeModal}
      />
    </>
  );
};
