import * as React from 'react';
import styles from './Header.module.css';
import SuperHeader from '../SuperHeader';
import Logo from '../Logo';
import NavLink from '../NavLink';
import MaxWidthWrapper from '../MaxWidthWrapper';

function Header() {
  return (
    <>
      <SuperHeader />
      <div className={styles.outerWrapper}>
        <MaxWidthWrapper>
          <div className={styles.wrapper}>
            <div className={styles.decorative}>
              <Logo />
            </div>
            <nav className={styles.navWrapper}>
              <NavLink href="/" isActive={true}>
                Sale
              </NavLink>
              <NavLink href="/">New&nbsp;Releases</NavLink>
              <NavLink href="/">Men</NavLink>
              <NavLink href="/">Women</NavLink>
              <NavLink href="/">Kids</NavLink>
              <NavLink href="/">Collections</NavLink>
            </nav>
            <div className={styles.decorative} />
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}

export default Header;
