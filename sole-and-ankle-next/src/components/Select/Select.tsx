import * as React from 'react';
import styles from './Select.module.css';
import Icon from '../Icon';
import { COLORS } from '@/constants';

type SelectProps = React.HTMLAttributes<HTMLSelectElement> & {
  label: string;
  value: string;
  children: React.ReactNode;
};

function Select({
  label = 'Sort',
  value,
  children,
  ...delegated
}: SelectProps) {
  const childArray = React.Children.toArray(children);

  const selectedChild = childArray.find(
    (child): child is React.ReactElement<{ value: string }> =>
      React.isValidElement<{ value: string }>(child) &&
      child.props.value === value
  );

  return (
    <div className={styles.wrapper}>
      <label htmlFor="sort">{label}</label>

      <div className={styles.presentationBit}>
        <select {...delegated} id="sort" name="sort">
          {children}
        </select>
        <span className={styles.syntheticalSelect}>
          {selectedChild}
          <Icon
            id="chevron-down"
            strokeWidth={1.5}
            size={16}
            color={COLORS.gray[900]}
          />
        </span>
      </div>
    </div>
  );
}

export default Select;
