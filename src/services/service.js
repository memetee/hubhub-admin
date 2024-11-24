import axios from 'axios';
import { getStore } from '../util/localstorege';
import {message} from 'antd';
let baseURL = '';
if (process.env.NODE_ENV === 'dev') {
  baseURL = 'http://localhost:8887/api'
} else if (process.env.NODE_ENV === 'uat') {
  baseURL = 'http://www.yunduanhub.com/api'
} else {
  baseURL = 'https://www.yunduanhub.com/api'
}
const service = axios.create({
  baseURL,
  timeout: 3 * 1000
})
console.log('看看咯', service)
service.interceptors.request.use(config => {
  config.headers = {
    Authorization: getStore('token'),
  }
  return config;
}, error => {
  Promise.reject(error);
})

service.interceptors.response.use(response => {
  return response.data;
}, error => {

  // token验证失败
  if (error.response.status === 401) {
    window.location.href = '/admin/login';
    return;
  }

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