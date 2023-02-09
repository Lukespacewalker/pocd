import { AppRoutes } from "AppRoutes";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AdminLoginPage from "./AdminLoginPage";
import LoginPageSelector from "./LoginPageSelector";
import UserLoginPage from "./UserLoginPage";

const LoginLayout: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path=""
        element={<Navigate to={AppRoutes.Login.Selector.route} replace />}
      />
      <Route
        path={AppRoutes.Login.Selector.route}
        element={<LoginPageSelector />}
      />
      <Route path={AppRoutes.Login.Admin.route} element={<AdminLoginPage />} />
      <Route path={AppRoutes.Login.User.route} element={<UserLoginPage />} />
    </Routes>
  );
};

export default LoginLayout;
