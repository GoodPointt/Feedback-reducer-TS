import * as React from 'react';
import css from './Button.module.css';

interface ButtonProps {
  buttonType?: 'button' | 'submit' | 'reset';
  children: string;
  onClick: () => void;
}

export const Button = ({ buttonType, children, onClick }: ButtonProps) => {
  return (
    <button type={buttonType} className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};
