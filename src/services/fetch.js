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
  return service.get('/admin-home').then(res => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(res.data);
  }).catch(err => {
    return Promise.reject(err);
  })
}

// 获取首页信息
export function getBannerInfo() {
  return service.get('/admin-banner').then(res => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(res.data);
  }).catch(err => {
    return Promise.reject(err);
  })
}
export function uploadBanner(files, id) {
  const formData = new FormData();

  // 使用 'picture' 作为字段名
  for (let i = 0; i < files.length; i++) {
    formData.append('picture', files[i]);
  }

  return service.post('/banner/update/'+id, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  }).then(res => {
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  }).catch(err => {
    return Promise.reject(err);
  });
}

// 删除轮播图
export function deleteBanner(id) {
  return service.delete('/banner/delete/' + id).then(res => {
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  }).catch(err => {
    return Promise.reject(err);
  })
}
// 删除轮播图
export function addBanner(files) {
  const formData = new FormData();

  // 使用 'picture' 作为字段名
  for (let i = 0; i < files.length; i++) {
    formData.append('picture', files[i]);
  }

  return service.post('/banner', formData, {
    headers: { "Content-Type": "multipart/form-data" }
  }).then(res => {
    if (res.status === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  }).catch(err => {
    return Promise.reject(err);
  });
}