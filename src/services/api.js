import axios from 'axios';
import {store} from '../store';
import {HOST, PORT} from 'react-native-dotenv';

export const url_api = `http://${HOST}:${PORT}/v1/api/`;

const api = axios.create({
  baseURL: url_api,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = store.getState().user.auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
