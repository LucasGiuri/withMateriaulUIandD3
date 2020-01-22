import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import freeze from 'redux-freeze';
import thunk from 'redux-thunk';
import apiMiddleware from './apiMiddleware';
import characters from './characters/reducers';

const rootReducer = combineReducers({characters})

const makeStore = (initialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(freeze, thunk, apiMiddleware)))
}

export default makeStore;
