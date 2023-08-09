import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../../buttons';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { removeCurrencyInfoFromCart } from '../../../store/cartSlice';
import { close } from '../../../store/modalCartSlice';
import { Icon } from '@iconify/react';
import './ModalCart.scss';

const ModalCart: FC = () => {
  const isModalCartOpen = useAppSelector(({ modalCart }) => modalCart.value);
  const modalCartInfo = useAppSelector(({ cart }) => cart);
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
        {!modalCartInfo.length && (
          <h2>Your portfolio is empty... Add more currency!</h2>
        )}
        {modalCartInfo &&
          modalCartInfo.map(({ id, name, symbol, priceUsd, amount }) => {
            return (
              <div key={id} className='flex_space-between'>
                <Link
                  to={`/${id}`}
                  className='header-currency__name-wrapper'
                  onClick={closeModal}
                >
                  <img
                    src={`https://assets.coincap.io/assets/icons/${symbol!.toLowerCase()}@2x.png`}
                    alt={symbol}
                    className='header-currency__icon'
                  />
                  <div className='table-currency__name'>
                    <div>{`${name}`}</div>
                    <div>{`${symbol}`}</div>
                  </div>
                </Link>
                <div>{`Amount: ${amount}`}</div>
                <div>{`Price: $${Math.floor(+priceUsd!) * amount!}`}</div>
                <button
                  className='button-delete'
                  onClick={() => deleteCurrency(id!)}
                >
                  <Icon icon='cil:trash' color='white' width='18' height='18' />
                </button>
              </div>
            );
          })}
        <h2>Total: </h2>
        <SecondaryButton description='x' onClick={closeModal} />
      </div>
      <div
        className={`shadow ${!isModalCartOpen ? 'display_none' : ''}`}
        onClick={closeModal}
      />
    </>
  );
};

export { ModalCart };
