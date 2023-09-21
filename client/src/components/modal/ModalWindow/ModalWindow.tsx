import { useContext, useState } from 'react';
import { Icon } from '@iconify/react';

import { Button } from '../../button/Button';
import { ModalWindowContext } from '../../../context';
import { CartContext } from '../../../context/cartContext/CartContext';
import { CurrencyContext } from '../../../context/currencyContext/CurrencyContext';

import './ModalWindow.scss';
import { ICart } from '../../../context/cartContext/CartReducer';

export function ModalWindow({isModalWindowOpen}: any){
  const { closeModalWindow } = useContext(ModalWindowContext);
  const { addToCart } = useContext(CartContext)
  const isModalAddOpen = isModalWindowOpen || false;
  const { id, name, symbol, priceUsd, addCurrencyAmount } = useContext(CurrencyContext)

  const [amount, setAmount] = useState<number>(1);

  const closeModal = () => {
    closeModalWindow();
  };

  const handleInputNumber = (event: any) => {
    const target = event.target as HTMLInputElement;
    const value = +target.value as number;
    if (value > 0 && value < 1000) {
      addCurrencyAmount(amount);
      setAmount(value);
    }
  };

  const handleSubmit = () => {
    const datetime = new Date().getTime();
    const item = { id, name, symbol, priceUsd, amount, datetime };
    addToCart(item);
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
