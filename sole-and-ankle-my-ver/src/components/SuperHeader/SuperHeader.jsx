import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput/SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon/Icon';
import { QUERIES } from '../../constants';

function SuperHeader() {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  padding: 0 32px;
  height: 40px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MarketingMessage = styled.span`
  margin-right: auto;
  color: ${COLORS.white};
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
