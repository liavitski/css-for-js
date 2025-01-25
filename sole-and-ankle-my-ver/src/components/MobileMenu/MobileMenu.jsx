import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon/Icon';
import VisuallyHidden from '../VisuallyHidden';

function MobileMenu({ isOpen, onDismiss }) {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={onDismiss}
    >
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Filler />
          <Nav>
            <Link href="/sale">Sale</Link>
            <Link href="/new">New&nbsp;Releases</Link>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/collections">Collections</Link>
          </Nav>
          <Footer>
            <FooterLink href="/terms">
              Terms and Conditions
            </FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Link = styled.a`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${18 / 16}rem;
  width: fit-content;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-end;
`;

const FooterLink = styled(Link)`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray[700]};
  text-transform: revert;
`;

export default MobileMenu;
