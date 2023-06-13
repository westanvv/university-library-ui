import React, {memo} from 'react';

import {useSelector} from 'src/store';
import styles from './Post.module.scss';

export interface PostProps {
  postId: number;
}

function Post({postId}: PostProps) {
  const post = useSelector(state => state.posts.posts?.[postId] || undefined);

  if (!post) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.name}>{post.name}</div>
      <div className={styles.description}>{post.description}</div>
    </div>
  );
}

export default memo(Post);
