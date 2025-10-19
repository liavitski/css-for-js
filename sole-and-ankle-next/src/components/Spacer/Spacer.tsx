import React from 'react';
import styles from './Spacer.module.css';

type SpacerProps = {
  axis?: 'horizontal' | 'vertical';
  size?: number;
};

function Spacer({ axis = 'vertical', size = 8 }: SpacerProps) {
  const style =
    axis === 'horizontal'
      ? {
          width: `${size}px`,
          minWidth: `${size}px`,
          height: '1px',
          minHeight: '1px',
        }
      : {
          width: '1px',
          minWidth: '1px',
          height: `${size}px`,
          minHeight: `${size}px`,
        };

  return <span className={styles.spacerStyle} style={style} />;
}

export default Spacer;
