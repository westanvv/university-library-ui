import React, {memo} from 'react';

import logo from 'src/assets/logo.svg';
import styles from './Header.module.scss';

export interface HeaderProps {
  name: string;
}

function Header({name}: HeaderProps) {
  return (
    <header className={styles.root}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.title}>{name}</div>
    </header>
  );
}

export default memo(Header);
