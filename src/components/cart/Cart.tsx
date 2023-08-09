import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { handleTotalCart } from '../../store/cartSlice';
import { convertToThousands } from '../../utils/convertToThousands';
import { open } from '../../store/modalCartSlice';
import { Icon } from '@iconify/react';

const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(open());
  };

  const currentCartList = useAppSelector(({ cart }) => cart.cartList);
  const currentCartTotal = useAppSelector(({ cart }) => cart.total);

  useEffect(() => {
    localStorage.setItem('currentCartList', JSON.stringify(currentCartList));

    const totalSum =
      currentCartList.reduce(
        (prev, next) => prev + +next.priceUsd * next.amount,
        0
      ) || 0;
    dispatch(handleTotalCart(totalSum));
  }, [currentCartList]);

  useEffect(() => {
    localStorage.setItem('currentCartTotal', JSON.stringify(currentCartTotal));
  }, [currentCartTotal]);

  return (
    <div className='cart-wrapper' onClick={openModal}>
      <Icon
        className='header-currencies_cart'
        icon='grommet-icons:money'
        color='white'
        width='36'
        height='36'
      />
      <div>{convertToThousands(currentCartTotal.toString())}</div>
    </div>
  );
};

export { Cart };
