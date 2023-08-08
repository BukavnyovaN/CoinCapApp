import { FC } from 'react';
import { SecondaryButton, PrimaryButton } from '../../buttons/index';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { close } from '../../../store/modalSlice';
import './ModalWindow.scss';

const ModalWindow: FC = () => {
  const isModalAddOpen = useAppSelector(({ modal }) => modal.value);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(close());
  };

  return (
    <>
      <div
        className={`modal_add-wrapper ${!isModalAddOpen ? 'display_none' : ''}`}
      >
        <input
          type='number'
          placeholder='0'
          name=''
          id=''
          className='input-number'
        />
        <PrimaryButton description='Submit' />
        <SecondaryButton description='close' onClick={closeModal} />
      </div>
      <div
        className={`shadow ${!isModalAddOpen ? 'display_none' : ''}`}
        onClick={closeModal}
      />
    </>
  );
};

export { ModalWindow };
