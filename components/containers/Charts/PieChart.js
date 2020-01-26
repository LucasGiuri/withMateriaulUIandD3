import PropTypes from 'prop-types';
import PieChartComponent from '../../UI/Charts/PieChart/PieChart';

const PieChart = ({data}) => {
  let newData = [];
  data.map(product => {
    newData.push({name: product.name, value: product.count})
  });

  return (
    <PieChartComponent data={newData} />
  )
};

PieChart.propTypes = {
  data: PropTypes.array
};

PieChart.defaultProps = {
  data: []
};

export default PieChart;