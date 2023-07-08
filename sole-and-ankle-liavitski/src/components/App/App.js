import React from 'react';
import styled from 'styled-components/macro';

import ShoeIndex from '../ShoeIndex';
import Header from '../Header';

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
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;