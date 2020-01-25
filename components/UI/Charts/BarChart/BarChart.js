import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartContainer = ({data}) => {
  return (
    <BarChart width={700} height={300}data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
}

export default BarChartContainer;