/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    borderRadius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    borderRadius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    borderRadius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
        '--padding': styles.padding + 'px',
        '--borderRadius': styles.borderRadius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  overflow: hidden;
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* trim-off corners when progress bar near full */
  overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
