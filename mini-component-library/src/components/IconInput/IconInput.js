import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown styles passed: ${STYLES[size]}`);
  }

  return (
    <Wrapper style={{}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--border-thickness': styles.borderThickness + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--width);
  color: inherit;
  height: ${24 / 16}rem;
  font-size: ${14 / 16}rem;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
