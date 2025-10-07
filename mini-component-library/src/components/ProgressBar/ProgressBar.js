/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    radius: 4,
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--padding': styles.padding + 'px',
        '--borderRadius': styles.radius + 'px',
      }}
      role="progressbar"
      aria-labelledby="loadinglabel"
      aria-valuenow={value}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <HelperWrapper>
        <ProgressLine
          style={{
            '--width': `${value}%`,
            '--height': styles.height + 'px',
          }}
        />
      </HelperWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  /* Trim off corners when progress bar near full */
  overflow: hidden;
`;

const HelperWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressLine = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
