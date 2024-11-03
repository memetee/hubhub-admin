import React, { memo } from "react";
import { getStore } from "../util/localstorege";
import { Navigate } from "react-router-dom";

const AuthRoute = memo(({children}) => {
  // 其他组件需要判断token
  const tokenStr = getStore("token");

  // 存在token跳转到指定页面或者首页，不存在token跳转到登录页
  if (tokenStr) {
    return children || <Navigate to="/admin/home"></Navigate> ;
  } else {
    return <Navigate to="/admin/login"></Navigate>
  }
});

export default AuthRoute;
