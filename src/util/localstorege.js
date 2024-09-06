const getStore = function (key) {
  if(!key) return '';
  return window.localStorage.getItem(key);
}

const setStore = function(key, content) {
  if (!key) return new Error('localStore的key必须有值')
  window.localStorage.setItem(key, content);
}

export {
  getStore,
  setStore
}