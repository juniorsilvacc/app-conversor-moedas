/* eslint-disable prettier/prettier */
import axios from 'axios';

//https://economia.awesomeapi.com.br/json/all/USD-BRL

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/all',
});

export default api;