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
  data: PropTypes.shape({
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

BarChartContainer.defaultProps = {
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

export default BarChartContainer;