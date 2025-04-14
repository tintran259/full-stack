import React from "react";
// components
import HeaderDashBoard from "@/components/LayoutDashboard/HeaderDashBoard";
import FooterDashBoard from "@/components/LayoutDashboard/FooterDashBoard";
import BreakCrumb from "@/components/LayoutDashboard/BreakCrumb";
import SiderDashBoard from "@/components/LayoutDashboard/SiderDashBoard";
import ContentDashBoard from "@/components/LayoutDashboard/ContentDashBoard";
import MenuSider from "@/components/LayoutDashboard/MenuSider";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <SiderDashBoard>
        <div className="demo-logo-vertical" />
        <MenuSider />
      </SiderDashBoard>
      <div style={{ width: "100%", background: "#fff" }}>
        <HeaderDashBoard />
        <BreakCrumb />
        <ContentDashBoard>{children}</ContentDashBoard>
        <FooterDashBoard />
      </div>
    </div>
  );
};

export default LayoutDashboard;
