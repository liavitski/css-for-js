import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 16 / 14,
    borderBottom: 1,
    iconSize: 16,
    padding: 24,
  },
  large: {
    fontSize: 18 / 16,
    borderBottom: 2,
    iconSize: 24,
    padding: 36,
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
  return (
    <Wrapper>
      <IconWrapper style={{ '--iconSize': styles.iconSize + 'px' }}>
        <Icon
          id={icon}
          size={styles.iconSize + 'px'}
          strokeWidth="1"
        />
      </IconWrapper>
      <Input
        {...delegated}
        style={{
          '--fontSize': styles.fontSize + 'rem',
          '--padding': styles.padding + 'px',
          '--width': width + 'px',
          '--height': styles.iconSize + 'px',
        }}
      ></Input>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  font-size: var(--fontSize);
  border: none;
  border-bottom: var(--) solid ${COLORS.black};
  padding-left: var(--padding);
  width: var(--width);
  height: var(--height);

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--iconSize);
`;

export default IconInput;
