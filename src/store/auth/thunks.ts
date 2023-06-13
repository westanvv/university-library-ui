import jwt from 'jwt-decode';
import {api} from 'src/services';

import {dispatch} from '../helpers';
import {actions} from './slice';
import {User} from './types';

export const login = async (email: string, password: string) => {
  const responce = await api<{token: string}>({
    url: '/auth/login',
    method: 'POST',
    status: 200,
    data: {
      email,
      password,
    },
  });

  if (responce) {
    const user = jwt(responce.data.token);
    dispatch(
      actions.login({
        user: user as User,
        token: responce.data.token,
      })
    );
    localStorage.setItem('token', responce.data.token);
    window.location.href = '/';
  }
};

export const logout = () => {
  dispatch(actions.logout());
};
