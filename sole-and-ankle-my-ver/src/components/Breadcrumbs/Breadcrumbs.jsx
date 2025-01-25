import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

function Breadcrumbs({ children }) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

const BreadcrumbList = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export function Crumb({ href, isCurrentPage, children }) {
  return (
    <CrumbWrapper>
      <CrumbLink
        href={href}
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
}

const CrumbWrapper = styled.li`
  display: inline;
  color: ${COLORS.gray[700]};
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: '/';
      opacity: 0.25;
      margin-right: var(--spacing);
    }
  }
`;

const CrumbLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: ${14 / 16}rem;
`;

export default Breadcrumbs;
