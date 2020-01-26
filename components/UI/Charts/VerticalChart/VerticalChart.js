import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend } from 'recharts';

const VerticalChartComponent = ({data}) => (
  <div style={{ width: '100%', height: 1200 }}>
    <ResponsiveContainer>
      <ComposedChart
        layout="vertical"
        data={data}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

export default VerticalChartComponent;
