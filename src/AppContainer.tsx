import { ConfigProvider } from "antd";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

const AppContainer: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(100 116 139)",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default AppContainer;
