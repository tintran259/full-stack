"use client";

import { theme } from "antd";
import { Header } from "antd/es/layout/layout";
import DropdownComponent from "@/components/LayoutDashboard/Dropdown";

const HeaderDashBoard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{ background: colorBgContainer, padding: "0 16px" }}
      className="flex justify-end pr-1"
    >
      <DropdownComponent />
    </Header>
  );
};

export default HeaderDashBoard;
