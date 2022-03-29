import React from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  AppleOutlined,
  AndroidOutlined,
  UserOutlined,
  UserSwitchOutlined,
  DownCircleOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";
import CustomLink from "./CustomLink";
import { Layout, Menu } from "antd";

const link = [
  {
    to: "/",
    name: "DashBorad",
    icon: <HomeOutlined />,
  },
  {
    to: "/order",
    name: "Oder",
    icon: <ShoppingCartOutlined />,
  },
  {
    to: "/product",
    name: "Product",
    icon: <AppleOutlined />,
  },
  {
    to: "/categories",
    name: "Categories",
    icon: <AndroidOutlined />,
  },
  {
    to: "costomer",
    name: "Costomer",
    icon: <UserOutlined />,
  },
  {
    to: "/analytics",
    name: "Analytics",
    icon: <UserSwitchOutlined />,
  },
  {
    to: "/discount",
    name: "Discount",
    icon: <DownCircleOutlined />,
  },
  {
    to: "/inventory",
    name: "Inventory",
    icon: <ShrinkOutlined />,
  },
];

const { Sider } = Layout;
function SideBar() {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
        boxShadow: "1px 1px 7px",
      }}
    >
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
        {link.map((link, index) => (
          <CustomLink key={index} to={link.to} icon={link.icon}>
            {link.name}
          </CustomLink>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideBar;
