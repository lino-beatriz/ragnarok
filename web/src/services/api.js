import axios from 'axios';

// Definindo a URL base da API
const api = axios.create({ baseURL: 'http://localhost:3333' });

export default api;