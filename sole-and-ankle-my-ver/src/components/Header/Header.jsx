import React from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import SuperHeader from '../SuperHeader/SuperHeader';
import Logo from '../Logo/Logo';
import Icon from '../Icon/Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="http://">Sale</NavLink>
          <NavLink href="http://">New&nbsp;Releases</NavLink>
          <NavLink href="http://">Men</NavLink>
          <NavLink href="http://">Women</NavLink>
          <NavLink href="http://">Kids</NavLink>
          <NavLink href="http://">Collectionsssssssssssss</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBag>
            <Icon id="shopping-bag" strokeWidth={1.5} />
            <VisuallyHidden>Open Cardt</VisuallyHidden>
          </ShoppingBag>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1.5} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1.5} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>

        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  /* gap: 48px; */
  gap: clamp(1.2rem, 6.3vw - 2.5rem, 3rem);
  margin: 0px 48px;
  overflow-x: auto;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
  font-family: 'Raleway';

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const ShoppingBag = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

export default Header;
