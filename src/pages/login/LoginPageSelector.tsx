import { AppRoutes } from "AppRoutes";
import { useNavigate } from "react-router-dom";

const LoginPageSelector: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-slate-100 flex items-center justify-center">
      <div className="card flex flex-row">
        <h3
          className="btn p-12"
          onClick={() => navigate(AppRoutes.Login.User.absolute)}
        >
          ผู้ป่วย
        </h3>
        <div className="bg-slate-400 w-[5px]"></div>
        <h3
          className="btn p-12"
          onClick={() => navigate(AppRoutes.Login.Admin.absolute)}
        >
          ผู้ดูแลระบบ
        </h3>
      </div>
    </div>
  );
};

export default LoginPageSelector;
