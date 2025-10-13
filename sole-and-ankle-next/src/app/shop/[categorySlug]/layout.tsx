import React from 'react';

import { CATEGORIES } from '@/constants';

import styles from './CategoryLayout.module.css';

export type CategoryLayoutProps = {
  params: Promise<{ categorySlug: string }>;
  children: React.ReactNode;
};

async function CategoryLayout({
  params,
  children,
}: CategoryLayoutProps) {
  const { categorySlug } = await params;

  const matchedCategory = CATEGORIES.find(
    (category) => category.slug === categorySlug
  );

  return <div>{children}</div>;
}

export default CategoryLayout;
