import React, { FC } from 'react';

import './Button.scss';

interface IButton {
  className: 'button-primary' | 'button-secondary' | 'button-delete' | 'button';
  description: string | any;
  onClick?: () => void;
}

export function Button ({ className, description, onClick } : IButton) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {description}
    </button>
  );
};
