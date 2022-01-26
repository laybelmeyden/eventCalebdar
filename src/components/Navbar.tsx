import { Layout, Menu } from "antd";
import React, { FC } from "react";
import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const isAuth = useTypedSelector(state => state.authReducer.isAuth)
  return (
    <Layout className="layout">
      <Header>
          {isAuth ? (
               <Menu
               theme="dark"
               mode="horizontal"
               selectable={false}
               style={{ textAlign: "center" }}
             >
               <Menu.Item key={1} onClick={() => navigate(RouteNames.EVENT)}>
                 Event
               </Menu.Item>
             </Menu>
          ) : (
            <>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              style={{ textAlign: "center", justifyContent: 'end' }}
            >
              <Menu.Item key={1} onClick={() => navigate(RouteNames.LOGIN)}>
                Login
              </Menu.Item>
              <Menu.Item key={2} onClick={() => navigate(RouteNames.LOGIN)}>
                Login
              </Menu.Item>
            </Menu>
            </>
          )}
      </Header>
    </Layout>
  );
};

export default Navbar;
