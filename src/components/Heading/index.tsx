import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, type, className }) => {
  const Tag = `${type}` as keyof JSX.IntrinsicElements;
  const typeClassName = {
    [s.h1]: type === 'h1',
    [s.h2]: type === 'h2',
    [s.h3]: type === 'h3',
    [s.h4]: type === 'h4',
    [s.h5]: type === 'h5',
    [s.h6]: type === 'h6',
  };
  return <Tag className={cn(typeClassName, className)}>{children}</Tag>;
};

export default Heading;
