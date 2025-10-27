import * as React from 'react';
import styles from './NavLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children, ...delegated }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.isActive : ''}`}
      {...delegated}
    >
      {children}
    </Link>
  );
}

export default NavLink;
