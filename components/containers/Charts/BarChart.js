import PropTypes from 'prop-types';
import BarChartComponent from '../../UI/Charts/BarChart/BarChart';

const BarChart = ({data}) => {
  const {
    count, avgPriceAmazon, avgPriceNotino, avgPriceCarethy, avgPricePerfumesclub,
    avgPriceNutritienda, avgPriceSephora, avgPriceElcorteingles, avgPriceFundgruben,
    avgPricePrimor, avgPriceCarrefour, avgPriceMaquillalia,avgPriceUlabox,
  } = data;

  let newData = [];

  newData.push(
    {name: 'Amazon', value: avgPriceAmazon !== 0 ? avgPriceAmazon / count: 0},
    {name: 'Notino', value: avgPriceNotino !== 0 ? avgPriceNotino / count: 0},
    {name: 'Carethy', value: avgPriceCarethy !== 0 ? avgPriceCarethy / count: 0},
    {name: 'Club', value: avgPricePerfumesclub !== 0 ? avgPricePerfumesclub / count: 0},
    {name: 'Nutritienda', value: avgPriceNutritienda !== 0 ? avgPriceNutritienda / count: 0},
    {name: 'Sephora', value: avgPriceSephora !== 0 ? avgPriceSephora / count: 0},
    {name: 'El Corte Inglés', value: avgPriceElcorteingles !== 0 ? avgPriceElcorteingles / count: 0},
    {name: 'Fundgruben', value: avgPriceFundgruben !== 0 ? avgPriceFundgruben / count: 0},
    {name: 'Primor', value: avgPricePrimor !== 0 ? avgPricePrimor / count: 0},
    {name: "Carrefour", value: avgPriceCarrefour !== 0 ? avgPriceCarrefour / count: 0},
    {name: "Maquillalia", value: avgPriceMaquillalia !== 0 ? avgPriceMaquillalia / count: 0},
    {name: "Ulabox", value: avgPriceUlabox !== 0 ? avgPriceUlabox / count: 0}
  );

  return (
    <BarChartComponent data={newData} />
  );
};

BarChart.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    avgPriceAmazon: PropTypes.number,
    avgPriceNotino: PropTypes.number,
    avgPriceCarethy: PropTypes.number,
    avgPricePerfumesclub: PropTypes.number,
    avgPriceNutritienda: PropTypes.number,
    avgPriceSephora: PropTypes.number,
    avgPriceElcorteingles: PropTypes.number,
    avgPriceFundgruben: PropTypes.number,
    avgPricePrimor: PropTypes.number,
    avgPriceCarrefour: PropTypes.number,
    avgPriceMaquillalia: PropTypes.number,
    avgPriceUlabox: PropTypes.number,
  })
};

BarChart.defaultProps = {
  data: {
    count: 0,
    avgPriceAmazon: 0,
    avgPriceNotino: 0,
    avgPriceCarethy: 0,
    avgPricePerfumesclub: 0,
    avgPriceNutritienda: 0,
    avgPriceSephora: 0,
    avgPriceElcorteingles: 0,
    avgPriceFundgruben: 0,
    avgPricePrimor: 0,
    avgPriceCarrefour: 0,
    avgPriceMaquillalia: 0,
    avgPriceUlabox: 0,
  }
};

export default BarChart;