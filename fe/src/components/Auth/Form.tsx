"use client";
import { Form } from "antd";
import { signIn } from "next-auth/react";

const FormCustom = ({
  children,
  onFinish,
  action,
}: {
  children: React.ReactNode;
  onFinish?: (value: { [key: string]: any }) => void;
  action?: () => void;
}) => {
  const onFinishFailed = () => {};
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-white">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 400, width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {children}
      </Form>
    </div>
  );
};

export default FormCustom;
