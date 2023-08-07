import React, { FC } from 'react';
import './PrimaryButton.scss';

interface IPrimaryButton {
  description: string;
  onClick: () => void;
}

const PrimaryButton: FC<IPrimaryButton> = ({ description, onClick }) => {
  return (
    <button className='button-primary' onClick={onClick}>
      {description}
    </button>
  );
};

export { PrimaryButton };
