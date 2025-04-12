// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/plant', // ya jo bhi tera backend ka URL hai
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
