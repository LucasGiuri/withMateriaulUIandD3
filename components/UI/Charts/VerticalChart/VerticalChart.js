import {BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer } from 'recharts';
import { SECONDARY } from '../../../../public/styles/colors';

const VerticalChartComponent = ({data}) => (
  <div style={{ width: '100%', height: 1200 }}>
    <ResponsiveContainer>
      <BarChart
        layout="vertical"
        data={data}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="value" barSize={20} fill={SECONDARY} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default VerticalChartComponent;
