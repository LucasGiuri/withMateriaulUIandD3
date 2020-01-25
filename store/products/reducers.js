import { combineReducers } from 'redux';
import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL, 
        SORT_BY_NAME, SORT_BY_NUMBER, SEARCH_BY_NAME } from './types';

const sortByname = (key) => {
  let sortOrder = 1;

  if (key[0] === "-") {
      sortOrder = -1;
      key = key.substr(1);
  }

  return (a,b) => sortOrder == -1 ? b[key].localeCompare(a[key]): a[key].localeCompare(b[key]);
};

const sortByNumber = (key) => {
  let sortOrder = 1;

  if (key[0] === "-") {
      sortOrder = -1;
      key = key.substr(1);
  }

  return (a,b) => sortOrder == -1 ? b[key] - a[key] : a[key] - b[key];
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
    case GET_DATA_START:
      return []
    case GET_DATA_SUCCESS: {
      return [...state, ...action.results];
    }
    case SEARCH_BY_NAME: {
      const response = Object.assign(state);
      return searchByName(response, action.name);
    }
    case SORT_BY_NAME: {
      return state.slice().sort(sortByname(action.key));
    }
    case SORT_BY_NUMBER: {
      return state.slice().sort(sortByNumber(action.key))
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
