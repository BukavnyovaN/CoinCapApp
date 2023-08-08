import { FC } from 'react';
import './SecondaryButton.scss';

interface ISecondaryButton {
  description: string;
  onClick: () => void;
}

const SecondaryButton: FC<ISecondaryButton> = ({ description, onClick }) => {
  return (
    <button className='secondary-button' onClick={onClick}>
      {description}
    </button>
  );
};

export { SecondaryButton };
