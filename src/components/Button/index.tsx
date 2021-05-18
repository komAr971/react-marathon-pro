import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: 'green' | 'yellow';
  size?: 'normal' | 'small';
  width?: 'normal' | 'max';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color = 'green', size = 'no', width = 'normal' }) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.green]: color === 'green',
        [s.yellow]: color === 'yellow',
        [s.small]: size === 'small',
        [s.maxWidth]: width === 'max',
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
