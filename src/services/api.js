import axios from 'axios';

export const url_api = 'http://192.168.25.5:8000/v1/api/auth/login'; // Em casa

// import {getToken} from './auth';

const api = axios.create({
  baseURL: url_api,
});

// api.interceptors.request.use(async (config) => {
//   // const token = getToken();
//   const token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE0LCJpYXQiOjE1OTEyNDg4NDF9.PMPgE7EhuikX5lUcWopu4fEFXRZttnygDIdUu-ROjX8';
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
