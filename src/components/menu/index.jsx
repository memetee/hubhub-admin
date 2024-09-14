import React, { memo, useState,  } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { MenuWrap } from "./style";
import { useNavigate, useLocation } from 'react-router-dom';
const items = [
  { key: "/home", icon: <PieChartOutlined />, label: "首页" },
  { key: "/carousel", icon: <DesktopOutlined />, label: "轮播图管理" },
  { key: "/dynamic", icon: <ContainerOutlined />, label: "动态管理" },
  { key: "/roles", icon: <MailOutlined />, label: "角色管理" },
  {
    key: "/admin",
    icon: <AppstoreOutlined />,
    label: "管理员菜单",
    children: [
      { key: "/tasks", label: "任务管理" },
      { key: "/option10", label: "Option 10" },
    ],
  },
];
const MenuCpn = memo((props) => {
  const [collapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  const handleMenuClick = (e) => {
    navigate(e.key, {replace: true});
  };
  return (
    <MenuWrap>
      <Menu
        defaultSelectedKeys={[location.pathname]}
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
