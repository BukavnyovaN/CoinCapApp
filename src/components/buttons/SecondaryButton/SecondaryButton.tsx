import { FC } from 'react';
import './SecondaryButton.scss';

interface ISecondaryButton {
  description: string;
}

const SecondaryButton: FC<ISecondaryButton> = ({ description }) => {
  return <button className='secondary-button'>{description}</button>;
};

export { SecondaryButton };
