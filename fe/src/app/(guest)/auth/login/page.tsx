"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import FormCustom from "@/components/Auth/Form";
import { useRouter } from "next/navigation";
import NAME_ROUTE from "@/routes";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { REGISTER_PAGE } = NAME_ROUTE;
  const onFinish = (values: FieldType) => {
    // login
    if (values.username && values.password) {
      // login success
      router.push("/dashboard");
    }
  };
  return (
    <FormCustom onFinish={onFinish}>
      <p className="w-full flex justify-center items-center pb-16">Logo</p>
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
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

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <a className="flex justify-end" href={REGISTER_PAGE}>
        Register now?
      </a>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" className="w-full mt-6">
          Submit
        </Button>
      </Form.Item>
    </FormCustom>
  );
};

export default LoginPage;
