import React from 'react';
import Icon from '../Icon/Icon';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../../components/VisuallyHidden';

function SearchInput({ label, ...delegated }) {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <SearchIcon id="search" size={16} strokeWidth={1.2} />
      <Input {...delegated} placeholder="Search..." />
    </Label>
  );
}
89;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-left: 24px;
  font-size: 24px;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[100]};
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;
export default SearchInput;
