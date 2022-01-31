import { Button, Col, Form, Input } from "antd";
import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import rules from "../utils/rules";
import { LoginOutlined } from "@ant-design/icons";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.authReducer);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {login} = useActions();
  const onFinish = (values: any) => {
    login(username, password);
  };

  return (
    <>
      <Col span={24} offset={6}>
        {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}
      </Col>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[rules.required("Please input your username!")]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[rules.required("Please input your password!")]}
        >
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={'password'}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 10 }}>
          <Button
            icon={<LoginOutlined />}
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
