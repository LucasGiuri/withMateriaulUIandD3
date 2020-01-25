import { dateFormat, formatData } from './utils';

describe('dateFormat', () => {
  it('dateFormat should be return a DD/MM/YYYY', () => {
    const date = "2019-11-19T23:00:00Z";
    expect(dateFormat(date)).toBe("19/11/2019");
  })
});

describe('formatData', () => {
  const dataWithAvgPriceAmazonNull = [{
    id : 1,
    name : "American Crew Acondicionador Uso Diario 250 ml",
    fetch_date : "2019-11-19T23:00:00Z",
    avg_price_amazon : null,
    avg_price_carethy : 5.08
  }];

  const dataWithAvgPriceACarethyNull = [{
    id : 1,
    name : "American Crew Acondicionador Uso Diario 250 ml",
    fetch_date : "2019-11-19T23:00:00Z",
    avg_price_amazon : 4.87,
    avg_price_carethy : null
  }];

  const dataWithAvgPricesNull = [{
    id : 1,
    name : "American Crew Acondicionador Uso Diario 250 ml",
    fetch_date : "2019-11-19T23:00:00Z",
    avg_price_amazon : null,
    avg_price_carethy : null
  }];

  const resultWithAvgPriceAmazon = [{
    id : 1,
    name : "American Crew Acondicionador Uso Diario 250 ml",
    fetch_date : "19/11/2019",
    avg_price_amazon : 0,
    avg_price_carethy : 5.08
  }];

  const resultWithAvgPrices = [{
    id : 1,
    name : "American Crew Acondicionador Uso Diario 250 ml",
    fetch_date : "19/11/2019",
    avg_price_amazon : 0,
    avg_price_carethy : 0
  }];

  const resultWithAvgPriceCarethy = [{
    id : 1,
    name : "American Crew Acondicionador Uso Diario 250 ml",
    fetch_date : "19/11/2019",
    avg_price_amazon : 4.87,
    avg_price_carethy : 0
  }];

  it('formatData should be return an object without null values', () => {
    expect(formatData(dataWithAvgPriceAmazonNull)).toEqual(resultWithAvgPriceAmazon);
    expect(formatData(dataWithAvgPriceACarethyNull)).toEqual(resultWithAvgPriceCarethy);
    expect(formatData(dataWithAvgPricesNull)).toEqual(resultWithAvgPrices);
  })
});