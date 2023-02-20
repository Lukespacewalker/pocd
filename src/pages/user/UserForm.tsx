import { AppRoutes } from "@/AppRoutes";
import { Form, Input, Button, Checkbox } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    navigate(AppRoutes.User.Data.absolute);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Title>บันทึกข้อมูล</Title>
      <div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="วันที่"
            name="date"
            rules={[{ required: true, message: "ใส่วันที่" }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            label="ผลการวัดความสามารถในการดำเนินชีวิตประจำวัน (Barthel Activity of Daily Living Index:ADL)"
            name="barthalIndexScore"
            rules={[{ required: true, message: "ใส่คะแนน", min: 0, max: 100 }]}
          >
            <Input type="number"/>
          </Form.Item>
          <Form.Item
            label="ผลการวัด Montreal Cognitive Assessment (MoCA)"
            name="moca"
            rules={[{ required: true, message: "ใส่คะแนน" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              บันทึก
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
