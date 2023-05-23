import React, {memo, useCallback} from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

import Layout from 'src/components/Layout';
import utils from 'src/utils';
import {useSelector, commonThunks} from 'src/store';

import styles from './Dashboard.module.scss';

function Dashboard() {
  const showSidebar = useSelector(state => state.common.showSidebar);
  const navigate = useNavigate();

  console.log(showSidebar);

  const handleClick = useCallback(() => {
    // navigate('/articles');
    commonThunks.toggleSidebar();
  }, []);

  return (
    <Layout name="Dashboard" className={styles.root}>
      <div>Dashboard page</div>
      <div>{utils.formatMoney(100)}</div>

      <Button
        classes={{
          root: 'test',
        }}
        variant="contained"
        onClick={handleClick}
      >
        Go to articles
      </Button>
    </Layout>
  );
}
export default memo(Dashboard);
