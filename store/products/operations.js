import { GET_DATA, SORT_BY_NAME, SORT_BY_NUMBER, SEARCH_BY_NAME, GET_DASHBOARD_DATA } from './types';
import { getProducts } from '../../apis/services';
import { formatData, formatDashboardData } from '../../apis/utils';
import apiCall from '../apiCall';

export const getDashboardData = () => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_DASHBOARD_DATA,
      () => getProducts(),
      (response) => {
        const results = formatDashboardData(response.data);

        return {
          results
        }
      }
    ))
  }
};

export const getData = () => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_DATA,
      () => getProducts(),
      (response) => {
        const results = formatData(response.data);

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