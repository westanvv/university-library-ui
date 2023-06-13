import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthReducer, User} from './types';

const initialState: AuthReducer = {
  user: undefined,
  token: undefined,
};

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{user: User; token: string}>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = undefined;
      state.token = undefined;
    },
  },
});

export const {reducer, actions} = authSlice;
