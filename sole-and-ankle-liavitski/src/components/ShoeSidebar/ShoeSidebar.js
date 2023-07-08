import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

function ShoeSidebar() {
  return (
    <Wrapper>
      <Link href="/lifestyle">Lifestyle</Link>
      <Link href="/jordan">Jordan</Link>
      <ActiveLink href="basketball">Basketball</ActiveLink>
      <Link href="/running">Running</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/us-football">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: none;
  line-height: 2;
  font-weight: ${WEIGHTS.medium};
  display: block;
`;

const ActiveLink = styled(Link)`
  color: ${COLORS.primary};
`;

export default ShoeSidebar;
