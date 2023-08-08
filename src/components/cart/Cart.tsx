import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { open } from '../../store/modalCartSlice';
import { Icon } from '@iconify/react';

const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch(open());
  };

  const modalCartInfo = useAppSelector(({ cart }) => cart);

  useEffect(() => {
    localStorage.setItem('modalCartInfo', JSON.stringify(modalCartInfo));
  }, [modalCartInfo]);

  return (
    <div className='portfolio-wrapper' onClick={openModal}>
      <Icon
        className='header-currencies_cart'
        icon='grommet-icons:money'
        color='white'
        width='36'
        height='36'
      />
    </div>
  );
};

export { Cart };
