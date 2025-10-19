import React from 'react';

import { CategorySlug } from '@/constants';
import { CATEGORIES } from '@/constants';
import { getShoesForCategory } from '@/helpers/data';
import styles from './CategoryLayout.module.css';
import ShoeCard from '@/components/ShoeCard';

type CategoryPageProps = {
  params: { categorySlug: CategorySlug };
};

export async function generateMetadata({
  params,
}: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = CATEGORIES.find(
    (cat) => cat.slug === categorySlug
  );

  return {
    title: `${category ? category.label : ''} Shoes | Sole&Ankle`,
  };
}

async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const shoes = await getShoesForCategory(categorySlug);

  if (shoes.length === 0) {
    return <p>No shoes found in this category.</p>;
  }

  return (
    <div className={styles.pageWrapper}>
      {shoes.map((shoe) => (
        <div className={styles.shoeWrapper} key={shoe.slug}>
          <ShoeCard {...shoe} />
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;
