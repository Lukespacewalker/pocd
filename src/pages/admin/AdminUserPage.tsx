import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Breadcrumb, Layout, Menu, theme, Space, Table, Tag } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/AppRoutes";
import Title from "antd/es/typography/Title";
/* TABLE */
interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
}

const data: DataType[] = [
  {
    key: "1",
    name: "นาย ธนาธิป ตรีทรัพย์",
    age: 68,
    tags: ["เสี่ยงสูง", "ใกล้วันนัด"],
  },
  {
    key: "2",
    name: "นาง ธนวรรณ ก้องเกษมทรัพย์ ",
    age: 65,
    tags: ["เสี่ยงต่ำ"],
  },
  {
    key: "3",
    name: "นาย ปุณพจน์ พัฒนปรีชา",
    age: 76,
    tags: ["เสี่ยงต่ำ", "ใกล้วันนัด"],
  },
];

const AdminUserPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation("userPage");

  const navigate = useNavigate();

  const columns: ColumnsType<DataType> = [
    {
      title: "ชื่อ-นามสกุล",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "อายุ",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "ป้าย",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <React.Fragment>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "เสี่ยงสูง") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </React.Fragment>
      ),
    },
    {
      title: "กระทำ",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() =>
              navigate(
                AppRoutes.Admin.UserManager.Root.absolute + "/" + record.key
              )
            }
          >
            ดูข้อมูล
          </a>
          <a>แก้ไข</a>
          <a className="text-red-500">ลบ</a>
        </Space>
      ),
    },
  ];
  /*<a>ดูข้อมูล {record.name}</a> */
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <main>
      <Title>รายชื่อผู้ป่วย</Title>
      <Table columns={columns} dataSource={data} />
    </main>
  );
};

export default AdminUserPage;
