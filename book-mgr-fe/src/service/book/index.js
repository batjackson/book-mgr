import axios from 'axios';
import { getToken } from '@/helpers/token';

axios.defaults.headers['Authorization'] = `Bearer ${getToken()}`;

// axios.defaults.baseURL = '';
export const add = (form) => axios.post('http://localhost:3001/book/add', form);

export const list = (data) => {
  return axios.get('http://localhost:3001/book/list', {
    params: data,
  });
};

export const remove = (id) => {
  return axios.delete(`http://localhost:3001/book/${id}`);
};
// export const login = (account, password) =>
//   axios.post('http://localhost:3001/auth/login', { account, password });

export const updateCount = (data = {}) => {
  return axios.post(`http://localhost:3001/book/update/count`, data);
};

export const update = (data = {}) => {
  return axios.post(`http://localhost:3001/book/update`, data);
};

export const detail = (id) => {
  return axios.get(`http://localhost:3001/book/detail/${id}`);
};

export const addMany = (key) => {
  return axios.post(`http://localhost:3001/book/addmany`, {
    key,
  });
};
