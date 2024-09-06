import service from "./service";

// 用户这册
export function userRegistry(payload) {
  return service.post('/user', payload).then(res => {
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  }).catch(err => {
    return Promise.reject(err);
  })
}

// 用户登录
export function userLogin(payload) {
  return service.post('/login', payload).then(res => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(res);
  }).catch(err => {
    return Promise.reject(err);
  })
}
// 获取首页信息
export function getHomeInfo() {
  return service.get('/adminHomeInfo').then(res => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(res.data);
  }).catch(err => {
    return Promise.reject(err);
  })
}