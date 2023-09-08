import { useState } from 'react';
import { Icon } from '@iconify/react';

import { Button } from '../../button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { close } from '../../../store/modalWindowSlice';
import { addCurrencyAmount } from '../../../store/currencyInfoSlice';
import { addCurrencyInfoToCart } from '../../../store/cartSlice';

import './ModalWindow.scss';

export function ModalWindow(){
  const isModalAddOpen = useAppSelector(({ modal }) => modal.value);
  const { id, name, symbol, priceUsd } = useAppSelector(
    ({ currencyInfo }) => currencyInfo
  );
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<number>(1);

  const closeModal = () => {
    dispatch(close());
  };

  const handleInputNumber = (event: any) => {
    const target = event.target as HTMLInputElement;
    const value = +target.value as number;
    if (value > 0 && value < 1000) {
      dispatch(addCurrencyAmount(amount));
      setAmount(value);
    }
  };

  const handleSubmit = () => {
    const datetime = new Date().getTime();
    dispatch(
      addCurrencyInfoToCart({ id, name, symbol, priceUsd, amount, datetime })
    );
    closeModal();
  };

  return (
    <>
      <div
        className={`modal_window-wrapper ${
          !isModalAddOpen ? 'display_none' : ''
        }`}
      >
        Enter the amount of currency in the range from 1 to 999
        <input
          type='number'
          min='0'
          max='999'
          name=''
          id=''
          className='input-number'
          value={amount}
          onChange={handleInputNumber}
        />
        <div className='modal-window_button-wrapper'>
          <Button
            className='button-primary'
            description='Submit'
            onClick={handleSubmit}
          />
          <Button
            className='button-delete'
            description={
              <Icon
                icon='ic:round-close'
                color='white'
                width='14'
                height='14'
              />
            }
            onClick={closeModal}
          />
        </div>
      </div>
      <div
        className={`shadow ${!isModalAddOpen ? 'display_none' : ''}`}
        onClick={closeModal}
      />
    </>
  );
};
