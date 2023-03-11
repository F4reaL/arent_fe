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
    uv: 246,
    pv: 246,
    
  },
  {
    name: "7月",
    uv: 225,
    pv: 236,
    
  },
  {
    name: "8月",
    uv: 182,
    pv: 165,
    
  },
  {
    name: "9月",
    uv: 174,
    pv: 192,
    
  },
  {
    name: "10月",
    uv: 132,
    pv: 178,
    
  },
  {
    name: "11月",
    uv: 128,
    pv: 148,
    
  },
  {
    name: "12月",
    uv: 102,
    pv: 178,
    
  },
  {
    name: "1月",
    uv: 95,
    pv: 139,
    
  },
  {
    name: "2月",
    uv: 81,
    pv: 119,
    
  },
  {
    name: "3月",
    uv: 46,
    pv: 110,
    
  },
  {
    name: "4月",
    uv: 35,
    pv: 98,
  },
  {
    name: "5月",
    uv: 24,
    pv: 110,
    
  },
];
// const DOTUV = ()=>{
//   return <div className="w-2 h-2 rounded-full bg-secondary300"></div>
// }
// const DOTPV = (props: any)=>{
//   const { cx, cy } = props;
//   console.log("ccx)
//   return <div className="w-2 h-2 rounded-full bg-primary300"></div>
// }
interface IProps{
  width: number
  height: number
  className?: string
}
const ChartComponent = ({width, height, className}: IProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="horizontal"
          width={width}
          height={height}
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
          <YAxis  type="number" />
          <Tooltip />
          {/* <Legend /> */}
          <Line dataKey="pv" stroke="#FFCC21"  />
          <Line dataKey="uv" stroke="#8FE9D0" />
        </LineChart>
      </ResponsiveContainer>
  )
};

export default ChartComponent;
