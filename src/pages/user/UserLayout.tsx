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
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppRoutes } from "@/AppRoutes";
import UserDataPage from "./UserDataPage";
import { ReactECharts } from "@components/echart";

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
  getItem("ข้อมูลของคุณ", "1", <UserOutlined />),
  getItem("แบบสอบถาม", "2", <DesktopOutlined />) /*
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),*/,
];

const UserLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

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
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>ผู้ใช้</Breadcrumb.Item>
            <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="bg-white rounded-xl">
            <div className="p-6">
              <h3>นาย ปุณพจน์ พัฒนปรีชา</h3>
              <h4>MOCA</h4>
              <div className="card relative bg-slate-100 my-6">
                <ReactECharts
                  style={{ width: "1200px", height: "300px" }}
                  option={{
                    xAxis: {
                      type: "category",
                      boundaryGap: false,
                      data: ["Time 1", "Time 2", "Time 3", "Time 4", "Time 5"],
                    },
                    yAxis: {
                      type: "value",
                    },
                    series: [
                      {
                        data: [5, 6, 8, 10, 11],
                        type: "line",
                        areaStyle: {},
                      },
                    ],
                  }}
                ></ReactECharts>
              </div>

              <h4>Barthel index score</h4>
              <div className="card relative bg-slate-100 my-6">
                <ReactECharts
                  style={{ width: "1200px", height: "300px" }}
                  option={{
                    xAxis: {
                      type: "category",
                      boundaryGap: false,
                      data: ["Time 1", "Time 2", "Time 3", "Time 4", "Time 5"],
                    },
                    yAxis: {
                      type: "value",
                    },
                    series: [
                      {
                        data: [8, 14, 16, 17, 20],
                        type: "line",
                        color: "#77DD77",
                        areaStyle: {},
                      },
                    ],
                  }}
                ></ReactECharts>
              </div>

              <h4>ประวัติการตอบแบบสอบถาม</h4>
              <h5>จุดเริ่มต้น</h5>
              <div className="card my-3 bg-slate-100 flex flex-col gap-1 p-1">
                <div>ภาวะสมองเสื่อม (dementia) Yes</div>
                <div>ประวัติโรคหลอดเลือดสมอง (previous stroke) Yes</div>
                <div>โรคเบาหวาน (Diabetes mellitus) Yes</div>
                <div>การผ่าตัดหัวใจ (Cardiac surgery) Yes</div>
                <div>
                  ขนาดยา Benzodiazepine ก่อนผ่าตัด Oral benzodiazepine
                  premedication (total dose in mg) 5
                </div>
                <div>
                  ขนาดยา Benzodiazepine ระหว่างผ่าตัด Intravenous benzodiazepine
                  premedication and - intraoperative use (total dose in mg) 10
                </div>
                <div>การใช้ยา Dexmedetomidine Yes</div>
                <div>
                  ภาวะออกซิเจนต่ำระหว่างผ่าตัด (intraoperative desaturation) Yes
                </div>
                <div>
                  ภาวะความดันต่ำระหว่างผ่าตัด (intraoperative hypotension) Yes
                </div>
                <div>
                  การตรวจติดตามระดับออกซิเจนในสมองด้วย NIRS monitoring Yes{" "}
                </div>
                <div>
                  การตรวจติดตามความลึกการดมยาสลบโดยใช้ BIS monitoring Yes{" "}
                </div>
                <div>
                  ปริมาณเลือดที่เสีย (Intraoperative blood loss (mL)) 500{" "}
                </div>
                <div>
                  การได้รับเลือดในห้องผ่าตัด (Perioperative blood transfusion)
                  Yes{" "}
                </div>
                <div>
                  การได้รับเลือดในห้องผ่าตัด (Perioperative blood transfusion)
                  Yes{" "}
                </div>
                <div>ระยะเวลาการผ่าตัด Operative time (min) 30</div>
                <hr />
                <div>คะแนน MOCA test 5</div>
                <div>
                  ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 8
                </div>
              </div>
              <h5>Time 2</h5>
              <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
                <div>คะแนน MOCA test 6</div>
                <div>
                  ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 14
                </div>
              </div>
              <h5>Time 3</h5>
              <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
                <div>คะแนน MOCA test 8</div>
                <div>
                  ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 16
                </div>
              </div>
              <h5>Time 4</h5>
              <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
                <div>คะแนน MOCA test 10</div>
                <div>
                  ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 17
                </div>
              </div>
              <h5>Time 5</h5>
              <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
                <div>คะแนน MOCA test 11</div>
                <div>
                  ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 20
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Prototype HealthTAG 2023. Ant Design. Tailwind.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
