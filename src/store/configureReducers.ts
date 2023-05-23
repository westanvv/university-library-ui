import {combineReducers} from '@reduxjs/toolkit';

import {reducer as commonReducer} from './common/slice';

const createRootReducer = () =>
  combineReducers({
    common: commonReducer,
  });

export default createRootReducer;
