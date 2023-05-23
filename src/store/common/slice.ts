import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {NOTIFICATION_STATUSES} from './constants';
import {CommonReducer} from './types';

const initialState: CommonReducer = {
  notification: undefined,
  showSidebar: false,
};

export const commonSlice = createSlice({
  name: 'COMMON',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<{status?: string; message?: string}>) => {
      state.notification = {
        status: action.payload.status ?? NOTIFICATION_STATUSES.danger,
        message: action.payload.message ?? '',
      };
    },
    cleanNotification: state => {
      state.notification = undefined;
    },
    showSidebar: state => {
      state.showSidebar = true;
    },
    hideSidebar: state => {
      state.showSidebar = false;
    },
    toggleSidebar: state => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const {reducer, actions} = commonSlice;
