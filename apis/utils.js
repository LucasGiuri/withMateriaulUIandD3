export const formatDashboardData = (data) => {
  let obj = {};
  const results = data.reduce((response, item) => {
    const id = item.id;
    if (!obj[id]) {
      obj[id] = {
        id: item.id,
        name: item.name,
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
        count: 0,
        fetchDates: []
      }
      response.push(obj[id]);
    }
    obj[id].count++;
    obj[id].avgPriceAmazon += item.avg_price_amazon;
    obj[id].avgPriceCarethy += item.avg_price_carethy;
    obj[id].avgPriceNotino += item.avg_price_notino;
    obj[id].avgPricePerfumesclub += item.avg_price_perfumesclub;
    obj[id].avgPriceNutritienda += item.avg_price_nutritienda;
    obj[id].avgPriceSephora += item.avg_price_sephora;
    obj[id].avgPriceElcorteingles += item.avg_price_elcorteingles;
    obj[id].avgPriceFundgruben += item.avg_price_fundgrube;
    obj[id].avgPricePrimor += item.avg_price_primor;
    obj[id].avgPriceCarrefour += item.avg_price_primor;
    obj[id].avgPriceMaquillalia += item.avg_price_maquillalia;
    obj[id].avgPriceUlabox += item.avg_price_ulabox;
    obj[id].fetchDates.push(item.fetch_date);
    return response;
  }, []);

  return results;
};

export const formatData = (data) => {
  data.map(item => {
    item.fetch_date = dateFormat(item.fetch_date)
    if (!item.avg_price_amazon) {
      item.avg_price_amazon = 0;
    }
    if (!item.avg_price_carethy) {
      item.avg_price_carethy = 0;
    }
  })
  return data;
};

export const dateFormat = (date) => {
  const year = date.substring(0,4);
  const month = date.substring(5,7);
  const day = date.substring(8, 10);
  const newDate = `${day}/${month}/${year}`;
  return newDate;
};