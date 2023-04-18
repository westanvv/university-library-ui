import React from 'react';

import logo from 'src/assets/logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Hello</p>
        <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
