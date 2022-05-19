import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import { Layout } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import SignIn from "../pages/Admin/SignIn";
import "./LayoutAdmin.scss";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const user = null;
  /*const Location useLocation();"*/
  if (!user) {
    return (
      <>
        <SignIn />
        <Routes>
          <Route path="/admin/login/*" element={<SignIn />} />
        </Routes>
        {/*<Navigate to-{"/admin/Login"}state-{{from:Location}}replace/>*/}
      </>
    );
  }
  return (
    <Layout>
      <MenuSider Collapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin_header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin_content">{children}</Content>
        <Footer className="layout-admin_footer">
          <GithubOutlined style={{ fontSize: "17px" }} />
          Maria Antonia
        </Footer>
      </Layout>
    </Layout>
  );
}
