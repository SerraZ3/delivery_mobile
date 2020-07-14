import axios from 'axios';
import {store} from '../store';
import {HOST, PORT, ACTIVE_PORT, PROTOCOL, URL_API} from 'react-native-dotenv';

export const url_api = Boolean(ACTIVE_PORT)
  ? `${PROTOCOL}://${HOST}:${PORT}/${URL_API}`
  : `${PROTOCOL}://${HOST}/${URL_API}`;

const api = axios.create({
  baseURL: url_api,
  timeout: 30000,
});

api.interceptors.request.use(async (config) => {
  const token = store.getState().user.auth.token;
  if (token && config.url !== '/auth/login') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
