import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface LayoutProps {
  className: string | null;
}

const Layout: React.FC<LayoutProps> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
