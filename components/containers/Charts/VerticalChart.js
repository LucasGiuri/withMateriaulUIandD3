import PropTypes from 'prop-types';
import { Fragment } from "react";
import VerticalChartComponent from "../../UI/Charts/VerticalChart/VerticalChart";
import Title from "../../UI/Title/Title";

const VerticalChart = ({data}) => {
  let newData = [
    {id: "Amazon", data: []},
    {id: "Carethy", data: []},
    {id: "Carrefour", data: []},
    {id: "Sephora", data: []},
    {id: "El corte inglés", data: []},
  ];

  data.map(product => {
    const { name, avgPriceAmazon, count } = product;
    newData[0].data.push({name: name, value: avgPriceAmazon !== 0 ? avgPriceAmazon / count: 0})
  });

  data.map(product => {
    const { name, avgPriceCarethy, count } = product;
    newData[1].data.push({name: name, value: avgPriceCarethy !== 0 ? avgPriceCarethy / count: 0})
  });

  data.map(product => {
    const { name, avgPriceCarrefour, count } = product;
    newData[2].data.push({name: name, value: avgPriceCarrefour !== 0 ? avgPriceCarrefour / count: 0})
  });

  data.map(product => {
    const { name, avgPriceSephora, count } = product;
    newData[3].data.push({name: name, value: avgPriceSephora !== 0 ? avgPriceSephora / count: 0})
  });

  data.map(product => {
    const { name, avgPriceElcorteingles, count } = product;
    newData[4].data.push({name: name, value: avgPriceElcorteingles !== 0 ? avgPriceElcorteingles / count: 0})
  });

  return (
    <Fragment>
      {newData.map(data => (
        <div key={data.id}>
          <Title text={data.id}/>
          <VerticalChartComponent data={data.data} />
        </div>
      ))}
    </Fragment>
  )
};

VerticalChart.propTypes = {
  data: PropTypes.array
};

VerticalChart.defaultProps = {
  data: []
};

export default VerticalChart;