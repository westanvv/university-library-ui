import {AppDispatch, getStore, RootState} from './configureStore';
import {dispatch, getState, useDispatch, useSelector} from './helpers';

import * as commonThunks from './common/thunks';
import * as authThunks from './auth/thunks';
import * as postsThunks from './posts/thunks';

// types
export * from './common/types';
export * from './auth/types';
export * from './posts/types';

// constants
export * from './common/constants';

export {getStore, useSelector, dispatch, getState, useDispatch, commonThunks, authThunks, postsThunks};

export type {RootState, AppDispatch};
