import {combineReducers} from '@reduxjs/toolkit';

import {reducer as commonReducer} from './common/slice';
import {reducer as authReducer} from './auth/slice';

const createRootReducer = () =>
  combineReducers({
    common: commonReducer,
    auth: authReducer,
  });

export default createRootReducer;
