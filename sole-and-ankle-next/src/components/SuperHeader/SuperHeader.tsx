import * as React from 'react';
import styles from './SuperHeader.module.css';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { COLORS } from '@/constants';
import MaxWidthWrapper from '../MaxWidthWrapper';

function SuperHeader() {
  return (
    <div className={styles.outerWrapper}>
      <MaxWidthWrapper className="desktop">
        <div className={styles.wrapper}>
          <span className={styles.marketingMsg}>
            Free shipping on domestic orders over 75$!
          </span>
          <SearchInput />
          <a className={styles.helpBtn} href="/help">
            Help
          </a>
          <UnstyledButton>
            <Icon
              id="shopping-bag"
              strokeWidth={1.2}
              size={24}
              color={COLORS.gray[300]}
            />
          </UnstyledButton>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default SuperHeader;
