import { post, get } from '@/helpers/request';
import axios from 'axios';
export const list = (page, size) => {
  return get('/log/list', {

      page,
      size,
   
  });
};

export const remove = (id) => {
  return post(`/log/delete`, {
    id,
  });
};
