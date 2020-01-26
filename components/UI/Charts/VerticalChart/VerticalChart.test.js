import renderer from 'react-test-renderer';
import VerticalChart from './VerticalChart';
import 'jest-styled-components';

describe('VerticalChart', () => {
  const data = [{
      id: 1,
      name: 'American Crew Acondicionador Uso Diario 250 ml',
      avgPriceAmazon: 200.07999999999998,
      avgPriceNotino: 212.9999999999999,
      avgPriceCarethy: 160.86,
      avgPricePerfumesclub: 284.44000000000005,
      avgPriceNutritienda: 123.89999999999995,
      avgPriceSephora: 0,
      avgPriceElcorteingles: 0,
      avgPriceFundgruben: 0,
      avgPricePrimor: 0,
      avgPriceCarrefour: 0,
      avgPriceMaquillalia: 0,
      avgPriceUlabox: 0,
      count: 30
    },
    {
      id: 2,
      name: 'American Crew Balsamo Facial SFP15 170 ml',
      avgPriceAmazon: 550.2500000000001,
      avgPriceNotino: 404.8,
      avgPriceCarethy: 584.9300000000002,
      avgPricePerfumesclub: 307.51000000000005,
      avgPriceNutritienda: 0,
      avgPriceSephora: 0,
      avgPriceElcorteingles: 0,
      avgPriceFundgruben: 0,
      avgPricePrimor: 0,
      avgPriceCarrefour: 0,
      avgPriceMaquillalia: 0,
      avgPriceUlabox: 0,
      count: 30
    }, 
    { 
      id: 3,
      name: 'American Crew Champú Anticaida 250 ml',
      avgPriceAmazon: 0,
      avgPriceNotino: 0,
      avgPriceCarethy: 216.0499999999999,
      avgPricePerfumesclub: 174.99999999999997,
      avgPriceNutritienda: 272.99999999999994,
      avgPriceSephora: 0,
      avgPriceElcorteingles: 0,
      avgPriceFundgruben: 0,
      avgPricePrimor: 328.49999999999983,
      avgPriceCarrefour: 328.49999999999983,
      avgPriceMaquillalia: 0,
      avgPriceUlabox: 0,
      count: 30,
    }
  ];

  it('VerticalChart basic render snapshoot', () => {
    const component = renderer.create(<VerticalChart data={data} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
