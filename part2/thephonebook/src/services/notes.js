// jshint esversion:6

import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(res => res.data);
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(res => res.data);
}

const update = (newObject, id) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(res => res.data);
}


const deleteNote = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(res => res.data); 
}

export default { getAll, create, update, deleteNote }