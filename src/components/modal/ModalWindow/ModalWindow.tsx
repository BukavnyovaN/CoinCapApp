import { ChangeEvent, FC, useState } from 'react';
import { Button } from '../../button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { close } from '../../../store/modalWindowSlice';
import { addCurrencyAmount } from '../../../store/currencyInfoSlice';
import { addCurrencyInfoToCart } from '../../../store/cartSlice';
import { Icon } from '@iconify/react';
import './ModalWindow.scss';

const ModalWindow: FC = () => {
  const isModalAddOpen = useAppSelector(({ modal }) => modal.value);
  const { id, name, symbol, priceUsd } = useAppSelector(
    ({ currencyInfo }) => currencyInfo
  );
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<number>(1);

  const closeModal = () => {
    dispatch(close());
  };

  const handleInputNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = +target.value as number;
    setAmount(value);
    dispatch(addCurrencyAmount(amount));
  };

  const handleSubmit = () => {
    dispatch(addCurrencyInfoToCart({ id, name, symbol, priceUsd, amount }));
    closeModal();
  };

  return (
    <>
      <div
        className={`modal_window-wrapper ${
          !isModalAddOpen ? 'display_none' : ''
        }`}
      >
        <input
          type='number'
          placeholder='0'
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

export { ModalWindow };
