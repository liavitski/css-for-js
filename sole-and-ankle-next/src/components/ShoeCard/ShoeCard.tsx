import * as React from 'react';

import type { Category } from '@/helpers/data';

import { formatPrice, pluralize, isNewShoe } from '@/utils';
import styles from './ShoeCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Spacer from '../Spacer';
import Flag from '../Flag';

function ShoeCard({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}: Category) {
  const variant =
    typeof salePrice === 'number'
      ? 'on-sale'
      : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default';

  return (
    <Link href={`shoe/${slug}`} className={styles.link}>
      <article className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          {variant === 'on-sale' && (
            <Flag variant={variant}>Sale</Flag>
          )}
          {variant === 'new-release' && (
            <Flag variant={variant}>Just Released!</Flag>
          )}

          <Image src={imageSrc} alt={name} width={340} height={312} />
        </div>

        <Spacer size={12} />

        <div className={styles.row}>
          <h3 className={styles.name}>{name}</h3>
          <span
            className={
              variant === 'on-sale'
                ? `${styles.oldPrice}`
                : `${styles.price}`
            }
          >
            {formatPrice(price)}
          </span>
        </div>
        <div className={styles.row}>
          <p className={styles.colorInfo}>
            {pluralize('Color', numOfColors)}
          </p>
          {variant === 'on-sale' ? (
            <span className={styles.newPrice}>
              {formatPrice(salePrice!)}
            </span>
          ) : undefined}
        </div>
      </article>
    </Link>
  );
}

export default ShoeCard;
