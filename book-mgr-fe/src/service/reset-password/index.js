import axios from 'axios';

export const list = (page, size) => {
  return axios.get('http://localhost:3001/forget-password/list', {
    params: {
      page,
      size,
    },
  });
};

export const add = (account) => {
  return axios.post('http://localhost:3001/forget-password/add', {
    account,
  });
};

export const update = (id,status) => {
  return axios.post('http://localhost:3001/forget-password/update/status', {
    id,
    status,
  });
};
