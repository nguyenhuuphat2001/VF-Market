import axios from 'axios';
import {API_URL} from '@/constants/enviroments';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.headers.Authorization = `Bearer ${your_token}`;
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    config.baseURL = API_URL;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    return Promise.reject({
      message:
        JSON.stringify(err?.response.data.errors[0].message) || 'Server error',
    });
  },
);

export const setToken = token => {
  const auth = `Bearer ${token}`;
  axios.defaults.headers.common['Authorization'] = auth;
};

const API = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default API;
