import axios from 'axios';

// axios.defaults.baseURL = '';
export const list = (type = 'IN_COUNT', page = 1, size = 20) =>
  axios.get('http://localhost:3001/inventory-log/list', {
    params: {
      type,
      page,
      size,
    },
  });
