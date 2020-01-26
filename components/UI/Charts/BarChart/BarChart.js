import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SECONDARY } from '../../../../public/styles/colors';

const BarChartContainer = ({data}) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={SECONDARY} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarChartContainer.propTypes = {
  data: PropTypes.array
};

BarChartContainer.defaultProps = {
  data: []
};

export default BarChartContainer;