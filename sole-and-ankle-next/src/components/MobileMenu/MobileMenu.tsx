import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';
import styles from './MobileMenu.module.css';

type MobileMenuProps = {
  isOpen: boolean;
  onDismiss: () => void;
};

function MobileMenu({ isOpen, onDismiss }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <Dialog.Close
            onClick={onDismiss}
            className={styles.closeBtn}
          >
            <Icon id="close" strokeWidth={2} />
            <VisuallyHidden>Close</VisuallyHidden>
          </Dialog.Close>

          <Dialog.Title>
            <VisuallyHidden>Modal</VisuallyHidden>
          </Dialog.Title>

          <div className={styles.spacer}/>

          <nav className={styles.nav}>
            <Link href="/sale">Sale</Link>
            <Link href="/new">New&nbsp;Releases</Link>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/collections">Collections</Link>
          </nav>

          <div className={styles.spacer}/>

          <footer className={styles.footer}>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact Us</Link>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MobileMenu;
