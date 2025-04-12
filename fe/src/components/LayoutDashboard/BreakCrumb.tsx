"use client";
import { Breadcrumb } from "antd";

const BreakCrumb = () => {
  return (
    <Breadcrumb className="bg-[#ccc]">
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreakCrumb;
