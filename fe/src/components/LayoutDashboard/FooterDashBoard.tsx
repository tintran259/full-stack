import { Footer } from "antd/es/layout/layout";

const FooterDashBoard: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      ©{new Date().getFullYear()} Created by TinLee
    </Footer>
  );
};

export default FooterDashBoard;
