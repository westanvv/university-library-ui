import React, {memo, useCallback, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate} from 'react-router-dom';

import Layout from 'src/components/Layout';
import Post from 'src/pages/Dashboard/Post/Post';

import {commonThunks, postsThunks, useSelector} from 'src/store';

import styles from './Dashboard.module.scss';

function Dashboard() {
  const postIds = useSelector(state => state.posts.postIds);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      await postsThunks.getAll();
      setLoading(false);
    };

    load();
  }, []);

  const handleClick = useCallback(() => {
    // navigate('/articles');
    commonThunks.toggleSidebar();
  }, []);

  if (isLoading) {
    return (
      <Layout name="Dashboard" className={styles.root}>
        <CircularProgress />
      </Layout>
    );
  }

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
      <div className={styles.postsContainer}>
        {postIds?.map(postId => (
          <Post key={postId} postId={postId} />
        ))}
      </div>
    </Layout>
  );
}
export default memo(Dashboard);
