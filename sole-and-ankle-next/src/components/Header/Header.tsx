'use client';
import * as React from 'react';
import styles from './Header.module.css';
import SuperHeader from '../SuperHeader';
import Logo from '../Logo';
import NavLink from '../NavLink';
import UnstyledButton from '../UnstyledButton';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <div className={styles.outerWrapper}>
        <MaxWidthWrapper className="desktop">
          <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
              <Logo />
            </div>
            <nav className={styles.desktopNav}>
              <NavLink href="/" isActive={true}>
                Sale
              </NavLink>
              <NavLink href="/">New&nbsp;Releases</NavLink>
              <NavLink href="/">Men</NavLink>
              <NavLink href="/">Women</NavLink>
              <NavLink href="/">Kids</NavLink>
              <NavLink href="/">Collections</NavLink>
            </nav>
            <div className={styles.mobileActions}>
              <UnstyledButton>
                <Icon id="shopping-bag" strokeWidth={2} />
                <VisuallyHidden>Open cart</VisuallyHidden>
              </UnstyledButton>

              <UnstyledButton>
                <Icon id="search" strokeWidth={2} />
                <VisuallyHidden>Search</VisuallyHidden>
              </UnstyledButton>

              <UnstyledButton>
                <Icon id="menu" strokeWidth={2} />
                <VisuallyHidden>Menu</VisuallyHidden>
              </UnstyledButton>
            </div>
            <div className={styles.decorativeRight} />
          </div>
        </MaxWidthWrapper>
      </div>
    </header>
  );
}

export default Header;
