import React from 'react';
import {
  Search,
  Menu,
  ShoppingBag,
  ChevronDown,
  X,
} from 'react-feather';
import styles from './Icon.module.css';

type IconId =
  | 'search'
  | 'menu'
  | 'shopping-bag'
  | 'chevron-down'
  | 'close';

type IconProps = React.HTMLAttributes<HTMLDivElement> & {
  id: IconId;
  color?: string;
  size?: number | string;
  strokeWidth?: number;
};

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
  close: X,
} as const;

export default function Icon({
  id,
  color,
  size,
  strokeWidth,
  ...delegated
}: IconProps) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <div
      className={styles.wrapper}
      style={
        { 
          '--stroke-width': strokeWidth
            ? `${strokeWidth}px`
            : undefined,
        } as React.CSSProperties
      }
      {...delegated}
    >
      <Component color={color} size={size} />
    </div>
  );
}
