"use client";

import { theme } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderDashBoard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <Header style={{ padding: 0, background: colorBgContainer }} />;
};

export default HeaderDashBoard;
