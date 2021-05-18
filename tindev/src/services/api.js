import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.106:3333' //ip do celular para pegar via wifi
});

export default api;
