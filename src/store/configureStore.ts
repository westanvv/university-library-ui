import {AnyAction, configureStore, Dispatch, Middleware, Store} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';

import configureReducers from './configureReducers';

const DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';
const rootReducer = configureReducers();
const middleware: Middleware<unknown, any, Dispatch<AnyAction>>[] = [];
const enhancers: any[] = [];

let store: Store | undefined;

if (DEVELOPMENT_MODE && typeof window !== 'undefined') {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true,
    })
  );
}

const initStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middleware),
    enhancers: defaultEnhancers => [...enhancers, ...defaultEnhancers],
    devTools: DEVELOPMENT_MODE,
  });

export const getStore = (): Store => {
  if (store) {
    return store;
  }

  store = initStore();
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type AppDispatch = typeof store.dispatch;
