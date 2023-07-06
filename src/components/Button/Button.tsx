import * as React from 'react';
import css from './Button.module.css';

interface ButtonProps {
  buttonType?: 'button' | 'submit' | 'reset';
  children: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  buttonType,
  children,
  onClick,
}) => {
  return (
    <button type={buttonType} className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};
