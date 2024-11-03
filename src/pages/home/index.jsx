import React, { memo, useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import homeLogo from '../../assets/img/home_logo.png'
const Login = memo(() => {
  const [opacity, setOpacity] = useState(0.3);
  return (
    <HomeWrapper>
      <header className="header"></header>
      <main className="main">
        <img className="logo" src={homeLogo} alt=""  width={400}/>
      </main>
      <footer className="footer">
        <p>版权所有 © 2024 yunduanhub | <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024323419号</a></p>
      </footer>
    </HomeWrapper>
  );
});

export default Login;
