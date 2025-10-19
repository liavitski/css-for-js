import * as React from 'react';
import styles from './Flag.module.css';

export type FlagProps = {
  children: React.ReactNode;
  variant: 'on-sale' | 'new-release';
};

function Flag({ variant, children }: FlagProps) {
  const variantClass =
    variant === 'on-sale'
      ? styles.onSale
      : variant === 'new-release'
      ? styles.newRelease
      : '';

  return (
    <div className={`${styles.wrapper} ${variantClass}`}>
      {children}
    </div>
  );
}

export default Flag;
