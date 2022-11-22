import { del, post, get } from '@/helpers/request';
// defaults.baseURL = '';
export const add = (form) => post('/book/add', form);

export const list = (data) => {
  return get('/book/list',
     data
  );
};

export const remove = (id) => {
  return del(`/book/${id}`);
};
// export const login = (account, password) =>
//   post('/auth/login', { account, password });

export const updateCount = (data = {}) => {
  return post(`/book/update/count`, data);
};

export const update = (data = {}) => {
  return post(`/book/update`, data);
};

export const detail = (id) => {
  return get(`/book/detail/${id}`);
};

export const addMany = (key) => {
  return post(`/book/addmany`, {
    key,
  });
};
