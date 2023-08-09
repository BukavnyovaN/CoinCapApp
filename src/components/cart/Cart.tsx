import { FC, useEffect, useState } from 'react';
import { useGetAssetsQuery } from '../../API/coincap';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { handleTotalCart, updateCart } from '../../store/cartSlice';
import { convertToThousands } from '../../utils/convertToThousands';
import { getLocalStorage } from '../../utils/getLocalStorage';
import { convertToPercentage } from '../../utils/convertToPercentage';
import { open } from '../../store/modalCartSlice';
import { Icon } from '@iconify/react';
import './Cart.scss';

const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(open());
  };

  const currentCartList = useAppSelector(({ cart }) => cart.cartList);
  const currentCartTotal = useAppSelector(({ cart }) => cart.total);

  const [previousTotal, setPreviousTotal] = useState<number>(
    getLocalStorage('currentCartTotal')
  );
  const [difference, setDifference] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  const ids = currentCartList.map(({ id }) => id).join(',');
  const { data: assets } = useGetAssetsQuery({ ids });

  const calculatePercentage = (prev: number, next: number) => {
    console.log('prev', prev);
    console.log('next', next);

    if (!prev && !next) {
      setPercentage(0);
    } else if (!next) {
      setPercentage(0);
    } else {
      setPercentage((prev / next - 1) * 100);
    }
  };

  useEffect(() => {
    if (assets?.data) {
      dispatch(updateCart(assets?.data));
    }
  }, [assets?.data]);

  useEffect(() => {
    localStorage.setItem('currentCartList', JSON.stringify(currentCartList));

    const totalSum =
      currentCartList.reduce(
        (prev, next) => prev + +next.priceUsd * next.amount,
        0
      ) || 0;
    setDifference(totalSum - previousTotal);
    calculatePercentage(totalSum, previousTotal);
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
