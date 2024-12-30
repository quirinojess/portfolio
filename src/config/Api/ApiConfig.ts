import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use o prefixo correto
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
