import React from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';

function ShoeSidebar() {
  return (
    <Wrapper>
      <Link href="/">Lifestyle</Link>
      <Link href="/">Jordan</Link>
      <ActiveLink href="/">Running</ActiveLink>
      <Link href="/">Basketball</Link>
      <Link href="/">Training &amp; Gym</Link>
      <Link href="/">Footbal</Link>
      <Link href="/">Skateboarding</Link>
      <Link href="/">American Football</Link>
      <Link href="/">Baseball</Link>
      <Link href="/">Golf</Link>
      <Link href="/">Tennis</Link>
      <Link href="/">Athletics</Link>
      <Link href="/">Walking</Link>
    </Wrapper>
  );
}

const Wrapper = styled.aside`

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  width: max-content;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const ActiveLink = styled(Link)`
  color: ${COLORS.primary};
`;

export default ShoeSidebar;
