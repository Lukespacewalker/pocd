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
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AppRoutes } from "AppRoutes";
import LoginLayout from "@pages/login/LoginLayout";
import AdminLayout from "@pages/admin/AdminLayout";
import UserLayout from "@pages/user/UserLayout";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={<Navigate to={AppRoutes.Login.Root} replace />}
      />
      <Route path={AppRoutes.Login.Layout.absolute} element={<LoginLayout />} />

      <Route path={AppRoutes.Admin.Layout.absolute} element={<AdminLayout />} />
      
      <Route path={AppRoutes.User.Layout.absolute} element={<UserLayout />} />
    </Routes>
  );
};

export default App;
