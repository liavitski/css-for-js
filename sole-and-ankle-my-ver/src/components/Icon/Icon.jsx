import React from 'react';
import {
  Search,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
} from 'react-feather';
import styled from 'styled-components';

const icons = {
  search: Search,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
  menu: Menu,
  close: X,
};

function Icon({ id, color, size, strokeWidth, ...delegated }) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component size={size} color={color} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + 'px' : undefined};
  }
`;

export default Icon;
