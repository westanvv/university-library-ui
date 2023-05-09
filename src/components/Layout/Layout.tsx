import React, {memo, ReactNode} from 'react';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import styles from './Layout.module.scss';

export interface LayoutProps {
  name: string;
  children: ReactNode;
}

function Layout({children, name}: LayoutProps) {
  return (
    <div className={styles.root}>
      <Header name={name} />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}

export default memo(Layout);
