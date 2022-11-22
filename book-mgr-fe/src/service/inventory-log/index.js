import { get } from '@/helpers/request';
// axios.defaults.baseURL = '';
export const list = (type = 'IN_COUNT', page = 1, size = 20) =>
  get('/inventory-log/list', {

      type,
      page,
      size,
    
  });
