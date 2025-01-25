import React from 'react';
import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard/ShoeCard';

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
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const ShoeWrapper = styled.div`
  flex: 1 1 340px;
`;

export default ShoeGrid;
