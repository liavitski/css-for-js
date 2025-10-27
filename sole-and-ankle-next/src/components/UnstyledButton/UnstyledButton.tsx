import * as React from 'react';
import styles from './UnstyledButton.module.css';

type DisplayType = 'block' | 'inline' | 'inline-block';

type UnstyledButtonProps = {
  display?: DisplayType;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function UnstyledButton({
  display = 'block',
  children,
  onClick,
}: UnstyledButtonProps) {
  const displayClass = styles[display] || styles.block;

  return (
    <button
      className={`${styles.btn} ${displayClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default UnstyledButton;
