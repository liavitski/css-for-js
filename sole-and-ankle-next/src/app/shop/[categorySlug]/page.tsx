import React from 'react';

import { getShoesForCategory } from '@/helpers/data';

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const shoes = await getShoesForCategory(categorySlug);

  return <p>Category page</p>;
}

export default CategoryPage;
