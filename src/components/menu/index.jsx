import React, { memo, useState,  } from "react";
import {
  AppstoreOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { MenuWrap } from "./style";
import { useNavigate, useLocation } from 'react-router-dom';
const items = [
  { key: "home", icon: <PieChartOutlined />, label: "首页" },
  { key: "carousel", icon: <DesktopOutlined />, label: "轮播图管理" },
  // { key: "/dynamic", icon: <ContainerOutlined />, label: "动态管理" },
  // { key: "/roles", icon: <MailOutlined />, label: "角色管理" },
  {
    key: "menu",
    icon: <AppstoreOutlined />,
    label: "管理员菜单",
    children: [
      { key: "menu/task-manage", label: "任务管理" },
      // { key: "/admin-menu/task-manage/option10", label: "Option 10" },
    ],
  },
];
const MenuCpn = memo((props) => {
  const [collapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  let currentMenu = location.pathname;
  currentMenu = currentMenu.split('/');
  currentMenu.splice(0, 2);
  currentMenu = currentMenu.join('/')
  // 菜单点击处理函数
  const handleMenuClick = (e) => {
    navigate(e.key, { replace: true });
  };
  return (
    <MenuWrap>
      <Menu
        selectedKeys={[currentMenu]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleMenuClick}
      />
    </MenuWrap>
  );
});
export default MenuCpn;
