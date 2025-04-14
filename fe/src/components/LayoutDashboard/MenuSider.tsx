"use client";
import NAME_ROUTE from "@/routes";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

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
const MenuSider = () => {
  const router = useRouter();
  const { MANAGER_USERS_PAGE, DASHBOARD_PAGE } = NAME_ROUTE;
  const items: MenuItem[] = [
    getItem("Dashboard", DASHBOARD_PAGE, <PieChartOutlined />),
    getItem("Manager Users", MANAGER_USERS_PAGE, <DesktopOutlined />),
  ];

  let path = "";
  const onClick: MenuProps["onClick"] = (e) => {
    const { key } = e;

    if (key !== path) {
      path = key as string;
      router.push(path);
    }
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[DASHBOARD_PAGE]}
      mode="inline"
      items={items}
      onClick={onClick}
    />
  );
};

export default MenuSider;
