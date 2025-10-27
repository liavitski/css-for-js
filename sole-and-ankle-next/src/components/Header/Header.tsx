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
import MobileMenu from '../MobileMenu';

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
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
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

              <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                <Icon id="menu" strokeWidth={2} />
                <VisuallyHidden>Menu</VisuallyHidden>
              </UnstyledButton>
            </div>
            <div className={styles.decorativeRight} />
          </div>
        </MaxWidthWrapper>
      </div>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
}

export default Header;
