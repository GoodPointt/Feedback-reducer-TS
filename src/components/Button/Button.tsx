import * as React from 'react';
import css from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'button' | 'submit' | 'reset';
  children: string;
  onClick: () => void;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
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
