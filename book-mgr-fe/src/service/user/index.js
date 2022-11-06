import axios from 'axios';

// axios.defaults.baseURL = '';
export const list = (page = 1, size = 20, keyword = '') =>
  axios.get('http://localhost:3001/user/list', {
    params: {
      page,
      size,
      keyword,
    },
  });

export const remove = (id) => {
  return axios.delete(`http://localhost:3001/user/${id}`);
};

export const add = (account, password, character) => {
  return axios.post(`http://localhost:3001/user/add`, {
    account,
    password,
    character,
  });
};

export const resetPassword = (id) => {
  return axios.post(`http://localhost:3001/user/reset/password`, {
    id,
  });
};

export const editCharacter = (characterId, userId) => {
  return axios.post(`http://localhost:3001/user/update/character`, {
    character: characterId,
    userId: userId,
  });
};

export const info = () => {
  return axios.get(`http://localhost:3001/user/info`);
};
