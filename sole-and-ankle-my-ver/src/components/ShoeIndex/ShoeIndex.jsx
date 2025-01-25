import React from 'react';
import styled from 'styled-components';

import Breadcrumbs, { Crumb } from '../Breadcrumbs/Breadcrumbs';
import ShoeSidebar from '../ShoeSidebar/ShoeSidebar';
import { QUERIES, WEIGHTS } from '../../constants';
import Select from '../Select/Select';
import ShoeGrid from '../ShoeGrid/ShoeGrid';
import Spacer from '../Spacer/Spacer';

function ShoeBreadcrumbs() {
  return (
    <Breadcrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/" isCurrentPage={true}>
        Sale
      </Crumb>
      <Crumb href="/">Shoes</Crumb>
    </Breadcrumbs>
  );
}

function ShoeIndex({ sortId, setSortId }) {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbs>
              <ShoeBreadcrumbs />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </div>
          <SortFilterWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ShoeBreadcrumbs />
        </DesktopBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: baseline;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopBreadcrumbs = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileBreadcrumbs = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const SortFilterWrapper = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;
export default ShoeIndex;
