import axios from 'axios';

export const simpleUpdate = (url, object) => {
  const response = axios.put(url, object);
  return response;
}
