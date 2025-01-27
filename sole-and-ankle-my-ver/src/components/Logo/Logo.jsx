import React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

function Logo(props) {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
