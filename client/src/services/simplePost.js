import axios from 'axios';

export const simplePost = (url, travel) => {
  const response = axios.post(url, travel)
  return response
}