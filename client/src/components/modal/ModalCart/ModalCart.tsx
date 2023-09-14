import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { Button } from '../../button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { convertToThousands } from '../../../utils/convertToThousands';
import { close } from '../../../store/modalCartSlice';
import { ICart, groupCurrenciesByName } from '../../../utils/groupCurrenciesByName';

import './ModalCart.scss';
import { queryClient } from '../../../App';
import { useEffect, useState } from 'react';
import { refreshCartList, updadeTotal } from '../../../utils/trpc';

export function ModalCart() {
  const isModalCartOpen = useAppSelector(({ modalCart }) => modalCart.value);
  const [data, setData] = useState(0)
  const currentCartList = queryClient.getQueryData<ICart[]>([`currentCartList`]) || [];
  const currentCartTotal = localStorage.getItem('currentCartTotal') || 0;


  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(close());
  };

  let groupedCurrenciesList = groupCurrenciesByName(currentCartList);

  const deleteCurrency = (value: any) => {
    let cartList = groupedCurrenciesList.filter(({ id }: any) => id !== value);
    localStorage.setItem('newCurrentCartList', JSON.stringify(cartList))
    refreshCartList();
    updadeTotal(cartList)
    setData(data+1)
   };
   

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
                <div key={id} className='modal-cart__currencies'>
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

