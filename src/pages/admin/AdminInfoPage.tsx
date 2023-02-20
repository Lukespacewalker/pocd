import { ReactECharts } from "@components/echart";
import { useEffect, useState } from "react";
import { Timeline, List, Typography, Card } from "antd";

const { Title } = Typography;

const AdminInfoPage: React.FC = () => {
  return (
    <main className="p-3">
      <Title>สื่อการเรียนรู้</Title>
      <div className="flex gap-3 flex-wrap">
        <Card
          title="ภาวะการสูญเสียหน้าที่ด้านการรับรู้การเข้าใจหลังผ่าตัด คืออะไร"
          bordered={false}
        >
          <p>
            ภาวะการสูญเสียหน้าที่ด้านการรับรู้การเข้าใจหลังผ่าตัด (Postoperative
            Cognitive Dysfunction; POCD) เป็นภาวะ
            ที่พบความผิดปกติของความสามารถในการรับรู้และเข้าใจ อย่างน้อย 1
            ด้านที่เกิดขึ้นใหม่ภายหลังการผ่าตัด1 โดยภาวะ
            นี้ถูกกล่าวถึงครั้งแรกเมื่อปี ค.ศ. 1995 โดย Bedford ...
          </p>
        </Card>

        <Card title="ภาวะสับสน ของผู้สูงวัย" bordered={false}>
          <p>
            อาการผิดปกตินี้เรียกว่า ภาวะสับสนเฉียบพลันในผู้สูงอายุ (Delirium)
            เป็นความผิดปกติทางระบบประสาทที่ส่งผลให้เกิดการเปลี่ยนแปลงระดับความรู้สึกตัว
            ระดับความรู้คิดและความสามารถของสมองโดยรวมอย่างเฉียบพลัน
            ผู้สูงอายุมักไม่ให้ความสนใจกับการตอบคำถาม
            ถูกเบี่ยงเบนความสนใจได้ง่าย อาจจะวุ่นวายหรือซึมหลับมากก็ได้ ...
          </p>
        </Card>
      </div>
    </main>
  );
};

export default AdminInfoPage;
