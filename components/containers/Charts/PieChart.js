import PieChartComponent from '../../UI/Charts/PieChart/PieChart';

const PieChart = ({data}) => {
  let newData = [];
  data.map(product => {
    newData.push({name: product.name, value: product.count})
  });

  return (
    <PieChartComponent data={newData} />
  )
}

export default PieChart;