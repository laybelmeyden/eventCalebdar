import { LoginOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { FC } from "react";
import rules from "../utils/rules";
import scssStyle from "../scss/main.module.scss";
const EventForm: FC = () => {
  const { Option } = Select;
  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
      <Form.Item
        label="Event name"
        name="description"
        rules={[rules.required("Please input your description!")]}
        className={scssStyle.left}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required("Please input your date!")]}
        className={scssStyle.left}
      >
        <DatePicker className={scssStyle.w100}/>
      </Form.Item>
      <Form.Item
        label="Event guest"
        name="guest"
        rules={[rules.required("Please input your date!")]}
        className={scssStyle.left}
      >
        <Select
        className={scssStyle.w100}
          defaultValue="disabled"
        >
          <Option value="disabled" disabled>
            Select u date
          </Option>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
        <Button icon={<LoginOutlined />} type="primary" htmlType="submit">
          Add event
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
