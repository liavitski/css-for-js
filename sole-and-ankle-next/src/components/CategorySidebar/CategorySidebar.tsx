import * as React from 'react';
import { CategorySlug, CATEGORIES } from '@/constants';
import styles from './CategorySidebar.module.css';
import Link from 'next/link';

function CategorySidebar({
  selectedCategory,
}: {
  selectedCategory: CategorySlug;
}) {

  return (
    <aside className={styles.wrapper}>
      <nav>
        <ul>
          {CATEGORIES.map(({ slug, label }) => (
            <Link
              href={'/'}
              key={slug}
              style={{
                color:
                  slug === selectedCategory
                    ? 'var(--color-primary)'
                    : 'inherit',
              }}
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default CategorySidebar;
