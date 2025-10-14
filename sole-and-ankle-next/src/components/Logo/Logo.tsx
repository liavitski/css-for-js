import * as React from 'react';
import styles from './Logo.module.css';

type LogoProps = React.HTMLAttributes<HTMLHeadingElement>;

function Logo(props: LogoProps) {
  return (
    <a className={styles.link}>
      <h1 className={styles.wrapper} {...props}>
        Sole&amp;Ankle
      </h1>
    </a>
  );
}

export default Logo;
