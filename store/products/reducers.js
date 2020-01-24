import { combineReducers } from 'redux';
import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL, SORT_BY, SEARCH_BY_NAME } from './types';

const dynamicSort = (property) => {
  let sortOrder = 1;

  if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      }
      else {
        return a[property].localeCompare(b[property]);
      }        
  }
};

const searchByName = (arr, name) => {
  let newArray = [];
  arr.map(item => {
    if (item.name.toLowerCase().includes(name)) {
      newArray.push(item);
    }
  });
  return newArray;
}

const results = (state = [], action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return [...state, ...action.results];
    }
    case SEARCH_BY_NAME: {
      const response = Object.assign(state);
      return searchByName(response, action.name);
    }
    case SORT_BY: {
      return state.slice().sort(dynamicSort(action.key));
    }
    default:
      return state
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_START:
    case GET_DATA_FAIL:
      return true
    case GET_DATA_SUCCESS:
      return false
    default:
      return state
  }
};

const reducer = combineReducers({
  results,
  isLoading
})

export default reducer;
