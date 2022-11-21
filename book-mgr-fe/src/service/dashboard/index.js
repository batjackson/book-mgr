import axios from 'axios';

export const baseInfo = () => {
  return axios.get('http://localhost:3001/dashboard/base-info')
}
