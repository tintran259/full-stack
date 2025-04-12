import { Content } from "antd/es/layout/layout";

const ContentDashBoard = ({ children }: { children: React.ReactNode }) => {
  return <Content className="p-4 bg-[#fff]">{children}</Content>;
};

export default ContentDashBoard;
