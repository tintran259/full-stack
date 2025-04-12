import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
// components
import HeaderDashBoard from "@/components/LayoutDashboard/HeaderDashBoard";
import FooterDashBoard from "@/components/LayoutDashboard/FooterDashBoard";
import BreakCrumb from "@/components/LayoutDashboard/BreakCrumb";
import SiderDashBoard from "@/components/LayoutDashboard/SiderDashBoard";
import ContentDashBoard from "@/components/LayoutDashboard/ContentDashBoard";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderDashBoard>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </SiderDashBoard>
      <Layout>
        <HeaderDashBoard />
        <ContentDashBoard>
          <BreakCrumb />
          {children}
        </ContentDashBoard>
        <FooterDashBoard />
      </Layout>
    </Layout>
  );
};

export default LayoutDashboard;
