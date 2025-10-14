import React from 'react';

import styles from './MaxWidthWrapper.module.css';

type MaxWidthWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({
  children,
  className = '',
  ...delegated
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={`${styles.maxWidthWrapper} ${className}`}
      {...delegated}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
