import { ReactECharts } from "components/echart";
import { useEffect, useState } from "react";

type InitialFormData = {
  moca: number;
  barthelIndex: number;

  hasDementia: boolean;
  hasStroke: boolean;
  hasDiabetes: boolean;
  hasCardiacSurgery: boolean;

  benzodiazepeneBeforeSurgery: number | null;
  benzodiazepeneDuringSurgery: number | null;

  useDexmedetomidine: boolean;

  hasIntraoperativeDesaturation: boolean;
  hasIntraoperativeHypotension: boolean;

  hasNIRSMonitoring: boolean;
  hasBISMonitoring: boolean;

  intraoperativeBloodLoss: number;

  operativeTime: number;

  hasPerioperativeBloodTransfusion: boolean;

  date: Date;
};

type FormData = {
  moca: number;
  barthelIndex: number;

  date: Date;
};

type AllData = {
  initial: InitialFormData;
  follow: Array<FormData>;
};

const AdminUserDataPage: React.FC = () => {
  const [formData, setFormData] = useState<AllData>();
  const [ready, setIsReady] = useState(false);
  useEffect(() => {
    setFormData({
      initial: {
        date: new Date("2022-01-01T12:00:00+07:00"),

        moca: 30,
        barthelIndex: 60,

        hasDementia: false,
        hasStroke: false,
        hasDiabetes: true,
        hasCardiacSurgery: false,

        benzodiazepeneBeforeSurgery: 10,
        benzodiazepeneDuringSurgery: 20,

        useDexmedetomidine: true,

        hasIntraoperativeDesaturation: false,
        hasIntraoperativeHypotension: false,

        hasNIRSMonitoring: true,
        hasBISMonitoring: true,

        intraoperativeBloodLoss: 300,

        operativeTime: 90,

        hasPerioperativeBloodTransfusion: true,
      },
      follow: [
        {
          date: new Date("2022-01-08T12:00:00+07:00"),
          moca: 20,
          barthelIndex: 40,
        },
        {
          date: new Date("2022-02-01T12:00:00+07:00"),
          moca: 30,
          barthelIndex: 60,
        },
        {
          date: new Date("2022-04-01T12:00:00+07:00"),
          moca: 40,
          barthelIndex: 80,
        },
        {
          date: new Date("2023-01-01T12:00:00+07:00"),
          moca: 50,
          barthelIndex: 90,
        },
      ],
    });

    setIsReady(true);
  }, []);

  return formData ? (
    <div className="p-6">
      <h3>นาย ปุณพจน์ พัฒนปรีชา</h3>
      <h4>แผนภูมิ</h4>
      <div className="card relative bg-slate-100 my-6">
        <ReactECharts
          style={{ width: "1200px", height: "300px" }}
          option={{
            legend: {
              data: ["MOCA", "ADL"],
            },
            tooltip: {
              trigger: "axis",
            },
            xAxis: {
              type: "time",
              boundaryGap: false,
              /*axisLabel: {
                formatter: (value: Date)=> {
                  console.log(value)
                  return value.toISOString();
                },
              },*/
            } as any,
            yAxis: {
              type: "value",
            },
            series: [
              {
                name: "MOCA",
                data: [
                  [formData!.initial.date, formData!.initial.moca],
                  ...formData!.follow.map((f) => [f.date, f.moca]),
                ],
                type: "line",
                areaStyle: {},
              },
              {
                name: "ADL",
                data: [
                  [formData!.initial.date, formData!.initial.barthelIndex],
                  ...formData!.follow.map((f) => [f.date, f.barthelIndex]),
                ],
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
  ) : (
    <div>f</div>
  );
};
export default AdminUserDataPage;
