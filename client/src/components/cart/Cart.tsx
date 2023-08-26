import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ICart, handleTotalCart, updateCart } from '../../store/cartSlice';
import { convertToThousands } from '../../utils/convertToThousands';
import { open } from '../../store/modalCartSlice';
import { Icon } from '@iconify/react';
import './Cart.scss';
import { currenciesToDict } from '../../utils/groupCurrenciesByName';
import { trpc } from '../../utils/trpc';

const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(open());
  };

  const currentCartList = useAppSelector(({ cart }) => cart.cartList);
  const currentCartTotal = useAppSelector(({ cart }) => cart.total);
  const totalSum: number =
    currentCartList.reduce(
      (prev, next) => prev + +next.priceUsd * next.amount,
      0
    ) || 0;

  const [difference, setDifference] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  const ids = currentCartList.map(({ id }) => id).join(',');
  const currencies = trpc.assets.useQuery({ids});

  useEffect(() => {
    if (currencies.data) {
      dispatch(updateCart(currencies.data));

      if (currentCartList.length) {
        const groupedBoughtCurrenciesDict = currenciesToDict(currentCartList);
        let actualTotalPrice = 0;
        currencies.data.forEach((actualCurrency : any) => {
          const boughtCurrency: ICart =
            groupedBoughtCurrenciesDict[actualCurrency.name];
          actualTotalPrice += +actualCurrency.priceUsd * boughtCurrency.amount;
        });

        setDifference(actualTotalPrice - totalSum);
        setPercentage((actualTotalPrice / totalSum - 1) * 100);
      }
    }
  }, [currencies.data]);

  useEffect(() => {
    localStorage.setItem('currentCartList', JSON.stringify(currentCartList));
    dispatch(handleTotalCart(totalSum));
  }, [currentCartList]);

  useEffect(() => {
    localStorage.setItem('currentCartTotal', JSON.stringify(currentCartTotal));
  }, [currentCartTotal]);

  return (
    <div className='cart-wrapper' onClick={openModal}>
      <div className='cart-wrapper_logo'>
        <Icon
          className='header-currencies_cart'
          icon='grommet-icons:money'
          color='white'
          width='36'
          height='36'
        />
        <div>{convertToThousands(currentCartTotal.toString())}</div>
      </div>
      <div className='cart-wrapper_info'>
        <div className='cart-wrapper_info-details'>
          <Icon
            icon='fa6-solid:chart-line'
            color='white'
            width='16'
            height='16'
          />
          {`${convertToThousands(difference.toString())}`}
        </div>
        <div className='cart-wrapper_info-details'>
          <Icon icon='ic:sharp-percent' color='white' width='16' height='16' />
          {`${percentage.toFixed(2)}%`}
        </div>
      </div>
    </div>
  );
};

export { Cart };
