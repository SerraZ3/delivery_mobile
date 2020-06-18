import React from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {store} from '../store';

export const url_api = 'http://192.168.25.5:8000/v1/api/'; // Em casa

const api = axios.create({
  baseURL: url_api,
});

api.interceptors.request.use(async (config) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
