import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Breadcrumb, Layout, Menu, theme, Space, Table, Tag } from "antd";
import { useTranslation } from "react-i18next";
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
    name: "นาย กัญชา ยาวิเศษ",
    age: 68,
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "นาง กัญชา เพื่อสันทนาการ",
    age: 65,
    tags: ["loser"],
  },
  {
    key: "3",
    name: "นางสาว กัญชา เงินไหลมา",
    age: 76,
    tags: ["cool", "teacher"],
  },
];

const UserPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation("userPage");

  const columns: ColumnsType<DataType> = [
    {
      title: t("name"),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("age"),
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <React.Fragment>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return <Table columns={columns} dataSource={data} />;
};

export default UserPage;
