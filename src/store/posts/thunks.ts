import {api} from 'src/services';

import {dispatch} from '../helpers';
import {actions} from './slice';
import {Post} from './types';

export const getAll = async () => {
  try {
    const response = await api<Post[]>({
      url: '/posts',
      method: 'GET',
      status: 200,
    });

    if (response) {
      dispatch(actions.getAll(response.data));
    }
  } catch (e) {}
};
