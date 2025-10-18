'use client';
import * as React from 'react';
import Select from '../Select';
import styles from './CategoryHeader.module.css';

type CategoryHeaderProps = {
  categoryLabel: string;
};

function CategoryHeader({ categoryLabel }: CategoryHeaderProps) {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <div className={styles.rightColumnHeader}>
      <h2>{categoryLabel}</h2>
      <Select
        label="Sort"
        value={sortId}
        onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
          setSortId(ev.target.value)
        }
      >
        <option value="newest">New Releases</option>
        <option value="price-low">Price (low to high)</option>
        <option value="price-high">Price (high to low)</option>
      </Select>
    </div>
  );
}

export default CategoryHeader;
