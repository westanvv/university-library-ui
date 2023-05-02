import React, {Component, PureComponent, useState, memo, useCallback, useMemo} from 'react';

import logo from 'src/assets/logo.svg';
import styles from './App.module.scss';

export interface AppProps {
  name: string;
}

function App({name}: AppProps) {
  const [count, setCount] = useState<number>(0);

  const newCount = useMemo(() => {
    return count + 100;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(value => value + 1);
  }, []);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>{name}</p>
        <p>{count}</p>
        <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

// class App2 extends Component<AppProps, {count: number}> {
//   state = {
//     count: 0,
//   };
//
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     const {name} = this.props;
//     const {count} = this.state;
//
//     if (name !== nextProps.name) {
//       return true;
//     }
//
//     return false;
//   }
//
//   render() {
//     const {name} = this.props;
//     const {count} = this.state;
//
//     return (
//       <button
//         onClick={() => {
//           this.setState(
//             prevState => ({
//               count: prevState.count + 1,
//             }),
//             () => {
//               // gyhghj
//             }
//           );
//         }}
//       >
//         Click
//       </button>
//     );
//   }
// }

export default memo(App);
