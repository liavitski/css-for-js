import * as React from 'react';

import styles from './SearchInput.module.css';
import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';
import { COLORS } from '@/constants';

type SearchInputProps = React.HTMLAttributes<HTMLInputElement> & {
  label?: string;
};

function SearchInput({
  label = 'Search',
  ...delegated
}: SearchInputProps) {
  return (
    <label className={styles.wrapper} htmlFor="searchInput">
      <VisuallyHidden>{label}</VisuallyHidden>
      <input
        id="searchInput"
        className={styles.input}
        {...delegated}
        placeholder="Search..."
      />
      <Icon
        id="search"
        strokeWidth={1.5}
        size={16}
        color={COLORS.gray[300]}
        className={styles.searchIcon}
      />
    </label>
  );
}

export default SearchInput;
