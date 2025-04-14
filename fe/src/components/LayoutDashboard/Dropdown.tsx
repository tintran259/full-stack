import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import NAME_ROUTE from "@/routes";

const DropdownComponent: React.FC = () => {
  const { LOGIN_PAGE } = NAME_ROUTE;
  const items: MenuProps["items"] = [
    {
      label: <Link href={LOGIN_PAGE}>Log out</Link>,
      key: "3",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>tintran2591999@gmail.com</Space>
      </a>
    </Dropdown>
  );
};

export default DropdownComponent;
