import axios from 'axios';

export const api = axios.create({
     baseURL: 'http://localhost:3001',
          headers: {
         'Content-Type': 'application/json', // 🔹 garante que o backend receba JSON
     },

});