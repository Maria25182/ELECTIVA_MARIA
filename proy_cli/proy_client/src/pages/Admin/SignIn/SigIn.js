import React from "react";
import { Layout, Tabs, Button } from "antd";
import Login from "../../../components/AdminComponents/Login";
import Register from "../../../components/AdminComponents/Register";
import Logo from "../../../assets/img/png/logo.png";
import "./SigIn.scss";
import { GithubOutlined } from "@ant-design/icons";

export default function SignIn() {
  const { Content, Footer } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Iniciar sesión</span>} key="1">
              <Login />
            </TabPane>
            <TabPane tab={<span>Registro</span>} key="2">
              <Register />
            </TabPane>
          </Tabs>
        </div>
      </Content>
      <Footer className="sign-in__git">
        <Button className="sign-in__gitt"
          type="link"
          onClick={() => console.log("Github")}
          href="https://github.com/Maria25182"
        >
          <GithubOutlined style={{ fontSize: "80px" }} /> 
          Maria Cardona
        </Button>
      </Footer>
    </Layout>
  );
}
