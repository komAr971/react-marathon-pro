import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFullWidth?: boolean;
  isYellow?: boolean;
  isSmall?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isFullWidth = false,
  isYellow = false,
  isSmall = false,
}) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.isFullWidth]: isFullWidth,
        [s.isYellow]: isYellow,
        [s.isSmall]: isSmall,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
