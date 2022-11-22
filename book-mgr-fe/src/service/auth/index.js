import {post} from '@/helpers/request'
// axios.defaults.baseURL = '';
export const register = (account, password, inviteCode) =>
  post('/auth/register', { account, password, inviteCode });

export const login = (account, password) =>
  post('/auth/login', { account, password });
