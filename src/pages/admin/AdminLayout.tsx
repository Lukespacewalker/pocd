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
import AdminUserDataPage from "./AdminUserDataPage";
import AdminInfoPage from "./AdminInfoPage";

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
  getItem(
    "ผู้ป่วย",
    AppRoutes.Admin.UserManager.Root.absolute,
    <UserOutlined />
  ),
  getItem(
    "เนื้อหา",
    AppRoutes.Admin.InfoManager.Root.absolute,
    <FileOutlined />
  ),
  /*
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
  getItem("Files", "9", <FileOutlined />),*/
];

const AdminLayout: React.FC = () => {
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
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>ผู้ดูแลระบบ</Breadcrumb.Item>
            <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="bg-white rounded-xl">
            <Routes location={location} key={location.pathname}>
              <Route
                path={AppRoutes.Admin.UserManager.Root.route}
                element={<AdminUserPage />}
              />
              <Route
                path={AppRoutes.Admin.InfoManager.Root.route}
                element={<AdminInfoPage />}
              />
              <Route
                path={AppRoutes.Admin.UserManager.Layout.route}
                element={<AdminUserDataPage />}
              />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Prototype HealthTAG 2023. Ant Design. Tailwind.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
