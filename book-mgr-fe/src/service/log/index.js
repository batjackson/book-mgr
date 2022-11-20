import axios from 'axios'

export const list = (page, size) => {
  return axios.get('http://localhost:3001/log/list', {
    params: {
      page,
      size,
    },
  });
}


export const remove = (id) => {
  return axios.post(`http://localhost:3001/log/delete`, {
    id
  })
}
