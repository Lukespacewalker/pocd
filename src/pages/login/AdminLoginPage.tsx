import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { AppRoutes } from "@/AppRoutes";

const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    navigate(AppRoutes.Admin.UserManager.Root.absolute);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-screen h-screen bg-gradient-primary-light-login flex items-center justify-center">
      <div className="card p-3">
        <h5 className="text-center mb-3">ผู้ดูแลระบบ</h5>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="ผู้ใช้"
            name="username"
            rules={[{ required: true, message: "ใส่ ผู้ใช้" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="รหัสผ่าน"
            name="password"
            rules={[{ required: true, message: "ใส่ รหัสผ่าน" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>จำการเข้าระบบไว้</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              เข้าสู่ระบบ
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
