import {
  BellOutlined,
  CoffeeOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Input, Menu, Space } from "antd";
import React from "react";
const { Search } = Input;

function Header() {
  const onSearch = (value) => console.log(value);

  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  const menuAcc = (
    <Menu>
      <Menu.Item key="1">
        <InfoCircleOutlined />
        Information
      </Menu.Item>
      <Menu.Item key="2">
        <CoffeeOutlined />
        Help
      </Menu.Item>
      <Menu.Item key="3">
        <LogoutOutlined />
        Log out
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <div className="header__search">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Space>
      </div>
      <div className="header__fnc">
        <div className="header__fnc__drop">
          <Space direction="vertical">
            <Space wrap>
              <Dropdown overlay={menuAcc} placement="bottom">
                <Avatar
                  style={{
                    padding: "10px",
                    borderRadius: "50%",
                    background: "orange",
                    verticalAlign: "middle",
                    textAlign: "center",
                  }}
                  size="middle"
                >
                  U
                </Avatar>
              </Dropdown>
            </Space>
          </Space>
        </div>
        <div className="header__fnc__drop">
          <Space direction="vertical">
            <Space wrap>
              <Dropdown overlay={menu} placement="bottom">
                <BellOutlined size="xl" />
              </Dropdown>
            </Space>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Header;
