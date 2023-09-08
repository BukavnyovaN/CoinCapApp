import { useEffect } from 'react';

import { useAppSelector } from './hooks';

const useOverflow = () => {
  const isModalAddOpen = useAppSelector(({ modal }) => modal.value);
  const isModalCartOpen = useAppSelector(({ modalCart }) => modalCart.value);

  useEffect(() => {
    const BODY = document.querySelector('body') as HTMLBodyElement;

    if (isModalAddOpen || isModalCartOpen) {
      BODY.classList.add('body_overflow');
    } else {
      BODY.classList.remove('body_overflow');
    }
  }, [isModalAddOpen, isModalCartOpen]);
};

export { useOverflow };
