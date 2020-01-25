import { GET_DATA, SORT_BY_NAME, SORT_BY_NUMBER, SEARCH_BY_NAME } from './types';
import { getProducts } from '../../apis/services';
import apiCall from '../apiCall';

const formatData = (data) => {
  data.map(item => {
    item.fetch_date = dateFormat(item.fetch_date)
    if (!item.avg_price_amazon) {
      item.avg_price_amazon = 0;
    }
    if (!item.sortByPriceCarethy) {
      item.sortByPriceCarethy = 0;
    }
  })
  return data;
};

const dateFormat = (date) => {
  const year = date.substring(0,4);
  const month = date.substring(5,7);
  const day = date.substring(8, 10);
  const newDate = `${day}/${month}/${year}`;
  return newDate;
};

export const getData = () => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_DATA,
      () => getProducts(),
      (response) => {
        const data = response.data;
        const results = formatData(data);

        return {
          results
        }
      }
    ))
  }
};

export const searchByName = (name) => {
  return {
    type: SEARCH_BY_NAME,
    name: name
  }
}

export const sortByNumber = (key) => {
  return {
    type: SORT_BY_NUMBER,
    key: key
  }
};

export const sortByName = (key) => {
  return {
    type: SORT_BY_NAME,
    key: key
  }
};