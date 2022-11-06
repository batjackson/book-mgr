import axios from 'axios';

// axios.defaults.baseURL = '';
export const register = (account, password, inviteCode) =>
  axios.post('http://localhost:3001/auth/register', { account, password, inviteCode });

export const login = (account, password) =>
  axios.post('http://localhost:3001/auth/login', { account, password });
