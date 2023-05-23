import _get from 'lodash/get';
import {TypedUseSelectorHook, useDispatch as useBaseDispatch, useSelector as useBaseSelector} from 'react-redux';

import {AppDispatch, getStore, RootState} from './configureStore';

export const dispatch = (action: {payload: any; type: string}): void => {
  const store = getStore();

  store.dispatch(action);
};

export const getState = (key?: string, defaultValue?: any) => {
  const store = getStore();

  if (key) {
    return _get(store.getState() as RootState, key, defaultValue ?? null);
  }

  return store.getState() as RootState;
};

export const useDispatch = () => useBaseDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useBaseSelector;
