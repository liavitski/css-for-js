import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import { COLORS, WEIGHTS } from '../../constants';
import SuperHeader from '../SuperHeader';

function Header() {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
}

const MainHeader = styled.div`
  height: 72px;
  display: flex;
  padding: 20px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  align-items: baseline;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Side = styled.div`
  flex: 1;
`;

export default Header;
