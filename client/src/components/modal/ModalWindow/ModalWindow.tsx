import { useState } from 'react';
import { Icon } from '@iconify/react';

import { Button } from '../../button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { close } from '../../../store/modalWindowSlice';

import './ModalWindow.scss';
import { queryClient } from '../../../App';
import { addCurrencyToCart } from '../../../utils/trpc';

export function ModalWindow(){
  const isModalAddOpen = useAppSelector(({ modal }) => modal.value);
  const { id, name, symbol, priceUsd } : any = (queryClient.getQueryData(['currentCurrency']) || {})


  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<number>(1);

  const closeModal = () => {
    dispatch(close());
  };

  const handleInputNumber = (event: any) => {
    const target = event.target as HTMLInputElement;
    const value = +target.value as number;
    if (value > 0 && value < 1000) {
      setAmount(value);
    }
  };

  const handleSubmit = () => {
    const datetime = new Date().getTime();
    const currentCurrency = { 'id' : id, "name" : name, "symbol" : symbol, "priceUsd" : priceUsd, "amount" : amount, "datetime" : datetime }
    addCurrencyToCart(currentCurrency)
    closeModal();
  };

  return (
    <>
      <div
        className={`modal-window ${
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
          className='modal-window__input'
          value={amount}
          onChange={handleInputNumber}
        />
        <div className='modal-window__buttons'>
          <Button
            className='button_primary'
            description='Submit'
            onClick={handleSubmit}
          />
          <Button
            className='button_delete'
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
