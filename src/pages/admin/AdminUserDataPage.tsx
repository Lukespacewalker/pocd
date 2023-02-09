import { ReactECharts } from "components/echart";

const AdminUserDataPage: React.FC = () => {
  return (
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
              data: ["ก่อนผ่าตัด", "1 สัปดาห์", "1 เดือน", "3 เดือน", "1 ปี"],
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
              data: ["ก่อนผ่าตัด", "1 สัปดาห์", "1 เดือน", "3 เดือน", "1 ปี"],
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
      <h5>ก่อนผ่าตัด</h5>
      <div className="card my-3 bg-slate-100 flex flex-col gap-1 p-1">
        <div>ภาวะสมองเสื่อม (dementia) Yes</div>
        <div>ประวัติโรคหลอดเลือดสมอง (previous stroke) Yes</div>
        <div>โรคเบาหวาน (Diabetes mellitus) Yes</div>
        <div>การผ่าตัดหัวใจ (Cardiac surgery) Yes</div>
        <div>
          ขนาดยา Benzodiazepine ก่อนผ่าตัด Oral benzodiazepine premedication
          (total dose in mg) 5
        </div>
        <div>
          ขนาดยา Benzodiazepine ระหว่างผ่าตัด Intravenous benzodiazepine
          premedication and - intraoperative use (total dose in mg) 10
        </div>
        <div>การใช้ยา Dexmedetomidine Yes</div>
        <div>
          ภาวะออกซิเจนต่ำระหว่างผ่าตัด (intraoperative desaturation) Yes
        </div>
        <div>ภาวะความดันต่ำระหว่างผ่าตัด (intraoperative hypotension) Yes</div>
        <div>การตรวจติดตามระดับออกซิเจนในสมองด้วย NIRS monitoring Yes </div>
        <div>การตรวจติดตามความลึกการดมยาสลบโดยใช้ BIS monitoring Yes </div>
        <div>ปริมาณเลือดที่เสีย (Intraoperative blood loss (mL)) 500 </div>
        <div>
          การได้รับเลือดในห้องผ่าตัด (Perioperative blood transfusion) Yes{" "}
        </div>
        <div>
          การได้รับเลือดในห้องผ่าตัด (Perioperative blood transfusion) Yes{" "}
        </div>
        <div>ระยะเวลาการผ่าตัด Operative time (min) 30</div>
        <hr />
        <div>คะแนน MOCA test 5</div>
        <div>ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 8</div>
      </div>
      <h5>1 สัปดาห์</h5>
      <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
        <div>คะแนน MOCA test 6</div>
        <div>ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 14</div>
      </div>
      <h5>1 เดือน</h5>
      <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
        <div>คะแนน MOCA test 8</div>
        <div>ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 16</div>
      </div>
      <h5>3 เดือน</h5>
      <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
        <div>คะแนน MOCA test 10</div>
        <div>ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 17</div>
      </div>
      <h5>1 ปี</h5>
      <div className="card my-3 bg-slate-50 flex flex-col gap-1 p-1">
        <div>คะแนน MOCA test 11</div>
        <div>ความสามารถในการใช้ชีวิตประจำวัน (Barthel index score) 20</div>
      </div>
    </div>
  );
};
export default AdminUserDataPage;
