import React, { useState } from "react";
import { Layout } from "antd";
import Guess from "../pages/guess";
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Guess></Guess>
    </Layout>
  );
}
