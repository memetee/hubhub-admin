import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { LoginWrapper } from "./style";
import RegistryLoginInput from "components/registry_login_input";
import { userLogin } from "../../services/fetch";
import { setStore } from "../../util/localstorege";
const Login = memo(() => {
  const [opacity, setOpacity] = useState(0.3);
  const navigate = useNavigate();
  useEffect(() => {
    setOpacity(1)
  }, [])
  const clickSubmit = function (value) {
    userLogin(value).then(res => {
      // 设置token
      setStore('token', res.token);
      navigate('/home', {replace: true});
    }).catch(err => {})
  }
  return (
    <LoginWrapper opacity={opacity}>
      <div className="container">
        <h2 className="title">管理员登录</h2>
        <RegistryLoginInput submitType="登录" clickSubmit={clickSubmit}></RegistryLoginInput>
        <Link className="to-signup" to="/signup" state={{ some: "value" }} >没有账号？去注册</Link>
      </div>
    </LoginWrapper>
  );
});

export default Login;
