import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { convertToThousands } from '../../utils/convertToThousands';
import { open } from '../../store/modalCartSlice';
import { ICart, currenciesToDict } from '../../utils/groupCurrenciesByName';
import { trpc } from '../../utils/trpc';

import './Cart.scss';

export function Cart(){
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(open());
  };

  const localCartList: any = localStorage.getItem('newCurrentCartList') || null;

  const currentCartList = JSON.parse(localCartList) || [];
  const currentCartTotal: number =
    currentCartList.reduce(
      (prev: any, next: any) => prev + +next.priceUsd * next.amount,
      0
    ) || 0;

  const [difference, setDifference] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  const ids = currentCartList.map(({ id } : any) => id).join(',');
  const currencies = trpc.assets.useQuery({ids});

  useEffect(() => {
    if (currencies.data) {
      if (currentCartList.length) {
        const groupedBoughtCurrenciesDict = currenciesToDict(currentCartList);
        let actualTotalPrice = 0;
        currencies.data.forEach((actualCurrency : any) => {
          const boughtCurrency: ICart =
            groupedBoughtCurrenciesDict[actualCurrency.name];
          actualTotalPrice += +actualCurrency.priceUsd * boughtCurrency.amount;
        });

        setDifference(actualTotalPrice - currentCartTotal);
        setPercentage((actualTotalPrice / currentCartTotal - 1) * 100);
      }
    }
  }, [currencies.data]);

  useEffect(() => {
    localStorage.setItem('newCurrentCartList', JSON.stringify(currentCartList));
  }, [currentCartList]);

  useEffect(() => {
    localStorage.setItem('currentCartTotal', JSON.stringify(currentCartTotal));
  }, [currentCartTotal]);

  return (
    <div className='cart' onClick={openModal}>
      <div className='cart__logo'>
        <Icon
          className='cart__logo-currencies'
          icon='grommet-icons:money'
          color='white'
          width='36'
          height='36'
        />
        <div>{convertToThousands(currentCartTotal.toString())}</div>
      </div>
      <div className='cart__info'>
        <div className='cart__info-details'>
          <Icon
            icon='fa6-solid:chart-line'
            color='white'
            width='16'
            height='16'
          />
          {`${convertToThousands(difference.toString())}`}
        </div>
        <div className='cart__info-details'>
          <Icon icon='ic:sharp-percent' color='white' width='16' height='16' />
          {`${percentage.toFixed(2)}%`}
        </div>
      </div>
    </div>
  );
};

