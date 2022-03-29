import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./component/SideBar";
import routes from "./routers/route";
const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout
        hasSider
        style={{
          posision: "relative",
          height: "100vh",
        }}
      >
        <SideBar />
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
            background: "#f9f9f9",
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <Header className="site-layout-background" style={{ padding: 0 }}>
            Header
          </Header>
          <Content
            style={{
              overflow: "initial",
              backgroundColor: "#f9f9f9",
              padding: "10px",
            }}
          >
            <Routes>
              {routes.map((data, index) => (
                <Route key={index} path={data.path} element={data.element} />
              ))}
            </Routes>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
