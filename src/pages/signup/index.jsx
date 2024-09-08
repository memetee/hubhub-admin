import React, { memo, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { LoginWrapper } from "./style";
import RegistryLoginInput from "components/registry_login_input";
import { userRegistry } from "fetch";
import { useNavigate } from "react-router-dom";
import {message} from 'antd';

const Login = memo(() => {
  const [opacity, setOpacity] = useState(0.3);
  const navigate = useNavigate();
  useEffect(() => {
    // 界面显示延迟
    setOpacity(1)
  }, [])

  // 提交注册
  const clickSubmit = (value) => {
    userRegistry(value).then(res => {
      message.success(res.message);
      navigate('/login', {replace: true})
    }).catch(err=>{})
  }
  return (
    <LoginWrapper opacity={opacity}>
      <div className="container">
        <h2 className="title">注册账号</h2>
        <RegistryLoginInput submitType="注册" clickSubmit={clickSubmit}></RegistryLoginInput>
        <Link className="to-login" to="/login">已注册？去登录</Link>
      </div>
    </LoginWrapper>
  );
});

export default Login;
