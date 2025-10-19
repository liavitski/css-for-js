import React from 'react';
import styles from './CategoryLayout.module.css';
import { CategorySlug, CATEGORIES } from '@/constants';

import CategorySidebar from '@/components/CategorySidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CategoryHeader from '@/components/CategoryHeader';

export type CategoryLayoutProps = {
  params: { categorySlug: CategorySlug };
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

  if (!matchedCategory) {
    return (
      <MaxWidthWrapper className="desktop">
        <p className={styles.notFound}>Category not found.</p>
      </MaxWidthWrapper>
    );
  }

  return (
    <MaxWidthWrapper className="desktop">
      <main className={styles.wrapper}>
        <div className={styles.mainColumn}>
          <CategoryHeader categoryLabel={matchedCategory.label} />
          {children}
        </div>

        <div className={styles.leftColumn}>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href={`/sale/${categorySlug}`}>
              {matchedCategory.label}
            </Breadcrumbs.Crumb>
          </Breadcrumbs>

          <CategorySidebar selectedCategory={categorySlug} />
        </div>
      </main>
    </MaxWidthWrapper>
  );
}

export default CategoryLayout;
