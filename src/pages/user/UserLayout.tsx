import React, { Key, ReactNode, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import AdminUserPage from "@pages/admin/AdminUserPage";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AppRoutes } from "@/AppRoutes";
import UserDataPage from "./UserDataPage";
import { ReactECharts } from "@components/echart";
import UserForm from "./UserForm";
import { HealthTAGFooter } from "@/components/Footer";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
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
  getItem("ข้อมูลของคุณ", AppRoutes.User.Data.absolute, <UserOutlined />),
  getItem("แบบสอบถาม", AppRoutes.User.Form.absolute, <DesktopOutlined />) /*
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),*/,
];

const UserLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  const navigate = useNavigate();

  const menuOnClickHandler: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          onClick={menuOnClickHandler}
          theme="dark"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout bg-gradient-primary-light-login">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px", background: "transparent" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>ผู้ใช้</Breadcrumb.Item>
            <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="bg-white rounded-xl p-6">
            <Routes location={location} key={location.pathname}>
              <Route
                path={AppRoutes.User.Data.route}
                element={<UserDataPage />}
              />
              <Route path={AppRoutes.User.Form.route} element={<UserForm />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "transparent" }}>
          <HealthTAGFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
