import * as React from 'react';
import styles from './NavLink.module.css';
import clsx from 'clsx';

type NavLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
};

function NavLink({
  href,
  isActive = false,
  children,
  ...delegated
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={clsx(styles.link, { [styles.active]: isActive })}
      {...delegated}
    >
      {children}
    </a>
  );
}

export default NavLink;
