import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PostsReducer, Post} from './types';

const initialState: PostsReducer = {
  posts: {},
  postIds: [],
};

export const postsSlice = createSlice({
  name: 'POSTS',
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<Post[]>) => {
      state.postIds = [];
      action.payload.forEach(post => {
        state.posts[post.id] = post;
        state.postIds.push(post.id);
      });
    },
  },
});

export const {reducer, actions} = postsSlice;
