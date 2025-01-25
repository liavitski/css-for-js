import React from 'react';
import styled from 'styled-components';

import { formatPrice, pluralize, isNewShoe } from '../../utils';
import { COLORS, WEIGHTS } from '../../constants';

function ShoeCard({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) {
  const variant =
    typeof salePrice === 'number'
      ? 'on-sale'
      : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default';

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image src={imageSrc} alt={name} />
          {variant === 'new-release' && (
            <NewFlag>Just Released!</NewFlag>
          )}
          {variant === 'on-sale' && <SaleFlag>Sale</SaleFlag>}
        </ImageWrapper>
        <Row>
          <Name>{name}</Name>
          <Price
            style={{
              '--color':
                variant === 'on-sale' ? COLORS.gray[700] : undefined,
              '--text-decoration':
                variant === 'on-sale' ? 'line-through' : undefined,
            }}
          >
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' ? (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          ) : undefined}
        </Row>
      </Wrapper>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  padding: 8px 12px;
  color: white;
  font-weight: ${WEIGHTS.medium};
  border-radius: 2px;
`;

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;

const NewFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
