import axios from "axios";

export const add = (title) => {
  return axios.post('http://localhost:3001/book-classify/add', {
    title

  })

}


export const list = () => {
  return axios.get('http://localhost:3001/book-classify/list');
};


export const remove = (id) => {
  return axios.delete(`http://localhost:3001/book-classify/${id}`);
};
export const updateTitle = (id,title) => {
  return axios.post(`http://localhost:3001/book-classify/update/title`, {
    id,title
  });
};
