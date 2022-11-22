import {  get } from '@/helpers/request';
// axios.defaults.baseURL = '';
export const list = () => {
  return get('/character/list');
};
