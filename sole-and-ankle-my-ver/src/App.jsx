import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import ShoeIndex from './components/ShoeIndex/ShoeIndex';
import { QUERIES } from './constants';

function App() {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`;

export default App;
