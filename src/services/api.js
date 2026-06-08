import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {},
});

// Adiciona o token em todas as requisições, se existir
api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData');
  if (userData) {
    const token = JSON.parse(userData).token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
