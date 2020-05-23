import React, { useState } from "react";
import "./App.css";
import { Layout, Menu, Drawer, Button } from "antd";
import {MenuFoldOutlined , MenuUnfoldOutlined} from "@ant-design/icons"
const { Header, Sider, Footer, Content } = Layout;
function App() {
  const [visible,setVisible] =useState(true);
  function onToggle (){
    setVisible(prev => {
      console.log(prev)
      return !prev})
  }
  return (
    <Layout>
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' , background:"none" }}>
        <Button onClick={onToggle}>
          {visible? <MenuFoldOutlined  />: <MenuUnfoldOutlined />}
        </Button>
      </Header>
      </Layout>
      <Layout >
      <Drawer
          title="Basic Drawer"
          placement="left"
          closable={true}
          onClose={onToggle}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

        <Content style={{
              marginTop: "60px",
              height: "100vh",
              backgroundColor: "#00009",
            }} >sldhfjk</Content>
      </Layout>
      <Footer style={{backgroundColor:"black"}}> This is the footer</Footer>
    </Layout>
  );
}

export default App;
