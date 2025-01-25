import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14 / 16,
    strokeWidth: 1.2,
    height: 24,
    iconSize: 16,
    borderSize: '1px solid black',
    padding: '4px 4px 4px 24px',
  },
  large: {
    fontSize: 18 / 16,
    strokeWidth: 1.5,
    height: 36,
    iconSize: 24,
    borderSize: '2px solid black',
    padding: '8px 8px 8px 32px',
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unrecognized size`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        label={label}
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--borderSize': styles.borderSize,
          '--padding': styles.padding,
          '--height': styles.height + 'px',
          '--fontSize': styles.fontSize + 'rem',
        }}
        {...delegated}
      />
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon
          id={icon}
          size={styles.iconSize + 'px'}
          style={{ strokeWidth: styles.strokeWidth }}
        />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderSize);
  padding: var(--padding);
  width: var(--width);
  height: var(--height);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: inherit;
  font-size: var(--fontSize);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: var(--fontSize);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`;

export default IconInput;
