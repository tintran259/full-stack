"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import FormCustom from "@/components/Auth/Form";
// others
import NAME_ROUTE from "@/routes";

type FieldType = {
  username?: string;
  password?: string;
  name?: string;
};

const App: React.FC = () => {
  const { LOGIN_PAGE } = NAME_ROUTE;
  const onFinish = (values: FieldType) => {
    console.log("Runnn onFinish register", values);
  };
  return (
    <FormCustom onFinish={onFinish}>
      <p className="w-full flex justify-center items-center pb-16">
        Logo Register
      </p>
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <a className="flex justify-end" href={LOGIN_PAGE}>
        Login now?
      </a>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" className="w-full mt-8">
          Submit
        </Button>
      </Form.Item>
    </FormCustom>
  );
};

export default App;
