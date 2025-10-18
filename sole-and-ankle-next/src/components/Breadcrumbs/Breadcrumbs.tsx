import Link from 'next/link';
import * as React from 'react';
import styles from './Breadcrumbs.module.css';

type BreadcrumbsProps = {
  children: React.ReactNode;
};

type CrumbProps = {
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Breadcrumbs({ children }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbsWrapper}>
      <ol>{children}</ol>
    </nav>
  );
}

function Crumb({ href, children, ...delegated }: CrumbProps) {
  return (
    <li>
      <Link href={href} {...delegated} className={styles.crumbLink}>
        {children}
      </Link>
    </li>
  );
}

Breadcrumbs.Crumb = Crumb;

export default Breadcrumbs;
