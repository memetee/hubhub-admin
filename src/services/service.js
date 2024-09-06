import axios from 'axios';
import { getStore } from '../util/localstorege';
import {message} from 'antd';
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3 * 1000
})
service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data);
  config.headers = {
    Authorization: getStore('token'),
    'Content-Type': 'application/json'
  }
  return config;
}, error => {
  Promise.reject(error);
})

service.interceptors.response.use(response => {
  return response.data;
}, error => {
  if (error && error.response) {
    message.error(error.response.data.message);
  } else {
    if (JSON.stringify(error).includes('timeout')) {
      message.error('请求超时～');
    }
  }
  return Promise.resolve(error.response.data);
})


export default service;