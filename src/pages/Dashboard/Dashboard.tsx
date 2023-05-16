import React, {memo, useCallback} from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

import Layout from 'src/components/Layout';

import styles from './Dashboard.module.scss';

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/articles');
  }, [navigate]);

  return (
    <Layout name="Dashboard" className={styles.root}>
      <div>Dashboard page</div>

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
