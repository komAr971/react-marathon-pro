import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, type = 'h1', className }) => {
  const Tag = `${type}` as keyof JSX.IntrinsicElements;
  return <Tag className={cn(s[type], className)}>{children}</Tag>;
};

export default Heading;
