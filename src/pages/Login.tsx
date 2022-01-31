import { Card, Col, Layout, Row } from "antd";
import React, { FC } from "react";
import LoginForm from "../components/LoginForm";
import loginScss from "../scss/login.module.scss";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className={loginScss.centered}>
        <Col span={16}>
          <Card
            title="Login to event"
            extra={
              <a
                target="_blank"
                href="https://6102c79279ed680017482303.mockapi.io/users"
              >
                Account checked
              </a>
            }
          >
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
