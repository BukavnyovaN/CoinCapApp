import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { removeCurrencyInfoFromCart } from '../../../store/cartSlice';
import { convertToThousands } from '../../../utils/convertToThousands';
import { close } from '../../../store/modalCartSlice';
import { Icon } from '@iconify/react';
import './ModalCart.scss';

const ModalCart: FC = () => {
  const isModalCartOpen = useAppSelector(({ modalCart }) => modalCart.value);
  const currentCartList = useAppSelector(({ cart }) => cart.cartList);
  const currentCartTotal = useAppSelector(({ cart }) => cart.total);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(close());
  };

  const deleteCurrency = (value: string) => {
    dispatch(removeCurrencyInfoFromCart(value));
  };

  return (
    <>
      <div
        className={`modal_window-wrapper ${
          !isModalCartOpen ? 'display_none' : ''
        }`}
      >
        {!currentCartList.length && (
          <h2>Your portfolio is empty... Add more currency!</h2>
        )}
        {currentCartList &&
          currentCartList.map(({ id, name, symbol, priceUsd, amount }) => {
            return (
              <div key={id} className='flex_space-between'>
                <Link
                  to={`/${id}`}
                  className='header-currency__name-wrapper'
                  onClick={closeModal}
                >
                  <img
                    src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                    alt={symbol}
                    className='header-currency__icon'
                  />
                  <div className='table-currency__name'>
                    <div>{`${name}`}</div>
                    <div>{`${symbol}`}</div>
                  </div>
                </Link>
                <div>{`Amount: ${amount}`}</div>
                <div>{`Price: ${convertToThousands(
                  (+priceUsd * amount).toString()
                )}`}</div>
                <button
                  className='button-delete'
                  onClick={() => deleteCurrency(id)}
                >
                  <Icon icon='cil:trash' color='white' width='18' height='18' />
                </button>
              </div>
            );
          })}
        <div className='modal-window_total'>{`Total: ${convertToThousands(
          currentCartTotal.toString()
        )}`}</div>
        <Button
          className='button-delete'
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

export { ModalCart };
