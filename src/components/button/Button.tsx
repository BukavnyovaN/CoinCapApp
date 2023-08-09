import React, { FC } from 'react';
import './Button.scss';

interface IButton {
  className: string;
  description: string | any;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ className, description, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {description}
    </button>
  );
};

export { Button };
