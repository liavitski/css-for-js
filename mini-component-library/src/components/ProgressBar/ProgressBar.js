/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    borderRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <>
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          '--padding': styles.padding + 'px',
          '--borderRadius': styles.borderRadius + 'px',
        }}
      >
        <VisuallyHidden>{value}</VisuallyHidden>
        <BarWrapper>
          <Bar
            style={{
              '--width': value + '%',
              '--height': styles.height + 'px',
            }}
          />
        </BarWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: 0px 2px 4px ${COLORS.transparentGray35} inset;
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  /* Trim off corners when progress bar is near full. */
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
