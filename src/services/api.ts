import axios, {AxiosRequestConfig} from 'axios';

import {commonThunks, NOTIFICATION_STATUSES} from 'src/store';
import {API_URL} from 'src/constants';

type Request = {
  url: string;
  method?: string;
  data: object;
  status?: number;
};

function api<T>(request: Request) {
  const sendRequest: AxiosRequestConfig = {
    ...request,
    baseURL: API_URL,
    method: request.method || 'GET',
    responseType: 'json',
    headers: {
      ...(localStorage.getItem('token') ? {Authorization: `Bearer ${localStorage.getItem('token')}`} : {}),
    },
  };

  return axios<T>(sendRequest)
    .then(response => {
      if (request.status && response.status !== request.status) {
        throw new Error('Wrong status');
      }

      return response;
    })
    .catch(e => {
      commonThunks.addNotification({
        message: e?.response?.data?.message || e.message,
        status: NOTIFICATION_STATUSES.danger,
      });
    });
}

export default api;
