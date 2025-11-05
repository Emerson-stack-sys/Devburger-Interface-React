import axios from 'axios';

export const api = axios.create({
     baseURL: 'http://localhost:3001',
          headers: {
         'Content-Type': 'application/json', // 🔹 garante que o backend receba JSON
     },

});

// Adiciona o token em todas as requisições, se existir
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
