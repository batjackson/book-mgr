import axios from 'axios';

export const resetPassword = (password, oldPassword) => {
  return axios.post('http://localhost:3001/profile/update/password', {
    password,
    oldPassword
  })
}
