import './Button.scss';

interface IButton {
  className: 'button_primary' | 'button_secondary' | 'button_delete' | 'button';
  description: string | any;
  onClick?: () => void;
  disabled?: boolean | any;
}

export function Button ({ className, description, onClick, disabled } : IButton) {
  return (
    <button disabled={disabled} className={`button ${className}`} onClick={onClick}>
      {description}
    </button>
  );
};
