import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import Spacer from '../Spacer';

function SuperHeader() {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over 75$!
      </MarketingMessage>
      <SearchInput />
      <Spacer size={24} />
      <HelpLink href="/help">Help</HelpLink>
      <Spacer size={24} />
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 2.5rem;
  display: flex;
  background-color: ${COLORS.gray[900]};
  align-items: center;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  padding-left: 32px;
  padding-right: 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  font-size: 0.875rem;
  margin-right: auto;
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