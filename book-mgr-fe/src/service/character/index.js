import axios from 'axios';

// axios.defaults.baseURL = '';
export const list = () => {
  return axios.get('http://localhost:3001/character/list');
};
