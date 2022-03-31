import {
  AndroidOutlined,
  AppleOutlined,
  DownCircleOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ShrinkOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Avatar, Layout } from "antd";
import React from "react";
import CustomLink from "./CustomLink";

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
        padding: "10px 0",
        bottom: 0,
        zIndex: 100,
        boxShadow: "1px 1px 7px",
        background: "#fff",
      }}
    >
      <Avatar
        style={{
          display: "block",
          textAlign: "center",
          cursor: "pointer",
          margin: "auto",
        }}
        size="large"
        shape="square"
      >
        Company
      </Avatar>
      <ul className="nav_list">
        {link.map((link, index) => (
          <CustomLink key={index} index={index} to={link.to} icon={link.icon}>
            {link.name}
          </CustomLink>
        ))}
      </ul>
    </Sider>
  );
}

export default SideBar;
