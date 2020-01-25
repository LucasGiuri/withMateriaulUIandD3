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
}

export default BarChart;