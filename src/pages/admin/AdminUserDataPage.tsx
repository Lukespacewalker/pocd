import { ReactECharts } from "@components/echart";
import { useEffect, useState } from "react";
import { Timeline, List, Typography } from "antd";

const { Title } = Typography;

class FormData {
  public moca: number = 0;
  public barthelIndex: number = 0;

  public date: Date = new Date();

  public constructor(init?: Partial<FormData>) {
    Object.assign(this, init);
  }
}

class InitialFormData extends FormData {
  public constructor(init?: Partial<InitialFormData>) {
    super();
    Object.assign(this, init);
  }

  public hasDementia: boolean = false;
  public hasStroke: boolean = false;
  public hasDiabetes: boolean = false;
  public hasCardiacSurgery: boolean = false;

  public benzodiazepeneBeforeSurgery?: number;
  public benzodiazepeneDuringSurgery?: number;

  public useDexmedetomidine: boolean = false;

  public hasIntraoperativeDesaturation: boolean = false;
  public hasIntraoperativeHypotension: boolean = false;

  public hasNIRSMonitoring: boolean = false;
  public hasBISMonitoring: boolean = false;

  public intraoperativeBloodLoss: number = 0;

  public operativeTime: number = 0;

  public hasPerioperativeBloodTransfusion: boolean = false;
}

const FormViewer: React.FC<{ formData: FormData }> = ({ formData }) => {
  let data: Array<{ title: string; value?: boolean | number }> = [
    {
      title: "ความสามารถในการใช้ชีวิตประจำวัน Barthel index score",
      value: formData.barthelIndex,
    },
    {
      title: "คะแนน MOCA",
      value: formData.moca,
    },
  ];

  if (formData instanceof InitialFormData) {
    let ifd = formData as InitialFormData;
    data = [
      ...data,
      {
        title: "ประวัติ Dementia",
        value: ifd.hasDementia,
      },
      {
        title: "ประวัติ Stoke",
        value: ifd.hasStroke,
      },
      {
        title: "ประวัติ Dementia",
        value: ifd.hasDiabetes,
      },
      {
        title: "ประวัติ Cardiac Surgery",
        value: ifd.hasCardiacSurgery,
      },
      {
        title: "ปริมาณ mg ของยา Benzodiazepene ที่ใช้ก่อนผ่าตัด",
        value: ifd.benzodiazepeneBeforeSurgery,
      },
      {
        title: "ปริมาณ mg ของยา Benzodiazepene ที่ใช้ระหว่างผ่าตัด",
        value: ifd.benzodiazepeneDuringSurgery,
      },
      {
        title: "ยา Dexmedetomidine ระหว่างผ่าตัด",
        value: ifd.useDexmedetomidine,
      },
      {
        title: "ประวัติ Desaturation ระหว่างผ่าตัด",
        value: ifd.hasIntraoperativeDesaturation,
      },
      {
        title: "ประวัติ Hypotension ระหว่างผ่าตัด",
        value: ifd.hasIntraoperativeHypotension,
      },
      {
        title: "ประวัติได้รับเลือดระหว่างผ่าตัด",
        value: ifd.hasPerioperativeBloodTransfusion,
      },
      {
        title: "NIRS Monitoring",
        value: ifd.hasNIRSMonitoring,
      },
      {
        title: "BIS Monitoring",
        value: ifd.hasBISMonitoring,
      },
      {
        title: "ปริมาณเลือดที่เสียระหว่างผ่าตัด",
        value: ifd.intraoperativeBloodLoss,
      },
      {
        title: "เวลาที่ใช้ผ่าตัด",
        value: ifd.operativeTime,
      },
    ];
  }

  const valueRenderer = (value?: boolean | number) => {
    if (typeof value == "number") {
      return value;
    } else if (typeof value == "boolean") {
      return value ? "ใช่" : "ไม่ใช่";
    } else {
      return "ไม่มี";
    }
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={valueRenderer(item.value)}
            title={item.title}
          />
        </List.Item>
      )}
    />
  );
};

const AdminUserDataPage: React.FC = () => {
  const [formData, setFormData] = useState<Array<FormData>>();
  const [ready, setIsReady] = useState(false);
  useEffect(() => {
    let seeds: Array<FormData> = [
      new InitialFormData({
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
      }),
      new FormData({
        date: new Date("2022-01-08T12:00:00+07:00"),
        moca: 20,
        barthelIndex: 40,
      }),
      new FormData({
        date: new Date("2022-02-01T12:00:00+07:00"),
        moca: 30,
        barthelIndex: 60,
      }),
      new FormData({
        date: new Date("2022-04-01T12:00:00+07:00"),
        moca: 40,
        barthelIndex: 80,
      }),
      new FormData({
        date: new Date("2023-01-01T12:00:00+07:00"),
        moca: 50,
        barthelIndex: 90,
      }),
    ];
    setFormData(seeds);
    setIsReady(true);
  }, []);

  return formData ? (
    <section className="p-6">
      <Title>นาย ปุณพจน์ พัฒนปรีชา</Title>
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
                data: formData!.map((f) => [f.date, f.moca]),
                type: "line",
                areaStyle: {},
              },
              {
                name: "ADL",
                data: formData!.map((f) => [f.date, f.barthelIndex]),
                type: "line",
                color: "#77DD77",
                areaStyle: {},
              },
            ],
          }}
        ></ReactECharts>
      </div>

      <Title level={2}>ประวัติการตอบแบบสอบถาม</Title>
      <Timeline
        mode="alternate"
        items={formData.map((fd) => ({
          label: fd.date.toLocaleDateString("th-TH", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }),
          children: <FormViewer formData={fd} />,
        }))}
      />
    </section>
  ) : (
    <div>f</div>
  );
};
export default AdminUserDataPage;
