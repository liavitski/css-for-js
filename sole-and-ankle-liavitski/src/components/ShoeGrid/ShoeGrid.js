import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

function ShoeGrid() {
  return (
  <Wrapper>
    {SHOES.map((shoe) => (
      <ShoeWrapper key={shoe.slug}>
        <ShoeCard {...shoe} />
      </ShoeWrapper>
    ))}
  </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;
  max-width: 450px;
`;

export default ShoeGrid;