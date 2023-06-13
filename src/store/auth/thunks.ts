import jwt from 'jwt-decode';
import {api} from 'src/services';

import {dispatch} from '../helpers';
import {actions} from './slice';
import {User} from './types';

export const login = async (email: string, password: string) => {
  const response = await api<{token: string}>({
    url: '/auth/login',
    method: 'POST',
    status: 200,
    data: {
      email,
      password,
    },
  });

  if (response) {
    const user = jwt(response.data.token);
    dispatch(
      actions.login({
        user: user as User,
        token: response.data.token,
      })
    );
    localStorage.setItem('token', response.data.token);
    window.location.href = '/';
  }
};

export const logout = () => {
  dispatch(actions.logout());
};
