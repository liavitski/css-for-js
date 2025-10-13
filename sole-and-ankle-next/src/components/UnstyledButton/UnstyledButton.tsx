import * as React from 'react';
import styles from './UnstyledButton.module.css';

type DisplayType = 'block' | 'inline' | 'inline-block';

type UnstyledButtonProps = {
  display?: DisplayType;
  children: React.ReactNode;
};

function UnstyledButton({
  display = 'block',
  children,
}: UnstyledButtonProps) {
  const displayClass = styles[display] || styles.block;

  return (
    <button className={`${styles.btn} ${displayClass}`}>
      {children}
    </button>
  );
}

export default UnstyledButton;
