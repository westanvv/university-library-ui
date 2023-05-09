import React, {memo, ReactNode} from 'react';

import styles from './Content.module.scss';

export interface ContentProps {
  children: ReactNode;
}

function Content({children}: ContentProps) {
  return <div className={styles.root}>{children}</div>;
}

export default memo(Content);
