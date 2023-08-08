import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../../buttons';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { close } from '../../../store/modalCartSlice';
import './ModalCart.scss';

const ModalCart: FC = () => {
  const isModalCartOpen = useAppSelector(({ modalCart }) => modalCart.value);
  const modalCartInfo = useAppSelector(({ cart }) => cart);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(close());
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
          modalCartInfo.map(({ id, name, symbol, amount }) => {
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
              </div>
            );
          })}
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
