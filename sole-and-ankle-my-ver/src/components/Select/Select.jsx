import React from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon/Icon';

function Select({ label, value, children, ...delegated }) {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(
    (child) => child.props.value === value
  );

  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>
      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>
        <PresentationBit>
          {displayedValue}
          <ChevronIcon
            id="chevron-down"
            size={24}
            strokeWidth={1.5}
          />
        </PresentationBit>
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const VisibleLabel = styled.span`
  color: ${COLORS.gray[700]};
  margin-right: 16px;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const PresentationBit = styled.div`
  display: block;
  background-color: ${COLORS.gray[100]};
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  border-radius: 8px;
  padding: 12px 42px 12px 16px;
  pointer-events: none;
`;

const ChevronIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 9px;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;

export default Select;
