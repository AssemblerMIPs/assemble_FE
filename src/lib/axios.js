import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'access-control-allow-methods': 'PUT,GET,HEAD,POST,DELETE,OPTIONS',
    'access-control-allow-origin': 'https://hci-assemble.kro.kr',
  },
});
