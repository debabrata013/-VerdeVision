// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5003/', // ya jo bhi tera backend ka URL hai
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
