import * as React from 'react';
import {
  Search,
  Menu,
  ShoppingBag,
  ChevronDown,
} from 'react-feather';
import styles from './Icon.module.css';
import clsx from 'clsx';

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
};

type IconId = 'search' | 'menu' | 'shopping-bag' | 'chevron-down';

type IconProps = React.HTMLAttributes<HTMLDivElement> & {
  id: IconId;
  color?: string;
  size?: number;
  strokeWidth?: number;
};

function Icon({
  id,
  color = 'inherit',
  size = 16,
  strokeWidth = 1,
  className,
  ...delegated
}: IconProps) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <div {...delegated} className={clsx(styles.wrapper, className)}>
      <Component
        color={color}
        size={size}
        strokeWidth={strokeWidth}
      />
    </div>
  );
}

export default Icon;
