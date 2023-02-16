import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    //navigate(AppRoutes.User.Root);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h3>บันทึกข้อมูลก่อนผ่าตัด</h3>
      <div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="ผลการวัดความสามารถในการดำเนินชีวิตประจำวัน (Barthel Activity of Daily Living Index:ADL)"
            name="barthalIndexScore"
            rules={[{ required: true, message: "ใส่คะแนน", min: 0, max: 100 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ผลการวัด Montreal Cognitive Assessment (MoCA)"
            name="moca"
            rules={[{ required: true, message: "ใส่คะแนน" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
