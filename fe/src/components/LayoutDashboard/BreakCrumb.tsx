"use client";

import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

const BreakCrumb = () => {
  const pathname = usePathname();
  const pathList = pathname.split("/").filter(Boolean); // Remove empty strings

  const items = pathList.map((item, index) => {
    return {
      title: item,
    };
  });

  return (
    <Breadcrumb
      style={{
        padding: "16px 16px",
        backgroundColor: "#ccc",
        textTransform: "capitalize",
      }}
      items={items}
    />
  );
};

export default BreakCrumb;
