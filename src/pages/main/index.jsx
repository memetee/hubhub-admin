import React, { memo } from "react";
import { PageWrap } from "./style";
import MenuCpn from 'components/menu';
import { Outlet } from "react-router-dom";

const Home = memo(() => {
  return (
    <PageWrap>
      <MenuCpn />
      <Outlet />
    </PageWrap>
  );
});

export default Home;
