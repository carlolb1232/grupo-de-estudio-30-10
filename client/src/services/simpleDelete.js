import axios from 'axios';

export const simpleDelete = (id) => {
  const response = axios.delete(`http://localhost:8080/api/travels/${id}`);
  return response
}