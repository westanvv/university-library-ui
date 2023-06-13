import {combineReducers} from '@reduxjs/toolkit';

import {reducer as commonReducer} from './common/slice';
import {reducer as authReducer} from './auth/slice';
import {reducer as postsReducer} from './posts/slice';

const createRootReducer = () =>
  combineReducers({
    common: commonReducer,
    auth: authReducer,
    posts: postsReducer,
  });

export default createRootReducer;
