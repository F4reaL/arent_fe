import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "6月",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "7月",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "8月",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "9月",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "10月",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "11月",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "12月",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "1月",
    uv: 2532,
    pv: 3212,
    amt: 2100,
  },
  {
    name: "2月",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "3月",
    uv: 1244,
    pv: 623,
    amt: 2100,
  },
  {
    name: "4月",
    uv: 3490,
    pv: 4215,
    amt: 2100,
  },
  {
    name: "5月",
    uv: 3213,
    pv: 142,
    amt: 2100,
  },
];
const ChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="horizontal"
          width={572}
          height={312}
          data={data}
          margin={{
            top: 12,
            right: 100,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="0" horizontal={false} />
          <XAxis  dataKey="name"  type="category"  tick={{stroke: 'white', strokeWidth: 0}} tickSize={1} axisLine={false}/>
          <YAxis  type="number"  />
          <Tooltip />
          {/* <Legend /> */}
          <Line dataKey="pv" stroke="#FFCC21" />
          <Line dataKey="uv" stroke="#8FE9D0" />
        </LineChart>
      </ResponsiveContainer>
  )
};

export default ChartComponent;
